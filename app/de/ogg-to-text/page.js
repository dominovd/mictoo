import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/ogg-to-text',
  'fr': 'https://mictoo.com/fr/ogg-to-text',
  'de': 'https://mictoo.com/de/ogg-to-text',
  'es': 'https://mictoo.com/es/ogg-to-text',
  'ru': 'https://mictoo.com/ru/ogg-to-text',
  'it': 'https://mictoo.com/it/ogg-to-text',
  'pt': 'https://mictoo.com/pt/ogg-to-text',
  'pl': 'https://mictoo.com/pl/ogg-to-text',
  'ja': 'https://mictoo.com/ja/ogg-to-text',
  'ko': 'https://mictoo.com/ko/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGG zu Text — Kostenlose OGG-Audio-Transkription online | Mictoo',
  description: 'OGG-Audiodateien kostenlos online in Text umwandeln. Laden Sie eine beliebige OGG-Vorbis-Aufnahme hoch und erhalten Sie sofort eine genaue Transkription. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/ogg-to-text', languages: LANGS },

  openGraph: {
    title: "OGG zu Text — Kostenlose OGG-Audio-Transkription online | Mictoo",
    description: "OGG-Audiodateien kostenlos online in Text umwandeln. Laden Sie eine beliebige OGG-Vorbis-Aufnahme hoch und erhalten Sie sofort eine genaue Transkription. Ohne Anmeldung.",
    url: "https://mictoo.com/de/ogg-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OGG zu Text — Kostenlose OGG-Audio-Transkription online | Mictoo",
    description: "OGG-Audiodateien kostenlos online in Text umwandeln. Laden Sie eine beliebige OGG-Vorbis-Aufnahme hoch und erhalten Sie sofort eine genaue Transkription. Ohne Anmeldung.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeOggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · Kostenlos · Sofort"
      h1={<>OGG zu Text<br /><span className="text-brand-600">Kostenlose OGG-Transkription online</span></>}
      subtitle="Laden Sie eine beliebige OGG-Audiodatei hoch und wandeln Sie sie in Sekunden in Text um. Unterstützt OGG Vorbis und OGG Opus. Kein Konto nötig."
      defaultLanguage="de"
      valueBlock={
        <>
          <p>
            OGG ist ein Container und kann Vorbis, Opus oder andere Audiovarianten enthalten. Das Format taucht häufig bei Sprachnachrichten, Open-Source-Tools, Linux-Aufnahmen und Web-Apps auf.
          </p>
          <p>
            Mictoo extrahiert die Audiospur, erkennt den Codec und erstellt ein lesbares Transkript mit Zeitstempeln, ohne vorherige Konvertierung.
          </p>
        </>
      }
      howItWorks={[
        { title: 'OGG oder OGA hochladen', desc: 'Fügen Sie Dateien aus Telegram, Browsern, Linux-Recordern oder anderen Apps hinzu.' },
        { title: 'Codec prüfen', desc: 'Mictoo analysiert den Container und liest die passende Vorbis- oder Opus-Spur.' },
        { title: 'Transkript speichern', desc: 'Kopieren Sie den Text oder exportieren Sie TXT/SRT mit Zeitmarken.' },
      ]}
      whyUse={{
        title: 'Warum Mictoo für OGG',
        bullets: [
          'Viele Standard-Tools lehnen OGG/OGA weiterhin ab; Mictoo verarbeitet diese Sprachdateien direkt.',
          'Zeitstempel helfen, einzelne Nachrichten oder Aufnahmeabschnitte später wiederzufinden.',
          'Keine unnötige MP3-Konvertierung vor dem Upload.',
          'Praktisch für Opus-Audio aus WebRTC, Messenger-Apps und Browser-Workflows.',
        ],
      }}
      useCases={{
        title: 'Wann OGG transkribieren',
        items: [
          { title: 'Telegram-Sprachnachrichten', desc: 'Wandeln Sie kurze .oga-Nachrichten in verwertbare Notizen um.' },
          { title: 'Linux-Aufnahmen', desc: 'Transkribieren Sie Audio aus Open-Source-Recordern und Desktop-Tools.' },
          { title: 'WebRTC-Anrufe', desc: 'Sichern Sie Inhalte aus Browser-Meetings oder Tests als Text.' },
          { title: 'Audioarchive', desc: 'Machen Sie ältere OGG-Dateien durchsuchbar, ohne sie neu zu kodieren.' },
        ],
      }}
      proTips={{
        title: 'Tipps für OGG-Dateien',
        tips: [
          'Auch .oga-Dateien ausprobieren: Sie enthalten oft denselben Typ Sprachaufnahme.',
          'Bei großen Video- oder Containerdateien zuerst nur die Audiospur extrahieren.',
          'Bei sehr kurzen Nachrichten die Sprache manuell setzen, um bessere Satzzeichen zu erhalten.',
        ],
      }}
      faq={[
        { q: 'Wie wandle ich OGG in Text um?', a: 'Laden Sie Ihre OGG-Datei oben hoch. Die Transkription wird in Sekunden automatisch erzeugt.' },
        { q: 'Ist die OGG-zu-Text-Konvertierung kostenlos?', a: 'Ja, vollständig kostenlos. Keine Anmeldung oder Konto erforderlich.' },
        { q: 'Wie groß darf die OGG-Datei sein?', a: 'Bis 25 MB.' },
        { q: 'Welche anderen Audioformate werden unterstützt?', a: 'Auch MP3, MP4, WAV, M4A, FLAC, WEBM werden unterstützt.' },
      ]}
      relatedLinks={[
        { href: '/de/wav-to-text', label: 'WAV zu Text' },
        { href: '/de/flac-to-text', label: 'FLAC zu Text' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
