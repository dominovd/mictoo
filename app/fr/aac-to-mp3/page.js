import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-mp3',
  'fr': 'https://mictoo.com/fr/aac-to-mp3',
  'de': 'https://mictoo.com/de/aac-to-mp3',
  'es': 'https://mictoo.com/es/aac-to-mp3',
  'ru': 'https://mictoo.com/ru/aac-to-mp3',
  'it': 'https://mictoo.com/it/aac-to-mp3',
  'pt': 'https://mictoo.com/pt/aac-to-mp3',
  'pl': 'https://mictoo.com/pl/aac-to-mp3',
  'ja': 'https://mictoo.com/ja/aac-to-mp3',
  'ko': 'https://mictoo.com/ko/aac-to-mp3',
  'x-default': 'https://mictoo.com/aac-to-mp3',
}

export const metadata = {
  title: 'AAC vers MP3 : Convertisseur en ligne gratuit | Mictoo',
  description:
    'Convertissez AAC en MP3 gratuitement, en quelques secondes, avec une explication claire de quand la conversion est réellement utile et quand elle nuit à la qualité.',
  alternates: {
    canonical: 'https://mictoo.com/fr/aac-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'AAC vers MP3 : Convertisseur en ligne gratuit | Mictoo',
    description: 'Convertissez AAC en MP3 gratuitement, en quelques secondes.',
    url: 'https://mictoo.com/fr/aac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC vers MP3 : Convertisseur en ligne gratuit',
    description: 'Convertissez AAC en MP3 en quelques secondes. Gratuit, sans inscription.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrAacToMp3Page() {
  return (
    <ConverterPageLayout
      locale="fr"
      mode="converter" from="aac" to="mp3" currentHref="/fr/aac-to-mp3"
      badge="AAC → MP3 · Gratuit · Pas d’inscription"
      h1First="AAC vers MP3"
      h1Second="Convertisseur en ligne gratuit"
      subtitle="Déposez un fichier .aac brut (flux ADTS, dump de diffusion ou audio extrait d’iPhone) et obtenez un MP3 portable en quelques secondes."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stéréo"
      stepsTitle="Comment fonctionne la conversion AAC vers MP3"
      steps={[
        { icon: 'upload',   title: 'Déposez l’AAC',        desc: 'Framing ADTS ou ADIF brut, jusqu’à 25 MB anonymement.' },
        { icon: 'waveform', title: 'Nous décodons et encodons', desc: 'ffmpeg lit le flux AAC et le réencode en MP3 stéréo à 128 kbps.' },
        { icon: 'download', title: 'Téléchargez le MP3',    desc: 'Obtenez votre MP3 propre en quelques secondes, prêt pour n’importe quel lecteur.' },
      ]}
      previewInputName="broadcast-clip.aac"
      previewInputSize="8,4 MB · 00:07:22 · 128 kbps AAC"
      previewOutputName="broadcast-clip.mp3"
      previewOutputSize="00:07:22 · 128 kbps MP3 · 6,8 MB"
      whyTitle="Pourquoi utiliser Mictoo pour AAC vers MP3 ?"
      whyCards={[
        { icon: 'target',   title: 'AAC brut pris en charge',        desc: 'Les deux framings ADTS et ADIF fonctionnent directement, pas de reconditionnement manuel.' },
        { icon: 'fileAudio',title: 'MP3 joue partout',   desc: 'Les anciens appareils et les hôtes de podcast hérités préfèrent parfois le MP3 à l’AAC.' },
        { icon: 'lock',     title: 'Fichiers supprimés après',    desc: 'L’AAC téléchargé est supprimé après conversion ; le MP3 est purgé dans l’heure.' },
        { icon: 'shield',   title: 'Pas de filigrane ni de balise',    desc: 'Juste l’audio, réencodé. Pas d’intro de marque ou de métadonnées.' },
      ]}
      scenariosTitle="Quand la conversion AAC vers MP3 est utile"
      scenarios={[
        { icon: 'video',      title: 'Dump de diffusion HLS' },
        { icon: 'headphones', title: 'L’hôte de podcast exige MP3' },
        { icon: 'mail',       title: 'Compatibilité avec les lecteurs hérités' },
        { icon: 'editPen',    title: 'Importation DAW (anciens outils)' },
        { icon: 'archive',    title: 'Format d’archive cohérent' },
        { icon: 'waveform',   title: 'AAC extrait d’iPhone' },
      ]}
      tipsTitle="Conseils pour une conversion propre d’AAC vers MP3"
      tips={[
        'Si votre appareil lit l’AAC nativement, vous n’avez peut-être pas besoin de convertir.',
        'L’AAC et le MP3 sont tous deux avec perte ; le réencodage ajoute une petite perte de qualité.',
        'Gardez le fichier source sous la limite actuelle de téléchargement de 25 MB.',
        'Pour la transcription, téléchargez directement l’AAC sur /fr/aac-to-text à la place.',
      ]}
      processTitle="Que se passe-t-il pendant la conversion"
      processSteps={['Cadres AAC ADTS', 'Décodage', 'Encodage MP3']}
      compareTitle="AAC vs MP3"
      compareRows={[
        { fmt: 'AAC', contains: 'Non', size: 'Petit (efficace)', best: 'Appareils modernes, streaming, iPhone' },
        { fmt: 'MP3', contains: 'Non', size: 'Petit',             best: 'Compatibilité universelle, lecteurs hérités' },
      ]}
      faq={[
        { q: 'Ai-je vraiment besoin de convertir AAC en MP3 ?', a: 'Rarement. La plupart des appareils modernes lisent l’AAC nativement. Convertissez uniquement si un outil ou un hôte spécifique exige explicitement le MP3.' },
        { q: 'Le convertisseur est-il gratuit ?', a: 'Oui. Les fichiers jusqu’à 25 MB peuvent être convertis sans compte, et la sortie n’a pas de filigrane.' },
        { q: 'Quelle est la perte de qualité ?', a: 'L’AAC et le MP3 sont tous deux avec perte. Le réencodage ajoute une petite perte supplémentaire mais est inaudible pour une écoute typique à 128 kbps.' },
        { q: 'Quels framings AAC fonctionnent ?', a: 'ADTS (le plus courant), ADIF et LATM se décodent tous. L’AAC à l’intérieur de MP4/M4A fonctionne aussi mais suit un chemin d’entrée différent.' },
        { q: 'Les fichiers sont-ils stockés ?', a: 'Non. L’AAC téléchargé est supprimé après conversion ; le MP3 est purgé dans l’heure.' },
      ]}
      ctaHeadline="Convertissez votre AAC en MP3 maintenant"
      ctaSubtitle="Déposez votre AAC et obtenez un MP3 propre en quelques secondes. Pas d’inscription. Pas de filigrane."
      ctaButton="Choisissez un fichier AAC"
      moreTools={[
        { href: '/fr/m4a-to-mp3',  label: 'M4A vers MP3' },
        { href: '/fr/mp4-to-mp3',  label: 'MP4 vers MP3' },
        { href: '/fr/wav-to-mp3',  label: 'WAV vers MP3' },
        { href: '/fr/aac-to-text', label: 'AAC vers Texte' },
      ]}
    />
  )
}