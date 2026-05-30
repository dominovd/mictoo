import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-audio-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
  'de': 'https://mictoo.com/de/transcribe-audio-to-text',
  'es': 'https://mictoo.com/es/transcribe-audio-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
  'it': 'https://mictoo.com/it/transcribe-audio-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-audio-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-audio-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-audio-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-audio-to-text',
  'x-default': 'https://mictoo.com/transcribe-audio-to-text',
}

export const metadata = {
  title: 'Audio na tekst — darmowa transkrypcja online | Mictoo',
  description:
    'Darmowy konwerter audio na tekst. Prześlij dowolny plik (MP3, WAV, M4A, FLAC, OGG, AAC) i otrzymaj czystą transkrypcję w kilka sekund. Bez rejestracji, ponad 50 języków.',
  alternates: { canonical: 'https://mictoo.com/pl/transcribe-audio-to-text', languages: LANGS },

  openGraph: {
    title: "Audio na tekst — darmowa transkrypcja online | Mictoo",
    description: "Darmowy konwerter audio na tekst. Prześlij dowolny plik (MP3, WAV, M4A, FLAC, OGG, AAC) i otrzymaj czystą transkrypcję w kilka sekund. Bez rejestracji, ponad 50 języków.",
    url: "https://mictoo.com/pl/transcribe-audio-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio na tekst — darmowa transkrypcja online | Mictoo",
    description: "Darmowy konwerter audio na tekst. Prześlij dowolny plik (MP3, WAV, M4A, FLAC, OGG, AAC) i otrzymaj czystą transkrypcję w kilka sekund. Bez rejestracji, ponad 50 języków.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlAudioToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="MP3 · WAV · M4A · FLAC · ZA DARMO"
      h1={<>Audio na tekst<br /><span className="text-brand-600">Darmowa transkrypcja AI</span></>}
      subtitle="Darmowa transkrypcja AI dla dowolnego pliku audio. MP3, WAV, M4A, FLAC, OGG, AAC. Bez konta, bez opłaty za minutę."
      howItWorks={[
        { icon: '📂', title: 'Upuść audio', desc: 'Działa każdy popularny format. MP3 z telefonu, WAV z rejestratora terenowego, M4A z notatek głosowych iPhone, FLAC z eksportu podcastu. Przeciągnij plik lub kliknij, aby wybrać.' },
        { icon: '⚡', title: 'AI transkrybuje', desc: 'Używamy OpenAI Whisper large-v3. Plik 10-minutowy zajmuje około 20 sekund. Plik 30-minutowy mniej niż minutę.' },
        { icon: '📋', title: 'Kopiuj, pobierz lub edytuj', desc: 'Przeczytaj transkrypcję w przeglądarce. Pobierz jako TXT do notatek lub SRT, jeśli potrzebujesz znaczników czasu. Popraw błędnie rozpoznane słowa inline przed eksportem.' },
      ]}
      whyUse={{ title: 'Dlaczego Mictoo do audio na tekst', bullets: [
        { title: 'Jeden model, i to ten najlepszy', desc: 'Używamy Whisper large-v3 dla wszystkich. Bez sztuczki w stylu "wersja darmowa działa na słabszym modelu". Ten sam model, który napędza drogą transkrypcję enterprise, transkrybuje twój plik.' },
        { title: 'Szerokie wsparcie formatów', desc: 'MP3, WAV, M4A, FLAC, OGG, WEBM, AAC, plus formaty wideo z audio w środku (MP4, MOV). Bez tarcia typu "akceptujemy tylko MP3, najpierw konwertuj".' },
        { title: 'Ponad 50 języków, także pliki dwujęzyczne', desc: 'Automatyczne wykrywanie wybiera język z krótkiej próbki audio. Jeśli plik zmienia język w środku nagrania (typowe w wywiadach), Whisper podąża za zmianą.' },
        { title: 'Żaden plik nie jest zapisywany', desc: 'Twoje audio jest strumieniowane do dostawcy transkrypcji, przetwarzane i odrzucane. Nigdy nie zapisujemy pliku w naszej bazie ani storage. Dostawcy (Groq, OpenAI) nie trenują na danych API.' },
        { title: 'Za darmo bez gwiazdek', desc: 'Do 30 minut na plik bez konta. Po darmowej rejestracji do 60 minut na plik. Nic innego nie jest ograniczone.' },
      ]}}
      useCases={{ title: 'Kiedy audio na tekst naprawdę oszczędza czas', items: [
        { title: 'Notatki z wywiadu', desc: 'Spędziłeś godzinę rozmawiając ze źródłem. Zamiast szukać cytatu przewijając nagranie, robisz Ctrl+F w transkrypcji. Pięć sekund zamiast pięciu minut.' },
        { title: 'Porządkowanie notatek głosowych', desc: 'Podyktowałeś niedokończony pomysł w drodze do telefonu. Teraz chcesz go jako tekst. Upuść M4A, dostań zdania, wklej w Notion.' },
        { title: 'Powtórka wykładów i webinarów', desc: 'Dwugodzinny wykład na 2x to wyzwanie. Transkrypcja tekstowa pozwala przejrzeć sekcję po sekcji i zanurkować tylko w te części, które się liczą.' },
        { title: 'Przygotowanie tłumaczenia', desc: 'Whisper transkrybuje w języku źródłowym. Stamtąd wklejasz do DeepL lub ChatGPT i tłumaczysz czysto. Lepsze niż automatyczne tłumaczenie z surowego audio.' },
        { title: 'Wyszukiwanie w starym katalogu audio', desc: 'Lata nagrań rozmów, odcinków lub meetingów? Transkrypcja wsadowa nagle daje przeszukiwalne archiwum. Taniej niż jakiekolwiek "narzędzie AI do meetingów" z subskrypcją.' },
      ]}}
      proTips={{ title: 'Wskazówki do czystej transkrypcji audio', tips: [
        { title: 'Mono wystarczy. Stereo to marnowana przepustowość', desc: 'Mowa nie potrzebuje dwóch kanałów. Jeśli plik jest ogromny, przekoduj na mono i rozmiar spadnie o połowę bez utraty jakości transkrypcji. ffmpeg jednolinijka: ffmpeg -i input.wav -ac 1 output.wav.' },
        { title: 'MP3 64 kbps w zupełności wystarczy dla mowy', desc: 'Przy eksporcie z DAW lub edytora MP3 mono 64 kbps daje Whisperowi wszystko, czego potrzebuje. Wyższy bitrate nie poprawia dokładności, tylko powiększa plik.' },
        { title: 'Przytnij długą ciszę na początku i końcu', desc: 'Jeśli nagranie ma 90 sekund martwego powietrza przed pierwszym słowem, te 90 sekund zjada limit długości. Przytnij w Audacity (Effect, Truncate Silence) przed uploadem.' },
        { title: 'Ustaw język ręcznie dla krótkich plików', desc: 'Automatyczne wykrywanie próbkuje pierwszy fragment audio. Dla plików poniżej 5 minut ta próbka jest mała i wykrywanie zawodne. Wybierz język wyraźnie z menu.' },
        { title: 'Muzyka w tle powoduje halucynacje Whispera', desc: 'Jeśli audio ma muzykę pod mową (sponsor reads, intro beds, B-roll), model czasem wstawia wymyślone słowa w fragmentach samej muzyki. Jeśli masz wersję bez muzyki, użyj jej.' },
        { title: 'Dla bardzo zaszumionych plików najpierw odszum', desc: 'Darmowe opcje: Audacity Noise Reduction (wbudowane) lub Adobe Podcast Enhance (darmowe web, zaskakująco dobre). Przepuść plik raz, potem prześlij wersję czystą.' },
      ]}}
      faq={[
        { q: 'Jaki jest najlepszy darmowy konwerter audio na tekst?', a: 'Jesteśmy stronniczy, ale szczera odpowiedź: każde narzędzie używające Whisper large-v3 jest na szczycie free tier. Mictoo używa dokładnie tego modelu bez ściany rejestracji. Otter i Trint są dobre, ale liczą za minutę powyżej darmowego limitu. Dla okazjonalnych transkrypcji free to właściwy poziom.' },
        { q: 'Jak dokładne jest audio na tekst?', a: 'Dla czystej mowy w głównym języku: 5-10% wskaźnik błędu słów. Dla zaszumionego audio, mocnych akcentów lub specjalistycznego słownictwa dokładność spada. Dla większości zastosowań (notatki, wyszukiwanie, szkice) wystarczy. Dla zapisów prawnych lub medycznych weź człowieka.' },
        { q: 'Jakie formaty audio obsługujecie?', a: 'MP3, WAV, M4A, FLAC, OGG, WEBM, AAC. Także pliki wideo jak MP4 i MOV (wyciągamy audio automatycznie). AIFF i ALAC nie są obsługiwane bezpośrednio. Skonwertuj wcześniej na WAV lub FLAC.' },
        { q: 'Jak długo trwa transkrypcja?', a: 'Plik 5-minutowy jest zwykle gotowy w 10-15 sekund. 30-minutowy w 45-60. Przetwarzamy cały plik jako jedno zapytanie, bez konieczności dzielenia po twojej stronie.' },
        { q: 'Czy mogę transkrybować nagranie rozmowy telefonicznej?', a: 'Tak. Rozmowy telefoniczne to zwykle 8 kHz mono z kompresją. Whisper sobie radzi, dokładność jest nieco niższa niż przy audio studyjnym. Upewnij się, że nagranie jest legalne w twojej jurysdykcji.' },
        { q: 'Czy muszę wybrać język?', a: 'Nie, automatyczne wykrywanie jest domyślne. Dla audio poniżej 5 minut lub plików z niemowym wstępem wybierz język ręcznie dla bardziej niezawodnych wyników.' },
        { q: 'Czy są opłaty za minutę?', a: 'Bez opłat. Transkrypcja jest darmowa bez licznika minut. Finansujemy się reklamami display i planowanym planem Pro dla power userów.' },
        { q: 'Jaki jest maksymalny rozmiar pliku?', a: '25 MB bez konta, 60 MB po darmowej rejestracji. Jeśli plik jest większy, zobacz nasz przewodnik kompresji.' },
        { q: 'Czy moje audio jest zapisywane na waszych serwerach?', a: 'Nie. Strumieniujemy plik bezpośrednio do dostawcy transkrypcji, dostajemy tekst z powrotem i odrzucamy audio. Nic nie jest zapisywane w naszej bazie ani storage.' },
        { q: 'Czy mogę edytować transkrypcję przed pobraniem?', a: 'Tak. Po transkrypcji możesz poprawić błędne słowa inline w widoku wyniku i pobrać edytowaną wersję.' },
        { q: 'Jakie są formaty wyjściowe?', a: 'Czysty tekst (TXT), plik napisów (SRT) ze znacznikami czasu i kopiowanie do schowka. SRT działa w YouTube Studio, Premiere Pro, DaVinci Resolve i każdym standardowym edytorze wideo.' },
        { q: 'Czy Mictoo działa na telefonie?', a: 'Tak. Strona jest mobile-friendly. Możesz wgrywać bezpośrednio z telefonu, włącznie z aplikacją Pliki iOS lub folderem Pobrane Android.' },
      ]}
      relatedLinks={[
        { href: '/pl/transcribe-mp3-to-text', label: 'MP3 na tekst', desc: 'Wskazówki specyficzne dla MP3.' },
        { href: '/pl/transcribe-video-to-text', label: 'Wideo na tekst', desc: 'Ten sam silnik, zoptymalizowany dla MP4 i MOV.' },
        { href: '/pl/timestamped-transcription', label: 'Transkrypcja ze znacznikami czasu', desc: 'Kiedy potrzebujesz znaczników na zdanie lub słowo.' },
        { href: '/pl/how-to-compress-audio', label: 'Kompresja audio', desc: 'Kiedy plik jest za duży do uploadu.' },
      ]}
    />
  )
}
