import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: 'Video zu Text — Kostenlose Online-Video-Transkription | Mictoo',
  description: 'Wandeln Sie Video kostenlos online in Text um. Laden Sie MP4, WEBM oder MOV hoch und erhalten Sie sofort eine genaue Transkription. KI. Kein Konto.',
  alternates: { canonical: 'https://mictoo.com/de/transcribe-video-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Video zu Text — Mictoo',
  url: 'https://mictoo.com/de/transcribe-video-to-text',
  description: 'Kostenloser Online-Video-zu-Text-Konverter. Transkribiert MP4, WEBM und andere Videoformate.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function DeVideoToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP4 · WEBM · Kostenlos · Sofort"
        h1={<>Video zu Text online<br /><span className="text-brand-600">Kostenlose Transkription</span></>}
        subtitle="Laden Sie eine beliebige Videodatei hoch — YouTube-Downloads, Bildschirmaufnahmen, Interviews, Vorlesungen — und erhalten Sie die gesprochenen Worte als Text in Sekunden."
        defaultLanguage="de"
        features={[
          { icon: '🎬', title: 'MP4, WEBM & mehr', desc: 'Unterstützt MP4, WEBM, MPEG und andere Videoformate. Audio wird automatisch extrahiert.' },
          { icon: '🎞️', title: 'SRT-Untertitel', desc: 'Laden Sie eine .srt-Datei mit Zeitstempeln herunter — bereit für YouTube oder jeden Videoeditor.' },
          { icon: '⚡', title: 'Sofortige Ergebnisse', desc: 'Ein 10-minütiges Video wird typischerweise in unter 30 Sekunden transkribiert. Keine Warteschlange.' },
        ]}
        faq={[
          { q: 'Wie transkribiere ich ein Video kostenlos?', a: 'Laden Sie Ihre Videodatei mit dem Tool oben hoch. Mictoo extrahiert das Audio und transkribiert es per KI. Die Transkription erscheint in Sekunden.' },
          { q: 'Kann ich Untertitel aus einem Video erhalten?', a: 'Ja. Nach der Transkription auf den .srt-Download-Button klicken, um eine Untertiteldatei mit Zeitstempeln für YouTube, Premiere oder beliebige Editiertools zu bekommen.' },
          { q: 'Welche Videoformate werden unterstützt?', a: 'MP4, WEBM, MPEG. Auch Audiodateien (MP3, WAV, M4A, OGG, FLAC) werden unterstützt.' },
          { q: 'Funktioniert es mit YouTube-Videos?', a: 'Ja — laden Sie das YouTube-Video zuerst herunter (mit einem YouTube-Downloader) und uploaden die Datei dann hier zur Transkription.' },
          { q: 'Gibt es eine Dateigrößenbeschränkung?', a: 'Bis 25 MB. Für längere Videos die Audiospur zuerst extrahieren (z. B. mit ffmpeg oder einem Online-Konverter), um die Dateigröße zu reduzieren.' },
        ]}
        relatedLinks={[
          { href: '/de/transcribe-mp3-to-text', label: 'MP3 zu Text' },
          { href: '/de/transcribe-audio-to-text', label: 'Audio zu Text' },
          { href: '/de', label: 'Alle Formate' },
        ]}
      />
    </>
  )
}
