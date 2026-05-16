import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
  'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Transcription Microsoft Teams — Transcrire les enregistrements Teams | Mictoo',
  description: "Transcrivez gratuitement vos enregistrements Microsoft Teams en texte. Fonctionne avec les MP4 de OneDrive ou SharePoint. Sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/teams-meeting-transcription', languages: LANGS },
}

export default function FrTeamsPage() {
  return (
    <LandingLayout
      badge="Microsoft Teams · MP4 · Gratuit"
      h1={<>Transcription Microsoft Teams<br /><span className="text-brand-600">Vos réunions Teams en texte</span></>}
      subtitle="Convertissez l'enregistrement de votre réunion Microsoft Teams en texte propre ou en fichier de sous-titres SRT. Gratuit, sans compte. Fonctionne avec les MP4 de OneDrive ou SharePoint."
      defaultLanguage="fr"
      features={[
        { icon: '🏢', title: 'Adapté aux workflows Teams', desc: "Téléchargez l'enregistrement depuis OneDrive ou SharePoint — généralement sous \"Recordings\" dans le chat de votre réunion — et déposez-le dans Mictoo. Le MP4 fonctionne directement." },
        { icon: '📤', title: 'Transcriptions partageables', desc: "Collez la transcription dans un chat Teams, OneNote ou un composant Loop pour la partager avec les participants absents." },
        { icon: '🌐', title: 'Toutes les langues de réunion', desc: "Transcrit l'anglais, le français, l'espagnol, l'allemand, l'italien, le néerlandais, le polonais, le japonais, le chinois et 40+ autres. La langue est détectée automatiquement." },
      ]}
      faq={[
        { q: "Où Teams enregistre-t-il mes réunions ?", a: "Pour la plupart des organisations, Teams enregistre les meetings dans le OneDrive de l'organisateur (chats 1:1 / groupe) ou dans le dossier SharePoint du canal (réunions de canal). Ouvrez l'enregistrement, cliquez sur Télécharger et vous récupérez un fichier MP4." },
        { q: "Teams ne propose-t-il pas déjà une transcription ?", a: "Microsoft Teams offre une transcription en direct si votre administrateur l'a activée, mais le fichier reste dans l'écosystème Teams et n'est pas toujours téléchargeable. Mictoo vous donne un .txt ou .srt portable utilisable partout." },
        { q: "Puis-je obtenir des sous-titres SRT pour la vidéo Teams ?", a: "Oui. Après transcription vous pouvez télécharger un fichier .srt horodaté et l'utiliser comme sous-titres sur YouTube, Vimeo, ou tout éditeur vidéo pour une rediffusion propre." },
        { q: "Et le contenu confidentiel des réunions ?", a: "Mictoo ne stocke pas les fichiers. L'audio est envoyé à notre fournisseur IA pour transcription puis supprimé immédiatement. Pour les réunions avec données réglementées (HIPAA, RGPD restreint), vérifiez la politique de votre organisation sur les services IA tiers avant d'uploader." },
        { q: "Quelle est la durée maximale d'enregistrement Teams ?", a: "Jusqu'à 25 Mo par fichier. La plupart des MP4 Teams dépassent cette limite pour les réunions de plus de 30 minutes — extrayez l'audio (M4A) ou utilisez un compresseur vidéo." },
      ]}
      relatedLinks={[
        { href: '/fr/zoom-transcription', label: 'Transcription Zoom' },
        { href: '/fr/meeting-transcription', label: 'Transcription de réunion' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
