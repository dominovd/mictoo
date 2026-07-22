import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-m4a',
  'fr': 'https://mictoo.com/fr/mp3-to-m4a',
  'de': 'https://mictoo.com/de/mp3-to-m4a',
  'es': 'https://mictoo.com/es/mp3-to-m4a',
  'ru': 'https://mictoo.com/ru/mp3-to-m4a',
  'it': 'https://mictoo.com/it/mp3-to-m4a',
  'pt': 'https://mictoo.com/pt/mp3-to-m4a',
  'pl': 'https://mictoo.com/pl/mp3-to-m4a',
  'ja': 'https://mictoo.com/ja/mp3-to-m4a',
  'ko': 'https://mictoo.com/ko/mp3-to-m4a',
  'x-default': 'https://mictoo.com/mp3-to-m4a',
}

export const metadata = {
  title: 'MP3 vers M4A, convertisseur en ligne gratuit | Mictoo',
  description:
    'Convertissez MP3 en M4A gratuitement en ligne. Réencodez MP3 en AAC dans un conteneur M4A pour iPhone, iTunes et l’écosystème Apple. Pas d’inscription, pas de filigrane.',
  alternates: { canonical: 'https://mictoo.com/fr/mp3-to-m4a', languages: LANGS },
  openGraph: {
    title: 'MP3 vers M4A, convertisseur en ligne gratuit | Mictoo',
    description: 'MP3 en AAC dans M4A. Compatible iPhone. Pas d’inscription.',
    url: 'https://mictoo.com/fr/mp3-to-m4a',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 vers M4A, convertisseur en ligne gratuit',
    description: 'AAC dans MP4 compatible iPhone.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrMp3ToM4aPage() {
  return (
    <ConverterPageLayout
      locale="fr"
      mode="converter" from="mp3" to="m4a" currentHref="/fr/mp3-to-m4a"
      badge="MP3 → M4A · Gratuit · Compatible iPhone"
      h1First="MP3 vers M4A"
      h1Second="Convertisseur en ligne gratuit"
      subtitle="Déposez un MP3 et obtenez un M4A (AAC dans un conteneur MP4) pour les mémos vocaux iPhone, iTunes, GarageBand et l’écosystème Apple. Pas de filigrane, pas d’email."
      outputFormat="M4A" outputQuality="128 kbps AAC" outputAudio="Stéréo"
      stepsTitle="Comment fonctionne la conversion MP3 en M4A"
      steps={[
        { icon: 'upload',   title: 'Déposez le MP3',        desc: 'Tout MP3 avec un bitrate, jusqu’à 25 MB anonymement.' },
        { icon: 'waveform', title: 'Nous réencodons en AAC', desc: 'ffmpeg décode le MP3 et réencode en 128 kbps AAC dans un conteneur .m4a.' },
        { icon: 'download', title: 'Téléchargez le M4A',   desc: 'Fichier compatible iPhone avec le nom original plus l’extension .m4a.' },
      ]}
      previewInputName="episode.mp3"
      previewInputSize="8,4 MB · 00:09:22"
      previewOutputName="episode.m4a"
      previewOutputSize="00:09:22 · 128 kbps AAC · 7,6 MB"
      whyTitle="Pourquoi utiliser Mictoo pour MP3 vers M4A ?"
      whyCards={[
        { icon: 'target',    title: 'Sortie compatible Apple',    desc: 'M4A fonctionne nativement avec les workflows courants d’iPhone, iTunes, GarageBand et Apple.' },
        { icon: 'fileAudio', title: 'Sortie prévisible',       desc: 'Le fichier est réencodé en 128 kbps AAC. Sa taille finale dépend principalement de la durée de l’enregistrement.' },
        { icon: 'lock',      title: 'Fichiers supprimés après',      desc: 'Le MP3 téléchargé est supprimé après conversion ; le M4A est purgé dans l’heure.' },
        { icon: 'shield',    title: 'Pas de filigrane ni de tag',      desc: 'Juste l’audio, réencodé. Pas d’intro de marque, pas de métadonnées injectées.' },
      ]}
      scenariosTitle="Quand MP3 vers M4A est utile"
      scenarios={[
        { icon: 'headphones', title: 'Importation dans la bibliothèque iTunes' },
        { icon: 'waveform',   title: 'Projet GarageBand' },
        { icon: 'video',      title: 'Bande sonore iMovie' },
        { icon: 'mail',       title: 'Compatibilité AirDrop' },
        { icon: 'archive',    title: 'Archive de l’écosystème Apple' },
        { icon: 'editPen',    title: 'Importation dans Logic Pro' },
      ]}
      tipsTitle="Conseils pour une conversion propre de MP3 à M4A"
      tips={[
        'MP3 et AAC sont tous deux avec perte ; le réencodage ajoute une légère perte de qualité.',
        'Pour du sans perte, convertissez en WAV à la place.',
        'Les tags ID3 ne sont pas transférés dans le M4A.',
        'Gardez le fichier source sous la limite actuelle de 25 MB de téléchargement.',
      ]}
      processTitle="Que se passe-t-il pendant la conversion"
      processSteps={['Flux MP3', 'Décode', 'Encodage AAC / M4A']}
      compareTitle="MP3 vs M4A"
      compareRows={[
        { fmt: 'MP3', contains: 'Non', size: 'Petit', best: 'Universel, lecteurs anciens' },
        { fmt: 'M4A', contains: 'Non', size: 'Légèrement plus petit', best: 'iPhone, iTunes, GarageBand, applications Apple' },
      ]}
      faq={[
        { q: 'Le convertisseur MP3 vers M4A est-il gratuit ?', a: 'Oui. Les fichiers jusqu’à 25 MB peuvent être convertis sans compte, et la sortie n’a pas de filigrane.' },
        { q: 'La conversion de MP3 en M4A améliore-t-elle la qualité ?', a: 'Non. Le réencodage d’un format avec perte à un autre ne peut que légèrement perdre en qualité. Faites-le uniquement pour la compatibilité avec l’écosystème Apple.' },
        { q: 'Le M4A fonctionnera-t-il dans iTunes et Apple Music ?', a: 'Oui. L’AAC standard dans le conteneur MP4 est le format exact utilisé par iTunes.' },
        { q: 'Les fichiers sont-ils stockés ?', a: 'Non. Le MP3 téléchargé est supprimé après conversion ; le M4A est purgé dans l’heure.' },
        { q: 'Puis-je convertir en M4A sans perte (ALAC) ?', a: 'Pas depuis cette page. La sortie est en AAC avec perte. Pour du sans perte, convertissez d’abord MP3 en WAV, puis en ALAC dans votre DAW.' },
      ]}
      ctaHeadline="Convertissez votre MP3 en M4A maintenant"
      ctaSubtitle="Déposez votre MP3 et obtenez un M4A compatible iPhone en quelques secondes."
      ctaButton="Choisissez un fichier MP3"
      moreTools={[
        { href: '/fr/m4a-to-mp3',  label: 'M4A vers MP3' },
        { href: '/fr/mp3-to-wav',  label: 'MP3 vers WAV' },
        { href: '/fr/mp4-to-mp3',  label: 'MP4 vers MP3' },
        { href: '/fr/m4a-to-text', label: 'M4A vers Texte' },
      ]}
    />
  )
}