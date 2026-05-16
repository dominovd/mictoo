import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'ko': 'https://mictoo.com/ko/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: 'Transcription professionnelle — Réunions, appels et entretiens | Mictoo',
  description: "Transcrivez gratuitement vos réunions professionnelles, appels commerciaux, entretiens et présentations. Rapide, précis, sans inscription. Export en .txt ou .srt.",
  alternates: { canonical: 'https://mictoo.com/fr/business-transcription', languages: LANGS },
}

export default function FrBusinessPage() {
  return (
    <LandingLayout
      badge="Réunions · Appels · Entretiens · Gratuit"
      h1={<>Transcription professionnelle<br /><span className="text-brand-600">Réunions et appels en texte</span></>}
      subtitle="Transformez toute réunion enregistrée, appel commercial, entretien ou présentation en document textuel consultable, en quelques secondes. Sans compte, sans abonnement."
      defaultLanguage="fr"
      features={[
        { icon: '📞', title: 'Ventes et appels clients', desc: "Transcrivez vos appels commerciaux, entretiens clients et sessions de découverte. Retrouvez les points clés et engagements sans réécouter." },
        { icon: '📊', title: 'Réunions et stand-ups', desc: "Convertissez vos enregistrements Zoom, Google Meet et Teams en texte. Partagez les comptes-rendus sans demander à tout le monde de regarder la vidéo." },
        { icon: '🔐', title: 'Traitement confidentiel', desc: "Vos enregistrements sont traités immédiatement et jamais stockés. Vos conversations restent confidentielles." },
      ]}
      faq={[
        { q: "Comment transcrire un enregistrement de réunion ?", a: "Exportez votre réunion en MP4 ou MP3 depuis Zoom, Google Meet ou Teams. Déposez le fichier ici et récupérez la transcription en quelques secondes." },
        { q: 'Puis-je transcrire un enregistrement Zoom gratuitement ?', a: "Oui. Téléchargez votre enregistrement Zoom localement (MP4 ou M4A), puis déposez-le sur Mictoo. La transcription est générée instantanément, gratuitement." },
        { q: 'Mes données professionnelles sont-elles protégées ?', a: "Oui. Les fichiers sont traités en temps réel et immédiatement supprimés. Rien n'est conservé sur nos serveurs. Nous n'entraînons aucun modèle sur vos données." },
        { q: "Comment transcrire un enregistrement d'appel commercial ?", a: "Exportez l'appel depuis votre CRM ou votre outil d'enregistrement en MP3 ou WAV, déposez-le ci-dessus et téléchargez la transcription en .txt." },
        { q: "Le multi-intervenant est-il supporté ?", a: "La transcription capture toutes les paroles dans un bloc unique. Le marquage automatique des intervenants nécessite un service professionnel." },
        { q: 'Quels outils de visioconférence sont compatibles ?', a: "Tout outil permettant le téléchargement de l'enregistrement fonctionne : Zoom, Google Meet, Microsoft Teams, Webex, Riverside, Loom et autres. Exportez en MP4, MP3, M4A ou WAV." },
        { q: 'Puis-je transcrire un podcast ou un webinaire ?', a: "Oui. Les épisodes de podcast, les webinaires et les conférences se transcrivent très bien. Déposez le fichier audio et récupérez la transcription en quelques secondes." },
      ]}
      relatedLinks={[
        { href: '/transcribe-audio-to-text', label: 'Audio en texte' },
        { href: '/timestamped-transcription', label: 'Transcription horodatée' },
        { href: '/transcribe-video-to-text', label: 'Vidéo en texte' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
