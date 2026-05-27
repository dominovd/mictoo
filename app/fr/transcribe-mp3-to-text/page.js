import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3 en texte — transcription IA gratuite | Mictoo',
  description:
    "Convertisseur MP3 en texte gratuit. Déposez n'importe quel MP3 et obtenez une transcription IA en quelques secondes. Marche avec podcasts, interviews, cours. Plus de 50 langues, sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/transcribe-mp3-to-text', languages: LANGS },
}

export default function FrMp3ToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="MP3 · GRATUIT · SANS INSCRIPTION"
      h1={
        <>
          MP3 en texte
          <br />
          <span className="text-brand-600">Transcription MP3 gratuite</span>
        </>
      }
      subtitle="Transcription IA gratuite pour tout MP3. Déposez le fichier, recevez le texte en quelques secondes. Sans compte, sans tarif à la minute, sans email."
      howItWorks={[
        {
          icon: '📂',
          title: 'Déposez le MP3',
          desc: "N'importe quel MP3 fonctionne. Téléchargement de podcast, export de mémo vocal, rip audio, fichier de voix généré par IA. Glissez ou cliquez pour choisir.",
        },
        {
          icon: '⚡',
          title: "L'IA transcrit",
          desc: "Whisper large-v3 lit le MP3 et convertit la voix en texte. Un podcast typique de 30 minutes finit en environ une minute. Un mémo vocal de 5 minutes en 15 secondes environ.",
        },
        {
          icon: '📋',
          title: 'Copiez, téléchargez ou éditez',
          desc: 'Lisez-le dans le navigateur, copiez dans le presse-papiers ou téléchargez en TXT ou SRT. Corrigez les mots faux directement avant export.',
        },
      ]}
      whyUse={{
        title: 'Pourquoi Mictoo pour le MP3',
        bullets: [
          {
            title: 'Whisper large-v3, pas un modèle bridé pour les gratuits',
            desc: "On ne fait pas tourner un modèle plus faible « pour les utilisateurs gratuits » et un meilleur pour les payants. Même modèle, même précision, chaque fichier.",
          },
          {
            title: 'Les spécificités du MP3 sont bien gérées',
            desc: "Le MP3 est avec perte, et certains outils s'étranglent sur des fichiers très compressés (32 kbps, mono, faible fréquence d'échantillonnage). Whisper les avale sans broncher. On a vu des transcriptions lisibles sur des MP3 d'appel à 24 kbps.",
          },
          {
            title: 'Aucune conversion de fichier',
            desc: "Certains outils « MP3 en texte » réclament en douce du WAV en interne et ré-encodent votre MP3 d'abord. Nous, on envoie le MP3 directement au modèle. Plus rapide, sans la perte d'une deuxième passe d'encodage.",
          },
          {
            title: 'Pas de compteur à la minute',
            desc: 'Certains concurrents vous donnent 60 minutes gratuites par mois, puis facturent 25 centimes par minute. Nous, on est financés par la publicité, sans plafond de minutes. Transcrivez un fichier ou cent.',
          },
          {
            title: 'Confidentialité par défaut',
            desc: "Le MP3 va au prestataire de transcription, se fait transcrire, puis est jeté. On n'écrit jamais votre audio sur disque de notre côté.",
          },
        ],
      }}
      useCases={{
        title: 'À quoi sert le MP3 en texte',
        items: [
          {
            title: 'Épisodes de podcast',
            desc: 'Glissez le MP3 de votre hébergeur (Anchor, Buzzsprout, Transistor) et obtenez le texte pour les show notes, le repurposing en blog ou l\'accessibilité.',
          },
          {
            title: "Enregistrements d'appels téléphoniques",
            desc: "MP3 est l'export standard de la plupart des apps d'enregistrement d'appel. Transcrivez pour parcourir un long appel et trouver la partie qui compte.",
          },
          {
            title: 'Mémos vocaux exportés du téléphone',
            desc: "Les mémos vocaux iPhone sont en M4A par défaut, mais si vous en avez AirDroppé un en MP3 ou utilisé une app Android qui sauvegarde en MP3, c'est l'outil qu'il vous faut.",
          },
          {
            title: 'Extraits de livres audio ou rips de cours',
            desc: "Pour étudier, avoir le texte à côté de l'audio double la rétention. Restez juste du bon côté du droit d'auteur.",
          },
          {
            title: 'Sortie de TTS et de voix IA',
            desc: "Si vous avez généré de la voix avec ElevenLabs, OpenAI TTS, Murf ou tout autre outil de synthèse, vous pourriez vouloir une transcription propre en retour pour bosser sur les sous-titres ou l'alignement.",
          },
        ],
      }}
      proTips={{
        title: 'Astuces pour transcrire du MP3',
        tips: [
          {
            title: 'Le débit constant marche mieux que le débit variable pour Whisper',
            desc: 'Le MP3 VBR (variable bitrate) peut perturber certains décodeurs dans des cas limites. Si vous contrôlez l\'export, choisissez du CBR à 64 ou 96 kbps mono. Moins de travail pour le modèle.',
          },
          {
            title: "64 kbps mono est l'optimum pour la voix en MP3",
            desc: "Au-dessus, c'est du gâchis pour la voix. Un épisode de 60 minutes à 64 kbps mono fait environ 28 Mo. Ça tient dans le tier gratuit de 25 Mo à l'aise, ou confortablement dans le tier 60 Mo connecté.",
          },
          {
            title: 'Si votre MP3 est énorme (plus de 60 Mo), ré-encodez avant de découper',
            desc: 'Découper puis transcrire deux fichiers, c\'est plus de boulot que de ré-encoder une fois à plus bas débit. ffmpeg : ffmpeg -i big.mp3 -ac 1 -b:a 64k small.mp3. Un original de 200 Mo descend à 25–40 Mo.',
          },
          {
            title: 'Retirez les métadonnées ID3 si le fichier est juste à la limite',
            desc: "Les tags ID3 (pochette, paroles, etc.) peuvent ajouter plusieurs Mo à un MP3. Si vous êtes 1 à 2 Mo au-dessus de la limite, retirer les tags avec ffmpeg -i in.mp3 -map_metadata -1 -c:a copy out.mp3 peut suffire.",
          },
          {
            title: 'Un mauvais encodage MP3 de vieux convertisseurs cause des trous silencieux',
            desc: 'Si votre transcription saute des sections, le MP3 a peut-être de vrais trous de silence dus à un encodeur défaillant. Ré-encodez depuis la source si vous l\'avez, ou utilisez « Find Silence » dans Audacity pour confirmer.',
          },
          {
            title: "Pour les MP3 d'appel téléphonique (8 kHz mono), comptez sur un peu moins de précision",
            desc: "L'audio téléphonique perd les aigus, ce qui vous coûte quelques pourcents de précision. Ça reste lisible, prévoyez juste plus de nettoyage sur les noms et les chiffres.",
          },
        ],
      }}
      faq={[
        {
          q: 'Le MP3 est-il le meilleur format pour la transcription ?',
          a: "Pour la plupart des gens, oui. Le MP3 est petit, supporté partout, et la précision avec Whisper est quasiment identique à WAV ou FLAC. Utilisez du sans perte (WAV, FLAC) seulement si vous avez aussi besoin de l'audio pour de l'édition après.",
        },
        {
          q: 'Quels débits MP3 marchent le mieux ?',
          a: "Tout, de 32 kbps mono à 320 kbps stéréo. Pour la voix, 64 à 96 kbps mono est le point doux pratique. Plus haut n'améliore pas la transcription, plus bas commence à faire perdre en intelligibilité pour le modèle.",
        },
        {
          q: 'Mon MP3 dépasse 60 Mo. Que faire ?',
          a: 'Deux options. Soit ré-encoder à un débit plus bas (64 kbps mono divise la plupart des MP3 par 4 ou plus), soit découper le fichier en morceaux sous 60 Mo. On a des guides pour les deux.',
        },
        {
          q: 'Combien de temps prend la transcription d\'un MP3 ?',
          a: "Environ 1 à 2 % de la durée audio. Un MP3 de 60 minutes finit en 60 secondes environ. Un de 10 minutes en 10 à 20 secondes. L'upload réseau est en général l'attente la plus longue.",
        },
        {
          q: 'Mon MP3 sera-t-il stocké ou partagé ?',
          a: "Non. Le fichier va à notre prestataire de transcription (Groq, avec OpenAI en backup), se fait transcrire, puis est jeté. On ne l'écrit pas sur nos serveurs, et les prestataires qu'on utilise n'entraînent pas sur les données API.",
        },
        {
          q: 'Puis-je charger plusieurs MP3 en lot ?',
          a: "Pas en un clic pour l'instant. Aujourd'hui c'est un fichier à la fois. Le chargement en lot est dans la roadmap du tier Pro payant.",
        },
        {
          q: 'Quelles langues supportez-vous ?',
          a: "Plus de 50 langues. La détection automatique gère la plupart des cas. Pour les fichiers de moins de 5 minutes ou ceux qui démarrent avec de la musique ou du silence, choisissez la langue manuellement.",
        },
        {
          q: "Peut-on avoir des horodatages depuis un MP3 ?",
          a: "Oui. Téléchargez en SRT (fichier de sous-titres) et vous avez des horodatages toutes les quelques secondes. Ou utilisez notre page Transcription horodatée pour une granularité au mot.",
        },
        {
          q: "Mictoo marche avec les MP3 de podcast qui ont des marqueurs de chapitres ?",
          a: "On extrait l'audio et ignore les métadonnées de chapitres. Vous obtenez la transcription complète en un seul document. Si vous voulez des transcriptions alignées sur les chapitres, découpez le MP3 aux frontières des chapitres d'abord.",
        },
        {
          q: 'La transcription de mon MP3 aura-t-elle des étiquettes de locuteur ?',
          a: "Pas automatiquement. Whisper ne fait pas de diarisation par défaut. Si vous avez besoin d'étiquettes, chargez la piste de chaque locuteur séparément (si vous les avez) et étiquetez-les vous-même.",
        },
        {
          q: "Puis-je transcrire un MP3 de voix générée par IA ?",
          a: "Oui. L'audio TTS (ElevenLabs, OpenAI, Murf, etc.) se transcrit en général plus proprement que la parole humaine parce qu'il n'y a ni bruit de fond ni hésitations.",
        },
        {
          q: 'Mon MP3 est dans une langue rare. Ça va marcher ?',
          a: "Si Whisper supporte la langue, oui. Le modèle couvre plus de 50 langues avec une bonne précision et un support de base pour beaucoup d'autres. Essayez. Si le résultat est inutilisable, la langue est sans doute hors des données d'entraînement de Whisper.",
        },
      ]}
      relatedLinks={[
        { href: '/fr/transcribe-audio-to-text', label: 'Audio en texte', desc: 'Pour les formats non-MP3 (WAV, M4A, FLAC, OGG).' },
        { href: '/fr/podcast-transcription', label: 'Transcription de podcast', desc: 'Même moteur, astuces spécifiques au podcast.' },
        { href: '/fr/free-srt-generator', label: 'Générateur SRT', desc: 'Quand il faut des sous-titres pour une vidéo, pas juste du texte.' },
        { href: '/fr/how-to-compress-audio', label: "Comment compresser de l'audio", desc: "Quand votre MP3 est trop gros." },
      ]}
    />
  )
}
