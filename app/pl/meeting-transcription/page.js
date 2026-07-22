import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'pt': 'https://mictoo.com/pt/meeting-transcription',
  'pl': 'https://mictoo.com/pl/meeting-transcription',
  'ja': 'https://mictoo.com/ja/meeting-transcription',
  'ko': 'https://mictoo.com/ko/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: 'Transkrypcja spotkań dla każdej nagranej platformy | Mictoo',
  description:
    'Prześlij autoryzowane nagranie spotkania z Zoom, Teams, Meet, Webex, Loom lub Riverside, aby uzyskać tekst, podsumowanie i eksporty.',
  alternates: {
    canonical: 'https://mictoo.com/pl/meeting-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transkrypcja spotkań: każda platforma, każde nagranie | Mictoo',
    description: 'Wrzuć dowolne nagranie spotkania, uzyskaj transkrypt. Darmowe.',
    url: 'https://mictoo.com/pl/meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transkrypcja spotkań: każda platforma',
    description: 'Wrzuć dowolne nagranie spotkania, uzyskaj transkrypt.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlMeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pl"
      badge="Każda platforma · Darmowe · Bez rejestracji"
      h1First="Transkrypcja spotkań"
      h1Second="Jedna strona do przesyłania dla każdej platformy"
      subtitle="Prześlij nagranie z Zoom, Teams, Google Meet, Webex, Loom lub dowolnego nagrania ekranu. Uzyskaj czysty transkrypt z znacznikami czasowymi, podsumowaniem AI i eksportami."
      currentHref="/pl/meeting-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/pl/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/pl/google-meet-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/pl/teams-meeting-transcription' },
        { name: 'Webex',       iconKey: 'videoCameraFill', brandBg: '#0F1F35' },
        { name: 'Loom',        iconKey: 'loomPlay',        brandBg: '#625DF5' },
        { name: 'Riverside',   iconKey: 'waveMic',         brandBg: '#4B2AF7' },
      ]}

      howItWorksTitle="Jak działa transkrypcja spotkań"
      steps={[
        {
          icon: 'folder',
          title: 'Znajdź swoje nagranie spotkania',
          desc: 'Eksportuj lub pobierz nagranie z dowolnej platformy.',
        },
        {
          icon: 'upload',
          title: 'Wrzuć plik tutaj',
          desc: 'Prześlij swój plik w formatach MP3, MP4, WAV lub innych obsługiwanych formatach.',
        },
        {
          icon: 'editPen',
          title: 'Transkrypt, podsumowanie, eksporty',
          desc: 'Uzyskaj transkrypt ze znacznikami czasowymi, podsumowanie AI i pliki eksportowe.',
        },
      ]}

      exampleTitle="Przykładowy transkrypt i podsumowanie"
      exampleFileName="meeting-recording.mp4"
      exampleDurationLabel="30:15"
      exampleLines={[
        { t: '0:00',  line: 'Dziękuję wszystkim za dołączenie. Szybko podsumujmy postępy z zeszłego tygodnia, zanim przejdziemy do dzisiejszego porządku obrad.' },
        { t: '0:12',  line: 'Wdrożyliśmy proces onboardingu i zauważyliśmy dwunastoprocentowy wzrost aktywacji w porównaniu do poprzedniego poziomu.' },
        { t: '0:28',  line: 'Świetnie. Następnie musimy naprawić błąd przy kasie na urządzeniach mobilnych, zanim dotknie to kolejnych płacących klientów.' },
        { t: '0:36',  line: 'Stworzę zgłoszenie i przypiszę je do zespołu do końca dnia. Powinno być rozwiązane w trakcie sprintu.' },
        { t: '0:44',  line: 'Powinniśmy również omówić aktualizacje strony z cenami. Obecna wersja nie konwertuje tak, jak się spodziewaliśmy.' },
        { t: '0:55',  line: 'Podzielę się szkicem do końca dnia i możemy go wspólnie przejrzeć jutro przed standupem.' },
      ]}
      summaryPoints={[
        'Proces onboardingu wdrożony z 12% wzrostem aktywacji.',
        'Błąd przy kasie na urządzeniach mobilnych wymaga naprawy.',
        'Aktualizacje strony z cenami do omówienia.',
        'Szkic do podzielenia się do końca dnia i przeglądu jutro.',
      ]}
      actionItems={[
        'Stwórz zgłoszenie dotyczące błędu przy kasie na urządzeniach mobilnych',
        'Podziel się szkicem strony z cenami',
        'Przejrzyj szkic jutro',
      ]}

      whyTitle="Dlaczego przesyłanie niezależne od platformy jest pomocne"
      whyCards={[
        {
          icon: 'globe',
          title: 'Działa na każdej platformie spotkań',
          desc: 'Prześlij z Zoom, Teams, Google Meet, Webex, Loom i innych.',
        },
        {
          icon: 'target',
          title: 'Jedna procedura przeglądu',
          desc: 'Użyj tego samego układu ze znacznikami czasowymi i opcji eksportu, niezależnie od tego, która platforma stworzyła nagranie.',
        },
        {
          icon: 'lock',
          title: 'Działa z autoryzowanym plikiem',
          desc: 'Mictoo przetwarza nagranie, do którego już masz pozwolenie na użycie; polityki dostępu i pobierania wciąż należą do platformy źródłowej.',
        },
        {
          icon: 'sparkles',
          title: 'Podsumowanie i tłumaczenie w zestawie',
          desc: 'Uzyskaj podsumowania AI i przetłumacz transkrypty na 50+ języków.',
        },
      ]}

      scenariosTitle="Typowe scenariusze transkrypcji spotkań"
      scenarios={[
        { icon: 'chat',      title: 'E-maile z podsumowaniem dla klientów' },
        { icon: 'search',    title: 'Notatki z badań użytkowników' },
        { icon: 'users',     title: 'Selekcje rekruterów' },
        { icon: 'briefcase', title: 'Archiwa spotkań zespołu' },
        { icon: 'headset',   title: 'Eskalacje wsparcia' },
        { icon: 'globe',     title: 'Wielojęzyczne spotkania' },
      ]}

      practicalTitle="Gdzie znaleźć nagranie spotkania"
      practicalIntro="Dokładna lokalizacja zależy od platformy i twojej roli w spotkaniu. Pobieraj tylko nagrania, do których masz autoryzację, i przestrzegaj polityki dotyczącej zgody uczestników oraz organizacji przed przesłaniem."
      practicalItems={[
        {
          title: 'Nagranie w chmurze lub lokalne Zoom',
          desc: 'Nagrania w chmurze są dostępne z portalu internetowego Zoom na kwalifikowanych płatnych kontach. Nagrania komputerowe są zazwyczaj zapisywane w lokalnym folderze Zoom.',
        },
        {
          title: 'Nagranie Google Meet',
          desc: 'Kwalifikowane nagrania Meet są zapisywane w folderze Moje Dyski › Nagrania Meet organizatora. Dostępność zależy od edycji i ustawień administratora.',
        },
        {
          title: 'Nagranie Microsoft Teams',
          desc: 'Znajdź nagranie w czacie spotkania, OneDrive lub witrynie SharePoint kanału. Uprawnienia do pobierania mogą być ograniczone przez politykę.',
        },
        {
          title: 'Webex, Loom i Riverside',
          desc: 'Użyj opcji eksportu lub kontroli pobierania platformy, aby uzyskać plik audio lub wideo, a następnie upewnij się, że plik odtwarza się poprawnie przed przesłaniem.',
        },
      ]}

      tipsTitle="Wskazówki dotyczące lepszych transkryptów spotkań"
      tips={[
        'Preferuj eksporty tylko audio, gdy chcesz mniejszego przesyłania.',
        'Nagrywaj w cichym miejscu i redukuj hałas w tle.',
        'Użyj Auto-detekcji dla wielojęzycznych lub mieszanych połączeń.',
        'Przejrzyj imiona i terminologię po transkrypcji.',
      ]}

      guidesTitle="Wybierz odpowiedni przewodnik po platformie"
      guides={[
        { href: '/pl/zoom-transcription',          icon: 'video', title: 'Spotkania Zoom',    desc: 'Przewodnik krok po kroku dotyczący pobierania' },
        { href: '/pl/google-meet-transcription',   icon: 'video', title: 'Google Meet',      desc: 'Przewodnik krok po kroku dotyczący pobierania' },
        { href: '/pl/teams-meeting-transcription', icon: 'video', title: 'Microsoft Teams',  desc: 'Przewodnik krok po kroku dotyczący pobierania' },
        { href: '/pl/meeting-transcription#tool',  icon: 'file',  title: 'Inne platformy',  desc: 'Zobacz wszystkie przewodniki i wskazówki' },
      ]}

      faq={[
        {
          q: 'Czy mogę transkrybować nagranie Zoom, Meet lub Teams?',
          a: 'Tak. Każdy plik audio lub wideo z dowolnej platformy spotkań działa. Po prostu pobierz nagranie i wrzuć je tutaj. Akceptujemy MP3, MP4, WAV, M4A, WEBM, FLAC i inne.',
        },
        {
          q: 'Czy transkrypcja spotkań jest darmowa?',
          a: 'Tak. Pliki do 25 MB anonimowo, 60 MB po zalogowaniu. Dłuższe spotkania mogą być automatycznie dzielone dla zalogowanych użytkowników. Nie jest wymagana karta kredytowa.',
        },
        {
          q: 'Czy Mictoo identyfikuje różnych mówców?',
          a: 'Nie. Obecny transkrypt to ciągły tekst z znacznikami czasowymi w każdej linii i bez automatycznych etykiet "Mówca 1 / Mówca 2".',
        },
        {
          q: 'Czy nagrania spotkań są przechowywane?',
          a: 'Nie. Plik jest przesyłany do dostawcy transkrypcji, przetwarzany raz i usuwany z pamięci. Transkrypt jest zapisywany tylko wtedy, gdy zalogujesz się i dodasz go do swojej historii.',
        },
        {
          q: 'Jakie formaty eksportu są dostępne?',
          a: 'TXT (czysty tekst), SRT i VTT (napisy z znacznikami czasowymi dopasowanymi do nagrania) oraz DOCX (dokument Word). Zalogowani użytkownicy otrzymują również PDF i JSON.',
        },
        {
          q: 'Czy mogę przetłumaczyć transkrypt?',
          a: 'Tak. Po transkrypcji wybierz docelowy język i kliknij Tłumacz. Przydatne do wysyłania e-maili z podsumowaniem do uczestników w ich preferowanym języku lub do archiwizacji spotkań międzyjęzykowych w jednym języku roboczym.',
        },
      ]}

      ctaHeadline="Przekształć swoje następne spotkanie w jasne notatki"
      ctaSubtitle="Wrzuć nagranie z dowolnej platformy i uzyskaj transkrypt, podsumowanie i eksporty w kilka sekund."
      ctaButton="Prześlij nagranie spotkania"

      relatedLinks={[
        { href: '/pl/interview-transcription',  label: 'Transkrypcja wywiadów' },
        { href: '/pl/podcast-transcription',    label: 'Transkrypcja podcastów' },
        { href: '/pl/lecture-transcription',    label: 'Transkrypcja wykładów' },
        { href: '/pl/business-transcription',   label: 'Transkrypcja biznesowa' },
        { href: '/pl/voice-memo-to-text',       label: 'Notatka głosowa na tekst' },
      ]}
    />
  )
}