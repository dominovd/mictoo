import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp4-to-mp3',
  'fr': 'https://mictoo.com/fr/mp4-to-mp3',
  'de': 'https://mictoo.com/de/mp4-to-mp3',
  'es': 'https://mictoo.com/es/mp4-to-mp3',
  'ru': 'https://mictoo.com/ru/mp4-to-mp3',
  'it': 'https://mictoo.com/it/mp4-to-mp3',
  'pt': 'https://mictoo.com/pt/mp4-to-mp3',
  'pl': 'https://mictoo.com/pl/mp4-to-mp3',
  'ja': 'https://mictoo.com/ja/mp4-to-mp3',
  'ko': 'https://mictoo.com/ko/mp4-to-mp3',
  'x-default': 'https://mictoo.com/mp4-to-mp3',
}

export const metadata = {
  title: 'MP4 na MP3 — darmowy konwerter online | Mictoo',
  description:
    'Konwertuj MP4 na MP3 online za darmo. Upuść swój film, dostań czysty plik audio MP3 128 kbps w kilka sekund. Bez rejestracji, bez znaku wodnego, bez emaila. Do 25 MB.',
  alternates: { canonical: 'https://mictoo.com/pl/mp4-to-mp3', languages: LANGS },

  openGraph: {
    title: "MP4 na MP3 — darmowy konwerter online | Mictoo",
    description: "Konwertuj MP4 na MP3 online za darmo. Upuść swój film, dostań czysty plik audio MP3 128 kbps w kilka sekund. Bez rejestracji, bez znaku wodnego, bez emaila. Do 25 MB.",
    url: "https://mictoo.com/pl/mp4-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP4 na MP3 — darmowy konwerter online | Mictoo",
    description: "Konwertuj MP4 na MP3 online za darmo. Upuść swój film, dostań czysty plik audio MP3 128 kbps w kilka sekund. Bez rejestracji, bez znaku wodnego, bez emaila. Do 25 MB.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlMp4ToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="MP4 → MP3 · Za darmo · Bez rejestracji"
      h1={<>MP4 na MP3<br /><span className="text-brand-600">Darmowy konwerter online</span></>}
      subtitle="Upuść plik wideo MP4. Dostań plik audio MP3. Bez znaku wodnego, bez emaila, bez poczekalni. ffmpeg po stronie serwera, gotowe w kilka sekund."
      tool={<ConverterZone from="mp4" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Upuść MP4', desc: 'Przeciągnij dowolne wideo MP4 do okna lub kliknij, żeby wybrać. Pliki do 25 MB przechodzą anonimowo. Zaloguj się, jeśli potrzebujesz 60 MB.' },
        { icon: '⚡', title: 'Wyciągamy audio', desc: 'ffmpeg działa po stronie serwera, usuwa strumień wideo i ponownie koduje audio jako stereo MP3 128 kbps przy 44.1 kHz. Wideo 25 MB zwykle kończy się w 5-15 sekund.' },
        { icon: '⬇️', title: 'Pobierz MP3', desc: 'Przycisk pobierania daje ci plik z oryginalną nazwą plus rozszerzeniem .mp3. Twoje przesłanie i wynik są kasowane z naszych serwerów w ciągu godziny.' },
      ]}
      whyUse={{ title: 'Dlaczego Mictoo do MP4 na MP3', bullets: [
        { title: 'Tylko konwersja. Nic więcej', desc: 'Bez popupów, bez odliczania, bez fałszywego "darmowego" planu, który ciągle prosi cię o płacenie. Upuść, konwertuj, pobierz.' },
        { title: 'MP3 128 kbps, lekki i uniwersalny', desc: 'Ten bitrate to praktyczny złoty środek dla mowy: ~1 MB na minutę, odtwarza wszędzie, brzmi czysto. Nie oferujemy wyboru jakości, bo wybory dodają tarcia bez wnoszenia wartości dla typowego użycia.' },
        { title: 'Pliki nigdy nie zostają na naszych serwerach', desc: 'Twój MP4 ląduje na Vercel Blob storage, jest konwertowany i usuwany od razu. Sam MP3 jest czyszczony naszym godzinnym przelotem. Trzymaj kopię lokalnie.' },
        { title: 'Bez znaku wodnego, bez tagu audio', desc: 'Wiele darmowych konwerterów wkleja własne intro "Converted by FreeMP3.com". My nie ruszamy audio poza ponownym kodowaniem.' },
        { title: 'Większość innych darmowych konwerterów to opakowanie sieci reklamowej', desc: 'Wiele stron, które znajdziesz w Google na "mp4 to mp3", to bramki AdSense, które przejmują przycisk wstecz lub uruchamiają fałszywe ostrzeżenia o wirusach. Jesteśmy niezależnym projektem SEO finansowanym przez reklamy display na stronach edytorialnych, nie w przepływie konwersji.' },
      ]}}
      useCases={{ title: 'Kiedy konwertować MP4 na MP3', items: [
        { title: 'Zapisz podcast, który masz jako wideo', desc: 'Wiele feedów podcastów publikuje też jako upload na YouTube lub MP4 Vimeo. Jeśli masz tylko kopię wideo, MP3 robi ją przyjazną telefonowi i dziesięć razy mniejszą.' },
        { title: 'Wyciągnij muzykę lub audio z nagrania wykładu', desc: 'Zoom i Teams eksportują MP4. Potrzebujesz tylko audio, jeśli chcesz słuchać w drodze, transkrybować lub wrzucić do oprogramowania edycyjnego.' },
        { title: 'Zmniejsz wideo 1 GB, żeby wysłać emailem', desc: '1-godzinne wideo w 1080p może łatwo trafić w 1 GB. Audio z tego samego nagrania to 30-60 MB w pełnej jakości, często poniżej 30 MB przy 128 kbps. Nagle wysyłalne.' },
        { title: 'Wrzuć do transkrypcji, która oczekuje audio', desc: 'Nasze własne narzędzie transkrypcji akceptuje MP4 bezpośrednio, ale narzędzia firm trzecich, edytory audio i DAW zwykle chcą czystego audio. MP3 to format wspólnego mianownika.' },
        { title: 'Muzyka w tle do screencastu lub pokazu slajdów', desc: 'Wiele MP4 z tutoriali YouTube zawiera muzykę lub narrację, którą możesz chcieć jako samodzielny klip. Konwertuj i wrzuć do iMovie, Audacity lub Logic.' },
      ]}}
      proTips={{ title: 'Wskazówki do czystej konwersji MP4 na MP3', tips: [
        { title: 'Jeśli MP4 jest ogromny, najpierw go przytnij', desc: 'Nasz limit to 25 MB bez rejestracji, 60 MB z. Wideo 1080p znacznie powyżej dziesięciu minut się nie zmieści. Otwórz w QuickTime (Mac) lub aplikacji Zdjęcia (Windows), przytnij do potrzebnej części i wyeksportuj ponownie.' },
        { title: '128 kbps to za dużo dla głosu, idealne dla muzyki', desc: 'Dla mowy MP3 64 kbps byłby o połowę mniejszy bez słyszalnej straty. Standardyzujemy na 128 kbps, bo większość ludzi nie jest pewna, co jest w wideo, a 128 brzmi czysto dla obu.' },
        { title: 'Jeśli wideo źródłowe ma wiele ścieżek audio, odtwarzana jest tylko domyślna', desc: 'Filmy, ripy DVD i niektóre eksporty wykładów osadzają kilka ścieżek językowych. Nasz konwerter bierze ścieżkę domyślną. Jeśli potrzebujesz drugiej ścieżki, zmień domyślną w edytorze wideo i wyeksportuj MP4 ponownie przed przesłaniem.' },
        { title: 'Stare MP4 z kamer mogą się nie zdekodować', desc: 'AVCHD i inne MP4 z ery kamer czasami używają kodeków, których ffmpeg nie czyta bez dodatkowych bibliotek. Jeśli konwersja zawiedzie, otwórz plik w HandBrake (darmowy, wszystkie platformy), wyeksportuj jako standardowy MP4 H.264, potem spróbuj ponownie.' },
        { title: 'Potrzebujesz 320 kbps lub VBR? Użyj Audacity potem', desc: 'Nasz MP3 to stały bitrate 128 kbps. Jeśli potrzebujesz wyższego bitrate lub pliku VBR, weź MP3, otwórz w Audacity (też darmowy) i wyeksportuj ponownie ze swoimi preferowanymi ustawieniami. Strata jakości z ponownego kodowania przy wyższym bitrate jest pomijalna.' },
        { title: 'Dla chronionych treści (filmy iTunes, DRM) się nie uda', desc: 'MP4 chronione DRM nie mogą być odczytane przez ffmpeg. Nigdy nie odszyfrowujemy treści chronionych prawem autorskim. Jeśli plik pochodzi z serwisu streamingowego, prawdopodobnie nie masz prawa go konwertować.' },
      ]}}
      faq={[
        { q: 'Czy konwerter MP4 na MP3 jest naprawdę darmowy?', a: 'Tak. Bez konta dla plików do 25 MB, bez limitu czasu, bez znaku wodnego na wyjściu, bez sztuczki "pierwsza konwersja za darmo, potem upgrade". Pokrywamy koszty serwera reklamami display na stronach edytorialnych (nie w samym konwerterze).' },
        { q: 'Jaki jest maksymalny rozmiar pliku?', a: '25 MB bez konta, 60 MB jeśli się zalogujesz (za darmo). Budżet funkcji Vercela to prawdziwy limit. Tniemy poniżej, żeby trzymać konwersję poniżej 60 sekund dla wszystkich.' },
        { q: 'Ile trwa konwersja?', a: 'Dla typowego MP4 10-20 MB (kilka minut wideo) kończy się w 5-15 sekund. Wąskim gardłem jest twoja prędkość uploadu, nie konwersja, ffmpeg przeskakuje ponowne kodowanie audio znacznie szybciej niż czas rzeczywisty.' },
        { q: 'Jakiej jakości jest MP3?', a: '128 kbps stałego bitrate, 44.1 kHz, stereo. To uniwersalne ustawienie "wystarczająco dobre na wszystko": nieodróżnialne od oryginału dla większości uszu, głos i muzyka, ~1 MB na minutę audio.' },
        { q: 'Trzymacie moje pliki?', a: 'Nie. Twój upload mieszka na Vercel Blob storage tylko tak długo, żeby zostać przekonwertowanym, potem go kasujemy. Powstały MP3 jest czyszczony w ciągu godziny przez nasz cron sprzątający. Zapisz MP3 lokalnie, nie możemy go ponownie wysłać.' },
        { q: 'Czy wyjście będzie miało znak wodny lub tag audio?', a: 'Nie. Nie wklejamy intro "Converted by Mictoo" ani brandowanych outro. MP3 to po prostu oryginalne audio ponownie zakodowane.' },
        { q: 'Mogę konwertować filmy YouTube tym?', a: 'Możesz konwertować dowolny plik MP4, do którego masz prawa. Nie pobieramy filmów z YouTube, postawiłoby nas to po złej stronie warunków YouTube. Użyj narzędzia jak 4K Video Downloader lub yt-dlp, żeby zapisać MP4 lokalnie, potem upuść tutaj.' },
        { q: 'Dlaczego formaty są ograniczone tylko do MP4?', a: 'Każdy konwerter to jeden URL z jednym zadaniem. MP4 na MP3 mieszka na /mp4-to-mp3, WAV na MP3 na /wav-to-mp3 i tak dalej. Wybór właściwego mówi nam, czego się spodziewać, i daje Google czystą stronę do rankingu.' },
        { q: 'Mój MP4 padł z "kodek nieobsługiwany". Co teraz?', a: 'Starsze MP4 z kamer i niektóre pliki chronione DRM używają kodeków, których ffmpeg nie dekoduje od ręki. Otwórz plik w HandBrake (darmowy), wyeksportuj jako standardowy MP4 H.264 i spróbuj ponownie. Jeśli nadal pada, plik prawdopodobnie jest zablokowany DRM.' },
        { q: 'Działa na telefonie?', a: 'Tak. Strona jest mobile-friendly, a uploady działają z Safari iOS i Chrome Android. Na iPhonie może być potrzebne wcześniejsze udostępnienie wideo do Plików, żeby selektor plików mógł je dosięgnąć.' },
        { q: 'Czy MP3 są stratne? Mam się martwić?', a: 'Tak, MP3 jest stratny. Przy 128 kbps strata jest niesłyszalna dla prawie wszystkich słuchaczy na prawie każdym materiale źródłowym. Jeśli potrzebujesz bezstratnego, na przykład do masteringu muzycznego, konwertuj MP4 na WAV zamiast tego.' },
        { q: 'Dlaczego nie ma upload wsadowy?', a: 'Darmowy plan to jeden plik na raz. Wsad jest na roadmapie planu Pro, kiedy wystartuje. Na razie możesz uruchomić kilka konwersji równolegle w kilku zakładkach przeglądarki.' },
      ]}
      relatedLinks={[
        { href: '/pl/wav-to-mp3', label: 'WAV na MP3', desc: 'Zmniejsz pliki WAV bezstratne na kompaktowe MP3.' },
        { href: '/pl/webm-to-mp3', label: 'WEBM na MP3', desc: 'Wyciągnij MP3 z WEBM (często to, co dają ci downloadery YouTube).' },
        { href: '/pl/transcribe-video-to-text', label: 'Wideo na tekst', desc: 'Pomiń krok MP3, idź prosto do transkrypcji tekstowej wideo.' },
        { href: '/pl/how-to-compress-audio', label: 'Skompresuj audio', desc: 'Kiedy twój MP3 jest nadal za duży, żeby udostępnić.' },
      ]}
    />
  )
}
