import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: 'Vidéo en texte — transcription gratuite en ligne | Mictoo',
  description:
    "Transcription vidéo en texte gratuite. Déposez MP4, MOV, WEBM, AVI et obtenez une transcription IA ou un fichier SRT. Marche avec captures d'écran, tutoriels, vlogs.",
  alternates: { canonical: 'https://mictoo.com/fr/transcribe-video-to-text', languages: LANGS },
}

export default function FrVideoToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="MP4 · MOV · WEBM · GRATUIT"
      h1={
        <>
          Vidéo en texte
          <br />
          <span className="text-brand-600">Transcription vidéo IA gratuite</span>
        </>
      }
      subtitle="Transcription IA gratuite pour tout fichier vidéo. On extrait l'audio pour vous, automatiquement. Sans compte, sans tarif à la minute, sans email."
      howItWorks={[
        {
          icon: '🎬',
          title: 'Déposez la vidéo',
          desc: "MP4, MOV, WEBM, AVI ou tout conteneur vidéo courant. Captures d'écran, vlogs, exports de webinaires, MP4 de Zoom. Glissez ou cliquez pour choisir.",
        },
        {
          icon: '⚡',
          title: "On extrait l'audio, l'IA transcrit",
          desc: "On sort la piste audio de la vidéo et on n'envoie qu'elle à Whisper large-v3. Pas besoin de convertir en MP3 avant. Une vidéo de 30 minutes finit en général en une minute environ.",
        },
        {
          icon: '📋',
          title: 'Copiez, téléchargez ou récupérez les sous-titres',
          desc: "Téléchargez en TXT pour les notes, ou en SRT pour insérer dans un éditeur vidéo comme sous-titres. Éditez les mots faux dans le navigateur avant d'exporter.",
        },
      ]}
      whyUse={{
        title: 'Pourquoi Mictoo pour la vidéo',
        bullets: [
          {
            title: 'Upload direct, pas de détour par YouTube',
            desc: "Plein de transcripteurs gratuits vous disent d'uploader votre vidéo sur YouTube en non répertoriée, attendre les sous-titres auto et copier le texte. C'est lent et ça donne des sous-titres médiocres. Sautez ça.",
          },
          {
            title: "L'extraction audio est automatique",
            desc: "Vous déposez le MP4. On sort l'audio à l'intérieur et on l'envoie au modèle. Pas besoin de lancer ffmpeg vous-même.",
          },
          {
            title: 'La sortie fonctionne dans de vrais éditeurs vidéo',
            desc: "Le SRT qu'on génère fonctionne dans Premiere Pro, DaVinci Resolve, Final Cut, CapCut et YouTube Studio. Les horodatages sont précis à l'image.",
          },
          {
            title: "Fichiers vidéo trop gros ? Compressez l'audio, pas la vidéo",
            desc: "Une vidéo de 200 Mo, c'est en général 195 Mo de vidéo et 5 Mo d'audio. Pas besoin de tout compresser, juste la piste audio.",
          },
          {
            title: "Aucun fichier n'est conservé",
            desc: "La vidéo nous arrive, on extrait l'audio, on l'envoie au prestataire de transcription, et on jette les deux. On ne garde ni votre vidéo ni votre audio sur nos serveurs.",
          },
        ],
      }}
      useCases={{
        title: 'À quoi sert la transcription vidéo',
        items: [
          {
            title: 'Sous-titres pour vidéo sociale',
            desc: 'TikTok, Instagram Reels, YouTube Shorts gagnent tous à avoir des sous-titres incrustés. Générez le SRT ici, importez dans CapCut ou Premiere, stylisez les sous-titres comme vous voulez et incrustez-les.',
          },
          {
            title: 'Tutoriels et contenu de cours',
            desc: "Si vous enregistrez des tutoriels en screencast, une version texte aide au SEO, à l'accessibilité et à la traduction. Collez la transcription dans votre blog ou plateforme de cours en complément de la vidéo.",
          },
          {
            title: 'Suivi de webinaires',
            desc: "Vous avez fait un webinaire d'une heure. Transcrivez l'enregistrement, éditez légèrement, envoyez par email comme follow-up aux participants qui n'ont pas pu rester jusqu'au bout.",
          },
          {
            title: "Pré-montage d'interviews",
            desc: "En montant une longue interview vidéo, avoir la transcription sur un deuxième écran vous laisse faire un « montage papier ». Marquez les lignes que vous voulez, retrouvez-les dans la timeline, bien plus rapide que de scruter.",
          },
          {
            title: 'Préparation de traduction et doublage',
            desc: 'Transcrivez dans la langue source, passez le texte dans DeepL ou ChatGPT pour traduire, puis utilisez ça comme script pour le doublage ou la traduction des sous-titres.',
          },
        ],
      }}
      proTips={{
        title: 'Astuces pour la transcription vidéo',
        tips: [
          {
            title: "Extrayez l'audio en premier si votre vidéo dépasse 60 Mo",
            desc: "Une vidéo 1080p, c'est surtout des octets de pixels qu'on va jeter de toute façon. Sortez juste la piste audio : ffmpeg -i video.mp4 -vn -ac 1 -b:a 64k audio.mp3. Une vidéo de 500 Mo descend à moins de 30 Mo d'audio.",
          },
          {
            title: "Coupez la musique de fond dans l'éditeur avant d'exporter",
            desc: "Si votre vidéo a de la musique sous le dialogue (B-roll, intro, transitions), coupez ou baissez la piste musicale dans votre éditeur avant d'exporter la version que vous chargez. Whisper invente parfois des mots quand la parole est enterrée sous la musique.",
          },
          {
            title: "Les captures d'écran sans musique sont les plus simples",
            desc: 'Loom, Zoom, captures OBS de quelqu\'un qui parle sur des slides donnent les transcriptions les plus propres. Pas de musique, une seule voix, micro clair. Vous obtiendrez une précision quasi humaine.',
          },
          {
            title: "Pour la vidéo multi-locuteurs, enregistrez des pistes audio séparées si possible",
            desc: "Si vous contrôlez l'enregistrement, captez chaque locuteur sur sa propre piste. Transcrivez chacune séparément. Attribution plus propre, moins d'erreurs sur les chevauchements.",
          },
          {
            title: "Le framerate n'a pas d'importance, seule la qualité audio compte",
            desc: "Whisper ne regarde pas la vidéo, seulement l'audio. Une vidéo 4K avec un mauvais son se transcrit moins bien qu'une 480p avec une cravate. Mettez l'effort dans le son.",
          },
          {
            title: "Les horodatages SRT peuvent demander un petit décalage dans certains éditeurs",
            desc: "La plupart des éditeurs alignent les horodatages SRT parfaitement. Quelques vieux éditeurs attendent que le premier sous-titre démarre à 00:00:01,000 au lieu de 00:00:00,000. Si vos sous-titres sont décalés d'une seconde, c'est en général à cause de ça.",
          },
        ],
      }}
      faq={[
        {
          q: 'Quels formats vidéo supportez-vous ?',
          a: "MP4, MOV, WEBM, AVI, MKV, FLV. Si votre vidéo se lit dans VLC, elle fonctionne presque sûrement ici. On extrait l'audio en interne, donc le codec vidéo n'a pas beaucoup d'importance.",
        },
        {
          q: 'Mon fichier vidéo est trop gros pour être chargé. Que faire ?',
          a: "Deux options. Extrayez juste l'audio en premier (une commande ffmpeg, voir Astuces plus haut) et chargez ça. Ou utilisez un export plus petit depuis votre éditeur (résolution ou bitrate plus bas). Pour les fichiers au-delà de 60 Mo, l'extraction audio est plus rapide.",
        },
        {
          q: 'Puis-je avoir des sous-titres SRT, pas juste du texte brut ?',
          a: "Oui. Après la transcription, cliquez « Télécharger en SRT ». Le SRT fonctionne dans YouTube Studio, Premiere Pro, DaVinci Resolve, Final Cut, CapCut et tout éditeur vidéo standard.",
        },
        {
          q: 'Les timings SRT correspondent-ils exactement aux images de ma vidéo ?',
          a: "Oui. Les horodatages SRT sont en millisecondes, ce qui est plus précis que n'importe quel framerate vidéo. Ils s'alignent correctement à 24, 25, 29.97, 30, 50 et 60 fps.",
        },
        {
          q: 'Puis-je transcrire une vidéo sans son (juste du texte à l\'écran) ?',
          a: "Non. On transcrit l'audio parlé. Pour reconnaître du texte à l'écran, il faut de l'OCR, c'est un outil différent.",
        },
        {
          q: 'Quelle précision pour vidéo en texte ?',
          a: "Ça dépend de l'audio. Une voix off propre : précision quasi humaine (95 % ou plus). Une vidéo de conférence avec une mauvaise acoustique de salle : autour de 85 à 90 %. Vidéo très musicale avec dialogue faible : descend plus bas.",
        },
        {
          q: 'Ma vidéo sera-t-elle chargée sur YouTube ou des services tiers ?',
          a: "Non. Votre vidéo est transmise à notre prestataire de transcription pour traitement puis jetée. Rien n'est chargé sur YouTube, Google ou ailleurs. On n'est pas dans le business du stockage vidéo en cloud.",
        },
        {
          q: 'Puis-je éditer la transcription avant de la télécharger ?',
          a: "Oui. Corrigez les mots faux dans le navigateur avant l'export. Utile pour réparer les noms propres et les termes techniques.",
        },
        {
          q: 'Supportez-vous la vidéo 360 ou les formats VR ?',
          a: "Le codec vidéo ne nous intéresse pas. Tant que le fichier est un conteneur standard (MP4, MOV) avec une piste audio, on extrait l'audio et on transcrit.",
        },
        {
          q: 'Et si ma vidéo a plusieurs pistes audio (commentaire, original, musique) ?',
          a: 'On utilise seulement la piste par défaut. Si vous voulez une piste précise, ré-exportez la vidéo avec cette piste en défaut, ou extrayez la piste que vous voulez et chargez-la comme audio.',
        },
        {
          q: 'Y a-t-il une limite de durée vidéo ?',
          a: '30 minutes par fichier en gratuit, 60 minutes connecté. Pour les vidéos plus longues, découpez en morceaux. Les transcriptions se concatènent après.',
        },
        {
          q: 'Puis-je transcrire un live vidéo ?',
          a: "Non. On travaille uniquement avec des fichiers enregistrés. Pour la transcription en direct, il faut une autre catégorie d'outil.",
        },
      ]}
      relatedLinks={[
        { href: '/fr/free-srt-generator', label: 'Générateur SRT', desc: "Même outil, calé pour les workflows de sous-titres." },
        { href: '/fr/youtube-to-text', label: 'YouTube en texte', desc: "Si votre vidéo est déjà sur YouTube." },
        { href: '/fr/zoom-transcription', label: 'Transcription Zoom', desc: 'Spécifiquement pour les enregistrements MP4 de Zoom.' },
        { href: '/fr/how-to-compress-audio', label: "Comment compresser de l'audio", desc: "Pour les vidéos dont l'audio dépasse la limite de taille." },
      ]}
    />
  )
}
