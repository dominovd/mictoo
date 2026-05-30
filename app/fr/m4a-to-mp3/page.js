const LANGS = {
  'en': 'https://mictoo.com/m4a-to-mp3',
  'fr': 'https://mictoo.com/fr/m4a-to-mp3',
  'de': 'https://mictoo.com/de/m4a-to-mp3',
  'es': 'https://mictoo.com/es/m4a-to-mp3',
  'ru': 'https://mictoo.com/ru/m4a-to-mp3',
  'it': 'https://mictoo.com/it/m4a-to-mp3',
  'pt': 'https://mictoo.com/pt/m4a-to-mp3',
  'pl': 'https://mictoo.com/pl/m4a-to-mp3',
  'ja': 'https://mictoo.com/ja/m4a-to-mp3',
  'ko': 'https://mictoo.com/ko/m4a-to-mp3',
  'x-default': 'https://mictoo.com/m4a-to-mp3',
}

export const metadata = {
  title: 'Comment convertir M4A en MP3 — méthodes gratuites (ou passez-vous-en) | Mictoo',
  description: "Convertissez M4A en MP3 en quelques secondes avec des outils en ligne gratuits, QuickTime, VLC ou ffmpeg. À noter : la plupart des apps (dont Mictoo) acceptent M4A directement — il se peut que vous n'ayez pas besoin de convertir.",
  alternates: { canonical: 'https://mictoo.com/fr/m4a-to-mp3', languages: LANGS },

  openGraph: {
    title: "Comment convertir M4A en MP3 — méthodes gratuites (ou passez-vous-en) | Mictoo",
    description: "Convertissez M4A en MP3 en quelques secondes avec des outils en ligne gratuits, QuickTime, VLC ou ffmpeg. À noter : la plupart des apps (dont Mictoo) acceptent M4A directement — il se peut que vous n'ayez pas besoin de convertir.",
    url: "https://mictoo.com/fr/m4a-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comment convertir M4A en MP3 — méthodes gratuites (ou passez-vous-en) | Mictoo",
    description: "Convertissez M4A en MP3 en quelques secondes avec des outils en ligne gratuits, QuickTime, VLC ou ffmpeg. À noter : la plupart des apps (dont Mictoo) acceptent M4A directement — il se peut que vous n'ayez pas besoin de convertir.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrM4aToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Comment convertir M4A en MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        M4A est le format audio par défaut des mémos vocaux iPhone, des téléchargements Apple Podcasts et de la plupart des apps d'enregistrement macOS. MP3 est plus universel, mais en 2026, un nombre étonnant d'outils acceptent M4A directement — y compris la plupart des navigateurs, éditeurs audio, apps de podcast et services de transcription. Voici quand vous avez vraiment besoin de convertir et les façons les plus rapides de le faire gratuitement.
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>Vous n'avez probablement pas besoin de convertir.</strong> M4A et MP3 ont une qualité audio très similaire. Les apps modernes qui lisent MP3 lisent presque toujours aussi M4A. Plus précisément :
        </p>
        <ul className="text-sm text-slate-700 list-disc pl-5 mt-2 space-y-1">
          <li><strong>Transcription :</strong> Mictoo accepte <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.m4a</code> directement — déposez le fichier et obtenez le texte. Pas de conversion.</li>
          <li><strong>Édition audio :</strong> Audacity, GarageBand, Logic, Premiere, DaVinci Resolve lisent tous M4A.</li>
          <li><strong>Streaming/lecture :</strong> Spotify, Apple Music, YouTube Music, tout navigateur et OS moderne lit M4A.</li>
        </ul>
        <p className="text-sm text-slate-700 mt-3">
          Vous n'avez vraiment besoin de MP3 que lorsque l'app cible dit explicitement « MP3 uniquement » — quelques autoradios anciens, équipements de fitness, dictaphones basiques ou logiciels patrimoniaux.
        </p>
        <a href="/fr" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline mt-3">
          ↑ Essayez de transcrire le .m4a directement avec Mictoo
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <p className="-mb-6 text-slate-700">
          <strong>Toujours besoin de MP3 ?</strong> Choisissez la méthode ci-dessous qui correspond à votre configuration. Toutes gratuites.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Méthode 1 — Convertisseur en ligne</h2>
          <p className="mb-4">
            Glisser, déposer, télécharger — généralement moins de 10 secondes pour un mémo vocal typique :
          </p>
          <p className="text-xs text-slate-500 mt-3">
            Vie privée : les outils en ligne envoient votre fichier. Évitez-les pour des enregistrements confidentiels — utilisez une méthode de bureau.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Méthode 2 — macOS (sans installation)</h2>

          <img
            src="/svg/macos-music-convert.svg"
            alt="App Musique macOS : cliquez Fichier dans la barre de menu, survolez Convertir, puis choisissez Créer une version MP3."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={280}
          />

          <p className="mb-3">
            <strong>App Musique :</strong> Glissez le <code className="font-mono">.m4a</code> dans Musique, sélectionnez-le, puis <strong>Fichier → Convertir → Créer une version MP3</strong>. Le MP3 apparaît à côté de l'original.
          </p>
          <p className="mb-3">
            <strong>QuickTime Player :</strong> Ouvrez le fichier → <strong>Fichier → Exporter en tant que → Audio uniquement</strong>. QuickTime exporte en M4A par défaut ; combinez-le avec VLC ou Audacity ci-dessous si vous voulez du MP3.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Méthode 3 — VLC (multiplateforme)</h2>
          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> sur Windows/macOS/Linux :
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Ouvrez VLC → <strong>Média → Convertir / Enregistrer</strong>.</li>
            <li>Ajoutez le fichier <code className="font-mono">.m4a</code>, cliquez <strong>Convertir / Enregistrer</strong>.</li>
            <li>Choisissez le profil <code className="font-mono">Audio - MP3</code>.</li>
            <li>Choisissez le fichier de destination en <code className="font-mono">.mp3</code>, cliquez <strong>Démarrer</strong>.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Méthode 4 — Ligne de commande (ffmpeg)</h2>
          <p className="mb-4">
            Une seule ligne avec <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a> :
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.m4a -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Pour la voix/transcription utilisez <code className="font-mono">-ab 64k -ac 1</code> pour un fichier 2–3× plus petit sans perte de qualité sur la parole.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Besoin d'une transcription ?</h2>
          <p className="mb-4">
            M4A et MP3 fonctionnent tous deux directement dans Mictoo. Déposez le fichier, obtenez du texte avec horodatages, sous-titres SRT et résumé IA — gratuit, sans inscription.
          </p>
          <a href="/fr" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Transcrire l'audio en texte gratuitement
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Guides associés</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/fr/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC en MP3</a>
          <a href="/fr/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMA en MP3</a>
          <a href="/fr/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A en texte</a>
          <a href="/fr/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Compresser l'audio</a>
        </div>
      </div>
    </section>
  )
}
