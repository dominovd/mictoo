import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'pt': 'https://mictoo.com/pt/meeting-transcription',
  'pl': 'https://mictoo.com/pl/meeting-transcription',
  'ja': 'https://mictoo.com/ja/meeting-transcription',
  'ko': 'https://mictoo.com/ko/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: 'Transcription de réunion pour toute plateforme enregistrée | Mictoo',
  description:
    'Téléchargez un enregistrement de réunion autorisé depuis Zoom, Teams, Meet, Webex, Loom ou Riverside pour obtenir un texte, un résumé et des exports.',
  alternates: {
    canonical: 'https://mictoo.com/fr/meeting-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcription de réunion : Toute plateforme, tout enregistrement | Mictoo',
    description: 'Déposez n’importe quel enregistrement de réunion, obtenez une transcription. Gratuit.',
    url: 'https://mictoo.com/fr/meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcription de réunion : Toute plateforme',
    description: 'Déposez n’importe quel enregistrement de réunion, obtenez une transcription.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrMeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="fr"
      badge="Toute plateforme · Gratuit · Pas d’inscription"
      h1First="Transcription de réunion"
      h1Second="Une page de téléchargement pour toute plateforme"
      subtitle="Téléchargez un enregistrement depuis Zoom, Teams, Google Meet, Webex, Loom ou toute capture d’écran. Obtenez une transcription propre avec des horodatages, un résumé AI et des exports."
      currentHref="/fr/meeting-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/fr/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/fr/google-meet-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/fr/teams-meeting-transcription' },
        { name: 'Webex',       iconKey: 'videoCameraFill', brandBg: '#0F1F35' },
        { name: 'Loom',        iconKey: 'loomPlay',        brandBg: '#625DF5' },
        { name: 'Riverside',   iconKey: 'waveMic',         brandBg: '#4B2AF7' },
      ]}

      howItWorksTitle="Comment fonctionne la transcription de réunion"
      steps={[
        {
          icon: 'folder',
          title: 'Trouvez votre enregistrement de réunion',
          desc: 'Exportez ou téléchargez l’enregistrement depuis n’importe quelle plateforme.',
        },
        {
          icon: 'upload',
          title: 'Déposez le fichier ici',
          desc: 'Téléchargez votre fichier au format MP3, MP4, WAV ou d’autres formats pris en charge.',
        },
        {
          icon: 'editPen',
          title: 'Transcription, résumé, exports',
          desc: 'Obtenez une transcription horodatée, un résumé AI et des fichiers d’exportation.',
        },
      ]}

      exampleTitle="Exemple de transcription et de résumé"
      exampleFileName="meeting-recording.mp4"
      exampleDurationLabel="30:15"
      exampleLines={[
        { t: '0:00',  line: 'Merci à tous d’être présents. Récapitulons rapidement les progrès de la semaine dernière avant de passer à l’agenda d’aujourd’hui.' },
        { t: '0:12',  line: 'Nous avons expédié le flux d’intégration et constaté une augmentation de douze pour cent de l’activation par rapport à la référence précédente.' },
        { t: '0:28',  line: 'Super. Ensuite, nous devons corriger le bug de paiement sur mobile avant qu’il n’affecte d’autres clients payants.' },
        { t: '0:36',  line: 'Je vais créer un ticket et l’assigner à l’équipe d’ici la fin de la journée. Cela devrait être résolu dans le sprint.' },
        { t: '0:44',  line: 'Nous devrions également discuter des mises à jour de la page de tarification. La version actuelle ne convertit pas comme nous l’avions prévu.' },
        { t: '0:55',  line: 'Je partagerai un brouillon d’ici la fin de la journée et nous pourrons le revoir ensemble demain avant le stand-up.' },
      ]}
      summaryPoints={[
        'Flux d’intégration expédié avec une augmentation de 12 % de l’activation.',
        'Le bug de paiement sur mobile doit être corrigé.',
        'Mises à jour de la page de tarification à discuter.',
        'Brouillon à partager d’ici la fin de la journée et à revoir demain.',
      ]}
      actionItems={[
        'Créer un ticket pour le bug de paiement mobile',
        'Partager le brouillon de la page de tarification',
        'Revoir le brouillon demain',
      ]}

      whyTitle="Pourquoi un téléchargement agnostique à la plateforme aide"
      whyCards={[
        {
          icon: 'globe',
          title: 'Fonctionne sur toutes les plateformes de réunion',
          desc: 'Téléchargez depuis Zoom, Teams, Google Meet, Webex, Loom et plus.',
        },
        {
          icon: 'target',
          title: 'Un flux de révision',
          desc: 'Utilisez la même mise en page horodatée et les mêmes options d’exportation, quelle que soit la plateforme qui a créé l’enregistrement.',
        },
        {
          icon: 'lock',
          title: 'Fonctionne à partir d’un fichier autorisé',
          desc: 'Mictoo traite un enregistrement pour lequel vous avez déjà la permission d’utiliser ; les politiques d’accès et de téléchargement appartiennent toujours à la plateforme source.',
        },
        {
          icon: 'sparkles',
          title: 'Résumé et traduction inclus',
          desc: 'Obtenez des résumés AI et traduisez des transcriptions en plus de 50 langues.',
        },
      ]}

      scenariosTitle="Scénarios courants de transcription de réunion"
      scenarios={[
        { icon: 'chat',      title: 'E-mails de récapitulation client' },
        { icon: 'search',    title: 'Notes de recherche utilisateur' },
        { icon: 'users',     title: 'Sélections de recruteurs' },
        { icon: 'briefcase', title: 'Archives de réunions d’équipe' },
        { icon: 'headset',   title: 'Escalades de support' },
        { icon: 'globe',     title: 'Réunions multilingues' },
      ]}

      practicalTitle="Où trouver un enregistrement de réunion"
      practicalIntro="L’emplacement exact dépend de la plateforme et de votre rôle dans la réunion. Téléchargez uniquement les enregistrements auxquels vous êtes autorisé à accéder, et suivez les politiques de consentement des participants et d’organisation avant de télécharger."
      practicalItems={[
        {
          title: 'Enregistrement cloud ou local Zoom',
          desc: 'Les enregistrements cloud sont disponibles depuis le portail web Zoom sur les comptes payants éligibles. Les enregistrements sur ordinateur sont normalement enregistrés dans le dossier local de Zoom.',
        },
        {
          title: 'Enregistrement Google Meet',
          desc: 'Les enregistrements Meet éligibles sont sauvegardés dans le dossier Mon Drive › Enregistrements Meet de l’organisateur. La disponibilité dépend de l’édition et des paramètres administratifs.',
        },
        {
          title: 'Enregistrement Microsoft Teams',
          desc: 'Trouvez l’enregistrement dans le chat de la réunion, OneDrive ou le site SharePoint du canal. Les autorisations de téléchargement peuvent être restreintes par la politique.',
        },
        {
          title: 'Webex, Loom et Riverside',
          desc: 'Utilisez l’exportation ou le contrôle de téléchargement de la plateforme pour obtenir un fichier audio ou vidéo, puis confirmez que le fichier se lit correctement avant de le télécharger.',
        },
      ]}

      tipsTitle="Conseils pour de meilleures transcriptions de réunion"
      tips={[
        'Préférez les exports audio uniquement lorsque vous souhaitez un téléchargement plus léger.',
        'Enregistrez dans un espace calme et réduisez le bruit de fond.',
        'Utilisez la détection automatique pour les appels multilingues ou en langues mixtes.',
        'Vérifiez les noms et la terminologie après la transcription.',
      ]}

      guidesTitle="Choisissez le bon guide de plateforme"
      guides={[
        { href: '/fr/zoom-transcription',          icon: 'video', title: 'Réunions Zoom',    desc: 'Guide de téléchargement étape par étape' },
        { href: '/fr/google-meet-transcription',   icon: 'video', title: 'Google Meet',      desc: 'Guide de téléchargement étape par étape' },
        { href: '/fr/teams-meeting-transcription', icon: 'video', title: 'Microsoft Teams',  desc: 'Guide de téléchargement étape par étape' },
        { href: '/fr/meeting-transcription#tool',  icon: 'file',  title: 'Autres plateformes',  desc: 'Voir tous les guides et conseils' },
      ]}

      faq={[
        {
          q: 'Puis-je transcrire un enregistrement Zoom, Meet ou Teams ?',
          a: 'Oui. Tout fichier audio ou vidéo de n’importe quelle plateforme de réunion fonctionne. Téléchargez simplement l’enregistrement et déposez-le ici. Nous acceptons MP3, MP4, WAV, M4A, WEBM, FLAC et plus.',
        },
        {
          q: 'La transcription de réunion est-elle gratuite ?',
          a: 'Oui. Fichiers jusqu’à 25 MB anonymement, 60 MB lorsque vous êtes connecté. Les réunions plus longues peuvent être automatiquement divisées pour les utilisateurs connectés. Pas de carte de crédit requise.',
        },
        {
          q: 'Mictoo identifie-t-il différents intervenants ?',
          a: 'Non. La transcription actuelle est un texte continu avec des horodatages par ligne et sans étiquettes automatiques "Intervenant 1 / Intervenant 2".',
        },
        {
          q: 'Les enregistrements de réunion sont-ils stockés ?',
          a: 'Non. Le fichier est transmis au fournisseur de transcription, traité une fois, puis supprimé de la mémoire. La transcription n’est sauvegardée que si vous vous connectez et l’ajoutez à votre historique.',
        },
        {
          q: 'Quels formats d’exportation sont disponibles ?',
          a: 'TXT (texte brut), SRT et VTT (sous-titres avec horodatages alignés sur l’enregistrement), et DOCX (document Word). Les utilisateurs connectés obtiennent également PDF et JSON.',
        },
        {
          q: 'Puis-je traduire la transcription ?',
          a: 'Oui. Après la transcription, choisissez une langue cible et cliquez sur Traduire. Utile pour envoyer des e-mails de récapitulation aux participants dans leur langue préférée, ou pour archiver des réunions interlangues dans une seule langue de travail.',
        },
      ]}

      ctaHeadline="Transformez votre prochaine réunion en notes claires"
      ctaSubtitle="Déposez un enregistrement de n’importe quelle plateforme et obtenez une transcription, un résumé et des exports en quelques secondes."
      ctaButton="Télécharger un enregistrement de réunion"

      relatedLinks={[
        { href: '/fr/interview-transcription',  label: 'Transcription d’entretien' },
        { href: '/fr/podcast-transcription',    label: 'Transcription de podcast' },
        { href: '/fr/lecture-transcription',    label: 'Transcription de cours' },
        { href: '/fr/business-transcription',   label: 'Transcription d’entreprise' },
        { href: '/fr/voice-memo-to-text',       label: 'Mémo vocal en texte' },
      ]}
    />
  )
}