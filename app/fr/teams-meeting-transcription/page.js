import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
  'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
  'ko': 'https://mictoo.com/ko/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Transcription Microsoft Teams — transcrivez les réunions | Mictoo',
  description:
    "Transcription gratuite Microsoft Teams. Chargez l'enregistrement (MP4) depuis OneDrive ou SharePoint et obtenez une transcription IA propre en quelques secondes. Sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/teams-meeting-transcription', languages: LANGS },
}

export default function FrTeamsPage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="TEAMS · ONEDRIVE · GRATUIT"
      h1={
        <>
          Transcription Microsoft Teams
          <br />
          <span className="text-brand-600">Transcription gratuite des réunions Teams</span>
        </>
      }
      subtitle="Transformez votre enregistrement Teams en texte propre. Déposez le MP4 depuis OneDrive ou SharePoint et obtenez la transcription en quelques secondes. Sans inscription, sans tarif à la minute."
      howItWorks={[
        {
          icon: '☁️',
          title: 'Téléchargez depuis OneDrive ou SharePoint',
          desc: "Les enregistrements Teams sont sauvés dans le OneDrive de l'organisateur (pour les réunions hors canal) ou sur le site SharePoint (pour les réunions dans un canal). Téléchargez en MP4. Pour les longues réunions, extrayez l'audio d'abord.",
        },
        {
          icon: '⚡',
          title: 'Déposez le fichier',
          desc: "On extrait l'audio du MP4 et on l'envoie à Whisper large-v3. Une réunion de 30 minutes finit en environ une minute.",
        },
        {
          icon: '📋',
          title: 'Récupérez la transcription',
          desc: "Lisez dans le navigateur, copiez ou téléchargez en TXT ou SRT. Corrigez les noms ou le jargon dans l'éditeur avant l'export.",
        },
      ]}
      whyUse={{
        title: 'Pourquoi Mictoo pour les réunions Teams',
        bullets: [
          {
            title: "Marche sans licence Microsoft 365 spécifique à la transcription",
            desc: "Tant que vous avez le fichier de l'enregistrement, vous pouvez le transcrire ici. Pas besoin de Teams Premium ou de plans Office spécifiques.",
          },
          {
            title: 'Meilleure couverture du non-anglais et des accents',
            desc: "La transcription Microsoft Teams marche bien en anglais et dans les grandes langues d'Europe de l'Ouest. Whisper large-v3 couvre plus de 50 langues avec une meilleure gestion des accents et des conversations bilingues.",
          },
          {
            title: 'Gratuit, sans compteur à la minute',
            desc: "La transcription Teams est livrée avec votre licence mais plafonnée par des feature gates. Mictoo n'a pas de plafond par réunion ni de plafond mensuel de minutes.",
          },
          {
            title: 'Export SRT pour les éditeurs vidéo',
            desc: "La transcription Teams vit dans l'app Teams ou se télécharge en VTT. Nous exportons à la fois du TXT et du SRT propre, drop-in compatible avec Premiere, DaVinci, CapCut et YouTube Studio.",
          },
          {
            title: 'Confidentialité par défaut',
            desc: "Le fichier va au prestataire de transcription, est traité, puis jeté. On ne conserve pas l'audio de votre réunion.",
          },
        ],
      }}
      useCases={{
        title: 'À quoi servent les transcriptions Teams',
        items: [
          {
            title: 'Comptes-rendus de réunion projet',
            desc: "Collez la transcription dans Confluence, Notion ou une page SharePoint. Ceux qui ont raté le call lisent le texte en 5 minutes au lieu de regarder 60 minutes de vidéo.",
          },
          {
            title: "Revue d'appels client pour les équipes account",
            desc: "Sauvegardez la transcription à côté du deal dans Salesforce, Dynamics ou HubSpot. La récupération de citations pour les emails de suivi prend des secondes.",
          },
          {
            title: 'Journal de décisions inter-équipes',
            desc: "Les grandes décisions prises sur les calls Teams sont résumées dans la transcription. Utile pour la gouvernance et les pistes d'audit.",
          },
          {
            title: 'Appels avec vendors et prestataires',
            desc: "Quand un projet implique des parties externes, la transcription est le compte-rendu sans ambiguïté de ce qui a été convenu.",
          },
          {
            title: 'Compliance et industries réglementées',
            desc: "Certains secteurs exigent de conserver certaines conversations. Les transcriptions rendent les enregistrements audio cherchables et indexables.",
          },
        ],
      }}
      proTips={{
        title: 'Astuces pour transcrire Teams',
        tips: [
          {
            title: "Extrayez l'audio du MP4 avant l'upload",
            desc: "Les MP4 Teams sont en vidéo 720p ou 1080p, ce qui n'a aucune importance pour une transcription. Récupérez juste l'audio : ffmpeg -i teams.mp4 -vn -ac 1 -b:a 64k teams.mp3. Un MP4 d'1.5 Go descend à 30 Mo ou moins.",
          },
          {
            title: "Téléchargez depuis OneDrive ou SharePoint, ne streamez pas",
            desc: "OneDrive joue parfois les MP4 dans le navigateur. Vérifiez que vous avez vraiment téléchargé le fichier avant d'essayer de le charger ici. Les liens de partage SharePoint ne sont pas le fichier en soi.",
          },
          {
            title: "Pour les réunions de plus de 60 minutes, découpez avant l'upload",
            desc: "Coupez en morceaux de 30 ou 45 minutes d'abord. Les transcriptions peuvent être concaténées. Les longs calls Teams sont fréquents et méritent d'être traités proprement.",
          },
          {
            title: 'Coupez les notifications de fond pendant la réunion si possible',
            desc: "Les notifications desktop Outlook et les sons de chat Teams pendant le call finissent dans l'audio et parfois dans la transcription. Utilisez Focus Assist sur Windows ou Ne pas déranger sur Mac.",
          },
          {
            title: 'Les micros de salle de réunion ont besoin de nettoyage',
            desc: "Les Teams Rooms avec micros au plafond ont une qualité audio variable. L'écho et la capture à distance dégradent la précision. Adobe Podcast Enhance (outil web gratuit) peut aider sur ces enregistrements avant l'upload.",
          },
          {
            title: "Pour les réunions confidentielles, évitez tout upload externe",
            desc: "Y compris chez nous. Pour les conversations RH, juridiques ou de board, préférez la transcription on-premise. Notre service est pour les réunions non confidentielles où le traitement IA en cloud est acceptable.",
          },
        ],
      }}
      faq={[
        {
          q: 'Mictoo marche avec les enregistrements Microsoft Teams ?',
          a: "Oui. Téléchargez le MP4 depuis OneDrive (le OneDrive de votre organisateur pour les réunions hors canal) ou depuis le site SharePoint du canal. Chargez sur Mictoo. L'extraction audio d'abord accélère pour les longues réunions.",
        },
        {
          q: 'Il me faut Teams Premium ou un plan Microsoft 365 spécifique ?',
          a: 'Il vous faut un plan qui vous laisse enregistrer les réunions. Une fois l\'enregistrement dans OneDrive ou SharePoint, la transcription ici est gratuite quelle que soit votre licence.',
        },
        {
          q: 'Mon enregistrement va-t-il être chargé chez Microsoft ?',
          a: "Non. Le fichier va à notre prestataire de transcription (Groq, avec OpenAI en backup) et est jeté après traitement. Rien ne va chez Microsoft, Outlook ou un service Microsoft.",
        },
        {
          q: 'Comment ça se compare à la transcription native de Teams ?',
          a: "La transcription Teams native, c'est correct pour les réunions en anglais si votre licence l'inclut. La nôtre est gratuite, marche sur plus de langues et d'accents, et exporte du SRT propre pour les éditeurs vidéo. Utilisez ce qui colle à la réunion.",
        },
        {
          q: 'Mon enregistrement Teams dépasse 60 Mo. Que faire ?',
          a: "Extrayez l'audio seul avec ffmpeg ou tout outil audio. Un MP4 Teams d'1.5 Go descend sous 30 Mo en audio. Si l'audio dépasse 60 Mo, découpez en morceaux.",
        },
        {
          q: "Aurai-je des étiquettes de locuteur ?",
          a: "Pas automatiquement. Pour une réunion avec des voix distinctes, vous pouvez ajouter les étiquettes manuellement en suivant la conversation. Si la réunion a été enregistrée avec des pistes audio séparées par locuteur (rare pour Teams), chargez chaque piste séparément pour une attribution propre.",
        },
        {
          q: 'Ça marche avec les messages de chat Teams ?',
          a: "Non. Les messages de chat restent dans Teams. On ne transcrit que l'audio. Combinez les deux vous-même si vous avez besoin des deux.",
        },
        {
          q: 'Quelle précision pour la transcription Teams ?',
          a: "Pour les réunions avec de bons micros (laptop avec casque USB), 90 à 95 %. Pour les réunions en salle avec micros au plafond, 80 à 90 %. Les noms, termes techniques et acronymes demandent souvent du nettoyage.",
        },
        {
          q: 'Puis-je transcrire une réunion Teams en temps réel ?',
          a: "Non. On travaille avec des fichiers enregistrés. Pour du temps réel pendant la réunion, utilisez la fonction native de live captions ou de transcript de Teams.",
        },
        {
          q: 'Quelles langues supportez-vous ?',
          a: "Plus de 50 langues avec détection automatique. Pour les réunions de moins de 5 minutes ou les fichiers avec une intro sans parole (musique de salle d'attente, tonalités), choisissez la langue manuellement.",
        },
        {
          q: "Puis-je exporter la transcription vers Word ou OneDrive ?",
          a: "On exporte du texte simple (TXT) et du SRT. Copiez et collez dans Word, ou chargez le TXT dans OneDrive vous-même. On n'a pas d'intégration Microsoft 365 pour l'instant.",
        },
        {
          q: 'Est-ce conforme RGPD pour les réunions Teams européennes ?',
          a: "On ne stocke ni l'audio ni la transcription sur nos serveurs après que vous fermez la page. On est basés en Europe, et nos prestataires (Groq US, OpenAI US) ont des DPA signés. Pour des questions précises de conformité, voir notre Politique de Confidentialité ou écrire à info@mictoo.com.",
        },
      ]}
      relatedLinks={[
        { href: '/fr/zoom-transcription', label: 'Transcription Zoom', desc: 'Pour les enregistrements Cloud ou locaux Zoom.' },
        { href: '/fr/google-meet-transcription', label: 'Transcription Google Meet', desc: 'Pour les enregistrements Google Meet.' },
        { href: '/fr/meeting-transcription', label: 'Transcription de réunion', desc: 'Pour les enregistrements d\'autres plateformes.' },
        { href: '/fr/business-transcription', label: 'Transcription business', desc: 'Pour les calls commerciaux, interviews et autre audio business.' },
      ]}
    />
  )
}
