import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'WebM vers Texte : Transcription Loom, OBS et Enregistrement d’Écran du Navigateur | Mictoo',
  description:
    'Téléchargez des enregistrements d’écran WebM depuis Loom, OBS ou l’API MediaRecorder du navigateur. Nous extrayons la vidéo et transcrivons l’audio. Transcription modifiable avec des horodatages en secondes.',
  alternates: {
    canonical: 'https://mictoo.com/fr/webm-to-text',
    languages: {
      'en': 'https://mictoo.com/webm-to-text',
      'fr': 'https://mictoo.com/fr/webm-to-text',
      'de': 'https://mictoo.com/de/webm-to-text',
      'es': 'https://mictoo.com/es/webm-to-text',
      'ru': 'https://mictoo.com/ru/webm-to-text',
      'it': 'https://mictoo.com/it/webm-to-text',
      'pt': 'https://mictoo.com/pt/webm-to-text',
      'pl': 'https://mictoo.com/pl/webm-to-text',
      'ja': 'https://mictoo.com/ja/webm-to-text',
      'ko': 'https://mictoo.com/ko/webm-to-text',
      'x-default': 'https://mictoo.com/webm-to-text',
    },
  },
  openGraph: {
    title: 'WebM vers Texte : Transcription Loom, OBS, Enregistrement du Navigateur | Mictoo',
    description: 'Téléchargez un enregistrement d’écran WebM. Nous extrayons l’audio et renvoyons une transcription modifiable avec des horodatages.',
    url: 'https://mictoo.com/fr/webm-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebM vers Texte : Transcription Loom, OBS, Enregistrement du Navigateur',
    description: 'Téléchargez un enregistrement d’écran WebM. Nous extrayons l’audio et renvoyons une transcription modifiable.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrWebmToTextPage() {
  return (
    <FormatPageLayout
      locale="fr"
      badge="WebM · Loom · OBS · Enregistrement d’écran"
      h1First="WebM vers Texte"
      h1Second="Pour Loom, OBS et les enregistrements d’écran du navigateur"
      subtitle="WebM est ce que Loom exporte, ce qu’OBS enregistre par défaut dans les versions plus récentes, et ce que les navigateurs écrivent lorsque votre application utilise l’API MediaRecorder. Déposez le fichier, nous extrayons la vidéo et transcrivons l’audio en secondes."
      highlightFormat="webm"
      previewFileName="loom-recording.webm"
      previewWordCount={172}
      previewDurationLabel="7:36"
      previewLines={[
        { t: '0:00',  line: 'Salut l’équipe, je voulais passer en revue le nouveau flux d’intégration avant de le publier jeudi.' },
        { t: '0:07',  line: 'Voici mon écran. Ce que vous voyez est la page d’accueil après une nouvelle inscription.' },
        { t: '0:14',  line: 'La première chose à noter, la modal de bienvenue se trouve maintenant au-dessus du tableau de bord au lieu de bloquer tout le viewport.' },
        { t: '0:23',  line: 'C’est intentionnel. Les utilisateurs étaient souvent confus lorsque le tableau de bord était complètement caché par la visite guidée.' },
        { t: '0:32',  line: 'Deuxièmement, les trois étapes de la visite sont plus courtes. Nous avons réduit le texte d’environ la moitié sur la base du dernier retour.' },
        { t: '0:41',  line: 'Si je clique sur Passer la visite ici, la modal se ferme et nous plaçons l’utilisateur directement dans un marqueur d’état vide.' },
        { t: '0:51',  line: 'Ce marqueur pointe vers le bouton de téléchargement principal, qui est l’action que chaque utilisateur doit effectuer en premier.' },
        { t: '1:00',  line: 'Faites-moi savoir ce que vous en pensez. Problèmes bloquants pour l’expédition d’ici mercredi matin si possible.' },
      ]}
      whyTitle="Pourquoi Mictoo pour la transcription WebM"
      whyCards={[
        {
          icon: 'video',
          title: 'WebM vidéo géré côté serveur',
          desc: 'Enregistrement d’écran WebM avec la piste vidéo intacte. Nous démuxons, supprimons la vidéo et transcrivons l’audio. Pas d’extraction locale nécessaire.',
        },
        {
          icon: 'gear',
          title: 'Opus et Vorbis tous deux supportés',
          desc: 'La plupart des fichiers WebM contiennent de l’audio Opus (plus récent) ou Vorbis (plus ancien). Nous gérons les deux codecs, aucune conversion manuelle requise.',
        },
        {
          icon: 'clip',
          title: 'Sous-titres SRT pour la visite guidée',
          desc: 'Téléchargez SRT ou VTT après la transcription. Les horodatages s’alignent sur le WebM original, donc les sous-titres correspondent à l’enregistrement d’écran avec précision au cadre.',
        },
        {
          icon: 'sparkles',
          title: 'Résumé AI pour les notes de version',
          desc: 'Le résumé AI est un bon premier brouillon pour la description du ticket, la note de version ou la mise à jour asynchrone qu’une visite guidée a été faite pour remplacer.',
        },
      ]}
      scenariosTitle="Quand WebM vers texte est le bon choix"
      scenarios={[
        {
          icon: 'video',
          title: 'Visite guidée Loom',
          desc: 'Démonstration de produit, révision de code ou mise à jour asynchrone enregistrée dans Loom. La transcription alimente le ticket, le document Notion ou l’e-mail de suivi.',
        },
        {
          icon: 'briefcase',
          title: 'Enregistrement d’écran OBS',
          desc: 'Tutoriel ou capture de jeu enregistrée avec OBS Studio. La transcription devient la description YouTube ou l’article de blog.',
        },
        {
          icon: 'gear',
          title: 'Sortie MediaRecorder du navigateur',
          desc: 'Audio enregistré par l’application via l’API MediaRecorder. Déposez le .webm que votre application a produit sans étape de conversion.',
        },
        {
          icon: 'users',
          title: 'Enregistrement Google Meet ou Firefox',
          desc: 'Certaines outils de réunion et navigateurs enregistrent en WebM par défaut. Déposez le fichier pour une version texte consultable de la conversation.',
        },
        {
          icon: 'editPen',
          title: 'Révision de design asynchrone',
          desc: 'Le designer enregistre un WebM en passant en revue une maquette. Les réviseurs obtiennent une transcription écrite pour pouvoir parcourir avant de regarder.',
        },
        {
          icon: 'book',
          title: 'Capture d’écran de cours',
          desc: 'L’instructeur a enregistré des diapositives avec narration et partagé en tant que WebM. Les étudiants obtiennent une transcription consultable avec la vidéo.',
        },
      ]}
      technicalTitle="À savoir sur les enregistrements WebM"
      technicalIntro="WebM est un conteneur convivial pour les navigateurs qui peut contenir de la vidéo plus de l’audio ou uniquement de l’audio. Les paramètres du navigateur et de l’enregistreur déterminent quelles pistes et codecs sont présents."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Audio Opus ou Vorbis',
          desc: 'La plupart des enregistrements de discours WebM récents utilisent Opus ; les fichiers plus anciens peuvent utiliser Vorbis. Les deux se trouvent à l’intérieur du conteneur WebM.',
        },
        {
          icon: 'video',
          title: 'Audio uniquement ou avec vidéo',
          desc: 'Un WebM peut contenir un enregistrement d’écran ou uniquement une piste de microphone. La transcription utilise le flux de discours audible.',
        },
        {
          icon: 'clip',
          title: 'Exports basés sur la chronologie',
          desc: 'Les horodatages de la transcription suivent la chronologie de l’enregistrement décodé pour un travail ultérieur de sous-titrage ou d’édition.',
        },
        {
          icon: 'gear',
          title: 'Sortie du recorder du navigateur',
          desc: 'Les paramètres du MediaRecorder varient selon le navigateur. Si une capture n’a pas de permission de microphone, elle peut ne contenir aucun discours à transcrire.',
        },
      ]}
      faq={[
        {
          q: 'Quels types de fichiers WebM Mictoo accepte-t-il ?',
          a: 'Tout WebM standard : vidéo avec audio Opus ou Vorbis (Loom, OBS, MediaRecorder du navigateur), ou WebM uniquement audio. Nous démuxons la piste audio côté serveur et transcrivons avec Whisper large-v3.',
        },
        {
          q: 'Dois-je extraire l’audio moi-même d’abord ?',
          a: 'Non. Téléchargez la vidéo WebM telle quelle. Nous gérons le démux côté serveur et ne transcrivons que la piste audio. Si vous avez déjà extrait l’audio (Opus ou Vorbis), cela fonctionne aussi.',
        },
        {
          q: 'Mon Loom fait plus de 60 Mo. Que faire ?',
          a: 'Un Loom de 20 à 30 minutes dépasse souvent 60 Mo. Si vous êtes connecté, nous divisons automatiquement les longs fichiers jusqu’à environ 3 heures. Sinon, utilisez les paramètres de téléchargement Loom pour réduire la qualité, ou exportez l’audio et téléchargez-le.',
        },
        {
          q: 'Les horodatages correspondent-ils à mon enregistrement d’écran ?',
          a: 'Oui. Les horodatages dans la transcription et dans les exports SRT/VTT s’alignent sur la chronologie originale de WebM, donc les sous-titres correspondent à l’enregistrement d’écran avec précision au cadre lorsqu’ils sont remis sur la vidéo.',
        },
        {
          q: 'Puis-je obtenir des sous-titres SRT pour la visite guidée ?',
          a: 'Oui. Téléchargez SRT ou VTT après la transcription. Déposez dans votre éditeur vidéo, téléchargement YouTube ou flux de re-rendu Loom.',
        },
        {
          q: 'Mictoo transcrit-il des WebM non anglais ?',
          a: 'Oui. Whisper large-v3 prend en charge plus de 50 langues avec détection automatique. Pour des enregistrements courts ou du contenu non anglais, définissez la langue explicitement pour des résultats de première passe plus propres.',
        },
        {
          q: 'Que se passe-t-il si le WebM n’a pas de piste audio ?',
          a: 'La transcription sera vide. Les fichiers WebM sans piste audio (enregistrements d’écran silencieux, captures de style GIF) n’ont rien à transcrire pour Whisper.',
        },
        {
          q: 'Puis-je traduire la transcription dans une autre langue ?',
          a: 'Oui. Après la transcription, choisissez une langue cible et cliquez sur Traduire. La traduction s’effectue sur GPT-4o-mini et apparaît à côté de l’original.',
        },
        {
          q: 'Mon fichier WebM est-il enregistré sur vos serveurs ?',
          a: 'Non. Le WebM est transmis au fournisseur de transcription, nous démuxons et transcrivons en mémoire, puis supprimons tout. La transcription n’est stockée que si vous vous connectez et enregistrez dans l’historique.',
        },
        {
          q: 'Combien de temps prend une transcription WebM ?',
          a: 'Un Loom de 10 minutes se termine généralement en 20 à 40 secondes de bout en bout. Les fichiers WebM plus longs (30 à 45 minutes) prennent 60 à 90 secondes. La vitesse de téléchargement est souvent l’étape la plus longue pour les grands enregistrements d’écran.',
        },
      ]}
      ctaHeadline="Déposez votre enregistrement Loom ou OBS"
      ctaSubtitle="Enregistrements d’écran WebM, sortie MediaRecorder du navigateur. Vidéo démuxée côté serveur."
      ctaButton="Télécharger WebM pour transcrire"
    />
  )
}