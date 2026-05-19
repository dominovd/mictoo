const LANGS = {
  'en': 'https://mictoo.com/how-to-split-audio',
  'fr': 'https://mictoo.com/fr/how-to-split-audio',
  'de': 'https://mictoo.com/de/how-to-split-audio',
  'es': 'https://mictoo.com/es/how-to-split-audio',
  'ru': 'https://mictoo.com/ru/how-to-split-audio',
  'it': 'https://mictoo.com/it/how-to-split-audio',
  'pt': 'https://mictoo.com/pt/how-to-split-audio',
  'pl': 'https://mictoo.com/pl/how-to-split-audio',
  'ja': 'https://mictoo.com/ja/how-to-split-audio',
  'ko': 'https://mictoo.com/ko/how-to-split-audio',
  'x-default': 'https://mictoo.com/how-to-split-audio',
}

export const metadata = {
  title: 'Jak podzielić długi plik audio do transkrypcji — Bezpłatne metody | Mictoo',
  description: 'Trzy bezpłatne sposoby na podzielenie długiego nagrania na krótsze części do transkrypcji: narzędzia online, Audacity lub ffmpeg. Działa dla MP3, M4A, WAV, MP4 i innych.',
  alternates: { canonical: 'https://mictoo.com/pl/how-to-split-audio', languages: LANGS },
}

export default function PlHowToSplitAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Jak podzielić długi plik audio do transkrypcji</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Mictoo transkrybuje pliki do <strong>30 minut</strong> dla anonimowych użytkowników i
        <strong> 60 minut</strong>, gdy jesteś zalogowany. Jeśli twoje nagranie jest dłuższe,
        najczystsze rozwiązanie to podzielenie go na dwie lub trzy krótsze części i transkrybowanie każdej osobno.
        Poniżej trzy darmowe sposoby — wybierz ten, który pasuje do twojego pliku i umiejętności.
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metoda 1 — Narzędzia online (bez instalacji)</h2>
          <p className="mb-4">
            Najszybsza opcja dla jednorazowego podziału. Przeciągnij plik, ustaw początek/koniec,
            pobierz fragment. Powtórz dla każdego segmentu.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://mp3cut.net/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">mp3cut.net</a> — przeciągnij plik, przesuń znaczniki początku/końca, kliknij Cut, pobierz. Działa w przeglądarce.</li>
            <li><a href="https://clideo.com/cut-audio" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Clideo Cut Audio</a> — czysty interfejs, obsługuje MP3, M4A, WAV, FLAC, OGG i pliki wideo.</li>
            <li><a href="https://online-audio-converter.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Online Audio Converter</a> — radzi sobie z długimi plikami i pozwala eksportować segmenty wsadowo.</li>
          </ul>

          <p className="mt-3 text-xs text-slate-500">
            Wskazówka: tnij w naturalnej pauzie (między zdaniami lub zmianami rozmówców), żeby
            transkrypcja czytała się płynnie po połączeniu części.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metoda 2 — Audacity (bezpłatna aplikacja)</h2>
          <p className="mb-4">
            Najlepszy wybór dla precyzji, zwłaszcza jeśli w nagraniu są ciszę lub pauzy, w których chcesz ciąć.
            Audacity jest darmowy i open-source dla macOS, Windows i Linux.
          </p>

          <ol className="list-decimal pl-5 space-y-1">
            <li>Pobierz <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> i otwórz plik audio.</li>
            <li>Użyj <strong>Plik → Importuj → Audio</strong> w razie potrzeby. Audacity czyta MP3, M4A, WAV, FLAC, OGG i więcej.</li>
            <li>Kliknij na falę w punkcie cięcia (Ctrl/Cmd+B, by umieścić etykietę, lub zaznacz obszar dla jednej części).</li>
            <li>Wybierz <strong>Plik → Eksportuj → Eksportuj zaznaczone audio</strong> i zapisz pierwszą część jako MP3 lub WAV.</li>
            <li>Zaznacz następny obszar, eksportuj, powtórz.</li>
          </ol>

          <p className="mt-3 text-xs text-slate-500">
            Dla długich nagrań narzędzie <strong>Analizuj → Sound Finder</strong> w Audacity automatycznie znajduje
            ciche fragmenty — przydatne do dzielenia podcastów lub wywiadów na naturalnych pauzach.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metoda 3 — Wiersz poleceń (ffmpeg)</h2>
          <p className="mb-4">
            Jedno polecenie dzieli cały plik na równe części. Bez ponownego kodowania, więc natychmiastowe
            nawet przy 2-godzinnym nagraniu. Najlepiej, jeśli masz już ffmpeg zainstalowany.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Podzielić na 25-minutowe części</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1500 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">1500</code> to długość segmentu w sekundach (25 min).
            Pliki wynikowe będą nazywać się <code className="font-mono">part_001.mp3</code>,{' '}
            <code className="font-mono">part_002.mp3</code>, itd. Flaga{' '}
            <code className="font-mono">-c copy</code> unika ponownego kodowania — bezstratnie i szybko.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Wyciągnąć konkretny zakres czasowy</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -ss 00:00:00 -t 00:25:00 -c copy part1.mp4
ffmpeg -i input.mp4 -ss 00:25:00 -t 00:25:00 -c copy part2.mp4`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ss</code> to czas początkowy, <code className="font-mono">-t</code>{' '}
            to długość. Działa też dla wideo — ścieżka audio dzieli się dokładnie tak samo.
          </p>

          <p className="mt-3">
            Nie masz jeszcze ffmpeg? Zainstaluj z{' '}
            <a href="https://ffmpeg.org/download.html" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg.org/download</a>{' '}
            lub przez Homebrew na macOS: <code className="font-mono">brew install ffmpeg</code>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Łączenie transkrypcji z powrotem</h2>
          <p className="mb-3">
            Stranskrybuj każdą część w Mictoo, potem wklej wyniki do jednego dokumentu po kolei.
            Kilka wskazówek na czystą końcową transkrypcję:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>W miarę możliwości tnij w pauzie — słowa nie zostają przecięte na pół.</li>
            <li>Jeśli cięcie wypada w środku zdania, pierwsze słowo następnej części może zostać zapisane wielką literą. Łatwe do poprawienia w dowolnym edytorze.</li>
            <li>Dla napisów SRT/VTT: dodaj pełny czas trwania poprzedniej części do każdego znacznika czasu w pliku następnym. Znajdź-i-zamień lub mały skrypt załatwi to w sekundy.</li>
            <li>Podsumowanie AI Mictoo działa najlepiej na pojedynczej transkrypcji — najpierw połącz części, a potem uruchom podsumowanie na połączonym tekście.</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Wszystko gotowe?</h2>
          <p className="mb-4">
            Gdy każda część zmieści się w limicie długości, wróć na stronę główną i wgrywaj je po kolei.
          </p>
          <a href="/pl" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Powrót do transkrypcji
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Więcej poradników transkrypcji</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/pl/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Jak skompresować audio</a>
          <a href="/pl/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3 na tekst</a>
          <a href="/pl/podcast-transcription" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Transkrypcja podcastów</a>
          <a href="/pl" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Wszystkie formaty</a>
        </div>
      </div>
    </section>
  )
}
