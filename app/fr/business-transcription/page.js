import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Transcription de Réunions d’Affaires et Résumé AI | Mictoo',
  description:
    'Transformez les enregistrements de réunions internes autorisées en transcriptions horodatées, résumés AI et documents récapitulatifs exportables.',
  alternates: {
    canonical: 'https://mictoo.com/fr/business-transcription',
    languages: {
      'en': 'https://mictoo.com/business-transcription',
      'fr': 'https://mictoo.com/fr/business-transcription',
      'de': 'https://mictoo.com/de/business-transcription',
      'es': 'https://mictoo.com/es/business-transcription',
      'ru': 'https://mictoo.com/ru/business-transcription',
      'it': 'https://mictoo.com/it/business-transcription',
      'pt': 'https://mictoo.com/pt/business-transcription',
      'pl': 'https://mictoo.com/pl/business-transcription',
      'ja': 'https://mictoo.com/ja/business-transcription',
      'ko': 'https://mictoo.com/ko/business-transcription',
      'x-default': 'https://mictoo.com/business-transcription',
    },
  },
  openGraph: {
    title: 'Transcription d’Affaires : Réunions Internes en Texte | Mictoo',
    description: 'Transcrivez les réunions internes de l’entreprise sans configuration IT.',
    url: 'https://mictoo.com/fr/business-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcription d’Affaires',
    description: 'Entretiens 1:1, réunions générales, briefings exécutifs.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrBusinessTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="fr"
      badge="Fondateurs · Exécutifs · Petites équipes · Gratuit"
      h1First="Transcription d’Affaires"
      h1Second="Entretiens 1:1, réunions générales, briefings exécutifs"
      subtitle="Un outil de transcription pratique pour les réunions internes autorisées. Téléchargez l’enregistrement, examinez la transcription et le résumé AI, puis exportez un récapitulatif pour votre équipe."
      currentHref="/fr/business-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/fr/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/fr/teams-meeting-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/fr/google-meet-transcription' },
        { name: 'Webex',       iconKey: 'videoCameraFill', brandBg: '#0F1F35' },
        { name: 'BlueJeans',   iconKey: 'videoCameraFill', brandBg: '#005EB8' },
        { name: 'GoToMeeting', iconKey: 'videoCameraFill', brandBg: '#F68B1F' },
      ]}

      howItWorksTitle="Comment fonctionne la transcription d’affaires"
      steps={[
        {
          icon: 'folder',
          title: 'Exportez l’enregistrement',
          desc: 'Depuis Zoom, Teams, Meet, Webex, ou tout autre outil utilisé par votre entreprise. MP4 ou M4A audio uniquement fonctionnent tous les deux.',
        },
        {
          icon: 'upload',
          title: 'Déposez le fichier ici',
          desc: 'Téléchargez un enregistrement que votre organisation vous autorise à traiter. Aucune installation de logiciel ou intégration de répertoire n’est requise.',
        },
        {
          icon: 'editPen',
          title: 'Transcription, résumé, éléments d’action',
          desc: 'Transcription horodatée, résumé AI, export DOCX prêt pour l’email de récapitulatif.',
        },
      ]}

      exampleTitle="Exemple de transcription de réunion d’affaires"
      exampleFileName="q3-strategy-session.mp4"
      exampleDurationLabel="58:42"
      exampleLines={[
        { t: '0:00',  line: 'Merci à tous d’avoir pris le temps. C’est notre point de contrôle de stratégie Q3, et nous avons environ une heure de bloquée.' },
        { t: '0:10',  line: 'Commençons par la mise à jour générale. Les revenus sont en avance de huit pour cent par rapport au plan, principalement grâce à l’expansion du marché intermédiaire.' },
        { t: '0:22',  line: 'Le nouveau mouvement vers l’entreprise est plus lent que prévu. Deux affaires ont glissé du Q2 au Q3.' },
        { t: '0:35',  line: 'Nous devrions discuter si nous devons nous concentrer davantage sur le marché intermédiaire ou pousser plus fort sur la préparation à l’entreprise ce trimestre.' },
        { t: '0:48',  line: 'Mon avis : le marché intermédiaire fonctionne, et nous ne devrions pas distraire l’équipe en poursuivant le segment entreprise pour l’instant.' },
        { t: '1:02',  line: 'D’accord. Fixons un objectif de trente nouveaux comptes sur le marché intermédiaire d’ici la fin du Q3 et réévaluons l’entreprise lors de la planification du Q4.' },
        { t: '1:14',  line: 'Un dernier sujet avant de conclure. La feuille de route technique pour le même trimestre, que nous lions à ces engagements clients.' },
      ]}
      summaryPoints={[
        'Revenus 8% au-dessus du plan, tirés par le marché intermédiaire.',
        'Mouvement entreprise en déclin (2 affaires déplacées du Q2 au Q3).',
        'Décision : se concentrer sur le marché intermédiaire ce trimestre.',
        'Objectif : 30 nouveaux comptes sur le marché intermédiaire d’ici la fin du Q3.',
      ]}
      actionItems={[
        'Fixer un objectif de 30 comptes sur le marché intermédiaire',
        'Réévaluer le mouvement entreprise lors de la planification du Q4',
        'Aligner la feuille de route technique sur les engagements clients',
      ]}

      whyTitle="Pourquoi Mictoo pour la transcription d’affaires"
      whyCards={[
        {
          icon: 'lock',
          title: 'Aucune installation de logiciel',
          desc: 'Le flux de travail dans le navigateur ne nécessite pas de client de bureau ni d’intégration de répertoire. Les politiques de votre organisation s’appliquent toujours.',
        },
        {
          icon: 'sparkles',
          title: 'Résumé prêt pour l’email de récapitulatif',
          desc: 'Le résumé AI fournit le brouillon de récapitulatif en quelques secondes. Éliminez ce que vous avez déjà engagé, conservez ce qui nécessite une escalade.',
        },
        {
          icon: 'shield',
          title: 'Enregistrements non stockés',
          desc: 'Les flux audio vont au fournisseur de transcription et sont supprimés après traitement. Seule la transcription persiste sur les comptes connectés.',
        },
        {
          icon: 'globe',
          title: 'Traduire pour les équipes internationales',
          desc: 'Réunion en anglais mais le récapitulatif doit aller à une filiale allemande ? Un clic.',
        },
      ]}

      scenariosTitle="Scénarios d’affaires courants"
      scenarios={[
        { icon: 'briefcase', title: 'Briefing exécutif' },
        { icon: 'users',     title: 'Réunions générales' },
        { icon: 'chat',      title: 'Fondateur 1:1' },
        { icon: 'target',    title: 'Retraite stratégique' },
        { icon: 'search',    title: 'Mise à jour du conseil' },
        { icon: 'headset',   title: 'Escalade client' },
      ]}

      tipsTitle="Conseils pour les enregistrements internes"
      tips={[
        'Préférez les exports audio uniquement lorsque votre plateforme les propose.',
        'Pour les vidéos de réunion MP4 de plus de 60 MB, extrayez d’abord l’audio avec ffmpeg.',
        'Utilisez la détection automatique pour les appels de direction multilingues.',
        'Enregistrez la transcription dans l’historique pour créer une archive consultable.',
      ]}

      guidesTitle="Choisissez le bon guide de plateforme"
      guides={[
        { href: '/fr/zoom-transcription',          icon: 'video', title: 'Zoom',        desc: 'Enregistrement Cloud, audio M4A uniquement' },
        { href: '/fr/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'Chemin OneDrive ou SharePoint' },
        { href: '/fr/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: 'Enregistrement Drive, solution gratuite' },
        { href: '/fr/meeting-transcription#tool',  icon: 'file',  title: 'Autre',       desc: 'Webex, BlueJeans, GoToMeeting' },
      ]}

      faq={[
        {
          q: 'Mon entreprise enregistre-t-elle envoyée à vos serveurs ?',
          a: 'Les flux audio vont au fournisseur de transcription (Groq/Replicate/Deepgram/OpenAI selon le routage), sont traités une fois, et sont supprimés de la mémoire. Nous n’écrivons jamais l’audio sur disque. Seule la transcription texte persiste, et seulement si vous vous connectez et l’enregistrez.',
        },
        {
          q: 'Ai-je besoin d’une approbation pour télécharger un enregistrement d’entreprise ?',
          a: 'Cela dépend des politiques de votre organisation et des informations dans l’enregistrement. Mictoo ne nécessite aucune installation de logiciel, mais vous devez obtenir toute autorisation requise avant d’envoyer des médias d’entreprise à un fournisseur de transcription externe.',
        },
        {
          q: 'Puis-je utiliser Mictoo pour des secteurs réglementés ?',
          a: 'Vérifiez vos exigences de conformité spécifiques. Nous n’offrons pas de BAA signé ou de rapport SOC 2. Pour des environnements strictement réglementés, utilisez plutôt un outil de transcription entièrement auto-hébergé.',
        },
        {
          q: 'Puis-je obtenir un résumé AI pour l’email de récapitulatif ?',
          a: 'Oui. Le résumé AI apparaît automatiquement avec la transcription. Un bon premier brouillon pour l’email de suivi ou le document Notion.',
        },
        {
          q: 'Que faire si la réunion dépasse 60 MB ?',
          a: 'Connectez-vous pour activer le découpage automatique (jusqu’à environ 3 heures). Ou extrayez l’audio de la vidéo avec ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 audio.m4a, ce qui réduit la taille du fichier de 5 à 15 fois.',
        },
        {
          q: 'Puis-je traduire la transcription pour une équipe internationale ?',
          a: 'Oui. Après la transcription, choisissez une langue cible et cliquez sur Traduire. Utile pour les filiales multilingues.',
        },
        {
          q: 'Quels formats d’exportation fonctionnent pour un email de récapitulatif ?',
          a: 'TXT pour coller dans le corps de l’email, DOCX pour une pièce jointe appropriée, PDF (connecté) pour archive. Le résumé est disponible séparément.',
        },
      ]}

      ctaHeadline="Transformez les réunions internes en documents de récapitulation"
      ctaSubtitle="Entretiens 1:1, réunions générales et briefings exécutifs. Téléchargez des médias autorisés pour une transcription et un résumé."
      ctaButton="Téléchargez une réunion d’affaires"

      relatedLinks={[
        { href: '/fr/meeting-transcription',       label: 'Transcription de Réunion' },
        { href: '/fr/zoom-transcription',          label: 'Transcription Zoom' },
        { href: '/fr/teams-meeting-transcription', label: 'Transcription Teams' },
        { href: '/fr/google-meet-transcription',   label: 'Transcription Google Meet' },
        { href: '/fr/interview-transcription',     label: 'Transcription d’Entretien' },
      ]}
    />
  )
}