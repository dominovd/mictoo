import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Transcrire Audio en Texte Gratuitement — Mictoo',
  description: 'Transcrivez vos fichiers audio et vidéo en texte gratuitement. Aucune inscription requise. Propulsé par AI. Supporte MP3, MP4, WAV et plus.',
  alternates: { canonical: 'https://mictoo.com/fr' },
}

export default function FrenchPage() {
  return (
    <LandingLayout
      badge="Gratuit · Sans inscription · IA"
      h1={<>Transcrire Audio en Texte<br /><span className="text-brand-600">Gratuitement en Ligne</span></>}
      subtitle="Téléchargez n'importe quel fichier audio ou vidéo et obtenez une transcription précise en quelques secondes. Aucun compte requis."
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
          a: 'Téléchargez votre fichier audio ci-dessus. Mictoo le transcrit automatiquement grâce à l\'IA et affiche le texte en quelques secondes.',
        },
        {
          q: 'Mictoo fonctionne-t-il bien pour le français ?',
          a: 'Oui. AI est entraîné sur de nombreuses heures d\'audio en français et offre une excellente précision pour cette langue.',
        },
        {
          q: 'Mes fichiers sont-ils conservés ?',
          a: 'Non. Vos fichiers sont traités immédiatement et ne sont jamais stockés sur nos serveurs.',
        },
      ]}
      relatedLinks={[
        { href: '/', label: 'English' },
        { href: '/de', label: 'Deutsch' },
        { href: '/es', label: 'Español' },
      ]}
    />
  )
}
