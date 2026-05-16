import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-text',
  'fr': 'https://mictoo.com/fr/wav-to-text',
  'de': 'https://mictoo.com/de/wav-to-text',
  'es': 'https://mictoo.com/es/wav-to-text',
  'ru': 'https://mictoo.com/ru/wav-to-text',
  'it': 'https://mictoo.com/it/wav-to-text',
  'pt': 'https://mictoo.com/pt/wav-to-text',
  'pl': 'https://mictoo.com/pl/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export const metadata = {
  title: 'WAV en texte — Transcription WAV gratuite en ligne | Mictoo',
  description: 'Convertissez les fichiers WAV en texte en ligne gratuitement. Déposez un fichier audio WAV et obtenez une transcription précise en quelques secondes. Sans inscription.',
  alternates: { canonical: 'https://mictoo.com/fr/wav-to-text', languages: LANGS },
}

export default function FrWavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · Gratuit · Instantané"
      h1={<>WAV en texte<br /><span className="text-brand-600">Transcription WAV gratuite en ligne</span></>}
      subtitle="Téléchargez n'importe quel fichier audio WAV et obtenez une transcription précise en quelques secondes. Compatible interviews, appels, cours, notes vocales. Sans compte."
      defaultLanguage="fr"
      features={[
        { icon: '🎙️', title: 'N\'importe quel WAV', desc: 'WAV standard, PCM, broadcast WAV — tout format WAV jusqu\'à 25 Mo accepté.' },
        { icon: '⏱️', title: 'Horodatages inclus', desc: 'Téléchargez la transcription en .txt ou en fichier de sous-titres .srt avec codes temps.' },
        { icon: '🌍', title: '50+ langues', desc: 'Détection automatique de la langue. Fonctionne pour le français, anglais, espagnol, allemand, russe et beaucoup d\'autres.' },
      ]}
      faq={[
        { q: 'Comment convertir un fichier WAV en texte ?', a: 'Téléchargez votre fichier WAV avec l\'outil ci-dessus. Mictoo le transcrit automatiquement par IA et affiche le texte en quelques secondes.' },
        { q: 'La conversion WAV en texte est-elle gratuite ?', a: 'Oui, entièrement gratuite. Sans compte. Téléchargez vos WAV — pas de quota mensuel, pas d\'inscription.' },
        { q: 'Quelle est la taille maximale du fichier WAV ?', a: 'Jusqu\'à 25 Mo. Pour des enregistrements plus volumineux, convertissez en MP3 ou divisez en segments plus courts.' },
        { q: 'Puis-je obtenir une transcription horodatée d\'un WAV ?', a: 'Oui. Après transcription, cliquez sur .srt pour télécharger un fichier de sous-titres avec horodatages précis.' },
        { q: 'Quels autres formats audio sont supportés ?', a: 'Mictoo supporte aussi MP3, MP4, M4A, OGG, WEBM et FLAC en plus du WAV.' },
      ]}
      relatedLinks={[
        { href: '/fr/transcribe-mp3-to-text', label: 'MP3 en texte' },
        { href: '/fr/transcribe-audio-to-text', label: 'Audio en texte' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
