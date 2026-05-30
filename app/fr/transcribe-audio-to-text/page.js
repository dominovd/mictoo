import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-audio-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
  'de': 'https://mictoo.com/de/transcribe-audio-to-text',
  'es': 'https://mictoo.com/es/transcribe-audio-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
  'it': 'https://mictoo.com/it/transcribe-audio-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-audio-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-audio-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-audio-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-audio-to-text',
  'x-default': 'https://mictoo.com/transcribe-audio-to-text',
}

export const metadata = {
  title: 'Audio en texte — transcription gratuite en ligne | Mictoo',
  description:
    "Convertisseur gratuit d'audio en texte. Déposez n'importe quel fichier audio (MP3, WAV, M4A, FLAC, OGG, AAC) et obtenez une transcription propre en quelques secondes. Sans inscription, plus de 50 langues.",
  alternates: { canonical: 'https://mictoo.com/fr/transcribe-audio-to-text', languages: LANGS },

  openGraph: {
    title: "Audio en texte — transcription gratuite en ligne | Mictoo",
    description: "Convertisseur gratuit d'audio en texte. Déposez n'importe quel fichier audio (MP3, WAV, M4A, FLAC, OGG, AAC) et obtenez une transcription propre en quelques secondes. Sans inscription, plus de 50 langues.",
    url: "https://mictoo.com/fr/transcribe-audio-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio en texte — transcription gratuite en ligne | Mictoo",
    description: "Convertisseur gratuit d'audio en texte. Déposez n'importe quel fichier audio (MP3, WAV, M4A, FLAC, OGG, AAC) et obtenez une transcription propre en quelques secondes. Sans inscription, plus de 50 langues.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrAudioToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="MP3 · WAV · M4A · FLAC · GRATUIT"
      h1={
        <>
          Audio en texte
          <br />
          <span className="text-brand-600">Transcription IA gratuite</span>
        </>
      }
      subtitle="Transcription IA gratuite pour tout fichier audio. MP3, WAV, M4A, FLAC, OGG, AAC. Sans compte, sans tarif à la minute."
      howItWorks={[
        {
          icon: '📂',
          title: "Déposez l'audio",
          desc: "Tout format courant fonctionne. MP3 du téléphone, WAV d'un enregistreur, M4A des mémos vocaux iPhone, FLAC d'un export podcast. Glissez le fichier ou cliquez pour le choisir.",
        },
        {
          icon: '⚡',
          title: "L'IA transcrit",
          desc: "On utilise OpenAI Whisper large-v3. Un fichier de 10 minutes prend environ 20 secondes. Un fichier de 30 minutes, moins d'une minute.",
        },
        {
          icon: '📋',
          title: 'Copiez, téléchargez ou éditez',
          desc: "Lisez la transcription dans le navigateur. Téléchargez en TXT pour les notes, ou en SRT si vous voulez des horodatages. Corrigez les mots mal compris avant d'exporter.",
        },
      ]}
      whyUse={{
        title: 'Pourquoi Mictoo pour audio en texte',
        bullets: [
          {
            title: 'Un seul modèle, et c\'est le bon',
            desc: "On utilise Whisper large-v3 pour tout le monde. Pas de combine « la version gratuite tourne sur un modèle moins bon ». Le même modèle qui équipe les transcriptions d'entreprise chères, c'est celui qui transcrit votre fichier.",
          },
          {
            title: 'Support de formats vraiment large',
            desc: "MP3, WAV, M4A, FLAC, OGG, WEBM, AAC, plus les formats vidéo avec audio dedans (MP4, MOV). Pas de friction « on n'accepte que du MP3, convertissez d'abord ».",
          },
          {
            title: 'Plus de 50 langues, y compris les fichiers bilingues',
            desc: "La détection automatique repère la langue dans les premières secondes. Si le fichier change de langue en cours d'enregistrement (fréquent en interview), Whisper suit.",
          },
          {
            title: "Aucun fichier n'est conservé",
            desc: 'Votre audio est transmis au prestataire de transcription, traité, puis supprimé. On n\'écrit jamais le fichier dans notre base ou notre stockage. Les prestataires qu\'on utilise (Groq, OpenAI) n\'entraînent pas sur les données API.',
          },
          {
            title: 'Gratuit sans astérisque',
            desc: "Jusqu'à 30 minutes par fichier sans compte. Avec une connexion gratuite, vous passez à 60 minutes. Rien d'autre n'est verrouillé.",
          },
        ],
      }}
      useCases={{
        title: "Quand l'audio en texte fait vraiment gagner du temps",
        items: [
          {
            title: "Notes d'interview",
            desc: "Vous avez passé une heure avec une source. Au lieu de scruter l'enregistrement pour retrouver cette citation, vous faites Ctrl+F dans la transcription. Cinq secondes au lieu de cinq minutes.",
          },
          {
            title: 'Nettoyage de mémos vocaux',
            desc: "Vous avez dicté une idée à moitié formée dans votre téléphone en marchant. Maintenant vous la voulez en texte. Déposez le M4A, recevez des phrases, copiez dans Notion.",
          },
          {
            title: 'Révision de cours et de webinaires',
            desc: "Un cours de deux heures, c'est dur à revoir en x2. La transcription texte vous laisse parcourir section par section et creuser uniquement les parties qui comptent.",
          },
          {
            title: 'Préparation de traduction',
            desc: "Whisper transcrit dans la langue source. À partir de là, vous collez dans DeepL ou ChatGPT et traduisez proprement. Mieux que les traductions automatiques faites direct depuis l'audio brut.",
          },
          {
            title: "Recherche dans l'archive audio",
            desc: "Des années d'appels, d'épisodes ou de réunions enregistrés ? Lancez la transcription en lot et vous obtenez soudain une archive consultable comme du texte. Moins cher que n'importe quel « assistant IA pour réunion » avec abonnement.",
          },
        ],
      }}
      proTips={{
        title: 'Astuces pour une transcription plus propre',
        tips: [
          {
            title: 'Le mono suffit. La stéréo, c\'est de la bande passante gaspillée',
            desc: "La voix n'a pas besoin de deux canaux. Si le fichier est énorme, ré-encodez en mono et vous coupez la taille de moitié sans perte pour la transcription. ffmpeg en une ligne : ffmpeg -i input.wav -ac 1 output.wav.",
          },
          {
            title: '64 kbps MP3 suffit largement pour la voix',
            desc: "Si vous exportez depuis une DAW ou un éditeur, 64 kbps mono MP3 donne à Whisper tout ce dont il a besoin. Les bitrates plus élevés n'améliorent pas la précision, ils ne font que grossir le fichier.",
          },
          {
            title: 'Coupez les longs silences au début et à la fin',
            desc: "Si votre enregistrement a 90 secondes de blanc avant le premier mot, ces 90 secondes grignotent votre limite de durée. Coupez-les dans Audacity (Effect, Truncate Silence) avant l'upload.",
          },
          {
            title: 'Choisissez la langue manuellement pour les fichiers courts',
            desc: "La détection automatique échantillonne le premier morceau d'audio. Pour les fichiers de moins de 5 minutes, cet échantillon est petit et la détection n'est pas fiable. Sélectionnez la langue explicitement dans le menu.",
          },
          {
            title: 'La musique de fond fait halluciner Whisper',
            desc: "Si votre audio a de la musique sous la parole (jingles sponsorisés, intros, b-roll), le modèle insère parfois des mots inventés pendant les sections musique-seule. Si vous avez une version sans musique, prenez-la.",
          },
          {
            title: 'Pour les fichiers très bruités, nettoyez avant',
            desc: "Options gratuites : Audacity Noise Reduction (intégré), ou Adobe Podcast Enhance (outil web gratuit, étonnamment bon). Passez le fichier une fois, puis chargez la version nettoyée.",
          },
        ],
      }}
      faq={[
        {
          q: "Quel est le meilleur convertisseur audio-texte gratuit ?",
          a: "On est biaisé, mais la réponse honnête : tout outil qui fait tourner Whisper large-v3 est en haut du segment gratuit. Mictoo fait tourner ce modèle sans mur d'inscription. Otter et Trint sont bons mais font payer à la minute au-delà de leur quota gratuit. Pour des transcriptions ponctuelles, le segment gratuit est le bon choix.",
        },
        {
          q: "Quelle est la précision de l'audio en texte ?",
          a: "Pour une voix propre dans une langue majeure, comptez 5 à 10 % de taux d'erreur sur les mots. Pour de l'audio bruité, des accents marqués ou un vocabulaire spécialisé, la précision baisse. Pour la plupart des usages (notes, recherche, brouillons), c'est largement suffisant. Pour des dossiers juridiques ou médicaux, prenez un humain.",
        },
        {
          q: 'Quels formats audio supportez-vous ?',
          a: "MP3, WAV, M4A, FLAC, OGG, WEBM, AAC. Aussi les fichiers vidéo comme MP4 et MOV (on extrait l'audio automatiquement). AIFF et ALAC ne sont pas supportés directement. Convertissez-les d'abord en WAV ou FLAC.",
        },
        {
          q: 'Combien de temps prend la transcription ?',
          a: "Un fichier de 5 minutes finit en général en 10 à 15 secondes. Un fichier de 30 minutes en 45 à 60 secondes. On traite le fichier entier en une seule requête, pas besoin de le découper de votre côté.",
        },
        {
          q: "Puis-je transcrire l'enregistrement d'un appel téléphonique ?",
          a: "Oui. Les appels sont en général en 8 kHz mono avec un peu de compression. Whisper les gère, la précision est un peu plus basse que pour de l'audio studio. Vérifiez que l'enregistrement de l'appel est légal dans votre juridiction.",
        },
        {
          q: 'Faut-il choisir la langue ?',
          a: "Non, la détection automatique est activée par défaut. Pour de l'audio de moins de 5 minutes ou des fichiers qui commencent par autre chose que de la parole, choisissez la langue manuellement pour des résultats plus fiables.",
        },
        {
          q: 'Y a-t-il un coût à la minute ?',
          a: "Aucun frais. La transcription est gratuite, sans compteur à la minute. On se finance via la publicité display et un futur tier Pro pour les gros utilisateurs.",
        },
        {
          q: 'Quelle est la taille de fichier maximale ?',
          a: "25 Mo sans compte, 60 Mo une fois connecté (toujours gratuit). Si le fichier est plus gros, voyez notre guide de compression.",
        },
        {
          q: 'Mon audio est-il stocké sur vos serveurs ?',
          a: "Non. On transmet le fichier directement au prestataire de transcription, on récupère le texte, on jette l'audio. Rien n'est écrit dans notre base ni dans notre stockage.",
        },
        {
          q: "Puis-je éditer la transcription avant de la télécharger ?",
          a: "Oui. Après la transcription, corrigez les mots faux directement dans le visualiseur, puis téléchargez la version éditée.",
        },
        {
          q: 'Quels formats de sortie sont disponibles ?',
          a: 'Texte simple (TXT), fichier de sous-titres (SRT) avec horodatages, et copie dans le presse-papiers. Le SRT fonctionne dans YouTube Studio, Premiere Pro, DaVinci Resolve et tout éditeur vidéo standard.',
        },
        {
          q: 'Mictoo fonctionne-t-il sur mobile ?',
          a: "Oui. Le site est adapté aux mobiles. Vous pouvez uploader directement depuis votre téléphone, y compris depuis l'app Fichiers iOS ou le dossier de téléchargements Android.",
        },
      ]}
      relatedLinks={[
        { href: '/fr/transcribe-mp3-to-text', label: 'MP3 en texte', desc: "Astuces et particularités propres au MP3." },
        { href: '/fr/transcribe-video-to-text', label: 'Vidéo en texte', desc: 'Même moteur, optimisé pour les fichiers MP4 et MOV.' },
        { href: '/fr/timestamped-transcription', label: 'Transcription horodatée', desc: 'Quand il faut des horodatages par phrase ou par mot.' },
        { href: '/fr/how-to-compress-audio', label: "Comment compresser de l'audio", desc: "Quand votre fichier est trop gros pour être chargé." },
      ]}
    />
  )
}
