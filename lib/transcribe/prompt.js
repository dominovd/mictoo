// Whisper has a documented tendency to hallucinate text on silent or noisy
// intros — e.g. produces "Thank you for watching" or garbled non-English
// phrases before locking onto real speech. The official Whisper docs recommend
// passing a short generic `prompt` to anchor the model's expectation of the
// audio's content type. This dramatically reduces silent-intro hallucination
// across providers (Groq and OpenAI both use Whisper-class models that honour
// this; Deepgram and Replicate's incredibly-fast-whisper don't expose the
// parameter, so they keep their default behaviour).
//
// Observed signature of the bug (2026-05-19 analysis of Vercel logs +
// `transcripts` table): gibberish like "Ina nosa manesa teia..." appearing as
// the first few segments of long religious/educational recordings before
// correct English text starts. Same fingerprint across multiple unrelated
// files from the same user → Whisper failing on silent intro, not random
// audio noise. Confirmed for at least 7 users, ~21% of rows in `transcripts`
// have language=NULL likely from the same cause.
//
// Kept generic so it works for any language / content. A more aggressive
// fix (language-specific prompts, e.g. "Это аудиозапись речи." for ru) is
// possible later if we see this prompt not enough.
export const WHISPER_PROMPT = 'This is a speech recording.'
