import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3 na tekst — darmowa transkrypcja MP3 z AI | Mictoo',
  description:
    'Darmowy konwerter MP3 na tekst. Prześlij dowolny MP3 i otrzymaj transkrypcję AI w kilka sekund. Działa z podcastami, wywiadami, wykładami. Ponad 50 języków, bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/transcribe-mp3-to-text', languages: LANGS },

  openGraph: {
    title: "MP3 na tekst — darmowa transkrypcja MP3 z AI | Mictoo",
    description: "Darmowy konwerter MP3 na tekst. Prześlij dowolny MP3 i otrzymaj transkrypcję AI w kilka sekund. Działa z podcastami, wywiadami, wykładami. Ponad 50 języków, bez rejestracji.",
    url: "https://mictoo.com/pl/transcribe-mp3-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP3 na tekst — darmowa transkrypcja MP3 z AI | Mictoo",
    description: "Darmowy konwerter MP3 na tekst. Prześlij dowolny MP3 i otrzymaj transkrypcję AI w kilka sekund. Działa z podcastami, wywiadami, wykładami. Ponad 50 języków, bez rejestracji.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlMp3ToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="MP3 · ZA DARMO · BEZ REJESTRACJI"
      h1={<>MP3 na tekst<br /><span className="text-brand-600">Darmowa transkrypcja MP3</span></>}
      subtitle="Darmowa transkrypcja AI dla dowolnego MP3. Upuść plik, otrzymaj tekst w kilka sekund. Bez konta, bez opłaty za minutę, bez emaila."
      howItWorks={[
        { icon: '📂', title: 'Upuść MP3', desc: 'Działa dowolny MP3. Pobranie podcastu, eksport notatki głosowej, rip audio, pliki głosu generowanego przez AI. Przeciągnij lub kliknij, aby wybrać.' },
        { icon: '⚡', title: 'AI transkrybuje', desc: 'Whisper large-v3 czyta MP3 i konwertuje mowę na tekst. Typowy podcast 30-minutowy kończy się w około minutę. Notatka głosowa 5-minutowa w około 15 sekund.' },
        { icon: '📋', title: 'Kopiuj, pobierz lub edytuj', desc: 'Przeczytaj w przeglądarce, skopiuj do schowka lub pobierz jako TXT lub SRT. Popraw błędne słowa inline przed eksportem.' },
      ]}
      whyUse={{ title: 'Dlaczego Mictoo dla MP3', bullets: [
        { title: 'Whisper large-v3, nie okrojony model dla tier free', desc: 'Nie uruchamiamy mniejszego modelu "dla użytkowników free" i większego dla płacących. Ten sam model, ta sama dokładność, każdy plik.' },
        { title: 'Specyfika MP3 dobrze obsłużona', desc: 'MP3 jest stratny, a niektóre narzędzia krztuszą się na bardzo skompresowanych plikach (32 kbps, mono, niski sample rate). Whisper radzi sobie bez narzekania. Widzieliśmy czytelne transkrypcje z MP3 rozmów telefonicznych przy 24 kbps.' },
        { title: 'Bez konwersji pliku', desc: 'Niektóre narzędzia "MP3 na tekst" chcą pod spodem WAV i rekodują twój MP3 wcześniej. My wysyłamy MP3 bezpośrednio do modelu. Szybciej, bez straty drugiego kodowania.' },
        { title: 'Bez licznika minut', desc: 'Niektórzy konkurenci dają 60 minut darmowych miesięcznie, potem liczą 25 centów za minutę. My finansujemy się reklamami, bez limitu minut. Transkrybuj jeden plik lub sto.' },
        { title: 'Prywatność domyślnie', desc: 'MP3 trafia do dostawcy mowy, jest transkrybowane i odrzucane. Nigdy nie zapisujemy twojego audio na dysku po naszej stronie.' },
      ]}}
      useCases={{ title: 'Do czego ludzie używają "MP3 na tekst"', items: [
        { title: 'Odcinki podcastów', desc: 'Przeciągnij MP3 z hostingu podcastów (Anchor, Buzzsprout, Transistor) i dostań tekst do show notes, ponownego użycia w blogu lub dostępności.' },
        { title: 'Nagrania rozmów', desc: 'MP3 to standardowy eksport większości aplikacji do nagrywania rozmów. Transkrybuj, aby szybko przeskanować długą rozmowę i znaleźć część, która się liczy.' },
        { title: 'Notatki głosowe eksportowane z telefonu', desc: 'Notatki Głosowe iPhone są M4A domyślnie, ale jeśli wysłałeś jedną przez AirDrop jako MP3 lub używasz aplikacji Android, która zapisuje w MP3, to jest narzędzie.' },
        { title: 'Wycinki z audiobooków lub ripy wykładów', desc: 'Do nauki posiadanie tekstu obok audio podwaja zapamiętywanie. Tylko trzymaj się właściwej strony prawa autorskiego.' },
        { title: 'Głosy AI i wyjścia TTS', desc: 'Jeśli wygenerowałeś głos przez ElevenLabs, OpenAI TTS, Murf lub inne narzędzie syntezy, możesz chcieć czystą transkrypcję z powrotem do pracy nad napisami lub wyrównaniem.' },
      ]}}
      proTips={{ title: 'Wskazówki do transkrypcji MP3', tips: [
        { title: 'Stały bitrate lepszy niż zmienny dla Whispera', desc: 'MP3 VBR (zmienny bitrate) może mylić niektóre dekodery audio w skrajnych przypadkach. Jeśli kontrolujesz eksport, wybierz CBR 64 lub 96 kbps mono. Mniej pracy dla modelu.' },
        { title: '64 kbps mono to słodki punkt dla głosu w MP3', desc: 'Wyższy bitrate to marnowanie dla mowy. Odcinek 60-minutowy w 64 kbps mono to około 28 MB. Mieści się w tier free 25 MB lub komfortowo w tier 60 MB z loginem.' },
        { title: 'Jeśli MP3 jest ogromny (powyżej 60 MB), przekoduj przed podziałem', desc: 'Podział i potem transkrypcja dwóch plików to więcej pracy niż jedno przekodowanie do niższego bitrate. ffmpeg: ffmpeg -i big.mp3 -ac 1 -b:a 64k small.mp3. Oryginał 200 MB schodzi do 25-40 MB.' },
        { title: 'Usuń metadane ID3, jeśli plik jest na granicy', desc: 'Tagi ID3 (okładka, tekst itp.) mogą dodać kilka MB do MP3. Jeśli jesteś 1-2 MB powyżej limitu, usunięcie tagów przez ffmpeg -i in.mp3 -map_metadata -1 -c:a copy out.mp3 może wystarczyć.' },
        { title: 'Złe kodowanie MP3 ze starych konwerterów powoduje przerwy ciszy', desc: 'Jeśli transkrypcja pomija fragmenty, MP3 może mieć rzeczywiste przerwy ciszy z błędnego enkodera. Przekoduj ze źródła, jeśli masz, lub użyj Find Silence Audacity, aby potwierdzić.' },
        { title: 'Dla MP3 rozmów telefonicznych (8 kHz mono) oczekuj nieco niższej dokładności', desc: 'Audio telefoniczne traci wysokie częstotliwości, co kosztuje kilka punktów dokładności. Pozostaje czytelne, po prostu zaplanuj więcej oczyszczania nazw i liczb.' },
      ]}}
      faq={[
        { q: 'Czy MP3 to najlepszy format do transkrypcji?', a: 'Dla większości użytkowników tak. MP3 jest mały, wspierany wszędzie, a dokładność z Whisper jest praktycznie identyczna jak WAV lub FLAC. Używaj lossless (WAV, FLAC) tylko jeśli potrzebujesz audio także do edycji.' },
        { q: 'Jakie bitrate MP3 działają najlepiej?', a: 'Każdy od 32 kbps mono do 320 kbps stereo. Dla głosu 64-96 kbps mono to praktyczny słodki punkt. Wyższy nie poprawia transkrypcji, niższy zaczyna tracić zrozumiałość dla modelu.' },
        { q: 'Mój MP3 przekracza 60 MB. Co teraz?', a: 'Dwie opcje. Przekoduj do niższego bitrate (64 kbps mono dzieli większość MP3 przez 4 lub więcej), albo podziel plik na kawałki poniżej 60 MB. Mamy przewodniki dla obu.' },
        { q: 'Jak długo trwa transkrypcja MP3?', a: 'Około 1-2% długości audio. MP3 60-minutowe kończy się w około 60 sekund. 10-minutowe w 10-20 sekund. Upload sieciowy to zwykle dłuższe czekanie.' },
        { q: 'Czy mój MP3 będzie zapisany lub udostępniony?', a: 'Nie. Plik idzie do naszego dostawcy mowy (Groq, z OpenAI jako backup), jest transkrybowany, potem odrzucany. Nie zapisujemy na naszych serwerach, a dostawcy, których używamy, nie trenują na danych API.' },
        { q: 'Czy mogę wgrywać wiele MP3 wsadowo?', a: 'Jeszcze nie jednym kliknięciem. Na razie transkrybujesz jeden plik na raz. Upload wsadowy jest w roadmapie dla płatnego planu Pro.' },
        { q: 'Jakie języki obsługujecie?', a: 'Ponad 50 języków. Automatyczne wykrywanie obsługuje większość przypadków. Dla plików poniżej 5 minut lub plików zaczynających się muzyką czy ciszą wybierz język ręcznie.' },
        { q: 'Czy mogę dostać timecode z MP3?', a: 'Tak. Pobierz jako SRT (plik napisów) i dostań timecode co kilka sekund. Lub użyj naszej strony Transkrypcja ze znacznikami czasu dla granularności na słowo.' },
        { q: 'Czy Mictoo działa z MP3 podcastów z markerami rozdziałów?', a: 'Wyciągamy audio i ignorujemy metadane rozdziałów. Dostajesz pełną transkrypcję jako jeden dokument. Jeśli chcesz transkrypcje wyrównane do rozdziałów, podziel MP3 na granicach rozdziałów wcześniej.' },
        { q: 'Czy transkrypcja mojego MP3 będzie miała etykiety mówców?', a: 'Nie automatycznie. Whisper nie robi domyślnie diaryzacji. Jeśli potrzebujesz etykiet, wgraj ścieżkę każdego mówcy osobno (jeśli je masz) i sam etykietuj.' },
        { q: 'Czy mogę transkrybować MP3 z głosu generowanego przez AI?', a: 'Tak. Audio TTS (ElevenLabs, OpenAI, Murf itp.) zwykle transkrybuje czyściej niż głos ludzki, bo nie ma szumu tła ani wahania.' },
        { q: 'Mój MP3 jest w rzadkim języku. Czy zadziała?', a: 'Jeśli Whisper wspiera język, tak. Model pokrywa ponad 50 języków z dobrą dokładnością i podstawowym wsparciem dla wielu innych. Spróbuj. Jeśli wynik jest nieużywalny, język prawdopodobnie jest poza danymi treningowymi.' },
      ]}
      relatedLinks={[
        { href: '/pl/transcribe-audio-to-text', label: 'Audio na tekst', desc: 'Dla formatów innych niż MP3 (WAV, M4A, FLAC, OGG).' },
        { href: '/pl/podcast-transcription', label: 'Transkrypcja podcastu', desc: 'Ten sam silnik, wskazówki specyficzne dla podcastów.' },
        { href: '/pl/free-srt-generator', label: 'Generator SRT', desc: 'Kiedy potrzebujesz napisów do wideo, nie tylko tekstu.' },
        { href: '/pl/how-to-compress-audio', label: 'Jak skompresować audio', desc: 'Kiedy MP3 jest za duży.' },
      ]}
    />
  )
}
