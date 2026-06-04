import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube en texte — transcription gratuite de vidéos YouTube | Mictoo',
  description:
    "Transcription YouTube gratuite. Téléchargez la vidéo, déposez le fichier, recevez une transcription IA précise. Mieux que les sous-titres auto YouTube, avec horodatages et export SRT.",
  alternates: { canonical: 'https://mictoo.com/fr/youtube-to-text', languages: LANGS },

  openGraph: {
    title: "YouTube en texte — transcription gratuite de vidéos YouTube | Mictoo",
    description: "Transcription YouTube gratuite. Téléchargez la vidéo, déposez le fichier, recevez une transcription IA précise. Mieux que les sous-titres auto YouTube, avec horodatages et export SRT.",
    url: "https://mictoo.com/fr/youtube-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube en texte — transcription gratuite de vidéos YouTube | Mictoo",
    description: "Transcription YouTube gratuite. Téléchargez la vidéo, déposez le fichier, recevez une transcription IA précise. Mieux que les sous-titres auto YouTube, avec horodatages et export SRT.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrYouTubeToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      enableYouTubeUrl
      badge="YouTube · SRT · GRATUIT"
      h1={
        <>
          YouTube en texte
          <br />
          <span className="text-brand-600">Outil gratuit de transcription YouTube</span>
        </>
      }
      subtitle="Obtenez une transcription propre et précise de n'importe quelle vidéo YouTube. Téléchargez le fichier, déposez-le ici, l'IA fait le reste. Mieux que les sous-titres auto YouTube, avec une vraie ponctuation et des horodatages."
      howItWorks={[
        {
          icon: '🔗',
          title: 'Collez un lien YouTube',
          desc: "Déposez n'importe quelle URL YouTube dans le champ ci-dessus. On récupère les sous-titres existants en quelques secondes — pas de téléchargement, pas d'attente pour que Whisper retranscrive. Fonctionne pour la plupart des vidéos publiques avec sous-titres auto ou sous-titres ajoutés par le créateur.",
        },
        {
          icon: '📂',
          title: 'Ou chargez un fichier',
          desc: "Pas de sous-titres sur la vidéo, upload privé, ou vous voulez juste une qualité Whisper fraîche ? Téléchargez l'audio avec une app desktop gratuite (voir notre guide de téléchargement plus bas), déposez-le sur la même page, et on le passe dans Whisper large-v3.",
        },
        {
          icon: '📋',
          title: 'Récupérez la transcription',
          desc: 'Lisez dans le navigateur, copiez dans le presse-papiers, ou exportez en TXT, SRT, VTT ou DOCX. Traduisez en 28 langues en un clic. Résumé IA gratuit en haut de chaque résultat.',
        },
      ]}
      whyUse={{
        title: 'Ce que vous obtenez sur Mictoo',
        bullets: [
          {
            title: 'Pas besoin de téléchargement',
            desc: "Collez une URL YouTube et la transcription revient en quelques secondes. Pas d'app desktop, pas de gestion de fichier, pas d'attente pour qu'une longue vidéo se charge.",
          },
          {
            title: 'Transcription Whisper fraîche en secours',
            desc: "Si la vidéo n'a pas de sous-titres, chargez l'audio. Whisper large-v3 gère les accents, la musique et les noms propres mieux que les sous-titres auto YouTube — moins de mots hallucinés, ponctuation complète.",
          },
          {
            title: 'SRT propre, prêt à éditer',
            desc: "Format SRT standard qui s'importe directement dans Premiere, DaVinci Resolve, Final Cut, CapCut. Pas de XML, pas d'horodatages bizarres, pas de nettoyage manuel.",
          },
          {
            title: 'Résumé IA gratuit sur chaque transcription',
            desc: 'Points clés et actions à mener en haut de chaque résultat, sans clic supplémentaire. Les concurrents facturent généralement 15-20 $/mois pour ça.',
          },
          {
            title: 'Traduction en 28 langues',
            desc: 'Un clic après la transcription. Les horodatages d\'origine sont conservés, donc le SRT traduit reste synchronisé avec l\'audio.',
          },
          {
            title: 'Sans inscription, sans filigrane, sans limite de temps',
            desc: 'Usage anonyme jusqu\'à 25 Mo. Inscrivez-vous gratuitement pour des fichiers de 60 Mo et un historique privé de vos transcriptions.',
          },
        ],
      }}
      useCases={{
        title: 'À quoi servent les transcriptions YouTube',
        items: [
          {
            title: 'Étudier de longs cours et tutoriels',
            desc: "Un cours du MIT de 90 minutes, c'est plus simple à étudier avec une version texte. Parcourez la partie qu'il vous faut, sautez au timecode dans la vidéo pour l'explication en direct.",
          },
          {
            title: 'Citer dans un travail académique ou journalistique',
            desc: "Quand vous référencez ce que quelqu'un a dit dans une vidéo, avoir la transcription avec horodatages permet de citer le moment exact. Bien plus rapide que de revisionner pour retrouver la citation.",
          },
          {
            title: 'Recycler votre propre contenu YouTube',
            desc: 'Transformez une vidéo YouTube en post de blog, newsletter, thread X, article LinkedIn. La transcription est le brouillon de départ.',
          },
          {
            title: 'Traduire des vidéos pour usage personnel',
            desc: "Récupérez la transcription dans la langue source, déposez dans DeepL ou ChatGPT, obtenez une traduction. Utile pour les tutoriels ou interviews en langue étrangère.",
          },
          {
            title: 'Remplacer les mauvais sous-titres auto sur votre propre chaîne',
            desc: "Générez un SRT propre ici, chargez-le dans YouTube Studio comme piste de sous-titres officielle. Meilleure expérience pour le spectateur, meilleur SEO.",
          },
        ],
      }}
      proTips={{
        title: 'Astuces pour transcrire YouTube',
        tips: [
          {
            title: 'Téléchargez toujours « audio seul » dans le downloader',
            desc: "Vous n'avez pas besoin de la vidéo pour transcrire. Un M4A audio seul fait un dixième de la taille et se télécharge en quelques secondes. 4K Video Downloader et ClipGrab ont tous les deux l'option « audio seul » dans le menu de format. Le M4A reste en général sous les 25 Mo même pour des vidéos de 30 minutes.",
          },
          {
            title: "Pour les vidéos de plus de 30 minutes, l'audio seul tient en général sans découpe",
            desc: "L'audio seul évite la limite de taille sur la plupart des vidéos. Si un exposé de 90 minutes dépasse quand même 60 Mo, découpez-le en trois morceaux de 30 minutes. Notre guide de découpe a les étapes dans Audacity, sans ligne de commande.",
          },
          {
            title: "Sautez l'intro musicale et l'outro",
            desc: 'Les tutoriels YouTube ont souvent 15 secondes de jingle au début et à la fin. Coupez-les dans Audacity avant l\'upload. Whisper invente parfois des mots pendant les sections musique seule.',
          },
          {
            title: "Pour les chaînes tutoriel avec du code à l'écran, il faut aussi la version audio",
            desc: "La reconnaissance de texte à l'écran est une autre catégorie d'outil (OCR). Si le tutoriel s'appuie sur l'affichage de code, il faudra prendre des captures séparément pour la partie visuelle. La transcription capte tout ce que le présentateur dit à voix haute.",
          },
          {
            title: "Les sous-titres en direct de YouTube servent de vérification de sanité",
            desc: "Si la vidéo a des sous-titres auto YouTube, vous pouvez les comparer à votre transcription Whisper pour repérer les divergences. En général Whisper gagne, mais sur de l'argot rare ou des noms propres YouTube a peut-être attrapé quelque chose que Whisper a raté.",
          },
          {
            title: 'Utilisez un downloader qui garde le titre de la vidéo comme nom de fichier',
            desc: "4K Video Downloader et ClipGrab peuvent tous les deux mettre le titre YouTube comme nom de sortie par défaut. Ça garde vos transcriptions rangées au lieu de finir avec un dossier plein de « video.mp4 », « video (1).mp4 », « video (2).mp4 ».",
          },
        ],
      }}
      faq={[
        {
          q: 'Puis-je coller un lien YouTube directement dans Mictoo ?',
          a: "Pas pour l'instant. YouTube bloque activement les serveurs tiers qui veulent récupérer des vidéos. Il faut télécharger la vidéo ou l'audio en local d'abord (une app desktop gratuite comme 4K Video Downloader ou ClipGrab le fait en deux clics), puis charger le fichier dans Mictoo. Supporter les URLs directement demanderait de maintenir une infrastructure de téléchargement vidéo que YouTube casse régulièrement.",
        },
        {
          q: 'Est-ce légal de transcrire des vidéos YouTube ?',
          a: "Pour l'étude personnelle, la recherche, le journalisme, l'accessibilité et l'usage équitable, généralement oui dans la plupart des juridictions. Pour republier la transcription commercialement, il faut en général l'autorisation du créateur. Les conditions de YouTube interdisent le téléchargement de contenu sauf si YouTube l'autorise explicitement (bouton Download) ou si vous avez la permission du créateur. Vérifiez les conditions pour votre cas. Ce n'est pas un conseil juridique.",
        },
        {
          q: 'Ma transcription correspondra-t-elle aux sous-titres auto YouTube ?',
          a: "Non, la nôtre sera meilleure. Les sous-titres auto n'ont pas de ponctuation et une précision plus faible. Whisper large-v3 produit des phrases complètes avec ponctuation, majuscules et meilleure précision sur la musique, les accents et les noms propres.",
        },
        {
          q: 'Quel est le meilleur downloader YouTube à utiliser ?',
          a: "Pour la plupart des gens : 4K Video Downloader ou ClipGrab. Tous les deux sont gratuits, avec une app desktop propre pour Mac, Windows et Linux, et permettent de prendre l'audio seul en un clic. Évitez les sites « téléchargeur YouTube en ligne » qui remontent dans Google, beaucoup sont noyés sous des pubs avec malware et cassent toutes les quelques semaines. Si vous êtes à l'aise avec la ligne de commande, yt-dlp est l'option la plus fiable (c'est le moteur qui équipe beaucoup d'apps GUI en dessous).",
        },
        {
          q: "Comment télécharger juste l'audio ?",
          a: 'Dans 4K Video Downloader : collez le lien YouTube, quand le dialogue de format s\'ouvre, choisissez « Extract Audio » et M4A ou MP3. Dans ClipGrab : collez le lien, dans le menu « Format » choisissez MP3 ou « Original audio ». Tous les deux produisent un fichier audio unique prêt à charger ici.',
        },
        {
          q: 'Et si ma vidéo YouTube est dans une langue que je ne parle pas ?',
          a: "Whisper détecte la langue automatiquement et transcrit dans la langue source. Ensuite vous pouvez coller le résultat dans DeepL ou ChatGPT pour traduire. Deux étapes, mais le résultat est en général meilleur que les sous-titres auto-traduits de YouTube.",
        },
        {
          q: 'Combien de temps prend la transcription d\'une vidéo YouTube ?',
          a: "Juste l'étape de transcription prend environ 1 à 2 % de la durée audio. Une conférence de 30 minutes finit en environ une minute. Le temps de téléchargement dépend de votre connexion et de la vitesse du downloader.",
        },
        {
          q: 'Aurai-je des étiquettes de locuteur pour les vidéos YouTube multi-intervenants ?',
          a: "Non, Whisper ne fait pas de diarisation par défaut. Pour les interviews et les panels avec plusieurs intervenants, il faudra ajouter les étiquettes manuellement en suivant le flow de la conversation.",
        },
        {
          q: 'Puis-je générer des sous-titres prêts pour YouTube ?',
          a: "Oui. Téléchargez en SRT après la transcription, puis chargez le SRT dans YouTube Studio sous Sous-titres. Ça remplace les sous-titres auto par une version propre.",
        },
        {
          q: 'Mictoo stocke-t-il la vidéo YouTube que je charge ?',
          a: 'Non. Le fichier va à notre prestataire de transcription, est traité, puis jeté. On ne garde ni la vidéo ni l\'audio.',
        },
        {
          q: 'Ma vidéo YouTube a des chapitres. La transcription les reflètera-t-elle ?',
          a: "On n'extrait pas les métadonnées de chapitres YouTube. La transcription arrive comme un document continu. Si vous voulez des transcriptions alignées sur les chapitres, découpez le fichier audio aux horodatages des chapitres avant l'upload.",
        },
        {
          q: "Puis-je transcrire un live YouTube après sa fin ?",
          a: "Oui, tant que le live est archivé comme vidéo classique. Téléchargez l'archive de la même façon (yt-dlp ou autre app), puis chargez. La transcription pendant le live lui-même n'est pas supportée.",
        },
      ]}
      relatedLinks={[
        { href: '/fr/transcribe-video-to-text', label: 'Vidéo en texte', desc: 'Pour les fichiers vidéo non-YouTube (Zoom, captures, vlogs).' },
        { href: '/fr/free-srt-generator', label: 'Générateur SRT', desc: 'Pour remonter des sous-titres propres dans YouTube Studio.' },
        { href: '/fr/podcast-transcription', label: 'Transcription de podcast', desc: 'Pour de l\'audio podcast chargé sur YouTube.' },
        { href: '/fr/how-to-split-audio', label: "Comment découper l'audio", desc: "Pour les longues vidéos qui dépassent la limite de 60 minutes." },
      ]}
    />
  )
}
