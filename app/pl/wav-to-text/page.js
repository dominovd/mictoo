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

  openGraph: {
    title: "WAV na tekst — Darmowa transkrypcja WAV online | Mictoo",
    description: "Konwertuj pliki WAV na tekst online za darmo. Prześlij dowolny plik audio WAV i otrzymaj precyzyjną transkrypcję w kilka sekund. Bez rejestracji.",
    url: "https://mictoo.com/pl/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV na tekst — Darmowa transkrypcja WAV online | Mictoo",
    description: "Konwertuj pliki WAV na tekst online za darmo. Prześlij dowolny plik audio WAV i otrzymaj precyzyjną transkrypcję w kilka sekund. Bez rejestracji.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlWavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · Za darmo · Natychmiast"
      h1={<>WAV na tekst<br /><span className="text-brand-600">Darmowa transkrypcja WAV online</span></>}
      subtitle="Prześlij dowolny plik audio WAV i otrzymaj precyzyjną transkrypcję tekstową w kilka sekund. Obsługa wszystkich nagrań WAV — wywiady, rozmowy, wykłady, notatki głosowe. Bez konta."
      defaultLanguage="pl"
      valueBlock={
        <>
          <p>WAV to często nieskompresowane audio ze studia, rejestratora, DAW, wywiadów i archiwów. Jakość jest wysoka, ale pliki bywają duże.</p>
          <p>Mictoo zamienia WAV w edytowalną transkrypcję i pozwala eksportować tekst lub napisy bez ręcznego przepisywania nagrania.</p>
        </>
      }
      howItWorks={[
        { title: 'Prześlij WAV', desc: 'Dodaj wywiad, lekcję, podcast, bounce z DAW albo nagranie terenowe.' },
        { title: 'AI transkrybuje mowę', desc: 'Mictoo przetwarza audio i tworzy tekst z timestampami.' },
        { title: 'Edytuj i eksportuj', desc: 'Skopiuj tekst albo pobierz przydatne formaty, takie jak TXT lub SRT.' },
      ]}
      whyUse={{
        title: 'Dlaczego Mictoo do WAV',
        bullets: [
          { title: 'Bezpośrednie przesyłanie WAV', desc: 'Unikasz konwersji nagrań studyjnych lub z rejestratora, gdy plik mieści się w limicie.' },
          { title: 'Przydatne dla źródeł profesjonalnych', desc: 'Działa przy wywiadach, podcastach, lekcjach, archiwach i DAW.' },
          { title: 'Timestampy do korekty', desc: 'Wróć do oryginalnego audio przy poprawianiu cytatów lub nazwisk.' },
          { title: 'Wskazówki dla dużych plików', desc: 'Możesz stworzyć lżejszą kopię mono, jeśli pełny WAV jest za ciężki.' },
        ],
      }}
      useCases={{
        title: 'Kiedy transkrybować WAV',
        items: [
          { title: 'Wywiady', desc: 'Wyciągaj cytaty i pytania z czystych nagrań.' },
          { title: 'Podcasty', desc: 'Twórz show notes, captions i treści do ponownego użycia.' },
          { title: 'Lekcje i wykłady', desc: 'Zamieniaj długie sesje w notatki do przeszukania.' },
          { title: 'Archiwa', desc: 'Uczyń stare lub instytucjonalne nagrania łatwiejszymi do znalezienia.' },
        ],
      }}
      proTips={{
        title: 'Wskazówki dla WAV',
        tips: [
          { title: 'Użyj kopii 16 kHz mono, jeśli plik jest ciężki', desc: 'Dla mowy lżejsza kopia robocza często wystarcza.' },
          { title: 'Przytnij ciszę', desc: 'Zmniejsz rozmiar i czas przeglądu bez usuwania treści mówionej.' },
          { title: 'Zachowaj oryginalny WAV', desc: 'Trzymaj master i używaj wersji skompresowanej tylko, gdy chcesz szybciej przesłać plik.' },
        ],
      }}
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
