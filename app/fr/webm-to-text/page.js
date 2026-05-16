import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-text',
  'fr': 'https://mictoo.com/fr/webm-to-text',
  'de': 'https://mictoo.com/de/webm-to-text',
  'es': 'https://mictoo.com/es/webm-to-text',
  'ru': 'https://mictoo.com/ru/webm-to-text',
  'it': 'https://mictoo.com/it/webm-to-text',
  'pt': 'https://mictoo.com/pt/webm-to-text',
  'pl': 'https://mictoo.com/pl/webm-to-text',
  'x-default': 'https://mictoo.com/webm-to-text',
}

export const metadata = {
  title: 'WEBM en texte — Transcription WEBM gratuite en ligne | Mictoo',
  description: "Convertissez les fichiers audio et vidéo WEBM en texte gratuitement en ligne. Déposez n'importe quel enregistrement WEBM et obtenez une transcription précise instantanément. Sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/webm-to-text', languages: LANGS },
}

export default function FrWebmToTextPage() {
  return (
    <LandingLayout
      badge="WEBM · Enregistrements navigateur · Gratuit"
      h1={<>WEBM en texte<br /><span className="text-brand-600">Transcription WEBM gratuite en ligne</span></>}
      subtitle="Téléchargez n'importe quel fichier audio ou vidéo WEBM et obtenez une transcription précise en quelques secondes. WEBM est couramment utilisé par les navigateurs, enregistreurs d'écran et outils d'appels vidéo. Sans compte."
      defaultLanguage="fr"
      features={[
        { icon: '🖥️', title: 'Navigateur et écran', desc: 'WEBM est le format par défaut des captures d\'écran Chrome et Firefox, des clips Loom et des enregistrements WebRTC.' },
        { icon: '🎬', title: 'WEBM audio et vidéo', desc: 'Compatible avec les WEBM audio et vidéo. L\'audio est extrait automatiquement.' },
        { icon: '📄', title: 'Export .txt et .srt', desc: 'Téléchargez la transcription en texte simple ou en fichier de sous-titres SRT avec horodatages.' },
      ]}
      faq={[
        { q: 'Comment convertir WEBM en texte ?', a: 'Téléchargez votre fichier WEBM ci-dessus. La transcription est générée automatiquement et affichée en quelques secondes.' },
        { q: 'La conversion WEBM en texte est-elle gratuite ?', a: 'Oui, entièrement gratuite. Sans compte ni inscription.' },
        { q: 'Puis-je transcrire les captures d\'écran Chrome ?', a: 'Oui. L\'enregistreur d\'écran intégré de Chrome enregistre la vidéo en WEBM. Téléchargez le fichier directement pour obtenir une transcription.' },
        { q: 'Quelle est la taille maximale du WEBM ?', a: 'Jusqu\'à 25 Mo. Pour des enregistrements plus volumineux, extrayez d\'abord la piste audio pour réduire la taille.' },
      ]}
      relatedLinks={[
        { href: '/fr/transcribe-video-to-text', label: 'Vidéo en texte' },
        { href: '/fr/wav-to-text', label: 'WAV en texte' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
