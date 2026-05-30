import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-mp3',
  'fr': 'https://mictoo.com/fr/webm-to-mp3',
  'de': 'https://mictoo.com/de/webm-to-mp3',
  'es': 'https://mictoo.com/es/webm-to-mp3',
  'ru': 'https://mictoo.com/ru/webm-to-mp3',
  'it': 'https://mictoo.com/it/webm-to-mp3',
  'pt': 'https://mictoo.com/pt/webm-to-mp3',
  'pl': 'https://mictoo.com/pl/webm-to-mp3',
  'ja': 'https://mictoo.com/ja/webm-to-mp3',
  'ko': 'https://mictoo.com/ko/webm-to-mp3',
  'x-default': 'https://mictoo.com/webm-to-mp3',
}

export const metadata = {
  title: 'WEBM na MP3 — darmowy konwerter online | Mictoo',
  description:
    'Konwertuj WEBM na MP3 online za darmo. Wyciągnij audio MP3 z dowolnego pliku WEBM wideo lub audio w kilka sekund. Bez rejestracji, bez znaku wodnego. Do 25 MB.',
  alternates: { canonical: 'https://mictoo.com/pl/webm-to-mp3', languages: LANGS },

  openGraph: {
    title: "WEBM na MP3 — darmowy konwerter online | Mictoo",
    description: "Konwertuj WEBM na MP3 online za darmo. Wyciągnij audio MP3 z dowolnego pliku WEBM wideo lub audio w kilka sekund. Bez rejestracji, bez znaku wodnego. Do 25 MB.",
    url: "https://mictoo.com/pl/webm-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBM na MP3 — darmowy konwerter online | Mictoo",
    description: "Konwertuj WEBM na MP3 online za darmo. Wyciągnij audio MP3 z dowolnego pliku WEBM wideo lub audio w kilka sekund. Bez rejestracji, bez znaku wodnego. Do 25 MB.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlWebmToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="WEBM → MP3 · Za darmo · Bez rejestracji"
      h1={<>WEBM na MP3<br /><span className="text-brand-600">Darmowy konwerter online</span></>}
      subtitle="Upuść plik WEBM (format, który uwielbiają rejestratory przeglądarkowe, downloadery YouTube i narzędzia do przechwytywania ekranu). Dostań czysty MP3. Bez znaku wodnego, bez emaila."
      tool={<ConverterZone from="webm" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Upuść WEBM', desc: 'Sam audio lub wideo WEBM, oba działają. Do 25 MB anonimowo, 60 MB po rejestracji.' },
        { icon: '⚡', title: 'Wyciągamy i ponownie kodujemy', desc: 'ffmpeg wyciąga strumień audio (Opus lub Vorbis) z kontenera WEBM i ponownie koduje na MP3 128 kbps przy 44.1 kHz. Zwykle 3-10 sekund.' },
        { icon: '⬇️', title: 'Pobierz MP3', desc: 'Wyjście zachowuje oryginalną nazwę z .mp3. Pliki są wymazywane z naszych serwerów w ciągu godziny.' },
      ]}
      whyUse={{ title: 'Dlaczego konwertować WEBM na MP3', bullets: [
        { title: 'WEBM jest świetny dla przeglądarki, okropny dla wszystkiego innego', desc: 'iPhone\'y nie odtwarzają WEBM. Większość radia samochodowych nie. Wiele starszych głośników Bluetooth nie. MP3 odtwarza wszystko, o czym pomyślisz.' },
        { title: 'Aplikacje notatek głosowych i rejestratory przeglądarkowe zapisują w WEBM', desc: 'Narzędzia nagrywania w sieci (Loom, API MediaRecorder MDN, przeglądarkowe rejestratory audio) domyślnie dają WEBM, bo Chrome i Firefox obsługują go natywnie. Jeśli chcesz wysłać nagranie gdzieś, MP3 to bezpieczniejszy format.' },
        { title: 'Downloadery YouTube dają WEBM domyślnie', desc: 'Kiedy wybierasz "tylko audio" w 4K Video Downloader lub yt-dlp bez określenia formatu, często dostajesz plik WEBM Opus. Konwersja na MP3 sprawia, że jest odtwarzalny na iOS i w aplikacjach edycji audio.' },
        { title: 'Opus jest technicznie lepszy, ale kompatybilność wygrywa', desc: 'Kodek Opus wewnątrz kontenera WEBM jest lepszy niż MP3 bajt po bajcie. Ale jeśli twoja publika nie może go odtworzyć, to nieważne. MP3 to lingua franca.' },
        { title: 'Bez znaku wodnego, bez upsellu', desc: 'MP3 to po prostu audio ponownie zakodowane. Nie dodajemy intro, tagu ani nakładki "kup Pro" na stronie wyniku.' },
      ]}}
      useCases={{ title: 'Kiedy konwertować WEBM na MP3', items: [
        { title: 'Nagranie audio z przeglądarki → przenośny plik', desc: 'Użyłeś rejestratora webowego (wbudowane narzędzie mikrofonu, online rejestrator głosu itp.) i dostałeś WEBM. Konwertuj na MP3, żeby wrzucić do edytora podcastów lub wysłać transkrybentowi.' },
        { title: 'Pobranie z Loom lub Vidyard → klip tylko audio', desc: 'Pobrania z Loom mogą być WEBM. Jeśli potrzebujesz tylko audio nagrania, konwertuj i zapisz mniejszy plik.' },
        { title: 'Pobranie audio z YouTube → uniwersalny format', desc: 'Kiedy pobierasz tylko audio z YouTube downloaderem, który domyślnie daje Opus/WEBM, konwersja na MP3 robi plik odtwarzalnym wszędzie.' },
        { title: 'Nagrywanie ekranu → tylko narracja', desc: 'OBS, wbudowany rejestrator ekranu Chrome i podobne narzędzia często wypuszczają WEBM. Jeśli chcesz tylko voiceover do transkrypcji lub podcastu, konwertuj.' },
        { title: 'Nagrania rozmów WebRTC', desc: 'Niektóre narzędzia wideokonferencyjne nagrywają w WEBM. Konwertuj przed wysłaniem klientom lub zapisaniem w CRM, który oczekuje MP3.' },
      ]}}
      proTips={{ title: 'Wskazówki do czystej konwersji WEBM na MP3', tips: [
        { title: 'WEBM z wideo VP9 jest ok, ignorujemy strumień wideo', desc: 'Możesz upuścić wideo WEBM (VP9 + Opus) do konwertera. Usuwamy wideo i zostawiamy tylko audio. Wynik jest tego samego rozmiaru, co gdybyś dał nam tylko audio.' },
        { title: 'Opus dekoduje bezstratnie wewnątrz ffmpeg', desc: 'Nie ma problemu drugiej straty idąc Opus → MP3. Kodowanie percepcyjne MP3 przy 128 kbps to jedyna rzecz wpływająca na wynik, nie to, że wejście jest formatem stratnym.' },
        { title: 'Dla głosu mono wystarczy, ale trzymamy stereo', desc: 'Nasz konwerter zachowuje układ kanałów źródła. Jeśli twój WEBM jest mono (typowe dla nagrań głosowych), MP3 jest mono. Nie robimy upmix.' },
        { title: 'Jeśli konwersja zawiedzie, WEBM jest pewnie częściowy', desc: 'Strumienie WEBM czasami zostają ucięte w środku nagrania, zostawiając kontener w połowie zepsuty. Otwórz w VLC i wyeksportuj jako nowy WEBM lub w edytorze wideo, potem spróbuj ponownie.' },
        { title: 'Dla pobrań YouTube wolisz M4A bezpośrednio, jeśli twój downloader to wspiera', desc: 'Jeśli kontrolujesz pobranie, wybór M4A (AAC wewnątrz kontenera MP4) pomija cały ten krok, M4A odtwarza wszędzie, gdzie MP3. Użyj opcji "M4A" w 4K Video Downloader.' },
        { title: 'Zaszyfrowane WEBM z DRM zawiodą', desc: 'Niektóre serwisy streamingowe używają WEBM z DRM. ffmpeg nie może ich odszyfrować, my też. Oryginalny WEBM musi być nieosłonięty.' },
      ]}}
      faq={[
        { q: 'Czy konwersja WEBM na MP3 jest naprawdę darmowa?', a: 'Tak. Bez konta do 25 MB, bez znaku wodnego, bez "trialu" z limitem czasu. Reklamy display na stronach edytorialnych pokrywają koszt serwera.' },
        { q: 'Jaki jest maksymalny rozmiar pliku?', a: '25 MB anonimowo, 60 MB z darmowym kontem. WEBM jest wydajny, 25 MB zwykle reprezentuje 20-40 minut audio.' },
        { q: 'Mogę konwertować wideo WEBM na MP3?', a: 'Tak. Usuwamy strumień wideo i wypuszczamy tylko audio. MP3 jest tego samego rozmiaru, niezależnie od tego, czy źródło było wideo czy tylko audio WEBM.' },
        { q: 'Czy MP3 brzmi gorzej niż WEBM?', a: 'Teoretycznie, lekko. Opus przy tym samym bitrate jest lepszy niż MP3. Przy 128 kbps różnica jest niesłyszalna dla prawie wszystkich słuchaczy na prawie każdym materiale.' },
        { q: 'Ile trwa?', a: 'Sekundy. Plik WEBM 25 MB konwertuje się w 3-10 sekund. Wąskim gardłem jest prędkość uploadu.' },
        { q: 'Jakich ustawień MP3 używacie?', a: '128 kbps stały bitrate, 44.1 kHz, zachowuje układ kanałów źródła (mono in → mono out, stereo in → stereo out).' },
        { q: 'Trzymacie moje pliki?', a: 'Nie. Upload jest kasowany po konwersji. Wyjście jest czyszczone w ciągu godziny. Zapisz lokalnie.' },
        { q: 'Mój WEBM z Loom padł. Dlaczego?', a: 'Niektóre pobrania z Loom używają fragmentowanego MP4 wewnątrz kontenera WEBM lub mają niestandardowe nagłówki. Spróbuj otworzyć w VLC, wyeksportować ponownie i spróbować jeszcze raz. Albo pobierz z Loom jako MP4 bezpośrednio, jeśli opcja jest dostępna.' },
        { q: 'Działa dla plików Opus konkretnie?', a: 'Jeśli twój plik kończy się na .opus zamiast .webm, zmień nazwę najpierw na .webm. Kontener jest funkcjonalnie taki sam, a ffmpeg czyta je identycznie.' },
        { q: 'Mogę pobierać filmy YouTube tym?', a: 'Nie. Nie pobieramy URL-i. Użyj aplikacji downloader (4K Video Downloader, yt-dlp, ClipGrab), żeby zapisać WEBM lokalnie najpierw, potem upuść tutaj.' },
        { q: 'Czy iPhone lub iTunes odtworzą wyjście?', a: 'Tak. MP3 odtwarza wszędzie, w tym wszystkich urządzeniach i oprogramowaniu Apple.' },
        { q: 'Dlaczego konwertować zamiast po prostu trzymać WEBM?', a: 'WEBM jest ok na Chrome i Firefox, ale iOS, wiele radia samochodowych, starsze głośniki Bluetooth i wiele profesjonalnego oprogramowania audio go nie obsługuje. MP3 jest uniwersalny.' },
      ]}
      relatedLinks={[
        { href: '/pl/mp4-to-mp3', label: 'MP4 na MP3', desc: 'Ten sam pomysł, źródło MP4 zamiast WEBM.' },
        { href: '/pl/wav-to-mp3', label: 'WAV na MP3', desc: 'Bezstratny WAV w dół do przenośnego MP3.' },
        { href: '/pl/webm-to-text', label: 'WEBM na tekst', desc: 'Pomiń MP3, idź prosto do transkrypcji.' },
        { href: '/pl/how-to-compress-audio', label: 'Skompresuj audio', desc: 'Jeśli MP3 nadal jest za duży, żeby udostępnić.' },
      ]}
    />
  )
}
