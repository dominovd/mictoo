import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'Transcription de podcast — Générateur gratuit de transcript | Mictoo',
  description: 'Transcrivez gratuitement vos épisodes de podcast en texte. Déposez votre fichier audio et obtenez la transcription instantanément. MP3, M4A, WAV. Sans inscription.',
  alternates: { canonical: 'https://mictoo.com/fr/podcast-transcription', languages: LANGS },
}

export default function FrPodcastPage() {
  return (
    <LandingLayout
      badge="Podcasteurs · YouTube · Gratuit"
      h1={<>Transcription de podcast<br /><span className="text-brand-600">Générateur gratuit de transcript</span></>}
      subtitle="Transformez n'importe quel épisode de podcast en transcription textuelle en quelques secondes. Idéal pour les show notes, articles de blog, SEO et l'accessibilité. MP3, M4A ou WAV, sans compte."
      defaultLanguage="fr"
      features={[
        { icon: '🎙️', title: 'Tous les formats podcast', desc: 'Déposez vos fichiers MP3, M4A, WAV, OGG ou FLAC. Fonctionne avec tous les exports d\'hébergeurs de podcasts.' },
        { icon: '📝', title: 'Show notes & articles', desc: 'Transformez la transcription en contenu optimisé pour le SEO, en show notes, ou en archive consultable.' },
        { icon: '♿', title: 'Accessibilité', desc: 'Proposez la transcription pour rendre votre podcast accessible aux personnes sourdes et malentendantes.' },
      ]}
      faq={[
        { q: 'Comment transcrire un épisode de podcast gratuitement ?', a: "Téléchargez votre épisode au format MP3 ou M4A, déposez-le ci-dessus et récupérez la transcription complète en quelques secondes." },
        { q: 'Puis-je transcrire un podcast Spotify ?', a: "Si vous avez accès au fichier audio (par exemple votre propre émission), déposez-le directement. Pour les podcasts tiers, téléchargez l'épisode via une application qui permet l'écoute hors ligne, puis importez le fichier." },
        { q: 'Pourquoi créer une transcription de son podcast ?', a: "Les transcriptions améliorent le SEO (Google indexe le texte), rendent le contenu accessible aux personnes sourdes, peuvent être réutilisées en articles ou newsletters et aident les auditeurs à parcourir l'épisode." },
        { q: 'La transcription est-elle précise ?', a: "Pour un podcast bien enregistré avec un seul intervenant ou un duo clair, la précision dépasse en général 95 %. Elle baisse en cas de voix qui se chevauchent, d'accents marqués ou de qualité audio faible." },
        { q: 'Puis-je transcrire un entretien à deux voix ?', a: "Oui. La transcription capture toutes les paroles. Les libellés d'intervenant (Hôte / Invité) s'ajoutent manuellement dans l'éditeur du navigateur." },
        { q: 'Quelle est la taille maximale ?', a: "Jusqu'à 25 Mo. La plupart des MP3 à 128 kbps tiennent dans cette limite pour 25 minutes. Pour des épisodes plus longs, baissez le débit ou divisez le fichier." },
      ]}
      relatedLinks={[
        { href: '/transcribe-mp3-to-text', label: 'MP3 en texte' },
        { href: '/m4a-to-text', label: 'M4A en texte' },
        { href: '/interview-transcription', label: "Transcription d'entretien" },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
