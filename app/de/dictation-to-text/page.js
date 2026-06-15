import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/dictation-to-text',
  'fr': 'https://mictoo.com/fr/dictation-to-text',
  'de': 'https://mictoo.com/de/dictation-to-text',
  'es': 'https://mictoo.com/es/dictation-to-text',
  'ru': 'https://mictoo.com/ru/dictation-to-text',
  'it': 'https://mictoo.com/it/dictation-to-text',
  'pt': 'https://mictoo.com/pt/dictation-to-text',
  'pl': 'https://mictoo.com/pl/dictation-to-text',
  'ja': 'https://mictoo.com/ja/dictation-to-text',
  'ko': 'https://mictoo.com/ko/dictation-to-text',
  'x-default': 'https://mictoo.com/dictation-to-text',
}

export const metadata = {
  title: 'Diktat zu Text — Kostenlose Transkription von Sprachdiktat | Mictoo',
  description: 'Wandeln Sie diktierte Audioaufnahmen kostenlos in Text um. Ideal für Autoren, Ärzte, Anwälte und Forscher. Unterstützt MP3, M4A, WAV. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/dictation-to-text', languages: LANGS },

  openGraph: {
    title: "Diktat zu Text — Kostenlose Transkription von Sprachdiktat | Mictoo",
    description: "Wandeln Sie diktierte Audioaufnahmen kostenlos in Text um. Ideal für Autoren, Ärzte, Anwälte und Forscher. Unterstützt MP3, M4A, WAV. Ohne Anmeldung.",
    url: "https://mictoo.com/de/dictation-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diktat zu Text — Kostenlose Transkription von Sprachdiktat | Mictoo",
    description: "Wandeln Sie diktierte Audioaufnahmen kostenlos in Text um. Ideal für Autoren, Ärzte, Anwälte und Forscher. Unterstützt MP3, M4A, WAV. Ohne Anmeldung.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeDictationPage() {
  return (
    <LandingLayout
      badge="Diktat · Sprache → Text · Kostenlos"
      h1={<>Diktat zu Text<br /><span className="text-brand-600">Kostenlose Sprachdiktat-Transkription</span></>}
      subtitle="Nehmen Sie Ihre Gedanken auf, diktieren Sie ein Kapitel oder Notizen — laden Sie die Datei dann hier hoch und erhalten Sie eine genaue Texttranskription. Keine Anmeldung, keine App-Installation."
      defaultLanguage="de"
      valueBlock={
        <>
          <p>
            Aufgezeichnetes Diktat unterscheidet sich von Meetings: meist eine Stimme, längere Gedanken, Pausen und gelegentliche Selbstkorrekturen. Entscheidend ist ein gut editierbarer erster Entwurf.
          </p>
          <p>
            Mictoo wandelt Diktate in strukturierten Text um, den Sie für Artikel, Notizen, Berichte oder Kapitel weiterbearbeiten können.
          </p>
        </>
      }
      howItWorks={[
        { title: 'Natürlich aufnehmen', desc: 'Sprechen Sie in Telefon, Recorder oder Sprachmemo-App, auch offline.' },
        { title: 'Audio hochladen', desc: 'Importieren Sie MP3, M4A, WAV oder ein anderes unterstütztes Format.' },
        { title: 'Entwurf bearbeiten', desc: 'Absätze setzen, Wiederholungen entfernen und den finalen Text exportieren.' },
      ]}
      whyUse={{
        title: 'Warum Mictoo für Diktate',
        bullets: [
          'Sie können frei sprechen und später in Ruhe korrigieren.',
          'Automatische Satzzeichen machen den Rohtext besser lesbar.',
          'Gut für lange Gedanken, Akzente und Passagen, in denen Sie laut nachdenken.',
          'Die Audiodatei bleibt verfügbar, falls Sie eine Formulierung prüfen möchten.',
        ],
      }}
      useCases={{
        title: 'Wann Diktat zu Text nützlich ist',
        items: [
          { title: 'Artikel und Newsletter', desc: 'Erfassen Sie die ganze Idee, bevor Sie am Text feilen.' },
          { title: 'Nachfassnotizen', desc: 'Diktieren Sie direkt nach einem Gespräch die wichtigsten Punkte.' },
          { title: 'Kapitel und Skripte', desc: 'Machen Sie aus einer gesprochenen Sitzung einen ersten Entwurf.' },
          { title: 'Berufliche Notizen', desc: 'Erstellen Sie Beobachtungen, Protokolle oder Berichte ohne Kontextverlust.' },
        ],
      }}
      proTips={{
        title: 'Tipps für saubere Diktate',
        tips: [
          'In vollständigen Sätzen sprechen, damit der Text leichter zu bearbeiten ist.',
          'Zwischen Abschnitten bewusst pausieren.',
          'Wörter wie „Überschrift“ oder „neuer Punkt“ laut sagen, wenn Sie Struktur markieren möchten.',
        ],
      }}
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
