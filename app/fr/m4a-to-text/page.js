import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'pt': 'https://mictoo.com/pt/m4a-to-text',
  'pl': 'https://mictoo.com/pl/m4a-to-text',
  'ja': 'https://mictoo.com/ja/m4a-to-text',
  'ko': 'https://mictoo.com/ko/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4A en texte — Transcription M4A gratuite en ligne | Mictoo',
  description: "Convertissez les fichiers audio M4A en texte gratuitement. Déposez n’importe quel fichier M4A — mémos vocaux iPhone, enregistrements, podcasts — et obtenez la transcription instantanément. Sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/m4a-to-text', languages: LANGS },

  openGraph: {
    title: "M4A en texte — Transcription M4A gratuite en ligne | Mictoo",
    description: "Convertissez les fichiers audio M4A en texte gratuitement. Déposez n’importe quel fichier M4A — mémos vocaux iPhone, enregistrements, podcasts — et obtenez la transcription instantanément. Sans inscription.",
    url: "https://mictoo.com/fr/m4a-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "M4A en texte — Transcription M4A gratuite en ligne | Mictoo",
    description: "Convertissez les fichiers audio M4A en texte gratuitement. Déposez n’importe quel fichier M4A — mémos vocaux iPhone, enregistrements, podcasts — et obtenez la transcription instantanément. Sans inscription.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrM4AToTextPage() {
  return (
    <LandingLayout
      badge="M4A · iPhone · Gratuit · Instantané"
      h1={<>M4A en texte<br /><span className="text-brand-600">Transcription M4A gratuite en ligne</span></>}
      subtitle="Convertissez les fichiers audio M4A en texte instantanément. Idéal pour les mémos vocaux iPhone, enregistrements audio et fichiers podcast. Sans compte."
      defaultLanguage="fr"
      valueBlock={
        <>
          <p>
            M4A est le format audio courant des mémos vocaux iPhone, d’Apple Podcasts, de GarageBand, de Logic et de nombreuses applications mobiles. Il contient souvent une piste AAC efficace et suffisamment claire pour la transcription.
          </p>
          <p>
            Mictoo accepte les M4A directement: vous pouvez déposer le fichier tel quel, sans le convertir en MP3 ni perdre du temps dans un éditeur audio.
          </p>
        </>
      }
      howItWorks={[
        { title: 'Déposez le M4A', desc: 'Importez un mémo vocal, un export Apple ou tout fichier .m4a contenant de la parole.' },
        { title: 'Décodage direct', desc: 'Mictoo lit la piste AAC/ALAC et prépare la transcription dans le navigateur.' },
        { title: 'Exportez le résultat', desc: 'Téléchargez le texte, un SRT horodaté ou utilisez le résumé IA selon votre workflow.' },
      ]}
      whyUse={{
        title: 'Pourquoi M4A est pratique',
        bullets: [
          'Les mémos vocaux iPhone restent petits tout en gardant une parole claire.',
          'Pas besoin de convertir vers MP3 pour la plupart des enregistrements modernes.',
          'Fonctionne avec des exports GarageBand, Logic, FaceTime ou apps de prise de notes.',
          'Conserve le fichier source intact pendant que vous travaillez sur la transcription.',
        ],
      }}
      useCases={{
        title: 'Cas d’usage M4A',
        items: [
          { title: 'Mémos vocaux iPhone', desc: 'Transformez rapidement des idées, interviews ou notes de terrain en texte.' },
          { title: 'Exports de création audio', desc: 'Transcrivez des rushs GarageBand ou Logic avant montage.' },
          { title: 'Appels et cours enregistrés', desc: 'Récupérez les passages importants sans écouter tout le fichier.' },
          { title: 'Livres audio et étude', desc: 'Créez des notes de révision à partir de contenus parlés.' },
        ],
      }}
      proTips={{
        title: 'Conseils pour les M4A',
        tips: [
          'Coupez les longues silences avant upload si le fichier vient de Voice Memos.',
          'Évitez le mode Lossless si votre objectif est seulement la transcription vocale.',
          'Pour les fichiers bilingues, vérifiez la langue détectée avant d’exporter le résultat final.',
        ],
      }}
      faq={[
        { q: 'Comment convertir M4A en texte ?', a: 'Téléchargez votre fichier M4A avec l\'outil ci-dessus. La transcription est générée automatiquement et affichée en quelques secondes.' },
        { q: 'Puis-je transcrire les mémos vocaux iPhone ?', a: 'Oui. Les mémos vocaux iPhone sont enregistrés en M4A. Uploadez le fichier directement depuis l\'iPhone ou après transfert sur ordinateur.' },
        { q: 'M4A en texte est-il gratuit ?', a: 'Oui, entièrement gratuit. Sans compte, sans abonnement. Téléchargez et transcrivez.' },
        { q: 'Quelle est la taille maximale du fichier M4A ?', a: 'Jusqu\'à 25 Mo. La plupart des enregistrements vocaux et clips audio courts y tiennent largement.' },
        { q: 'Quels autres formats audio sont supportés ?', a: 'En plus du M4A, Mictoo supporte MP3, MP4, WAV, OGG, WEBM et FLAC.' },
      ]}
      relatedLinks={[
        { href: '/fr/wav-to-text', label: 'WAV en texte' },
        { href: '/fr/transcribe-mp3-to-text', label: 'MP3 en texte' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
