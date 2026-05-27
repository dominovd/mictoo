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
  title: 'O Mictoo — darmowe narzędzie do transkrypcji AI',
  description:
    'Kto stoi za Mictoo, darmowym narzędziem do transkrypcji audio i wideo z AI. Jak działa, jak zarabiamy i co robimy (i nie robimy) z twoimi plikami.',
  alternates: { canonical: 'https://mictoo.com/pl/about', languages: LOCALE_ALTERNATES },
}

export default function PlAboutPage() {
  return (
    <AboutLayout
      contactHref="/pl/contact"
      strings={{
        h1: 'O Mictoo',
        lead:
          'Mictoo to darmowe narzędzie do transkrypcji audio i wideo bez rejestracji, zbudowane dla każdego, kto potrzebuje szybko i precyzyjnie zamienić mowę w tekst.',
        ourWhy:
          'Zbudowaliśmy Mictoo, ponieważ dobra transkrypcja nie powinna wymagać subskrypcji, konta ani umiejętności technicznych. Upuść plik, dostań tekst. Koniec.',

        whoBuiltHeading: 'Kto stoi za Mictoo',
        whoBuiltBody: [
          'Mictoo to projekt indie, zbudowany i prowadzony przez mały zespół, który ostatnie dziesięć lat spędził pracując nad SEO, treścią i narzędziami dla deweloperów. Nie jesteśmy startupem finansowanym przez VC goniącym miliard użytkowników. Nie jesteśmy też side projectem giganta transkrypcji próbującego zagarnąć segment free tier. Jesteśmy ludźmi, którzy sami używają narzędzi transkrypcji i zmęczyli się tym, że każda opcja była zamknięta, powolna lub wroga użytkownikowi.',
          'Jeśli chcesz dotrzeć bezpośrednio do ludzi stojących za stroną, email na końcu tej strony trafia do prawdziwej skrzynki. Każda wiadomość jest czytana.',
        ],

        whatPowersHeading: 'Co napędza Mictoo',
        whatPowersBody:
          'Mictoo działa na Whisper od OpenAI, tym samym modelu rozpoznawania mowy używanym w ChatGPT. Whisper large-v3 został wytrenowany na 680.000 godzin wielojęzycznego audio. Obsługuje ponad 50 języków z auto-wykrywaniem i jest uważany za najsilniejszy dostępny otwarty model rozpoznawania mowy. Uruchamiamy Whisper przez API Groq hostowane w USA (whisper-large-v3) dla szybkości i efektywności kosztowej, z API Whisper OpenAI jako automatycznym fallbackiem, jeśli Groq jest niedostępny. Pliki są strumieniowane bezpośrednio do dostawcy transkrypcji i nigdy nie są zapisywane na serwerach Mictoo. Ani Groq, ani OpenAI nie używają audio API do trenowania modeli, a OpenAI przechowuje dane API maksymalnie 30 dni do monitorowania nadużyć przed usunięciem.',

        securityHeading: 'Bezpieczeństwo i co dzieje się z twoim plikiem',
        securityBody: [
          'Twój plik audio lub wideo jest wgrywany do Vercel Blob Storage, strumieniowany do dostawcy transkrypcji, transkrybowany i usuwany. Cała runda trwa mniej niż minutę dla większości plików, a na końcu nie ma kopii twojego pliku na naszej infrastrukturze.',
          'Nie przechowujemy też twojej transkrypcji. Żyje w karcie przeglądarki. Jeśli chcesz ją zachować, kliknij przycisk pobierania. Gdy zamykasz kartę, nie mamy zapisu tego, co transkrybowałeś. Jedyne, co logujemy, to anonimowy licznik ile plików zostało przetworzonych, aby śledzić użycie i płacić naszym dostawcom.',
          'Jeśli jesteś zalogowany (darmowo, opcjonalnie), trzymamy małą historię twoich poprzednich transkrypcji na twoim koncie, abyś mógł je otworzyć ponownie. Anonimowa transkrypcja nie trzyma historii.',
        ],

        moneyHeading: 'Jak zarabiamy',
        moneyBody: [
          'Mictoo finansuje się reklamą display. Aplikowaliśmy do Google AdSense i planujemy pokazywać reklamy na stronach marketingowych (nie w samym flow narzędzia). Reklamy pokrywają nasze rachunki za hosting i API.',
          'Poza reklamami budujemy mały plan Pro dla użytkowników, którzy potrzebują dłuższych plików, uploadu wsadowego lub diaryzacji mówców, gdy uda nam się dostarczyć. Free tier nie zniknie. Free tier istnieje, bo większość ludzi potrzebuje przetranskrybować plik czasami i nie powinna płacić miesięcznej subskrypcji za to.',
          'Nie sprzedajemy twoich danych. Nie mamy danych do sprzedania, bo nie przechowujemy twoich plików ani transkrypcji. Jedyne, co osoby trzecie widzą o tobie, to standardowy targeting reklamowy (lokalizacja, ogólne zainteresowania), który AdSense obsługuje po stronie Google.',
        ],

        principlesHeading: 'Nasze zasady',
        principles: [
          { label: 'Za darmo.', body: 'Bez ukrytych kosztów, bez triala, bez karty kredytowej dla głównego narzędzia.' },
          { label: 'Prywatnie.', body: 'Twoje pliki nigdy nie są przechowywane. Są przetwarzane i natychmiast usuwane.' },
          { label: 'Prosto.', body: 'Jedna strona, jedno narzędzie, zero tarcia.' },
          { label: 'Precyzyjnie.', body: 'Używamy najlepszego dostępnego modelu AI dla jakości transkrypcji.' },
        ],

        editorialHeading: 'Czego nie zrobimy',
        editorialBullets: [
          { label: 'Bez dark patterns.', body: 'Bez fałszywych timerów countdown, bez "twój plik wygasa za 60 sekund, zapłać aby pobrać", bez muru emaila w środku flow uploadu.' },
          { label: 'Bez bait-and-switch z ceną.', body: 'Free tier jest naprawdę darmowy. Nie ograniczymy retroaktywnie funkcji, które wcześniej były darmowe.' },
          { label: 'Bez odsprzedaży transkrypcji.', body: 'Nie przechowujemy twoich transkrypcji. Nie mamy licencji "dane treningowe" ukrytej w warunkach.' },
          { label: 'Bez zwodniczych sieci reklamowych.', body: 'Używamy Google AdSense, nie sieci, które podmieniają UI przeglądarki lub przejmują przycisk wstecz.' },
          { label: 'Bez fałszywych recenzji.', body: 'Jeśli widzisz Mictoo na stronie recenzji, dotarło tam organicznie. Nie płacimy za placement i nie piszemy własnych recenzji.' },
        ],

        contactHeading: 'Kontakt',
        contactPrefix: 'Feedback, prośba o funkcję lub pytanie?',
        contactCtaLabel: 'Skontaktuj się',
        contactSuffix: ' lub napisz na',
      }}
    />
  )
}
