import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'ja': 'https://mictoo.com/ja/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'Transkrypcja ze znacznikami czasu — Darmowy generator z timecode | Mictoo',
  description: 'Generuj transkrypcje ze znacznikami czasu za darmo. Prześlij audio lub wideo i pobierz plik SRT z dokładnymi timecodes. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/timestamped-transcription', languages: LANGS },
}

export default function PlTimestampedPage() {
  return (
    <LandingLayout
      badge="Timecode · SRT · Za darmo"
      h1={<>Transkrypcja ze znacznikami czasu<br /><span className="text-brand-600">Darmowa transkrypcja z timecode</span></>}
      subtitle="Prześlij dowolny plik audio lub wideo i otrzymaj transkrypcję z dokładnymi znacznikami czasu. Pobierz jako SRT — gotowy do YouTube, edytorów wideo i narzędzi do napisów. Bez rejestracji."
      defaultLanguage="pl"
      features={[
        { icon: '⏱️', title: 'Automatyczne timecodes', desc: 'Każdy segment otrzymuje precyzyjny timestamp początku i końca — generowany automatycznie z twojego audio.' },
        { icon: '📄', title: 'Pobranie w .srt', desc: 'Eksportuj transkrypcję ze znacznikami czasu jako plik napisów SRT. Wgraj bezpośrednio na YouTube, Premiere, DaVinci lub w dowolne narzędzie do napisów.' },
        { icon: '✏️', title: 'Edytowalny tekst', desc: 'Przejrzyj i edytuj transkrypcję w przeglądarce przed pobraniem. Nie jest wymagane konto.' },
      ]}
      faq={[
        { q: 'Czym jest transkrypcja ze znacznikami czasu?', a: 'Transkrypcja ze znacznikami czasu (lub z timecodes) to tekstowa wersja audio lub wideo, w której każda linia zawiera dokładny czas, w którym została wypowiedziana — np. "00:01:23 → Witaj, witaj w programie". Pozwala synchronizować tekst z oryginalnymi mediami.' },
        { q: 'Jak utworzyć transkrypcję ze znacznikami czasu za darmo?', a: 'Prześlij plik audio lub wideo do narzędzia powyżej. Mictoo automatycznie generuje transkrypcję ze znacznikami czasu i pozwala pobrać ją w SRT lub w prostym tekście z timecodes.' },
        { q: 'Czym jest plik SRT?', a: 'SRT (SubRip Subtitle) to standardowy format pliku napisów zawierający segmenty tekstu ze znacznikami czasu. Pliki SRT są obsługiwane przez YouTube, Netflix, Premiere Pro, Final Cut, DaVinci Resolve i większość platform wideo i edytorów.' },
        { q: 'Czy mogę użyć SRT jako napisów na YouTube?', a: 'Tak. Po pobraniu .srt przejdź do YouTube Studio → Napisy → Dodaj język → Prześlij plik. Twoje napisy ze znacznikami czasu zostaną automatycznie zsynchronizowane z wideo.' },
        { q: 'Jak dokładne są timestamps?', a: 'Timestamps są generowane na poziomie segmentu (zwykle co 5-15 sekund). Dokładność jest wysoka dla czystego audio. Nakładające się głosy lub silny hałas w tle mogą wpłynąć na dokładność.' },
        { q: 'Jaka jest różnica między transkrypcją a transkrypcją ze znacznikami czasu?', a: 'Prosta transkrypcja to tekstowa wersja audio. Transkrypcja ze znacznikami czasu dodaje timestamps, aby każda sekcja mogła być powiązana z dokładnym momentem nagrania — niezbędne dla napisów i montażu wideo.' },
        { q: 'Jakie formaty są obsługiwane?', a: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Dowolny plik audio lub wideo do 25 MB.' },
      ]}
      relatedLinks={[
        { href: '/pl/free-srt-generator', label: 'Generator SRT' },
        { href: '/pl/transcribe-video-to-text', label: 'Wideo na tekst' },
        { href: '/pl/transcribe-audio-to-text', label: 'Audio na tekst' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
