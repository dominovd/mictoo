import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/fireflies-alternative',
  'fr': 'https://mictoo.com/fr/fireflies-alternative',
  'de': 'https://mictoo.com/de/fireflies-alternative',
  'es': 'https://mictoo.com/es/fireflies-alternative',
  'ru': 'https://mictoo.com/ru/fireflies-alternative',
  'it': 'https://mictoo.com/it/fireflies-alternative',
  'pt': 'https://mictoo.com/pt/fireflies-alternative',
  'pl': 'https://mictoo.com/pl/fireflies-alternative',
  'x-default': 'https://mictoo.com/fireflies-alternative',
}

export const metadata = {
  title: 'Alternative à Fireflies — Transcrire les réunions sans bot | Mictoo',
  description: "Fireflies rejoint vos réunions comme un bot pour enregistrer et transcrire. Mictoo transcrit les enregistrements que vous avez déjà — sans bot, sans inscription, sans OAuth. Gratuit avec OpenAI Whisper.",
  alternates: { canonical: 'https://mictoo.com/fr/fireflies-alternative', languages: LANGS },
}

export default function FrFirefliesAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparatif · Fireflies · Gratuit"
      h1={<>Alternative à Fireflies<br /><span className="text-brand-600">Transcrire les réunions sans bot</span></>}
      subtitle="Fireflies rejoint vos réunions comme un bot IA pour enregistrer et transcrire en temps réel. Mictoo fonctionne à l'inverse — déposez l'enregistrement que vous avez déjà et obtenez la transcription. Sans bot, sans intégration calendrier, sans inscription."
      competitorName="Fireflies"
      rows={[
        { label: 'Offre gratuite',         mictoo: 'Pas de quota mensuel, 25 Mo par fichier', them: '800 minutes / utilisateur / mois' },
        { label: 'Compte requis',          mictoo: 'Non', them: 'Oui (email + OAuth)' },
        { label: 'Plans payants',          mictoo: 'Gratuit',  them: '10-19 $ / utilisateur / mois' },
        { label: 'Méthode d\'enregistrement', mictoo: 'Vous uploadez vous-même', them: 'Le bot rejoint la réunion en direct' },
        { label: 'Transcription en direct', mictoo: 'Non',  them: 'Oui (pendant l\'appel)' },
        { label: 'Intégration calendrier', mictoo: 'Non',  them: 'Google / Outlook / Zoom' },
        { label: 'Résumé IA',              mictoo: 'Oui, gratuit', them: 'Oui (payant)' },
        { label: 'Intégration CRM',        mictoo: 'Non',  them: 'Salesforce, HubSpot, etc.' },
        { label: 'Modèle de transcription',mictoo: 'OpenAI Whisper', them: 'Propriétaire' },
      ]}
      whyMictoo={[
        { icon: '🚫', title: 'Pas de bot dans vos réunions', desc: "Certains participants sont mal à l'aise avec un bot IA qui enregistre l'appel. Avec Mictoo, vous enregistrez localement avec Zoom/Meet/Teams puis transcrivez ensuite." },
        { icon: '🆓', title: 'Sans inscription, sans quota', desc: "Le plan gratuit de Fireflies plafonne à 800 minutes par utilisateur/mois et exige OAuth. Mictoo fonctionne sans compte et sans comptage mensuel." },
        { icon: '🌍', title: 'Meilleur pour l\'audio non-anglais', desc: "OpenAI Whisper gère 50+ langues avec forte précision. Fireflies est optimisé pour les appels business anglophones, faible sur russe, ukrainien, polonais ou coréen." },
      ]}
      whenToChoose={{
        mictoo: [
          "Vous enregistrez vos réunions et voulez une transcription après coup",
          "Vous ne voulez pas d'un bot IA dans vos appels",
          "Vous avez besoin de transcription pour des réunions non-anglophones",
          "Vous voulez une option gratuite sans inscription pour le ponctuel",
        ],
        them: [
          "Vous voulez la transcription en direct pendant la réunion",
          "Vous avez besoin de logging CRM des conversations commerciales",
          "Votre équipe veut un enregistrement automatique de tous les appels",
          "Vous avez besoin d'analytics conversation (temps de parole, sentiment)",
        ],
      }}
      faq={[
        { q: "Mictoo peut-il rejoindre ma réunion Zoom ou Teams comme Fireflies ?", a: "Non. Mictoo ne rejoint pas les réunions. Vous enregistrez l'appel avec l'enregistrement intégré de Zoom/Teams/Meet, puis uploadez le fichier. Cela évite le bot et les questions de confidentialité associées." },
        { q: "Comment obtenir un enregistrement à uploader ?", a: "Dans Zoom : activez Local Recording ou Cloud Recording. Après la réunion, téléchargez le MP4 ou M4A depuis Zoom et déposez-le dans Mictoo." },
        { q: "Mictoo fait-il des actions et résumés comme Fireflies ?", a: "Oui. Après transcription, le Résumé IA de Mictoo affiche un aperçu de 2-3 phrases, les points clés et les actions à mener — le tout sur le free tier. Fireflies propose des fonctions similaires uniquement en payant." },
        { q: "Et les analytics de réunion ?", a: "Mictoo ne fait pas temps de parole, sentiment ou analytics intervenants. Si vous avez besoin de conversation intelligence pour coaching commercial, Fireflies (ou Gong) est plus adapté." },
        { q: "Mictoo est-il sûr pour les réunions confidentielles ?", a: "Les fichiers sont transmis directement à l'API Whisper d'OpenAI puis supprimés. Mictoo ne stocke rien. Selon la politique d'API OpenAI, votre audio n'est pas utilisé pour l'entraînement et est supprimé après 30 jours max." },
      ]}
      relatedLinks={[
        { href: '/fr/otter-alternative', label: 'Alternative à Otter' },
        { href: '/fr/meeting-transcription', label: 'Transcription de réunion' },
        { href: '/fr/zoom-transcription', label: 'Transcription Zoom' },
        { href: '/fr', label: 'Essayer Mictoo' },
      ]}
    />
  )
}
