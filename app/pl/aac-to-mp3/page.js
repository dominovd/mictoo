const LANGS = {
  'en': 'https://mictoo.com/aac-to-mp3',
  'fr': 'https://mictoo.com/fr/aac-to-mp3',
  'de': 'https://mictoo.com/de/aac-to-mp3',
  'es': 'https://mictoo.com/es/aac-to-mp3',
  'ru': 'https://mictoo.com/ru/aac-to-mp3',
  'it': 'https://mictoo.com/it/aac-to-mp3',
  'pt': 'https://mictoo.com/pt/aac-to-mp3',
  'pl': 'https://mictoo.com/pl/aac-to-mp3',
  'ja': 'https://mictoo.com/ja/aac-to-mp3',
  'ko': 'https://mictoo.com/ko/aac-to-mp3',
  'x-default': 'https://mictoo.com/aac-to-mp3',
}

export const metadata = {
  title: 'Jak skonwertować AAC na MP3 — darmowe metody (2026) | Mictoo',
  description: "Skonwertuj pliki AAC na MP3 za darmo. Trzy szybkie sposoby — konwerter online, QuickTime/VLC lub ffmpeg z wiersza poleceń. Wskazówka: Mictoo transkrybuje większość plików AAC bezpośrednio, bez konwersji.",
  alternates: { canonical: 'https://mictoo.com/pl/aac-to-mp3', languages: LANGS },
}

export default function PlAacToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Jak skonwertować AAC na MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        AAC (Advanced Audio Coding) to domyślny format notatek głosowych iPhone, dyktafonów Android i ścieżki audio w wideo MP4. MP3 jest bardziej uniwersalny i działa z każdym odtwarzaczem, edytorem i narzędziem do transkrypcji. Poniżej — trzy darmowe metody plus krótka notka, czy konwersja jest w ogóle potrzebna.
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>Zanim skonwertujesz:</strong> jeśli celem jest transkrypcja, Mictoo akceptuje większość plików AAC bezpośrednio — w tym pliki <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.aac</code> w kontenerach MP4 (notatki głosowe iPhone, eksporty przez Udostępnij, większość rejestratorów Android). Najpierw spróbuj przesłać; konwertuj tylko, jeśli plik zostanie odrzucony.
        </p>
        <a href="/pl" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline">
          ↑ Transkrybuj .aac bezpośrednio
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metoda 1 — Konwerter online (bez instalacji)</h2>

          <img
            src="/svg/online-converter-3step.svg"
            alt="Trzy kroki: upuść plik AAC, wybierz MP3 jako format wyjściowy, pobierz wynik."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={240}
          />

          <p className="mb-4">
            Najszybszy sposób dla plików poniżej ~200 MB. Upuść w przeglądarce, dostaniesz MP3 w kilka sekund. Wszystkie bez rejestracji:
          </p>
          <p className="text-xs text-slate-500 mt-3">
            Prywatność: konwertery online wysyłają plik na swoje serwery. Dla wrażliwych nagrań (medyczne, prawne, rozmowy służbowe) użyj metody desktopowej poniżej.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metoda 2 — Aplikacje desktopowe (offline)</h2>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">macOS — QuickTime + iMovie</h3>
          <p className="mb-2">
            QuickTime otwiera pliki AAC. Użyj <strong>Plik → Eksportuj jako → Tylko audio</strong> i wybierz MP3 w oknie. Wbudowane w każdy Mac.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Windows / macOS / Linux — Audacity (darmowy)</h3>
          <p>
            Otwórz plik AAC w <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a>, potem <strong>Plik → Eksportuj → Eksportuj jako MP3</strong>. Wybierz mono i 64–96 kbps, jeśli to nagranie głosowe.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Międzyplatformowo — VLC</h3>
          <p>
            VLC konwertuje przez <strong>Media → Konwertuj / Zapisz</strong>. Dodaj .aac, wybierz profil <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded mx-1">Audio - MP3</code>, wybierz cel, kliknij Start.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metoda 3 — Wiersz poleceń (ffmpeg)</h2>
          <p className="mb-4">
            Jedna linia z zainstalowanym <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a>:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.aac -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Dla głosu/transkrypcji zejdź do <code className="font-mono">-ab 64k -ac 1</code> — plik 2–3× mniejszy bez utraty dokładności.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">MP3 gotowe?</h2>
          <p className="mb-4">
            Upuść w Mictoo, by uzyskać darmową transkrypcję z timestampami, napisami SRT i streszczeniem AI. Bez rejestracji.
          </p>
          <a href="/pl" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Transkrybuj MP3 na tekst za darmo
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Powiązane przewodniki</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/pl/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMA na MP3</a>
          <a href="/pl/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A na MP3</a>
          <a href="/pl/aac-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC na tekst</a>
          <a href="/pl/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Kompresuj audio</a>
        </div>
      </div>
    </section>
  )
}
