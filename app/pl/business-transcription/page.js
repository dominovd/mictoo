import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'ko': 'https://mictoo.com/ko/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: 'Transkrypcja Spotkań Biznesowych i Podsumowanie AI | Mictoo',
  description:
    'Przekształć autoryzowane nagrania wewnętrznych spotkań w transkrypcje z oznaczeniem czasowym, podsumowania AI i eksportowalne dokumenty podsumowujące.',
  alternates: {
    canonical: 'https://mictoo.com/pl/business-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transkrypcja Biznesowa: Spotkania Wewnętrzne na Tekst | Mictoo',
    description: 'Transkrybuj wewnętrzne spotkania firmowe bez konfiguracji IT.',
    url: 'https://mictoo.com/pl/business-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transkrypcja Biznesowa',
    description: 'Spotkania 1:1 dla założycieli, spotkania ogólne, briefingi wykonawcze.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlBusinessTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pl"
      badge="Założyciele · Wykonawcy · Małe zespoły · Darmowe"
      h1First="Transkrypcja Biznesowa"
      h1Second="Spotkania 1:1 dla założycieli, spotkania ogólne, briefingi wykonawcze"
      subtitle="Praktyczne narzędzie do transkrypcji dla autoryzowanych spotkań wewnętrznych. Prześlij nagranie, przejrzyj transkrypcję i podsumowanie AI, a następnie wyeksportuj podsumowanie dla swojego zespołu."
      currentHref="/pl/business-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/pl/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/pl/teams-meeting-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/pl/google-meet-transcription' },
        { name: 'Webex',       iconKey: 'videoCameraFill', brandBg: '#0F1F35' },
        { name: 'BlueJeans',   iconKey: 'videoCameraFill', brandBg: '#005EB8' },
        { name: 'GoToMeeting', iconKey: 'videoCameraFill', brandBg: '#F68B1F' },
      ]}

      howItWorksTitle="Jak działa transkrypcja biznesowa"
      steps={[
        {
          icon: 'folder',
          title: 'Eksportuj nagranie',
          desc: 'Z Zoom, Teams, Meet, Webex lub cokolwiek używa twoja firma. MP4 lub M4A audio tylko działają.',
        },
        {
          icon: 'upload',
          title: 'Przeciągnij plik tutaj',
          desc: 'Prześlij nagranie, które twoja organizacja pozwala ci przetworzyć. Nie jest wymagana instalacja oprogramowania ani integracja z katalogiem.',
        },
        {
          icon: 'editPen',
          title: 'Transkrypcja, podsumowanie, zadania do wykonania',
          desc: 'Transkrypcja z oznaczeniem czasowym, podsumowanie AI, eksport DOCX gotowy do e-maila z podsumowaniem.',
        },
      ]}

      exampleTitle="Przykład transkrypcji spotkania biznesowego"
      exampleFileName="q3-strategy-session.mp4"
      exampleDurationLabel="58:42"
      exampleLines={[
        { t: '0:00',  line: 'Dzięki wszystkim za poświęcenie czasu. To nasze spotkanie kontrolne Q3, mamy zablokowaną godzinę.' },
        { t: '0:10',  line: 'Zacznę od aktualizacji. Przychody są o osiem procent wyższe od planu, głównie z ekspansji na rynku średnim.' },
        { t: '0:22',  line: 'Nowa strategia dla przedsiębiorstw jest wolniejsza niż przewidywaliśmy. Dwa kontrakty przesunęły się z Q2 do Q3.' },
        { t: '0:35',  line: 'Powinniśmy omówić, czy podwoić nasze wysiłki na rynku średnim, czy bardziej skupić się na gotowości przedsiębiorstw w tym kwartale.' },
        { t: '0:48',  line: 'Moja opinia: rynek średni działa, a nie powinniśmy rozpraszać zespołu, goniąc za segmentem przedsiębiorstw jeszcze.' },
        { t: '1:02',  line: 'Zgadzam się. Ustalmy cel trzydziestu nowych kont na rynku średnim do końca Q3 i wróćmy do przedsiębiorstw w planowaniu Q4.' },
        { t: '1:14',  line: 'Jeszcze jeden temat przed zakończeniem. Plan inżynieryjny na ten sam kwartał, który wiążemy z tymi zobowiązaniami klientów.' },
      ]}
      summaryPoints={[
        'Przychody 8% powyżej planu, napędzane przez rynek średni.',
        'Ruch przedsiębiorstw opóźniony (2 kontrakty przeniesione z Q2 do Q3).',
        'Decyzja: podwoić wysiłki na rynku średnim w tym kwartale.',
        'Cel: 30 nowych kont na rynku średnim do końca Q3.',
      ]}
      actionItems={[
        'Ustal cel 30 kont na rynku średnim',
        'Wróć do ruchu przedsiębiorstw w planowaniu Q4',
        'Dostosuj plan inżynieryjny do zobowiązań klientów',
      ]}

      whyTitle="Dlaczego Mictoo do transkrypcji biznesowej"
      whyCards={[
        {
          icon: 'lock',
          title: 'Brak instalacji oprogramowania',
          desc: 'Przepływ pracy w przeglądarce nie wymaga klienta desktopowego ani integracji z katalogiem. Polityki twojej organizacji nadal obowiązują.',
        },
        {
          icon: 'sparkles',
          title: 'Podsumowanie gotowe do e-maila',
          desc: 'Podsumowanie AI daje szkic podsumowania w kilka sekund. Skróć to, co już zobowiązałeś się, zachowaj to, co wymaga eskalacji.',
        },
        {
          icon: 'shield',
          title: 'Nagrania nie są przechowywane',
          desc: 'Strumienie audio trafiają do dostawcy transkrypcji i są usuwane po przetworzeniu. Tylko transkrypcja pozostaje na zalogowanych kontach.',
        },
        {
          icon: 'globe',
          title: 'Tłumacz dla międzynarodowych zespołów',
          desc: 'Spotkanie w języku angielskim, ale podsumowanie musi trafić do niemieckiej filii? Jedno kliknięcie.',
        },
      ]}

      scenariosTitle="Typowe scenariusze biznesowe"
      scenarios={[
        { icon: 'briefcase', title: 'Briefing wykonawczy' },
        { icon: 'users',     title: 'Spotkania ogólne' },
        { icon: 'chat',      title: 'Spotkanie 1:1 dla założycieli' },
        { icon: 'target',    title: 'Strategiczne spotkanie offsite' },
        { icon: 'search',    title: 'Aktualizacja zarządu' },
        { icon: 'headset',   title: 'Eskalacja klienta' },
      ]}

      tipsTitle="Wskazówki dotyczące nagrań wewnętrznych"
      tips={[
        'Preferuj eksporty audio tylko, gdy twoja platforma je oferuje.',
        'Dla nagrań wideo MP4 powyżej 60 MB, najpierw wyodrębnij audio za pomocą ffmpeg.',
        'Użyj automatycznego wykrywania dla wielojęzycznych rozmów kierowniczych.',
        'Zapisz transkrypcję w historii, aby zbudować wyszukiwalny archiwum.',
      ]}

      guidesTitle="Wybierz odpowiednią platformę"
      guides={[
        { href: '/pl/zoom-transcription',          icon: 'video', title: 'Zoom',        desc: 'Nagranie w chmurze, audio M4A' },
        { href: '/pl/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'Ścieżka OneDrive lub SharePoint' },
        { href: '/pl/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: 'Nagranie z Dysku, darmowe obejście' },
        { href: '/pl/meeting-transcription#tool',  icon: 'file',  title: 'Inne',       desc: 'Webex, BlueJeans, GoToMeeting' },
      ]}

      faq={[
        {
          q: 'Czy moje nagranie jest wysyłane na wasze serwery?',
          a: 'Strumień audio trafia do dostawcy transkrypcji (Groq/Replicate/Deepgram/OpenAI w zależności od routingu), jest przetwarzany raz i usuwany z pamięci. Nigdy nie zapisujemy audio na dysku. Tylko tekstowa transkrypcja pozostaje, i to tylko jeśli się zalogujesz i ją zapiszesz.',
        },
        {
          q: 'Czy potrzebuję zgody na przesłanie nagrania firmowego?',
          a: 'To zależy od polityki twojej organizacji i informacji zawartych w nagraniu. Mictoo nie wymaga instalacji oprogramowania, ale powinieneś uzyskać wszelkie wymagane zezwolenia przed wysłaniem mediów firmowych do zewnętrznego dostawcy transkrypcji.',
        },
        {
          q: 'Czy mogę używać Mictoo w regulowanych branżach?',
          a: 'Sprawdź swoje specyficzne wymagania dotyczące zgodności. Nie oferujemy podpisanej umowy BAA ani raportu SOC 2. W przypadku ściśle regulowanych środowisk, użyj w pełni samodzielnie hostowanego narzędzia do transkrypcji.',
        },
        {
          q: 'Czy mogę uzyskać podsumowanie AI do e-maila z podsumowaniem?',
          a: 'Tak. Podsumowanie AI pojawia się obok transkrypcji automatycznie. Solidny pierwszy szkic do e-maila follow-up lub dokumentu w Notion.',
        },
        {
          q: 'Co jeśli spotkanie ma ponad 60 MB?',
          a: 'Zaloguj się, aby włączyć automatyczne dzielenie (do około 3 godzin). Lub wyodrębnij audio z wideo za pomocą ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 audio.m4a, zmniejsza rozmiar pliku 5-15x.',
        },
        {
          q: 'Czy mogę przetłumaczyć transkrypcję dla międzynarodowego zespołu?',
          a: 'Tak. Po transkrypcji wybierz docelowy język i kliknij Tłumacz. Przydatne dla filii w różnych językach.',
        },
        {
          q: 'Jakie formaty eksportu działają dla e-maila z podsumowaniem?',
          a: 'TXT do wklejenia w treści e-maila, DOCX jako odpowiedni załącznik, PDF (zalogowany) do archiwum. Podsumowanie jest dostępne osobno.',
        },
      ]}

      ctaHeadline="Przekształć wewnętrzne spotkania w dokumenty podsumowujące"
      ctaSubtitle="Spotkania 1:1 dla założycieli, spotkania ogólne i briefingi wykonawcze. Prześlij autoryzowane media do transkrypcji i podsumowania."
      ctaButton="Prześlij spotkanie biznesowe"

      relatedLinks={[
        { href: '/pl/meeting-transcription',       label: 'Transkrypcja Spotkań' },
        { href: '/pl/zoom-transcription',          label: 'Transkrypcja Zoom' },
        { href: '/pl/teams-meeting-transcription', label: 'Transkrypcja Teams' },
        { href: '/pl/google-meet-transcription',   label: 'Transkrypcja Google Meet' },
        { href: '/pl/interview-transcription',     label: 'Transkrypcja Wywiadów' },
      ]}
    />
  )
}