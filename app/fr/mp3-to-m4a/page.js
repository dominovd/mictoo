import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-m4a',
  'fr': 'https://mictoo.com/fr/mp3-to-m4a',
  'de': 'https://mictoo.com/de/mp3-to-m4a',
  'es': 'https://mictoo.com/es/mp3-to-m4a',
  'ru': 'https://mictoo.com/ru/mp3-to-m4a',
  'it': 'https://mictoo.com/it/mp3-to-m4a',
  'pt': 'https://mictoo.com/pt/mp3-to-m4a',
  'pl': 'https://mictoo.com/pl/mp3-to-m4a',
  'ja': 'https://mictoo.com/ja/mp3-to-m4a',
  'ko': 'https://mictoo.com/ko/mp3-to-m4a',
  'x-default': 'https://mictoo.com/mp3-to-m4a',
}

export const metadata = {
  title: 'MP3 vers M4A — convertisseur en ligne gratuit | Mictoo',
  description:
    "Convertissez MP3 en M4A gratuitement en ligne. Ré-encodez du MP3 en AAC dans un conteneur M4A pour iPhone, iTunes et l'écosystème Apple. Sans inscription, sans filigrane.",
  alternates: { canonical: 'https://mictoo.com/fr/mp3-to-m4a', languages: LANGS },
}

