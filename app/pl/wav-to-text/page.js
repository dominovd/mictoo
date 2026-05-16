import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-text',
  'fr': 'https://mictoo.com/fr/wav-to-text',
  'de': 'https://mictoo.com/de/wav-to-text',
  'es': 'https://mictoo.com/es/wav-to-text',
  'ru': 'https://mictoo.com/ru/wav-to-text',
  'it': 'https://mictoo.com/it/wav-to-text',
  'pt': 'https://mictoo.com/pt/wav-to-text',
  'pl': 'https://mictoo.com/pl/wav-to-text',
  'ja': 'https://mictoo.com/ja/wav-to-text',
  'ko': 'https://mictoo.com/ko/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export const metadata = {
  title: 'WAV na tekst — Darmowa transkrypcja WAV online | Mictoo',
  description: 'Konwertuj pliki WAV na tekst online za darmo. Prześlij dowolny plik audio WAV i otrzymaj precyzyjną transkrypcję w kilka sekund. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/wav-to-text', languages: LANGS },
}

export default function PlWavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · Za darmo · Natychmiast"
      h1={<>WAV na tekst<br /><span className="text-brand-600">Darmowa transkrypcja WAV online</span></>}
      subtitle="Prześlij dowolny plik audio WAV i otrzymaj precyzyjną transkrypcję tekstową w kilka sekund. Obsługa wszystkich nagrań WAV — wywiady, rozmowy, wykłady, notatki głosowe. Bez konta."
      defaultLanguage="pl"
      features={[
        { icon: '🎙️', title: 'Każdy WAV', desc: 'Standard WAV, PCM, broadcast WAV — dowolny format WAV do 25 MB.' },
        { icon: '⏱️', title: 'Timestamps w komplecie', desc: 'Pobierz transkrypcję jako .txt lub plik napisów .srt z timecodes.' },
        { icon: '🌍', title: '50+ języków', desc: 'Język wykrywany automatycznie. Działa z polskim, angielskim, hiszpańskim, francuskim, niemieckim, rosyjskim i wieloma innymi.' },
      ]}
      faq={[
        { q: 'Jak skonwertować plik WAV na tekst?', a: 'Prześlij plik WAV narzędziem powyżej. Mictoo transkrybuje go automatycznie przez AI i pokazuje tekst w kilka sekund.' },
        { q: 'Czy konwersja WAV na tekst jest darmowa?', a: 'Tak, całkowicie darmowa. Bez konta. Prześlij swoje WAVy — bez miesięcznej kwoty minut, bez rejestracji.' },
        { q: 'Jaki jest maksymalny rozmiar WAV?', a: 'Do 25 MB. Dla większych nagrań skonwertuj najpierw na MP3 lub podziel nagranie na segmenty.' },
        { q: 'Czy mogę otrzymać transkrypcję z timestampami z WAV?', a: 'Tak. Po transkrypcji kliknij przycisk .srt, aby pobrać plik napisów z dokładnymi timestampami dla każdego segmentu.' },
        { q: 'Jakie inne formaty audio są obsługiwane?', a: 'Mictoo obsługuje również MP3, MP4, M4A, OGG, WEBM i FLAC oprócz WAV.' },
      ]}
      relatedLinks={[
        { href: '/pl/transcribe-mp3-to-text', label: 'MP3 na tekst' },
        { href: '/pl/transcribe-audio-to-text', label: 'Audio na tekst' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
