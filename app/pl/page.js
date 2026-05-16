import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Transkrypcja AI audio i wideo na tekst, za darmo — Mictoo',
  description: 'Przekształć audio i wideo w tekst za darmo online. Bez rejestracji. Z AI. Obsługuje MP3, MP4, WAV i ponad 50 języków.',
  alternates: {
    canonical: 'https://mictoo.com/pl',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'ja': 'https://mictoo.com/ja',
      'x-default': 'https://mictoo.com',
    },
  },
  openGraph: {
    title: 'Mictoo — Darmowa transkrypcja AI audio i wideo',
    description: 'Prześlij audio lub wideo i otrzymaj transkrypcję w kilka sekund.',
    url: 'https://mictoo.com/pl',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — Darmowa transkrypcja AI audio i wideo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — Darmowa transkrypcja AI',
    description: 'Prześlij audio lub wideo i otrzymaj transkrypcję w kilka sekund.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PolishPage() {
  return (
    <LandingLayout
      badge="AI · Za darmo · Bez rejestracji · 50+ języków"
      h1={<>Transkrypcja audio i wideo na tekst<br /><span className="text-brand-600">z AI, za darmo online</span></>}
      subtitle="Prześlij dowolny plik audio lub wideo i otrzymaj precyzyjną transkrypcję AI w kilka sekund. Konto nie jest wymagane."
      defaultLanguage="pl"
      features={[
        {
          icon: '🎙️',
          title: 'Wszystkie formaty audio',
          desc: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Do 25 MB.',
        },
        {
          icon: '🇵🇱',
          title: 'Polski i ponad 50 języków',
          desc: 'Automatyczne wykrywanie języka. Działa z polskim, angielskim, hiszpańskim, francuskim i wieloma innymi.',
        },
        {
          icon: '📥',
          title: 'Pobierz jako .txt lub .srt',
          desc: 'Edytuj transkrypcję w przeglądarce i pobierz jako tekst lub napisy.',
        },
      ]}
      faq={[
        {
          q: 'Jak przekształcić audio w tekst za darmo?',
          a: 'Prześlij plik audio powyżej. Mictoo automatycznie transkrybuje go z pomocą Whisper od OpenAI i pokazuje tekst w kilka sekund.',
        },
        {
          q: 'Czy rozpoznawanie mowy działa dobrze dla polskiego?',
          a: 'Tak. Whisper, model na którym opiera się Mictoo, został wytrenowany na tysiącach godzin polskiego audio i oferuje wysoką dokładność.',
        },
        {
          q: 'Czy moje pliki są zapisywane na serwerze?',
          a: 'Nie. Pliki są przetwarzane natychmiastowo i nie są przechowywane na naszych serwerach.',
        },
      ]}
      relatedLinks={[
        { href: '/', label: 'English' },
        { href: '/fr', label: 'Français' },
        { href: '/de', label: 'Deutsch' },
        { href: '/es', label: 'Español' },
        { href: '/ru', label: 'Русский' },
        { href: '/it', label: 'Italiano' },
        { href: '/pt', label: 'Português' },
      ]}
    />
  )
}
