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
  title: 'Contatti — Mictoo',
  description:
    'Contatta Mictoo. info@mictoo.com arriva in una vera casella umana. Risposta entro un giorno lavorativo. Scope del supporto, richieste business e shortcut alle FAQ.',
  alternates: { canonical: 'https://mictoo.com/it/contact', languages: LOCALE_ALTERNATES },

  openGraph: {
    title: "Contatti — Mictoo",
    description: "Contatta Mictoo. info@mictoo.com arriva in una vera casella umana. Risposta entro un giorno lavorativo. Scope del supporto, richieste business e shortcut alle FAQ.",
    url: "https://mictoo.com/it/contact",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contatti — Mictoo",
    description: "Contatta Mictoo. info@mictoo.com arriva in una vera casella umana. Risposta entro un giorno lavorativo. Scope del supporto, richieste business e shortcut alle FAQ.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItContactPage() {
  return (
    <ContactLayout
      privacyHref="/it/privacy"
      strings={{
        h1: 'Contattaci',
        lead:
          'Hai una domanda, un feedback o una richiesta di funzione? Saremo felici di leggerti. Leggiamo ogni messaggio e rispondiamo entro un giorno lavorativo.',
        privacyPrefix: 'Per domande sulla privacy, vedi la nostra',
        privacyLinkLabel: 'privacy policy',
        privacySuffix: '.',

        responseTimeHeading: 'Tempo di risposta',
        responseTimeBody:
          'info@mictoo.com arriva in una vera casella umana, non in un sistema di ticketing. Rispondiamo dal lunedì al venerdì, ora dell\'Europa centrale, di solito entro un giorno lavorativo. Se scrivi venerdì sera, aspettati una risposta lunedì. Non siamo un supporto 24/7 e non facciamo finta di esserlo.',

        supportScopeHeading: 'Su cosa possiamo aiutare',
        supportScopeItems: [
          { label: 'Bug report.', body: 'Qualcosa rotto nell\'uploader, trascrizioni che tornano confuse, l\'SRT che non gira nel tuo video editor. Indica il nome del file e l\'orario di upload se puoi.' },
          { label: 'Richieste di funzione.', body: 'Dicci cosa vorresti che Mictoo facesse. Non promettiamo nulla, ma le leggiamo davvero e abbiamo spedito funzioni che gli utenti hanno richiesto.' },
          { label: 'Domande sulla qualità della trascrizione.', body: 'Se un file particolare è tornato con precisione scadente, mandalo (o descrivilo) e aiutiamo a diagnosticare se è un problema di registrazione o di modello.' },
          { label: 'Account o billing.', body: 'Nel free tier non c\'è billing. Per il piano Pro (quando partirà), le domande billing arrivano qui pure.' },
          { label: 'Partnership e integrazioni.', body: 'Se vuoi integrare Mictoo nel tuo prodotto o costruire qualcosa di complementare, siamo aperti a parlarne.' },
        ],

        faqShortcutHeading: 'Più veloce dell\'email',
        faqShortcutBody: [
          'Se la tua domanda è una di quelle comuni, l\'FAQ sulla landing page giusta probabilmente ha già la risposta. Link rapidi: prezzo, limiti dimensione e durata file, formati supportati e domande privacy sono risposte in fondo a ogni landing page (per esempio sulla pagina Audio in testo).',
          'Per tutto il resto, l\'email è il canale giusto.',
        ],

        businessHeading: 'Richieste business e stampa',
        businessBody: [
          'Stessa email: info@mictoo.com. Usa [Press] o [Business] nell\'oggetto così instradiamo il messaggio bene. Siamo aperti a interviste sul tema SEO indie e strumenti IA nello spazio produttività, ma non facciamo placement a pagamento o contenuti sponsorizzati.',
          'Se sei giornalista che scrive di strumenti di trascrizione o di IA nel software di produttività, ti diamo risposte dirette su come Mictoo funziona sotto il cofano, quanto costa farlo girare e cosa pensiamo della concorrenza.',
        ],

        languagesHeading: 'Lingue',
        languagesBody:
          'Offriamo supporto in inglese. Risposte in russo, italiano e spagnolo sono best-effort. Se scrivi in un\'altra lingua, rispondiamo in inglese a meno che troviamo uno speaker fluente nel team.',
      }}
    />
  )
}
