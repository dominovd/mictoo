import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'pt': 'https://mictoo.com/pt/interview-transcription',
  'pl': 'https://mictoo.com/pl/interview-transcription',
  'ja': 'https://mictoo.com/ja/interview-transcription',
  'ko': 'https://mictoo.com/ko/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: 'Transcription d’interviews pour l’audio et la vidéo | Mictoo',
  description:
    'Téléchargez un enregistrement d’interview et obtenez un texte horodaté, un résumé AI et des exports pour les rapports, la recherche ou la révision.',
  alternates: {
    canonical: 'https://mictoo.com/fr/interview-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Outil de transcription d’interviews gratuit | Mictoo',
    description: 'Transcription d’interviews gratuite avec AI. Téléchargez de l’audio ou de la vidéo, obtenez un transcript propre en quelques minutes.',
    url: 'https://mictoo.com/fr/interview-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcription d’interviews gratuite',
    description: 'Téléchargez de l’audio ou de la vidéo, obtenez un transcript propre en quelques minutes.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrInterviewTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="fr"
      badge="Journalistes · Chercheurs · UX · Gratuit"
      h1First="Transcription d’interviews"
      h1Second="Outil gratuit pour journalistes, chercheurs et équipes UX"
      subtitle="Téléchargez une interview 1:1 ou en panel depuis n’importe quel enregistreur ou application de réunion. Obtenez un transcript propre, horodaté avec un résumé AI et des exports prêts pour l’article, le document ou le dépôt de recherche."
      currentHref="/fr/interview-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/fr/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/fr/google-meet-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/fr/teams-meeting-transcription' },
        { name: 'Riverside',   iconKey: 'waveMic',         brandBg: '#4B2AF7' },
        { name: 'Voice Memo',  iconKey: 'mic',             brandBg: '#F97316', href: '/fr/voice-memo-to-text' },
        { name: 'Phone call',  iconKey: 'phone',           brandBg: '#0EA5A4' },
      ]}

      howItWorksTitle="Comment fonctionne la transcription d’interviews"
      steps={[
        {
          icon: 'folder',
          title: 'Exportez votre interview',
          desc: 'N’importe quel enregistrement fera l’affaire. Mémo vocal, enregistrement cloud Zoom, piste audio Riverside, export d’appel téléphonique.',
        },
        {
          icon: 'upload',
          title: 'Déposez le fichier ici',
          desc: 'Téléchargez MP3, MP4, M4A, WAV, MOV ou tout format audio et vidéo courant jusqu’à 60 Mo.',
        },
        {
          icon: 'editPen',
          title: 'Transcript, citations, exports',
          desc: 'Transcript horodaté, résumé AI, exports TXT / SRT / VTT / DOCX. Prêt pour l’article ou le document de recherche.',
        },
      ]}

      exampleTitle="Exemple de transcript d’interview"
      exampleFileName="researcher-interview.m4a"
      exampleDurationLabel="42:18"
      exampleLines={[
        { t: '0:00',  line: 'Merci d’avoir pris le temps. Pourriez-vous commencer par décrire votre rôle et depuis combien de temps vous l’avez ?' },
        { t: '0:08',  line: 'Bien sûr. Je dirige l’équipe d’analytique dans une fintech de taille moyenne, et je suis dans ce rôle depuis un peu plus de deux ans.' },
        { t: '0:20',  line: 'Avant cela, j’étais dans une grande banque, travaillant principalement sur la rétention des clients et la modélisation de la valeur à vie.' },
        { t: '0:32',  line: 'Donc, le passage d’une grande banque à une fintech était principalement une question de rythme et de liberté d’essayer de nouvelles choses.' },
        { t: '0:44',  line: 'Et les outils ont beaucoup évolué. Ce qui prenait une semaine dans l’ancienne configuration prend un après-midi maintenant.' },
        { t: '0:56',  line: 'Pouvez-vous me donner un exemple de ce genre de changement ? Quelque chose de concret que vous n’auriez pas tenté auparavant.' },
        { t: '1:04',  line: 'L’évident est les expériences de cohorte en temps réel. Nous expédions une idée le matin et voyons des données significatives le soir même.' },
      ]}
      summaryPoints={[
        'Responsable analytique dans une fintech, plus de 2 ans dans le rôle.',
        'Rôle précédent dans une grande banque axé sur la modélisation de la rétention.',
        'Changement vers la fintech motivé par le rythme et la liberté d’expérimentation.',
        'Expériences de cohorte en temps réel possibles avec des outils modernes.',
      ]}
      actionItems={[
        'Suivre la comparaison de la modélisation de la rétention',
        'Demander un exemple d’expérience de cohorte en temps réel',
        'Obtenir une introduction au contact de l’employeur précédent',
      ]}

      whyTitle="Pourquoi choisir Mictoo pour la transcription d’interviews"
      whyCards={[
        {
          icon: 'target',
          title: 'Vérifiez les noms et les noms propres',
          desc: 'Utilisez les horodatages pour vérifier les noms, les villes, les organisations et les termes spécialisés par rapport à l’enregistrement original de l’interview.',
        },
        {
          icon: 'sparkles',
          title: 'Résumé AI et extraction de citations',
          desc: 'Le résumé AI est un bon premier brouillon pour la liste de citations, le mémo de recherche ou l’introduction de l’article.',
        },
        {
          icon: 'lock',
          title: 'Modèle de traitement clair',
          desc: 'L’enregistrement est envoyé à un fournisseur de transcription pour traitement et n’est pas conservé par Mictoo après l’achèvement de la tâche.',
        },
        {
          icon: 'globe',
          title: 'Traduisez pour un travail multilingue',
          desc: 'Interview réalisée en espagnol, allemand ou japonais. Traduisez dans votre langue de travail en un clic.',
        },
      ]}

      scenariosTitle="Scénarios d’interviews courants"
      scenarios={[
        { icon: 'chat',      title: 'Journalisme' },
        { icon: 'search',    title: 'Recherche UX' },
        { icon: 'users',     title: 'Recrutement' },
        { icon: 'book',      title: 'Histoire orale' },
        { icon: 'briefcase', title: 'Déposition légale' },
        { icon: 'globe',     title: 'Multilingue' },
      ]}

      tipsTitle="Conseils pour des transcriptions d’interviews plus claires"
      tips={[
        'Enregistrez avec un micro cravate ou portable près du sujet.',
        'Demandez au sujet de faire une pause brièvement entre les longues réponses.',
        'Définissez explicitement la langue pour les non-anglophones ou les accents prononcés.',
        'Vérifiez les noms et les termes inhabituels après la transcription.',
      ]}

      guidesTitle="Choisissez le bon guide d’enregistreur"
      guides={[
        { href: '/fr/zoom-transcription',        icon: 'video', title: 'Interview Zoom',    desc: 'Enregistrement cloud MP4 ou M4A' },
        { href: '/fr/google-meet-transcription', icon: 'video', title: 'Interview Meet',    desc: 'Téléchargement d’enregistrement Drive' },
        { href: '/fr/voice-memo-to-text',        icon: 'mic',   title: 'Mémo vocal iPhone', desc: 'Tout enregistrement vocal M4A' },
        { href: '/fr/podcast-transcription',     icon: 'headset', title: 'Style podcast',   desc: 'Riverside, Zencastr, Cleanfeed' },
      ]}

      faq={[
        {
          q: 'Quels formats de fichiers Mictoo accepte-t-il pour les interviews ?',
          a: 'MP3, MP4, M4A, WAV, MOV, WEBM, FLAC, OGG, AAC et la plupart des autres formats audio et vidéo courants. Les fichiers vidéo sont automatiquement démultiplexés côté serveur.',
        },
        {
          q: 'Mictoo identifie-t-il qui parle ?',
          a: 'Non. Le transcript actuel est un texte continu avec des horodatages par ligne et sans étiquettes automatiques "Interviewer / Sujet".',
        },
        {
          q: 'La transcription d’interviews est-elle gratuite ?',
          a: 'Oui. Gratuit par fichier jusqu’à 25 Mo de manière anonyme, 60 Mo pour les utilisateurs connectés. Les interviews plus longues peuvent être automatiquement divisées pour les utilisateurs connectés.',
        },
        {
          q: 'Puis-je masquer des noms avant de publier le transcript ?',
          a: 'Oui. Passez en mode Éditeur après la transcription pour modifier n’importe quel mot ou ligne. Enregistrez la version modifiée et exportez.',
        },
        {
          q: 'Les enregistrements sont-ils conservés sur vos serveurs ?',
          a: 'Non. Les flux audio sont envoyés au fournisseur de transcription, traités une fois, puis supprimés. Les transcriptions ne sont stockées que si vous vous connectez.',
        },
        {
          q: 'Puis-je traduire le transcript d’interview ?',
          a: 'Oui. Choisissez une langue cible et cliquez sur Traduire. Utile pour la recherche de terrain multilingue ou le reporting multilingue.',
        },
        {
          q: 'Quels formats d’exportation sont disponibles ?',
          a: 'TXT, SRT, VTT, DOCX. Les utilisateurs connectés obtiennent également PDF et JSON. Les horodatages dans SRT et VTT s’alignent sur l’enregistrement original.',
        },
      ]}

      ctaHeadline="Transformez les interviews en texte publiable"
      ctaSubtitle="Déposez votre enregistrement et obtenez un transcript, un résumé et des exports prêts pour l’article ou le dépôt de recherche."
      ctaButton="Télécharger une interview"

      relatedLinks={[
        { href: '/fr/meeting-transcription',      label: 'Transcription de réunion' },
        { href: '/fr/podcast-transcription',      label: 'Transcription de podcast' },
        { href: '/fr/voice-memo-to-text',         label: 'Mémo vocal en texte' },
        { href: '/fr/business-transcription',     label: 'Transcription d’entreprise' },
        { href: '/fr/lecture-transcription',      label: 'Transcription de cours' },
      ]}
    />
  )
}