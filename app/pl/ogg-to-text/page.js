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
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGG na tekst — Darmowa transkrypcja audio OGG online | Mictoo',
  description: 'Konwertuj pliki audio OGG na tekst za darmo online. Prześlij dowolne nagranie OGG Vorbis i otrzymaj precyzyjną transkrypcję natychmiast. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/ogg-to-text', languages: LANGS },
}

export default function PlOggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · Za darmo · Natychmiast"
      h1={<>OGG na tekst<br /><span className="text-brand-600">Darmowa transkrypcja OGG online</span></>}
      subtitle="Prześlij dowolny plik audio OGG i skonwertuj na tekst w kilka sekund. Obsługa OGG Vorbis i OGG Opus. Bez konta."
      defaultLanguage="pl"
      features={[
        { icon: '🎙️', title: 'OGG Vorbis i Opus', desc: 'Obsługa plików OGG z dowolnego źródła — dyktafony, przeglądarki, aplikacje komunikacyjne.' },
        { icon: '🌍', title: '50+ języków', desc: 'Język wykrywany automatycznie. Działa dla polskiego, angielskiego, hiszpańskiego, francuskiego i innych.' },
        { icon: '📄', title: 'Eksport .txt i .srt', desc: 'Pobierz jako prosty tekst lub jako plik SRT z timestampami.' },
      ]}
      faq={[
        { q: 'Jak konwertuję OGG na tekst?', a: 'Prześlij plik OGG powyżej. Transkrypcja jest generowana automatycznie w kilka sekund.' },
        { q: 'Czy konwersja OGG na tekst jest darmowa?', a: 'Tak, całkowicie darmowa. Bez rejestracji i konta.' },
        { q: 'Jaki jest maksymalny rozmiar pliku OGG?', a: 'Do 25 MB.' },
        { q: 'Jakie inne formaty audio są obsługiwane?', a: 'Obsługiwane są również MP3, MP4, WAV, M4A, FLAC, WEBM.' },
      ]}
      relatedLinks={[
        { href: '/pl/wav-to-text', label: 'WAV na tekst' },
        { href: '/pl/flac-to-text', label: 'FLAC na tekst' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
