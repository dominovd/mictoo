import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLAC na MP3 — darmowy konwerter online | Mictoo',
  description:
    'Konwertuj FLAC na MP3 online za darmo. Zmniejsz bezstratny FLAC do MP3 128 kbps w kilka sekund. Bez rejestracji, bez znaku wodnego. Do 25 MB.',
  alternates: { canonical: 'https://mictoo.com/pl/flac-to-mp3', languages: LANGS },
}

export default function PlFlacToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="FLAC → MP3 · Za darmo · Bez rejestracji"
      h1={<>FLAC na MP3<br /><span className="text-brand-600">Darmowy konwerter online</span></>}
      subtitle="Upuść plik FLAC. Dostań przenośny MP3 jedną trzecią rozmiaru, odtwarza wszędzie. Bez znaku wodnego, bez emaila."
      tool={<ConverterZone from="flac" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Upuść FLAC', desc: 'Przeciągnij swój FLAC do okna. Pliki do 25 MB anonimowo, 60 MB z rejestracją.' },
        { icon: '⚡', title: 'ffmpeg ponownie koduje do MP3', desc: '128 kbps stały bitrate, 44.1 kHz, układ kanałów zachowany. Typowy FLAC 25 MB kończy się w 3-10 sekund.' },
        { icon: '⬇️', title: 'Pobierz MP3', desc: 'Wynik zachowuje oryginalną nazwę pliku z .mp3. Wymazane z naszych serwerów w ciągu godziny.' },
      ]}
      whyUse={{ title: 'Dlaczego konwertować FLAC na MP3', bullets: [
        { title: 'FLAC jest bezstratny, ale ogromny', desc: '5-minutowy FLAC przy typowych bitrate to 25-40 MB. To samo audio jako MP3 128 kbps to 5 MB. Dla telefonów, samochodów i Bluetooth ten rozmiar ma znaczenie.' },
        { title: 'Większość radia samochodowych i głośników Bluetooth nie odtwarza FLAC', desc: 'Nawet w 2026 fabryczny infotainment samochodu i wiele Bluetooth średniej klasy to MP3 albo nic. MP3 po prostu działa.' },
        { title: 'Przy 128 kbps strata jakości jest niesłyszalna dla prawie wszystkich', desc: 'Na słuchawkach konsumenckich, w samochodach, na głośnikach telefonu, nikt nie zauważy różnicy. Kompromis pokazuje się tylko na monitorach studyjnych z krytycznym odsłuchem.' },
        { title: 'iPody, stare odtwarzacze MP3, podstawowe aplikacje muzyczne, MP3 wygrywa', desc: 'Jeśli ładujesz muzykę na coś starszego niż niedawny iPhone, MP3 to bezpieczniejszy zakład. Obsługa FLAC na starym sprzęcie to loteria.' },
        { title: 'Bez znaku wodnego, bez upsellu', desc: 'Po prostu twoje audio ponownie zakodowane. Nic nie wklejamy.' },
      ]}}
      useCases={{ title: 'Kiedy konwertować FLAC na MP3', items: [
        { title: 'Pobranie z Bandcamp / Qobuz → biblioteka telefonu', desc: 'Bandcamp daje ci FLAC domyślnie dla płatnych pobrań. Konwertuj na MP3, żeby zmieścić kolekcję muzyczną na telefonie lub zsynchronizować z systemem samochodowym, który nie obsługuje FLAC.' },
        { title: 'Rip CD → przenośna biblioteka', desc: 'Jeśli zrobiłeś ripy CD do FLAC do archiwizacji, konwertuj każdy album na MP3 do codziennego słuchania, zachowaj FLAC-i jako master.' },
        { title: 'Eksport ze studia → dystrybucja', desc: 'Twój producent muzyczny może wysłać ci FLAC. Konwertuj na MP3 dla hostów podcastów, odtwarzaczy webowych lub po prostu, żeby wysłać emailem surowy miks współpracownikowi.' },
        { title: 'Nagrania terenowe → szybkie udostępnienie', desc: 'Rejestratory terenowe jak Tascam DR-40X lub Zoom F3 mogą nagrywać w FLAC. Konwertuj przed udostępnieniem producentowi lub edytorowi dźwięku pracującemu w MP3.' },
        { title: 'Czyszczenie biblioteki', desc: 'Czyszczenie starego dysku z FLAC-ów, zachowaj oryginały na NAS-ie, konwertuj na MP3 do aktywnego użytku.' },
      ]}}
      proTips={{ title: 'Wskazówki do czystej konwersji FLAC na MP3', tips: [
        { title: 'FLAC jest bezstratny, więc pierwsze kodowanie jest ok', desc: 'Nie ma kary jakości za przejście FLAC → MP3 raz. Zaczynasz słyszeć artefakty dopiero, kiedy ponownie kodujesz MP3 znów lub kiedy idziesz MP3 → inne formaty stratne.' },
        { title: 'Dla użytku audiofilskiego trzymaj FLAC', desc: 'Jeśli słuchasz na słuchawkach z górnej półki, na dedykowanym DAC-u lub robisz krytyczny odsłuch, FLAC warto zachować. MP3 to dystrybucja i casual.' },
        { title: 'Tagi nie zawsze przechodzą', desc: 'Tagi FLAC (Vorbis comments) i tagi MP3 (ID3) to różne formaty. Nasz konwerter nie przenosi okładek i szczegółowych metadanych między nimi. Dodaj tagi sam w MusicBrainz Picard lub Mp3tag po konwersji.' },
        { title: 'FLAC 24-bit/96 kHz konwertuje się tak samo jak 16-bit/44.1', desc: 'MP3 maksymalnie idzie do 16-bit/48 kHz w praktyce. Dodatkowa głębia bitowa i sample rate w źródle nie przeżywają kodowania MP3, ale też niczego nie psują.' },
        { title: 'Do konwersji bezstratnej użyj ALAC zamiast tego', desc: 'Jeśli potrzebujesz bezstratnego, który odtwarza w iTunes/Apple Music, konwertuj FLAC na ALAC (Apple Lossless) zamiast tego, ta sama jakość audio, połowa rozmiaru FLAC w śladzie metadanych, odtwarza natywnie w ekosystemie Apple.' },
        { title: 'Dla wyższego bitrate MP3 wyeksportuj ponownie z Audacity', desc: 'Nasz konwerter wypuszcza 128 kbps. Dla 320 kbps otwórz MP3 w Audacity (darmowy) i wyeksportuj ponownie. Podwójne kodowanie jest ledwie słyszalne.' },
      ]}}
      faq={[
        { q: 'Czy konwersja FLAC na MP3 jest naprawdę darmowa?', a: 'Tak. Bez konta do 25 MB, bez znaku wodnego, bez limitu czasu. Reklamy display na stronach edytorialnych pokrywają koszt serwera.' },
        { q: 'Jaki jest maksymalny rozmiar pliku?', a: '25 MB anonimowo, 60 MB z darmowym kontem. Typowa 5-minutowa piosenka w FLAC to 30-40 MB, więc dla pełnych albumów może być potrzebne konwertowanie po jednym utworze.' },
        { q: 'Usłyszę różnicę jakości?', a: 'Na głośnikach telefonu, w samochodach, na tanich słuchawkach, nie. Na monitorach studyjnych z krytycznym odsłuchem, możliwe. Kompromis jest rozsądny dla wszystkiego oprócz masteringu i odsłuchu audiofilskiego.' },
        { q: 'Czy okładka i metadane przechodzą?', a: 'Częściowo. Podstawowe tagi (artysta, tytuł, album) zwykle przechodzą. Okładka i szczegółowe Vorbis comments często nie. Użyj MusicBrainz Picard lub Mp3tag po konwersji dla czystych tagów.' },
        { q: 'Jaką jakość MP3 wypuszczacie?', a: '128 kbps stały bitrate, 44.1 kHz, zachowuje układ kanałów źródła.' },
        { q: 'Ile trwa?', a: 'Sekundy. FLAC 25 MB konwertuje się w 3-10 sekund. Upload to wąskie gardło.' },
        { q: 'Trzymacie moje pliki?', a: 'Nie. Upload kasowany po konwersji. Wyjście czyszczone w ciągu godziny przez nasz cron sprzątający.' },
        { q: 'Mogę konwertować wsadowo cały album?', a: 'Jeszcze nie, darmowy plan to jeden plik na raz. Otwórz kilka zakładek przeglądarki jako obejście.' },
        { q: 'Mój FLAC 24-bit/96 kHz brzmi tak samo jak MP3?', a: 'Prawie na pewno, na konsumenckim odtwarzaniu. 24-bit i wysoki sample rate mają znaczenie dla przetwarzania i masteringu, nie dla słuchania przez łańcuchy audio klasy MP3.' },
        { q: 'Powinienem konwertować na ALAC zamiast tego?', a: 'Jeśli potrzebujesz bezstratnego audio w Apple Music lub iTunes, tak, ALAC to apple\'owy odpowiednik FLAC. Nie wypuszczamy ALAC, ale Audacity tak.' },
        { q: 'Mój FLAC jest z pobrania Hi-Res. Warto konwertować?', a: 'Do słuchania na telefonie lub w samochodzie MP3 będzie brzmiał identycznie. Zachowaj oryginał na jakiekolwiek przyszłe przetwarzanie.' },
        { q: 'Mogę dostać więcej niż 128 kbps?', a: 'Nie z tego konwertera. Ponownie zakoduj MP3 w Audacity z preferowanym bitrate.' },
      ]}
      relatedLinks={[
        { href: '/pl/wav-to-mp3', label: 'WAV na MP3', desc: 'Konwertuj bezstratny WAV na MP3.' },
        { href: '/pl/mp3-to-wav', label: 'MP3 na WAV', desc: 'Odwrotny kierunek, MP3 rozszerzony do nieskompresowanego WAV.' },
        { href: '/pl/flac-to-text', label: 'FLAC na tekst', desc: 'Transkrybuj audio FLAC bezpośrednio na tekst.' },
        { href: '/pl/how-to-compress-audio', label: 'Skompresuj audio', desc: 'Kiedy MP3 nadal musi być mniejszy.' },
      ]}
    />
  )
}
