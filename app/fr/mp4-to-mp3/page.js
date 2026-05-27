import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp4-to-mp3',
  'fr': 'https://mictoo.com/fr/mp4-to-mp3',
  'de': 'https://mictoo.com/de/mp4-to-mp3',
  'es': 'https://mictoo.com/es/mp4-to-mp3',
  'ru': 'https://mictoo.com/ru/mp4-to-mp3',
  'it': 'https://mictoo.com/it/mp4-to-mp3',
  'pt': 'https://mictoo.com/pt/mp4-to-mp3',
  'pl': 'https://mictoo.com/pl/mp4-to-mp3',
  'ja': 'https://mictoo.com/ja/mp4-to-mp3',
  'ko': 'https://mictoo.com/ko/mp4-to-mp3',
  'x-default': 'https://mictoo.com/mp4-to-mp3',
}

export const metadata = {
  title: 'MP4 vers MP3 — convertisseur en ligne gratuit | Mictoo',
  description:
    "Convertissez MP4 en MP3 gratuitement en ligne. Déposez votre vidéo, recevez un fichier audio MP3 propre à 128 kbps en quelques secondes. Sans inscription, sans filigrane, sans email. Jusqu'à 25 Mo.",
  alternates: { canonical: 'https://mictoo.com/fr/mp4-to-mp3', languages: LANGS },
}

