import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Transcription de réunion Teams à partir d’enregistrements MP4 | Mictoo',
  description:
    'Téléchargez un MP4 Microsoft Teams depuis OneDrive ou SharePoint et obtenez une transcription horodatée, un résumé AI et des fichiers d’exportation.',
  alternates: {
    canonical: 'https://mictoo.com/fr/teams-meeting-transcription',
    languages: {
      'en': 'https://mictoo.com/teams-meeting-transcription',
      'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
      'de': 'https://mictoo.com/de/teams-meeting-transcription',
      'es': 'https://mictoo.com/es/teams-meeting-transcription',
      'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
      'it': 'https://mictoo.com/it/teams-meeting-transcription',
      'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
      'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
      'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
      'ko': 'https://mictoo.com/ko/teams-meeting-transcription',
      'x-default': 'https://mictoo.com/teams-meeting-transcription',
    },
  },
  openGraph: {
    title: 'Transcription de réunion Teams à partir de MP4 | Mictoo',
    description: 'Déposez un enregistrement Teams depuis OneDrive ou SharePoint et obtenez du texte, un résumé et des exports.',
    url: 'https://mictoo.com/fr/teams-meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcription de réunion Teams',
    description: 'Téléchargez un MP4 depuis OneDrive ou SharePoint et obtenez une transcription.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrTeamsMeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="fr"
      badge="Teams · OneDrive / SharePoint · M365 · Gratuit"
      h1First="Transcription de réunion Teams"
      h1Second="De OneDrive ou SharePoint MP4 à texte"
      subtitle="Téléchargez l’enregistrement Teams auquel vous êtes autorisé à accéder, puis téléchargez le MP4 pour une transcription horodatée, un résumé AI et des exports. La disponibilité de l’enregistrement dépend de votre licence Microsoft 365 et des politiques de votre organisation."
      currentHref="/fr/teams-meeting-transcription"

      platforms={[
        { name: 'OneDrive',    iconKey: 'videoCameraFill', brandBg: '#0364B8' },
        { name: 'SharePoint',  iconKey: 'videoCameraFill', brandBg: '#036C70' },
        { name: 'Channel MP4', iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/fr/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/fr/google-meet-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/fr/meeting-transcription' },
      ]}

      howItWorksTitle="Comment fonctionne la transcription des réunions Teams"
      steps={[
        {
          icon: 'folder',
          title: 'Trouvez l’enregistrement',
          desc: 'Réunion privée : OneDrive › Mes fichiers › Enregistrements. Réunion de canal : le site SharePoint du canal.',
        },
        {
          icon: 'upload',
          title: 'Déposez le MP4 ici',
          desc: 'Téléchargez depuis OneDrive ou SharePoint et faites-le glisser. Pour plus de 60 Mo, extrayez l’audio ou connectez-vous pour un découpage automatique.',
        },
        {
          icon: 'editPen',
          title: 'Transcription, résumé, exports',
          desc: 'Transcription horodatée, résumé AI, TXT/SRT/VTT/DOCX. Un appel Teams de 30 minutes se termine en environ une minute.',
        },
      ]}

      exampleTitle="Exemple de transcription de réunion Teams"
      exampleFileName="teams-channel-meeting.mp4"
      exampleDurationLabel="41:08"
      exampleLines={[
        { t: '0:00',  line: 'D’accord, bienvenue à la revue de sprint. Nous allons passer en revue ce qui a été expédié, ce qui ne l’a pas été, et pourquoi.' },
        { t: '0:11',  line: 'L’équipe des paiements a expédié le nouveau flux de remboursement mardi. L’adoption est supérieure aux attentes, environ quarante pour cent des tickets éligibles.' },
        { t: '0:24',  line: 'L’équipe de recherche a rencontré un pipeline d’indexation plus long que prévu. Expédition repoussée au prochain sprint.' },
        { t: '0:35',  line: 'C’est bien, mais nous devons communiquer le retard à l’équipe de succès client afin qu’elle puisse gérer les attentes.' },
        { t: '0:47',  line: 'J’enverrai une note dans le canal partagé aujourd’hui avec le calendrier révisé et la raison.' },
        { t: '0:58',  line: 'Troisièmement, le taux de crash mobile a légèrement augmenté. Toujours dans les SLA mais à surveiller ce sprint.' },
        { t: '1:09',  line: 'L’équipe des appareils est déjà dessus. Nous devrions avoir une cause racine d’ici mercredi et un correctif d’ici la fin du sprint.' },
      ]}
      summaryPoints={[
        'Flux de remboursement expédié mardi, adoption de 40%.',
        'L’équipe de recherche a retardé d’un sprint (pipeline d’indexation).',
        'Le taux de crash mobile a augmenté mais reste dans les SLA.',
        'Cause racine du crash mobile d’ici mercredi.',
      ]}
      actionItems={[
        'Envoyer une note de retard au canal de succès client',
        'Enquêter sur la cause racine du crash mobile (mercredi)',
        'Confirmer la nouvelle date d’expédition de l’équipe de recherche',
      ]}

      whyTitle="Pourquoi Mictoo pour les enregistrements Teams"
      whyCards={[
        {
          icon: 'folder',
          title: 'Fonctionne avec les enregistrements téléchargés',
          desc: 'Utilisez un MP4 que vous avez déjà la permission de télécharger depuis OneDrive ou le site SharePoint du canal.',
        },
        {
          icon: 'target',
          title: 'Vérifiez les noms et la terminologie',
          desc: 'La sortie horodatée facilite la recherche et la correction des noms de produits, des acronymes et des termes spécialisés.',
        },
        {
          icon: 'sparkles',
          title: 'Résumé à côté de la transcription',
          desc: 'Générez un brouillon de récapitulatif et gardez-le à côté du texte complet pour révision avant partage.',
        },
        {
          icon: 'globe',
          title: 'Traduire des enregistrements multilingues',
          desc: 'Enregistrement dans une langue, récapitulatif nécessaire dans une autre. Un clic, 50+ langues.',
        },
      ]}

      scenariosTitle="Scénarios courants Teams"
      scenarios={[
        { icon: 'chat',      title: 'Revue de sprint' },
        { icon: 'briefcase', title: 'Synchronisation du conseil' },
        { icon: 'users',     title: 'Standup' },
        { icon: 'target',    title: 'Revue OKR' },
        { icon: 'headset',   title: 'Escalade de support' },
        { icon: 'globe',     title: 'Appel international' },
      ]}

      tipsTitle="Conseils pour les enregistrements Teams"
      tips={[
        'Les réunions privées sont enregistrées sur OneDrive (compte de l’organisateur).',
        'Les réunions de canal sont enregistrées sur le site SharePoint du canal.',
        'Les locataires GCC / entreprise peuvent restreindre les téléchargements : demandez à l’IT.',
        'Pour les longues réunions, extrayez l’audio avec ffmpeg pour réduire la taille du fichier.',
      ]}

      guidesTitle="Autres plateformes de réunion"
      guides={[
        { href: '/fr/zoom-transcription',        icon: 'video', title: 'Zoom',        desc: 'Cloud + Local + M4A' },
        { href: '/fr/google-meet-transcription', icon: 'video', title: 'Google Meet', desc: 'Workspace + gratuit' },
        { href: '/fr/meeting-transcription',     icon: 'video', title: 'Meeting hub', desc: 'Toute plateforme, un téléchargement' },
        { href: '/fr/business-transcription',    icon: 'briefcase', title: 'Business', desc: 'Enregistrements internes autorisés' },
      ]}

      faq={[
        {
          q: 'Où sont enregistrées les réunions Teams ?',
          a: 'Réunions privées : sur OneDrive de l’organisateur sous Mes fichiers › Enregistrements. Réunions de canal : sur le site SharePoint soutenant ce canal, sous le dossier du canal dans Documents.',
        },
        {
          q: 'Ai-je besoin de Teams Premium pour télécharger un enregistrement ?',
          a: 'Mictoo traite le fichier média téléchargé plutôt que de se connecter à votre compte Teams. Votre capacité à enregistrer, transcrire ou télécharger dans Teams dépend toujours de votre licence Microsoft 365, de votre rôle de réunion et des politiques de votre organisation.',
        },
        {
          q: 'Dois-je utiliser la transcription Teams ou télécharger l’enregistrement ?',
          a: 'Utilisez la transcription Teams lorsqu’elle est disponible et répond à vos besoins. Télécharger l’enregistrement est utile lorsque vous souhaitez des exports Mictoo, une traduction ou une transcription supplémentaire à réviser. La précision varie avec l’enregistrement.',
        },
        {
          q: 'Mon MP4 Teams fait plus de 60 Mo. Que faire maintenant ?',
          a: 'Extraire l’audio : ffmpeg -i teams.mp4 -vn -ac 1 -ar 16000 audio.m4a. Ou connectez-vous pour un découpage automatique des fichiers jusqu’à environ 3 heures.',
        },
        {
          q: 'Puis-je utiliser Mictoo pour les locataires GCC / entreprise ?',
          a: 'Certains locataires d’entreprise et gouvernementaux restreignent les téléchargements ou le traitement externe. Suivez la politique de votre organisation et vérifiez avec l’IT ou le propriétaire de l’enregistrement avant de télécharger ou de télécharger des médias de réunion.',
        },
        {
          q: 'Mictoo identifie-t-il les intervenants Teams ?',
          a: 'Non. La transcription actuelle est un texte continu avec des horodatages par ligne et sans étiquettes automatiques des intervenants.',
        },
        {
          q: 'Les enregistrements Teams sont-ils stockés sur vos serveurs ?',
          a: 'Non. Le fichier est diffusé au fournisseur de transcription, traité une fois, puis supprimé. Seule la transcription persiste sur les comptes connectés.',
        },
      ]}

      ctaHeadline="Transformez les réunions Teams en texte clair"
      ctaSubtitle="Téléchargez un enregistrement autorisé de OneDrive ou SharePoint et obtenez du texte, un résumé et des exports."
      ctaButton="Télécharger l’enregistrement Teams"

      relatedLinks={[
        { href: '/fr/meeting-transcription',       label: 'Transcription de réunion' },
        { href: '/fr/zoom-transcription',          label: 'Transcription Zoom' },
        { href: '/fr/google-meet-transcription',   label: 'Transcription Google Meet' },
        { href: '/fr/business-transcription',      label: 'Transcription Business' },
        { href: '/fr/webinar-transcription',       label: 'Transcription de webinaire' },
      ]}
    />
  )
}