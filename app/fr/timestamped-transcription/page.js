import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'ja': 'https://mictoo.com/ja/timestamped-transcription',
  'ko': 'https://mictoo.com/ko/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'Transcription horodatée : Générateur de transcriptions codées par le temps gratuit | Mictoo',
  description:
    'Transcription horodatée gratuite avec des codes temporels au niveau des segments pour l’audio ou la vidéo. Utile pour le journalisme, la recherche, le podcasting et le montage vidéo.',
  alternates: {
    canonical: 'https://mictoo.com/fr/timestamped-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcription horodatée : Générateur de transcriptions codées par le temps gratuit | Mictoo',
    description: 'Horodatages au niveau des phrases pour tout audio ou vidéo.',
    url: 'https://mictoo.com/fr/timestamped-transcription',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcription horodatée : Gratuit',
    description: 'Transcriptions codées par le temps pour le journalisme, la recherche, le montage.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrTimestampedTranscriptionPage() {
  return (
    <ConverterPageLayout
      locale="fr"
      mode="upload" currentHref="/fr/timestamped-transcription"
      badge="Horodaté · Audio ou vidéo · Gratuit"
      h1First="Transcription horodatée"
      h1Second="Transcriptions codées par le temps pour le journalisme, la recherche, le montage"
      subtitle="Téléchargez de l’audio ou de la vidéo et obtenez une transcription avec des horodatages par segment. Cliquez sur n’importe quel horodatage pour sauter à ce moment dans le lecteur audio. Gratuit, sans inscription."
      stepsTitle="Comment fonctionne la transcription horodatée"
      steps={[
        { icon: 'upload',   title: 'Déposez de l’audio ou de la vidéo',       desc: 'MP3, MP4, WAV, M4A, WEBM, FLAC et plus. Jusqu’à 25 MB anonymement ou 180 MB connecté.' },
        { icon: 'waveform', title: 'Whisper horodatage des segments', desc: 'Whisper large-v3 fournit des horodatages par segment alignés à l’audio original.' },
        { icon: 'download', title: 'Exporter avec horodatages',      desc: 'TXT avec horodatages intégrés, SRT / VTT pour sous-titres, DOCX pour révision.' },
      ]}
      whyTitle="Pourquoi utiliser Mictoo pour des transcriptions horodatées ?"
      whyCards={[
        { icon: 'clock',    title: 'Horodatages cliquables',   desc: 'Chaque horodatage est cliquable dans la vue Lecteur. Sauter à n’importe quel moment dans le lecteur audio.' },
        { icon: 'target',   title: 'Transcription de qualité Whisper', desc: 'Whisper large-v3 ajoute de la ponctuation et gère de nombreuses langues, accents et types d’enregistrement.' },
        { icon: 'captions', title: 'SRT + VTT inclus',         desc: 'Les horodatages sont inclus dans les exportations SRT et VTT pour le sous-titrage vidéo.' },
        { icon: 'lock',     title: 'Fichiers supprimés après',        desc: 'L’audio téléchargé est supprimé après transcription ; la transcription persiste uniquement sur les comptes connectés.' },
      ]}
      scenariosTitle="Quand les transcriptions horodatées sont utiles"
      scenarios={[
        { icon: 'editPen',    title: 'Chasse aux citations en journalisme' },
        { icon: 'target',     title: 'Citation en recherche UX' },
        { icon: 'video',      title: 'Liste de repères pour le montage vidéo' },
        { icon: 'headphones', title: 'Notes de spectacle de podcast' },
        { icon: 'archive',    title: 'Légal / découverte' },
        { icon: 'waveform',   title: 'Marquage audio' },
      ]}
      tipsTitle="Conseils pour un output horodaté plus propre"
      tips={[
        'La vue Lecteur est la meilleure pour la navigation cliquable.',
        'Pour l’export SRT / VTT, les horodatages s’alignent sur la chronologie du fichier original.',
        'Pour les enregistrements longs, connectez-vous pour un découpage automatique jusqu’à environ 3 heures.',
        'La barre de recherche met en surbrillance les correspondances et montre leur horodatage instantanément.',
      ]}
      processTitle="Que se passe-t-il pendant la transcription"
      processSteps={['Audio / vidéo', 'Whisper large-v3', 'Texte horodaté']}
      faq={[
        { q: 'Quelle est la granularité des horodatages ?', a: 'Par segment (environ par phrase). Whisper produit nativement des horodatages au niveau des segments alignés à l’audio.' },
        { q: 'Puis-je cliquer sur un horodatage pour sauter dans l’audio ?', a: 'Oui. Dans la vue Lecteur, chaque horodatage est cliquable et fait défiler le lecteur audio à ce moment.' },
        { q: 'L’outil est-il gratuit ?', a: 'Oui. Jusqu’à 25 MB anonymement ou 180 MB lorsque connecté. Pas de filigrane et pas de frais par minute.' },
        { q: 'Quels formats d’exportation sont pris en charge ?', a: 'TXT (avec horodatages intégrés), SRT, VTT, DOCX. Les utilisateurs connectés obtiennent également PDF et JSON avec des données d’horodatage structurées.' },
        { q: 'Identifiez-vous les intervenants ?', a: 'Pas encore. Texte horodaté continu sans étiquettes de locuteur. La diarisation est sur la feuille de route Pro.' },
        { q: 'Les enregistrements sont-ils conservés sur vos serveurs ?', a: 'Non. L’audio est transmis au fournisseur de transcription, traité une fois, puis supprimé. Les transcriptions persistent uniquement sur les comptes connectés.' },
      ]}
      ctaHeadline="Obtenez une transcription horodatée cliquable"
      ctaSubtitle="Journalisme, recherche UX, montage vidéo, notes de spectacle de podcast. Gratuit par fichier."
      ctaButton="Téléchargez de l’audio ou de la vidéo"
      moreTools={[
        { href: '/fr/free-srt-generator',       label: 'Générateur SRT' },
        { href: '/fr/youtube-to-text',          label: 'YouTube vers texte' },
        { href: '/fr/transcribe-audio-to-text', label: 'Audio vers texte' },
        { href: '/fr/transcribe-video-to-text', label: 'Vidéo vers texte' },
      ]}
    />
  )
}