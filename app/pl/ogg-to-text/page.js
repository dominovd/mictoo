import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/ogg-to-text',
  'fr': 'https://mictoo.com/fr/ogg-to-text',
  'de': 'https://mictoo.com/de/ogg-to-text',
  'es': 'https://mictoo.com/es/ogg-to-text',
  'ru': 'https://mictoo.com/ru/ogg-to-text',
  'it': 'https://mictoo.com/it/ogg-to-text',
  'pt': 'https://mictoo.com/pt/ogg-to-text',
  'pl': 'https://mictoo.com/pl/ogg-to-text',
  'ja': 'https://mictoo.com/ja/ogg-to-text',
  'ko': 'https://mictoo.com/ko/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGG na tekst: Transkrypcja głosu Telegramu, audio Linux i Opus/Vorbis | Mictoo',
  description:
    'Prześlij audio OGG (Vorbis, Opus, FLAC w OGG) lub wiadomości głosowe Telegramu .oga. Edytowalny transkrypt z znacznikami czasowymi w sekundach, bez rejestracji.',
  alternates: {
    canonical: 'https://mictoo.com/pl/ogg-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'OGG na tekst: Transkrypcja głosu Telegramu, audio Linux, Opus/Vorbis | Mictoo',
    description: 'Prześlij audio OGG lub wiadomości głosowe Telegramu .oga. Edytowalny transkrypt w sekundach.',
    url: 'https://mictoo.com/pl/ogg-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OGG na tekst: Transkrypcja głosu Telegramu i audio Linux',
    description: 'Prześlij audio OGG lub wiadomości głosowe Telegramu .oga. Edytowalny transkrypt w sekundach.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlOggToTextPage() {
  return (
    <FormatPageLayout
      locale="pl"
      badge="OGG · Vorbis · Opus · .oga"
      h1First="OGG na tekst"
      h1Second="Głos Telegramu, audio Linux, Opus i Vorbis"
      subtitle="OGG to format używany przez Telegram Voice (.oga), domyślny w aplikacjach audio Linux oraz w otwartym kodeku Opus. Przeciągnij plik, automatycznie wykrywamy strumień audio i transkrybujemy za pomocą Whisper large-v3."
      highlightFormat="ogg"
      previewFileName="telegram-voice.oga"
      previewWordCount={128}
      previewDurationLabel="1:52"
      previewLines={[
        { t: '0:00',  line: 'Hej, szybka wiadomość głosowa o jutrzejszym połączeniu.' },
        { t: '0:03',  line: 'Zobaczyłem prezentację i myślę, że slajdy od czwartego do szóstego wymagają przemyślenia przed prezentacją.' },
        { t: '0:10',  line: 'Głównym problemem jest to, że historia przeskakuje od problemu bezpośrednio do ceny, nie pokazując zrzutów ekranu z demonstracji.' },
        { t: '0:20',  line: 'Co bym zrobił, to zamieniłbym piąty slajd na przebieg demonstracji i przesunąłbym ceny na koniec prezentacji.' },
        { t: '0:30',  line: 'W ten sposób budujemy napięcie wokół tego, co produkt właściwie robi, zanim porozmawiamy o kosztach.' },
        { t: '0:39',  line: 'Klient wspomniał wczoraj, że chce zobaczyć slajd z integracją, który obecnie znajduje się w aneksie.' },
        { t: '0:49',  line: 'Przenieś go do głównego przebiegu, może między demonstracją a cenami.' },
        { t: '0:56',  line: 'Porozmawiamy wkrótce, daj mi znać, co myślisz, gdy będziesz miał chwilę.' },
      ]}
      whyTitle="Dlaczego Mictoo do transkrypcji OGG"
      whyCards={[
        {
          icon: 'mic',
          title: 'Wiadomości głosowe Telegramu, natywnie',
          desc: 'Wiadomości głosowe .oga z Telegramu są bezpośrednio obsługiwane. Bez zmiany nazwy, bez pakowania. Obsługujemy strumień Opus w kontenerze OGG.',
        },
        {
          icon: 'gear',
          title: 'Vorbis, Opus i FLAC w OGG',
          desc: 'Każdy kodek w kontenerze OGG działa: Vorbis (starszy), Opus (nowoczesny), FLAC w OGG (dla audiofilów). Automatycznie wykrywane po stronie serwera.',
        },
        {
          icon: 'sparkles',
          title: 'Podsumowanie AI dla łańcuchów wiadomości głosowych',
          desc: 'Wiadomości głosowe mają tendencję do długich wypowiedzi. Podsumowanie AI zamienia pięciominutowe .oga na dwulinijkowe podsumowanie, które możesz wykorzystać.',
        },
        {
          icon: 'globe',
          title: 'Tłumaczenie na 50+ języków',
          desc: 'Wiadomość głosowa w języku rosyjskim, hiszpańskim lub portugalskim z czatu grupowego. Przetłumacz na angielski (lub inny cel) po transkrypcji.',
        },
      ]}
      scenariosTitle="Kiedy OGG na tekst jest odpowiednie"
      scenarios={[
        {
          icon: 'mic',
          title: 'Wiadomość głosowa Telegramu',
          desc: 'Wiadomość głosowa wysłana przez kolegę lub klienta za pośrednictwem Telegramu. Zapisz .oga z czatu, przeciągnij tutaj, uzyskaj wersję tekstową do przeglądania.',
        },
        {
          icon: 'gear',
          title: 'Nagranie audio Linux',
          desc: 'Nagranie z Audacity, GNOME Sound Recorder lub narzędzia audio KDE, które domyślnie używa OGG. W pełni obsługiwane, bez konwersji.',
        },
        {
          icon: 'briefcase',
          title: 'Eksport aplikacji open-source',
          desc: 'Podcast lub rejestrator wywiadów, który eksportuje OGG (wiele aplikacji FOSS domyślnie używa Vorbis lub Opus z powodów licencyjnych).',
        },
        {
          icon: 'video',
          title: 'Nagrywanie Firefox MediaRecorder',
          desc: 'Firefox często produkuje OGG/Opus z aplikacji do nagrywania w przeglądarce. Przeciągnij plik, aby uzyskać czysty transkrypt z znacznikami czasowymi.',
        },
        {
          icon: 'editPen',
          title: 'Dyktowana notatka lub memo',
          desc: 'Notatka z pierwszeństwem głosowym zarejestrowana w aplikacji, która zapisuje jako OGG. Przekształć ją w edytowalny tekst gotowy do twojego procesu pisania.',
        },
        {
          icon: 'users',
          title: 'Log czatu OGG z wieloma mówcami',
          desc: 'Nagranie VOIP z Discorda, Mumble lub podobnego, wyeksportowane do OGG. Transkrypt do odniesienia, protokoły spotkań lub archiwum.',
        },
      ]}
      technicalTitle="Co może być w pliku OGG"
      technicalIntro="OGG to rodzina kontenerów, a nie pojedynczy kodek audio. Znajomość typu strumienia i rozszerzenia pomaga wyjaśnić, skąd pochodzi nagranie, ale nie musisz go pakować przed przesłaniem."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Vorbis, Opus lub FLAC',
          desc: 'Kontener OGG może przenosić kilka kodeków. Wiadomości głosowe zazwyczaj używają Opus; starsze audio desktopowe często korzysta z Vorbis.',
        },
        {
          icon: 'file',
          title: '.oga i .ogg',
          desc: '.oga to rozszerzenie audio-only w tej samej rodzinie kontenerów. Eksporty głosowe Telegramu często przychodzą z tym rozszerzeniem.',
        },
        {
          icon: 'mic',
          title: 'Źródło wiadomości głosowej',
          desc: 'Krótkie wiadomości mobilne mogą zawierać hałas otoczenia i przetwarzanie telefonu; czyste nagranie ma większe znaczenie niż nazwa kontenera.',
        },
        {
          icon: 'gear',
          title: 'Inspekcja oparta na nagłówku',
          desc: 'Struktura strumienia jest sprawdzana podczas przetwarzania, więc nietypowe rozszerzenie nie musi być najpierw zmieniane.',
        },
      ]}
      faq={[
        {
          q: 'Jakie rodzaje plików OGG akceptuje Mictoo?',
          a: 'Każdy standardowy kontener OGG: audio Vorbis (starsze, powszechne w Linuxie), audio Opus (nowsze, używane przez głos Telegramu i nowoczesne aplikacje) oraz FLAC w OGG. Również pliki Telegram .oga, które są OGG z innym rozszerzeniem.',
        },
        {
          q: 'Czy plik .oga jest tym samym co .ogg?',
          a: 'Efektywnie tak. .oga to ustandaryzowane rozszerzenie dla audio-only OGG, najczęściej używane przez wiadomości głosowe Telegramu z strumieniem Opus. Mictoo traktuje .oga i .ogg w ten sam sposób.',
        },
        {
          q: 'Mój plik OGG ma ponad 60 MB. Co teraz?',
          a: 'Opus i Vorbis są wydajne, więc osiągnięcie 60 MB zazwyczaj oznacza bardzo długie nagranie. Jeśli jesteś zalogowany, automatycznie dzielimy do około 3 godzin. W przeciwnym razie, najpierw zredukuj: ffmpeg -i in.ogg -b:a 32k -ac 1 out.ogg. Mowa pozostaje wyraźna.',
        },
        {
          q: 'Czy akceptujecie wideo OGG (Theora)?',
          a: 'Ścieżka audio w kontenerze OGG/Theora jest transkrybowana. Prześlij plik .ogv, a my demuxujemy audio tak samo jak z każdym formatem wideo. Ciche klipy Theora będą produkować puste transkrypty.',
        },
        {
          q: 'Czy Mictoo transkrybuje OGG w językach innych niż angielski?',
          a: 'Tak. Whisper large-v3 obsługuje 50+ języków z automatycznym wykrywaniem. Dla krótkich wiadomości głosowych lub treści w innych językach, ustaw język wyraźnie dla lepszych wyników w pierwszym przejściu.',
        },
        {
          q: 'Czy mogę uzyskać napisy SRT dla nagrania OGG?',
          a: 'Tak. Pobierz SRT lub VTT po transkrypcji. Znaczniki czasowe są zgodne z oryginalnym harmonogramem OGG do użycia w edytorach wideo lub narzędziach dostępności.',
        },
        {
          q: 'Czy mój plik OGG jest przechowywany na waszych serwerach?',
          a: 'Nie. Strumienie audio są przesyłane do dostawcy transkrypcji, przetwarzane raz i usuwane z pamięci. Nigdy nie zapisujemy ich na dysku. Transkrypty są przechowywane tylko wtedy, gdy jesteś zalogowany i zapisujesz w historii.',
        },
        {
          q: 'Czy mogę przetłumaczyć transkrypt na inny język?',
          a: 'Tak. Po transkrypcji wybierz docelowy język i kliknij Tłumacz. Tłumaczenie działa na GPT-4o-mini i pojawia się obok oryginału.',
        },
        {
          q: 'Czy jakość OGG wpływa na transkrypt?',
          a: 'Niewiele. Opus przy 24-32 kbps brzmi wyraźnie dla głosu i transkrybuje praktycznie tak samo dobrze jak wyższe bitrate’y. Whisper wewnętrznie przetwarza do mono 16 kHz, więc bitrate ma minimalny wpływ na czystą mowę.',
        },
        {
          q: 'Ile czasu zajmuje transkrypcja OGG?',
          a: 'Dwuminutowa wiadomość głosowa z Telegramu zazwyczaj kończy się w 5-15 sekund. Dłuższe pliki OGG (30-45 minut) zajmują 45-90 sekund. Prędkość przesyłania często jest dłuższym krokiem.',
        },
      ]}
      ctaHeadline="Przeciągnij swoją wiadomość głosową Telegramu lub plik OGG"
      ctaSubtitle="Opus, Vorbis, FLAC w OGG, wiadomości głosowe .oga. Każdy strumień OGG, obsługiwany natywnie."
      ctaButton="Prześlij OGG do transkrypcji"
    />
  )
}