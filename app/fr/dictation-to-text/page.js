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
  'x-default': 'https://mictoo.com/dictation-to-text',
}

export const metadata = {
  title: 'Dictée en texte — Transcription de dictée vocale gratuite | Mictoo',
  description: 'Convertissez gratuitement vos dictées audio en texte. Parfait pour écrivains, médecins, avocats et chercheurs. Compatible MP3, M4A, WAV. Sans inscription.',
  alternates: { canonical: 'https://mictoo.com/fr/dictation-to-text', languages: LANGS },
}

export default function FrDictationPage() {
  return (
    <LandingLayout
      badge="Dictée · Voix → Texte · Gratuit"
      h1={<>Dictée en texte<br /><span className="text-brand-600">Transcription gratuite de dictée vocale</span></>}
      subtitle="Enregistrez vos idées, dictez un chapitre, ou notez des observations — puis déposez le fichier ici pour obtenir une transcription précise. Sans inscription, sans appli."
      defaultLanguage="fr"
      features={[
        { icon: '📝', title: 'Pour écrivains et chercheurs', desc: "Dictez un brouillon de chapitre, un plan d'article ou des notes d'entretien. Mictoo convertit votre voix en texte propre et éditable en quelques secondes." },
        { icon: '👨‍⚕️', title: 'Pour médecins et avocats', desc: 'Dictez vos notes de dossier, résumés de patients ou mémos sur votre téléphone, puis transformez-les en texte pour vos archives. Les fichiers sont traités et supprimés instantanément.' },
        { icon: '🌍', title: '50+ langues', desc: "Dictez en français, anglais, espagnol, allemand, russe, japonais et bien d'autres. La langue est détectée automatiquement ; modifiable au besoin." },
      ]}
      faq={[
        { q: "Comment enregistrer une dictée sur mon téléphone ?", a: "iPhone : utilisez l'app Voice Memos — export en .m4a. Android : utilisez l'enregistreur intégré ou Easy Voice Recorder — export en .mp3 ou .m4a. Déposez le fichier dans Mictoo." },
        { q: "Mictoo est-il un outil de dictée en temps réel ?", a: "Non — Mictoo transcrit des fichiers audio existants. Pour la dictée en temps réel (parler et voir le texte apparaître), utilisez la dictée intégrée de votre système (macOS, Windows, iOS, Android). Utilisez Mictoo ensuite pour nettoyer de longs enregistrements." },
        { q: "Quelle est la précision de la transcription de dictée ?", a: "Une dictée claire avec un seul locuteur transcrit à 95 %+ de précision. Parlez à un rythme naturel, dans une pièce calme, et envisagez un casque pour les meilleurs résultats." },
        { q: "Puis-je l'utiliser pour la dictée médicale ou juridique ?", a: "Oui, mais vérifiez la réglementation locale sur le traitement IA des données patient ou client. Mictoo ne stocke jamais les fichiers — mais l'audio passe par notre fournisseur IA pour la transcription. Pour les workflows HIPAA, consultez votre équipe conformité." },
        { q: "Quelle est la durée maximale ?", a: "Jusqu'à 25 Mo. En 64 kbps mono cela représente environ 50 minutes de dictée. Pour des enregistrements plus longs, divisez en chapitres ou baissez le bitrate." },
      ]}
      relatedLinks={[
        { href: '/fr/voice-memo-to-text', label: 'Mémo vocal en texte' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
