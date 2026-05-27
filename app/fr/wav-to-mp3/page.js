import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-mp3',
  'fr': 'https://mictoo.com/fr/wav-to-mp3',
  'de': 'https://mictoo.com/de/wav-to-mp3',
  'es': 'https://mictoo.com/es/wav-to-mp3',
  'ru': 'https://mictoo.com/ru/wav-to-mp3',
  'it': 'https://mictoo.com/it/wav-to-mp3',
  'pt': 'https://mictoo.com/pt/wav-to-mp3',
  'pl': 'https://mictoo.com/pl/wav-to-mp3',
  'ja': 'https://mictoo.com/ja/wav-to-mp3',
  'ko': 'https://mictoo.com/ko/wav-to-mp3',
  'x-default': 'https://mictoo.com/wav-to-mp3',
}

export const metadata = {
  title: 'WAV vers MP3 — convertisseur en ligne gratuit | Mictoo',
  description:
    "Convertissez WAV en MP3 gratuitement en ligne. Réduisez les fichiers WAV sans perte en MP3 portables à 128 kbps en quelques secondes. Sans inscription, sans filigrane. Jusqu'à 25 Mo.",
  alternates: { canonical: 'https://mictoo.com/fr/wav-to-mp3', languages: LANGS },
}

export default function FrWavToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="WAV → MP3 · Gratuit · Sans inscription"
      h1={<>WAV vers MP3<br /><span className="text-brand-600">Convertisseur en ligne gratuit</span></>}
      subtitle="Déposez un fichier WAV. Récupérez un MP3 compact dix fois plus léger, son quasi-identique pour la voix parlée ou l&apos;écoute courante. Sans filigrane, sans email."
      tool={<ConverterZone from="wav" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Déposez le WAV', desc: "Glissez n'importe quel WAV (16-bit, 24-bit, mono, stéréo) dans la zone. Les fichiers jusqu'à 25 Mo passent de manière anonyme, 60 Mo avec inscription." },
        { icon: '⚡', title: 'Nous ré-encodons en MP3', desc: "ffmpeg côté serveur, débit constant 128 kbps, 44.1 kHz, stéréo. Un WAV de 25 Mo (environ 2 minutes en 24-bit/96 kHz, ou 5 minutes en 16-bit/44.1) se termine en quelques secondes." },
        { icon: '⬇️', title: 'Téléchargez le MP3', desc: "Le résultat porte le nom d'origine avec .mp3 à la place. L'envoi comme le résultat sont supprimés de nos serveurs en moins d'une heure." },
      ]}
      whyUse={{ title: 'Pourquoi convertir WAV vers MP3', bullets: [
        { title: 'Les fichiers WAV sont énormes', desc: "Un WAV 16-bit/44.1 kHz de 5 minutes pèse environ 50 Mo. Le même audio en MP3 à 128 kbps fait 5 Mo. Pour envoyer par email, uploader sur un hébergeur de podcast, ou ranger sur un téléphone, le MP3 est le bon format." },
        { title: 'Le MP3 se lit partout', desc: "Le WAV passe sur ordinateur mais reste capricieux sur les vieux autoradios, certains haut-parleurs Bluetooth, et beaucoup de lecteurs web. Le MP3 fonctionne simplement." },
        { title: "La perte de qualité à 128 kbps est inaudible pour la plupart des écoutes", desc: "Vous ne ferez pas la différence entre un MP3 à 128 kbps et le WAV original sauf si vous masterisez de la musique sur des moniteurs de studio. Pour la voix, le podcast ou l'écoute courante, c'est le compromis évident." },
        { title: 'Sans filigrane, sans popups', desc: "Le MP3 est juste votre audio ré-encodé. Nous n'ajoutons pas d'intro disant \"Converti par...\" et nous n'affichons pas de fausse popup d'attente de 30 secondes." },
        { title: 'Vie privée par défaut', desc: "Les WAV issus d'un enregistrement de terrain peuvent être sensibles. Le fichier arrive sur Vercel Blob, est converti, puis effacé. Nous ne le regardons pas, nous ne le gardons pas." },
      ]}}
      useCases={{ title: 'Quand convertir WAV vers MP3', items: [
        { title: 'Enregistrement de terrain vers extrait prêt à envoyer', desc: "Un Zoom H1n ou enregistreur similaire sauvegarde en WAV par défaut. Convertissez en MP3 avant de partager avec un producteur, journaliste ou transcripteur." },
        { title: "Export studio vers écoute mobile", desc: "Audacity, Reaper, Logic, ils exportent tous en WAV par défaut. Exportez le mix brut en MP3 pour le partager avec des collaborateurs ou l'écouter en déplacement." },
        { title: 'Préparation de podcast', desc: "La plupart des hébergeurs de podcasts (Anchor, Buzzsprout, Transistor) acceptent le WAV mais recommandent le MP3 parce que l'upload est plus rapide et la bande passante moins chère." },
        { title: 'Nettoyage de mémo vocal', desc: "Si votre téléphone ou enregistreur a sauvegardé en WAV, convertissez en MP3 avant de ranger dans vos archives Notion ou Notes. Cela économise du stockage à peu de frais." },
        { title: 'Pipeline de nettoyage audio', desc: "Vous avez enregistré en WAV pour le montage, fait vos retouches, et vous voulez maintenant un MP3 plus léger pour la distribution. C'est la dernière étape." },
      ]}}
      proTips={{ title: 'Conseils pour une conversion WAV vers MP3 propre', tips: [
        { title: 'Le WAV 24-bit se convertit comme le 16-bit', desc: "Le MP3 ne préserve pas la profondeur de bits au-delà de ce dont le codage perceptif a besoin. Un WAV 24-bit ne vous apporte aucun avantage audible par rapport au 16-bit une fois ré-encodé en MP3 à 128 kbps." },
        { title: 'Si le WAV dépasse 25 Mo, coupez-le avant', desc: "Ouvrez dans Audacity (gratuit) ou QuickTime, coupez la partie utile, exportez en WAV plus léger, puis convertissez. Ou connectez-vous pour la limite de 60 Mo." },
        { title: 'Mono en entrée, mono en sortie', desc: "Si votre WAV source est en mono (typique pour les enregistrements vocaux), le MP3 obtenu sera aussi en mono. Un MP3 mono à 128 kbps est largement suffisant, mais notre convertisseur standardise à 128 par simplicité." },
        { title: "Pour le mastering ou l'archivage, n'utilisez pas le MP3", desc: "Si vous gardez le fichier comme copie maître pour un futur remastering, restez en WAV (ou FLAC). Le MP3 est un format de distribution, pas d'archivage." },
        { title: '320 kbps ou VBR ? Ouvrez le MP3 dans Audacity ensuite', desc: "Nous exportons en débit constant 128 kbps. Pour un débit supérieur ou VBR, prenez le MP3 vers Audacity et ré-exportez. La perte de qualité d'un encodage supplémentaire est faible." },
        { title: 'Les WAV à en-têtes bizarres échouent en silence', desc: "Certains fichiers BWF (broadcast WAV) ont des en-têtes que ffmpeg ne lit pas. Ouvrez-les dans Audacity, sauvegardez en WAV standard, puis ressayez." },
      ]}}
      faq={[
        { q: 'La conversion WAV vers MP3 est-elle vraiment gratuite ?', a: "Oui. Pas de compte requis jusqu'à 25 Mo, pas de limite de temps, pas de filigrane sur la sortie. Les publicités d'affichage sur les pages éditoriales paient le serveur." },
        { q: 'Quelle est la taille maximale de fichier ?', a: "25 Mo en anonyme, 60 Mo avec un compte gratuit. Un WAV de 25 Mo représente environ 5 minutes en 16-bit/44.1 kHz stéréo, ou environ 2 minutes en 24-bit/96 kHz." },
        { q: 'Combien de temps cela prend-il ?', a: "Quelques secondes. La conversion elle-même va bien plus vite que le temps réel : un WAV de 25 Mo se termine en 3 à 8 secondes. La vitesse d'upload est le goulot." },
        { q: 'Quelle qualité MP3 produisez-vous ?', a: "128 kbps en débit constant, 44.1 kHz, respect du nombre de canaux source (mono en entrée → mono en sortie, stéréo en entrée → stéréo en sortie). C'est le réglage universel \"assez bon pour tout\"." },
        { q: 'Conservez-vous mes fichiers ?', a: "Non. L'envoi est supprimé juste après la conversion. Le résultat est purgé en moins d'une heure par notre cron de nettoyage. Sauvegardez-le en local." },
        { q: 'Le MP3 sonnera-t-il différemment du WAV ?', a: "Sur la plupart des systèmes de lecture et la plupart des contenus, non. Au mastering sur des moniteurs de studio avec des oreilles fraîches, peut-être, mais à ce stade vous n'utiliseriez pas un convertisseur web." },
        { q: 'Puis-je avoir un débit supérieur (256 ou 320 kbps) ?', a: "Pas directement ici. Prenez notre MP3 à 128 kbps vers Audacity et ré-exportez au débit voulu. Le double encodage ajoute une perte audible négligeable." },
        { q: 'Et le FLAC à la place du MP3 ?', a: "Le FLAC est une compression sans perte : moitié de la taille du WAV, aucune perte de qualité. Pour l'archivage c'est le meilleur choix. Nous ne produisons pas de FLAC depuis ce convertisseur, mais notre page /flac-to-mp3 gère l'autre direction." },
        { q: 'Mon WAV est en 32-bit float. Va-t-il se convertir ?', a: "Oui. ffmpeg gère le WAV 32-bit float sans souci. La sortie MP3 est la même quelle que soit la profondeur de bits en entrée." },
        { q: "Pourquoi de l'audio mono devient un MP3 stéréo ?", a: "Nous conservons la configuration de canaux source. Un WAV mono donne un MP3 mono. Un WAV stéréo donne un MP3 stéréo. Nous ne faisons pas de upmix ni de downmix." },
        { q: 'Cela marche-t-il pour la musique ou juste pour la voix ?', a: "Les deux. Un MP3 à 128 kbps est un léger compromis perceptif pour la musique, correct pour l'écoute en voiture, le casque en environnement bruyant, l'écoute courante. Pour de l'écoute musicale critique, gardez le WAV ou utilisez du FLAC." },
        { q: 'Puis-je convertir par lots ?', a: "Pas encore. Un fichier à la fois sur le palier gratuit. Le lot est prévu pour une future formule Pro." },
      ]}
      relatedLinks={[
        { href: '/fr/mp4-to-mp3', label: 'MP4 vers MP3', desc: "Extrayez l'audio MP3 d'un fichier vidéo." },
        { href: '/fr/flac-to-mp3', label: 'FLAC vers MP3', desc: 'Convertissez du FLAC sans perte en MP3 portable.' },
        { href: '/fr/mp3-to-wav', label: 'MP3 vers WAV', desc: "La direction inverse, WAV non compressé depuis un MP3." },
        { href: '/fr/transcribe-audio-to-text', label: 'Audio vers texte', desc: "Besoin des mots et pas de l'audio ? Passez le MP3 et transcrivez directement." },
      ]}
    />
  )
}
