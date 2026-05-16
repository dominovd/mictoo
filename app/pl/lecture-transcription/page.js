import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'it': 'https://mictoo.com/it/lecture-transcription',
  'pt': 'https://mictoo.com/pt/lecture-transcription',
  'pl': 'https://mictoo.com/pl/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: 'Transkrypcja wykładów — Z audio na tekst dla studentów | Mictoo',
  description: 'Przekształć nagrania wykładów w tekst do nauki. Za darmo, bez konta. Prześlij MP3 lub M4A i otrzymaj czystą transkrypcję w kilka sekund.',
  alternates: { canonical: 'https://mictoo.com/pl/lecture-transcription', languages: LANGS },
}

export default function PlLecturePage() {
  return (
    <LandingLayout
      badge="Studenci · Uniwersytet · Za darmo"
      h1={<>Transkrypcja wykładów<br /><span className="text-brand-600">Z audio na notatki</span></>}
      subtitle="Prześlij nagranie wykładu i otrzymaj pełną transkrypcję tekstową. Idealne do powtórek, nauki i robienia notatek. Bez konta, bez aplikacji."
      defaultLanguage="pl"
      features={[
        { icon: '🎓', title: 'Dla studentów', desc: 'Nagraj wykład, prześlij do Mictoo i otrzymaj przeszukiwalny tekst w kilka sekund. Dodaj swoje komentarze w przeglądarce.' },
        { icon: '🔍', title: 'Szukaj w wykładach', desc: 'Przekształć godziny audio w przeszukiwalny tekst. Szybko znajdź definicję, koncept lub odniesienie, którego potrzebujesz.' },
        { icon: '🌍', title: '50+ języków', desc: 'Działa z wykładami w polskim, angielskim, hiszpańskim, francuskim, niemieckim i wielu innych językach akademickich.' },
      ]}
      faq={[
        { q: 'Jak nagrać wykład do transkrypcji?', a: 'iPhone: aplikacja Voice Memos. Android: wbudowany dyktafon. Laptop: QuickTime (Mac) lub Voice Recorder (Windows). Eksportuj w MP3 lub M4A i prześlij tutaj.' },
        { q: 'Czy nagrywanie wykładu jest legalne?', a: 'Zależy od polityki twojej uczelni i lokalnego prawa. Wiele uczelni pozwala na nagrywanie do użytku osobistego; niektóre wymagają zgody wykładowcy. Sprawdź najpierw.' },
        { q: 'Jak dokładna jest transkrypcja wykładu?', a: 'Dla wykładowcy mówiącego wyraźnie w sali z małym hałasem dokładność przekracza 95%. Hałas w tle, mocne akcenty lub bardzo duże sale mogą obniżyć dokładność.' },
        { q: 'Czy mogę transkrybować wykład w języku obcym?', a: 'Tak. Mictoo obsługuje ponad 50 języków z automatycznym wykrywaniem. Działa bardzo dobrze dla wykładów po angielsku, hiszpańsku, francusku, niemiecku i wielu innych.' },
        { q: 'Jaki jest maksymalny czas wykładu?', a: 'Do 25 MB na plik. Dla wykładu 60-90 minutowego eksportuj w mono 64 kbps lub podziel na krótsze segmenty.' },
      ]}
      relatedLinks={[
        { href: '/pl/transcribe-mp3-to-text', label: 'MP3 na tekst' },
        { href: '/pl/m4a-to-text', label: 'M4A na tekst' },
        { href: '/pl/voice-memo-to-text', label: 'Notatka głosowa na tekst' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
