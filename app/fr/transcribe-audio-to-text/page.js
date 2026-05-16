import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-audio-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
  'de': 'https://mictoo.com/de/transcribe-audio-to-text',
  'es': 'https://mictoo.com/es/transcribe-audio-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
  'it': 'https://mictoo.com/it/transcribe-audio-to-text',
  'x-default': 'https://mictoo.com/transcribe-audio-to-text',
}

export const metadata = {
  title: 'Audio en texte — Transcription audio gratuite en ligne | Mictoo',
  description: "Transcrivez gratuitement vos fichiers audio en texte en ligne. Déposez n'importe quel fichier audio et obtenez une transcription précise instantanément. 50+ langues. IA.",
  alternates: { canonical: 'https://mictoo.com/fr/transcribe-audio-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Audio en texte — Mictoo',
  url: 'https://mictoo.com/fr/transcribe-audio-to-text',
  description: "Convertisseur audio vers texte gratuit en ligne. Compatible MP3, WAV, M4A, OGG, FLAC et plus.",
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function FrAudioToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP3 · WAV · M4A · FLAC · Gratuit"
        h1={<>Audio en texte<br /><span className="text-brand-600">Transcription IA gratuite</span></>}
        subtitle="Le moyen le plus rapide de convertir n'importe quel enregistrement audio en texte. Téléchargez votre fichier — sans compte, sans abonnement, sans attente."
        defaultLanguage="fr"
        features={[
          { icon: '🎙️', title: 'Tous les formats audio', desc: "MP3, WAV, M4A, OGG, FLAC, WEBM — n'importe quel fichier audio jusqu'à 25 Mo." },
          { icon: '🧠', title: 'Précision basée sur l\'IA', desc: "Notre IA est entraînée sur des centaines de milliers d'heures d'audio multilingue, pour une précision de pointe." },
          { icon: '🔒', title: 'Privé et sécurisé', desc: "Votre audio n'est jamais stocké. Les fichiers sont traités une fois et immédiatement supprimés." },
        ]}
        faq={[
          { q: "Quel est le meilleur convertisseur audio-texte gratuit ?", a: "Mictoo utilise l'IA, considérée comme l'un des modèles de reconnaissance vocale gratuits les plus précis. Compatible 50+ langues, sans compte." },
          { q: "Quelle est la précision de la transcription audio ?", a: "Notre IA atteint 95 %+ de précision sur les enregistrements clairs. Le bruit de fond ou les accents marqués peuvent légèrement la réduire." },
          { q: "Quels formats audio sont supportés ?", a: "MP3, WAV, M4A, OGG, FLAC, WEBM, MPEG. Les fichiers vidéo (MP4) sont également acceptés." },
          { q: "Combien de temps prend la transcription audio ?", a: "Un enregistrement de 10 minutes est généralement transcrit en 15-30 secondes. Pas de file d'attente — votre fichier est traité immédiatement." },
          { q: "Puis-je transcrire un enregistrement d'appel téléphonique ?", a: "Oui. Les enregistrements d'appel en MP3, WAV ou M4A fonctionnent bien. L'audio multi-locuteurs est transcrit comme un seul bloc de texte (les libellés d'intervenants requièrent un outil pro)." },
          { q: "Dois-je sélectionner la langue ?", a: "Non — la langue est détectée automatiquement. Si la détection donne de mauvais résultats, vous pouvez sélectionner la langue manuellement via le menu déroulant." },
        ]}
        relatedLinks={[
          { href: '/fr/transcribe-mp3-to-text', label: 'MP3 en texte' },
          { href: '/fr/transcribe-video-to-text', label: 'Vidéo en texte' },
          { href: '/fr', label: 'Tous les formats' },
        ]}
      />
    </>
  )
}
