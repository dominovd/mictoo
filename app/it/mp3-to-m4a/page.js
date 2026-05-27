import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-m4a',
  'fr': 'https://mictoo.com/fr/mp3-to-m4a',
  'de': 'https://mictoo.com/de/mp3-to-m4a',
  'es': 'https://mictoo.com/es/mp3-to-m4a',
  'ru': 'https://mictoo.com/ru/mp3-to-m4a',
  'it': 'https://mictoo.com/it/mp3-to-m4a',
  'pt': 'https://mictoo.com/pt/mp3-to-m4a',
  'pl': 'https://mictoo.com/pl/mp3-to-m4a',
  'ja': 'https://mictoo.com/ja/mp3-to-m4a',
  'ko': 'https://mictoo.com/ko/mp3-to-m4a',
  'x-default': 'https://mictoo.com/mp3-to-m4a',
}

export const metadata = {
  title: 'MP3 in M4A — convertitore online gratuito | Mictoo',
  description:
    'Converti MP3 in M4A online gratis. Ri-codifica MP3 in AAC dentro un contenitore M4A per iPhone, iTunes e l\'ecosistema Apple. Senza registrazione, senza filigrana.',
  alternates: { canonical: 'https://mictoo.com/it/mp3-to-m4a', languages: LANGS },
}

