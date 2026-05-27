import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'ja': 'https://mictoo.com/ja/timestamped-transcription',
  'ko': 'https://mictoo.com/ko/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'Transcription horodatée — générateur gratuit de transcripts time-coded | Mictoo',
  description:
    "Transcription horodatée gratuite. Obtenez des horodatages par mot ou par phrase pour n'importe quel audio ou vidéo. Conçu pour le journalisme, la recherche, le podcasting, le montage vidéo.",
  alternates: { canonical: 'https://mictoo.com/fr/timestamped-transcription', languages: LANGS },
}

export default function FrTimestampedPage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="Horodatages · Citation · Gratuit"
      h1={
        <>
          Transcription horodatée
          <br />
          <span className="text-brand-600">Transcripts time-coded gratuits</span>
        </>
      }
      subtitle="Des horodatages précis pour chaque ligne ou chaque mot de votre audio. Revenez à des moments exacts, citez des passages précis, créez des marqueurs de chapitres. Gratuit, sans inscription."
      howItWorks={[
        {
          icon: '📂',
          title: 'Déposez le fichier',
          desc: "MP3, M4A, MP4, WAV, FLAC, OGG, WEBM, AAC. On travaille avec les formats audio et vidéo.",
        },
        {
          icon: '⚡',
          title: "L'IA transcrit et horodate",
          desc: "Whisper large-v3 génère la transcription avec des horodatages précis à la milliseconde par segment (et optionnellement par mot).",
        },
        {
          icon: '💾',
          title: 'Choisissez la granularité et téléchargez',
          desc: "Horodatages par phrase (le plus courant) ou par mot (pour les travaux d'alignement précis). Téléchargez en TXT avec horodatages inline, en SRT pour les workflows de sous-titres, ou copiez dans le presse-papiers.",
        },
      ]}
      whyUse={{
        title: 'Pourquoi Mictoo pour la transcription horodatée',
        bullets: [
          {
            title: 'Horodatages à la milliseconde',
            desc: "Whisper sort des horodatages avec une précision à la milliseconde. Plus précis que n'importe quelle fréquence d'images courante, plus que suffisant pour le travail de citation.",
          },
          {
            title: 'Par phrase par défaut, par mot quand vous en avez besoin',
            desc: "Par phrase garde les transcriptions lisibles. Par mot, c'est exagéré pour prendre des notes mais essentiel pour le montage vidéo et l'alignement musical.",
          },
          {
            title: 'Gratuit',
            desc: "Pas de compteur à la minute. Pas de tier « les horodatages, c'est en supplément ». Même prix que la transcription simple (gratuit).",
          },
          {
            title: 'Export SRT pour les workflows vidéo',
            desc: "Les horodatages au format SRT fonctionnent direct dans Premiere, DaVinci, CapCut et YouTube Studio comme pistes de sous-titres.",
          },
          {
            title: 'Horodatages inline en TXT pour citation',
            desc: 'Texte simple avec marqueurs [00:01:23] au début de chaque segment. Facile à coller dans des notes de recherche, des posts de blog ou des brouillons journalistiques.',
          },
          {
            title: "Aucun fichier n'est conservé",
            desc: "L'audio va au prestataire de transcription et est jeté. Rien ne reste sur nos serveurs.",
          },
        ],
      }}
      useCases={{
        title: 'À quoi servent les transcriptions horodatées',
        items: [
          {
            title: 'Journalisme et citation',
            desc: "Vous citez une source depuis une interview ? Mettez l'horodatage à côté de la citation dans vos notes. Quand l'éditeur ou le fact-checker demande « où ont-ils dit ça exactement », vous avez la réponse en deux secondes.",
          },
          {
            title: 'Marqueurs de chapitre pour podcast',
            desc: "Générez la transcription, scannez pour trouver les coupures de section naturelles, copiez les horodatages dans la fonction de chapitres de votre hébergeur. Les lecteurs modernes affichent les chapitres dans la barre de lecture.",
          },
          {
            title: 'Coupes brutes de montage vidéo',
            desc: "Récupérez la transcription, marquez les lignes que vous voulez garder, retrouvez-les sur la timeline par horodatage. Le « montage papier » est bien plus rapide que de scruter.",
          },
          {
            title: 'Recherche académique et codage qualitatif',
            desc: "Les chercheurs sur NVivo, Atlas.ti ou MAXQDA taguent les segments de transcription avec des codes. Les horodatages permettent de revenir à l'audio au moment exact en codant des passages ambigus.",
          },
          {
            title: 'Alignement musical pour vidéos karaoké',
            desc: "Horodatages par mot pour les projets style karaoké ou lyric-video. Chaque mot s'illumine au moment exact où il est chanté.",
          },
        ],
      }}
      proTips={{
        title: 'Astuces pour la transcription horodatée',
        tips: [
          {
            title: 'Les horodatages par phrase couvrent 95 % des cas',
            desc: "Sauf si vous faites de l'alignement musical ou des sous-titres mot à mot, par phrase est ce qu'il vous faut. Plus lisible, plus facile à éditer.",
          },
          {
            title: 'Les horodatages par mot font exploser la taille et la complexité',
            desc: "Un SRT par mot pour une conférence de 30 minutes a des milliers d'entrées. Utilisez seulement quand vous avez vraiment besoin de précision au mot.",
          },
          {
            title: 'Pour les podcasts, générez des marqueurs de chapitre depuis les coupures naturelles',
            desc: 'Regardez la transcription pour les transitions de sujet, les changements d\'agenda ou les présentations d\'invités. Copiez ces horodatages dans votre hébergeur comme marqueurs de chapitre.',
          },
          {
            title: 'Pour le journalisme, sauvegardez l\'horodatage avec chaque citation que vous pourriez utiliser',
            desc: "Le vous du futur, 3 semaines plus tard, ne se rappellera pas de quelle interview vient une citation, encore moins où dans l'interview. L'horodatage règle ça.",
          },
          {
            title: 'Les horodatages SRT sont avec des zéros, les TXT non',
            desc: "SRT utilise 00:01:23,456. TXT utilise en général [1:23]. Si vous collez dans un CMS qui attend un format, convertissez avant.",
          },
          {
            title: "Pour le montage vidéo, l'horodatage dans notre SRT s'aligne sur l'audio du fichier original",
            desc: "Si vous ré-exportez votre vidéo à une autre fréquence d'images, les horodatages collent toujours parce qu'ils sont en temps absolu (millisecondes), pas en frames.",
          },
          {
            title: 'Les horodatages dérivent sur du mauvais audio',
            desc: "Quand Whisper hallucine des mots pendant la musique ou le silence, les horodatages de ces mots fantômes sont des estimations. Les horodatages de la vraie parole restent précis. Faites confiance aux sections parlées, ignorez les sections musicales.",
          },
        ],
      }}
      faq={[
        {
          q: 'Quelle est la différence entre horodatages par phrase et par mot ?',
          a: "Par phrase : un horodatage par ligne de texte (en général une phrase). Par mot : un horodatage par mot. Par phrase est lisible et bon pour la citation, le podcasting et la plupart du travail vidéo. Par mot, c'est pour l'alignement musical, les vidéos karaoké et les animations de sous-titres mot à mot.",
        },
        {
          q: 'Quelle est la précision des horodatages ?',
          a: "Whisper sort des horodatages en millisecondes. Ils s'alignent correctement à chaque fréquence d'images courante (24, 25, 29.97, 30, 50, 60 fps) sans offset.",
        },
        {
          q: 'Les horodatages vont-ils dériver sur un long fichier ?',
          a: "Rarement. Whisper aligne les horodatages sur l'audio réel, donc ils restent précis même pour des fichiers de 60 minutes. Une dérive sous-seconde peut se produire sur les derniers segments de fichiers très longs. Si vous la remarquez, ajustez à la main.",
        },
        {
          q: "Puis-je avoir un TXT avec horodatages inline comme [00:01:23] avant chaque ligne ?",
          a: 'Oui. Téléchargez en TXT et on inclut les horodatages par phrase inline. Format : [00:01:23] Texte de la phrase ici.',
        },
        {
          q: 'Le SRT inclut-il des horodatages ?',
          a: "Oui, c'est tout l'intérêt du format SRT. Chaque entrée de sous-titre a un horodatage de début et de fin.",
        },
        {
          q: 'Comment ça se compare aux sous-titres auto YouTube avec horodatages ?',
          a: "Les sous-titres auto YouTube ont des horodatages mais pas de ponctuation et une précision plus basse. Les nôtres ont une ponctuation complète, une meilleure précision et un SRT standard qui marche dans n'importe quel éditeur vidéo.",
        },
        {
          q: 'Puis-je sauter à un horodatage précis dans l\'audio depuis la transcription ?',
          a: "Dans notre vue de résultat, cliquez n'importe quel horodatage pour faire sauter le lecteur audio à ce moment. Après téléchargement, il vous faudrait un lecteur audio séparé pour faire ça.",
        },
        {
          q: 'Les horodatages fonctionnent dans Premiere ou DaVinci Resolve ?',
          a: "Oui. Importez le SRT dans la timeline. Les sous-titres apparaissent aux bons moments automatiquement.",
        },
        {
          q: 'Quelles langues sont supportées pour la transcription horodatée ?',
          a: 'Les mêmes 50+ langues que la transcription simple. Les horodatages arrivent automatiquement avec chaque transcription quelle que soit la langue.',
        },
        {
          q: "L'audio est-il stocké ?",
          a: "Non. Le fichier va au prestataire de transcription et est jeté après traitement.",
        },
        {
          q: 'Puis-je utiliser les horodatages par mot pour faire une vidéo karaoké ?',
          a: "Oui, mais il vous faudra un logiciel vidéo qui peut faire le rendu d'un surlignage mot par mot depuis un format JSON ou SRT. Certains outils (Premiere, After Effects, logiciels karaoké spécialisés) le supportent direct.",
        },
        {
          q: 'Combien de temps prend la génération de transcriptions horodatées ?',
          a: "Le même temps que la transcription simple, environ 1 à 2 % de la durée audio. Les horodatages arrivent automatiquement, sans temps de traitement supplémentaire.",
        },
      ]}
      relatedLinks={[
        { href: '/fr/free-srt-generator', label: 'Générateur SRT', desc: 'Mêmes horodatages, calé pour les workflows de sous-titres.' },
        { href: '/fr/podcast-transcription', label: 'Transcription de podcast', desc: 'Horodatages pour show notes et marqueurs de chapitre.' },
        { href: '/fr/interview-transcription', label: "Transcription d'interview", desc: 'Horodatages pour citation et recherche de citations.' },
        { href: '/fr/transcribe-audio-to-text', label: 'Audio en texte', desc: 'Pour la sortie en texte simple sans horodatages.' },
      ]}
    />
  )
}
