"""
Mictoo VPS Whisper worker.

Polls Upstash Redis for authenticated-user spillover jobs (pushed by Vercel
after Groq daily-cap exhaustion), transcribes them with faster-whisper on
CPU, writes results back to the same job hash, and saves to Supabase
history. See README.md for setup.
"""

from __future__ import annotations

import json
import os
import sys
import tempfile
import time
import traceback
from datetime import datetime, timezone
from pathlib import Path

import requests
from dotenv import load_dotenv
from faster_whisper import WhisperModel
from supabase import create_client
from upstash_redis import Redis

# ── Config ───────────────────────────────────────────────────────────────────

load_dotenv()

UPSTASH_URL = os.environ["UPSTASH_REDIS_REST_URL"]
UPSTASH_TOKEN = os.environ["UPSTASH_REDIS_REST_TOKEN"]
SUPABASE_URL = os.environ["SUPABASE_URL"]
SUPABASE_KEY = os.environ["SUPABASE_SERVICE_ROLE_KEY"]
BLOB_TOKEN = os.environ["BLOB_READ_WRITE_TOKEN"]

WHISPER_MODEL = os.environ.get("WHISPER_MODEL", "medium")
WHISPER_COMPUTE_TYPE = os.environ.get("WHISPER_COMPUTE_TYPE", "int8")
POLL_INTERVAL_SECONDS = int(os.environ.get("POLL_INTERVAL_SECONDS", "10"))

# Queue keys must match what Vercel writes — see lib/queue.js in the Next app.
VPS_QUEUE_KEY = "mictoo:transcribe:queue:vps"
JOB_KEY_PREFIX = "mictoo:transcribe:job:"
JOB_TTL_SECONDS = 60 * 60  # 1 hour — matches the Vercel side


def log(msg: str) -> None:
    """Single-line stdout log (systemd-friendly)."""
    print(f"[vps-worker] {msg}", flush=True)


# ── Clients ──────────────────────────────────────────────────────────────────

redis = Redis(url=UPSTASH_URL, token=UPSTASH_TOKEN)
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)


# ── Helpers ──────────────────────────────────────────────────────────────────


def job_key(job_id: str) -> str:
    return f"{JOB_KEY_PREFIX}{job_id}"


def claim_next_job() -> tuple[str | None, dict | None]:
    """Atomically pop the oldest job id from the VPS queue and load its hash.
    Returns (job_id, job_data) or (None, None) when the queue is empty."""
    job_id = redis.rpop(VPS_QUEUE_KEY)
    if not job_id:
        return None, None
    raw = redis.hgetall(job_key(job_id))
    if not raw:
        log(f"WARN: queued job {job_id} has no hash (TTL race); skipping")
        return None, None
    # Mark as processing immediately.
    redis.hset(
        job_key(job_id),
        values={
            "status": "processing",
            "startedAt": str(int(time.time() * 1000)),
        },
    )
    redis.expire(job_key(job_id), JOB_TTL_SECONDS)
    return job_id, raw


def set_job_result(
    job_id: str, *, text: str, segments: list[dict], language: str, transcript_id: str | None
) -> None:
    """Write the completed transcription back to the job hash so the client's
    /api/transcribe-status poll picks it up."""
    redis.hset(
        job_key(job_id),
        values={
            "status": "completed",
            "completedAt": str(int(time.time() * 1000)),
            "text": text,
            "segments": json.dumps(segments),
            "detectedLanguage": language or "",
            "transcriptId": transcript_id or "",
        },
    )
    redis.expire(job_key(job_id), JOB_TTL_SECONDS)


def set_job_error(job_id: str, message: str) -> None:
    redis.hset(
        job_key(job_id),
        values={
            "status": "failed",
            "completedAt": str(int(time.time() * 1000)),
            "error": message,
        },
    )
    redis.expire(job_key(job_id), JOB_TTL_SECONDS)