export default function ItMp3ToM4aPage() {
  return (
    <LandingLayout
      defaultLanguage="it"
      badge="MP3 → M4A · Gratis · Senza registrazione"
      h1={<>MP3 in M4A<br /><span className="text-brand-600">Convertitore online gratuito</span></>}
      subtitle="Trascina un MP3. Ottieni un M4A, audio AAC dentro un contenitore MP4. Si riproduce nativamente in iTunes, Apple Music e su ogni iPhone. Senza filigrana, senza email."
      tool={<ConverterZone from="mp3" to="m4a" />}
      howItWorks={[
        { icon: '📂', title: 'Trascina il MP3', desc: 'Trascina qualsiasi MP3 nel riquadro. Fino a 25 MB in anonimo, 60 MB dopo la registrazione.' },
        { icon: '⚡', title: 'ffmpeg ri-codifica in AAC', desc: 'AAC a 128 kbps dentro un contenitore M4A, con il flag faststart così si riproduce subito quando trasmesso in streaming. Finisce in 3-10 secondi.' },
        { icon: '⬇️', title: 'Scarica il M4A', desc: 'Il risultato ha il nome originale con .m4a. I file vengono rimossi dai nostri server entro un\'ora.' },
      ]}
      whyUse={{ title: 'Perché convertire MP3 in M4A', bullets: [
        { title: "L'ecosistema Apple preferisce M4A", desc: 'iTunes, Apple Music, iCloud Music Library, GarageBand, tutti gestiscono M4A come formato di prima classe. Anche MP3 funziona, ma M4A è quello che parlano nativamente.' },
        { title: 'AAC suona leggermente meglio di MP3 allo stesso bitrate', desc: 'A 128 kbps la differenza è piccola ma reale, soprattutto nelle alte frequenze. Se il tuo MP3 sorgente è già con perdita, questa ri-codifica non lo rende peggio.' },
        { title: 'M4A supporta marker di capitolo e metadati più ricchi', desc: 'Se stai facendo audiolibri, file preview podcast o qualsiasi cosa per l\'ecosistema Apple, M4A gestisce i capitoli in modo pulito. Il supporto capitoli di MP3 è ballerino.' },
        { title: 'Le suonerie iPhone devono essere M4A', desc: 'Le suonerie iPhone personalizzate usano l\'estensione M4R, stesso formato AAC-in-MP4 di M4A. Converti e rinomina in .m4r per uso suoneria.' },
        { title: 'Senza filigrana, senza upsell', desc: 'Il tuo audio ri-codificato, niente altro.' },
      ]}}
      useCases={{ title: 'Quando convertire MP3 in M4A', items: [
        { title: 'Importare una collezione musicale in Apple Music', desc: 'M4A si importa pulito e si integra con iCloud Music Library. I MP3 possono occasionalmente avere problemi di metadati durante la sincronizzazione.' },
        { title: 'Fare una suoneria iPhone', desc: 'Converti MP3 → M4A, taglia sotto i 40 secondi, rinomina in .m4r, trascina nel Finder mentre l\'iPhone è connesso.' },
        { title: 'Audiolibro con marker di capitolo', desc: 'M4A supporta i capitoli; il supporto MP3 è inaffidabile. Per audiolibri lunghi dove gli ascoltatori vogliono saltare tra i capitoli, M4A è il formato giusto.' },
        { title: 'Pulizia di voice memo per iCloud', desc: 'Se hai una cartella di voice memo MP3 e li vuoi in iCloud o Apple Voice Memos, M4A è più nativo e si sincronizza in modo più affidabile.' },
        { title: 'Progetto GarageBand o Logic', desc: 'Quando importi audio di riferimento nel software musicale di Apple, M4A entra più liscio di MP3 in alcuni workflow.' },
      ]}}
      proTips={{ title: 'Consigli per la conversione MP3 in M4A', tips: [
        { title: 'La ri-codifica aggiunge una piccola perdita', desc: 'Stai andando da un formato con perdita a un altro. A 128 kbps AAC da un MP3 a 128 kbps, la perdita è reale ma inudibile per quasi tutti su quasi tutto. Per uso critico, trova una sorgente senza perdita.' },
        { title: 'Per le suonerie, taglia prima di convertire', desc: 'Le suonerie iPhone si fermano a 40 secondi. Taglia il MP3 in Audacity o QuickTime prima, poi converti.' },
        { title: 'AAC a 96 kbps di solito batte MP3 a 128 kbps', desc: 'Il nostro convertitore esce a 128 kbps per compatibilità, ma se hai pieno controllo potresti andare più basso con AAC e ancora pareggiare la qualità MP3. Non offriamo il selettore per tenere lo strumento semplice.' },
        { title: 'M4A vs MP4, stesso contenitore, convenzione diversa', desc: 'I file M4A contengono solo audio. I file MP4 possono contenere video, audio o entrambi. iTunes usa l\'estensione .m4a per rendere la distinzione ovvia. Alcuni player accettano entrambe le estensioni.' },
        { title: 'I marker di capitolo non vengono aggiunti da noi', desc: 'Ri-codifichiamo solo l\'audio. Per aggiungere marker di capitolo, usa Apple Books per audiolibri o uno strumento dedicato come Chapter and Verse.' },
        { title: 'Per MP3 protetti da DRM, la conversione fallirà', desc: 'Il DRM è estremamente raro per MP3 nel 2026, ma se ne hai uno in qualche modo, non si decodificherà.' },
      ]}}
      faq={[
        { q: 'La conversione MP3 in M4A è davvero gratis?', a: 'Sì. Nessun account fino a 25 MB, nessuna filigrana, nessun limite di tempo.' },
        { q: 'Qual è la dimensione massima del file?', a: '25 MB anonimo, 60 MB con un account gratuito.' },
        { q: 'Il M4A suonerà peggio del MP3?', a: 'Teoricamente sì, ri-codificare qualsiasi formato con perdita aggiunge una piccola perdita. In pratica, a 128 kbps AAC da un MP3 a 128 kbps, nessun essere umano può sentire la differenza su riproduzione consumer.' },
        { q: 'Qual è la differenza tra M4A e MP4?', a: 'M4A e MP4 sono lo stesso formato contenitore. L\'estensione .m4a segnala solo "solo audio" così iTunes sa cosa farne. Alcuni player accettano entrambe le estensioni.' },
        { q: 'Quanto tempo richiede?', a: 'Pochi secondi. Un MP3 da 25 MB si converte in 3-10 secondi.' },
        { q: 'Che qualità producete?', a: '128 kbps AAC dentro un contenitore M4A, 44.1 kHz, layout dei canali sorgente preservato.' },
        { q: 'Tenete i miei file?', a: 'No. Il caricamento è cancellato dopo la conversione. L\'output è rimosso entro un\'ora.' },
        { q: 'Posso fare una suoneria iPhone con questo?', a: 'Indirettamente. Converti MP3 in M4A, taglia sotto i 40 secondi in QuickTime, rinomina il .m4a in .m4r, trascina nel Finder con l\'iPhone connesso.' },
        { q: 'iTunes accetterà il risultato?', a: "Sì. M4A è il formato nativo di iTunes." },
        { q: 'Il mio MP3 è già a 320 kbps. Dovrei convertire?', a: 'Solo se ti serve specificamente M4A per compatibilità. Il risultato sarà AAC a 128 kbps, tecnicamente un calo di qualità dal MP3 a 320 kbps, ma praticamente inudibile sulla maggior parte delle riproduzioni. Per preservare la qualità a 320 kbps ti servirebbe un convertitore diverso che ti permetta di impostare bitrate più alti.' },
        { q: 'I tag si trasferiscono?', a: 'I tag di base (titolo, artista, album) di solito sì. La cover art e i commenti dettagliati sono ballerini tra MP3 ID3 e metadati iTunes M4A. Ri-tagga in iTunes o Mp3tag dopo la conversione.' },
        { q: 'Posso fare conversione batch?', a: 'Non ancora nel piano gratis. Apri più tab del browser per convertire diversi file in parallelo.' },
      ]}
      relatedLinks={[
        { href: '/it/m4a-to-mp3', label: 'M4A in MP3', desc: 'La direzione inversa.' },
        { href: '/it/wav-to-mp3', label: 'WAV in MP3', desc: 'Riduci WAV in MP3 portatile.' },
        { href: '/it/m4a-to-text', label: 'M4A in testo', desc: 'Trascrivi audio M4A direttamente.' },
        { href: '/it/how-to-compress-audio', label: 'Comprimere audio', desc: 'Per file che devono essere ancora più piccoli.' },
      ]}
    />
  )
}
