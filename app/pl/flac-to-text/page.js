import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-text',
  'fr': 'https://mictoo.com/fr/flac-to-text',
  'de': 'https://mictoo.com/de/flac-to-text',
  'es': 'https://mictoo.com/es/flac-to-text',
  'ru': 'https://mictoo.com/ru/flac-to-text',
  'it': 'https://mictoo.com/it/flac-to-text',
  'pt': 'https://mictoo.com/pt/flac-to-text',
  'pl': 'https://mictoo.com/pl/flac-to-text',
  'ja': 'https://mictoo.com/ja/flac-to-text',
  'ko': 'https://mictoo.com/ko/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC na tekst: bezstratna transkrypcja dla archiwów mowy | Mictoo',
  description:
    'Prześlij wywiad oralny w formacie FLAC, nagranie terenowe lub kopię archiwalną i uzyskaj edytowalny transkrypt z znacznikami czasowymi.',
  alternates: {
    canonical: 'https://mictoo.com/pl/flac-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'FLAC na tekst: bezstratna transkrypcja audio | Mictoo',
    description: 'Prześlij wywiad oralny w formacie FLAC, nagranie terenowe lub kopię archiwalną. Uzyskaj edytowalny transkrypt z znacznikami czasowymi.',
    url: 'https://mictoo.com/pl/flac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLAC na tekst: bezstratna transkrypcja audio',
    description: 'Prześlij archiwum mowy w formacie FLAC lub nagranie terenowe i uzyskaj edytowalny transkrypt z znacznikami czasowymi.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlFlacToTextPage() {
  return (
    <FormatPageLayout
      locale="pl"
      badge="FLAC · Bezstratny · Darmowy"
      h1First="FLAC na tekst"
      h1Second="Bezstratne audio dla archiwów mowy"
      subtitle="FLAC jest używany przez archiwa historii oralnej, rejestratory terenowe i procesy archiwizacji do przechowywania audio bez kompresji stratnej. Prześlij plik .flac, zachowaj bezstratny master i uzyskaj transkrypt z znacznikami czasowymi."
      highlightFormat="flac"
      previewFileName="nagranie-archiwalne.flac"
      previewWordCount={155}
      previewDurationLabel="18:04"
      previewLines={[
        { t: '0:00',  line: 'To nagranie zostało zrobione w rodzinnym domu w październiku tysiąc dziewięćset siedemdziesiątego ósmego roku.' },
        { t: '0:07',  line: 'Tematem jest moja babcia, urodzona w Krakowie w tysiąc dziewięćset czternastym roku, która imigrowała do Nowego Jorku w tysiąc dziewięćset trzydziestym dziewiątym.' },
        { t: '0:18',  line: 'Jakość nagrania jest ograniczona przez oryginalne źródło kasetowe. Proszę pamiętać o głośności rozmówcy.' },
        { t: '0:27',  line: 'Babciu, czy możesz opowiedzieć mi o dniu, w którym opuściłaś Kraków po raz ostatni?' },
        { t: '0:34',  line: 'Padał deszcz. To jest to, co pamiętam na początku. Wszyscy stali na peronie w deszczu.' },
        { t: '0:44',  line: 'Mój ojciec miał dwie walizki, a moja matka jedną. Ja miałem tylko małą torbę, którą dała mi ciocia.' },
        { t: '0:54',  line: 'Pociąg miał odjechać o szóstej rano, ale nie odjechał aż do prawie dziesiątej.' },
        { t: '1:04',  line: 'A kiedy w końcu odjechał, nikt na tym peronie nigdy już nie widział miasta w ten sam sposób.' },
      ]}
      whyTitle="Dlaczego Mictoo do transkrypcji FLAC"
      whyCards={[
        {
          icon: 'target',
          title: 'Brak dodatkowej kompresji stratnej',
          desc: 'FLAC zachowuje sygnał nagrany bez utraty jakości w stylu MP3. Dokładność transkryptu nadal zależy od klarowności mowy i oryginalnego nagrania.',
        },
        {
          icon: 'gear',
          title: 'Dowolna częstotliwość próbkowania, dowolna głębokość bitowa',
          desc: '44,1 kHz do 192 kHz, 16-bit do 24-bit. Whisper przetwarza wewnętrznie do 16 kHz mono, więc twoja źródłowa częstotliwość nie wpływa na jakość.',
        },
        {
          icon: 'book',
          title: 'Przyjazny dla archiwizacji proces',
          desc: 'Twój oryginalny plik FLAC nigdy nie jest modyfikowany. Przesyłamy go do dostawcy transkrypcji, ekstraktujemy audio w pamięci i usuwamy po.',
        },
        {
          icon: 'clip',
          title: 'FLAC w OGG również obsługiwany',
          desc: 'Natychmiastowy FLAC (magic bytes fLaC) i FLAC w OGG (OggS z strumieniem FLAC) działają. Brak ręcznego pakowania.',
        },
      ]}
      scenariosTitle="Kiedy FLAC na tekst jest odpowiednim rozwiązaniem"
      scenarios={[
        {
          icon: 'book',
          title: 'Archiwum historii oralnej',
          desc: 'Długie wywiady zachowane jako bezstratny FLAC dla archiwum. Transkrypt czyni go przeszukiwalnym, cytowalnym i gotowym do cytowania.',
        },
        {
          icon: 'briefcase',
          title: 'Nagranie instytucjonalne',
          desc: 'Wykład lub sympozjum nagrane przez muzeum, bibliotekę lub uniwersytet w formacie FLAC dla archiwizacji. Transkrypt jest warstwą dostępu.',
        },
        {
          icon: 'mic',
          title: 'Wywiad lub podcast z CD',
          desc: 'Starszy wywiad lub odcinek podcastu, który zgrano z CD w formacie FLAC. Prześlij plik, aby uzyskać nowoczesny transkrypt.',
        },
        {
          icon: 'waveform',
          title: 'Nagranie terenowe, bezstratne uchwycenie',
          desc: 'Nagrywacz terenowy lub ręczne nagranie zapisane jako FLAC, aby zaoszczędzić miejsce na karcie bez utraty jakości. Pełna transkrypcja z znacznikami czasowymi.',
        },
        {
          icon: 'sparkles',
          title: 'Odzyskane zbiory wywiadów',
          desc: 'Zdigitalizowane wywiady na taśmach lub dyskach przechowywane jako FLAC po restauracji. Dodaj tekst przeszukiwalny, zachowując kopię archiwalną.',
        },
        {
          icon: 'users',
          title: 'Kopia archiwalna depozycji',
          desc: 'Nagranie prawne zachowane jako FLAC dla integralności archiwum. Transkrypt do przeglądu, cytowania i odkrywania.',
        },
      ]}
      technicalTitle="Co zachowuje bezstratny FLAC ,  a czego nie"
      technicalIntro="FLAC zachowuje sygnał źródłowy bez kompresji stratnej. Chroni kopię archiwalną, ale nie może przywrócić słów, które zostały już zasłonięte przez hałas, przycinanie, nakładanie się lub odległość mikrofonu."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'Bezstratne źródło',
          desc: 'Dekodowanie zwraca nagrany sygnał bez utraty jakości w stylu MP3, co jest przydatne w procesach archiwizacji.',
        },
        {
          icon: 'ear',
          title: 'Brak automatycznego oczyszczania',
          desc: 'Bezstratna kopia hałaśliwego nagrania nadal jest hałaśliwa. Klarowność mowy podczas nagrania pozostaje głównym czynnikiem dokładności.',
        },
        {
          icon: 'clip',
          title: 'Komentarze Vorbis oddzielone',
          desc: 'Artysta, identyfikator archiwum i inne tagi nie są wstawiane do transkryptu. Zachowaj to mapowanie w swoim katalogu archiwum.',
        },
        {
          icon: 'cloud',
          title: 'Efektywna kopia archiwalna',
          desc: 'FLAC jest mniejszy niż nieskompresowany WAV, ale może być nadal duży dla długich sesji. Podziel długie nagrania, jeśli to konieczne.',
        },
      ]}
      faq={[
        {
          q: 'Jakie pliki FLAC akceptuje Mictoo?',
          a: 'Natychmiastowy FLAC (magic bytes fLaC) oraz kontenery FLAC w OGG, mono lub stereo, dowolna częstotliwość próbkowania do 192 kHz oraz głębokość 16 lub 24-bit. Akceptujemy plik bezpośrednio bez konwersji.',
        },
        {
          q: 'Czy bezstratny input daje lepszy transkrypt?',
          a: 'Dla czystych nagrań źródłowych, bezstratny input odpowiada górnej granicy tego, co Whisper może wydobyć. Dla hałaśliwego lub uszkodzonego źródła (na przykład zgranie z kasety), bezstratny zachowuje degradację wiernie, ale jej nie naprawia. Jakość nagrania ma większe znaczenie niż kontener.',
        },
        {
          q: 'Mój plik FLAC ma ponad 60 MB. Co teraz?',
          a: 'Stereo 44,1 kHz 16-bit FLAC ma około 5 MB na minutę, więc każde nagranie trwające ponad 12 minut osiąga limit. Jeśli jesteś zalogowany, automatycznie dzielimy do około 3 godzin. W przeciwnym razie, przekonwertuj na 16 kHz mono FLAC lub MP3 najpierw: ffmpeg -i in.flac -ar 16000 -ac 1 out.flac.',
        },
        {
          q: 'Czy mogę zachować metadane FLAC (album, artysta, rok)?',
          a: 'Transkrypt jest zwykłym tekstem bez metadanych FLAC. Tagi komentarzy Vorbis są ignorowane podczas transkrypcji. Zachowaj mapowanie metadanych w swoim systemie archiwum, jeśli potrzebujesz go później.',
        },
        {
          q: 'Czy Mictoo transkrybuje FLAC w innych językach?',
          a: 'Tak. Whisper large-v3 obsługuje ponad 50 języków z automatycznym wykrywaniem. Dla nietypowych akcentów lub starszych nagrań, ustaw język wyraźnie dla czystszej detekcji na pierwszym etapie.',
        },
        {
          q: 'Czy mogę uzyskać napisy SRT dla wideo, które używa tego audio?',
          a: 'Tak. Pobierz SRT lub VTT po transkrypcji. Znaczniki czasowe są zgodne z oryginalną linią czasu FLAC do użycia w edytorach wideo lub narzędziach dostępności.',
        },
        {
          q: 'Czy mój plik FLAC jest przechowywany na waszych serwerach?',
          a: 'Nie. Audio przesyła się do dostawcy transkrypcji, przetwarzane jest raz i usuwane z pamięci. Nigdy nie zapisujemy audio na dysku. Transkrypty są przechowywane tylko wtedy, gdy się zalogujesz.',
        },
        {
          q: 'Czy mogę przetłumaczyć transkrypt na inny język?',
          a: 'Tak. Po transkrypcji wybierz docelowy język i kliknij Tłumacz. Tłumaczenie działa na GPT-4o-mini i pojawia się obok oryginału.',
        },
        {
          q: 'Jak długo trwa transkrypcja FLAC?',
          a: '15-minutowy FLAC zazwyczaj kończy się w 25-45 sekund. Większe pliki bliskie limitu przesyłania zajmują 45-90 sekund. Prędkość przesyłania często jest dłuższym krokiem, ponieważ pliki FLAC są duże.',
        },
        {
          q: 'Czy akceptujecie 24-bitowy FLAC hi-res?',
          a: 'Tak. 24-bitowy FLAC przy 96 kHz lub 192 kHz jest w pełni obsługiwany. Whisper przetwarza wewnętrznie, więc hi-res nie poprawia dokładności w porównaniu do 16-bitowego 44,1 kHz dla czystego audio, ale też nie szkodzi.',
        },
      ]}
      ctaHeadline="Prześlij swój FLAC, uzyskaj transkrypt gotowy do archiwizacji"
      ctaSubtitle="Bezstratne źródło w, przeszukiwalny tekst na wyjściu. Historia oralna, nagrania terenowe i kopie archiwalne."
      ctaButton="Prześlij FLAC do transkrypcji"
    />
  )
}