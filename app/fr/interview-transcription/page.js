import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'pt': 'https://mictoo.com/pt/interview-transcription',
  'pl': 'https://mictoo.com/pl/interview-transcription',
  'ja': 'https://mictoo.com/ja/interview-transcription',
  'ko': 'https://mictoo.com/ko/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: "Transcription d'entretien — Générateur gratuit de transcript | Mictoo",
  description: "Transcrivez vos entretiens en texte gratuitement. Déposez l'enregistrement et obtenez une transcription précise avec timestamps. Exemples et modèles inclus.",
  alternates: { canonical: 'https://mictoo.com/fr/interview-transcription', languages: LANGS },
}

const INTERVIEW_TRANSCRIPT_EXAMPLE = `Enquêteur : Pouvez-vous me décrire votre méthodologie de recherche ?

Répondant : Bien sûr. Nous avons utilisé une approche mixte, en commençant par une enquête auprès de 400 participants, puis des entretiens approfondis avec 20 d'entre eux pour explorer les résultats quantitatifs plus en détail.

Enquêteur : Quels ont été les principaux défis rencontrés ?

Répondant : Le recrutement des participants a été le plus grand obstacle. Nous avons finalement collaboré avec trois organisations communautaires pour atteindre un échantillon plus diversifié.`

export default function FrInterviewPage() {
  return (
    <>
      <LandingLayout
        badge="Recherche · Journalisme · Gratuit"
        h1={<>Transcription d'entretien<br /><span className="text-brand-600">Outil gratuit de transcription</span></>}
        subtitle="Déposez l'enregistrement de votre entretien et obtenez une transcription textuelle précise en quelques secondes. Idéal pour la recherche qualitative, le journalisme, les entretiens RH et les podcasts. Sans compte."
        defaultLanguage="fr"
        features={[
          { icon: '🎙️', title: "Tout format d'entretien", desc: "Enregistrements en personne, appels téléphoniques, entretiens Zoom, focus groups — déposez en MP3, MP4, WAV ou M4A." },
          { icon: '📋', title: 'Sortie modifiable', desc: "Modifiez la transcription directement dans le navigateur. Ajoutez les libellés d'intervenants, corrigez les noms et la terminologie, puis téléchargez." },
          { icon: '⏱️', title: 'Timestamps pour chaque segment', desc: "Téléchargez en .srt pour obtenir des segments horodatés — utile pour le codage qualitatif et le référencement de moments précis." },
        ]}
        faq={[
          { q: "Comment transcrire un entretien gratuitement ?", a: "Déposez l'enregistrement de votre entretien (MP3, MP4, WAV ou M4A) avec l'outil ci-dessus. La transcription est générée automatiquement en quelques secondes." },
          { q: "À quoi ressemble une transcription d'entretien ?", a: "Une transcription d'entretien est un compte-rendu textuel verbatim de tout ce qui a été dit. Elle inclut généralement les tours de parole étiquetés « Enquêteur » et « Répondant » (ou par prénom), avec le texte prononcé sur chaque ligne." },
          { q: "Quel est le bon format de transcription d'entretien ?", a: "Le format standard comprend : (1) libellé d'intervenant suivi de deux-points, (2) texte verbatim, (3) ligne vide entre les tours. Pour la recherche, ajoutez des timestamps à chaque tour. Pour le journalisme, les paroles consécutives d'une même personne peuvent être combinées." },
          { q: "Comment formater une transcription pour la recherche qualitative ?", a: "Pour la recherche qualitative, utilisez une transcription verbatim incluant les hésitations et les mots de remplissage. Ajoutez des timestamps toutes les 30–60 secondes. Étiquetez les intervenants de manière cohérente (par ex. « P1 », « P2 » pour l'anonymat). Modifiez noms et détails identifiants si requis par votre protocole éthique." },
          { q: 'Mictoo ajoute-t-il automatiquement les libellés des intervenants ?', a: "Pas automatiquement — la transcription est produite sous forme d'un bloc texte unique. Vous pouvez ajouter manuellement les libellés en éditant la transcription dans le navigateur avant le téléchargement." },
          { q: "Quelle différence entre transcription et notes d'entretien ?", a: "Les notes d'entretien résument les points clés et paraphrasent l'intervenant. Une transcription est un compte-rendu verbatim de chaque mot prononcé — plus précis et requis pour la plupart des contextes de recherche et juridiques." },
          { q: "Combien de temps pour transcrire un entretien d'1 heure ?", a: "Avec Mictoo, un entretien d'1 heure est généralement transcrit en moins de 2 minutes. Une transcription manuelle prendrait 4–6 heures." },
        ]}
        relatedLinks={[
          { href: '/transcribe-audio-to-text', label: 'Audio en texte' },
          { href: '/fr/timestamped-transcription', label: 'Transcription horodatée' },
          { href: '/fr/business-transcription', label: 'Transcription professionnelle' },
          { href: '/fr', label: 'Tous les formats' },
        ]}
      />

      <section className="max-w-2xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Exemple de transcription d'entretien</h2>
        <p className="text-sm text-slate-500 mb-4">Une transcription basique d'entretien de recherche qualitative ressemble à ceci :</p>
        <pre className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm text-slate-700 whitespace-pre-wrap leading-relaxed font-mono">
          {INTERVIEW_TRANSCRIPT_EXAMPLE}
        </pre>
        <p className="text-xs text-slate-400 mt-3">
          Après la transcription avec Mictoo, éditez directement dans le navigateur pour ajouter les libellés d'intervenants avant le téléchargement.
        </p>
      </section>
    </>
  )
}
