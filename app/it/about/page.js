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
  title: 'Chi è Mictoo — strumento gratuito di trascrizione IA',
  description:
    'Chi c\'è dietro Mictoo, uno strumento gratuito di trascrizione audio e video basato su IA. Come funziona, come guadagniamo, e cosa facciamo (e non facciamo) con i tuoi file.',
  alternates: { canonical: 'https://mictoo.com/it/about', languages: LOCALE_ALTERNATES },

  openGraph: {
    title: "Chi è Mictoo — strumento gratuito di trascrizione IA",
    description: "Chi c\\'è dietro Mictoo, uno strumento gratuito di trascrizione audio e video basato su IA. Come funziona, come guadagniamo, e cosa facciamo (e non facciamo) con i tuoi file.",
    url: "https://mictoo.com/it/about",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chi è Mictoo — strumento gratuito di trascrizione IA",
    description: "Chi c\\'è dietro Mictoo, uno strumento gratuito di trascrizione audio e video basato su IA. Come funziona, come guadagniamo, e cosa facciamo (e non facciamo) con i tuoi file.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItAboutPage() {
  return (
    <AboutLayout
      contactHref="/it/contact"
      strings={{
        h1: 'Chi è Mictoo',
        lead:
          'Mictoo è uno strumento gratuito di trascrizione audio e video senza registrazione, costruito per chiunque abbia bisogno di trasformare il parlato in testo in modo rapido e preciso.',
        ourWhy:
          "Abbiamo costruito Mictoo perché una buona trascrizione non dovrebbe richiedere un abbonamento, un account o competenze tecniche. Rilascia il file, ottieni il testo. Fine.",

        whoBuiltHeading: 'Chi c\'è dietro Mictoo',
        whoBuiltBody: [
          'Mictoo è un progetto indie, costruito e gestito da un piccolo team che ha passato gli ultimi dieci anni a lavorare su SEO, contenuti e strumenti per sviluppatori. Non siamo una startup finanziata da VC a caccia di un miliardo di utenti. Non siamo nemmeno un side project di un gigante della trascrizione che cerca di conquistare il segmento free tier. Siamo persone che usano gli strumenti di trascrizione e si sono stancate del fatto che ogni opzione fosse chiusa, lenta o ostile all\'utente.',
          'Se vuoi raggiungere direttamente le persone dietro il sito, l\'email in fondo a questa pagina arriva in una vera casella di posta. Ogni messaggio viene letto.',
        ],

        whatPowersHeading: 'Cosa muove Mictoo',
        whatPowersBody:
          'Mictoo gira su Whisper di OpenAI, lo stesso modello di riconoscimento vocale usato in ChatGPT. Whisper large-v3 è stato addestrato su 680.000 ore di audio multilingua. Supporta oltre 50 lingue con rilevamento automatico ed è considerato il più forte modello open di riconoscimento vocale disponibile. Eseguiamo Whisper tramite l\'API di Groq ospitata negli USA (whisper-large-v3) per velocità ed efficienza di costo, con l\'API Whisper di OpenAI come fallback automatico se Groq non è disponibile. I file vengono streamati direttamente al provider di trascrizione e non vengono mai conservati sui server di Mictoo. Né Groq né OpenAI usano l\'audio API per addestrare modelli, e OpenAI conserva i dati API al massimo per 30 giorni per monitoraggio anti-abuso prima della cancellazione.',

        securityHeading: 'Sicurezza e cosa succede al tuo file',
        securityBody: [
          'Il tuo file audio o video viene caricato su Vercel Blob Storage, streamato al provider di trascrizione, trascritto e cancellato. Tutto il giro dura meno di un minuto per la maggior parte dei file, e alla fine non c\'è copia del tuo file sulla nostra infrastruttura.',
          'Non conserviamo neanche la tua trascrizione. Vive nella tab del browser. Se vuoi tenerla, clicca il pulsante download. Quando chiudi la tab, non abbiamo alcun record di cosa hai trascritto. L\'unica cosa che logghiamo è un contatore anonimo di quanti file sono stati processati, per tracciare l\'uso e pagare i nostri provider.',
          'Se sei loggato (gratis, opzionale), teniamo una piccola cronologia delle tue trascrizioni passate nel tuo account, così puoi riaprirle. La trascrizione anonima non tiene cronologia.',
        ],

        moneyHeading: 'Come guadagniamo',
        moneyBody: [
          'Mictoo si finanzia con pubblicità display. Abbiamo fatto domanda a Google AdSense e prevediamo di mostrare annunci sulle pagine marketing (non nel flow effettivo dello strumento). La pubblicità copre le nostre bollette di hosting e API.',
          'Oltre alla pubblicità, stiamo costruendo un piccolo piano Pro per utenti che hanno bisogno di file più lunghi, upload in batch o diarizzazione speaker, una volta che riusciamo a consegnarli. Il free tier non sparirà. Il free tier esiste perché la maggior parte della gente ha bisogno di trascrivere un file ogni tanto e non dovrebbe dover pagare un abbonamento mensile per farlo.',
          'Non vendiamo i tuoi dati. Non abbiamo dati da vendere, perché non conserviamo i tuoi file o trascrizioni. L\'unica cosa che terze parti vedono di te è il targeting pubblicitario standard (località, interessi generici) che AdSense gestisce dal lato Google.',
        ],

        principlesHeading: 'I nostri principi',
        principles: [
          { label: 'Gratis.', body: 'Nessun costo nascosto, nessuna prova, nessuna carta di credito per lo strumento principale.' },
          { label: 'Privato.', body: 'I tuoi file non vengono mai conservati. Vengono processati e cancellati immediatamente.' },
          { label: 'Semplice.', body: 'Una pagina, uno strumento, zero attrito.' },
          { label: 'Preciso.', body: 'Usiamo il miglior modello IA disponibile per qualità di trascrizione.' },
        ],

        editorialHeading: 'Cosa non faremo',
        editorialBullets: [
          { label: 'Niente dark pattern.', body: 'Nessun timer countdown finto, nessun "il tuo file scade tra 60 secondi, paga per scaricare", nessun muro email a metà del flow di upload.' },
          { label: 'Niente bait-and-switch sui prezzi.', body: 'Il free tier è davvero gratis. Non limiteremo retroattivamente funzioni che prima erano gratuite.' },
          { label: 'Niente rivendita di trascrizioni.', body: 'Non conserviamo le tue trascrizioni. Non abbiamo una licenza "dati di training" nascosta nei termini.' },
          { label: 'Niente network pubblicitari ingannevoli.', body: 'Usiamo Google AdSense, non network che sostituiscono l\'UI del browser o dirottano il pulsante indietro.' },
          { label: 'Niente recensioni finte.', body: 'Se vedi Mictoo su un sito di recensioni, ci è arrivato organicamente. Non paghiamo per piazzamenti e non scriviamo le nostre recensioni.' },
        ],

        contactHeading: 'Contatti',
        contactPrefix: 'Feedback, richiesta funzione o domanda?',
        contactCtaLabel: 'Scrivici',
        contactSuffix: ' oppure manda una mail a',
      }}
    />
  )
}
