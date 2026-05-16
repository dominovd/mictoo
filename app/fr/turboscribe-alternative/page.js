import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/turboscribe-alternative',
  'fr': 'https://mictoo.com/fr/turboscribe-alternative',
  'de': 'https://mictoo.com/de/turboscribe-alternative',
  'es': 'https://mictoo.com/es/turboscribe-alternative',
  'ru': 'https://mictoo.com/ru/turboscribe-alternative',
  'it': 'https://mictoo.com/it/turboscribe-alternative',
  'pt': 'https://mictoo.com/pt/turboscribe-alternative',
  'pl': 'https://mictoo.com/pl/turboscribe-alternative',
  'ja': 'https://mictoo.com/ja/turboscribe-alternative',
  'x-default': 'https://mictoo.com/turboscribe-alternative',
}

export const metadata = {
  title: 'Alternative à TurboScribe — Transcription Whisper gratuite, sans inscription | Mictoo',
  description: 'TurboScribe est un outil populaire basé sur Whisper, mais demande un compte et limite les utilisateurs gratuits à 30 minutes par jour. Mictoo est totalement sans inscription avec résumé IA intégré.',
  alternates: { canonical: 'https://mictoo.com/fr/turboscribe-alternative', languages: LANGS },
}

export default function FrTurboScribeAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparatif · TurboScribe · Gratuit"
      h1={<>Alternative à TurboScribe<br /><span className="text-brand-600">Même Whisper, sans inscription</span></>}
      subtitle="TurboScribe et Mictoo utilisent tous deux OpenAI Whisper, la qualité de transcription est donc quasi identique. Les différences principales : inscription, limites de fichier et résumé IA intégré."
      competitorName="TurboScribe"
      rows={[
        { label: 'Offre gratuite',         mictoo: 'Pas de quota mensuel, 25 Mo par fichier', them: '3 fichiers / jour, 30 min chacun' },
        { label: 'Compte requis',          mictoo: 'Non', them: 'Oui (inscription email)' },
        { label: 'Plans payants',          mictoo: 'Gratuit',  them: '20 $ / mois illimité' },
        { label: 'Taille fichier (gratuit)', mictoo: '25 Mo par fichier', them: '~150 Mo / 30 min par fichier' },
        { label: 'Taille fichier (payant)', mictoo: 'Idem gratuit',   them: '5 Go / 10 h par fichier' },
        { label: 'Upload par lots',         mictoo: 'Non', them: 'Oui (payant, jusqu\'à 50 fichiers)' },
        { label: 'Modèle de transcription', mictoo: 'OpenAI Whisper', them: 'OpenAI Whisper' },
        { label: 'Résumé IA',               mictoo: 'Oui, gratuit', them: 'Oui (payant)' },
        { label: 'Export SRT',              mictoo: 'Oui, gratuit', them: 'Oui' },
        { label: 'Historique des transcriptions', mictoo: 'Non',  them: 'Oui (lié au compte)' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: 'Vraiment sans inscription', desc: "TurboScribe demande un email même pour le free tier. Mictoo ne demande rien — déposez, obtenez le texte. Utile pour les enregistrements ponctuels où vous ne voulez pas un autre compte." },
        { icon: '✨', title: 'Résumé IA sur le free tier', desc: "Mictoo génère automatiquement un résumé de 2-3 phrases, points clés et actions à mener après chaque transcription. TurboScribe met le résumé IA derrière le paywall à 20 $/mois." },
        { icon: '🔒', title: 'Rien n\'est stocké', desc: "Pas d'historique de transcription, pas d'espace cloud, pas de projets. L'audio est transmis à Whisper et supprimé immédiatement. TurboScribe stocke vos transcriptions dans votre compte." },
      ]}
      whenToChoose={{
        mictoo: [
          "Vous voulez zéro friction d'inscription",
          "Vous avez besoin du résumé IA sur le free tier",
          "Vos fichiers font moins de 25 Mo (ou vous pouvez compresser)",
          "Vous appréciez de ne pas avoir un historique stocké",
        ],
        them: [
          "Vous avez besoin de fichiers > 25 Mo sur le free tier",
          "Vous voulez un historique de toutes vos transcriptions",
          "Vous avez besoin d'upload par lots",
          "Vous acceptez 20 $/mois pour des fichiers volumineux illimités",
        ],
      }}
      faq={[
        { q: 'La qualité de transcription est-elle la même ?', a: "Oui, essentiellement. Les deux outils utilisent le modèle Whisper d'OpenAI. Les différences viennent de la segmentation audio et de la gestion des cas limites, mais la précision de base est comparable." },
        { q: 'Pourquoi Mictoo a-t-il une limite de fichier plus petite ?', a: "La limite de 25 Mo vient de l'API Whisper d'OpenAI. TurboScribe gère les fichiers plus gros en les découpant côté serveur puis en recollant les résultats. Nous travaillons sur la même approche." },
        { q: 'Puis-je transcrire de longs fichiers avec Mictoo ?', a: "Pour l'instant, les fichiers doivent rester sous 25 Mo. Le guide how-to-compress-audio sur notre site décrit trois moyens rapides de faire tenir un long enregistrement : extraire la piste audio, baisser le bitrate, ou découper en segments." },
        { q: 'Mictoo prévoit-il d\'ajouter compte/historique ?', a: "Un historique local (stocké dans votre navigateur, pas de compte serveur) est sur la roadmap. L'historique cloud avec inscription n'est volontairement pas dans le produit — cela entre en conflit avec le positionnement sans inscription." },
        { q: 'Lequel est plus rapide ?', a: "TurboScribe annonce ~30 minutes traitées en moins d'une minute. Mictoo est similaire — la plupart des fichiers se transcrivent en 15-30 secondes. Les deux semblent quasi instantanés pour des fichiers de moins de 25 minutes." },
      ]}
      relatedLinks={[
        { href: '/fr/descript-alternative', label: 'Alternative à Descript' },
        { href: '/fr/notta-alternative', label: 'Alternative à Notta' },
        { href: '/fr', label: 'Essayer Mictoo' },
      ]}
    />
  )
}
