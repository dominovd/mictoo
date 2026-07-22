import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-mp3',
  'fr': 'https://mictoo.com/fr/wav-to-mp3',
  'de': 'https://mictoo.com/de/wav-to-mp3',
  'es': 'https://mictoo.com/es/wav-to-mp3',
  'ru': 'https://mictoo.com/ru/wav-to-mp3',
  'it': 'https://mictoo.com/it/wav-to-mp3',
  'pt': 'https://mictoo.com/pt/wav-to-mp3',
  'pl': 'https://mictoo.com/pl/wav-to-mp3',
  'ja': 'https://mictoo.com/ja/wav-to-mp3',
  'ko': 'https://mictoo.com/ko/wav-to-mp3',
  'x-default': 'https://mictoo.com/wav-to-mp3',
}

export const metadata = {
  title: 'WAV vers MP3, convertisseur en ligne gratuit | Mictoo',
  description:
    'Convertissez WAV en MP3 gratuitement en ligne. Réduisez les fichiers WAV sans perte à un MP3 portable de 128 kbps en quelques secondes. Pas d’inscription, pas de filigrane. Jusqu’à 25 Mo.',
  alternates: { canonical: 'https://mictoo.com/fr/wav-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WAV vers MP3, convertisseur en ligne gratuit | Mictoo',
    description: 'Réduisez les WAV sans perte à un MP3 portable de 128 kbps. Pas d’inscription.',
    url: 'https://mictoo.com/fr/wav-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WAV vers MP3, convertisseur en ligne gratuit',
    description: 'Réduisez WAV en MP3 portable.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrWavToMp3Page() {
  return (
    <ConverterPageLayout
      locale="fr"
      mode="converter" from="wav" to="mp3" currentHref="/fr/wav-to-mp3"
      badge="WAV → MP3 · Gratuit · Pas d’inscription"
      h1First="WAV vers MP3"
      h1Second="Convertisseur en ligne gratuit"
      subtitle="Déposez un fichier WAV non compressé et obtenez un petit MP3 portable en quelques secondes. Pas de filigrane, pas d’email, pas d’attente."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stéréo"
      stepsTitle="Comment fonctionne la conversion WAV vers MP3"
      steps={[
        { icon: 'upload',   title: 'Déposez le WAV',         desc: 'Téléchargez un fichier WAV jusqu’à 25 Mo. Aucun compte n’est requis.' },
        { icon: 'waveform', title: 'Nous encodons en MP3',      desc: 'ffmpeg encode en MP3 stéréo à 128 kbps à 44,1 kHz. Un WAV de 25 Mo se termine en environ 10 secondes.' },
        { icon: 'download', title: 'Téléchargez le MP3',     desc: 'Obtenez un MP3 de 128 kbps plus petit avec le nom de fichier d’origine.' },
      ]}
      previewInputName="studio-bounce.wav"
      previewInputSize="120 Mo · 00:12:34 · 16 bits / 44,1 kHz"
      previewOutputName="studio-bounce.mp3"
      previewOutputSize="00:12:34 · 128 kbps · 11,5 Mo"
      whyTitle="Pourquoi utiliser Mictoo pour WAV vers MP3 ?"
      whyCards={[
        { icon: 'target',   title: 'Un travail bien fait',      desc: 'Juste la conversion. Pas de popup de newsletter, pas de barre de progression fausse.' },
        { icon: 'fileAudio',title: 'Sortie beaucoup plus petite',    desc: 'Les fichiers WAV PCM non compressés deviennent souvent 8 à 12 fois plus petits à 128 kbps. Le ratio exact dépend de la source.' },
        { icon: 'lock',     title: 'Fichiers supprimés après',    desc: 'Votre téléchargement est supprimé une fois la conversion terminée ; le MP3 est purgé dans l’heure.' },
        { icon: 'shield',   title: 'Pas de filigrane ni de tag',    desc: 'Pas d’introduction de marque, pas de métadonnées injectées. Juste l’audio, ré-encodé.' },
      ]}
      scenariosTitle="Quand WAV vers MP3 est utile"
      scenarios={[
        { icon: 'headphones', title: 'Studio bounce pour téléphone' },
        { icon: 'mail',       title: 'Envoyer un fichier plus petit par email' },
        { icon: 'archive',    title: 'Archiver à une taille plus petite' },
        { icon: 'editPen',    title: 'Préparer pour la transcription' },
        { icon: 'waveform',   title: 'Importation de bibliothèque musicale' },
        { icon: 'video',      title: 'Voix off pour vidéo' },
      ]}
      tipsTitle="Conseils pour un WAV vers MP3 propre"
      tips={[
        '128 kbps est transparent pour la plupart des écoutes.',
        'Si le WAV dépasse 25 Mo, coupez-le ou compressez-le avant de le télécharger.',
        'Le WAV multicanal est réduit à stéréo.',
        'Pour une préservation sans perte, gardez le WAV comme copie d’archive.',
      ]}
      processTitle="Que se passe-t-il pendant la conversion"
      processSteps={['Conteneur WAV', 'Décode PCM', 'Encodage MP3']}
      compareTitle="WAV vs MP3"
      compareRows={[
        { fmt: 'WAV', contains: 'Non', size: 'Grand (~10 Mo/min)', best: 'Montage, archivage, studio' },
        { fmt: 'MP3', contains: 'Non', size: 'Petit (~1 Mo/min)',  best: 'Partage, lecture, écoute' },
      ]}
      faq={[
        { q: 'Le convertisseur WAV vers MP3 est-il gratuit ?', a: 'Oui. Aucun compte n’est nécessaire pour des fichiers jusqu’à 25 Mo, et la sortie n’a pas de filigrane.' },
        { q: 'La conversion réduit-elle la qualité audio ?', a: 'Légèrement. MP3 à 128 kbps est un format avec perte mais la baisse de qualité est inaudible pour la voix et la lecture musicale typique. Gardez votre WAV comme master.' },
        { q: 'Les fichiers téléchargés sont-ils stockés ?', a: 'Non. Votre WAV atterrit sur le stockage Vercel Blob juste le temps de convertir, puis il est supprimé. Le MP3 est purgé dans l’heure.' },
        { q: 'Puis-je convertir un grand WAV ?', a: 'La limite de téléchargement actuelle est de 25 Mo. Pour un fichier plus grand, coupez-le ou exportez une copie mono ou à un taux d’échantillonnage inférieur avant de télécharger.' },
        { q: 'Cela fonctionne-t-il sur mobile ?', a: 'Oui. Les téléchargements fonctionnent depuis iOS Safari et Android Chrome.' },
      ]}
      ctaHeadline="Convertissez votre WAV en MP3 maintenant"
      ctaSubtitle="Déposez votre WAV et obtenez un MP3 portable en quelques secondes. Pas d’inscription. Pas de filigrane."
      ctaButton="Choisissez un fichier WAV"
      moreTools={[
        { href: '/fr/mp4-to-mp3',  label: 'MP4 vers MP3' },
        { href: '/fr/webm-to-mp3', label: 'WEBM vers MP3' },
        { href: '/fr/flac-to-mp3', label: 'FLAC vers MP3' },
        { href: '/fr/mp3-to-wav',  label: 'MP3 vers WAV' },
        { href: '/fr/wav-to-text', label: 'WAV vers Texte' },
      ]}
    />
  )
}