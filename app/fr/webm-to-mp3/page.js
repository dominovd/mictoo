import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-mp3',
  'fr': 'https://mictoo.com/fr/webm-to-mp3',
  'de': 'https://mictoo.com/de/webm-to-mp3',
  'es': 'https://mictoo.com/es/webm-to-mp3',
  'ru': 'https://mictoo.com/ru/webm-to-mp3',
  'it': 'https://mictoo.com/it/webm-to-mp3',
  'pt': 'https://mictoo.com/pt/webm-to-mp3',
  'pl': 'https://mictoo.com/pl/webm-to-mp3',
  'ja': 'https://mictoo.com/ja/webm-to-mp3',
  'ko': 'https://mictoo.com/ko/webm-to-mp3',
  'x-default': 'https://mictoo.com/webm-to-mp3',
}

export const metadata = {
  title: 'WEBM vers MP3 — convertisseur en ligne gratuit | Mictoo',
  description:
    "Convertissez WEBM en MP3 gratuitement en ligne. Extrayez l'audio MP3 de n'importe quel fichier WEBM, vidéo ou audio, en quelques secondes. Sans inscription, sans filigrane. Jusqu'à 25 Mo.",
  alternates: { canonical: 'https://mictoo.com/fr/webm-to-mp3', languages: LANGS },

  openGraph: {
    title: "WEBM vers MP3 — convertisseur en ligne gratuit | Mictoo",
    description: "Convertissez WEBM en MP3 gratuitement en ligne. Extrayez l'audio MP3 de n'importe quel fichier WEBM, vidéo ou audio, en quelques secondes. Sans inscription, sans filigrane. Jusqu'à 25 Mo.",
    url: "https://mictoo.com/fr/webm-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBM vers MP3 — convertisseur en ligne gratuit | Mictoo",
    description: "Convertissez WEBM en MP3 gratuitement en ligne. Extrayez l'audio MP3 de n'importe quel fichier WEBM, vidéo ou audio, en quelques secondes. Sans inscription, sans filigrane. Jusqu'à 25 Mo.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrWebmToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="WEBM → MP3 · Gratuit · Sans inscription"
      h1={<>WEBM vers MP3<br /><span className="text-brand-600">Convertisseur en ligne gratuit</span></>}
      subtitle="Déposez un fichier WEBM (le format que les enregistreurs navigateur, téléchargeurs YouTube et outils de capture d&apos;écran adorent). Récupérez un MP3 propre. Sans filigrane, sans email."
      tool={<ConverterZone from="webm" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Déposez le WEBM', desc: "WEBM audio seul ou vidéo, les deux marchent. Jusqu'à 25 Mo en anonyme, 60 Mo après inscription." },
        { icon: '⚡', title: 'Nous extrayons et ré-encodons', desc: "ffmpeg sort le flux audio (Opus ou Vorbis) du conteneur WEBM et le ré-encode en MP3 à 128 kbps et 44.1 kHz. Typiquement 3 à 10 secondes." },
        { icon: '⬇️', title: 'Téléchargez le MP3', desc: "Le résultat garde le nom d'origine avec .mp3. Les fichiers sont effacés de nos serveurs en moins d'une heure." },
      ]}
      whyUse={{ title: 'Pourquoi convertir WEBM vers MP3', bullets: [
        { title: 'Le WEBM est génial pour le navigateur, désastreux pour le reste', desc: "Les iPhones ne lisent pas le WEBM. La plupart des autoradios non plus. Beaucoup de vieux haut-parleurs Bluetooth non plus. Le MP3 se lit sur tout ce que vous pouvez imaginer." },
        { title: "Les apps de mémo vocal et enregistreurs navigateur sauvegardent en WEBM", desc: "Les outils d'enregistrement web (Loom, l'API MediaRecorder MDN, les enregistreurs audio navigateur) sortent du WEBM par défaut parce que Chrome et Firefox le supportent nativement. Pour envoyer l'enregistrement ailleurs, le MP3 est le format plus sûr." },
        { title: 'Les téléchargeurs YouTube donnent du WEBM par défaut', desc: "Quand vous choisissez \"audio seul\" dans 4K Video Downloader ou yt-dlp sans préciser de format, vous obtenez souvent un fichier WEBM en Opus. Convertir en MP3 le rend lisible sur iOS et dans les apps d'édition audio." },
        { title: "L'Opus est techniquement meilleur, mais la compatibilité gagne", desc: "Le codec Opus dans un conteneur WEBM est meilleur que le MP3 octet par octet. Mais si votre audience ne peut pas le lire, ça ne compte pas. Le MP3 est la lingua franca." },
        { title: 'Sans filigrane, sans relance commerciale', desc: "Le MP3 est juste l'audio ré-encodé. Nous n'ajoutons pas d'intro, de balise ou de bandeau \"achetez Pro\" sur la page de résultat." },
      ]}}
      useCases={{ title: 'Quand convertir WEBM vers MP3', items: [
        { title: 'Enregistrement audio navigateur vers fichier portable', desc: "Vous avez utilisé un enregistreur web (outil microphone intégré, enregistreur vocal en ligne, etc.) et obtenu un WEBM. Convertissez en MP3 pour l'importer dans votre éditeur de podcast ou l'envoyer à un transcripteur." },
        { title: 'Téléchargement Loom ou Vidyard vers extrait audio seul', desc: "Les téléchargements Loom peuvent être en WEBM. Si vous n'avez besoin que de l'audio de l'enregistrement, convertissez et sauvegardez le fichier plus léger." },
        { title: 'Téléchargement audio YouTube vers format universel', desc: "Quand vous téléchargez l'audio seul depuis YouTube avec un téléchargeur qui sort par défaut en Opus/WEBM, la conversion MP3 rend le fichier lisible partout." },
        { title: 'Enregistrement écran vers narration seule', desc: "OBS, l'enregistreur écran intégré à Chrome et les outils similaires sortent souvent en WEBM. Si vous ne voulez que la voix off pour la transcription ou un podcast, convertissez." },
        { title: "Enregistrements d'appels WebRTC", desc: "Certains outils de visioconférence enregistrent en WEBM. Convertissez avant d'envoyer à des clients ou de stocker dans un CRM qui attend du MP3." },
      ]}}
      proTips={{ title: 'Conseils pour une conversion WEBM vers MP3 propre', tips: [
        { title: 'Le WEBM avec vidéo VP9 fonctionne, nous ignorons le flux vidéo', desc: "Vous pouvez déposer un WEBM vidéo (VP9 + Opus) dans le convertisseur. Nous retirons la vidéo et gardons juste l'audio. Le résultat fait la même taille que si vous nous aviez donné un WEBM audio seul." },
        { title: "L'audio Opus se décode sans perte dans ffmpeg", desc: "Il n'y a pas de problème de double perte en passant de l'Opus au MP3. Seul le codage perceptif du MP3 à 128 kbps affecte le résultat, pas le fait que l'entrée soit un format avec perte." },
        { title: 'Pour la voix, le mono suffit mais nous gardons le stéréo', desc: "Notre convertisseur préserve la configuration de canaux source. Si votre WEBM est en mono (typique des enregistrements vocaux), le MP3 est en mono. Nous ne faisons pas de upmix." },
        { title: 'Si la conversion échoue, le WEBM est probablement partiel', desc: "Les flux WEBM sont parfois coupés en cours d'enregistrement, laissant le conteneur à moitié cassé. Ouvrez-le dans VLC et ré-exportez en nouveau WEBM, ou dans un éditeur vidéo, puis ressayez." },
        { title: 'Pour YouTube, préférez le M4A directement si votre téléchargeur le supporte', desc: "Si vous contrôlez le téléchargement, choisir M4A (AAC dans un conteneur MP4) saute toute cette étape. Le M4A se lit partout où le MP3 se lit. Utilisez l'option \"M4A\" de 4K Video Downloader." },
        { title: 'Les WEBM chiffrés par DRM échoueront', desc: "Certains services de streaming utilisent du WEBM avec DRM. ffmpeg ne peut pas les déchiffrer, nous non plus. Le WEBM original doit être non protégé." },
      ]}}
      faq={[
        { q: 'La conversion WEBM vers MP3 est-elle vraiment gratuite ?', a: "Oui. Pas de compte jusqu'à 25 Mo, pas de filigrane, pas d'essai limité dans le temps. Les publicités d'affichage sur les pages éditoriales couvrent le coût serveur." },
        { q: 'Quelle est la taille maximale de fichier ?', a: "25 Mo en anonyme, 60 Mo avec un compte gratuit. Le WEBM est efficace : 25 Mo représentent en général 20 à 40 minutes d'audio." },
        { q: 'Puis-je convertir une vidéo WEBM en MP3 ?', a: "Oui. Nous retirons le flux vidéo et ne sortons que l'audio. Le MP3 fait la même taille que la source soit vidéo ou audio seul." },
        { q: 'Le MP3 sonne-t-il moins bien que le WEBM ?', a: "Théoriquement, légèrement. L'Opus au même débit est meilleur que le MP3. À 128 kbps la différence est inaudible pour quasiment tous les auditeurs sur quasiment tous les contenus." },
        { q: 'Combien de temps cela prend-il ?', a: "Quelques secondes. Un fichier WEBM de 25 Mo se convertit en 3 à 10 secondes. La vitesse d'upload est le goulot." },
        { q: 'Quels réglages MP3 utilisez-vous ?', a: "128 kbps en débit constant, 44.1 kHz, respect de la configuration de canaux source (mono en entrée → mono en sortie, stéréo en entrée → stéréo en sortie)." },
        { q: 'Conservez-vous mes fichiers ?', a: "Non. L'envoi est supprimé après conversion. La sortie est purgée en moins d'une heure. Sauvegardez-la en local." },
        { q: 'Mon WEBM venant de Loom a échoué. Pourquoi ?', a: "Certains téléchargements Loom utilisent un MP4 fragmenté dans un conteneur WEBM ou ont des en-têtes non standard. Essayez d'ouvrir dans VLC, ré-exporter, puis ressayer. Ou téléchargez depuis Loom en MP4 directement si l'option existe." },
        { q: 'Cela marche-t-il pour les fichiers Opus spécifiquement ?', a: "Si votre fichier se termine en .opus plutôt qu'en .webm, renommez-le en .webm d'abord. Le conteneur est fonctionnellement le même et ffmpeg les lit de la même façon." },
        { q: 'Puis-je télécharger des vidéos YouTube avec cet outil ?', a: "Non. Nous ne récupérons pas d'URL. Utilisez une app de téléchargement (4K Video Downloader, yt-dlp, ClipGrab) pour sauvegarder le WEBM en local, puis déposez-le ici." },
        { q: "L'iPhone ou iTunes liront-ils la sortie ?", a: "Oui. Le MP3 se lit partout, y compris sur tous les appareils et logiciels Apple." },
        { q: 'Pourquoi convertir plutôt que garder le WEBM ?', a: "Le WEBM passe sur Chrome et Firefox, mais iOS, beaucoup d'autoradios, les vieux haut-parleurs Bluetooth, et une bonne partie des logiciels audio professionnels ne le gèrent pas. Le MP3 est universel." },
      ]}
      relatedLinks={[
        { href: '/fr/mp4-to-mp3', label: 'MP4 vers MP3', desc: 'Même idée, source MP4 au lieu de WEBM.' },
        { href: '/fr/wav-to-mp3', label: 'WAV vers MP3', desc: 'WAV sans perte ramené à un MP3 portable.' },
        { href: '/fr/webm-to-text', label: 'WEBM vers texte', desc: "Passez le MP3, allez directement à la transcription." },
        { href: '/fr/how-to-compress-audio', label: 'Compresser de l&apos;audio', desc: 'Si le MP3 est encore trop gros à partager.' },
      ]}
    />
  )
}
