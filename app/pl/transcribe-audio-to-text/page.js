import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-audio-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
  'de': 'https://mictoo.com/de/transcribe-audio-to-text',
  'es': 'https://mictoo.com/es/transcribe-audio-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
  'it': 'https://mictoo.com/it/transcribe-audio-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-audio-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-audio-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-audio-to-text',
  'x-default': 'https://mictoo.com/transcribe-audio-to-text',
}

export const metadata = {
  title: 'Audio na tekst — Darmowa transkrypcja audio online | Mictoo',
  description: 'Transkrybuj audio na tekst online za darmo. Prześlij dowolny plik audio i otrzymaj precyzyjną transkrypcję natychmiast. 50+ języków. AI.',
  alternates: { canonical: 'https://mictoo.com/pl/transcribe-audio-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Audio na tekst — Mictoo',
  url: 'https://mictoo.com/pl/transcribe-audio-to-text',
  description: 'Darmowy konwerter audio na tekst online. Obsługuje MP3, WAV, M4A, OGG, FLAC i inne.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function PlAudioToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP3 · WAV · M4A · FLAC · Za darmo"
        h1={<>Audio na tekst<br /><span className="text-brand-600">Darmowa transkrypcja AI</span></>}
        subtitle="Najszybszy sposób na konwersję dowolnego nagrania audio w tekst. Prześlij plik — bez konta, bez subskrypcji, bez czekania."
        defaultLanguage="pl"
        features={[
          { icon: '🎙️', title: 'Wszystkie formaty audio', desc: 'MP3, WAV, M4A, OGG, FLAC, WEBM — dowolny plik audio do 25 MB.' },
          { icon: '🧠', title: 'Precyzja AI', desc: 'Nasze AI jest wytrenowane na setkach tysięcy godzin wielojęzycznego audio, oferując precyzję na poziomie branżowym.' },
          { icon: '🔒', title: 'Prywatnie i bezpiecznie', desc: 'Twoje audio nigdy nie jest przechowywane. Pliki są przetwarzane raz i natychmiastowo usuwane.' },
        ]}
        faq={[
          { q: 'Jaki jest najlepszy darmowy konwerter audio na tekst?', a: 'Mictoo używa AI, uważanego za jeden z najdokładniejszych darmowych modeli rozpoznawania mowy. Obsługuje ponad 50 języków i nie wymaga konta.' },
          { q: 'Jak dokładna jest transkrypcja audio?', a: 'Nasze AI osiąga 95%+ dokładności na czystych nagraniach. Hałas w tle lub mocne akcenty mogą lekko obniżyć dokładność.' },
          { q: 'Jakie formaty audio są obsługiwane?', a: 'MP3, WAV, M4A, OGG, FLAC, WEBM, MPEG. Pliki wideo (MP4) również są akceptowane.' },
          { q: 'Jak długo trwa transkrypcja audio?', a: '10-minutowe nagranie jest zwykle transkrybowane w 15-30 sekund. Bez kolejki — plik jest przetwarzany natychmiast.' },
          { q: 'Czy mogę transkrybować nagranie rozmowy telefonicznej?', a: 'Tak. Nagrania rozmów w MP3, WAV lub M4A działają dobrze. Audio z wieloma mówcami jest transkrybowane jako pojedynczy blok tekstu (etykiety mówców wymagają narzędzia pro).' },
          { q: 'Czy muszę wybierać język?', a: 'Nie — język jest wykrywany automatycznie. Jeśli wykrywanie daje słabe wyniki, możesz wybrać język ręcznie z menu rozwijanego.' },
        ]}
        relatedLinks={[
          { href: '/pl/transcribe-mp3-to-text', label: 'MP3 na tekst' },
          { href: '/pl/transcribe-video-to-text', label: 'Wideo na tekst' },
          { href: '/pl', label: 'Wszystkie formaty' },
        ]}
      />
    </>
  )
}