export default function FrMp4ToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="MP4 → MP3 · Gratuit · Sans inscription"
      h1={<>MP4 vers MP3<br /><span className="text-brand-600">Convertisseur en ligne gratuit</span></>}
      subtitle="Déposez une vidéo MP4. Récupérez un fichier audio MP3. Sans filigrane, sans email, sans salle d&apos;attente. Propulsé par ffmpeg côté serveur, terminé en quelques secondes."
      tool={<ConverterZone from="mp4" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Déposez le MP4', desc: "Glissez n'importe quelle vidéo MP4 dans la zone ou cliquez pour en choisir une. Les fichiers jusqu'à 25 Mo passent de manière anonyme. Connectez-vous si vous avez besoin de 60 Mo." },
        { icon: '⚡', title: "Nous extrayons l'audio", desc: "ffmpeg tourne côté serveur, retire le flux vidéo, et ré-encode l'audio en MP3 stéréo à 128 kbps et 44.1 kHz. Une vidéo de 25 Mo se termine en général en 5 à 15 secondes." },
        { icon: '⬇️', title: 'Téléchargez le MP3', desc: "Le bouton de téléchargement vous donne le fichier avec le nom d'origine et l'extension .mp3. Votre envoi et le résultat sont tous deux supprimés de nos serveurs en moins d'une heure." },
      ]}
      whyUse={{ title: 'Pourquoi Mictoo pour MP4 vers MP3', bullets: [
        { title: "Juste la conversion. Rien d'autre", desc: "Pas de popups, pas de minuteurs, pas de faux palier gratuit qui pousse à payer. Déposez, convertissez, téléchargez." },
        { title: 'MP3 à 128 kbps, léger et universel', desc: "Ce débit est le bon compromis pour la voix parlée : environ 1 Mo par minute, lu partout, son propre. Nous ne proposons pas de sélecteur de qualité parce que le choix ajoute de la friction sans rien apporter pour l'usage typique." },
        { title: 'Les fichiers ne restent pas sur nos serveurs', desc: "Votre MP4 arrive sur Vercel Blob, est converti, puis supprimé immédiatement. Le MP3 lui-même est effacé par notre nettoyage horaire. Gardez une copie locale." },
        { title: 'Sans filigrane, sans balise audio', desc: "Beaucoup de convertisseurs gratuits ajoutent une intro \"Converti par FreeMP3.com\". Nous ne touchons pas à l'audio à part le ré-encodage." },
        { title: 'La plupart des autres convertisseurs gratuits sont des coquilles publicitaires', desc: "Beaucoup de sites trouvés sur Google pour \"mp4 vers mp3\" sont des portes AdSense qui détournent le bouton retour ou déclenchent de fausses alertes virus. Nous sommes un projet SEO indépendant financé par les publicités d'affichage sur les pages éditoriales, pas dans le flux de conversion." },
      ]}}
      useCases={{ title: 'Quand convertir MP4 vers MP3', items: [
        { title: 'Sauvegarder un podcast que vous avez en vidéo', desc: "Beaucoup de flux de podcasts sont aussi publiés en uploads YouTube ou MP4 Vimeo. Si vous n'avez que la copie vidéo, le MP3 la rend compatible mobile et dix fois plus légère." },
        { title: "Récupérer la musique ou l'audio d'une conférence", desc: "Zoom et Teams exportent en MP4. Vous n'avez besoin que de l'audio si vous voulez écouter en déplacement, transcrire, ou alimenter un logiciel de montage." },
        { title: "Réduire une vidéo d'1 Go pour pouvoir l'envoyer par email", desc: "Une vidéo d'une heure en 1080p peut facilement atteindre 1 Go. L'audio de cette même séquence fait 30 à 60 Mo en qualité maximale, souvent moins de 30 Mo à 128 kbps. Soudainement envoyable." },
        { title: 'Alimenter une transcription qui attend de l&apos;audio', desc: "Notre outil de transcription accepte le MP4 directement, mais les outils tiers, éditeurs audio et DAW veulent en général de l'audio pur. Le MP3 est le format le plus universel." },
        { title: 'Musique de fond pour un screencast ou un diaporama', desc: "Beaucoup de MP4 sur les tutos YouTube contiennent de la musique ou une narration que vous voudrez peut-être isoler. Convertissez puis importez dans iMovie, Audacity ou Logic." },
      ]}}
      proTips={{ title: 'Conseils pour une conversion MP4 vers MP3 propre', tips: [
        { title: 'Si le MP4 est énorme, coupez-le avant', desc: "Notre limite est de 25 Mo sans inscription, 60 Mo avec. Une vidéo 1080p de plus de dix minutes ne passera pas. Ouvrez-la dans QuickTime (Mac) ou l'app Photos (Windows), coupez juste la partie utile, puis ré-exportez." },
        { title: '128 kbps est large pour la voix, parfait pour la musique', desc: "Pour la voix parlée, un MP3 à 64 kbps ferait la moitié du poids sans perte audible. Nous standardisons à 128 kbps parce que la plupart des gens ne savent pas ce que contient la vidéo et 128 sonne propre dans les deux cas." },
        { title: "Si la vidéo source a plusieurs pistes audio, seule la piste par défaut est lue", desc: "Films, rips de DVD et certains exports de cours embarquent plusieurs pistes de langue. Notre convertisseur prend la piste par défaut. Si vous avez besoin de la piste secondaire, changez la piste par défaut dans votre éditeur vidéo et ré-exportez le MP4 avant de l'envoyer." },
        { title: 'Les vieux MP4 de caméscopes peuvent ne pas décoder', desc: "Les MP4 AVCHD et autres formats de caméscopes utilisent parfois des codecs que ffmpeg ne lit pas sans bibliothèques supplémentaires. Si la conversion échoue, ouvrez le fichier dans HandBrake (gratuit, toutes plateformes), ré-exportez en MP4 H.264 standard, puis ressayez." },
        { title: 'Besoin de 320 kbps ou de VBR ? Utilisez Audacity ensuite', desc: "Notre MP3 est en débit constant 128 kbps. Si vous avez besoin d'un débit plus élevé ou d'un fichier VBR, prenez le MP3, ouvrez-le dans Audacity (aussi gratuit), et ré-exportez avec vos réglages préférés. La perte de qualité due au ré-encodage à un débit supérieur est négligeable." },
        { title: 'Pour les contenus protégés (films iTunes, DRM), cela échouera', desc: "Les MP4 protégés par DRM ne peuvent pas être lus par ffmpeg. Nous ne déchiffrons jamais de contenus protégés. Si le fichier vient d'un service de streaming, vous n'avez probablement pas le droit de le convertir." },
      ]}}
      faq={[
        { q: 'Le convertisseur MP4 vers MP3 est-il vraiment gratuit ?', a: "Oui. Pas de compte requis pour les fichiers jusqu'à 25 Mo, pas de limite de temps, pas de filigrane sur la sortie, pas de combine \"première conversion gratuite puis abonnez-vous\". Nous couvrons les coûts serveur grâce aux publicités d'affichage sur les pages éditoriales (pas dans le convertisseur lui-même)." },
        { q: 'Quelle est la taille maximale de fichier ?', a: "25 Mo sans compte, 60 Mo en vous connectant (gratuit). Le budget des fonctions Vercel est la vraie limite. Nous plafonnons en dessous pour que la conversion reste sous 60 secondes pour tout le monde." },
        { q: 'Combien de temps prend la conversion ?', a: "Pour un MP4 typique de 10 à 20 Mo (quelques minutes de vidéo), c'est terminé en 5 à 15 secondes. Le goulot est votre vitesse d'upload, pas la conversion. ffmpeg traverse le ré-encodage audio bien plus vite que le temps réel." },
        { q: 'Quelle est la qualité du MP3 ?', a: "128 kbps en débit constant, 44.1 kHz, stéréo. C'est le réglage universel \"assez bon pour tout\" : indistinguible de l'original pour la plupart des oreilles, voix comme musique, environ 1 Mo par minute d'audio." },
        { q: 'Conservez-vous mes fichiers ?', a: "Non. Votre envoi reste sur Vercel Blob juste le temps d'être converti, puis nous le supprimons. Le MP3 obtenu est purgé en moins d'une heure par notre cron de nettoyage. Sauvegardez le MP3 en local, nous ne pouvons pas le ré-envoyer." },
        { q: 'Le résultat contient-il un filigrane ou une balise audio ?', a: "Non. Nous n'insérons pas d'intros \"Converti par Mictoo\" ni d'outros de marque. Le MP3 est juste l'audio original ré-encodé." },
        { q: 'Puis-je convertir des vidéos YouTube avec cet outil ?', a: "Vous pouvez convertir tout fichier MP4 dont vous avez les droits. Nous ne téléchargeons pas de vidéos depuis YouTube, cela nous mettrait en porte-à-faux avec les conditions d'utilisation de YouTube. Utilisez un outil comme 4K Video Downloader ou yt-dlp pour sauvegarder le MP4 en local, puis déposez-le ici." },
        { q: 'Pourquoi limiter aux formats MP4 uniquement ?', a: "Chaque convertisseur est une URL avec une seule tâche. MP4 vers MP3 vit sur /mp4-to-mp3, WAV vers MP3 sur /wav-to-mp3, et ainsi de suite. Choisir le bon nous dit à quoi nous attendre et donne à Google une page propre à classer." },
        { q: 'Mon MP4 a échoué avec \"codec non pris en charge\". Que faire ?', a: "Les vieux MP4 de caméscopes et certains fichiers protégés par DRM utilisent des codecs que ffmpeg ne décode pas d'origine. Ouvrez le fichier dans HandBrake (gratuit), ré-exportez en MP4 H.264 standard, puis ressayez. Si cela échoue encore, le fichier est probablement verrouillé par DRM." },
        { q: 'Cela fonctionne-t-il sur mobile ?', a: "Oui. La page est adaptée au mobile et les envois fonctionnent depuis Safari iOS et Chrome Android. Sur iPhone, vous devrez peut-être partager la vidéo vers Fichiers d'abord pour que le sélecteur puisse y accéder." },
        { q: 'Les MP3 sont-ils avec perte ? Faut-il s&apos;inquiéter ?', a: "Oui, le MP3 est un format avec perte. À 128 kbps la perte est inaudible pour quasiment tous les auditeurs sur quasiment tous les contenus. Si vous avez besoin de sans perte, par exemple pour du mastering musical, convertissez plutôt MP4 vers WAV." },
        { q: 'Pourquoi pas de conversion par lot ?', a: "Le palier gratuit traite un fichier à la fois. Le lot est prévu sur la formule Pro à venir. En attendant, vous pouvez lancer plusieurs conversions en parallèle dans plusieurs onglets." },
      ]}
      relatedLinks={[
        { href: '/fr/wav-to-mp3', label: 'WAV vers MP3', desc: 'Compressez des fichiers WAV sans perte en MP3 compacts.' },
        { href: '/fr/webm-to-mp3', label: 'WEBM vers MP3', desc: "Extrayez le MP3 d'un WEBM (souvent ce que donnent les téléchargeurs YouTube)." },
        { href: '/fr/transcribe-video-to-text', label: 'Vidéo vers texte', desc: "Passez l'étape MP3, allez directement à la transcription texte de la vidéo." },
        { href: '/fr/how-to-compress-audio', label: 'Compresser de l&apos;audio', desc: 'Quand votre MP3 est encore trop lourd à partager.' },
      ]}
    />
  )
}
