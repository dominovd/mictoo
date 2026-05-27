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
  title: 'Comment convertir AAC en MP3 — méthodes gratuites (2026) | Mictoo',
  description: "Convertissez gratuitement vos fichiers audio AAC en MP3. Trois méthodes rapides : convertisseur en ligne, QuickTime/VLC, ou ffmpeg en ligne de commande. Astuce : Mictoo peut transcrire la plupart des fichiers AAC directement.",
  alternates: { canonical: 'https://mictoo.com/fr/aac-to-mp3', languages: LANGS },
}

export default function FrAacToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Comment convertir AAC en MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        AAC (Advanced Audio Coding) est le format par défaut des mémos vocaux iPhone, des dictaphones Android et de l'audio dans la vidéo MP4. MP3 reste plus universel et fonctionne avec tous les lecteurs, éditeurs et outils de transcription. Voici trois méthodes gratuites — et une note rapide pour savoir si vous avez vraiment besoin de convertir.
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>Avant de convertir :</strong> si votre objectif est la transcription, Mictoo accepte la plupart des fichiers AAC directement — y compris les fichiers <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.aac</code> dans des conteneurs MP4 (mémos vocaux iPhone, partages, dictaphones Android). Essayez d'abord ; vous n'avez besoin de convertir que si le fichier est refusé.
        </p>
        <a href="/fr" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline">
          ↑ Transcrire le .aac directement
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Méthode 1 — Convertisseur en ligne (sans installation)</h2>

          <img
            src="/svg/online-converter-3step.svg"
            alt="Trois étapes : déposer le fichier AAC, choisir MP3 comme format de sortie, télécharger le résultat."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={240}
          />

          <p className="mb-4">
            Le plus rapide pour les fichiers de moins de ~200 Mo. Glissez-déposez dans le navigateur, récupérez le MP3 en quelques secondes. Tous fonctionnent sans inscription :
          </p>
          <p className="text-xs text-slate-500 mt-3">
            Conseil vie privée : les convertisseurs en ligne envoient votre fichier sur leurs serveurs. Pour des enregistrements sensibles (médical, juridique, appels professionnels), préférez une méthode de bureau ci-dessous.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Méthode 2 — Applications de bureau (hors ligne)</h2>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">macOS — QuickTime + iMovie</h3>
          <p className="mb-2">
            QuickTime peut ouvrir les fichiers AAC. Utilisez <strong>Fichier → Exporter en tant que → Audio uniquement</strong> et choisissez MP3 dans la boîte de dialogue. Intégré à tous les Mac.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Windows / macOS / Linux — Audacity (gratuit)</h3>
          <p>
            Ouvrez le fichier AAC dans <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a>, puis <strong>Fichier → Exporter → Exporter en MP3</strong>. Choisissez mono et 64–96 kbps si l'audio est vocal.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Multiplateforme — VLC</h3>
          <p>
            VLC convertit via <strong>Média → Convertir / Enregistrer</strong>. Ajoutez le .aac, choisissez le profil <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded mx-1">Audio - MP3</code>, sélectionnez la destination, cliquez sur Démarrer.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Méthode 3 — Ligne de commande (ffmpeg)</h2>
          <p className="mb-4">
            Une seule ligne avec <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a> installé :
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.aac -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Pour la voix/transcription, passez à <code className="font-mono">-ab 64k -ac 1</code> pour un fichier 2–3× plus petit sans perte de précision.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Vous avez votre MP3 ?</h2>
          <p className="mb-4">
            Déposez-le dans Mictoo pour obtenir une transcription gratuite avec horodatages, sous-titres SRT et résumé IA. Sans inscription.
          </p>
          <a href="/fr" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Transcrire MP3 en texte gratuitement
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Guides associés</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/fr/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMA en MP3</a>
          <a href="/fr/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A en MP3</a>
          <a href="/fr/aac-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC en texte</a>
          <a href="/fr/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Compresser l'audio</a>
        </div>
      </div>
    </section>
  )
}
