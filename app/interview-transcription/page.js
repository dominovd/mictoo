import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Interview Transcription — Free Interview Transcript Generator | Mictoo',
  description: 'Transcribe interviews to text for free. Upload your interview recording and get an accurate transcript with timestamps. Includes interview transcript examples and templates.',
  alternates: {
    canonical: 'https://mictoo.com/interview-transcription',
    languages: {
      'en': 'https://mictoo.com/interview-transcription',
      'fr': 'https://mictoo.com/fr/interview-transcription',
      'de': 'https://mictoo.com/de/interview-transcription',
      'es': 'https://mictoo.com/es/interview-transcription',
      'ru': 'https://mictoo.com/ru/interview-transcription',
      'it': 'https://mictoo.com/it/interview-transcription',
      'pt': 'https://mictoo.com/pt/interview-transcription',
      'x-default': 'https://mictoo.com/interview-transcription',
    },
  },
}

const INTERVIEW_TRANSCRIPT_EXAMPLE = `Interviewer: Can you walk me through your research methodology?

Respondent: Sure. We used a mixed-methods approach, starting with a survey of 400 participants, then conducting in-depth interviews with 20 of them to explore the quantitative findings in more detail.

Interviewer: What were the main challenges you encountered?

Respondent: Recruiting participants was the biggest hurdle. We ended up partnering with three community organizations to reach a more diverse sample.`

export default function InterviewTranscriptionPage() {
  return (
    <>
      <LandingLayout
        badge="Research · Journalism · Free"
        h1={<>Interview Transcription<br /><span className="text-brand-600">Free Interview Transcript Tool</span></>}
        subtitle="Upload your interview recording and get an accurate text transcript in seconds. Works for qualitative research, journalism, HR interviews, and podcasts. No account required."
        features={[
          {
            icon: '🎙️',
            title: 'Any interview format',
            desc: 'In-person recordings, phone calls, Zoom interviews, focus groups — upload as MP3, MP4, WAV, or M4A.',
          },
          {
            icon: '📋',
            title: 'Editable output',
            desc: 'Edit the transcript directly in your browser. Add speaker labels, fix names, correct terminology — then download.',
          },
          {
            icon: '⏱️',
            title: 'Timestamps for every segment',
            desc: 'Download as .srt to get time-coded segments — useful for qualitative coding and referencing specific moments.',
          },
        ]}
        faq={[
          {
            q: 'How do I transcribe an interview for free?',
            a: 'Upload your interview recording (MP3, MP4, WAV, or M4A) using the tool above. The transcript is generated automatically within seconds.',
          },
          {
            q: 'What does an interview transcript look like?',
            a: 'An interview transcript is a verbatim text record of everything spoken during the interview. It typically includes speaker turns labeled as "Interviewer" and "Respondent" (or by name), with the spoken text on each line.',
          },
          {
            q: 'What is the correct interview transcript format?',
            a: 'The standard format includes: (1) speaker label followed by a colon, (2) verbatim spoken text, (3) a blank line between turns. For research, add timestamps at each turn. For journalism, consecutive speech by the same person may be combined.',
          },
          {
            q: 'How do I format an interview transcript for qualitative research?',
            a: 'For qualitative research, use verbatim transcription including all hesitations and filler words. Add timestamps every 30–60 seconds. Label speakers consistently (e.g. "P1", "P2" for anonymity). Edit names and identifying details if required by your IRB protocol.',
          },
          {
            q: 'Does Mictoo add speaker labels automatically?',
            a: 'Not automatically — the transcript is output as a single text block. You can manually add speaker labels by editing the transcript in the browser before downloading.',
          },
          {
            q: 'What is the difference between transcription and interview notes?',
            a: 'Interview notes summarize key points and paraphrase the speaker. A transcript is a verbatim record of every word spoken — more accurate and required for most research and legal contexts.',
          },
          {
            q: 'How long does it take to transcribe a 1-hour interview?',
            a: 'With Mictoo, a 1-hour interview is typically transcribed in under 2 minutes. Manual transcription of a 1-hour interview typically takes 4–6 hours.',
          },
        ]}
        relatedLinks={[
          { href: '/transcribe-audio-to-text', label: 'Audio to Text' },
          { href: '/timestamped-transcription', label: 'Timestamped Transcription' },
          { href: '/business-transcription', label: 'Business Transcription' },
          { href: '/', label: 'All formats' },
        ]}
      />

      {/* Interview transcript example section */}
      <section className="max-w-2xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Interview transcript example</h2>
        <p className="text-sm text-slate-500 mb-4">A basic qualitative research interview transcript looks like this:</p>
        <pre className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm text-slate-700 whitespace-pre-wrap leading-relaxed font-mono">
          {INTERVIEW_TRANSCRIPT_EXAMPLE}
        </pre>
        <p className="text-xs text-slate-400 mt-3">
          After transcribing with Mictoo, edit directly in the browser to add speaker labels before downloading.
        </p>
      </section>
    </>
  )
}
