import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/descript-alternative',
  'fr': 'https://mictoo.com/fr/descript-alternative',
  'de': 'https://mictoo.com/de/descript-alternative',
  'es': 'https://mictoo.com/es/descript-alternative',
  'ru': 'https://mictoo.com/ru/descript-alternative',
  'it': 'https://mictoo.com/it/descript-alternative',
  'x-default': 'https://mictoo.com/descript-alternative',
}

export const metadata = {
  title: 'Alternative à Descript — Transcription gratuite sans inscription | Mictoo',
  description: "Vous cherchez une alternative à Descript juste pour la transcription ? Mictoo offre une transcription IA gratuite sans inscription, basée sur OpenAI Whisper. Pas d'éditeur, pas d'abonnement.",
  alternates: { canonical: 'https://mictoo.com/fr/descript-alternative', languages: LANGS },
}

export default function FrDescriptAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparatif · Descript · Gratuit"
      h1={<>Alternative à Descript<br /><span className="text-brand-600">Transcription gratuite sans l'éditeur</span></>}
      subtitle="Descript est un éditeur complet audio/vidéo avec transcription intégrée. Si vous n'avez besoin que de la partie transcription, Mictoo est l'option gratuite, sans inscription, propulsée par OpenAI Whisper."
      competitorName="Descript"
      rows={[
        { label: 'Offre gratuite',         mictoo: 'Pas de quota mensuel, 25 Mo par fichier', them: '1 heure de transcription / mois' },
        { label: 'Compte requis',          mictoo: 'Non', them: 'Oui (inscription email)' },
        { label: 'Plans payants',          mictoo: 'Gratuit',  them: '12-24 $ / mois' },
        { label: 'Éditeur audio/vidéo',    mictoo: 'Non',  them: 'Oui (complet)' },
        { label: 'Modèle de transcription',mictoo: 'OpenAI Whisper', them: 'Propriétaire + option Whisper' },
        { label: 'Résumé IA',              mictoo: 'Oui, gratuit', them: 'Oui (payant)' },
        { label: 'Export SRT',             mictoo: 'Oui, gratuit', them: 'Oui (payant)' },
        { label: 'Libellés intervenants',  mictoo: 'Édition manuelle', them: 'Automatique' },
        { label: 'Langues',                mictoo: '50+',  them: '20+' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: 'Gratuit, sans inscription', desc: "Déposez un fichier et obtenez une transcription sans compte, sans carte, sans email. Descript exige une inscription même sur le plan gratuit." },
        { icon: '⚡', title: 'Plus rapide pour le ponctuel', desc: "Pas d'app à installer, pas d'éditeur à apprendre. Une page, un drop, des résultats en quelques secondes. Conçu pour la transcription rapide, pas pour la production complète." },
        { icon: '🔒', title: 'Privacy d\'abord', desc: "L'audio est transmis directement à l'API Whisper d'OpenAI et n'est pas stocké sur les serveurs Mictoo. Pas de projets, pas de bibliothèque cloud, pas d'espace équipe par design." },
      ]}
      whenToChoose={{
        mictoo: [
          "Vous avez besoin uniquement de transcription, pas d'édition",
          "Vous voulez du gratuit sans inscription",
          "Vous transcrivez un entretien, podcast ou réunion ponctuels",
          "Vous ne voulez pas d'app de bureau ni d'espace équipe",
        ],
        them: [
          "Vous produisez podcasts ou vidéos et avez besoin d'un vrai éditeur",
          "Vous voulez le workflow \"éditer l'audio en éditant le texte\"",
          "Vous avez besoin de libellés d'intervenants automatiques à chaque fois",
          "Vous travaillez en équipe avec une bibliothèque partagée de projets",
        ],
      }}
      faq={[
        { q: 'Mictoo remplace-t-il complètement Descript ?', a: "Pas pour l'édition. Descript est un éditeur audio/vidéo avec transcription intégrée — Mictoo n'est que la partie transcription. Si vous n'avez besoin que du texte ou des sous-titres d'un enregistrement, Mictoo remplace ce workflow gratuitement." },
        { q: 'La qualité de transcription est-elle la même ?', a: "Les deux outils peuvent utiliser OpenAI Whisper. Mictoo utilise Whisper exclusivement, la précision est donc comparable. Descript propose un modèle propriétaire additionnel sur certains plans." },
        { q: 'Mictoo a-t-il des libellés d\'intervenants ?', a: "Mictoo renvoie une transcription unique sans libellés automatiques dans le free tier. Vous pouvez ajouter Intervenant 1 / Intervenant 2 manuellement dans l'éditeur navigateur avant téléchargement. Descript libellise automatiquement." },
        { q: 'Puis-je éditer la transcription dans Mictoo ?', a: "Oui — la transcription apparaît dans une zone de texte éditable. Vous pouvez corriger noms, ponctuation ou sauts de paragraphe avant de copier ou télécharger en .txt ou .srt." },
        { q: 'Et l\'export vers Word ou DOCX ?', a: "Mictoo exporte actuellement .txt et .srt. Copiez la transcription et collez dans Word pour un DOCX rapide. L'export DOCX natif est sur la roadmap." },
      ]}
      relatedLinks={[
        { href: '/fr/turboscribe-alternative', label: 'Alternative à TurboScribe' },
        { href: '/fr/otter-alternative', label: 'Alternative à Otter' },
        { href: '/fr/notta-alternative', label: 'Alternative à Notta' },
        { href: '/fr', label: 'Essayer Mictoo' },
      ]}
    />
  )
}
