import LandingLayout from '@/components/LandingLayout'

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
  title: 'Wideo na tekst — darmowa transkrypcja online | Mictoo',
  description:
    'Darmowa transkrypcja wideo na tekst. Prześlij MP4, MOV, WEBM, AVI i otrzymaj transkrypcję AI lub plik napisów SRT. Działa ze screencastami, tutorialami, vlogami.',
  alternates: { canonical: 'https://mictoo.com/pl/transcribe-video-to-text', languages: LANGS },

  openGraph: {
    title: "Wideo na tekst — darmowa transkrypcja online | Mictoo",
    description: "Darmowa transkrypcja wideo na tekst. Prześlij MP4, MOV, WEBM, AVI i otrzymaj transkrypcję AI lub plik napisów SRT. Działa ze screencastami, tutorialami, vlogami.",
    url: "https://mictoo.com/pl/transcribe-video-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wideo na tekst — darmowa transkrypcja online | Mictoo",
    description: "Darmowa transkrypcja wideo na tekst. Prześlij MP4, MOV, WEBM, AVI i otrzymaj transkrypcję AI lub plik napisów SRT. Działa ze screencastami, tutorialami, vlogami.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlVideoToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      enableYouTubeUrl
      badge="MP4 · MOV · WEBM · ZA DARMO"
      h1={<>Wideo na tekst<br /><span className="text-brand-600">Darmowa transkrypcja wideo AI</span></>}
      subtitle="Darmowa transkrypcja AI dla dowolnego pliku wideo. Wyodrębniamy audio automatycznie. Bez konta, bez opłaty za minutę, bez emaila."
      howItWorks={[
        { icon: '🎬', title: 'Upuść wideo — albo wklej link YouTube', desc: 'MP4, MOV, WEBM, AVI lub dowolny popularny kontener wideo. Screencasty, vlogi, eksporty webinarów, MP4 z Zooma. Przeciągnij plik lub kliknij, aby wybrać. Nowość: wklej link YouTube zamiast uploadu, a my wyciągniemy transkrypcję w kilka sekund, bez pobierania.' },
        { icon: '⚡', title: 'Wyodrębniamy audio, AI transkrybuje', desc: 'Bierzemy ścieżkę dźwiękową z wideo i wysyłamy ją do Whisper large-v3. Nie trzeba konwertować na MP3. Wideo 30-minutowe jest zwykle gotowe w około minutę.' },
        { icon: '📋', title: 'Kopiuj, pobierz lub weź napisy', desc: 'Pobierz jako TXT do notatek lub jako SRT, aby wrzucić jako napisy do edytora wideo. Popraw błędne słowa w przeglądarce przed eksportem.' },
      ]}
      whyUse={{ title: 'Dlaczego Mictoo do wideo', bullets: [
        { title: 'Wklej link YouTube bezpośrednio', desc: 'Pomiń krok z pobieraniem dla filmów YouTube: wrzuć link w pole nad strefą upload i transkrypcja wraca w kilka sekund. Dla filmów bez napisów prześlij plik audio, a Whisper sobie z nim poradzi.' },
        { title: 'Wyciąganie audio jest automatyczne', desc: 'Upuszczasz MP4. Wewnętrznie wyciągamy audio i wysyłamy do modelu mowy. Nie musisz sam uruchamiać ffmpeg.' },
        { title: 'Wyjście działa w prawdziwych edytorach wideo', desc: 'SRT, które generujemy, działa w Premiere Pro, DaVinci Resolve, Final Cut, CapCut i YouTube Studio. Timecode jest frame-accurate.' },
        { title: 'Duże pliki wideo? Skompresuj audio, nie wideo', desc: 'Wideo 200 MB to zwykle 195 MB wideo i 5 MB audio. Nie musisz kompresować wszystkiego, tylko ścieżkę dźwiękową.' },
        { title: 'Żaden plik nie jest zapisywany', desc: 'Wideo trafia do nas, wyciągamy audio, wysyłamy do dostawcy transkrypcji i odrzucamy oba. Nie przechowujemy twojego wideo ani audio na naszych serwerach.' },
      ]}}
      useCases={{ title: 'Do czego służy transkrypcja wideo', items: [
        { title: 'Napisy do wideo z mediów społecznościowych', desc: 'TikTok, Instagram Reels, YouTube Shorts wszystkie korzystają z napisów wpalonych w wideo. Wygeneruj SRT tutaj, zaimportuj do CapCut lub Premiere, stylizuj napisy do gustu i wpal w wideo.' },
        { title: 'Tutoriale i treści kursowe', desc: 'Jeśli nagrywasz tutoriale screencast, posiadanie wersji tekstowej pomaga SEO, dostępności i tłumaczeniu. Wklej transkrypcję na blog lub platformę kursową obok wideo.' },
        { title: 'Follow-up po webinarze', desc: 'Zrobiłeś godzinny webinar. Przetranskrybuj nagranie, lekko edytuj i wyślij jako email follow-up uczestnikom, którzy nie mogli zostać do końca.' },
        { title: 'Cięcia wywiadu do edycji', desc: 'Edytując długi wywiad wideo, możesz zrobić "paper edit" z transkrypcją na drugim monitorze. Zaznacz linie, które chcesz, znajdź na timeline, dużo szybciej niż przewijanie.' },
        { title: 'Przygotowanie do tłumaczenia i dubbingu', desc: 'Przetranskrybuj w języku źródłowym, przepuść tekst przez DeepL lub ChatGPT do tłumaczenia i użyj jako skrypt do dubbingu lub tłumaczenia napisów.' },
      ]}}
      proTips={{ title: 'Wskazówki do transkrypcji wideo', tips: [
        { title: 'Wyciągnij audio, jeśli wideo przekracza 60 MB', desc: 'Wideo 1080p to głównie bajty pikseli, które i tak wyrzucamy. Weź tylko ścieżkę dźwiękową: ffmpeg -i video.mp4 -vn -ac 1 -b:a 64k audio.mp3. Wideo 500 MB schodzi do mniej niż 30 MB audio.' },
        { title: 'Wycisz muzykę w tle w edytorze przed eksportem', desc: 'Jeśli wideo ma muzykę pod dialogiem (B-roll, intro, przejścia), wycisz lub ścisz ścieżkę muzyczną w edytorze przed eksportem wersji do uploadu. Whisper czasami wymyśla słowa, gdy mowa jest zakopana pod muzyką.' },
        { title: 'Screencasty bez muzyki są najłatwiejsze', desc: 'Nagrania Loom, Zoom, OBS kogoś mówiącego o slajdach dają najczystsze transkrypcje. Brak muzyki, jeden głos, czyste mikrofon. Dostajesz precyzję prawie ludzką.' },
        { title: 'W wideo z wieloma mówcami nagrywaj osobne ścieżki, jeśli możesz', desc: 'Jeśli kontrolujesz nagranie, nagrywaj każdego mówcę na własną ścieżkę. Transkrybuj każdą ścieżkę osobno. Czystsza atrybucja, mniej błędów przy nakładaniu.' },
        { title: 'Framerate nie ma znaczenia, tylko jakość audio', desc: 'Whisper nie patrzy na wideo, tylko na audio. Wideo 4K z kiepskim audio transkrybuje gorzej niż wideo 480p z mikrofonem lavalier. Włóż wysiłek w audio.' },
        { title: 'Timecode SRT potrzebuje małego offsetu w niektórych edytorach', desc: 'Większość edytorów wyrównuje timecode SRT perfekcyjnie. Niektóre starsze edytory oczekują, że pierwszy napis zaczyna się o 00:00:01,000 zamiast 00:00:00,000. Jeśli napisy są przesunięte o sekundę, zwykle to powód.' },
      ]}}
      faq={[
        { q: 'Jakie formaty wideo obsługujecie?', a: 'MP4, MOV, WEBM, AVI, MKV, FLV. Jeśli wideo działa w VLC, prawie na pewno zadziała tutaj. Wyciągamy audio wewnętrznie, więc kodek wideo prawie nie ma znaczenia.' },
        { q: 'Mój plik wideo jest za duży do uploadu. Co teraz?', a: 'Dwie opcje. Najpierw wyciągnij tylko audio (jedno polecenie ffmpeg, zobacz Wskazówki wyżej) i prześlij to. Lub użyj mniejszego eksportu z edytora (niższa rozdzielczość lub bitrate). Dla plików powyżej 60 MB wyciąganie audio jest szybsze.' },
        { q: 'Czy mogę dostać napisy SRT, nie tylko czysty tekst?', a: 'Tak. Po transkrypcji kliknij "Pobierz jako SRT". SRT działa w YouTube Studio, Premiere Pro, DaVinci Resolve, Final Cut, CapCut i każdym standardowym edytorze wideo.' },
        { q: 'Czy timing SRT dokładnie zgadza się z klatkami mojego wideo?', a: 'Tak. Timecode SRT jest w milisekundach, bardziej precyzyjny niż dowolny framerate wideo. Pasują poprawnie przy 24, 25, 29.97, 30, 50 i 60 fps.' },
        { q: 'Czy mogę przetranskrybować wideo bez dźwięku (tylko tekst na ekranie)?', a: 'Nie. Transkrybujemy mówione audio. Do rozpoznawania tekstu na ekranie potrzebujesz OCR, to inne narzędzie.' },
        { q: 'Jak dokładne jest wideo na tekst?', a: 'Zależy od audio. Czysty voiceover: precyzja prawie ludzka (95% lub lepiej). Wideo z konferencji ze złą akustyką: około 85-90%. Wideo pełne muzyki z cichym dialogiem: niżej.' },
        { q: 'Czy moje wideo jest uploadowane na YouTube lub serwisy trzecie?', a: 'Nie. Wideo jest strumieniowane do dostawcy transkrypcji i odrzucane. Nic nie idzie na YouTube, Google ani gdziekolwiek indziej. Nie jesteśmy w branży cloud video storage.' },
        { q: 'Czy mogę edytować transkrypcję przed pobraniem?', a: 'Tak. Popraw błędne słowa w przeglądarce przed eksportem. Przydatne dla nazw własnych i terminów technicznych.' },
        { q: 'Czy wspieracie wideo 360 lub formaty VR?', a: 'Kodek wideo nie ma dla nas znaczenia. Dopóki plik jest standardowym kontenerem (MP4, MOV) ze ścieżką audio, wyciągamy audio i transkrybujemy.' },
        { q: 'Co jeśli moje wideo ma kilka ścieżek audio (komentarz, oryginał, muzyka)?', a: 'Używamy tylko ścieżki domyślnej. Jeśli chcesz konkretną, reeksportuj wideo z tą ścieżką jako domyślną, lub wyciągnij wybraną ścieżkę i prześlij jako audio.' },
        { q: 'Czy jest limit długości dla wideo?', a: '30 minut na plik za darmo, 60 minut z rejestracją. Dla dłuższych wideo podziel na kawałki. Transkrypcje można połączyć potem.' },
        { q: 'Czy mogę transkrybować transmisję wideo na żywo?', a: 'Nie. Pracujemy tylko z plikami nagranymi. Do transkrypcji na żywo potrzebujesz innej kategorii narzędzia.' },
      ]}
      relatedLinks={[
        { href: '/pl/free-srt-generator', label: 'Generator SRT', desc: 'To samo narzędzie, ukierunkowane na workflow napisów.' },
        { href: '/pl/youtube-to-text', label: 'YouTube na tekst', desc: 'Gdy wideo jest już na YouTube.' },
        { href: '/pl/zoom-transcription', label: 'Transkrypcja Zoom', desc: 'Specyficznie dla nagrań MP4 z Zooma.' },
        { href: '/pl/how-to-compress-audio', label: 'Kompresja audio', desc: 'Dla wideo, których audio przekracza limit.' },
      ]}
    />
  )
}
