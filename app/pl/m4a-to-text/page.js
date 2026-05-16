import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'pt': 'https://mictoo.com/pt/m4a-to-text',
  'pl': 'https://mictoo.com/pl/m4a-to-text',
  'ja': 'https://mictoo.com/ja/m4a-to-text',
  'ko': 'https://mictoo.com/ko/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4A na tekst — Darmowa transkrypcja M4A online | Mictoo',
  description: 'Konwertuj pliki audio M4A na tekst za darmo. Prześlij dowolny plik M4A — Voice Memos iPhone, nagrania, podcasty — i otrzymaj transkrypcję natychmiast. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/m4a-to-text', languages: LANGS },
}

export default function PlM4AToTextPage() {
  return (
    <LandingLayout
      badge="M4A · iPhone · Za darmo · Natychmiast"
      h1={<>M4A na tekst<br /><span className="text-brand-600">Darmowa transkrypcja M4A online</span></>}
      subtitle="Konwertuj pliki audio M4A na tekst natychmiast. Idealne do Voice Memos iPhone, nagrań głosowych i plików podcastów. Bez konta."
      defaultLanguage="pl"
      features={[
        { icon: '📱', title: 'Voice Memos iPhone', desc: 'M4A to domyślny format dla Voice Memos i nagrań iPhone. Prześlij bezpośrednio i otrzymaj transkrypcję w kilka sekund.' },
        { icon: '🎵', title: 'Każdy M4A', desc: 'Pliki M4A z dowolnego źródła — iPhone, Mac, cyfrowe rejestratory, aplikacje podcastowe — w pełni obsługiwane.' },
        { icon: '📄', title: 'Eksport tekstu lub SRT', desc: 'Pobierz transkrypcję jako prosty .txt lub plik napisów .srt z timestampami.' },
      ]}
      faq={[
        { q: 'Jak konwertuję M4A na tekst?', a: 'Prześlij plik M4A narzędziem powyżej. Transkrypcja jest generowana automatycznie i wyświetlana w kilka sekund.' },
        { q: 'Czy mogę transkrybować Voice Memos iPhone?', a: 'Tak. Voice Memos iPhone są zapisywane jako pliki M4A. Prześlij plik bezpośrednio z iPhone lub po przeniesieniu na komputer.' },
        { q: 'Czy M4A na tekst jest darmowy?', a: 'Tak, całkowicie darmowy. Bez konta, bez subskrypcji. Po prostu prześlij i transkrybuj.' },
        { q: 'Jaki jest maksymalny rozmiar M4A?', a: 'Do 25 MB. Większość nagrań głosowych i krótkich klipów audio mieści się z zapasem w tym limicie.' },
        { q: 'Jakie inne formaty audio są obsługiwane?', a: 'Oprócz M4A, Mictoo obsługuje MP3, MP4, WAV, OGG, WEBM i FLAC.' },
      ]}
      relatedLinks={[
        { href: '/pl/wav-to-text', label: 'WAV na tekst' },
        { href: '/pl/transcribe-mp3-to-text', label: 'MP3 na tekst' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
