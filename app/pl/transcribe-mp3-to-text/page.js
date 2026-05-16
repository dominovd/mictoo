import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3 na tekst — Darmowa transkrypcja MP3 online | Mictoo',
  description: 'Konwertuj MP3 na tekst online za darmo. Prześlij plik MP3 i otrzymaj precyzyjną transkrypcję w kilka sekund. AI. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/transcribe-mp3-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'MP3 na tekst — Mictoo',
  url: 'https://mictoo.com/pl/transcribe-mp3-to-text',
  description: 'Darmowy konwerter MP3 na tekst online z AI.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function PlMP3ToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="Za darmo · Bez rejestracji · Natychmiast"
        h1={<>Konwersja MP3 na tekst<br /><span className="text-brand-600">Online, za darmo</span></>}
        subtitle="Prześlij dowolny plik MP3 i otrzymaj precyzyjną transkrypcję tekstową w kilka sekund. Działa dla wywiadów, podcastów, wykładów, notatek głosowych i więcej."
        defaultLanguage="pl"
        features={[
          { icon: '🎵', title: 'Każdy MP3', desc: 'Działa z nagraniami głosowymi, odcinkami podcastów, wywiadami muzycznymi, wykładami — dowolny MP3 do 25 MB.' },
          { icon: '🌍', title: '50+ języków', desc: 'Automatyczne wykrywanie języka. Twój MP3 może być po polsku, angielsku, hiszpańsku, francusku lub w 47 innych językach.' },
          { icon: '📋', title: 'Kopiuj lub pobierz', desc: 'Otrzymaj transkrypcję jako edytowalny tekst. Pobierz jako .txt lub .srt (napisy).' },
        ]}
        faq={[
          { q: 'Jak skonwertować MP3 na tekst?', a: 'Prześlij plik MP3 narzędziem powyżej. Mictoo transkrybuje go automatycznie przez AI i pokazuje tekst w kilka sekund.' },
          { q: 'Czy konwersja MP3 na tekst jest darmowa?', a: 'Tak, całkowicie darmowa. Bez konta. Po prostu prześlij i transkrybuj.' },
          { q: 'Jaki jest maksymalny rozmiar MP3?', a: 'Do 25 MB. Dla dłuższych nagrań skompresuj plik lub podziel na krótsze segmenty.' },
          { q: 'Jak dokładna jest transkrypcja MP3?', a: 'Mictoo używa AI, które typowo osiąga 95%+ dokładności na czystych nagraniach. Jakość może się różnić przy dużym hałasie w tle lub mocnych akcentach.' },
          { q: 'Czy mogę otrzymać napisy z pliku MP3?', a: 'Tak. Po transkrypcji kliknij przycisk .srt, aby pobrać plik napisów z timestampami.' },
        ]}
        relatedLinks={[
          { href: '/pl/transcribe-audio-to-text', label: 'Audio na tekst' },
          { href: '/pl/transcribe-video-to-text', label: 'Wideo na tekst' },
          { href: '/pl', label: 'Wszystkie formaty' },
        ]}
      />
    </>
  )
}
