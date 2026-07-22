import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'it': 'https://mictoo.com/it/lecture-transcription',
  'pt': 'https://mictoo.com/pt/lecture-transcription',
  'pl': 'https://mictoo.com/pl/lecture-transcription',
  'ja': 'https://mictoo.com/ja/lecture-transcription',
  'ko': 'https://mictoo.com/ko/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: 'Transcription de cours et séminaires | Mictoo',
  description:
    'Téléchargez un cours, une conférence ou un séminaire enregistré et obtenez un texte consultable, des horodatages, un résumé AI et des fichiers d’exportation.',
  alternates: {
    canonical: 'https://mictoo.com/fr/lecture-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcription de cours : Générateur de transcriptions gratuit | Mictoo',
    description: 'Téléchargez votre cours ou séminaire enregistré et obtenez un texte propre en quelques secondes.',
    url: 'https://mictoo.com/fr/lecture-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcription de cours : Générateur gratuit',
    description: 'Téléchargez l’enregistrement de votre cours ou séminaire.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrLectureTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="fr"
      badge="Étudiants · Académiques · Gratuit"
      h1First="Transcription de cours"
      h1Second="Transcriptions gratuites pour les cours et séminaires"
      subtitle="Téléchargez votre conférence enregistrée depuis Zoom, Panopto, YouTube, Kaltura ou votre téléphone. Obtenez une transcription consultable avec des horodatages prête pour des notes d’étude, des révisions et des citations."
      currentHref="/fr/lecture-transcription"

      platforms={[
        { name: 'Zoom',      iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/fr/zoom-transcription' },
        { name: 'YouTube',   iconKey: 'videoCameraFill', brandBg: '#FF0000' },
        { name: 'Panopto',   iconKey: 'cap',             brandBg: '#014A96' },
        { name: 'Kaltura',   iconKey: 'cap',             brandBg: '#FA6425' },
        { name: 'Camtasia',  iconKey: 'videoCameraFill', brandBg: '#00A651' },
        { name: 'Voice Memo',iconKey: 'mic',             brandBg: '#F97316', href: '/fr/voice-memo-to-text' },
      ]}

      howItWorksTitle="Comment fonctionne la transcription de cours"
      steps={[
        {
          icon: 'folder',
          title: 'Exporter la conférence',
          desc: 'Téléchargez depuis Panopto/Kaltura, enregistrez depuis le cloud Zoom ou enregistrez sur votre téléphone pendant le cours.',
        },
        {
          icon: 'upload',
          title: 'Déposez le fichier ici',
          desc: 'MP3, MP4, M4A, WAV, MOV fonctionnent tous. Les longues conférences sont automatiquement divisées lorsque vous êtes connecté.',
        },
        {
          icon: 'editPen',
          title: 'Notes, résumé, citations',
          desc: 'Transcription consultable avec horodatages, résumé AI, DOCX pour les notes d’étude. Discutez avec la transcription pour vous préparer aux examens.',
        },
      ]}

      exampleTitle="Exemple de transcription de cours"
      exampleFileName="intro-microeconomics-lecture-08.mp4"
      exampleDurationLabel="47:32"
      exampleLines={[
        { t: '0:00',  line: 'D’accord. La semaine dernière, nous avons terminé avec le concept de surplus du consommateur. Aujourd’hui, nous allons approfondir cela avec le surplus du producteur.' },
        { t: '0:11',  line: 'Le surplus du producteur est la différence entre ce qu’un producteur accepterait pour un bien et ce qu’il reçoit réellement.' },
        { t: '0:23',  line: 'Ensemble, le surplus du consommateur et le surplus du producteur nous donnent le bien-être total sur un marché avant d’introduire des taxes ou des contrôles de prix.' },
        { t: '0:35',  line: 'Maintenant, pourquoi ce concept est-il important en pratique ? Parce qu’il nous permet d’évaluer si une politique améliore ou détériore un marché.' },
        { t: '0:47',  line: 'Considérez une taxe par unité. Elle déplace la courbe d’offre vers le haut du montant de la taxe, et les deux surplus diminuent.' },
        { t: '0:58',  line: 'L’écart qui apparaît entre ce que les acheteurs paient et ce que les vendeurs reçoivent est ce que nous appelons une perte sèche.' },
        { t: '1:08',  line: 'Veuillez ouvrir le cahier à la page trente et un, et travaillons ensemble sur un exemple numérique.' },
      ]}
      summaryPoints={[
        'Récapitulatif : surplus du consommateur de la conférence précédente.',
        'Nouveau concept : surplus du producteur et bien-être total.',
        'Appliqué à l’analyse fiscale.',
        'Perte sèche illustrée numériquement.',
      ]}
      actionItems={[
        'Revoir la page 31 du cahier',
        'Pratiquer le calcul de la perte sèche',
        'Lire le chapitre 4 avant jeudi',
      ]}

      whyTitle="Pourquoi choisir Mictoo pour la transcription de cours"
      whyCards={[
        {
          icon: 'search',
          title: 'Consultable dans la transcription',
          desc: 'Ctrl-F n’importe quel concept de la conférence de 45 minutes en une seconde. Mieux que de faire défiler la vidéo.',
        },
        {
          icon: 'sparkles',
          title: 'Résumé AI pour les notes de révision',
          desc: 'Le résumé est un bon point de départ pour la révision. Éliminez ce que vous savez déjà, conservez ce que vous avez manqué.',
        },
        {
          icon: 'chat',
          title: 'Discutez avec la conférence',
          desc: 'Posez des questions sur le matériel pour vous préparer aux examens. Les réponses de style RAG citent l’horodatage exact.',
        },
        {
          icon: 'globe',
          title: 'Traduire pour les étudiants non natifs',
          desc: 'Conférence en anglais mais vous étudiez en portugais ? Traduction en un clic vers 50+ langues.',
        },
      ]}

      scenariosTitle="Scénarios de cours courants"
      scenarios={[
        { icon: 'book',      title: 'Cours universitaire' },
        { icon: 'cap' ,      title: 'Cours en ligne' },
        { icon: 'search',    title: 'Révision d’examen' },
        { icon: 'editPen',   title: 'Notes d’étude' },
        { icon: 'globe',     title: 'Étudiant non natif' },
        { icon: 'headset',   title: 'Séminaire enregistré' },
      ]}

      tipsTitle="Conseils pour des transcriptions de cours plus claires"
      tips={[
        'Asseyez-vous près de l’avant et utilisez votre téléphone comme microphone de secours.',
        'Les longues conférences de plus de 60 Mo sont automatiquement divisées lorsque vous êtes connecté.',
        'Définissez la langue explicitement pour le contenu technique ou non anglais.',
        'Utilisez le chat pour poser des questions de suivi après la transcription.',
      ]}

      guidesTitle="Outils d’apprentissage associés"
      guides={[
        { href: '/fr/zoom-transcription',        icon: 'video', title: 'Conférence Zoom',      desc: 'Téléchargement d’enregistrement cloud' },
        { href: '/fr/youtube-to-text',           icon: 'video', title: 'Conférence YouTube',   desc: 'Collez l’URL ou téléchargez' },
        { href: '/fr/voice-memo-to-text',        icon: 'mic',   title: 'Enregistrement téléphonique',   desc: 'Mémos vocaux iPhone en classe' },
        { href: '/fr/timestamped-transcription', icon: 'file',  title: 'Notes horodatées', desc: 'Exports alignés dans le temps' },
      ]}

      faq={[
        {
          q: 'Puis-je transcrire un enregistrement de cours Zoom ?',
          a: 'Oui. Téléchargez le MP4 ou M4A de l’enregistrement cloud et déposez-le ici. Consultez le guide Zoom pour le chemin de téléchargement exact.',
        },
        {
          q: 'Ma conférence fait plus de 60 Mo. Que faire ?',
          a: 'Connectez-vous pour activer la division automatique (jusqu’à environ 3 heures). Ou réduisez à 64 kbps mono MP3 avec ffmpeg pour une réduction de taille de 5x.',
        },
        {
          q: 'Mictoo transcrit-il des conférences non anglaises ?',
          a: 'Oui. Whisper large-v3 prend en charge 50+ langues. Définissez la langue explicitement pour le vocabulaire technique ou les accents prononcés.',
        },
        {
          q: 'Puis-je rechercher dans la transcription ?',
          a: 'Oui. La vue lecteur inclut une boîte de recherche avec le nombre de correspondances et la mise en surbrillance. Ctrl-F votre terme et naviguez entre les résultats.',
        },
        {
          q: 'Puis-je poser des questions sur le matériel de la conférence ?',
          a: 'Oui. Discuter avec la transcription vous permet de poser des questions comme "expliquez la perte sèche" ou "quelles pages le professeur a-t-il mentionnées". Les réponses citent les horodatages.',
        },
        {
          q: 'Puis-je exporter les notes de cours au format DOCX ou PDF ?',
          a: 'Oui. DOCX pour tout le monde, PDF et JSON pour les utilisateurs connectés. TXT est toujours disponible.',
        },
        {
          q: 'Les enregistrements de cours sont-ils conservés sur vos serveurs ?',
          a: 'Non. Les flux audio sont envoyés au fournisseur de transcription, traités une fois, puis supprimés. Les transcriptions ne sont sauvegardées que si vous êtes connecté.',
        },
      ]}

      ctaHeadline="Transformez les conférences en notes d’étude"
      ctaSubtitle="Transcription consultable, résumé AI, discussion avec le matériel. Gratuit par conférence."
      ctaButton="Téléchargez une conférence"

      relatedLinks={[
        { href: '/fr/webinar-transcription',     label: 'Transcription de webinaire' },
        { href: '/fr/sermon-transcription',      label: 'Transcription de sermon' },
        { href: '/fr/voice-memo-to-text',        label: 'Mémos vocaux en texte' },
        { href: '/fr/interview-transcription',   label: 'Transcription d’entretien' },
        { href: '/fr/meeting-transcription',     label: 'Transcription de réunion' },
      ]}
    />
  )
}