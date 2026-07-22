import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-wav',
  'fr': 'https://mictoo.com/fr/mp3-to-wav',
  'de': 'https://mictoo.com/de/mp3-to-wav',
  'es': 'https://mictoo.com/es/mp3-to-wav',
  'ru': 'https://mictoo.com/ru/mp3-to-wav',
  'it': 'https://mictoo.com/it/mp3-to-wav',
  'pt': 'https://mictoo.com/pt/mp3-to-wav',
  'pl': 'https://mictoo.com/pl/mp3-to-wav',
  'ja': 'https://mictoo.com/ja/mp3-to-wav',
  'ko': 'https://mictoo.com/ko/mp3-to-wav',
  'x-default': 'https://mictoo.com/mp3-to-wav',
}

export const metadata = {
  title: 'MP3 vers WAV, convertisseur en ligne gratuit | Mictoo',
  description:
    'Convertissez MP3 en WAV gratuitement en ligne. Développez un MP3 compressé en un WAV non compressé 16 bits/44,1 kHz pour le montage audio. Pas d’inscription, pas de filigrane.',
  alternates: { canonical: 'https://mictoo.com/fr/mp3-to-wav', languages: LANGS },
  openGraph: {
    title: 'MP3 vers WAV, convertisseur en ligne gratuit | Mictoo',
    description: 'MP3 en WAV non compressé 16 bits/44,1 kHz. Pour le montage.',
    url: 'https://mictoo.com/fr/mp3-to-wav',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 vers WAV, convertisseur en ligne gratuit',
    description: 'Pour le montage et le mastering DAW.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrMp3ToWavPage() {
  return (
    <ConverterPageLayout
      locale="fr"
      mode="converter" from="mp3" to="wav" currentHref="/fr/mp3-to-wav"
      badge="MP3 → WAV · Gratuit · Compatible avec les éditeurs"
      h1First="MP3 vers WAV"
      h1Second="Convertisseur en ligne gratuit"
      subtitle="Déposez un MP3 et obtenez un WAV non compressé 16 bits / 44,1 kHz pour le montage DAW, le mastering ou la gravure de CD. Pas de filigrane, pas d’email."
      outputFormat="WAV" outputQuality="16 bits / 44,1 kHz" outputAudio="Stéréo"
      stepsTitle="Comment fonctionne la conversion MP3 en WAV"
      steps={[
        { icon: 'upload',   title: 'Déposez le MP3',       desc: 'Tout MP3, jusqu’à 25 Mo de manière anonyme.' },
        { icon: 'waveform', title: 'Nous décodons en PCM', desc: 'ffmpeg décode le MP3 en PCM non compressé 16 bits / 44,1 kHz encapsulé dans un conteneur WAV.' },
        { icon: 'download', title: 'Téléchargez le WAV',   desc: 'Prêt pour Audacity, Pro Tools, Logic, Ableton et tout éditeur audio.' },
      ]}
      previewInputName="voiceover.mp3"
      previewInputSize="4,6 Mo · 00:05:00 · 128 kbps"
      previewOutputName="voiceover.wav"
      previewOutputSize="00:05:00 · 16 bits / 44,1 kHz · 50 Mo"
      whyTitle="Pourquoi utiliser Mictoo pour MP3 vers WAV ?"
      whyCards={[
        { icon: 'target',   title: 'Sortie prête pour DAW',       desc: 'Le PCM non compressé est ce que les éditeurs audio et les outils de mastering attendent.' },
        { icon: 'fileAudio',title: 'Standard 16 bits / 44,1', desc: 'Un paramètre PCM largement supporté pour les éditeurs audio, les outils de mastering et les logiciels de gravure de CD.' },
        { icon: 'lock',     title: 'Fichiers supprimés après',    desc: 'Le MP3 téléchargé est supprimé après conversion ; le WAV est purgé dans l’heure.' },
        { icon: 'shield',   title: 'Pas de filigrane ni de tag',    desc: 'Juste l’audio, décodé en PCM. Pas d’intro de marque, pas de métadonnées injectées.' },
      ]}
      scenariosTitle="Quand MP3 vers WAV est utile"
      scenarios={[
        { icon: 'editPen',    title: 'Montage Audacity' },
        { icon: 'waveform',   title: 'Importation Pro Tools' },
        { icon: 'headphones', title: 'Flux de travail de mastering' },
        { icon: 'archive',    title: 'Gravure de CD' },
        { icon: 'video',      title: 'Éditeur vidéo avec exigence WAV' },
        { icon: 'target',     title: 'Entrée pour formation de clonage vocal' },
      ]}
      tipsTitle="Conseils pour une conversion propre de MP3 en WAV"
      tips={[
        'Le WAV est 10× plus grand que le MP3 (environ 10 Mo par minute).',
        'La sortie n’est pas « véritablement » sans perte ,  elle préserve le signal MP3.',
        'Pour un véritable audio sans perte, commencez à partir d’un master FLAC ou WAV original.',
        'Gardez le fichier source sous la limite actuelle de téléchargement de 25 Mo.',
      ]}
      processTitle="Que se passe-t-il pendant la conversion"
      processSteps={['Flux MP3', 'Décoder en PCM', 'Conteneur WAV']}
      compareTitle="MP3 vs WAV"
      compareRows={[
        { fmt: 'MP3', contains: 'Non', size: 'Petit (~1 Mo/min)', best: 'Partage, téléphones, streaming' },
        { fmt: 'WAV', contains: 'Non', size: 'Grand (~10 Mo/min)', best: 'Montage, mastering, gravure de CD' },
      ]}
      faq={[
        { q: 'La conversion de MP3 en WAV récupère-t-elle une qualité sans perte ?', a: 'Non. Le MP3 est avec perte ; le WAV préserve le signal MP3 mais rien de plus. Pour un véritable sans perte, vous devez commencer à partir d’un FLAC ou d’un WAV original.' },
        { q: 'Le convertisseur est-il gratuit ?', a: 'Oui. Les fichiers jusqu’à 25 Mo peuvent être convertis sans compte, et la sortie n’a pas de filigrane.' },
        { q: 'Pourquoi le fichier WAV est-il si beaucoup plus grand ?', a: 'Le WAV est du PCM non compressé. Un MP3 de 5 Mo devient environ un WAV de 50 Mo. C’est normal.' },
        { q: 'Quelle profondeur de bits et fréquence d’échantillonnage ?', a: '16 bits / 44,1 kHz stéréo (qualité CD). C’est le format standard d’importation DAW.' },
        { q: 'Les fichiers sont-ils stockés ?', a: 'Non. Le MP3 téléchargé est supprimé après conversion ; le WAV est purgé dans l’heure.' },
      ]}
      ctaHeadline="Convertissez votre MP3 en WAV maintenant"
      ctaSubtitle="Déposez votre MP3 et obtenez un WAV non compressé prêt pour le montage."
      ctaButton="Choisissez un fichier MP3"
      moreTools={[
        { href: '/fr/wav-to-mp3',  label: 'WAV vers MP3' },
        { href: '/fr/mp3-to-m4a',  label: 'MP3 vers M4A' },
        { href: '/fr/flac-to-mp3', label: 'FLAC vers MP3' },
        { href: '/fr/wav-to-text', label: 'WAV vers Texte' },
      ]}
    />
  )
}