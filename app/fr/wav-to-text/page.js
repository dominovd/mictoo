import LandingLayout from '@/components/LandingLayout'

const LANGS = {
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
}

export const metadata = {
  title: 'WAV en Texte : Transcription WAV en Ligne Gratuite | Mictoo',
  description:
    'Téléchargez un fichier WAV, obtenez une transcription modifiable avec des horodatages en quelques secondes. Conçu pour les exports de studio, les enregistrements sur le terrain, les exports DAW. Prend en charge PCM et Broadcast Wave (BWF). Gratuit, sans inscription.',
  alternates: {
    canonical: 'https://mictoo.com/fr/wav-to-text',
    languages: LANGS,
  },

  openGraph: {
    title: "WAV en Texte : Transcription WAV en Ligne Gratuite | Mictoo",
    description: "Téléchargez un fichier WAV, obtenez une transcription modifiable avec des horodatages en quelques secondes. Exports de studio, enregistrements sur le terrain, exports DAW. Prend en charge PCM et BWF.",
    url: "https://mictoo.com/fr/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV en Texte : Transcription WAV en Ligne Gratuite",
    description: "Téléchargez un WAV, obtenez une transcription modifiable avec des horodatages en quelques secondes. Exports de studio, enregistrements sur le terrain, exports DAW.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrWavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · PCM · BWF · Gratuit"
      h1={
        <>
          WAV en Texte
          <br />
          <span className="text-brand-600">Transcrivez n’importe quel WAV en quelques secondes</span>
        </>
      }
      subtitle="Déposez un WAV de votre DAW, enregistreur de terrain ou équipement d’interview. Nous le transformons en une transcription modifiable avec des horodatages et des exports pour TXT, SRT, VTT et DOCX."
      valueBlock={
        <article className="prose-content">
          <p>
            Les fichiers WAV conservent l’audio original sans compression, c’est exactement pourquoi votre enregistreur, DAW ou équipement de studio a probablement enregistré un. Cette même propriété est la raison pour laquelle les WAV deviennent rapidement volumineux. Mictoo les accepte directement pour que vous n’ayez pas à convertir avant de transcrire.
          </p>
          <p>
            Déposez le fichier, récupérez une transcription modifiable avec des horodatages, un résumé IA et des exports en un clic vers TXT, SRT, VTT ou DOCX. Utile pour les interviews, les notes de podcast, les archives de conférences, les journaux d’enregistrement sur le terrain et les légendes d’exports DAW.
          </p>
          <p className="text-sm text-slate-500">
            Gratuit pour les fichiers jusqu’à 60 Mo. Pour les exports de studio plus longs ou les conférences de plusieurs heures, consultez <a href="/fr/how-to-compress-audio" className="text-brand-600 hover:underline">comment compresser l’audio</a> ou <a href="/fr/how-to-split-audio" className="text-brand-600 hover:underline">comment diviser l’audio</a> avant de télécharger.
          </p>
        </article>
      }
      howItWorks={[
        {
          icon: '📂',
          title: 'Téléchargez votre WAV',
          desc: 'PCM 8 à 32 bits flottant, mono ou stéréo, taux d’échantillonnage de 8 kHz à 192 kHz. Broadcast Wave (BWF) des enregistreurs professionnels Sound Devices, Zaxcom, Tascam fonctionne de la même manière.',
        },
        {
          icon: '⚡',
          title: 'L’IA transcrit le discours',
          desc: 'Whisper large-v3 lit l’audio et convertit le discours en texte. Un fichier de 30 minutes se termine généralement en moins d’une minute. La vitesse de téléchargement est le goulot d’étranglement pour les gros WAV.',
        },
        {
          icon: '📋',
          title: 'Éditez et exportez',
          desc: 'Corrigez les mots incorrects en ligne, puis téléchargez TXT, SRT, VTT ou DOCX. Copiez dans le presse-papiers si vous avez juste besoin du texte. Le résumé IA apparaît automatiquement à côté de la transcription.',
        },
      ]}
      whyUse={{
        title: 'Pourquoi utiliser Mictoo pour les fichiers WAV',
        bullets: [
          {
            title: 'Transcription directe de WAV, pas de conversion manuelle',
            desc: 'Certains transcripteurs gratuits rejettent les WAV et vous disent de convertir d’abord en MP3. Mictoo accepte directement les WAV PCM standard, y compris 24 bits et 32 bits flottant. Une étape de moins dans votre flux de travail.',
          },
          {
            title: 'PCM et Broadcast Wave (BWF) fonctionnent tous deux',
            desc: 'Les fichiers BWF des enregistreurs de terrain professionnels contiennent le timecode et les métadonnées de scène dans des morceaux supplémentaires. Nous lisons l’audio, ignorons les morceaux de métadonnées et ne réécrivons jamais votre fichier original. Votre timecode reste intact sur votre disque.',
          },
          {
            title: 'Taux d’échantillonnage et profondeurs de bits que nous gérons réellement',
            desc: 'PCM 8 bits, 16 bits, 24 bits, 32 bits entier et 32 bits flottant. Mono et stéréo. Taux d’échantillonnage de 8 kHz à 192 kHz. Les WAV multicanaux sont automatiquement mixés avant la transcription.',
          },
          {
            title: 'Exports utiles prêts à l’emploi',
            desc: 'Téléchargez en tant que TXT pour du texte brut, SRT ou VTT pour des sous-titres alignés sur vos horodatages, ou DOCX pour des documents Word prêts à être édités. Copiez dans le presse-papiers lorsque vous voulez simplement coller quelque part.',
          },
          {
            title: 'Conseils pratiques pour les gros fichiers WAV',
            desc: 'Le WAV est non compressé, donc les fichiers deviennent rapidement volumineux. Lorsque le vôtre dépasse notre limite de 60 Mo, nous vous le disons immédiatement et vous guidons à travers la recette standard ffmpeg ou Audacity pour le réduire sans perdre la qualité de la transcription.',
          },
        ],
      }}
      useCases={{
        title: 'D’où viennent les fichiers WAV',
        items: [
          {
            title: 'Interviews',
            desc: 'Les journalistes et chercheurs capturent des interviews sur des enregistreurs portables (Zoom H5, H6, Tascam DR-40X) qui par défaut enregistrent en WAV. La transcription devient la source de citations, de références et de l’ébauche de l’article.',
          },
          {
            title: 'Podcasts',
            desc: 'Lorsque vous exportez un épisode terminé dans Logic, Reaper ou Pro Tools, le master est généralement un WAV 24 bits. Téléchargez ce WAV (pas le MP3 que vous publiez) pour la transcription la plus propre, qui devient vos notes d’émission et la page de l’épisode optimisée pour le SEO.',
          },
          {
            title: 'Conférences',
            desc: 'Les enseignants enregistrant dans Audacity avec un micro USB se retrouvent avec des fichiers WAV mono. Transcrivez chaque conférence pour créer une archive consultable, donnez-la aux étudiants sous forme de légendes ou intégrez-la dans un LMS.',
          },
          {
            title: 'Enregistrements sur le terrain',
            desc: 'Les documentaristes et enregistreurs de nature utilisent des équipements Sound Devices ou Zaxcom qui produisent des Broadcast Wave avec timecode. La transcription fournit des journaux de scène que vous pouvez associer à votre timecode sans toucher au fichier original.',
          },
          {
            title: 'Exports DAW et studio',
            desc: 'Les narrateurs de livres audio, artistes de voix off, monteurs vidéo exportent tous des intermédiaires WAV 24 bits. Utilisez la transcription WAV pour générer des légendes correspondantes avant que le fichier ne soit compressé pour la livraison.',
          },
          {
            title: 'Audio d’archives',
            desc: 'Les bibliothèques, musées et projets d’archives familiales se standardisent sur le WAV 24 bits pour la préservation à long terme. Passez chaque WAV par la transcription une fois et l’archive devient consultable en texte intégral pour toujours.',
          },
        ],
      }}
      proTips={{
        title: 'Paramètres WAV recommandés pour la transcription',
        tips: [
          {
            title: 'Visez 16 kHz mono, 16 bits PCM',
            desc: 'Whisper rééchantillonne à 16 kHz mono en interne avant la transcription. Le faire de votre côté d’abord rend le fichier environ 12 fois plus petit que l’original 48 kHz stéréo 24 bits, sans différence significative pour un discours clair. Ligne de commande ffmpeg : ffmpeg -i input.wav -ac 1 -ar 16000 -sample_fmt s16 output.wav.',
          },
          {
            title: 'Coupez le silence au début et à la fin',
            desc: 'Les enregistreurs de terrain laissent souvent 30 à 60 secondes de silence avant et après le contenu réel. Audacity → Effet → Truncate Silence avec les paramètres par défaut le gère rapidement. Économisez votre budget de 60 Mo pour les mots qui comptent.',
          },
          {
            title: 'Gardez le WAV original dans votre dossier de projet',
            desc: 'Le fichier rééchantillonné est uniquement pour le téléchargement. Votre master original 24 bits reste intact sur votre disque pour toute réédition future, copie d’archive ou export de meilleure qualité.',
          },
          {
            title: 'Pour les fichiers très longs, utilisez un MP3 temporaire',
            desc: 'Un WAV mono 16 bits 16 kHz de 90 minutes fait encore 173 Mo. Pour les conférences ou podcasts longs, réencodez en un MP3 mono 64 kbps juste pour le téléchargement. Le MP3 fait environ 43 Mo et se transcrit sans différence de qualité significative pour un discours clair.',
          },
          {
            title: 'Pour les WAV bruyants, débruitez avant de télécharger',
            desc: 'Le bruit de fond (vent, CVC, grondement de la pièce, sifflement de bande) réduit la précision plus que tout choix de réglage. Passez le WAV par Audacity → Effet → Réduction du bruit, ou utilisez l’outil web gratuit Adobe Podcast Enhance. Ensuite, téléchargez le WAV nettoyé.',
          },
        ],
      }}
      deepDive={
        <article className="prose-content">
          <h2>Les fichiers WAV en langage simple</h2>
          <p>
            Un fichier WAV est, dans le cas standard, de l’audio PCM brut non compressé avec un petit en-tête au-dessus. Il n’y a pas de codec, pas de modèle perceptuel, pas de compression. Les octets dans le fichier sont l’enregistrement. Cette simplicité est la raison pour laquelle chaque DAW et enregistreur de terrain sur la planète peut exporter WAV sans négociation, et c’est aussi pourquoi les fichiers WAV sont beaucoup plus volumineux que les fichiers MP3 ou M4A de même longueur.
          </p>
          <h3>Pourquoi le WAV est si volumineux</h3>
          <p>
            La taille du fichier est déterminée presque entièrement par trois chiffres : le taux d’échantillonnage (combien d’échantillons par seconde), la profondeur de bits (combien de bits par échantillon) et le nombre de canaux (mono ou stéréo). Un enregistrement stéréo de qualité CD d’une minute (44,1 kHz, 16 bits, deux canaux) fait 10,1 Mo. Un enregistrement de terrain 24 bits 96 kHz d’une minute fait environ 33 Mo. Un master stéréo 32 bits flottant d’une heure à 48 kHz peut atteindre environ 1,4 Go. Le WAV ne compresse pas, donc ces chiffres évoluent linéairement avec la durée.
          </p>
          <h3>Ce que cela signifie pour la reconnaissance vocale</h3>
          <p>
            Whisper large-v3 (le modèle que nous utilisons) rééchantillonne tout ce que vous lui donnez à 16 kHz mono avant la première étape d’inférence. Un WAV multicanal 32 bits flottant 192 kHz finit par être façonné exactement de la même manière qu’un appel téléphonique mono 16 kHz par le modèle. Dans nos tests, la différence de qualité de transcription entre un WAV mono 16 kHz et un WAV stéréo 96 kHz 24 bits du même discours est statistiquement nulle. Ce qui change, c’est votre temps de téléchargement et votre budget de taille de fichier.
          </p>
          <h3>Quand le non compressé aide vraiment</h3>
          <p>
            Il y a une situation où le WAV bat un MP3 à faible débit pour la transcription : l’audio marginal. Voix très faibles, bruit ambiant important, coupures d’un micro-cravate défectueux. Les encodeurs MP3 à faible débit éliminent exactement la queue haute fréquence que Whisper utilise parfois pour désambiguïser les fricatives (sons s, f, sh). Si vous avez déjà un enregistrement qui se transcrit mal en MP3, la version WAV récupère parfois des mots que la copie compressée a manqués. Pour l’audio de studio propre à tout débit raisonnable, vous ne verrez pas la différence.
          </p>
          <h3>La variante Broadcast Wave (BWF)</h3>
          <p>
            Les enregistreurs de terrain professionnels (Sound Devices, Zaxcom, modèles pro récents de Tascam et Zoom) écrivent des Broadcast Wave, qui sont des WAV réguliers avec des morceaux de métadonnées supplémentaires : le morceau bext contient le timecode et les informations d’origine, iXML transporte les numéros de scène et de prise, parfois il y a un morceau chna pour le nommage multicanal. Mictoo lit les fichiers BWF de la même manière que tout autre WAV. Les métadonnées sont ignorées à des fins de transcription, l’audio est transcrit, et votre fichier original sur votre disque n’est jamais touché ou réécrit.
          </p>
        </article>
      }
      comparison={
        <>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 text-center">
            WAV vs autres formats audio pour la transcription
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8">
            Les quatre formats fonctionnent dans Mictoo. Voici une comparaison pratique pour que vous puissiez choisir le bon format de départ.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">WAV</h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Taille</dt><dd>La plus grande</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Qualité</dt><dd>Non compressé</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Meilleur pour</dt><dd>Studio, BWF, archives</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Transcription</dt><dd>Fonctionne directement ; rééchantillonnez d’abord si plus de 60 Mo</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/fr/transcribe-mp3-to-text" className="hover:text-brand-600">MP3 →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Taille</dt><dd>La plus petite</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Qualité</dt><dd>Avec perte (bonne à 128 kbps+)</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Meilleur pour</dt><dd>Podcasts, longs fichiers, téléchargements</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Transcription</dt><dd>Même précision que WAV pour un discours clair</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/fr/flac-to-text" className="hover:text-brand-600">FLAC →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Taille</dt><dd>Environ la moitié de WAV</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Qualité</dt><dd>Compressé sans perte</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Meilleur pour</dt><dd>Archives audiophiles, rips de CD</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Transcription</dt><dd>Identique à WAV, fichier plus petit</dd></div>
              </dl>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 mb-3">
                <a href="/fr/m4a-to-text" className="hover:text-brand-600">M4A →</a>
              </h3>
              <dl className="text-sm text-slate-600 space-y-2">
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Taille</dt><dd>Petite</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Qualité</dt><dd>AAC avec perte (très efficace)</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Meilleur pour</dt><dd>Notes vocales iPhone, écosystème Apple</dd></div>
                <div><dt className="text-slate-500 text-xs uppercase tracking-wide">Transcription</dt><dd>Même précision que WAV en pratique</dd></div>
              </dl>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center mt-6">
            Besoin de convertir avant de télécharger ? Consultez <a href="/fr/how-to-compress-audio" className="text-brand-600 hover:underline">comment compresser l’audio</a>.
          </p>
        </>
      }
      faq={[
        {
          q: 'Puis-je transcrire un WAV gratuitement ?',
          a: 'Oui. Mictoo est gratuit pour les fichiers jusqu’à 60 Mo. Pas besoin d’inscription, pas de filigrane sur les exports, pas de vente incitative après la première transcription. Pour les exports de studio longs ou les enregistrements de plusieurs heures, rééchantillonnez à 16 kHz mono ou réencodez en un court MP3 pour rester sous la limite.',
        },
        {
          q: 'Le WAV est-il meilleur que le MP3 pour la précision de la transcription ?',
          a: 'Pour un discours clair à tout débit MP3 raisonnable (128 kbps ou plus), pas de différence significative. Pour les enregistrements bruyants, à faible gain ou autrement marginaux, le WAV peut parfois récupérer des mots qu’un MP3 à faible débit manquerait. La plupart des audios de podcast et d’interview entrent dans la première catégorie.',
        },
        {
          q: 'Quels sont les meilleurs réglages WAV pour la transcription ?',
          a: '16 kHz mono, 16 bits PCM est le point idéal pratique. Whisper rééchantillonne cela en interne de toute façon. Des taux d’échantillonnage et des profondeurs de bits plus élevés rendent le fichier plus volumineux sans améliorer la transcription. Gardez votre WAV de qualité studio original dans votre dossier de projet, et utilisez la version rééchantillonnée uniquement pour le téléchargement.',
        },
        {
          q: 'Prenez-vous en charge les WAV 24 bits et 32 bits flottant ?',
          a: 'Oui. Les deux fonctionnent directement. En interne, nous normalisons à 16 bits avant d’envoyer au modèle de parole, ce qui correspond à ce que Whisper attend. La profondeur de bits supplémentaire vous donne une marge de manœuvre pour l’édition dans votre DAW, mais ne change pas la transcription.',
        },
        {
          q: 'Prenez-vous en charge les fichiers Broadcast Wave (BWF) ?',
          a: 'Oui. Le BWF est un WAV standard avec des morceaux de métadonnées supplémentaires (bext, iXML, chna). Nous lisons l’audio et ignorons les métadonnées. Le fichier original sur votre disque reste intact, y compris toutes les informations de timecode et de scène/prise.',
        },
        {
          q: 'Les fichiers WAV de mon enregistreur Zoom, Tascam ou Sound Devices fonctionneront-ils ?',
          a: 'Oui. Zoom H1n, H5, H6, H8, Tascam DR-40X, DR-100mkIII, Portacapture X8, et Sound Devices MixPre / Scorpio par défaut enregistrent en WAV standard ou Broadcast Wave. Déposez le fichier directement, pas besoin de conversion.',
        },
        {
          q: 'Qu’en est-il des exports de Pro Tools, Logic, Reaper ou Audacity ?',
          a: 'Les quatre exportent par défaut des WAV PCM standard. Pro Tools et Logic écrivent généralement en 24 bits au taux d’échantillonnage de la session, Reaper similaire, Audacity écrit à la profondeur que vous avez configurée. Mictoo accepte tous tels quels.',
        },
        {
          q: 'Mon WAV dépasse la limite de 60 Mo, que dois-je faire ?',
          a: "Le WAV ne compresse pas, donc la taille évolue avec le taux d’échantillonnage, la profondeur de bits, le nombre de canaux et la durée. Un fichier stéréo de 30 minutes 24 bits 48 kHz fait environ 250 Mo. Trois solutions, dans l’ordre : (1) rééchantillonnez à 16 kHz mono 16 bits, ce qui réduit généralement le fichier de 10 à 12 fois sans perte de qualité de transcription pour un discours clair ; (2) coupez le silence de début et de fin avec Audacity Truncate Silence ; (3) pour les fichiers très longs, réencodez en un MP3 mono 64 kbps juste pour le téléchargement. Consultez nos guides de compression et de division audio pour les étapes exactes.",
        },
        {
          q: 'Puis-je exporter des sous-titres SRT ou VTT ?',
          a: 'Oui. Après la transcription, vous pouvez télécharger SRT ou VTT avec des horodatages toutes les quelques secondes. Les deux formats s’alignent sur votre chronologie audio originale, donc ils s’intègrent directement dans votre éditeur vidéo ou flux de travail de sous-titres.',
        },
        {
          q: 'Puis-je obtenir des horodatages dans la transcription ?',
          a: 'Oui. La vue par défaut de la transcription montre des horodatages au niveau des segments que vous pouvez cliquer pour sauter à ce moment dans l’audio. Téléchargez en tant que VTT ou JSON pour une granularité au niveau des mots, ou en tant que SRT pour un format de sous-titres au niveau des segments.',
        },
        {
          q: 'Quelle est la précision de la transcription pour un WAV bruyant ?',
          a: 'Le bruit de fond (vent, CVC, trafic, sifflement de bande) réduit la précision de manière notable. Passez le WAV par Audacity → Effet → Réduction du bruit ou l’outil gratuit Adobe Podcast Enhance avant de télécharger. La version nettoyée se transcrit généralement beaucoup mieux.',
        },
        {
          q: 'Mon fichier WAV original sera-t-il modifié de quelque manière que ce soit ?',
          a: 'Non. Le fichier que vous téléchargez est lu par notre backend, envoyé au fournisseur de transcription et supprimé après la réception de la réponse. Votre fichier original sur votre ordinateur n’est jamais modifié. Nous ne vous renvoyons jamais une copie transformée.',
        },
        {
          q: 'Que puis-je faire avec la transcription après sa génération ?',
          a: 'Corrigez les mots incorrects en ligne avant d’exporter. Ensuite, téléchargez en tant que TXT (texte brut), SRT ou VTT (format de sous-titres avec horodatages), ou DOCX (document Word). Copiez directement dans le presse-papiers si vous avez juste besoin de coller quelque part. Le résumé IA apparaît automatiquement à côté de la transcription.',
        },
      ]}
      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Téléchargez votre WAV et obtenez une transcription modifiable
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            Déposez le fichier, attendez moins d’une minute, copiez ou exportez le texte. Gratuit pour les fichiers jusqu’à 60 Mo. Pas d’inscription.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Transcrire un WAV maintenant
          </a>
        </div>
      }
      relatedLinks={[
        { href: '/fr/transcribe-audio-to-text', label: 'Audio en Texte', desc: 'Transcription agnostique au format pour tout fichier audio.' },
        { href: '/fr/flac-to-text', label: 'FLAC en Texte', desc: 'Compressé sans perte, fichiers plus petits que WAV.' },
        { href: '/fr/m4a-to-text', label: 'M4A en Texte', desc: 'Notes vocales iPhone et enregistrements de l’écosystème Apple.' },
        { href: '/fr/how-to-compress-audio', label: 'Comment compresser l’audio', desc: 'Guide pour réduire la taille des gros WAV avant le téléchargement.' },
      ]}
    />
  )
}