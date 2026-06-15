import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-text',
  'fr': 'https://mictoo.com/fr/flac-to-text',
  'de': 'https://mictoo.com/de/flac-to-text',
  'es': 'https://mictoo.com/es/flac-to-text',
  'ru': 'https://mictoo.com/ru/flac-to-text',
  'it': 'https://mictoo.com/it/flac-to-text',
  'pt': 'https://mictoo.com/pt/flac-to-text',
  'pl': 'https://mictoo.com/pl/flac-to-text',
  'ja': 'https://mictoo.com/ja/flac-to-text',
  'ko': 'https://mictoo.com/ko/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC en texte — Transcription audio FLAC gratuite en ligne | Mictoo',
  description: "Convertissez gratuitement vos fichiers FLAC en texte. Déposez n’importe quel enregistrement FLAC et obtenez une transcription précise en quelques secondes. Sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/flac-to-text', languages: LANGS },

  openGraph: {
    title: "FLAC en texte — Transcription audio FLAC gratuite en ligne | Mictoo",
    description: "Convertissez gratuitement vos fichiers FLAC en texte. Déposez n’importe quel enregistrement FLAC et obtenez une transcription précise en quelques secondes. Sans inscription.",
    url: "https://mictoo.com/fr/flac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLAC en texte — Transcription audio FLAC gratuite en ligne | Mictoo",
    description: "Convertissez gratuitement vos fichiers FLAC en texte. Déposez n’importe quel enregistrement FLAC et obtenez une transcription précise en quelques secondes. Sans inscription.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrFlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · Sans perte · Gratuit"
      h1={<>FLAC en texte<br /><span className="text-brand-600">Transcription FLAC gratuite en ligne</span></>}
      subtitle="Téléchargez n’importe quel fichier audio FLAC et convertissez-le en texte instantanément. La qualité sans perte du FLAC garantit une excellente précision de transcription. Sans compte."
      defaultLanguage="fr"
      valueBlock={
        <>
          <p>
            FLAC compresse l’audio sans perte: il conserve les détails d’un WAV tout en réduisant la taille. C’est un bon format pour les archives, les masters de podcast, les enregistrements de terrain et les collections audio.
          </p>
          <p>
            Mictoo décode le FLAC directement, sans vous demander de créer un MP3 intermédiaire, afin de préserver la meilleure source possible pour la reconnaissance vocale.
          </p>
        </>
      }
      howItWorks={[
        { title: 'Chargez le FLAC', desc: 'Ajoutez le fichier original ou une copie de travail plus courte.' },
        { title: 'Décodage sans perte', desc: 'Mictoo lit l’audio avec toute sa qualité avant de lancer la transcription.' },
        { title: 'Relisez et exportez', desc: 'Corrigez les noms, puis téléchargez le texte ou les sous-titres.' },
      ]}
      whyUse={{
        title: 'Pourquoi transcrire depuis FLAC',
        bullets: [
          'Préservez la qualité source pour les voix faibles, les accents ou les enregistrements difficiles.',
          'Évitez de créer un MP3 juste pour la transcription quand le fichier FLAC est déjà propre.',
          'Gardez une chaîne de travail adaptée aux archives et aux masters audio.',
          'Profitez d’un texte consultable sans sacrifier votre fichier original.',
        ],
      }}
      useCases={{
        title: 'Quand utiliser FLAC en texte',
        items: [
          { title: 'Histoire orale', desc: 'Transcrivez des entretiens d’archive en conservant la meilleure qualité audio.' },
          { title: 'Rips de CD et masters', desc: 'Transformez des sources propres en notes ou sous-titres.' },
          { title: 'Enregistrements de terrain', desc: 'Traitez des voix avec bruit ambiant ou niveaux variables.' },
          { title: 'Archives familiales', desc: 'Rendez des témoignages anciens plus faciles à rechercher.' },
        ],
      }}
      proTips={{
        title: 'Conseils pour les fichiers FLAC',
        tips: [
          'La compression FLAC n’affecte pas la qualité; choisir un niveau plus élevé rend seulement l’encodage plus long.',
          'Pour les fichiers très lourds, créez une copie mono 16 kHz plutôt qu’un MP3 trop compressé.',
          'Ne convertissez en MP3 que si vous devez réduire fortement la taille avant upload.',
        ],
      }}
      faq={[
        { q: 'Comment convertir un fichier FLAC en texte ?', a: "Téléchargez votre fichier FLAC ci-dessus. L’IA le transcrit et affiche le texte en quelques secondes." },
        { q: "Le FLAC se transcrit-il plus précisément que le MP3 ?", a: "La qualité sans perte du FLAC peut légèrement améliorer la précision sur des audios à volume faible ou complexes, comparé à des formats fortement compressés." },
        { q: 'La conversion FLAC en texte est-elle gratuite ?', a: 'Oui, entièrement gratuite. Sans compte ni inscription.' },
        { q: 'Quelle est la taille maximale du fichier FLAC ?', a: 'Jusqu\'à 25 Mo. Les fichiers FLAC sont volumineux à cause de la compression sans perte — envisagez un format avec perte si votre fichier dépasse la limite.' },
      ]}
      relatedLinks={[
        { href: '/fr/wav-to-text', label: 'WAV en texte' },
        { href: '/fr/transcribe-mp3-to-text', label: 'MP3 en texte' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
