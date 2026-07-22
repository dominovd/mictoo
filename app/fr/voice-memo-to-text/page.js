import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/voice-memo-to-text',
  'fr': 'https://mictoo.com/fr/voice-memo-to-text',
  'de': 'https://mictoo.com/de/voice-memo-to-text',
  'es': 'https://mictoo.com/es/voice-memo-to-text',
  'ru': 'https://mictoo.com/ru/voice-memo-to-text',
  'it': 'https://mictoo.com/it/voice-memo-to-text',
  'pt': 'https://mictoo.com/pt/voice-memo-to-text',
  'pl': 'https://mictoo.com/pl/voice-memo-to-text',
  'ja': 'https://mictoo.com/ja/voice-memo-to-text',
  'ko': 'https://mictoo.com/ko/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: 'Transcription de mémos vocaux pour iPhone et Android | Mictoo',
  description:
    'Téléchargez un enregistrement vocal d’iPhone ou d’Android et obtenez un texte horodaté, un résumé AI et des exports modifiables.',
  alternates: {
    canonical: 'https://mictoo.com/fr/voice-memo-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcription de mémos vocaux : Gratuit | Mictoo',
    description: 'Déposez votre enregistrement vocal d’iPhone ou d’Android, obtenez un texte clair.',
    url: 'https://mictoo.com/fr/voice-memo-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcription de mémos vocaux',
    description: 'Transcription gratuite pour les enregistrements vocaux téléphoniques.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrVoiceMemoToTextPage() {
  return (
    <UseCaseLayout
      locale="fr"
      badge="iPhone · Android · Gratuit"
      h1First="Transcription de mémos vocaux"
      h1Second="Transcription gratuite pour les enregistrements vocaux téléphoniques"
      subtitle="Déposez votre mémo vocal d’iPhone, enregistrement vocal Android, note vocale WhatsApp ou message vocal Telegram. Obtenez un transcript clair en quelques secondes. Pas d’inscription, pas de frais par minute."
      currentHref="/fr/voice-memo-to-text"

      platforms={[
        { name: 'iPhone',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: 'Samsung',      iconKey: 'mic',       brandBg: '#1428A0' },
        { name: 'WhatsApp',     iconKey: 'phone',     brandBg: '#25D366' },
        { name: 'Telegram',     iconKey: 'phone',     brandBg: '#0088CC' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
      ]}

      howItWorksTitle="Comment fonctionne la transcription des mémos vocaux"
      steps={[
        {
          icon: 'folder',
          title: 'Partagez l’enregistrement',
          desc: 'iPhone : feuille de partage depuis l’application Mémos Vocaux. Android : fichier depuis l’application Fichiers. WhatsApp : transférez en tant que fichier.',
        },
        {
          icon: 'upload',
          title: 'Déposez le fichier ici',
          desc: 'M4A (iPhone), MP3 (Android), OPUS/OGG (WhatsApp, Telegram) fonctionnent directement.',
        },
        {
          icon: 'editPen',
          title: 'Transcript en quelques secondes',
          desc: 'Un mémo de 5 minutes se termine en environ 10 secondes. Le résumé AI transforme des idées vagues en une liste d’actions concise.',
        },
      ]}

      exampleTitle="Exemple de transcript de mémo vocal"
      exampleFileName="voice-memo.m4a"
      exampleDurationLabel="3:22"
      exampleLines={[
        { t: '0:00',  line: 'D’accord, mémo vocal rapide avant que j’oublie toute l’idée.' },
        { t: '0:04',  line: 'Donc, l’idée est que nous prenons le flux de paiement et le divisons en deux étapes claires au lieu d’un long formulaire.' },
        { t: '0:13',  line: 'Étape un, juste email et carte. Étape deux, détails d’expédition après qu’ils voient le numéro de confirmation.' },
        { t: '0:22',  line: 'La raison pour laquelle cela compte est que le taux d’abandon sur le formulaire actuel à une seule page est d’environ trente-huit pour cent.' },
        { t: '0:32',  line: 'La plupart de cet abandon se produit à la section d’expédition, pas à l’entrée de la carte, ce qui est contre-intuitif.' },
        { t: '0:42',  line: 'Si nous déplaçons l’expédition après l’achat, nous pouvons probablement récupérer douze à quinze pour cent de ce trafic.' },
        { t: '0:52',  line: 'En termes de calendrier, je pense que c’est deux semaines de frontend, une semaine de backend, peut-être une semaine de tests.' },
      ]}
      summaryPoints={[
        'Idée : diviser le flux de paiement en deux étapes.',
        'Étape 1 : email + carte. Étape 2 : expédition après confirmation.',
        'Taux d’abandon actuel : 38 %, principalement à la section d’expédition.',
        'Récupération estimée : 12-15 % du trafic.',
      ]}
      actionItems={[
        'Ébaucher un mockup de paiement en deux étapes',
        'Vérifier le taux d’abandon de 38 % dans les analyses',
        'Définir l’ingénierie (~4 semaines au total)',
      ]}

      whyTitle="Pourquoi choisir Mictoo pour les mémos vocaux"
      whyCards={[
        {
          icon: 'sparkles',
          title: 'Résumé AI pour des mémos vagues',
          desc: 'Les mémos vocaux sont désordonnés par nature. Le résumé transforme un flux de pensée de cinq minutes en une prise de deux lignes.',
        },
        {
          icon: 'mic',
          title: 'iPhone .m4a natif',
          desc: 'Apple Voice Memos écrit .m4a (AAC dans MP4). Nous l’acceptons directement, sans conversion.',
        },
        {
          icon: 'chat',
          title: 'Telegram .oga natif',
          desc: 'Enregistrez le message vocal Telegram depuis le chat et déposez le fichier .oga. Opus dans OGG, géré nativement.',
        },
        {
          icon: 'globe',
          title: 'Traduire pour des notes multilingues',
          desc: 'Mémo dans votre langue maternelle, notes en anglais pour l’équipe. Un clic.',
        },
      ]}

      scenariosTitle="Scénarios courants de mémos vocaux"
      scenarios={[
        { icon: 'sparkles', title: 'Capture d’idée' },
        { icon: 'chat',     title: 'Notes de réunion' },
        { icon: 'editPen',  title: 'Rédaction de brouillon' },
        { icon: 'book',     title: 'Journalisation' },
        { icon: 'phone',    title: 'Message vocal' },
        { icon: 'globe',    title: 'Multilingue' },
      ]}

      tipsTitle="Conseils pour des mémos vocaux plus clairs"
      tips={[
        'Tenez le téléphone près pour réduire le bruit ambiant.',
        'Pour les longs mémos de plus de 60 MB, connectez-vous pour un découpage automatique.',
        'Parlez dans une langue par mémo pour la détection la plus claire.',
        'Dites "nouveau paragraphe" si vous voulez que le transcript s’arrête là.',
      ]}

      guidesTitle="Outils connexes"
      guides={[
        { href: '/fr/m4a-to-text',        icon: 'file',  title: 'Format M4A',       desc: 'Plongée dans iPhone / GarageBand' },
        { href: '/fr/ogg-to-text',        icon: 'file',  title: 'OGG / .oga',       desc: 'Plongée dans Telegram voice' },
        { href: '/fr/dictation-to-text',  icon: 'editPen', title: 'Dictée',      desc: 'Flux de travail axé sur la voix' },
        { href: '/fr/interview-transcription', icon: 'chat', title: 'Entretien',    desc: 'Entretien téléphonique ou en personne' },
      ]}

      faq={[
        {
          q: 'Puis-je transcrire directement des mémos vocaux d’iPhone ?',
          a: 'Oui. Partagez le mémo depuis l’application Mémos Vocaux (feuille de partage → enregistrer dans Fichiers ou envoyer à vous-même) et déposez le .m4a dans Mictoo. Pas de conversion nécessaire.',
        },
        {
          q: 'Mictoo transcrit-il les messages vocaux WhatsApp ou Telegram ?',
          a: 'Oui. Enregistrez le message vocal depuis le chat (transférer → enregistrer en tant que fichier) et déposez-le. Les notes vocales WhatsApp sont .opus, les notes vocales Telegram sont .oga (les deux sont des conteneurs OGG). Les deux fonctionnent directement.',
        },
        {
          q: 'Quelle est la limite de taille de fichier ?',
          a: '25 MB de manière anonyme, 60 MB lorsque connecté. Un mémo vocal de 60 minutes à un débit binaire typique fait environ 20-30 MB, donc la plupart rentrent sous le plafond gratuit.',
        },
        {
          q: 'Mictoo transcrit-il des mémos vocaux non anglais ?',
          a: 'Oui. Whisper large-v3 prend en charge plus de 50 langues. Pour les mémos courts ou le contenu non anglais, définissez la langue explicitement pour une détection plus claire au premier passage.',
        },
        {
          q: 'Puis-je obtenir un résumé d’un mémo de brainstorming désordonné ?',
          a: 'Oui. Le résumé AI apparaît automatiquement avec le transcript. Excellent pour transformer des mémos de flux de conscience en listes d’actions concises.',
        },
        {
          q: 'Les mémos vocaux sont-ils stockés sur vos serveurs ?',
          a: 'Non. L’audio est transmis au fournisseur de transcription, traité une fois, puis supprimé. Seul le transcript persiste si vous vous connectez et l’enregistrez.',
        },
        {
          q: 'Puis-je traduire mon mémo vocal dans une autre langue ?',
          a: 'Oui. Choisissez une langue cible et cliquez sur Traduire après la transcription. GPT-4o-mini gère la traduction et elle apparaît aux côtés de l’original.',
        },
      ]}

      ctaHeadline="Transformez les mémos vocaux en texte et en éléments d’action"
      ctaSubtitle="iPhone, Android, notes vocales WhatsApp, Telegram. Tous les formats, un téléchargement."
      ctaButton="Télécharger un mémo vocal"

      relatedLinks={[
        { href: '/fr/dictation-to-text',       label: 'Dictée vers texte' },
        { href: '/fr/interview-transcription', label: 'Transcription d’entretien' },
        { href: '/fr/m4a-to-text',             label: 'M4A vers texte' },
        { href: '/fr/ogg-to-text',             label: 'OGG vers texte' },
        { href: '/fr/meeting-transcription',   label: 'Transcription de réunion' },
      ]}
    />
  )
}