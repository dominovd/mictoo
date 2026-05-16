import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC in testo — Trascrizione audio AAC gratis online | Mictoo',
  description: 'Trascrivi file audio AAC in testo gratis. Trascina .aac, .m4a o altri file codificati AAC e ottieni una trascrizione precisa in pochi secondi.',
  alternates: { canonical: 'https://mictoo.com/it/aac-to-text', languages: LANGS },
}

export default function ItAacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · M4A · Gratis"
      h1={<>AAC in testo<br /><span className="text-brand-600">Trascrizione AAC gratis online</span></>}
      subtitle="Carica il tuo file audio AAC e ottieni una trascrizione testuale precisa in pochi secondi. Funziona con .aac e .m4a (AAC dentro un contenitore MP4). Senza registrazione."
      defaultLanguage="it"
      features={[
        { icon: '🎧', title: 'Supporto nativo AAC', desc: 'AAC è il codec audio predefinito per dispositivi Apple, YouTube e la maggior parte dei servizi di streaming. Mictoo accetta .aac e .m4a direttamente senza conversione.' },
        { icon: '🎯', title: 'Alta precisione', desc: 'AAC mantiene alta qualità con file piccoli — perfetto per la trascrizione IA. Le registrazioni chiare vengono trascritte tipicamente con 95%+ di precisione.' },
        { icon: '📥', title: 'Modifica ed esporta', desc: 'Rivedi la trascrizione nel browser, correggi nomi e punteggiatura, poi scarica come .txt semplice o sottotitoli .srt.' },
      ]}
      faq={[
        { q: 'Cos\'è un file AAC?', a: 'AAC (Advanced Audio Coding) è un formato di compressione audio lossy usato da iTunes, Apple Music, YouTube e dalla maggior parte delle app podcast. I file hanno estensione .aac o .m4a. AAC offre qualità migliore di MP3 allo stesso bitrate.' },
        { q: 'Qual è la differenza tra .aac e .m4a?', a: 'Entrambi contengono audio codificato in AAC. .aac è il flusso audio grezzo; .m4a lo avvolge in un contenitore MP4 (è così che iTunes e i Voice Memos iPhone lo salvano). Mictoo supporta entrambi direttamente.' },
        { q: 'Come converto AAC in testo gratis?', a: 'Trascina il tuo file AAC nell\'area di upload sopra. Mictoo lo trascrive automaticamente con l\'IA e mostra il testo in pochi secondi. Copialo o scaricalo come .txt.' },
        { q: 'Qual è la dimensione massima del file AAC?', a: 'Fino a 25 MB per upload. AAC a 128 kbps dà circa 25 minuti di audio in 25 MB; a 64 kbps quasi un\'ora. Per file più lunghi, abbassa il bitrate o dividi in segmenti.' },
        { q: 'Posso ottenere timestamp per una trascrizione AAC?', a: 'Sì. Dopo la trascrizione puoi scaricare un file .srt con timestamp precisi — utile per sincronizzare la trascrizione con l\'audio o video originale.' },
      ]}
      relatedLinks={[
        { href: '/it/m4a-to-text', label: 'M4A in testo' },
        { href: '/it/transcribe-mp3-to-text', label: 'MP3 in testo' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
