import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'WAV vers Texte : Transcription WAV en Ligne Gratuite | Mictoo',
  description:
    'Téléchargez un fichier WAV, obtenez une transcription modifiable avec des horodatages en secondes. Conçu pour les rebonds de studio, les enregistrements de terrain, les exports DAW. Prend en charge PCM et Broadcast Wave (BWF). Gratuit, sans inscription.',
  alternates: {
    canonical: 'https://mictoo.com/fr/wav-to-text',
    languages: {
      'en': 'https://mictoo.com/wav-to-text',
      'fr': 'https://mictoo.com/fr/wav-to-text',
      'de': 'https://mictoo.com/de/wav-to-text',
      'es': 'https://mictoo.com/es/wav-to-text',
      'ru': 'https://mictoo.com/ru/wav-to-text',
      'it': 'https://mictoo.com/it/wav-to-text',
      'pt': 'https://mictoo.com/pt/wav-to-text',
      'pl': 'https://mictoo.com/pl/wav-to-text',
      'ja': 'https://mictoo.com/ja/wav-to-text',
      'ko': 'https://mictoo.com/ko/wav-to-text',
      'x-default': 'https://mictoo.com/wav-to-text',
    },
  },

  openGraph: {
    title: "WAV vers Texte : Transcription WAV en Ligne Gratuite | Mictoo",
    description: "Téléchargez un fichier WAV, obtenez une transcription modifiable avec des horodatages en secondes. Rebonds de studio, enregistrements de terrain, exports DAW. PCM et BWF pris en charge.",
    url: "https://mictoo.com/fr/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV vers Texte : Transcription WAV en Ligne Gratuite",
    description: "Téléchargez un WAV, obtenez une transcription modifiable avec des horodatages en secondes. Rebonds de studio, enregistrements de terrain, exports DAW.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrWavToTextPage() {
  return (
    <FormatPageLayout
      locale="fr"
      badge="WAV · PCM · BWF · Gratuit"
      h1First="WAV vers Texte"
      h1Second="Rebonds de studio, enregistrements de terrain, exports DAW"
      subtitle="WAV est le format que votre DAW utilise pour les rebonds, que votre enregistreur de terrain écrit sur carte, et que les studios de diffusion standardisent. Déposez un WAV PCM ou BWF et obtenez une transcription avec des horodatages en secondes. Gratuit, sans inscription."
      highlightFormat="wav"
      previewFileName="enregistrement-de-terrain.wav"
      previewWordCount={166}
      previewDurationLabel="14 minutes 22 secondes"
      previewLines={[
        { t: '0:00',  line: 'Repérage de lieu, jour trois. Nous sommes installés sur le côté est de la crête à environ six mille pieds.' },
        { t: '0:09',  line: 'Le vent arrive par rafales de l’ouest, donc j’ai le blimp en marche et j’ai coupé à quatre-vingts hertz.' },
        { t: '0:18',  line: 'Les niveaux atteignent environ moins douze sur le micro d’interview, ce qui semble correct pour cette ambiance.' },
        { t: '0:28',  line: 'À côté de moi se trouve le garde qui travaille dans cette section du parc depuis vingt-deux ans.' },
        { t: '0:37',  line: 'Quand les gens demandent ce qui a le plus changé ici, je commence toujours par les incendies de l’été 2020.' },
        { t: '0:47',  line: 'La forêt n’a jamais eu l’air tout à fait la même après cela, et les habitudes de la faune ont mis des années à se rétablir.' },
        { t: '0:57',  line: 'Pouvez-vous me parler de ce que ces premières semaines après les incendies étaient sur le terrain ?' },
        { t: '1:05',  line: 'Bien sûr. La fumée est restée pendant environ six semaines au total, et la visibilité n’a jamais dépassé un demi-mile.' },
      ]}
      whyTitle="Pourquoi choisir Mictoo pour la transcription WAV"
      whyCards={[
        {
          icon: 'waveform',
          title: 'PCM et BWF, sans conversion',
          desc: 'WAV PCM standard 16/24/32 bits et Broadcast Wave (BWF) avec métadonnées. Nous acceptons le fichier tel quel sans étape de conversion requise.',
        },
        {
          icon: 'target',
          title: 'Pas d’artefacts de codec avec perte',
          desc: 'Le PCM non compressé n’ajoute pas d’artefacts de compression avec perte. Un enregistrement propre peut être une source solide, mais le bruit ambiant et le placement du micro comptent toujours.',
        },
        {
          icon: 'gear',
          title: 'N’importe quel taux d’échantillonnage, n’importe quelle profondeur de bit',
          desc: '44,1 kHz, 48 kHz, 96 kHz, 192 kHz. Whisper rééchantillonne à 16 kHz mono en interne, donc votre taux source n’affecte pas la qualité.',
        },
        {
          icon: 'clip',
          title: 'Les métadonnées BWF sont préservées de votre côté',
          desc: 'Nous ignorons les blocs de métadonnées iXML/bext pendant la transcription. Votre fichier WAV original (et ses métadonnées) n’est jamais modifié.',
        },
      ]}
      scenariosTitle="Quand la transcription WAV est-elle appropriée"
      scenarios={[
        {
          icon: 'mic',
          title: 'Capture d’enregistreur de terrain',
          desc: 'Zoom H4n, H5, H6, Tascam DR-40, Sound Devices MixPre. Quel que soit le matériel de terrain, déposez le WAV pour une transcription propre.',
        },
        {
          icon: 'waveform',
          title: 'Rebond DAW pour référence',
          desc: 'Mixage brut ou rebond vocal uniquement depuis Logic, Pro Tools ou Ableton. Obtenez une version texte des paroles ou du dialogue pour référence.',
        },
        {
          icon: 'briefcase',
          title: 'Interview de diffusion',
          desc: 'Enregistrement BWF d’une interview radio ou d’un studio de podcast. La transcription alimente les notes de l’émission, les citations et la documentation d’archives.',
        },
        {
          icon: 'book',
          title: 'Archive d’histoire orale',
          desc: 'Enregistrement d’histoire orale long format capturé en WAV pour préservation. La transcription rend l’archive recherchable et citante.',
        },
        {
          icon: 'users',
          title: 'Enregistrement de déposition et légal',
          desc: 'Procédures enregistrées capturées en WAV non compressé pour une qualité probatoire. Transcription pour révision et citation.',
        },
        {
          icon: 'sparkles',
          title: 'Travail de voix off',
          desc: 'Passage ADR, enregistrement de narration ou session de voix off rebondie en WAV. La transcription confirme que la lecture correspond au script.',
        },
      ]}
      technicalTitle="Que contient un fichier WAV"
      technicalIntro="WAV est un conteneur couramment utilisé pour l’audio PCM non compressé. Sa résolution supplémentaire est utile pour la production et l’archivage, tandis que les conditions d’enregistrement déterminent toujours la clarté de la parole."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'PCM et Broadcast Wave',
          desc: 'Les enregistrements WAV PCM standard et BWF peuvent contenir le même audio parlé ; BWF ajoute des métadonnées de production autour.',
        },
        {
          icon: 'gear',
          title: 'Taux d’échantillonnage et profondeur de bit',
          desc: 'Des taux d’échantillonnage et des profondeurs de bit élevés préservent la marge de production, mais ils ne peuvent pas réparer le bruit, le clipping ou un microphone éloigné.',
        },
        {
          icon: 'cloud',
          title: 'Grand par conception',
          desc: 'Le WAV non compressé augmente rapidement. Pour les longues interviews, divisez l’enregistrement ou faites une copie mono de discours plus petite si nécessaire.',
        },
        {
          icon: 'clip',
          title: 'Les métadonnées restent à l’extérieur',
          desc: 'Les métadonnées BWF, iXML et cue ne sont pas ajoutées à la transcription, et le fichier source original n’est pas modifié.',
        },
      ]}
      faq={[
        {
          q: 'Quels types de fichiers WAV Mictoo accepte-t-il ?',
          a: 'WAV PCM standard à 16 bits, 24 bits ou 32 bits flottants, n’importe quel taux d’échantillonnage (44,1 kHz à 192 kHz), mono ou stéréo. Le Broadcast Wave (BWF) est également entièrement pris en charge avec les métadonnées iXML/bext préservées dans votre fichier original.',
        },
        {
          q: 'Un taux de profondeur ou d’échantillonnage plus élevé améliore-t-il la transcription ?',
          a: 'Non. Whisper rééchantillonne tout l’audio à 16 kHz mono en interne avant la transcription, donc la profondeur de bit et le taux d’échantillonnage au-delà de ce plafond n’affectent pas la précision. La qualité d’enregistrement (choix du micro, pièce, bruit ambiant) compte beaucoup plus que la spécification du conteneur.',
        },
        {
          q: 'Mon fichier WAV de studio fait plus de 60 Mo. Que faire ?',
          a: 'Un WAV stéréo 24 bits 48 kHz fait environ 17 Mo par minute, donc tout enregistrement de plus de trois minutes atteint la limite. Convertissez en WAV mono 16 kHz (ou MP3 128 kbps) avec ffmpeg -i in.wav -ar 16000 -ac 1 out.wav. La qualité de transcription est identique.',
        },
        {
          q: 'Conservez-vous mon fichier WAV ?',
          a: 'Non. Le fichier est transmis au fournisseur de transcription, traité une fois, puis supprimé de la mémoire. Nous ne l’écrivons jamais sur disque. La transcription n’est stockée que si vous vous connectez et l’ajoutez à votre historique.',
        },
        {
          q: 'Puis-je conserver les horodatages BWF originaux dans la transcription ?',
          a: 'La transcription utilise des horodatages relatifs depuis le début du fichier (0:00 de référence). Les métadonnées BWF de temps absolu ne sont pas intégrées dans la sortie texte. Faites correspondre les deux de votre côté si vous avez besoin d’un alignement de code temporel de scène.',
        },
        {
          q: 'Mictoo transcrit-il des WAV non anglais ?',
          a: 'Oui. Whisper large-v3 prend en charge plus de 50 langues avec détection automatique. Pour les enregistrements courts ou les accents inhabituels, définissez la langue explicitement dans le menu déroulant pour une détection plus propre au premier passage.',
        },
        {
          q: 'Puis-je obtenir des sous-titres SRT pour un enregistrement WAV ?',
          a: 'Oui. Téléchargez SRT ou VTT après transcription. Les deux formats incluent des horodatages alignés à la chronologie originale du WAV pour une utilisation dans des éditeurs vidéo ou des outils d’accessibilité.',
        },
        {
          q: 'Combien de temps prend une transcription WAV ?',
          a: 'Un WAV de 15 minutes se termine généralement en 20 à 40 secondes au total. Les fichiers plus volumineux proches de la limite de téléchargement prennent 40 à 80 secondes. La vitesse de téléchargement est souvent l’étape la plus longue puisque les fichiers WAV sont volumineux.',
        },
        {
          q: 'Supportez-vous les enregistrements 32 bits flottants de Sound Devices ?',
          a: 'Oui. Les fichiers WAV 32 bits flottants des enregistreurs MixPre, F-series ou Zoom F-series sont acceptés et transcrits de la même manière que le PCM standard.',
        },
        {
          q: 'Puis-je traduire la transcription dans une autre langue ?',
          a: 'Oui. Après la transcription, choisissez une langue cible et cliquez sur Traduire. La traduction fonctionne sur GPT-4o-mini et apparaît à côté de la transcription originale.',
        },
      ]}
      ctaHeadline="Déposez votre WAV, obtenez une transcription propre"
      ctaSubtitle="PCM, BWF, n’importe quel taux d’échantillonnage. Rebonds de studio, enregistrements de terrain, exports DAW."
      ctaButton="Téléchargez le WAV pour transcrire"
    />
  )
}