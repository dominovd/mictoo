import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'AAC en texte : transcription audio brute AAC et ADTS | Mictoo',
  description:
    'Téléchargez des fichiers .aac bruts (flux ADTS ou ADIF), obtenez une transcription modifiable en quelques secondes. Courant pour les téléchargements de podcasts, les archives de diffusion, l’audio extrait d’iPhone.',
  alternates: {
    canonical: 'https://mictoo.com/fr/aac-to-text',
    languages: {
      'en': 'https://mictoo.com/aac-to-text',
      'fr': 'https://mictoo.com/fr/aac-to-text',
      'de': 'https://mictoo.com/de/aac-to-text',
      'es': 'https://mictoo.com/es/aac-to-text',
      'ru': 'https://mictoo.com/ru/aac-to-text',
      'it': 'https://mictoo.com/it/aac-to-text',
      'pt': 'https://mictoo.com/pt/aac-to-text',
      'pl': 'https://mictoo.com/pl/aac-to-text',
      'ja': 'https://mictoo.com/ja/aac-to-text',
      'ko': 'https://mictoo.com/ko/aac-to-text',
      'x-default': 'https://mictoo.com/aac-to-text',
    },
  },
  openGraph: {
    title: 'AAC en texte : transcription audio brute AAC et ADTS | Mictoo',
    description: 'Téléchargez des fichiers .aac bruts (flux ADTS ou ADIF). Transcription modifiable en quelques secondes.',
    url: 'https://mictoo.com/fr/aac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC en texte : transcription de flux AAC brut',
    description: 'Téléchargez des fichiers .aac (ADTS ou ADIF). Transcription modifiable en quelques secondes.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrAacToTextPage() {
  return (
    <FormatPageLayout
      locale="fr"
      badge="AAC · ADTS · Flux codec brut"
      h1First="AAC en texte"
      h1Second="Flux ADTS bruts, archives de diffusion, audio extrait"
      subtitle="Les fichiers .aac bruts proviennent souvent de flux de diffusion, de captures radio et de pistes médias extraites. Déposez le fichier et Mictoo inspecte sa structure avant de transcrire l’audio parlé avec Whisper large-v3."
      highlightFormat="aac"
      previewFileName="broadcast-audio.aac"
      previewWordCount={142}
      previewDurationLabel="9 minutes 44 secondes"
      previewLines={[
        { t: '0:00',  line: 'Vous écoutez l’émission du matin. Il est sept heures quinze et nous revenons avec notre sujet principal.' },
        { t: '0:08',  line: 'Cette nuit, le conseil municipal a adopté l’extension du transit après presque trois ans de débats.' },
        { t: '0:17',  line: 'Le plan ajoutera deux nouvelles lignes de tramway et prolongera celle existante d’environ huit miles.' },
        { t: '0:27',  line: 'Pour décomposer ce que cela signifie pour les navetteurs quotidiens, nous sommes rejoints en studio par notre reporter sur le transit.' },
        { t: '0:37',  line: 'Merci de m’avoir invité. L’essentiel est que le corridor est de l’est obtient enfin une option ferroviaire après vingt ans.' },
        { t: '0:47',  line: 'Pour quiconque conduit actuellement ce tronçon pendant les heures de pointe, c’est véritablement transformateur.' },
        { t: '0:56',  line: 'La construction commence au printemps prochain et la première nouvelle ligne devrait ouvrir en vingt vingt-neuf.' },
        { t: '1:06',  line: 'Le conseil estime qu’environ quarante mille passagers quotidiens utiliseront les nouveaux segments une fois ouverts.' },
      ]}
      whyTitle="Pourquoi choisir Mictoo pour la transcription AAC"
      whyCards={[
        {
          icon: 'waveform',
          title: 'ADTS géré nativement',
          desc: 'La plupart des fichiers .aac bruts sont encadrés en ADTS (Audio Data Transport Stream). Nous détectons le mot de synchronisation 0xFFF et transmettons le flux à Whisper.',
        },
        {
          icon: 'gear',
          title: 'ADIF et LATM également pris en charge',
          desc: 'Les encadrements ADIF (Audio Data Interchange Format) et LATM moins courants fonctionnent également. Pas besoin de reconditionnement manuel ou d’étape ffmpeg.',
        },
        {
          icon: 'clip',
          title: 'Aucun conteneur requis',
          desc: 'AAC vit généralement à l’intérieur de M4A ou MP4, mais parfois le flux brut se retrouve sur votre disque. Mictoo accepte les deux sans poser de questions.',
        },
        {
          icon: 'sparkles',
          title: 'Résumé AI pour les segments d’archives',
          desc: 'Segment de diffusion, clip d’archive radio ou vidage de streaming. Le résumé AI vous permet de trier les archives plus rapidement.',
        },
      ]}
      scenariosTitle="Quand la transcription AAC est-elle appropriée"
      scenarios={[
        {
          icon: 'briefcase',
          title: 'Archive radio de diffusion',
          desc: 'Segment enregistré à partir d’un flux HLS ou Icecast expédié en tant qu’AAC brut. La transcription rend l’archive consultable.',
        },
        {
          icon: 'video',
          title: 'Capture de livestream HLS',
          desc: 'YouTube Live, Twitch ou flux radio HLS capturé sous forme de séquence de morceaux .aac. Déposez le fichier, obtenez le texte.',
        },
        {
          icon: 'mic',
          title: 'Audio extrait d’iPhone',
          desc: 'Audio extrait d’un enregistrement iPhone ou d’un fichier partagé qui a perdu son conteneur M4A et est sorti sous forme d’AAC brut.',
        },
        {
          icon: 'gear',
          title: 'Exportation de service de streaming',
          desc: 'Plateforme de podcast ou application de streaming qui fournit des téléchargements AAC bruts. Évitez la conversion et déposez le fichier directement.',
        },
        {
          icon: 'users',
          title: 'Interview de diffusion',
          desc: 'Interview animée par la radio archivée sous forme d’AAC brut. La transcription est la copie prête à être citée pour des articles ou des émissions.',
        },
        {
          icon: 'editPen',
          title: 'Sortie intermédiaire FFmpeg',
          desc: 'Vous avez extrait la piste audio avec ffmpeg -c:a copy et obtenu un .aac. Déposez-le ici au lieu de le remuxer d’abord en M4A.',
        },
      ]}
      technicalTitle="AAC brut comparé à M4A"
      technicalIntro="AAC est un codec audio. Un fichier se terminant par .aac est souvent un flux brut encadré, tandis que M4A enveloppe généralement l’audio AAC dans un conteneur MP4 avec recherche et métadonnées."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'ADTS est courant',
          desc: 'L’AAC brut est couramment stocké sous forme de trames ADTS, surtout lorsque l’audio a été extrait d’un flux ou d’un flux de diffusion.',
        },
        {
          icon: 'layers',
          title: 'M4A ajoute un conteneur',
          desc: 'M4A peut transporter le même codec AAC avec un chronométrage, un indexage et des métadonnées fournis par un conteneur basé sur MP4.',
        },
        {
          icon: 'search',
          title: 'L’extension n’est qu’un indice',
          desc: 'La structure du fichier est inspectée lors du traitement, donc une extension trompeuse ne devient pas texte de transcription.',
        },
        {
          icon: 'briefcase',
          title: 'Flux de diffusion',
          desc: 'L’AAC brut apparaît souvent après une capture HLS ou une extraction audio. Conservez la référence de la source originale pour le contexte d’archivage.',
        },
      ]}
      faq={[
        {
          q: 'Quels types de fichiers AAC Mictoo accepte-t-il ?',
          a: 'AAC brut en encadrement ADTS (le plus courant), encadrements ADIF et LATM. Nous détectons le mot de synchronisation côté serveur et transmettons le flux à Whisper. AAC à l’intérieur de M4A (voir la page M4A) fonctionne également mais suit un chemin d’entrée différent.',
        },
        {
          q: 'Quelle est la différence entre .aac et .m4a ?',
          a: '.aac est typiquement un flux brut ADTS : trames AAC avec de petits en-têtes de 7 octets, sans conteneur. .m4a est de l’audio AAC enveloppé dans un conteneur MP4 avec des métadonnées et un index de recherche. Les deux utilisent le codec AAC, mais la structure du fichier diffère.',
        },
        {
          q: 'Mon fichier AAC fait plus de 60 Mo. Que faire maintenant ?',
          a: 'L’AAC à des débits binaires de diffusion typiques (128 kbps) est d’environ 1 Mo par minute, donc 60 Mo correspond à un enregistrement d’environ une heure. Si vous êtes connecté, nous divisons automatiquement jusqu’à environ 3 heures. Sinon, réduisez le débit : ffmpeg -i in.aac -b:a 64k -ac 1 out.aac.',
        },
        {
          q: 'La transcription AAC brute produit-elle des transcriptions de moins bonne qualité que M4A ?',
          a: 'Non. Le flux audio est identique ; seul le conteneur diffère. Whisper rééchantillonne à 16 kHz mono en interne de toute façon. La précision dépend de la qualité d’enregistrement sous-jacente, pas de savoir s’il est encadré en ADTS ou enveloppé en MP4.',
        },
        {
          q: 'Mictoo transcrit-il des fichiers AAC non anglais ?',
          a: 'Oui. Whisper large-v3 prend en charge plus de 50 langues avec détection automatique. Pour des accents inhabituels ou des clips de diffusion courts, définissez la langue explicitement pour des résultats de première passe plus propres.',
        },
        {
          q: 'Puis-je obtenir des sous-titres SRT pour le clip de diffusion ?',
          a: 'Oui. Téléchargez SRT ou VTT après transcription. Les horodatages s’alignent sur la chronologie du flux AAC original pour une utilisation dans des éditeurs vidéo, des superpositions d’accessibilité ou un index d’archivage.',
        },
        {
          q: 'Mon fichier AAC est-il conservé sur vos serveurs ?',
          a: 'Non. Le flux audio est envoyé au fournisseur de transcription, traité une fois, puis supprimé de la mémoire. Nous ne l’écrivons jamais sur disque. Les transcriptions ne sont stockées que si vous vous connectez et enregistrez dans l’historique.',
        },
        {
          q: 'Puis-je traduire la transcription dans une autre langue ?',
          a: 'Oui. Après transcription, choisissez une langue cible et cliquez sur Traduire. La traduction fonctionne sur GPT-4o-mini et apparaît à côté de l’original.',
        },
        {
          q: 'Que se passe-t-il si le fichier a une extension .aac mais est en réalité M4A ?',
          a: 'Nous inspectons les octets magiques, pas l’extension. Si le fichier commence par ftyp (signature M4A/MP4), nous le traitons comme M4A. S’il commence par des octets de synchronisation ADTS, nous le traitons comme AAC brut. Dans tous les cas, la transcription fonctionne.',
        },
        {
          q: 'Combien de temps prend une transcription AAC ?',
          a: 'Une AAC de 10 minutes se termine généralement en 15 à 30 secondes de bout en bout. Les fichiers plus volumineux proches de la limite de téléchargement prennent 45 à 80 secondes. La vitesse de téléchargement est souvent l’étape la plus longue.',
        },
      ]}
      ctaHeadline="Déposez votre AAC brut et obtenez la transcription"
      ctaSubtitle="Encadrements ADTS, ADIF et LATM. Archives de diffusion, captures HLS, audio extrait."
      ctaButton="Télécharger AAC pour transcrire"
    />
  )
}