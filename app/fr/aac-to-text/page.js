import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC en texte — Transcription audio AAC gratuite en ligne | Mictoo',
  description: "Transcrivez gratuitement les fichiers audio AAC en texte. Déposez vos fichiers .aac, .m4a ou tout fichier AAC-encodé et obtenez une transcription précise en quelques secondes.",
  alternates: { canonical: 'https://mictoo.com/fr/aac-to-text', languages: LANGS },
}

export default function FrAacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · M4A · Gratuit"
      h1={<>AAC en texte<br /><span className="text-brand-600">Transcription AAC gratuite en ligne</span></>}
      subtitle="Déposez votre fichier audio AAC et obtenez une transcription précise en quelques secondes. Fonctionne avec .aac et .m4a (AAC dans un conteneur MP4). Sans inscription."
      defaultLanguage="fr"
      features={[
        { icon: '🎧', title: 'Support natif AAC', desc: 'AAC est le codec audio par défaut des appareils Apple, YouTube et la plupart des services de streaming. Mictoo accepte directement .aac et .m4a sans conversion.' },
        { icon: '🎯', title: 'Haute précision', desc: 'AAC garde une haute qualité avec une petite taille de fichier — idéal pour la transcription IA. La plupart des enregistrements clairs sont transcrits avec 95 %+ de précision.' },
        { icon: '📥', title: 'Éditer et exporter', desc: 'Relisez la transcription dans le navigateur, corrigez noms et ponctuation, puis téléchargez en .txt simple ou en sous-titres .srt.' },
      ]}
      faq={[
        { q: "Qu'est-ce qu'un fichier AAC ?", a: "AAC (Advanced Audio Coding) est un format de compression audio avec perte utilisé par iTunes, Apple Music, YouTube et la plupart des apps de podcast. Les fichiers portent les extensions .aac ou .m4a. AAC offre une meilleure qualité que MP3 au même bitrate." },
        { q: "Quelle est la différence entre .aac et .m4a ?", a: "Les deux contiennent de l'audio encodé en AAC. .aac est le flux audio brut ; .m4a l'enveloppe dans un conteneur MP4 (comme iTunes et les Mémos Vocaux iPhone le font). Mictoo supporte les deux directement." },
        { q: "Comment convertir AAC en texte gratuitement ?", a: "Glissez votre fichier AAC dans la zone d'upload ci-dessus. Mictoo le transcrit automatiquement via IA et affiche le texte en quelques secondes. Copiez-le ou téléchargez en .txt." },
        { q: "Quelle est la taille maximale d'AAC ?", a: "Jusqu'à 25 Mo par upload. AAC à 128 kbps offre environ 25 minutes d'audio par 25 Mo ; à 64 kbps vous pouvez tenir près d'une heure. Pour des fichiers plus longs, baissez le bitrate ou divisez en segments." },
        { q: "Puis-je obtenir des horodatages pour une transcription AAC ?", a: "Oui. Après la transcription vous pouvez télécharger un fichier .srt avec des horodatages précis — utile pour synchroniser la transcription avec l'audio ou la vidéo originale." },
      ]}
      relatedLinks={[
        { href: '/fr/m4a-to-text', label: 'M4A en texte' },
        { href: '/fr/transcribe-mp3-to-text', label: 'MP3 en texte' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
