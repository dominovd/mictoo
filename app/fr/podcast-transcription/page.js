import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'ko': 'https://mictoo.com/ko/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'Transcription de podcast — générateur IA gratuit | Mictoo',
  description:
    "Transcription IA gratuite de podcast. Chargez votre épisode (MP3, MP4, M4A, WAV) et obtenez une transcription propre et horodatée en quelques secondes. Sans inscription, sans tarif à la minute.",
  alternates: { canonical: 'https://mictoo.com/fr/podcast-transcription', languages: LANGS },
}

export default function FrPodcastPage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="Podcasteurs · Animateurs · Gratuit"
      h1={
        <>
          Transcription de podcast
          <br />
          <span className="text-brand-600">Générateur gratuit de transcriptions</span>
        </>
      }
      subtitle="Transformez n'importe quel épisode en texte propre. Chargez votre MP3, MP4 ou M4A et obtenez la transcription en quelques secondes. Sans compte, sans tarif à la minute."
      howItWorks={[
        {
          icon: '📂',
          title: "Déposez l'épisode",
          desc: "MP3, MP4, M4A, WAV ou FLAC. Cloud Recording de Riverside, exports de Descript, audio brut de Zoom, fichiers anchor.fm. Tout marche.",
        },
        {
          icon: '⚡',
          title: "L'IA fait le boulot",
          desc: "Whisper large-v3 tourne sur notre backend et convertit l'audio en texte. La plupart des épisodes de 30 minutes finissent en moins d'une minute.",
        },
        {
          icon: '📋',
          title: 'Copiez, téléchargez ou éditez',
          desc: "Récupérez le texte en TXT, en SRT pour les sous-titres, ou collez direct dans votre éditeur de show notes. Réparez les mots faux dans notre visualiseur avant l'export.",
        },
      ]}
      whyUse={{
        title: 'Pourquoi les podcasteurs choisissent Mictoo',
        bullets: [
          {
            title: 'Les longs épisodes, ça passe',
            desc: "Jusqu'à 60 minutes par fichier une fois connecté (gratuit). Pour une découpe en deux parties, on garde les horodatages relatifs pour pouvoir recoller les fichiers SRT sans calculer.",
          },
          {
            title: 'Les accents et les chevauchements tiennent',
            desc: "Whisper large-v3 est le modèle de parole ouvert le plus solide qu'on connaisse pour l'anglais non natif. Si votre co-animateur est à Berlin ou São Paulo, la transcription ne va pas se transformer en bouillie.",
          },
          {
            title: 'Les nappes musicales ne le cassent pas',
            desc: "Notre pipeline fait de la détection d'activité vocale avant la transcription. Les longues intros instrumentales sont marquées comme silence, pas comme des mots inventés. Les lectures sponsorisées avec musique en dessous sortent aussi propres.",
          },
          {
            title: "Pas d'abonnement",
            desc: "Pas mal de podcasteurs transcrivent un ou deux épisodes par mois. Payer 15 euros pour un seat mensuel, c'est du gâchis. Chargez le fichier quand vous en avez besoin. On se finance par la pub et un futur tier Pro pour les gros utilisateurs.",
          },
          {
            title: "Votre audio n'est pas stocké",
            desc: "Les fichiers vont direct au prestataire de parole, sont transcrits, puis disparaissent. On ne garde pas vos épisodes, et les prestataires qu'on utilise (Groq, OpenAI) n'entraînent pas sur les données API.",
          },
        ],
      }}
      useCases={{
        title: 'Ce que les podcasteurs font vraiment avec la transcription',
        items: [
          {
            title: 'Show notes et posts de blog',
            desc: 'Collez la transcription dans votre CMS, marquez les chapitres, mettez les liens, publiez le post. Un épisode de 45 minutes donne en général 6000 à 8000 mots de matériau source. Trois ou quatre posts de blog légèrement édités à partir d\'un seul enregistrement.',
          },
          {
            title: 'Cartes de citation pour les réseaux',
            desc: "Scannez la transcription pour la phrase qui a marqué et transformez-la en visuel. Bien plus rapide que de scruter l'audio en x1.5 pour retrouver le timecode.",
          },
          {
            title: 'Archive cherchable de votre back catalog',
            desc: "Passez vos anciens épisodes en transcription en lot et vous obtenez d'un coup un Ctrl+F sur des années de conversations. Utile quand un invité revient et que vous voulez vous rappeler de quoi vous parliez la dernière fois.",
          },
          {
            title: 'Remplacement des sous-titres auto YouTube',
            desc: "Les sous-titres auto YouTube sont médiocres pour les podcasts à deux voix avec de la musique. Chargez un SRT de Mictoo à la place. Meilleure ponctuation, moins d'erreurs, meilleure accessibilité.",
          },
          {
            title: "Lien de transcription pour l'accessibilité",
            desc: "Pas mal de podcasteurs ajoutent un lien « lire la transcription » dans les show notes RSS. Ça aide les auditeurs sourds et malentendants, et ça aide les moteurs à trouver votre contenu.",
          },
        ],
      }}
      proTips={{
        title: 'Astuces pour des transcriptions de podcast plus propres',
        tips: [
          {
            title: "Coupez la musique d'intro et d'outro d'abord",
            desc: "Whisper ignore bien la musique, mais 90 secondes de cold open instrumental déclenchent parfois des mots fantômes. Si votre intro est la même à chaque épisode, coupez les 1:30 premières dans Audacity avant l'upload. Vous gagnez plusieurs minutes de nettoyage.",
          },
          {
            title: 'Exportez en 64 kbps mono si votre fichier brut est énorme',
            desc: "La voix n'a pas besoin de stéréo, et 64 kbps suffit largement pour la parole. Un épisode de deux heures à 64 kbps mono fait environ 55 Mo. Ça tient dans la limite de 60 Mo en connecté sans découpe. ffmpeg : ffmpeg -i episode.wav -ac 1 -b:a 64k episode.mp3.",
          },
          {
            title: "Pour les interviews avec un mauvais audio d'invité, transcrivez chaque piste séparément",
            desc: "Si vous enregistrez sur Riverside ou SquadCast et avez des pistes séparées par locuteur, chargez chacune à part. Whisper s'en sort plus facilement avec une seule voix à la fois. Attribution plus propre, moins de mots perdus sur les chevauchements.",
          },
          {
            title: 'Fixez la langue explicitement pour les épisodes courts',
            desc: "La détection automatique échantillonne le premier morceau d'audio. Si vous ouvrez avec un cold open d'un mot ou un rire, la détection peut partir sur la mauvaise langue. Pour tout ce qui fait moins de 5 minutes, choisissez la langue manuellement.",
          },
          {
            title: 'La ponctuation sera imparfaite. Corrigez les 10 premières lignes, laissez le reste',
            desc: "Whisper attrape la plupart de la ponctuation, mais loupe parfois les points-virgules et le discours direct. Pour les show notes, les 10 premières lignes comptent (les gens les survolent). Au-delà, expédiez tel quel.",
          },
          {
            title: "Utilisez l'export SRT même si vous n'avez pas besoin de sous-titres",
            desc: "Le SRT vous donne des horodatages toutes les quelques secondes. Même si vous collez dans un post de blog, ces horodatages vous aident à revenir à l'audio pour vérifier une citation. On a un générateur SRT gratuit sur ce même site.",
          },
        ],
      }}
      faq={[
        {
          q: 'Puis-je transcrire un épisode de 2 heures ?',
          a: "Oui, mais découpez d'abord. Notre plafond par fichier est de 30 minutes en gratuit, ou 60 minutes une fois connecté. Pour un épisode de 2 heures, découpez en deux ou trois parties et transcrivez chacune. Notre guide de découpe d'audio explique comment faire en 60 secondes avec ffmpeg ou Audacity.",
        },
        {
          q: "Aurai-je des étiquettes de locuteur (animateur vs invité) ?",
          a: "Pas automatiquement pour l'instant. Whisper en lui-même ne fait pas de diarisation. Si vous avez des pistes séparées par locuteur (fréquent dans Riverside, SquadCast, Zencastr), chargez chacune séparément et étiquetez-les vous-même dans la transcription finale. On regarde pour ajouter la diarisation, mais seulement quand on pourra la faire bien.",
        },
        {
          q: 'Comment ça gère les accents et les podcasts bilingues ?',
          a: "Whisper large-v3 a été entraîné sur 680 000 heures d'audio multilingue. L'anglais non natif, les accents régionaux et le code-switching marchent mieux que sur les plus petits modèles. Pour un podcast qui passe de l'anglais à l'espagnol en plein épisode, choisissez « Détection automatique » et Whisper suit.",
        },
        {
          q: 'Quels formats audio supportez-vous pour le podcast ?',
          a: "MP3, M4A, WAV, FLAC, OGG, WEBM et AAC. Plus les fichiers vidéo comme MP4 et MOV (on extrait l'audio). Si votre hébergeur de podcast vous laisse télécharger dans un de ces formats, vous êtes paré. AIFF et ALAC ne sont pas supportés directement, convertissez en WAV d'abord.",
        },
        {
          q: "Y a-t-il une limite de mots par épisode ?",
          a: "Pas de limite de mots. Seulement la limite de taille de fichier (25 Mo gratuit, 60 Mo connecté) et de durée (30 min gratuit, 60 min connecté). Un épisode typique de 60 minutes produit 9000 à 11 000 mots.",
        },
        {
          q: 'Quelle précision la transcription de podcast a comparé à un humain ?',
          a: "Pour de l'audio studio propre, Whisper large-v3 tourne autour de 5 à 10 % de taux d'erreur de mots. Les transcripteurs humains sont à 3 à 5 %. Pour la plupart des show notes et du repurposing en blog, l'IA suffit. Pour des témoignages judiciaires ou des citations académiques, prenez un humain.",
        },
        {
          q: 'Mon épisode sera-t-il stocké sur vos serveurs ?',
          a: "Non. On transmet l'audio direct au prestataire de transcription (Groq, avec OpenAI en backup). Ils le traitent et on le jette. On n'écrit jamais votre fichier de podcast dans notre base ni dans notre stockage.",
        },
        {
          q: 'Puis-je télécharger en SRT pour les sous-titres ?',
          a: "Oui. Après la transcription, cliquez le bouton de téléchargement SRT. Utilisez-le direct dans YouTube Studio, Premiere Pro, DaVinci Resolve ou tout éditeur vidéo.",
        },
        {
          q: 'Vous facturez à la minute ?',
          a: "Non. La transcription sur Mictoo est gratuite. On est financés par la publicité pour l'instant, avec un tier Pro payant qui arrive plus tard pour les utilisateurs qui ont besoin de fichiers plus longs ou d'uploads en lot.",
        },
        {
          q: "Mon épisode contient des gros mots. Seront-ils censurés ?",
          a: "Aucun filtrage. La transcription reflète exactement ce qui a été dit. Si vous voulez éditer les jurons pour une version propre, faites-le vous-même après le téléchargement.",
        },
        {
          q: "Puis-je éditer la transcription avant de la télécharger ?",
          a: "Oui. Il y a un éditeur basique dans la vue de résultat. Corrigez les mots faux, puis téléchargez la version éditée en TXT ou SRT.",
        },
        {
          q: "La transcription de podcast sur Mictoo est-elle conforme au RGPD ?",
          a: "On ne stocke ni l'audio ni la transcription sur nos serveurs après que vous quittez la page. On est basés en Europe, et nos prestataires (Groq US, OpenAI US) ont des DPA signés. Pour des questions précises de conformité, voir notre Politique de Confidentialité ou écrivez à info@mictoo.com.",
        },
      ]}
      relatedLinks={[
        { href: '/fr/free-srt-generator', label: 'Générateur SRT', desc: "Fichiers de sous-titres prêts pour podcast, pas juste du texte." },
        { href: '/fr/timestamped-transcription', label: 'Transcription horodatée', desc: 'Pour les marqueurs de chapitre, les coupes et la recherche de citations.' },
        { href: '/fr/interview-transcription', label: "Transcription d'interview", desc: "Même moteur, optimisé pour le format un à un." },
        { href: '/fr/youtube-to-text', label: 'YouTube en texte', desc: "Votre épisode est déjà sur YouTube ? Récupérez l'audio depuis là." },
      ]}
    />
  )
}
