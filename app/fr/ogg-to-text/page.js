import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'OGG vers texte : transcription de la voix Telegram, audio Linux et Opus/Vorbis | Mictoo',
  description:
    'Téléchargez de l’audio OGG (Vorbis, Opus, FLAC dans OGG) ou des messages vocaux .oga de Telegram. Transcription modifiable avec des horodatages en secondes, sans inscription.',
  alternates: {
    canonical: 'https://mictoo.com/fr/ogg-to-text',
    languages: {
      'en': 'https://mictoo.com/ogg-to-text',
      'fr': 'https://mictoo.com/fr/ogg-to-text',
      'de': 'https://mictoo.com/de/ogg-to-text',
      'es': 'https://mictoo.com/es/ogg-to-text',
      'ru': 'https://mictoo.com/ru/ogg-to-text',
      'it': 'https://mictoo.com/it/ogg-to-text',
      'pt': 'https://mictoo.com/pt/ogg-to-text',
      'pl': 'https://mictoo.com/pl/ogg-to-text',
      'ja': 'https://mictoo.com/ja/ogg-to-text',
      'ko': 'https://mictoo.com/ko/ogg-to-text',
      'x-default': 'https://mictoo.com/ogg-to-text',
    },
  },
  openGraph: {
    title: 'OGG vers texte : transcription de la voix Telegram, audio Linux, Opus/Vorbis | Mictoo',
    description: 'Téléchargez de l’audio OGG ou des messages vocaux .oga de Telegram. Transcription modifiable en secondes.',
    url: 'https://mictoo.com/fr/ogg-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OGG vers texte : transcription de la voix Telegram et audio Linux',
    description: 'Téléchargez de l’audio OGG ou des messages vocaux .oga de Telegram. Transcription modifiable en secondes.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

const LANGS = {
  'en': 'https://mictoo.com/ogg-to-text',
  'fr': 'https://mictoo.com/fr/ogg-to-text',
  'de': 'https://mictoo.com/de/ogg-to-text',
  'es': 'https://mictoo.com/es/ogg-to-text',
  'ru': 'https://mictoo.com/ru/ogg-to-text',
  'it': 'https://mictoo.com/it/ogg-to-text',
  'pt': 'https://mictoo.com/pt/ogg-to-text',
  'pl': 'https://mictoo.com/pl/ogg-to-text',
  'ja': 'https://mictoo.com/ja/ogg-to-text',
  'ko': 'https://mictoo.com/ko/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export default function FrOggToTextPage() {
  return (
    <FormatPageLayout
      locale="fr"
      badge="OGG · Vorbis · Opus · .oga"
      h1First="OGG vers texte"
      h1Second="Voix Telegram, audio Linux, Opus et Vorbis"
      subtitle="OGG est ce que la voix Telegram utilise (.oga), ce à quoi les applications audio Linux se réfèrent par défaut, et ce que le codec Opus open-source embarque. Déposez le fichier, nous détectons automatiquement le flux audio et transcrivons avec Whisper large-v3."
      highlightFormat="ogg"
      previewFileName="telegram-voice.oga"
      previewWordCount={128}
      previewDurationLabel="1:52"
      previewLines={[
        { t: '0:00',  line: 'Salut, message vocal rapide à propos de l’appel de demain.' },
        { t: '0:03',  line: 'J’ai regardé le diaporama et je pense que les diapositives quatre à six ont besoin d’être repensées avant que nous présentions.' },
        { t: '0:10',  line: 'Le principal problème est que l’histoire passe du problème directement au prix sans montrer les captures d’écran de la démo.' },
        { t: '0:20',  line: 'Ce que je ferais, c’est échanger la diapositive cinq pour le flux de démo et pousser le prix à la fin du diaporama.' },
        { t: '0:30',  line: 'De cette façon, nous créons la tension autour de ce que le produit fait réellement avant de parler du coût.' },
        { t: '0:39',  line: 'Aussi, le client a mentionné hier qu’il voulait voir la diapositive d’intégration, qui est actuellement dans l’annexe.' },
        { t: '0:49',  line: 'Déplacez-la dans le flux principal, peut-être entre la démo et le prix.' },
        { t: '0:56',  line: 'À bientôt, faites-moi savoir ce que vous en pensez quand vous aurez un moment.' },
      ]}
      whyTitle="Pourquoi choisir Mictoo pour la transcription OGG"
      whyCards={[
        {
          icon: 'mic',
          title: 'Messages vocaux Telegram, natifs',
          desc: 'Les notes vocales .oga de Telegram s’intègrent directement. Pas de renommage, pas de reconditionnement. Nous gérons le flux Opus à l’intérieur du conteneur OGG.',
        },
        {
          icon: 'gear',
          title: 'Vorbis, Opus et FLAC dans OGG',
          desc: 'Tout codec à l’intérieur du conteneur OGG fonctionne : Vorbis (ancien), Opus (moderne), FLAC dans OGG (audiophile). Détection automatique côté serveur.',
        },
        {
          icon: 'sparkles',
          title: 'Résumé AI pour les chaînes de messages vocaux',
          desc: 'Les messages vocaux ont tendance à être verbeux. Le résumé AI transforme un .oga de cinq minutes en une prise de deux lignes que vous pouvez actionner.',
        },
        {
          icon: 'globe',
          title: 'Traduire en plus de 50 langues',
          desc: 'Message vocal en russe, espagnol ou portugais d’un chat de groupe. Traduisez en anglais (ou toute autre langue cible) après transcription.',
        },
      ]}
      scenariosTitle="Quand OGG vers texte est la bonne solution"
      scenarios={[
        {
          icon: 'mic',
          title: 'Message vocal Telegram',
          desc: 'Note vocale envoyée par un collègue ou un client via Telegram. Enregistrez le .oga du chat, déposez-le ici, obtenez une version texte à parcourir.',
        },
        {
          icon: 'gear',
          title: 'Enregistrement audio Linux',
          desc: 'Enregistrement depuis Audacity, GNOME Sound Recorder ou un outil audio KDE qui se réfère par défaut à OGG. Entièrement supporté, pas de conversion.',
        },
        {
          icon: 'briefcase',
          title: 'Exportation d’application open-source',
          desc: 'Enregistreur de podcast ou d’interview qui exporte en OGG (de nombreuses applications FOSS se réfèrent par défaut à Vorbis ou Opus pour des raisons de licence).',
        },
        {
          icon: 'video',
          title: 'Capture avec Firefox MediaRecorder',
          desc: 'Firefox produit souvent OGG/Opus à partir d’applications d’enregistrement de navigateur. Déposez le fichier pour une transcription propre avec des horodatages.',
        },
        {
          icon: 'editPen',
          title: 'Note ou mémo dicté',
          desc: 'Note capturée en priorité vocale dans une application qui enregistre au format OGG. Transformez-la en texte modifiable prêt pour votre flux de travail d’écriture.',
        },
        {
          icon: 'users',
          title: 'Journal de chat OGG multi-interlocuteurs',
          desc: 'Enregistrement VOIP de Discord, Mumble ou similaire exporté en OGG. Transcription pour référence, procès-verbal de réunion ou archive.',
        },
      ]}
      technicalTitle="Que peut contenir un fichier OGG"
      technicalIntro="OGG est une famille de conteneurs plutôt qu’un seul codec audio. Connaître le type de flux et l’extension aide à expliquer d’où provient un enregistrement, mais vous n’avez pas besoin de le reconditionner avant de le télécharger."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Vorbis, Opus ou FLAC',
          desc: 'Le conteneur OGG peut transporter plusieurs codecs. Les messages vocaux utilisent couramment Opus ; les anciens fichiers audio de bureau utilisent souvent Vorbis.',
        },
        {
          icon: 'file',
          title: '.oga et .ogg',
          desc: '.oga est l’extension audio uniquement dans la même famille de conteneurs. Les exportations vocales Telegram arrivent souvent avec cette extension.',
        },
        {
          icon: 'mic',
          title: 'Source du message vocal',
          desc: 'Les messages courts sur mobile peuvent inclure du bruit ambiant et un traitement téléphonique ; une capture claire est plus importante que le nom du conteneur.',
        },
        {
          icon: 'gear',
          title: 'Inspection basée sur l’en-tête',
          desc: 'La structure du flux est inspectée pendant le traitement, donc une extension inhabituelle n’a pas besoin d’être renommée au préalable.',
        },
      ]}
      faq={[
        {
          q: 'Quels types de fichiers OGG Mictoo accepte-t-il ?',
          a: 'Tout conteneur OGG standard : audio Vorbis (ancien, courant sur Linux), audio Opus (nouveau, utilisé par la voix Telegram et les applications modernes), et FLAC dans OGG. Également des fichiers .oga de Telegram, qui sont OGG avec une extension différente.',
        },
        {
          q: 'Un fichier .oga est-il le même que .ogg ?',
          a: 'Effectivement oui. .oga est l’extension standardisée pour l’audio uniquement OGG, le plus souvent utilisée par les messages vocaux Telegram portant un flux Opus. Mictoo traite .oga et .ogg de la même manière.',
        },
        {
          q: 'Mon fichier OGG fait plus de 60 Mo. Que faire ?',
          a: 'Opus et Vorbis sont efficaces, donc atteindre 60 Mo signifie généralement un enregistrement très long. Si vous êtes connecté, nous divisons automatiquement jusqu’à environ 3 heures. Sinon, réduisez d’abord : ffmpeg -i in.ogg -b:a 32k -ac 1 out.ogg. La parole reste claire.',
        },
        {
          q: 'Acceptez-vous les vidéos OGG (Theora) ?',
          a: 'La piste audio à l’intérieur d’un conteneur OGG/Theora se transcrit. Téléchargez le fichier .ogv et nous démuxons l’audio comme avec tout format vidéo. Les clips Theora silencieux produiront des transcriptions vides.',
        },
        {
          q: 'Mictoo transcrit-il les OGG non anglais ?',
          a: 'Oui. Whisper large-v3 prend en charge plus de 50 langues avec détection automatique. Pour les messages vocaux courts ou le contenu non anglais, définissez la langue explicitement pour des résultats de premier passage plus propres.',
        },
        {
          q: 'Puis-je obtenir des sous-titres SRT pour un enregistrement OGG ?',
          a: 'Oui. Téléchargez SRT ou VTT après transcription. Les horodatages s’alignent sur la chronologie OGG d’origine pour une utilisation dans des éditeurs vidéo ou des outils d’accessibilité.',
        },
        {
          q: 'Mon fichier OGG est-il conservé sur vos serveurs ?',
          a: 'Non. Les flux audio vont au fournisseur de transcription, sont traités une fois et sont supprimés de la mémoire. Nous ne l’écrivons jamais sur disque. Les transcriptions ne sont stockées que si vous vous connectez et enregistrez dans l’historique.',
        },
        {
          q: 'Puis-je traduire la transcription dans une autre langue ?',
          a: 'Oui. Après transcription, choisissez une langue cible et cliquez sur Traduire. La traduction fonctionne sur GPT-4o-mini et apparaît à côté de l’original.',
        },
        {
          q: 'La qualité OGG affecte-t-elle la transcription ?',
          a: 'À peine. Opus à 24-32 kbps sonne clair pour la voix et se transcrit essentiellement aussi bien que des débits plus élevés. Whisper rééchantillonne en mono à 16 kHz en interne, donc le débit a un impact minimal pour une parole claire.',
        },
        {
          q: 'Combien de temps prend une transcription OGG ?',
          a: 'Une note vocale Telegram de 2 minutes se termine généralement en 5-15 secondes de bout en bout. Les fichiers OGG plus longs (30-45 minutes) prennent 45-90 secondes. La vitesse de téléchargement est souvent l’étape la plus longue.',
        },
      ]}
      ctaHeadline="Déposez votre fichier vocal Telegram ou OGG"
      ctaSubtitle="Opus, Vorbis, FLAC dans OGG, messages vocaux .oga. Chaque flux OGG, traité nativement."
      ctaButton="Télécharger OGG pour transcrire"
    />
  )
}