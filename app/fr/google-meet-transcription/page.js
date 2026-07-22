import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'pl': 'https://mictoo.com/pl/google-meet-transcription',
  'ja': 'https://mictoo.com/ja/google-meet-transcription',
  'ko': 'https://mictoo.com/ko/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Transcription de l’enregistrement Google Meet en texte | Mictoo',
  description:
    'Téléchargez un enregistrement Google Meet autorisé depuis Drive ou une capture d’écran locale et obtenez une transcription, un résumé AI et des exports.',
  alternates: {
    canonical: 'https://mictoo.com/fr/google-meet-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcription Google Meet : Compte Workspace ou gratuit | Mictoo',
    description: 'Enregistrement depuis Drive ou capture d’écran depuis Meet gratuit. Les deux fonctionnent.',
    url: 'https://mictoo.com/fr/google-meet-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcription Google Meet',
    description: 'Tous les niveaux de compte, une page de téléchargement.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrGoogleMeetTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="fr"
      badge="Google Meet · Drive ou capture locale · Gratuit"
      h1First="Transcription Google Meet"
      h1Second="Enregistrements Drive et captures locales en texte"
      subtitle="Téléchargez un enregistrement Google Meet depuis Drive ou une capture locale que vous êtes autorisé à réaliser. La disponibilité de l’enregistrement dépend de l’édition Workspace de l’hôte, des autorisations et des paramètres de l’administrateur."
      currentHref="/fr/google-meet-transcription"

      platforms={[
        { name: 'Meet MP4',    iconKey: 'videoCameraFill', brandBg: '#00832D' },
        { name: 'QuickTime',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'OBS',         iconKey: 'videoCameraFill', brandBg: '#302E31' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/fr/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/fr/teams-meeting-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/fr/meeting-transcription' },
      ]}

      howItWorksTitle="Comment fonctionne la transcription Google Meet"
      steps={[
        {
          icon: 'folder',
          title: 'Obtenez l’enregistrement',
          desc: 'Enregistrement Workspace éligible : Drive › Mon Drive › Enregistrements Meet. Sinon, utilisez une capture locale autorisée qui respecte les règles de consentement des participants.',
        },
        {
          icon: 'upload',
          title: 'Déposez le fichier ici',
          desc: 'MP4 ou M4A fonctionnent tous les deux. Pour les grands MP4, extrayez d’abord l’audio avec ffmpeg ou connectez-vous pour un découpage automatique.',
        },
        {
          icon: 'editPen',
          title: 'Transcription, résumé, exports',
          desc: 'Obtenez une transcription horodatée, un résumé AI et des exports TXT/SRT/VTT/DOCX. Le temps de traitement dépend de la durée et de la taille du fichier.',
        },
      ]}

      exampleTitle="Exemple de transcription Google Meet"
      exampleFileName="enregistrement-meet.mp4"
      exampleDurationLabel="27:45"
      exampleLines={[
        { t: '0:00',  line: 'Salut l’équipe, merci de vous être joints. Synchronisation rapide sur le plan de lancement du T3 avant que je ne parte en dehors la semaine prochaine.' },
        { t: '0:10',  line: 'Le marketing a finalisé le texte de la page de destination. L’ingénierie est sur la bonne voie pour le gel des fonctionnalités vendredi.' },
        { t: '0:22',  line: 'Les documents de support sont l’élément à risque. Nous avons environ trois jours de retard et devons rattraper avant le lancement.' },
        { t: '0:33',  line: 'Je peux déplacer Anna des documents d’intégration pour aider cette semaine. Cela devrait combler le fossé.' },
        { t: '0:44',  line: 'Super. Deuxième sujet, les changements de la page de tarification dont nous avons discuté. Quelqu’un a des préoccupations avant que nous les expédions ?' },
        { t: '0:56',  line: 'La seule chose que je voudrais signaler est le cadrage du niveau entreprise. Cela semble un peu léger pour le prix.' },
        { t: '1:08',  line: 'Point juste. Laissez-moi revisiter cette section cette semaine et partager une version révisée vendredi.' },
      ]}
      summaryPoints={[
        'Suivi du lancement du T3 bien, gel des fonctionnalités vendredi.',
        'Documents de support en retard de 3 jours (risque).',
        'Anna réaffectée pour combler le fossé des documents.',
        'Le cadrage du niveau entreprise nécessite une révision.',
      ]}
      actionItems={[
        'Réaffecter Anna aux documents de support cette semaine',
        'Réviser le cadrage du niveau entreprise d’ici vendredi',
        'Confirmer le gel des fonctionnalités lors de la réunion de vendredi',
      ]}

      whyTitle="Pourquoi Mictoo pour la transcription Google Meet"
      whyCards={[
        {
          icon: 'lock',
          title: 'Fonctionne avec un fichier média',
          desc: 'Téléchargez un enregistrement Drive ou une capture locale autorisée sans connecter Mictoo à votre compte Google.',
        },
        {
          icon: 'target',
          title: 'Texte horodaté pour révision',
          desc: 'Vérifiez les noms et les termes techniques par rapport à l’enregistrement, puis exportez la transcription corrigée dans le format dont vous avez besoin.',
        },
        {
          icon: 'sparkles',
          title: 'Résumé AI toujours inclus',
          desc: 'Le résumé de transcription AI Workspace est une fonctionnalité payante distincte. Le nôtre est inclus avec chaque transcription.',
        },
        {
          icon: 'globe',
          title: 'Traduisez en plus de 50 langues',
          desc: 'Récapitulatif de réunion multilingue sans fournisseur de traduction.',
        },
      ]}

      scenariosTitle="Scénarios courants de Meet"
      scenarios={[
        { icon: 'chat',      title: 'Standup / synchronisation' },
        { icon: 'briefcase', title: 'Révision client' },
        { icon: 'search',    title: 'Entretien utilisateur' },
        { icon: 'users',     title: 'Tous ensemble' },
        { icon: 'headset',   title: 'Appel de support' },
        { icon: 'globe',     title: 'Multilingue' },
      ]}

      tipsTitle="Conseils pour les enregistrements Google Meet"
      tips={[
        'Les enregistrements Meet Workspace sont enregistrés dans Drive › Enregistrements Meet.',
        'Niveau gratuit : QuickTime (Mac) ou OBS (Win/Linux) fonctionnent bien.',
        'Grand MP4 ? Extrayez l’audio : ffmpeg -i enregistrement.mp4 -vn -ac 1 -ar 16000 audio.m4a.',
        'Connectez-vous pour un découpage automatique des longues réunions.',
      ]}

      guidesTitle="Autres plateformes de réunion"
      guides={[
        { href: '/fr/zoom-transcription',          icon: 'video', title: 'Zoom',           desc: 'Cloud + Local + M4A' },
        { href: '/fr/teams-meeting-transcription', icon: 'video', title: 'MS Teams',       desc: 'Chemins OneDrive + SharePoint' },
        { href: '/fr/meeting-transcription',       icon: 'video', title: 'Meeting hub',    desc: 'Toute plateforme, un téléchargement' },
        { href: '/fr/webinar-transcription',       icon: 'monitor', title: 'Webinaires',     desc: 'ON24, Demio, StreamYard' },
      ]}

      faq={[
        {
          q: 'Ai-je besoin de Google Workspace pour enregistrer un appel Meet ?',
          a: 'La disponibilité de l’enregistrement Google dépend de l’édition de compte de l’hôte, du rôle de la réunion, des paramètres de l’administrateur et des autorisations. Les enregistrements éligibles sont enregistrés dans Drive. Si vous réalisez une capture locale à la place, obtenez le consentement des participants requis et suivez la politique applicable.',
        },
        {
          q: 'Où les enregistrements Meet Workspace sont-ils enregistrés ?',
          a: 'Dans le Drive de l’organisateur de la réunion : Mon Drive › Enregistrements Meet. Le MP4 apparaît généralement quelques minutes après la fin de la réunion. Une notification par e-mail est envoyée lorsqu’il est prêt.',
        },
        {
          q: 'Dois-je utiliser la transcription Meet ou télécharger l’enregistrement ?',
          a: 'Utilisez la transcription Meet lorsqu’elle est disponible et répond à vos besoins. Télécharger le média est utile lorsque vous souhaitez des exports Mictoo, une traduction ou une transcription supplémentaire à réviser. La précision varie avec l’audio.',
        },
        {
          q: 'Mon enregistrement Meet fait plus de 60 Mo. Que faire maintenant ?',
          a: 'Extrayez uniquement l’audio avec ffmpeg -i enregistrement.mp4 -vn -ac 1 -ar 16000 audio.m4a. Ou connectez-vous pour un découpage automatique des longs fichiers jusqu’à environ 3 heures.',
        },
        {
          q: 'Puis-je obtenir un résumé AI de l’appel Meet ?',
          a: 'Oui. Le résumé AI apparaît automatiquement avec la transcription. Un bon premier brouillon pour l’e-mail de récapitulation ou le document de suivi.',
        },
        {
          q: 'Mictoo identifie-t-il qui parle dans Meet ?',
          a: 'Non. La transcription actuelle est un texte continu avec des horodatages par ligne et sans étiquettes de locuteur automatiques.',
        },
        {
          q: 'Les enregistrements Meet sont-ils conservés sur vos serveurs ?',
          a: 'Non. Les flux audio sont envoyés au fournisseur de transcription, traités une fois, puis supprimés. Seule la transcription persiste sur les comptes connectés.',
        },
      ]}

      ctaHeadline="Transformez les appels Meet en texte clair"
      ctaSubtitle="Téléchargez un enregistrement Drive autorisé ou une capture locale pour obtenir du texte, un résumé et des exports."
      ctaButton="Télécharger l’enregistrement Meet"

      relatedLinks={[
        { href: '/fr/meeting-transcription',       label: 'Transcription de réunion' },
        { href: '/fr/zoom-transcription',          label: 'Transcription Zoom' },
        { href: '/fr/teams-meeting-transcription', label: 'Transcription Teams' },
        { href: '/fr/webinar-transcription',       label: 'Transcription de webinaire' },
        { href: '/fr/business-transcription',      label: 'Transcription d’entreprise' },
      ]}
    />
  )
}