def download_blob(blob_url: str) -> Path:
    """Download the audio file to a temp path and return it. Caller is
    responsible for cleanup. Validates the URL is a Vercel Blob host."""
    if ".public.blob.vercel-storage.com" not in blob_url:
        raise ValueError(f"refusing to fetch non-Vercel-Blob URL: {blob_url}")
    suffix = Path(blob_url.split("?")[0]).suffix or ".bin"
    fd, tmp_path = tempfile.mkstemp(prefix="mictoo-", suffix=suffix)
    os.close(fd)
    with requests.get(blob_url, stream=True, timeout=120) as r:
        r.raise_for_status()
        with open(tmp_path, "wb") as f:
            for chunk in r.iter_content(chunk_size=1024 * 256):
                f.write(chunk)
    return Path(tmp_path)


def delete_blob(blob_url: str) -> None:
    """Best-effort delete of the blob via Vercel Blob API. Mirrors what
    /api/transcribe does in its finally block. Logs but doesn't raise."""
    try:
        r = requests.delete(
            "https://blob.vercel-storage.com/delete",
            headers={
                "Authorization": f"Bearer {BLOB_TOKEN}",
                "Content-Type": "application/json",
            },
            json={"urls": [blob_url]},
            timeout=20,
        )
        if r.status_code >= 300:
            log(f"WARN: blob delete returned {r.status_code}: {r.text[:200]}")
    except Exception as e:
        log(f"WARN: blob delete failed: {e}")


def save_to_history(
    *,
    user_id: str,
    file_name: str,
    file_size: int | None,
    file_type: str | None,
    text: str,
    segments: list[dict],
    language: str | None,
    duration_seconds: float | None,
) -> str | None:
    """Insert a row into public.transcripts. Returns the new row's id."""
    try:
        res = (
            supabase.table("transcripts")
            .insert(
                {
                    "user_id": user_id,
                    "file_name": file_name,
                    "file_size": file_size,
                    "file_type": file_type,
                    "language": language,
                    "text": text,
                    "segments": segments,
                    "duration_seconds": duration_seconds,
                    "source": "vps",
                }
            )
            .execute()
        )
        rows = getattr(res, "data", None) or []
        if rows:
            return rows[0].get("id")
    except Exception as e:
        log(f"WARN: supabase insert failed: {e}")
    return None


# ── Whisper ──────────────────────────────────────────────────────────────────

log(f"loading whisper model={WHISPER_MODEL} compute_type={WHISPER_COMPUTE_TYPE}...")
_model = WhisperModel(
    WHISPER_MODEL,
    device="cpu",
    compute_type=WHISPER_COMPUTE_TYPE,
    cpu_threads=int(os.environ.get("WHISPER_CPU_THREADS", "0")),  # 0 = auto
)
log(f"booted with model={WHISPER_MODEL} compute_type={WHISPER_COMPUTE_TYPE}")


def transcribe(audio_path: Path, language_hint: str | None) -> tuple[str, list[dict], str]:
    """Run faster-whisper. Returns (full_text, segments_list, detected_language).
    Segments shape matches what the Vercel /api/transcribe route produces, so
    the client's existing toSRT / toVTT / paragraph splitting all work as-is."""
    # language hint is the user's selection in the UI (e.g. 'ru'). When empty
    # we let Whisper auto-detect via the first 30s.
    kw = {}
    if language_hint and language_hint.strip():
        kw["language"] = language_hint.strip()

    segments_iter, info = _model.transcribe(
        str(audio_path),
        beam_size=5,
        vad_filter=True,
        vad_parameters={"min_silence_duration_ms": 500},
        **kw,
    )

    segments: list[dict] = []
    text_parts: list[str] = []
    for seg in segments_iter:
        text_parts.append(seg.text)
        segments.append(
            {
                "start": float(seg.start),
                "end": float(seg.end),
                "text": seg.text,
            }
        )

    full_text = "".join(text_parts).strip()
    # Whisper returns ISO codes ("ru", "en"). The rest of the app uses full
    # English names ("russian", "english") since OpenAI/Groq verbose_json
    # gives those. Convert for consistency.
    _ISO_TO_NAME = {
        "en": "english", "ru": "russian", "uk": "ukrainian", "fr": "french",
        "de": "german", "es": "spanish", "pt": "portuguese", "it": "italian",
        "nl": "dutch", "pl": "polish", "tr": "turkish", "ja": "japanese",
        "ko": "korean", "zh": "chinese", "ar": "arabic", "hi": "hindi",
        "cs": "czech", "sv": "swedish", "fi": "finnish", "no": "norwegian",
        "da": "danish", "he": "hebrew", "id": "indonesian", "th": "thai",
        "vi": "vietnamese", "el": "greek", "hu": "hungarian", "ro": "romanian",
        "ms": "malay",
    }
    detected = _ISO_TO_NAME.get(info.language, info.language) if info.language else ""
    return full_text, segments, detected


