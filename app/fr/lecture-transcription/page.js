import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'it': 'https://mictoo.com/it/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: 'Transcription de cours — Générateur gratuit pour étudiants | Mictoo',
  description: "Transcrivez gratuitement vos cours et conférences en texte. Déposez l'enregistrement et récupérez une transcription précise en quelques secondes. Sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/lecture-transcription', languages: LANGS },
}

export default function FrLecturePage() {
  return (
    <LandingLayout
      badge="Étudiants · Universitaires · Gratuit"
      h1={<>Transcription de cours<br /><span className="text-brand-600">Outil gratuit pour étudiants</span></>}
      subtitle="Enregistrez votre cours et déposez le fichier ici pour obtenir une transcription complète en quelques secondes. Révisez, étudiez et recherchez sans tout réécouter. Aucun compte requis."
      defaultLanguage="fr"
      features={[
        { icon: '🎓', title: 'Pour les étudiants', desc: "Ne luttez plus avec la prise de notes pendant les cours rapides. Enregistrez, déposez plus tard, obtenez une transcription consultable." },
        { icon: '🔍', title: 'Texte consultable', desc: "Retrouvez instantanément un concept ou une citation. Cherchez tout un semestre de notes en quelques secondes." },
        { icon: '🌍', title: '50+ langues', desc: "Fonctionne pour les cours en français, anglais, espagnol, allemand, mandarin, japonais et bien d'autres." },
      ]}
      faq={[
        { q: 'Comment transcrire un cours gratuitement ?', a: "Enregistrez votre cours en MP3, MP4, M4A ou WAV avec votre téléphone ou ordinateur, déposez le fichier ci-dessus et récupérez la transcription en quelques secondes." },
        { q: "Quelle est la meilleure application pour enregistrer un cours ?", a: "Tout enregistreur vocal convient : Dictaphone iPhone, enregistreur Android ou micro intégré au laptop. Sauvegardez le fichier et déposez-le ici." },
        { q: 'Puis-je transcrire des cours universitaires ?', a: "Oui, à condition d'avoir le droit d'enregistrer et de transcrire selon le règlement de votre établissement. Déposez le fichier et obtenez la transcription instantanément." },
        { q: 'Combien de temps pour transcrire un cours d\'une heure ?', a: "Avec Mictoo, un cours d'une heure est généralement transcrit en moins de 2 minutes. Attention à la limite de 25 Mo — baissez le débit ou divisez le fichier pour les longs cours." },
        { q: 'La transcription est-elle précise ?', a: "La précision est typiquement de 90 à 95 % pour un audio clair. Les cours techniques avec vocabulaire spécifique peuvent nécessiter des corrections manuelles." },
        { q: 'Puis-je transcrire des cours en ligne ?', a: "Oui. Téléchargez la vidéo ou extrayez l'audio, puis déposez le fichier ici. Les vidéos MP4 et WEBM sont également acceptées." },
      ]}
      relatedLinks={[
        { href: '/interview-transcription', label: "Transcription d'entretien" },
        { href: '/transcribe-audio-to-text', label: 'Audio en texte' },
        { href: '/timestamped-transcription', label: 'Transcription horodatée' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
