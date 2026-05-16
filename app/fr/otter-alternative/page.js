import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/otter-alternative',
  'fr': 'https://mictoo.com/fr/otter-alternative',
  'de': 'https://mictoo.com/de/otter-alternative',
  'es': 'https://mictoo.com/es/otter-alternative',
  'ru': 'https://mictoo.com/ru/otter-alternative',
  'it': 'https://mictoo.com/it/otter-alternative',
  'pt': 'https://mictoo.com/pt/otter-alternative',
  'pl': 'https://mictoo.com/pl/otter-alternative',
  'ja': 'https://mictoo.com/ja/otter-alternative',
  'ko': 'https://mictoo.com/ko/otter-alternative',
  'x-default': 'https://mictoo.com/otter-alternative',
}

export const metadata = {
  title: 'Alternative à Otter — Transcrire des enregistrements, pas des réunions en direct | Mictoo',
  description: "Otter est conçu pour la transcription en direct des réunions avec sous-titres temps réel. Mictoo transcrit les enregistrements que vous avez déjà — gratuit, sans inscription, sans bot. Basé sur OpenAI Whisper.",
  alternates: { canonical: 'https://mictoo.com/fr/otter-alternative', languages: LANGS },
}

export default function FrOtterAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparatif · Otter · Gratuit"
      h1={<>Alternative à Otter<br /><span className="text-brand-600">Pour les enregistrements, pas les réunions en direct</span></>}
      subtitle="Otter est célèbre pour la transcription en direct — les sous-titres apparaissent au fur et à mesure. Mictoo résout l'autre moitié du problème : un enregistrement que vous avez déjà, transcrit en texte en quelques secondes. Gratuit, sans inscription, OpenAI Whisper."
      competitorName="Otter"
      rows={[
        { label: 'Offre gratuite',         mictoo: 'Pas de quota mensuel, 25 Mo par fichier', them: '300 minutes / mois, 30 min par enregistrement' },
        { label: 'Compte requis',          mictoo: 'Non', them: 'Oui (inscription email)' },
        { label: 'Plans payants',          mictoo: 'Gratuit',  them: '8,33 - 30 $ / utilisateur / mois' },
        { label: 'Transcription en direct', mictoo: 'Non',  them: 'Oui (sous-titres temps réel)' },
        { label: 'Upload d\'enregistrement', mictoo: 'Oui (déposer fichier)', them: 'Oui (import payant)' },
        { label: 'Résumé IA',              mictoo: 'Oui, gratuit', them: 'Oui (payant)' },
        { label: 'Modèle de transcription',mictoo: 'OpenAI Whisper', them: 'Propriétaire' },
        { label: 'Libellés intervenants',  mictoo: 'Édition manuelle', them: 'Automatique (payant)' },
        { label: 'Langues',                mictoo: '50+',  them: '3 (anglais, français, espagnol)' },
      ]}
      whyMictoo={[
        { icon: '🌍', title: '50+ langues vs 3', desc: "Otter supporte uniquement anglais, français et espagnol. Mictoo utilise Whisper, qui gère 50+ langues avec détection automatique — allemand, russe, japonais, arabe, ukrainien et plus." },
        { icon: '🆓', title: 'Pas de plafond 300 minutes', desc: "Le plan gratuit d'Otter limite à 300 minutes par mois. Mictoo n'a pas de quota minutes — uniquement la limite de 25 Mo par fichier." },
        { icon: '🚫', title: 'Pas de bot dans vos réunions', desc: "L'intérêt d'Otter est le bot en direct dans les calls. Si vous préférez enregistrer localement sans bot IA dans la réunion, Mictoo correspond mieux à ce workflow." },
      ]}
      whenToChoose={{
        mictoo: [
          "Vous avez un enregistrement et voulez une transcription rapide et gratuite",
          "Vous travaillez avec de l'audio non-anglais (russe, allemand, japonais, etc.)",
          "Vous ne voulez pas d'un bot IA sur vos appels",
          "Vous transcrivez podcasts, cours, mémos vocaux, pas seulement des réunions",
        ],
        them: [
          "Vous voulez des sous-titres en direct pendant les réunions",
          "Vous êtes dans une équipe qui partage des notes de réunion",
          "L'Assistant Otter intégré à Zoom/Google Meet est critique",
          "La diarisation des intervenants est indispensable (plan payant)",
        ],
      }}
      faq={[
        { q: 'Mictoo peut-il faire de la transcription en direct comme Otter ?', a: "Non. Mictoo travaille uniquement sur des fichiers enregistrés. Pour de la transcription temps réel pendant une réunion, utilisez Otter, les sous-titres intégrés Zoom ou Google Meet. Utilisez Mictoo ensuite pour un fichier de transcription propre." },
        { q: 'Mictoo remplace-t-il Otter pour les podcasteurs ?', a: "Spécifiquement pour la transcription de podcast, oui. Déposez votre MP3/M4A, obtenez la transcription, téléchargez en .txt ou .srt. L'intérêt d'Otter est la capture en direct ; celui de Mictoo est la transcription rapide après enregistrement." },
        { q: 'Et les résumés de réunion ?', a: "Les deux outils génèrent des résumés IA avec points clés et actions. Otter les met sur les plans payants ; Mictoo les offre gratuitement à chaque transcription." },
        { q: 'Mictoo est-il précis sur l\'audio non-anglais ?', a: "Oui — OpenAI Whisper est l'un des modèles speech multilingues les plus solides. Otter est limité à l'anglais, français et espagnol ; Mictoo gère 50+ langues avec détection auto." },
        { q: 'Mictoo a-t-il une app mobile ?', a: "Pas d'app native, mais le site fonctionne sur navigateurs mobiles. Ouvrez mictoo.com sur iPhone ou Android, choisissez un fichier, obtenez la transcription." },
      ]}
      relatedLinks={[
        { href: '/fr/fireflies-alternative', label: 'Alternative à Fireflies' },
        { href: '/fr/meeting-transcription', label: 'Transcription de réunion' },
        { href: '/fr/voice-memo-to-text', label: 'Mémo vocal en texte' },
        { href: '/fr', label: 'Essayer Mictoo' },
      ]}
    />
  )
}
