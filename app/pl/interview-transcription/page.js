import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'pt': 'https://mictoo.com/pt/interview-transcription',
  'pl': 'https://mictoo.com/pl/interview-transcription',
  'ja': 'https://mictoo.com/ja/interview-transcription',
  'ko': 'https://mictoo.com/ko/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: 'Transkrypcja wywiadów — Z audio na tekst za darmo | Mictoo',
  description: 'Transkrybuj wywiady, badania użytkowników i podcasty na dwa głosy. Za darmo, bez konta. Prześlij MP3, M4A lub WAV i otrzymaj transkrypcję w kilka sekund.',
  alternates: { canonical: 'https://mictoo.com/pl/interview-transcription', languages: LANGS },
}

export default function PlInterviewPage() {
  return (
    <LandingLayout
      badge="Dziennikarze · Badania · Za darmo"
      h1={<>Transkrypcja wywiadów<br /><span className="text-brand-600">Z audio na tekst, za darmo</span></>}
      subtitle="Prześlij nagranie wywiadu i otrzymaj czystą transkrypcję w kilka sekund. Idealne do dziennikarstwa, badań użytkowników, cytatów w artykułach, podcastów na dwa głosy."
      defaultLanguage="pl"
      features={[
        { icon: '🎤', title: 'Dla dziennikarzy', desc: 'Przekształć nagrane wywiady w cytaty gotowe do wklejenia w artykule. Szukaj w tekście zamiast odsłuchiwać audio.' },
        { icon: '🧪', title: 'Dla badań użytkowników', desc: 'Sesje user research stają się przeszukiwalnym tekstem. Szybko znajdź wzorce, cytaty i wnioski w danych jakościowych.' },
        { icon: '🌍', title: '50+ języków', desc: 'Działa z wywiadami w polskim, angielskim, hiszpańskim, francuskim, niemieckim i wielu innych językach.' },
      ]}
      faq={[
        { q: 'Jak transkrybować wywiad na dwa głosy?', a: 'Prześlij plik audio (MP3, M4A, WAV) — Mictoo transkrybuje wszystko w jednym strumieniu. Aby oddzielić głosy (Rozmówca / Gość), możesz dodać etykiety ręcznie w edytorze przeglądarki.' },
        { q: 'Jak dokładna jest transkrypcja?', a: 'Dla czystych nagrań z dobrze oddzielonymi głosami dokładność przekracza 95%. Nakładające się głosy, bardzo mocne akcenty lub hałas w tle mogą obniżyć dokładność.' },
        { q: 'Czy mogę otrzymać etykiety mówców automatycznie?', a: 'Nie w planie darmowym. Transkrypcja to pojedynczy blok tekstu. Etykiety można dodać w 30-60 sekund w edytorze przed pobraniem.' },
        { q: 'Jak nagrać wywiad do transkrypcji?', a: 'Osobiście: aplikacja Voice Memos na iPhone lub dyktafon Android. Zdalnie: nagraj call Zoom/Meet/Teams. Eksportuj w MP3 lub M4A i prześlij tutaj.' },
        { q: 'Czy wywiady są prywatne?', a: 'Tak. Pliki są wysyłane do dostawcy AI tylko do transkrypcji i natychmiastowo usuwane. Mictoo nie przechowuje nic na swoich serwerach.' },
      ]}
      relatedLinks={[
        { href: '/pl/podcast-transcription', label: 'Transkrypcja podcastów' },
        { href: '/pl/business-transcription', label: 'Transkrypcja firmowa' },
        { href: '/pl/transcribe-mp3-to-text', label: 'MP3 na tekst' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
