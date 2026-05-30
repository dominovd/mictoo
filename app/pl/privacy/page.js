import InfoSectionsLayout from '@/components/InfoSectionsLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/privacy',
  'fr': 'https://mictoo.com/fr/privacy',
  'de': 'https://mictoo.com/de/privacy',
  'es': 'https://mictoo.com/es/privacy',
  'ru': 'https://mictoo.com/ru/privacy',
  'it': 'https://mictoo.com/it/privacy',
  'pt': 'https://mictoo.com/pt/privacy',
  'pl': 'https://mictoo.com/pl/privacy',
  'ja': 'https://mictoo.com/ja/privacy',
  'ko': 'https://mictoo.com/ko/privacy',
  'x-default': 'https://mictoo.com/privacy',
}

export const metadata = {
  title: 'Polityka prywatności — Mictoo',
  description: 'Polityka prywatności Mictoo. Nie przechowujemy twoich plików audio ani transkrypcji.',
  alternates: { canonical: 'https://mictoo.com/pl/privacy', languages: LOCALE_ALTERNATES },

  openGraph: {
    title: "Polityka prywatności — Mictoo",
    description: "Polityka prywatności Mictoo. Nie przechowujemy twoich plików audio ani transkrypcji.",
    url: "https://mictoo.com/pl/privacy",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polityka prywatności — Mictoo",
    description: "Polityka prywatności Mictoo. Nie przechowujemy twoich plików audio ani transkrypcji.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlPrivacyPage() {
  return (
    <InfoSectionsLayout
      h1="Polityka prywatności"
      lastUpdated="Ostatnia aktualizacja: maj 2026"
      sections={[
        {
          heading: '1. Co zbieramy',
          body: 'Mictoo nie wymaga konta i nie zbiera danych osobowych. Gdy przesyłasz plik, twoja przeglądarka wysyła go bezpośrednio do Vercel Blob, magazynu plików Vercel hostowanego w USA. Plik pozostaje tam krótko, aby nasz serwer mógł przekazać go do API Whisper od Groq (hostowanego w USA) do transkrypcji, z API Whisper od OpenAI jako automatycznym fallbackiem, jeśli Groq jest chwilowo niedostępny. Plik jest automatycznie usuwany z Vercel Blob zaraz po zakończeniu transkrypcji — zwykle w czasie krótszym niż minuta. Cogodzinny job czyszczący usuwa pozostałe uploady, które z jakiegoś powodu nie zostały usunięte od razu. Mictoo nie zachowuje stałych kopii audio, wideo ani transkrypcji na własnych serwerach.',
        },
        {
          heading: '2. Przetwarzanie plików i nasz dostawca AI',
          body: 'Pliki są przesyłane przez HTTPS do API Whisper od Groq i przetwarzane w czasie rzeczywistym na infrastrukturze zlokalizowanej w USA. Zgodnie z polityką danych Groq, twoje audio nie jest używane do trenowania modeli. W rzadkim przypadku, gdy Groq jest niedostępny, żądanie jest automatycznie przekierowywane do API Whisper od OpenAI; OpenAI również nie używa danych API do trenowania i przechowuje je maksymalnie przez 30 dni do monitorowania nadużyć przed usunięciem. Mictoo nie zachowuje żadnej kopii audio ani transkrypcji po zakończeniu twojej sesji przeglądania.',
        },
        {
          heading: '3. Analityka i reklamy',
          body: (
            <>
              Możemy wyświetlać reklamy przez Google AdSense. Google może używać plików cookie do wyświetlania trafnych reklam. Możesz zrezygnować w{' '}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Google Ad Settings</a>
              . Możemy używać anonimowej analityki (np. zliczania wyświetleń stron) do zrozumienia użycia. Nie zbieramy żadnych danych umożliwiających identyfikację osoby.
            </>
          ),
        },
        {
          heading: '4. Cookies',
          body: 'Mictoo nie ustawia własnych plików cookie. Usługi zewnętrzne, takie jak Google AdSense, mogą ustawiać własne pliki cookie na twoim urządzeniu.',
        },
        {
          heading: '5. Prywatność dzieci',
          body: 'Mictoo nie jest skierowany do dzieci poniżej 13 roku życia. Świadomie nie zbieramy danych dzieci.',
        },
        {
          heading: '6. Kontakt',
          body: (
            <>
              Pytania dotyczące polityki? Napisz na{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>.
            </>
          ),
        },
      ]}
    />
  )
}
