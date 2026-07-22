import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'MP3 en texte : transcription MP3 gratuite en ligne pour podcasts et voix | Mictoo',
  description:
    'Transcrivez vos fichiers MP3 avec horodatages, résumé IA et exports. Pensé pour les podcasts, mémos vocaux et audios téléchargés. Déposez votre MP3, obtenez le texte en quelques secondes.',
  alternates: {
    canonical: 'https://mictoo.com/fr/transcribe-mp3-to-text',
    languages: {
      'en': 'https://mictoo.com/transcribe-mp3-to-text',
      'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
      'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
      'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
      'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
      'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
      'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
      'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
      'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
      'ko': 'https://mictoo.com/ko/transcribe-mp3-to-text',
      'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
    },
  },
  openGraph: {
    title: 'MP3 en texte : transcription MP3 gratuite en ligne | Mictoo',
    description: 'Déposez votre podcast ou mémo vocal MP3, obtenez la transcription et le résumé en quelques secondes.',
    url: 'https://mictoo.com/fr/transcribe-mp3-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 en texte : transcription MP3 gratuite en ligne',
    description: 'Déposez votre MP3, obtenez la transcription.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function TranscribeMp3ToTextPage() {
  return (
    <FormatPageLayout
      locale="fr"
      badge="MP3 · Pensé podcast · Gratuit"
      h1First="MP3 en texte"
      h1Second="Pour podcasts, mémos vocaux et interviews"
      subtitle="MP3 est le format courant pour les podcasts et enregistrements vocaux. Déposez votre épisode, votre mémo ou une interview téléchargée et obtenez une transcription avec horodatages, résumé IA et exports propres pour vos notes d’émission."
      highlightFormat="mp3"
      relatedFormatsTitle="Autres formats audio à transcrire"
      previewFileName="episode-podcast.mp3"
      previewWordCount={182}
      previewDurationLabel="28:14"
      previewLines={[
        { t: '0:00',  line: 'Bienvenue à nouveau dans l’émission. Aujourd’hui nous parlons du podcasting indépendant en 2026.' },
        { t: '0:07',  line: 'Mon invité anime une émission hebdomadaire depuis huit ans sans manquer un épisode.' },
        { t: '0:14',  line: 'Merci de m’accueillir. C’est fou de penser qu’on a lancé ça quand tout le monde disait que l’audio était déjà saturé.' },
        { t: '0:22',  line: 'Commençons par là. Qu’est-ce qui était différent entre lancer un podcast en 2018 et aujourd’hui ?' },
        { t: '0:30',  line: 'La distribution était plus difficile à percer, mais l’audience était plus patiente.' },
        { t: '0:37',  line: 'Aujourd’hui les outils sont incroyables, transcription en secondes, résumés IA pour les notes, mais l’attention est plus rare.' },
        { t: '0:47',  line: 'Belle transition. Quel est ton flux pour les notes d’émission maintenant que la transcription est quasi gratuite ?' },
        { t: '0:55',  line: 'J’exporte le MP3, je le dépose dans un outil de transcription, et je pars du résumé IA comme premier jet des notes.' },
      ]}
      whyTitle="Pourquoi Mictoo pour la transcription MP3"
      whyCards={[
        {
          icon: 'mic',
          title: 'Pensé pour la voix et le podcast',
          desc: 'MP3 est ce que distribuent les réseaux de podcasts et ce qu’exportent les applis vocales. Réglé pour le contenu parlé avec horodatages prêts pour les notes et les sous-titres.',
        },
        {
          icon: 'gear',
          title: 'Réglages MP3 courants acceptés',
          desc: 'Débit constant ou variable, mono ou stéréo. C’est la clarté de la parole qui compte le plus ; les débits très bas et les artefacts audibles peuvent réduire la précision.',
        },
        {
          icon: 'sparkles',
          title: 'Résumé IA pour vos notes d’émission',
          desc: 'Le résumé apparaît automatiquement à côté de la transcription. Bon premier jet pour les notes d’épisode, les descriptions et les récaps orientés SEO.',
        },
        {
          icon: 'globe',
          title: 'SRT, VTT et 50+ langues',
          desc: 'Exportez en SRT ou VTT pour la version YouTube de l’épisode. Traduisez en espagnol, allemand, français et 45+ autres langues en un clic.',
        },
      ]}
      scenariosTitle="Quand utiliser MP3 en texte"
      scenarios={[
        {
          icon: 'mic',
          title: 'Notes d’émission de podcast',
          desc: 'Vous avez exporté l’épisode et l’avez envoyé à votre hébergeur. Déposez ici le même MP3 pour obtenir la transcription et le résumé IA qui deviennent vos notes.',
        },
        {
          icon: 'layers',
          title: 'Catalogue de podcast à rattraper',
          desc: 'Des années d’épisodes déjà publiés sans transcription. Traitez-les un par un pour combler l’archive et rendre chaque épisode recherchable.',
        },
        {
          icon: 'editPen',
          title: 'Mémo vocal vers document',
          desc: 'Mémos enregistrés sur votre téléphone (beaucoup d’applis exportent en MP3). Transformez des idées jetées à voix en texte recherchable et modifiable pour votre appli de notes.',
        },
        {
          icon: 'clip',
          title: 'Interviews téléchargées',
          desc: 'Interview de podcast que vous souhaitez citer, MP3 d’une conférence à référencer, cours téléchargé à étudier.',
        },
        {
          icon: 'book',
          title: 'Chapitres de livres audio',
          desc: 'Chapitre MP3 d’un livre audio que vous voulez en texte imprimé pour prendre des notes. Les gros fichiers dépassent souvent 60 Mo et doivent être découpés au préalable.',
        },
        {
          icon: 'video',
          title: 'Audio extrait de YouTube',
          desc: 'Les extracteurs YouTube produisent souvent du MP3 par compatibilité. Déposez le fichier extrait pour une transcription propre avec horodatages.',
        },
      ]}
      technicalTitle="Ce qui compte dans un MP3"
      technicalIntro="Les réglages MP3 influent sur la taille du fichier et, aux extrêmes, sur l’intelligibilité. Ces détails vous aident à décider si vous téléversez le fichier tel quel ou si vous préparez d’abord une copie parole plus légère."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'Débit et clarté',
          desc: 'La parole à un débit modéré convient généralement. Un débit extrêmement bas, du clipping ou de forts artefacts peuvent masquer consonnes et noms propres.',
        },
        {
          icon: 'gear',
          title: 'CBR et VBR',
          desc: 'Les fichiers MP3 à débit constant ou variable peuvent être téléversés ; les horodatages suivent la timeline audio décodée.',
        },
        {
          icon: 'clip',
          title: 'Les tags ID3 restent à part',
          desc: 'Artiste, titre, pochette et métadonnées de chapitres ne sont pas insérés dans la transcription. Gardez ces métadonnées dans votre système de publication.',
        },
        {
          icon: 'cloud',
          title: 'Épisodes longs',
          desc: 'Si un épisode dépasse la limite, exportez une copie parole en mono à un débit plus bas ou découpez-le à une transition naturelle.',
        },
      ]}
      faq={[
        {
          q: 'Mictoo transcrit-il n’importe quel fichier MP3 ?',
          a: 'Mictoo accepte les fichiers MP3 courants à débit constant ou variable, mono ou stéréo. Les fichiers endommagés, variantes non prises en charge ou enregistrements avec fortes artefacts peuvent nécessiter un ré-export. La limite est de 60 Mo une fois connecté, 25 Mo en anonyme.',
        },
        {
          q: 'Le débit MP3 influe-t-il sur la qualité de la transcription ?',
          a: 'La clarté de l’enregistrement compte plus qu’un débit élevé, mais le débit n’est pas neutre. Une prise vocale nette à débit modéré convient généralement ; une compression agressive, du clipping ou un débit très bas peuvent supprimer des détails et réduire la précision.',
        },
        {
          q: 'Mon MP3 de podcast dépasse 60 Mo. Que faire ?',
          a: 'Créez une copie mono plus petite avec ffmpeg : ffmpeg -i podcast.mp3 -b:a 64k -ac 1 output.mp3. Vérifiez le résultat avant téléversement, ou découpez l’épisode à une transition naturelle.',
        },
        {
          q: 'Puis-je obtenir un résumé IA de l’épisode ?',
          a: 'Oui. Le résumé IA apparaît automatiquement à côté de la transcription une fois celle-ci terminée. Bon premier jet pour les notes d’émission, descriptions d’épisode et récaps orientés SEO.',
        },
        {
          q: 'Puis-je télécharger des sous-titres SRT pour la version YouTube ?',
          a: 'Oui. Exportez en SRT ou VTT après transcription. Les deux formats contiennent des horodatages alignés sur la timeline du MP3 d’origine. Déposez-les dans YouTube ou votre éditeur vidéo.',
        },
        {
          q: 'Mictoo transcrit-il des MP3 non anglais ?',
          a: 'Oui. Whisper large-v3 prend en charge 50+ langues avec détection automatique. Pour un MP3 court ou du contenu non anglophone, choisissez la langue explicitement dans la liste déroulante pour une meilleure détection au premier passage.',
        },
        {
          q: 'Puis-je traduire la transcription vers une autre langue ?',
          a: 'Oui. Une fois la transcription terminée, choisissez la langue cible et cliquez sur Traduire. La traduction est produite par GPT-4o-mini et s’affiche à côté de l’original.',
        },
        {
          q: 'Mon MP3 sera-t-il conservé sur vos serveurs ?',
          a: 'Non. Le MP3 est envoyé au fournisseur de transcription, traité une fois, puis sorti de la mémoire. Nous n’écrivons jamais l’audio sur disque. La transcription n’est enregistrée que si vous êtes connecté et choisissez de l’ajouter à votre historique.',
        },
        {
          q: 'Les métadonnées ID3 (artiste, titre, album) apparaîtront-elles dans la transcription ?',
          a: 'Non. La transcription est du texte brut sans métadonnées MP3. Les tags ID3 sont ignorés. Si vous voulez faire correspondre transcription et métadonnées d’épisode, gardez cette table de correspondance dans votre propre archive.',
        },
        {
          q: 'Combien de temps prend une transcription MP3 ?',
          a: 'Un podcast MP3 de 30 minutes prend typiquement 30 à 50 secondes de bout en bout. Les fichiers proches de la limite prennent 60 à 90 secondes. La vitesse de téléversement est souvent l’étape la plus longue.',
        },
      ]}
      ctaHeadline="Déposez votre MP3, rédigez vos notes plus vite"
      ctaSubtitle="Épisode de podcast, mémo vocal, interview téléchargée, chapitre de livre audio. Obtenez le texte et le résumé en quelques secondes."
      ctaButton="Téléverser un MP3 à transcrire"
    />
  )
}
