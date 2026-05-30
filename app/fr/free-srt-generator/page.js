import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'pl': 'https://mictoo.com/pl/free-srt-generator',
  'ja': 'https://mictoo.com/ja/free-srt-generator',
  'ko': 'https://mictoo.com/ko/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'Générateur SRT — créez des fichiers de sous-titres SRT en ligne | Mictoo',
  description:
    "Générateur de sous-titres SRT gratuit. Chargez votre fichier audio ou vidéo et obtenez un .srt propre avec horodatages en quelques secondes. Marche avec YouTube, Premiere, DaVinci, CapCut.",
  alternates: { canonical: 'https://mictoo.com/fr/free-srt-generator', languages: LANGS },

  openGraph: {
    title: "Générateur SRT — créez des fichiers de sous-titres SRT en ligne | Mictoo",
    description: "Générateur de sous-titres SRT gratuit. Chargez votre fichier audio ou vidéo et obtenez un .srt propre avec horodatages en quelques secondes. Marche avec YouTube, Premiere, DaVinci, CapCut.",
    url: "https://mictoo.com/fr/free-srt-generator",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Générateur SRT — créez des fichiers de sous-titres SRT en ligne | Mictoo",
    description: "Générateur de sous-titres SRT gratuit. Chargez votre fichier audio ou vidéo et obtenez un .srt propre avec horodatages en quelques secondes. Marche avec YouTube, Premiere, DaVinci, CapCut.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrSrtPage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="SRT · Sous-titres · Gratuit"
      h1={
        <>
          Générateur SRT
          <br />
          <span className="text-brand-600">Sous-titres IA depuis n'importe quel audio ou vidéo</span>
        </>
      }
      subtitle="Générez des fichiers de sous-titres depuis n'importe quel audio ou vidéo. Récupérez un .srt propre avec des horodatages précis en quelques secondes. Drop-in pour YouTube, Premiere, DaVinci Resolve, CapCut, Final Cut."
      howItWorks={[
        {
          icon: '📂',
          title: "Déposez l'audio ou la vidéo",
          desc: "MP3, M4A, MP4, MOV, WAV, FLAC, OGG, WEBM, AAC. L'audio est extrait de la vidéo automatiquement.",
        },
        {
          icon: '⚡',
          title: "L'IA transcrit et aligne",
          desc: "Whisper large-v3 transcrit l'audio et génère des horodatages pour chaque ligne. Une vidéo de 10 minutes prend en général 15 secondes. Une de 30 minutes, environ une minute.",
        },
        {
          icon: '💾',
          title: 'Téléchargez le .srt',
          desc: "Cliquez « Télécharger SRT ». Le fichier est au format standard, drop-in compatible avec tout grand éditeur vidéo et YouTube Studio.",
        },
      ]}
      whyUse={{
        title: 'Pourquoi ce générateur SRT',
        bullets: [
          {
            title: "Les horodatages Whisper large-v3 sont précis à l'image",
            desc: "Les horodatages sont en millisecondes, ce qui est plus précis que n'importe quelle fréquence d'images courante. Ils s'alignent correctement à 24, 25, 29.97, 30, 50 et 60 fps sans ajustement d'offset.",
          },
          {
            title: 'Gratuit, sans compteur à la minute',
            desc: "Transcrivez 10 minutes ou 60. Même prix (gratuit). Pas de gate « passez à Pro » après le premier fichier.",
          },
          {
            title: 'Plus de 50 langues',
            desc: "Générez des sous-titres pour du contenu dans toute langue majeure. Utile pour les chaînes YouTube internationales et les pistes de sous-titres traduits.",
          },
          {
            title: 'Format .srt standard',
            desc: "Pas d'extensions propriétaires, pas d'encodage bizarre. Marche dans Premiere Pro, DaVinci Resolve, Final Cut, CapCut, Kapwing, Descript, YouTube Studio, VLC, MPV.",
          },
          {
            title: "Aucun fichier n'est conservé",
            desc: "L'audio va au prestataire de transcription et est jeté après traitement. On ne garde pas votre vidéo.",
          },
        ],
      }}
      useCases={{
        title: 'À quoi servent les fichiers SRT',
        items: [
          {
            title: 'Uploads YouTube',
            desc: "Remplacez les sous-titres auto YouTube par un .srt propre. Meilleure ponctuation, moins d'erreurs, meilleure accessibilité pour les spectateurs malentendants. Bonus : la recherche YouTube indexe plus fiablement les sous-titres uploadés que les auto-générés.",
          },
          {
            title: 'Sous-titres pour vidéo sociale (TikTok, Reels, Shorts)',
            desc: 'Générez le .srt ici, importez dans CapCut ou Premiere, stylisez les sous-titres comme vous voulez, et incrustez-les dans la vidéo. La plupart des spectateurs regardent sans son, donc les sous-titres ne sont plus optionnels.',
          },
          {
            title: "Sous-titrage pour l'accessibilité",
            desc: "Enregistrements de conférences, vidéos de formation interne, cours en ligne. Les sous-titres les rendent utilisables pour les spectateurs sourds et malentendants, et pour quiconque dans un environnement bruyant.",
          },
          {
            title: 'Pipeline de traduction',
            desc: 'Générez le .srt dans la langue source, collez-le dans DeepL ou ChatGPT pour traduire, sauvegardez en .srt dans la langue cible. Résultat : sous-titres de qualité doublage dans une autre langue sans payer une traduction humaine.',
          },
          {
            title: 'Montage vidéo dans les délais',
            desc: "Quand vous avez besoin de sous-titres hier et que vous ne pouvez pas attendre un transcripteur humain, les sous-titres IA sont assez bons pour la première coupe. Polissez après.",
          },
        ],
      }}
      proTips={{
        title: 'Astuces pour générer du SRT',
        tips: [
          {
            title: 'Pour les longues vidéos, générez le .srt en morceaux de 10 minutes et concaténez',
            desc: "Plus facile de corriger des horodatages faux au milieu si une dérive se produit. La plupart des éditeurs vous laissent importer plusieurs .srt et les recoller.",
          },
          {
            title: "L'upload audio seul est plus rapide que l'upload vidéo pour le même contenu",
            desc: "Extrayez l'audio en premier : ffmpeg -i video.mp4 -vn -ac 1 -b:a 64k audio.mp3. Le .srt que vous recevez fonctionne contre la vidéo originale, puisque les horodatages sont les horodatages.",
          },
          {
            title: 'Incrustez les sous-titres seulement après le montage',
            desc: "Si vous incrustez les sous-titres dans la vidéo avant les coupes, vous devrez les refaire au coupage. Incrustez à la fin, quand la vidéo est verrouillée.",
          },
          {
            title: 'Gardez la longueur de ligne du .srt gérable',
            desc: "Whisper produit parfois de longs sous-titres sur une seule ligne pour les longues phrases. La plupart des éditeurs vous laissent découper les longues lignes automatiquement, ou vous pouvez découper manuellement pour une meilleure lisibilité.",
          },
          {
            title: 'Pour les vidéos multilingues, générez le .srt une langue à la fois',
            desc: 'Si votre vidéo a des sections en anglais et en français, générez le .srt de chaque section séparément (en fixant la langue manuellement à chaque fois), puis fusionnez en un seul .srt.',
          },
          {
            title: 'Éditez le .srt dans un éditeur de texte, pas un éditeur vidéo',
            desc: "Un .srt, c'est juste du texte avec des horodatages. Ouvrez dans VS Code, Notepad++ ou BBEdit pour corriger les coquilles vite. Réimportez dans l'éditeur vidéo quand vous avez fini.",
          },
          {
            title: 'Pour TikTok et Reels, raccourcissez les sous-titres à une courte ligne par sous-titre, à la main',
            desc: "Les phrases naturelles de Whisper sont plus longues que le style punchy de TikTok. Éditez le .srt pour coller au style de la plateforme.",
          },
        ],
      }}
      faq={[
        {
          q: "Qu'est-ce qu'un fichier SRT ?",
          a: 'SRT (SubRip Subtitle) est le format de sous-titres le plus courant. Texte simple avec horodatages et texte du sous-titre. Tout grand lecteur vidéo ou éditeur lit le .srt.',
        },
        {
          q: 'Comment générer un fichier SRT depuis une vidéo ?',
          a: "Chargez la vidéo ici. On extrait l'audio, on transcrit, on génère le .srt. Cliquez « Télécharger SRT » quand c'est prêt.",
        },
        {
          q: 'Comment ajouter des sous-titres SRT à une vidéo YouTube ?',
          a: "Dans YouTube Studio, ouvrez votre vidéo, allez dans Sous-titres, cliquez Ajouter une langue, chargez le fichier .srt. YouTube l'utilisera comme sous-titres officiels pour cette langue.",
        },
        {
          q: 'Le fichier SRT marche dans Premiere Pro et DaVinci Resolve ?',
          a: 'Oui. Dans Premiere, File, Import, sélectionnez le .srt. Dans DaVinci, glissez le .srt dans le bin du projet. Les deux le traitent comme une piste de sous-titres que vous pouvez encore éditer sur la timeline.',
        },
        {
          q: 'Ça marche dans CapCut et Final Cut ?',
          a: 'Oui. CapCut : tapez Captions, Import SRT. Final Cut : File, Import, Captions, sélectionnez le .srt. Les deux placent les sous-titres sur la timeline aux bons moments.',
        },
        {
          q: 'Le générateur SRT est-il vraiment gratuit ?',
          a: "Oui. Pas de tarif par fichier, pas de compteur à la minute, pas d'email pour les fichiers sous 25 Mo. Les fichiers entre 25 Mo et 60 Mo demandent un compte gratuit.",
        },
        {
          q: 'Quelle est la taille maximale du fichier ?',
          a: '25 Mo sans compte, 60 Mo avec compte gratuit.',
        },
        {
          q: 'Puis-je générer du SRT depuis des fichiers audio (MP3, WAV) ?',
          a: "Oui. Déposez le fichier audio directement. On génère le .srt avec horodatages comme s'il s'agissait d'audio vidéo. Utile pour ajouter des sous-titres quand vous synchroniserez l'audio sur des images ou des slides après.",
        },
        {
          q: 'Les horodatages vont-ils dériver sur une longue vidéo ?',
          a: "Les horodatages Whisper sont alignés sur l'audio réel, donc la dérive est rare. Pour les fichiers très longs (60 minutes), une dérive sous-seconde sur les derniers sous-titres peut arriver. Si vous la repérez, corrigez les sous-titres affectés à la main.",
        },
        {
          q: 'Puis-je éditer les sous-titres avant de télécharger ?',
          a: 'Oui. Après la transcription, corrigez les mots faux dans la vue de résultat, puis téléchargez le .srt avec vos éditions.',
        },
        {
          q: 'Quelles langues le générateur SRT supporte-t-il ?',
          a: "Plus de 50 langues avec détection automatique. Pour les vidéos plus courtes ou le contenu non anglais, choisissez la langue manuellement pour des résultats plus fiables.",
        },
        {
          q: "L'audio est-il stocké ?",
          a: "Non. Le fichier va à notre prestataire de transcription, est traité, puis jeté. On ne garde ni l'audio ni le .srt généré.",
        },
        {
          q: "Puis-je générer le SRT dans une langue différente de l'audio ?",
          a: 'Pas directement. Générez le .srt dans la langue source, puis traduisez le texte du .srt avec DeepL ou ChatGPT. Les horodatages restent les mêmes, seul le texte change.',
        },
      ]}
      relatedLinks={[
        { href: '/fr/transcribe-video-to-text', label: 'Vidéo en texte', desc: 'Même moteur, calé pour la sortie texte simple.' },
        { href: '/fr/timestamped-transcription', label: 'Transcription horodatée', desc: 'Pour des horodatages par phrase ou par mot dans d\'autres formats.' },
        { href: '/fr/youtube-to-text', label: 'YouTube en texte', desc: 'Pour remplacer les sous-titres auto YouTube.' },
        { href: '/fr/transcribe-audio-to-text', label: 'Audio en texte', desc: 'Pour la transcription audio pure.' },
      ]}
    />
  )
}
