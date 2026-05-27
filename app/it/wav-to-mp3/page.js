import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-mp3',
  'fr': 'https://mictoo.com/fr/wav-to-mp3',
  'de': 'https://mictoo.com/de/wav-to-mp3',
  'es': 'https://mictoo.com/es/wav-to-mp3',
  'ru': 'https://mictoo.com/ru/wav-to-mp3',
  'it': 'https://mictoo.com/it/wav-to-mp3',
  'pt': 'https://mictoo.com/pt/wav-to-mp3',
  'pl': 'https://mictoo.com/pl/wav-to-mp3',
  'ja': 'https://mictoo.com/ja/wav-to-mp3',
  'ko': 'https://mictoo.com/ko/wav-to-mp3',
  'x-default': 'https://mictoo.com/wav-to-mp3',
}

export const metadata = {
  title: 'WAV in MP3 — convertitore online gratuito | Mictoo',
  description:
    'Converti WAV in MP3 online gratis. Riduci file WAV senza perdita a MP3 portatili a 128 kbps in pochi secondi. Senza registrazione, senza filigrana. Fino a 25 MB.',
  alternates: { canonical: 'https://mictoo.com/it/wav-to-mp3', languages: LANGS },
}

export default function ItWavToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="WAV → MP3 · Gratis · Senza registrazione"
      h1={<>WAV in MP3<br /><span className="text-brand-600">Convertitore online gratuito</span></>}
      subtitle="Trascina un file WAV. Ottieni un MP3 compatto dieci volte più piccolo, suono praticamente identico per voce parlata o ascolto casuale. Senza filigrana, senza email."
      tool={<ConverterZone from="wav" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Trascina il WAV', desc: 'Trascina qualsiasi WAV (16-bit, 24-bit, mono, stereo) nel riquadro. File fino a 25 MB in modo anonimo, 60 MB con registrazione.' },
        { icon: '⚡', title: 'Ri-codifichiamo in MP3', desc: 'ffmpeg lato server, bitrate costante 128 kbps, 44.1 kHz, stereo. Un WAV da 25 MB (circa 2 minuti a 24-bit/96 kHz, o 5 minuti a 16-bit/44.1) finisce in pochi secondi.' },
        { icon: '⬇️', title: 'Scarica il MP3', desc: 'Il risultato porta il nome dell\'originale con .mp3 al posto dell\'estensione. Sia il caricamento che l\'output vengono cancellati dai nostri server entro un\'ora.' },
      ]}
      whyUse={{ title: 'Perché convertire WAV in MP3', bullets: [
        { title: 'I file WAV sono enormi', desc: 'Un WAV da 5 minuti a 16-bit/44.1 kHz è circa 50 MB. Lo stesso audio come MP3 a 128 kbps è 5 MB. Per email, upload su un host podcast o caricamento su un telefono, MP3 è il formato che vuoi.' },
        { title: 'MP3 si riproduce ovunque', desc: 'WAV va bene sul desktop ma è ballerino sui vecchi stereo da auto, alcuni altoparlanti Bluetooth e parecchi player web. MP3 funziona e basta.' },
        { title: 'La perdita di qualità a 128 kbps è inudibile per la maggior parte degli ascolti', desc: 'Non sentirai la differenza tra un MP3 a 128 kbps e il WAV originale a meno che tu non stia masterizzando musica su monitor da studio. Per voce, podcast o ascolto casuale è il compromesso ovvio.' },
        { title: 'Senza filigrana, senza popup', desc: 'Il MP3 è solo il tuo audio ri-codificato. Non aggiungiamo un\'intro che dice "Converted by..." e non mostriamo un finto popup che ti fa aspettare 30 secondi.' },
        { title: 'Privacy di default', desc: 'I WAV di una registrazione sul campo possono essere sensibili. Il file finisce su Vercel Blob storage, viene convertito e cancellato. Non lo guardiamo, non lo conserviamo.' },
      ]}}
      useCases={{ title: 'Quando convertire WAV in MP3', items: [
        { title: 'Registrazione sul campo → clip pronta per email', desc: 'Uno Zoom H1n o un registratore simile salva di solito in WAV di default. Converti in MP3 prima di condividere con un producer, giornalista o trascrittore.' },
        { title: 'Export da studio → ascolto da telefono', desc: 'Audacity, Reaper, Logic, tutti escono in WAV di default. Esporta il mix grezzo come MP3 per condividerlo con i collaboratori o ascoltarlo in movimento.' },
        { title: 'Preparazione podcast', desc: 'La maggior parte degli host podcast (Anchor, Buzzsprout, Transistor) accetta WAV ma raccomanda MP3 perché l\'upload è più veloce e i costi di banda sono più bassi.' },
        { title: 'Pulizia di voice memo', desc: 'Se il tuo telefono o registratore ha salvato in WAV, converti in MP3 prima di metterlo nel tuo archivio Notion o Note, fa risparmiare spazio a basso costo.' },
        { title: 'Pipeline di pulizia audio', desc: 'Hai registrato in WAV per l\'editing, hai fatto i tuoi tagli e ora vuoi che il finale sia un MP3 più piccolo per la distribuzione. Questo è l\'ultimo passo.' },
      ]}}
      proTips={{ title: 'Consigli per una conversione WAV in MP3 pulita', tips: [
        { title: 'WAV a 24-bit si converte uguale al 16-bit', desc: 'MP3 non preserva la profondità di bit oltre quella che la codifica percettiva richiede. Un WAV a 24-bit non ti dà alcun vantaggio udibile rispetto al 16-bit quando ri-codificato in MP3 a 128 kbps.' },
        { title: 'Se il WAV è oltre i 25 MB, tagliali prima', desc: 'Aprilo in Audacity (gratis) o QuickTime, taglia la parte che ti serve davvero, esporta come WAV più piccolo, poi converti. Oppure accedi per il limite a 60 MB.' },
        { title: 'Mono dentro, mono fuori', desc: 'Se il tuo WAV sorgente è mono (tipico per registrazioni vocali), anche il MP3 risultante sarà mono. MP3 mono a 128 kbps è abbondante, ma il nostro convertitore standardizza a 128 per semplicità.' },
        { title: 'Per mastering o archiviazione, non usare MP3', desc: 'Se stai tenendo il file come copia master per futuri ri-mastering, resta in WAV (o FLAC). MP3 è un formato di distribuzione, non di archiviazione.' },
        { title: '320 kbps o VBR? Apri il MP3 in Audacity dopo', desc: 'Esportiamo a 128 kbps costante. Per un bitrate più alto o VBR, porta il MP3 in Audacity e ri-esporta, la perdita di qualità da una ri-codifica extra è piccola.' },
        { title: 'I WAV con header strani falliscono in silenzio', desc: 'Alcuni file BWF (broadcast WAV) hanno header che ffmpeg non legge. Aprili in Audacity, salva come WAV standard e riprova.' },
      ]}}
      faq={[
        { q: 'La conversione WAV in MP3 è davvero gratis?', a: 'Sì. Nessun account necessario fino a 25 MB, nessun limite di tempo, nessuna filigrana sull\'output. I display ad sulle pagine editoriali pagano il server.' },
        { q: 'Qual è la dimensione massima del file?', a: '25 MB anonimo, 60 MB con un account gratuito. Un WAV da 25 MB è circa 5 minuti a 16-bit/44.1 kHz stereo, o circa 2 minuti a 24-bit/96 kHz.' },
        { q: 'Quanto tempo richiede?', a: 'Pochi secondi. La conversione in sé è molto più veloce del tempo reale, un WAV da 25 MB finisce in 3-8 secondi. La velocità di upload è il collo di bottiglia.' },
        { q: 'Che qualità MP3 producete?', a: '128 kbps a bitrate costante, 44.1 kHz, corrisponde al numero di canali sorgente (mono in → mono out, stereo in → stereo out). È l\'impostazione universale "abbastanza buona per tutto".' },
        { q: 'Tenete i miei file?', a: 'No. Il caricamento è cancellato subito dopo la conversione. Il risultato è rimosso entro un\'ora dal nostro cron di pulizia. Salvalo in locale.' },
        { q: 'Il MP3 suonerà diverso dal WAV?', a: 'Sulla maggior parte dei sistemi di riproduzione e sulla maggior parte del materiale sorgente, no. Masterizzando su monitor da studio con orecchie fresche, forse, ma a quel punto non useresti un convertitore web.' },
        { q: 'Posso ottenere un bitrate più alto (256 o 320 kbps)?', a: 'Non direttamente qui. Porta il nostro MP3 a 128 kbps in Audacity e ri-esporta al bitrate che vuoi. La doppia codifica aggiunge una perdita udibile trascurabile.' },
        { q: 'E FLAC invece di MP3?', a: 'FLAC è compressione senza perdita, metà della dimensione del WAV, nessuna perdita di qualità. Per uso archivistico è la scelta migliore. Non produciamo FLAC da questo convertitore, ma la nostra pagina /flac-to-mp3 gestisce l\'altra direzione.' },
        { q: 'Il mio WAV è 32-bit float. Si convertirà?', a: 'Sì. ffmpeg gestisce WAV 32-bit float senza problemi. L\'output MP3 è lo stesso indipendentemente dalla profondità di bit di ingresso.' },
        { q: 'Perché l\'audio mono diventa un MP3 stereo?', a: 'Manteniamo il layout dei canali sorgente. Un WAV mono → MP3 mono. Un WAV stereo → MP3 stereo. Non facciamo upmix o downmix.' },
        { q: 'Funziona per musica o solo per voce?', a: 'Entrambi. MP3 a 128 kbps è un leggero compromesso percettivo per la musica, va bene per l\'ascolto in auto, cuffie in ambienti rumorosi, riproduzione casuale. Per ascolto musicale critico tieni il WAV o usa FLAC.' },
        { q: 'Posso fare conversione batch?', a: 'Non ancora. Un file alla volta nel piano gratis. Il batch è previsto per un futuro piano Pro.' },
      ]}
      relatedLinks={[
        { href: '/it/mp4-to-mp3', label: 'MP4 in MP3', desc: 'Estrai audio MP3 da un file video.' },
        { href: '/it/flac-to-mp3', label: 'FLAC in MP3', desc: 'Converti FLAC senza perdita in MP3 portatile.' },
        { href: '/it/mp3-to-wav', label: 'MP3 in WAV', desc: 'Il contrario, WAV non compresso da MP3.' },
        { href: '/it/transcribe-audio-to-text', label: 'Audio in testo', desc: 'Ti servono le parole, non l\'audio? Salta il MP3 e trascrivi direttamente.' },
      ]}
    />
  )
}
