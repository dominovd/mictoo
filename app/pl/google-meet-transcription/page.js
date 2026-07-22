import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'pl': 'https://mictoo.com/pl/google-meet-transcription',
  'ja': 'https://mictoo.com/ja/google-meet-transcription',
  'ko': 'https://mictoo.com/ko/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Transkrypcja nagrań Google Meet na tekst | Mictoo',
  description:
    'Prześlij autoryzowane nagranie Google Meet z Dysku lub lokalnego zrzutu ekranu i otrzymaj transkrypt, podsumowanie AI oraz eksporty.',
  alternates: {
    canonical: 'https://mictoo.com/pl/google-meet-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transkrypcja Google Meet: Konto Workspace lub darmowe | Mictoo',
    description: 'Nagranie z Dysku lub zrzut ekranu z darmowego Meet. Oba działają.',
    url: 'https://mictoo.com/pl/google-meet-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transkrypcja Google Meet',
    description: 'Każdy poziom konta, jedna strona przesyłania.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlGoogleMeetTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pl"
      badge="Google Meet · Dysk lub lokalny zrzut · Darmowe"
      h1First="Transkrypcja Google Meet"
      h1Second="Nagrania z Dysku i lokalne zrzuty na tekst"
      subtitle="Prześlij nagranie Google Meet z Dysku lub lokalny zrzut, do którego masz autoryzację. Dostępność nagrania zależy od edycji Workspace gospodarza, uprawnień i ustawień administratora."
      currentHref="/pl/google-meet-transcription"

      platforms={[
        { name: 'Meet MP4',    iconKey: 'videoCameraFill', brandBg: '#00832D' },
        { name: 'QuickTime',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'OBS',         iconKey: 'videoCameraFill', brandBg: '#302E31' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/pl/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/pl/teams-meeting-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/pl/meeting-transcription' },
      ]}

      howItWorksTitle="Jak działa transkrypcja Google Meet"
      steps={[
        {
          icon: 'folder',
          title: 'Zdobądź nagranie',
          desc: 'Uprawnione nagranie Workspace: Dysk › Mój Dysk › Nagrania Meet. W przeciwnym razie użyj autoryzowanego lokalnego zrzutu, który przestrzega zasad zgody uczestników.',
        },
        {
          icon: 'upload',
          title: 'Upuść plik tutaj',
          desc: 'MP4 lub M4A działają. Dla dużych plików MP4 najpierw wyodrębnij dźwięk za pomocą ffmpeg lub zaloguj się, aby automatycznie podzielić.',
        },
        {
          icon: 'editPen',
          title: 'Transkrypt, podsumowanie, eksporty',
          desc: 'Uzyskaj transkrypt z znacznikami czasowymi, podsumowanie AI oraz eksporty TXT/SRT/VTT/DOCX. Czas przetwarzania zależy od długości i rozmiaru pliku.',
        },
      ]}

      exampleTitle="Przykład transkryptu Google Meet"
      exampleFileName="meet-recording.mp4"
      exampleDurationLabel="27:45"
      exampleLines={[
        { t: '0:00',  line: 'Cześć zespole, dziękuję za dołączenie. Szybka synchronizacja w sprawie planu uruchomienia Q3, zanim wyjadę na offsite w przyszłym tygodniu.' },
        { t: '0:10',  line: 'Marketing zakończył prace nad tekstem strony docelowej. Inżynieria jest na dobrej drodze do zamrożenia funkcji w piątek.' },
        { t: '0:22',  line: 'Dokumenty wsparcia są punktem ryzyka. Jesteśmy opóźnieni o około trzy dni i musimy nadrobić przed uruchomieniem.' },
        { t: '0:33',  line: 'Mogę przenieść Annę z dokumentów wprowadzających, aby pomóc w tym tygodniu. To powinno zniwelować lukę.' },
        { t: '0:44',  line: 'Świetnie. Drugi temat, zmiany na stronie cenowej, o których rozmawialiśmy. Czy ktoś ma obawy przed ich wdrożeniem?' },
        { t: '0:56',  line: 'Jedyna rzecz, którą chciałbym zaznaczyć, to ramy dotyczące poziomu przedsiębiorstwa. Wydaje się nieco cienkie w stosunku do ceny.' },
        { t: '1:08',  line: 'Słuszna uwaga. Pozwól, że w tym tygodniu ponownie przejrzę tę sekcję i podzielę się poprawioną wersją w piątek.' },
      ]}
      summaryPoints={[
        'Śledzenie uruchomienia Q3 przebiega dobrze, zamrożenie funkcji w piątek.',
        'Dokumenty wsparcia opóźnione o 3 dni (ryzyko).',
        'Anna została przeniesiona, aby zamknąć lukę w dokumentach.',
        'Ramki poziomu przedsiębiorstwa wymagają przeglądu.',
      ]}
      actionItems={[
        'Przenieś Annę do dokumentów wsparcia w tym tygodniu',
        'Popraw ramki poziomu przedsiębiorstwa do piątku',
        'Potwierdź zamrożenie funkcji na piątkowym spotkaniu',
      ]}

      whyTitle="Dlaczego Mictoo do transkrypcji Google Meet"
      whyCards={[
        {
          icon: 'lock',
          title: 'Działa z plikiem multimedialnym',
          desc: 'Prześlij nagranie z Dysku lub autoryzowany lokalny zrzut bez łączenia Mictoo z Twoim kontem Google.',
        },
        {
          icon: 'target',
          title: 'Tekst z znacznikami czasowymi do przeglądu',
          desc: 'Przeglądaj imiona i terminy techniczne w odniesieniu do nagrania, a następnie eksportuj poprawiony transkrypt w potrzebnym formacie.',
        },
        {
          icon: 'sparkles',
          title: 'Podsumowanie AI zawsze w zestawie',
          desc: 'Podsumowanie transkryptu AI Workspace to osobna płatna funkcja. Nasze jest dołączone do każdego transkryptu.',
        },
        {
          icon: 'globe',
          title: 'Tłumaczenie na 50+ języków',
          desc: 'Podsumowanie spotkań w różnych językach bez dostawcy tłumaczeń.',
        },
      ]}

      scenariosTitle="Typowe scenariusze Meet"
      scenarios={[
        { icon: 'chat',      title: 'Standup / synchronizacja' },
        { icon: 'briefcase', title: 'Przegląd klienta' },
        { icon: 'search',    title: 'Wywiad z użytkownikiem' },
        { icon: 'users',     title: 'Spotkanie ogólne' },
        { icon: 'headset',   title: 'Rozmowa wsparcia' },
        { icon: 'globe',     title: 'Wielojęzyczne' },
      ]}

      tipsTitle="Porady dotyczące nagrań Google Meet"
      tips={[
        'Nagrania Meet Workspace zapisują się na Dysku › Nagrania Meet.',
        'Darmowy poziom: QuickTime (Mac) lub OBS (Win/Linux) działają dobrze.',
        'Duży plik MP4? Wyodrębnij dźwięk: ffmpeg -i meet.mp4 -vn -ac 1 -ar 16000 audio.m4a.',
        'Zaloguj się, aby automatycznie podzielić długie spotkania.',
      ]}

      guidesTitle="Inne platformy spotkań"
      guides={[
        { href: '/pl/zoom-transcription',          icon: 'video', title: 'Zoom',           desc: 'Chmura + Lokalnie + M4A' },
        { href: '/pl/teams-meeting-transcription', icon: 'video', title: 'MS Teams',       desc: 'Ścieżki OneDrive + SharePoint' },
        { href: '/pl/meeting-transcription',       icon: 'video', title: 'Meeting hub',    desc: 'Każda platforma, jedno przesyłanie' },
        { href: '/pl/webinar-transcription',       icon: 'monitor', title: 'Webinary',     desc: 'ON24, Demio, StreamYard' },
      ]}

      faq={[
        {
          q: 'Czy potrzebuję Google Workspace, aby nagrać rozmowę Meet?',
          a: 'Dostępność nagrań Google zależy od edycji konta gospodarza, roli w spotkaniu, ustawień administratora i uprawnień. Uprawnione nagrania są zapisywane na Dysku. Jeśli zamiast tego wykonasz lokalny zrzut, uzyskaj wszelkie wymagane zgody uczestników i przestrzegaj odpowiednich zasad.',
        },
        {
          q: 'Gdzie zapisują się nagrania Workspace Meet?',
          a: 'Na Dysku organizatora spotkania: Mój Dysk › Nagrania Meet. MP4 zazwyczaj pojawia się w ciągu kilku minut po zakończeniu spotkania. Powiadomienie e-mail jest wysyłane, gdy jest gotowe.',
        },
        {
          q: 'Czy powinienem użyć transkryptu Meet czy przesłać nagranie?',
          a: 'Użyj transkryptu Meet, gdy jest dostępny i spełnia Twoje potrzeby. Przesyłanie mediów jest przydatne, gdy chcesz uzyskać eksporty Mictoo, tłumaczenie lub dodatkowy transkrypt do przeglądu. Dokładność różni się w zależności od dźwięku.',
        },
        {
          q: 'Moje nagranie Meet ma ponad 60 MB. Co teraz?',
          a: 'Wyodrębnij tylko dźwięk za pomocą ffmpeg -i meet.mp4 -vn -ac 1 -ar 16000 audio.m4a. Lub zaloguj się, aby automatycznie podzielić długie pliki do około 3 godzin.',
        },
        {
          q: 'Czy mogę uzyskać podsumowanie AI rozmowy Meet?',
          a: 'Tak. Podsumowanie AI pojawia się automatycznie obok transkryptu. Solidny pierwszy szkic do e-maila podsumowującego lub dokumentu follow-up.',
        },
        {
          q: 'Czy Mictoo identyfikuje, kto mówi w Meet?',
          a: 'Nie. Aktualny transkrypt to ciągły tekst z znacznikami czasowymi na każdą linię i bez automatycznych etykiet mówców.',
        },
        {
          q: 'Czy nagrania Meet są przechowywane na Waszych serwerach?',
          a: 'Nie. Strumienie audio trafiają do dostawcy transkrypcji, są przetwarzane raz i usuwane. Tylko transkrypt pozostaje na kontach zalogowanych.',
        },
      ]}

      ctaHeadline="Przekształć rozmowy Meet w czysty tekst"
      ctaSubtitle="Prześlij autoryzowane nagranie z Dysku lub lokalny zrzut, aby uzyskać tekst, podsumowanie i eksporty."
      ctaButton="Prześlij nagranie Meet"

      relatedLinks={[
        { href: '/pl/meeting-transcription',       label: 'Transkrypcja spotkań' },
        { href: '/pl/zoom-transcription',          label: 'Transkrypcja Zoom' },
        { href: '/pl/teams-meeting-transcription', label: 'Transkrypcja Teams' },
        { href: '/pl/webinar-transcription',       label: 'Transkrypcja webinarów' },
        { href: '/pl/business-transcription',      label: 'Transkrypcja biznesowa' },
      ]}
    />
  )
}