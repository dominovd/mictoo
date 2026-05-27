import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Transcription IA Audio et Vidéo en Texte, Gratuite — Mictoo',
  description: "Transcrivez vos fichiers audio et vidéo en texte gratuitement. Sans inscription. Propulsé par IA. MP3, MP4, WAV et plus de 50 langues.",
  alternates: {
    canonical: 'https://mictoo.com/fr',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'ja': 'https://mictoo.com/ja',
      'ko': 'https://mictoo.com/ko',
      'x-default': 'https://mictoo.com',
    },
  },
  openGraph: {
    title: 'Mictoo — Transcription IA Audio & Vidéo Gratuite',
    description: "Téléchargez un fichier audio ou vidéo et obtenez la transcription en quelques secondes.",
    url: 'https://mictoo.com/fr',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — Transcription Audio & Vidéo Gratuite' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — Transcription IA Gratuite',
    description: "Téléchargez un fichier audio ou vidéo et obtenez la transcription en quelques secondes.",
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrenchPage() {
  return (
    <LandingLayout
      badge="IA · Gratuit · Sans inscription · 50+ langues"
      h1={<>Transcrire Audio et Vidéo en Texte<br /><span className="text-brand-600">avec l'IA, Gratuit en Ligne</span></>}
      subtitle="Téléchargez n'importe quel fichier audio ou vidéo et obtenez une transcription IA précise en quelques secondes. Aucun compte requis."
      defaultLanguage="fr"
      features={[
        {
          icon: '🎙️',
          title: 'Tous formats audio',
          desc: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Jusqu\'à 25 Mo.',
        },
        {
          icon: '🇫🇷',
          title: 'Français et 50+ langues',
          desc: 'Détection automatique de la langue. Fonctionne pour le français, l\'anglais, l\'espagnol et bien d\'autres.',
        },
        {
          icon: '📋',
          title: 'Copier ou télécharger',
          desc: 'Éditez la transcription dans le navigateur, puis copiez ou téléchargez en .txt ou .srt.',
        },
      ]}
      faq={[
        {
          q: 'Comment transcrire un fichier audio en texte gratuitement ?',
          a: "Téléchargez votre fichier audio ci-dessus. Mictoo le transcrit automatiquement avec Whisper d'OpenAI et affiche le texte en quelques secondes.",
        },
        {
          q: 'Mictoo fonctionne-t-il bien pour le français ?',
          a: "Oui. Whisper, le modèle d'OpenAI sur lequel Mictoo s'appuie, a été entraîné sur de nombreuses heures d'audio en français et offre une excellente précision pour cette langue.",
        },
        {
          q: 'Mes fichiers sont-ils conservés ?',
          a: 'Non. Vos fichiers sont traités immédiatement et ne sont jamais stockés sur nos serveurs.',
        },
      ]}
    />
  )
}
