import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'pt': 'https://mictoo.com/pt/interview-transcription',
  'pl': 'https://mictoo.com/pl/interview-transcription',
  'ja': 'https://mictoo.com/ja/interview-transcription',
  'ko': 'https://mictoo.com/ko/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: "Transcription d'interview — générateur IA gratuit | Mictoo",
  description:
    "Transcription IA gratuite d'interview. Chargez l'enregistrement (MP3, M4A, MP4, WAV) et obtenez une transcription propre et horodatée en quelques secondes. Conçu pour les journalistes et chercheurs.",
  alternates: { canonical: 'https://mictoo.com/fr/interview-transcription', languages: LANGS },

  openGraph: {
    title: "Transcription d'interview — générateur IA gratuit | Mictoo",
    description: "Transcription IA gratuite d'interview. Chargez l'enregistrement (MP3, M4A, MP4, WAV) et obtenez une transcription propre et horodatée en quelques secondes. Conçu pour les journalistes et chercheurs.",
    url: "https://mictoo.com/fr/interview-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcription d'interview — générateur IA gratuit | Mictoo",
    description: "Transcription IA gratuite d'interview. Chargez l'enregistrement (MP3, M4A, MP4, WAV) et obtenez une transcription propre et horodatée en quelques secondes. Conçu pour les journalistes et chercheurs.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrInterviewPage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="Journalisme · Recherche · Gratuit"
      h1={
        <>
          Transcription d'interview
          <br />
          <span className="text-brand-600">Transcriptions d'interview gratuites</span>
        </>
      }
      subtitle="Transformez n'importe quel enregistrement d'interview en texte propre et citable. Pour journalistes, chercheurs, podcasteurs, équipes de recrutement. Sans inscription, sans tarif à la minute, sans email."
      howItWorks={[
        {
          icon: '🎙️',
          title: "Déposez l'audio de l'interview",
          desc: "MP3 d'un dictaphone, M4A d'un téléphone, MP4 d'un appel vidéo, WAV d'un enregistreur de terrain. Tout marche.",
        },
        {
          icon: '⚡',
          title: "L'IA transcrit",
          desc: "Whisper large-v3 lit l'audio. Une interview de 30 minutes finit en général en environ une minute.",
        },
        {
          icon: '📋',
          title: 'Lisez, éditez, exportez',
          desc: "Parcourez la transcription avec horodatages. Corrigez les noms ou le jargon dans l'éditeur. Téléchargez en TXT pour les notes, en SRT pour la vidéo, ou copiez vers votre logiciel de codage.",
        },
      ]}
      whyUse={{
        title: "Pourquoi Mictoo pour la transcription d'interview",
        bullets: [
          {
            title: 'Whisper gère bien les interviews',
            desc: 'Un enregistrement unique avec deux voix et des échanges clairs, c\'est le cas le plus propre pour la reconnaissance vocale. La plupart des interviews sortent à 90–95 % de précision dès la première passe.',
          },
          {
            title: 'Horodatages pour citer et retrouver les citations',
            desc: "Chaque ligne de l'export SRT a son horodatage. Quand vous devez vérifier une citation ou revenir à un moment précis de l'enregistrement, l'horodatage vous dit exactement où.",
          },
          {
            title: 'Pas de coût par interview',
            desc: 'Certains services de transcription facturent à la minute ou à l\'interview. Nous, non. Transcrivez-en une ou cinquante, le prix est le même (gratuit).',
          },
          {
            title: 'Plus de 50 langues, interviews bilingues comprises',
            desc: "Les interviews multilingues sont fréquentes en recherche et en journalisme. Whisper gère le code-switching mieux que la plupart des services.",
          },
          {
            title: 'Confidentialité et protection des sources',
            desc: "Le fichier va au prestataire de transcription et est jeté. On ne garde pas l'audio. Pour du matériel sensible, ça compte.",
          },
        ],
      }}
      useCases={{
        title: "Qui utilise les transcriptions d'interview",
        items: [
          {
            title: 'Journalisme et reportages',
            desc: "Les reporters transcrivent leurs interviews pour citer avec précision et pour parcourir de longues conversations à la recherche du matériau le plus utile. Une interview de 60 minutes finit souvent en 3 à 5 citations clés dans le papier publié.",
          },
          {
            title: 'Recherche qualitative et études académiques',
            desc: "Les chercheurs transcrivent des interviews semi-structurées pour coder et analyser dans des outils comme NVivo, Atlas.ti ou MAXQDA. La transcription, c'est le dataset.",
          },
          {
            title: 'Interviews de podcast',
            desc: "Les animateurs d'émission transcrivent les interviews d'invités pour les show notes, les posts de blog d'épisode et les visuels de citation pour les réseaux sociaux. L'audio touche une audience, le texte en touche une autre via la recherche.",
          },
          {
            title: 'Recrutement et présélection de candidats',
            desc: "Recruteurs et hiring managers transcrivent les interviews pour les partager avec l'équipe. Plus facile qu'une vidéo pour des relecteurs dans différents fuseaux. Plus facile de comparer les notes quand tout le monde a le même texte.",
          },
          {
            title: 'User research et customer interviews',
            desc: "Les équipes produit transcrivent les conversations avec les clients pour trouver des patterns. La transcription va dans le repository de recherche (Dovetail, Marvin ou un Notion partagé).",
          },
        ],
      }}
      proTips={{
        title: "Astuces pour la transcription d'interview",
        tips: [
          {
            title: "Utilisez un vrai micro, même pour l'interview au téléphone",
            desc: "Un lavalier ou USB pour l'interviewé en présentiel, et un casque correct pour l'intervieweur au téléphone. La qualité de l'enregistrement est le facteur unique le plus déterminant pour la précision.",
          },
          {
            title: 'Enregistrez dans un endroit calme',
            desc: "Les interviews en café rendent super à l'image et se transcrivent mal. La musique de fond et le brouhaha dégradent la précision plus que ce que les gens pensent.",
          },
          {
            title: "Pour les interviews à deux voix, transcrivez l'enregistrement entier puis ajoutez les étiquettes de locuteur à la main",
            desc: "Whisper ne fait pas de diarisation. Pour une interview propre en question-réponse, ajouter « Intervieweur : » et « Source : » prend environ 5 minutes pour 30 minutes d'interview.",
          },
          {
            title: 'Si vous avez des pistes audio séparées (Riverside, SquadCast), transcrivez chacune séparément',
            desc: "Vous obtenez alors une attribution propre sans deviner. Certains enregistreurs de recherche captent deux micros sur deux canaux d'un même fichier stéréo. Vous pouvez le séparer en deux fichiers mono d'abord.",
          },
          {
            title: 'Sauvegardez la transcription avec la date et le nom de la source',
            desc: 'Un fichier de transcription appelé 2026-05-25-jane-smith.txt est plus facile à retrouver six mois plus tard que transcript-final-v2.txt.',
          },
          {
            title: 'Éditez les 50 premières lignes pour la précision, laissez le reste',
            desc: 'Les gens survolent les transcriptions. La partie de début compte le plus. Au-delà, corrigez seulement les citations que vous comptez utiliser.',
          },
          {
            title: "Fixez la langue manuellement si l'interview n'est pas en anglais",
            desc: "La détection automatique marche pour la plupart des fichiers, mais un faux départ de 5 secondes au début peut l'égarer. Choisir la langue explicitement est plus fiable.",
          },
        ],
      }}
      faq={[
        {
          q: 'Est-ce assez précis pour des citations journalistiques ?',
          a: "Pour citer mot à mot, vérifiez toujours contre l'audio. Whisper a 90 à 95 % des mots justes sur de l'audio d'interview propre. Les 5 à 10 % qu'il manque incluent souvent les noms, termes techniques et chevauchements. Utilisez les horodatages SRT pour revenir à l'enregistrement pour toute citation que vous voulez publier.",
        },
        {
          q: "Aurai-je des étiquettes de locuteur ?",
          a: "Pas automatiquement. Vous les ajoutez en suivant le flow de la conversation. Pour une interview à 2 locuteurs, c'est rapide. Pour les panels ou focus groups, prévoyez plus de temps ou chargez la piste de chaque locuteur séparément si vous les avez.",
        },
        {
          q: 'Puis-je transcrire une interview dans une autre langue ?',
          a: "Oui, plus de 50 langues avec détection automatique. Pour les interviews de moins de 5 minutes ou non-anglaises qui démarrent en chit-chat anglais, choisissez la langue manuellement.",
        },
        {
          q: 'Mon interview fait 90 minutes. Que faire ?',
          a: "Découpez en morceaux sous le plafond de 60 minutes. La coupure naturelle, c'est là où la conversation fait une pause (café à mi-interview, changement de sujet).",
        },
        {
          q: 'Quelle précision pour les termes techniques et les noms propres ?',
          a: "Moins précis que le vocabulaire courant. Whisper ne connaît pas le nom de l'entreprise de votre source, le terme médical qu'elle a utilisé ou le logiciel spécifique qu'elle a mentionné. Comptez sur le fait de devoir corriger ça à la main. Le reste de la transcription sera solide.",
        },
        {
          q: "L'audio est-il stocké ?",
          a: "Non. Le fichier va au prestataire de transcription (Groq, avec OpenAI en backup), est traité, puis jeté. On ne garde pas l'audio sur nos serveurs.",
        },
        {
          q: "Est-ce conforme aux politiques d'éthique de la recherche ?",
          a: "La plupart des protocoles approuvés par un IRB demandent de savoir où l'audio est traité. Nos prestataires traitent aux États-Unis. On ne garde rien. Pour la conformité IRB précise, documentez le workflow et vérifiez avec votre IRB. Pour un contrôle maximal, utilisez une installation locale de Whisper sur votre propre machine.",
        },
        {
          q: 'Puis-je importer la transcription dans NVivo, Atlas.ti ou Dedoose ?',
          a: "Oui. Téléchargez en TXT et importez dans votre outil d'analyse qualitative. La transcription est en texte simple, pas besoin de format spécial.",
        },
        {
          q: 'Combien de temps prend la transcription ?',
          a: "Environ 1 à 2 % de la durée audio. Une interview de 30 minutes finit en environ 60 secondes.",
        },
        {
          q: 'Et si la qualité audio de l\'interview est mauvaise ?',
          a: "Passez-la d'abord par un outil de débruitage (Audacity Noise Reduction ou Adobe Podcast Enhance). Puis chargez la version nettoyée. Une meilleure entrée donne une bien meilleure sortie.",
        },
        {
          q: "Puis-je transcrire une interview enregistrée sur mon téléphone ?",
          a: "Oui. Les mémos vocaux iPhone se sauvent en M4A, les dictaphones Android en général en M4A ou MP3. Les deux marchent. AirDrop ou email vers votre ordi, puis charge ici.",
        },
        {
          q: "Les horodatages SRT correspondent-ils exactement à l'enregistrement original ?",
          a: "Oui, à la milliseconde. Les horodatages SRT reflètent le temps réel dans le fichier audio. Ils fonctionnent pour revenir à un moment précis dans n'importe quel lecteur audio ou vidéo.",
        },
      ]}
      relatedLinks={[
        { href: '/fr/podcast-transcription', label: 'Transcription de podcast', desc: 'Pour les interviews de podcast et les conversations d\'animateur.' },
        { href: '/fr/timestamped-transcription', label: 'Transcription horodatée', desc: 'Pour les horodatages par mot ou par phrase.' },
        { href: '/fr/voice-memo-to-text', label: 'Mémo vocal en texte', desc: 'Pour les interviews enregistrées au téléphone.' },
        { href: '/fr/business-transcription', label: 'Transcription business', desc: 'Pour calls commerciaux, customer calls, focus groups.' },
      ]}
    />
  )
}
