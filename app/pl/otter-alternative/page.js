import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/otter-alternative',
  'fr': 'https://mictoo.com/fr/otter-alternative',
  'de': 'https://mictoo.com/de/otter-alternative',
  'es': 'https://mictoo.com/es/otter-alternative',
  'ru': 'https://mictoo.com/ru/otter-alternative',
  'it': 'https://mictoo.com/it/otter-alternative',
  'pt': 'https://mictoo.com/pt/otter-alternative',
  'pl': 'https://mictoo.com/pl/otter-alternative',
  'ja': 'https://mictoo.com/ja/otter-alternative',
  'ko': 'https://mictoo.com/ko/otter-alternative',
  'x-default': 'https://mictoo.com/otter-alternative',
}

export const metadata = {
  title: 'Alternatywa dla Otter — Transkrybuj nagrania, nie spotkania live | Mictoo',
  description: 'Otter jest stworzony do transkrypcji live spotkań z napisami w czasie rzeczywistym. Mictoo transkrybuje nagrania, które już masz — za darmo, bez rejestracji, bez bota. Oparte na OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/pl/otter-alternative', languages: LANGS },
}

export default function PlOtterAlternativePage() {
  return (
    <ComparisonLayout
      badge="Porównanie · Otter · Za darmo"
      h1={<>Alternatywa dla Otter<br /><span className="text-brand-600">Dla nagrań, nie spotkań live</span></>}
      subtitle="Otter jest słynny z transkrypcji live spotkań — napisy pojawiają się, gdy ludzie mówią. Mictoo rozwiązuje drugą połowę problemu: nagranie, które już masz, transkrybowane w tekst w kilka sekund. Za darmo, bez rejestracji, OpenAI Whisper."
      competitorName="Otter"
      rows={[
        { label: 'Plan darmowy',           mictoo: 'Bez limitu miesięcznego, 25 MB na plik', them: '300 minut / miesiąc, 30 min na nagranie' },
        { label: 'Wymagane konto',         mictoo: 'Nie', them: 'Tak (rejestracja email)' },
        { label: 'Plany płatne',           mictoo: 'Za darmo',  them: '$8.33 - 30 / użytkownik / miesiąc' },
        { label: 'Transkrypcja live',      mictoo: 'Nie', them: 'Tak (napisy w czasie rzeczywistym)' },
        { label: 'Upload nagrania',        mictoo: 'Tak (drag-n-drop)', them: 'Tak (import płatny)' },
        { label: 'Podsumowanie AI',        mictoo: 'Tak, za darmo', them: 'Tak (płatne)' },
        { label: 'Model transkrypcji',     mictoo: 'OpenAI Whisper', them: 'Własny' },
        { label: 'Etykiety mówców',        mictoo: 'Edycja ręczna', them: 'Automatyczne (płatne)' },
        { label: 'Języki',                 mictoo: '50+', them: '3 (angielski, francuski, hiszpański)' },
      ]}
      whyMictoo={[
        { icon: '🌍', title: '50+ języków przeciwko 3', desc: 'Otter obsługuje tylko angielski, francuski i hiszpański. Mictoo używa Whisper, który obsługuje ponad 50 języków z automatycznym wykrywaniem — polski, niemiecki, rosyjski, japoński, arabski, ukraiński i inne.' },
        { icon: '🆓', title: 'Bez limitu 300 minut', desc: 'Darmowy plan Otter ogranicza do 300 minut na miesiąc. Mictoo nie ma kwoty minut — tylko limit 25 MB na plik.' },
        { icon: '🚫', title: 'Bez bota na twoich spotkaniach', desc: 'Wartość Otter to bot live dołączający do calli. Jeśli wolisz nagrywać lokalnie bez bota AI w spotkaniu, Mictoo pasuje do tego workflow.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Masz nagranie i chcesz szybką, darmową transkrypcję',
          'Pracujesz z nieanglojęzycznym audio (polski, rosyjski, japoński itp.)',
          'Nie chcesz bota AI na twoich callach',
          'Transkrybujesz podcasty, wykłady, notatki głosowe, nie tylko spotkania',
        ],
        them: [
          'Chcesz napisów live podczas spotkań',
          'Jesteś w zespole, który potrzebuje współdzielonych notatek ze spotkań',
          'Integracja Otter Assistant z Zoom/Google Meet jest krytyczna',
          'Diaryzacja mówców jest twardym wymaganiem (plan płatny)',
        ],
      }}
      faq={[
        { q: 'Czy Mictoo robi transkrypcję live jak Otter?', a: 'Nie. Mictoo działa tylko na nagranych plikach. Do transkrypcji w czasie rzeczywistym podczas spotkania użyj Otter, wbudowanych napisów Zoom lub Google Meet. Użyj Mictoo później, jeśli chcesz dopracowany plik transkrypcji.' },
        { q: 'Czy Mictoo zastępuje Otter dla podcasterów?', a: 'Konkretnie dla transkrypcji podcastów, tak. Prześlij swoje MP3/M4A, otrzymaj transkrypcję, pobierz jako .txt lub .srt. Wartość Otter to live capture; wartość Mictoo to szybka transkrypcja po nagraniu.' },
        { q: 'A podsumowania spotkań?', a: 'Oba narzędzia generują podsumowania AI z kluczowymi punktami i zadaniami. Otter umieszcza je w planach płatnych; Mictoo oferuje za darmo przy każdej transkrypcji.' },
        { q: 'Czy Mictoo jest dokładny dla nieanglojęzycznego audio?', a: 'Tak — OpenAI Whisper to jeden z najsilniejszych dostępnych wielojęzycznych modeli mowy. Otter jest ograniczony do angielskiego, francuskiego i hiszpańskiego; Mictoo obsługuje ponad 50 języków z automatycznym wykrywaniem.' },
        { q: 'Czy Mictoo ma aplikację mobilną?', a: 'Brak natywnej aplikacji, ale strona działa w przeglądarkach mobilnych. Otwórz mictoo.com na iPhone lub Android, wybierz plik z urządzenia, otrzymaj transkrypcję.' },
      ]}
      relatedLinks={[
        { href: '/pl/fireflies-alternative', label: 'Alternatywa dla Fireflies' },
        { href: '/pl/meeting-transcription', label: 'Transkrypcja spotkań' },
        { href: '/pl/voice-memo-to-text', label: 'Notatka głosowa na tekst' },
        { href: '/pl', label: 'Wypróbuj Mictoo' },
      ]}
    />
  )
}
