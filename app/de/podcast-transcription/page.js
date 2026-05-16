import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'Podcast-Transkription — Kostenloser Podcast-Transkript-Generator | Mictoo',
  description: 'Podcast-Episoden kostenlos in Text umwandeln. Audiodatei hochladen und das vollständige Transkript sofort erhalten. MP3, M4A, WAV. Keine Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/podcast-transcription', languages: LANGS },
}

export default function DePodcastPage() {
  return (
    <LandingLayout
      badge="Podcaster · YouTube · Kostenlos"
      h1={<>Podcast-Transkription<br /><span className="text-brand-600">Kostenlos und sofort</span></>}
      subtitle="Verwandeln Sie jede Podcast-Episode in Sekunden in einen Text. Ideal für Show Notes, Blogposts, SEO und Barrierefreiheit. MP3, M4A oder WAV — kein Konto."
      defaultLanguage="de"
      features={[
        { icon: '🎙️', title: 'Alle Podcast-Formate', desc: 'MP3, M4A, WAV, OGG, FLAC. Funktioniert mit allen Exporten gängiger Podcast-Hoster.' },
        { icon: '📝', title: 'Show Notes & Blogposts', desc: 'Verwandeln Sie das Transkript in SEO-freundliche Blogposts, Show Notes oder ein durchsuchbares Archiv.' },
        { icon: '♿', title: 'Barrierefreiheit', desc: 'Bieten Sie Transkripte an, damit Ihr Podcast auch für gehörlose und hörbehinderte Menschen zugänglich ist.' },
      ]}
      faq={[
        { q: 'Wie transkribiere ich eine Podcast-Episode kostenlos?', a: 'Laden Sie Ihre Episode als MP3 oder M4A herunter, legen Sie sie oben ab und erhalten Sie das vollständige Transkript in Sekunden.' },
        { q: 'Kann ich einen Spotify-Podcast transkribieren?', a: 'Wenn Sie Zugriff auf die Audiodatei haben (z. B. Ihre eigene Show), laden Sie sie direkt hoch. Für fremde Podcasts laden Sie die Episode über eine App mit Offline-Wiedergabe und legen sie dann hier ab.' },
        { q: 'Warum sollten Podcaster Transkripte erstellen?', a: 'Transkripte verbessern das SEO (Google indexiert den Text), erhöhen die Barrierefreiheit, lassen sich als Blogposts oder Newsletter wiederverwenden und helfen Hörern, Inhalte schnell zu überfliegen.' },
        { q: 'Wie genau ist die Podcast-Transkription?', a: 'Bei klar aufgenommenen Podcasts mit einer Sprecher- oder zwei klar getrennten Stimmen liegt die Genauigkeit meist über 95 %. Sie sinkt bei sich überlappenden Stimmen, starken Akzenten oder schlechter Audioqualität.' },
        { q: 'Kann ich ein Interview mit zwei Personen transkribieren?', a: 'Ja. Das Transkript erfasst alle gesprochenen Worte. Sprecher-Labels (Host / Gast) können manuell im Browser-Editor ergänzt werden.' },
        { q: 'Was ist die maximale Dateigröße?', a: 'Bis zu 25 MB. Die meisten MP3-Episoden mit 128 kbps passen für 25 Minuten. Für längere Episoden bitte Bitrate senken oder Datei teilen.' },
      ]}
      relatedLinks={[
        { href: '/transcribe-mp3-to-text', label: 'MP3 in Text' },
        { href: '/m4a-to-text', label: 'M4A in Text' },
        { href: '/interview-transcription', label: 'Interview-Transkription' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
