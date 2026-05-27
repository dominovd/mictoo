import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-mp3',
  'fr': 'https://mictoo.com/fr/webm-to-mp3',
  'de': 'https://mictoo.com/de/webm-to-mp3',
  'es': 'https://mictoo.com/es/webm-to-mp3',
  'ru': 'https://mictoo.com/ru/webm-to-mp3',
  'it': 'https://mictoo.com/it/webm-to-mp3',
  'pt': 'https://mictoo.com/pt/webm-to-mp3',
  'pl': 'https://mictoo.com/pl/webm-to-mp3',
  'ja': 'https://mictoo.com/ja/webm-to-mp3',
  'ko': 'https://mictoo.com/ko/webm-to-mp3',
  'x-default': 'https://mictoo.com/webm-to-mp3',
}

export const metadata = {
  title: 'WEBM in MP3 — convertitore online gratuito | Mictoo',
  description:
    'Converti WEBM in MP3 online gratis. Estrai audio MP3 da qualsiasi file WEBM video o audio in pochi secondi. Senza registrazione, senza filigrana. Fino a 25 MB.',
  alternates: { canonical: 'https://mictoo.com/it/webm-to-mp3', languages: LANGS },
}

export default function ItWebmToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="WEBM → MP3 · Gratis · Senza registrazione"
      h1={<>WEBM in MP3<br /><span className="text-brand-600">Convertitore online gratuito</span></>}
      subtitle="Trascina un file WEBM (il formato che amano i registratori da browser, i downloader YouTube e gli strumenti di cattura schermo). Ottieni un MP3 pulito. Senza filigrana, senza email."
      tool={<ConverterZone from="webm" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Trascina il WEBM', desc: 'WEBM solo audio o video, entrambi funzionano. Fino a 25 MB anonimo, 60 MB dopo la registrazione.' },
        { icon: '⚡', title: 'Estraiamo e ri-codifichiamo', desc: 'ffmpeg tira fuori il flusso audio (Opus o Vorbis) dal contenitore WEBM e ri-codifica in MP3 a 128 kbps a 44.1 kHz. Tipicamente 3-10 secondi.' },
        { icon: '⬇️', title: 'Scarica il MP3', desc: 'L\'output mantiene il nome originale con .mp3. I file vengono rimossi dai nostri server entro un\'ora.' },
      ]}
      whyUse={{ title: 'Perché convertire WEBM in MP3', bullets: [
        { title: "WEBM è ottimo per il browser, pessimo per tutto il resto", desc: 'Gli iPhone non riproducono WEBM. La maggior parte degli stereo da auto no. Molti altoparlanti Bluetooth più vecchi no. MP3 si riproduce su tutto quello che ti viene in mente.' },
        { title: 'App di voice memo e registratori da browser salvano in WEBM', desc: 'Gli strumenti di registrazione web (Loom, l\'API MediaRecorder di MDN, i registratori audio da browser) escono in WEBM di default perché Chrome e Firefox lo supportano nativamente. Se vuoi mandare la registrazione da qualche parte, MP3 è il formato più sicuro.' },
        { title: 'I downloader YouTube danno WEBM di default', desc: 'Quando scegli "solo audio" in 4K Video Downloader o yt-dlp senza specificare un formato, spesso ottieni un file WEBM Opus. Convertirlo in MP3 lo rende riproducibile su iOS e nelle app di editing audio.' },
        { title: 'Opus è tecnicamente migliore, ma la compatibilità vince', desc: 'Il codec Opus dentro un contenitore WEBM è migliore di MP3 byte per byte. Ma se il tuo pubblico non lo può riprodurre, non importa. MP3 è la lingua franca.' },
        { title: 'Senza filigrana, senza upsell', desc: 'Il MP3 è solo l\'audio ri-codificato. Non aggiungiamo un\'intro, un tag, o un overlay "compra Pro" sulla pagina del risultato.' },
      ]}}
      useCases={{ title: 'Quando convertire WEBM in MP3', items: [
        { title: 'Registrazione audio da browser → file portatile', desc: 'Hai usato un registratore web (strumento microfono integrato, registratore vocale online, ecc.) e hai ottenuto un WEBM. Converti in MP3 per trascinarlo nel tuo editor podcast o mandarlo a un trascrittore.' },
        { title: 'Download Loom o Vidyard → clip solo audio', desc: 'I download di Loom possono essere WEBM. Se ti serve solo l\'audio della registrazione, converti e salva il file più piccolo.' },
        { title: 'Download audio YouTube → formato universale', desc: 'Quando scarichi solo audio da YouTube con un downloader che esce in Opus/WEBM di default, la conversione in MP3 rende il file riproducibile ovunque.' },
        { title: 'Registrazione schermo → solo la narrazione', desc: "OBS, il registratore schermo integrato di Chrome e strumenti simili spesso producono WEBM. Se vuoi solo il voiceover per trascrizione o un podcast, converti." },
        { title: 'Registrazioni di chiamate WebRTC', desc: 'Alcuni strumenti di videoconferenza registrano in WEBM. Converti prima di mandare ai clienti o salvare in un CRM che si aspetta MP3.' },
      ]}}
      proTips={{ title: 'Consigli per una conversione WEBM in MP3 pulita', tips: [
        { title: "WEBM con video VP9 va bene, ignoriamo il flusso video", desc: "Puoi trascinare un WEBM video (VP9 + Opus) nel convertitore. Rimuoviamo il video e teniamo solo l'audio. Il risultato è della stessa dimensione di un WEBM solo audio." },
        { title: 'Opus si decodifica senza perdita dentro ffmpeg', desc: 'Non c\'è un problema di seconda perdita andando Opus → MP3. La codifica percettiva di MP3 a 128 kbps è l\'unica cosa che influenza il risultato, non il fatto che l\'input sia un formato con perdita.' },
        { title: 'Per la voce, mono basta ma teniamo stereo', desc: 'Il nostro convertitore preserva il layout dei canali sorgente. Se il tuo WEBM è mono (tipico per registrazioni vocali), il MP3 è mono. Non facciamo upmix.' },
        { title: 'Se la conversione fallisce, il WEBM è probabilmente parziale', desc: 'I flussi WEBM a volte vengono tagliati a metà registrazione, lasciando il contenitore mezzo rotto. Aprili in VLC e ri-esporta come nuovo WEBM, o in un editor video, poi riprova.' },
        { title: "Per i download YouTube, meglio M4A direttamente se il tuo downloader lo supporta", desc: 'Se controlli il download, scegliere M4A (AAC dentro un contenitore MP4) salta tutto questo passaggio, M4A si riproduce ovunque come MP3. Usa l\'opzione "M4A" di 4K Video Downloader.' },
        { title: 'I WEBM cifrati con DRM falliranno', desc: 'Alcuni servizi di streaming usano WEBM con DRM. ffmpeg non li può decifrare, e nemmeno noi. Il WEBM originale deve essere non protetto.' },
      ]}}
      faq={[
        { q: 'La conversione WEBM in MP3 è davvero gratis?', a: 'Sì. Nessun account fino a 25 MB, nessuna filigrana, nessun "trial" a tempo limitato. I display ad sulle pagine editoriali coprono i costi del server.' },
        { q: 'Qual è la dimensione massima del file?', a: '25 MB anonimo, 60 MB con un account gratuito. WEBM è efficiente, 25 MB di solito rappresentano 20-40 minuti di audio.' },
        { q: 'Posso convertire video WEBM in MP3?', a: 'Sì. Rimuoviamo il flusso video e produciamo solo l\'audio. Il MP3 è della stessa dimensione che la sorgente sia video o WEBM solo audio.' },
        { q: 'Il MP3 suona peggio del WEBM?', a: 'Teoricamente, leggermente. Opus allo stesso bitrate è migliore di MP3. A 128 kbps la differenza è inudibile per quasi tutti gli ascoltatori su quasi tutto il materiale.' },
        { q: 'Quanto tempo richiede?', a: 'Pochi secondi. Un file WEBM da 25 MB si converte in 3-10 secondi. La velocità di upload è il collo di bottiglia.' },
        { q: 'Che impostazioni MP3 usate?', a: '128 kbps a bitrate costante, 44.1 kHz, preserva il layout dei canali sorgente (mono in → mono out, stereo in → stereo out).' },
        { q: 'Tenete i miei file?', a: 'No. Il caricamento è cancellato dopo la conversione. L\'output è rimosso entro un\'ora. Salvalo in locale.' },
        { q: 'Il mio WEBM da Loom è fallito. Perché?', a: 'Alcuni download di Loom usano un MP4 frammentato dentro un contenitore WEBM o hanno header non standard. Prova ad aprirlo in VLC, esporta di nuovo e riprova. Oppure scarica da Loom come MP4 direttamente se c\'è l\'opzione.' },
        { q: 'Funziona per file Opus in particolare?', a: 'Se il tuo file finisce in .opus invece che .webm, rinominalo in .webm prima. Il contenitore è funzionalmente lo stesso e ffmpeg li legge in modo identico.' },
        { q: 'Posso scaricare video YouTube con questo?', a: 'No. Non recuperiamo URL. Usa un\'app downloader (4K Video Downloader, yt-dlp, ClipGrab) per salvare il WEBM in locale prima, poi trascinalo qui.' },
        { q: 'L\'iPhone o iTunes riprodurranno l\'output?', a: 'Sì. MP3 si riproduce ovunque, inclusi tutti i dispositivi e software Apple.' },
        { q: 'Perché convertire invece di tenere WEBM?', a: 'WEBM va bene su Chrome e Firefox, ma iOS, molti stereo da auto, vecchi altoparlanti Bluetooth e parecchio software audio professionale non lo gestiscono. MP3 è universale.' },
      ]}
      relatedLinks={[
        { href: '/it/mp4-to-mp3', label: 'MP4 in MP3', desc: 'Stessa idea, sorgente MP4 invece di WEBM.' },
        { href: '/it/wav-to-mp3', label: 'WAV in MP3', desc: 'WAV senza perdita a MP3 portatile.' },
        { href: '/it/webm-to-text', label: 'WEBM in testo', desc: 'Salta il MP3, vai dritto a una trascrizione.' },
        { href: '/it/how-to-compress-audio', label: 'Comprimere audio', desc: 'Se il MP3 è ancora troppo grande da condividere.' },
      ]}
    />
  )
}
