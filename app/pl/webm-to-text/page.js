import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-text',
  'fr': 'https://mictoo.com/fr/webm-to-text',
  'de': 'https://mictoo.com/de/webm-to-text',
  'es': 'https://mictoo.com/es/webm-to-text',
  'ru': 'https://mictoo.com/ru/webm-to-text',
  'it': 'https://mictoo.com/it/webm-to-text',
  'pt': 'https://mictoo.com/pt/webm-to-text',
  'pl': 'https://mictoo.com/pl/webm-to-text',
  'ja': 'https://mictoo.com/ja/webm-to-text',
  'ko': 'https://mictoo.com/ko/webm-to-text',
  'x-default': 'https://mictoo.com/webm-to-text',
}

export const metadata = {
  title: 'WebM na tekst: Transkrypcja Loom, OBS i nagrań z przeglądarki | Mictoo',
  description:
    'Prześlij nagrania ekranu WebM z Loom, OBS lub przeglądarki MediaRecorder API. Usuwamy wideo i transkrybujemy audio. Edytowalna transkrypcja z znacznikami czasowymi w sekundach.',
  alternates: {
    canonical: 'https://mictoo.com/pl/webm-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'WebM na tekst: Transkrypcja Loom, OBS, nagrań z przeglądarki | Mictoo',
    description: 'Prześlij nagranie ekranu WebM. Wyodrębniamy audio i zwracamy edytowalną transkrypcję z znacznikami czasowymi.',
    url: 'https://mictoo.com/pl/webm-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebM na tekst: Transkrypcja Loom, OBS, nagrań z przeglądarki',
    description: 'Prześlij nagranie ekranu WebM. Wyodrębniamy audio i zwracamy edytowalną transkrypcję.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlWebmToTextPage() {
  return (
    <FormatPageLayout
      locale="pl"
      badge="WebM · Loom · OBS · Nagranie ekranu"
      h1First="WebM na tekst"
      h1Second="Dla Loom, OBS i nagrań z przeglądarki"
      subtitle="WebM to format, który eksportuje Loom, nagrywa OBS w nowszych wersjach i zapisuje przeglądarka, gdy Twoja aplikacja korzysta z MediaRecorder API. Przeciągnij plik, usuwamy wideo i transkrybujemy audio w sekundach."
      highlightFormat="webm"
      previewFileName="loom-recording.webm"
      previewWordCount={172}
      previewDurationLabel="7:36"
      previewLines={[
        { t: '0:00',  line: 'Cześć zespole, chciałem przejść przez nowy proces onboardingu przed jego wdrożeniem w czwartek.' },
        { t: '0:07',  line: 'To jest mój ekran. To, co widzisz, to strona powitalna po świeżym zarejestrowaniu się.' },
        { t: '0:14',  line: 'Pierwsza rzecz, którą warto zauważyć, to to, że modal powitalny teraz znajduje się nad pulpitem nawigacyjnym, zamiast blokować cały widok.' },
        { t: '0:23',  line: 'To jest zamierzone. Użytkownicy często się gubili, gdy pulpit był całkowicie ukryty przez wycieczkę.' },
        { t: '0:32',  line: 'Po drugie, trzy kroki wycieczki są krótsze. Skróciliśmy tekst mniej więcej o połowę na podstawie ostatniej rundy opinii.' },
        { t: '0:41',  line: 'Jeśli kliknę Pomiń wycieczkę tutaj, modal zamyka się i przenosimy użytkownika bezpośrednio do pustego oznaczenia coacha.' },
        { t: '0:51',  line: 'To oznaczenie coacha wskazuje na główny przycisk przesyłania, który jest jedyną akcją, którą każdy użytkownik musi wykonać jako pierwszą.' },
        { t: '1:00',  line: 'Daj mi znać, co myślisz. Problemy blokujące wdrożenie do środy rano, jeśli to możliwe.' },
      ]}
      whyTitle="Dlaczego Mictoo do transkrypcji WebM"
      whyCards={[
        {
          icon: 'video',
          title: 'Wideo WebM obsługiwane po stronie serwera',
          desc: 'Nagranie ekranu WebM z nienaruszonym śladem wideo. Demuxujemy, usuwamy wideo i transkrybujemy audio. Nie jest potrzebne lokalne wyodrębnienie.',
        },
        {
          icon: 'gear',
          title: 'Obsługuje zarówno Opus, jak i Vorbis',
          desc: 'Większość plików WebM zawiera audio Opus (nowsze) lub Vorbis (starsze). Obsługujemy oba kodeki, nie jest wymagana ręczna konwersja.',
        },
        {
          icon: 'clip',
          title: 'Napisy SRT do wycieczki',
          desc: 'Pobierz SRT lub VTT po transkrypcji. Znaczniki czasowe są zgodne z oryginalnym WebM, więc napisy pasują do nagrania ekranu z dokładnością do klatki.',
        },
        {
          icon: 'sparkles',
          title: 'Podsumowanie AI do notatek o wydaniu',
          desc: 'Podsumowanie AI to solidny pierwszy szkic do opisu biletu, notatki o wydaniu lub aktualizacji asynchronicznej, która miała zastąpić wycieczkę.',
        },
      ]}
      scenariosTitle="Kiedy WebM na tekst jest odpowiednim rozwiązaniem"
      scenarios={[
        {
          icon: 'video',
          title: 'Wycieczka Loom',
          desc: 'Demonstracja produktu, przegląd kodu lub aktualizacja asynchroniczna nagrana w Loom. Transkrypcja zasila bilet, dokument w Notion lub e-mail z dalszymi informacjami.',
        },
        {
          icon: 'briefcase',
          title: 'Nagranie ekranu OBS',
          desc: 'Tutorial lub nagranie rozgrywki nagrane z OBS Studio. Transkrypcja staje się opisem YouTube lub wpisem na blogu.',
        },
        {
          icon: 'gear',
          title: 'Wyjście z MediaRecorder przeglądarki',
          desc: 'Audio nagrane przez aplikację za pomocą MediaRecorder API. Przeciągnij plik .webm, który Twoja aplikacja wygenerowała, bez żadnego kroku konwersji.',
        },
        {
          icon: 'users',
          title: 'Nagranie Google Meet lub Firefox',
          desc: 'Niektóre narzędzia do spotkań i przeglądarki nagrywają domyślnie do WebM. Przeciągnij plik, aby uzyskać wersję tekstową rozmowy, którą można przeszukiwać.',
        },
        {
          icon: 'editPen',
          title: 'Asynchroniczna recenzja projektu',
          desc: 'Projektant nagrywa WebM, przechodząc przez makietę. Recenzenci otrzymują pisemną transkrypcję, aby mogli przejrzeć przed obejrzeniem.',
        },
        {
          icon: 'book',
          title: 'Nagranie wykładu',
          desc: 'Wykładowca nagrywa slajdy z narracją i udostępnia jako WebM. Studenci otrzymują przeszukiwalną transkrypcję obok wideo.',
        },
      ]}
      technicalTitle="Co warto wiedzieć o nagraniach WebM"
      technicalIntro="WebM to przyjazny dla przeglądarki kontener, który może zawierać wideo plus audio lub tylko audio. Ustawienia przeglądarki i rejestratora decydują, które ślady i kodeki są obecne."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Audio Opus lub Vorbis',
          desc: 'Najbardziej aktualne nagrania mowy WebM używają Opus; starsze pliki mogą używać Vorbis. Oba znajdują się w kontenerze WebM.',
        },
        {
          icon: 'video',
          title: 'Tylko audio lub z wideo',
          desc: 'WebM może zawierać nagranie ekranu lub tylko ślad mikrofonu. Transkrypcja korzysta z słyszalnego strumienia mowy.',
        },
        {
          icon: 'clip',
          title: 'Eksporty oparte na czasie',
          desc: 'Znaczniki czasowe transkrypcji podążają za dekodowanym harmonogramem nagrania do późniejszej pracy nad napisami lub edytowaniem.',
        },
        {
          icon: 'gear',
          title: 'Wyjście z rejestratora przeglądarki',
          desc: 'Ustawienia MediaRecorder różnią się w zależności od przeglądarki. Jeśli nagranie nie ma zgody na mikrofon, może nie zawierać mowy do transkrypcji.',
        },
      ]}
      faq={[
        {
          q: 'Jakie pliki WebM akceptuje Mictoo?',
          a: 'Każde standardowe WebM: wideo z audio Opus lub Vorbis (Loom, OBS, przeglądarka MediaRecorder), lub WebM tylko z audio. Demuxujemy ślad audio po stronie serwera i transkrybujemy za pomocą Whisper large-v3.',
        },
        {
          q: 'Czy muszę najpierw samodzielnie wyodrębnić audio?',
          a: 'Nie. Prześlij wideo WebM w takiej formie, w jakiej jest. Obsługujemy demux po stronie serwera i transkrybujemy tylko ślad audio. Jeśli już wyodrębniłeś audio (Opus lub Vorbis), to też działa.',
        },
        {
          q: 'Moje Loom ma ponad 60 MB. Co teraz?',
          a: '20-30 minutowe Loom często przekracza 60 MB. Jeśli jesteś zalogowany, automatycznie dzielimy długie pliki do około 3 godzin. W przeciwnym razie użyj ustawień pobierania Loom, aby zmniejszyć jakość lub wyeksportuj audio i prześlij to.',
        },
        {
          q: 'Czy znaczniki czasowe odpowiadają mojemu nagraniu ekranu?',
          a: 'Tak. Znaczniki czasowe w transkrypcji i w eksportach SRT/VTT są zgodne z oryginalnym harmonogramem WebM, więc napisy pasują do nagrania ekranu z dokładnością do klatki, gdy są ponownie umieszczane na wideo.',
        },
        {
          q: 'Czy mogę uzyskać napisy SRT do wycieczki?',
          a: 'Tak. Pobierz SRT lub VTT po transkrypcji. Przeciągnij do swojego edytora wideo, przesyłania na YouTube lub przepływu pracy Loom.',
        },
        {
          q: 'Czy Mictoo transkrybuje nieangielskie WebM?',
          a: 'Tak. Whisper large-v3 obsługuje 50+ języków z automatycznym wykrywaniem. Dla krótkich nagrań lub treści nieangielskich, ustaw język jawnie dla czystszych wyników w pierwszym przejściu.',
        },
        {
          q: 'Co jeśli WebM nie ma śladu audio?',
          a: 'Transkrypcja będzie pusta. Pliki WebM bez śladu audio (ciche nagrania ekranu, przechwyty GIF) nie mają nic do transkrypcji przez Whisper.',
        },
        {
          q: 'Czy mogę przetłumaczyć transkrypcję na inny język?',
          a: 'Tak. Po transkrypcji wybierz docelowy język i kliknij Tłumacz. Tłumaczenie działa na GPT-4o-mini i pojawia się obok oryginału.',
        },
        {
          q: 'Czy mój plik WebM jest przechowywany na Waszych serwerach?',
          a: 'Nie. WebM przesyła się do dostawcy transkrypcji, demuxujemy i transkrybujemy w pamięci, a następnie wszystko usuwamy. Transkrypcja jest przechowywana tylko wtedy, gdy się zalogujesz i zapiszesz w historii.',
        },
        {
          q: 'Jak długo trwa transkrypcja WebM?',
          a: '10-minutowe Loom zazwyczaj kończy się w 20-40 sekund. Dłuższe pliki WebM (30-45 minut) zajmują 60-90 sekund. Prędkość przesyłania często jest dłuższym krokiem dla dużych nagrań ekranu.',
        },
      ]}
      ctaHeadline="Prześlij swoje nagranie Loom lub OBS"
      ctaSubtitle="Nagrania ekranu WebM, wyjście z MediaRecorder przeglądarki. Wideo demuxowane po stronie serwera."
      ctaButton="Prześlij WebM do transkrypcji"
    />
  )
}