import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'ja': 'https://mictoo.com/ja/zoom-transcription',
  'ko': 'https://mictoo.com/ko/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Transcription Zoom — Transcrire les enregistrements Zoom gratuitement | Mictoo',
  description: 'Transcrivez vos enregistrements de réunion Zoom en texte gratuitement. Fonctionne avec MP4 et M4A de Zoom Cloud ou Local Recording. Sans inscription.',
  alternates: { canonical: 'https://mictoo.com/fr/zoom-transcription', languages: LANGS },
}

export default function FrZoomPage() {
  return (
    <LandingLayout
      badge="Zoom · MP4 · M4A · Gratuit"
      h1={<>Transcription Zoom<br /><span className="text-brand-600">Vos enregistrements Zoom en texte</span></>}
      subtitle="Déposez votre enregistrement Zoom au format MP4 ou M4A et obtenez une transcription précise en quelques secondes. Parfait pour les réunions, webinaires et entretiens."
      defaultLanguage="fr"
      features={[
        { icon: '🎬', title: 'Tous les enregistrements Zoom', desc: "Les exports Zoom Cloud Recording (MP4) et Local Recording (M4A audio seul) sont supportés. Déposez directement — aucune conversion nécessaire." },
        { icon: '✏️', title: 'Modifiable dans le navigateur', desc: 'Nettoyez la transcription, ajoutez les noms des intervenants, corrigez les noms propres et téléchargez en .txt ou .srt pour la vidéo originale.' },
        { icon: '⚡', title: 'Rapide et gratuit', desc: "Une réunion Zoom de 25 minutes se transcrit en moins de 30 secondes. 100 % gratuit, sans compte, sans carte bancaire." },
      ]}
      faq={[
        { q: 'Comment télécharger mon enregistrement Zoom ?', a: "Pour Cloud Recording : ouvrez le portail web Zoom → Recordings → cliquez sur la réunion → Télécharger. Pour Local Recording : ouvrez Zoom desktop → Paramètres → Enregistrement, les fichiers sont dans le dossier configuré par défaut." },
        { q: 'Quelle différence entre MP4 et M4A de Zoom ?', a: "MP4 est la vidéo complète (avec audio), M4A est uniquement audio. Les deux fonctionnent avec Mictoo. Si vous n'avez besoin que de la transcription, M4A est plus léger et plus rapide à téléverser." },
        { q: 'Puis-je obtenir des sous-titres .srt pour la vidéo Zoom ?', a: "Oui. Après la transcription, Mictoo affiche un bouton de téléchargement .srt. Le fichier contient les timestamps synchronisés et s'intègre à Zoom, YouTube Studio, Premiere Pro ou DaVinci Resolve." },
        { q: 'Quelle est la taille maximale ?', a: "Jusqu'à 25 Mo par fichier. La plupart des MP4 Zoom de 25 minutes dépassent cette limite — extrayez la piste audio en M4A ou compressez la vidéo. Pour 30–60 minutes, M4A à 64 kbps tient généralement." },
        { q: 'Précision avec plusieurs intervenants ?', a: "La précision est élevée lorsque les locuteurs parlent à tour de rôle. Mictoo génère une transcription unique sans libellés — ajoutez Hôte/Invité manuellement dans l'éditeur." },
      ]}
      relatedLinks={[
        { href: '/fr/meeting-transcription', label: 'Transcription de réunion' },
        { href: '/transcribe-mp3-to-text', label: 'MP3 en texte' },
        { href: '/transcribe-video-to-text', label: 'Vidéo en texte' },
        { href: '/fr', label: 'Tous les formats' },
      ]}
    />
  )
}
