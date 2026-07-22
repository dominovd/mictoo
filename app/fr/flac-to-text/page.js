import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-text',
  'fr': 'https://mictoo.com/fr/flac-to-text',
  'de': 'https://mictoo.com/de/flac-to-text',
  'es': 'https://mictoo.com/es/flac-to-text',
  'ru': 'https://mictoo.com/ru/flac-to-text',
  'it': 'https://mictoo.com/it/flac-to-text',
  'pt': 'https://mictoo.com/pt/flac-to-text',
  'pl': 'https://mictoo.com/pl/flac-to-text',
  'ja': 'https://mictoo.com/ja/flac-to-text',
  'ko': 'https://mictoo.com/ko/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC vers texte : transcription sans perte pour les archives de parole | Mictoo',
  description:
    'Téléchargez une interview orale en FLAC, un enregistrement de terrain ou une copie de préservation et obtenez un transcript modifiable avec des horodatages.',
  alternates: {
    canonical: 'https://mictoo.com/fr/flac-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'FLAC vers texte : transcription audio sans perte | Mictoo',
    description: 'Téléchargez une interview orale en FLAC, un enregistrement de terrain ou une copie de préservation. Obtenez un transcript modifiable avec des horodatages.',
    url: 'https://mictoo.com/fr/flac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLAC vers texte : transcription audio sans perte',
    description: 'Téléchargez une archive de parole en FLAC ou un enregistrement de terrain et obtenez un transcript modifiable avec des horodatages.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrFlacToTextPage() {
  return (
    <FormatPageLayout
      locale="fr"
      badge="FLAC · Sans perte · Gratuit"
      h1First="FLAC vers texte"
      h1Second="Audio sans perte pour les archives de parole"
      subtitle="Le FLAC est utilisé par les archives d’histoire orale, les enregistreurs de terrain et les flux de préservation pour stocker de l’audio sans compression avec perte. Déposez le fichier .flac, conservez le master sans perte et obtenez un transcript avec des horodatages."
      highlightFormat="flac"
      previewFileName="enregistrement-archivistique.flac"
      previewWordCount={155}
      previewDurationLabel="18:04"
      previewLines={[
        { t: '0:00',  line: 'Cet enregistrement a été réalisé au domicile familial en octobre mille neuf cent soixante-dix-huit.' },
        { t: '0:07',  line: 'Le sujet est ma grand-mère, née à Cracovie en mille neuf cent quatorze, immigrée à New York en mille neuf cent trente-neuf.' },
        { t: '0:18',  line: 'La qualité de l’enregistrement est limitée par la source originale sur cassette. Veuillez garder à l’esprit le volume de l’intervieweur.' },
        { t: '0:27',  line: 'Grand-mère, pouvez-vous me parler du jour où vous avez quitté Cracovie pour la dernière fois ?' },
        { t: '0:34',  line: 'Il pleuvait. C’est ce dont je me souviens en premier. Tout le monde se tenait sur le quai sous la pluie.' },
        { t: '0:44',  line: 'Mon père avait deux valises et ma mère en avait une. Je n’avais qu’un petit sac que ma tante m’avait donné.' },
        { t: '0:54',  line: 'Le train devait partir à six heures du matin mais il n’est parti qu’à presque dix heures.' },
        { t: '1:04',  line: 'Et quand il est enfin parti, personne sur ce quai n’a jamais vu la ville de la même manière.' },
      ]}
      whyTitle="Pourquoi choisir Mictoo pour la transcription FLAC"
      whyCards={[
        {
          icon: 'target',
          title: 'Pas de compression avec perte supplémentaire',
          desc: 'Le FLAC préserve le signal enregistré sans perte de compression de style MP3. L’exactitude du transcript dépend toujours de la clarté de la parole et de la capture originale.',
        },
        {
          icon: 'gear',
          title: 'N’importe quelle fréquence d’échantillonnage, n’importe quelle profondeur de bit',
          desc: '44,1 kHz à 192 kHz, 16 bits à 24 bits. Whisper rééchantillonne en mono à 16 kHz en interne, donc votre fréquence source n’affecte pas la qualité.',
        },
        {
          icon: 'book',
          title: 'Flux de travail favorable à la préservation',
          desc: 'Votre fichier FLAC original n’est jamais modifié. Nous le diffusons au fournisseur de transcription, extrayons l’audio en mémoire, puis le supprimons.',
        },
        {
          icon: 'clip',
          title: 'FLAC à l’intérieur d’OGG également pris en charge',
          desc: 'Le FLAC natif (octets magiques fLaC) et le FLAC dans OGG (OggS avec un flux FLAC) fonctionnent tous les deux. Pas de reconditionnement manuel.',
        },
      ]}
      scenariosTitle="Quand la transcription FLAC vers texte est-elle appropriée"
      scenarios={[
        {
          icon: 'book',
          title: 'Archive d’histoire orale',
          desc: 'Interview longue préservée en FLAC sans perte pour l’archive. Le transcript le rend consultable, citable et prêt pour les références.',
        },
        {
          icon: 'briefcase',
          title: 'Enregistrement institutionnel',
          desc: 'Conférence ou symposium enregistré par un musée, une bibliothèque ou une université en FLAC pour la préservation. Le transcript est la couche d’accès.',
        },
        {
          icon: 'mic',
          title: 'Interview ou podcast ripé de CD',
          desc: 'Ancienne interview ou épisode de podcast que vous avez extrait d’un CD en FLAC. Déposez le fichier pour un transcript moderne.',
        },
        {
          icon: 'waveform',
          title: 'Enregistrement de terrain, capture sans perte',
          desc: 'Enregistreur de terrain ou capture manuelle écrite en FLAC pour économiser de l’espace sur la carte sans perdre en qualité. Transcription complète avec horodatages.',
        },
        {
          icon: 'sparkles',
          title: 'Collections d’interviews restaurées',
          desc: 'Interviews numérisées sur bande ou disque stockées en FLAC après restauration. Ajoutez du texte consultable tout en conservant la copie de préservation.',
        },
        {
          icon: 'users',
          title: 'Copie de préservation de déposition',
          desc: 'Enregistrement légal préservé en FLAC pour l’intégrité archivistique. Transcript pour révision, citation et découverte en aval.',
        },
      ]}
      technicalTitle="Ce que le FLAC sans perte préserve ,  et ce qu’il ne préserve pas"
      technicalIntro="Le FLAC préserve le signal source sans compression avec perte. Il protège une copie d’archive, mais ne peut pas restaurer des mots déjà obscurcis par le bruit, le clipping, le chevauchement ou la distance du microphone."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'Source sans perte',
          desc: 'Le décodage restitue le signal enregistré sans perte de compression de style MP3, ce qui est utile pour les flux de préservation.',
        },
        {
          icon: 'ear',
          title: 'Pas de nettoyage automatique',
          desc: 'Une copie sans perte d’un enregistrement bruyant est toujours bruyante. La clarté de la parole lors de la capture reste le principal facteur d’exactitude.',
        },
        {
          icon: 'clip',
          title: 'Commentaires Vorbis séparés',
          desc: 'Artiste, ID d’archive et autres balises ne sont pas insérés dans le transcript. Conservez ce mappage dans votre catalogue d’archive.',
        },
        {
          icon: 'cloud',
          title: 'Copie d’archive efficace',
          desc: 'Le FLAC est plus petit que le WAV non compressé mais peut encore être volumineux pour de longues sessions. Divisez les enregistrements longs si nécessaire.',
        },
      ]}
      faq={[
        {
          q: 'Quels fichiers FLAC Mictoo accepte-t-il ?',
          a: 'FLAC natif (octets magiques fLaC) et conteneurs FLAC-in-OGG, mono ou stéréo, n’importe quelle fréquence d’échantillonnage jusqu’à 192 kHz, et profondeur de 16 ou 24 bits. Nous acceptons le fichier directement sans conversion.',
        },
        {
          q: 'Une entrée sans perte produit-elle un meilleur transcript ?',
          a: 'Pour des enregistrements source propres, l’entrée sans perte correspond au plafond de ce que Whisper peut extraire. Pour une source bruyante ou dégradée (un rip de cassette, par exemple), la perte sans perte préserve fidèlement la dégradation mais ne la corrige pas. La qualité d’enregistrement compte plus que le conteneur.',
        },
        {
          q: 'Mon fichier FLAC fait plus de 60 Mo. Que faire ?',
          a: 'Un FLAC stéréo à 44,1 kHz et 16 bits fait environ 5 Mo par minute, donc tout enregistrement de plus de 12 minutes atteint la limite. Si vous êtes connecté, nous divisons automatiquement jusqu’à environ 3 heures. Sinon, convertissez d’abord en FLAC mono à 16 kHz ou en MP3 : ffmpeg -i in.flac -ar 16000 -ac 1 out.flac.',
        },
        {
          q: 'Puis-je conserver les métadonnées FLAC (album, artiste, année) ?',
          a: 'Le transcript est du texte brut sans métadonnées FLAC. Les balises de commentaire Vorbis sont ignorées lors de la transcription. Conservez le mappage des métadonnées dans votre système d’archive si vous en avez besoin en aval.',
        },
        {
          q: 'Mictoo transcrit-il des FLAC non anglais ?',
          a: 'Oui. Whisper large-v3 prend en charge plus de 50 langues avec détection automatique. Pour des accents inhabituels ou des enregistrements plus anciens, définissez explicitement la langue pour une détection plus propre au premier passage.',
        },
        {
          q: 'Puis-je obtenir des sous-titres SRT pour une vidéo qui utilise cet audio ?',
          a: 'Oui. Téléchargez SRT ou VTT après la transcription. Les horodatages s’alignent sur la chronologie originale du FLAC pour une utilisation dans des éditeurs vidéo ou des outils d’accessibilité.',
        },
        {
          q: 'Mon fichier FLAC est-il conservé sur vos serveurs ?',
          a: 'Non. L’audio est diffusé au fournisseur de transcription, traité une fois, puis supprimé de la mémoire. Nous n’écrivons jamais l’audio sur disque. Les transcripts ne sont stockés que si vous vous connectez.',
        },
        {
          q: 'Puis-je traduire le transcript dans une autre langue ?',
          a: 'Oui. Après la transcription, choisissez une langue cible et cliquez sur Traduire. La traduction fonctionne sur GPT-4o-mini et apparaît à côté de l’original.',
        },
        {
          q: 'Combien de temps prend une transcription FLAC ?',
          a: 'Une transcription FLAC de 15 minutes se termine généralement en 25 à 45 secondes de bout en bout. Les fichiers plus volumineux proches de la limite de téléchargement prennent 45 à 90 secondes. La vitesse de téléchargement est souvent l’étape la plus longue puisque les fichiers FLAC sont volumineux.',
        },
        {
          q: 'Acceptez-vous des FLAC hi-res 24 bits ?',
          a: 'Oui. Le FLAC 24 bits à 96 kHz ou 192 kHz est entièrement pris en charge. Whisper rééchantillonne en interne, donc le hi-res n’améliore pas l’exactitude par rapport au 16 bits à 44,1 kHz pour un audio propre, mais cela ne nuit pas non plus.',
        },
      ]}
      ctaHeadline="Déposez votre FLAC, obtenez un transcript prêt pour l’archive"
      ctaSubtitle="Source sans perte en, texte consultable en sortie. Histoire orale, enregistrements de terrain et copies de préservation."
      ctaButton="Télécharger FLAC pour transcrire"
    />
  )
}