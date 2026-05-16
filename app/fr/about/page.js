import AboutLayout from '@/components/AboutLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/about',
  'fr': 'https://mictoo.com/fr/about',
  'de': 'https://mictoo.com/de/about',
  'es': 'https://mictoo.com/es/about',
  'ru': 'https://mictoo.com/ru/about',
  'it': 'https://mictoo.com/it/about',
  'pt': 'https://mictoo.com/pt/about',
  'pl': 'https://mictoo.com/pl/about',
  'x-default': 'https://mictoo.com/about',
}

export const metadata = {
  title: 'À propos de Mictoo — Outil de transcription IA gratuit',
  description: 'Découvrez Mictoo, un outil gratuit de transcription audio et vidéo propulsé par IA. Sans inscription.',
  alternates: { canonical: 'https://mictoo.com/fr/about', languages: LOCALE_ALTERNATES },
}

export default function FrAboutPage() {
  return (
    <AboutLayout
      contactHref="/fr/contact"
      strings={{
        h1: 'À propos de Mictoo',
        lead: "Mictoo est un outil gratuit de transcription audio et vidéo, sans inscription, conçu pour quiconque a besoin de convertir rapidement et précisément la parole en texte.",
        ourWhy: "Nous avons créé Mictoo parce qu'une transcription de qualité ne devrait pas exiger d'abonnement, de compte ou de compétences techniques. Déposez votre fichier, récupérez votre texte. C'est tout.",
        whatPowersHeading: 'Comment fonctionne Mictoo ?',
        whatPowersBody: "Mictoo s'appuie sur Whisper d'OpenAI — le même modèle de reconnaissance vocale utilisé dans ChatGPT, entraîné sur 680 000 heures d'audio multilingue. Il prend en charge plus de 50 langues avec détection automatique et est largement considéré comme l'un des modèles de transcription les plus précis disponibles. Mictoo exécute Whisper via l'API de Groq (hébergée aux États-Unis, modèle whisper-large-v3) pour la rapidité et le coût, avec l'API Whisper d'OpenAI conservée comme fallback automatique. Vos fichiers sont transmis directement au fournisseur de transcription et ne sont jamais stockés sur les serveurs de Mictoo ; ni Groq ni OpenAI n'utilisent les données API pour entraîner leurs modèles, et OpenAI ne conserve les données API que pendant 30 jours maximum à des fins de surveillance anti-abus.",
        principlesHeading: 'Nos principes',
        principles: [
          { label: 'Gratuit.', body: "Aucun frais caché, aucune période d'essai, pas de carte bancaire." },
          { label: 'Privé.', body: 'Vos fichiers ne sont jamais stockés. Ils sont traités et immédiatement supprimés.' },
          { label: 'Simple.', body: 'Une page, un outil, zéro friction.' },
          { label: 'Précis.', body: 'Nous utilisons le meilleur modèle IA disponible pour la qualité de transcription.' },
        ],
        contactHeading: 'Nous contacter',
        contactPrefix: 'Une question, un retour ou une suggestion ?',
        contactCtaLabel: 'Contactez-nous',
        contactSuffix: ' ou écrivez à',
      }}
    />
  )
}
