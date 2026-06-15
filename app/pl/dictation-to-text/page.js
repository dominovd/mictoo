import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/dictation-to-text',
  'fr': 'https://mictoo.com/fr/dictation-to-text',
  'de': 'https://mictoo.com/de/dictation-to-text',
  'es': 'https://mictoo.com/es/dictation-to-text',
  'ru': 'https://mictoo.com/ru/dictation-to-text',
  'it': 'https://mictoo.com/it/dictation-to-text',
  'pt': 'https://mictoo.com/pt/dictation-to-text',
  'pl': 'https://mictoo.com/pl/dictation-to-text',
  'ja': 'https://mictoo.com/ja/dictation-to-text',
  'ko': 'https://mictoo.com/ko/dictation-to-text',
  'x-default': 'https://mictoo.com/dictation-to-text',
}

export const metadata = {
  title: 'Dyktowanie na tekst — Darmowa transkrypcja dyktowania głosowego | Mictoo',
  description: 'Konwertuj dyktowane nagrania audio na tekst za darmo. Idealne dla pisarzy, lekarzy, prawników i badaczy. Obsługuje MP3, M4A, WAV. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/dictation-to-text', languages: LANGS },

  openGraph: {
    title: "Dyktowanie na tekst — Darmowa transkrypcja dyktowania głosowego | Mictoo",
    description: "Konwertuj dyktowane nagrania audio na tekst za darmo. Idealne dla pisarzy, lekarzy, prawników i badaczy. Obsługuje MP3, M4A, WAV. Bez rejestracji.",
    url: "https://mictoo.com/pl/dictation-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dyktowanie na tekst — Darmowa transkrypcja dyktowania głosowego | Mictoo",
    description: "Konwertuj dyktowane nagrania audio na tekst za darmo. Idealne dla pisarzy, lekarzy, prawników i badaczy. Obsługuje MP3, M4A, WAV. Bez rejestracji.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlDictationPage() {
  return (
    <LandingLayout
      badge="Dyktowanie · Głos → Tekst · Za darmo"
      h1={<>Dyktowanie na tekst<br /><span className="text-brand-600">Darmowa transkrypcja dyktowania głosowego</span></>}
      subtitle="Nagraj swoje myśli, podyktuj rozdział lub rób notatki — a następnie prześlij plik tutaj, aby uzyskać precyzyjną transkrypcję tekstową. Bez rejestracji, bez aplikacji do instalacji."
      defaultLanguage="pl"
      valueBlock={
        <>
          <p>Nagrane dyktowanie różni się od spotkania. Często zawiera długie pomysły, pauzy, poprawki i zdania, które później mają stać się szkicem.</p>
          <p>Mictoo pozwala najpierw nagrać myśli, bez presji czasu, a potem zamienić audio w edytowalny tekst.</p>
        </>
      }
      howItWorks={[
        { title: 'Nagraj dyktowanie', desc: 'Użyj telefonu, dyktafonu albo dowolnej aplikacji głosowej.' },
        { title: 'Prześlij audio', desc: 'Mictoo transkrybuje je i zachowuje strukturę łatwą do przeglądu.' },
        { title: 'Zamień w szkic', desc: 'Edytuj zdania, tytuły, listy i notatki, aż powstanie użyteczny tekst.' },
      ]}
      whyUse={{
        title: 'Dlaczego Mictoo do dyktowania',
        bullets: [
          { title: 'Bez presji czasu rzeczywistego', desc: 'Możesz mówić, zatrzymać się i wrócić do myśli przed edycją.' },
          { title: 'Dobre do długich pomysłów', desc: 'Zamienia pełne myśli w pierwszy szkic.' },
          { title: 'Pomocne przy akcentach i językach', desc: 'Wybierz język, gdy automatyczne wykrywanie ma mało kontekstu.' },
          { title: 'Prosta późniejsza edycja', desc: 'Popraw interpunkcję, nazwy i sekcje w tekście.' },
        ],
      }}
      useCases={{
        title: 'Co dyktować',
        items: [
          { title: 'Artykuły', desc: 'Opowiedz konspekt i zamień go w pierwszy szkic.' },
          { title: 'Notatki po rozmowie', desc: 'Podsumuj decyzje zaraz po konwersacji.' },
          { title: 'Rozdziały lub pomysły na książkę', desc: 'Uchwyć długi tekst, gdy pisanie spowalnia rytm.' },
          { title: 'Notatki zawodowe', desc: 'Dokumentuj wizyty, zadania lub raporty, gdy są jeszcze świeże.' },
        ],
      }}
      proTips={{
        title: 'Wskazówki do lepszego dyktowania',
        tips: [
          { title: 'Mów pełnymi zdaniami', desc: 'Interpunkcja i edycja wychodzą lepiej przy zamkniętych myślach.' },
          { title: 'Rób pauzy między sekcjami', desc: 'Łatwiej będzie później oddzielić akapity i nagłówki.' },
          { title: 'Wypowiadaj znaczniki', desc: 'Frazy typu „punkt pierwszy” lub „nowa sekcja” pomagają w edycji.' },
        ],
      }}
      faq={[
        { q: 'Jak nagrać dyktowanie na telefonie?', a: 'iPhone: aplikacja Voice Memos — eksport w .m4a. Android: wbudowany dyktafon lub Easy Voice Recorder — eksport w .mp3 lub .m4a. Prześlij plik do Mictoo.' },
        { q: 'Czy Mictoo to narzędzie do dyktowania w czasie rzeczywistym?', a: 'Nie — Mictoo transkrybuje istniejące pliki audio. Do dyktowania w czasie rzeczywistym (mówisz i widzisz tekst) użyj wbudowanego dyktowania systemu (macOS, Windows, iOS, Android). Użyj Mictoo później do oczyszczenia długich nagrań.' },
        { q: 'Jak dokładna jest transkrypcja dyktowania?', a: 'Czyste dyktowanie z jednym mówcą jest zwykle transkrybowane z dokładnością 95%+. Mów w naturalnym tempie, w cichym pomieszczeniu, używaj słuchawek dla najlepszych rezultatów.' },
        { q: 'Czy mogę używać do dyktowania medycznego lub prawnego?', a: 'Tak, ale sprawdź lokalne przepisy dotyczące przetwarzania AI danych pacjentów lub klientów. Mictoo nie przechowuje plików — ale audio przechodzi przez naszego dostawcę AI do transkrypcji. Dla procesów regulowanych skonsultuj się z zespołem compliance.' },
        { q: 'Jaka jest maksymalna długość dyktowania?', a: 'Do 25 MB. Przy 64 kbps mono to około 50 minut dyktowania. Dla dłuższych nagrań podziel na rozdziały lub obniż bitrate.' },
      ]}
      relatedLinks={[
        { href: '/pl/voice-memo-to-text', label: 'Notatka głosowa na tekst' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
