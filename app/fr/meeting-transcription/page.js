import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'pt': 'https://mictoo.com/pt/meeting-transcription',
  'pl': 'https://mictoo.com/pl/meeting-transcription',
  'ja': 'https://mictoo.com/ja/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: 'Transcription de réunion — Compte-rendu IA gratuit | Mictoo',
  description: "Transcrivez réunions, appels et sessions Zoom/Teams en texte gratuitement. Sans inscription. Modifiez dans le navigateur, téléchargez en .txt ou .srt.",
  alternates: { canonical: 'https://mictoo.com/fr/meeting-transcription', languages: LANGS },
}

export default function FrMeetingPage() {
  return (
    <LandingLayout
      badge="Réunions · Appels · Gratuit"
      h1={<>Transcription de réunion<br /><span className="text-brand-600">Compte-rendu IA gratuit</span></>}
      subtitle="Transformez vos enregistrements de réunion, conférences téléphoniques et sessions Zoom/Teams en texte consultable. Sans inscription. Modifiez dans le navigateur et téléchargez en .txt ou .srt."
      defaultLanguage="fr"
      features={[
        { icon: '🏢', title: 'Réunions et appels', desc: 'Fonctionne avec Zoom, Microsoft Teams, Google Meet et tout enregistrement local. MP3, MP4, M4A, WAV, WEBM.' },
        { icon: '🔍', title: 'Notes consultables', desc: "Obtenez une transcription textuelle complète à rechercher, partager et transformer en points d'action, décisions et suivis." },
        { icon: '🔒', title: 'Confidentialité native', desc: "Les fichiers sont traités puis supprimés. Nous ne conservons jamais votre audio ni transcription de réunion." },
      ]}
      faq={[
        { q: 'Comment transcrire un enregistrement de réunion ?', a: "Exportez votre enregistrement en MP3, MP4, M4A ou WAV. Déposez-le ci-dessus — la transcription est générée en quelques secondes et prête à copier ou télécharger." },
        { q: 'Fonctionne avec Zoom et Microsoft Teams ?', a: "Oui. Zoom sauvegarde en MP4 (vidéo) ou M4A (audio seul). Teams sauvegarde en MP4. Les deux fonctionnent directement avec Mictoo — déposez simplement le fichier." },
        { q: 'Puis-je obtenir des libellés de locuteurs (Hôte, Invité 1, Invité 2) ?', a: "Mictoo renvoie une transcription complète sans libellés automatiques dans la version gratuite. Vous pouvez ajouter les libellés manuellement dans l'éditeur du navigateur avant le téléchargement." },
        { q: 'Quelle précision pour les réunions ?', a: "Pour des réunions avec un locuteur à la fois et un audio clair, la précision dépasse généralement 95 %. Plusieurs personnes parlant en même temps ou un bruit de fond important peuvent réduire la précision." },
        { q: 'Quelle est la durée maximale ?', a: "Jusqu'à 25 Mo par fichier (≈25 minutes à 128 kbps). Pour des réunions plus longues, exportez à un débit plus faible ou divisez en segments." },
      ]}
      relatedLinks={[
        { href: '/fr/zoom-transcription', label: 'Transcription Zoom' },
        { href: '/fr/business-transcription', label: 'Transcription professionnelle' },
        { href: '/fr/interview-transcription', label: "Transcription d'entretien" },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
