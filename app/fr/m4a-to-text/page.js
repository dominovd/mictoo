import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4A en texte — Transcription M4A gratuite en ligne | Mictoo',
  description: "Convertissez les fichiers audio M4A en texte gratuitement. Déposez n'importe quel fichier M4A — mémos vocaux iPhone, enregistrements, podcasts — et obtenez la transcription instantanément. Sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/m4a-to-text', languages: LANGS },
}

export default function FrM4AToTextPage() {
  return (
    <LandingLayout
      badge="M4A · iPhone · Gratuit · Instantané"
      h1={<>M4A en texte<br /><span className="text-brand-600">Transcription M4A gratuite en ligne</span></>}
      subtitle="Convertissez les fichiers audio M4A en texte instantanément. Idéal pour les mémos vocaux iPhone, enregistrements audio et fichiers podcast. Sans compte."
      defaultLanguage="fr"
      features={[
        { icon: '📱', title: 'Mémos vocaux iPhone', desc: 'M4A est le format par défaut des mémos vocaux et enregistrements iPhone. Uploadez directement et obtenez la transcription en quelques secondes.' },
        { icon: '🎵', title: 'N\'importe quel fichier M4A', desc: 'Les fichiers M4A de toutes sources — iPhone, Mac, enregistreurs numériques, apps de podcasting — sont entièrement supportés.' },
        { icon: '📄', title: 'Export en texte ou SRT', desc: 'Téléchargez la transcription en .txt simple ou en .srt avec horodatages.' },
      ]}
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
