import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-text',
  'fr': 'https://mictoo.com/fr/wav-to-text',
  'de': 'https://mictoo.com/de/wav-to-text',
  'es': 'https://mictoo.com/es/wav-to-text',
  'ru': 'https://mictoo.com/ru/wav-to-text',
  'it': 'https://mictoo.com/it/wav-to-text',
  'pt': 'https://mictoo.com/pt/wav-to-text',
  'pl': 'https://mictoo.com/pl/wav-to-text',
  'ja': 'https://mictoo.com/ja/wav-to-text',
  'ko': 'https://mictoo.com/ko/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export const metadata = {
  title: 'WAV na tekst: Darmowa transkrypcja online WAV | Mictoo',
  description:
    'Prześlij plik WAV, otrzymaj edytowalny transkrypt z znacznikami czasowymi w sekundach. Stworzony dla nagrań studyjnych, nagrań terenowych, eksportów DAW. Obsługuje PCM i Broadcast Wave (BWF). Darmowe, bez rejestracji.',
  alternates: {
    canonical: 'https://mictoo.com/pl/wav-to-text',
    languages: LANGS,
  },

  openGraph: {
    title: "WAV na tekst: Darmowa transkrypcja online WAV | Mictoo",
    description: "Prześlij plik WAV, otrzymaj edytowalny transkrypt z znacznikami czasowymi w sekundach. Nagrania studyjne, nagrania terenowe, eksporty DAW. Obsługiwane PCM i BWF.",
    url: "https://mictoo.com/pl/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV na tekst: Darmowa transkrypcja online WAV",
    description: "Prześlij WAV, otrzymaj edytowalny transkrypt z znacznikami czasowymi w sekundach. Nagrania studyjne, nagrania terenowe, eksporty DAW.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlWavToTextPage() {
  return (
    <FormatPageLayout
      locale="pl"
      badge="WAV · PCM · BWF · Darmowe"
      h1First="WAV na tekst"
      h1Second="Nagrania studyjne, nagrania terenowe, eksporty DAW"
      subtitle="WAV to format, w którym twoja DAW wykonuje eksporty, twój rejestrator terenowy zapisuje na karcie, a studia nadawców standardyzują. Prześlij PCM lub BWF WAV i otrzymaj transkrypt z znacznikami czasowymi w sekundach. Darmowe, bez rejestracji."
      highlightFormat="wav"
      previewFileName="field-recording.wav"
      previewWordCount={166}
      previewDurationLabel="14:22"
      previewLines={[
        { t: '0:00',  line: 'Scout lokalizacji, trzeci dzień. Jesteśmy ustawieni po wschodniej stronie grzbietu na wysokości około sześciu tysięcy stóp.' },
        { t: '0:09',  line: 'Wiatr wieje w podmuchach z zachodu, więc mam na sobie osłonę i wyłączyłem przy osiemdziesięciu hercach.' },
        { t: '0:18',  line: 'Poziomy osiągają szczyty wokół minus dwunastu na mikrofonie wywiadowczym, co wydaje się odpowiednie dla tej atmosfery.' },
        { t: '0:28',  line: 'Obok mnie stoi ranger, który pracował w tej części parku przez dwadzieścia dwa lata.' },
        { t: '0:37',  line: 'Kiedy ludzie pytają, co się najbardziej zmieniło, zawsze zaczynam od pożarów latem 2020 roku.' },
        { t: '0:47',  line: 'Las nigdy nie wyglądał tak samo po tym, a wzorce dzikiej przyrody potrzebowały lat, aby się ustabilizować.' },
        { t: '0:57',  line: 'Czy możesz opisać, jak wyglądały te pierwsze tygodnie po pożarach na ziemi?' },
        { t: '1:05',  line: 'Pewnie. Dym utrzymywał się przez około sześć tygodni, a widoczność nigdy nie przekraczała pół mili.' },
      ]}
      whyTitle="Dlaczego Mictoo do transkrypcji WAV"
      whyCards={[
        {
          icon: 'waveform',
          title: 'PCM i BWF, bez konwersji',
          desc: 'Standardowe 16/24/32-bitowe PCM WAV i Broadcast Wave (BWF) z metadanymi. Akceptujemy plik w oryginalnej formie bez wymaganej konwersji.',
        },
        {
          icon: 'target',
          title: 'Brak artefaktów kodeków stratnych',
          desc: 'Niekompresowane PCM nie dodaje artefaktów kompresji stratnej. Czyste nagranie może być mocnym źródłem, ale hałas otoczenia i umiejscowienie mikrofonu nadal mają znaczenie.',
        },
        {
          icon: 'gear',
          title: 'Dowolna częstotliwość próbkowania, dowolna głębokość bitowa',
          desc: '44.1 kHz, 48 kHz, 96 kHz, 192 kHz. Whisper przetwarza wewnętrznie do 16 kHz mono, więc twoja źródłowa częstotliwość nie wpływa na jakość.',
        },
        {
          icon: 'clip',
          title: 'Metadane BWF są zachowane po twojej stronie',
          desc: 'Ignorujemy bloki metadanych iXML/bext podczas transkrypcji. Twój oryginalny plik WAV (i jego metadane) nigdy nie są modyfikowane.',
        },
      ]}
      scenariosTitle="Kiedy WAV na tekst jest odpowiedni"
      scenarios={[
        {
          icon: 'mic',
          title: 'Nagranie z rejestratora terenowego',
          desc: 'Zoom H4n, H5, H6, Tascam DR-40, Sound Devices MixPre. Cokolwiek zapisuje zestaw terenowy na karcie, prześlij WAV dla czystego transkryptu.',
        },
        {
          icon: 'waveform',
          title: 'Eksport DAW do odniesienia',
          desc: 'Szkic lub tylko wokal z Logic, Pro Tools lub Ableton. Otrzymaj tekstową wersję tekstu piosenki lub dialogu do odniesienia.',
        },
        {
          icon: 'briefcase',
          title: 'Wywiad radiowy',
          desc: 'Nagranie BWF z wywiadu radiowego lub studia podcastowego. Transkrypt zasila notatki, cytaty i dokumentację archiwalną.',
        },
        {
          icon: 'book',
          title: 'Archiwum historii ustnej',
          desc: 'Długie nagranie historii ustnej zapisane w WAV dla zachowania. Transkrypt sprawia, że archiwum jest przeszukiwalne i cytowalne.',
        },
        {
          icon: 'users',
          title: 'Nagranie depozycji i prawne',
          desc: 'Nagrywane postępowania zarejestrowane jako niekompresowane WAV dla jakości dowodowej. Transkrypt do przeglądu i cytowania.',
        },
        {
          icon: 'sparkles',
          title: 'Praca głosowa',
          desc: 'Nagranie ADR, narracja lub sesja głosowa zrealizowana w WAV. Transkrypt potwierdza, że odczyt odpowiada scenariuszowi.',
        },
      ]}
      technicalTitle="Co znajduje się w pliku WAV"
      technicalIntro="WAV to kontener powszechnie używany do niekompresowanego dźwięku PCM. Jego dodatkowa rozdzielczość jest przydatna do produkcji i archiwizacji, podczas gdy warunki nagrywania wciąż decydują o tym, jak zrozumiała jest mowa."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'PCM i Broadcast Wave',
          desc: 'Standardowe nagrania PCM WAV i BWF mogą przenosić ten sam mówiony dźwięk; BWF dodaje metadane produkcyjne wokół niego.',
        },
        {
          icon: 'gear',
          title: 'Częstotliwość próbkowania i głębokość bitowa',
          desc: 'Wysokie częstotliwości próbkowania i głębokości bitowe zachowują zapas produkcyjny, ale nie mogą naprawić hałasu, przesterowania ani dalekiego mikrofonu.',
        },
        {
          icon: 'cloud',
          title: 'Duże z natury',
          desc: 'Niekompresowane WAV szybko rośnie. Przy długich wywiadach podziel nagranie lub stwórz mniejszą mono kopię mowy, jeśli to konieczne.',
        },
        {
          icon: 'clip',
          title: 'Metadane pozostają na zewnątrz',
          desc: 'BWF, iXML i metadane cue nie są dodawane do transkryptu, a oryginalny plik źródłowy nie jest modyfikowany.',
        },
      ]}
      faq={[
        {
          q: 'Jakie rodzaje plików WAV akceptuje Mictoo?',
          a: 'Standardowe PCM WAV w 16-bitach, 24-bitach lub 32-bitach float, dowolna częstotliwość próbkowania (od 44.1 kHz do 192 kHz), mono lub stereo. Broadcast Wave (BWF) jest również w pełni obsługiwany z zachowaniem metadanych iXML/bext w twoim oryginalnym pliku.',
        },
        {
          q: 'Czy wyższa głębokość bitowa lub częstotliwość próbkowania poprawia transkrypt?',
          a: 'Nie. Whisper przetwarza wszystkie dźwięki do 16 kHz mono wewnętrznie przed transkrypcją, więc głębokość bitowa i częstotliwość próbkowania powyżej tego poziomu nie wpływają na dokładność. Jakość nagrania (wybór mikrofonu, pokój, poziom hałasu) ma znacznie większe znaczenie niż specyfikacja kontenera.',
        },
        {
          q: 'Mój plik WAV ze studia ma ponad 60 MB. Co teraz?',
          a: 'Stereo 24-bitowe 48 kHz WAV to około 17 MB na minutę, więc każde nagranie trwające ponad 3 minuty osiąga limit. Przekonwertuj na 16 kHz mono WAV (lub 128 kbps MP3) za pomocą ffmpeg -i in.wav -ar 16000 -ac 1 out.wav. Jakość transkrypcji jest identyczna.',
        },
        {
          q: 'Czy przechowujecie mój plik WAV?',
          a: 'Nie. Plik jest przesyłany do dostawcy transkrypcji, przetwarzany raz i usuwany z pamięci. Nigdy nie zapisujemy go na dysku. Transkrypt jest przechowywany tylko wtedy, gdy się zalogujesz i dodasz go do swojej historii.',
        },
        {
          q: 'Czy mogę zachować oryginalne znaczniki czasowe BWF w transkrypcie?',
          a: 'Transkrypt używa względnych znaczników czasowych od początku pliku (0:00 jako punkt odniesienia). Metadane BWF z absolutnym czasem nie są przenoszone do tekstowego wyjścia. Dopasuj je po swojej stronie, jeśli potrzebujesz dopasowania do kodu czasowego sceny.',
        },
        {
          q: 'Czy Mictoo transkrybuje WAV w innych językach?',
          a: 'Tak. Whisper large-v3 obsługuje ponad 50 języków z automatycznym wykrywaniem. W przypadku krótkich nagrań lub nietypowych akcentów, ustaw język wyraźnie w rozwijanym menu dla lepszego wykrywania przy pierwszym podejściu.',
        },
        {
          q: 'Czy mogę uzyskać napisy SRT dla nagrania WAV?',
          a: 'Tak. Pobierz SRT lub VTT po transkrypcji. Oba formaty zawierają znaczniki czasowe dostosowane do oryginalnej osi czasu WAV do użycia w edytorach wideo lub narzędziach dostępności.',
        },
        {
          q: 'Jak długo trwa transkrypcja WAV?',
          a: '15-minutowe WAV zazwyczaj kończy się w 20-40 sekund. Większe pliki bliskie limitu przesyłania zajmują 40-80 sekund. Prędkość przesyłania często jest dłuższym krokiem, ponieważ pliki WAV są duże.',
        },
        {
          q: 'Czy obsługujecie nagrania 32-bitowe float z Sound Devices?',
          a: 'Tak. Pliki WAV 32-bitowe float z MixPre, serii F lub rejestratorów Zoom F są akceptowane i transkrybowane w ten sam sposób, co standardowe PCM.',
        },
        {
          q: 'Czy mogę przetłumaczyć transkrypt na inny język?',
          a: 'Tak. Po transkrypcji wybierz docelowy język i kliknij Tłumacz. Tłumaczenie działa na GPT-4o-mini i pojawia się obok oryginalnego transkryptu.',
        },
      ]}
      ctaHeadline="Prześlij swój WAV, otrzymaj czysty transkrypt"
      ctaSubtitle="PCM, BWF, dowolna częstotliwość próbkowania. Nagrania studyjne, nagrania terenowe, eksporty DAW."
      ctaButton="Prześlij WAV do transkrypcji"
    />
  )
}