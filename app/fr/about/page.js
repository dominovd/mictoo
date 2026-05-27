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
  'ja': 'https://mictoo.com/ja/about',
  'ko': 'https://mictoo.com/ko/about',
  'x-default': 'https://mictoo.com/about',
}

export const metadata = {
  title: 'À propos de Mictoo — Outil de transcription IA gratuit',
  description: "À propos de Mictoo, un outil gratuit de transcription audio et vidéo propulsé par l'IA. Qui est derrière, comment ça marche, comment on gagne de l'argent et ce qu'on fait (et ce qu'on ne fait pas) avec vos fichiers.",
  alternates: { canonical: 'https://mictoo.com/fr/about', languages: LOCALE_ALTERNATES },
}

export default function FrAboutPage() {
  return (
    <AboutLayout
      contactHref="/fr/contact"
      strings={{
        h1: 'À propos de Mictoo',
        lead:
          "Mictoo est un outil gratuit de transcription audio et vidéo, sans inscription, conçu pour quiconque a besoin de convertir rapidement et précisément la parole en texte.",
        ourWhy:
          "Nous avons créé Mictoo parce qu'une transcription de qualité ne devrait pas exiger d'abonnement, de compte ou de compétences techniques. Déposez votre fichier, récupérez votre texte. C'est tout.",

        whoBuiltHeading: 'Qui est derrière Mictoo',
        whoBuiltBody: [
          "Mictoo est un projet indé, fait et maintenu par une petite équipe qui bosse depuis dix ans sur le SEO, le contenu et les outils pour développeurs. On n'est pas une startup financée par du capital risque qui court derrière un milliard d'utilisateurs. On n'est pas non plus un projet annexe à l'intérieur d'un géant de la transcription essayant de capturer le segment gratuit. On est des gens qui utilisent des outils de transcription nous-mêmes et qui en avaient marre que chaque option soit soit verrouillée derrière un paywall, soit lente, soit hostile à l'utilisateur.",
          "Si vous voulez joindre directement la personne derrière le site, l'email en bas de cette page va dans une vraie boîte. Chaque message est lu.",
        ],

        whatPowersHeading: 'Ce qu\'il y a derrière Mictoo',
        whatPowersBody:
          "Mictoo s'appuie sur Whisper d'OpenAI, le même modèle de reconnaissance vocale utilisé dans ChatGPT. Whisper large-v3 a été entraîné sur 680 000 heures d'audio multilingue. Il prend en charge plus de 50 langues avec détection automatique et est largement considéré comme le modèle ouvert de reconnaissance vocale le plus puissant disponible. On sert Whisper via l'API de Groq (hébergée aux États-Unis, modèle whisper-large-v3) pour la rapidité et le coût, avec l'API Whisper d'OpenAI en fallback automatique si Groq n'est pas dispo. Les fichiers sont transmis directement au fournisseur de transcription et ne sont jamais stockés sur les serveurs de Mictoo. Ni Groq ni OpenAI n'utilisent l'audio API pour entraîner leurs modèles, et OpenAI ne conserve les données API que pendant 30 jours maximum à des fins de surveillance anti-abus avant suppression.",

        securityHeading: "Sécurité et ce qui arrive à votre fichier",
        securityBody: [
          "Votre fichier audio ou vidéo est uploadé dans Vercel Blob storage, streamé vers le fournisseur de transcription, transcrit, puis supprimé. Tout le tour prend moins d'une minute pour la plupart des fichiers, et à la fin il ne reste aucune copie de votre fichier sur notre infra.",
          "On ne sauvegarde pas non plus votre transcription. Elle vit dans l'onglet du navigateur. Si vous voulez la garder, cliquez le bouton de téléchargement. Une fois que vous fermez l'onglet, on n'a aucune trace de ce que vous avez transcrit. La seule chose qu'on log, c'est un compteur anonyme du nombre de fichiers traités, utilisé pour suivre l'usage et facturer nos prestataires.",
          "Si vous êtes connecté (gratuit, optionnel), on garde un petit historique de vos transcriptions passées dans votre compte pour que vous puissiez les rouvrir. La transcription anonyme ne garde aucun historique.",
        ],

        moneyHeading: "Comment on gagne de l'argent",
        moneyBody: [
          "Mictoo est financé par la publicité display. On a candidaté à Google AdSense et on prévoit d'afficher de la pub sur les pages marketing (pas dans le flux de l'outil lui-même). La pub couvre nos factures d'hébergement et d'API.",
          "Au-delà de la pub, on construit un petit tier Pro pour les utilisateurs qui ont besoin de fichiers plus longs, d'upload en lot ou de diarisation de locuteurs quand on l'aura sortie. Le tier gratuit ne va pas disparaître. Le tier gratuit existe parce que la plupart des gens ont juste besoin de transcrire un fichier de temps en temps, et pour ça ils ne devraient pas avoir à payer un abonnement mensuel.",
          "On ne vend pas vos données. On n'a pas de données à vendre, parce qu'on ne stocke ni vos fichiers ni vos transcriptions. La seule chose que les tiers voient de vous, c'est du ciblage publicitaire standard (localisation, intérêts généraux), géré par AdSense côté Google.",
        ],

        principlesHeading: 'Nos principes',
        principles: [
          { label: 'Gratuit.', body: "Aucun frais caché, aucune période d'essai, pas de carte bancaire pour l'outil principal." },
          { label: 'Privé.', body: 'Vos fichiers ne sont jamais stockés. Ils sont traités et immédiatement supprimés.' },
          { label: 'Simple.', body: 'Une page, un outil, zéro friction.' },
          { label: 'Précis.', body: "Nous utilisons le meilleur modèle d'IA disponible pour la qualité de transcription." },
        ],

        editorialHeading: 'Ce qu\'on ne fera pas',
        editorialBullets: [
          { label: 'Pas de dark patterns.', body: "Pas de faux compteurs de décompte, pas de « votre fichier expire dans 60 secondes, payez pour télécharger », pas de murs d'email au milieu du flux d'upload." },
          { label: 'Pas de bait-and-switch sur les prix.', body: "Le tier gratuit est vraiment gratuit. On ne va pas rétroactivement verrouiller des fonctions qui étaient gratuites avant." },
          { label: 'Pas de revente de transcriptions.', body: "On ne stocke pas vos transcriptions. On n'a pas de licence « données d'entraînement » glissée dans les conditions." },
          { label: 'Pas de régies publicitaires douteuses.', body: "On utilise Google AdSense, pas des régies qui remplacent l'UI du navigateur ou détournent le bouton Retour." },
          { label: 'Pas de faux avis.', body: "Si vous voyez Mictoo sur un site d'avis, c'est arrivé là organiquement. On ne paie pas pour le placement et on n'écrit pas nos propres avis." },
        ],

        contactHeading: 'Nous contacter',
        contactPrefix: 'Une question, un retour ou une suggestion ?',
        contactCtaLabel: 'Contactez-nous',
        contactSuffix: ' ou écrivez à',
      }}
    />
  )
}
