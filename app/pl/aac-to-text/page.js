import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'pl': 'https://mictoo.com/pl/aac-to-text',
  'ja': 'https://mictoo.com/ja/aac-to-text',
  'ko': 'https://mictoo.com/ko/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC na tekst: Transkrypcja surowego audio AAC i ADTS | Mictoo',
  description:
    'Prześlij surowe pliki .aac (strumień ADTS lub ADIF), uzyskaj edytowalny transkrypt w kilka sekund. Często stosowane w pobieraniu podcastów, archiwach nadawczych, zgranym audio z iPhone’a.',
  alternates: {
    canonical: 'https://mictoo.com/pl/aac-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'AAC na tekst: Transkrypcja surowego audio AAC i ADTS | Mictoo',
    description: 'Prześlij surowe pliki .aac (strumień ADTS lub ADIF). Edytowalny transkrypt w kilka sekund.',
    url: 'https://mictoo.com/pl/aac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC na tekst: Transkrypcja surowego strumienia AAC',
    description: 'Prześlij surowe .aac (ADTS lub ADIF). Edytowalny transkrypt w kilka sekund.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlAacToTextPage() {
  return (
    <FormatPageLayout
      locale="pl"
      badge="AAC · ADTS · Surowy strumień kodeka"
      h1First="AAC na tekst"
      h1Second="Surowe strumienie ADTS, archiwa nadawcze, zgrane audio"
      subtitle="Surowe pliki .aac często pochodzą z transmisji nadawczych, nagrań radiowych i wyodrębnionych ścieżek dźwiękowych. Upuść plik, a Mictoo sprawdzi jego strukturę przed transkrypcją mówionego audio za pomocą Whisper large-v3."
      highlightFormat="aac"
      previewFileName="broadcast-audio.aac"
      previewWordCount={142}
      previewDurationLabel="9:44"
      previewLines={[
        { t: '0:00',  line: 'Słuchasz porannego programu. Jest siedemnasta piętnaście i wracamy z naszą główną historią.' },
        { t: '0:08',  line: 'W nocy rada miasta przyjęła nową ekspansję transportu po prawie trzech latach debaty.' },
        { t: '0:17',  line: 'Plan doda dwie nowe linie lekkiej kolei i przedłuży istniejącą o około osiem mil.' },
        { t: '0:27',  line: 'Aby wyjaśnić, co to oznacza dla codziennych dojeżdżających, w studiu jest nasz reporter transportowy.' },
        { t: '0:37',  line: 'Dziękuję za zaproszenie. Nagłówkiem jest to, że korytarz wschodni w końcu zyskuje opcję kolejową po dwudziestu latach.' },
        { t: '0:47',  line: 'Dla każdego, kto obecnie jeździ tą trasą w godzinach szczytu, to naprawdę transformacyjne.' },
        { t: '0:56',  line: 'Budowa rozpocznie się w przyszłą wiosnę, a pierwsza nowa linia ma zostać otwarta w dwutysięcznym dwudziestym dziewiątym roku.' },
        { t: '1:06',  line: 'Rada szacuje, że około czterdziestu tysięcy codziennych pasażerów skorzysta z nowych segmentów, gdy zostaną otwarte.' },
      ]}
      whyTitle="Dlaczego Mictoo do transkrypcji AAC"
      whyCards={[
        {
          icon: 'waveform',
          title: 'Surowe ADTS obsługiwane natywnie',
          desc: 'Większość surowych plików .aac jest opakowana w ADTS (Audio Data Transport Stream). Wykrywamy słowo synchronizacji 0xFFF i przekazujemy strumień do Whisper.',
        },
        {
          icon: 'gear',
          title: 'Obsługiwane również ADIF i LATM',
          desc: 'Mniej powszechne opakowania ADIF (Audio Data Interchange Format) i LATM również działają. Nie jest potrzebne ręczne pakowanie ani krok ffmpeg.',
        },
        {
          icon: 'clip',
          title: 'Nie wymaga kontenera',
          desc: 'AAC zazwyczaj znajduje się w M4A lub MP4, ale czasami surowy strumień ląduje na twoim dysku. Mictoo akceptuje oba bez pytania.',
        },
        {
          icon: 'sparkles',
          title: 'AI podsumowanie dla segmentów archiwalnych',
          desc: 'Segment nadawczy, klip archiwalny z radia lub zrzut strumienia. Podsumowanie AI pozwala szybciej przeszukiwać archiwa.',
        },
      ]}
      scenariosTitle="Kiedy AAC na tekst jest odpowiednim rozwiązaniem"
      scenarios={[
        {
          icon: 'briefcase',
          title: 'Archiwum radia nadawczego',
          desc: 'Segment nagrany z transmisji HLS lub Icecast, który jest przesyłany jako surowe AAC. Transkrypt sprawia, że archiwum jest przeszukiwalne.',
        },
        {
          icon: 'video',
          title: 'Przechwytywanie transmisji HLS',
          desc: 'YouTube Live, Twitch lub transmisja radiowa HLS przechwycona jako sekwencja kawałków .aac. Upuść plik, uzyskaj tekst.',
        },
        {
          icon: 'mic',
          title: 'Zgrane audio z iPhone’a',
          desc: 'Audio wyodrębnione z nagrania iPhone’a lub udostępnionego pliku, który stracił kontener M4A i wyszedł jako surowe AAC.',
        },
        {
          icon: 'gear',
          title: 'Eksport z usługi streamingowej',
          desc: 'Platforma podcastowa lub aplikacja streamingowa, która oferuje pobieranie surowego AAC. Pomiń konwersję i upuść plik bezpośrednio.',
        },
        {
          icon: 'users',
          title: 'Wywiad nadawany',
          desc: 'Wywiad prowadzony w radiu archiwizowany jako surowe AAC. Transkrypt to gotowa do cytowania kopia dla artykułów lub programów.',
        },
        {
          icon: 'editPen',
          title: 'Wyjście pośrednie FFmpeg',
          desc: 'Wyodrębniłeś ścieżkę audio za pomocą ffmpeg -c:a copy i otrzymałeś .aac. Upuść to tutaj zamiast ponownego pakowania do M4A najpierw.',
        },
      ]}
      technicalTitle="Surowe AAC w porównaniu do M4A"
      technicalIntro="AAC to kodek audio. Plik kończący się na .aac to często surowy strumień opakowany, podczas gdy M4A zazwyczaj owija audio AAC w kontenerze MP4 z możliwością przeszukiwania i metadanymi."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'ADTS jest powszechne',
          desc: 'Surowe AAC jest często przechowywane jako ramki ADTS, szczególnie gdy audio zostało wyodrębnione z transmisji lub przepływu pracy nadawczego.',
        },
        {
          icon: 'layers',
          title: 'M4A dodaje kontener',
          desc: 'M4A może zawierać ten sam kodek AAC z czasowaniem, indeksowaniem i metadanymi dostarczonymi przez kontener oparty na MP4.',
        },
        {
          icon: 'search',
          title: 'Rozszerzenie to tylko wskazówka',
          desc: 'Struktura pliku jest sprawdzana podczas przetwarzania, więc mylące rozszerzenie nie staje się tekstem transkryptu.',
        },
        {
          icon: 'briefcase',
          title: 'Przepływy pracy nadawcze',
          desc: 'Surowe AAC często pojawia się po przechwyceniu HLS lub wyodrębnieniu audio. Zachowaj oryginalne odniesienie źródłowe dla kontekstu archiwalnego.',
        },
      ]}
      faq={[
        {
          q: 'Jakie pliki AAC akceptuje Mictoo?',
          a: 'Surowe AAC w opakowaniu ADTS (najczęstsze), ADIF i LATM. Wykrywamy słowo synchronizacji po stronie serwera i przekazujemy strumień do Whisper.',
        },
        {
          q: 'Jaka jest różnica między .aac a .m4a?',
          a: '.aac to zazwyczaj surowy strumień bitowy ADTS: ramki AAC z małymi 7-bajtowymi nagłówkami, bez kontenera. .m4a to audio AAC owinięte w kontenerze MP4 z metadanymi i indeksowaniem przeszukiwania. Oba używają kodeka AAC, ale struktura pliku różni się.',
        },
        {
          q: 'Mój plik AAC ma ponad 60 MB. Co teraz?',
          a: 'AAC przy typowych bitrate’ach nadawczych (128 kbps) to około 1 MB na minutę, więc 60 MB to mniej więcej nagranie godzinne. Jeśli jesteś zalogowany, automatycznie dzielimy do około 3 godzin. W przeciwnym razie, zmniejsz jakość: ffmpeg -i in.aac -b:a 64k -ac 1 out.aac.',
        },
        {
          q: 'Czy surowe AAC produkuje gorsze transkrypty niż M4A?',
          a: 'Nie. Strumień audio jest identyczny; tylko kontener się różni. Whisper przetwarza do mono 16 kHz wewnętrznie w każdym przypadku. Dokładność zależy od jakości nagrania, a nie od tego, czy jest opakowane w ADTS czy MP4.',
        },
        {
          q: 'Czy Mictoo transkrybuje nieangielskie AAC?',
          a: 'Tak. Whisper large-v3 obsługuje ponad 50 języków z automatycznym wykrywaniem. Dla nietypowych akcentów lub krótkich klipów nadawczych, ustaw język explicite dla lepszych wyników przy pierwszym podejściu.',
        },
        {
          q: 'Czy mogę uzyskać napisy SRT dla klipu nadawczego?',
          a: 'Tak. Pobierz SRT lub VTT po transkrypcji. Znaczniki czasowe są dostosowane do oryginalnej osi czasu strumienia AAC do użycia w edytorach wideo, nakładkach dostępności lub indeksowaniu archiwalnym.',
        },
        {
          q: 'Czy mój plik AAC jest przechowywany na waszych serwerach?',
          a: 'Nie. Audio przesyła się do dostawcy transkrypcji, przetwarzane jest raz i usuwane z pamięci. Nigdy nie zapisujemy go na dysku. Transkrypty są przechowywane tylko wtedy, gdy jesteś zalogowany i zapisujesz w historii.',
        },
        {
          q: 'Czy mogę przetłumaczyć transkrypt na inny język?',
          a: 'Tak. Po transkrypcji wybierz docelowy język i kliknij Tłumacz. Tłumaczenie działa na GPT-4o-mini i pojawia się obok oryginału.',
        },
        {
          q: 'Co jeśli plik ma rozszerzenie .aac, ale jest w rzeczywistości M4A?',
          a: 'Sprawdzamy magiczne bajty, a nie rozszerzenie. Jeśli plik zaczyna się od ftyp (podpis M4A/MP4), traktujemy go jako M4A. Jeśli zaczyna się od bajtów synchronizacji ADTS, traktujemy go jako surowe AAC. W każdym przypadku transkrypcja działa.',
        },
        {
          q: 'Jak długo trwa transkrypcja AAC?',
          a: '10-minutowe AAC zazwyczaj kończy się w 15-30 sekund. Większe pliki bliskie limitu przesyłania zajmują 45-80 sekund. Prędkość przesyłania często jest dłuższym krokiem.',
        },
      ]}
      ctaHeadline="Upuść swoje surowe AAC i uzyskaj transkrypt"
      ctaSubtitle="Opakowania ADTS, ADIF i LATM. Archiwa nadawcze, przechwytywanie HLS, zgrane audio."
      ctaButton="Prześlij AAC do transkrypcji"
    />
  )
}