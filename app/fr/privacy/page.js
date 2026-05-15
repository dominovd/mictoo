import InfoSectionsLayout from '@/components/InfoSectionsLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/privacy',
  'fr': 'https://mictoo.com/fr/privacy',
  'de': 'https://mictoo.com/de/privacy',
  'es': 'https://mictoo.com/es/privacy',
  'ru': 'https://mictoo.com/ru/privacy',
  'x-default': 'https://mictoo.com/privacy',
}

export const metadata = {
  title: 'Politique de confidentialité — Mictoo',
  description: 'Politique de confidentialité de Mictoo. Nous ne stockons ni vos fichiers audio ni vos transcriptions.',
  alternates: { canonical: 'https://mictoo.com/fr/privacy', languages: LOCALE_ALTERNATES },
}

export default function FrPrivacyPage() {
  return (
    <InfoSectionsLayout
      h1="Politique de confidentialité"
      lastUpdated="Dernière mise à jour : mai 2026"
      sections={[
        {
          heading: '1. Ce que nous collectons',
          body: "Mictoo ne demande aucun compte et ne collecte aucune information personnelle. Lorsque vous téléchargez un fichier, votre navigateur l'envoie directement à Vercel Blob, le stockage de fichiers de Vercel hébergé aux États-Unis. Le fichier y reste brièvement, le temps que notre serveur le transmette à l'API Whisper d'OpenAI pour la transcription, puis il est automatiquement supprimé de Vercel Blob dès la fin de la transcription — généralement en moins d'une minute. Une tâche de nettoyage horaire balaye les uploads résiduels qui n'auraient pas été supprimés immédiatement. Mictoo ne conserve aucune copie permanente de votre audio, vidéo ou transcription sur ses propres serveurs.",
        },
        {
          heading: '2. Traitement des fichiers et notre fournisseur IA',
          body: "Les fichiers sont transmis en HTTPS à l'API Whisper d'OpenAI et traités en temps réel. Selon la politique de données API d'OpenAI, votre audio n'est pas utilisé pour l'entraînement des modèles, et OpenAI conserve les données API pendant 30 jours maximum à des fins de surveillance anti-abus avant de les supprimer. Mictoo ne conserve aucune copie de l'audio ni de la transcription une fois votre session de navigation terminée.",
        },
        {
          heading: '3. Analytique et publicité',
          body: (
            <>
              Nous pouvons afficher des publicités via Google AdSense. Google peut utiliser des cookies pour proposer des publicités pertinentes. Vous pouvez vous désinscrire via{' '}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Google Ad Settings</a>
              . Nous pouvons utiliser des statistiques anonymes (par ex. nombre de pages vues) pour comprendre l&apos;usage. Aucune donnée personnelle identifiable n&apos;est collectée.
            </>
          ),
        },
        {
          heading: '4. Cookies',
          body: 'Mictoo ne définit pas de cookies. Des services tiers comme Google AdSense peuvent placer leurs propres cookies sur votre appareil.',
        },
        {
          heading: '5. Confidentialité des enfants',
          body: "Mictoo n'est pas destiné aux enfants de moins de 13 ans. Nous ne collectons pas sciemment de données auprès d'enfants.",
        },
        {
          heading: '6. Contact',
          body: (
            <>
              Des questions sur cette politique ? Écrivez-nous à{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>.
            </>
          ),
        },
      ]}
    />
  )
}
