import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-m4a',
  'fr': 'https://mictoo.com/fr/mp3-to-m4a',
  'de': 'https://mictoo.com/de/mp3-to-m4a',
  'es': 'https://mictoo.com/es/mp3-to-m4a',
  'ru': 'https://mictoo.com/ru/mp3-to-m4a',
  'it': 'https://mictoo.com/it/mp3-to-m4a',
  'pt': 'https://mictoo.com/pt/mp3-to-m4a',
  'pl': 'https://mictoo.com/pl/mp3-to-m4a',
  'ja': 'https://mictoo.com/ja/mp3-to-m4a',
  'ko': 'https://mictoo.com/ko/mp3-to-m4a',
  'x-default': 'https://mictoo.com/mp3-to-m4a',
}

export const metadata = {
  title: 'MP3 na M4A — darmowy konwerter online | Mictoo',
  description:
    'Konwertuj MP3 na M4A online za darmo. Ponownie zakoduj MP3 na AAC wewnątrz kontenera M4A dla iPhone, iTunes i ekosystemu Apple. Bez rejestracji, bez znaku wodnego.',
  alternates: { canonical: 'https://mictoo.com/pl/mp3-to-m4a', languages: LANGS },
}

export default function PlMp3ToM4aPage() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="MP3 → M4A · Za darmo · Bez rejestracji"
      h1={<>MP3 na M4A<br /><span className="text-brand-600">Darmowy konwerter online</span></>}
      subtitle="Upuść MP3. Dostań M4A, audio AAC wewnątrz kontenera MP4. Odtwarza natywnie w iTunes, Apple Music i na każdym iPhonie. Bez znaku wodnego, bez emaila."
      tool={<ConverterZone from="mp3" to="m4a" />}
      howItWorks={[
        { icon: '📂', title: 'Upuść MP3', desc: 'Przeciągnij dowolny MP3 do okna. Do 25 MB anonimowo, 60 MB po rejestracji.' },
        { icon: '⚡', title: 'ffmpeg ponownie koduje do AAC', desc: 'AAC 128 kbps wewnątrz kontenera M4A, z flagą faststart, więc odtwarza natychmiast podczas streamingu. Kończy się w 3-10 sekund.' },
        { icon: '⬇️', title: 'Pobierz M4A', desc: 'Wynik ma oryginalną nazwę z .m4a. Pliki są wymazywane z naszych serwerów w ciągu godziny.' },
      ]}
      whyUse={{ title: 'Dlaczego konwertować MP3 na M4A', bullets: [
        { title: 'Ekosystem Apple woli M4A', desc: 'iTunes, Apple Music, iCloud Music Library, GarageBand, wszystkie obsługują M4A jako format pierwszej klasy. MP3 też działa, ale M4A to język, którym mówią natywnie.' },
        { title: 'AAC brzmi nieco lepiej niż MP3 przy tym samym bitrate', desc: 'Przy 128 kbps różnica jest mała, ale realna, zwłaszcza w wysokich częstotliwościach. Jeśli twoje źródło MP3 jest już stratne, to ponowne kodowanie nie czyni go gorszym.' },
        { title: 'M4A obsługuje znaczniki rozdziałów i bogatsze metadane', desc: 'Jeśli robisz audiobooki, pliki podglądu podcastu lub cokolwiek dla ekosystemu Apple, M4A obsługuje rozdziały czysto. Obsługa rozdziałów MP3 jest nierówna.' },
        { title: 'Dzwonki iPhone muszą być M4A', desc: 'Niestandardowe dzwonki iPhone używają rozszerzenia M4R, tego samego formatu AAC-w-MP4 co M4A. Konwertuj i zmień nazwę na .m4r do użytku jako dzwonek.' },
        { title: 'Bez znaku wodnego, bez upsellu', desc: 'Twoje audio ponownie zakodowane, nic więcej.' },
      ]}}
      useCases={{ title: 'Kiedy konwertować MP3 na M4A', items: [
        { title: 'Import kolekcji muzycznej do Apple Music', desc: 'M4A importuje się czysto i integruje z iCloud Music Library. MP3-y mogą okazjonalnie mieć problemy z metadanymi podczas synchronizacji.' },
        { title: 'Robienie dzwonka iPhone', desc: 'Konwertuj MP3 → M4A, przytnij poniżej 40 sekund, zmień nazwę na .m4r, upuść w Finderze, kiedy iPhone jest podłączony.' },
        { title: 'Audiobook ze znacznikami rozdziałów', desc: 'M4A obsługuje rozdziały; obsługa MP3 jest niewiarygodna. Dla długich audiobooków, gdzie słuchacze chcą skakać między rozdziałami, M4A to właściwy format.' },
        { title: 'Czyszczenie notatek głosowych do iCloud', desc: 'Jeśli masz folder notatek głosowych MP3 i chcesz je w iCloud lub Apple Voice Memos, M4A jest bardziej natywny i synchronizuje się bardziej niezawodnie.' },
        { title: 'Projekt GarageBand lub Logic', desc: 'Przy imporcie audio referencyjnego do oprogramowania muzycznego Apple M4A wchodzi gładziej niż MP3 w niektórych workflow.' },
      ]}}
      proTips={{ title: 'Wskazówki do konwersji MP3 na M4A', tips: [
        { title: 'Ponowne kodowanie dodaje małą ilość straty', desc: 'Idziesz z jednego formatu stratnego do innego. Przy 128 kbps AAC z MP3 128 kbps strata jest realna, ale niesłyszalna dla prawie wszystkich na prawie wszystkim. Do krytycznego użytku znajdź bezstratne źródło.' },
        { title: 'Dla dzwonków przytnij przed konwersją', desc: 'Dzwonki iPhone są limitowane do 40 sekund. Przytnij MP3 w Audacity lub QuickTime najpierw, potem konwertuj.' },
        { title: 'AAC przy 96 kbps zwykle bije MP3 przy 128 kbps', desc: 'Nasz konwerter wypuszcza 128 kbps dla kompatybilności, ale jeśli masz pełną kontrolę, mógłbyś iść niżej z AAC i wciąż dorównać jakości MP3. Nie oferujemy selektora, żeby utrzymać narzędzie proste.' },
        { title: 'M4A vs MP4, ten sam kontener, inna konwencja', desc: 'Pliki M4A zawierają tylko audio. Pliki MP4 mogą zawierać wideo, audio lub oba. iTunes używa rozszerzenia .m4a, żeby rozróżnienie było oczywiste. Niektóre odtwarzacze akceptują dowolne rozszerzenie.' },
        { title: 'Znaczniki rozdziałów nie są dodawane przez nas', desc: 'Po prostu ponownie kodujemy audio. Żeby dodać znaczniki rozdziałów, użyj Apple Books dla audiobooków lub dedykowanego narzędzia jak Chapter and Verse.' },
        { title: 'Dla MP3 chronionych DRM konwersja zawiedzie', desc: 'DRM jest niezwykle rzadkie dla MP3 w 2026, ale jeśli jakoś masz, się nie zdekoduje.' },
      ]}}
      faq={[
        { q: 'Czy konwersja MP3 na M4A jest naprawdę darmowa?', a: 'Tak. Bez konta do 25 MB, bez znaku wodnego, bez limitu czasu.' },
        { q: 'Jaki jest maksymalny rozmiar pliku?', a: '25 MB anonimowo, 60 MB z darmowym kontem.' },
        { q: 'Czy M4A będzie brzmiał gorzej niż MP3?', a: 'Teoretycznie tak, ponowne kodowanie dowolnego formatu stratnego dodaje małą stratę. Praktycznie, przy 128 kbps AAC z MP3 128 kbps, żaden człowiek nie usłyszy różnicy na konsumenckim odtwarzaniu.' },
        { q: 'Jaka jest różnica między M4A a MP4?', a: 'M4A i MP4 to ten sam format kontenera. Rozszerzenie .m4a po prostu sygnalizuje "tylko audio", żeby iTunes wiedział, co z tym zrobić. Niektóre odtwarzacze akceptują dowolne rozszerzenie.' },
        { q: 'Ile trwa?', a: 'Sekundy. MP3 25 MB konwertuje się w 3-10 sekund.' },
        { q: 'Jaką jakość wypuszczacie?', a: 'AAC 128 kbps wewnątrz kontenera M4A, 44.1 kHz, układ kanałów źródła zachowany.' },
        { q: 'Trzymacie moje pliki?', a: 'Nie. Upload kasowany po konwersji. Wyjście czyszczone w ciągu godziny.' },
        { q: 'Mogę zrobić dzwonek iPhone tym?', a: 'Pośrednio. Konwertuj MP3 na M4A, przytnij poniżej 40 sekund w QuickTime, zmień nazwę .m4a na .m4r, upuść w Finderze z podłączonym iPhonem.' },
        { q: 'Czy iTunes zaakceptuje wynik?', a: 'Tak. M4A to natywny format iTunes.' },
        { q: 'Mój MP3 jest już 320 kbps. Powinienem konwertować?', a: 'Tylko jeśli konkretnie potrzebujesz M4A dla kompatybilności. Wynik będzie AAC 128 kbps, technicznie spadek jakości z MP3 320 kbps, ale praktycznie niesłyszalny na większości odtwarzania. Żeby zachować jakość 320 kbps, potrzebowałbyś innego konwertera, który pozwala ustawić wyższe bitrate.' },
        { q: 'Czy tagi przechodzą?', a: 'Podstawowe tagi (tytuł, artysta, album) zwykle tak. Okładka i szczegółowe komentarze są chwiejne między ID3 MP3 a metadanymi iTunes M4A. Ponownie otaguj w iTunes lub Mp3tag po konwersji.' },
        { q: 'Mogę konwertować wsadowo?', a: 'Jeszcze nie w darmowym planie. Otwórz kilka zakładek przeglądarki, żeby konwertować kilka plików równolegle.' },
      ]}
      relatedLinks={[
        { href: '/pl/m4a-to-mp3', label: 'M4A na MP3', desc: 'Odwrotny kierunek.' },
        { href: '/pl/wav-to-mp3', label: 'WAV na MP3', desc: 'Zmniejsz WAV do przenośnego MP3.' },
        { href: '/pl/m4a-to-text', label: 'M4A na tekst', desc: 'Transkrybuj audio M4A bezpośrednio.' },
        { href: '/pl/how-to-compress-audio', label: 'Skompresuj audio', desc: 'Dla plików, które muszą być jeszcze mniejsze.' },
      ]}
    />
  )
}
