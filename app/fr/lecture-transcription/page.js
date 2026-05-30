import LandingLayout from '@/components/LandingLayout'

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
  title: 'Transcription de cours — générateur gratuit de transcriptions | Mictoo',
  description:
    "Transcription gratuite de cours. Chargez l'enregistrement d'un cours, d'une conférence universitaire ou d'un séminaire (MP3, M4A, MP4) et obtenez du texte propre en quelques secondes. Conçu pour les étudiants.",
  alternates: { canonical: 'https://mictoo.com/fr/lecture-transcription', languages: LANGS },

  openGraph: {
    title: "Transcription de cours — générateur gratuit de transcriptions | Mictoo",
    description: "Transcription gratuite de cours. Chargez l'enregistrement d'un cours, d'une conférence universitaire ou d'un séminaire (MP3, M4A, MP4) et obtenez du texte propre en quelques secondes. Conçu pour les étudiants.",
    url: "https://mictoo.com/fr/lecture-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcription de cours — générateur gratuit de transcriptions | Mictoo",
    description: "Transcription gratuite de cours. Chargez l'enregistrement d'un cours, d'une conférence universitaire ou d'un séminaire (MP3, M4A, MP4) et obtenez du texte propre en quelques secondes. Conçu pour les étudiants.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrLecturePage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="Étudiants · Universitaires · Gratuit"
      h1={
        <>
          Transcription de cours
          <br />
          <span className="text-brand-600">Outil gratuit de transcription de cours</span>
        </>
      }
      subtitle="Transformez n'importe quel cours enregistré en texte propre pour réviser. Université, cours en ligne, conférence, formation pro. Sans inscription, sans tarif à la minute."
      howItWorks={[
        {
          icon: '🎓',
          title: "Déposez l'audio ou la vidéo du cours",
          desc: "MP3 d'un dictaphone, M4A d'un téléphone, MP4 d'un cours sur Zoom ou d'une capture d'écran d'un cours en ligne. WAV d'un enregistreur de recherche. Tout marche.",
        },
        {
          icon: '⚡',
          title: "L'IA transcrit",
          desc: "Whisper large-v3 lit l'audio. Un cours de 60 minutes finit en environ une minute.",
        },
        {
          icon: '📋',
          title: 'Récupérez la transcription',
          desc: "Lisez-la, copiez-la dans vos notes ou téléchargez-la en TXT ou SRT. Corrigez les termes techniques dans l'éditeur avant l'export.",
        },
      ]}
      whyUse={{
        title: 'Pourquoi Mictoo pour les cours',
        bullets: [
          {
            title: 'Le long format, ça passe',
            desc: "Jusqu'à 60 minutes par fichier une fois connecté (gratuit). Pour un cours de 90 minutes, découpez en deux morceaux de 45. La transcription est concaténable.",
          },
          {
            title: 'Gère le vocabulaire technique mieux que la plupart',
            desc: "Whisper a été entraîné sur une énorme variété d'audio incluant des cours académiques. Latin, jargon technique, termes mathématiques, fragments de code sortent souvent plus propres qu'on s'y attend.",
          },
          {
            title: 'Pas de coût par cours',
            desc: "Pour les étudiants, payer la transcription par cours, c'est du gâchis. Gratuit sans compteur à la minute signifie que vous pouvez transcrire chaque cours d'un semestre.",
          },
          {
            title: 'Confidentialité et droits',
            desc: "Le fichier va au prestataire de transcription et est jeté. On ne garde pas l'audio. Utile quand vous transcrivez du matériel qui vous appartient (vos enregistrements) mais que vous ne voulez pas charger sur un service de stockage tiers.",
          },
          {
            title: 'Plus de 50 langues',
            desc: "Étudiants internationaux et cours en ligne dans des langues non anglaises, tout marche. La détection automatique gère la plupart des cas.",
          },
        ],
      }}
      useCases={{
        title: 'À quoi servent les transcriptions de cours pour étudiants et universitaires',
        items: [
          {
            title: 'Notes de cours cherchables',
            desc: "Déposez la transcription dans Notion, Obsidian ou un doc Word. Ctrl+F sur n'importe quel terme que le prof a mentionné. Mieux que scruter un fichier audio de 90 minutes.",
          },
          {
            title: 'Révision pour les examens',
            desc: "Survolez la transcription en relisant vos notes manuscrites. Attrape ce que vous avez raté pendant le cours en direct.",
          },
          {
            title: 'Traduire des cours pour les non-natifs',
            desc: "Transcrivez dans la langue source, puis passez par DeepL ou ChatGPT pour traduire. Utile pour les étudiants qui suivent un cours dans leur deuxième langue.",
          },
          {
            title: 'Accessibilité pour étudiants sourds ou malentendants',
            desc: "Une transcription ou un fichier SRT donne le même contenu dans une autre modalité. Certaines universités l'imposent pour le contenu de cours enregistré.",
          },
          {
            title: 'Création de flashcards et matériel de révision',
            desc: "Les transcriptions alimentent des cartes Anki, des docs de résumé ou des outils de révision assistés par IA.",
          },
        ],
      }}
      proTips={{
        title: 'Astuces pour transcrire des cours',
        tips: [
          {
            title: 'Asseyez-vous près du prof pour les cours en présentiel',
            desc: "Enregistrer du fond de la salle à travers le bruit ambiant produit une transcription pleine de trous. Téléphone au premier rang, écran vers le bas, capte une voix propre.",
          },
          {
            title: 'Utilisez un dictaphone dédié pour les longs cours',
            desc: "Les enregistrements téléphone ont un auto-leveling agressif et de la réduction de bruit qui nuisent à la transcription. Un Zoom H1n ou enregistreur entry-level similaire donne un audio bien plus propre pour environ 80 euros.",
          },
          {
            title: "Pour les cours en ligne, enregistrez l'audio système directement",
            desc: "OBS Studio sur Windows ou Mac peut enregistrer l'audio du cours direct depuis le système. Plus propre que la capture par le micro du laptop.",
          },
          {
            title: 'Fixez la langue manuellement',
            desc: "La détection automatique est en général juste mais peut être troublée par un warmup du prof dans une autre langue. Choisissez la langue du cours explicitement dans le menu.",
          },
          {
            title: "Coupez les 5 premières minutes si ce sont des annonces administratives",
            desc: "« Vous avez fait les devoirs ? Vous avez lu le chapitre 3 ? » ne sert pas à la transcription. Coupez dans Audacity avant l'upload pour économiser le budget taille.",
          },
          {
            title: "Pour les cours STEM avec équations, la transcription capte les maths parlées, pas les équations",
            desc: "Les expressions mathématiques écrites au tableau ne sont pas dans l'audio, donc pas dans la transcription. Il faut quand même les capter à part (photos du tableau, captures des slides).",
          },
          {
            title: "Ré-écoutez l'enregistrement en lisant la transcription à la première relecture",
            desc: "C'est le meilleur moyen de corriger les termes spécifiques au prof et les références d'équations. Une fois nettoyée, la transcription se tient toute seule.",
          },
        ],
      }}
      faq={[
        {
          q: 'Est-ce assez précis pour les travaux universitaires ?',
          a: "Pour la plupart du contenu de cours, oui. Whisper large-v3 produit 90 à 95 % de précision sur de l'audio de cours propre. Les termes techniques et noms propres demandent souvent du nettoyage. Utilisez la transcription comme notes, pas comme source canonique pour citer.",
        },
        {
          q: "Mon cours est dans une langue autre que l'anglais. Ça va marcher ?",
          a: "Oui. Whisper supporte plus de 50 langues avec une bonne précision dans les grandes langues et un support de base pour beaucoup d'autres. Choisissez la langue manuellement dans le menu pour de meilleurs résultats.",
        },
        {
          q: 'Mon cours fait 90 minutes. Que faire ?',
          a: 'Découpez-le. Notre plafond est de 60 minutes par fichier. Coupez en deux morceaux de 45 à un point de pause naturel (la pause de mi-cours ou une transition de sujet).',
        },
        {
          q: 'Est-ce légal de transcrire des cours ?',
          a: "Pour un usage personnel d'étude, généralement oui dans la plupart des juridictions, tant que vous avez légalement accès à l'enregistrement. Pour la redistribution (publication de la transcription en ligne, vente de supports de révision), il faut l'autorisation du conférencier ou de l'institution. Certaines universités ont des politiques explicites sur l'enregistrement et la transcription des cours. Vérifiez la vôtre.",
        },
        {
          q: "Puis-je transcrire un cours vidéo de Coursera, edX ou Khan Academy ?",
          a: "Oui, si vous pouvez télécharger le fichier vidéo. Certaines plateformes autorisent le téléchargement pour visionnage hors ligne (vous obtenez un MP4). Chargez-le ici. Pour les plateformes qui ne le permettent pas, vérifiez leurs conditions avant de scraper.",
        },
        {
          q: 'La transcription inclura-t-elle le contenu des slides ?',
          a: "Non. On transcrit uniquement l'audio. Si le prof lit les slides à voix haute, ce texte sera dans la transcription. Si les slides ont du texte à l'écran que le prof n'a pas lu, ça n'y sera pas. Combinez avec des captures des slides pour des notes complètes.",
        },
        {
          q: 'Quelle précision pour les termes techniques et le jargon ?',
          a: "Moins précis que le vocabulaire courant. Pour les termes médicaux en latin, les symboles maths avancés, les acronymes de niche, comptez sur des corrections à la main. Le flow général du cours sera solide.",
        },
        {
          q: 'Puis-je exporter la transcription vers mon app de prise de notes ?',
          a: "Oui. Téléchargez en TXT et collez dans Notion, Obsidian, OneNote, Bear ou tout outil qui supporte le texte. Le SRT marche dans les lecteurs vidéo si vous voulez des sous-titres à côté de l'enregistrement.",
        },
        {
          q: "L'audio de mon cours est-il stocké ?",
          a: "Non. Le fichier va à notre prestataire de transcription, est traité, puis jeté. On ne garde pas l'audio.",
        },
        {
          q: 'Combien de temps prend la transcription d\'un cours ?',
          a: "Environ 1 à 2 % de la durée audio. Un cours de 60 minutes finit en environ 60 secondes. L'upload est en général l'attente la plus longue.",
        },
        {
          q: 'Puis-je avoir des horodatages pour revenir à des moments précis ?',
          a: "Oui. Téléchargez en SRT. Chaque ligne a un horodatage aligné sur l'audio original. Utile pour revenir à un point précis pendant la préparation d'examen.",
        },
        {
          q: 'Et si le cours a un Q&A à la fin ?',
          a: "Le Q&A se transcrit comme le cours principal. Les questions du public sortent parfois moins clairement (les membres du public sont en général plus loin du micro), mais la réponse du prof devrait être propre. Ajoutez une section « Q&A » dans vos notes.",
        },
      ]}
      relatedLinks={[
        { href: '/fr/transcribe-audio-to-text', label: 'Audio en texte', desc: 'Pour les fichiers audio génériques.' },
        { href: '/fr/transcribe-video-to-text', label: 'Vidéo en texte', desc: 'Pour les cours vidéo (MP4, MOV).' },
        { href: '/fr/timestamped-transcription', label: 'Transcription horodatée', desc: 'Pour revenir à des moments précis.' },
        { href: '/fr/how-to-split-audio', label: "Comment découper l'audio", desc: 'Pour les cours de plus de 60 minutes.' },
      ]}
    />
  )
}
