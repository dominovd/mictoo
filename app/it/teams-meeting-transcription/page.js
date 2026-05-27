import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
  'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
  'ko': 'https://mictoo.com/ko/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Trascrizione Microsoft Teams — trascrivi le riunioni | Mictoo',
  description: 'Trascrizione gratuita Microsoft Teams. Carica la registrazione (MP4) da OneDrive o SharePoint e ottieni una trascrizione IA pulita in pochi secondi. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/teams-meeting-transcription', languages: LANGS },
}

export default function ItTeamsPage() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="TEAMS · ONEDRIVE · GRATIS"
      h1={<>Trascrizione Microsoft Teams<br /><span className="text-brand-600">Trascrizione gratuita riunioni Teams</span></>}
      subtitle="Trasforma la tua registrazione Teams in testo pulito. Rilascia l'MP4 da OneDrive o SharePoint, ottieni la trascrizione in pochi secondi. Senza registrazione, senza tariffa al minuto."
      howItWorks={[
        { icon: '☁️', title: 'Scarica da OneDrive o SharePoint', desc: 'Le registrazioni Teams sono salvate nel OneDrive dell\'organizzatore (per riunioni non-canale) o sul sito SharePoint (per riunioni in canale). Scarica come MP4. Per riunioni lunghe estrai prima l\'audio.' },
        { icon: '⚡', title: 'Rilascia il file', desc: 'Estraiamo l\'audio dall\'MP4 e lo mandiamo a Whisper large-v3. Una riunione di 30 minuti finisce in circa un minuto.' },
        { icon: '📋', title: 'Ottieni la trascrizione', desc: 'Leggi nel browser, copia o scarica come TXT o SRT. Sistema nomi o gergo sbagliati nell\'editor prima dell\'export.' },
      ]}
      whyUse={{ title: 'Perché Mictoo per le riunioni Teams', bullets: [
        { title: 'Funziona senza licenza Microsoft 365 specifica per trascrizione', desc: 'Finché hai il file della registrazione, puoi trascriverlo qui. Niente Teams Premium o piani Office specifici necessari.' },
        { title: 'Migliore copertura non-inglese e accenti', desc: 'La trascrizione Microsoft Teams funziona bene in inglese e nelle grandi lingue europee occidentali. Whisper large-v3 copre oltre 50 lingue con gestione più forte di accenti e conversazioni bilingui.' },
        { title: 'Gratis, nessun contatore al minuto', desc: 'La trascrizione Teams è inclusa nella licenza ma limitata da feature gate. Mictoo non ha cap per riunione né limite mensile di minuti.' },
        { title: 'Export SRT per editor video', desc: 'Il transcript Teams vive nell\'app Teams o si scarica come VTT. Noi esportiamo sia TXT che SRT pulito, drop-in compatibile con Premiere, DaVinci, CapCut e YouTube Studio.' },
        { title: 'Privacy di default', desc: 'Il file va al provider di trascrizione, viene processato, poi scartato. Non conserviamo l\'audio della tua riunione.' },
      ]}}
      useCases={{ title: 'Per cosa la gente trascrive riunioni Teams', items: [
        { title: 'Verbali di riunioni di progetto', desc: 'Rilascia la trascrizione in Confluence, Notion o una pagina SharePoint. Chi si è perso la call legge il testo in 5 minuti invece di guardare 60 minuti di video.' },
        { title: 'Revisione chiamate client per team account', desc: 'Salva la trascrizione accanto al deal in Salesforce, Dynamics o HubSpot. Il recupero citazioni per email follow-up richiede secondi.' },
        { title: 'Log decisioni cross-team', desc: 'Le grandi decisioni prese nelle call Teams vengono riassunte nella trascrizione. Utile per governance e audit trail.' },
        { title: 'Call con fornitori e contractor', desc: 'Quando un progetto coinvolge parti esterne, la trascrizione è il record inequivocabile di quello che è stato concordato.' },
        { title: 'Compliance e settori regolamentati', desc: 'Alcuni settori richiedono di conservare certe conversazioni. Le trascrizioni rendono le registrazioni audio cercabili e indicizzabili.' },
      ]}}
      proTips={{ title: 'Consigli per trascrivere Teams', tips: [
        { title: 'Estrai l\'audio dall\'MP4 prima dell\'upload', desc: 'Gli MP4 Teams sono video 720p o 1080p, irrilevante per una trascrizione. Prendi solo l\'audio: ffmpeg -i teams.mp4 -vn -ac 1 -b:a 64k teams.mp3. Un MP4 da 1.5 GB scende a 30 MB o meno.' },
        { title: 'Scarica da OneDrive o SharePoint, non in streaming', desc: 'OneDrive a volte riproduce gli MP4 nel browser. Assicurati di aver effettivamente scaricato il file prima di provare a caricarlo qui. I link condivisione SharePoint non sono il file stesso.' },
        { title: 'Per riunioni oltre 60 minuti, dividi prima dell\'upload', desc: 'Taglia in pezzi da 30 o 45 minuti prima. Le trascrizioni si possono concatenare. Le call Teams lunghe sono comuni e meritano gestione attenta.' },
        { title: 'Silenzia le notifiche di background durante la riunione se puoi', desc: 'Le notifiche desktop Outlook e i suoni chat Teams durante la call finiscono nell\'audio e a volte nella trascrizione. Usa Focus Assist su Windows o Non disturbare su Mac.' },
        { title: 'I microfoni delle sale riunioni hanno bisogno di pulizia', desc: 'Le Teams Rooms con microfoni a soffitto hanno qualità audio variabile. Eco e pickup a distanza danneggiano la precisione. Adobe Podcast Enhance (web gratis) può aiutare con queste registrazioni prima dell\'upload.' },
        { title: 'Per riunioni confidenziali, evita upload esterni', desc: 'Inclusi noi. Per conversazioni HR, legali o di board, preferisci trascrizione on-premise. Il nostro servizio è per riunioni non confidenziali dove l\'elaborazione IA cloud è accettabile.' },
      ]}}
      faq={[
        { q: 'Mictoo funziona con le registrazioni Microsoft Teams?', a: 'Sì. Scarica l\'MP4 da OneDrive (l\'OneDrive del tuo organizzatore per riunioni non-canale) o dal sito SharePoint del canale. Carica su Mictoo. L\'estrazione audio prima accelera per riunioni lunghe.' },
        { q: 'Mi serve Teams Premium o un piano Microsoft 365 specifico?', a: 'Ti serve un piano che ti permetta di registrare riunioni. Una volta che la registrazione è in OneDrive o SharePoint, la trascrizione qui è gratis indipendentemente dalla licenza.' },
        { q: 'La mia registrazione sarà caricata su Microsoft?', a: 'No. Il file va al nostro provider di trascrizione (Groq, con OpenAI come backup) ed è scartato dopo elaborazione. Niente va a Microsoft, Outlook o qualsiasi servizio Microsoft.' },
        { q: 'Come si confronta con la trascrizione nativa Teams?', a: 'La trascrizione Teams nativa va bene per riunioni in inglese se la licenza la include. La nostra è gratis, funziona su più lingue e accenti, ed esporta SRT pulito per editor video.' },
        { q: 'La mia registrazione Teams supera i 60 MB. Cosa faccio?', a: 'Estrai solo l\'audio con ffmpeg o qualsiasi strumento audio. Un MP4 Teams da 1.5 GB scende sotto i 30 MB come audio. Se l\'audio supera i 60 MB, dividi in pezzi.' },
        { q: 'Avrò etichette dei parlanti?', a: 'Non automaticamente. Per una riunione con voci distinte, aggiungi le etichette manualmente in base alla conversazione. Se la riunione è stata registrata con tracce audio separate per parlante (raro per Teams), carica ogni traccia separatamente.' },
        { q: 'Funziona con i messaggi chat Teams?', a: 'No. I messaggi chat restano in Teams. Trascriviamo solo l\'audio. Combina i due tu se ti servono entrambi.' },
        { q: 'Quanto è precisa la trascrizione Teams?', a: 'Per riunioni con buoni microfoni (laptop con cuffie USB), 90-95%. Per riunioni in sale con microfoni a soffitto, 80-90%. Nomi, termini tecnici e acronimi spesso richiedono pulizia.' },
        { q: 'Posso trascrivere una riunione Teams in tempo reale?', a: 'No. Lavoriamo con file registrati. Per real-time durante la riunione, usa la funzione live captions o transcript nativa di Teams.' },
        { q: 'Quali lingue supportate?', a: 'Oltre 50 lingue con rilevamento automatico. Per riunioni sotto i 5 minuti o con intro non vocali (musica waiting room, toni di attesa), scegli la lingua manualmente.' },
        { q: 'Posso esportare la trascrizione in un Word o OneDrive?', a: 'Esportiamo testo semplice (TXT) e SRT. Copia e incolla in Word, o carica tu il TXT in OneDrive. Non abbiamo integrazione Microsoft 365 ancora.' },
        { q: 'È conforme GDPR per riunioni Teams europee?', a: 'Non conserviamo audio o trascrizione sui nostri server dopo che chiudi la pagina. Siamo in Europa, e i nostri provider (Groq US, OpenAI US) hanno DPA firmati. Per domande specifiche di conformità vedi la Privacy Policy o scrivi a info@mictoo.com.' },
      ]}
      relatedLinks={[
        { href: '/it/zoom-transcription', label: 'Trascrizione Zoom', desc: 'Per registrazioni Cloud o locali Zoom.' },
        { href: '/it/google-meet-transcription', label: 'Trascrizione Google Meet', desc: 'Per registrazioni Google Meet.' },
        { href: '/it/meeting-transcription', label: 'Trascrizione riunione', desc: 'Per registrazioni da altre piattaforme.' },
        { href: '/it/business-transcription', label: 'Trascrizione business', desc: 'Per call vendita, interviste e altro audio business.' },
      ]}
    />
  )
}
