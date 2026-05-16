import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/ogg-to-text',
  'fr': 'https://mictoo.com/fr/ogg-to-text',
  'de': 'https://mictoo.com/de/ogg-to-text',
  'es': 'https://mictoo.com/es/ogg-to-text',
  'ru': 'https://mictoo.com/ru/ogg-to-text',
  'it': 'https://mictoo.com/it/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGG en texte — Transcription audio OGG gratuite en ligne | Mictoo',
  description: "Convertissez gratuitement les fichiers audio OGG en texte en ligne. Déposez n'importe quel enregistrement OGG Vorbis et obtenez une transcription précise instantanément. Sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/ogg-to-text', languages: LANGS },
}

export default function FrOggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · Gratuit · Instantané"
      h1={<>OGG en texte<br /><span className="text-brand-600">Transcription OGG gratuite en ligne</span></>}
      subtitle="Téléchargez n'importe quel fichier audio OGG et convertissez-le en texte en quelques secondes. Compatible OGG Vorbis et OGG Opus. Sans compte."
      defaultLanguage="fr"
      features={[
        { icon: '🎙️', title: 'OGG Vorbis & Opus', desc: 'Compatible avec les fichiers OGG de toutes sources — dictaphones, navigateurs web, applications de communication.' },
        { icon: '🌍', title: '50+ langues', desc: 'Langue détectée automatiquement. Fonctionne pour le français, anglais, espagnol, allemand et plus.' },
        { icon: '📄', title: 'Export .txt et .srt', desc: 'Téléchargez en texte simple ou en fichier de sous-titres SRT avec horodatages.' },
      ]}
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
