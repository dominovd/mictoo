import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
  'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
  'ko': 'https://mictoo.com/ko/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Transkrypcja spotkań Teams z nagrań MP4 | Mictoo',
  description:
    'Prześlij nagranie MP4 z Microsoft Teams z OneDrive lub SharePoint i uzyskaj transkrypcję z znacznikami czasowymi, podsumowanie AI oraz pliki do eksportu.',
  alternates: {
    canonical: 'https://mictoo.com/pl/teams-meeting-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transkrypcja spotkań Teams z MP4 | Mictoo',
    description: 'Prześlij nagranie Teams z OneDrive lub SharePoint i uzyskaj tekst, podsumowanie oraz eksporty.',
    url: 'https://mictoo.com/pl/teams-meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transkrypcja spotkań Teams',
    description: 'Prześlij MP4 z OneDrive lub SharePoint i uzyskaj transkrypcję.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlTeamsMeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pl"
      badge="Teams · OneDrive / SharePoint · M365 · Darmowe"
      h1First="Transkrypcja spotkań Teams"
      h1Second="Z MP4 z OneDrive lub SharePoint na tekst"
      subtitle="Pobierz nagranie Teams, do którego masz dostęp, a następnie prześlij MP4, aby uzyskać transkrypcję z znacznikami czasowymi, podsumowanie AI oraz pliki do eksportu. Dostępność nagrania zależy od Twojej licencji Microsoft 365 i polityki organizacji."
      currentHref="/pl/teams-meeting-transcription"

      platforms={[
        { name: 'OneDrive',    iconKey: 'videoCameraFill', brandBg: '#0364B8' },
        { name: 'SharePoint',  iconKey: 'videoCameraFill', brandBg: '#036C70' },
        { name: 'Channel MP4', iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/pl/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/pl/google-meet-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/pl/meeting-transcription' },
      ]}

      howItWorksTitle="Jak działa transkrypcja spotkań Teams"
      steps={[
        {
          icon: 'folder',
          title: 'Znajdź nagranie',
          desc: 'Prywatne spotkanie: OneDrive › Moje pliki › Nagrania. Spotkanie kanałowe: witryna SharePoint kanału.',
        },
        {
          icon: 'upload',
          title: 'Przeciągnij MP4 tutaj',
          desc: 'Pobierz z OneDrive lub SharePoint i przeciągnij. Dla plików powyżej 60 MB, wyodrębnij dźwięk lub zaloguj się, aby automatycznie podzielić.',
        },
        {
          icon: 'editPen',
          title: 'Transkrypcja, podsumowanie, eksporty',
          desc: 'Transkrypcja z znacznikami czasowymi, podsumowanie AI, TXT/SRT/VTT/DOCX. 30-minutowe spotkanie Teams kończy się w około minutę.',
        },
      ]}

      exampleTitle="Przykład transkrypcji spotkania Teams"
      exampleFileName="teams-channel-meeting.mp4"
      exampleDurationLabel="41:08"
      exampleLines={[
        { t: '0:00',  line: 'Dobrze, witam na przeglądzie sprintu. Przejdziemy przez to, co zostało wydane, co nie i dlaczego.' },
        { t: '0:11',  line: 'Zespół płatności wydał nowy proces zwrotu we wtorek. Przyjęcie jest powyżej oczekiwań, około czterdziestu procent kwalifikujących się biletów.' },
        { t: '0:24',  line: 'Zespół wyszukiwania napotkał dłuższy proces indeksowania niż oczekiwano. Wydanie przesunięte na następny sprint.' },
        { t: '0:35',  line: 'To w porządku, ale musimy przekazać opóźnienie zespołowi ds. sukcesu klienta, aby mogli zarządzać oczekiwaniami.' },
        { t: '0:47',  line: 'Wyślę notatkę w wspólnym kanale dzisiaj z poprawionym harmonogramem i powodem.' },
        { t: '0:58',  line: 'Po trzecie, wskaźnik awarii mobilnych nieco wzrósł. Nadal w SLA, ale warto to obserwować w tym sprincie.' },
        { t: '1:09',  line: 'Zespół urządzeń już się tym zajmuje. Powinniśmy mieć przyczynę źródłową do środy i poprawkę do końca sprintu.' },
      ]}
      summaryPoints={[
        'Proces zwrotu wydany we wtorek, 40% przyjęcia.',
        'Zespół wyszukiwania opóźniony o jeden sprint (proces indeksowania).',
        'Wskaźnik awarii mobilnych wzrósł, ale w SLA.',
        'Przyczyna awarii mobilnych do środy.',
      ]}
      actionItems={[
        'Wyślij notatkę o opóźnieniu do kanału ds. sukcesu klienta',
        'Zbadaj przyczynę awarii mobilnych (środa)',
        'Potwierdź nową datę wydania zespołu wyszukiwania',
      ]}

      whyTitle="Dlaczego Mictoo dla nagrań Teams"
      whyCards={[
        {
          icon: 'folder',
          title: 'Działa z pobranymi nagraniami',
          desc: 'Użyj MP4, do którego już masz pozwolenie na pobranie z OneDrive lub witryny SharePoint kanału.',
        },
        {
          icon: 'target',
          title: 'Przejrzyj nazwy i terminologię',
          desc: 'Transkrypcja z znacznikami czasowymi ułatwia znalezienie i poprawienie nazw produktów, akronimów i terminów specjalistycznych.',
        },
        {
          icon: 'sparkles',
          title: 'Podsumowanie obok transkrypcji',
          desc: 'Generuj szkic podsumowania i trzymaj go obok pełnego tekstu do przeglądu przed udostępnieniem.',
        },
        {
          icon: 'globe',
          title: 'Tłumacz nagrania w różnych językach',
          desc: 'Nagranie w jednym języku, podsumowanie potrzebne w innym. Jedno kliknięcie, 50+ języków.',
        },
      ]}

      scenariosTitle="Typowe scenariusze Teams"
      scenarios={[
        { icon: 'chat',      title: 'Przegląd sprintu' },
        { icon: 'briefcase', title: 'Synchronizacja zarządu' },
        { icon: 'users',     title: 'Standup' },
        { icon: 'target',    title: 'Przegląd OKR' },
        { icon: 'headset',   title: 'Eskacja wsparcia' },
        { icon: 'globe',     title: 'Międzynarodowe połączenie' },
      ]}

      tipsTitle="Porady dotyczące nagrań Teams"
      tips={[
        'Prywatne spotkania zapisują się na OneDrive (konto organizatora).',
        'Spotkania kanałowe zapisują się na witrynie SharePoint kanału.',
        'Tenanci GCC / przedsiębiorstw mogą ograniczać pobieranie: zapytaj IT.',
        'Dla długich spotkań wyodrębnij dźwięk za pomocą ffmpeg, aby zmniejszyć rozmiar pliku.',
      ]}

      guidesTitle="Inne platformy spotkań"
      guides={[
        { href: '/pl/zoom-transcription',        icon: 'video', title: 'Zoom',        desc: 'Chmura + Lokalnie + M4A' },
        { href: '/pl/google-meet-transcription', icon: 'video', title: 'Google Meet', desc: 'Workspace + darmowe' },
        { href: '/pl/meeting-transcription',     icon: 'video', title: 'Meeting hub', desc: 'Dowolna platforma, jedno przesłanie' },
        { href: '/pl/business-transcription',    icon: 'briefcase', title: 'Biznes', desc: 'Autoryzowane nagrania wewnętrzne' },
      ]}

      faq={[
        {
          q: 'Gdzie zapisują się nagrania Teams?',
          a: 'Prywatne spotkania: na OneDrive organizatora w Moje pliki › Nagrania. Spotkania kanałowe: na witrynie SharePoint wspierającej ten kanał, w folderze kanału w Dokumentach.',
        },
        {
          q: 'Czy potrzebuję Teams Premium, aby przesłać nagranie?',
          a: 'Mictoo przetwarza pobrany plik multimedialny, a nie łączy się z Twoim kontem Teams. Twoja zdolność do nagrywania, transkrypcji lub pobierania w Teams nadal zależy od Twojej licencji Microsoft 365, roli w spotkaniu i polityki organizacji.',
        },
        {
          q: 'Czy powinienem używać transkrypcji Teams, czy przesłać nagranie?',
          a: 'Użyj transkrypcji Teams, gdy jest dostępna i spełnia Twoje potrzeby. Przesyłanie nagrania jest przydatne, gdy chcesz uzyskać eksporty Mictoo, tłumaczenie lub dodatkową transkrypcję do przeglądu. Dokładność różni się w zależności od nagrania.',
        },
        {
          q: 'Moje MP4 z Teams ma ponad 60 MB. Co teraz?',
          a: 'Wyodrębnij dźwięk: ffmpeg -i teams.mp4 -vn -ac 1 -ar 16000 audio.m4a. Lub zaloguj się, aby automatycznie podzielić pliki do około 3 godzin.',
        },
        {
          q: 'Czy mogę używać Mictoo dla tenancji GCC / przedsiębiorstw?',
          a: 'Niektórzy tenanci przedsiębiorstw i rządowi ograniczają pobieranie lub przetwarzanie zewnętrzne. Postępuj zgodnie z polityką swojej organizacji i skonsultuj się z IT lub właścicielem nagrania przed pobraniem lub przesłaniem mediów spotkania.',
        },
        {
          q: 'Czy Mictoo identyfikuje mówców Teams?',
          a: 'Nie. Obecna transkrypcja to ciągły tekst z znacznikami czasowymi dla każdej linii i bez automatycznych etykiet mówców.',
        },
        {
          q: 'Czy nagrania Teams są przechowywane na Waszych serwerach?',
          a: 'Nie. Plik jest przesyłany do dostawcy transkrypcji, przetwarzany raz i usuwany. Tylko transkrypcja pozostaje na zalogowanych kontach.',
        },
      ]}

      ctaHeadline="Zamień spotkania Teams na czysty tekst"
      ctaSubtitle="Prześlij autoryzowane nagranie z OneDrive lub SharePoint i uzyskaj tekst, podsumowanie oraz eksporty."
      ctaButton="Prześlij nagranie Teams"

      relatedLinks={[
        { href: '/pl/meeting-transcription',       label: 'Transkrypcja spotkań' },
        { href: '/pl/zoom-transcription',          label: 'Transkrypcja Zoom' },
        { href: '/pl/google-meet-transcription',   label: 'Transkrypcja Google Meet' },
        { href: '/pl/business-transcription',      label: 'Transkrypcja Biznesowa' },
        { href: '/pl/webinar-transcription',       label: 'Transkrypcja Webinaru' },
      ]}
    />
  )
}