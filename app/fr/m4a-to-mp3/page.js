import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-mp3',
  'fr': 'https://mictoo.com/fr/m4a-to-mp3',
  'de': 'https://mictoo.com/de/m4a-to-mp3',
  'es': 'https://mictoo.com/es/m4a-to-mp3',
  'ru': 'https://mictoo.com/ru/m4a-to-mp3',
  'it': 'https://mictoo.com/it/m4a-to-mp3',
  'pt': 'https://mictoo.com/pt/m4a-to-mp3',
  'pl': 'https://mictoo.com/pl/m4a-to-mp3',
  'ja': 'https://mictoo.com/ja/m4a-to-mp3',
  'ko': 'https://mictoo.com/ko/m4a-to-mp3',
  'x-default': 'https://mictoo.com/m4a-to-mp3',
}

export const metadata = {
  title: 'M4A vers MP3 : Convertisseur gratuit pour l’audio Apple | Mictoo',
  description:
    'Convertissez les mémos vocaux iPhone, les rebonds GarageBand et les fichiers M4A de l’écosystème Apple en MP3 universel pour les hôtes de podcast, les anciens téléphones Android et les lecteurs hérités.',
  alternates: {
    canonical: 'https://mictoo.com/fr/m4a-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'M4A vers MP3 : Convertisseur gratuit pour l’audio Apple | Mictoo',
    description: 'Mémos vocaux iPhone et rebonds GarageBand en MP3 universel.',
    url: 'https://mictoo.com/fr/m4a-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4A vers MP3 : Convertisseur gratuit',
    description: 'Mémos vocaux iPhone en MP3 universel.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrM4aToMp3Page() {
  return (
    <ConverterPageLayout
      locale="fr"
      mode="converter" from="m4a" to="mp3" currentHref="/fr/m4a-to-mp3"
      badge="M4A → MP3 · Gratuit · Audio Apple"
      h1First="M4A vers MP3"
      h1Second="Convertisseur gratuit pour l’audio de l’écosystème Apple"
      subtitle="Déposez un mémo vocal iPhone, un rebond GarageBand ou un export Apple Podcasts et obtenez un MP3 universel pour les hôtes de podcast, les anciens téléphones Android et les lecteurs hérités."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stéréo"
      stepsTitle="Comment fonctionne la conversion de M4A en MP3"
      steps={[
        { icon: 'upload',   title: 'Déposez le M4A',        desc: 'Des mémos vocaux, GarageBand, Apple Podcasts. Jusqu’à 25 Mo anonymement.' },
        { icon: 'waveform', title: 'Nous décodons et encodons', desc: 'ffmpeg décode l’AAC à l’intérieur du conteneur M4A et réencode en MP3 à 128 kbps.' },
        { icon: 'download', title: 'Téléchargez le MP3',    desc: 'Obtenez un MP3 compatible avec la plupart des lecteurs et éditeurs audio actuels.' },
      ]}
      previewInputName="voice-memo.m4a"
      previewInputSize="6,2 Mo · 00:12:04"
      previewOutputName="voice-memo.mp3"
      previewOutputSize="00:12:04 · 128 kbps · 11,5 Mo"
      whyTitle="Pourquoi utiliser Mictoo pour M4A vers MP3 ?"
      whyCards={[
        { icon: 'target',   title: 'Compatible iPhone',        desc: 'Les mémos vocaux iPhone au format .m4a se déposent directement, aucun renommage nécessaire.' },
        { icon: 'fileAudio',title: 'MP3 pour les hôtes hérités',   desc: 'Certains hôtes de podcast et anciens appareils Android préfèrent encore le MP3 au M4A.' },
        { icon: 'lock',     title: 'Fichiers supprimés après',    desc: 'Le M4A téléchargé est supprimé après conversion ; le MP3 est purgé dans l’heure.' },
        { icon: 'shield',   title: 'Pas de filigrane ni de balise',    desc: 'Juste l’audio, réencodé. Pas d’intro de marque, pas de métadonnées injectées.' },
      ]}
      scenariosTitle="Quand M4A vers MP3 est utile"
      scenarios={[
        { icon: 'headphones', title: 'Mémo vocal iPhone' },
        { icon: 'waveform',   title: 'Rebond GarageBand' },
        { icon: 'mail',       title: 'Hôte de podcast hérité' },
        { icon: 'archive',    title: 'Format de bibliothèque cohérent' },
        { icon: 'editPen',    title: 'Importation DAW ancienne' },
        { icon: 'video',      title: 'Éditeur vidéo non-Apple' },
      ]}
      tipsTitle="Conseils pour une conversion propre de M4A en MP3"
      tips={[
        'Si votre plateforme accepte le M4A, vous n’avez peut-être pas besoin de convertir.',
        'Les deux formats sont avec perte ; la réencodage ajoute une petite perte de qualité.',
        'Les métadonnées ID3 et iTunes ne sont pas transférées.',
        'Pour la transcription, téléchargez le M4A directement sur /fr/m4a-to-text.',
      ]}
      processTitle="Que se passe-t-il pendant la conversion"
      processSteps={['M4A (conteneur MP4)', 'Décodage AAC', 'Encodage MP3']}
      compareTitle="M4A vs MP3"
      compareRows={[
        { fmt: 'M4A', contains: 'Non', size: 'Petit (efficace)', best: 'Écosystème Apple, appareils modernes' },
        { fmt: 'MP3', contains: 'Non', size: 'Petit',             best: 'Universel, lecteurs hérités, hôtes anciens' },
      ]}
      faq={[
        { q: 'Dois-je convertir M4A en MP3 ?', a: 'Seulement si un outil ou un hôte spécifique nécessite le MP3. La plupart des appareils modernes (y compris tous les Android et Windows en 2026) lisent le M4A nativement.' },
        { q: 'Le convertisseur est-il gratuit ?', a: 'Oui. Les fichiers jusqu’à 25 Mo peuvent être convertis sans compte, et la sortie n’a pas de filigrane.' },
        { q: 'Vais-je perdre de la qualité ?', a: 'M4A et MP3 sont tous deux avec perte. La réencodage ajoute une petite perte mais est inaudible pour une écoute typique.' },
        { q: 'Le format natif des mémos vocaux iPhone fonctionne-t-il ?', a: 'Oui. Les mémos vocaux iPhone écrivent un standard .m4a qui se dépose directement.' },
        { q: 'Les fichiers sont-ils stockés ?', a: 'Non. Le M4A téléchargé est supprimé après conversion ; le MP3 est purgé dans l’heure.' },
      ]}
      ctaHeadline="Convertissez votre M4A en MP3 maintenant"
      ctaSubtitle="Déposez votre mémo vocal iPhone ou audio Apple et obtenez un MP3 portable."
      ctaButton="Choisissez un fichier M4A"
      moreTools={[
        { href: '/fr/aac-to-mp3',  label: 'AAC vers MP3' },
        { href: '/fr/mp4-to-mp3',  label: 'MP4 vers MP3' },
        { href: '/fr/mp3-to-m4a',  label: 'MP3 vers M4A' },
        { href: '/fr/m4a-to-text', label: 'M4A vers Texte' },
      ]}
    />
  )
}