import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLAC vers MP3 — convertisseur en ligne gratuit | Mictoo',
  description:
    "Convertissez FLAC en MP3 gratuitement en ligne. Réduisez du FLAC sans perte en MP3 à 128 kbps en quelques secondes. Sans inscription, sans filigrane. Jusqu'à 25 Mo.",
  alternates: { canonical: 'https://mictoo.com/fr/flac-to-mp3', languages: LANGS },
}

export default function FrFlacToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="FLAC → MP3 · Gratuit · Sans inscription"
      h1={<>FLAC vers MP3<br /><span className="text-brand-600">Convertisseur en ligne gratuit</span></>}
      subtitle="Déposez un fichier FLAC. Récupérez un MP3 portable trois fois plus léger, lisible partout. Sans filigrane, sans email."
      tool={<ConverterZone from="flac" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Déposez le FLAC', desc: "Glissez votre FLAC dans la zone. Fichiers jusqu'à 25 Mo en anonyme, 60 Mo avec inscription." },
        { icon: '⚡', title: 'ffmpeg ré-encode en MP3', desc: "128 kbps en débit constant, 44.1 kHz, configuration de canaux préservée. Un FLAC typique de 25 Mo se termine en 3 à 10 secondes." },
        { icon: '⬇️', title: 'Téléchargez le MP3', desc: "Le résultat garde le nom d'origine avec .mp3. Effacé de nos serveurs en moins d'une heure." },
      ]}
      whyUse={{ title: 'Pourquoi convertir FLAC vers MP3', bullets: [
        { title: 'Le FLAC est sans perte mais énorme', desc: "Un FLAC de 5 minutes à débit typique pèse 25 à 40 Mo. Le même audio en MP3 à 128 kbps fait 5 Mo. Pour les téléphones, les voitures et le Bluetooth, cette taille compte." },
        { title: 'La plupart des autoradios et haut-parleurs Bluetooth ne lisent pas le FLAC', desc: "Même en 2026, les systèmes embarqués d'usine et beaucoup de matériel Bluetooth milieu de gamme c'est MP3 ou rien. Le MP3 fonctionne simplement." },
        { title: "À 128 kbps la perte de qualité est inaudible pour quasiment tout le monde", desc: "Sur des casques grand public, en voiture, sur des haut-parleurs de téléphone, personne ne fera la différence. Le compromis ne se voit qu'au monitoring de studio en écoute critique." },
        { title: 'iPods, vieux baladeurs MP3, apps musicales basiques, le MP3 gagne', desc: "Si vous chargez de la musique sur quelque chose de plus ancien qu'un iPhone récent, le MP3 est le pari plus sûr. Le support du FLAC sur le matériel ancien est aléatoire." },
        { title: 'Sans filigrane, sans relance commerciale', desc: "Juste votre audio ré-encodé. Nous n'insérons rien." },
      ]}}
      useCases={{ title: 'Quand convertir FLAC vers MP3', items: [
        { title: 'Téléchargement Bandcamp / Qobuz vers bibliothèque mobile', desc: "Bandcamp donne du FLAC par défaut pour les téléchargements payants. Convertissez en MP3 pour faire tenir une collection musicale sur un téléphone ou synchroniser avec un système voiture qui ne gère pas le FLAC." },
        { title: 'Rip de CD vers bibliothèque portable', desc: "Si vous avez rippé vos CD en FLAC pour l'archivage, convertissez chaque album en MP3 pour l'écoute quotidienne et gardez les FLAC comme master." },
        { title: 'Export studio vers distribution', desc: "Votre producteur de musique peut vous envoyer du FLAC. Convertissez en MP3 pour les hébergeurs de podcasts, les lecteurs web, ou simplement pour envoyer le mix brut par email à un collaborateur." },
        { title: 'Enregistrements de terrain vers partage rapide', desc: "Les enregistreurs de terrain comme le Tascam DR-40X ou le Zoom F3 peuvent enregistrer en FLAC. Convertissez avant de partager avec un producteur ou un monteur son qui travaille en MP3." },
        { title: 'Ménage dans la bibliothèque', desc: "Vous nettoyez un vieux disque dur plein de FLAC : gardez les originaux sur un NAS, convertissez en MP3 pour l'usage actif." },
      ]}}
      proTips={{ title: 'Conseils pour une conversion FLAC vers MP3 propre', tips: [
        { title: 'Le FLAC est sans perte donc le premier encodage est correct', desc: "Il n'y a pas de pénalité de qualité à passer du FLAC au MP3 une fois. Vous commencez seulement à entendre des artefacts si vous ré-encodez le MP3 à nouveau, ou si vous passez du MP3 vers d'autres formats avec perte." },
        { title: 'Pour un usage audiophile, gardez le FLAC', desc: "Si vous écoutez sur des casques haut de gamme, sur un DAC dédié, ou en écoute critique, le FLAC vaut la peine d'être conservé. Le MP3 sert à la distribution et à l'usage courant." },
        { title: 'Les balises ne passent pas toujours', desc: "Les balises FLAC (Vorbis comments) et les balises MP3 (ID3) sont des formats différents. Notre convertisseur ne transfère pas les pochettes et les métadonnées détaillées entre les deux. Ajoutez les balises vous-même dans MusicBrainz Picard ou Mp3tag après conversion." },
        { title: 'Le FLAC 24-bit/96 kHz se convertit comme le 16-bit/44.1', desc: "Le MP3 plafonne effectivement à 16-bit/48 kHz. La profondeur de bits et le taux d'échantillonnage supplémentaires de la source ne survivent pas à l'encodage MP3, mais ils ne dérangent rien non plus." },
        { title: 'Pour une conversion sans perte, utilisez plutôt ALAC', desc: "Si vous avez besoin de sans perte qui passe dans iTunes/Apple Music, convertissez le FLAC en ALAC (Apple Lossless) à la place. Même qualité audio, moins d'encombrement métadonnées que le FLAC, lecture native dans l'écosystème Apple." },
        { title: 'Pour un MP3 à débit plus élevé, ré-exportez depuis Audacity', desc: "Notre convertisseur sort en 128 kbps. Pour du 320 kbps, ouvrez le MP3 dans Audacity (gratuit) et ré-exportez. Le double encodage est à peine audible." },
      ]}}
      faq={[
        { q: 'La conversion FLAC vers MP3 est-elle vraiment gratuite ?', a: "Oui. Pas de compte jusqu'à 25 Mo, pas de filigrane, pas de limite de temps. Les publicités d'affichage sur les pages éditoriales couvrent le coût serveur." },
        { q: 'Quelle est la taille maximale de fichier ?', a: "25 Mo en anonyme, 60 Mo avec un compte gratuit. Un morceau typique de 5 minutes en FLAC fait 30 à 40 Mo, donc pour les albums complets vous devrez convertir piste par piste." },
        { q: 'Vais-je entendre une différence de qualité ?', a: "Sur des haut-parleurs de téléphone, en voiture, sur des casques bon marché, non. Sur des moniteurs de studio en écoute critique, peut-être. Le compromis est raisonnable pour tout sauf le mastering et l'écoute audiophile." },
        { q: 'La pochette et les métadonnées sont-elles transférées ?', a: "Partiellement. Les balises de base (artiste, titre, album) passent en général. La pochette et les Vorbis comments détaillés souvent non. Utilisez MusicBrainz Picard ou Mp3tag après conversion pour des balises propres." },
        { q: 'Quelle qualité MP3 produisez-vous ?', a: "128 kbps en débit constant, 44.1 kHz, configuration de canaux source préservée." },
        { q: 'Combien de temps cela prend-il ?', a: "Quelques secondes. Un FLAC de 25 Mo se convertit en 3 à 10 secondes. L'upload est le goulot." },
        { q: 'Conservez-vous mes fichiers ?', a: "Non. L'envoi est supprimé après conversion. Le résultat est purgé en moins d'une heure par notre cron de nettoyage." },
        { q: 'Puis-je convertir un album entier en lot ?', a: "Pas encore : le palier gratuit traite un fichier à la fois. Ouvrez plusieurs onglets de navigateur comme contournement." },
        { q: 'Mon FLAC 24-bit/96 kHz sonne pareil que le MP3 ?', a: "Presque certainement, en lecture grand public. Le 24-bit et le taux d'échantillonnage élevé comptent pour le traitement et le mastering, pas pour l'écoute à travers des chaînes audio de qualité MP3." },
        { q: 'Devrais-je convertir en ALAC plutôt ?', a: "Si vous avez besoin d'audio sans perte dans Apple Music ou iTunes, oui : l'ALAC est l'équivalent Apple du FLAC. Nous ne sortons pas d'ALAC, mais Audacity oui." },
        { q: 'Mon FLAC vient d&apos;un téléchargement Hi-Res. Vaut-il la peine de convertir ?', a: "Pour l'écoute sur un téléphone ou en voiture, le MP3 sonnera identique. Gardez l'original pour tout traitement futur." },
        { q: 'Puis-je avoir plus de 128 kbps ?', a: "Pas depuis ce convertisseur. Ré-encodez le MP3 dans Audacity au débit voulu." },
      ]}
      relatedLinks={[
        { href: '/fr/wav-to-mp3', label: 'WAV vers MP3', desc: 'Convertissez du WAV sans perte en MP3.' },
        { href: '/fr/mp3-to-wav', label: 'MP3 vers WAV', desc: "La direction inverse, MP3 développé en WAV non compressé." },
        { href: '/fr/flac-to-text', label: 'FLAC vers texte', desc: "Transcrivez de l'audio FLAC directement en texte." },
        { href: '/fr/how-to-compress-audio', label: 'Compresser de l&apos;audio', desc: 'Quand le MP3 doit encore être plus petit.' },
      ]}
    />
  )
}
