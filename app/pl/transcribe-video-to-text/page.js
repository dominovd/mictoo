import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: 'Wideo na tekst — Darmowa transkrypcja wideo online | Mictoo',
  description: 'Konwertuj wideo na tekst online za darmo. Prześlij MP4, WEBM lub MOV i otrzymaj precyzyjną transkrypcję natychmiast. AI. Bez konta.',
  alternates: { canonical: 'https://mictoo.com/pl/transcribe-video-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Wideo na tekst — Mictoo',
  url: 'https://mictoo.com/pl/transcribe-video-to-text',
  description: 'Darmowy konwerter wideo na tekst online. Transkrybuje MP4, WEBM i inne formaty.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function PlVideoToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP4 · WEBM · Za darmo · Natychmiast"
        h1={<>Wideo na tekst online<br /><span className="text-brand-600">Darmowa transkrypcja</span></>}
        subtitle="Prześlij dowolny plik wideo — pobrane z YouTube, screencasty, wywiady, wykłady — i otrzymaj wypowiadane słowa jako tekst w kilka sekund."
        defaultLanguage="pl"
        features={[
          { icon: '🎬', title: 'MP4, WEBM i inne', desc: 'Obsługa MP4, WEBM, MPEG i innych formatów wideo. Audio jest wyodrębniane automatycznie.' },
          { icon: '🎞️', title: 'Napisy SRT', desc: 'Pobierz plik .srt z timestampami — gotowy do uploadu na YouTube lub w dowolny edytor wideo.' },
          { icon: '⚡', title: 'Natychmiastowe rezultaty', desc: '10-minutowe wideo jest typowo transkrybowane w mniej niż 30 sekund. Bez kolejki, bez czekania.' },
        ]}
        faq={[
          { q: 'Jak transkrybować wideo za darmo?', a: 'Prześlij plik wideo narzędziem powyżej. Mictoo wyodrębnia audio i transkrybuje przez AI. Transkrypcja pojawia się w kilka sekund.' },
          { q: 'Czy mogę otrzymać napisy z wideo?', a: 'Tak. Po transkrypcji kliknij przycisk pobierania .srt, aby otrzymać plik napisów z timestampami, który możesz uploadować na YouTube, Premiere lub w dowolne narzędzie do edycji.' },
          { q: 'Jakie formaty wideo są obsługiwane?', a: 'MP4, WEBM, MPEG. Pliki audio (MP3, WAV, M4A, OGG, FLAC) również są obsługiwane.' },
          { q: 'Czy działa z filmami YouTube?', a: 'Tak — najpierw pobierz swoje wideo z YouTube (przez downloader), a następnie prześlij plik tutaj do transkrypcji.' },
          { q: 'Czy jest limit rozmiaru?', a: 'Do 25 MB. Dla dłuższych filmów wyodrębnij najpierw ścieżkę audio (np. ffmpeg lub konwerterem online), aby zmniejszyć rozmiar.' },
        ]}
        relatedLinks={[
          { href: '/pl/transcribe-mp3-to-text', label: 'MP3 na tekst' },
          { href: '/pl/transcribe-audio-to-text', label: 'Audio na tekst' },
          { href: '/pl', label: 'Wszystkie formaty' },
        ]}
      />
    </>
  )
}
