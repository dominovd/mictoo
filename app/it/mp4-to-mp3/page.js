import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp4-to-mp3',
  'fr': 'https://mictoo.com/fr/mp4-to-mp3',
  'de': 'https://mictoo.com/de/mp4-to-mp3',
  'es': 'https://mictoo.com/es/mp4-to-mp3',
  'ru': 'https://mictoo.com/ru/mp4-to-mp3',
  'it': 'https://mictoo.com/it/mp4-to-mp3',
  'pt': 'https://mictoo.com/pt/mp4-to-mp3',
  'pl': 'https://mictoo.com/pl/mp4-to-mp3',
  'ja': 'https://mictoo.com/ja/mp4-to-mp3',
  'ko': 'https://mictoo.com/ko/mp4-to-mp3',
  'x-default': 'https://mictoo.com/mp4-to-mp3',
}

export const metadata = {
  title: 'MP4 in MP3 — convertitore online gratuito | Mictoo',
  description:
    'Converti MP4 in MP3 online gratis. Trascina il tuo video, ottieni un file audio MP3 pulito a 128 kbps in pochi secondi. Senza registrazione, senza filigrana, senza email. Fino a 25 MB.',
  alternates: { canonical: 'https://mictoo.com/it/mp4-to-mp3', languages: LANGS },

  openGraph: {
    title: "MP4 in MP3 — convertitore online gratuito | Mictoo",
    description: "Converti MP4 in MP3 online gratis. Trascina il tuo video, ottieni un file audio MP3 pulito a 128 kbps in pochi secondi. Senza registrazione, senza filigrana, senza email. Fino a 25 MB.",
    url: "https://mictoo.com/it/mp4-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP4 in MP3 — convertitore online gratuito | Mictoo",
    description: "Converti MP4 in MP3 online gratis. Trascina il tuo video, ottieni un file audio MP3 pulito a 128 kbps in pochi secondi. Senza registrazione, senza filigrana, senza email. Fino a 25 MB.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItMp4ToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="MP4 → MP3 · Gratis · Senza registrazione"
      h1={<>MP4 in MP3<br /><span className="text-brand-600">Convertitore online gratuito</span></>}
      subtitle="Trascina un video MP4. Ottieni un file audio MP3. Senza filigrana, senza email, senza sala d&apos;attesa. ffmpeg lato server, pronto in pochi secondi."
      tool={<ConverterZone from="mp4" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Trascina il MP4', desc: 'Trascina qualsiasi video MP4 nel riquadro o clicca per sceglierne uno. File fino a 25 MB passano in modo anonimo. Accedi se ti servono 60 MB.' },
        { icon: '⚡', title: "Estraiamo l'audio", desc: 'ffmpeg gira lato server, rimuove il flusso video e ri-codifica l\'audio come MP3 stereo a 128 kbps a 44.1 kHz. Un video da 25 MB di solito finisce in 5-15 secondi.' },
        { icon: '⬇️', title: 'Scarica il MP3', desc: 'Il pulsante di download ti dà il file con il nome originale più l\'estensione .mp3. Il tuo caricamento e il risultato vengono entrambi cancellati dai nostri server entro un\'ora.' },
      ]}
      whyUse={{ title: 'Perché Mictoo per MP4 in MP3', bullets: [
        { title: "Solo la conversione. Nient'altro", desc: 'Niente popup, niente conto alla rovescia, niente finto piano "gratis" che ti spinge a pagare. Trascina, converti, scarica.' },
        { title: 'MP3 a 128 kbps, leggero e universale', desc: "Quel bitrate è il giusto compromesso per la voce parlata: circa 1 MB al minuto, si riproduce ovunque, suona pulito. Non offriamo un selettore di qualità perché le scelte aggiungono attrito senza dare valore per l'uso tipico." },
        { title: 'I file non restano sui nostri server', desc: 'Il tuo MP4 finisce su Vercel Blob storage, viene convertito e cancellato subito. Anche il MP3 viene rimosso dalla nostra pulizia oraria. Tieni una copia in locale.' },
        { title: 'Senza filigrana, senza tag audio', desc: 'Molti convertitori gratuiti aggiungono una loro intro "Converted by FreeMP3.com". Noi non tocchiamo l\'audio, lo ri-codifichiamo e basta.' },
        { title: "La maggior parte degli altri convertitori gratuiti è un guscio pubblicitario", desc: 'Molti siti che trovi su Google per "mp4 to mp3" sono porte AdSense che dirottano il pulsante indietro o lanciano falsi avvisi di virus. Noi siamo un progetto SEO indie finanziato da display ad sulle pagine editoriali, non nel flusso di conversione.' },
      ]}}
      useCases={{ title: 'Quando convertire MP4 in MP3', items: [
        { title: 'Salvare un podcast che hai come video', desc: 'Molti feed di podcast vengono pubblicati anche come upload YouTube o MP4 Vimeo. Se hai solo la copia video, il MP3 la rende compatibile con il telefono e dieci volte più piccola.' },
        { title: 'Estrarre musica o audio da una registrazione di una lezione', desc: 'Zoom e Teams esportano in MP4. Ti serve solo l\'audio se vuoi ascoltare in viaggio, trascrivere o passare a un software di editing.' },
        { title: 'Ridurre un video da 1 GB per poterlo inviare via email', desc: "Un video di 1 ora a 1080p può facilmente arrivare a 1 GB. L'audio della stessa registrazione è 30-60 MB a qualità piena, spesso sotto i 30 MB a 128 kbps. Improvvisamente inviabile via email." },
        { title: 'Passare a una trascrizione che si aspetta audio', desc: 'Il nostro strumento di trascrizione accetta MP4 direttamente, ma strumenti di terze parti, editor audio e DAW di solito vogliono audio puro. MP3 è il formato minimo comune denominatore.' },
        { title: 'Musica di sottofondo per uno screencast o una slideshow', desc: 'Molti MP4 di tutorial YouTube contengono musica o narrazione che potresti voler come clip a sé. Converti e trascina in iMovie, Audacity o Logic.' },
      ]}}
      proTips={{ title: 'Consigli per una conversione MP4 in MP3 pulita', tips: [
        { title: 'Se il MP4 è enorme, tagliali prima', desc: 'Il nostro limite è 25 MB senza registrazione, 60 MB con. Un video 1080p molto oltre i dieci minuti non passerà. Aprilo in QuickTime (Mac) o nell\'app Foto (Windows), taglia solo la parte che ti serve e ri-esporta.' },
        { title: '128 kbps è abbondante per la voce, perfetto per la musica', desc: 'Per la voce parlata un MP3 a 64 kbps sarebbe la metà del peso senza perdita udibile. Standardizziamo a 128 kbps perché la maggior parte delle persone non è sicura di cosa ci sia nel video e 128 suona pulito in entrambi i casi.' },
        { title: 'Se il video sorgente ha più tracce audio, viene letta solo quella di default', desc: 'Film, rip di DVD e alcuni export di lezioni includono più tracce di lingua. Il nostro convertitore prende la traccia di default. Se ti serve la traccia secondaria, cambia la traccia di default nel tuo editor video e ri-esporta il MP4 prima di caricarlo.' },
        { title: 'I vecchi MP4 da videocamere potrebbero non decodificare', desc: 'AVCHD e altri MP4 dell\'era videocamere a volte usano codec che ffmpeg non legge senza librerie extra. Se la conversione fallisce, apri il file in HandBrake (gratis, tutte le piattaforme), ri-esporta come MP4 H.264 standard, poi riprova.' },
        { title: 'Ti serve 320 kbps o VBR? Usa Audacity dopo', desc: 'Il nostro MP3 è a bitrate costante 128 kbps. Se ti serve un bitrate più alto o un file VBR, prendi il MP3, aprilo in Audacity (anche questo gratis) e ri-esporta con le tue impostazioni preferite. La perdita di qualità dalla ri-codifica a bitrate più alto è trascurabile.' },
        { title: 'Per contenuti protetti (film iTunes, DRM), fallirà', desc: 'I MP4 protetti da DRM non possono essere letti da ffmpeg. Non decifriamo mai contenuti protetti da copyright. Se il file viene da un servizio di streaming, probabilmente non hai il diritto di convertirlo.' },
      ]}}
      faq={[
        { q: 'Il convertitore MP4 in MP3 è davvero gratis?', a: "Sì. Nessun account necessario per file fino a 25 MB, nessun limite di tempo, nessuna filigrana sull\'output, nessun trucco \"prima conversione gratis poi aggiornamento\". Copriamo i costi del server con display ad sulle pagine editoriali (non nel convertitore stesso)." },
        { q: 'Qual è la dimensione massima del file?', a: "25 MB senza account, 60 MB se accedi (gratis). Il budget delle funzioni Vercel è il vero limite. Tagliamo sotto per tenere la conversione sotto i 60 secondi per tutti." },
        { q: 'Quanto tempo richiede la conversione?', a: "Per un MP4 tipico da 10-20 MB (qualche minuto di video) finisce in 5-15 secondi. Il collo di bottiglia è la tua velocità di upload, non la conversione, ffmpeg attraversa la ri-codifica audio molto più veloce del tempo reale." },
        { q: 'Che qualità ha il MP3?', a: "128 kbps a bitrate costante, 44.1 kHz, stereo. È l\'impostazione universale \"abbastanza buona per tutto\": indistinguibile dall\'originale per la maggior parte degli ascoltatori, voce o musica, circa 1 MB al minuto di audio." },
        { q: 'Tenete i miei file?', a: "No. Il tuo caricamento sta su Vercel Blob storage giusto il tempo di essere convertito, poi lo cancelliamo. Il MP3 risultante viene rimosso entro un\'ora dal nostro cron di pulizia. Salva il MP3 in locale, non possiamo ri-inviarlo." },
        { q: 'Il risultato avrà una filigrana o un tag audio?', a: "No. Non inseriamo intro \"Converted by Mictoo\" o outro brandizzati. Il MP3 è solo l\'audio originale ri-codificato." },
        { q: 'Posso convertire video YouTube con questo?', a: "Puoi convertire qualsiasi file MP4 di cui hai i diritti. Non scarichiamo video da YouTube, ci metterebbe in conflitto con i termini di servizio di YouTube. Usa uno strumento come 4K Video Downloader o yt-dlp per salvare il MP4 in locale, poi trascinalo qui." },
        { q: 'Perché i formati sono limitati al solo MP4?', a: "Ogni convertitore è un URL con un solo compito. MP4 in MP3 sta su /mp4-to-mp3, WAV in MP3 sta su /wav-to-mp3, e così via. Scegliere quello giusto ci dice cosa aspettarci e dà a Google una pagina pulita da posizionare." },
        { q: 'Il mio MP4 è fallito con \"codec non supportato\". E ora?', a: "I vecchi MP4 da videocamere e alcuni file protetti da DRM usano codec che ffmpeg non decodifica di default. Apri il file in HandBrake (gratis), ri-esporta come MP4 H.264 standard e riprova. Se fallisce ancora, il file è probabilmente bloccato da DRM." },
        { q: 'Funziona su mobile?', a: "Sì. La pagina è mobile-friendly e i caricamenti funzionano da Safari iOS e Chrome Android. Su iPhone potresti dover condividere il video su File prima così il selettore di file può raggiungerlo." },
        { q: 'I MP3 sono con perdita? Devo preoccuparmi?', a: "Sì, MP3 è con perdita. A 128 kbps la perdita è inudibile per quasi tutti gli ascoltatori su quasi tutto il materiale sorgente. Se ti serve senza perdita, ad esempio per il mastering musicale, converti MP4 in WAV invece." },
        { q: 'Perché niente upload batch?', a: "Il piano gratis è un file alla volta. Il batch è nella roadmap del piano Pro quando uscirà. Per ora puoi lanciare diverse conversioni in parallelo in più tab del browser." },
      ]}
      relatedLinks={[
        { href: '/it/wav-to-mp3', label: 'WAV in MP3', desc: 'Riduci file WAV senza perdita in MP3 compatti.' },
        { href: '/it/webm-to-mp3', label: 'WEBM in MP3', desc: 'Estrai MP3 da un WEBM (spesso quello che ti danno i downloader YouTube).' },
        { href: '/it/transcribe-video-to-text', label: 'Video in testo', desc: 'Salta il passaggio MP3, vai dritto a una trascrizione testuale del video.' },
        { href: '/it/how-to-compress-audio', label: 'Comprimere audio', desc: 'Quando il tuo MP3 è ancora troppo grande da condividere.' },
      ]}
    />
  )
}
