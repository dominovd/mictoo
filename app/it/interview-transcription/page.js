import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'pt': 'https://mictoo.com/pt/interview-transcription',
  'pl': 'https://mictoo.com/pl/interview-transcription',
  'ja': 'https://mictoo.com/ja/interview-transcription',
  'ko': 'https://mictoo.com/ko/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: 'Trascrizione intervista — generatore gratuito IA | Mictoo',
  description: 'Trascrizione intervista gratuita con IA. Carica la registrazione (MP3, M4A, MP4, WAV) e ottieni una trascrizione pulita con timecode in pochi secondi. Costruito per giornalisti e ricercatori.',
  alternates: { canonical: 'https://mictoo.com/it/interview-transcription', languages: LANGS },
}

export default function ItInterviewPage() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="Giornalismo · Ricerca · Gratis"
      h1={<>Trascrizione intervista<br /><span className="text-brand-600">Trascrizioni intervista gratuite</span></>}
      subtitle="Trasforma qualsiasi registrazione intervista in testo pulito e citabile. Per giornalisti, ricercatori, podcaster, team di recruiting. Senza registrazione, senza tariffa al minuto, senza email."
      howItWorks={[
        { icon: '🎙️', title: 'Rilascia l\'audio intervista', desc: 'MP3 da un registratore vocale, M4A da un telefono, MP4 da una videochiamata, WAV da un registratore da campo. Tutto va bene.' },
        { icon: '⚡', title: 'L\'IA trascrive', desc: 'Whisper large-v3 legge l\'audio. Un\'intervista di 30 minuti di solito finisce in circa un minuto.' },
        { icon: '📋', title: 'Leggi, modifica, esporta', desc: 'Sfoglia la trascrizione con timecode. Sistema nomi o gergo sbagliati inline. Scarica come TXT per note, SRT per video, o copia nel software di coding.' },
      ]}
      whyUse={{ title: 'Perché Mictoo per la trascrizione interviste', bullets: [
        { title: 'Whisper gestisce bene le interviste', desc: 'Singole registrazioni con due voci e botta-risposta chiara sono il caso più pulito per il riconoscimento vocale. La maggior parte delle interviste arriva al 90-95% di precisione al primo passaggio.' },
        { title: 'Timecode per citazione e ricerca citazioni', desc: 'Ogni riga nell\'export SRT ha un timecode. Quando devi verificare una citazione o tornare a un momento preciso della registrazione, il timecode ti dice esattamente dove.' },
        { title: 'Nessun costo per intervista', desc: 'Alcuni servizi di trascrizione fanno pagare al minuto o per intervista. Noi no. Trascrivine una o cinquanta, il prezzo è lo stesso (gratis).' },
        { title: 'Oltre 50 lingue, anche interviste bilingui', desc: 'Le interviste cross-linguistiche sono comuni in ricerca e giornalismo. Whisper gestisce il code-switching meglio della maggior parte dei servizi.' },
        { title: 'Privacy e protezione fonti', desc: 'Il file va al provider di trascrizione ed è scartato. Non conserviamo l\'audio. Per materiale fonte sensibile, conta.' },
      ]}}
      useCases={{ title: 'Chi usa trascrizioni intervista', items: [
        { title: 'Giornalismo e scrittura feature', desc: 'I reporter trascrivono le interviste per citare con precisione e per scorrere conversazioni lunghe alla ricerca del materiale più utile. Un\'intervista di 60 minuti spesso diventa 3-5 citazioni chiave nel pezzo pubblicato.' },
        { title: 'Ricerca qualitativa e studi accademici', desc: 'I ricercatori trascrivono interviste semi-strutturate per codificare e analizzare in strumenti come NVivo, Atlas.ti o MAXQDA. La trascrizione è il dataset.' },
        { title: 'Interviste podcast', desc: 'I conduttori trascrivono interviste con ospiti per show notes, post blog episodio e grafiche citazioni per social. L\'audio raggiunge un pubblico, il testo ne raggiunge un altro via search.' },
        { title: 'Recruiting e screening candidati', desc: 'Recruiter e hiring manager trascrivono le interviste per condividerle col team. Più facile di un video per recensori in fusi orari diversi. Più facile confrontare note quando tutti hanno lo stesso testo.' },
        { title: 'User research e customer interview', desc: 'I team prodotto trascrivono conversazioni con client per trovare pattern. La trascrizione va nel research repository (Dovetail, Marvin o un Notion condiviso).' },
      ]}}
      proTips={{ title: 'Consigli per trascrivere interviste', tips: [
        { title: 'Usa un microfono vero, anche per l\'intervista al telefono', desc: 'Un lavalier o USB per l\'intervistato in presenza, e cuffie decenti per l\'intervistatore al telefono. La qualità della registrazione è il singolo fattore più grande nella precisione trascrizione.' },
        { title: 'Registra in uno spazio tranquillo', desc: 'Le interviste in caffetteria stanno bene in camera e si trascrivono male. Musica di fondo e chiacchiere degradano la precisione più di quanto la gente pensi.' },
        { title: 'Per interviste a due voci, trascrivi tutta la registrazione poi aggiungi etichette parlante manualmente', desc: 'Whisper non fa diarizzazione. Per un\'intervista pulita botta-risposta, aggiungere "Intervistatore:" e "Fonte:" richiede circa 5 minuti per ogni 30 minuti di intervista.' },
        { title: 'Se hai tracce audio separate (Riverside, SquadCast), trascrivi ognuna separatamente', desc: 'Allora ottieni attribuzione pulita senza indovinare. Alcuni registratori di ricerca catturano due microfoni in due canali di un file stereo. Puoi dividerlo in due file mono prima.' },
        { title: 'Salva la trascrizione con data e nome fonte', desc: 'Un file trascrizione chiamato 2026-05-25-jane-smith.txt è più facile da trovare sei mesi dopo di transcript-final-v2.txt.' },
        { title: 'Modifica le prime 50 righe per precisione, lascia il resto', desc: 'La gente scorre le trascrizioni. La parte iniziale conta di più. Oltre, sistema solo le citazioni che pensi di usare.' },
        { title: 'Imposta la lingua manualmente se l\'intervista non è in inglese', desc: 'Il rilevamento automatico funziona per la maggior parte dei file, ma un falso-inizio di 5 secondi all\'inizio può fuorviarlo. Scegliere la lingua esplicitamente è più affidabile.' },
      ]}}
      faq={[
        { q: 'È abbastanza preciso per citazioni giornalistiche?', a: 'Per citazione letterale, dovresti sempre verificare contro l\'audio. Whisper azzecca il 90-95% delle parole su audio intervista pulito. Il 5-10% che sbaglia include spesso nomi, termini tecnici e parlato sovrapposto. Usa i timecode SRT per tornare alla registrazione per qualsiasi citazione che pubblichi.' },
        { q: 'Avrò etichette dei parlanti?', a: 'Non automaticamente. Le aggiungi in base al flusso conversazione. Per un\'intervista a 2 parlanti è veloce. Per panel o focus group, pianifica più tempo o carica la traccia di ogni parlante separatamente se le hai.' },
        { q: 'Posso trascrivere un\'intervista in un\'altra lingua?', a: 'Sì, oltre 50 lingue con rilevamento automatico. Per interviste sotto i 5 minuti o interviste non-inglesi che iniziano con chiacchiere in inglese, scegli la lingua manualmente.' },
        { q: 'La mia intervista è di 90 minuti. Cosa faccio?', a: 'Dividila in pezzi sotto il cap di 60 minuti. La pausa naturale è dove la conversazione si ferma (caffè a metà intervista, cambio argomento).' },
        { q: 'Quanto sono precisi termini tecnici e nomi propri?', a: 'Meno precisi del vocabolario comune. Whisper non sa il nome dell\'azienda della tua fonte, il termine medico che ha usato o il software specifico che ha menzionato. Aspettati di sistemarli manualmente. Il resto della trascrizione sarà solido.' },
        { q: 'L\'audio viene conservato?', a: 'No. Il file va al provider di trascrizione (Groq, con OpenAI come backup), viene processato, poi scartato. Non conserviamo l\'audio sui nostri server.' },
        { q: 'È conforme alle politiche di etica della ricerca?', a: 'La maggior parte dei protocolli di ricerca approvati IRB richiede di sapere dove l\'audio viene processato. I nostri provider processano negli USA. Non conserviamo. Per conformità IRB specifica, documenta il workflow e verifica col tuo IRB.' },
        { q: 'Posso importare la trascrizione in NVivo, Atlas.ti o Dedoose?', a: 'Sì. Scarica come TXT e importa nel tuo strumento di analisi qualitativa. La trascrizione è testo semplice, nessun formato speciale necessario.' },
        { q: 'Quanto ci mette la trascrizione?', a: 'Circa 1-2% della durata audio. Un\'intervista di 30 minuti finisce in circa 60 secondi.' },
        { q: 'E se l\'intervista ha qualità audio scadente?', a: 'Passala prima per uno strumento denoise (Audacity Noise Reduction o Adobe Podcast Enhance). Poi carica la versione pulita. Input migliore dà output notevolmente migliore.' },
        { q: 'Posso trascrivere un\'intervista registrata sul telefono?', a: 'Sì. iPhone Voice Memos salva come M4A, i registratori vocali Android di solito come M4A o MP3. Entrambi funzionano. AirDrop o email il file al computer, poi carica qui.' },
        { q: 'I timecode nell\'SRT corrisponderanno esattamente alla registrazione originale?', a: 'Sì, al millisecondo. I timecode SRT riflettono il tempo reale nel file audio. Funzionano per tornare a un momento specifico in qualsiasi player audio o video.' },
      ]}
      relatedLinks={[
        { href: '/it/podcast-transcription', label: 'Trascrizione podcast', desc: 'Per interviste podcast e conversazioni host.' },
        { href: '/it/timestamped-transcription', label: 'Trascrizione con timecode', desc: 'Per timecode per parola o frase.' },
        { href: '/it/voice-memo-to-text', label: 'Memo vocale in testo', desc: 'Per interviste registrate al telefono.' },
        { href: '/it/business-transcription', label: 'Trascrizione business', desc: 'Per call vendita, customer call, focus group.' },
      ]}
    />
  )
}
