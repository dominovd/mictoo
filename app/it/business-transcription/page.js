import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'ko': 'https://mictoo.com/ko/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: 'Trascrizione business — strumento gratuito per meeting e call | Mictoo',
  description:
    'Trascrizione business gratuita. Call vendita, customer interview, focus group, riunioni del consiglio, conferenze. Carica e ottieni una trascrizione IA pulita in pochi secondi. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/business-transcription', languages: LANGS },
}

export default function ItBusinessPage() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="Vendite · Ricerca · Compliance · Gratis"
      h1={
        <>
          Trascrizione business
          <br />
          <span className="text-brand-600">Audio business in testo, gratis</span>
        </>
      }
      subtitle="Trasforma qualsiasi audio business in testo pulito. Call vendita, customer interview, focus group, conferenze, riunioni del consiglio. Senza registrazione, senza tariffa al minuto."
      howItWorks={[
        {
          icon: '🎙️',
          title: 'Rilascia l\'audio o il video',
          desc: 'MP3 da un registratore di chiamate, M4A da un telefono, MP4 da una videoconferenza, WAV da un registratore da campo. Call vendita da Gong, registrazione Zoom di customer interview, M4A di riunione consiglio. Tutto va bene.',
        },
        {
          icon: '⚡',
          title: 'L\'IA trascrive',
          desc: 'Whisper large-v3 processa l\'audio. Una call di 30 minuti finisce in circa un minuto. Un meeting di 60 minuti in poco meno di due.',
        },
        {
          icon: '📋',
          title: 'Prendi la trascrizione',
          desc: 'Leggi, copia o scarica come TXT o SRT. Incolla nel tuo CRM, research repository, doc di progetto o archivio compliance.',
        },
      ]}
      whyUse={{
        title: 'Perché Mictoo per audio business',
        bullets: [
          {
            title: 'Stessa precisione delle opzioni costose',
            desc: 'Whisper large-v3 è il modello dietro molti strumenti enterprise di trascrizione a pagamento. Lo facciamo girare senza il costo della licenza per seat.',
          },
          {
            title: 'Funziona per uso sporadico',
            desc: 'Se trascrivi una call vendita a settimana, è uno spreco pagare il seat mensile di un tool enterprise. Gratis senza contatore al minuto si adatta al pattern di uso sporadico.',
          },
          {
            title: 'Oltre 50 lingue, utile per business internazionale',
            desc: 'Customer interview multilingue, call vendita cross-border, panel con speaker non madrelingua inglesi. Tutti coperti.',
          },
          {
            title: 'Nessun file conservato',
            desc: 'La registrazione va al provider di trascrizione ed è scartata. Per audio business che non vuoi vedere parcheggiato su un server di terze parti, conta.',
          },
          {
            title: 'Export SRT per video editor',
            desc: 'Se il tuo audio business viene da un video (panel di conferenza, town hall), l\'SRT entra direttamente in Premiere, DaVinci o YouTube Studio per il lavoro sui sottotitoli.',
          },
        ],
      }}
      useCases={{
        title: 'Casi d\'uso comuni di trascrizione business',
        items: [
          {
            title: 'Riepiloghi di call vendita',
            desc: 'Gli Account Executive mettono le registrazioni delle call nel CRM accanto al deal. Handoff più rapidi, ricerca citazioni migliore per email di follow-up, coaching più facile per i sales manager.',
          },
          {
            title: 'Customer interview per ricerca prodotto',
            desc: 'Product manager e UX researcher trascrivono conversazioni con clienti per codificare pattern, scrivere user story e costruire research repository.',
          },
          {
            title: 'Trascrizioni focus group',
            desc: 'Le agenzie di ricerca di mercato trascrivono sessioni focus group per analisi. Quello che si codifica è la trascrizione, non il video.',
          },
          {
            title: 'Riunioni del consiglio e leadership offsite',
            desc: 'Le trascrizioni rendono le decisioni aziendali ricercabili e riducono ambiguità mesi dopo. Utile per governance, comunicazione dipendenti e audit trail.',
          },
          {
            title: 'Registrazioni panel da conferenze',
            desc: 'I team marketing e PR trascrivono panel di discussione dove i loro executive hanno parlato. Blog post, grafiche citazioni per social, contenuto sales enablement. Tutto parte dalla trascrizione.',
          },
        ],
      }}
      proTips={{
        title: 'Consigli per la trascrizione business',
        tips: [
          {
            title: 'Per registrazioni di call vendita usa uno strumento tipo Gong o Chorus se puoi',
            desc: 'Questi tool fanno registrazione, trascrizione e logging CRM insieme. Mictoo è la scelta giusta per trascrizione occasionale, non per un\'operazione vendite ad alto volume.',
          },
          {
            title: 'Nelle customer interview ottieni il consenso e spiega come sarà usato l\'audio',
            desc: '"Sto registrando questa conversazione così non devo prendere appunti. L\'audio sarà trascritto e resta nel nostro research repository." In molte giurisdizioni è anche un requisito legale per qualsiasi registrazione di call.',
          },
          {
            title: 'Usa un microfono decente, specialmente per il cliente',
            desc: 'Le voci dei clienti catturate via linea telefonica si trascrivono il 5-10% meno precise delle call dial-in con USB headset lato cliente. Per interview di valore, spedisci un headset prima della call.',
          },
          {
            title: 'Taglia lo small talk prima di caricare per risparmiare budget di dimensione file',
            desc: 'La maggior parte delle call business iniziano con 2-5 minuti di meteo e convenevoli. Taglialo via in Audacity prima di caricare se il file è vicino al limite.',
          },
          {
            title: 'Scegli la lingua manualmente per call internazionali',
            desc: 'Se una call vendita apre in inglese ma passa al francese, il rilevamento automatico può confondersi. Scegli la lingua dominante manualmente.',
          },
          {
            title: 'Per audio business confidenziale non usare trascrizione cloud, nemmeno la nostra',
            desc: 'Conversazioni HR, discussioni M&A, call legali, qualsiasi cosa coperta da privilegio. Usa un\'installazione locale di Whisper. Stesso modello, gira offline, nessuna elaborazione di terze parti.',
          },
        ],
      }}
      faq={[
        {
          q: 'Mictoo è adatto per uso business?',
          a: 'Per trascrizione occasionale (call vendita, interview, panel) sì. Per operazioni ad alto volume (un team vendite che trascrive 50 call al giorno), uno strumento dedicato come Gong o Chorus calza meglio perché impacchetta integrazione CRM, workflow di coaching e analytics di team.',
        },
        {
          q: 'Il mio audio business viene conservato sui vostri server?',
          a: 'No. Il file va al nostro provider di trascrizione (Groq, con OpenAI come backup) ed è scartato dopo l\'elaborazione. Non conserviamo né l\'audio né la trascrizione.',
        },
        {
          q: 'È conforme al GDPR?',
          a: 'Non conserviamo audio o trascrizione dopo che lasci la pagina. Siamo in Europa, e i nostri provider (Groq US, OpenAI US) hanno firmato DPA. Per la tua situazione GDPR specifica (obblighi del titolare, base giuridica per le registrazioni), consulta la nostra privacy policy e il tuo responsabile della protezione dati.',
        },
        {
          q: 'Posso usarlo per registrare call con clienti UE o California?',
          a: 'Puoi usare la trascrizione. La registrazione in sé richiede in molte giurisdizioni il consenso dell\'altra parte (two-party consent in California e parti UE). Ottieni il consenso prima di registrare.',
        },
        {
          q: 'Quanto è precisa la trascrizione per nomi propri e nomi aziendali?',
          a: 'Meno precisa delle parole comuni. Whisper non sa il nome del tuo cliente, il nome del prodotto o la terminologia specifica della tua azienda. Aspettati di sistemarlo manualmente. Il resto della trascrizione sarà solido.',
        },
        {
          q: 'Avrò etichette dei parlanti (Venditore vs. Cliente)?',
          a: 'Non automaticamente. Per call a 2 parlanti aggiungi etichette manualmente in base alla conversazione. Per call multi-party con tracce audio separate per parlante, trascrivi ogni traccia separatamente.',
        },
        {
          q: 'Come si confronta con Gong, Chorus o Fireflies?',
          a: 'Quelle sono piattaforme complete per call vendita con integrazione CRM, coaching automatico, tagging deal stage e analytics chiamate. Noi siamo pura trascrizione, nessuna integrazione, nessuno strato coaching. Più economico (gratis), molto più stretto in scope. Usa quelli se ti serve la piattaforma completa. Usa noi se ti serve solo il testo.',
        },
        {
          q: 'Posso trascrivere una call business confidenziale?',
          a: 'Per call business non sensibili sì. Per quelle confidenziali (HR, legali, M&A, qualsiasi cosa privilegiata) evita qualsiasi trascrizione cloud, inclusa la nostra. Usa invece un\'installazione locale di Whisper.',
        },
        {
          q: 'Quanto ci mette a trascrivere una call business?',
          a: 'Circa l\'1-2% della durata audio. Una call di 30 minuti finisce in circa 30-60 secondi.',
        },
        {
          q: 'Quali formati di output ci sono?',
          a: 'Testo semplice (TXT) e SRT (file sottotitoli con timecode). Copia negli appunti funziona anche per incollare direttamente in un CRM o documento.',
        },
        {
          q: 'Posso caricare più call vendita in batch?',
          a: 'Non ancora con un click. Adesso carichi un file alla volta. Il batch è in roadmap per il futuro piano Pro.',
        },
        {
          q: 'E se il mio audio business supera i 60 minuti?',
          a: 'Dividilo in pezzi sotto i 60 minuti. Le trascrizioni si possono ricomporre dopo.',
        },
      ]}
      relatedLinks={[
        { href: '/it/interview-transcription', label: 'Trascrizione intervista', desc: 'Per conversazioni uno-a-uno e ricerca qualitativa.' },
        { href: '/it/meeting-transcription', label: 'Trascrizione meeting', desc: 'Per qualsiasi registrazione di meeting, qualsiasi piattaforma.' },
        { href: '/it/zoom-transcription', label: 'Trascrizione Zoom', desc: 'Per call registrate con Zoom.' },
        { href: '/it/teams-meeting-transcription', label: 'Trascrizione Teams', desc: 'Per call Microsoft Teams.' },
      ]}
    />
  )
}
