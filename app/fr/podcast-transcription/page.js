import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'ko': 'https://mictoo.com/ko/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'Transcription de podcast avec résumé et SRT | Mictoo',
  description:
    'Téléchargez un épisode de podcast et obtenez un texte horodaté, un résumé AI et des exports pour les notes de l\'émission, les sous-titres et votre archive.',
  alternates: {
    canonical: 'https://mictoo.com/fr/podcast-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcription de podcast : Générateur de transcription de podcast gratuit | Mictoo',
    description: 'Téléchargez votre épisode, obtenez une transcription propre et horodatée en quelques secondes.',
    url: 'https://mictoo.com/fr/podcast-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcription de podcast : Générateur gratuit',
    description: 'Téléchargez votre épisode, obtenez une transcription propre.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrPodcastTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="fr"
      badge="Podcasteurs · Hôtes · Gratuit"
      h1First="Transcription de podcast"
      h1Second="Transcription AI gratuite pour chaque épisode"
      subtitle="Déposez votre épisode depuis n’importe quel outil d’enregistrement. Obtenez une transcription propre et horodatée avec un résumé AI prêt pour les notes de l’émission, le récapitulatif SEO et les sous-titres YouTube."
      currentHref="/fr/podcast-transcription"

      platforms={[
        { name: 'Riverside',  iconKey: 'waveMic',   brandBg: '#4B2AF7' },
        { name: 'Zencastr',   iconKey: 'soundwave', brandBg: '#F7B32B' },
        { name: 'SquadCast',  iconKey: 'waveMic',   brandBg: '#7E22CE' },
        { name: 'Cleanfeed',  iconKey: 'soundwave', brandBg: '#0F766E' },
        { name: 'Descript',   iconKey: 'soundwave', brandBg: '#111827' },
        { name: 'Anchor',     iconKey: 'mic',       brandBg: '#8B5CF6' },
      ]}

      howItWorksTitle="Comment fonctionne la transcription de podcast"
      steps={[
        {
          icon: 'folder',
          title: 'Exporter l\'épisode',
          desc: 'Tout format produit par votre DAW ou outil d\'enregistrement. MP3 est le plus courant, mais M4A, WAV et FLAC fonctionnent également.',
        },
        {
          icon: 'upload',
          title: 'Déposez le fichier ici',
          desc: 'Téléchargez des fichiers jusqu\'à 60 Mo lorsque vous êtes connecté. Les épisodes plus longs sont automatiquement divisés en segments et assemblés à nouveau.',
        },
        {
          icon: 'editPen',
          title: 'Notes de l\'émission, sous-titres, exports',
          desc: 'Transcription, résumé AI, SRT pour la version vidéo YouTube, et DOCX pour le blog. Le temps de traitement dépend de la longueur de l\'épisode et de la taille du fichier.',
        },
      ]}

      exampleTitle="Exemple de transcription de podcast"
      exampleFileName="episode-042.mp3"
      exampleDurationLabel="52:07"
      exampleLines={[
        { t: '0:00',  line: 'Bienvenue de nouveau dans l\'émission. C\'est l\'épisode quarante-deux, et aujourd\'hui nous parlons du podcasting indépendant en 2026.' },
        { t: '0:10',  line: 'Mon invité anime une émission hebdomadaire depuis huit ans sans manquer un épisode. Merci d\'être ici.' },
        { t: '0:20',  line: 'Merci de m\'accueillir. C\'est fou de penser que nous avons commencé cela à une époque où tout le monde disait que l\'audio était déjà saturé.' },
        { t: '0:30',  line: 'Commençons par là. Qu\'est-ce qui était différent lors du lancement d\'un podcast en 2018 par rapport à maintenant.' },
        { t: '0:38',  line: 'La distribution était plus difficile à pénétrer, mais les auditeurs étaient plus patients. L\'attention était moins chère, en gros.' },
        { t: '0:48',  line: 'Aujourd\'hui, les outils sont incroyables. Transcription en quelques secondes, notes de l\'émission AI, mais l\'attention elle-même est beaucoup plus rare.' },
        { t: '0:58',  line: 'C\'est une bonne transition. Quel est votre flux de travail pour les notes de l\'émission maintenant que les transcriptions sont essentiellement gratuites.' },
      ]}
      summaryPoints={[
        'Épisode 42, focus sur le podcasting indépendant en 2026.',
        'Invité : animateur d\'émission hebdomadaire depuis 8 ans.',
        'Discussion : changements de distribution 2018 vs 2026.',
        'L\'économie de l\'attention est le nouveau goulet d\'étranglement.',
      ]}
      actionItems={[
        'Rédiger des notes de l\'émission à partir du résumé',
        'Extraire 3 citations pour les réseaux sociaux',
        'Publier SRT pour la version vidéo YouTube',
      ]}

      whyTitle="Pourquoi Mictoo pour la transcription de podcast"
      whyCards={[
        {
          icon: 'sparkles',
          title: 'Résumé AI pour les notes de l\'émission',
          desc: 'Un bon premier brouillon pour les descriptions d\'épisode, les récapitulatifs de blog et les notes de l\'émission optimisées pour le SEO.',
        },
        {
          icon: 'clip',
          title: 'SRT pour la version YouTube',
          desc: 'Les horodatages s\'alignent sur l\'audio original. Déposez le SRT dans YouTube Studio et les sous-titres sont prêts.',
        },
        {
          icon: 'globe',
          title: 'Traduire pour des audiences internationales',
          desc: 'Traduction en un clic vers plus de 50 langues. Les hôtes solo se syndiquent à l\'échelle mondiale sans agence de traduction.',
        },
        {
          icon: 'gear',
          title: 'Tout bitrate, tout enregistreur',
          desc: 'Des notes vocales à 32 kbps aux rebonds de studio à 320 kbps se transcrivent de manière identique pour un discours clair.',
        },
      ]}

      scenariosTitle="Scénarios de transcription de podcast"
      scenarios={[
        { icon: 'chat',      title: 'Notes de l\'émission' },
        { icon: 'clip',      title: 'Sous-titres YouTube' },
        { icon: 'search',    title: 'Récapitulatif SEO' },
        { icon: 'sparkles',  title: 'Clips de citation' },
        { icon: 'globe',     title: 'Traduction' },
        { icon: 'book',      title: 'Ancien catalogue' },
      ]}

      tipsTitle="Conseils pour des transcriptions de podcast plus claires"
      tips={[
        'Bounce une piste uniquement vocale lorsque votre DAW le permet.',
        'Un MP3 mono optimisé pour la voix à 64 kbps se transcrit tout aussi bien.',
        'Pour les épisodes d\'interview, retirez les musiques d\'ambiance avant la transcription.',
        'Vérifiez les noms des hôtes et des invités une fois, ils apparaissent de manière cohérente par la suite.',
      ]}

      guidesTitle="Guides de transcription connexes"
      guides={[
        { href: '/fr/transcribe-mp3-to-text',    icon: 'file',  title: 'Transcription MP3',   desc: 'Guide de format de podcast' },
        { href: '/fr/m4a-to-text',               icon: 'file',  title: 'Transcription M4A',   desc: 'Exports GarageBand et Apple' },
        { href: '/fr/wav-to-text',               icon: 'file',  title: 'Transcription WAV',   desc: 'Rebonds de studio' },
        { href: '/fr/timestamped-transcription', icon: 'file',  title: 'Plongée dans les horodatages', desc: 'Mécanique d\'export SRT / VTT' },
      ]}

      faq={[
        {
          q: 'Avec quelles plateformes de podcast Mictoo fonctionne-t-il ?',
          a: 'Toutes. Nous acceptons tout fichier audio ou vidéo, peu importe l\'hôte. Courant : Riverside, Zencastr, SquadCast, Anchor, Buzzsprout, Libsyn. Gratuit par fichier jusqu\'à 60 Mo lorsque vous êtes connecté.',
        },
        {
          q: 'Puis-je obtenir la transcription en tant que notes de l\'émission automatiquement ?',
          a: 'Le résumé AI apparaît automatiquement avec la transcription. Utilisez-le comme premier brouillon de vos notes de l\'émission, puis ajustez pour correspondre à votre voix.',
        },
        {
          q: 'Mon épisode fait plus de 60 Mo. Que faire ?',
          a: 'Connectez-vous pour diviser automatiquement les fichiers plus longs, ou réduisez d\'abord avec ffmpeg -i episode.mp3 -b:a 64k -ac 1 out.mp3. Un podcast de 60 minutes devient ~28 Mo sans perte de précision.',
        },
        {
          q: 'Puis-je télécharger SRT pour la version vidéo YouTube ?',
          a: 'Oui. SRT et VTT incluent des horodatages alignés sur l\'audio original. Déposez directement dans YouTube Studio.',
        },
        {
          q: 'Mictoo transcrit-il des podcasts non anglais ?',
          a: 'Oui. Whisper large-v3 prend en charge plus de 50 langues avec détection automatique. Pour les épisodes courts ou les accents inhabituels, choisissez la langue explicitement.',
        },
        {
          q: 'Les épisodes sont-ils stockés sur vos serveurs ?',
          a: 'Non. L\'audio est diffusé au fournisseur de transcription, traité une fois, et supprimé de la mémoire. Les transcriptions ne sont stockées que si vous êtes connecté.',
        },
        {
          q: 'Puis-je identifier qui parle (hôte vs invité) ?',
          a: 'Non. La transcription actuelle est un texte continu avec des horodatages et sans étiquettes de locuteur automatiques.',
        },
      ]}

      ctaHeadline="Transformez chaque épisode en texte publiable"
      ctaSubtitle="Notes de l’émission, sous-titres YouTube, récapitulatif SEO, traduction. Tout cela à partir d’un seul téléchargement."
      ctaButton="Télécharger un épisode de podcast"

      relatedLinks={[
        { href: '/fr/interview-transcription',   label: 'Transcription d\'interview' },
        { href: '/fr/webinar-transcription',     label: 'Transcription de webinaire' },
        { href: '/fr/transcribe-mp3-to-text',    label: 'MP3 vers texte' },
        { href: '/fr/free-srt-generator',        label: 'Générateur SRT gratuit' },
        { href: '/fr/meeting-transcription',     label: 'Transcription de réunion' },
      ]}
    />
  )
}