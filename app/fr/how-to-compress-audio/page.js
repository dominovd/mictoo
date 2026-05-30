const LANGS = {
  'en': 'https://mictoo.com/how-to-compress-audio',
  'fr': 'https://mictoo.com/fr/how-to-compress-audio',
  'de': 'https://mictoo.com/de/how-to-compress-audio',
  'es': 'https://mictoo.com/es/how-to-compress-audio',
  'ru': 'https://mictoo.com/ru/how-to-compress-audio',
  'it': 'https://mictoo.com/it/how-to-compress-audio',
  'pt': 'https://mictoo.com/pt/how-to-compress-audio',
  'pl': 'https://mictoo.com/pl/how-to-compress-audio',
  'ja': 'https://mictoo.com/ja/how-to-compress-audio',
  'ko': 'https://mictoo.com/ko/how-to-compress-audio',
  'x-default': 'https://mictoo.com/how-to-compress-audio',
}

export const metadata = {
  title: 'Comment compresser l\'audio pour la transcription — Méthodes gratuites | Mictoo',
  description: 'Trois moyens gratuits de réduire un fichier audio ou vidéo sous 25 Mo pour la transcription : extraire l\'audio, baisser le bitrate, ou découper le fichier. Sans installation.',
  alternates: { canonical: 'https://mictoo.com/fr/how-to-compress-audio', languages: LANGS },

  openGraph: {
    title: "Comment compresser l\\'audio pour la transcription — Méthodes gratuites | Mictoo",
    description: "Trois moyens gratuits de réduire un fichier audio ou vidéo sous 25 Mo pour la transcription : extraire l\\'audio, baisser le bitrate, ou découper le fichier. Sans installation.",
    url: "https://mictoo.com/fr/how-to-compress-audio",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comment compresser l\\'audio pour la transcription — Méthodes gratuites | Mictoo",
    description: "Trois moyens gratuits de réduire un fichier audio ou vidéo sous 25 Mo pour la transcription : extraire l\\'audio, baisser le bitrate, ou découper le fichier. Sans installation.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrHowToCompressAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Comment compresser l&apos;audio pour la transcription</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Mictoo accepte des fichiers jusqu&apos;à <strong>25 Mo</strong> gratuitement. Si votre fichier est plus gros, voici
        trois moyens rapides de le réduire sans perdre en qualité de transcription. Choisissez celui
        qui convient à votre fichier et vos compétences.
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Méthode 1 — Extraire l&apos;audio d&apos;un fichier vidéo</h2>
          <p className="mb-4">
            Si vous avez un fichier vidéo (MP4, WEBM, MOV) principalement parlé, la piste audio
            est généralement 5 à 10× plus petite que la vidéo. Mictoo n&apos;a besoin que de l&apos;audio — la vidéo
            n&apos;aide pas à la transcription. C&apos;est la solution la plus rapide pour la plupart des utilisateurs.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">En ligne (sans installation)</h3>
          <p className="mb-2">Utilisez notre convertisseur en ligne — déposez le fichier, récupérez le MP3 en quelques secondes. Gratuit, sans inscription, sans filigrane :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="/mp4-to-mp3" className="text-brand-600 hover:underline">MP4 vers MP3</a> — extrait la piste audio de n&apos;importe quelle vidéo MP4.</li>
            <li><a href="/webm-to-mp3" className="text-brand-600 hover:underline">WEBM vers MP3</a> — pour les téléchargements YouTube et les enregistrements d&apos;écran.</li>
            <li><a href="/wav-to-mp3" className="text-brand-600 hover:underline">WAV vers MP3</a> — compresse un WAV non compressé en MP3 gérable.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Ligne de commande (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -vn -acodec copy output.m4a`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-vn</code> supprime la vidéo, <code className="font-mono">-acodec copy</code> garde la qualité audio intacte. Rapide — aucun ré-encodage.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Méthode 2 — Baisser le bitrate audio</h2>
          <p className="mb-4">
            La plupart des podcasts et réunions sont enregistrés à 128-192 kbps. Pour la transcription, 64 kbps mono
            est largement suffisant — la précision reste identique et le fichier devient 2-3× plus petit. C&apos;est
            la meilleure méthode pour les fichiers audio longs.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Ligne de commande (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -ac 1 -b:a 64k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ac 1</code> convertit en mono (la parole passe bien en mono),
            <code className="font-mono">-b:a 64k</code> fixe le bitrate audio à 64 kbps.
          </p>
          <p className="mt-3"><strong>Calcul rapide :</strong> 64 kbps donne ~28 Mo par heure. Un entretien d&apos;une heure tient à peu près en 28 Mo — proche de la limite. Passez à <code className="font-mono">-b:a 48k</code> pour ~21 Mo/heure sans perte de précision notable.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Méthode 3 — Découper en parties plus courtes</h2>
          <p className="mb-4">
            Si vous devez garder la qualité d&apos;origine (juridique, médical, archives), découpez le fichier en
            morceaux de 20-25 minutes et transcrivez chacun séparément. Puis assemblez les transcriptions dans n&apos;importe
            quel éditeur de texte.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Ligne de commande (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1200 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Découpe le fichier d&apos;entrée en parties de 20 minutes (<code className="font-mono">1200</code> secondes) nommées <code className="font-mono">part_001.mp3</code>, <code className="font-mono">part_002.mp3</code>, etc. Puis uploadez chacune dans Mictoo.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">C&apos;est bon ?</h2>
          <p className="mb-4">
            Une fois votre fichier sous 25 Mo, revenez à la page d&apos;accueil et déposez-le dans l&apos;outil de transcription.
          </p>
          <a href="/fr" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Retour à la transcription
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Plus d&apos;outils de transcription</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/fr/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3 en texte</a>
          <a href="/fr/transcribe-video-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Vidéo en texte</a>
          <a href="/fr/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A en texte</a>
          <a href="/fr" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Tous les formats</a>
        </div>
      </div>
    </section>
  )
}