export default function FrMp3ToM4aPage() {
  return (
    <LandingLayout
      defaultLanguage="fr"
      badge="MP3 → M4A · Gratuit · Sans inscription"
      h1={<>MP3 vers M4A<br /><span className="text-brand-600">Convertisseur en ligne gratuit</span></>}
      subtitle="Déposez un MP3. Récupérez un M4A, audio AAC dans un conteneur MP4. Se lit nativement dans iTunes, Apple Music et sur tous les iPhones. Sans filigrane, sans email."
      tool={<ConverterZone from="mp3" to="m4a" />}
      howItWorks={[
        { icon: '📂', title: 'Déposez le MP3', desc: "Glissez n'importe quel MP3 dans la zone. Jusqu'à 25 Mo en anonyme, 60 Mo après inscription." },
        { icon: '⚡', title: 'ffmpeg ré-encode en AAC', desc: "AAC à 128 kbps dans un conteneur M4A, avec le flag faststart pour que la lecture démarre immédiatement en streaming. Terminé en 3 à 10 secondes." },
        { icon: '⬇️', title: 'Téléchargez le M4A', desc: "Le résultat porte le nom d'origine avec .m4a. Les fichiers sont effacés de nos serveurs en moins d'une heure." },
      ]}
      whyUse={{ title: 'Pourquoi convertir MP3 vers M4A', bullets: [
        { title: "L'écosystème Apple préfère le M4A", desc: "iTunes, Apple Music, iCloud Music Library, GarageBand, ils gèrent tous le M4A comme format de premier choix. Le MP3 marche aussi, mais le M4A est ce qu'ils parlent nativement." },
        { title: "L'AAC sonne légèrement mieux que le MP3 au même débit", desc: "À 128 kbps la différence est petite mais réelle, surtout dans les hautes fréquences. Si votre MP3 source est déjà avec perte, ce ré-encodage ne le dégrade pas davantage." },
        { title: 'Le M4A supporte les marqueurs de chapitres et des métadonnées plus riches', desc: "Si vous faites des livres audio, des extraits de podcast ou n'importe quoi pour l'écosystème Apple, le M4A gère les chapitres proprement. Le support des chapitres en MP3 est inégal." },
        { title: 'Les sonneries iPhone doivent être en M4A', desc: "Les sonneries iPhone personnalisées utilisent l'extension M4R, même format AAC-dans-MP4 que le M4A. Convertissez puis renommez en .m4r pour usage sonnerie." },
        { title: 'Sans filigrane, sans relance commerciale', desc: "Votre audio ré-encodé, rien d'autre." },
      ]}}
      useCases={{ title: 'Quand convertir MP3 vers M4A', items: [
        { title: 'Importer une collection musicale dans Apple Music', desc: "Le M4A s'importe proprement et s'intègre avec iCloud Music Library. Les MP3 peuvent parfois avoir des soucis de métadonnées pendant la synchronisation." },
        { title: 'Créer une sonnerie iPhone', desc: "Convertissez MP3 → M4A, coupez à moins de 40 secondes, renommez en .m4r, déposez dans le Finder pendant que l'iPhone est connecté." },
        { title: 'Livre audio avec marqueurs de chapitres', desc: "Le M4A supporte les chapitres, le support MP3 est peu fiable. Pour les longs livres audio où les auditeurs veulent sauter entre chapitres, le M4A est le bon format." },
        { title: 'Nettoyage de mémos vocaux pour iCloud', desc: "Si vous avez un dossier de mémos vocaux en MP3 et que vous les voulez dans iCloud ou Apple Voice Memos, le M4A est plus natif et se synchronise plus fiablement." },
        { title: 'Projet GarageBand ou Logic', desc: "À l'import d'audio de référence dans les logiciels musicaux d'Apple, le M4A s'intègre plus en douceur que le MP3 dans certains workflows." },
      ]}}
      proTips={{ title: 'Conseils pour la conversion MP3 vers M4A', tips: [
        { title: 'Le ré-encodage ajoute une petite perte', desc: "Vous passez d'un format avec perte à un autre. À 128 kbps AAC depuis un MP3 à 128 kbps, la perte est réelle mais inaudible pour quasiment tout le monde sur quasiment tout. Pour un usage critique, trouvez une source sans perte." },
        { title: 'Pour les sonneries, coupez avant de convertir', desc: "Les sonneries iPhone plafonnent à 40 secondes. Coupez le MP3 dans Audacity ou QuickTime d'abord, puis convertissez." },
        { title: "L'AAC à 96 kbps bat en général le MP3 à 128 kbps", desc: "Notre convertisseur sort en 128 kbps pour la compatibilité, mais si vous avez le contrôle complet vous pourriez descendre plus bas en AAC et égaler quand même la qualité MP3. Nous ne proposons pas le sélecteur pour garder l'outil simple." },
        { title: "M4A vs MP4, même conteneur, convention différente", desc: "Les fichiers M4A contiennent uniquement de l'audio. Les fichiers MP4 peuvent contenir de la vidéo, de l'audio, ou les deux. iTunes utilise l'extension .m4a pour rendre la distinction évidente. Certains lecteurs acceptent l'une ou l'autre extension." },
        { title: 'Les marqueurs de chapitres ne sont pas ajoutés par nous', desc: "Nous ré-encodons juste l'audio. Pour ajouter des marqueurs de chapitres, utilisez Apple Books pour les livres audio ou un outil dédié comme Chapter and Verse." },
        { title: 'Pour les MP3 protégés par DRM, la conversion échouera', desc: "Le DRM est extrêmement rare pour le MP3 en 2026, mais si vous en avez un par hasard, il ne se décodera pas." },
      ]}}
      faq={[
        { q: 'La conversion MP3 vers M4A est-elle vraiment gratuite ?', a: "Oui. Pas de compte jusqu'à 25 Mo, pas de filigrane, pas de limite de temps." },
        { q: 'Quelle est la taille maximale de fichier ?', a: "25 Mo en anonyme, 60 Mo avec un compte gratuit." },
        { q: 'Le M4A sonnera-t-il moins bien que le MP3 ?', a: "Théoriquement oui : ré-encoder n'importe quel format avec perte ajoute un peu de perte. En pratique, à 128 kbps AAC depuis un MP3 à 128 kbps, aucun humain ne peut entendre la différence en lecture grand public." },
        { q: 'Quelle est la différence entre M4A et MP4 ?', a: "M4A et MP4 sont le même format de conteneur. L'extension .m4a signale juste \"audio seul\" pour qu'iTunes sache quoi en faire. Certains lecteurs acceptent les deux extensions." },
        { q: 'Combien de temps cela prend-il ?', a: "Quelques secondes. Un MP3 de 25 Mo se convertit en 3 à 10 secondes." },
        { q: 'Quelle qualité produisez-vous ?', a: "AAC à 128 kbps dans un conteneur M4A, 44.1 kHz, configuration de canaux source préservée." },
        { q: 'Conservez-vous mes fichiers ?', a: "Non. L'envoi est supprimé après conversion. La sortie est purgée en moins d'une heure." },
        { q: 'Puis-je faire une sonnerie iPhone avec cet outil ?', a: "Indirectement. Convertissez MP3 en M4A, coupez à moins de 40 secondes dans QuickTime, renommez le .m4a en .m4r, déposez dans le Finder avec votre iPhone connecté." },
        { q: 'iTunes acceptera-t-il le résultat ?', a: "Oui. Le M4A est le format natif d'iTunes." },
        { q: 'Mon MP3 est déjà en 320 kbps. Faut-il convertir ?', a: "Seulement si vous avez besoin spécifiquement de M4A pour la compatibilité. Le résultat sera de l'AAC à 128 kbps, techniquement une perte de qualité depuis du MP3 320 kbps, mais en pratique inaudible sur la plupart des lectures. Pour préserver la qualité 320 kbps il vous faudrait un autre convertisseur qui permet de régler des débits supérieurs." },
        { q: 'Les balises sont-elles transférées ?', a: "Les balises de base (titre, artiste, album) en général oui. La pochette et les commentaires détaillés sont fragiles entre l'ID3 du MP3 et les métadonnées iTunes du M4A. Re-tagez dans iTunes ou Mp3tag après conversion." },
        { q: 'Puis-je convertir par lots ?', a: "Pas encore sur le palier gratuit. Ouvrez plusieurs onglets de navigateur pour convertir plusieurs fichiers en parallèle." },
      ]}
      relatedLinks={[
        { href: '/fr/m4a-to-mp3', label: 'M4A vers MP3', desc: 'La direction inverse.' },
        { href: '/fr/wav-to-mp3', label: 'WAV vers MP3', desc: 'Réduisez du WAV en MP3 portable.' },
        { href: '/fr/m4a-to-text', label: 'M4A vers texte', desc: "Transcrivez de l'audio M4A directement." },
        { href: '/fr/how-to-compress-audio', label: 'Compresser de l&apos;audio', desc: 'Pour les fichiers qui doivent être encore plus petits.' },
      ]}
    />
  )
}
