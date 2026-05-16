import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'Transcription horodatée — Générateur gratuit avec timecodes | Mictoo',
  description: 'Générez des transcriptions horodatées gratuitement. Déposez un audio ou une vidéo et téléchargez un fichier SRT avec des timecodes exacts. Sans inscription.',
  alternates: { canonical: 'https://mictoo.com/fr/timestamped-transcription', languages: LANGS },
}

export default function FrTimestampedPage() {
  return (
    <LandingLayout
      badge="Timecodes · SRT · Gratuit"
      h1={<>Transcription horodatée<br /><span className="text-brand-600">Transcript gratuit avec timecodes</span></>}
      subtitle="Déposez n'importe quel fichier audio ou vidéo et obtenez une transcription avec des timestamps exacts. Téléchargez en SRT — prêt pour YouTube, éditeurs vidéo et outils de sous-titrage. Sans inscription."
      defaultLanguage="fr"
      features={[
        { icon: '⏱️', title: 'Timecodes automatiques', desc: "Chaque segment reçoit un timestamp précis de début et de fin — généré automatiquement à partir de votre audio." },
        { icon: '📄', title: 'Téléchargement en .srt', desc: "Exportez votre transcription horodatée en fichier de sous-titres SRT. Téléversez directement sur YouTube, Premiere, DaVinci ou tout outil de sous-titrage." },
        { icon: '✏️', title: 'Texte modifiable', desc: 'Relisez et éditez la transcription texte dans votre navigateur avant le téléchargement. Aucun compte requis.' },
      ]}
      faq={[
        { q: "Qu'est-ce qu'une transcription horodatée ?", a: "Une transcription horodatée (ou transcription avec timecodes) est une version texte d'un audio ou d'une vidéo où chaque ligne inclut l'heure exacte à laquelle elle a été prononcée — par exemple « 00:01:23 → Bonjour, bienvenue dans l'émission ». Cela permet de synchroniser le texte avec le média original." },
        { q: 'Comment créer une transcription horodatée gratuitement ?', a: "Déposez votre fichier audio ou vidéo dans l'outil ci-dessus. Mictoo génère automatiquement une transcription avec timestamps et vous permet de la télécharger en SRT ou en texte brut horodaté." },
        { q: "Qu'est-ce qu'un fichier SRT ?", a: "SRT (SubRip Subtitle) est un format standard de fichier de sous-titres contenant des segments de texte horodatés. Les SRT sont pris en charge par YouTube, Netflix, Premiere Pro, Final Cut, DaVinci Resolve et la plupart des plateformes vidéo et éditeurs." },
        { q: 'Puis-je utiliser le SRT pour les sous-titres YouTube ?', a: "Oui. Après avoir téléchargé le .srt, allez dans YouTube Studio → Sous-titres → Ajouter une langue → Téléverser un fichier. Vos sous-titres horodatés seront synchronisés automatiquement avec la vidéo." },
        { q: 'Quelle est la précision des timestamps ?', a: 'Les timestamps sont générés au niveau du segment (généralement toutes les 5–15 secondes). La précision est élevée pour un audio clair. Les voix qui se chevauchent ou un bruit de fond important peuvent affecter la précision.' },
        { q: 'Quelle est la différence entre une transcription et une transcription horodatée ?', a: "Une transcription simple est une version texte de l'audio. Une transcription horodatée ajoute des timestamps pour que chaque section puisse être associée à un moment précis de l'enregistrement — essentiel pour les sous-titres et le montage vidéo." },
        { q: 'Quels formats sont pris en charge ?', a: "MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Tout fichier audio ou vidéo jusqu'à 25 Mo." },
      ]}
      relatedLinks={[
        { href: '/fr/free-srt-generator', label: 'Générateur SRT' },
        { href: '/transcribe-video-to-text', label: 'Vidéo en texte' },
        { href: '/transcribe-audio-to-text', label: 'Audio en texte' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
