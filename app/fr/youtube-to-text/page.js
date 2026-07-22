import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube vers texte : Transcription, résumé et SRT | Mictoo',
  description:
    'Collez une URL YouTube pour utiliser les sous-titres disponibles, ou téléchargez de l’audio pour une nouvelle transcription avec des horodatages, un résumé et un export SRT.',
  alternates: {
    canonical: 'https://mictoo.com/fr/youtube-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'YouTube vers texte : Transcription gratuite de vidéo YouTube | Mictoo',
    description: 'Collez une URL YouTube, obtenez une transcription propre avec des horodatages, un résumé et des sous-titres SRT.',
    url: 'https://mictoo.com/fr/youtube-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube vers texte : Transcription gratuite de YouTube',
    description: 'Collez une URL YouTube ou téléchargez de l’audio, obtenez une transcription.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrYouTubeToTextPage() {
  return (
    <UseCaseLayout
      locale="fr"
      badge="URL YouTube ou téléchargez · Gratuit · Pas d’inscription"
      h1First="YouTube vers texte"
      h1Second="Collez une URL, obtenez une transcription propre"
      subtitle="Collez un lien YouTube pour utiliser les sous-titres déjà disponibles, ou téléchargez de l’audio pour créer une nouvelle transcription Whisper. Examinez le texte, générez un résumé et exportez des sous-titres SRT."
      currentHref="/fr/youtube-to-text"
      enableYouTubeUrl

      platforms={[
        { name: 'YouTube',      iconKey: 'videoCameraFill', brandBg: '#FF0000' },
        { name: 'YouTube Live', iconKey: 'broadcast',       brandBg: '#B91C1C' },
        { name: 'YT Shorts',    iconKey: 'videoCameraFill', brandBg: '#DC2626' },
        { name: 'YT Music',     iconKey: 'soundwave',       brandBg: '#7F1D1D' },
        { name: 'YT Premium',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'Video hub',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/fr/transcribe-video-to-text' },
      ]}

      howItWorksTitle="Comment fonctionne la transcription YouTube"
      steps={[
        {
          icon: 'folder',
          title: 'Collez une URL ou téléchargez de l’audio',
          desc: 'Chemin rapide : collez le lien YouTube, nous récupérons les sous-titres existants. Chemin Whisper : téléchargez l’audio pour une nouvelle transcription.',
        },
        {
          icon: 'upload',
          title: 'Sous-titres ou transcription fraîche',
          desc: 'Le chemin URL renvoie les sous-titres disponibles. Le chemin de téléchargement exécute Whisper large-v3 ; le temps de traitement dépend de la longueur et de la taille des médias.',
        },
        {
          icon: 'editPen',
          title: 'Résumé, SRT, traduction',
          desc: 'Résumé AI accompagné de la transcription. Téléchargez SRT pour la vidéo, traduisez en plus de 50 langues, exportez au format DOCX ou PDF.',
        },
      ]}

      exampleTitle="Exemple de transcription YouTube"
      exampleFileName="youtube-video.mp4"
      exampleDurationLabel="12:34"
      exampleLines={[
        { t: '0:00',  line: 'Bienvenue de nouveau sur la chaîne. Aujourd’hui, nous examinons les trois plus grands changements dans l’analyse de produit en 2026.' },
        { t: '0:12',  line: 'Changement un, la lecture de session est désormais essentielle. Chaque outil sérieux l’inclut dans le niveau de base.' },
        { t: '0:24',  line: 'Changement deux, le passage des tableaux de bord SQL personnalisés à l’interrogation en langage naturel se fait rapidement.' },
        { t: '0:37',  line: 'Changement trois, les outils natifs d’entrepôt remplacent l’ancienne pile d’analyse basée sur les événements.' },
        { t: '0:50',  line: 'Laissez-moi vous expliquer ce que chaque changement signifie réellement pour les outils que vous devriez évaluer cette année.' },
        { t: '1:02',  line: 'Lecture de session d’abord. Si votre outil actuel facture un supplément pour cela, c’est un signal pour chercher ailleurs.' },
        { t: '1:14',  line: 'Les outils modernes regroupent la lecture avec les événements, les entonnoirs et les cohortes en un seul produit, pas un supplément payant.' },
      ]}
      summaryPoints={[
        '3 plus grands changements dans l’analyse de produit en 2026.',
        'La lecture de session est désormais essentielle dans les outils sérieux.',
        'Passage des tableaux de bord SQL à l’interrogation en langage naturel.',
        'Les outils natifs d’entrepôt remplacent les piles basées sur les événements.',
      ]}
      actionItems={[
        'Évaluez l’outil actuel pour la lecture groupée',
        'Essayez 1 outil d’analyse natif d’entrepôt ce trimestre',
        'Rédigez un récapitulatif de blog des 3 changements',
      ]}

      whyTitle="Pourquoi choisir Mictoo pour la transcription YouTube"
      whyCards={[
        {
          icon: 'target',
          title: 'Choisissez le bon chemin de transcription',
          desc: 'Utilisez les sous-titres existants pour la rapidité, ou téléchargez de l’audio lorsque vous souhaitez une nouvelle transcription à examiner pour les noms, la ponctuation et les termes spécialisés.',
        },
        {
          icon: 'clip',
          title: 'SRT pour la description de la vidéo',
          desc: 'Téléchargez SRT et re-téléchargez-le dans YouTube Studio pour des sous-titres modifiés, ou utilisez-le ailleurs dans votre flux de travail.',
        },
        {
          icon: 'sparkles',
          title: 'Résumé AI pour les notes d’épisode',
          desc: 'Bon premier brouillon pour la description de la vidéo, le récapitulatif du blog et les titres de chapitres. Transformez un podcast de 60 minutes en 200 mots.',
        },
        {
          icon: 'globe',
          title: 'Traduisez les sous-titres en plus de 50 langues',
          desc: 'Public international ? Traduisez la transcription puis re-téléchargez-la sous forme de SRT traduit pour votre vidéo.',
        },
      ]}

      scenariosTitle="Scénarios YouTube courants"
      scenarios={[
        { icon: 'search',    title: 'Rechercher une vidéo' },
        { icon: 'editPen',   title: 'Récapitulatif de blog' },
        { icon: 'clip',      title: 'Sous-titres SRT' },
        { icon: 'chat',      title: 'Citation' },
        { icon: 'globe',     title: 'Traduire les sous-titres' },
        { icon: 'headset',   title: 'Podcast sur YT' },
      ]}

      tipsTitle="Conseils pour les transcriptions YouTube"
      tips={[
        'Le chemin le plus rapide est l’URL lorsque la vidéo a déjà des sous-titres.',
        'Pour les vidéos techniques ou non-anglophones, préférez le chemin de téléchargement audio.',
        'Pour les flux très longs : téléchargez l’audio et divisez-le avant le téléchargement.',
        'Pour vos propres vidéos, téléchargez l’audio source pour la meilleure précision.',
      ]}

      guidesTitle="Outils connexes"
      guides={[
        { href: '/fr/transcribe-video-to-text',      icon: 'video', title: 'Vidéo vers texte',       desc: 'Non-YouTube MP4, MOV, WebM' },
        { href: '/fr/transcribe-audio-to-text',      icon: 'file',  title: 'Audio vers texte',       desc: 'Tout format audio' },
        { href: '/fr/free-srt-generator',            icon: 'file',  title: 'Générateur SRT',       desc: 'Exportation axée sur les sous-titres' },
        { href: '/fr/how-to-download-youtube-video', icon: 'video', title: 'Télécharger depuis YT',    desc: 'Guide : obtenir l’audio' },
      ]}

      faq={[
        {
          q: 'Puis-je simplement coller une URL YouTube ?',
          a: 'Oui. Lorsque la vidéo a des sous-titres (téléchargés par le créateur ou générés automatiquement), nous les récupérons en quelques secondes. S’il n’y a pas de sous-titres, téléchargez le fichier audio à la place pour une transcription complète avec Whisper.',
        },
        {
          q: 'Comment le chemin de téléchargement diffère-t-il des sous-titres YouTube ?',
          a: 'Le chemin URL renvoie les sous-titres déjà disponibles pour la vidéo. Le chemin de téléchargement crée une transcription Whisper séparée à partir de l’audio. Chaque version peut contenir des erreurs, alors examinez les noms, les chiffres et le timing avant de publier.',
        },
        {
          q: 'Comment obtenir l’audio d’une vidéo YouTube ?',
          a: 'Utilisez un outil de navigateur ou un extracteur de bureau de votre choix, puis téléchargez le MP3 ou le M4A. Nous n’hébergeons pas d’outil de téléchargement pour des raisons de droits d’auteur, mais consultez notre guide "Comment télécharger une vidéo YouTube" pour des options courantes.',
        },
        {
          q: 'Mictoo transcrit-il des vidéos YouTube non anglophones ?',
          a: 'Oui. Whisper large-v3 prend en charge plus de 50 langues avec détection automatique. Pour des clips courts ou des accents inhabituels, définissez explicitement la langue dans le menu déroulant.',
        },
        {
          q: 'Puis-je obtenir un résumé AI de la vidéo ?',
          a: 'Oui. Le résumé AI apparaît automatiquement aux côtés de la transcription. Bon premier brouillon pour une description de vidéo, un récapitulatif de blog ou des notes d’épisode.',
        },
        {
          q: 'Puis-je télécharger SRT pour ajouter des sous-titres à ma vidéo ?',
          a: 'Oui. Téléchargez SRT ou VTT après la transcription. Les deux formats fonctionnent avec YouTube Studio, Premiere, DaVinci, Final Cut, CapCut et la plupart des lecteurs modernes.',
        },
        {
          q: 'Puis-je traduire une transcription YouTube ?',
          a: 'Oui. Choisissez une langue cible et cliquez sur Traduire. Utile pour les audiences internationales ou les pages de lecture non anglophones.',
        },
        {
          q: 'Mes données YouTube sont-elles conservées sur vos serveurs ?',
          a: 'Non. Les sous-titres récupérés et l’audio téléchargé sont traités une fois et supprimés. Seule la transcription persiste si vous vous connectez et l’enregistrez dans l’historique.',
        },
      ]}

      ctaHeadline="Transformez n’importe quelle vidéo YouTube en texte"
      ctaSubtitle="Collez une URL pour le chemin rapide, téléchargez de l’audio pour le chemin complet avec Whisper. Gratuit par vidéo."
      ctaButton="Collez une URL YouTube ou téléchargez"

      relatedLinks={[
        { href: '/fr/transcribe-video-to-text', label: 'Vidéo vers texte' },
        { href: '/fr/podcast-transcription',    label: 'Transcription de podcast' },
        { href: '/fr/lecture-transcription',    label: 'Transcription de cours' },
        { href: '/fr/free-srt-generator',       label: 'Générateur SRT gratuit' },
        { href: '/fr/webinar-transcription',    label: 'Transcription de webinaire' },
      ]}
    />
  )
}