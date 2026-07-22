import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp4-to-mp3',
  'fr': 'https://mictoo.com/fr/mp4-to-mp3',
  'de': 'https://mictoo.com/de/mp4-to-mp3',
  'es': 'https://mictoo.com/es/mp4-to-mp3',
  'ru': 'https://mictoo.com/ru/mp4-to-mp3',
  'it': 'https://mictoo.com/it/mp4-to-mp3',
  'pt': 'https://mictoo.com/pt/mp4-to-mp3',
  'pl': 'https://mictoo.com/pl/mp4-to-mp3',
  'ja': 'https://mictoo.com/ja/mp4-to-mp3',
  'ko': 'https://mictoo.com/ko/mp4-to-mp3',
  'x-default': 'https://mictoo.com/mp4-to-mp3',
}

export const metadata = {
  title: 'MP4 en MP3, convertisseur en ligne gratuit | Mictoo',
  description:
    'Convertissez MP4 en MP3 gratuitement en ligne. Déposez votre vidéo, obtenez un fichier audio MP3 propre à 128 kbps en quelques secondes. Pas d’inscription, pas de filigrane, pas d’email. Jusqu’à 25 Mo.',
  alternates: { canonical: 'https://mictoo.com/fr/mp4-to-mp3', languages: LANGS },
  openGraph: {
    title: 'MP4 en MP3, convertisseur en ligne gratuit | Mictoo',
    description: 'Convertissez MP4 en MP3 gratuitement en ligne. 128 kbps, pas d’inscription, pas de filigrane.',
    url: 'https://mictoo.com/fr/mp4-to-mp3',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP4 en MP3, convertisseur en ligne gratuit',
    description: 'Convertissez MP4 en MP3 gratuitement en ligne. 128 kbps, pas d’inscription, pas de filigrane.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrMp4ToMp3Page() {
  return (
    <ConverterPageLayout
      locale="fr"
      mode="converter"
      from="mp4"
      to="mp3"
      currentHref="/fr/mp4-to-mp3"

      badge="MP4 → MP3 · Gratuit · Pas d’inscription"
      h1First="MP4 en MP3"
      h1Second="Convertisseur en ligne gratuit"
      subtitle="Déposez une vidéo MP4 et obtenez un fichier audio MP3 propre en quelques secondes. Pas de filigrane, pas d’email, pas d’attente."

      outputFormat="MP3"
      outputQuality="128 kbps"
      outputAudio="Stéréo"

      stepsTitle="Comment fonctionne la conversion MP4 en MP3"
      steps={[
        {
          icon: 'upload',
          title: 'Déposez le MP4',
          desc: 'Téléchargez votre vidéo MP4. Nous acceptons des fichiers jusqu’à 25 Mo.',
        },
        {
          icon: 'waveform',
          title: 'Nous extrayons l’audio',
          desc: 'Notre serveur extrait la piste audio et l’encode en MP3.',
        },
        {
          icon: 'download',
          title: 'Téléchargez le MP3',
          desc: 'Obtenez votre fichier MP3 propre en quelques secondes.',
        },
      ]}

      previewInputName="enregistrement-de-réunion.mp4"
      previewInputSize="128,4 Mo · 00:45:32"
      previewOutputName="enregistrement-de-réunion.mp3"
      previewOutputSize="00:45:32 · 128 kbps"

      whyTitle="Pourquoi utiliser Mictoo pour MP4 en MP3 ?"
      whyCards={[
        {
          icon: 'target',
          title: 'Juste la conversion',
          desc: 'Nous nous concentrons sur une seule chose : convertir MP4 en MP3 rapidement et de manière fiable.',
        },
        {
          icon: 'fileAudio',
          title: 'MP3 petit et universel',
          desc: 'Le MP3 fonctionne partout et garde les tailles de fichiers petites.',
        },
        {
          icon: 'lock',
          title: 'Les fichiers sont supprimés',
          desc: 'Vos téléchargements sont traités en toute sécurité et supprimés après conversion.',
        },
        {
          icon: 'shield',
          title: 'Pas de filigrane ni de balise audio',
          desc: 'Obtenez un MP3 propre sans filigrane ni balises ajoutées.',
        },
      ]}

      scenariosTitle="Quand MP4 en MP3 est utile"
      scenarios={[
        { icon: 'headphones', title: 'Sauvegarder un podcast vidéo' },
        { icon: 'cap',        title: 'Extraire l’audio d’un cours' },
        { icon: 'mail',       title: 'Envoyer un fichier plus petit' },
        { icon: 'editPen',    title: 'Préparer pour la transcription' },
        { icon: 'waveform',   title: 'Audio de fond' },
        { icon: 'archive',    title: 'Archiver des enregistrements vocaux' },
      ]}

      tipsTitle="Conseils pour une conversion propre"
      tips={[
        'Coupez d’abord les vidéos énormes.',
        '128 kbps fonctionne pour la voix et la musique.',
        'La piste audio par défaut est utilisée.',
        'Les vidéos protégées par DRM ne sont pas prises en charge.',
      ]}
      processTitle="Que se passe-t-il pendant la conversion"
      processSteps={[
        'Conteneur MP4',
        'Extraction de la piste audio',
        'Encodage MP3',
      ]}

      compareTitle="MP4 vs MP3"
      compareRows={[
        { fmt: 'MP4', contains: 'Oui', size: 'Grand', best: 'Regarder, partager des vidéos' },
        { fmt: 'MP3', contains: 'Non',  size: 'Petit', best: 'Écouter, audio uniquement' },
      ]}

      faq={[
        { q: 'Le convertisseur MP4 en MP3 est-il gratuit ?', a: 'Oui. Aucun compte nécessaire pour des fichiers jusqu’à 25 Mo, pas de limite de temps, pas de filigrane sur la sortie, pas de demandes de mise à niveau. Les publicités affichées sur les pages marketing couvrent les coûts du serveur.' },
        { q: 'La conversion réduit-elle la qualité audio ?', a: 'Légèrement. Le MP3 est un format avec perte, mais à 128 kbps, la perte de qualité est inaudible pour la voix et la lecture musicale typique. Si vous avez besoin de sans perte, convertissez en WAV à la place.' },
        { q: 'Les fichiers téléchargés sont-ils stockés ?', a: 'Non. Votre MP4 atterrit sur le stockage Vercel Blob juste assez longtemps pour être converti, puis il est supprimé. Le MP3 résultant est purgé dans l’heure. Enregistrez le MP3 localement.' },
        { q: 'Puis-je convertir un MP4 volumineux ?', a: 'La limite de téléchargement actuelle est de 25 Mo. Si votre MP4 est plus grand, coupez-le dans QuickTime, l’application Photos ou un autre éditeur vidéo avant de le télécharger.' },
        { q: 'Cela fonctionne-t-il sur mobile ?', a: 'Oui. La page est adaptée aux mobiles et les téléchargements fonctionnent depuis iOS Safari et Android Chrome. Sur iPhone, partagez d’abord la vidéo vers Fichiers afin que le sélecteur puisse y accéder.' },
      ]}

      ctaHeadline="Convertissez votre MP4 en MP3 maintenant"
      ctaSubtitle="Déposez votre vidéo et obtenez un MP3 propre en quelques secondes. Pas d’inscription. Pas de filigrane."
      ctaButton="Choisir un fichier MP4"

      moreTools={[
        { href: '/fr/wav-to-mp3',  label: 'WAV en MP3' },
        { href: '/fr/webm-to-mp3', label: 'WEBM en MP3' },
        { href: '/fr/flac-to-mp3', label: 'FLAC en MP3' },
        { href: '/fr/aac-to-mp3',  label: 'AAC en MP3' },
        { href: '/fr/m4a-to-mp3',  label: 'M4A en MP3' },
        { href: '/fr/mp3-to-wav',  label: 'MP3 en WAV' },
      ]}
    />
  )
}