import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'pl': 'https://mictoo.com/pl/google-meet-transcription',
  'ja': 'https://mictoo.com/ja/google-meet-transcription',
  'ko': 'https://mictoo.com/ko/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Transcription Google Meet — transcrivez les enregistrements Meet gratuitement | Mictoo',
  description:
    "Transcription gratuite de Google Meet. Chargez votre enregistrement Meet depuis Drive (MP4 ou M4A) et obtenez une transcription IA propre en quelques secondes. Marche sur Workspace gratuit.",
  alternates: { canonical: 'https://mictoo.com/fr/google-meet-transcription', languages: LANGS },

  openGraph: {
    title: "Transcription Google Meet — transcrivez les enregistrements Meet gratuitement | Mictoo",
    description: "Transcription gratuite de Google Meet. Chargez votre enregistrement Meet depuis Drive (MP4 ou M4A) et obtenez une transcription IA propre en quelques secondes. Marche sur Workspace gratuit.",
    url: "https://mictoo.com/fr/google-meet-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcription Google Meet — transcrivez les enregistrements Meet gratuitement | Mictoo",
    description: "Transcription gratuite de Google Meet. Chargez votre enregistrement Meet depuis Drive (MP4 ou M4A) et obtenez une transcription IA propre en quelques secondes. Marche sur Workspace gratuit.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrGoogleMeetPage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="GOOGLE MEET · MP4 · GRATUIT"
      h1={
        <>
          Transcription Google Meet
          <br />
          <span className="text-brand-600">Transcrivez les enregistrements Meet</span>
        </>
      }
      subtitle="Transformez votre enregistrement Google Meet en texte propre. Déposez le MP4 depuis votre Drive et obtenez la transcription en quelques secondes. Sans inscription, sans tarif à la minute."
      howItWorks={[
        {
          icon: '☁️',
          title: 'Téléchargez depuis Google Drive',
          desc: "Les enregistrements Google Meet sont sauvés dans votre Drive dans le dossier « Meet Recordings ». Téléchargez en MP4 (clic droit, Download). Pour les longues réunions, extrayez l'audio d'abord pour gagner du temps d'upload.",
        },
        {
          icon: '⚡',
          title: 'Déposez le fichier',
          desc: "On extrait l'audio du MP4 et on l'envoie à Whisper large-v3. Une réunion de 30 minutes finit en environ une minute.",
        },
        {
          icon: '📋',
          title: 'Récupérez la transcription',
          desc: "Lisez dans le navigateur, copiez ou téléchargez en TXT ou SRT. Corrigez les mots faux dans l'éditeur avant l'export.",
        },
      ]}
      whyUse={{
        title: 'Pourquoi Mictoo pour Google Meet',
        bullets: [
          {
            title: 'Marche sur tous les tiers Workspace, y compris gratuit',
            desc: "Enregistrer un Meet demande un tier payant, mais une fois que vous avez le fichier, notre transcription est gratuite quel que soit votre tier Workspace.",
          },
          {
            title: "Meilleur support des langues non anglaises",
            desc: "La transcription Google a historiquement été plus forte en anglais. Whisper large-v3 couvre plus de 50 langues avec détection automatique et gère beaucoup mieux les accents, les conversations bilingues et le code-switching.",
          },
          {
            title: 'Les données ne repartent pas chez Google',
            desc: "Si vous évitez délibérément le lock-in de l'écosystème Google pour les réunions sensibles, transcrire ici garde le texte hors de Google Workspace.",
          },
          {
            title: 'Export SRT qui marche dans tout éditeur vidéo',
            desc: "La transcription Google vous donne le texte dans Docs. La nôtre exporte du SRT propre, prêt pour Premiere, DaVinci ou YouTube Studio.",
          },
          {
            title: 'Confidentialité',
            desc: "Le fichier va au prestataire de transcription et est jeté après traitement. Rien n'est écrit sur nos serveurs.",
          },
        ],
      }}
      useCases={{
        title: 'À quoi servent les transcriptions Google Meet',
        items: [
          {
            title: 'Notes de réunion cherchables par tout le monde',
            desc: "Collez la transcription dans Google Docs ou Notion. Le vous du futur ne se rappellera pas ce qui a été décidé en semaine 14 du projet. Le texte cherchable aide.",
          },
          {
            title: 'Rattrapage asynchrone pour équipes distribuées',
            desc: "Les gens dans d'autres fuseaux horaires qui ont raté la réunion en direct lisent la transcription en minutes, au lieu de regarder un enregistrement de 60 minutes en x1.5.",
          },
          {
            title: "Revue d'appels client",
            desc: "Les account managers transcrivent les calls clés avec un client et stockent le texte dans le CRM. Rappel plus rapide, meilleurs handoffs.",
          },
          {
            title: 'Transcriptions de webinaires et town halls',
            desc: "Pour les gros événements enregistrés sur Meet, la transcription est ce que vous publiez (à côté de l'enregistrement) pour l'accessibilité et la recherche.",
          },
          {
            title: '1:1 et conversations de performance (pour le manager)',
            desc: "Certains managers transcrivent leurs 1:1 pour garder des notes pour le suivi. Utile, mais soyez transparent avec votre rapport sur pourquoi.",
          },
        ],
      }}
      proTips={{
        title: 'Astuces pour transcrire Google Meet',
        tips: [
          {
            title: "Extrayez l'audio du MP4 avant l'upload",
            desc: "Les enregistrements Meet sont en vidéo 720p, ce qui est du gaspillage pour une transcription. Récupérez juste l'audio : ffmpeg -i meet.mp4 -vn -ac 1 -b:a 64k meet.mp3. Un MP4 d'1 Go descend à 25 Mo ou moins.",
          },
          {
            title: 'Téléchargez le MP4, ne le streamez pas',
            desc: "Drive ouvre parfois les MP4 dans le viewer du navigateur. Vérifiez que vous avez vraiment téléchargé le fichier avant d'essayer de le charger ici. Les liens de partage Drive ne sont pas des uploads de fichier.",
          },
          {
            title: "Pour les réunions de plus de 60 minutes, découpez avant l'upload",
            desc: "Notre plafond est de 60 minutes par fichier en connecté. Coupez l'audio en morceaux d'abord. Les transcriptions peuvent être concaténées après.",
          },
          {
            title: 'Coupez les onglets et apps en fond pendant la réunion si possible',
            desc: 'Un morceau Spotify sous votre voix finit dans la transcription en mots aléatoires. Pareil avec les sons de notification. Pas toujours réparable après coup.',
          },
          {
            title: 'Utilisez un vrai micro, même un casque pas cher',
            desc: "Les micros intégrés des laptops captent le bruit du clavier, du ventilateur et l'écho de la pièce. Un casque USB filaire à 20 euros se transcrit visiblement plus proprement.",
          },
          {
            title: "Pour les enregistrements partagés, vérifiez les permissions Drive avant de les re-charger ailleurs",
            desc: "Si quelqu'un vous a partagé un enregistrement Meet, vérifiez à deux fois ce que vous avez le droit d'en faire avant de le transcrire pour un usage externe.",
          },
        ],
      }}
      faq={[
        {
          q: 'Mictoo marche avec les enregistrements Google Meet ?',
          a: "Oui. Téléchargez le MP4 depuis votre dossier Drive Meet Recordings, puis chargez ici. L'extraction audio (avec ffmpeg ou tout outil audio) accélère pour les longues réunions.",
        },
        {
          q: 'Il me faut un plan Google Workspace payant ?',
          a: "Il vous faut un plan payant pour enregistrer un Meet en premier lieu. Une fois l'enregistrement dans Drive, la transcription ici est gratuite quel que soit votre tier Workspace.",
        },
        {
          q: 'Mon enregistrement va-t-il être chargé chez Google ?',
          a: "Non. Le fichier va à notre prestataire de transcription (Groq, avec OpenAI en backup) et est jeté après traitement. Rien ne va chez Google ou un service Google.",
        },
        {
          q: 'Comment ça se compare à la transcription native de Google ?',
          a: "La nôtre est gratuite et marche sur tous les tiers Workspace. Celle de Google est plus pratique si votre plan l'inclut et si vos réunions sont en anglais. Pour le non-anglais, les accents ou les réunions bilingues, la nôtre est plus précise.",
        },
        {
          q: 'Mon enregistrement Meet dépasse 60 Mo. Que faire ?',
          a: "Extrayez l'audio seul avec ffmpeg ou tout outil audio. Une vidéo d'1 Go descend en général sous 30 Mo en audio. Si l'audio lui-même dépasse 60 Mo, découpez en morceaux.",
        },
        {
          q: "Aurai-je des étiquettes de locuteur ?",
          a: "Pas automatiquement. Whisper ne fait pas de diarisation par défaut. Il faudra ajouter les étiquettes manuellement. Pour une réunion à 4 avec des voix distinctes, ça prend en général 5 minutes.",
        },
        {
          q: 'Ça marche avec les messages de chat Meet ?',
          a: "Non. Les messages de chat sont sauvegardés séparément par Google dans le dossier d'enregistrement Meet. On ne transcrit que l'audio. Combinez les deux vous-même si vous avez besoin des deux.",
        },
        {
          q: 'Quelle précision pour la transcription Google Meet ?',
          a: "Pour de l'audio propre (bons micros, sans bruit de fond), 90 à 95 %. Les enregistrements en salle avec plusieurs micros ou speakerphones descendent à 80–90 %. Les noms et termes techniques demandent souvent du nettoyage.",
        },
        {
          q: 'Puis-je transcrire un livestream Google Meet ?',
          a: "Non. On travaille uniquement avec des fichiers enregistrés, pas avec des streams live. Une fois le stream terminé et l'enregistrement sauvé dans Drive, vous pouvez télécharger et transcrire.",
        },
        {
          q: 'Quelles langues supportez-vous ?',
          a: "Plus de 50 langues avec détection automatique. Pour les réunions de moins de 5 minutes ou les fichiers avec une intro sans parole, choisissez la langue manuellement pour un meilleur résultat.",
        },
        {
          q: 'Puis-je exporter vers un Google Doc ?',
          a: "On exporte du texte simple (TXT) et du SRT. Copiez et collez dans Google Docs. On n'a pas d'intégration directe avec Drive pour l'instant.",
        },
        {
          q: "Ça marche avec les enregistrements Meet d'autres orgs Workspace ?",
          a: "Si vous avez accès pour télécharger le fichier depuis votre Drive, oui. On traite le fichier juste comme un MP4. On ne vérifie pas et on ne se soucie pas de son origine.",
        },
      ]}
      relatedLinks={[
        { href: '/fr/zoom-transcription', label: 'Transcription Zoom', desc: 'Pour les enregistrements Cloud ou locaux Zoom.' },
        { href: '/fr/teams-meeting-transcription', label: 'Transcription Teams', desc: 'Pour les enregistrements Microsoft Teams.' },
        { href: '/fr/meeting-transcription', label: 'Transcription de réunion', desc: 'Pour les enregistrements d\'autres plateformes.' },
        { href: '/fr/transcribe-video-to-text', label: 'Vidéo en texte', desc: 'Page générique vidéo en texte.' },
      ]}
    />
  )
}
