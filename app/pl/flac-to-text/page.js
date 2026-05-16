import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-text',
  'fr': 'https://mictoo.com/fr/flac-to-text',
  'de': 'https://mictoo.com/de/flac-to-text',
  'es': 'https://mictoo.com/es/flac-to-text',
  'ru': 'https://mictoo.com/ru/flac-to-text',
  'it': 'https://mictoo.com/it/flac-to-text',
  'pt': 'https://mictoo.com/pt/flac-to-text',
  'pl': 'https://mictoo.com/pl/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC na tekst — Darmowa transkrypcja audio FLAC online | Mictoo',
  description: 'Konwertuj pliki FLAC na tekst za darmo online. Prześlij dowolne nagranie FLAC i otrzymaj precyzyjną transkrypcję w kilka sekund. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/flac-to-text', languages: LANGS },
}

export default function PlFlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · Bezstratny · Za darmo"
      h1={<>FLAC na tekst<br /><span className="text-brand-600">Darmowa transkrypcja FLAC online</span></>}
      subtitle="Prześlij dowolny plik audio FLAC i skonwertuj na tekst natychmiast. Bezstratna jakość FLAC zapewnia doskonałą precyzję transkrypcji. Bez konta."
      defaultLanguage="pl"
      features={[
        { icon: '🎵', title: 'Bezstratna jakość audio', desc: 'Pliki FLAC zachowują pełną jakość audio, co pomaga transkrypcji AI osiągnąć maksymalną precyzję.' },
        { icon: '⚡', title: 'Natychmiastowe rezultaty', desc: 'Większość plików FLAC jest transkrybowana w mniej niż 30 sekund, niezależnie od jakości i głębi bitowej.' },
        { icon: '📄', title: 'Eksport .txt i .srt', desc: 'Pobierz transkrypcję jako prosty tekst lub jako plik SRT z timestampami.' },
      ]}
      faq={[
        { q: 'Jak konwertuję plik FLAC na tekst?', a: 'Prześlij plik FLAC narzędziem powyżej. AI transkrybuje go i pokazuje tekst w kilka sekund.' },
        { q: 'Czy FLAC transkrybuje się dokładniej niż MP3?', a: 'Bezstratna jakość FLAC może marginalnie poprawić precyzję na cichym lub złożonym audio w porównaniu z mocno skompresowanymi formatami.' },
        { q: 'Czy konwersja FLAC na tekst jest darmowa?', a: 'Tak, całkowicie darmowa. Bez konta i rejestracji.' },
        { q: 'Jaki jest maksymalny rozmiar FLAC?', a: 'Do 25 MB. Pliki FLAC są duże ze względu na kompresję bezstratną — rozważ konwersję na format stratny, jeśli plik przekracza limit.' },
      ]}
      relatedLinks={[
        { href: '/pl/wav-to-text', label: 'WAV na tekst' },
        { href: '/pl/transcribe-mp3-to-text', label: 'MP3 na tekst' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
