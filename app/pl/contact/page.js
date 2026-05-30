import ContactLayout from '@/components/ContactLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/contact',
  'fr': 'https://mictoo.com/fr/contact',
  'de': 'https://mictoo.com/de/contact',
  'es': 'https://mictoo.com/es/contact',
  'ru': 'https://mictoo.com/ru/contact',
  'it': 'https://mictoo.com/it/contact',
  'pt': 'https://mictoo.com/pt/contact',
  'pl': 'https://mictoo.com/pl/contact',
  'ja': 'https://mictoo.com/ja/contact',
  'ko': 'https://mictoo.com/ko/contact',
  'x-default': 'https://mictoo.com/contact',
}

export const metadata = {
  title: 'Kontakt — Mictoo',
  description:
    'Kontakt Mictoo. info@mictoo.com trafia do prawdziwej skrzynki. Odpowiedź w ciągu jednego dnia roboczego. Zakres wsparcia, zapytania biznesowe i skróty do FAQ.',
  alternates: { canonical: 'https://mictoo.com/pl/contact', languages: LOCALE_ALTERNATES },

  openGraph: {
    title: "Kontakt — Mictoo",
    description: "Kontakt Mictoo. info@mictoo.com trafia do prawdziwej skrzynki. Odpowiedź w ciągu jednego dnia roboczego. Zakres wsparcia, zapytania biznesowe i skróty do FAQ.",
    url: "https://mictoo.com/pl/contact",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt — Mictoo",
    description: "Kontakt Mictoo. info@mictoo.com trafia do prawdziwej skrzynki. Odpowiedź w ciągu jednego dnia roboczego. Zakres wsparcia, zapytania biznesowe i skróty do FAQ.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlContactPage() {
  return (
    <ContactLayout
      privacyHref="/pl/privacy"
      strings={{
        h1: 'Skontaktuj się z nami',
        lead:
          'Masz pytanie, feedback lub prośbę o funkcję? Chętnie cię wysłuchamy. Czytamy każdą wiadomość i odpowiadamy w ciągu jednego dnia roboczego.',
        privacyPrefix: 'Dla pytań o prywatność zobacz naszą',
        privacyLinkLabel: 'politykę prywatności',
        privacySuffix: '.',

        responseTimeHeading: 'Czas odpowiedzi',
        responseTimeBody:
          'info@mictoo.com trafia do prawdziwej skrzynki, nie do systemu ticketów. Odpowiadamy od poniedziałku do piątku, czas środkowoeuropejski, zwykle w ciągu jednego dnia roboczego. Jeśli napiszesz w piątek wieczorem, spodziewaj się odpowiedzi w poniedziałek. Nie jesteśmy supportem 24/7 i nie udajemy, że jesteśmy.',

        supportScopeHeading: 'W czym możemy pomóc',
        supportScopeItems: [
          { label: 'Zgłoszenia bugów.', body: 'Coś zepsute w uploaderze, transkrypcje wracające pomieszane, SRT, który nie działa w twoim edytorze wideo. Podaj nazwę pliku i czas uploadu, jeśli możesz.' },
          { label: 'Prośby o funkcje.', body: 'Powiedz nam, co chciałbyś, żeby Mictoo robiło. Niczego nie obiecujemy, ale czytamy naprawdę i dostarczaliśmy funkcje, o które prosili użytkownicy.' },
          { label: 'Pytania o jakość transkrypcji.', body: 'Jeśli konkretny plik wrócił ze słabą dokładnością, wyślij (lub opisz) i pomożemy zdiagnozować, czy to problem nagrania, czy modelu.' },
          { label: 'Konto lub billing.', body: 'W free tier nie ma billingu. Dla planu Pro (gdy wystartuje), pytania o billing też tutaj.' },
          { label: 'Partnerstwa i integracje.', body: 'Jeśli chcesz zintegrować Mictoo ze swoim produktem lub zbudować coś komplementarnego, jesteśmy otwarci na rozmowę.' },
        ],

        faqShortcutHeading: 'Szybciej niż email',
        faqShortcutBody: [
          'Jeśli twoje pytanie jest jednym z częstych, FAQ na właściwej landingu prawdopodobnie ma już odpowiedź. Szybkie linki: cena, limity rozmiaru i czasu pliku, obsługiwane formaty i pytania o prywatność są odpowiedziane na końcu każdej landingu (na przykład na stronie Audio na tekst).',
          'Dla wszystkiego innego email to właściwy kanał.',
        ],

        businessHeading: 'Zapytania biznesowe i prasowe',
        businessBody: [
          'Ten sam email: info@mictoo.com. Użyj [Press] lub [Business] w temacie, abyśmy mogli odpowiednio przekierować wiadomość. Jesteśmy otwarci na wywiady na temat indie SEO i narzędzi AI w przestrzeni produktywności, ale nie robimy płatnych placementów ani sponsorowanych treści.',
          'Jeśli jesteś dziennikarzem piszącym o narzędziach transkrypcji lub AI w oprogramowaniu produktywności, dajemy bezpośrednie odpowiedzi o tym, jak Mictoo działa pod maską, ile kosztuje uruchomienie i co myślimy o konkurencji.',
        ],

        languagesHeading: 'Języki',
        languagesBody:
          'Oferujemy wsparcie po angielsku. Odpowiedzi po polsku, rosyjsku i hiszpańsku są best-effort. Jeśli napiszesz w innym języku, odpowiadamy po angielsku, chyba że znajdziemy płynnego mówcę w zespole.',
      }}
    />
  )
}
