# Mictoo VPS Worker

Self-hosted Whisper worker that processes the **authenticated-user queue**
spillover from Vercel — i.e. transcription jobs whose Groq attempts have
been exhausted by daily-cap. Runs on a cheap CPU VPS using `faster-whisper`.

## What it does

- Polls Upstash Redis for jobs pushed to the VPS-spill queue
- Downloads the audio blob from Vercel Blob storage
- Transcribes with `faster-whisper medium` (int8 quantization) on CPU
- Writes the result back to the same Redis job hash (so the client polling
  `/api/transcribe-status/[jobId]` picks it up exactly like a Groq-served job)
- Inserts a row into the Supabase `transcripts` table so the result also
  appears in the user's `/history`
- Deletes the blob from Vercel Blob (cleanup)

## Why CPU is OK here

This worker only sees **authenticated users in the queue** (not the sync
path). They've already shown patience by being in the queue, so a 1× realtime
transcription latency is acceptable. Quality is roughly comparable to OpenAI's
`whisper-1` API (which we're replacing on this path), so users don't see
a degradation.

## Target VPS

- Ubuntu 24.04
- 4 vCPU / 8 GB RAM / 160 GB disk (or similar)
- No GPU needed
- Tested on Hetzner CX32 / CPX31 class machines

## Quick start

```bash
# As root or via sudo
apt update && apt install -y python3.11 python3.11-venv python3-pip ffmpeg build-essential

# Worker user (don't run as root)
useradd -m -s /bin/bash mictoo
su - mictoo

# Inside mictoo's home
git clone https://github.com/dominovd/mictoo.git
cd mictoo/vps-worker

python3.11 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# First run downloads the model (~1.5 GB, takes 1-2 minutes)
python -c "from faster_whisper import WhisperModel; WhisperModel('medium', compute_type='int8')"
```

## Configuration

Create `/home/mictoo/mictoo/vps-worker/.env` with:

```bash
# Same Upstash Redis as Vercel — find these in Supabase / Vercel env vars
UPSTASH_REDIS_REST_URL=https://...upstash.io
UPSTASH_REDIS_REST_TOKEN=AX...

# Supabase service-role key — needed to write transcripts.user_id rows
# bypassing RLS. NEVER commit this anywhere.
SUPABASE_URL=https://mqtedelgcbxvslhwyubu.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# Vercel Blob read/write — needed to delete blobs after processing
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...

# Whisper model. Recommended: medium for general use, small for English-only.
WHISPER_MODEL=medium
WHISPER_COMPUTE_TYPE=int8

# How often (seconds) to poll the queue for new jobs. 10s is a good balance.
POLL_INTERVAL_SECONDS=10
```

Set strict permissions: `chmod 600 .env`.

## Run as a systemd service

Create `/etc/systemd/system/mictoo-worker.service`:

```ini
[Unit]
Description=Mictoo VPS Whisper worker
After=network.target

[Service]
Type=simple
User=mictoo
WorkingDirectory=/home/mictoo/mictoo/vps-worker
Environment=PYTHONUNBUFFERED=1
EnvironmentFile=/home/mictoo/mictoo/vps-worker/.env
ExecStart=/home/mictoo/mictoo/vps-worker/venv/bin/python worker.py
Restart=on-failure
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
```

Enable + start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable mictoo-worker
sudo systemctl start mictoo-worker

# Watch logs
journalctl -u mictoo-worker -f
```

## What to look for in logs

- `[vps-worker] booted with model=medium compute_type=int8` — startup
- `[vps-worker] idle` — no jobs, normal
- `[vps-worker] claimed jobId=...` — picked up a job
- `[vps-worker] transcribed jobId=... duration=12.3s audio_seconds=180.0` — success
- `[vps-worker] saved to history user_id=... transcript_id=...` — DB write OK
- `[vps-worker] ERROR ...` — investigate

## Updating the worker

```bash
su - mictoo
cd ~/mictoo
git pull
sudo systemctl restart mictoo-worker
```

## Security notes

- Worker runs as unprivileged `mictoo` user (not root)
- No inbound ports needed — worker only makes outbound HTTPS to Upstash,
  Supabase, and Vercel Blob
- `.env` is `chmod 600` and never logged
- Recommend basic ufw firewall: `ufw default deny incoming; ufw allow 22/tcp; ufw enable`
- Recommend fail2ban for SSH brute-force protection
- Consider rotating Supabase service-role key periodically (Supabase
  Dashboard → Project Settings → API → "Reset service role key")
