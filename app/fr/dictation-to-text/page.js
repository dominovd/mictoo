import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Dictée en texte pour brouillons vocaux enregistrés | Mictoo',
  description:
    'Enregistrez un brouillon vocal, téléchargez le fichier et obtenez un texte modifiable avec des horodatages et des options d’exportation pour votre flux de travail d’écriture.',
  alternates: {
    canonical: 'https://mictoo.com/fr/dictation-to-text',
    languages: {
      'en': 'https://mictoo.com/dictation-to-text',
      'fr': 'https://mictoo.com/fr/dictation-to-text',
      'de': 'https://mictoo.com/de/dictation-to-text',
      'es': 'https://mictoo.com/es/dictation-to-text',
      'ru': 'https://mictoo.com/ru/dictation-to-text',
      'it': 'https://mictoo.com/it/dictation-to-text',
      'pt': 'https://mictoo.com/pt/dictation-to-text',
      'pl': 'https://mictoo.com/pl/dictation-to-text',
      'ja': 'https://mictoo.com/ja/dictation-to-text',
      'ko': 'https://mictoo.com/ko/dictation-to-text',
      'x-default': 'https://mictoo.com/dictation-to-text',
    },
  },
  openGraph: {
    title: 'Dictée en texte : gratuit | Mictoo',
    description: 'Enregistrez un brouillon par voix, déposez le fichier, obtenez un texte propre.',
    url: 'https://mictoo.com/fr/dictation-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dictée en texte',
    description: 'Écriture vocale pour les professionnels.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrDictationToTextPage() {
  return (
    <UseCaseLayout
      locale="fr"
      badge="Écrivains · Professionnels · Gratuit"
      h1First="Dictée en texte"
      h1Second="Écriture vocale pour tous ceux qui pensent plus vite qu’ils ne tapent"
      subtitle="Enregistrez un brouillon avec votre téléphone, ordinateur portable ou tout enregistreur vocal. Déposez le fichier. Obtenez un texte propre et ponctué prêt à être collé dans votre éditeur. Meilleure précision que la dictée intégrée du téléphone pour du contenu long."
      currentHref="/fr/dictation-to-text"

      platforms={[
        { name: 'iPhone',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: 'Windows Rec',  iconKey: 'mic',       brandBg: '#0078D4' },
        { name: 'QuickTime',    iconKey: 'videoCameraFill', brandBg: '#374151' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
        { name: 'Dragon',       iconKey: 'mic',       brandBg: '#DC2626' },
      ]}

      howItWorksTitle="Comment fonctionne la dictée en texte"
      steps={[
        {
          icon: 'folder',
          title: 'Enregistrez votre brouillon',
          desc: 'Tout enregistreur : mémo vocal du téléphone, enregistreur vocal de l’ordinateur portable ou une application de dictée dédiée.',
        },
        {
          icon: 'upload',
          title: 'Déposez le fichier ici',
          desc: 'M4A (iPhone), MP3 (Android), WAV (enregistreur). Gratuit jusqu’à 25 MB anonymement, 60 MB connecté.',
        },
        {
          icon: 'editPen',
          title: 'Texte propre, prêt à être collé',
          desc: 'Ponctuation automatique, ruptures de phrases et mise en forme. Passez en mode Éditeur pour des ajustements avant l’exportation.',
        },
      ]}

      exampleTitle="Exemple de brouillon dicté"
      exampleFileName="chapter-3-draft.m4a"
      exampleDurationLabel="12:44"
      exampleLines={[
        { t: '0:00',  line: 'Chapitre trois. Le matin du procès.' },
        { t: '0:06',  line: 'Alex avait à peine dormi. Pas vraiment par anxiété, mais à cause de l’étrange calme qui suit une longue préparation.' },
        { t: '0:20',  line: 'Pendant six mois, chaque heure d’éveil avait été consommée par l’affaire. Et maintenant, soudainement, il n’y avait plus rien à faire que de se présenter.' },
        { t: '0:36',  line: 'Le palais de justice était à trois pâtés de maisons de son appartement. Elle marchait lentement, laissant l’air froid de mars agir sur elle.' },
        { t: '0:50',  line: 'Au moment où elle atteignait les marches, les journalistes étaient déjà rassemblés, attendant un visage qu’ils reconnaissaient.' },
        { t: '1:04',  line: 'Elle baissa la tête et les dépassa. Il y aurait du temps pour les questions plus tard. Pas avant.' },
        { t: '1:18',  line: 'À l’intérieur, le hall était presque vide. Quelques greffiers, un agent d’entretien et le garde de sécurité qu’elle avait vu tous les jours cette semaine.' },
      ]}
      summaryPoints={[
        'Ouverture du chapitre 3 : matin du procès.',
        'Personnage : Alex, protagoniste, insomniaque mais pas anxieux.',
        'Cadre : matin froid de mars, palais de justice à trois pâtés de maisons.',
        'Présence médiatique à l’extérieur ; hall vide à l’intérieur.',
      ]}
      actionItems={[]}

      whyTitle="Pourquoi Mictoo pour la dictée"
      whyCards={[
        {
          icon: 'target',
          title: 'Conçu pour les brouillons enregistrés',
          desc: 'Enregistrez un brouillon complet d’abord, puis transcrivez-le en un seul fichier. Cela garde l’audio original disponible pendant que vous révisez et éditez le texte.',
        },
        {
          icon: 'editPen',
          title: 'Éditeur pour nettoyage post-dictée',
          desc: 'Passez en mode Éditeur, corrigez les noms, ajoutez des sauts de paragraphe et exportez au format DOCX prêt pour votre application d’écriture.',
        },
        {
          icon: 'sparkles',
          title: 'Résumé AI pour extraction de plan',
          desc: 'Un bon premier brouillon pour les points clés du chapitre, les points de mémo ou la structure d’article.',
        },
        {
          icon: 'globe',
          title: 'Dictez dans n’importe quelle langue',
          desc: '50+ langues avec détection automatique. Les écrivains multilingues peuvent changer de langue entre les enregistrements sans modifier les paramètres.',
        },
      ]}

      scenariosTitle="Scénarios de dictée courants"
      scenarios={[
        { icon: 'editPen', title: 'Premier brouillon' },
        { icon: 'book',    title: 'Dictée de chapitre' },
        { icon: 'briefcase', title: 'Mémo / e-mail' },
        { icon: 'chat',    title: 'Journal' },
        { icon: 'search',  title: 'Notes de recherche' },
        { icon: 'globe',   title: 'Multilingue' },
      ]}

      tipsTitle="Conseils pour une dictée plus claire"
      tips={[
        'Dites "virgule", "point", "nouveau paragraphe" si vous voulez une ponctuation explicite.',
        'Enregistrez dans une pièce calme pour que les mots soient plus faciles à distinguer.',
        'Pour de longs chapitres de plus de 60 MB, connectez-vous pour une séparation automatique.',
        'Revoyez le mode Éditeur avant l’exportation pour les noms et les termes techniques.',
      ]}

      guidesTitle="Outils connexes"
      guides={[
        { href: '/fr/voice-memo-to-text',      icon: 'mic',    title: 'Mémo vocal',   desc: 'Capture d’idée, pas écriture de brouillon' },
        { href: '/fr/m4a-to-text',             icon: 'file',   title: 'Format M4A',   desc: 'Exports iPhone / Apple' },
        { href: '/fr/transcribe-mp3-to-text',  icon: 'file',   title: 'Format MP3',   desc: 'Exports d’enregistreur Android' },
        { href: '/fr/interview-transcription', icon: 'chat',   title: 'Interview',    desc: 'Conversation enregistrée à deux' },
      ]}

      faq={[
        {
          q: 'En quoi Mictoo est-il différent de la dictée téléphonique en direct ?',
          a: 'Mictoo fonctionne à partir d’un enregistrement sauvegardé plutôt que d’écouter en direct pendant que vous tapez. Cela le rend utile pour revoir des brouillons plus longs par rapport à l’audio original, sous réserve des limites de taille de fichier et de durée actuelles.',
        },
        {
          q: 'Puis-je dicter des termes techniques ou médicaux ?',
          a: 'Whisper gère bien le vocabulaire technique courant. Pour les termes rares ou propriétaires, utilisez le mode Éditeur après la transcription pour corriger les erreurs. Plus rapide que de dicter et de corriger en ligne.',
        },
        {
          q: 'Quelle est la limite de taille de fichier pour la dictée ?',
          a: '25 MB anonymement, 60 MB lorsque vous êtes connecté. Un enregistrement vocal de 60 minutes à un débit binaire typique fait 20-30 MB, donc la plupart des sessions de dictée restent sous le plafond gratuit.',
        },
        {
          q: 'Mictoo ajoute-t-il automatiquement de la ponctuation ?',
          a: 'Oui. Les phrases et les paragraphes sont détectés à partir du rythme de la parole. Dites "virgule" ou "point" si vous voulez une ponctuation explicite à un moment précis.',
        },
        {
          q: 'Puis-je éditer la transcription avant l’exportation ?',
          a: 'Oui. Passez en mode Éditeur pour modifier n’importe quel mot ou ligne en ligne. Enregistrez les modifications et exportez au format TXT, DOCX ou PDF (connecté).',
        },
        {
          q: 'Puis-je traduire mon brouillon dicté ?',
          a: 'Oui. Choisissez une langue cible et cliquez sur Traduire. Utile pour les écrivains produisant dans une seconde langue, ou pour les traducteurs rédigeant une version de travail.',
        },
        {
          q: 'Les dictées sont-elles stockées sur vos serveurs ?',
          a: 'Non. L’audio est transmis au fournisseur de transcription, traité une fois, puis supprimé. Seule la transcription persiste si vous vous connectez et l’enregistrez.',
        },
      ]}

      ctaHeadline="Transformez les brouillons parlés en texte"
      ctaSubtitle="Chapitre, mémo, article, entrée de journal. Plus rapide que de taper quand vous savez déjà ce que vous voulez dire."
      ctaButton="Téléchargez une dictée"

      relatedLinks={[
        { href: '/fr/voice-memo-to-text',      label: 'Mémo vocal en texte' },
        { href: '/fr/interview-transcription', label: 'Transcription d’interview' },
        { href: '/fr/lecture-transcription',   label: 'Transcription de conférence' },
        { href: '/fr/m4a-to-text',             label: 'M4A en texte' },
        { href: '/fr/transcribe-mp3-to-text',  label: 'MP3 en texte' },
      ]}
    />
  )
}