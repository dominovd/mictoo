import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Transcription IA Audio et Vidéo en Texte, Gratuite — Mictoo',
  description: "Transcrivez vos fichiers audio et vidéo en texte gratuitement. Sans inscription. Propulsé par OpenAI Whisper. MP3, MP4, WAV et plus de 50 langues.",
  alternates: {
    canonical: 'https://mictoo.com/fr',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'ja': 'https://mictoo.com/ja',
      'ko': 'https://mictoo.com/ko',
      'x-default': 'https://mictoo.com',
    },
  },
  openGraph: {
    title: 'Mictoo — Transcription IA Audio & Vidéo Gratuite',
    description: "Téléchargez un fichier audio ou vidéo et obtenez la transcription en quelques secondes.",
    url: 'https://mictoo.com/fr',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — Transcription Audio & Vidéo Gratuite' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — Transcription IA Gratuite',
    description: "Téléchargez un fichier audio ou vidéo et obtenez la transcription en quelques secondes.",
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrenchPage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="IA · Gratuit · Sans inscription · 50+ langues"
      h1={<>Transcrire Audio et Vidéo en Texte<br /><span className="text-brand-600">avec l&apos;IA, Gratuit en Ligne</span></>}
      subtitle="Déposez n'importe quel fichier audio ou vidéo et obtenez une transcription IA précise en quelques secondes. Aucun compte requis."
      howItWorks={[
        { icon: '📂', title: 'Déposez le fichier', desc: 'Glissez-déposez ou cliquez pour téléverser. MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Jusqu\'à 25 Mo anonymement, 60 Mo après inscription.' },
        { icon: '⚡', title: "L'IA transcrit", desc: "Whisper d'OpenAI convertit l'audio en texte avec une haute précision dans plus de 50 langues. Un fichier de 10 minutes finit généralement en moins de 30 secondes." },
        { icon: '📋', title: 'Copier ou télécharger', desc: 'Modifiez la transcription directement dans le navigateur. Copiez dans le presse-papiers ou exportez en .txt, .srt, .pdf, .docx.' },
      ]}
      whyUse={{ title: 'Pourquoi Mictoo', bullets: [
        { title: '100% gratuit', desc: 'Pas d\'abonnement, pas d\'essai limité. Mictoo est gratuit, sans plafond mensuel ni compteur de minutes.' },
        { title: 'Confidentiel par défaut', desc: 'Vos fichiers sont envoyés directement vers l\'API Whisper (Groq en principal, OpenAI en secours), traités, puis supprimés en quelques secondes. Nous ne conservons rien, nous n\'entraînons aucun modèle sur vos données.' },
        { title: 'Plus de 50 langues', desc: 'Détection automatique de la langue. Fonctionne pour le français, l\'anglais, l\'espagnol, l\'allemand, le russe, le japonais et bien d\'autres.' },
        { title: 'Haute précision', desc: 'Propulsé par Whisper d\'OpenAI, le même modèle de reconnaissance vocale utilisé dans ChatGPT et chez les principaux services de transcription.' },
        { title: 'Résultats rapides', desc: 'Un fichier de 10 minutes est transcrit en moins de 30 secondes. Pas d\'attente en file, pas de pop-up "patientez 30 secondes".' },
        { title: 'Sortie modifiable', desc: 'Relisez et corrigez la transcription dans le navigateur, puis copiez dans le presse-papiers ou téléchargez en .txt, .srt ou .pdf.' },
        { title: "Résumé IA inclus", desc: "Après chaque transcription, Mictoo génère gratuitement un résumé IA avec les points clés et les actions à retenir. La même fonctionnalité que TurboScribe vend à 20 $/mois. Aucun clic supplémentaire, aucune incitation à payer." },
        { title: "Traduire en 28 langues", desc: "Un clic traduit la transcription complète en espagnol, allemand, japonais et 25 autres. Les horodatages d'origine sont conservés, donc le SRT traduit reste synchronisé avec l'audio." },
      ]}}
      useCases={{ title: 'Qui utilise Mictoo', items: [
        { title: 'Étudiants', desc: 'Transcrivez cours magistraux, interviews et enregistrements de recherche. Texte recherchable, plus facile à réviser qu\'un audio à scruter.' },
        { title: 'Podcasteurs', desc: 'Transformez vos épisodes en articles de blog, notes d\'émission ou sous-titres. SEO bonus et accessibilité immédiate.' },
        { title: 'Journalistes', desc: 'Convertissez les interviews enregistrées en texte en quelques secondes. Citations précises avec horodatages pour la vérification.' },
        { title: 'Équipes en entreprise', desc: 'Transcrivez réunions, appels clients et présentations. Recherchez ensuite par mot-clé au lieu de réécouter.' },
        { title: 'Créateurs de contenu', desc: 'Générez des sous-titres pour YouTube, TikTok ou Reels Instagram. Export SRT prêt à téléverser dans YouTube Studio.' },
        { title: 'Secteurs juridique et médical', desc: 'Brouillons rapides de transcriptions pour notes et documentation. Conserver le fichier original pour la version définitive.' },
      ]}}
      proTips={{ title: 'Conseils pour une meilleure transcription', tips: [
        { title: 'Audio mono à 64 kbps suffit pour la voix', desc: 'Mictoo accepte jusqu\'à 25 Mo. Pour la parole, mono 64 kbps donne ~28 Mo par heure sans perte de précision notable. Voir notre guide pour comprimer l\'audio.' },
        { title: 'Si le fichier dépasse 30 minutes, inscrivez-vous', desc: 'Anonyme : 30 minutes max. Inscription gratuite : 60 minutes. Au-delà : découpez le fichier en parties et collez ensuite les transcriptions.' },
        { title: 'Spécifiez la langue si la détection automatique se trompe', desc: 'Whisper devine bien dans 99% des cas. Sur des fichiers très courts (moins de 10 secondes) ou très multilingues, le sélecteur de langue manuel sécurise la sortie.' },
        { title: "Pour la transcription d'une vidéo, l'audio suffit", desc: 'Mictoo accepte MP4 directement, mais vous pouvez aussi extraire l\'audio (notre convertisseur MP4 vers MP3) pour téléverser un fichier 10× plus petit.' },
        { title: 'Résumé IA inclus dans le résultat', desc: 'Après la transcription, Mictoo génère automatiquement un résumé du contenu, les points clés et les actions. Utile pour réunions et podcasts longs.' },
        { title: 'Traduisez la transcription en 28 langues', desc: 'Une fois la transcription prête, cliquez sur Traduire dans la vue Lecteur. Whisper transcrit la langue source, GPT-4o-mini traduit ensuite vers votre langue cible.' },
      ]}}
      faq={[
        {
          q: 'Comment transcrire un fichier audio en texte gratuitement ?',
          a: "Déposez votre fichier audio ci-dessus. Mictoo le transcrit automatiquement avec Whisper d'OpenAI et affiche le texte en quelques secondes. Aucune inscription requise pour les fichiers jusqu’à 25 Mo.",
        },
        {
          q: 'Mictoo fonctionne-t-il bien pour le français ?',
          a: "Oui. Whisper, le modèle d'OpenAI sur lequel Mictoo s'appuie, a été entraîné sur de nombreuses heures d'audio en français et offre une excellente précision pour cette langue, y compris sur des accents régionaux et le vocabulaire technique.",
        },
        {
          q: 'Mes fichiers sont-ils conservés ?',
          a: 'Non. Vos fichiers sont envoyés directement à l\'API de transcription, traités, puis supprimés en quelques secondes. Nous ne conservons rien sur nos serveurs et ne nous en servons pas pour entraîner des modèles.',
        },
        {
          q: 'Quelle est la taille maximale de fichier ?',
          a: '25 Mo pour les utilisateurs anonymes, 60 Mo après une inscription gratuite. Un MP3 mono de 64 kbps équivaut à environ une heure d\'audio dans 25 Mo.',
        },
        {
          q: 'Combien de temps prend la transcription ?',
          a: "Un fichier de 10 minutes est typiquement transcrit en moins de 30 secondes. Les fichiers plus longs prennent proportionnellement plus de temps mais restent bien plus rapides que le temps réel.",
        },
        {
          q: 'Quels formats audio et vidéo sont acceptés ?',
          a: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, MPEG. Pour les fichiers vidéo, Mictoo extrait automatiquement la piste audio. Si votre format n\'est pas supporté, convertissez-le d\'abord en MP3 ou WAV avec nos convertisseurs intégrés.',
        },
        {
          q: 'Puis-je télécharger les sous-titres au format SRT ?',
          a: 'Oui. Après la transcription, cliquez sur le bouton .srt pour télécharger un fichier de sous-titres horodatés, prêt à être téléversé dans YouTube Studio, Premiere ou Final Cut.',
        },
        {
          q: 'Mictoo génère-t-il un résumé du contenu ?',
          a: 'Oui. Après chaque transcription, Mictoo crée automatiquement un résumé IA avec les points clés et les actions à retenir. Très utile pour les podcasts longs, réunions et cours magistraux.',
        },
        {
          q: 'Puis-je transcrire une vidéo YouTube ?',
          a: "Pas directement par URL — YouTube bloque les serveurs tiers. Téléchargez d'abord la vidéo localement avec un outil comme 4K Video Downloader, puis déposez le fichier MP4 ici. Notre guide de téléchargement YouTube détaille la procédure.",
        },
        {
          q: 'Mictoo a-t-il une application mobile ?',
          a: 'Pas encore d\'application native, mais le site fonctionne parfaitement sur iOS Safari et Android Chrome. Téléversez depuis votre pellicule photo ou un mémo vocal directement depuis votre téléphone.',
        },
      ]}
      relatedLinks={[
        { href: '/fr/transcribe-mp3-to-text', label: 'MP3 vers texte', desc: 'Transcrire spécifiquement des fichiers MP3 — podcasts, mémos vocaux, appels enregistrés.' },
        { href: '/fr/transcribe-video-to-text', label: 'Vidéo vers texte', desc: "Transcrire MP4, MOV, WEBM — pour les enregistrements Zoom, vidéos YouTube, screencasts." },
        { href: '/fr/podcast-transcription', label: 'Transcription de podcast', desc: 'Même moteur avec des conseils spécifiques aux podcasts longs et au montage.' },
        { href: '/fr/free-srt-generator', label: 'Générateur SRT gratuit', desc: 'Sous-titres horodatés prêts pour YouTube Studio, Premiere, DaVinci Resolve.' },
      ]}
    />
  )
}
