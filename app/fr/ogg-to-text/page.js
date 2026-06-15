import LandingLayout from '@/components/LandingLayout'

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

export const metadata = {
  title: 'OGG en texte — Transcription audio OGG gratuite en ligne | Mictoo',
  description: "Convertissez gratuitement les fichiers audio OGG en texte en ligne. Déposez n’importe quel enregistrement OGG Vorbis et obtenez une transcription précise instantanément. Sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/ogg-to-text', languages: LANGS },

  openGraph: {
    title: "OGG en texte — Transcription audio OGG gratuite en ligne | Mictoo",
    description: "Convertissez gratuitement les fichiers audio OGG en texte en ligne. Déposez n’importe quel enregistrement OGG Vorbis et obtenez une transcription précise instantanément. Sans inscription.",
    url: "https://mictoo.com/fr/ogg-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OGG en texte — Transcription audio OGG gratuite en ligne | Mictoo",
    description: "Convertissez gratuitement les fichiers audio OGG en texte en ligne. Déposez n’importe quel enregistrement OGG Vorbis et obtenez une transcription précise instantanément. Sans inscription.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrOggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · Gratuit · Instantané"
      h1={<>OGG en texte<br /><span className="text-brand-600">Transcription OGG gratuite en ligne</span></>}
      subtitle="Téléchargez n’importe quel fichier audio OGG et convertissez-le en texte en quelques secondes. Compatible OGG Vorbis et OGG Opus. Sans compte."
      defaultLanguage="fr"
      valueBlock={
        <>
          <p>
            OGG est un conteneur: il peut contenir de l’audio Vorbis, Opus ou d’autres variantes. C’est fréquent dans les messages vocaux, les outils open source, les exports Linux et certaines applications web.
          </p>
          <p>
            Mictoo extrait la piste audio, détecte le codec et produit une transcription lisible avec horodatages, sans vous demander de convertir d’abord le fichier.
          </p>
        </>
      }
      howItWorks={[
        { title: 'Déposez le fichier OGG', desc: 'Ajoutez un .ogg ou .oga provenant d’un dictaphone, de Telegram, d’un navigateur ou d’un outil Linux.' },
        { title: 'Détection du codec', desc: 'Mictoo analyse le conteneur et lit la piste Vorbis ou Opus appropriée.' },
        { title: 'Téléchargez le texte', desc: 'Copiez la transcription ou exportez-la en TXT/SRT avec les repères temporels.' },
      ]}
      whyUse={{
        title: 'Pourquoi Mictoo pour OGG',
        bullets: [
          'Fonctionne avec les fichiers OGG/OGA que beaucoup d’outils grand public refusent encore.',
          'Garde les horodatages utiles pour revenir au message vocal ou à l’enregistrement original.',
          'Évite une conversion préalable vers MP3 qui peut faire perdre du temps et de la qualité.',
          'Pratique pour les flux Opus issus du web, des appels ou des messageries.',
        ],
      }}
      useCases={{
        title: 'Quand transcrire un OGG',
        items: [
          { title: 'Messages vocaux Telegram', desc: 'Transformez des .oga courts en notes exploitables.' },
          { title: 'Enregistrements Linux', desc: 'Transcrivez des captures produites par des outils audio open source.' },
          { title: 'Appels WebRTC', desc: 'Récupérez le contenu de réunions ou tests navigateur enregistrés en Opus.' },
          { title: 'Archives audio', desc: 'Rendez consultables de vieux fichiers OGG sans les réencoder.' },
        ],
      }}
      proTips={{
        title: 'Conseils pour les fichiers OGG',
        tips: [
          'Essayez aussi l’extension .oga: elle contient souvent le même type d’audio vocal.',
          'Pour une vidéo WebM/OGG lourde, extrayez seulement la piste audio avant upload si nécessaire.',
          'Sur de très courts messages, définissez la langue manuellement pour améliorer la ponctuation.',
        ],
      }}
      faq={[
        { q: 'Comment convertir OGG en texte ?', a: 'Téléchargez votre fichier OGG ci-dessus. La transcription est générée automatiquement en quelques secondes.' },
        { q: 'La conversion OGG en texte est-elle gratuite ?', a: 'Oui, entièrement gratuite. Sans inscription ni compte.' },
        { q: 'Quelle est la taille maximale du fichier OGG ?', a: 'Jusqu\'à 25 Mo.' },
        { q: 'Quels autres formats audio sont supportés ?', a: 'MP3, MP4, WAV, M4A, FLAC, WEBM sont aussi supportés.' },
      ]}
      relatedLinks={[
        { href: '/fr/wav-to-text', label: 'WAV en texte' },
        { href: '/fr/flac-to-text', label: 'FLAC en texte' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
