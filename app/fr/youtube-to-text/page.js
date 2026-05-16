import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube en texte — Transcription gratuite de vidéos YouTube | Mictoo',
  description: "Transcrivez des vidéos YouTube en texte et en sous-titres SRT gratuitement. Téléchargez d'abord l'audio puis déposez-le sur Mictoo. MP3, MP4, M4A. Sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/youtube-to-text', languages: LANGS },
}

export default function FrYouTubeToTextPage() {
  return (
    <LandingLayout
      badge="YouTube · SRT · Gratuit"
      h1={<>YouTube en texte<br /><span className="text-brand-600">Transcription gratuite de vidéos YouTube</span></>}
      subtitle="Transformez n'importe quelle vidéo YouTube en transcription ou en fichier SRT. Gratuit, sans inscription. Téléchargez l'audio ou la vidéo, puis déposez le fichier sur Mictoo."
      defaultLanguage="fr"
      features={[
        { icon: '🎬', title: 'Toute vidéo YouTube', desc: "Tutoriels, podcasts, entretiens, cours, vlogs — toute vidéo où la voix est claire. Langues détectées automatiquement, 50+ prises en charge." },
        { icon: '📺', title: 'SRT pour les sous-titres', desc: "Après transcription, téléchargez un fichier .srt prêt à l'emploi. Téléversez-le dans YouTube Studio pour ajouter des sous-titres précis à vos propres vidéos en quelques secondes." },
        { icon: '📝', title: 'Réutilisez votre contenu', desc: "Transformez une vidéo en article de blog, show notes, citations pour les réseaux sociaux, ou script pour la traduction. La transcription est entièrement modifiable dans le navigateur." },
      ]}
      faq={[
        { q: "Comment récupérer l'audio d'une vidéo YouTube ?", a: "Pour vos propres vidéos : ouvrez YouTube Studio → Contenu → cliquez sur la vidéo → Télécharger. Pour les vidéos tierces, les options dépendent de la licence de la vidéo et des Conditions d'utilisation de YouTube. Beaucoup d'utilisateurs téléchargent d'abord leur propre contenu, puis l'importent ici." },
        { q: "Mictoo peut-il télécharger directement depuis une URL YouTube ?", a: "Non — pour respecter les Conditions d'utilisation de YouTube et les droits des créateurs, Mictoo ne récupère pas le contenu via une URL. Importez un fichier audio ou vidéo que vous avez le droit de transcrire." },
        { q: "Comment ajouter des sous-titres Mictoo à ma vidéo YouTube ?", a: "Après la transcription, cliquez sur « Télécharger .srt » pour obtenir le fichier de sous-titres. Dans YouTube Studio : ouvrez la vidéo → Sous-titres → Ajouter une langue → Téléverser le fichier → choisissez le .srt. Les sous-titres se synchronisent automatiquement." },
        { q: 'La transcription fonctionne-t-elle pour les vidéos non anglophones ?', a: "Oui. Mictoo détecte automatiquement la langue parlée et prend en charge plus de 50 langues — espagnol, français, allemand, russe, japonais, chinois, arabe, etc. Réglez la langue manuellement si la détection se trompe." },
        { q: 'Quelle est la taille maximale de la vidéo ?', a: "Jusqu'à 25 Mo par téléversement. Un export audio de 25 minutes à 128 kbps tient. Pour les vidéos plus longues, extrayez la piste audio (M4A est le plus efficace) ou divisez le fichier en plusieurs parties." },
      ]}
      relatedLinks={[
        { href: '/transcribe-video-to-text', label: 'Vidéo en texte' },
        { href: '/fr/free-srt-generator', label: 'Générateur SRT' },
        { href: '/fr/podcast-transcription', label: 'Transcription de podcast' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
