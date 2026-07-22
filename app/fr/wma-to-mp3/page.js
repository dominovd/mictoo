import ConverterPageLayout from '@/components/ConverterPageLayout'

export const metadata = {
  title: 'WMA vers MP3 : Convertisseur gratuit pour l’audio Windows Media ancien | Mictoo',
  description:
    'Convertissez d’anciens fichiers WMA en MP3 universel. Conçu pour sauver des archives Windows Media anciennes, des exports de messagerie vocale et des CD gravés que rien de moderne ne veut ouvrir.',
  alternates: {
    canonical: 'https://mictoo.com/fr/wma-to-mp3',
    languages: {
      'en': 'https://mictoo.com/wma-to-mp3',
      'fr': 'https://mictoo.com/fr/wma-to-mp3',
      'de': 'https://mictoo.com/de/wma-to-mp3',
      'es': 'https://mictoo.com/es/wma-to-mp3',
      'ru': 'https://mictoo.com/ru/wma-to-mp3',
      'it': 'https://mictoo.com/it/wma-to-mp3',
      'pt': 'https://mictoo.com/pt/wma-to-mp3',
      'pl': 'https://mictoo.com/pl/wma-to-mp3',
      'ja': 'https://mictoo.com/ja/wma-to-mp3',
      'ko': 'https://mictoo.com/ko/wma-to-mp3',
      'x-default': 'https://mictoo.com/wma-to-mp3',
    },
  },
  openGraph: {
    title: 'WMA vers MP3 : Convertisseur Windows Media ancien | Mictoo',
    description: 'Sauvez des archives WMA anciennes, des exports de messagerie vocale, des CD gravés.',
    url: 'https://mictoo.com/fr/wma-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WMA vers MP3 : Convertisseur gratuit',
    description: 'Sauvez des fichiers WMA anciens. Gratuit.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrWmaToMp3Page() {
  return (
    <ConverterPageLayout
      locale="fr"
      mode="converter" from="wma" to="mp3" currentHref="/fr/wma-to-mp3"
      badge="WMA → MP3 · Gratuit · Sauvetage ancien"
      h1First="WMA vers MP3"
      h1Second="Convertisseur Windows Media ancien gratuit"
      subtitle="Déposez un ancien fichier WMA (export de messagerie vocale, CD gravé, archive Windows Media ancienne) et obtenez un MP3 universel qui s’ouvrira sur n’importe quel appareil ou lecteur moderne."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stéréo"
      stepsTitle="Comment fonctionne la conversion WMA vers MP3"
      steps={[
        { icon: 'upload',   title: 'Déposez le WMA',        desc: 'Toute version de Windows Media Audio, jusqu’à 25 MB anonymement.' },
        { icon: 'waveform', title: 'Nous décodons et encodons', desc: 'ffmpeg lit le WMA et le réencode en MP3 stéréo à 128 kbps à 44,1 kHz.' },
        { icon: 'download', title: 'Téléchargez le MP3',    desc: 'Obtenez un MP3 compatible avec la plupart des lecteurs, téléphones et éditeurs audio actuels.' },
      ]}
      previewInputName="voicemail-2011.wma"
      previewInputSize="1,2 MB · 00:02:34"
      previewOutputName="voicemail-2011.mp3"
      previewOutputSize="00:02:34 · 128 kbps · 2,4 MB"
      whyTitle="Pourquoi utiliser Mictoo pour WMA vers MP3 ?"
      whyCards={[
        { icon: 'target',   title: 'Fichiers anciens gérés',    desc: 'Anciens fichiers Windows Media Audio que iTunes, Apple Music et les lecteurs modernes refusent d’ouvrir.' },
        { icon: 'fileAudio',title: 'Large compatibilité MP3', desc: 'Le MP3 est largement supporté sur macOS, Linux, iPhone, Android et les lecteurs de musique courants.' },
        { icon: 'lock',     title: 'Fichiers supprimés après',     desc: 'Le WMA téléchargé est supprimé après conversion ; le MP3 est purgé dans l’heure.' },
        { icon: 'shield',   title: 'Pas de filigrane ni de tag',     desc: 'Juste l’audio, ré-encodé. Pas d’intro de marque, pas de métadonnées injectées.' },
      ]}
      scenariosTitle="Quand WMA vers MP3 est utile"
      scenarios={[
        { icon: 'archive',    title: 'Rippage de CD ancien' },
        { icon: 'headphones', title: 'Ancien export de messagerie vocale' },
        { icon: 'editPen',    title: 'Sortie de Windows Movie Maker' },
        { icon: 'mail',       title: 'Partager sur un appareil non-Windows' },
        { icon: 'video',      title: 'Importer dans un éditeur moderne' },
        { icon: 'waveform',   title: 'Sauver une archive de cassette' },
      ]}
      tipsTitle="Conseils pour un WMA vers MP3 propre"
      tips={[
        'Le WMA protégé par DRM (anciens locations de Windows Media Player) ne peut pas être décodé.',
        'Le WMA à très faible débit (messagerie vocale) sonnera comme la source.',
        'Le vieux WMV vidéo n’est pas supporté ici ; utilisez MP4 vers MP3 à la place.',
        'Pour les enregistrements de plus de 25 MB, coupez ou divisez la source avant de télécharger.',
      ]}
      processTitle="Que se passe-t-il pendant la conversion"
      processSteps={['WMA (ASF)', 'Décodez Windows Media', 'Encodage MP3']}
      compareTitle="WMA vs MP3"
      compareRows={[
        { fmt: 'WMA', contains: 'Non', size: 'Petit', best: 'Flux de travail Windows anciens (déprécié)' },
        { fmt: 'MP3', contains: 'Non', size: 'Petit', best: 'Compatibilité universelle, appareils modernes' },
      ]}
      faq={[
        { q: 'Le convertisseur WMA vers MP3 est-il gratuit ?', a: 'Oui. Les fichiers jusqu’à 25 MB peuvent être convertis sans compte, et la sortie n’a pas de filigrane.' },
        { q: 'Pourquoi les lecteurs modernes refusent-ils d’ouvrir le WMA ?', a: 'Apple n’a jamais supporté le WMA. Certains lecteurs Android l’ont abandonné. Le WMA est un format Microsoft ancien dont Windows s’éloigne.' },
        { q: 'Pouvez-vous convertir des WMA protégés par DRM ?', a: 'Non. Les anciennes locations de Windows Media Player utilisaient un DRM que ffmpeg ne peut pas décoder. Nous ne contournons jamais la protection des droits d’auteur.' },
        { q: 'Les fichiers sont-ils stockés ?', a: 'Non. Le WMA téléchargé est supprimé après conversion ; le MP3 est purgé dans l’heure.' },
        { q: 'Qu’en est-il du WMA sans perte ?', a: 'Le convertisseur lit également le WMA sans perte, mais la sortie reste un MP3 à 128 kbps (perte). Pour une sortie sans perte, convertissez en WAV à la place.' },
      ]}
      ctaHeadline="Convertissez votre WMA en MP3 maintenant"
      ctaSubtitle="Sauvez l’audio Windows Media ancien. Obtenez un MP3 portable en quelques secondes."
      ctaButton="Choisissez un fichier WMA"
      moreTools={[
        { href: '/fr/mp4-to-mp3',  label: 'MP4 vers MP3' },
        { href: '/fr/wav-to-mp3',  label: 'WAV vers MP3' },
        { href: '/fr/flac-to-mp3', label: 'FLAC vers MP3' },
        { href: '/fr/aac-to-mp3',  label: 'AAC vers MP3' },
      ]}
    />
  )
}