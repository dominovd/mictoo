import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: 'Wideo na tekst: Darmowa transkrypcja wideo online dla MP4, MOV, WebM | Mictoo',
  description:
    'Prześlij wideo MP4, MOV, WebM, AVI lub MKV i otrzymaj transkrypt z znacznikami czasowymi, podsumowaniem AI i napisami SRT. Dla nagrań ekranu, tutoriali, vlogów i webinarów.',
  alternates: {
    canonical: 'https://mictoo.com/pl/transcribe-video-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'Wideo na tekst: Darmowa transkrypcja wideo online | Mictoo',
    description: 'Transkrypcja wideo MP4, MOV, WebM z SRT, podsumowaniem i tłumaczeniem.',
    url: 'https://mictoo.com/pl/transcribe-video-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wideo na tekst: Darmowa transkrypcja wideo online',
    description: 'Transkrypcja wideo MP4, MOV, WebM z SRT i podsumowaniem.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlTranscribeVideoToTextPage() {
  return (
    <FormatPageLayout
      locale="pl"
      badge="Pliki wideo · MP4 · MOV · WebM · Darmowe"
      h1First="Wideo na tekst"
      h1Second="Dla nagrań ekranu, tutoriali i vlogów"
      subtitle="Prześlij plik MP4, MOV, WebM, MKV lub AVI. Wyodrębniamy ścieżkę audio, transkrybujemy za pomocą Whisper large-v3 i zwracamy transkrypt z znacznikami czasowymi, podsumowaniem AI i napisami SRT gotowymi do dodania z powrotem do wideo."
      highlightFormat="wideo"
      relatedFormatsTitle="Kontenery wideo, które możesz przesłać"
      relatedFormats={[
        { key: 'video', name: 'MP4', ext: '.mp4' },
        { key: 'mov', name: 'MOV', ext: '.mov' },
        { key: 'webm', name: 'WebM', ext: '.webm', href: '/pl/webm-to-text' },
        { key: 'mkv', name: 'MKV', ext: '.mkv' },
        { key: 'avi', name: 'AVI', ext: '.avi' },
        { key: 'mpeg', name: 'MPEG', ext: '.mpeg' },
      ]}
      previewFileName="keynote-recording.mp4"
      previewWordCount={205}
      previewDurationLabel="32:47"
      enableYouTubeUrl={true}
      previewLines={[
        { t: '0:00',  line: 'Dzień dobry wszystkim i dziękuję za przybycie dzisiaj.' },
        { t: '0:06',  line: 'Spędzimy następne trzydzieści minut na tym, jak wideo zmieniło się w 2026 roku i co to oznacza dla twórców.' },
        { t: '0:15',  line: 'Trzy szybkie liczby zanim zaczniemy. Dziewięćdziesiąt dwa procent użytkowników internetu ogląda wideo co tydzień.' },
        { t: '0:24',  line: 'Krótka forma teraz zajmuje więcej czasu oglądania niż długa forma na każdej głównej platformie.' },
        { t: '0:32',  line: 'A wyszukiwania, które prowadzą do wyniku wideo, wzrosły dwa i pół razy rok do roku.' },
        { t: '0:41',  line: 'Więc platformy promują wideo. Publiczność ogląda więcej wideo. Ta część nie budzi kontrowersji.' },
        { t: '0:50',  line: 'Kontrowersyjne jest to, co faktycznie przyciąga uwagę w tym oceanie wideo.' },
        { t: '0:58',  line: 'Pozwólcie, że przeprowadzę przez trzy wzorce, które widzieliśmy, działają dla twórców publikujących co tydzień.' },
      ]}
      whyTitle="Dlaczego Mictoo do transkrypcji wideo"
      whyCards={[
        {
          icon: 'video',
          title: 'Każdy powszechny kontener wideo',
          desc: 'MP4, MOV, WebM, MKV, AVI. Wyodrębniamy ścieżkę audio po stronie serwera, więc przesyłasz wideo w oryginalnej formie bez kroku konwersji.',
        },
        {
          icon: 'clip',
          title: 'SRT i VTT gotowe do osi czasu',
          desc: 'Znaczniki czasowe są zgodne z oryginalną osią czasu wideo. Pobierz SRT lub VTT i dodaj bezpośrednio do Premiere, DaVinci, CapCut lub swojego przesyłania na YouTube.',
        },
        {
          icon: 'sparkles',
          title: 'Podsumowanie AI do opisów',
          desc: 'Automatycznie generowane podsumowanie obok transkryptu. Solidny pierwszy szkic do opisów wideo, podsumowań blogów i tytułów rozdziałów.',
        },
        {
          icon: 'globe',
          title: 'Tłumacz napisy na 50+ języków',
          desc: 'Po przygotowaniu transkryptu, przetłumacz napisy na hiszpański, francuski, niemiecki, portugalski i 45+ innych języków jednym kliknięciem.',
        },
      ]}
      scenariosTitle="Kiedy wideo na tekst jest odpowiednie"
      scenarios={[
        {
          icon: 'video',
          title: 'Napisy do wideo YouTube',
          desc: 'Nagrane, edytowane i wyeksportowane do MP4. Prześlij plik, aby uzyskać napisy SRT i gotowe podsumowanie.',
        },
        {
          icon: 'briefcase',
          title: 'Nagrania Loom i ekranu',
          desc: 'WebM lub MP4 z Loom, OBS lub przechwytywania ekranu przeglądarki. Uzyskaj czystą wersję tekstową przejścia.',
        },
        {
          icon: 'users',
          title: 'Nagrania webinarów i warsztatów',
          desc: 'Nagranie długiego wydarzenia. Transkrypt staje się postem na blogu, podsumowaniem na LinkedIn i archiwum do przeszukiwania.',
        },
        {
          icon: 'editPen',
          title: 'Treści vlogów i tutoriali',
          desc: 'Wydanie vloga, wyjaśnienie tutorialu lub demonstracja produktu. Transkrypt zasila notatki, napisy i ponowne wykorzystanie w mediach społecznościowych.',
        },
        {
          icon: 'book',
          title: 'Archiwum lekcji kursu',
          desc: 'Nagrana wykład lub lekcja MP4. Daj uczniom przeszukiwalną wersję tekstową i zablokuj napisy dla dostępności.',
        },
        {
          icon: 'mic',
          title: 'Wideo wywiadu i świadectwa',
          desc: 'Wywiad na siedząco lub świadectwo klienta. Transkrypt znacznie ułatwia cytowanie, edytowanie i tłumaczenie.',
        },
      ]}
      technicalTitle="Co się dzieje z plikiem wideo"
      technicalIntro="Mictoo wykorzystuje mówioną ścieżkę audio do transkrypcji. Kontener i jakość obrazu nie poprawiają rozpoznawania mowy, ale wpływają na rozmiar przesyłania i to, czy dostępny jest strumień audio."
      technicalFacts={[
        {
          icon: 'video',
          title: 'Wyodrębniona ścieżka audio',
          desc: 'Ścieżka mowy jest dekodowana z kontenera wideo. Nie musisz eksportować osobnego MP3 przed przesłaniem.',
        },
        {
          icon: 'clip',
          title: 'Oryginalna oś czasu zachowana',
          desc: 'Segmenty transkryptu i eksporty napisów korzystają z oryginalnej osi czasu mediów, aby mogły być dopasowane z powrotem do wideo.',
        },
        {
          icon: 'layers',
          title: 'Kontener nie jest kodekiem',
          desc: 'MP4, MOV, WebM, MKV i AVI mogą zawierać różne kodeki audio. Plik jest sprawdzany podczas przetwarzania.',
        },
        {
          icon: 'ear',
          title: 'Mowa jest wymagana',
          desc: 'Ciche klipy i filmy tylko z muzyką nie mają wiarygodnego transkryptu mówionego. Sprawdź, czy zamierzona ścieżka audio jest słyszalna najpierw.',
        },
      ]}
      faq={[
        {
          q: 'Jakie formaty wideo akceptuje Mictoo?',
          a: 'MP4, MOV, WebM, MKV, AVI i większość innych powszechnych kontenerów. Wyodrębniamy ścieżkę audio po stronie serwera, więc możesz przesłać którykolwiek z nich bezpośrednio bez konwertowania na audio najpierw.',
        },
        {
          q: 'Jak duży plik wideo mogę przesłać?',
          a: 'Do 25 MB anonimowo, 60 MB po zalogowaniu. Dla dłuższych filmów automatycznie dzielimy pliki do około 3 godzin, jeśli jesteś zalogowany. Dla bardzo dużych eksportów, zmniejsz rozmiar wideo najpierw lub wyodrębnij ścieżkę audio i przesyłaj audio.',
        },
        {
          q: 'Czy mogę wkleić adres URL YouTube zamiast tego?',
          a: 'Tak. Na tej stronie możesz wkleić adres URL wideo YouTube, a Mictoo pobierze napisy, gdy będą dostępne. Gdy nie ma napisów, przesyłaj plik wideo lub wyodrębnione audio do pełnej transkrypcji Whisper.',
        },
        {
          q: 'Czy znaczniki czasowe są zgodne z oryginalnym wideo?',
          a: 'Tak. Znaczniki czasowe transkryptu i SRT/VTT korzystają z oryginalnej osi czasu wideo. Zapewniają użyteczny pierwszy ślad napisów, ale powinieneś sprawdzić czas i podziały linii w swoim edytorze przed publikacją.',
        },
        {
          q: 'Czy mogę uzyskać napisy SRT dla wideo?',
          a: 'Tak. Pobierz jako SRT lub VTT po transkrypcji. Oba formaty działają w Premiere, DaVinci Resolve, Final Cut, CapCut, YouTube Studio i większości nowoczesnych odtwarzaczy wideo.',
        },
        {
          q: 'Czy wyodrębniacie audio z klipów cichych wideo?',
          a: 'Nie. Jeśli wideo nie ma słyszalnej mowy, nie ma nic do transkrypcji. Dla klipów tylko z muzyką, transkrypt będzie zazwyczaj pusty lub zawierał krótkie fragmenty tekstu piosenki.',
        },
        {
          q: 'Czy mogę przetłumaczyć napisy na inny język?',
          a: 'Tak. Po transkrypcji wybierz język docelowy i kliknij Tłumacz. Tłumaczenie działa na GPT-4o-mini i pojawia się obok oryginału. Eksportuj przetłumaczone SRT dla napisów w obcym języku.',
        },
        {
          q: 'Czy mój plik wideo będzie zapisany na waszych serwerach?',
          a: 'Nie. Wideo przesyła się do dostawcy transkrypcji, wyodrębniamy audio w pamięci, transkrybujemy raz i usuwamy wszystko z pamięci. Transkrypt jest przechowywany tylko wtedy, gdy się zalogujesz i zdecydujesz się go zapisać w historii.',
        },
        {
          q: 'Czy Mictoo transkrybuje wideo w języku innym niż angielski?',
          a: 'Tak. Whisper large-v3 obsługuje 50+ języków z automatycznym wykrywaniem. Dla krótkich wideo lub treści w języku obcym, ustaw język wyraźnie w rozwijanym menu dla czystszej detekcji na pierwszym etapie.',
        },
        {
          q: 'Jak długo trwa transkrypcja wideo?',
          a: '30-minutowe MP4 zazwyczaj kończy się w 40-70 sekund od początku do końca. Czas przesyłania i rozmiar pliku wideo są zazwyczaj dłuższym krokiem, ponieważ musimy otrzymać plik przed wyodrębnieniem audio.',
        },
      ]}
      ctaHeadline="Prześlij swoje wideo, uzyskaj napisy i transkrypt"
      ctaSubtitle="MP4, MOV, WebM, MKV, AVI. SRT, VTT, DOCX i podsumowanie w kilka sekund."
      ctaButton="Prześlij wideo do transkrypcji"
    />
  )
}