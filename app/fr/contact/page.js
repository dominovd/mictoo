import ContactLayout from '@/components/ContactLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/contact',
  'fr': 'https://mictoo.com/fr/contact',
  'de': 'https://mictoo.com/de/contact',
  'es': 'https://mictoo.com/es/contact',
  'ru': 'https://mictoo.com/ru/contact',
  'it': 'https://mictoo.com/it/contact',
  'pt': 'https://mictoo.com/pt/contact',
  'pl': 'https://mictoo.com/pl/contact',
  'ja': 'https://mictoo.com/ja/contact',
  'ko': 'https://mictoo.com/ko/contact',
  'x-default': 'https://mictoo.com/contact',
}

export const metadata = {
  title: 'Contact — Mictoo',
  description: 'Contact Mictoo. info@mictoo.com va dans une vraie boîte humaine. Réponse sous un jour ouvré. Périmètre du support, demandes business et raccourcis FAQ.',
  alternates: { canonical: 'https://mictoo.com/fr/contact', languages: LOCALE_ALTERNATES },
}

export default function FrContactPage() {
  return (
    <ContactLayout
      privacyHref="/fr/privacy"
      strings={{
        h1: 'Nous contacter',
        lead:
          "Une question, un retour ou une suggestion de fonctionnalité ? Nous serions ravis de vous lire. Nous lisons chaque message et essayons de répondre sous un jour ouvré.",
        privacyPrefix: 'Pour les questions de confidentialité, consultez notre',
        privacyLinkLabel: 'Politique de confidentialité',
        privacySuffix: '.',

        responseTimeHeading: 'Temps de réponse',
        responseTimeBody:
          "info@mictoo.com va dans une vraie boîte humaine, pas dans un système de tickets. On répond du lundi au vendredi, heure d'Europe centrale, en général sous un jour ouvré. Si vous écrivez un vendredi soir, comptez sur une réponse lundi. On n'est pas un service de support 24/7 et on ne prétend pas l'être.",

        supportScopeHeading: "Sur quoi on peut vous aider",
        supportScopeItems: [
          { label: 'Rapports de bug.', body: "Quelque chose de cassé dans l'uploader, des transcriptions qui reviennent incohérentes, le SRT qui ne joue pas dans votre éditeur vidéo. Mettez le nom du fichier et l'heure d'upload si vous pouvez." },
          { label: 'Suggestions de fonctionnalité.', body: "Dites-nous ce que vous aimeriez que Mictoo fasse. On ne promet rien, mais on les lit vraiment et on a sorti des fonctions demandées par les utilisateurs." },
          { label: 'Questions de qualité de transcription.', body: "Si un fichier précis est revenu avec une mauvaise précision, envoyez-le (ou décrivez-le) et on aide à diagnostiquer si c'est un souci d'enregistrement ou de modèle." },
          { label: 'Compte ou facturation.', body: "En tier gratuit, il n'y a pas de facturation. Pour le tier Pro (quand il sortira), les questions de billing vont ici aussi." },
          { label: 'Partenariats et intégrations.', body: "Si vous voulez intégrer Mictoo dans votre produit, ou si vous construisez quelque chose de complémentaire, on est ouverts à discuter." },
        ],

        faqShortcutHeading: "Plus rapide que l'email",
        faqShortcutBody: [
          "Si votre question fait partie des courantes, la FAQ de la landing page correspondante a probablement déjà la réponse. Liens rapides : tarifs, limites de taille et de durée, formats supportés et questions de confidentialité sont en bas de n'importe quelle landing (par exemple, sur la page Audio en texte).",
          "Pour tout le reste, l'email est le bon canal.",
        ],

        businessHeading: 'Business et presse',
        businessBody: [
          "Même email : info@mictoo.com. Utilisez [Press] ou [Business] dans le sujet pour qu'on route bien le message. On est ouverts aux interviews sur l'espace indé du SEO et des outils IA en productivité, mais on ne fait pas de placements payés ou de contenu sponsorisé.",
          "Si vous êtes journaliste et écrivez sur les outils de transcription ou l'IA dans les logiciels de productivité, on donnera des réponses directes sur comment Mictoo marche sous le capot, ce que ça coûte de le faire tourner et ce qu'on pense du paysage concurrentiel.",
        ],

        languagesHeading: 'Langues',
        languagesBody:
          "On fournit le support en anglais. Les réponses en russe et en espagnol sont best-effort. Si vous écrivez dans une autre langue, on répondra en anglais sauf si on trouve un membre fluide dans l'équipe.",
      }}
    />
  )
}
