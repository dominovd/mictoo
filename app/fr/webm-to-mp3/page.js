import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-mp3',
  'fr': 'https://mictoo.com/fr/webm-to-mp3',
  'de': 'https://mictoo.com/de/webm-to-mp3',
  'es': 'https://mictoo.com/es/webm-to-mp3',
  'ru': 'https://mictoo.com/ru/webm-to-mp3',
  'it': 'https://mictoo.com/it/webm-to-mp3',
  'pt': 'https://mictoo.com/pt/webm-to-mp3',
  'pl': 'https://mictoo.com/pl/webm-to-mp3',
  'ja': 'https://mictoo.com/ja/webm-to-mp3',
  'ko': 'https://mictoo.com/ko/webm-to-mp3',
  'x-default': 'https://mictoo.com/webm-to-mp3',
}

export const metadata = {
  title: 'WEBM en MP3, convertisseur en ligne gratuit | Mictoo',
  description:
    'Convertissez WEBM en MP3 gratuitement en ligne. Extraire l’audio MP3 de n’importe quel fichier vidéo ou audio WEBM en quelques secondes. Pas d’inscription, pas de filigrane. Jusqu’à 25 Mo.',
  alternates: { canonical: 'https://mictoo.com/fr/webm-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WEBM en MP3, convertisseur en ligne gratuit | Mictoo',
    description: 'Extraire MP3 de n’importe quel WEBM. Pas d’inscription, pas de filigrane.',
    url: 'https://mictoo.com/fr/webm-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEBM en MP3, convertisseur en ligne gratuit',
    description: 'Extraire MP3 de n’importe quel WEBM.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrWebmToMp3Page() {
  return (
    <ConverterPageLayout
      locale="fr"
      mode="converter" from="webm" to="mp3" currentHref="/fr/webm-to-mp3"
      badge="WEBM → MP3 · Gratuit · Pas d’inscription"
      h1First="WEBM en MP3"
      h1Second="Convertisseur en ligne gratuit"
      subtitle="Déposez un WEBM (de Loom, OBS, enregistrement Firefox, ou un téléchargeur YouTube) et obtenez un MP3 propre en quelques secondes. Pas de filigrane, pas d’email."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stéréo"
      stepsTitle="Comment fonctionne la conversion WEBM en MP3"
      steps={[
        { icon: 'upload',   title: 'Déposez le WEBM',   desc: 'Vidéo ou audio uniquement WEBM, les deux fonctionnent. Jusqu’à 25 Mo anonymement.' },
        { icon: 'waveform', title: 'Nous démuxons et encodons', desc: 'ffmpeg supprime la piste vidéo (s’il y en a une) et réencode l’audio Opus ou Vorbis en MP3 à 128 kbps.' },
        { icon: 'download', title: 'Téléchargez le MP3', desc: 'Obtenez votre MP3 propre en quelques secondes. Nom de fichier original avec l’extension .mp3.' },
      ]}
      previewInputName="loom-walkthrough.webm"
      previewInputSize="72 Mo · 00:08:12"
      previewOutputName="loom-walkthrough.mp3"
      previewOutputSize="00:08:12 · 128 kbps · 7,5 Mo"
      whyTitle="Pourquoi utiliser Mictoo pour WEBM en MP3 ?"
      whyCards={[
        { icon: 'target',   title: 'Gère Opus et Vorbis', desc: 'Les deux codecs audio WEBM fonctionnent directement, pas de reconditionnement manuel.' },
        { icon: 'video',    title: 'Vidéo dans WEBM gérée',   desc: 'Nous démuxons la piste vidéo côté serveur. Vous n’avez jamais besoin d’extraire l’audio vous-même.' },
        { icon: 'lock',     title: 'Fichiers supprimés après',     desc: 'Le WEBM téléchargé est supprimé après conversion ; le MP3 est purgé dans l’heure.' },
        { icon: 'shield',   title: 'Pas de filigrane ni de balise',     desc: 'Le MP3 de sortie n’a pas de splice d’intro, pas de métadonnées de marque.' },
      ]}
      scenariosTitle="Quand WEBM en MP3 est utile"
      scenarios={[
        { icon: 'video',      title: 'Présentation Loom' },
        { icon: 'headphones', title: 'Sortie de téléchargeur YouTube' },
        { icon: 'mail',       title: 'Envoyer un fichier plus petit' },
        { icon: 'editPen',    title: 'Préparer pour la transcription' },
        { icon: 'waveform',   title: 'Enregistrement dans le navigateur' },
        { icon: 'archive',    title: 'Archiver uniquement l’audio' },
      ]}
      tipsTitle="Conseils pour une conversion WEBM en MP3 propre"
      tips={[
        'Le WEBM vidéo est automatiquement démuxé, pas besoin de le supprimer d’abord.',
        'Pour les enregistrements de plus de 25 Mo, coupez ou divisez la source avant de télécharger.',
        'La piste audio par défaut est utilisée si plusieurs existent.',
        'Pour la transcription Whisper, téléchargez le WEBM directement sur /webm-to-text.',
      ]}
      processTitle="Que se passe-t-il pendant la conversion"
      processSteps={['Conteneur WEBM', 'Extraction de la piste audio', 'Encodage MP3']}
      compareTitle="WEBM vs MP3"
      compareRows={[
        { fmt: 'WEBM', contains: 'Souvent oui', size: 'Moyen-grand', best: 'Enregistrement Web, vidéo de navigateur' },
        { fmt: 'MP3',  contains: 'Non',        size: 'Petit',        best: 'Partage, lecture, partout' },
      ]}
      faq={[
        { q: 'Le convertisseur WEBM en MP3 est-il gratuit ?', a: 'Oui. Les fichiers jusqu’à 25 Mo peuvent être convertis sans compte, et la sortie n’a pas de filigrane.' },
        { q: 'Que faire si mon WEBM a une vidéo ?', a: 'Nous démuxons la piste vidéo côté serveur et n’encodeons que l’audio. Vous n’avez pas besoin de pré-supprimer quoi que ce soit.' },
        { q: 'Quels codecs audio WEBM fonctionnent ?', a: 'Opus (moderne, le plus courant) et Vorbis (plus ancien). Les deux sont pris en charge directement.' },
        { q: 'Les fichiers téléchargés sont-ils stockés ?', a: 'Non. Le WEBM est supprimé après conversion ; le MP3 est purgé dans l’heure.' },
        { q: 'Mon WEBM fait plus de 25 Mo. Que faire ?', a: 'Coupez la source avant de télécharger, ou extrayez d’abord un WEBM uniquement audio pour réduire la taille du fichier.' },
      ]}
      ctaHeadline="Convertissez votre WEBM en MP3 maintenant"
      ctaSubtitle="Déposez votre WEBM et obtenez un MP3 propre en quelques secondes. Pas d’inscription. Pas de filigrane."
      ctaButton="Choisissez un fichier WEBM"
      moreTools={[
        { href: '/fr/mp4-to-mp3',  label: 'MP4 en MP3' },
        { href: '/fr/wav-to-mp3',  label: 'WAV en MP3' },
        { href: '/fr/flac-to-mp3', label: 'FLAC en MP3' },
        { href: '/fr/webm-to-text', label: 'WEBM en texte' },
      ]}
    />
  )
}