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
  'ko': 'https://mictoo.com/ko/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGG na tekst — Darmowa transkrypcja audio OGG online | Mictoo',
  description: 'Konwertuj pliki audio OGG na tekst za darmo online. Prześlij dowolne nagranie OGG Vorbis i otrzymaj precyzyjną transkrypcję natychmiast. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/ogg-to-text', languages: LANGS },

  openGraph: {
    title: "OGG na tekst — Darmowa transkrypcja audio OGG online | Mictoo",
    description: "Konwertuj pliki audio OGG na tekst za darmo online. Prześlij dowolne nagranie OGG Vorbis i otrzymaj precyzyjną transkrypcję natychmiast. Bez rejestracji.",
    url: "https://mictoo.com/pl/ogg-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OGG na tekst — Darmowa transkrypcja audio OGG online | Mictoo",
    description: "Konwertuj pliki audio OGG na tekst za darmo online. Prześlij dowolne nagranie OGG Vorbis i otrzymaj precyzyjną transkrypcję natychmiast. Bez rejestracji.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlOggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · Za darmo · Natychmiast"
      h1={<>OGG na tekst<br /><span className="text-brand-600">Darmowa transkrypcja OGG online</span></>}
      subtitle="Prześlij dowolny plik audio OGG i skonwertuj na tekst w kilka sekund. Obsługa OGG Vorbis i OGG Opus. Bez konta."
      defaultLanguage="pl"
      valueBlock={
        <>
          <p>OGG to kontener: może zawierać audio Vorbis, Opus albo inne warianty. Często pojawia się w wiadomościach głosowych, narzędziach open source, eksportach z Linuksa i aplikacjach webowych.</p>
          <p>Mictoo wyodrębnia ścieżkę audio, rozpoznaje kodek i tworzy czytelną transkrypcję z timestampami, bez wcześniejszej konwersji pliku.</p>
        </>
      }
      howItWorks={[
        { title: 'Prześlij plik OGG', desc: 'Dodaj .ogg lub .oga z Telegrama, przeglądarki, dyktafonu albo narzędzia Linux.' },
        { title: 'Mictoo rozpoznaje kodek', desc: 'System czyta kontener i przetwarza właściwą ścieżkę Vorbis lub Opus.' },
        { title: 'Pobierz tekst', desc: 'Skopiuj transkrypcję albo wyeksportuj TXT/SRT z timestampami.' },
      ]}
      whyUse={{
        title: 'Dlaczego Mictoo do OGG',
        bullets: [
          { title: 'Obsługa OGG i OGA', desc: 'Przydatne przy plikach, których wiele ogólnych narzędzi nadal nie przyjmuje.' },
          { title: 'Bez wcześniejszej konwersji', desc: 'Nie musisz przechodzić przez MP3 tylko po to, by szybko dostać tekst.' },
          { title: 'Praktyczne timestampy', desc: 'Wróć do wiadomości lub nagrania z jasnymi odniesieniami czasowymi.' },
          { title: 'Dobre dla Opus z webu', desc: 'Sprawdza się przy audio z rozmów, przeglądarek i komunikatorów.' },
        ],
      }}
      useCases={{
        title: 'Kiedy transkrybować OGG',
        items: [
          { title: 'Wiadomości Telegram', desc: 'Zamień krótkie pliki .oga w notatki do przeszukania.' },
          { title: 'Nagrania z Linuksa', desc: 'Transkrybuj capture z narzędzi audio open source.' },
          { title: 'Rozmowy WebRTC', desc: 'Odzyskaj treść spotkań lub testów nagranych w Opus.' },
          { title: 'Archiwa audio', desc: 'Uczyń stare OGG przeszukiwalnymi bez ponownego kodowania.' },
        ],
      }}
      proTips={{
        title: 'Wskazówki dla plików OGG',
        tips: [
          { title: 'Sprawdź także .oga', desc: 'Wiele wiadomości głosowych używa tego rozszerzenia przy podobnym typie audio.' },
          { title: 'Wyodrębnij samo audio, jeśli plik jest ciężki', desc: 'Przy dużych nagraniach sama ścieżka głosu może przesłać się szybciej.' },
          { title: 'Ustaw język przy krótkich klipach', desc: 'Automatyczne wykrywanie ma mniej kontekstu w kilkusekundowych wiadomościach.' },
        ],
      }}
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
