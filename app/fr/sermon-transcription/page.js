import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: 'Transcription de sermon — Générateur gratuit de transcript de sermon | Mictoo',
  description: "Transcrivez gratuitement vos sermons et audios d'église en texte. Parfait pour les blogs, notes d'étude et l'accessibilité. Compatible MP3, MP4, M4A. Sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/sermon-transcription', languages: LANGS },
}

export default function FrSermonPage() {
  return (
    <LandingLayout
      badge="Sermons · Église · Gratuit"
      h1={<>Transcription de sermon<br /><span className="text-brand-600">Générateur gratuit de transcript</span></>}
      subtitle="Transformez vos enregistrements de sermons en texte propre en quelques secondes. Idéal pour les blogs d'église, guides d'étude, posts sociaux et pour rendre vos messages accessibles aux personnes malentendantes."
      defaultLanguage="fr"
      features={[
        { icon: '📖', title: 'Réutilisez chaque sermon', desc: "Convertissez un sermon en article de blog, méditation quotidienne, newsletter, guide d'étude et citations prêtes à partager. Démultipliez votre portée sans effort supplémentaire." },
        { icon: '♿', title: 'Accessibilité', desc: "Proposez des transcriptions pour que les membres sourds, malentendants ou à distance puissent pleinement s'engager avec le message." },
        { icon: '🌐', title: 'Multilingue', desc: "Fonctionne pour le français, l'anglais, l'espagnol, le portugais, le coréen, le russe et 45+ autres langues. Parfait pour les paroisses multilingues." },
      ]}
      faq={[
        { q: "Comment transcrire l'enregistrement d'un sermon en texte ?", a: "Exportez l'enregistrement depuis la table de mixage de votre église, votre flux de podcast ou YouTube en MP3, MP4 ou M4A. Déposez le fichier ci-dessus — Mictoo transcrit en quelques secondes." },
        { q: "Puis-je transcrire les sermons de la chaîne YouTube de notre paroisse ?", a: "Oui. Pour votre propre chaîne : YouTube Studio → Contenu → cliquer sur la vidéo → Télécharger. Déposez le fichier dans Mictoo. Pour des chaînes externes, vous avez besoin d'une autorisation — beaucoup de ministères partagent les audios via leur flux de podcast." },
        { q: "Et les références bibliques et noms propres ?", a: "La transcription IA gère bien les versets et noms courants, mais peut mal orthographier les noms bibliques rares ou la terminologie propre à votre église. Modifiez-les dans l'éditeur avant téléchargement — généralement 30 secondes de relecture." },
        { q: "Quelle est la durée maximale du sermon ?", a: "Jusqu'à 25 Mo par fichier. Un sermon de 30 minutes en 128 kbps tient confortablement. Pour des messages plus longs (45-60 min), baissez le bitrate à 64 kbps mono ou divisez en deux parties." },
        { q: "Les fichiers restent-ils privés ?", a: "Oui. Les sermons sont traités puis immédiatement supprimés. Nous ne stockons ni l'audio ni le contenu de la transcription." },
      ]}
      relatedLinks={[
        { href: '/fr/podcast-transcription', label: 'Transcription de podcast' },
        { href: '/fr/lecture-transcription', label: 'Transcription de cours' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
