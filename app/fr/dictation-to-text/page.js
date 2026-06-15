import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/dictation-to-text',
  'fr': 'https://mictoo.com/fr/dictation-to-text',
  'de': 'https://mictoo.com/de/dictation-to-text',
  'es': 'https://mictoo.com/es/dictation-to-text',
  'ru': 'https://mictoo.com/ru/dictation-to-text',
  'it': 'https://mictoo.com/it/dictation-to-text',
  'pt': 'https://mictoo.com/pt/dictation-to-text',
  'pl': 'https://mictoo.com/pl/dictation-to-text',
  'ja': 'https://mictoo.com/ja/dictation-to-text',
  'ko': 'https://mictoo.com/ko/dictation-to-text',
  'x-default': 'https://mictoo.com/dictation-to-text',
}

export const metadata = {
  title: 'Dictée en texte — Transcription de dictée vocale gratuite | Mictoo',
  description: 'Convertissez gratuitement vos dictées audio en texte. Parfait pour écrivains, médecins, avocats et chercheurs. Compatible MP3, M4A, WAV. Sans inscription.',
  alternates: { canonical: 'https://mictoo.com/fr/dictation-to-text', languages: LANGS },

  openGraph: {
    title: "Dictée en texte — Transcription de dictée vocale gratuite | Mictoo",
    description: "Convertissez gratuitement vos dictées audio en texte. Parfait pour écrivains, médecins, avocats et chercheurs. Compatible MP3, M4A, WAV. Sans inscription.",
    url: "https://mictoo.com/fr/dictation-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dictée en texte — Transcription de dictée vocale gratuite | Mictoo",
    description: "Convertissez gratuitement vos dictées audio en texte. Parfait pour écrivains, médecins, avocats et chercheurs. Compatible MP3, M4A, WAV. Sans inscription.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrDictationPage() {
  return (
    <LandingLayout
      badge="Dictée · Voix → Texte · Gratuit"
      h1={<>Dictée en texte<br /><span className="text-brand-600">Transcription gratuite de dictée vocale</span></>}
      subtitle="Enregistrez vos idées, dictez un chapitre, ou notez des observations — puis déposez le fichier ici pour obtenir une transcription précise. Sans inscription, sans appli."
      defaultLanguage="fr"
      valueBlock={
        <>
          <p>
            La dictée enregistrée n’a pas les mêmes besoins qu’une réunion: une seule voix, un fil d’idées plus long, parfois des pauses et des corrections à voix haute. Le bon outil doit produire un brouillon clair, facile à éditer.
          </p>
          <p>
            Mictoo transforme vos dictées audio en texte structuré afin de préparer articles, notes, rapports ou chapitres sans dépendre d’une dictée en temps réel.
          </p>
        </>
      }
      howItWorks={[
        { title: 'Enregistrez naturellement', desc: 'Utilisez votre téléphone, un dictaphone ou une app de notes vocales.' },
        { title: 'Importez l’audio', desc: 'Déposez le fichier MP3, M4A, WAV ou autre format pris en charge.' },
        { title: 'Éditez le brouillon', desc: 'Relisez, ajoutez les titres, nettoyez les répétitions et exportez le texte final.' },
      ]}
      whyUse={{
        title: 'Pourquoi utiliser Mictoo pour la dictée',
        bullets: [
          'Vous pouvez parler hors ligne puis transcrire plus tard, sans pression de correction immédiate.',
          'La ponctuation automatique rend le brouillon plus lisible qu’une simple note brute.',
          'Pratique pour les longues idées, les accents et les passages où vous réfléchissez à voix haute.',
          'Le fichier audio reste disponible pour vérifier une phrase avant publication.',
        ],
      }}
      useCases={{
        title: 'Quand dicter puis transcrire',
        items: [
          { title: 'Articles et newsletters', desc: 'Capturez l’idée complète avant de l’éditer au clavier.' },
          { title: 'Notes d’appels', desc: 'Dictez un compte rendu immédiatement après une conversation.' },
          { title: 'Chapitres et scripts', desc: 'Transformez une session orale en premier jet exploitable.' },
          { title: 'Notes professionnelles', desc: 'Préparez rapports, observations ou comptes rendus sans perdre le contexte.' },
        ],
      }}
      proTips={{
        title: 'Conseils pour une dictée plus propre',
        tips: [
          'Parlez en phrases complètes: le texte sera plus facile à éditer ensuite.',
          'Faites une pause nette entre les sections pour aider à repérer les paragraphes.',
          'Dites “nouveau point” ou “titre” si vous voulez retrouver la structure rapidement.',
        ],
      }}
      faq={[
        { q: "Comment enregistrer une dictée sur mon téléphone ?", a: "iPhone : utilisez l’app Voice Memos — export en .m4a. Android : utilisez l’enregistreur intégré ou Easy Voice Recorder — export en .mp3 ou .m4a. Déposez le fichier dans Mictoo." },
        { q: "Mictoo est-il un outil de dictée en temps réel ?", a: "Non — Mictoo transcrit des fichiers audio existants. Pour la dictée en temps réel (parler et voir le texte apparaître), utilisez la dictée intégrée de votre système (macOS, Windows, iOS, Android). Utilisez Mictoo ensuite pour nettoyer de longs enregistrements." },
        { q: "Quelle est la précision de la transcription de dictée ?", a: "Une dictée claire avec un seul locuteur transcrit à 95 %+ de précision. Parlez à un rythme naturel, dans une pièce calme, et envisagez un casque pour les meilleurs résultats." },
        { q: "Puis-je l’utiliser pour la dictée médicale ou juridique ?", a: "Oui, mais vérifiez la réglementation locale sur le traitement IA des données patient ou client. Mictoo ne stocke jamais les fichiers — mais l’audio passe par notre fournisseur IA pour la transcription. Pour les workflows HIPAA, consultez votre équipe conformité." },
        { q: "Quelle est la durée maximale ?", a: "Jusqu’à 25 Mo. En 64 kbps mono cela représente environ 50 minutes de dictée. Pour des enregistrements plus longs, divisez en chapitres ou baissez le bitrate." },
      ]}
      relatedLinks={[
        { href: '/fr/voice-memo-to-text', label: 'Mémo vocal en texte' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
