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
  title: 'Comment diviser un long fichier audio pour la transcription — Méthodes gratuites | Mictoo',
  description: 'Trois façons gratuites de diviser un long enregistrement en parties plus courtes pour la transcription : outils en ligne, Audacity ou ffmpeg. Fonctionne pour MP3, M4A, WAV, MP4 et plus.',
  alternates: { canonical: 'https://mictoo.com/fr/how-to-split-audio', languages: LANGS },
}

export default function FrHowToSplitAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Comment diviser un long fichier audio pour la transcription</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Mictoo transcrit des fichiers jusqu&apos;à <strong>30 minutes</strong> pour les utilisateurs anonymes et
        <strong> 60 minutes</strong> lorsque vous êtes connecté. Si votre enregistrement est plus long,
        la solution la plus propre est de le diviser en deux ou trois parties plus courtes et de transcrire chacune séparément.
        Voici trois façons gratuites de le faire — choisissez celle qui correspond à votre fichier et à vos compétences.
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Méthode 1 — Outils en ligne (sans installation)</h2>
          <p className="mb-4">
            L&apos;option la plus rapide pour une division ponctuelle. Glissez-déposez le fichier, définissez un début/une fin,
            téléchargez le morceau. Répétez pour chaque segment.
          </p>


          <p className="mt-3 text-xs text-slate-500">
            Conseil : coupez à une pause naturelle (entre les phrases ou les intervenants) pour que la transcription
            se lise sans heurts une fois les parties assemblées.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Méthode 2 — Audacity (application gratuite)</h2>
          <p className="mb-4">
            Le meilleur choix pour la précision, surtout si l&apos;enregistrement contient des silences ou pauses
            où l&apos;on souhaite couper. Audacity est gratuit et open-source pour macOS, Windows et Linux.
          </p>

          <ol className="list-decimal pl-5 space-y-1">
            <li>Téléchargez <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> et ouvrez votre fichier audio.</li>
            <li>Utilisez <strong>Fichier → Importer → Audio</strong> si nécessaire. Audacity lit MP3, M4A, WAV, FLAC, OGG et plus.</li>
            <li>Cliquez sur la forme d&apos;onde au point de découpe (Ctrl/Cmd+B pour placer un repère, ou sélectionnez la région pour une partie).</li>
            <li>Choisissez <strong>Fichier → Exporter → Exporter l&apos;audio sélectionné</strong> et enregistrez la première partie en MP3 ou WAV.</li>
            <li>Sélectionnez la région suivante, exportez, recommencez.</li>
          </ol>

          <p className="mt-3 text-xs text-slate-500">
            Pour les longs enregistrements, l&apos;outil <strong>Analyse → Sound Finder</strong> d&apos;Audacity trouve
            les régions silencieuses automatiquement — pratique pour diviser podcasts et interviews sur les pauses naturelles.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Méthode 3 — Ligne de commande (ffmpeg)</h2>
          <p className="mb-4">
            Une commande divise le fichier entier en parties de même durée. Sans réencodage, donc instantané
            même sur un enregistrement de 2 heures. Idéal si ffmpeg est déjà installé.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Diviser en parties de 25 minutes</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1500 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">1500</code> est la durée du segment en secondes (25 min).
            Les fichiers sortants seront <code className="font-mono">part_001.mp3</code>,{' '}
            <code className="font-mono">part_002.mp3</code>, etc. Le drapeau{' '}
            <code className="font-mono">-c copy</code> évite le réencodage : la division est sans perte et rapide.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Extraire une plage horaire précise</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -ss 00:00:00 -t 00:25:00 -c copy part1.mp4
ffmpeg -i input.mp4 -ss 00:25:00 -t 00:25:00 -c copy part2.mp4`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ss</code> est le temps de début, <code className="font-mono">-t</code>{' '}
            est la durée. Fonctionne aussi pour les fichiers vidéo — la piste audio est divisée de la même façon.
          </p>

          <p className="mt-3">
            Pas encore ffmpeg ? Installez via{' '}
            <a href="https://ffmpeg.org/download.html" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg.org/download</a>{' '}
            ou avec Homebrew sur macOS : <code className="font-mono">brew install ffmpeg</code>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Recoller les transcriptions</h2>
          <p className="mb-3">
            Transcrivez chaque partie sur Mictoo, puis collez les résultats dans un seul document, dans l&apos;ordre.
            Quelques conseils pour un texte final propre :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Coupez à une pause quand c&apos;est possible — les mots ne sont pas coupés en deux.</li>
            <li>Si la coupure tombe au milieu d&apos;une phrase, le premier mot de la partie suivante peut être en majuscule. Facile à corriger dans un éditeur de texte.</li>
            <li>Pour les sous-titres SRT/VTT : ajoutez la durée totale de la partie précédente à chaque horodatage du fichier suivant. Un find-and-replace ou un petit script suffit.</li>
            <li>Le résumé IA de Mictoo fonctionne mieux sur une transcription unique — combinez d&apos;abord les parties, puis relancez le résumé sur le texte joint.</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Tout est prêt ?</h2>
          <p className="mb-4">
            Une fois chaque partie sous la limite de durée, retournez à la page d&apos;accueil et déposez-les une par une.
          </p>
          <a href="/fr" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Retour à la transcription
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Plus de guides de transcription</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/fr/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Comment compresser l&apos;audio</a>
          <a href="/fr/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3 en texte</a>
          <a href="/fr/podcast-transcription" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Transcription de podcast</a>
          <a href="/fr" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Tous les formats</a>
        </div>
      </div>
    </section>
  )
}
