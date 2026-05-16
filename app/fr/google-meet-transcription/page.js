import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Transcription Google Meet — Transcrire les enregistrements Meet gratuitement | Mictoo',
  description: "Transcrivez gratuitement vos enregistrements Google Meet en texte. Fonctionne avec les MP4 exportés depuis Google Drive. Sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/google-meet-transcription', languages: LANGS },
}

export default function FrGoogleMeetPage() {
  return (
    <LandingLayout
      badge="Google Meet · MP4 · Gratuit"
      h1={<>Transcription Google Meet<br /><span className="text-brand-600">Transformez vos enregistrements en texte</span></>}
      subtitle="Déposez votre MP4 exporté depuis Google Meet et obtenez une transcription claire en quelques secondes. Gratuit, sans inscription. Complète parfaitement les sous-titres Google pour un compte-rendu propre."
      defaultLanguage="fr"
      features={[
        { icon: '🎬', title: 'Support direct MP4', desc: "Google Meet exporte les enregistrements vers Google Drive au format MP4. Téléchargez le fichier et déposez-le dans Mictoo — pas de conversion ni d'extraction nécessaire." },
        { icon: '🧾', title: 'Plus propre que les sous-titres en direct', desc: "Les sous-titres en direct de Google saisissent l'essentiel mais omettent la ponctuation et les noms. Mictoo produit une transcription soignée à coller dans Docs, Notion ou un email de récap." },
        { icon: '🔒', title: 'Privé', desc: "Les fichiers sont traités puis immédiatement supprimés. Nous ne conservons jamais l'audio de la réunion ni la transcription." },
      ]}
      faq={[
        { q: "Comment télécharger un enregistrement Google Meet ?", a: "Ouvrez Google Drive → Mon Drive → Meet Recordings (dossier créé automatiquement). Trouvez votre réunion, cliquez sur ⋮ → Télécharger. Le fichier est un MP4 — déposez-le dans Mictoo tel quel." },
        { q: "Pourquoi utiliser Mictoo si Google Meet propose déjà des sous-titres en direct ?", a: "Les sous-titres en direct sont utiles pendant la réunion mais ne sont pas enregistrés par défaut et manquent de ponctuation et de capitalisation. Mictoo vous donne une transcription propre et modifiable, prête à partager ou réutiliser." },
        { q: "Puis-je avoir des libellés d'intervenants (Hôte, Invité 1, etc.) ?", a: "Pas automatiquement dans la version gratuite. La transcription est un flux de texte unique — les libellés d'intervenant peuvent être ajoutés manuellement dans l'éditeur du navigateur." },
        { q: "Quelle est la durée maximale d'un enregistrement Meet ?", a: "Jusqu'à 25 Mo par fichier. Un MP4 Google Meet en qualité par défaut fait environ 50 Mo par 30 minutes ; envisagez d'extraire la piste audio (M4A) ou de compresser la vidéo pour rester sous la limite." },
        { q: "Les transcriptions \"Prendre des notes pour moi\" de Google sont-elles équivalentes ?", a: "Non — la fonction \"Prendre des notes pour moi\" de Workspace génère un résumé IA, pas une transcription mot pour mot. Mictoo vous donne la transcription verbatim, que vous pouvez résumer séparément si besoin." },
      ]}
      relatedLinks={[
        { href: '/fr/zoom-transcription', label: 'Transcription Zoom' },
        { href: '/fr/meeting-transcription', label: 'Transcription de réunion' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
