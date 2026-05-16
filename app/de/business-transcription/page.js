import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: 'Business-Transkription — Meetings, Calls und Interviews | Mictoo',
  description: 'Geschäftsmeetings, Vertriebsgespräche, Interviews und Konferenzen kostenlos transkribieren. Sofort, genau, keine Anmeldung. Export als .txt oder .srt.',
  alternates: { canonical: 'https://mictoo.com/de/business-transcription', languages: LANGS },
}

export default function DeBusinessPage() {
  return (
    <LandingLayout
      badge="Meetings · Calls · Interviews · Kostenlos"
      h1={<>Business-Transkription<br /><span className="text-brand-600">Meetings und Calls als Text</span></>}
      subtitle="Verwandeln Sie jedes aufgezeichnete Meeting, Vertriebsgespräch, Interview oder jede Präsentation in Sekunden in ein durchsuchbares Textdokument. Kein Konto, kein Abo."
      defaultLanguage="de"
      features={[
        { icon: '📞', title: 'Vertriebs- und Kundengespräche', desc: 'Transkribieren Sie Sales Calls, Kundeninterviews und Discovery-Termine. Wichtige Punkte und Zusagen sehen, ohne erneut anzuhören.' },
        { icon: '📊', title: 'Meetings und Stand-ups', desc: 'Wandeln Sie Zoom-, Google-Meet- und Teams-Aufnahmen in Text um. Teilen Sie Meeting-Notizen, ohne dass alle das Video schauen müssen.' },
        { icon: '🔐', title: 'Vertrauliche Verarbeitung', desc: 'Aufnahmen werden sofort verarbeitet und niemals gespeichert. Geschäftliche Gespräche bleiben vertraulich.' },
      ]}
      faq={[
        { q: 'Wie transkribiere ich eine Meeting-Aufnahme?', a: 'Exportieren Sie das Meeting als MP4 oder MP3 aus Zoom, Google Meet oder Teams. Hier ablegen und in Sekunden das Transkript erhalten.' },
        { q: 'Kann ich eine Zoom-Aufnahme kostenlos transkribieren?', a: 'Ja. Laden Sie die Zoom-Aufnahme lokal herunter (MP4 oder M4A) und legen Sie sie bei Mictoo ab. Das Transkript entsteht sofort und kostenlos.' },
        { q: 'Sind meine Geschäftsdaten sicher?', a: 'Ja. Dateien werden in Echtzeit verarbeitet und sofort gelöscht. Auf unseren Servern wird nichts gespeichert. Wir trainieren keine Modelle mit Ihren Daten.' },
        { q: 'Wie transkribiere ich eine Sales-Call-Aufnahme?', a: 'Exportieren Sie den Call aus Ihrem CRM oder Aufzeichnungstool als MP3 oder WAV, legen Sie ihn oben ab und laden Sie das Transkript als .txt herunter.' },
        { q: 'Werden mehrere Sprecher unterstützt?', a: 'Das Transkript erfasst alle Wörter in einem einzigen Textblock. Sprecher-Diarization (Wer-hat-was-gesagt) erfordert einen professionellen Transkriptionsdienst.' },
        { q: 'Welche Meeting-Plattformen werden unterstützt?', a: 'Jede Plattform, die Aufnahmen-Downloads erlaubt: Zoom, Google Meet, Microsoft Teams, Webex, Riverside, Loom und andere. Export als MP4, MP3, M4A oder WAV.' },
        { q: 'Kann ich einen Podcast oder ein Webinar transkribieren?', a: 'Ja. Podcast-Episoden, Webinar-Aufnahmen und Konferenzvorträge transkribieren sich sehr gut. Audiodatei ablegen — Transkript in Sekunden.' },
      ]}
      relatedLinks={[
        { href: '/transcribe-audio-to-text', label: 'Audio in Text' },
        { href: '/timestamped-transcription', label: 'Transkript mit Zeitstempeln' },
        { href: '/transcribe-video-to-text', label: 'Video in Text' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
