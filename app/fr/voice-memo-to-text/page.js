import LandingLayout from '@/components/LandingLayout'

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
  title: 'Mémo vocal en texte — transcrivez les mémos vocaux iPhone gratuitement | Mictoo',
  description:
    "Transcription gratuite de mémos vocaux. Chargez votre mémo vocal iPhone ou enregistrement Android (M4A, MP3) et obtenez du texte propre en quelques secondes. Sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/voice-memo-to-text', languages: LANGS },

  openGraph: {
    title: "Mémo vocal en texte — transcrivez les mémos vocaux iPhone gratuitement | Mictoo",
    description: "Transcription gratuite de mémos vocaux. Chargez votre mémo vocal iPhone ou enregistrement Android (M4A, MP3) et obtenez du texte propre en quelques secondes. Sans inscription.",
    url: "https://mictoo.com/fr/voice-memo-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mémo vocal en texte — transcrivez les mémos vocaux iPhone gratuitement | Mictoo",
    description: "Transcription gratuite de mémos vocaux. Chargez votre mémo vocal iPhone ou enregistrement Android (M4A, MP3) et obtenez du texte propre en quelques secondes. Sans inscription.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrVoiceMemoPage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="iPhone · Android · Gratuit"
      h1={
        <>
          Mémo vocal en texte
          <br />
          <span className="text-brand-600">Transcripteur gratuit de mémos vocaux</span>
        </>
      }
      subtitle="Transformez vos mémos vocaux en texte propre. iPhone, Android, dictaphone dédié, tout fichier vocal. Déposez-le, obtenez la transcription en quelques secondes. Sans inscription, sans tarif à la minute."
      howItWorks={[
        {
          icon: '📱',
          title: "Mettez le mémo sur l'ordinateur (ou chargez depuis le téléphone)",
          desc: "iPhone : ouvrez Mémos vocaux, tapez Partager, AirDrop ou email vers vous. Android : trouvez l'enregistrement dans Fichiers ou dans le dossier de votre app de dictaphone. Ou utilisez le navigateur mobile pour charger direct depuis le téléphone.",
        },
        {
          icon: '📂',
          title: 'Déposez le fichier',
          desc: "M4A de l'iPhone, M4A ou MP3 d'Android, WAV de certains enregistreurs. Tout marche.",
        },
        {
          icon: '📋',
          title: 'Récupérez la transcription',
          desc: 'Lisez dans le navigateur, copiez dans le presse-papiers ou téléchargez en TXT. Collez dans Notion, Apple Notes, Google Docs ou là où vivent vos notes.',
        },
      ]}
      whyUse={{
        title: 'Pourquoi Mictoo pour les mémos vocaux',
        bullets: [
          {
            title: 'Support natif du M4A',
            desc: "Mémos vocaux iPhone sauve en M4A. On accepte le M4A directement. Pas de conversion.",
          },
          {
            title: 'Gratuit sans compteur à la minute',
            desc: "Les mémos vocaux, c'est du un à la fois. Payer à la minute pour une idée de 2 minutes, c'est ridicule. Gratuit sans plafond colle au cas d'usage.",
          },
          {
            title: 'Rapide sur les fichiers courts',
            desc: "Un mémo vocal de 2 minutes se transcrit en environ 5 secondes. Plus rapide que de taper l'idée vous-même.",
          },
          {
            title: 'Confidentialité',
            desc: "Les mémos vocaux sont souvent personnels. Votre audio va au prestataire de transcription, est traité, puis jeté. On ne le stocke pas.",
          },
          {
            title: 'Mobile-friendly',
            desc: 'Chargez direct depuis votre téléphone via le navigateur. iOS et Android marchent.',
          },
          {
            title: 'La détection automatique gère votre langue',
            desc: 'Mémos vocaux dans une des 50+ langues. Utile si vous pensez en deux langues et que vos mémos basculent.',
          },
        ],
      }}
      useCases={{
        title: 'À quoi servent les transcriptions de mémo vocal',
        items: [
          {
            title: 'Capture d\'idées en déplacement',
            desc: "Vous avez eu une pensée en marchant, vous l'avez dictée dans votre téléphone. Maintenant vous voulez agir dessus. Transcrivez, collez dans votre gestionnaire de tâches ou votre app de notes.",
          },
          {
            title: "Dicter de l'écriture longue",
            desc: 'Certaines personnes rédigent des essais, des posts de blog ou des emails en parlant. Transcrivez le mémo vocal, éditez le texte, expédiez.',
          },
          {
            title: "Actions après une réunion",
            desc: 'Vous vous êtes dicté un résumé en revenant de la salle de réunion. Transcrivez, collez dans le doc du projet.',
          },
          {
            title: 'Notes de terrain pour journalistes et chercheurs',
            desc: 'Captez observations et citations sur place. Transcrivez après pour avoir des notes organisées.',
          },
          {
            title: 'Listes-rappels (courses, prep, plans projet)',
            desc: "Les mémos vocaux sont plus rapides que de taper sur un téléphone. Transcrivez pour une version texte cherchable et éditable.",
          },
        ],
      }}
      proTips={{
        title: 'Astuces pour la transcription de mémo vocal',
        tips: [
          {
            title: 'Tenez le téléphone proche, mais pas trop',
            desc: "10 à 15 cm de la bouche, c'est l'optimum. Plus près, le micro chope les plosives et la respiration. Plus loin, vous perdez en intelligibilité dans les environnements bruyants.",
          },
          {
            title: "Le vent, c'est l'ennemi",
            desc: 'Un mémo vocal de 10 secondes dans une rue venteuse peut être inutilisable. Si vous pouvez, arrêtez-vous, tournez le dos au vent, puis enregistrez. Ou utilisez des écouteurs avec un micro résistant au vent.',
          },
          {
            title: 'Faites une pause avant les mots-clés',
            desc: "Quand vous dictez un nom, une adresse ou un terme technique, faites une brève pause avant. Whisper gère mieux les mots isolés que le débit rapide pour les noms propres.",
          },
          {
            title: 'Mémos vocaux iPhone est en M4A sans perte par défaut, mais vous pouvez passer en avec perte',
            desc: "Settings, Mémos vocaux, Qualité audio. Le sans perte est superflu pour la transcription. Le avec perte fait un tiers de la taille sans différence de précision.",
          },
          {
            title: "Coupez les silences au début et à la fin avant l'upload",
            desc: 'Mémos vocaux capture parfois 3 à 5 secondes de blanc. Coupez dans l\'app Mémos vocaux (tapez Edit) avant de partager. Fichier plus petit, transcription plus rapide.',
          },
          {
            title: "Pour les longues dictées (rédaction d'un brouillon à la voix), découpez en morceaux de 5 à 10 minutes",
            desc: 'Plus facile à éditer. Plus facile de ré-enregistrer un seul morceau si ça part de travers.',
          },
          {
            title: 'Whisper gère votre accent mieux que la dictée native du téléphone',
            desc: "iOS a une dictée intégrée, mais elle est english-first et faible sur les accents. Whisper couvre plus de 50 langues avec une meilleure précision.",
          },
        ],
      }}
      faq={[
        {
          q: 'Mictoo supporte Mémos vocaux iPhone ?',
          a: "Oui. Mémos vocaux iPhone sauve en M4A (parfois ALAC sans perte). Le M4A marche direct. Pour ALAC, convertissez d'abord en WAV ou M4A AAC.",
        },
        {
          q: "Comment passer le mémo vocal de l'iPhone à Mictoo ?",
          a: "Trois options. Ouvrez le mémo dans Mémos vocaux, tapez Partager, choisissez AirDrop vers le Mac (le plus rapide) ou email vers vous. Ou utilisez Safari sur l'iPhone pour ouvrir mictoo.com et charger direct depuis l'app Fichiers.",
        },
        {
          q: 'Et les enregistrements Android ?',
          a: "Les dictaphones Android sauvent en général en M4A ou MP3. Les deux marchent. Trouvez le fichier dans l'app Fichiers, partagez vers l'ordinateur ou chargez depuis le navigateur mobile.",
        },
        {
          q: 'Puis-je charger direct depuis le téléphone ?',
          a: "Oui. Le site est mobile-friendly. Tapez la zone d'upload, choisissez le fichier depuis l'app Fichiers du téléphone ou le dossier d'enregistrements.",
        },
        {
          q: 'Quelle longueur peut faire mon mémo vocal ?',
          a: "Jusqu'à 30 minutes par fichier en gratuit, 60 minutes connecté. La plupart des mémos vocaux font moins de 5 minutes, bien dans n'importe quelle limite.",
        },
        {
          q: 'Quelle précision pour la transcription de mémo vocal ?',
          a: "Pour une parole claire dans un environnement calme, 90 à 95 %. Pour une parole marmonnée, du bruit de fond (rue, café, voiture), la précision baisse. Les noms propres demandent souvent du nettoyage.",
        },
        {
          q: 'La transcription inclura-t-elle la ponctuation ?',
          a: 'Oui. Whisper ajoute la ponctuation automatiquement. Pas toujours parfait pour de la parole dictée (qui a moins de frontières naturelles de phrase), mais utilisable tel quel.',
        },
        {
          q: 'Ça marche pour dicter dans une langue non anglaise ?',
          a: "Oui, plus de 50 langues. Choisissez la langue manuellement dans le menu pour les mémos courts (la détection automatique a besoin de plus d'audio pour être fiable).",
        },
        {
          q: 'Mon mémo vocal est-il stocké ?',
          a: "Non. Le fichier va à notre prestataire de transcription, est traité, puis jeté.",
        },
        {
          q: "Puis-je éditer la transcription avant de la télécharger ?",
          a: "Oui. Corrigez les mots faux dans le navigateur avant l'export.",
        },
        {
          q: "Ça marche pour enregistrer des appels téléphoniques ?",
          a: "On transcrit le fichier que vous chargez, peu importe comment il a été enregistré. L'enregistrement d'appels en lui-même demande le consentement dans la plupart des juridictions. Obtenez le consentement avant d'enregistrer.",
        },
        {
          q: 'Différence entre ça et la dictée native iOS ?',
          a: "La dictée iOS est en temps réel pendant que vous parlez, limitée à certaines langues et faible sur les accents. Mictoo transcrit après l'enregistrement, supporte plus de 50 langues et utilise un modèle plus précis (Whisper large-v3).",
        },
      ]}
      relatedLinks={[
        { href: '/fr/m4a-to-text', label: 'M4A en texte', desc: 'Spécifiquement pour les fichiers M4A.' },
        { href: '/fr/dictation-to-text', label: 'Dictée en texte', desc: "Pour les brouillons et l'écriture longue à la voix." },
        { href: '/fr/interview-transcription', label: "Transcription d'interview", desc: 'Pour les interviews enregistrées au téléphone.' },
        { href: '/fr/transcribe-audio-to-text', label: 'Audio en texte', desc: "Pour d'autres formats audio." },
      ]}
    />
  )
}
