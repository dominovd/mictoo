import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-text',
  'fr': 'https://mictoo.com/fr/flac-to-text',
  'de': 'https://mictoo.com/de/flac-to-text',
  'es': 'https://mictoo.com/es/flac-to-text',
  'ru': 'https://mictoo.com/ru/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC en texte — Transcription audio FLAC gratuite en ligne | Mictoo',
  description: "Convertissez gratuitement vos fichiers FLAC en texte. Déposez n'importe quel enregistrement FLAC et obtenez une transcription précise en quelques secondes. Sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/flac-to-text', languages: LANGS },
}

export default function FrFlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · Sans perte · Gratuit"
      h1={<>FLAC en texte<br /><span className="text-brand-600">Transcription FLAC gratuite en ligne</span></>}
      subtitle="Téléchargez n'importe quel fichier audio FLAC et convertissez-le en texte instantanément. La qualité sans perte du FLAC garantit une excellente précision de transcription. Sans compte."
      defaultLanguage="fr"
      features={[
        { icon: '🎵', title: 'Qualité audio sans perte', desc: "Les fichiers FLAC préservent toute la qualité audio, ce qui aide la transcription IA à atteindre la précision maximale." },
        { icon: '⚡', title: 'Résultats instantanés', desc: "La plupart des fichiers FLAC sont transcrits en moins de 30 secondes, quelle que soit la qualité ou la profondeur de bit." },
        { icon: '📄', title: 'Export .txt et .srt', desc: "Téléchargez la transcription en texte simple ou en fichier de sous-titres SRT avec horodatages." },
      ]}
      faq={[
        { q: 'Comment convertir un fichier FLAC en texte ?', a: "Téléchargez votre fichier FLAC ci-dessus. L'IA le transcrit et affiche le texte en quelques secondes." },
        { q: "Le FLAC se transcrit-il plus précisément que le MP3 ?", a: "La qualité sans perte du FLAC peut légèrement améliorer la précision sur des audios à volume faible ou complexes, comparé à des formats fortement compressés." },
        { q: 'La conversion FLAC en texte est-elle gratuite ?', a: 'Oui, entièrement gratuite. Sans compte ni inscription.' },
        { q: 'Quelle est la taille maximale du fichier FLAC ?', a: 'Jusqu\'à 25 Mo. Les fichiers FLAC sont volumineux à cause de la compression sans perte — envisagez un format avec perte si votre fichier dépasse la limite.' },
      ]}
      relatedLinks={[
        { href: '/fr/wav-to-text', label: 'WAV en texte' },
        { href: '/fr/transcribe-mp3-to-text', label: 'MP3 en texte' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
