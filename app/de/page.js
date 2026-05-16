import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'KI Audio- & Video-Transkription — Kostenlos Online | Mictoo',
  description: 'Audio und Video kostenlos in Text umwandeln. Keine Anmeldung erforderlich. Unterstützt MP3, MP4, WAV und mehr. Betrieben von KI.',
  alternates: {
    canonical: 'https://mictoo.com/de',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'x-default': 'https://mictoo.com',
    },
  },
  openGraph: {
    title: 'Mictoo — Kostenlose KI Audio- & Video-Transkription',
    description: 'Audio oder Video hochladen und in Sekunden ein Transkript erhalten.',
    url: 'https://mictoo.com/de',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — Kostenlose Audio- & Video-Transkription' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — Kostenlose KI-Transkription',
    description: 'Audio oder Video hochladen und in Sekunden ein Transkript erhalten.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function GermanPage() {
  return (
    <LandingLayout
      badge="KI · Kostenlos · Ohne Anmeldung · 50+ Sprachen"
      h1={<>Audio und Video<br /><span className="text-brand-600">mit KI in Text umwandeln, kostenlos</span></>}
      subtitle="Laden Sie eine beliebige Audio- oder Videodatei hoch und erhalten Sie in Sekunden eine genaue KI-Transkription. Kein Konto erforderlich."
      defaultLanguage="de"
      features={[
        {
          icon: '🎙️',
          title: 'Alle Audioformate',
          desc: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Bis zu 25 MB.',
        },
        {
          icon: '🇩🇪',
          title: 'Deutsch und 50+ Sprachen',
          desc: 'Automatische Spracherkennung. Deutsch, Englisch, Französisch und viele weitere Sprachen.',
        },
        {
          icon: '🔒',
          title: 'Datenschutz',
          desc: 'Ihre Dateien werden niemals gespeichert. Verarbeitung und sofortige Löschung.',
        },
      ]}
      faq={[
        {
          q: 'Wie kann ich Audio kostenlos in Text umwandeln?',
          a: 'Laden Sie Ihre Audiodatei oben hoch. Mictoo transkribiert sie automatisch mit Whisper von OpenAI und zeigt den Text innerhalb von Sekunden an.',
        },
        {
          q: 'Wie gut funktioniert die Transkription auf Deutsch?',
          a: 'Sehr gut. Whisper — das Modell von OpenAI, auf dem Mictoo aufbaut — wurde auf vielen Stunden deutschsprachiger Audiodaten trainiert und liefert eine hohe Genauigkeit.',
        },
        {
          q: 'Werden meine Dateien gespeichert?',
          a: 'Nein. Ihre Dateien werden sofort verarbeitet und nicht auf unseren Servern gespeichert.',
        },
      ]}
      relatedLinks={[
        { href: '/', label: 'English' },
        { href: '/fr', label: 'Français' },
        { href: '/es', label: 'Español' },
        { href: '/ru', label: 'Русский' },
      ]}
    />
  )
}
