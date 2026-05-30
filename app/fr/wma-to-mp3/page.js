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
  title: 'Comment convertir WMA en MP3 — méthodes gratuites (2026) | Mictoo',
  description: "Convertissez WMA (Windows Media Audio) en MP3 gratuitement. Convertisseurs en ligne, VLC, Audacity et ffmpeg — choisissez ce qui vous convient. Puis transcrivez le MP3 en texte avec Mictoo.",
  alternates: { canonical: 'https://mictoo.com/fr/wma-to-mp3', languages: LANGS },

  openGraph: {
    title: "Comment convertir WMA en MP3 — méthodes gratuites (2026) | Mictoo",
    description: "Convertissez WMA (Windows Media Audio) en MP3 gratuitement. Convertisseurs en ligne, VLC, Audacity et ffmpeg — choisissez ce qui vous convient. Puis transcrivez le MP3 en texte avec Mictoo.",
    url: "https://mictoo.com/fr/wma-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comment convertir WMA en MP3 — méthodes gratuites (2026) | Mictoo",
    description: "Convertissez WMA (Windows Media Audio) en MP3 gratuitement. Convertisseurs en ligne, VLC, Audacity et ffmpeg — choisissez ce qui vous convient. Puis transcrivez le MP3 en texte avec Mictoo.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrWmaToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Comment convertir WMA en MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        WMA (Windows Media Audio) était le format Microsoft par défaut dans les années 2000 pour les dictaphones Windows et les rips Windows Media Player. Il fonctionne sous Windows mais reste pénible presque partout ailleurs — téléphones modernes, outils web et moteurs de transcription ne l'acceptent généralement pas. MP3 est le remplaçant universel. Voici quatre méthodes gratuites.
      </p>

      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700">
          <strong>Pourquoi convertir :</strong> Mictoo (et la plupart des outils de transcription modernes) ne lit pas le WMA directement — il utilise un codec propriétaire. Vous devrez d'abord convertir en MP3, M4A ou WAV. Le résultat MP3 sera légèrement plus petit et lisible partout.
        </p>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Méthode 1 — Convertisseur en ligne (sans installation)</h2>
          <p className="mb-4">
            Le plus simple si votre fichier fait moins de ~200 Mo et que l'enregistrement n'est pas sensible. Glisser, déposer, télécharger — généralement 5 à 15 secondes :
          </p>
          <p className="text-xs text-slate-500 mt-3">
            Vie privée : pour les enregistrements confidentiels (entretiens, appels professionnels, médical), préférez les méthodes de bureau ci-dessous — votre audio ne quitte jamais votre ordinateur.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Méthode 2 — VLC (Windows / macOS / Linux)</h2>

          <img
            src="/svg/vlc-convert-dialog.svg"
            alt="Boîte de dialogue Conversion VLC : source réglée sur recording.wma, profil sur Audio – MP3, fichier de destination en .mp3, bouton Démarrer."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={300}
          />

          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> est gratuit et lit le WMA nativement sur tous les systèmes. Conversion en quatre clics :
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Ouvrez VLC. Cliquez <strong>Média → Convertir / Enregistrer</strong>.</li>
            <li>Ajoutez votre fichier <code className="font-mono">.wma</code>, cliquez de nouveau <strong>Convertir / Enregistrer</strong>.</li>
            <li>Dans <strong>Profil</strong>, choisissez <code className="font-mono">Audio - MP3</code>.</li>
            <li>Choisissez un fichier de destination en <code className="font-mono">.mp3</code> et cliquez <strong>Démarrer</strong>.</li>
          </ol>
          <p className="mt-3">C'est fait. La barre de progression en bas de VLC devient l'indicateur de conversion.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Méthode 3 — Audacity (gratuit, toutes plateformes)</h2>
          <p className="mb-3">
            <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> est pratique si vous voulez aussi nettoyer l'audio (couper les silences, amplifier une voix faible, supprimer un bruit de fond) avant la transcription.
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>Fichier → Importer → Audio</strong> → choisissez le <code className="font-mono">.wma</code></li>
            <li>(Optionnel) éditez, normalisez, débruitiez.</li>
            <li><strong>Fichier → Exporter → Exporter en MP3</strong>. Choisissez mono et 64–96 kbps pour la voix.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Méthode 4 — Ligne de commande (ffmpeg)</h2>
          <p className="mb-4">
            Une seule ligne avec <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a> :
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.wma -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Pour la voix/transcription passez à <code className="font-mono">-ab 64k -ac 1</code> (mono, 64 kbps) — même précision, fichier 2–3× plus petit.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">MP3 prêt ?</h2>
          <p className="mb-4">
            Déposez-le dans Mictoo pour une transcription gratuite — fonctionne en 50+ langues, retourne horodatages, sous-titres SRT et résumé IA. Sans inscription.
          </p>
          <a href="/fr" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Transcrire MP3 en texte gratuitement
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Guides associés</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/fr/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC en MP3</a>
          <a href="/fr/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A en MP3</a>
          <a href="/fr/transcribe-audio-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Transcrire l'audio</a>
          <a href="/fr/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Compresser l'audio</a>
        </div>
      </div>
    </section>
  )
}
