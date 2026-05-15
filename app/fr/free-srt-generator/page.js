import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'Générateur SRT gratuit — Créer des sous-titres en ligne | Mictoo',
  description: "Générez des fichiers SRT à partir de n'importe quel audio ou vidéo gratuitement. Téléversez votre fichier, obtenez une transcription horodatée et téléchargez un .srt prêt à l'emploi. Sans inscription.",
  alternates: { canonical: 'https://mictoo.com/fr/free-srt-generator', languages: LANGS },
}

export default function FrSrtGeneratorPage() {
  return (
    <LandingLayout
      badge="SRT · Sous-titres · Gratuit"
      h1={<>Générateur SRT gratuit<br /><span className="text-brand-600">Créez des sous-titres en ligne</span></>}
      subtitle="Déposez n'importe quel fichier audio ou vidéo et téléchargez un fichier SRT prêt à l'emploi en quelques secondes. Compatible avec YouTube, Premiere Pro, DaVinci Resolve et tout éditeur vidéo."
      defaultLanguage="fr"
      features={[
        { icon: '🎬', title: 'SRT prêt pour YouTube', desc: 'Téléversez le fichier .srt directement dans YouTube Studio pour ajouter des sous-titres. Les timestamps sont synchronisés automatiquement.' },
        { icon: '⏱️', title: 'Timecodes précis', desc: 'Chaque segment de sous-titre reçoit un timestamp HH:MM:SS,ms — le format standard utilisé par tous les outils vidéo professionnels.' },
        { icon: '🌍', title: '50+ langues', desc: 'Génère des SRT dans toutes les langues — anglais, espagnol, français, allemand, japonais, et 46 autres. La langue est détectée automatiquement.' },
      ]}
      faq={[
        { q: "Qu'est-ce qu'un fichier SRT ?", a: "Un fichier SRT (SubRip Subtitle) est un fichier texte contenant des entrées de sous-titres horodatées. Chaque entrée a un numéro de séquence, une heure de début → fin, et le texte du sous-titre. SRT est le format de sous-titres le plus largement pris en charge." },
        { q: "Comment générer un SRT à partir d'une vidéo ?", a: "Déposez votre fichier vidéo ou audio ci-dessus. Mictoo le transcrit et ajoute des timestamps à chaque segment. Après la transcription, cliquez sur le bouton .srt pour télécharger votre fichier de sous-titres." },
        { q: 'Comment ajouter des sous-titres SRT à une vidéo YouTube ?', a: "Dans YouTube Studio, ouvrez votre vidéo et cliquez sur Sous-titres. Sélectionnez Ajouter une langue, puis Téléverser un fichier et choisissez votre .srt. YouTube synchronise les sous-titres automatiquement." },
        { q: 'Le fichier SRT fonctionne-t-il dans Premiere Pro et DaVinci Resolve ?', a: "Oui. Dans Premiere Pro : Fichier → Importer → sélectionnez votre .srt. Dans DaVinci Resolve : ouvrez la page Edit, allez dans Fichier → Importer Sous-titres, et sélectionnez le .srt." },
        { q: 'Le générateur SRT est-il vraiment gratuit ?', a: "Oui, totalement gratuit. Aucun compte, aucun abonnement, aucun filigrane. Déposez votre fichier et téléchargez le SRT — c'est tout." },
        { q: 'Quelle est la taille maximale de fichier ?', a: "Jusqu'à 25 Mo. Pour des vidéos plus longues, extrayez d'abord la piste audio pour réduire la taille, ou divisez la vidéo en segments plus courts." },
        { q: "Puis-je générer un SRT à partir d'un fichier audio (MP3, WAV) ?", a: "Oui. Mictoo génère des SRT à partir de tout format audio ou vidéo : MP3, MP4, WAV, M4A, OGG, WEBM, FLAC." },
        { q: 'Puis-je modifier les sous-titres avant le téléchargement ?', a: 'Oui. Après la transcription, vous pouvez éditer le texte dans le navigateur avant le téléchargement. La structure des timestamps est préservée dans le SRT exporté.' },
      ]}
      relatedLinks={[
        { href: '/fr/timestamped-transcription', label: 'Transcription horodatée' },
        { href: '/transcribe-video-to-text', label: 'Vidéo en texte' },
        { href: '/transcribe-mp3-to-text', label: 'MP3 en texte' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
