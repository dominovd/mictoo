import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'pl': 'https://mictoo.com/pl/aac-to-text',
  'ja': 'https://mictoo.com/ja/aac-to-text',
  'ko': 'https://mictoo.com/ko/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC en texte — Transcription audio AAC gratuite en ligne | Mictoo',
  description: "Transcrivez gratuitement les fichiers audio AAC en texte. Déposez vos fichiers .aac, .m4a ou tout fichier AAC-encodé et obtenez une transcription précise en quelques secondes.",
  alternates: { canonical: 'https://mictoo.com/fr/aac-to-text', languages: LANGS },

  openGraph: {
    title: "AAC en texte — Transcription audio AAC gratuite en ligne | Mictoo",
    description: "Transcrivez gratuitement les fichiers audio AAC en texte. Déposez vos fichiers .aac, .m4a ou tout fichier AAC-encodé et obtenez une transcription précise en quelques secondes.",
    url: "https://mictoo.com/fr/aac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AAC en texte — Transcription audio AAC gratuite en ligne | Mictoo",
    description: "Transcrivez gratuitement les fichiers audio AAC en texte. Déposez vos fichiers .aac, .m4a ou tout fichier AAC-encodé et obtenez une transcription précise en quelques secondes.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrAacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · M4A · Gratuit"
      h1={<>AAC en texte<br /><span className="text-brand-600">Transcription AAC gratuite en ligne</span></>}
      subtitle="Déposez votre fichier audio AAC et obtenez une transcription précise en quelques secondes. Fonctionne avec .aac et .m4a (AAC dans un conteneur MP4). Sans inscription."
      defaultLanguage="fr"
      valueBlock={
        <>
          <p>
            AAC est un codec audio, pas toujours un type de fichier unique. Vous pouvez le rencontrer sous forme de flux <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">.aac</code>, dans un fichier M4A, dans une vidéo MP4 ou dans des exports d’apps mobiles.
          </p>
          <p>
            Mictoo lit directement la plupart de ces variantes, ce qui évite de convertir l’audio avant la transcription et limite les pertes de qualité inutiles.
          </p>
        </>
      }
      howItWorks={[
        { title: 'Ajoutez le fichier AAC', desc: 'Glissez un fichier .aac brut, un M4A ou un MP4 contenant une piste AAC.' },
        { title: 'Mictoo détecte le conteneur', desc: 'Le moteur identifie le flux audio, le décode et prépare la piste vocale pour la transcription.' },
        { title: 'Exportez le texte', desc: 'Relisez le résultat, corrigez les noms propres, puis exportez en TXT ou SRT horodaté.' },
      ]}
      whyUse={{
        title: 'Pourquoi transcrire AAC directement',
        bullets: [
          'Évitez une conversion MP3 qui peut ajouter une génération de compression et dégrader les voix faibles.',
          'Traitez aussi bien les flux AAC bruts que les fichiers M4A/MP4 issus d’iPhone, de podcasts ou de plateformes vidéo.',
          'Gardez les horodatages utiles pour retrouver le passage original dans l’audio ou la vidéo.',
          'Réduisez les manipulations avant upload: pas besoin d’ouvrir Audacity ou ffmpeg pour un fichier déjà lisible.',
        ],
      }}
      useCases={{
        title: 'Cas d’usage courants',
        items: [
          { title: 'Exports de podcasts', desc: 'Transcrivez des épisodes ou rushs distribués en AAC/M4A.' },
          { title: 'Archives vidéo', desc: 'Transformez la piste audio AAC d’un MP4 en texte exploitable.' },
          { title: 'Voix d’applications', desc: 'Traitez les enregistrements générés par des apps mobiles ou des jeux.' },
          { title: 'Cours et interviews', desc: 'Obtenez un texte consultable sans reconvertir chaque fichier en MP3.' },
        ],
      }}
      proTips={{
        title: 'Conseils pour un meilleur résultat AAC',
        tips: [
          'Si un flux .aac brut pose problème dans un autre outil, encapsulez-le en M4A plutôt que de le réencoder.',
          'N’augmentez pas artificiellement le bitrate: cela alourdit le fichier sans améliorer la transcription.',
          'Pour les extraits très courts, choisissez la langue manuellement afin d’éviter une mauvaise détection.',
        ],
      }}
      faq={[
        { q: "Qu’est-ce qu’un fichier AAC ?", a: "AAC (Advanced Audio Coding) est un format de compression audio avec perte utilisé par iTunes, Apple Music, YouTube et la plupart des apps de podcast. Les fichiers portent les extensions .aac ou .m4a. AAC offre une meilleure qualité que MP3 au même bitrate." },
        { q: "Quelle est la différence entre .aac et .m4a ?", a: "Les deux contiennent de l’audio encodé en AAC. .aac est le flux audio brut ; .m4a l’enveloppe dans un conteneur MP4 (comme iTunes et les Mémos Vocaux iPhone le font). Mictoo supporte les deux directement." },
        { q: "Comment convertir AAC en texte gratuitement ?", a: "Glissez votre fichier AAC dans la zone d’upload ci-dessus. Mictoo le transcrit automatiquement via IA et affiche le texte en quelques secondes. Copiez-le ou téléchargez en .txt." },
        { q: "Quelle est la taille maximale d’AAC ?", a: "Jusqu’à 25 Mo par upload. AAC à 128 kbps offre environ 25 minutes d’audio par 25 Mo ; à 64 kbps vous pouvez tenir près d’une heure. Pour des fichiers plus longs, baissez le bitrate ou divisez en segments." },
        { q: "Puis-je obtenir des horodatages pour une transcription AAC ?", a: "Oui. Après la transcription vous pouvez télécharger un fichier .srt avec des horodatages précis — utile pour synchroniser la transcription avec l’audio ou la vidéo originale." },
      ]}
      relatedLinks={[
        { href: '/fr/m4a-to-text', label: 'M4A en texte' },
        { href: '/fr/transcribe-mp3-to-text', label: 'MP3 en texte' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
