import AboutLayout from '@/components/AboutLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/about',
  'fr': 'https://mictoo.com/fr/about',
  'de': 'https://mictoo.com/de/about',
  'es': 'https://mictoo.com/es/about',
  'ru': 'https://mictoo.com/ru/about',
  'it': 'https://mictoo.com/it/about',
  'pt': 'https://mictoo.com/pt/about',
  'pl': 'https://mictoo.com/pl/about',
  'ja': 'https://mictoo.com/ja/about',
  'ko': 'https://mictoo.com/ko/about',
  'x-default': 'https://mictoo.com/about',
}

export const metadata = {
  title: 'O nas — Mictoo',
  description: 'Informacje o Mictoo, darmowym narzędziu do transkrypcji audio i wideo z AI.',
  alternates: { canonical: 'https://mictoo.com/pl/about', languages: LOCALE_ALTERNATES },
}

export default function PlAboutPage() {
  return (
    <AboutLayout
      strings={{
        h1: 'O Mictoo',
        lead: 'Mictoo to darmowe narzędzie do transkrypcji audio i wideo bez rejestracji, stworzone dla każdego, kto potrzebuje szybko i precyzyjnie zamienić mowę w tekst.',
        ourWhy: 'Stworzyliśmy Mictoo, ponieważ dobra transkrypcja nie powinna wymagać subskrypcji, konta ani umiejętności technicznych. Prześlij plik, otrzymaj tekst. To wszystko.',
        whatPowersHeading: 'Co napędza Mictoo?',
        whatPowersBody: 'Mictoo opiera się na Whisper od OpenAI — tym samym modelu rozpoznawania mowy używanym w ChatGPT, wytrenowanym na 680 000 godzin wielojęzycznego audio. Obsługuje ponad 50 języków z automatycznym wykrywaniem i jest uważany za jeden z najdokładniejszych dostępnych modeli transkrypcji. Mictoo uruchamia Whisper przez API Groq (hostowane w USA, model whisper-large-v3) dla szybkości i efektywności kosztowej, z API Whisper od OpenAI jako automatycznym fallbackiem. Pliki są wysyłane bezpośrednio do dostawcy transkrypcji i nigdy nie są przechowywane na serwerach Mictoo; ani Groq, ani OpenAI nie używają danych API do trenowania modeli, a OpenAI przechowuje dane API maksymalnie przez 30 dni monitorowania nadużyć przed usunięciem.',
        principlesHeading: 'Nasze zasady',
        principles: [
          { label: 'Darmowy.', body: 'Bez ukrytych kosztów, bez okresów próbnych, bez karty kredytowej.' },
          { label: 'Prywatny.', body: 'Twoje pliki nigdy nie są przechowywane. Są przetwarzane i natychmiastowo usuwane.' },
          { label: 'Prosty.', body: 'Jedna strona, jedno narzędzie, zero tarcia.' },
          { label: 'Precyzyjny.', body: 'Używamy najlepszego dostępnego modelu AI dla jakości transkrypcji.' },
        ],
        contactHeading: 'Skontaktuj się',
        contactPrefix: 'Masz feedback, prośbę lub pytanie?',
        contactLinkLabel: 'Napisz do nas',
        contactSuffix: ' — odpowiadamy osobiście.',
      }}
    />
  )
}
