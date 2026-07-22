import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'ja': 'https://mictoo.com/ja/zoom-transcription',
  'ko': 'https://mictoo.com/ko/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Transcription Zoom pour enregistrements Cloud et Locaux | Mictoo',
  description:
    'Téléchargez un enregistrement MP4/M4A Cloud ou local de Zoom et obtenez une transcription horodatée, un résumé AI et des fichiers d’exportation.',
  alternates: {
    canonical: 'https://mictoo.com/fr/zoom-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcription d’enregistrement Zoom | Mictoo',
    description: 'Téléchargez un MP4/M4A Cloud ou local de Zoom et obtenez une transcription, un résumé et des exports.',
    url: 'https://mictoo.com/fr/zoom-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcription Zoom : Gratuit',
    description: 'Téléchargez un enregistrement Zoom et obtenez une transcription horodatée.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrZoomTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="fr"
      badge="Zoom · Cloud / Local / audio M4A · Gratuit"
      h1First="Transcription Zoom"
      h1Second="Enregistrements Cloud et locaux en texte"
      subtitle="Téléchargez un enregistrement MP4 Cloud de Zoom, un M4A uniquement audio, ou un enregistrement local. Obtenez une transcription horodatée, un résumé AI, une traduction et des fichiers d’exportation dans un seul flux de travail."
      currentHref="/fr/zoom-transcription"

      platforms={[
        { name: 'Cloud MP4',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF' },
        { name: 'M4A audio',    iconKey: 'mic',             brandBg: '#0EA5A4' },
        { name: 'Local MP4',    iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Google Meet',  iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/fr/google-meet-transcription' },
        { name: 'MS Teams',     iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/fr/teams-meeting-transcription' },
        { name: 'Meeting hub',  iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/fr/meeting-transcription' },
      ]}

      howItWorksTitle="Comment fonctionne la transcription Zoom"
      steps={[
        {
          icon: 'folder',
          title: 'Télécharger depuis Zoom',
          desc: 'Cloud : zoom.us → Enregistrements → télécharger MP4 ou la version "Audio Only (M4A)". Local : ~/Documents/Zoom/.',
        },
        {
          icon: 'upload',
          title: 'Déposez le fichier ici',
          desc: 'Le M4A uniquement audio est généralement beaucoup plus petit que le MP4 et évite de télécharger la piste vidéo. Gratuit jusqu’à 25 Mo de manière anonyme, 60 Mo connecté.',
        },
        {
          icon: 'editPen',
          title: 'Réviser et exporter',
          desc: 'Le temps de traitement dépend de la durée, de la taille du fichier et de la demande. Une fois terminé, révisez la transcription et exportez un résumé, des sous-titres ou un récapitulatif DOCX.',
        },
      ]}

      exampleTitle="Exemple de transcription de réunion Zoom"
      exampleFileName="zoom-cloud-recording.m4a"
      exampleDurationLabel="34:12"
      exampleLines={[
        { t: '0:00',  line: 'D’accord, désolé pour le retard tout le monde. Zoom a refusé de me laisser entrer jusqu’à ce que je mette à jour. Commençons.' },
        { t: '0:10',  line: 'Aujourd’hui, nous examinons les retours sur le prototype de la semaine dernière et décidons ce qu’il faut prioriser pour le sprint.' },
        { t: '0:22',  line: 'Dans l’ensemble, les retours étaient positifs. Douze des quinze participants ont compris le flux sans aide.' },
        { t: '0:33',  line: 'Les trois qui ont eu des difficultés ont tous rencontré le même problème sur l’écran des paramètres. Nous devrions régler cela en premier.' },
        { t: '0:45',  line: 'D’accord. J’ai déjà une révision de design en cours. Cela devrait être prêt à être révisé d’ici jeudi.' },
        { t: '0:56',  line: 'Deuxièmement, tout le monde a adoré le nouvel état vide mais personne n’a trouvé le bouton d’importation. Il est trop enfoui.' },
        { t: '1:08',  line: 'Déplaçons l’importation vers l’action principale sur l’état vide. C’est un changement d’une ligne pour l’ingénierie.' },
      ]}
      summaryPoints={[
        'Retours sur le prototype : 12/15 ont complété le flux sans aide.',
        'Bloqueur : l’écran des paramètres a confondu 3/15 participants.',
        'L’état vide a été bien reçu mais le bouton Importer est difficile à trouver.',
        'Révision de design d’ici jeudi.',
      ]}
      actionItems={[
        'Corriger l’écran des paramètres (révision de design jeudi)',
        'Promouvoir l’importation en action principale sur l’état vide',
        'Partager le prototype révisé lors de la réunion de vendredi',
      ]}

      whyTitle="Pourquoi utiliser Mictoo avec un enregistrement Zoom"
      whyCards={[
        {
          icon: 'target',
          title: 'Une seconde transcription à réviser',
          desc: 'Utilisez Mictoo lorsque vous souhaitez une transcription supplémentaire et un texte horodaté pour vérifier les noms, la terminologie et les citations clés.',
        },
        {
          icon: 'lock',
          title: 'Traite les fichiers téléchargés',
          desc: 'Mictoo ne se connecte pas à votre compte Zoom. Téléchargez un enregistrement Cloud ou local que vous avez déjà la permission d’utiliser.',
        },
        {
          icon: 'gear',
          title: 'Fonctionne aussi avec l’enregistrement local',
          desc: 'La transcription intégrée de Zoom est uniquement Cloud. L’enregistrement local n’obtient rien. Mictoo fonctionne avec les deux.',
        },
        {
          icon: 'sparkles',
          title: 'Résumé + Traduction inclus',
          desc: 'Le résumé AI apparaît automatiquement à côté de la transcription. Traduisez en plus de 50 langues en un clic.',
        },
      ]}

      scenariosTitle="Scénarios Zoom courants"
      scenarios={[
        { icon: 'chat',      title: 'Appel client' },
        { icon: 'users',     title: 'Standup d’équipe' },
        { icon: 'briefcase', title: 'Démonstration de vente' },
        { icon: 'search',    title: 'Entretien utilisateur' },
        { icon: 'book',      title: 'Webinaire' },
        { icon: 'globe',     title: 'Appel multilingue' },
      ]}

      tipsTitle="Conseils pour les enregistrements Zoom"
      tips={[
        'Téléchargez la version M4A "Audio Only". Même précision, 10x plus petit.',
        'Le quota d’enregistrement Cloud n’est pas utilisé pour notre transcription (nous fonctionnons en externe).',
        'L’enregistrement local fonctionne aussi. Regardez sous ~/Documents/Zoom/.',
        'Pour les longs appels de plus de 60 Mo, connectez-vous pour un auto-split.',
      ]}

      guidesTitle="Plateformes de réunion avec leurs propres guides"
      guides={[
        { href: '/fr/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: 'Workspace + solution gratuite' },
        { href: '/fr/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'Chemins OneDrive + SharePoint' },
        { href: '/fr/meeting-transcription',       icon: 'video', title: 'Meeting hub', desc: 'Toute plateforme, un téléchargement' },
        { href: '/fr/webinar-transcription',       icon: 'monitor', title: 'Webinaires',  desc: 'Webinaires Zoom, Demio, ON24' },
      ]}

      faq={[
        {
          q: 'Quels types d’enregistrements Zoom fonctionnent ?',
          a: 'Enregistrement Cloud MP4 (vidéo), Enregistrement Cloud M4A (audio uniquement), et Enregistrement Local MP4. Également export chat.txt si vous souhaitez le journal de chat, bien que nous ne transcrivions pas le chat.',
        },
        {
          q: 'Ai-je besoin de Zoom Pro ou supérieur ?',
          a: 'Non. Tout enregistrement Zoom fonctionne, y compris depuis l’enregistrement local de niveau gratuit. L’enregistrement Cloud de Zoom lui-même nécessite Pro+, mais si vous avez déjà le fichier, Mictoo ne se soucie pas de votre niveau Zoom.',
        },
        {
          q: 'Mon enregistrement Cloud MP4 dépasse 60 Mo. Que faire ?',
          a: 'Si votre enregistrement inclut un téléchargement Audio Only (M4A), utilisez-le pour éviter de télécharger la piste vidéo. La disponibilité et la taille du fichier dépendent des paramètres d’enregistrement et de la durée.',
        },
        {
          q: 'Devrais-je utiliser la transcription audio Zoom ou Mictoo ?',
          a: 'La transcription audio Zoom est pratique lorsque l’enregistrement Cloud et la transcription sont activés sur votre compte. Mictoo est utile pour les fichiers locaux, les formats d’exportation supplémentaires, la traduction, ou pour produire une autre transcription à réviser. La précision varie avec l’enregistrement.',
        },
        {
          q: 'Mictoo identifie-t-il les intervenants Zoom ?',
          a: 'Non. La transcription actuelle est un texte continu avec des horodatages par ligne et sans étiquettes automatiques "Intervenant 1 / Intervenant 2".',
        },
        {
          q: 'Où l’enregistrement local est-il sauvegardé ?',
          a: 'Par défaut, ~/Documents/Zoom/ sur Mac et %USERPROFILE%\\Documents\\Zoom\\ sur Windows. Chaque réunion obtient son propre dossier avec le MP4 et l’audio.m4a séparé.',
        },
        {
          q: 'Mon enregistrement Zoom est-il stocké sur vos serveurs ?',
          a: 'Non. Le fichier est diffusé au fournisseur de transcription, traité une fois, et supprimé de la mémoire. Seule la transcription persiste si vous vous connectez.',
        },
      ]}

      ctaHeadline="Transformez les enregistrements Zoom en texte propre"
      ctaSubtitle="Cloud MP4 ou M4A, Enregistrement Local, n’importe quel niveau Zoom. Gratuit par fichier."
      ctaButton="Télécharger l’enregistrement Zoom"

      relatedLinks={[
        { href: '/fr/meeting-transcription',       label: 'Transcription de réunion' },
        { href: '/fr/google-meet-transcription',   label: 'Transcription Google Meet' },
        { href: '/fr/teams-meeting-transcription', label: 'Transcription Teams' },
        { href: '/fr/webinar-transcription',       label: 'Transcription de webinaire' },
        { href: '/fr/interview-transcription',     label: 'Transcription d’entretien' },
      ]}
    />
  )
}