import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3 zu Text — Kostenlose Online-MP3-Transkription | Mictoo',
  description: 'Wandeln Sie MP3 kostenlos online in Text um. Laden Sie Ihre MP3-Datei hoch und erhalten Sie in Sekunden eine genaue Transkription. KI. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/transcribe-mp3-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'MP3 zu Text — Mictoo',
  url: 'https://mictoo.com/de/transcribe-mp3-to-text',
  description: 'Kostenloser KI-basierter MP3-zu-Text-Konverter online.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function DeMP3ToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="Kostenlos · Ohne Anmeldung · Sofort"
        h1={<>MP3 in Text umwandeln<br /><span className="text-brand-600">Online, kostenlos</span></>}
        subtitle="Laden Sie eine beliebige MP3-Datei hoch und erhalten Sie in Sekunden eine genaue Texttranskription. Funktioniert mit Interviews, Podcasts, Vorlesungen, Sprachnotizen und mehr."
        defaultLanguage="de"
        features={[
          { icon: '🎵', title: 'Jede MP3-Datei', desc: 'Funktioniert mit Sprachaufnahmen, Podcast-Episoden, Musikinterviews, Vorlesungen — jede MP3 bis 25 MB.' },
          { icon: '🌍', title: '50+ Sprachen', desc: 'Automatische Spracherkennung. Ihre MP3 kann in Deutsch, Englisch, Spanisch, Französisch oder 47 weiteren Sprachen sein.' },
          { icon: '📋', title: 'Kopieren oder herunterladen', desc: 'Erhalten Sie die Transkription als bearbeitbaren Text. Download als .txt oder .srt (Untertitel).' },
        ]}
        faq={[
          { q: 'Wie wandle ich MP3 in Text um?', a: 'Laden Sie Ihre MP3-Datei mit dem Tool oben hoch. Mictoo transkribiert sie automatisch per KI und zeigt den Text in Sekunden.' },
          { q: 'Ist die MP3-zu-Text-Konvertierung kostenlos?', a: 'Ja, vollständig kostenlos. Kein Konto erforderlich. Einfach hochladen und transkribieren.' },
          { q: 'Wie groß darf die MP3-Datei sein?', a: 'Bis zu 25 MB. Für längere Aufnahmen die Datei komprimieren oder in kürzere Segmente aufteilen.' },
          { q: 'Wie genau ist die MP3-Transkription?', a: 'Mictoo nutzt KI, die bei klaren Aufnahmen typischerweise 95%+ Genauigkeit erreicht. Hintergrundgeräusche oder starke Akzente können die Qualität beeinträchtigen.' },
          { q: 'Kann ich Untertitel aus einer MP3 erhalten?', a: 'Ja. Nach der Transkription auf den .srt-Button klicken, um eine Untertiteldatei mit Zeitstempeln herunterzuladen.' },
        ]}
        relatedLinks={[
          { href: '/de/transcribe-audio-to-text', label: 'Audio zu Text' },
          { href: '/de/transcribe-video-to-text', label: 'Video zu Text' },
          { href: '/de', label: 'Alle Formate' },
        ]}
      />
    </>
  )
}
