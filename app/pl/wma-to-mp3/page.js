const LANGS = {
  'en': 'https://mictoo.com/wma-to-mp3',
  'fr': 'https://mictoo.com/fr/wma-to-mp3',
  'de': 'https://mictoo.com/de/wma-to-mp3',
  'es': 'https://mictoo.com/es/wma-to-mp3',
  'ru': 'https://mictoo.com/ru/wma-to-mp3',
  'it': 'https://mictoo.com/it/wma-to-mp3',
  'pt': 'https://mictoo.com/pt/wma-to-mp3',
  'pl': 'https://mictoo.com/pl/wma-to-mp3',
  'ja': 'https://mictoo.com/ja/wma-to-mp3',
  'ko': 'https://mictoo.com/ko/wma-to-mp3',
  'x-default': 'https://mictoo.com/wma-to-mp3',
}

export const metadata = {
  title: 'Jak skonwertować WMA na MP3 — darmowe metody (2026) | Mictoo',
  description: "Skonwertuj WMA (Windows Media Audio) na MP3 za darmo. Konwertery online, VLC, Audacity i ffmpeg — wybierz to, co pasuje. Potem transkrybuj MP3 na tekst w Mictoo.",
  alternates: { canonical: 'https://mictoo.com/pl/wma-to-mp3', languages: LANGS },

  openGraph: {
    title: "Jak skonwertować WMA na MP3 — darmowe metody (2026) | Mictoo",
    description: "Skonwertuj WMA (Windows Media Audio) na MP3 za darmo. Konwertery online, VLC, Audacity i ffmpeg — wybierz to, co pasuje. Potem transkrybuj MP3 na tekst w Mictoo.",
    url: "https://mictoo.com/pl/wma-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jak skonwertować WMA na MP3 — darmowe metody (2026) | Mictoo",
    description: "Skonwertuj WMA (Windows Media Audio) na MP3 za darmo. Konwertery online, VLC, Audacity i ffmpeg — wybierz to, co pasuje. Potem transkrybuj MP3 na tekst w Mictoo.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlWmaToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Jak skonwertować WMA na MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        WMA (Windows Media Audio) był domyślnym formatem Microsoftu w 2000-tych dla rejestratorów Windows i ripów z Windows Media Playera. Działa pod Windows, ale jest kłopotliwy prawie wszędzie indziej — nowoczesne telefony, narzędzia webowe i silniki transkrypcji zwykle go nie akceptują. MP3 to uniwersalny zamiennik. Oto cztery darmowe sposoby konwersji.
      </p>

      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700">
          <strong>Po co konwertować:</strong> Mictoo (i większość nowoczesnych narzędzi transkrypcji) nie czyta WMA bezpośrednio — to format z zastrzeżonym kodekiem. Musisz najpierw skonwertować do MP3, M4A lub WAV. Wynik MP3 będzie nieco mniejszy i odtwarzalny wszędzie.
        </p>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metoda 1 — Konwerter online (bez instalacji)</h2>
          <p className="mb-4">
            Najprostsza droga, jeśli plik ma mniej niż ~200 MB i nagranie nie jest wrażliwe. Przeciągnij, upuść, pobierz — zwykle 5–15 sekund:
          </p>
          <p className="text-xs text-slate-500 mt-3">
            Prywatność: dla poufnych nagrań (wywiady, rozmowy służbowe, medyczne) preferuj metody desktopowe — audio nigdy nie opuszcza komputera.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metoda 2 — VLC (Windows / macOS / Linux)</h2>

          <img
            src="/svg/vlc-convert-dialog.svg"
            alt="Okno Konwertuj w VLC: źródło recording.wma, profil Audio – MP3, plik docelowy .mp3, przycisk Start."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={300}
          />

          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> jest darmowy i czyta WMA natywnie na wszystkich systemach. Konwersja w cztery kliknięcia:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Otwórz VLC. Kliknij <strong>Media → Konwertuj / Zapisz</strong>.</li>
            <li>Dodaj swój plik <code className="font-mono">.wma</code>, kliknij ponownie <strong>Konwertuj / Zapisz</strong>.</li>
            <li>W <strong>Profil</strong> wybierz <code className="font-mono">Audio - MP3</code>.</li>
            <li>Wybierz docelową nazwę kończącą się na <code className="font-mono">.mp3</code> i kliknij <strong>Start</strong>.</li>
          </ol>
          <p className="mt-3">Gotowe. Pasek postępu na dole VLC staje się miernikiem konwersji.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metoda 3 — Audacity (darmowy, wszystkie platformy)</h2>
          <p className="mb-3">
            <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> jest przydatny, jeśli chcesz też wyczyścić dźwięk (przyciąć ciszę, podbić cichy głos, usunąć szum tła) przed transkrypcją.
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>Plik → Importuj → Audio</strong> → wybierz <code className="font-mono">.wma</code></li>
            <li>(Opcjonalnie) edytuj, normalizuj, odszumiaj.</li>
            <li><strong>Plik → Eksportuj → Eksportuj jako MP3</strong>. Wybierz mono i 64–96 kbps dla mowy.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metoda 4 — Wiersz poleceń (ffmpeg)</h2>
          <p className="mb-4">
            Jedna linia z <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a>:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.wma -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Dla głosu/transkrypcji zejdź do <code className="font-mono">-ab 64k -ac 1</code> (mono, 64 kbps) — ta sama dokładność, plik 2–3× mniejszy.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">MP3 gotowe?</h2>
          <p className="mb-4">
            Upuść w Mictoo, by uzyskać darmową transkrypcję — działa z 50+ językami, zwraca timestampy, napisy SRT i streszczenie AI. Bez rejestracji.
          </p>
          <a href="/pl" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Transkrybuj MP3 na tekst za darmo
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Powiązane przewodniki</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/pl/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC na MP3</a>
          <a href="/pl/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A na MP3</a>
          <a href="/pl/transcribe-audio-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Transkrybuj audio</a>
          <a href="/pl/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Kompresuj audio</a>
        </div>
      </div>
    </section>
  )
}
