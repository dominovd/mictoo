import InfoSectionsLayout from '@/components/InfoSectionsLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/terms',
  'fr': 'https://mictoo.com/fr/terms',
  'de': 'https://mictoo.com/de/terms',
  'es': 'https://mictoo.com/es/terms',
  'ru': 'https://mictoo.com/ru/terms',
  'it': 'https://mictoo.com/it/terms',
  'pt': 'https://mictoo.com/pt/terms',
  'pl': 'https://mictoo.com/pl/terms',
  'ja': 'https://mictoo.com/ja/terms',
  'ko': 'https://mictoo.com/ko/terms',
  'x-default': 'https://mictoo.com/terms',
}

export const metadata = {
  title: 'Regulamin — Mictoo',
  description: 'Regulamin korzystania z Mictoo.',
  alternates: { canonical: 'https://mictoo.com/pl/terms', languages: LOCALE_ALTERNATES },
}

export default function PlTermsPage() {
  return (
    <InfoSectionsLayout
      h1="Regulamin"
      lastUpdated="Ostatnia aktualizacja: maj 2026"
      sections={[
        {
          heading: '1. Akceptacja',
          body: 'Korzystając z Mictoo akceptujesz niniejszy regulamin. Jeśli go nie akceptujesz, nie korzystaj z usługi.',
        },
        {
          heading: '2. Korzystanie z usługi',
          body: 'Mictoo to darmowe narzędzie do transkrypcji oferowane "tak jak jest". Jesteś odpowiedzialny za pliki, które przesyłasz, i musisz mieć prawo do ich transkrypcji. Zabronione jest używanie dla treści nielegalnych, obraźliwych lub naruszających prawa autorskie.',
        },
        {
          heading: '3. Ograniczenie odpowiedzialności',
          body: 'Usługa jest świadczona "tak jak jest" bez żadnych gwarancji. Nie gwarantujemy 100% dokładności transkrypcji. Używaj wyników na własne ryzyko.',
        },
        {
          heading: '4. Dostępność',
          body: 'Możemy modyfikować, zawieszać lub przerywać usługę w dowolnym momencie bez wcześniejszego powiadomienia.',
        },
        {
          heading: '5. Zmiany regulaminu',
          body: 'Możemy okazjonalnie aktualizować ten regulamin. Zmiany wchodzą w życie po publikacji na tej stronie.',
        },
        {
          heading: '6. Kontakt',
          body: (
            <>
              Pytania dotyczące regulaminu? Napisz na{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>.
            </>
          ),
        },
      ]}
    />
  )
}
