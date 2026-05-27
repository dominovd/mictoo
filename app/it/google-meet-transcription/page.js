import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'pl': 'https://mictoo.com/pl/google-meet-transcription',
  'ja': 'https://mictoo.com/ja/google-meet-transcription',
  'ko': 'https://mictoo.com/ko/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Trascrizione Google Meet — trascrivi le registrazioni Meet gratis | Mictoo',
  description: 'Trascrizione gratuita Google Meet. Carica la tua registrazione Meet da Drive (MP4 o M4A) e ottieni una trascrizione IA pulita in pochi secondi. Funziona su Google Workspace gratuito.',
  alternates: { canonical: 'https://mictoo.com/it/google-meet-transcription', languages: LANGS },
}

export default function ItGoogleMeetPage() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="GOOGLE MEET · MP4 · GRATIS"
      h1={<>Trascrizione Google Meet<br /><span className="text-brand-600">Trascrivi le registrazioni Meet</span></>}
      subtitle="Trasforma la tua registrazione Google Meet in testo pulito. Rilascia l'MP4 dal tuo Drive, ottieni la trascrizione in pochi secondi. Senza registrazione, senza tariffa al minuto."
      howItWorks={[
        { icon: '☁️', title: 'Scarica da Google Drive', desc: 'Le registrazioni Google Meet sono salvate nel tuo Drive nella cartella "Meet Recordings". Scarica come MP4 (click destro, Download). Per riunioni lunghe estrai prima l\'audio per risparmiare tempo di upload.' },
        { icon: '⚡', title: 'Rilascia il file', desc: 'Estraiamo l\'audio dall\'MP4 e lo mandiamo a Whisper large-v3. Una riunione di 30 minuti finisce in circa un minuto.' },
        { icon: '📋', title: 'Ottieni la trascrizione', desc: 'Leggi nel browser, copia o scarica come TXT o SRT. Sistema le parole sbagliate nell\'editor prima dell\'export.' },
      ]}
      whyUse={{ title: 'Perché Mictoo per Google Meet', bullets: [
        { title: 'Funziona su ogni tier Workspace, anche gratuito', desc: 'La registrazione Meet stessa richiede un tier a pagamento, ma una volta che hai il file, la nostra trascrizione è gratis indipendentemente dal tuo tier Workspace.' },
        { title: 'Migliore supporto non-inglese', desc: 'La trascrizione di Google storicamente è più forte in inglese. Whisper large-v3 copre oltre 50 lingue con rilevamento automatico e gestisce molto meglio accenti, conversazioni bilingui e code-switching.' },
        { title: 'I dati non tornano a Google', desc: 'Se eviti intenzionalmente il lock-in dell\'ecosistema Google per riunioni sensibili, trascrivere qui tiene il testo fuori da Google Workspace.' },
        { title: 'L\'export SRT funziona in qualsiasi editor video', desc: 'La trascrizione di Google ti dà il testo dentro Docs. La nostra esporta SRT pulito, pronto per Premiere, DaVinci o YouTube Studio.' },
        { title: 'Privacy', desc: 'Il file va al provider di trascrizione ed è scartato dopo l\'elaborazione. Niente viene scritto sui nostri server.' },
      ]}}
      useCases={{ title: 'Per cosa la gente trascrive registrazioni Google Meet', items: [
        { title: 'Note riunione cercabili da tutti', desc: 'Rilascia la trascrizione in Google Docs o Notion. Il te futuro non ricorderà cosa è stato deciso alla settimana 14 del progetto. Il testo cercabile aiuta.' },
        { title: 'Recupero asincrono per team distribuiti', desc: 'Chi è in altri fusi orari e ha perso la riunione live legge la trascrizione in minuti, invece di guardare una registrazione di 60 minuti a 1.5x.' },
        { title: 'Revisione chiamate client', desc: 'Account manager trascrivono call chiave con client e salvano il testo nel CRM. Recupero più veloce, migliori handoff.' },
        { title: 'Trascrizioni webinar e town hall', desc: 'Per eventi più grandi registrati su Meet, la trascrizione è quello che pubblichi (accanto alla registrazione) per accessibilità e cercabilità.' },
        { title: '1:1 e conversazioni performance (per il manager)', desc: 'Alcuni manager trascrivono i loro 1:1 per tenere note per il follow-up. Utile, ma sii trasparente col report sul perché.' },
      ]}}
      proTips={{ title: 'Consigli per trascrivere Google Meet', tips: [
        { title: 'Estrai l\'audio dall\'MP4 prima dell\'upload', desc: 'Le registrazioni Meet sono video 720p, che per una trascrizione sono byte sprecati. Prendi solo l\'audio: ffmpeg -i meet.mp4 -vn -ac 1 -b:a 64k meet.mp3. Un MP4 da 1 GB scende a 25 MB o meno.' },
        { title: 'Scarica l\'MP4, non guardarlo in streaming', desc: 'Drive a volte apre gli MP4 nel viewer del browser. Assicurati di aver effettivamente scaricato il file prima di provare a caricarlo qui. I link di condivisione Drive non sono upload di file.' },
        { title: 'Per riunioni oltre i 60 minuti, dividi prima dell\'upload', desc: 'Il nostro cap è 60 minuti per file con login. Taglia l\'audio in pezzi prima. Le trascrizioni si possono concatenare dopo.' },
        { title: 'Silenzia tab e app in background durante la riunione se possibile', desc: 'Una traccia Spotify sotto la voce riunione finisce nella trascrizione come parole casuali. Stesso con suoni di notifica. Non sempre riparabile post-registrazione.' },
        { title: 'Usa un microfono vero, anche cuffie economiche', desc: 'I microfoni integrati dei laptop catturano battitura tastiera, rumore ventole ed eco stanza. Cuffie USB con cavo da 20 dollari trascrivono notevolmente più pulito.' },
        { title: 'Per registrazioni condivise, controlla impostazioni condivisione Drive prima di ricaricarle altrove', desc: 'Se qualcuno ti ha condiviso una registrazione Meet, ricontrolla cosa ti è permesso farci prima di trascriverla per uso esterno.' },
      ]}}
      faq={[
        { q: 'Mictoo funziona con le registrazioni Google Meet?', a: 'Sì. Scarica l\'MP4 dalla tua cartella Drive Meet Recordings, poi carica qui. L\'estrazione solo audio (con ffmpeg o qualsiasi strumento audio) accelera per riunioni lunghe.' },
        { q: 'Mi serve un piano Google Workspace a pagamento?', a: 'Ti serve un piano Workspace a pagamento per registrare un Meet in primo luogo. Una volta che la registrazione è in Drive, trascriverla qui è gratis indipendentemente dal tuo tier Workspace.' },
        { q: 'La mia registrazione verrà caricata di nuovo su Google?', a: 'No. Il file va al nostro provider di trascrizione (Groq, con OpenAI come backup) ed è scartato dopo l\'elaborazione. Niente va a Google o qualsiasi servizio Google.' },
        { q: 'Come si confronta con la trascrizione nativa di Google?', a: 'La nostra è gratis e funziona su ogni tier Workspace. Quella di Google è più comoda se il tuo piano la include e le riunioni sono in inglese. Per non-inglese, accenti o riunioni bilingui, la nostra è più precisa.' },
        { q: 'La mia registrazione Meet supera i 60 MB. Cosa faccio?', a: 'Estrai solo l\'audio con ffmpeg o qualsiasi strumento audio. Un video di 1 GB di solito scende sotto i 30 MB come audio. Se l\'audio stesso supera i 60 MB, dividi in pezzi.' },
        { q: 'Avrò etichette dei parlanti?', a: 'Non automaticamente. Whisper non fa diarizzazione di default. Dovrai aggiungere etichette manualmente. Per una riunione a 4 persone con voci distinte, di solito ci vogliono 5 minuti.' },
        { q: 'Funziona con i messaggi chat Meet?', a: 'No. I messaggi chat sono salvati separatamente da Google nella cartella registrazione Meet. Trascriviamo solo l\'audio. Combina i due tu se ti servono entrambi.' },
        { q: 'Quanto è precisa la trascrizione Google Meet?', a: 'Per audio pulito (buoni microfoni, niente rumore di fondo), 90-95%. Registrazioni in sala con più microfoni o speakerphone scendono a 80-90%. Nomi e termini tecnici spesso richiedono pulizia.' },
        { q: 'Posso trascrivere una diretta Google Meet?', a: 'No. Lavoriamo solo con file registrati, non con stream live. Una volta che lo stream finisce e la registrazione è salvata su Drive, puoi scaricare e trascrivere.' },
        { q: 'Quali lingue supportate?', a: 'Oltre 50 lingue con rilevamento automatico. Per riunioni sotto i 5 minuti o file con intro non vocali, scegli la lingua manualmente per migliori risultati.' },
        { q: 'Posso esportare in un Google Doc?', a: 'Esportiamo testo semplice (TXT) e SRT. Copia e incolla in Google Docs. Non abbiamo integrazione diretta con Drive ancora.' },
        { q: 'Funziona con registrazioni Meet di altre org Workspace?', a: 'Se hai accesso a scaricare il file dal tuo Drive, sì. Trattiamo il file come un MP4. Non controlliamo né ci interessa la sua origine.' },
      ]}
      relatedLinks={[
        { href: '/it/zoom-transcription', label: 'Trascrizione Zoom', desc: 'Per registrazioni Cloud o locali Zoom.' },
        { href: '/it/teams-meeting-transcription', label: 'Trascrizione Teams', desc: 'Per registrazioni Microsoft Teams.' },
        { href: '/it/meeting-transcription', label: 'Trascrizione riunione', desc: 'Per registrazioni da altre piattaforme.' },
        { href: '/it/transcribe-video-to-text', label: 'Video in testo', desc: 'Pagina generica video in testo.' },
      ]}
    />
  )
}
