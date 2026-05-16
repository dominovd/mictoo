import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/notta-alternative',
  'fr': 'https://mictoo.com/fr/notta-alternative',
  'de': 'https://mictoo.com/de/notta-alternative',
  'es': 'https://mictoo.com/es/notta-alternative',
  'ru': 'https://mictoo.com/ru/notta-alternative',
  'it': 'https://mictoo.com/it/notta-alternative',
  'pt': 'https://mictoo.com/pt/notta-alternative',
  'pl': 'https://mictoo.com/pl/notta-alternative',
  'x-default': 'https://mictoo.com/notta-alternative',
}

export const metadata = {
  title: 'Alternative à Notta — Transcription gratuite sans limites mensuelles | Mictoo',
  description: 'Notta plafonne les utilisateurs gratuits à 120 minutes par mois et limite chaque transcription à 3 minutes. Mictoo est gratuit, sans inscription, sans quota mensuel — propulsé par OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/fr/notta-alternative', languages: LANGS },
}

export default function FrNottaAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparatif · Notta · Gratuit"
      h1={<>Alternative à Notta<br /><span className="text-brand-600">Pas de plafond mensuel à 120 minutes</span></>}
      subtitle="Notta est un outil tout-en-un de transcription populaire, mais le free tier plafonne à 120 minutes par mois et 3 minutes par fichier. Mictoo n'a pas de quota mensuel et une seule limite par fichier — gratuit, sans inscription."
      competitorName="Notta"
      rows={[
        { label: 'Offre gratuite',         mictoo: 'Pas de quota mensuel, 25 Mo par fichier', them: '120 min/mois, 3 min par fichier' },
        { label: 'Compte requis',          mictoo: 'Non', them: 'Oui (inscription email)' },
        { label: 'Plans payants',          mictoo: 'Gratuit',  them: '9 - 25 $ / utilisateur / mois' },
        { label: 'Durée par fichier',      mictoo: '~25 min (limite taille)', them: '3 min (gratuit) / 5 h (payant)' },
        { label: 'Transcription en direct', mictoo: 'Non',  them: 'Oui (Notta Bot en réunion)' },
        { label: 'Résumé IA',              mictoo: 'Oui, gratuit', them: 'Oui (payant)' },
        { label: 'Modèle de transcription',mictoo: 'OpenAI Whisper', them: 'Propriétaire' },
        { label: 'Libellés intervenants',  mictoo: 'Édition manuelle', them: 'Automatique (payant)' },
        { label: 'Langues',                mictoo: '50+',  them: '100+ (plans payants)' },
      ]}
      whyMictoo={[
        { icon: '⏳', title: 'Pas de limite 3 minutes par fichier', desc: "La limite gratuite de 3 minutes par fichier de Notta est trop courte pour un podcast, un cours ou un entretien. Mictoo gère gratuitement des fichiers audio de ~25 minutes." },
        { icon: '🆓', title: 'Pas de quota minutes mensuel', desc: "Notta compte chaque minute contre un quota de 120 min/mois. Mictoo plafonne uniquement la taille individuelle des fichiers — déposez un ou plusieurs fichiers, sans comptage." },
        { icon: '✨', title: 'Résumé IA sur le free tier', desc: "Notta met les résumés IA sur les plans payants. Mictoo génère gratuitement un résumé avec points clés et actions, à chaque fois." },
      ]}
      whenToChoose={{
        mictoo: [
          "Vous devez transcrire gratuitement des fichiers de plus de 3 minutes",
          "Vous ne voulez pas frapper le plafond mensuel de 120 minutes",
          "Vous voulez un résumé IA sans payer",
          "Vous n'avez pas besoin de diarisation automatique des intervenants",
        ],
        them: [
          "Vous avez besoin du Notta Bot pour rejoindre vos réunions en direct",
          "Vous avez besoin de libellés d'intervenants automatiques",
          "Vous voulez un workflow intégré CRM",
          "Vous acceptez de payer pour des fonctionnalités illimitées",
        ],
      }}
      faq={[
        { q: 'Mictoo est-il vraiment gratuit sans quota minutes ?', a: "Oui. La seule limite est la taille par fichier (25 Mo, ce qui tient environ 25 minutes à un bitrate podcast typique). Pas de comptage mensuel des minutes ni de limite de fichiers." },
        { q: 'Pourquoi Notta limite-t-il autant les utilisateurs gratuits ?', a: "Notta utilise un modèle freemium où le free tier est volontairement limité pour pousser au paiement. Le modèle de Mictoo est ad-supported, donc le free tier est généreux par design." },
        { q: 'Comment Mictoo gagne-t-il de l\'argent si c\'est gratuit ?', a: "Des publicités display (Google AdSense), affichées pendant la transcription du fichier. La transcription elle-même et la zone d'upload sont sans publicité." },
        { q: 'Mictoo supporte-t-il la transcription en direct ?', a: "Non — Mictoo travaille uniquement sur des fichiers enregistrés. Pour la capture en direct, utilisez les sous-titres intégrés (Zoom, Google Meet, Teams) puis uploadez l'enregistrement dans Mictoo pour un transcript propre." },
        { q: 'Quelles langues Mictoo supporte-t-il ?', a: "OpenAI Whisper gère 50+ langues avec détection automatique — anglais, espagnol, français, allemand, russe, ukrainien, japonais, chinois, arabe, hindi, coréen et plus. Pas besoin de sélectionner la langue sauf si l'auto-détection se trompe." },
      ]}
      relatedLinks={[
        { href: '/fr/turboscribe-alternative', label: 'Alternative à TurboScribe' },
        { href: '/fr/otter-alternative', label: 'Alternative à Otter' },
        { href: '/fr/podcast-transcription', label: 'Transcription de podcast' },
        { href: '/fr', label: 'Essayer Mictoo' },
      ]}
    />
  )
}
