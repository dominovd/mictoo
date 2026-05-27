import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'ja': 'https://mictoo.com/ja/zoom-transcription',
  'ko': 'https://mictoo.com/ko/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Transcription Zoom — transcrivez les enregistrements Zoom gratuitement | Mictoo',
  description:
    "Transcription Zoom gratuite. Chargez votre Cloud Recording (MP4) ou enregistrement local (M4A) et obtenez une transcription IA précise en quelques secondes. Sans inscription, sans tarif à la minute.",
  alternates: { canonical: 'https://mictoo.com/fr/zoom-transcription', languages: LANGS },
}

export default function FrZoomPage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="ZOOM · MP4 · M4A · GRATUIT"
      h1={
        <>
          Transcription Zoom
          <br />
          <span className="text-brand-600">Transformez vos enregistrements Zoom en texte</span>
        </>
      }
      subtitle="Transformez votre enregistrement Zoom en texte propre. Cloud Recording MP4 ou M4A local, les deux marchent. Déposez le fichier, obtenez la transcription en quelques secondes."
      howItWorks={[
        {
          icon: '🎬',
          title: 'Exportez votre enregistrement Zoom',
          desc: "Les cloud recordings se téléchargent en MP4 (vidéo + audio) ou M4A (audio seul). Les enregistrements locaux sont sauvés sur votre machine en MP4 plus M4A. Les deux formats marchent.",
        },
        {
          icon: '⚡',
          title: 'Déposez le fichier',
          desc: "Glissez-le. On extrait l'audio (si c'est une vidéo) et on l'envoie à Whisper large-v3. Une réunion de 30 minutes finit en général en moins d'une minute.",
        },
        {
          icon: '📋',
          title: 'Récupérez la transcription',
          desc: "Lisez-la, copiez-la ou téléchargez-la en TXT ou SRT. Corrigez les noms ou le jargon dans l'éditeur avant l'export.",
        },
      ]}
      whyUse={{
        title: 'Pourquoi Mictoo pour les enregistrements Zoom',
        bullets: [
          {
            title: 'Marche sur tous les plans Zoom, y compris gratuit',
            desc: "La transcription Zoom est verrouillée à certains plans payants. La nôtre ne demande pas de plan Zoom. Enregistrez, téléchargez, chargez, c'est fait.",
          },
          {
            title: 'Mieux avec l\'anglais non natif et le code-switching',
            desc: "Whisper large-v3 gère les accents et les réunions bilingues mieux que la transcription native de Zoom, qui a historiquement été english-first.",
          },
          {
            title: "Le M4A audio seul est assez petit pour être chargé direct",
            desc: "La plupart des réunions Zoom de 30 minutes font entre 15 et 25 Mo en M4A. Ça tient confortablement dans notre tier gratuit sans aucune compression.",
          },
          {
            title: "Pas de souci avec la rétention de 14 jours",
            desc: "Les Cloud Recordings Zoom peuvent disparaître au bout de 14 à 30 jours selon le plan. Une fois le fichier téléchargé et transcrit ici, il est à vous pour toujours.",
          },
          {
            title: 'Confidentialité',
            desc: 'Le fichier va au prestataire de transcription et est jeté. On n\'écrit pas l\'enregistrement Zoom dans notre base ni notre stockage.',
          },
        ],
      }}
      useCases={{
        title: 'À quoi servent les transcriptions Zoom',
        items: [
          {
            title: 'Comptes-rendus de réunion interne',
            desc: "Faites passer l'enregistrement, récupérez le texte, collez dans Notion ou Confluence. Ceux qui ont raté la réunion rattrapent en cinq minutes de lecture au lieu d'une heure de vidéo.",
          },
          {
            title: 'Appels client et appels commerciaux',
            desc: "Sauvegardez la transcription dans le CRM à côté du deal. Le vous du futur, six mois plus tard, vous remerciera.",
          },
          {
            title: 'Standups asynchrones pour équipes distribuées',
            desc: "Certaines équipes enregistrent des standups asynchrones au lieu de faire des réunions en live. Les transcriptions les rendent cherchables et survolables.",
          },
          {
            title: 'Interviews de recherche',
            desc: "Recherche qualitative, user interviews, calls de présélection candidats. Ce que vous codez et taggez, c'est le texte, pas la vidéo.",
          },
          {
            title: 'Transcriptions de webinaire et de panel',
            desc: "Publiez la transcription à côté de l'enregistrement pour l'accessibilité et le SEO. Les moteurs de recherche indexent le texte, pas la vidéo.",
          },
        ],
      }}
      proTips={{
        title: 'Astuces pour transcrire Zoom',
        tips: [
          {
            title: 'Téléchargez le M4A audio seul, pas le MP4',
            desc: "Le Cloud Recording Zoom propose les deux. Le M4A fait un dixième de la taille du MP4 avec une qualité audio identique. Upload plus rapide, bien sous la limite de 60 Mo pour la plupart des réunions.",
          },
          {
            title: 'Activez « Record a separate audio file for each participant » pour les réunions multi-locuteurs',
            desc: "Dans les paramètres Zoom, Recording. Ça vous donne un M4A par locuteur. Transcrivez chacun séparément pour une attribution propre sans diarisation.",
          },
          {
            title: 'Mettez en muet les participants qui ne parlent pas',
            desc: 'Le bruit de fond des micros ouverts pendant une présentation produit des mots fantômes dans la transcription. Ça vaut le coup de l\'imposer sur les gros calls.',
          },
          {
            title: "L'enregistrement local et le cloud ont la même qualité",
            desc: 'Les deux enregistrent avec les mêmes paramètres audio par défaut. Le local est plus rapide (pas d\'upload vers Zoom d\'abord) mais prend de l\'espace disque.',
          },
          {
            title: "Pour du contenu sensible, utilisez l'enregistrement local",
            desc: "L'enregistrement cloud stocke votre réunion sur les serveurs Zoom. Le local reste sur votre machine jusqu'à ce que vous choisissiez où l'envoyer. Pour des conversations confidentielles avec un client ou des RH, local puis direct chez nous est le chemin qui préserve la confidentialité.",
          },
          {
            title: 'Les longues réunions Zoom (plus de 60 minutes) doivent être découpées',
            desc: "Notre plafond par fichier est 60 minutes en connecté. Pour un call de 90 minutes, découpez en deux morceaux de 45. Facile dans Audacity (File, Export, Multiple) ou avec ffmpeg.",
          },
        ],
      }}
      faq={[
        {
          q: 'Mictoo fonctionne avec les Cloud Recordings Zoom ?',
          a: 'Oui. Téléchargez le MP4 ou M4A depuis votre bibliothèque d\'enregistrements Zoom, puis chargez sur Mictoo. L\'export M4A audio seul est plus rapide et plus petit.',
        },
        {
          q: 'Ça marche avec les enregistrements Zoom Phone ?',
          a: "Oui. Zoom Phone enregistre en MP3 ou M4A. Les deux marchent. L'audio de qualité téléphonique (8 kHz mono) se transcrit un peu moins précisément qu'une réunion vidéo, mais le résultat reste lisible.",
        },
        {
          q: 'Et les enregistrements locaux Zoom ?',
          a: "Même histoire. Zoom les sauve en MP4 plus M4A dans votre dossier Zoom par défaut. Chargez le M4A ici.",
        },
        {
          q: "Aurai-je des étiquettes de locuteur ?",
          a: "Pas automatiquement. Si vous avez activé « Record a separate audio file for each participant » dans les paramètres Zoom, vous pouvez transcrire le fichier de chaque locuteur séparément. Sinon, il faudra ajouter les étiquettes manuellement en suivant le flow de la conversation.",
        },
        {
          q: 'Mon enregistrement Zoom dépasse 60 Mo. Que faire ?',
          a: "Utilisez le téléchargement audio seul (M4A) au lieu du MP4. Si c'est encore trop gros, découpez en morceaux ou ré-encodez à un débit plus bas. Voir nos guides de compression et de découpe.",
        },
        {
          q: 'Comment Mictoo se compare à la transcription native de Zoom ?',
          a: "On est meilleur sur la précision pour l'anglais non natif, meilleur sur les accents, et avec une couverture de langues plus large (50+). La transcription native Zoom est plus pratique si vous payez déjà le bon plan Zoom. La nôtre est gratuite et marche quel que soit le tier Zoom.",
        },
        {
          q: 'Mon enregistrement Zoom est-il stocké sur vos serveurs ?',
          a: "Non. Le fichier va au prestataire de transcription (Groq, avec OpenAI en backup), se fait transcrire, puis est jeté. On n'écrit pas l'enregistrement sur disque.",
        },
        {
          q: 'Puis-je transcrire une réunion Zoom en temps réel ?',
          a: "Non. On travaille uniquement avec des fichiers enregistrés. Pour du temps réel pendant la réunion, l'outil intégré de Zoom ou un assistant de réunion dédié serait le bon choix.",
        },
        {
          q: 'Et les webinaires Zoom et les grandes réunions ?',
          a: 'Même workflow. Téléchargez l\'enregistrement, chargez, transcrivez. Pour les webinaires très longs (plus de 60 minutes), découpez d\'abord.',
        },
        {
          q: 'Ça transcrit les messages de chat de la réunion ?',
          a: 'Non. Les messages de chat sont sauvegardés séparément par Zoom (en TXT dans votre dossier Zoom). On transcrit uniquement l\'audio. Combinez les deux vous-même si vous avez besoin des deux.',
        },
        {
          q: "Quelle précision la transcription audio Zoom ?",
          a: "Pour de l'audio de réunion propre avec de bons micros, comptez 90 à 95 %. Pour des réunions avec un mauvais audio (micro de laptop, salle bruyante, Wi-Fi faible), la précision baisse un peu. Les noms et termes techniques demandent souvent du nettoyage.",
        },
        {
          q: 'Ça marche aussi pour les enregistrements Microsoft Teams ou Google Meet ?',
          a: 'Oui, même moteur. On a des pages dédiées pour Google Meet et Microsoft Teams.',
        },
      ]}
      relatedLinks={[
        { href: '/fr/google-meet-transcription', label: 'Transcription Google Meet', desc: 'Même workflow pour les enregistrements Google Meet.' },
        { href: '/fr/teams-meeting-transcription', label: 'Transcription Teams', desc: 'Pour les enregistrements Microsoft Teams.' },
        { href: '/fr/meeting-transcription', label: 'Transcription de réunion', desc: 'Page générique si votre enregistrement vient d\'une autre plateforme.' },
        { href: '/fr/interview-transcription', label: "Transcription d'interview", desc: 'Pour les calls un à un et les interviews qualitatives.' },
      ]}
    />
  )
}
