import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'ja': 'https://mictoo.com/ja/webinar-transcription',
  'ko': 'https://mictoo.com/ko/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: 'Transcription de webinaire avec résumé et sous-titres | Mictoo',
  description:
    'Téléchargez un enregistrement de webinaire et obtenez un texte horodaté, un résumé AI et des sous-titres SRT/VTT pour la rediffusion.',
  alternates: {
    canonical: 'https://mictoo.com/fr/webinar-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcription de webinaire : gratuite | Mictoo',
    description: 'Téléchargez votre enregistrement de webinaire, obtenez une transcription propre.',
    url: 'https://mictoo.com/fr/webinar-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcription de webinaire',
    description: 'Transcription gratuite pour toute plateforme de webinaire.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrWebinarTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="fr"
      badge="Webinaires · Long format · Gratuit"
      h1First="Transcription de webinaire"
      h1Second="Transcription gratuite pour tout enregistrement de webinaire"
      subtitle="Téléchargez depuis Zoom Webinars, StreamYard, Demio, ON24, GoToWebinar ou Restream. Obtenez une transcription complète, un résumé AI et des sous-titres prêts pour la page de rediffusion à la demande."
      currentHref="/fr/webinar-transcription"

      platforms={[
        { name: 'Zoom Webinar', iconKey: 'broadcast',       brandBg: '#2D8CFF', href: '/fr/zoom-transcription' },
        { name: 'StreamYard',   iconKey: 'broadcast',       brandBg: '#6B21A8' },
        { name: 'Restream',     iconKey: 'broadcast',       brandBg: '#EC1E62' },
        { name: 'ON24',         iconKey: 'videoCameraFill', brandBg: '#3B82F6' },
        { name: 'Demio',        iconKey: 'videoCameraFill', brandBg: '#F97316' },
        { name: 'Livestorm',    iconKey: 'videoCameraFill', brandBg: '#DA1F5C' },
      ]}

      howItWorksTitle="Comment fonctionne la transcription de webinaire"
      steps={[
        {
          icon: 'folder',
          title: 'Exportez l’enregistrement du webinaire',
          desc: 'La plupart des plateformes fournissent un téléchargement MP4 après l’événement. Certaines fournissent également un M4A audio uniquement.',
        },
        {
          icon: 'upload',
          title: 'Déposez le fichier ici',
          desc: 'Les longs webinaires (plus de 60 minutes) bénéficient d’un auto-split connecté. Gratuit jusqu’à 25 MB anonymement, 60 MB connecté.',
        },
        {
          icon: 'editPen',
          title: 'Transcription, résumé, sous-titres',
          desc: 'Transcription horodatée pour la page de rediffusion, résumé AI comme récapitulatif de blog, SRT pour les sous-titres sur la vidéo à la demande.',
        },
      ]}

      exampleTitle="Exemple de transcription de webinaire"
      exampleFileName="product-launch-webinar.mp4"
      exampleDurationLabel="1:04:22"
      exampleLines={[
        { t: '0:00',  line: 'Bienvenue à tous, et merci de vous joindre à nous. Je m’appelle Sam et je dirige le marketing produit de l’entreprise.' },
        { t: '0:12',  line: 'Aujourd’hui, nous lançons officiellement la version cinq de la plateforme, et je veux vous montrer ce qui est nouveau.' },
        { t: '0:25',  line: 'Trois changements majeurs : reporting reconstruit, intégrations natives avec les dix principaux CRM, et un nouveau modèle de tarification.' },
        { t: '0:40',  line: 'Commençons par le reporting car c’est le changement que la plupart d’entre vous demandent depuis deux ans.' },
        { t: '0:52',  line: 'Les anciens rapports étaient lents, ils cassaient sur de grands ensembles de données, et il était difficile de les personnaliser. Les trois problèmes sont résolus.' },
        { t: '1:07',  line: 'Voici une démonstration en direct du nouveau constructeur de rapports. Pendant que je clique, gardez un œil sur la rapidité avec laquelle les aperçus se mettent à jour.' },
        { t: '1:22',  line: 'Chaque champ est glisser-déposer, les filtres sont empilables, et vous pouvez enregistrer n’importe quel rapport comme modèle partagé.' },
      ]}
      summaryPoints={[
        'Lancement de la version 5 avec 3 changements majeurs.',
        'Reporting reconstruit (améliore la vitesse, la taille des ensembles de données, la personnalisation).',
        'Intégrations natives avec les 10 principaux CRM.',
        'Nouveau modèle de tarification.',
      ]}
      actionItems={[
        'Rédiger un récapitulatif de blog à partir de la transcription',
        'Couper un extrait de démonstration pour les réseaux sociaux',
        'Publier la rediffusion sous-titrée à la demande',
      ]}

      whyTitle="Pourquoi choisir Mictoo pour la transcription de webinaire"
      whyCards={[
        {
          icon: 'clip',
          title: 'Sous-titres SRT pour la rediffusion',
          desc: 'Les horodatages s’alignent sur la vidéo originale. Déposez le SRT dans votre lecteur de rediffusion à la demande ou téléchargez sur YouTube.',
        },
        {
          icon: 'sparkles',
          title: 'Résumé AI pour le récapitulatif de blog',
          desc: 'Transforme un webinaire de 60 minutes en un résumé de 200 mots. Un bon premier brouillon pour l’email de suivi ou le post de blog.',
        },
        {
          icon: 'search',
          title: 'Transcription consultable sur la page d’accueil',
          desc: 'Publiez la transcription sur la page d’accueil à la demande. Les participants peuvent parcourir, le référencement s’améliore, personne n’a besoin de regarder 60 minutes.',
        },
        {
          icon: 'globe',
          title: 'Traduire pour les participants internationaux',
          desc: 'Traduction en un clic vers 50+ langues pour les emails de suivi et les pages de rediffusion non anglophones.',
        },
      ]}

      scenariosTitle="Scénarios courants de webinaire"
      scenarios={[
        { icon: 'broadcast', title: 'Lancement de produit' },
        { icon: 'book',      title: 'Formation / académie' },
        { icon: 'briefcase', title: 'Activation des ventes' },
        { icon: 'target',    title: 'Éducation des clients' },
        { icon: 'users',     title: 'Briefing des analystes' },
        { icon: 'globe',     title: 'Événement multilingue' },
      ]}

      tipsTitle="Conseils pour les enregistrements de webinaire"
      tips={[
        'Préférez l’export audio uniquement lorsque votre plateforme l’offre.',
        'Pour les webinaires de plus de 60 minutes, connectez-vous pour un auto-split jusqu’à 3 heures.',
        'Incluez le nom de l’hôte dans le fichier afin que l’en-tête de la transcription conserve le contexte.',
        'Tirez des citations clés de la transcription pour des extraits sociaux.',
      ]}

      guidesTitle="Outils connexes"
      guides={[
        { href: '/fr/zoom-transcription',        icon: 'video', title: 'Zoom Webinar',      desc: 'Enregistrement Cloud MP4 / M4A' },
        { href: '/fr/free-srt-generator',        icon: 'file',  title: 'Générateur SRT',     desc: 'Sous-titres vidéo à la demande' },
        { href: '/fr/podcast-transcription',     icon: 'headset', title: 'Podcast',         desc: 'Réutiliser l’audio du webinaire' },
        { href: '/fr/timestamped-transcription', icon: 'file',  title: 'Horodaté',       desc: 'Export convivial' },
      ]}

      faq={[
        {
          q: 'Avec quelles plateformes de webinaire Mictoo fonctionne-t-il ?',
          a: 'Avec toutes. Nous acceptons tout fichier audio ou vidéo, quelle que soit la plateforme. Zoom Webinars, StreamYard, Demio, Livestorm, ON24, GoToWebinar, Restream, Riverside Studio, et plus encore.',
        },
        {
          q: 'Mon enregistrement de webinaire dépasse 60 MB. Que faire ?',
          a: 'Connectez-vous pour un auto-split (jusqu’à environ 3 heures). Ou exportez audio uniquement depuis la plateforme, ou extrayez l’audio : ffmpeg -i webinar.mp4 -vn -ac 1 -ar 16000 audio.m4a.',
        },
        {
          q: 'Puis-je publier la transcription sur la page de rediffusion à la demande ?',
          a: 'Oui. Copiez la transcription dans le HTML de votre page d’accueil à la demande. Ajoute du contenu consultable, améliore le SEO, donne aux participants qui ne peuvent pas regarder un moyen de parcourir.',
        },
        {
          q: 'Puis-je obtenir des sous-titres pour la vidéo enregistrée du webinaire ?',
          a: 'Oui. Téléchargez SRT ou VTT après la transcription. Les deux fonctionnent avec YouTube, Vimeo, Wistia, Descript, et tous les lecteurs vidéo modernes.',
        },
        {
          q: 'Mictoo identifie-t-il les présentateurs par rapport aux intervenants de la Q&R ?',
          a: 'Non. La transcription actuelle est un texte continu avec des horodatages par ligne et sans étiquettes de locuteur automatiques.',
        },
        {
          q: 'Puis-je traduire la transcription du webinaire ?',
          a: 'Oui. Choisissez une langue cible et cliquez sur Traduire. Utile pour les participants internationaux ou les pages de rediffusion non anglophones.',
        },
        {
          q: 'Les enregistrements de webinaire sont-ils conservés sur vos serveurs ?',
          a: 'Non. Le fichier est transmis au fournisseur de transcription, traité une fois, et supprimé. Seule la transcription persiste sur les comptes connectés.',
        },
      ]}

      ctaHeadline="Transformez votre webinaire en un actif prêt pour la rediffusion"
      ctaSubtitle="Transcription complète, sous-titres SRT, résumé AI et texte consultable sur la page d’accueil."
      ctaButton="Téléchargez un enregistrement de webinaire"

      relatedLinks={[
        { href: '/fr/meeting-transcription',   label: 'Transcription de réunion' },
        { href: '/fr/zoom-transcription',      label: 'Transcription Zoom' },
        { href: '/fr/podcast-transcription',   label: 'Transcription de podcast' },
        { href: '/fr/lecture-transcription',   label: 'Transcription de cours' },
        { href: '/fr/free-srt-generator',      label: 'Générateur SRT gratuit' },
      ]}
    />
  )
}