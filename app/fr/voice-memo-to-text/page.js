import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/voice-memo-to-text',
  'fr': 'https://mictoo.com/fr/voice-memo-to-text',
  'de': 'https://mictoo.com/de/voice-memo-to-text',
  'es': 'https://mictoo.com/es/voice-memo-to-text',
  'ru': 'https://mictoo.com/ru/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: 'Mémo vocal en texte — Transcrire les Voice Memos iPhone gratuitement | Mictoo',
  description: "Convertissez gratuitement vos mémos vocaux iPhone et enregistrements Android en texte. Supporte M4A et MP3. Sans inscription, sans appli. Transcription IA précise.",
  alternates: { canonical: 'https://mictoo.com/fr/voice-memo-to-text', languages: LANGS },
}

export default function FrVoiceMemoPage() {
  return (
    <LandingLayout
      badge="iPhone · Android · Gratuit"
      h1={<>Mémo vocal en texte<br /><span className="text-brand-600">Transcription gratuite en ligne</span></>}
      subtitle="Déposez votre mémo vocal iPhone ou votre enregistrement Android et obtenez une transcription précise en quelques secondes. Sans inscription, sans appli à installer."
      defaultLanguage="fr"
      features={[
        { icon: '📱', title: 'iPhone et Android', desc: "Les Mémos Vocaux iPhone s'exportent en .m4a — entièrement supportés. Les enregistreurs Android exportent en .m4a, .mp3 ou .wav — tous supportés." },
        { icon: '🧠', title: 'Idéal pour notes et idées', desc: "Transformez vos notes vocales, sessions de brainstorming et rappels en texte recherchable à coller dans Notion, Obsidian ou votre éditeur préféré." },
        { icon: '🆓', title: '100% gratuit', desc: "Pas d'abonnement, pas d'achat in-app, pas de filigrane. Aucun quota mensuel — déposez un mémo dès que vous avez besoin d'une transcription." },
      ]}
      faq={[
        { q: "Comment envoyer mon Mémo Vocal iPhone vers un ordinateur ?", a: "Ouvrez l'app Voice Memos, appuyez sur le mémo, puis \"…\" et \"Partager\" → \"Enregistrer dans Fichiers\" ou AirDrop vers votre Mac. Déposez ensuite le fichier .m4a dans Mictoo sur votre ordinateur." },
        { q: "Puis-je transcrire directement sur iPhone ?", a: "Oui. Ouvrez mictoo.com dans Safari sur votre iPhone, touchez la zone d'upload et choisissez un Mémo Vocal depuis l'app Fichiers. La transcription apparaît en quelques secondes et vous pouvez la copier ou télécharger en .txt." },
        { q: "Quel est le format des enregistrements Android ?", a: "La plupart des téléphones Android enregistrent en .m4a ou .mp3 selon l'app de dictaphone. Les deux sont supportés. Certaines apps utilisent .amr — convertissez-le d'abord en .m4a avec un convertisseur gratuit." },
        { q: "Mon enregistrement vocal est-il privé ?", a: "Oui. Les fichiers sont envoyés au moteur IA pour la transcription uniquement et ne sont jamais stockés sur nos serveurs. La transcription reste dans votre navigateur et n'appartient qu'à vous." },
        { q: "Et si mon mémo dépasse 25 Mo ?", a: "Les Mémos Vocaux iPhone occupent environ 1 Mo par minute en qualité par défaut — donc 25 minutes tiennent dans 25 Mo. Pour des mémos plus longs, passez la qualité de Voice Memos en \"Compressé\" dans Réglages → Mémos Vocaux, ou découpez l'enregistrement." },
      ]}
      relatedLinks={[
        { href: '/fr', label: 'Tous les formats' },
        { href: '/fr/meeting-transcription', label: 'Transcription de réunion' },
        { href: '/fr/interview-transcription', label: "Transcription d'entretien" },
      ]}
    />
  )
}
