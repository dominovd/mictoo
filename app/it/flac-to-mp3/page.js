import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLAC in MP3 — convertitore online gratuito | Mictoo',
  description:
    'Converti FLAC in MP3 online gratis. Riduci FLAC senza perdita a MP3 a 128 kbps in pochi secondi. Senza registrazione, senza filigrana. Fino a 25 MB.',
  alternates: { canonical: 'https://mictoo.com/it/flac-to-mp3', languages: LANGS },

  openGraph: {
    title: "FLAC in MP3 — convertitore online gratuito | Mictoo",
    description: "Converti FLAC in MP3 online gratis. Riduci FLAC senza perdita a MP3 a 128 kbps in pochi secondi. Senza registrazione, senza filigrana. Fino a 25 MB.",
    url: "https://mictoo.com/it/flac-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLAC in MP3 — convertitore online gratuito | Mictoo",
    description: "Converti FLAC in MP3 online gratis. Riduci FLAC senza perdita a MP3 a 128 kbps in pochi secondi. Senza registrazione, senza filigrana. Fino a 25 MB.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItFlacToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="FLAC → MP3 · Gratis · Senza registrazione"
      h1={<>FLAC in MP3<br /><span className="text-brand-600">Convertitore online gratuito</span></>}
      subtitle="Trascina un file FLAC. Ottieni un MP3 portatile un terzo della dimensione, si riproduce ovunque. Senza filigrana, senza email."
      tool={<ConverterZone from="flac" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Trascina il FLAC', desc: 'Trascina il tuo FLAC nel riquadro. File fino a 25 MB in anonimo, 60 MB con registrazione.' },
        { icon: '⚡', title: 'ffmpeg ri-codifica in MP3', desc: '128 kbps a bitrate costante, 44.1 kHz, layout dei canali preservato. Un FLAC tipico da 25 MB finisce in 3-10 secondi.' },
        { icon: '⬇️', title: 'Scarica il MP3', desc: 'Il risultato mantiene il nome file originale con .mp3. Rimosso dai nostri server entro un\'ora.' },
      ]}
      whyUse={{ title: 'Perché convertire FLAC in MP3', bullets: [
        { title: 'FLAC è senza perdita ma enorme', desc: 'Un FLAC da 5 minuti a bitrate tipici è 25-40 MB. Lo stesso audio come MP3 a 128 kbps è 5 MB. Per telefoni, auto e Bluetooth, quella dimensione conta.' },
        { title: 'La maggior parte degli stereo da auto e degli altoparlanti Bluetooth non riproduce FLAC', desc: 'Anche nel 2026, l\'infotainment di fabbrica dell\'auto e parecchio hardware Bluetooth di fascia media è MP3 o niente. MP3 funziona e basta.' },
        { title: 'A 128 kbps la perdita di qualità è inudibile per quasi tutti', desc: 'Su cuffie consumer, in auto, sugli speaker del telefono, nessuno noterà la differenza. Il compromesso si vede solo su monitor da studio con ascolto critico.' },
        { title: 'iPod, vecchi lettori MP3, app musicali di base, MP3 vince', desc: 'Se stai caricando musica su qualcosa di più vecchio di un iPhone recente, MP3 è la scelta più sicura. Il supporto FLAC su hardware legacy è a tratti.' },
        { title: 'Senza filigrana, senza upsell', desc: 'Solo il tuo audio ri-codificato. Non aggiungiamo niente.' },
      ]}}
      useCases={{ title: 'Quando convertire FLAC in MP3', items: [
        { title: 'Download Bandcamp / Qobuz → libreria telefono', desc: 'Bandcamp ti dà FLAC di default per i download a pagamento. Converti in MP3 per stare in una collezione musicale sul telefono o sincronizzare con un sistema auto che non gestisce FLAC.' },
        { title: 'Rip CD → libreria portatile', desc: 'Se hai rippato CD in FLAC per archiviazione, converti ogni album in MP3 per l\'ascolto quotidiano, tieni i FLAC come master.' },
        { title: 'Export da studio → distribuzione', desc: 'Il tuo produttore musicale potrebbe mandarti FLAC. Converti in MP3 per host podcast, web player o solo per mandare via email il mix grezzo a un collaboratore.' },
        { title: 'Registrazioni sul campo → condivisione veloce', desc: 'Registratori da campo come il Tascam DR-40X o lo Zoom F3 possono registrare in FLAC. Converti prima di condividere con un producer o un sound editor che lavora in MP3.' },
        { title: 'Pulizia libreria', desc: 'Pulisci un vecchio disco di FLAC, tieni gli originali su un NAS, converti in MP3 per uso attivo.' },
      ]}}
      proTips={{ title: 'Consigli per una conversione FLAC in MP3 pulita', tips: [
        { title: 'FLAC è senza perdita quindi la prima codifica va bene', desc: 'Non c\'è penalità di qualità andando FLAC → MP3 una volta. Cominci a sentire artefatti solo quando ri-codifichi di nuovo il MP3, o quando vai MP3 → altri formati con perdita.' },
        { title: 'Per uso audiophile, tieni il FLAC', desc: 'Se ascolti su cuffie di fascia alta, su un DAC dedicato o stai facendo ascolto critico, vale la pena tenere il FLAC. MP3 è per distribuzione e uso casuale.' },
        { title: 'I tag non passano sempre', desc: 'I tag FLAC (Vorbis comments) e i tag MP3 (ID3) sono formati diversi. Il nostro convertitore non trasferisce cover art e metadati dettagliati tra di loro. Aggiungi i tag tu in MusicBrainz Picard o Mp3tag dopo la conversione.' },
        { title: 'FLAC 24-bit/96 kHz si converte come 16-bit/44.1', desc: 'MP3 arriva al massimo a 16-bit/48 kHz nella pratica. Profondità di bit extra e sample rate nella sorgente non sopravvivono alla codifica MP3, ma non danneggiano niente.' },
        { title: 'Per conversione senza perdita, usa ALAC invece', desc: 'Se ti serve senza perdita che si riproduce in iTunes/Apple Music, converti FLAC in ALAC (Apple Lossless) invece, stessa qualità audio, mezza dimensione FLAC in footprint metadati, si riproduce nativamente nell\'ecosistema Apple.' },
        { title: 'Per un bitrate MP3 più alto, ri-esporta da Audacity', desc: 'Il nostro convertitore esce a 128 kbps. Per 320 kbps, apri il MP3 in Audacity (gratis) e ri-esporta. La doppia codifica è appena udibile.' },
      ]}}
      faq={[
        { q: 'La conversione FLAC in MP3 è davvero gratis?', a: 'Sì. Nessun account fino a 25 MB, nessuna filigrana, nessun limite di tempo. I display ad sulle pagine editoriali coprono il costo del server.' },
        { q: 'Qual è la dimensione massima del file?', a: '25 MB anonimo, 60 MB con un account gratuito. Una canzone tipica da 5 minuti in FLAC è 30-40 MB, quindi per album interi potresti dover convertire traccia per traccia.' },
        { q: 'Sentirò una differenza di qualità?', a: 'Sugli speaker del telefono, in auto, su cuffie economiche, no. Su monitor da studio con ascolto critico, forse. Il compromesso è ragionevole per tutto tranne mastering e riproduzione audiophile.' },
        { q: 'La cover art e i metadati si trasferiscono?', a: 'Parzialmente. I tag di base (artista, titolo, album) di solito passano. La cover art e i Vorbis comments dettagliati spesso no. Usa MusicBrainz Picard o Mp3tag dopo la conversione per tag puliti.' },
        { q: 'Che qualità MP3 producete?', a: '128 kbps a bitrate costante, 44.1 kHz, preserva il layout dei canali sorgente.' },
        { q: 'Quanto tempo richiede?', a: 'Pochi secondi. Un FLAC da 25 MB si converte in 3-10 secondi. L\'upload è il collo di bottiglia.' },
        { q: 'Tenete i miei file?', a: 'No. Il caricamento è cancellato dopo la conversione. L\'output è rimosso entro un\'ora dal nostro cron di pulizia.' },
        { q: 'Posso convertire in batch un intero album?', a: 'Non ancora, il piano gratis è un file alla volta. Apri più tab del browser come workaround.' },
        { q: 'Il mio FLAC 24-bit/96 kHz suona uguale al MP3?', a: 'Quasi sicuramente, su riproduzione consumer. Il 24-bit e l\'alto sample rate contano per processing e mastering, non per l\'ascolto attraverso catene audio MP3.' },
        { q: 'Dovrei convertire in ALAC invece?', a: 'Se ti serve audio senza perdita in Apple Music o iTunes, sì, ALAC è l\'equivalente Apple di FLAC. Non produciamo ALAC, ma Audacity sì.' },
        { q: 'Il mio FLAC è da un download Hi-Res. Vale la pena convertire?', a: 'Per ascolto su telefono o in auto, il MP3 suonerà identico. Tieni l\'originale per qualsiasi processing futuro.' },
        { q: 'Posso ottenere più di 128 kbps?', a: 'Non da questo convertitore. Ri-codifica il MP3 in Audacity con il tuo bitrate preferito.' },
      ]}
      relatedLinks={[
        { href: '/it/wav-to-mp3', label: 'WAV in MP3', desc: 'Converti WAV senza perdita in MP3.' },
        { href: '/it/mp3-to-wav', label: 'MP3 in WAV', desc: 'La direzione inversa, MP3 espanso a WAV non compresso.' },
        { href: '/it/flac-to-text', label: 'FLAC in testo', desc: 'Trascrivi audio FLAC direttamente in testo.' },
        { href: '/it/how-to-compress-audio', label: 'Comprimere audio', desc: 'Quando il MP3 deve essere ancora più piccolo.' },
      ]}
    />
  )
}
