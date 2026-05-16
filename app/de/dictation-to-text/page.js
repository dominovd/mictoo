import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/dictation-to-text',
  'fr': 'https://mictoo.com/fr/dictation-to-text',
  'de': 'https://mictoo.com/de/dictation-to-text',
  'es': 'https://mictoo.com/es/dictation-to-text',
  'ru': 'https://mictoo.com/ru/dictation-to-text',
  'it': 'https://mictoo.com/it/dictation-to-text',
  'pt': 'https://mictoo.com/pt/dictation-to-text',
  'x-default': 'https://mictoo.com/dictation-to-text',
}

export const metadata = {
  title: 'Diktat zu Text — Kostenlose Transkription von Sprachdiktat | Mictoo',
  description: 'Wandeln Sie diktierte Audioaufnahmen kostenlos in Text um. Ideal für Autoren, Ärzte, Anwälte und Forscher. Unterstützt MP3, M4A, WAV. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/dictation-to-text', languages: LANGS },
}

export default function DeDictationPage() {
  return (
    <LandingLayout
      badge="Diktat · Sprache → Text · Kostenlos"
      h1={<>Diktat zu Text<br /><span className="text-brand-600">Kostenlose Sprachdiktat-Transkription</span></>}
      subtitle="Nehmen Sie Ihre Gedanken auf, diktieren Sie ein Kapitel oder Notizen — laden Sie die Datei dann hier hoch und erhalten Sie eine genaue Texttranskription. Keine Anmeldung, keine App-Installation."
      defaultLanguage="de"
      features={[
        { icon: '📝', title: 'Für Autoren und Forscher', desc: 'Diktieren Sie ein Kapitel-Entwurf, eine Artikel-Gliederung oder Interview-Notizen. Mictoo verwandelt Ihre Stimme in Sekunden in sauberen, bearbeitbaren Text.' },
        { icon: '👨‍⚕️', title: 'Für Ärzte und Anwälte', desc: 'Diktieren Sie Falldetails, Patientenzusammenfassungen oder Memos auf dem Handy und wandeln Sie sie für Ihre Akten in Text um. Dateien werden verarbeitet und sofort gelöscht.' },
        { icon: '🌍', title: '50+ Sprachen', desc: 'Diktieren Sie auf Deutsch, Englisch, Spanisch, Französisch, Russisch, Japanisch und viele mehr. Sprache wird automatisch erkannt; bei Bedarf überschreibbar.' },
      ]}
      faq={[
        { q: 'Wie nehme ich Diktate auf meinem Handy auf?', a: 'iPhone: Voice-Memos-App — Export als .m4a. Android: integrierter Sprachrekorder oder Easy Voice Recorder — Export als .mp3 oder .m4a. Datei in Mictoo ablegen.' },
        { q: 'Ist Mictoo ein Echtzeit-Diktiertool?', a: 'Nein — Mictoo transkribiert bestehende Audiodateien. Für Echtzeit-Diktat (sprechen und Text erscheint) nutzen Sie die System-Diktatfunktion (macOS, Windows, iOS, Android). Mictoo eignet sich danach für die Aufbereitung längerer Aufnahmen.' },
        { q: 'Wie genau ist die Diktat-Transkription?', a: 'Klares Diktat mit einem einzigen Sprecher wird mit 95%+ Genauigkeit transkribiert. Sprechen Sie im natürlichen Tempo, in ruhiger Umgebung, und nutzen Sie für beste Ergebnisse ein Headset.' },
        { q: 'Kann ich es für medizinische oder juristische Diktate verwenden?', a: 'Ja, aber prüfen Sie lokale Vorschriften zur KI-Verarbeitung von Patienten- oder Mandantendaten. Mictoo speichert nie Dateien — aber das Audio läuft durch unseren KI-Anbieter zur Transkription. Für HIPAA-regulierte Workflows konsultieren Sie Ihr Compliance-Team.' },
        { q: 'Was ist die maximale Diktatlänge?', a: 'Bis zu 25 MB. Bei 64 kbps Mono entspricht das etwa 50 Minuten Diktat. Für längere Aufnahmen in Kapitel teilen oder die Bitrate senken.' },
      ]}
      relatedLinks={[
        { href: '/de/voice-memo-to-text', label: 'Sprachmemo zu Text' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
