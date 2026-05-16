import InfoSectionsLayout from '@/components/InfoSectionsLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/terms',
  'fr': 'https://mictoo.com/fr/terms',
  'de': 'https://mictoo.com/de/terms',
  'es': 'https://mictoo.com/es/terms',
  'ru': 'https://mictoo.com/ru/terms',
  'it': 'https://mictoo.com/it/terms',
  'pt': 'https://mictoo.com/pt/terms',
  'pl': 'https://mictoo.com/pl/terms',
  'x-default': 'https://mictoo.com/terms',
}

export const metadata = {
  title: "Conditions d'utilisation — Mictoo",
  description: "Conditions d'utilisation de l'outil de transcription gratuit Mictoo.",
  alternates: { canonical: 'https://mictoo.com/fr/terms', languages: LOCALE_ALTERNATES },
}

export default function FrTermsPage() {
  return (
    <InfoSectionsLayout
      h1="Conditions d'utilisation"
      lastUpdated="Dernière mise à jour : mai 2026"
      sections={[
        {
          heading: '1. Acceptation des conditions',
          body: "En utilisant Mictoo (« le Service »), vous acceptez ces Conditions d'utilisation. Si vous n'êtes pas d'accord, n'utilisez pas le Service.",
        },
        {
          heading: '2. Utilisation du service',
          body: 'Mictoo fournit un outil gratuit de transcription audio et vidéo propulsé par IA. Vous pouvez utiliser le Service à des fins personnelles et commerciales, à condition que :',
          list: [
            'Vous ne téléchargez que les fichiers que vous avez le droit de transcrire.',
            "Vous ne tentez pas d'abuser, de surcharger ou de procéder à l'ingénierie inverse du Service.",
            'Vous ne téléchargez pas de contenu illégal ou portant atteinte aux droits de tiers.',
          ],
        },
        {
          heading: '3. Propriété intellectuelle',
          body: 'Vous conservez la pleine propriété des fichiers que vous téléchargez et des transcriptions que vous générez. Nous ne revendiquons aucun droit sur votre contenu.',
        },
        {
          heading: '4. Exclusion de garanties',
          body: 'Le Service est fourni « en l\'état » sans aucune garantie. Nous ne garantissons pas une précision de transcription à 100 %. Utilisez le résultat à votre discrétion.',
        },
        {
          heading: '5. Limitation de responsabilité',
          body: "Dans toute la mesure permise par la loi, Mictoo et ses opérateurs ne pourront être tenus responsables des dommages indirects, accessoires ou consécutifs découlant de votre utilisation du Service.",
        },
        {
          heading: '6. Modifications des conditions',
          body: "Nous pouvons mettre à jour ces conditions à tout moment. L'utilisation continue du Service après la publication des modifications constitue une acceptation des conditions mises à jour.",
        },
        {
          heading: '7. Contact',
          body: (
            <>
              Des questions ? Écrivez-nous à{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>.
            </>
          ),
        },
      ]}
    />
  )
}
