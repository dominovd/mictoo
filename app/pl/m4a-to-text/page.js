import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'pt': 'https://mictoo.com/pt/m4a-to-text',
  'pl': 'https://mictoo.com/pl/m4a-to-text',
  'ja': 'https://mictoo.com/ja/m4a-to-text',
  'ko': 'https://mictoo.com/ko/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4A na tekst — Darmowa transkrypcja M4A online | Mictoo',
  description: 'Konwertuj pliki audio M4A na tekst za darmo. Prześlij dowolny plik M4A — Voice Memos iPhone, nagrania, podcasty — i otrzymaj transkrypcję natychmiast. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/m4a-to-text', languages: LANGS },

  openGraph: {
    title: "M4A na tekst — Darmowa transkrypcja M4A online | Mictoo",
    description: "Konwertuj pliki audio M4A na tekst za darmo. Prześlij dowolny plik M4A — Voice Memos iPhone, nagrania, podcasty — i otrzymaj transkrypcję natychmiast. Bez rejestracji.",
    url: "https://mictoo.com/pl/m4a-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "M4A na tekst — Darmowa transkrypcja M4A online | Mictoo",
    description: "Konwertuj pliki audio M4A na tekst za darmo. Prześlij dowolny plik M4A — Voice Memos iPhone, nagrania, podcasty — i otrzymaj transkrypcję natychmiast. Bez rejestracji.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlM4AToTextPage() {
  return (
    <LandingLayout
      badge="M4A · iPhone · Za darmo · Natychmiast"
      h1={<>M4A na tekst<br /><span className="text-brand-600">Darmowa transkrypcja M4A online</span></>}
      subtitle="Konwertuj pliki audio M4A na tekst natychmiast. Idealne do Voice Memos iPhone, nagrań głosowych i plików podcastów. Bez konta."
      defaultLanguage="pl"
      valueBlock={
        <>
          <p>M4A to typowy kontener iPhone’a, Dyktafonu, GarageBand, Logic i wielu aplikacji do nagrywania. Zwykle przechowuje audio AAC albo ALAC.</p>
          <p>Mictoo transkrybuje M4A bezpośrednio, więc nie trzeba konwertować notatek głosowych i nagrań mobilnych przed uzyskaniem tekstu.</p>
        </>
      }
      howItWorks={[
        { title: 'Prześlij M4A', desc: 'Dodaj notatkę głosową, wywiad albo eksport audio z Apple.' },
        { title: 'Audio jest przetwarzane', desc: 'Mictoo czyta kontener i generuje edytowalną transkrypcję.' },
        { title: 'Sprawdź i pobierz', desc: 'Popraw szczegóły i wyeksportuj tekst albo napisy.' },
      ]}
      whyUse={{
        title: 'Dlaczego Mictoo do M4A',
        bullets: [
          { title: 'Idealne do Dyktafonu iPhone', desc: 'Zamień nagrania z iPhone’a w tekst bez dodatkowych kroków.' },
          { title: 'Mniejsze niż WAV', desc: 'M4A jest praktyczne przy przesyłaniu wywiadów i długich notatek.' },
          { title: 'Zgodne z popularnymi źródłami', desc: 'Działa z audio mobilnym, podcastami i eksportami aplikacji.' },
          { title: 'Niedestrukcyjnie', desc: 'Zachowaj oryginalne audio i pracuj tylko na transkrypcji.' },
        ],
      }}
      useCases={{
        title: 'Kiedy transkrybować M4A',
        items: [
          { title: 'Notatki głosowe iPhone', desc: 'Zamień pomysły, wywiady i przypomnienia w edytowalny tekst.' },
          { title: 'GarageBand lub Logic', desc: 'Transkrybuj szkice, podcasty i wyeksportowane sesje.' },
          { title: 'Nagrane rozmowy', desc: 'Uzyskaj notatki z rozmów zapisanych jako audio mobilne.' },
          { title: 'Materiały do nauki', desc: 'Przekształć lekcje lub prywatne audiobooki w notatki.' },
        ],
      }}
      proTips={{
        title: 'Wskazówki dla M4A',
        tips: [
          { title: 'Przytnij długą ciszę', desc: 'Pliki przesyłają się i przeglądają lepiej bez pustych minut.' },
          { title: 'Nie używaj Lossless z przyzwyczajenia', desc: 'Dla czystej mowy zwykły AAC często wystarcza do transkrypcji.' },
          { title: 'Wybierz język przy mieszanym audio', desc: 'W krótkich lub dwujęzycznych nagraniach ręczny wybór języka pomaga.' },
        ],
      }}
      faq={[
        { q: 'Jak konwertuję M4A na tekst?', a: 'Prześlij plik M4A narzędziem powyżej. Transkrypcja jest generowana automatycznie i wyświetlana w kilka sekund.' },
        { q: 'Czy mogę transkrybować Voice Memos iPhone?', a: 'Tak. Voice Memos iPhone są zapisywane jako pliki M4A. Prześlij plik bezpośrednio z iPhone lub po przeniesieniu na komputer.' },
        { q: 'Czy M4A na tekst jest darmowy?', a: 'Tak, całkowicie darmowy. Bez konta, bez subskrypcji. Po prostu prześlij i transkrybuj.' },
        { q: 'Jaki jest maksymalny rozmiar M4A?', a: 'Do 25 MB. Większość nagrań głosowych i krótkich klipów audio mieści się z zapasem w tym limicie.' },
        { q: 'Jakie inne formaty audio są obsługiwane?', a: 'Oprócz M4A, Mictoo obsługuje MP3, MP4, WAV, OGG, WEBM i FLAC.' },
      ]}
      relatedLinks={[
        { href: '/pl/wav-to-text', label: 'WAV na tekst' },
        { href: '/pl/transcribe-mp3-to-text', label: 'MP3 na tekst' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
