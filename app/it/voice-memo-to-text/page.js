import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/voice-memo-to-text',
  'fr': 'https://mictoo.com/fr/voice-memo-to-text',
  'de': 'https://mictoo.com/de/voice-memo-to-text',
  'es': 'https://mictoo.com/es/voice-memo-to-text',
  'ru': 'https://mictoo.com/ru/voice-memo-to-text',
  'it': 'https://mictoo.com/it/voice-memo-to-text',
  'pt': 'https://mictoo.com/pt/voice-memo-to-text',
  'pl': 'https://mictoo.com/pl/voice-memo-to-text',
  'ja': 'https://mictoo.com/ja/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: 'Memo vocale in testo — Trascrivi Voice Memos iPhone gratis | Mictoo',
  description: 'Converti gratis i memo vocali iPhone e le registrazioni Android in testo. Supporta M4A e MP3. Senza registrazione, senza app. Trascrizione IA precisa.',
  alternates: { canonical: 'https://mictoo.com/it/voice-memo-to-text', languages: LANGS },
}

export default function ItVoiceMemoPage() {
  return (
    <LandingLayout
      badge="iPhone · Android · Gratis"
      h1={<>Memo vocale in testo<br /><span className="text-brand-600">Trascrizione gratuita online</span></>}
      subtitle="Carica il tuo memo vocale iPhone o la registrazione Android e ottieni una trascrizione precisa in pochi secondi. Senza registrazione, senza app da installare."
      defaultLanguage="it"
      features={[
        { icon: '📱', title: 'iPhone e Android', desc: 'I Voice Memos iPhone si esportano in .m4a — pienamente supportati. I registratori vocali Android esportano in .m4a, .mp3 o .wav — tutti supportati.' },
        { icon: '🧠', title: 'Ideale per appunti e idee', desc: 'Trasforma note vocali, sessioni di brainstorming e promemoria in testo ricercabile da incollare in Notion, Obsidian o nel tuo editor preferito.' },
        { icon: '🆓', title: '100% gratis', desc: 'Nessun abbonamento, nessun acquisto in-app, nessuna filigrana. Nessun tetto mensile — carica un memo quando ti serve una trascrizione.' },
      ]}
      faq={[
        { q: 'Come trasferire un Voice Memo iPhone al computer?', a: 'Apri l\'app Voice Memos, tocca il memo, poi "…" e "Condividi" → "Salva in File" o AirDrop al tuo Mac. Poi carica il file .m4a su Mictoo dal computer.' },
        { q: 'Posso trascrivere direttamente su iPhone?', a: 'Sì. Apri mictoo.com in Safari sull\'iPhone, tocca l\'area di upload e scegli un Voice Memo dall\'app File. La trascrizione appare in pochi secondi e puoi copiarla o scaricarla come .txt.' },
        { q: 'In che formato Android salva le registrazioni vocali?', a: 'La maggior parte degli smartphone Android salva in .m4a o .mp3 a seconda dell\'app del registratore. Entrambi sono supportati. Alcune app usano .amr — convertilo prima in .m4a con un convertitore gratuito.' },
        { q: 'La mia registrazione vocale è privata?', a: 'Sì. I file vengono inviati al motore IA solo per la trascrizione e non vengono mai memorizzati sui nostri server. La trascrizione rimane nel tuo browser ed è solo tua.' },
        { q: 'E se il mio memo supera 25 MB?', a: 'I Voice Memos iPhone occupano circa 1 MB al minuto in qualità predefinita — quindi 25 minuti entrano in 25 MB. Per memo più lunghi, cambia la qualità di Voice Memos su "Compresso" in Impostazioni → Memo Vocali, o dividi la registrazione.' },
      ]}
      relatedLinks={[
        { href: '/it', label: 'Tutti i formati' },
        { href: '/it/meeting-transcription', label: 'Trascrizione di riunioni' },
        { href: '/it/interview-transcription', label: 'Trascrizione di interviste' },
      ]}
    />
  )
}
