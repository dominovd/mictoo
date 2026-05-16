import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'it': 'https://mictoo.com/it/lecture-transcription',
  'pt': 'https://mictoo.com/pt/lecture-transcription',
  'pl': 'https://mictoo.com/pl/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: 'Vorlesungs-Transkription — Kostenlos für Studierende | Mictoo',
  description: 'Vorlesungen und Seminare kostenlos in Text umwandeln. Aufnahme ablegen und in Sekunden ein genaues Transkript erhalten. Keine Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/lecture-transcription', languages: LANGS },
}

export default function DeLecturePage() {
  return (
    <LandingLayout
      badge="Studierende · Akademiker · Kostenlos"
      h1={<>Vorlesungs-Transkription<br /><span className="text-brand-600">Kostenlos für Studium und Forschung</span></>}
      subtitle="Nehmen Sie Ihre Vorlesung auf und laden Sie die Datei hoch — in Sekunden bekommen Sie das vollständige Transkript. Lernen, suchen und wiederholen, ohne erneut anzuhören. Kein Konto nötig."
      defaultLanguage="de"
      features={[
        { icon: '🎓', title: 'Für Studierende', desc: 'Schluss mit hektischem Mitschreiben in schnellen Vorlesungen. Audio aufnehmen, später hochladen, durchsuchbares Transkript erhalten.' },
        { icon: '🔍', title: 'Durchsuchbarer Text', desc: 'Finden Sie jeden Begriff oder jedes Zitat sofort. Strg+F durch ein ganzes Semester an Mitschriften.' },
        { icon: '🌍', title: '50+ Sprachen', desc: 'Funktioniert für Vorlesungen auf Deutsch, Englisch, Spanisch, Französisch, Mandarin, Japanisch und vielen mehr.' },
      ]}
      faq={[
        { q: 'Wie transkribiere ich eine Vorlesung kostenlos?', a: 'Nehmen Sie die Vorlesung als MP3, MP4, M4A oder WAV mit Smartphone oder Laptop auf, legen Sie die Datei oben ab und erhalten Sie das Transkript in Sekunden.' },
        { q: 'Welche App eignet sich zum Aufnehmen?', a: 'Jede Sprachaufnahme-App funktioniert — iPhone Sprachmemos, Android Recorder oder das integrierte Mikrofon Ihres Laptops. Datei speichern und hier hochladen.' },
        { q: 'Darf ich Uni-Vorlesungen transkribieren?', a: 'Ja, solange Sie das Recht zur Aufnahme und Transkription gemäß der Richtlinien Ihrer Hochschule haben. Datei hochladen und Transkript sofort erhalten.' },
        { q: 'Wie lange dauert die Transkription einer 1-Stunden-Vorlesung?', a: 'Mit Mictoo wird eine 1-stündige Vorlesung üblicherweise in unter 2 Minuten transkribiert. Beachten Sie das 25-MB-Limit — bei langen Vorlesungen Bitrate senken oder Datei teilen.' },
        { q: 'Wie genau ist die Vorlesungs-Transkription?', a: 'Die Genauigkeit liegt bei klarem Audio typischerweise bei 90–95 %. Technische Vorlesungen mit Fachbegriffen erfordern manchmal manuelle Korrekturen.' },
        { q: 'Kann ich Online-Vorlesungsvideos transkribieren?', a: 'Ja. Laden Sie das Video herunter oder extrahieren Sie die Audiospur und legen Sie die Datei hier ab. MP4 und WEBM funktionieren direkt.' },
      ]}
      relatedLinks={[
        { href: '/interview-transcription', label: 'Interview-Transkription' },
        { href: '/transcribe-audio-to-text', label: 'Audio in Text' },
        { href: '/timestamped-transcription', label: 'Transkript mit Zeitstempeln' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
