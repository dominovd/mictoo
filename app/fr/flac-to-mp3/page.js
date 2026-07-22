import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLAC vers MP3, convertisseur en ligne gratuit | Mictoo',
  description:
    'Convertissez FLAC en MP3 gratuitement en ligne. Réduisez le FLAC sans perte à 128 kbps MP3 en quelques secondes. Pas d’inscription, pas de filigrane. Jusqu’à 25 Mo.',
  alternates: { canonical: 'https://mictoo.com/fr/flac-to-mp3', languages: LANGS },
  openGraph: {
    title: 'FLAC vers MP3, convertisseur en ligne gratuit | Mictoo',
    description: 'Réduisez le FLAC sans perte à 128 kbps MP3. Pas d’inscription.',
    url: 'https://mictoo.com/fr/flac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLAC vers MP3, convertisseur en ligne gratuit',
    description: 'Réduisez le FLAC sans perte en MP3 portable.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrFlacToMp3Page() {
  return (
    <ConverterPageLayout
      locale="fr"
      mode="converter" from="flac" to="mp3" currentHref="/fr/flac-to-mp3"
      badge="FLAC → MP3 · Gratuit · Pas d’inscription"
      h1First="FLAC vers MP3"
      h1Second="Convertisseur en ligne gratuit"
      subtitle="Déposez un fichier FLAC sans perte (d’un rip de CD, d’un téléchargement Tidal, ou d’une source haute résolution) et obtenez un MP3 portable à 128 kbps en quelques secondes."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stéréo"
      stepsTitle="Comment fonctionne la conversion FLAC vers MP3"
      steps={[
        { icon: 'upload',   title: 'Déposez le FLAC',       desc: 'Tout FLAC (natif ou FLAC-in-OGG). Jusqu’à 25 Mo de manière anonyme.' },
        { icon: 'waveform', title: 'Nous décodons et encodons', desc: 'ffmpeg décode le FLAC sans perte et le réencode en MP3 stéréo à 128 kbps.' },
        { icon: 'download', title: 'Téléchargez le MP3',    desc: 'Obtenez votre MP3 5 à 8 fois plus petit, prêt pour n’importe quel lecteur.' },
      ]}
      previewInputName="album-track.flac"
      previewInputSize="42 Mo · 00:05:12 · 16 bits / 44,1 kHz"
      previewOutputName="album-track.mp3"
      previewOutputSize="00:05:12 · 128 kbps · 4,8 Mo"
      whyTitle="Pourquoi utiliser Mictoo pour FLAC vers MP3 ?"
      whyCards={[
        { icon: 'target',    title: 'Conserve le master sans perte', desc: 'Votre fichier FLAC n’est jamais modifié. Nous produisons seulement une copie.' },
        { icon: 'fileAudio', title: 'Copie d’écoute plus petite',    desc: 'Un MP3 à 128 kbps est souvent plusieurs fois plus petit que le FLAC. La conversion est avec perte, donc gardez le FLAC comme votre master.' },
        { icon: 'lock',      title: 'Fichiers supprimés après',       desc: 'Le FLAC téléchargé est supprimé après conversion ; le MP3 est purgé dans l’heure.' },
        { icon: 'shield',    title: 'Pas de filigrane ni de balise',       desc: 'Juste l’audio, réencodé. Pas de splice d’intro, pas de métadonnées brandées.' },
      ]}
      scenariosTitle="Quand FLAC vers MP3 est utile"
      scenarios={[
        { icon: 'headphones', title: 'Rip de CD pour téléphone' },
        { icon: 'mail',       title: 'Envoyer un fichier plus petit par email' },
        { icon: 'archive',    title: 'Bibliothèque musicale portable' },
        { icon: 'editPen',    title: 'Importation DAW' },
        { icon: 'waveform',   title: 'Copie d’écoute de podcast' },
        { icon: 'video',      title: 'Bande sonore de vidéo' },
      ]}
      tipsTitle="Conseils pour une conversion FLAC vers MP3 propre"
      tips={[
        'Gardez le FLAC comme la copie d’archive sans perte.',
        '128 kbps est transparent pour la plupart des écoutes.',
        'Pour les pistes de plus de 25 Mo, coupez ou divisez la source avant de télécharger.',
        'Les balises de métadonnées Vorbis (titre/artiste) ne sont pas transférées dans le MP3.',
      ]}
      processTitle="Que se passe-t-il pendant la conversion"
      processSteps={['Conteneur FLAC', 'Décodage sans perte', 'Encodage MP3']}
      compareTitle="FLAC vs MP3"
      compareRows={[
        { fmt: 'FLAC', contains: 'Non', size: 'Grand (~5-8 Mo/min)', best: 'Archivage, lecture hi-fi' },
        { fmt: 'MP3',  contains: 'Non', size: 'Petit (~1 Mo/min)',   best: 'Partage, téléphones, partout' },
      ]}
      faq={[
        { q: 'Le convertisseur FLAC vers MP3 est-il gratuit ?', a: 'Oui. Les fichiers jusqu’à 25 Mo peuvent être convertis sans compte, et la sortie n’a pas de filigrane.' },
        { q: 'Perds-je de la qualité en convertissant FLAC en MP3 ?', a: 'Techniquement oui (MP3 est avec perte), mais à 128 kbps la perte est inaudible pour une écoute typique. Gardez le FLAC comme copie d’archive.' },
        { q: 'Les fichiers FLAC-in-OGG sont-ils supportés ?', a: 'Oui. Les FLAC natifs (octets magiques fLaC) et les FLAC dans des conteneurs OGG fonctionnent.' },
        { q: 'Les fichiers sont-ils stockés ?', a: 'Non. Le FLAC téléchargé est supprimé après conversion ; le MP3 est purgé dans l’heure.' },
        { q: 'Mon FLAC fait plus de 25 Mo. Que faire ?', a: 'Coupez ou divisez la source, ou exportez une copie d’écoute à plus basse résolution avant de télécharger.' },
      ]}
      ctaHeadline="Convertissez votre FLAC en MP3 maintenant"
      ctaSubtitle="Déposez votre FLAC et obtenez un MP3 portable en quelques secondes. Pas d’inscription. Pas de filigrane."
      ctaButton="Choisissez un fichier FLAC"
      moreTools={[
        { href: '/fr/wav-to-mp3',  label: 'WAV vers MP3' },
        { href: '/fr/mp4-to-mp3',  label: 'MP4 vers MP3' },
        { href: '/fr/webm-to-mp3', label: 'WEBM vers MP3' },
        { href: '/fr/flac-to-text', label: 'FLAC vers Texte' },
      ]}
    />
  )
}