# ── Main loop ────────────────────────────────────────────────────────────────


def process_one_job() -> bool:
    """Try to process a single job. Returns True if a job was handled
    (success or failure), False if the queue was empty."""
    job_id, data = claim_next_job()
    if not job_id or not data:
        return False

    blob_url = data.get("blobUrl") or ""
    user_id = data.get("userId") or ""
    file_name = data.get("fileName") or "audio.mp3"
    file_type = data.get("fileType") or "audio/mpeg"
    file_size_raw = data.get("fileSize") or "0"
    try:
        file_size = int(file_size_raw)
    except (TypeError, ValueError):
        file_size = 0
    language_hint = data.get("language") or ""

    log(f"claimed jobId={job_id} userId={user_id or '-'} file={file_name} size={file_size}")

    tmp_path: Path | None = None
    started = time.time()
    try:
        if not blob_url:
            raise ValueError("job has no blobUrl")

        tmp_path = download_blob(blob_url)
        text, segments, language = transcribe(tmp_path, language_hint)
        duration_seconds = segments[-1]["end"] if segments else None
        elapsed = time.time() - started
        log(
            f"transcribed jobId={job_id} elapsed={elapsed:.1f}s "
            f"audio_seconds={duration_seconds or 0:.1f} segments={len(segments)} "
            f"language={language}"
        )

        transcript_id: str | None = None
        if user_id:
            transcript_id = save_to_history(
                user_id=user_id,
                file_name=file_name,
                file_size=file_size or None,
                file_type=file_type,
                text=text,
                segments=segments,
                language=language,
                duration_seconds=duration_seconds,
            )
            if transcript_id:
                log(f"saved to history jobId={job_id} transcript_id={transcript_id}")

        set_job_result(
            job_id,
            text=text,
            segments=segments,
            language=language,
            transcript_id=transcript_id,
        )

        # Cleanup blob — same lifecycle as the Vercel sync path.
        delete_blob(blob_url)
        return True

    except Exception as e:
        log(f"ERROR jobId={job_id}: {e}")
        traceback.print_exc()
        set_job_error(job_id, str(e) or "Transcription failed.")
        # Clean up blob even on failure so we don't leak storage.
        if blob_url:
            delete_blob(blob_url)
        return True
    finally:
        if tmp_path is not None and tmp_path.exists():
            try:
                tmp_path.unlink()
            except OSError:
                pass


def main() -> None:
    log(f"poll interval = {POLL_INTERVAL_SECONDS}s, queue = {VPS_QUEUE_KEY}")
    consecutive_idles = 0
    while True:
        try:
            handled = process_one_job()
        except Exception as e:
            log(f"FATAL outer loop error: {e}")
            traceback.print_exc()
            time.sleep(POLL_INTERVAL_SECONDS)
            continue

        if handled:
            consecutive_idles = 0
            # Loop again immediately — more jobs may be waiting.
            continue

        consecutive_idles += 1
        if consecutive_idles == 1:
            log("idle")
        time.sleep(POLL_INTERVAL_SECONDS)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        log("stopped via SIGINT")
        sys.exit(0)
