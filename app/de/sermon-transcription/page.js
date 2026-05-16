import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: 'Predigt-Transkription — Kostenloser Transkript-Generator für Predigten | Mictoo',
  description: 'Transkribieren Sie Predigten und Kirchenaudio kostenlos in Text. Ideal für Blogposts, Studiennotizen und Barrierefreiheit. Unterstützt MP3, MP4, M4A. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/sermon-transcription', languages: LANGS },
}

export default function DeSermonPage() {
  return (
    <LandingLayout
      badge="Predigten · Kirche · Kostenlos"
      h1={<>Predigt-Transkription<br /><span className="text-brand-600">Kostenloser Predigt-Transkript-Generator</span></>}
      subtitle="Verwandeln Sie Predigtaufzeichnungen in Sekunden in sauberen Text. Ideal für Kirchenblogs, Studienunterlagen, Social-Posts und um Botschaften für Hörgeschädigte zugänglich zu machen."
      defaultLanguage="de"
      features={[
        { icon: '📖', title: 'Jede Predigt mehrfach nutzen', desc: 'Verwandeln Sie eine Predigt in Blogartikel, Andacht, Newsletter, Studienleitfaden und zitierbare Social-Posts. Vervielfachen Sie Ihre Reichweite ohne Mehraufwand.' },
        { icon: '♿', title: 'Barrierefreiheit', desc: 'Stellen Sie Transkripte bereit, damit gehörlose, schwerhörige oder online teilnehmende Gemeindemitglieder die Botschaft vollständig erfassen können.' },
        { icon: '🌐', title: 'Mehrsprachiger Support', desc: 'Funktioniert für Deutsch, Englisch, Spanisch, Portugiesisch, Koreanisch, Französisch, Russisch und 45+ weitere Sprachen. Perfekt für mehrsprachige Gemeinden.' },
      ]}
      faq={[
        { q: 'Wie bekomme ich eine Predigtaufnahme als Text?', a: 'Exportieren Sie die Aufnahme aus dem Mischpult Ihrer Gemeinde, vom Podcast-Feed oder von YouTube als MP3, MP4 oder M4A. Datei oben ablegen — Mictoo transkribiert in Sekunden.' },
        { q: 'Kann ich Predigten vom YouTube-Kanal unserer Gemeinde transkribieren?', a: 'Ja. Für Ihren eigenen Kanal: YouTube Studio → Inhalt → Video anklicken → Herunterladen. Datei in Mictoo ablegen. Für externe Kanäle benötigen Sie die Erlaubnis — viele Dienste teilen Audio-Downloads über ihren Podcast-Feed.' },
        { q: 'Was ist mit Bibelversen und Eigennamen?', a: 'KI-Transkription handhabt gängige Verse und Namen gut, schreibt aber gelegentlich seltene biblische Namen oder kirchenspezifische Begriffe falsch. Im Browser-Editor vor dem Download korrigieren — meist 30 Sekunden Nachbearbeitung.' },
        { q: 'Wie lang darf die Predigt sein?', a: 'Bis zu 25 MB pro Datei. Eine 30-minütige Predigt bei 128 kbps passt bequem. Für längere Botschaften (45-60 Minuten) senken Sie die Bitrate auf 64 kbps Mono oder teilen Sie in zwei Teile.' },
        { q: 'Sind die Dateien privat?', a: 'Ja. Predigten werden verarbeitet und sofort verworfen. Wir speichern weder Audio- noch Transkriptionsinhalte.' },
      ]}
      relatedLinks={[
        { href: '/de/podcast-transcription', label: 'Podcast Transkription' },
        { href: '/de/lecture-transcription', label: 'Vorlesungs-Transkription' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
