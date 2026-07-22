import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'pl': 'https://mictoo.com/pl/free-srt-generator',
  'ja': 'https://mictoo.com/ja/free-srt-generator',
  'ko': 'https://mictoo.com/ko/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'Générateur de SRT gratuit : Créez des fichiers de sous-titres SRT en ligne à partir d’audio ou de vidéo | Mictoo',
  description:
    'Générez des fichiers de sous-titres SRT propres à partir de n’importe quel audio ou vidéo. Horodatages de qualité Whisper, prêts pour YouTube, Premiere, Final Cut, DaVinci Resolve, CapCut. Gratuit, sans inscription.',
  alternates: {
    canonical: 'https://mictoo.com/fr/free-srt-generator',
    languages: LANGS,
  },
  openGraph: {
    title: 'Générateur de SRT gratuit | Mictoo',
    description: 'Générez des fichiers de sous-titres SRT à partir d’audio ou de vidéo. Prêt pour YouTube, Premiere, Final Cut.',
    url: 'https://mictoo.com/fr/free-srt-generator',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Générateur de SRT gratuit',
    description: 'Sous-titres SRT de qualité Whisper à partir d’audio ou de vidéo.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrFreeSrtGeneratorPage() {
  return (
    <ConverterPageLayout
      locale="fr"
      mode="upload" currentHref="/fr/free-srt-generator"
      badge="SRT · Audio ou vidéo · Gratuit"
      h1First="Générateur de SRT gratuit"
      h1Second="Sous-titres de qualité Whisper à partir de n’importe quel audio ou vidéo"
      subtitle="Téléchargez un audio ou une vidéo, obtenez un fichier de sous-titres SRT prêt pour YouTube, Premiere, Final Cut, DaVinci Resolve ou CapCut. Pas d’inscription, pas de frais par minute."
      stepsTitle="Comment fonctionne la génération de SRT"
      steps={[
        { icon: 'upload',   title: 'Déposez l’audio ou la vidéo', desc: 'MP3, MP4, WAV, M4A, WEBM, FLAC et plus. Jusqu’à 25 MB anonymement, 180 MB connecté.' },
        { icon: 'waveform', title: 'Whisper transcrit', desc: 'Whisper large-v3 produit des horodatages par segment alignés à l’audio original.' },
        { icon: 'download', title: 'Téléchargez le SRT',        desc: 'Exports SRT et VTT inclus. Intégrez dans votre éditeur vidéo ou téléchargez sur YouTube.' },
      ]}
      whyTitle="Pourquoi utiliser Mictoo pour la génération de SRT ?"
      whyCards={[
        { icon: 'target',   title: 'Sous-titres multilingues précis', desc: 'Whisper large-v3 ajoute de la ponctuation et gère de nombreuses langues, accents et types d’enregistrements.' },
        { icon: 'captions', title: 'SRT + VTT inclus',                desc: 'Les deux formats de sous-titres sont générés automatiquement. VTT pour les lecteurs web, SRT pour les éditeurs.' },
        { icon: 'lock',     title: 'Fichiers supprimés après',               desc: 'L’audio téléchargé est supprimé après transcription ; la transcription persiste uniquement sur les comptes connectés.' },
        { icon: 'shield',   title: 'Pas de filigrane ni de tag',               desc: 'SRT propre sans introduction de marque ou tag "Fait avec X".' },
      ]}
      scenariosTitle="Quand la génération de SRT est utile"
      scenarios={[
        { icon: 'video',      title: 'Sous-titres pour téléchargement YouTube' },
        { icon: 'editPen',    title: 'Importation dans Premiere / DaVinci' },
        { icon: 'headphones', title: 'Version vidéo de podcast' },
        { icon: 'mail',       title: 'Copie pour révision client' },
        { icon: 'archive',    title: 'Archive d’accessibilité' },
        { icon: 'target',     title: 'Sous-titres en langue étrangère' },
      ]}
      tipsTitle="Conseils pour des sous-titres plus clairs"
      tips={[
        'Pour les fichiers de plus de 25 MB, connectez-vous pour des téléchargements auto-split jusqu’à 180 MB.',
        'Définissez la langue explicitement pour le contenu non anglais ou technique.',
        'Vérifiez les noms et les termes inhabituels en mode Éditeur avant l’exportation.',
        'Traduisez d’abord la transcription, puis exportez le SRT pour les sous-titres étrangers.',
      ]}
      processTitle="Que se passe-t-il pendant la génération"
      processSteps={['Audio / vidéo', 'Transcription Whisper', 'Export SRT + VTT']}
      faq={[
        { q: 'Le générateur de SRT est-il gratuit ?', a: 'Oui. Jusqu’à 25 MB anonymement ou 180 MB lorsque connecté. Pas de filigrane sur le SRT et pas de frais par minute.' },
        { q: 'Quels formats de sous-titres puis-je obtenir ?', a: 'SRT et VTT sont tous deux inclus. TXT (texte brut) et DOCX sont également disponibles. Les utilisateurs connectés obtiennent en plus PDF et JSON.' },
        { q: 'Quelle est la précision des horodatages ?', a: 'Whisper large-v3 fournit des horodatages par segment alignés à l’audio original. Assez précis pour les sous-titres YouTube et la plupart des cas d’utilisation en montage vidéo.' },
        { q: 'Identifiez-vous les intervenants (diarisation) ?', a: 'Pas encore. Sous-titres continus avec horodatages mais sans étiquettes de locuteur. La diarisation est sur la feuille de route Pro.' },
        { q: 'Mictoo transcrit-il l’audio non anglais ?', a: 'Oui. Whisper large-v3 prend en charge plus de 50 langues avec détection automatique. Définissez la langue explicitement pour de meilleurs résultats.' },
        { q: 'Les enregistrements sont-ils conservés sur vos serveurs ?', a: 'Non. L’audio est transmis au fournisseur de transcription, traité une fois, puis supprimé. Les transcriptions persistent uniquement sur les comptes connectés.' },
      ]}
      ctaHeadline="Générez des sous-titres SRT à partir de tout enregistrement"
      ctaSubtitle="YouTube, Premiere, Final Cut, DaVinci, CapCut. Horodatages de qualité Whisper."
      ctaButton="Téléchargez audio ou vidéo"
      moreTools={[
        { href: '/fr/timestamped-transcription', label: 'Transcription horodatée' },
        { href: '/fr/youtube-to-text',           label: 'YouTube vers texte' },
        { href: '/fr/transcribe-video-to-text',  label: 'Vidéo vers texte' },
        { href: '/fr/transcribe-audio-to-text',  label: 'Audio vers texte' },
      ]}
    />
  )
}