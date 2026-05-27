import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'ko': 'https://mictoo.com/ko/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: 'Transcription business — outil gratuit pour réunions et calls | Mictoo',
  description:
    "Transcription business gratuite. Calls commerciaux, customer interviews, focus groups, réunions de board, conférences. Chargez et obtenez une transcription IA propre en quelques secondes.",
  alternates: { canonical: 'https://mictoo.com/fr/business-transcription', languages: LANGS },
}

export default function FrBusinessPage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="Ventes · Recherche · Compliance · Gratuit"
      h1={
        <>
          Transcription business
          <br />
          <span className="text-brand-600">Audio business en texte, gratuit</span>
        </>
      }
      subtitle="Transformez n'importe quel audio business en texte propre. Calls commerciaux, customer interviews, focus groups, conférences, réunions de board. Sans inscription, sans tarif à la minute."
      howItWorks={[
        {
          icon: '🎙️',
          title: "Déposez l'audio ou la vidéo",
          desc: "MP3 d'un enregistreur d'appel, M4A d'un téléphone, MP4 d'une visioconférence, WAV d'un enregistreur de terrain. Call commercial de Gong, enregistrement Zoom d'une customer interview, M4A d'une réunion de board. Tout marche.",
        },
        {
          icon: '⚡',
          title: "L'IA transcrit",
          desc: "Whisper large-v3 traite l'audio. Un call de 30 minutes finit en environ une minute. Une réunion de 60 minutes en un peu moins de deux.",
        },
        {
          icon: '📋',
          title: 'Récupérez la transcription',
          desc: 'Lisez-la, copiez-la ou téléchargez-la en TXT ou SRT. Collez dans votre CRM, votre repository de recherche, votre doc de projet ou votre archive compliance.',
        },
      ]}
      whyUse={{
        title: "Pourquoi Mictoo pour l'audio business",
        bullets: [
          {
            title: 'Même précision que les options chères',
            desc: "Whisper large-v3 est le modèle derrière pas mal d'outils de transcription d'entreprise payants. On le fait tourner sans le coût de licence par seat.",
          },
          {
            title: "Adapté à un usage sporadique",
            desc: "Si vous transcrivez un call commercial par semaine, payer le seat mensuel d'un outil d'entreprise, c'est du gâchis. Gratuit sans compteur à la minute colle au pattern d'usage sporadique.",
          },
          {
            title: 'Plus de 50 langues, utile pour le business international',
            desc: "Customer interviews multilingues, calls commerciaux transfrontaliers, panels avec des non-natifs anglophones. Tout est couvert.",
          },
          {
            title: "Aucun fichier n'est conservé",
            desc: "L'enregistrement va au prestataire de transcription et est jeté. Pour de l'audio business que vous ne voulez pas voir traîner sur un serveur tiers, ça compte.",
          },
          {
            title: 'Export SRT pour les éditeurs vidéo',
            desc: "Si votre audio business vient d'une vidéo (panel de conférence, town hall), le SRT s'enchaîne direct dans Premiere, DaVinci ou YouTube Studio pour le boulot de sous-titres.",
          },
        ],
      }}
      useCases={{
        title: 'Cas typiques de transcription business',
        items: [
          {
            title: 'Résumés de calls commerciaux',
            desc: "Les account executives déposent les enregistrements d'appel dans le CRM à côté du deal. Handoffs plus rapides, meilleure récupération de citations pour les emails de suivi, coaching plus facile pour les sales managers.",
          },
          {
            title: 'Customer interviews pour la recherche produit',
            desc: 'Les product managers et chercheurs UX transcrivent les conversations avec les clients pour coder des patterns, écrire des user stories et construire des repositories de recherche.',
          },
          {
            title: 'Transcriptions de focus group',
            desc: "Les agences d'études de marché transcrivent les sessions de focus group pour analyse. Ce qui se code, c'est la transcription, pas la vidéo.",
          },
          {
            title: 'Réunions de board et séminaires de direction',
            desc: "Les transcriptions rendent les décisions corporate cherchables et réduisent l'ambiguïté des mois plus tard. Utile pour la gouvernance, la com interne et les pistes d'audit.",
          },
          {
            title: 'Enregistrements de panels de conférence',
            desc: "Les équipes marketing et PR transcrivent les panels où leurs leaders ont pris la parole. Posts de blog, visuels de citation pour les réseaux, contenu de sales enablement. Tout part de la transcription.",
          },
        ],
      }}
      proTips={{
        title: 'Astuces pour la transcription business',
        tips: [
          {
            title: "Pour les enregistrements de calls commerciaux, préférez Gong ou Chorus si possible",
            desc: "Ces outils gèrent l'enregistrement, la transcription et le logging CRM ensemble. Mictoo colle à de la transcription occasionnelle, pas à une opération sales à fort volume.",
          },
          {
            title: 'Pour les customer interviews, demandez le consentement et expliquez comment l\'audio est utilisé',
            desc: "« Je vais enregistrer cette conversation pour ne pas avoir à prendre de notes. L'audio est transcrit et reste dans notre repository de recherche. » C'est aussi légalement obligatoire dans pas mal de juridictions pour tout enregistrement d'appel.",
          },
          {
            title: 'Utilisez un bon micro, surtout pour le client',
            desc: "Les voix de client captées par ligne téléphonique se transcrivent 5 à 10 % moins bien que les calls en dial-in avec casque USB côté client. Pour les interviews à haute valeur, envoyez un casque avant le call.",
          },
          {
            title: "Coupez le small talk avant l'upload pour économiser le budget taille",
            desc: "La plupart des calls business démarrent avec 2 à 5 minutes de météo et de politesses. Coupez ça dans Audacity avant l'upload si votre fichier est près de la limite.",
          },
          {
            title: 'Choisissez la langue manuellement pour les calls internationaux',
            desc: "Si un call commercial démarre en anglais mais passe au français, la détection automatique peut se perdre. Choisissez la langue dominante manuellement.",
          },
          {
            title: "Pour l'audio business confidentiel, n'utilisez aucune transcription cloud, y compris la nôtre",
            desc: "Conversations RH, discussions M&A, calls juridiques, tout ce qui est privilégié. Utilisez une installation locale de Whisper. Le même modèle, tourne en local, sans traitement par un tiers.",
          },
        ],
      }}
      faq={[
        {
          q: 'Mictoo convient à un usage business ?',
          a: "Pour de la transcription occasionnelle (calls commerciaux, interviews, panels), oui. Pour les opérations à fort volume (une équipe sales qui transcrit 50 calls par jour), un outil dédié comme Gong ou Chorus colle mieux parce qu'ils empaquettent l'intégration CRM, les workflows de coaching et l'analytics d'équipe.",
        },
        {
          q: 'Mon audio business est-il stocké sur vos serveurs ?',
          a: 'Non. Le fichier va à notre prestataire de transcription (Groq, avec OpenAI en backup) et est jeté après traitement. On ne conserve ni l\'audio ni la transcription.',
        },
        {
          q: 'Est-ce conforme RGPD ?',
          a: "On ne stocke ni l'audio ni la transcription après que vous fermez la page. On est basés en Europe, et nos prestataires (Groq US, OpenAI US) ont des DPA signés. Pour votre situation RGPD précise (obligations de responsable de traitement, base légale pour enregistrer), voir notre Politique de Confidentialité et consultez votre DPO.",
        },
        {
          q: "Puis-je l'utiliser pour enregistrer des calls avec des clients UE ou Californie ?",
          a: "Vous pouvez utiliser la transcription. L'enregistrement en lui-même demande le consentement de l'autre partie dans pas mal de juridictions (two-party consent en Californie et dans certains pays de l'UE). Obtenez le consentement avant d'enregistrer.",
        },
        {
          q: "Quelle précision pour les noms propres et les noms d'entreprise ?",
          a: "Moins précis que les mots courants. Whisper ne connaît pas le nom de votre client, le nom du produit ou la terminologie spécifique à votre boîte. Comptez sur le fait de devoir corriger ça à la main. Le reste de la transcription sera solide.",
        },
        {
          q: "Aurai-je des étiquettes de locuteur (commercial vs client) ?",
          a: "Pas automatiquement. Pour les calls à 2 locuteurs, ajoutez les étiquettes manuellement en suivant la conversation. Pour les calls multipartites avec pistes audio séparées par locuteur, transcrivez chaque piste séparément.",
        },
        {
          q: 'Comment ça se compare à Gong, Chorus ou Fireflies ?',
          a: "Ce sont des plateformes complètes de call commercial avec intégration CRM, coaching automatisé, tagging par étape de deal et analytics de calls. Nous, on est de la transcription pure, sans intégrations, sans couche de coaching. Moins cher (gratuit), bien plus étroit. Utilisez-les si vous avez besoin de la plateforme complète. Utilisez-nous si vous avez juste besoin du texte.",
        },
        {
          q: 'Puis-je transcrire un call business confidentiel ?',
          a: "Pour les calls non sensibles, oui. Pour les confidentiels (RH, juridique, M&A, tout ce qui est privilégié), évitez toute transcription cloud y compris la nôtre. Utilisez une installation locale de Whisper.",
        },
        {
          q: 'Combien de temps prend la transcription d\'un call business ?',
          a: "Environ 1 à 2 % de la durée audio. Un call de 30 minutes finit en environ 30 à 60 secondes.",
        },
        {
          q: 'Quels formats de sortie sont disponibles ?',
          a: "Texte simple (TXT) et SRT (fichier de sous-titres avec horodatages). La copie dans le presse-papiers marche aussi pour coller direct dans un CRM ou un doc.",
        },
        {
          q: 'Puis-je charger plusieurs calls commerciaux en lot ?',
          a: "Pas en un clic pour l'instant. Aujourd'hui c'est un fichier à la fois. Le chargement en lot est dans la roadmap du futur tier Pro.",
        },
        {
          q: 'Et si mon audio business dépasse 60 minutes ?',
          a: 'Découpez en morceaux sous 60 minutes. Les transcriptions se concatènent après.',
        },
      ]}
      relatedLinks={[
        { href: '/fr/interview-transcription', label: "Transcription d'interview", desc: 'Pour les interviews un à un et la recherche qualitative.' },
        { href: '/fr/meeting-transcription', label: 'Transcription de réunion', desc: 'Pour les enregistrements de réunion de toute plateforme.' },
        { href: '/fr/zoom-transcription', label: 'Transcription Zoom', desc: 'Pour les calls enregistrés sur Zoom.' },
        { href: '/fr/teams-meeting-transcription', label: 'Transcription Teams', desc: 'Pour les calls Microsoft Teams.' },
      ]}
    />
  )
}
