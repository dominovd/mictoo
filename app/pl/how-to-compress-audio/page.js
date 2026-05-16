const LANGS = {
  'en': 'https://mictoo.com/how-to-compress-audio',
  'fr': 'https://mictoo.com/fr/how-to-compress-audio',
  'de': 'https://mictoo.com/de/how-to-compress-audio',
  'es': 'https://mictoo.com/es/how-to-compress-audio',
  'ru': 'https://mictoo.com/ru/how-to-compress-audio',
  'it': 'https://mictoo.com/it/how-to-compress-audio',
  'pt': 'https://mictoo.com/pt/how-to-compress-audio',
  'pl': 'https://mictoo.com/pl/how-to-compress-audio',
  'x-default': 'https://mictoo.com/how-to-compress-audio',
}

export const metadata = {
  title: 'Jak skompresować audio do transkrypcji — Darmowe metody | Mictoo',
  description: 'Trzy darmowe sposoby zmniejszenia pliku audio lub wideo poniżej 25 MB do transkrypcji: wyodrębnij audio, obniż bitrate lub podziel plik. Bez instalacji oprogramowania.',
  alternates: { canonical: 'https://mictoo.com/pl/how-to-compress-audio', languages: LANGS },
}

export default function PlHowToCompressAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Jak skompresować audio do transkrypcji</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Mictoo akceptuje pliki do <strong>25 MB</strong> za darmo. Jeśli twój plik jest większy, oto trzy szybkie
        sposoby zmniejszenia go bez utraty jakości transkrypcji. Wybierz ten, który pasuje do twojego pliku
        i umiejętności.
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metoda 1 — Wyodrębnij audio z pliku wideo</h2>
          <p className="mb-4">
            Jeśli masz plik wideo (MP4, WEBM, MOV) głównie z mową, ścieżka audio jest zwykle 5-10× mniejsza
            od wideo. Mictoo potrzebuje tylko audio — wideo nie pomaga w transkrypcji. To najszybsze
            rozwiązanie dla większości użytkowników.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Online (bez instalacji)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://convertio.co/mp4-mp3/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Convertio</a> — przeciągnij MP4, wybierz MP3 lub M4A, pobierz.</li>
            <li><a href="https://cloudconvert.com/mp4-to-mp3" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">CloudConvert</a> — obsługuje MP4 → MP3 / M4A / WAV.</li>
            <li><a href="https://www.media.io/audio-converter.html" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Media.io</a> — szybka konwersja w przeglądarce.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Linia poleceń (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -vn -acodec copy output.m4a`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-vn</code> usuwa wideo, <code className="font-mono">-acodec copy</code> zachowuje jakość audio bez zmian. Szybko — bez ponownego kodowania.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metoda 2 — Obniż bitrate audio</h2>
          <p className="mb-4">
            Większość podcastów i spotkań jest nagrywana w 128-192 kbps. Do transkrypcji 64 kbps mono jest
            więcej niż wystarczające — precyzja pozostaje taka sama, a plik staje się 2-3× mniejszy. To
            najlepsza metoda dla długich plików audio.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Online</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://online-audio-converter.com/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Online Audio Converter</a> — ustaw suwak jakości na 64 kbps, mono.</li>
            <li><a href="https://www.freeconvert.com/audio-compressor" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">FreeConvert Audio Compressor</a> — wybierz docelowy rozmiar.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Linia poleceń (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -ac 1 -b:a 64k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ac 1</code> konwertuje na mono (mowa dobrze brzmi w mono),
            <code className="font-mono">-b:a 64k</code> ustawia bitrate audio na 64 kbps.
          </p>
          <p className="mt-3"><strong>Szybkie wyliczenie:</strong> 64 kbps daje ~28 MB na godzinę. Godzinny wywiad mieści się w około 28 MB — blisko limitu. Obniż do <code className="font-mono">-b:a 48k</code> dla ~21 MB/godzinę bez zauważalnej utraty precyzji.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metoda 3 — Podziel na krótsze części</h2>
          <p className="mb-4">
            Jeśli musisz zachować oryginalną jakość (prawne, medyczne, archiwalne nagrania), podziel plik
            na kawałki 20-25 minutowe i transkrybuj każdy osobno. Następnie połącz transkrypcje w dowolnym
            edytorze tekstu.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Online</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://mp3cut.net/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">mp3cut.net</a> — przeciągnij MP3, ustaw początek/koniec, pobierz.</li>
            <li><a href="https://clideo.com/cut-audio" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Clideo Cut Audio</a> — czysty interfejs, obsługuje większość formatów.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Linia poleceń (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1200 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Dzieli plik wejściowy na 20-minutowe części (<code className="font-mono">1200</code> sekund) o nazwach <code className="font-mono">part_001.mp3</code>, <code className="font-mono">part_002.mp3</code> itd. Następnie prześlij każdą do Mictoo.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Wszystko gotowe?</h2>
          <p className="mb-4">
            Gdy twój plik jest poniżej 25 MB, wróć na stronę główną i prześlij go do narzędzia transkrypcji.
          </p>
          <a href="/pl" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Powrót do transkrypcji
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Więcej narzędzi do transkrypcji</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/pl/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3 na tekst</a>
          <a href="/pl/transcribe-video-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Wideo na tekst</a>
          <a href="/pl/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A na tekst</a>
          <a href="/pl" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Wszystkie formaty</a>
        </div>
      </div>
    </section>
  )
}
