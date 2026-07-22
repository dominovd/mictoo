import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'it': 'https://mictoo.com/it/lecture-transcription',
  'pt': 'https://mictoo.com/pt/lecture-transcription',
  'pl': 'https://mictoo.com/pl/lecture-transcription',
  'ja': 'https://mictoo.com/ja/lecture-transcription',
  'ko': 'https://mictoo.com/ko/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: 'Trascrizione delle Lezioni per Corsi e Seminari | Mictoo',
  description:
    'Carica una lezione, un seminario o una conferenza registrata e ottieni testo ricercabile, timestamp, un riepilogo AI e file di esportazione.',
  alternates: {
    canonical: 'https://mictoo.com/it/lecture-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Trascrizione delle Lezioni: Generatore di Trascrizioni Gratuito | Mictoo',
    description: 'Carica la tua lezione o seminario registrato e ottieni testo pulito in pochi secondi.',
    url: 'https://mictoo.com/it/lecture-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trascrizione delle Lezioni: Generatore Gratuito',
    description: 'Carica la registrazione della tua lezione o seminario.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItLectureTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="it"
      badge="Studenti · Accademici · Gratuito"
      h1First="Trascrizione delle Lezioni"
      h1Second="Trascrizioni gratuite per corsi e seminari"
      subtitle="Carica la tua lezione registrata da Zoom, Panopto, YouTube, Kaltura o dal tuo telefono. Ottieni una trascrizione ricercabile con timestamp pronta per appunti di studio, revisione e citazione."
      currentHref="/it/lecture-transcription"

      platforms={[
        { name: 'Zoom',      iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/it/zoom-transcription' },
        { name: 'YouTube',   iconKey: 'videoCameraFill', brandBg: '#FF0000' },
        { name: 'Panopto',   iconKey: 'cap',             brandBg: '#014A96' },
        { name: 'Kaltura',   iconKey: 'cap',             brandBg: '#FA6425' },
        { name: 'Camtasia',  iconKey: 'videoCameraFill', brandBg: '#00A651' },
        { name: 'Voice Memo',iconKey: 'mic',             brandBg: '#F97316', href: '/it/voice-memo-to-text' },
      ]}

      howItWorksTitle="Come funziona la trascrizione delle lezioni"
      steps={[
        {
          icon: 'folder',
          title: 'Esporta la lezione',
          desc: 'Scarica da Panopto/Kaltura, salva dalla nuvola di Zoom o registra sul tuo telefono durante la lezione.',
        },
        {
          icon: 'upload',
          title: 'Trascina il file qui',
          desc: 'MP3, MP4, M4A, WAV, MOV funzionano tutti. Le lezioni lunghe vengono automaticamente suddivise quando sei connesso.',
        },
        {
          icon: 'editPen',
          title: 'Appunti, riepiloghi, citazioni',
          desc: 'Trascrizione ricercabile con timestamp, riepilogo AI, DOCX per appunti di studio. Chatta con la trascrizione per prepararti agli esami.',
        },
      ]}

      exampleTitle="Esempio di trascrizione di una lezione"
      exampleFileName="intro-microeconomics-lecture-08.mp4"
      exampleDurationLabel="47:32"
      exampleLines={[
        { t: '0:00',  line: 'Va bene. La settimana scorsa abbiamo finito con il concetto di surplus del consumatore. Oggi ci basiamo su questo con il surplus del produttore.' },
        { t: '0:11',  line: 'Il surplus del produttore è la differenza tra ciò che un produttore accetterebbe per un bene e ciò che riceve effettivamente.' },
        { t: '0:23',  line: 'Insieme, il surplus del consumatore più il surplus del produttore ci dà il benessere totale in un mercato prima di introdurre tasse o controlli sui prezzi.' },
        { t: '0:35',  line: 'Ora, perché ci interessa questo concetto praticamente? Perché ci permette di valutare se una politica rende un mercato migliore o peggiore.' },
        { t: '0:47',  line: 'Considera una tassa per unità. Essa sposta la curva di offerta verso l’alto dell’importo della tassa, e entrambi i surplus si riducono.' },
        { t: '0:58',  line: 'Il divario che appare tra ciò che i compratori pagano e ciò che i venditori ricevono è ciò che chiamiamo perdita di peso morto.' },
        { t: '1:08',  line: 'Per favore, apri il quaderno a pagina trentauno e lavoriamo insieme su un esempio numerico.' },
      ]}
      summaryPoints={[
        'Riepilogo: surplus del consumatore dalla lezione precedente.',
        'Nuovo concetto: surplus del produttore e benessere totale.',
        'Applicato all’analisi fiscale.',
        'Perdita di peso morto illustrata numericamente.',
      ]}
      actionItems={[
        'Rivedi la pagina 31 del quaderno',
        'Pratica il calcolo della perdita di peso morto',
        'Leggi il capitolo 4 prima di giovedì',
      ]}

      whyTitle="Perché Mictoo per la trascrizione delle lezioni"
      whyCards={[
        {
          icon: 'search',
          title: 'Ricercabile all’interno della trascrizione',
          desc: 'Ctrl-F qualsiasi concetto dall’intera lezione di 45 minuti in un secondo. Meglio che scorrere il video.',
        },
        {
          icon: 'sparkles',
          title: 'Riepilogo AI per appunti di revisione',
          desc: 'Il riepilogo è un solido punto di partenza per la revisione. Riduci ciò che già sai, mantieni ciò che hai perso.',
        },
        {
          icon: 'chat',
          title: 'Chatta con la lezione',
          desc: 'Fai domande sul materiale per prepararti agli esami. Le risposte in stile RAG citano il timestamp esatto.',
        },
        {
          icon: 'globe',
          title: 'Traduci per studenti non madrelingua',
          desc: 'Lezione in inglese ma studi in portoghese? Traduzione con un clic in oltre 50 lingue.',
        },
      ]}

      scenariosTitle="Scenari comuni delle lezioni"
      scenarios={[
        { icon: 'book',      title: 'Corso universitario' },
        { icon: 'cap' ,      title: 'Corso online' },
        { icon: 'search',    title: 'Revisione per l’esame' },
        { icon: 'editPen',   title: 'Appunti di studio' },
        { icon: 'globe',     title: 'Studente non madrelingua' },
        { icon: 'headset',   title: 'Seminario registrato' },
      ]}

      tipsTitle="Suggerimenti per trascrizioni di lezioni più pulite"
      tips={[
        'Siediti vicino alla parte anteriore e usa il tuo telefono come microfono di riserva.',
        'Le lezioni lunghe oltre 60 MB vengono automaticamente suddivise quando accedi.',
        'Imposta esplicitamente la lingua per contenuti tecnici o non in inglese.',
        'Usa la chat per fare domande di follow-up dopo la trascrizione.',
      ]}

      guidesTitle="Strumenti di apprendimento correlati"
      guides={[
        { href: '/it/zoom-transcription',        icon: 'video', title: 'Lezione Zoom',      desc: 'Download della registrazione nella nuvola' },
        { href: '/it/youtube-to-text',           icon: 'video', title: 'Lezione YouTube',   desc: 'Incolla l’URL o carica' },
        { href: '/it/voice-memo-to-text',        icon: 'mic',   title: 'Registrazione telefonica',   desc: 'Memo vocali di iPhone in classe' },
        { href: '/it/timestamped-transcription', icon: 'file',  title: 'Appunti con timestamp', desc: 'Esportazioni allineate nel tempo' },
      ]}

      faq={[
        {
          q: 'Posso trascrivere una registrazione di una lezione Zoom?',
          a: 'Sì. Scarica il MP4 o M4A della registrazione nella nuvola e trascinalo qui. Consulta la guida di Zoom per il percorso di download esatto.',
        },
        {
          q: 'La mia lezione è oltre 60 MB. E adesso?',
          a: 'Accedi per abilitare la suddivisione automatica (fino a circa 3 ore). Oppure riduci a 64 kbps mono MP3 con ffmpeg per una riduzione della dimensione di 5 volte.',
        },
        {
          q: 'Mictoo trascrive lezioni non in inglese?',
          a: 'Sì. Whisper large-v3 supporta oltre 50 lingue. Imposta esplicitamente la lingua per vocabolario tecnico o accenti pesanti.',
        },
        {
          q: 'Posso cercare all’interno della trascrizione?',
          a: 'Sì. La vista lettore include una casella di ricerca con conteggio delle corrispondenze e evidenziazione. Ctrl-F il tuo termine e salta tra le corrispondenze.',
        },
        {
          q: 'Posso fare domande sul materiale della lezione?',
          a: 'Sì. Chattare con la trascrizione ti consente di chiedere "spiega la perdita di peso morto" o "quali pagine ha menzionato il professore". Le risposte citano i timestamp.',
        },
        {
          q: 'Posso esportare appunti di lezione come DOCX o PDF?',
          a: 'Sì. DOCX per chiunque, PDF e JSON per utenti registrati. TXT è sempre disponibile.',
        },
        {
          q: 'Le registrazioni delle lezioni vengono conservate sui vostri server?',
          a: 'No. I flussi audio vengono inviati al fornitore di trascrizione, elaborati una sola volta e poi eliminati. Le trascrizioni vengono salvate solo se accedi.',
        },
      ]}

      ctaHeadline="Trasforma le lezioni in appunti di studio"
      ctaSubtitle="Trascrizione ricercabile, riepilogo AI, chat con il materiale. Gratuito per lezione."
      ctaButton="Carica una lezione"

      relatedLinks={[
        { href: '/it/webinar-transcription',     label: 'Trascrizione Webinar' },
        { href: '/it/sermon-transcription',      label: 'Trascrizione Sermone' },
        { href: '/it/voice-memo-to-text',        label: 'Memo Vocale in Testo' },
        { href: '/it/interview-transcription',   label: 'Trascrizione Intervista' },
        { href: '/it/meeting-transcription',     label: 'Trascrizione Riunione' },
      ]}
    />
  )
}