import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/notta-alternative',
  'fr': 'https://mictoo.com/fr/notta-alternative',
  'de': 'https://mictoo.com/de/notta-alternative',
  'es': 'https://mictoo.com/es/notta-alternative',
  'ru': 'https://mictoo.com/ru/notta-alternative',
  'it': 'https://mictoo.com/it/notta-alternative',
  'pt': 'https://mictoo.com/pt/notta-alternative',
  'pl': 'https://mictoo.com/pl/notta-alternative',
  'ja': 'https://mictoo.com/ja/notta-alternative',
  'x-default': 'https://mictoo.com/notta-alternative',
}

export const metadata = {
  title: 'Alternatywa dla Notta — Darmowa transkrypcja bez limitów miesięcznych | Mictoo',
  description: 'Notta ogranicza darmowych użytkowników do 120 minut na miesiąc i każdą transkrypcję do 3 minut. Mictoo jest za darmo, bez rejestracji, bez miesięcznej kwoty minut — oparte na OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/pl/notta-alternative', languages: LANGS },
}

export default function PlNottaAlternativePage() {
  return (
    <ComparisonLayout
      badge="Porównanie · Notta · Za darmo"
      h1={<>Alternatywa dla Notta<br /><span className="text-brand-600">Bez miesięcznego limitu 120 minut</span></>}
      subtitle="Notta to popularne narzędzie all-in-one do transkrypcji, ale plan darmowy ogranicza do 120 minut na miesiąc i 3 minut na plik. Mictoo nie ma kwoty miesięcznej i tylko limit rozmiaru pliku — za darmo, bez rejestracji."
      competitorName="Notta"
      rows={[
        { label: 'Plan darmowy',           mictoo: 'Bez limitu miesięcznego, 25 MB na plik', them: '120 min/miesiąc, 3 min na plik' },
        { label: 'Wymagane konto',         mictoo: 'Nie', them: 'Tak (rejestracja email)' },
        { label: 'Plany płatne',           mictoo: 'Za darmo',  them: '$9 - 25 / użytkownik / miesiąc' },
        { label: 'Czas na plik',           mictoo: '~25 min (limit rozmiaru)', them: '3 min (darmowy) / 5 h (płatny)' },
        { label: 'Transkrypcja live',      mictoo: 'Nie', them: 'Tak (Notta Bot w spotkaniach)' },
        { label: 'Podsumowanie AI',        mictoo: 'Tak, za darmo', them: 'Tak (płatne)' },
        { label: 'Model transkrypcji',     mictoo: 'OpenAI Whisper', them: 'Własny' },
        { label: 'Etykiety mówców',        mictoo: 'Edycja ręczna', them: 'Automatyczne (płatne)' },
        { label: 'Języki',                 mictoo: '50+', them: '100+ (plany płatne)' },
      ]}
      whyMictoo={[
        { icon: '⏳', title: 'Bez limitu 3 minut na plik', desc: 'Limit 3 minut na plik w Notta jest za krótki dla podcastu, wykładu lub wywiadu. Mictoo obsługuje pełne pliki audio ~25 minut za darmo.' },
        { icon: '🆓', title: 'Bez miesięcznej kwoty minut', desc: 'Notta liczy każdą minutę względem kwoty 120 min/miesiąc. Mictoo ogranicza tylko indywidualny rozmiar pliku — prześlij jeden plik lub kilka, bez liczenia minut.' },
        { icon: '✨', title: 'Podsumowanie AI w planie darmowym', desc: 'Notta umieszcza podsumowania AI w planach płatnych. Mictoo generuje podsumowanie z kluczowymi punktami i zadaniami za darmo, za każdym razem.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Musisz transkrybować za darmo pliki dłuższe niż 3 minuty',
          'Nie chcesz uderzyć w miesięczny limit 120 minut',
          'Chcesz podsumowania AI bez płacenia',
          'Nie potrzebujesz automatycznej diaryzacji mówców',
        ],
        them: [
          'Potrzebujesz Notta Bot, aby dołączał do spotkań live',
          'Potrzebujesz automatycznych etykiet mówców',
          'Chcesz workflow zintegrowanego z CRM',
          'Możesz płacić za nielimitowane funkcje',
        ],
      }}
      faq={[
        { q: 'Czy Mictoo jest naprawdę darmowy bez kwoty minut?', a: 'Tak. Jedyny limit to rozmiar na plik (25 MB, co odpowiada około 25 minutom w typowym bitratie podcastu). Bez miesięcznego śledzenia minut i bez limitu liczby plików.' },
        { q: 'Dlaczego Notta tak mocno ogranicza darmowych użytkowników?', a: 'Notta używa modelu freemium, gdzie plan darmowy jest celowo ograniczony, aby zachęcić do upgrade. Model Mictoo jest reklamowy, więc plan darmowy jest hojny by design.' },
        { q: 'Jak Mictoo zarabia, jeśli jest za darmo?', a: 'Reklamy display (Google AdSense), wyświetlane w stanie ładowania podczas transkrypcji pliku. Sama transkrypcja i obszar uploadu są bez reklam.' },
        { q: 'Czy Mictoo obsługuje transkrypcję live spotkań?', a: 'Nie — Mictoo działa tylko na nagranych plikach. Do live capture użyj wbudowanych napisów swojej platformy (Zoom, Google Meet, Teams), a następnie prześlij nagranie do Mictoo dla dopracowanej transkrypcji.' },
        { q: 'Jakie języki obsługuje Mictoo?', a: 'OpenAI Whisper obsługuje ponad 50 języków z automatycznym wykrywaniem — polski, angielski, hiszpański, francuski, niemiecki, rosyjski, ukraiński, japoński, chiński, arabski, hindi, koreański i wiele innych. Nie trzeba wybierać języka, chyba że automatyczne wykrywanie się pomyli.' },
      ]}
      relatedLinks={[
        { href: '/pl/turboscribe-alternative', label: 'Alternatywa dla TurboScribe' },
        { href: '/pl/otter-alternative', label: 'Alternatywa dla Otter' },
        { href: '/pl/podcast-transcription', label: 'Transkrypcja podcastów' },
        { href: '/pl', label: 'Wypróbuj Mictoo' },
      ]}
    />
  )
}
