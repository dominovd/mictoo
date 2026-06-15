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
  'ja': 'https://mictoo.com/ja/webm-to-text',
  'ko': 'https://mictoo.com/ko/webm-to-text',
  'x-default': 'https://mictoo.com/webm-to-text',
}

export const metadata = {
  title: 'WEBM en texte — Transcription WEBM gratuite en ligne | Mictoo',
  description: "Convertissez les fichiers audio et vidéo WEBM en texte gratuitement en ligne. Déposez n’importe quel enregistrement WEBM et obtenez une transcription précise instantanément. Sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/webm-to-text', languages: LANGS },

  openGraph: {
    title: "WEBM en texte — Transcription WEBM gratuite en ligne | Mictoo",
    description: "Convertissez les fichiers audio et vidéo WEBM en texte gratuitement en ligne. Déposez n’importe quel enregistrement WEBM et obtenez une transcription précise instantanément. Sans inscription.",
    url: "https://mictoo.com/fr/webm-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBM en texte — Transcription WEBM gratuite en ligne | Mictoo",
    description: "Convertissez les fichiers audio et vidéo WEBM en texte gratuitement en ligne. Déposez n’importe quel enregistrement WEBM et obtenez une transcription précise instantanément. Sans inscription.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrWebmToTextPage() {
  return (
    <LandingLayout
      badge="WEBM · Enregistrements navigateur · Gratuit"
      h1={<>WEBM en texte<br /><span className="text-brand-600">Transcription WEBM gratuite en ligne</span></>}
      subtitle="Téléchargez n’importe quel fichier audio ou vidéo WEBM et obtenez une transcription précise en quelques secondes. WEBM est couramment utilisé par les navigateurs, enregistreurs d’écran et outils d’appels vidéo. Sans compte."
      defaultLanguage="fr"
      valueBlock={
        <>
          <p>
            WEBM est très courant pour les enregistrements de navigateur: captures d’écran, clips Loom, exports OBS, appels WebRTC ou vidéos téléchargées depuis des outils web.
          </p>
          <p>
            Mictoo extrait la piste audio du fichier WEBM, la transcrit et permet d’exporter le résultat en texte ou en sous-titres synchronisés.
          </p>
        </>
      }
      howItWorks={[
        { title: 'Importez le WEBM', desc: 'Ajoutez une vidéo ou un fichier audio WEBM directement depuis votre navigateur.' },
        { title: 'Extraction audio', desc: 'Mictoo isole la piste vocale, même si le fichier contient aussi de la vidéo.' },
        { title: 'Export texte ou SRT', desc: 'Utilisez la transcription pour vos notes, votre base de connaissances ou vos sous-titres.' },
      ]}
      whyUse={{
        title: 'Pourquoi transcrire WEBM avec Mictoo',
        bullets: [
          'Pas besoin de convertir manuellement la vidéo en MP3 avant d’obtenir le texte.',
          'Les horodatages restent alignés avec la vidéo d’origine, utile pour créer des sous-titres.',
          'Les enregistrements Opus issus du navigateur sont traités directement.',
          'Vous pouvez garder le fichier vidéo source pour le montage et exporter seulement le texte nécessaire.',
        ],
      }}
      useCases={{
        title: 'Cas d’usage WEBM',
        items: [
          { title: 'Captures Loom ou navigateur', desc: 'Transformez une démo enregistrée en résumé ou documentation.' },
          { title: 'Enregistrements OBS', desc: 'Transcrivez des tutoriels, formations ou revues produit.' },
          { title: 'Appels sauvegardés localement', desc: 'Récupérez les décisions et questions sans relire toute la vidéo.' },
          { title: 'Clips de support', desc: 'Convertissez une explication vidéo en article d’aide.' },
        ],
      }}
      proTips={{
        title: 'Conseils pour les WEBM',
        tips: [
          'Si le fichier dépasse la limite, extrayez l’audio avec ffmpeg avant de l’envoyer.',
          'Placez le micro près de la personne qui parle: la vidéo nette ne compense pas un son distant.',
          'Conservez le WEBM original si vous devez ensuite synchroniser les sous-titres dans un éditeur vidéo.',
        ],
      }}
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
