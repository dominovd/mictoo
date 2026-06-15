import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'pl': 'https://mictoo.com/pl/sermon-transcription',
  'ja': 'https://mictoo.com/ja/sermon-transcription',
  'ko': 'https://mictoo.com/ko/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: 'Transkrypcja kazań — Darmowy generator transkryptów kazań | Mictoo',
  description: 'Transkrybuj kazania i audio kościelne na tekst za darmo. Idealne do blogów, notatek do studium i dostępności. Obsługuje MP3, MP4, M4A. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/sermon-transcription', languages: LANGS },

  openGraph: {
    title: "Transkrypcja kazań — Darmowy generator transkryptów kazań | Mictoo",
    description: "Transkrybuj kazania i audio kościelne na tekst za darmo. Idealne do blogów, notatek do studium i dostępności. Obsługuje MP3, MP4, M4A. Bez rejestracji.",
    url: "https://mictoo.com/pl/sermon-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transkrypcja kazań — Darmowy generator transkryptów kazań | Mictoo",
    description: "Transkrybuj kazania i audio kościelne na tekst za darmo. Idealne do blogów, notatek do studium i dostępności. Obsługuje MP3, MP4, M4A. Bez rejestracji.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlSermonPage() {
  return (
    <LandingLayout
      badge="Kazania · Kościół · Za darmo"
      h1={<>Transkrypcja kazań<br /><span className="text-brand-600">Darmowy generator transkryptów</span></>}
      subtitle="Przekształć nagrania kazań w czysty tekst w kilka sekund. Idealne do blogów kościelnych, przewodników do studium, postów na social media i uczynienia przesłania dostępnym dla niesłyszących."
      defaultLanguage="pl"
      valueBlock={
        <>
          <p>Transkrypcja kazania może stać się notatkami dla kościoła, napisami YouTube, materiałem dla małych grup, cytatami i przeszukiwalnym archiwum.</p>
          <p>Mictoo pomaga zamienić audio lub wideo z nabożeństwa w edytowalny tekst do publikacji, korekty i ponownego użycia.</p>
        </>
      }
      howItWorks={[
        { title: 'Prześlij audio kazania', desc: 'Użyj MP3, WAV, M4A albo wideo wyeksportowanego z nabożeństwa.' },
        { title: 'Otrzymaj szkic', desc: 'Mictoo generuje transkrypcję z timestampami do sprawdzenia fragmentów i nazw.' },
        { title: 'Opublikuj lub wykorzystaj ponownie', desc: 'Eksportuj tekst na stronę, do notatek, napisów albo archiwum wewnętrznego.' },
      ]}
      whyUse={{
        title: 'Dlaczego transkrybować kazania',
        bullets: [
          { title: 'Dostępność', desc: 'Pomaga osobom, które wolą czytać albo potrzebują wsparcia tekstowego.' },
          { title: 'Ponowne użycie treści', desc: 'Zamieniaj przesłania w posty, newslettery, rozważania lub cytaty.' },
          { title: 'Przeszukiwalne archiwum', desc: 'Szybciej znajduj tematy, serie i odniesienia biblijne.' },
          { title: 'Wsparcie zespołu media', desc: 'Ułatwia przygotowanie napisów i opisów do filmów.' },
        ],
      }}
      useCases={{
        title: 'Zastosowania dla kościołów',
        items: [
          { title: 'Strona kazania', desc: 'Opublikuj tekst obok audio lub wideo.' },
          { title: 'Napisy YouTube', desc: 'Stwórz bazę do captions i ręcznej korekty.' },
          { title: 'Materiał dla grup', desc: 'Wyciągaj pytania, główne punkty i cytaty.' },
          { title: 'Serie kazań', desc: 'Szukaj powtarzających się tematów w miesiącach lub latach nagrań.' },
        ],
      }}
      proTips={{
        title: 'Wskazówki dla kazań',
        tips: [
          { title: 'Wyodrębnij audio z dużych filmów', desc: 'Przesłanie samej ścieżki głosu zwykle jest szybsze.' },
          { title: 'Sprawdź nazwy biblijne', desc: 'Nazwy własne i odniesienia mogą wymagać korekty.' },
          { title: 'Dziel długie konferencje', desc: 'Jeden plik na sesję ułatwia przegląd i publikację.' },
        ],
      }}
      faq={[
        { q: 'Jak przekształcić nagranie kazania w tekst?', a: 'Eksportuj nagranie z konsoli dźwiękowej kościoła, z feedu podcastów lub z YouTube jako MP3, MP4 lub M4A. Prześlij plik powyżej — Mictoo transkrybuje w kilka sekund.' },
        { q: 'Czy mogę transkrybować kazania z kanału YouTube naszego kościoła?', a: 'Tak. Dla swojego kanału: YouTube Studio → Treść → kliknij wideo → Pobierz. Prześlij plik do Mictoo. Dla zewnętrznych kanałów potrzebujesz pozwolenia — wiele służb udostępnia pobieranie audio przez feed podcastów.' },
        { q: 'A wersety biblijne i imiona własne?', a: 'Transkrypcja AI dobrze radzi sobie z popularnymi wersetami i imionami, ale czasami błędnie zapisuje rzadkie biblijne imiona lub terminologię specyficzną dla twojego kościoła. Popraw je w edytorze przeglądarki przed pobraniem — zwykle 30 sekund recenzji.' },
        { q: 'Jaka jest maksymalna długość kazania?', a: 'Do 25 MB na plik. 30-minutowe kazanie w 128 kbps mieści się wygodnie. Dla dłuższych przesłań (45-60 minut) obniż bitrate do 64 kbps mono lub podziel na dwie części.' },
        { q: 'Czy pliki pozostają prywatne?', a: 'Tak. Kazania są przetwarzane i natychmiastowo usuwane. Nie przechowujemy ani audio, ani treści transkrypcji.' },
      ]}
      relatedLinks={[
        { href: '/pl/podcast-transcription', label: 'Transkrypcja podcastów' },
        { href: '/pl/lecture-transcription', label: 'Transkrypcja wykładów' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
