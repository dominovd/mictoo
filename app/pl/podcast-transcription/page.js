import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'ko': 'https://mictoo.com/ko/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'Transkrypcja podcastu — darmowy generator AI | Mictoo',
  description:
    'Darmowa transkrypcja podcastu z AI. Prześlij swój odcinek (MP3, MP4, M4A, WAV) i otrzymaj czystą transkrypcję z timecode w kilka sekund. Bez rejestracji, bez opłaty za minutę.',
  alternates: { canonical: 'https://mictoo.com/pl/podcast-transcription', languages: LANGS },
}

export default function PlPodcastPage() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="Podcasterzy · Hosty · Za darmo"
      h1={<>Transkrypcja podcastu<br /><span className="text-brand-600">Darmowy generator transkryptu</span></>}
      subtitle="Zamień każdy odcinek w czysty tekst. Prześlij swój MP3, MP4 lub M4A i otrzymaj transkrypcję w kilka sekund. Bez konta, bez opłaty za minutę."
      howItWorks={[
        { icon: '📂', title: 'Upuść odcinek', desc: 'MP3, MP4, M4A, WAV lub FLAC. Cloud recording z Riverside, eksporty z Descript, surowe audio z Zooma, pliki z Anchor.fm. Wszystko działa.' },
        { icon: '⚡', title: 'AI wykonuje pracę', desc: 'Whisper large-v3 działa na naszym backendzie i konwertuje audio na tekst. Większość odcinków 30-minutowych kończy się w mniej niż minutę.' },
        { icon: '📋', title: 'Kopiuj, pobierz lub edytuj', desc: 'Weź tekst jako TXT, jako SRT do napisów, lub wklej bezpośrednio do edytora show notes. Popraw błędne słowa w naszym viewerze przed eksportem.' },
      ]}
      whyUse={{ title: 'Dlaczego podcasterzy używają Mictoo', bullets: [
        { title: 'Długie odcinki to nie problem', desc: 'Do 60 minut na plik po darmowej rejestracji. Przy podziale na dwie części zachowujemy względne timecode, aby można było złożyć pliki SRT bez liczenia.' },
        { title: 'Akcenty i crosstalk wytrzymują', desc: 'Whisper large-v3 to najsilniejszy otwarty model mowy, jaki znamy dla nienatywnego angielskiego. Jeśli twój co-host jest z Berlina lub São Paulo, transkrypcja nie zamienia się w papkę.' },
        { title: 'Music beds nie psują nic', desc: 'Nasz pipeline uruchamia Voice Activity Detection przed transkrypcją. Długie instrumentalne intra są oznaczane jako cisza, nie jako wymyślone słowa. Sponsor reads z podkładem muzycznym też przechodzą czysto.' },
        { title: 'Bez subskrypcji', desc: 'Wielu podcasterów transkrybuje jeden lub dwa odcinki miesięcznie. Płacenie 15 dolarów miesięcznego seat za to jest marnowaniem. Wgrywaj plik w razie potrzeby. Zarabiamy reklamami i planowanym planem Pro dla power userów.' },
        { title: 'Twoje audio nie jest zapisywane', desc: 'Pliki są przekazywane bezpośrednio do dostawcy mowy, transkrybowane i usuwane. Nie przechowujemy twoich odcinków, a dostawcy (Groq, OpenAI) nie trenują na danych API.' },
      ]}}
      useCases={{ title: 'Co podcasterzy naprawdę robią z transkrypcją', items: [
        { title: 'Show notes i posty na blog', desc: 'Wklej transkrypcję do swojego CMS, oznacz rozdziały, dodaj linki, opublikuj post. Odcinek 45-minutowy zwykle daje 6000-8000 słów materiału źródłowego. Trzy lub cztery lekko edytowane posty z jednego nagrania.' },
        { title: 'Cytaty z odcinka na social media', desc: 'Przeskanuj transkrypcję pod kątem linii, która trafiła, i zrób z niej grafikę. Dużo szybciej niż gonić timecode w audio na 1.5x.' },
        { title: 'Przeszukiwalne archiwum starego katalogu', desc: 'Przepuść stare odcinki przez transkrypcję wsadową i nagle masz Ctrl+F nad latami rozmów. Przydatne, gdy gość wraca i chcesz pamiętać, o czym rozmawialiście ostatnio.' },
        { title: 'Zamiennik dla auto-napisów YouTube', desc: 'Auto-napisy YouTube są średnie dla podcastów z dwoma głosami i muzyką. Prześlij zamiast tego SRT z Mictoo. Lepsza interpunkcja, mniej błędów, lepsza dostępność.' },
        { title: 'Link transkrypcji dla dostępności', desc: 'Wielu podcasterów wstawia link "Przeczytaj transkrypcję" w show notes RSS. Pomaga niesłyszącym i niedosłyszącym słuchaczom oraz pomaga wyszukiwarkom znaleźć twoje treści.' },
      ]}}
      proTips={{ title: 'Wskazówki do czystszych transkrypcji podcastu', tips: [
        { title: 'Najpierw usuń muzykę intro i outro', desc: 'Whisper dobrze ignoruje muzykę, ale 90-sekundowe instrumentalne cold open czasami wywołuje słowa-duchy. Jeśli twoje intro jest takie samo w każdym odcinku, wytnij pierwsze 1:30 w Audacity przed uploadem. Oszczędza kilka minut czyszczenia później.' },
        { title: 'Eksportuj w mono 64 kbps, jeśli surowy plik jest ogromny', desc: 'Głos nie potrzebuje stereo, a 64 kbps wystarczy dla mowy. Dwugodzinny odcinek w mono 64 kbps to około 55 MB. Mieści się w limicie 60 MB z loginem bez dzielenia. ffmpeg: ffmpeg -i episode.wav -ac 1 -b:a 64k episode.mp3.' },
        { title: 'Dla wywiadów ze słabym audio gościa transkrybuj każdą ścieżkę osobno', desc: 'Jeśli nagrywasz na Riverside lub SquadCast i masz osobne ścieżki audio na mówcę, prześlij każdą osobno. Whisper łatwiej radzi sobie z jednym głosem na raz. Czystsza atrybucja, mniej utraconych słów przy nakładaniu.' },
        { title: 'W krótkich odcinkach ustaw język wyraźnie', desc: 'Auto-wykrywanie próbkuje pierwszy fragment audio. Jeśli otwierasz jednym słowem cold open lub śmiechem, wykrywanie może wpaść w zły język. Dla wszystkiego poniżej 5 minut wybierz język ręcznie.' },
        { title: 'Interpunkcja będzie niedoskonała. Popraw pierwsze 10 linii, resztę zostaw', desc: 'Whisper trafia większość interpunkcji, ale czasem gubi średniki i mowę bezpośrednią. Dla show notes liczy się pierwsze 10 linii (ludzie skanują). Powyżej: wysyłaj tak jak jest.' },
        { title: 'Używaj eksportu SRT, nawet jeśli nie potrzebujesz napisów', desc: 'SRT daje timecode co kilka sekund. Nawet jeśli wklejasz w posta na blog, te timecode pomagają wrócić w audio i zweryfikować cytat. Mamy darmowy generator SRT na miejscu.' },
      ]}}
      faq={[
        { q: 'Czy mogę transkrybować dwugodzinny odcinek?', a: 'Tak, ale najpierw podziel. Nasz limit pliku to 30 minut za darmo lub 60 minut po rejestracji. Dla dwugodzinnego odcinka podziel na dwa lub trzy kawałki i transkrybuj każdy. Nasz przewodnik podziału audio wyjaśnia jak w 60 sekund z ffmpeg lub Audacity.' },
        { q: 'Czy dostanę etykiety mówców (Host vs. Gość)?', a: 'Obecnie nie automatycznie. Whisper sam nie robi diaryzacji. Jeśli masz osobne ścieżki na mówcę (typowe w Riverside, SquadCast, Zencastr), prześlij każdą osobno i oznacz sam w końcowym transkrypcie. Patrzymy na diaryzację, ale wypuścimy ją tylko, jeśli zrobimy to dobrze.' },
        { q: 'Jak radzi sobie z akcentami i podcastami dwujęzycznymi?', a: 'Whisper large-v3 został wytrenowany na 680.000 godzinach wielojęzycznego audio. Nienatywny angielski, regionalne akcenty i code-switching działają lepiej niż w mniejszych modelach. Dla podcastu przełączającego się między angielskim a hiszpańskim w środku odcinka wybierz "Auto-wykrywanie" jako język, a Whisper podąży za przełączeniem.' },
        { q: 'Jakie formaty audio wspieracie dla podcastów?', a: 'MP3, M4A, WAV, FLAC, OGG, WEBM i AAC. Plus pliki wideo jak MP4 i MOV (wyciągamy audio). Jeśli twój hosting podcastów oferuje download w jednym z tych, jesteś gotów. AIFF i ALAC nie są obsługiwane bezpośrednio, skonwertuj na WAV wcześniej.' },
        { q: 'Czy jest limit słów na odcinek?', a: 'Bez limitu słów. Tylko limit rozmiaru pliku (25 MB za darmo, 60 MB z rejestracją) i czasu trwania (30 min za darmo, 60 min z rejestracją). Typowy odcinek 60-minutowy produkuje około 9000-11.000 słów.' },
        { q: 'Jak dokładna jest transkrypcja podcastu w porównaniu z ludzkimi transkryptorami?', a: 'Dla czystego audio studyjnego Whisper large-v3 ląduje typowo na 5-10% wskaźnika błędu słów. Ludzcy transkryptorzy są na 3-5%. Dla większości show notes i repurposingu na blog AI wystarczy. Dla zeznań sądowych lub cytatów akademickich weź człowieka.' },
        { q: 'Czy mój odcinek jest zapisywany na waszych serwerach?', a: 'Nie. Przekazujemy audio bezpośrednio do dostawcy transkrypcji (Groq, z OpenAI jako backup). Przetwarzają, a my odrzucamy. Nigdy nie zapisujemy twojego pliku podcastu w naszej bazie ani storage.' },
        { q: 'Czy mogę pobrać jako SRT do napisów?', a: 'Tak. Po transkrypcji kliknij przycisk pobierania SRT. Użyj bezpośrednio w YouTube Studio, Premiere Pro, DaVinci Resolve lub dowolnym edytorze wideo.' },
        { q: 'Czy liczycie za minutę?', a: 'Nie. Transkrypcja w Mictoo jest darmowa. Obecnie jesteśmy finansowani reklamami, z płatnym planem Pro nadchodzącym później dla użytkowników, którzy potrzebują dłuższych plików lub uploadu wsadowego.' },
        { q: 'Mój odcinek ma wulgaryzmy. Czy zostaną ocenzurowane?', a: 'Bez filtrowania. Transkrypcja odzwierciedla dokładnie to, co zostało powiedziane. Jeśli chcesz edytować przekleństwa dla czystej wersji, zrób to sam po pobraniu.' },
        { q: 'Czy mogę edytować transkrypcję przed pobraniem?', a: 'Tak. Jest prosty edytor w widoku wyniku. Popraw błędne słowa, potem pobierz edytowaną wersję jako TXT lub SRT.' },
        { q: 'Czy transkrypcja podcastu w Mictoo jest zgodna z RODO?', a: 'Nie przechowujemy audio ani transkryptu na naszych serwerach po opuszczeniu strony. Jesteśmy w Europie, a nasi dostawcy (Groq US, OpenAI US) podpisali DPA. Dla konkretnych pytań compliance zobacz naszą politykę prywatności lub napisz na info@mictoo.com.' },
      ]}
      relatedLinks={[
        { href: '/pl/free-srt-generator', label: 'Generator SRT', desc: 'Pliki napisów gotowe dla podcastu, nie tylko czysty tekst.' },
        { href: '/pl/timestamped-transcription', label: 'Transkrypcja ze znacznikami czasu', desc: 'Dla markerów rozdziałów, cięć i wyszukiwania cytatów.' },
        { href: '/pl/interview-transcription', label: 'Transkrypcja wywiadu', desc: 'Ten sam silnik, zoptymalizowany dla formatu jeden-na-jeden.' },
        { href: '/pl/youtube-to-text', label: 'YouTube na tekst', desc: 'Twój odcinek już jest na YouTube? Weź audio stamtąd.' },
      ]}
    />
  )
}
