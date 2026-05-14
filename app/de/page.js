import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Audio in Text umwandeln — Kostenlose Transkription | Mictoo',
  description: 'Audio und Video kostenlos in Text umwandeln. Keine Anmeldung erforderlich. Unterstützt MP3, MP4, WAV und mehr. Betrieben von AI.',
  alternates: { canonical: 'https://mictoo.com/de' },
}

export default function GermanPage() {
  return (
    <LandingLayout
      badge="Kostenlos · Ohne Anmeldung · KI"
      h1={<>Audio in Text umwandeln<br /><span className="text-brand-600">Kostenlos Online</span></>}
      subtitle="Laden Sie eine beliebige Audio- oder Videodatei hoch und erhalten Sie in Sekunden eine genaue Transkription. Kein Konto erforderlich."
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
          a: 'Laden Sie Ihre Audiodatei oben hoch. Mictoo transkribiert sie automatisch mit KI und zeigt den Text innerhalb von Sekunden an.',
        },
        {
          q: 'Wie gut funktioniert die Transkription auf Deutsch?',
          a: 'Sehr gut. AI wurde auf Stunden deutschsprachiger Audiodaten trainiert und liefert eine hohe Genauigkeit.',
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
      ]}
    />
  )
}
