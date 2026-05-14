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
          body: "Mictoo ne vous demande pas de créer un compte et ne collecte aucune information personnelle. Lorsque vous téléchargez un fichier, il est envoyé directement à l'API IA pour transcription. Nous ne stockons, ne journalisons et ne conservons pas vos fichiers audio ou vidéo.",
        },
        {
          heading: '2. Traitement des fichiers',
          body: "Les fichiers téléchargés sont transmis de manière sécurisée aux serveurs de notre fournisseur IA pour reconnaissance vocale. Les fichiers sont traités en temps réel et ne sont pas conservés sur nos serveurs ou ceux de notre fournisseur au-delà de la durée d'une seule requête API.",
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
