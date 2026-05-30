import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/descript-alternative',
  'fr': 'https://mictoo.com/fr/descript-alternative',
  'de': 'https://mictoo.com/de/descript-alternative',
  'es': 'https://mictoo.com/es/descript-alternative',
  'ru': 'https://mictoo.com/ru/descript-alternative',
  'it': 'https://mictoo.com/it/descript-alternative',
  'pt': 'https://mictoo.com/pt/descript-alternative',
  'pl': 'https://mictoo.com/pl/descript-alternative',
  'ja': 'https://mictoo.com/ja/descript-alternative',
  'ko': 'https://mictoo.com/ko/descript-alternative',
  'x-default': 'https://mictoo.com/descript-alternative',
}

export const metadata = {
  title: 'Alternatywa dla Descript — Darmowa transkrypcja bez rejestracji | Mictoo',
  description: 'Szukasz alternatywy dla Descript tylko do transkrypcji? Mictoo oferuje darmową transkrypcję AI bez rejestracji, opartą na OpenAI Whisper. Bez edytora, bez subskrypcji.',
  alternates: { canonical: 'https://mictoo.com/pl/descript-alternative', languages: LANGS },

  openGraph: {
    title: "Alternatywa dla Descript — Darmowa transkrypcja bez rejestracji | Mictoo",
    description: "Szukasz alternatywy dla Descript tylko do transkrypcji? Mictoo oferuje darmową transkrypcję AI bez rejestracji, opartą na OpenAI Whisper. Bez edytora, bez subskrypcji.",
    url: "https://mictoo.com/pl/descript-alternative",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alternatywa dla Descript — Darmowa transkrypcja bez rejestracji | Mictoo",
    description: "Szukasz alternatywy dla Descript tylko do transkrypcji? Mictoo oferuje darmową transkrypcję AI bez rejestracji, opartą na OpenAI Whisper. Bez edytora, bez subskrypcji.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlDescriptAlternativePage() {
  return (
    <ComparisonLayout
      badge="Porównanie · Descript · Za darmo"
      h1={<>Alternatywa dla Descript<br /><span className="text-brand-600">Darmowa transkrypcja bez edytora</span></>}
      subtitle="Descript to pełny edytor audio/wideo z wbudowaną transkrypcją. Jeśli potrzebujesz tylko części transkrypcyjnej, Mictoo to darmowa opcja bez rejestracji, oparta na OpenAI Whisper."
      competitorName="Descript"
      rows={[
        { label: 'Plan darmowy',           mictoo: 'Bez limitu miesięcznego, 25 MB na plik', them: '1 godzina transkrypcji na miesiąc' },
        { label: 'Wymagane konto',         mictoo: 'Nie', them: 'Tak (rejestracja email)' },
        { label: 'Plany płatne',           mictoo: 'Za darmo',  them: '$12-24 / miesiąc' },
        { label: 'Edytor audio/wideo',     mictoo: 'Nie',  them: 'Tak (pełny)' },
        { label: 'Model transkrypcji',     mictoo: 'OpenAI Whisper', them: 'Własny + opcja Whisper' },
        { label: 'Podsumowanie AI',        mictoo: 'Tak, za darmo', them: 'Tak (płatne)' },
        { label: 'Eksport SRT',            mictoo: 'Tak, za darmo', them: 'Tak (płatne)' },
        { label: 'Etykiety mówców',        mictoo: 'Edycja ręczna', them: 'Automatyczne' },
        { label: 'Języki',                 mictoo: '50+', them: '20+' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: 'Za darmo, bez rejestracji', desc: 'Prześlij plik i otrzymaj transkrypcję bez konta, karty lub emaila. Descript wymaga rejestracji nawet w planie darmowym.' },
        { icon: '⚡', title: 'Szybciej dla zadań jednorazowych', desc: 'Bez aplikacji do instalacji, bez edytora do nauki. Jedna strona, jeden drop, rezultaty w kilka sekund. Stworzone dla szybkiej transkrypcji, nie pełnej produkcji.' },
        { icon: '🔒', title: 'Prywatność na pierwszym miejscu', desc: 'Audio jest wysyłane bezpośrednio do API Whisper od OpenAI i nie jest przechowywane na serwerach Mictoo. Bez projektów, bez biblioteki w chmurze, bez przestrzeni zespołu by design.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Potrzebujesz tylko transkrypcji, nie edycji',
          'Chcesz czegoś darmowego bez rejestracji',
          'Transkrybujesz jednorazowy wywiad, podcast lub spotkanie',
          'Nie chcesz aplikacji desktopowej ani przestrzeni zespołu',
        ],
        them: [
          'Produkujesz podcasty lub wideo i potrzebujesz prawdziwego edytora',
          'Chcesz workflow "edytuj audio, edytując tekst"',
          'Potrzebujesz automatycznych etykiet mówców za każdym razem',
          'Pracujesz w zespole z udostępnioną biblioteką projektów',
        ],
      }}
      faq={[
        { q: 'Czy Mictoo jest pełnym zamiennikiem dla Descript?', a: 'Nie w przypadku edycji. Descript to edytor audio/wideo z wbudowaną transkrypcją — Mictoo to tylko część transkrypcyjna. Jeśli potrzebujesz tylko tekstu lub napisów z nagrania, Mictoo zastępuje ten workflow za darmo.' },
        { q: 'Czy jakość transkrypcji jest taka sama?', a: 'Oba narzędzia mogą używać OpenAI Whisper. Mictoo używa wyłącznie Whisper, więc precyzja jest porównywalna. Descript oferuje dodatkowy własny model w niektórych planach.' },
        { q: 'Czy Mictoo ma etykiety mówców?', a: 'Mictoo zwraca pojedynczą transkrypcję bez automatycznych etykiet w planie darmowym. Możesz dodać Mówca 1 / Mówca 2 ręcznie w edytorze przeglądarki przed pobraniem. Descript etykietuje automatycznie.' },
        { q: 'Czy mogę edytować transkrypcję w Mictoo?', a: 'Tak — transkrypcja pojawia się w edytowalnym polu tekstowym. Możesz poprawić nazwiska, interpunkcję lub akapity przed skopiowaniem lub pobraniem jako .txt lub .srt.' },
        { q: 'A eksport do Word lub DOCX?', a: 'Mictoo obecnie eksportuje .txt i .srt. Skopiuj transkrypcję i wklej do Word, aby uzyskać szybki DOCX. Natywny eksport DOCX jest w roadmapie.' },
      ]}
      relatedLinks={[
        { href: '/pl/turboscribe-alternative', label: 'Alternatywa dla TurboScribe' },
        { href: '/pl/otter-alternative', label: 'Alternatywa dla Otter' },
        { href: '/pl/notta-alternative', label: 'Alternatywa dla Notta' },
        { href: '/pl', label: 'Wypróbuj Mictoo' },
      ]}
    />
  )
}
