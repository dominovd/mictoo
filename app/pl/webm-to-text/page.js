import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-text',
  'fr': 'https://mictoo.com/fr/webm-to-text',
  'de': 'https://mictoo.com/de/webm-to-text',
  'es': 'https://mictoo.com/es/webm-to-text',
  'ru': 'https://mictoo.com/ru/webm-to-text',
  'it': 'https://mictoo.com/it/webm-to-text',
  'pt': 'https://mictoo.com/pt/webm-to-text',
  'pl': 'https://mictoo.com/pl/webm-to-text',
  'ja': 'https://mictoo.com/ja/webm-to-text',
  'ko': 'https://mictoo.com/ko/webm-to-text',
  'x-default': 'https://mictoo.com/webm-to-text',
}

export const metadata = {
  title: 'WEBM na tekst — Darmowa transkrypcja WEBM online | Mictoo',
  description: 'Konwertuj pliki audio i wideo WEBM na tekst za darmo online. Prześlij dowolne nagranie WEBM i otrzymaj precyzyjną transkrypcję natychmiast. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/webm-to-text', languages: LANGS },
}

export default function PlWebmToTextPage() {
  return (
    <LandingLayout
      badge="WEBM · Nagrania przeglądarki · Za darmo"
      h1={<>WEBM na tekst<br /><span className="text-brand-600">Darmowa transkrypcja WEBM online</span></>}
      subtitle="Prześlij dowolny plik audio lub wideo WEBM i otrzymaj precyzyjną transkrypcję tekstową w kilka sekund. WEBM jest powszechnie używany przez przeglądarki, rejestratory ekranu i narzędzia wideokonferencji. Bez konta."
      defaultLanguage="pl"
      features={[
        { icon: '🖥️', title: 'Przeglądarka i ekran', desc: 'WEBM to domyślny format dla nagrań ekranu Chrome i Firefox, klipów Loom i nagrań WebRTC.' },
        { icon: '🎬', title: 'WEBM audio i wideo', desc: 'Obsługa zarówno WEBM tylko audio, jak i WEBM wideo. Audio jest wyodrębniane automatycznie.' },
        { icon: '📄', title: 'Eksport .txt i .srt', desc: 'Pobierz transkrypcję jako prosty tekst lub jako plik SRT z timestampami.' },
      ]}
      faq={[
        { q: 'Jak konwertuję WEBM na tekst?', a: 'Prześlij plik WEBM powyżej. Transkrypcja jest generowana automatycznie w kilka sekund.' },
        { q: 'Czy konwersja WEBM na tekst jest darmowa?', a: 'Tak, całkowicie darmowa. Bez konta i rejestracji.' },
        { q: 'Czy mogę transkrybować nagrania ekranu z Chrome?', a: 'Tak. Wbudowany rejestrator ekranu Chrome zapisuje wideo jako WEBM. Prześlij plik bezpośrednio, aby uzyskać transkrypcję.' },
        { q: 'Jaki jest maksymalny rozmiar WEBM?', a: 'Do 25 MB. Dla większych nagrań wyodrębnij najpierw ścieżkę audio, aby zmniejszyć rozmiar.' },
      ]}
      relatedLinks={[
        { href: '/pl/transcribe-video-to-text', label: 'Wideo na tekst' },
        { href: '/pl/wav-to-text', label: 'WAV na tekst' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
