import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/fireflies-alternative',
  'fr': 'https://mictoo.com/fr/fireflies-alternative',
  'de': 'https://mictoo.com/de/fireflies-alternative',
  'es': 'https://mictoo.com/es/fireflies-alternative',
  'ru': 'https://mictoo.com/ru/fireflies-alternative',
  'it': 'https://mictoo.com/it/fireflies-alternative',
  'pt': 'https://mictoo.com/pt/fireflies-alternative',
  'pl': 'https://mictoo.com/pl/fireflies-alternative',
  'x-default': 'https://mictoo.com/fireflies-alternative',
}

export const metadata = {
  title: 'Alternatywa dla Fireflies — Transkrybuj spotkania bez bota | Mictoo',
  description: 'Fireflies dołącza do twoich spotkań jako bot, aby nagrywać i transkrybować. Mictoo transkrybuje nagrania, które już masz — bez bota, bez rejestracji, bez OAuth. Za darmo z OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/pl/fireflies-alternative', languages: LANGS },
}

export default function PlFirefliesAlternativePage() {
  return (
    <ComparisonLayout
      badge="Porównanie · Fireflies · Za darmo"
      h1={<>Alternatywa dla Fireflies<br /><span className="text-brand-600">Transkrybuj spotkania bez bota</span></>}
      subtitle="Fireflies dołącza do twoich spotkań jako bot AI, aby nagrywać i transkrybować w czasie rzeczywistym. Mictoo działa odwrotnie — prześlij nagranie, które już masz, i otrzymaj transkrypcję. Bez bota, bez integracji kalendarza, bez rejestracji."
      competitorName="Fireflies"
      rows={[
        { label: 'Plan darmowy',           mictoo: 'Bez limitu miesięcznego, 25 MB na plik', them: '800 minut / użytkownik / miesiąc' },
        { label: 'Wymagane konto',         mictoo: 'Nie', them: 'Tak (email + OAuth)' },
        { label: 'Plany płatne',           mictoo: 'Za darmo',  them: '$10-19 / użytkownik / miesiąc' },
        { label: 'Metoda nagrywania',      mictoo: 'Sam przesyłasz nagranie', them: 'Bot dołącza do spotkania live' },
        { label: 'Transkrypcja live',      mictoo: 'Nie', them: 'Tak (podczas calla)' },
        { label: 'Integracja kalendarza',  mictoo: 'Nie', them: 'Google / Outlook / Zoom' },
        { label: 'Podsumowanie AI',        mictoo: 'Tak, za darmo', them: 'Tak (płatne)' },
        { label: 'Integracja CRM',         mictoo: 'Nie', them: 'Salesforce, HubSpot itp.' },
        { label: 'Model transkrypcji',     mictoo: 'OpenAI Whisper', them: 'Własny' },
      ]}
      whyMictoo={[
        { icon: '🚫', title: 'Bez bota na twoich spotkaniach', desc: 'Niektórzy uczestnicy czują się niekomfortowo z botem AI nagrywającym call. Z Mictoo nagrywasz lokalnie przez Zoom/Meet/Teams i transkrybujesz później.' },
        { icon: '🆓', title: 'Bez rejestracji, bez kwoty', desc: 'Darmowy plan Fireflies ogranicza cię do 800 minut na użytkownika/miesiąc i wymaga OAuth. Mictoo działa bez konta i bez miesięcznego liczenia minut.' },
        { icon: '🌍', title: 'Lepsze dla nieanglojęzycznego audio', desc: 'OpenAI Whisper obsługuje ponad 50 języków z wysoką precyzją. Fireflies jest zoptymalizowany pod angielskie calle biznesowe i jest słabszy dla języków jak polski, ukraiński czy koreański.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Sam nagrywasz spotkania i chcesz transkrypcję po zakończeniu',
          'Nie chcesz bota AI dołączającego do twoich calli',
          'Potrzebujesz transkrypcji dla spotkań w innych językach',
          'Chcesz darmowej opcji bez rejestracji dla jednorazowych nagrań',
        ],
        them: [
          'Chcesz transkrypcji live podczas spotkania',
          'Potrzebujesz logowania CRM rozmów sprzedażowych',
          'Twój zespół chce automatycznego nagrywania wszystkich calli',
          'Potrzebujesz analytics konwersacji (czas mówienia, sentyment itp.)',
        ],
      }}
      faq={[
        { q: 'Czy Mictoo może dołączyć do mojego spotkania Zoom lub Teams jak Fireflies?', a: 'Nie. Mictoo nie dołącza do spotkań. Nagrywasz call wbudowanym nagrywaniem Zoom/Teams/Meet, a następnie przesyłasz plik. To unika bota na spotkaniach i związanych z nim problemów z prywatnością.' },
        { q: 'Jak otrzymać nagranie do przesłania?', a: 'W Zoom: włącz Local Recording lub Cloud Recording w spotkaniu. Po spotkaniu pobierz MP4 lub M4A z Zoom i prześlij do Mictoo.' },
        { q: 'Czy Mictoo robi action items i podsumowanie jak Fireflies?', a: 'Tak. Po transkrypcji Podsumowanie AI Mictoo pokazuje przegląd 2-3 zdaniowy, kluczowe punkty i zadania — wszystko w planie darmowym. Fireflies oferuje podobne funkcje tylko w planach płatnych.' },
        { q: 'A analytics spotkań?', a: 'Mictoo nie robi czasu mówienia, sentymentu ani analytics mówców. Jeśli potrzebujesz conversation intelligence dla coachingu sprzedaży, Fireflies (lub Gong) jest lepszy.' },
        { q: 'Czy Mictoo jest bezpieczny dla poufnych spotkań?', a: 'Pliki są wysyłane bezpośrednio do API Whisper od OpenAI i odrzucane. Mictoo nic nie przechowuje. Zgodnie z polityką danych API OpenAI, twoje audio nie jest używane do trenowania i jest usuwane po maksymalnie 30 dniach monitorowania nadużyć.' },
      ]}
      relatedLinks={[
        { href: '/pl/otter-alternative', label: 'Alternatywa dla Otter' },
        { href: '/pl/meeting-transcription', label: 'Transkrypcja spotkań' },
        { href: '/pl/zoom-transcription', label: 'Transkrypcja Zoom' },
        { href: '/pl', label: 'Wypróbuj Mictoo' },
      ]}
    />
  )
}
