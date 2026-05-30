import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'ja': 'https://mictoo.com/ja/webinar-transcription',
  'ko': 'https://mictoo.com/ko/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: 'Transcription de webinaire — Transcript gratuit pour vos webinaires | Mictoo',
  description: "Transcrivez gratuitement vos enregistrements de webinaires en texte et sous-titres SRT. Compatible Zoom, Webex, GoToWebinar, et tout export MP4 ou MP3. Sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/webinar-transcription', languages: LANGS },

  openGraph: {
    title: "Transcription de webinaire — Transcript gratuit pour vos webinaires | Mictoo",
    description: "Transcrivez gratuitement vos enregistrements de webinaires en texte et sous-titres SRT. Compatible Zoom, Webex, GoToWebinar, et tout export MP4 ou MP3. Sans inscription.",
    url: "https://mictoo.com/fr/webinar-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcription de webinaire — Transcript gratuit pour vos webinaires | Mictoo",
    description: "Transcrivez gratuitement vos enregistrements de webinaires en texte et sous-titres SRT. Compatible Zoom, Webex, GoToWebinar, et tout export MP4 ou MP3. Sans inscription.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrWebinarPage() {
  return (
    <LandingLayout
      badge="Webinaires · MP4 · Gratuit"
      h1={<>Transcription de webinaire<br /><span className="text-brand-600">Générateur gratuit de transcript</span></>}
      subtitle="Transformez l'enregistrement de votre webinaire en transcription textuelle recherchable ou fichier de sous-titres SRT. Fonctionne avec Zoom, Webex, GoToWebinar et tout export MP4/MP3."
      defaultLanguage="fr"
      features={[
        { icon: '🎥', title: 'Tous les exports de plateforme', desc: "Zoom, Webex, GoToWebinar, Demio, Livestorm — tous exportent en MP4 ou M4A. Déposez votre fichier directement, sans conversion." },
        { icon: '📝', title: 'Recyclez votre webinaire', desc: "Transformez un webinaire en article de blog, posts sociaux, newsletter et document de suivi pour les participants." },
        { icon: '📺', title: 'SRT pour la rediffusion', desc: "Téléchargez le fichier .srt et utilisez-le comme sous-titres quand vous publiez la rediffusion sur YouTube, Vimeo ou votre site." },
      ]}
      faq={[
        { q: "Comment télécharger mon enregistrement Zoom ou Webex ?", a: "Sur Zoom : portail web → Enregistrements → cliquer sur le webinaire → Télécharger. Sur Webex : ouvrir l'enregistrement dans Mes Enregistrements → Télécharger. Les deux exportent en MP4 par défaut." },
        { q: "Puis-je obtenir une transcription pendant que le webinaire est en direct ?", a: "Mictoo fonctionne sur des fichiers enregistrés, pas en streaming. Pour des sous-titres en temps réel, utilisez la fonction intégrée de votre plateforme, puis uploadez l'enregistrement ensuite pour une transcription propre." },
        { q: "Et plusieurs intervenants ou les sessions Q&A ?", a: "Mictoo génère une transcription unique avec toutes les paroles. Les libellés d'intervenant (Hôte, Panéliste 1, Public) peuvent être ajoutés manuellement dans l'éditeur du navigateur avant téléchargement." },
        { q: "Quelle est la durée maximale de webinaire ?", a: "Jusqu'à 25 Mo par fichier. Un webinaire de 60 minutes en audio 64 kbps mono y tient facilement ; exportez à un bitrate plus bas ou extrayez l'audio M4A pour des sessions plus longues." },
        { q: "La transcription est-elle précise pour les termes techniques ou sectoriels ?", a: "La précision est élevée pour un audio clair. Les noms de marque, acronymes et terminologie inhabituelle sont parfois mal orthographiés — rapide à corriger dans l'éditeur navigateur avant export." },
      ]}
      relatedLinks={[
        { href: '/fr/meeting-transcription', label: 'Transcription de réunion' },
        { href: '/fr/zoom-transcription', label: 'Transcription Zoom' },
        { href: '/fr/free-srt-generator', label: 'Générateur SRT' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
