import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3 en texte — Transcription MP3 gratuite en ligne | Mictoo',
  description: 'Convertissez MP3 en texte en ligne gratuitement. Déposez votre fichier MP3 et obtenez une transcription précise en quelques secondes. IA. Sans inscription.',
  alternates: { canonical: 'https://mictoo.com/fr/transcribe-mp3-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'MP3 en texte — Mictoo',
  url: 'https://mictoo.com/fr/transcribe-mp3-to-text',
  description: 'Convertisseur MP3 vers texte en ligne gratuit basé sur l\'IA.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function FrMP3ToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="Gratuit · Sans inscription · Instantané"
        h1={<>Convertir MP3 en texte<br /><span className="text-brand-600">En ligne, gratuit</span></>}
        subtitle="Déposez n'importe quel fichier MP3 et obtenez une transcription textuelle précise en quelques secondes. Compatible interviews, podcasts, cours, notes vocales et plus."
        defaultLanguage="fr"
        features={[
          { icon: '🎵', title: 'N\'importe quel MP3', desc: 'Fonctionne avec les enregistrements vocaux, épisodes de podcast, interviews musicales, cours — tout MP3 jusqu\'à 25 Mo.' },
          { icon: '🌍', title: '50+ langues', desc: 'Détection automatique de la langue. Votre MP3 peut être en anglais, français, espagnol, allemand ou 47 autres langues.' },
          { icon: '📋', title: 'Copier ou télécharger', desc: 'Obtenez votre transcription en texte éditable. Téléchargez en .txt ou .srt (sous-titres).' },
        ]}
        faq={[
          { q: 'Comment convertir un MP3 en texte ?', a: 'Téléchargez votre fichier MP3 avec l\'outil ci-dessus. Mictoo le transcrit automatiquement avec l\'IA et affiche le texte en quelques secondes.' },
          { q: 'La conversion MP3 en texte est-elle gratuite ?', a: 'Oui, entièrement gratuite. Pas de compte requis. Téléchargez et transcrivez.' },
          { q: 'Quelle est la taille maximale du fichier MP3 ?', a: 'Jusqu\'à 25 Mo. Pour des enregistrements plus longs, envisagez de compresser le fichier ou de le diviser en segments.' },
          { q: 'Quelle est la précision de la transcription MP3 ?', a: 'Mictoo utilise l\'IA, qui atteint généralement 95 %+ de précision sur des enregistrements clairs. Le bruit de fond ou les accents peuvent affecter la qualité.' },
          { q: 'Puis-je obtenir des sous-titres depuis un MP3 ?', a: 'Oui. Après la transcription, cliquez sur le bouton .srt pour télécharger un fichier de sous-titres avec horodatages.' },
        ]}
        relatedLinks={[
          { href: '/fr/transcribe-audio-to-text', label: 'Audio en texte' },
          { href: '/fr/transcribe-video-to-text', label: 'Vidéo en texte' },
          { href: '/fr', label: 'Tous les formats' },
        ]}
      />
    </>
  )
}
