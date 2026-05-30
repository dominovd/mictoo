import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-wav',
  'fr': 'https://mictoo.com/fr/mp3-to-wav',
  'de': 'https://mictoo.com/de/mp3-to-wav',
  'es': 'https://mictoo.com/es/mp3-to-wav',
  'ru': 'https://mictoo.com/ru/mp3-to-wav',
  'it': 'https://mictoo.com/it/mp3-to-wav',
  'pt': 'https://mictoo.com/pt/mp3-to-wav',
  'pl': 'https://mictoo.com/pl/mp3-to-wav',
  'ja': 'https://mictoo.com/ja/mp3-to-wav',
  'ko': 'https://mictoo.com/ko/mp3-to-wav',
  'x-default': 'https://mictoo.com/mp3-to-wav',
}

export const metadata = {
  title: 'MP3 vers WAV — convertisseur en ligne gratuit | Mictoo',
  description:
    "Convertissez MP3 en WAV gratuitement en ligne. Développez un MP3 compressé en WAV PCM 16-bit/44.1 kHz non compressé pour l'édition audio. Sans inscription, sans filigrane.",
  alternates: { canonical: 'https://mictoo.com/fr/mp3-to-wav', languages: LANGS },

  openGraph: {
    title: "MP3 vers WAV — convertisseur en ligne gratuit | Mictoo",
    description: "Convertissez MP3 en WAV gratuitement en ligne. Développez un MP3 compressé en WAV PCM 16-bit/44.1 kHz non compressé pour l'édition audio. Sans inscription, sans filigrane.",
    url: "https://mictoo.com/fr/mp3-to-wav",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP3 vers WAV — convertisseur en ligne gratuit | Mictoo",
    description: "Convertissez MP3 en WAV gratuitement en ligne. Développez un MP3 compressé en WAV PCM 16-bit/44.1 kHz non compressé pour l'édition audio. Sans inscription, sans filigrane.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function FrMp3ToWavPage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="MP3 → WAV · Gratuit · Sans inscription"
      h1={<>MP3 vers WAV<br /><span className="text-brand-600">Convertisseur en ligne gratuit</span></>}
      subtitle="Déposez un MP3. Récupérez un WAV PCM 16-bit/44.1 kHz prêt pour les logiciels d&apos;édition audio. Sans filigrane, sans email."
      tool={<ConverterZone from="mp3" to="wav" />}
      howItWorks={[
        { icon: '📂', title: 'Déposez le MP3', desc: "Glissez le MP3 dans la zone. Fichiers jusqu'à 25 Mo en anonyme, 60 Mo après inscription." },
        { icon: '⚡', title: 'ffmpeg décode en PCM', desc: "PCM 16-bit, 44.1 kHz, configuration de canaux source préservée. Quelques secondes pour un fichier typique." },
        { icon: '⬇️', title: 'Téléchargez le WAV', desc: "Le fichier WAV pèse environ dix fois plus que le MP3 parce qu'il n'est pas compressé. Effacé de nos serveurs en moins d'une heure." },
      ]}
      whyUse={{ title: 'Pourquoi convertir MP3 vers WAV', bullets: [
        { title: 'Les éditeurs audio préfèrent le WAV', desc: "Audacity, Adobe Audition, Logic, Pro Tools, ils ouvrent tous le MP3 mais la plupart des opérations (édition précise, application d'effets, normalisation) marchent mieux sur du WAV. Convertir d'abord évite la légère perte de qualité des ré-encodages MP3 répétés." },
        { title: 'Pas de perte de qualité supplémentaire sur les éditions', desc: "Chaque ré-encodage MP3 dégrade un peu l'audio. Convertissez en WAV, faites vos retouches, ré-exportez en MP3 à la fin : ce seul aller-retour est le mieux que vous puissiez faire." },
        { title: 'Requis par certains matériels et logiciels anciens', desc: "Certains vieux logiciels de gravure CD, échantillonneurs et matériel d'enregistrement ne lisent que le WAV. La conversion est le pont." },
        { title: 'Usage forensique et broadcast', desc: "L'analyse audio forensique et les workflows broadcast utilisent traditionnellement le WAV parce que le format est bien compris et non compressé. Le MP3 est acceptable comme matériel source mais le WAV est le format de travail." },
        { title: 'Sans filigrane, sans relance commerciale', desc: "Juste l'audio décodé dans un conteneur WAV. Nous n'ajoutons rien." },
      ]}}
      useCases={{ title: 'Quand convertir MP3 vers WAV', items: [
        { title: 'Édition audio dans Audacity, Reaper, Logic', desc: "Convertissez d'abord en WAV, puis appliquez les effets, coupez, normalisez, mixez. Ré-exportez en MP3 à la fin si vous avez besoin d'un petit fichier de distribution." },
        { title: 'Mastering pour vinyle ou CD', desc: "La gravure vinyle et le pressage CD veulent tous deux de l'audio sans perte. Si votre seule source est un MP3, convertir en WAV donne à l'ingénieur de mastering quelque chose avec quoi travailler, même si la qualité audio reste limitée par la source MP3." },
        { title: "Préparation d'échantillons pour un sampler", desc: "Les samplers hardware (Akai, Korg) veulent souvent des fichiers WAV à des profondeurs de bits et taux d'échantillonnage spécifiques." },
        { title: 'Travail de voix off pour une vidéo', desc: "Certains éditeurs vidéo (DaVinci, Premiere) gèrent le MP3 sans souci mais affichent de meilleures formes d'ondes et appliquent les effets plus proprement sur du WAV." },
        { title: 'Analyse forensique ou de transcription', desc: "Certains outils d'analyse spécialisés exigent une entrée WAV." },
      ]}}
      proTips={{ title: 'Conseils pour la conversion MP3 vers WAV', tips: [
        { title: 'Le WAV fera 10 fois la taille du MP3', desc: "Un MP3 de 5 Mo se développe à environ 50 Mo en WAV 16-bit/44.1 kHz. La conversion ne restaure pas la qualité perdue, elle vous donne juste un format exploitable." },
        { title: 'La qualité du WAV est plafonnée par le MP3', desc: "Vous ne pouvez pas faire sonner un MP3 à 128 kbps comme un CD en le convertissant en WAV. Le WAV rend juste l'audio existant éditable sans nouvelle perte de compression." },
        { title: "Pour une meilleure fidélité, demandez l'original", desc: "Si vous faites du mastering ou de la restauration sérieux, récupérez l'original sans perte (WAV, FLAC, ALAC) depuis la source. MP3 vers WAV est un contournement, pas une amélioration." },
        { title: "Le taux d'échantillonnage compte pour le hardware", desc: "La plupart du hardware veut du 44.1 kHz (CD) ou du 48 kHz (vidéo). Notre convertisseur sort toujours en 44.1. Si vous avez besoin de 48, ouvrez le WAV dans Audacity et ré-échantillonnez." },
        { title: 'WAV 24-bit : utilisez Audacity', desc: "Notre convertisseur sort en WAV 16-bit. Pour du 24-bit, ouvrez le WAV obtenu dans Audacity et ré-exportez en 24-bit float. La profondeur de bits supplémentaire donne de la marge d'édition même si l'audio source équivaut juste à du 16-bit." },
        { title: "Mono en entrée, mono en sortie, ça gagne de la place", desc: "Si votre MP3 est en mono, le WAV est aussi en mono : moitié de la taille d'une conversion stéréo. Nous préservons la configuration de canaux source." },
      ]}}
      faq={[
        { q: 'La conversion MP3 vers WAV est-elle vraiment gratuite ?', a: "Oui. Pas de compte jusqu'à 25 Mo, pas de filigrane, pas de limite de temps." },
        { q: 'Pourquoi le WAV est-il tellement plus gros que le MP3 ?', a: "Le MP3 utilise une compression perceptive pour jeter les données audio que vos oreilles ne remarquent presque pas. Le WAV stocke chaque échantillon à pleine précision. Un MP3 typique fait un dixième de la taille de son équivalent WAV." },
        { q: 'Le WAV sonnera-t-il mieux que le MP3 ?', a: "Non. Le MP3 a déjà perdu des données lors de son encodage initial. Le WAV préserve l'audio tel quel, il ne restaure pas la qualité." },
        { q: 'Quel format WAV produisez-vous ?', a: "PCM 16-bit, 44.1 kHz, configuration de canaux source préservée (mono en entrée → mono en sortie, stéréo en entrée → stéréo en sortie)." },
        { q: 'Combien de temps cela prend-il ?', a: "Quelques secondes. Le décodage MP3 est rapide." },
        { q: 'Puis-je avoir du WAV 24-bit ou 32-bit float ?', a: "Pas depuis ce convertisseur. Ouvrez notre WAV 16-bit dans Audacity et ré-exportez à la profondeur de bits voulue : les bits supplémentaires donnent de la marge d'édition même si la précision audio source reste plafonnée par le MP3." },
        { q: 'Conservez-vous mes fichiers ?', a: "Non. L'envoi est supprimé après conversion. La sortie est purgée en moins d'une heure." },
        { q: 'Puis-je convertir par lots ?', a: "Pas encore sur le palier gratuit. Ouvrez plusieurs onglets de navigateur." },
        { q: "Et un taux d'échantillonnage de 48 kHz ?", a: "Nous sortons en 44.1 kHz (cadence CD). Pour du 48 kHz (travail vidéo), ré-échantillonnez le WAV dans Audacity après conversion." },
        { q: 'Pourquoi convertir tout court ?', a: "Surtout pour l'édition audio. Audacity, Pro Tools, Logic, ils travaillent tous mieux sur du WAV que sur du MP3, surtout pour les éditions répétées." },
        { q: 'La conversion échouera-t-elle pour certains MP3 ?', a: "Rarement. ffmpeg décode essentiellement tout MP3 standard. Un fichier réellement corrompu pourrait échouer, sinon c'est fiable." },
        { q: 'Faut-il garder les deux fichiers ?', a: "Pour l'édition, travaillez en WAV. Pour la distribution, gardez aussi le MP3. Une fois l'édition terminée, ré-exportez du WAV vers un MP3 frais à la fin de la chaîne." },
      ]}
      relatedLinks={[
        { href: '/fr/wav-to-mp3', label: 'WAV vers MP3', desc: 'La direction inverse.' },
        { href: '/fr/flac-to-mp3', label: 'FLAC vers MP3', desc: 'FLAC sans perte vers MP3 portable.' },
        { href: '/fr/wav-to-text', label: 'WAV vers texte', desc: "Transcrivez de l'audio WAV directement." },
        { href: '/fr/how-to-compress-audio', label: 'Compresser de l&apos;audio', desc: 'Pour les fichiers que vous devez rendre plus petits.' },
      ]}
    />
  )
}
