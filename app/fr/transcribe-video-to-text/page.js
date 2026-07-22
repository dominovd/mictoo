import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: 'Vidéo en texte : Transcription vidéo en ligne gratuite pour MP4, MOV, WebM | Mictoo',
  description:
    'Téléchargez une vidéo MP4, MOV, WebM, AVI ou MKV et obtenez une transcription avec des horodatages, un résumé AI et des sous-titres SRT. Pour les enregistrements d’écran, les tutoriels, les vlogs et les webinaires.',
  alternates: {
    canonical: 'https://mictoo.com/fr/transcribe-video-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'Vidéo en texte : Transcription vidéo en ligne gratuite | Mictoo',
    description: 'Transcription vidéo MP4, MOV, WebM avec SRT, résumé et traduction.',
    url: 'https://mictoo.com/fr/transcribe-video-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vidéo en texte : Transcription vidéo en ligne gratuite',
    description: 'Transcription vidéo MP4, MOV, WebM avec SRT et résumé.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrTranscribeVideoToTextPage() {
  return (
    <FormatPageLayout
      locale="fr"
      badge="Fichiers vidéo · MP4 · MOV · WebM · Gratuit"
      h1First="Vidéo en texte"
      h1Second="Pour les enregistrements d’écran, les tutoriels et les vlogs"
      subtitle="Téléchargez un fichier MP4, MOV, WebM, MKV ou AVI. Nous extrayons la piste audio, transcrivons avec Whisper large-v3, et renvoyons une transcription avec des horodatages, un résumé AI et des sous-titres SRT prêts à être réintégrés dans la vidéo."
      highlightFormat="vidéo"
      relatedFormatsTitle="Conteneurs vidéo que vous pouvez télécharger"
      relatedFormats={[
        { key: 'video', name: 'MP4', ext: '.mp4' },
        { key: 'mov', name: 'MOV', ext: '.mov' },
        { key: 'webm', name: 'WebM', ext: '.webm', href: '/fr/webm-to-text' },
        { key: 'mkv', name: 'MKV', ext: '.mkv' },
        { key: 'avi', name: 'AVI', ext: '.avi' },
        { key: 'mpeg', name: 'MPEG', ext: '.mpeg' },
      ]}
      previewFileName="keynote-recording.mp4"
      previewWordCount={205}
      previewDurationLabel="32:47"
      enableYouTubeUrl={true}
      previewLines={[
        { t: '0:00',  line: 'Bonjour à tous, et merci d’être venus aujourd’hui.' },
        { t: '0:06',  line: 'Nous allons passer les trente prochaines minutes à discuter de la façon dont la vidéo a changé en 2026 et ce que cela signifie pour les créateurs.' },
        { t: '0:15',  line: 'Trois chiffres rapides avant de commencer. Quatre-vingt-douze pour cent des utilisateurs d’internet regardent des vidéos chaque semaine.' },
        { t: '0:24',  line: 'Le format court représente désormais plus de temps de visionnage que le format long sur toutes les grandes plateformes.' },
        { t: '0:32',  line: 'Et les recherches qui aboutissent à un résultat vidéo ont augmenté de deux fois et demie d’une année sur l’autre.' },
        { t: '0:41',  line: 'Les plateformes poussent donc la vidéo. Le public regarde plus de vidéos. Cela n’est pas controversé.' },
        { t: '0:50',  line: 'Ce qui est controversé, c’est ce qui attire réellement l’attention dans cet océan vidéo.' },
        { t: '0:58',  line: 'Permettez-moi de passer en revue les trois modèles que nous avons vus fonctionner pour les créateurs chaque semaine.' },
      ]}
      whyTitle="Pourquoi Mictoo pour la transcription vidéo"
      whyCards={[
        {
          icon: 'video',
          title: 'Tous les conteneurs vidéo courants',
          desc: 'MP4, MOV, WebM, MKV, AVI. Nous démuxons la piste audio côté serveur, donc vous téléchargez la vidéo telle quelle sans étape de conversion.',
        },
        {
          icon: 'clip',
          title: 'SRT et VTT prêts pour la timeline',
          desc: 'Les horodatages s’alignent sur la timeline vidéo originale. Téléchargez SRT ou VTT et intégrez-le directement dans Premiere, DaVinci, CapCut, ou votre téléchargement YouTube.',
        },
        {
          icon: 'sparkles',
          title: 'Résumé AI pour les descriptions',
          desc: 'Résumé généré automatiquement avec la transcription. Une solide première ébauche pour les descriptions vidéo, les récapitulatifs de blog et les titres de chapitres.',
        },
        {
          icon: 'globe',
          title: 'Traduire les sous-titres en 50+ langues',
          desc: 'Une fois la transcription prête, traduisez les sous-titres en espagnol, français, allemand, portugais et 45+ autres langues en un clic.',
        },
      ]}
      scenariosTitle="Quand la vidéo en texte est la bonne solution"
      scenarios={[
        {
          icon: 'video',
          title: 'Sous-titres vidéo YouTube',
          desc: 'Enregistré, monté et exporté en MP4. Déposez le fichier pour des sous-titres SRT et un résumé prêt à être utilisé.',
        },
        {
          icon: 'briefcase',
          title: 'Enregistrements Loom et d’écran',
          desc: 'WebM ou MP4 depuis Loom, OBS, ou capture d’écran du navigateur. Obtenez une version texte propre de la présentation.',
        },
        {
          icon: 'users',
          title: 'Enregistrements de webinaires et d’ateliers',
          desc: 'Enregistrement d’événements longs. La transcription devient le post de blog de suivi, le récapitulatif LinkedIn et l’archive consultable.',
        },
        {
          icon: 'editPen',
          title: 'Contenu de vlog et de tutoriel',
          desc: 'Montage de vlog, explication de tutoriel, ou démo de produit. La transcription alimente les notes de présentation, les sous-titres et la réutilisation sur les réseaux sociaux.',
        },
        {
          icon: 'book',
          title: 'Archive de leçons de cours',
          desc: 'Cours ou leçon enregistrée en MP4. Offrez aux étudiants une version texte consultable et verrouillez les sous-titres pour l’accessibilité.',
        },
        {
          icon: 'mic',
          title: 'Vidéo d’interview et de témoignage',
          desc: 'Interview assise ou témoignage client. La transcription facilite considérablement la citation, le montage et la traduction.',
        },
      ]}
      technicalTitle="Que se passe-t-il avec le fichier vidéo"
      technicalIntro="Mictoo utilise la piste audio parlée pour la transcription. Le conteneur et la qualité de l’image n’améliorent pas la reconnaissance vocale, mais ils affectent la taille de téléchargement et la disponibilité d’un flux audio."
      technicalFacts={[
        {
          icon: 'video',
          title: 'Piste audio extraite',
          desc: 'La piste de parole est décodée à partir du conteneur vidéo. Vous n’avez pas besoin d’exporter un MP3 séparé avant de télécharger.',
        },
        {
          icon: 'clip',
          title: 'Timeline originale conservée',
          desc: 'Les segments de transcription et les exports de sous-titres utilisent la timeline média originale afin qu’ils puissent être associés à la vidéo.',
        },
        {
          icon: 'layers',
          title: 'Le conteneur n’est pas le codec',
          desc: 'MP4, MOV, WebM, MKV et AVI peuvent contenir différents codecs audio. Le fichier est inspecté lors de son traitement.',
        },
        {
          icon: 'ear',
          title: 'La parole est requise',
          desc: 'Les clips silencieux et les vidéos uniquement musicales n’ont pas de transcription parlée fiable. Vérifiez d’abord que la piste audio prévue est audible.',
        },
      ]}
      faq={[
        {
          q: 'Quels formats vidéo Mictoo accepte-t-il ?',
          a: 'MP4, MOV, WebM, MKV, AVI, et la plupart des autres conteneurs courants. Nous démuxons la piste audio côté serveur, donc vous pouvez télécharger directement l’un de ces formats sans conversion préalable.',
        },
        {
          q: 'Quelle taille de fichier vidéo puis-je télécharger ?',
          a: 'Jusqu’à 25 MB de manière anonyme, 60 MB lorsque vous êtes connecté. Pour les vidéos plus longues, nous divisons automatiquement les fichiers jusqu’à environ 3 heures si vous êtes connecté. Pour des exports très volumineux, réduisez d’abord la taille de la vidéo ou extrayez la piste audio et téléchargez l’audio.',
        },
        {
          q: 'Puis-je coller une URL YouTube à la place ?',
          a: 'Oui. Sur cette page, vous pouvez coller une URL de vidéo YouTube et Mictoo récupérera les sous-titres lorsqu’ils sont disponibles. Lorsqu’aucun sous-titre n’existe, téléchargez le fichier vidéo ou l’audio extrait pour une transcription complète avec Whisper.',
        },
        {
          q: 'Les horodatages s’alignent-ils avec la vidéo originale ?',
          a: 'Oui. Les horodatages de la transcription et des SRT/VTT utilisent la timeline vidéo originale. Ils fournissent une première piste de sous-titres utile, mais vous devez vérifier le timing et les sauts de ligne dans votre éditeur avant de publier.',
        },
        {
          q: 'Puis-je obtenir des sous-titres SRT pour la vidéo ?',
          a: 'Oui. Téléchargez au format SRT ou VTT après la transcription. Les deux formats fonctionnent dans Premiere, DaVinci Resolve, Final Cut, CapCut, YouTube Studio, et la plupart des lecteurs vidéo modernes.',
        },
        {
          q: 'Extrairez-vous l’audio des clips vidéo silencieux ?',
          a: 'Non. Si la vidéo n’a pas de parole audible, il n’y a rien à transcrire. Pour les clips avec uniquement de la musique, la transcription sera généralement vide ou constituée de courts fragments de paroles.',
        },
        {
          q: 'Puis-je traduire les sous-titres dans une autre langue ?',
          a: 'Oui. Après la transcription, choisissez une langue cible et cliquez sur Traduire. La traduction fonctionne sur GPT-4o-mini et apparaît à côté de l’original. Exportez le SRT traduit pour des sous-titres en langue étrangère.',
        },
        {
          q: 'Mon fichier vidéo sera-t-il enregistré sur vos serveurs ?',
          a: 'Non. La vidéo est diffusée au fournisseur de transcription, nous extrayons l’audio en mémoire, transcrivons une fois, et supprimons tout de la mémoire. La transcription n’est stockée que si vous vous connectez et choisissez de l’enregistrer dans l’historique.',
        },
        {
          q: 'Mictoo transcrit-il des vidéos non anglaises ?',
          a: 'Oui. Whisper large-v3 prend en charge plus de 50 langues avec détection automatique. Pour les vidéos courtes ou le contenu non anglais, définissez explicitement la langue dans le menu déroulant pour une détection plus propre lors du premier passage.',
        },
        {
          q: 'Combien de temps prend une transcription vidéo ?',
          a: 'Une vidéo MP4 de 30 minutes se termine généralement en 40 à 70 secondes. Le temps de téléchargement et la taille du fichier vidéo sont généralement les étapes les plus longues car nous devons recevoir le fichier avant de démuxer l’audio.',
        },
      ]}
      ctaHeadline="Déposez votre vidéo, obtenez des sous-titres et une transcription"
      ctaSubtitle="MP4, MOV, WebM, MKV, AVI. SRT, VTT, DOCX, et un résumé en quelques secondes."
      ctaButton="Télécharger la vidéo pour transcrire"
    />
  )
}