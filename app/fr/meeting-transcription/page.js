import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'pt': 'https://mictoo.com/pt/meeting-transcription',
  'pl': 'https://mictoo.com/pl/meeting-transcription',
  'ja': 'https://mictoo.com/ja/meeting-transcription',
  'ko': 'https://mictoo.com/ko/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: "Transcription de réunion — transcription IA gratuite pour calls et réunions | Mictoo",
  description:
    "Transcription IA gratuite de réunion. Chargez l'enregistrement de n'importe quelle réunion (depuis n'importe quelle plateforme) et obtenez du texte propre en quelques secondes. Sans inscription, sans tarif à la minute, 50+ langues.",
  alternates: { canonical: 'https://mictoo.com/fr/meeting-transcription', languages: LANGS },

  openGraph: {
    title: "Transcription de réunion — transcription IA gratuite pour calls et réunions | Mictoo",
    description: "Transcription IA gratuite de réunion. Chargez l'enregistrement de n'importe quelle réunion (depuis n'importe quelle plateforme) et obtenez du texte propre en quelques secondes. Sans inscription, sans tarif à la minute, 50+ langues.",
    url: "https://mictoo.com/fr/meeting-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcription de réunion — transcription IA gratuite pour calls et réunions | Mictoo",
    description: "Transcription IA gratuite de réunion. Chargez l'enregistrement de n'importe quelle réunion (depuis n'importe quelle plateforme) et obtenez du texte propre en quelques secondes. Sans inscription, sans tarif à la minute, 50+ langues.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrMeetingPage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="Toute plateforme · Gratuit · 50+ langues"
      h1={
        <>
          Transcription de réunion
          <br />
          <span className="text-brand-600">Transcriptions IA de réunion, gratuites</span>
        </>
      }
      subtitle="Transformez n'importe quel enregistrement de réunion en texte propre. Marche avec Zoom, Meet, Teams, Webex, Discord, Skype, dictaphones, tout ce que vous voulez. Sans inscription, sans tarif à la minute."
      howItWorks={[
        {
          icon: '🎙️',
          title: "Récupérez l'enregistrement de la réunion",
          desc: 'Quelle que soit la plateforme (Zoom, Meet, Teams, Webex, Discord, GoToMeeting, dictaphone en présentiel), exportez l\'enregistrement en MP4, MP3, M4A, WAV, FLAC ou OGG.',
        },
        {
          icon: '⚡',
          title: 'Déposez le fichier',
          desc: "On extrait l'audio si besoin et on l'envoie à Whisper large-v3. Une réunion de 30 minutes finit en environ une minute.",
        },
        {
          icon: '📋',
          title: 'Récupérez la transcription',
          desc: "Lisez-la, copiez-la ou téléchargez-la en TXT ou SRT. Corrigez les mots ou le jargon dans l'éditeur avant l'export.",
        },
      ]}
      whyUse={{
        title: 'Pourquoi Mictoo pour les réunions',
        bullets: [
          {
            title: "La plateforme source n'a pas d'importance",
            desc: 'Zoom, Meet, Teams, Webex, Discord, GoToMeeting, BlueJeans, dictaphones en présentiel. Si vous avez le fichier, on transcrit.',
          },
          {
            title: 'Un seul modèle pour toutes vos réunions',
            desc: "Le même Whisper large-v3 pour le call commercial que vous avez enregistré sur Zoom et la rétro d'équipe que vous avez captée sur Teams. Précision constante, format de sortie constant.",
          },
          {
            title: 'Gratuit, sans compteur à la minute',
            desc: "La plupart des transcriptions intégrées aux outils de réunion sont livrées avec une licence qui a son coût. La nôtre est vraiment gratuite, sans plafond mensuel.",
          },
          {
            title: 'Plus de 50 langues',
            desc: "Réunions transfrontalières, conversations bilingues, équipes internationales. Whisper les gère toutes, avec détection automatique ou sélection manuelle.",
          },
          {
            title: "Rien n'est conservé",
            desc: "Le fichier va au prestataire de transcription et est jeté. On n'écrit pas l'audio de votre réunion sur nos serveurs.",
          },
        ],
      }}
      useCases={{
        title: 'Types de réunions courants à transcrire',
        items: [
          {
            title: 'Standups et rétros',
            desc: "Les équipes asynchrones transcrivent les standups pour que ceux dans d'autres fuseaux horaires puissent rattraper. Les rétros gagnent à avoir une trace écrite pour le suivi.",
          },
          {
            title: 'Calls client et customer',
            desc: "Calls commerciaux, check-ins de compte, customer interviews. Sauvegardez la transcription dans le CRM à côté du deal ou du contact.",
          },
          {
            title: 'Sessions de formation interne et onboarding',
            desc: "Les nouveaux arrivants lisent la transcription en regardant la vidéo. Meilleure rétention, cherchable plus tard quand ils oublient une étape.",
          },
          {
            title: 'Réunions de board, séminaires de direction, all-hands',
            desc: "Les transcriptions rendent les communications corporate plus accessibles. Utile pour les employés qui n'ont pas pu participer, et pour la conservation des traces.",
          },
          {
            title: 'Interviews et recherche qualitative',
            desc: "Que ce soit du screening de candidats, des user interviews ou du journalisme, la transcription est le vrai livrable.",
          },
        ],
      }}
      proTips={{
        title: 'Astuces pour transcrire des réunions',
        tips: [
          {
            title: "Extrayez l'audio si la source est une vidéo",
            desc: "Les plateformes de réunion exportent du MP4 avec audio et vidéo. On n'a besoin que de l'audio. ffmpeg -i meeting.mp4 -vn -ac 1 -b:a 64k meeting.mp3 fait passer un MP4 d'1 Go à 25 Mo ou moins. Upload plus rapide, même transcription.",
          },
          {
            title: 'Assurez-vous que tout le monde a un vrai micro',
            desc: 'Les micros intégrés des laptops sur un call Wi-Fi produisent un audio bruité avec de l\'écho. Un casque USB filaire à 20 euros pour chaque participant se rentabilise en précision de transcription.',
          },
          {
            title: 'Mettez en muet les participants qui ne parlent pas',
            desc: 'Les micros ouverts pendant une présentation captent les claviers, le bruit ambiant de la pièce et les conversations parallèles. Whisper transcrit parfois ça comme des mots aberrants.',
          },
          {
            title: 'Pour les réunions avec des non-natifs anglophones, ne découpez pas inutilement',
            desc: "Whisper bénéficie d'un long contexte pour les phrases moins fréquentes. Un fichier continu de 30 minutes se transcrit mieux que trois morceaux de 10 si vous avez le choix.",
          },
          {
            title: 'Les longues réunions se découpent mieux sur des coupures naturelles',
            desc: "Si vous devez découper une réunion de 90 minutes en morceaux, cherchez des pauses naturelles (un café, une transition d'agenda) et coupez là. Moins de risque de couper une phrase en deux.",
          },
          {
            title: 'Choisissez la langue manuellement pour les réunions courtes ou inhabituelles',
            desc: "La détection automatique échantillonne le premier morceau d'audio. Pour les réunions qui démarrent avec de la musique d'attente, un bref bonjour ou du silence, la sélection manuelle est plus fiable.",
          },
        ],
      }}
      faq={[
        {
          q: 'Quelles plateformes de réunion supportez-vous ?',
          a: "Toutes. On travaille avec le fichier d'enregistrement, pas avec la plateforme. Zoom, Microsoft Teams, Google Meet, Webex, Discord, Skype, GoToMeeting, BlueJeans, dictaphones en présentiel. Si le fichier est en MP4, MP3, M4A, WAV, FLAC, OGG ou WEBM, on transcrit.",
        },
        {
          q: 'Ma réunion était sur Zoom (ou Meet, ou Teams). J\'utilise cette page ou la page spécifique ?',
          a: "Même moteur, même précision. Les pages spécifiques par plateforme donnent des astuces plus ciblées. Utilisez celle qui vous semble la plus simple.",
        },
        {
          q: "Aurai-je des étiquettes de locuteur ?",
          a: "Pas automatiquement. Whisper ne fait pas de diarisation par défaut. Pour une réunion avec des voix distinctes, ajoutez les étiquettes manuellement en suivant la conversation. Pour les réunions avec pistes audio séparées par locuteur (Riverside, SquadCast, parfois Zoom), transcrivez chaque piste séparément.",
        },
        {
          q: 'Mon enregistrement de réunion dépasse 60 Mo. Que faire ?',
          a: "Deux options. Extraire l'audio seul depuis la vidéo (une commande ffmpeg), ou découper la réunion en morceaux.",
        },
        {
          q: 'Quelle précision pour la transcription de réunion ?',
          a: "Pour de l'audio propre (bons micros, sans bruit de fond), 90 à 95 %. Pour micros de salle ou speakerphones, 80 à 90 %. Les noms et termes techniques demandent souvent du nettoyage.",
        },
        {
          q: 'Ma réunion sera-t-elle stockée sur vos serveurs ?',
          a: "Non. Le fichier va au prestataire de transcription et est jeté après traitement. On n'écrit pas l'audio de votre réunion ni la transcription dans notre base.",
        },
        {
          q: "La transcription de réunion sur Mictoo est-elle conforme RGPD ?",
          a: "On ne conserve ni l'audio ni la transcription après que vous fermez la page. On est basés en Europe, et nos prestataires (Groq US, OpenAI US) ont des DPA signés. Pour des questions précises, voir notre Politique de Confidentialité.",
        },
        {
          q: 'Puis-je avoir un résumé de la réunion, pas juste la transcription ?',
          a: "Pour l'instant on fournit la transcription complète. Pour les résumés, collez la transcription dans ChatGPT ou Claude avec un prompt du genre « Résume cette transcription de réunion en décisions clés et tâches ».",
        },
        {
          q: 'Quelles langues sont supportées ?',
          a: "Plus de 50, avec détection automatique. Pour les réunions de moins de 5 minutes ou les fichiers avec une intro sans parole, choisissez la langue manuellement pour un meilleur résultat.",
        },
        {
          q: 'Puis-je transcrire une réunion en temps réel ?',
          a: "Non. On travaille avec des fichiers enregistrés. Pour du temps réel, utilisez la fonction de transcription native de la plateforme ou un assistant de réunion dédié.",
        },
        {
          q: 'Comment aligner le SRT avec ma vidéo de réunion ?',
          a: "Téléchargez le SRT après la transcription. La plupart des éditeurs vidéo (Premiere, DaVinci, CapCut, Final Cut) importent les SRT qui s'alignent automatiquement tant que l'audio de la vidéo correspond à ce que vous avez transcrit.",
        },
        {
          q: 'Puis-je transcrire des réunions confidentielles ?',
          a: "Pour les réunions confidentielles (RH, juridique, M&A, board), méfiez-vous de tout service de transcription en cloud, y compris le nôtre. Notre fichier n'est pas stocké, mais il passe par un prestataire de parole tiers pour le traitement. Pour une confidentialité maximale, utilisez une installation locale de Whisper.",
        },
      ]}
      relatedLinks={[
        { href: '/fr/zoom-transcription', label: 'Transcription Zoom', desc: 'Astuces et workflow spécifiques à Zoom.' },
        { href: '/fr/google-meet-transcription', label: 'Transcription Google Meet', desc: 'Pour les enregistrements Google Meet.' },
        { href: '/fr/teams-meeting-transcription', label: 'Transcription Teams', desc: 'Pour les enregistrements Microsoft Teams.' },
        { href: '/fr/business-transcription', label: 'Transcription business', desc: 'Pour les calls client, conférences et calls commerciaux.' },
      ]}
    />
  )
}
