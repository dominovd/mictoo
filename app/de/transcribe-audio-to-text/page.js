import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-audio-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
  'de': 'https://mictoo.com/de/transcribe-audio-to-text',
  'es': 'https://mictoo.com/es/transcribe-audio-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
  'it': 'https://mictoo.com/it/transcribe-audio-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-audio-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-audio-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-audio-to-text',
  'x-default': 'https://mictoo.com/transcribe-audio-to-text',
}

export const metadata = {
  title: 'Audio in Text umwandeln — Kostenlose Online-Audio-Transkription | Mictoo',
  description: 'Wandeln Sie Audio kostenlos online in Text um. Laden Sie eine beliebige Audiodatei hoch und erhalten Sie sofort eine genaue Transkription. 50+ Sprachen. KI.',
  alternates: { canonical: 'https://mictoo.com/de/transcribe-audio-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Audio zu Text — Mictoo',
  url: 'https://mictoo.com/de/transcribe-audio-to-text',
  description: 'Kostenloser Online-Audio-zu-Text-Konverter. Unterstützt MP3, WAV, M4A, OGG, FLAC und mehr.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function DeAudioToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP3 · WAV · M4A · FLAC · Kostenlos"
        h1={<>Audio in Text umwandeln<br /><span className="text-brand-600">Kostenlose KI-Transkription</span></>}
        subtitle="Der schnellste Weg, jede Audioaufnahme in Text umzuwandeln. Datei hochladen — kein Konto, kein Abo, kein Warten."
        defaultLanguage="de"
        features={[
          { icon: '🎙️', title: 'Alle Audio-Formate', desc: 'MP3, WAV, M4A, OGG, FLAC, WEBM — jede Audiodatei bis 25 MB.' },
          { icon: '🧠', title: 'KI-basierte Genauigkeit', desc: 'Unsere KI ist auf Hunderttausenden Stunden mehrsprachiger Audiodaten trainiert und liefert branchenführende Genauigkeit.' },
          { icon: '🔒', title: 'Privat und sicher', desc: 'Ihr Audio wird nie gespeichert. Dateien werden einmal verarbeitet und sofort verworfen.' },
        ]}
        faq={[
          { q: 'Was ist der beste kostenlose Audio-zu-Text-Konverter?', a: 'Mictoo nutzt KI, eines der genauesten kostenlosen Spracherkennungsmodelle. Unterstützt 50+ Sprachen und erfordert kein Konto.' },
          { q: 'Wie genau ist Audio-Transkription?', a: 'Unsere KI erreicht 95%+ Genauigkeit bei klaren Aufnahmen. Hintergrundgeräusche oder starke Akzente können die Genauigkeit etwas verringern.' },
          { q: 'Welche Audio-Formate werden unterstützt?', a: 'MP3, WAV, M4A, OGG, FLAC, WEBM, MPEG. Auch Videodateien (MP4) werden akzeptiert.' },
          { q: 'Wie lange dauert die Audio-Transkription?', a: 'Eine 10-minütige Aufnahme wird üblicherweise in 15-30 Sekunden transkribiert. Keine Warteschlange — Ihre Datei wird sofort verarbeitet.' },
          { q: 'Kann ich Anrufaufzeichnungen transkribieren?', a: 'Ja. Anrufaufzeichnungen in MP3, WAV oder M4A funktionieren gut. Audio mit mehreren Sprechern wird als ein Textblock transkribiert (Sprecher-Labels erfordern ein Profi-Tool).' },
          { q: 'Muss ich die Sprache auswählen?', a: 'Nein — die Sprache wird automatisch erkannt. Bei schlechten Ergebnissen können Sie die Sprache manuell im Dropdown auswählen.' },
        ]}
        relatedLinks={[
          { href: '/de/transcribe-mp3-to-text', label: 'MP3 zu Text' },
          { href: '/de/transcribe-video-to-text', label: 'Video zu Text' },
          { href: '/de', label: 'Alle Formate' },
        ]}
      />
    </>
  )
}
