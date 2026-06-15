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
  'ja': 'https://mictoo.com/ja/flac-to-text',
  'ko': 'https://mictoo.com/ko/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC na tekst — Darmowa transkrypcja audio FLAC online | Mictoo',
  description: 'Konwertuj pliki FLAC na tekst za darmo online. Prześlij dowolne nagranie FLAC i otrzymaj precyzyjną transkrypcję w kilka sekund. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/flac-to-text', languages: LANGS },

  openGraph: {
    title: "FLAC na tekst — Darmowa transkrypcja audio FLAC online | Mictoo",
    description: "Konwertuj pliki FLAC na tekst za darmo online. Prześlij dowolne nagranie FLAC i otrzymaj precyzyjną transkrypcję w kilka sekund. Bez rejestracji.",
    url: "https://mictoo.com/pl/flac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLAC na tekst — Darmowa transkrypcja audio FLAC online | Mictoo",
    description: "Konwertuj pliki FLAC na tekst za darmo online. Prześlij dowolne nagranie FLAC i otrzymaj precyzyjną transkrypcję w kilka sekund. Bez rejestracji.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlFlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · Bezstratny · Za darmo"
      h1={<>FLAC na tekst<br /><span className="text-brand-600">Darmowa transkrypcja FLAC online</span></>}
      subtitle="Prześlij dowolny plik audio FLAC i skonwertuj na tekst natychmiast. Bezstratna jakość FLAC zapewnia doskonałą precyzję transkrypcji. Bez konta."
      defaultLanguage="pl"
      valueBlock={
        <>
          <p>FLAC kompresuje audio bezstratnie, dlatego pojawia się w archiwach, masterach, wywiadach terenowych, kolekcjach muzycznych i materiale historycznym.</p>
          <p>Mictoo dekoduje FLAC bezpośrednio i generuje transkrypcję bez wcześniejszej konwersji do WAV lub MP3.</p>
        </>
      }
      howItWorks={[
        { title: 'Prześlij FLAC', desc: 'Dodaj nagranie lossless, wywiad albo archiwalny plik audio.' },
        { title: 'Mictoo dekoduje mowę', desc: 'Audio jest przetwarzane z zachowaniem informacji potrzebnych do rozpoznania głosu.' },
        { title: 'Eksportuj transkrypcję', desc: 'Skopiuj tekst albo pobierz TXT/SRT do archiwum, notatek lub napisów.' },
      ]}
      whyUse={{
        title: 'Dlaczego Mictoo do FLAC',
        bullets: [
          { title: 'Bez dodatkowej utraty jakości', desc: 'Unikasz konwersji do formatów stratnych przed transkrypcją.' },
          { title: 'Dobre dla archiwów', desc: 'FLAC przechowuje stary lub wrażliwy materiał w rozsądnym rozmiarze.' },
          { title: 'Pomocne przy trudnym audio', desc: 'Czyste źródło pomaga, gdy jest szum, echo albo ciche głosy.' },
          { title: 'Prosty przepływ pracy', desc: 'Prześlij plik i pracuj na tekście bez wersji pośrednich.' },
        ],
      }}
      useCases={{
        title: 'Kiedy transkrybować FLAC',
        items: [
          { title: 'Historia mówiona', desc: 'Zamieniaj długie wywiady w przeszukiwalne archiwa.' },
          { title: 'Mastery i sesje', desc: 'Wyciągaj tekst z materiału studyjnego lub edytowanych nagrań.' },
          { title: 'Nagrania terenowe', desc: 'Transkrybuj źródła zachowane w formacie bezstratnym.' },
          { title: 'Archiwa rodzinne', desc: 'Twórz tekst do wspomnień, cytatów i wyszukiwania.' },
        ],
      }}
      proTips={{
        title: 'Wskazówki dla FLAC',
        tips: [
          { title: 'Nie konwertuj do MP3, jeśli nie musisz', desc: 'Użyj FLAC, gdy mieści się w limicie przesyłania.' },
          { title: 'Dziel długie sesje', desc: 'Krótsze bloki łatwiej przejrzeć i poprawić.' },
          { title: 'Zachowaj master', desc: 'Utwórz kopię roboczą, jeśli musisz zmniejszyć rozmiar.' },
        ],
      }}
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
