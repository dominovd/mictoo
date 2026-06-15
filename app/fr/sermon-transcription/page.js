import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'pl': 'https://mictoo.com/pl/sermon-transcription',
  'ja': 'https://mictoo.com/ja/sermon-transcription',
  'ko': 'https://mictoo.com/ko/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: 'Transcription de sermon — générateur gratuit de transcription | Mictoo',
  description: "Transcrivez gratuitement vos sermons et audios d’église en texte. Parfait pour les blogs, notes d’étude et l’accessibilité. Compatible MP3, MP4, M4A. Sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/sermon-transcription', languages: LANGS },

  openGraph: {
    title: "Transcription de sermon — générateur gratuit de transcription | Mictoo",
    description: "Transcrivez gratuitement vos sermons et audios d’église en texte. Parfait pour les blogs, notes d’étude et l’accessibilité. Compatible MP3, MP4, M4A. Sans inscription.",
    url: "https://mictoo.com/fr/sermon-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcription de sermon — générateur gratuit de transcription | Mictoo",
    description: "Transcrivez gratuitement vos sermons et audios d’église en texte. Parfait pour les blogs, notes d’étude et l’accessibilité. Compatible MP3, MP4, M4A. Sans inscription.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrSermonPage() {
  return (
    <LandingLayout
      badge="Sermons · Église · Gratuit"
      h1={<>Transcription de sermon<br /><span className="text-brand-600">Générateur gratuit de transcription</span></>}
      subtitle="Transformez vos enregistrements de sermons en texte propre en quelques secondes. Idéal pour les blogs d’église, guides d’étude, posts sociaux et pour rendre vos messages accessibles aux personnes malentendantes."
      defaultLanguage="fr"
      valueBlock={
        <>
          <p>
            Une prédication peut devenir beaucoup plus qu’un enregistrement du dimanche: article pour le site, sous-titres YouTube, notes de groupe, citations, archive consultable ou support pour l’équipe média.
          </p>
          <p>
            Mictoo aide à transformer l’audio ou la vidéo d’un sermon en texte réutilisable, avec horodatages et exports adaptés à la publication.
          </p>
        </>
      }
      howItWorks={[
        { title: 'Ajoutez l’enregistrement', desc: 'Importez l’audio de la régie, un MP3, un M4A ou une vidéo exportée.' },
        { title: 'Obtenez un brouillon', desc: 'Mictoo génère une transcription que l’équipe peut relire et corriger.' },
        { title: 'Publiez ou archivez', desc: 'Exportez en texte, SRT ou résumé pour le site, YouTube et les notes internes.' },
      ]}
      whyUse={{
        title: 'Pourquoi transcrire les sermons',
        bullets: [
          'Améliore l’accessibilité pour les personnes sourdes, malentendantes ou qui préfèrent lire.',
          'Crée rapidement du contenu réutilisable pour le site, la newsletter ou les réseaux sociaux.',
          'Rend les séries de prédications consultables par thème, passage biblique ou citation.',
          'Facilite le travail des bénévoles média qui doivent produire sous-titres et résumés.',
        ],
      }}
      useCases={{
        title: 'Usages fréquents',
        items: [
          { title: 'Page sermon du site', desc: 'Publiez le texte complet avec l’audio ou la vidéo.' },
          { title: 'Sous-titres YouTube', desc: 'Ajoutez un SRT pour rendre la vidéo plus accessible.' },
          { title: 'Groupes de maison', desc: 'Préparez des questions et extraits à partir du message.' },
          { title: 'Archive consultable', desc: 'Retrouvez les sermons par thème, verset ou série.' },
        ],
      }}
      proTips={{
        title: 'Conseils pour les sermons',
        tips: [
          'Si vous avez seulement une vidéo, extrayez l’audio pour réduire la taille du fichier.',
          'Relisez les noms bibliques, lieux et citations: ce sont souvent les passages à corriger.',
          'Pour les conférences longues, découpez par session ou intervenant avant transcription.',
        ],
      }}
      faq={[
        { q: "Comment transcrire l’enregistrement d’un sermon en texte ?", a: "Exportez l’enregistrement depuis la table de mixage de votre église, votre flux de podcast ou YouTube en MP3, MP4 ou M4A. Déposez le fichier ci-dessus — Mictoo transcrit en quelques secondes." },
        { q: "Puis-je transcrire les sermons de la chaîne YouTube de notre paroisse ?", a: "Oui. Pour votre propre chaîne : YouTube Studio → Contenu → cliquer sur la vidéo → Télécharger. Déposez le fichier dans Mictoo. Pour des chaînes externes, vous avez besoin d’une autorisation — beaucoup de ministères partagent les audios via leur flux de podcast." },
        { q: "Et les références bibliques et noms propres ?", a: "La transcription IA gère bien les versets et noms courants, mais peut mal orthographier les noms bibliques rares ou la terminologie propre à votre église. Modifiez-les dans l’éditeur avant téléchargement — généralement 30 secondes de relecture." },
        { q: "Quelle est la durée maximale du sermon ?", a: "Jusqu’à 25 Mo par fichier. Un sermon de 30 minutes en 128 kbps tient confortablement. Pour des messages plus longs (45-60 min), baissez le bitrate à 64 kbps mono ou divisez en deux parties." },
        { q: "Les fichiers restent-ils privés ?", a: "Oui. Les sermons sont traités puis immédiatement supprimés. Nous ne stockons ni l’audio ni le contenu de la transcription." },
      ]}
      relatedLinks={[
        { href: '/fr/podcast-transcription', label: 'Transcription de podcast' },
        { href: '/fr/lecture-transcription', label: 'Transcription de cours' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
