import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: 'Vidéo en texte — Transcription vidéo gratuite en ligne | Mictoo',
  description: 'Convertissez vidéo en texte en ligne gratuitement. Déposez MP4, WEBM ou MOV et obtenez une transcription précise instantanément. IA. Sans compte.',
  alternates: { canonical: 'https://mictoo.com/fr/transcribe-video-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Vidéo en texte — Mictoo',
  url: 'https://mictoo.com/fr/transcribe-video-to-text',
  description: 'Convertisseur vidéo vers texte en ligne gratuit. Transcrit MP4, WEBM et autres formats vidéo.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function FrVideoToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP4 · WEBM · Gratuit · Instantané"
        h1={<>Vidéo en texte en ligne<br /><span className="text-brand-600">Transcription gratuite</span></>}
        subtitle="Téléchargez n'importe quel fichier vidéo — téléchargements YouTube, captures d'écran, interviews, cours — et obtenez le texte parlé en quelques secondes."
        defaultLanguage="fr"
        features={[
          { icon: '🎬', title: 'MP4, WEBM et plus', desc: "Compatible MP4, WEBM, MPEG et d'autres formats vidéo. L'audio est extrait automatiquement." },
          { icon: '🎞️', title: 'Sous-titres SRT', desc: "Téléchargez un fichier .srt horodaté — prêt à uploader sur YouTube ou tout éditeur vidéo." },
          { icon: '⚡', title: 'Résultats instantanés', desc: "Une vidéo de 10 minutes est généralement transcrite en moins de 30 secondes. Pas de file d'attente." },
        ]}
        faq={[
          { q: "Comment transcrire une vidéo gratuitement ?", a: "Téléchargez votre fichier vidéo avec l'outil ci-dessus. Mictoo extrait l'audio et le transcrit via IA. La transcription apparaît en quelques secondes." },
          { q: "Puis-je obtenir des sous-titres depuis une vidéo ?", a: "Oui. Après transcription, cliquez sur le bouton .srt pour obtenir un fichier de sous-titres horodaté à uploader sur YouTube, Premiere ou tout outil de montage." },
          { q: "Quels formats vidéo sont supportés ?", a: "MP4, WEBM, MPEG. Les fichiers audio (MP3, WAV, M4A, OGG, FLAC) sont également supportés." },
          { q: "Fonctionne-t-il avec les vidéos YouTube ?", a: "Oui — téléchargez d'abord votre vidéo YouTube (avec un downloader YouTube), puis uploadez le fichier ici pour la transcription." },
          { q: "Y a-t-il une limite de taille ?", a: "Jusqu'à 25 Mo. Pour des vidéos plus longues, extrayez d'abord la piste audio (ex. avec ffmpeg ou un convertisseur en ligne) pour réduire la taille." },
        ]}
        relatedLinks={[
          { href: '/fr/transcribe-mp3-to-text', label: 'MP3 en texte' },
          { href: '/fr/transcribe-audio-to-text', label: 'Audio en texte' },
          { href: '/fr', label: 'Tous les formats' },
        ]}
      />
    </>
  )
}
