import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-wav',
  'fr': 'https://mictoo.com/fr/mp3-to-wav',
  'de': 'https://mictoo.com/de/mp3-to-wav',
  'es': 'https://mictoo.com/es/mp3-to-wav',
  'ru': 'https://mictoo.com/ru/mp3-to-wav',
  'it': 'https://mictoo.com/it/mp3-to-wav',
  'pt': 'https://mictoo.com/pt/mp3-to-wav',
  'pl': 'https://mictoo.com/pl/mp3-to-wav',
  'ja': 'https://mictoo.com/ja/mp3-to-wav',
  'ko': 'https://mictoo.com/ko/mp3-to-wav',
  'x-default': 'https://mictoo.com/mp3-to-wav',
}

export const metadata = {
  title: 'MP3 in WAV — convertitore online gratuito | Mictoo',
  description:
    'Converti MP3 in WAV online gratis. Espandi MP3 compresso in WAV non compresso a 16-bit/44.1 kHz per l\'editing audio. Senza registrazione, senza filigrana.',
  alternates: { canonical: 'https://mictoo.com/it/mp3-to-wav', languages: LANGS },
}

export default function ItMp3ToWavPage() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="MP3 → WAV · Gratis · Senza registrazione"
      h1={<>MP3 in WAV<br /><span className="text-brand-600">Convertitore online gratuito</span></>}
      subtitle="Trascina un MP3. Ottieni un WAV PCM a 16-bit/44.1 kHz pronto per il software di editing audio. Senza filigrana, senza email."
      tool={<ConverterZone from="mp3" to="wav" />}
      howItWorks={[
        { icon: '📂', title: 'Trascina il MP3', desc: 'Trascina il MP3 nel riquadro. File fino a 25 MB in anonimo, 60 MB dopo la registrazione.' },
        { icon: '⚡', title: 'ffmpeg decodifica in PCM', desc: 'PCM a 16-bit, 44.1 kHz, layout dei canali sorgente preservato. Pochi secondi per un file tipico.' },
        { icon: '⬇️', title: 'Scarica il WAV', desc: 'Il file WAV è circa dieci volte più grande del MP3 perché è non compresso. Rimosso dai nostri server entro un\'ora.' },
      ]}
      whyUse={{ title: 'Perché convertire MP3 in WAV', bullets: [
        { title: 'Gli editor audio preferiscono WAV', desc: 'Audacity, Adobe Audition, Logic, Pro Tools, tutti aprono MP3 ma la maggior parte delle operazioni (editing preciso, applicazione effetti, normalizzazione) funziona meglio su WAV. Convertire prima evita la leggera perdita di qualità delle codifiche MP3 ripetute.' },
        { title: 'Nessuna perdita di qualità aggiuntiva sugli edit', desc: 'Ogni ri-codifica MP3 degrada leggermente l\'audio. Converti in WAV, fai i tuoi edit, esporta di nuovo in MP3 alla fine, quel singolo round-trip è il meglio che puoi fare.' },
        { title: 'Richiesto da alcuni hardware e software legacy', desc: 'Alcuni vecchi software di masterizzazione CD, sampler e attrezzature di registrazione leggono solo WAV. La conversione è il ponte.' },
        { title: 'Uso forense e broadcast', desc: 'L\'analisi audio forense e i workflow broadcast tradizionalmente usano WAV perché il formato è ben compreso e non compresso. MP3 è accettabile come materiale sorgente ma WAV è il formato di lavoro.' },
        { title: 'Senza filigrana, senza upsell', desc: 'Solo audio decodificato in un contenitore WAV. Non aggiungiamo niente.' },
      ]}}
      useCases={{ title: 'Quando convertire MP3 in WAV', items: [
        { title: 'Editing audio in Audacity, Reaper, Logic', desc: 'Converti prima in WAV, poi applica effetti, taglia, normalizza, mixa. Ri-esporta in MP3 alla fine se ti serve un file piccolo per la distribuzione.' },
        { title: 'Mastering per vinile o CD', desc: 'Il taglio del vinile e la pressatura del CD vogliono entrambi audio senza perdita. Se la tua unica sorgente è MP3, convertire in WAV dà al mastering engineer qualcosa con cui lavorare, anche se la qualità audio è limitata dalla sorgente MP3.' },
        { title: 'Preparazione sample per un sampler', desc: 'I sampler hardware (Akai, Korg) spesso vogliono file WAV a profondità di bit e sample rate specifici.' },
        { title: 'Lavoro voiceover per un video', desc: 'Alcuni editor video (DaVinci, Premiere) gestiscono MP3 bene ma mostrano forme d\'onda migliori e applicano effetti in modo più pulito su WAV.' },
        { title: 'Analisi forense o di trascrizione', desc: 'Alcuni strumenti di analisi specializzati richiedono input WAV.' },
      ]}}
      proTips={{ title: 'Consigli per la conversione MP3 in WAV', tips: [
        { title: 'Il WAV sarà 10 volte la dimensione del MP3', desc: 'Un MP3 da 5 MB si espande a circa 50 MB come WAV a 16-bit/44.1 kHz. La conversione non restituisce qualità persa, ti dà solo un formato lavorabile.' },
        { title: 'La qualità WAV è limitata dal MP3', desc: 'Non puoi fare in modo che un MP3 a 128 kbps suoni come un CD convertendo in WAV. Il WAV rende solo modificabile l\'audio esistente senza ulteriore perdita di compressione.' },
        { title: 'Per fedeltà più alta, chiedi l\'originale', desc: 'Se stai facendo mastering o restauro serio, prendi l\'originale senza perdita (WAV, FLAC, ALAC) dalla sorgente. MP3 → WAV è un workaround, non un upgrade.' },
        { title: 'Il sample rate conta per l\'hardware', desc: 'La maggior parte dell\'hardware vuole 44.1 kHz (CD) o 48 kHz (video). Il nostro convertitore esce sempre a 44.1. Se ti serve 48, apri il WAV in Audacity e ricampiona.' },
        { title: 'WAV a 24-bit, usa Audacity', desc: 'Il nostro convertitore esce a WAV a 16-bit. Per 24-bit, apri il WAV risultante in Audacity e ri-esporta con 24-bit float. La profondità di bit extra dà spazio per l\'editing anche se l\'audio sorgente è solo equivalente a 16-bit.' },
        { title: 'Mono in, mono out, risparmia spazio', desc: 'Se il tuo MP3 è mono, anche il WAV è mono, metà della dimensione di una conversione stereo. Preserviamo il layout dei canali sorgente.' },
      ]}}
      faq={[
        { q: 'La conversione MP3 in WAV è davvero gratis?', a: 'Sì. Nessun account fino a 25 MB, nessuna filigrana, nessun limite di tempo.' },
        { q: 'Perché il WAV è così tanto più grande del MP3?', a: 'MP3 usa la compressione percettiva per buttare via dati audio che le tue orecchie a malapena notano. WAV memorizza ogni campione a piena precisione. Un MP3 tipico è un decimo della dimensione dell\'equivalente WAV.' },
        { q: 'Il WAV suonerà meglio del MP3?', a: 'No. Il MP3 ha già perso dati durante la sua codifica originale. WAV preserva l\'audio così com\'è, non restituisce qualità.' },
        { q: 'Che formato WAV producete?', a: 'PCM a 16-bit, 44.1 kHz, layout dei canali sorgente preservato (mono in → mono out, stereo in → stereo out).' },
        { q: 'Quanto tempo richiede?', a: 'Pochi secondi. Decodificare MP3 è veloce.' },
        { q: 'Posso ottenere WAV a 24-bit o 32-bit float?', a: 'Non da questo convertitore. Apri il nostro WAV a 16-bit in Audacity e ri-esporta con la profondità di bit che vuoi, i bit extra danno spazio per l\'editing anche se la precisione audio sorgente è limitata dal MP3.' },
        { q: 'Tenete i miei file?', a: 'No. Il caricamento è cancellato dopo la conversione. L\'output è rimosso entro un\'ora.' },
        { q: 'Posso fare conversione batch?', a: 'Non ancora nel piano gratis. Apri più tab del browser.' },
        { q: 'E il sample rate a 48 kHz?', a: 'Esportiamo a 44.1 kHz (rate CD). Per 48 kHz (lavoro video), ricampiona il WAV in Audacity dopo la conversione.' },
        { q: 'Perché convertire in primo luogo?', a: 'Principalmente per editing audio. Audacity, Pro Tools, Logic, tutti funzionano meglio su WAV che su MP3, soprattutto per edit ripetuti.' },
        { q: 'La conversione fallirà per alcuni MP3?', a: 'Raramente. ffmpeg decodifica essenzialmente ogni MP3 standard. Un file genuinamente corrotto potrebbe fallire; altrimenti è affidabile.' },
        { q: 'Dovrei tenere entrambi i file?', a: 'Per editing, lavora in WAV. Per distribuzione, tieni anche il MP3. Una volta finito l\'editing, ri-esporta da WAV in un MP3 fresco alla fine della catena.' },
      ]}
      relatedLinks={[
        { href: '/it/wav-to-mp3', label: 'WAV in MP3', desc: 'La direzione inversa.' },
        { href: '/it/flac-to-mp3', label: 'FLAC in MP3', desc: 'FLAC senza perdita in MP3 portatile.' },
        { href: '/it/wav-to-text', label: 'WAV in testo', desc: 'Trascrivi audio WAV direttamente.' },
        { href: '/it/how-to-compress-audio', label: 'Comprimere audio', desc: 'Per file che devi rendere più piccoli.' },
      ]}
    />
  )
}
