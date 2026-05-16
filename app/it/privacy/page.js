import InfoSectionsLayout from '@/components/InfoSectionsLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/privacy',
  'fr': 'https://mictoo.com/fr/privacy',
  'de': 'https://mictoo.com/de/privacy',
  'es': 'https://mictoo.com/es/privacy',
  'ru': 'https://mictoo.com/ru/privacy',
  'it': 'https://mictoo.com/it/privacy',
  'x-default': 'https://mictoo.com/privacy',
}

export const metadata = {
  title: 'Informativa sulla privacy — Mictoo',
  description: 'Informativa sulla privacy di Mictoo. Non memorizziamo i tuoi file audio né le trascrizioni.',
  alternates: { canonical: 'https://mictoo.com/it/privacy', languages: LOCALE_ALTERNATES },
}

export default function ItPrivacyPage() {
  return (
    <InfoSectionsLayout
      h1="Informativa sulla privacy"
      lastUpdated="Ultimo aggiornamento: maggio 2026"
      sections={[
        {
          heading: '1. Cosa raccogliamo',
          body: "Mictoo non richiede un account e non raccoglie dati personali. Quando carichi un file, il tuo browser lo invia direttamente a Vercel Blob, lo storage di file di Vercel ospitato negli USA. Il file resta lì brevemente affinché il nostro server possa inoltrarlo all'API Whisper di Groq (ospitata negli USA) per la trascrizione, con l'API Whisper di OpenAI tenuta come fallback automatico se Groq è momentaneamente non disponibile. Il file viene automaticamente cancellato da Vercel Blob non appena la trascrizione termina — di solito entro un minuto. Un job orario di pulizia rimuove eventuali upload residui non eliminati subito. Mictoo non conserva alcuna copia permanente del tuo audio, video o della trascrizione sui propri server.",
        },
        {
          heading: '2. Elaborazione dei file e nostro provider IA',
          body: "I file vengono trasmessi via HTTPS all'API Whisper di Groq ed elaborati in tempo reale su infrastruttura situata negli USA. Secondo la policy sui dati di Groq, il tuo audio non viene utilizzato per l'addestramento dei modelli. Nel raro caso in cui Groq non sia disponibile, la richiesta viene reindirizzata automaticamente all'API Whisper di OpenAI; OpenAI non utilizza i dati API per l'addestramento e li conserva per un massimo di 30 giorni a fini di monitoraggio anti-abuso prima dell'eliminazione. Mictoo non conserva alcuna copia dell'audio o della trascrizione una volta terminata la sessione di navigazione.",
        },
        {
          heading: '3. Analytics e pubblicità',
          body: (
            <>
              Potremmo mostrare annunci tramite Google AdSense. Google può usare cookie per offrire annunci pertinenti. Puoi disattivarli tramite{' '}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Google Ad Settings</a>
              . Potremmo usare analytics anonimi (ad esempio conteggio visualizzazioni pagina) per capire l'utilizzo. Non vengono raccolti dati personali identificativi.
            </>
          ),
        },
        {
          heading: '4. Cookie',
          body: 'Mictoo non imposta cookie propri. Servizi di terze parti come Google AdSense possono impostare i propri cookie sul tuo dispositivo.',
        },
        {
          heading: '5. Privacy dei minori',
          body: "Mictoo non è rivolto a bambini di età inferiore ai 13 anni. Non raccogliamo consapevolmente dati di minori.",
        },
        {
          heading: '6. Contatti',
          body: (
            <>
              Domande sulla policy? Scrivici a{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>.
            </>
          ),
        },
      ]}
    />
  )
}
