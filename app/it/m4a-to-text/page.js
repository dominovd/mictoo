import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'pt': 'https://mictoo.com/pt/m4a-to-text',
  'pl': 'https://mictoo.com/pl/m4a-to-text',
  'ja': 'https://mictoo.com/ja/m4a-to-text',
  'ko': 'https://mictoo.com/ko/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4A a Testo: Trascrizione Gratuita di Memo Vocali iPhone e Audio Apple | Mictoo',
  description:
    'Carica un file M4A da Memo Vocali iPhone, GarageBand, Apple Podcasts o FaceTime e ottieni una trascrizione modificabile in pochi secondi. AAC all’interno di MP4, nessuna conversione necessaria.',
  alternates: {
    canonical: 'https://mictoo.com/it/m4a-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'M4A a Testo: Trascrizione di Memo Vocali iPhone e Audio Apple | Mictoo',
    description: 'Carica M4A da Memo Vocali, GarageBand, Apple Podcasts o FaceTime. Trascrizione modificabile in pochi secondi.',
    url: 'https://mictoo.com/it/m4a-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4A a Testo: Trascrizione Gratuita di Memo Vocali iPhone',
    description: 'Carica M4A da Memo Vocali, GarageBand, Apple Podcasts. Trascrizione modificabile in pochi secondi.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItM4aToTextPage() {
  return (
    <FormatPageLayout
      locale="it"
      badge="M4A · AAC · iPhone · Gratuito"
      h1First="M4A a Testo"
      h1Second="Per Memo Vocali iPhone e audio Apple"
      subtitle="M4A è ciò che la tua app Memo Vocali iPhone scrive, ciò che GarageBand esporta e ciò che Apple Podcasts distribuisce. Trascina il file direttamente dal tuo dispositivo, mantieni l’AAC, ottieni una trascrizione con timestamp in pochi secondi."
      highlightFormat="m4a"
      previewFileName="voice-memo.m4a"
      previewWordCount={148}
      previewDurationLabel="6:18"
      previewLines={[
        { t: '0:00',  line: 'Okay, veloce memo vocale prima che dimentichi l’intera idea.' },
        { t: '0:04',  line: 'Quindi l’idea è che prendiamo il flusso di checkout e lo dividiamo in due passaggi chiari invece di un lungo modulo.' },
        { t: '0:13',  line: 'Passo uno, solo email e carta. Passo due, dettagli di spedizione dopo che vedono il numero di conferma.' },
        { t: '0:22',  line: 'Il motivo per cui questo è importante è che il drop-off sull’attuale modulo a pagina singola è di circa il trentotto percento.' },
        { t: '0:32',  line: 'La maggior parte di quel drop-off avviene nella sezione di spedizione, non nell’inserimento della carta, il che è controintuitivo.' },
        { t: '0:42',  line: 'Se spostiamo la spedizione dopo l’acquisto, possiamo probabilmente recuperare dal dodici al quindici percento di quel traffico.' },
        { t: '0:52',  line: 'Dal punto di vista temporale, penso che siano due settimane di frontend, una settimana di backend, forse una settimana di testing.' },
        { t: '1:02',  line: 'Segui il team di checkout domani per vedere se c’è qualcosa che hanno già provato e che ha fallito.' },
      ]}
      whyTitle="Perché Mictoo per la trascrizione M4A"
      whyCards={[
        {
          icon: 'mic',
          title: 'Creato per i Memo Vocali iPhone',
          desc: 'Trascina il .m4a direttamente dal tuo foglio di condivisione Memo Vocali o da iCloud. Nessun problema di formato, nessun passaggio di conversione.',
        },
        {
          icon: 'gear',
          title: 'AAC all’interno di MP4, gestito nativamente',
          desc: 'M4A è audio AAC in un contenitore MP4. Analizziamo la scatola ftyp, estraiamo la traccia AAC e la passiamo a Whisper senza ricodifica.',
        },
        {
          icon: 'sparkles',
          title: 'Riepilogo AI per idee di memo vocali',
          desc: 'Il riepilogo appare accanto alla trascrizione. Trasforma memo di brainstorming confusi in un elenco di azioni conciso.',
        },
        {
          icon: 'globe',
          title: 'Traduci in oltre 50 lingue',
          desc: 'Memo vocale in spagnolo, nota registrata durante una riunione francese, dettatura in giapponese. Traduci in inglese (o qualsiasi obiettivo) dopo la trascrizione.',
        },
      ]}
      scenariosTitle="Quando M4A a testo è la scelta giusta"
      scenarios={[
        {
          icon: 'mic',
          title: 'Memo Vocali iPhone',
          desc: 'Ogni registrazione dall’app Memo Vocali integrata su iPhone o iPad. Idee, note di riunione, clip di interviste, lezioni.',
        },
        {
          icon: 'briefcase',
          title: 'Registrazioni di FaceTime e chiamate',
          desc: 'Audio esportato da FaceTime, chiamate WhatsApp o sessioni Zoom spesso arriva come M4A. Trascina il file per una versione testuale pulita.',
        },
        {
          icon: 'sparkles',
          title: 'Esportazioni da GarageBand e Logic',
          desc: 'Bounc vocali, episodio di podcast o modifica di interviste da GarageBand o Logic Pro. Ottieni una trascrizione per costruire note dello show.',
        },
        {
          icon: 'video',
          title: 'Episodi di Apple Podcasts',
          desc: 'Episodio scaricato da Apple Podcasts (M4A su iOS per impostazione predefinita). Trascrizione per citare, fare riferimento o riutilizzare.',
        },
        {
          icon: 'editPen',
          title: 'Dettatura e note lunghe',
          desc: 'Hai dettato un capitolo, un memo o un’annotazione in Memo Vocali. Trasformalo in testo modificabile pronto per la tua app di scrittura.',
        },
        {
          icon: 'users',
          title: 'Intervista sul campo',
          desc: 'Giornalismo, ricerca o intervista di storia orale registrata su iPhone. La trascrizione è il materiale grezzo per la storia o il documento.',
        },
      ]}
      technicalTitle="Cosa sapere su M4A"
      technicalIntro="M4A descrive un contenitore audio basato su MP4, non un singolo codec. La maggior parte delle registrazioni vocali utilizza AAC, mentre alcuni file utilizzano ALAC senza perdita."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Contenitore e codec',
          desc: 'Un file .m4a contiene comunemente audio AAC o ALAC. Il contenitore fornisce temporizzazione e metadati attorno a quel flusso audio.',
        },
        {
          icon: 'mic',
          title: 'Flusso di lavoro dei Memo Vocali',
          desc: 'Puoi condividere la registrazione originale da un iPhone o Mac e caricarla senza prima rinominarla in MP3.',
        },
        {
          icon: 'clip',
          title: 'I metadati sono separati',
          desc: 'Titoli, opere d’arte e metadati Apple non vengono inseriti nel testo della trascrizione. Tienili nelle tue note o nel sistema di pubblicazione.',
        },
        {
          icon: 'cloud',
          title: 'Registrazioni lunghe',
          desc: 'M4A è solitamente compatto, ma i lunghi Memo Vocali possono comunque superare i limiti di caricamento. Dividi o esporta una copia di discorso più piccola quando necessario.',
        },
      ]}
      faq={[
        {
          q: 'Accettate M4A direttamente dai Memo Vocali iPhone?',
          a: 'Sì. I Memo Vocali scrivono M4A standard (AAC in contenitore MP4). Condividi il file dall’app, salvalo su iCloud o File e trascinalo qui. Nessuna conversione richiesta.',
        },
        {
          q: 'Qual è la differenza tra M4A e MP4?',
          a: 'M4A è la versione solo audio del contenitore MP4. Entrambi utilizzano l’intestazione ftyp e il codec AAC. .m4a segnala contenuti solo audio mentre .mp4 implica tipicamente video. Mictoo accetta entrambi direttamente.',
        },
        {
          q: 'La mia registrazione iPhone supera i 60 MB. E adesso?',
          a: 'Un Memo Vocale di 90 minuti può superare i 60 MB. Se sei registrato, noi auto-dividiamo fino a circa 3 ore. Per utenti anonimi, riduci prima: ffmpeg -i in.m4a -b:a 64k -ac 1 out.m4a. La qualità del discorso rimane pulita.',
        },
        {
          q: 'I metadati dell’iPhone (titolo, posizione, data) appariranno?',
          a: 'No. La trascrizione è testo semplice senza metadati del dispositivo. Se fai affidamento sulla data o sulla posizione della registrazione, mantieni quella mappatura nelle tue note.',
        },
        {
          q: 'Mictoo trascrive file M4A non in inglese?',
          a: 'Sì. Whisper large-v3 supporta oltre 50 lingue con rilevamento automatico. Per memo vocali brevi o accenti non inglesi, imposta esplicitamente la lingua per risultati più puliti al primo passaggio.',
        },
        {
          q: 'Posso scaricare sottotitoli SRT per un video che utilizza questo M4A?',
          a: 'Sì. Scarica SRT o VTT dopo la trascrizione. I timestamp si allineano alla timeline originale di M4A, quindi se sincronizzi l’M4A a una traccia video, i sottotitoli corrispondono con precisione al fotogramma.',
        },
        {
          q: 'Posso tradurre la trascrizione in un’altra lingua?',
          a: 'Sì. Dopo la trascrizione, scegli una lingua target e fai clic su Traduci. La traduzione viene eseguita su GPT-4o-mini e appare accanto all’originale.',
        },
        {
          q: 'Il mio file M4A viene mantenuto sui vostri server?',
          a: 'No. L’audio viene trasmesso al fornitore di trascrizione, elaborato una sola volta e rimosso dalla memoria. Non lo scriviamo mai su disco. Le trascrizioni vengono memorizzate solo se ti registri e salvi nella cronologia.',
        },
        {
          q: 'La qualità M4A influisce sulla trascrizione?',
          a: 'Poco. I Memo Vocali iPhone registrano a circa 32-64 kbps AAC, il che è sufficiente per Whisper. Whisper ricampiona internamente a 16 kHz mono, quindi il bitrate del codec ha un impatto minimo per un discorso pulito.',
        },
        {
          q: 'Quanto tempo ci vuole per una trascrizione M4A?',
          a: 'Un Memo Vocale di 10 minuti di solito termina in 15-30 secondi da inizio a fine. Un’intervista di 60 minuti termina in 60-90 secondi. La velocità di caricamento è spesso il passaggio più lungo.',
        },
      ]}
      ctaHeadline="Trascina il tuo Memo Vocale, ottieni una trascrizione pulita"
      ctaSubtitle="Memo Vocali iPhone, GarageBand, FaceTime, Apple Podcasts. AAC in MP4, nessuna conversione necessaria."
      ctaButton="Carica M4A per trascrivere"
    />
  )
}