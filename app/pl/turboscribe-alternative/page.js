import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/turboscribe-alternative',
  'fr': 'https://mictoo.com/fr/turboscribe-alternative',
  'de': 'https://mictoo.com/de/turboscribe-alternative',
  'es': 'https://mictoo.com/es/turboscribe-alternative',
  'ru': 'https://mictoo.com/ru/turboscribe-alternative',
  'it': 'https://mictoo.com/it/turboscribe-alternative',
  'pt': 'https://mictoo.com/pt/turboscribe-alternative',
  'pl': 'https://mictoo.com/pl/turboscribe-alternative',
  'x-default': 'https://mictoo.com/turboscribe-alternative',
}

export const metadata = {
  title: 'Alternatywa dla TurboScribe — Darmowa transkrypcja Whisper, bez rejestracji | Mictoo',
  description: 'TurboScribe to popularne narzędzie oparte na Whisper, ale wymaga konta i ogranicza darmowych użytkowników do 30 minut dziennie. Mictoo jest w pełni bez rejestracji z wbudowanym podsumowaniem AI.',
  alternates: { canonical: 'https://mictoo.com/pl/turboscribe-alternative', languages: LANGS },
}

export default function PlTurboScribeAlternativePage() {
  return (
    <ComparisonLayout
      badge="Porównanie · TurboScribe · Za darmo"
      h1={<>Alternatywa dla TurboScribe<br /><span className="text-brand-600">Ten sam Whisper, bez rejestracji</span></>}
      subtitle="TurboScribe i Mictoo używają OpenAI Whisper, więc jakość transkrypcji jest niemal identyczna. Główne różnice to rejestracja, limity plików i wbudowane podsumowanie AI."
      competitorName="TurboScribe"
      rows={[
        { label: 'Plan darmowy',           mictoo: 'Bez limitu miesięcznego, 25 MB na plik', them: '3 pliki dziennie, 30 min każdy' },
        { label: 'Wymagane konto',         mictoo: 'Nie', them: 'Tak (rejestracja email)' },
        { label: 'Plany płatne',           mictoo: 'Za darmo',  them: '$20 / miesiąc nielimitowane' },
        { label: 'Rozmiar pliku (darmowy)', mictoo: '25 MB na plik', them: '~150 MB / 30 min na plik' },
        { label: 'Rozmiar pliku (płatny)', mictoo: 'Tak samo jak darmowy', them: '5 GB / 10 h na plik' },
        { label: 'Upload batch',           mictoo: 'Nie', them: 'Tak (płatne, do 50 plików)' },
        { label: 'Model transkrypcji',     mictoo: 'OpenAI Whisper', them: 'OpenAI Whisper' },
        { label: 'Podsumowanie AI',        mictoo: 'Tak, za darmo', them: 'Tak (płatne)' },
        { label: 'Eksport SRT',            mictoo: 'Tak, za darmo', them: 'Tak' },
        { label: 'Historia transkrypcji',  mictoo: 'Nie', them: 'Tak (oparte na koncie)' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: 'Naprawdę bez rejestracji', desc: 'TurboScribe wymaga emaila nawet w planie darmowym. Mictoo nic nie wymaga — przesyłasz plik, otrzymujesz tekst. Przydatne dla jednorazowych nagrań, gdy nie chcesz kolejnego konta.' },
        { icon: '✨', title: 'Podsumowanie AI w planie darmowym', desc: 'Mictoo automatycznie generuje 2-3 zdaniowe podsumowanie, kluczowe punkty i zadania po każdej transkrypcji. TurboScribe umieszcza podsumowanie AI za paywall $20/miesiąc.' },
        { icon: '🔒', title: 'Nic nie jest przechowywane', desc: 'Bez historii transkrypcji, bez workspace w chmurze, bez projektów. Audio jest wysyłane do Whisper i natychmiast odrzucane. TurboScribe przechowuje twoje transkrypcje na koncie.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Chcesz zero tarcia rejestracji',
          'Potrzebujesz podsumowania AI w planie darmowym',
          'Twoje pliki są poniżej 25 MB (lub możesz skompresować)',
          'Cenisz to, że nie ma przechowywanej historii',
        ],
        them: [
          'Potrzebujesz plików większych niż 25 MB w planie darmowym',
          'Chcesz historii wszystkich poprzednich transkrypcji',
          'Potrzebujesz wgrywania wielu plików naraz (batch)',
          'Możesz płacić $20/miesiąc za nielimitowane duże pliki',
        ],
      }}
      faq={[
        { q: 'Czy jakość transkrypcji jest taka sama?', a: 'Tak, w istocie. Oba narzędzia używają modelu Whisper od OpenAI. Różnice wynikają z tego, jak każde narzędzie segmentuje audio i obsługuje przypadki brzegowe, ale podstawowa precyzja jest porównywalna.' },
        { q: 'Dlaczego Mictoo ma mniejszy limit pliku?', a: 'Limit 25 MB pochodzi z API Whisper od OpenAI. TurboScribe obsługuje większe pliki dzieląc je na swoich serwerach i łącząc wyniki. Pracujemy nad tym samym podejściem.' },
        { q: 'Czy mogę transkrybować długie pliki w Mictoo?', a: 'Na razie pliki muszą zmieścić się poniżej 25 MB. Przewodnik how-to-compress-audio na naszej stronie opisuje trzy szybkie sposoby: wyodrębnij audio, obniż bitrate lub podziel na segmenty.' },
        { q: 'Czy Mictoo planuje dodać konto/historię?', a: 'Lokalna historia (przechowywana w przeglądarce, bez konta na serwerze) jest w roadmapie. Historia w chmurze z rejestracją celowo nie jest w produkcie — koliduje z pozycjonowaniem bez rejestracji.' },
        { q: 'Który jest szybszy?', a: 'TurboScribe reklamuje ~30 minut przetworzonych w mniej niż minutę. Mictoo jest podobne — większość plików jest transkrybowana w 15-30 sekund. Oba czują się prawie natychmiastowe dla plików poniżej 25 minut.' },
      ]}
      relatedLinks={[
        { href: '/pl/descript-alternative', label: 'Alternatywa dla Descript' },
        { href: '/pl/notta-alternative', label: 'Alternatywa dla Notta' },
        { href: '/pl', label: 'Wypróbuj Mictoo' },
      ]}
    />
  )
}
