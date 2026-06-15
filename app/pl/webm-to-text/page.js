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

  openGraph: {
    title: "WEBM na tekst — Darmowa transkrypcja WEBM online | Mictoo",
    description: "Konwertuj pliki audio i wideo WEBM na tekst za darmo online. Prześlij dowolne nagranie WEBM i otrzymaj precyzyjną transkrypcję natychmiast. Bez rejestracji.",
    url: "https://mictoo.com/pl/webm-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBM na tekst — Darmowa transkrypcja WEBM online | Mictoo",
    description: "Konwertuj pliki audio i wideo WEBM na tekst za darmo online. Prześlij dowolne nagranie WEBM i otrzymaj precyzyjną transkrypcję natychmiast. Bez rejestracji.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlWebmToTextPage() {
  return (
    <LandingLayout
      badge="WEBM · Nagrania przeglądarki · Za darmo"
      h1={<>WEBM na tekst<br /><span className="text-brand-600">Darmowa transkrypcja WEBM online</span></>}
      subtitle="Prześlij dowolny plik audio lub wideo WEBM i otrzymaj precyzyjną transkrypcję tekstową w kilka sekund. WEBM jest powszechnie używany przez przeglądarki, rejestratory ekranu i narzędzia wideokonferencji. Bez konta."
      defaultLanguage="pl"
      valueBlock={
        <>
          <p>WEBM często pochodzi z nagrań przeglądarki, screen recordingów, Loom, OBS albo rozmów webowych. Może zawierać wideo, ale do transkrypcji kluczowa jest ścieżka głosu.</p>
          <p>Mictoo wyodrębnia audio z WEBM i zamienia je na tekst z timestampami, bez ręcznego renderowania do innego formatu.</p>
        </>
      }
      howItWorks={[
        { title: 'Prześlij WEBM', desc: 'Dodaj nagranie z przeglądarki, ekranu lub rozmowy.' },
        { title: 'Audio jest wyodrębniane', desc: 'Mictoo przetwarza głos i generuje edytowalną transkrypcję.' },
        { title: 'Eksportuj tekst lub napisy', desc: 'Pobierz TXT albo SRT do notatek, dokumentacji lub captions.' },
      ]}
      whyUse={{
        title: 'Dlaczego Mictoo do WEBM',
        bullets: [
          { title: 'Mniej technicznych kroków', desc: 'Nie musisz uruchamiać ffmpeg tylko po to, by wyjąć audio z nagrania webowego.' },
          { title: 'Dopasowane timestampy', desc: 'Znaczniki czasu pomagają wrócić do właściwego momentu filmu.' },
          { title: 'Dobre dla Opus', desc: 'WEBM często używa Opus, który jest wydajny dla mowy.' },
          { title: 'Praktyczna prywatność', desc: 'Transkrybuj lokalne nagranie bez publikowania go na platformie wideo.' },
        ],
      }}
      useCases={{
        title: 'Kiedy transkrybować WEBM',
        items: [
          { title: 'Nagrania Loom', desc: 'Zamieniaj tutoriale i dema w notatki lub dokumentację.' },
          { title: 'Capture z OBS', desc: 'Wyciągaj tekst z lekcji, webinarów lub testów produktu.' },
          { title: 'Spotkania w przeglądarce', desc: 'Odzyskaj decyzje i pytania z lokalnych nagrań.' },
          { title: 'QA i research', desc: 'Transkrybuj sesje użytkowników, by przeglądać cytaty i problemy.' },
        ],
      }}
      proTips={{
        title: 'Wskazówki dla WEBM',
        tips: [
          { title: 'Wyodrębnij audio, jeśli wideo jest ogromne', desc: 'Ścieżka OPUS lub M4A może przesłać się szybciej niż cały WEBM.' },
          { title: 'Zadbaj o mikrofon', desc: 'Czysty głos poprawia transkrypcję bardziej niż wysoka rozdzielczość wideo.' },
          { title: 'Zachowaj oryginalny WEBM', desc: 'Przyda się później do montażu klipów lub weryfikacji timestampów.' },
        ],
      }}
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
