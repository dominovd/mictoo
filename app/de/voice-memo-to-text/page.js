import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/voice-memo-to-text',
  'fr': 'https://mictoo.com/fr/voice-memo-to-text',
  'de': 'https://mictoo.com/de/voice-memo-to-text',
  'es': 'https://mictoo.com/es/voice-memo-to-text',
  'ru': 'https://mictoo.com/ru/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: 'Sprachmemo zu Text — iPhone Sprachmemos kostenlos transkribieren | Mictoo',
  description: 'Wandeln Sie iPhone-Sprachmemos und Android-Sprachaufnahmen kostenlos in Text um. Unterstützt M4A und MP3. Keine Anmeldung, keine App-Installation. Präzise KI-Transkription.',
  alternates: { canonical: 'https://mictoo.com/de/voice-memo-to-text', languages: LANGS },
}

export default function DeVoiceMemoPage() {
  return (
    <LandingLayout
      badge="iPhone · Android · Kostenlos"
      h1={<>Sprachmemo zu Text<br /><span className="text-brand-600">Kostenlose Online-Transkription</span></>}
      subtitle="Legen Sie Ihre iPhone-Sprachmemo oder Android-Sprachaufnahme ab und erhalten Sie in Sekunden eine genaue Texttranskription. Keine Anmeldung, keine App-Installation."
      defaultLanguage="de"
      features={[
        { icon: '📱', title: 'iPhone und Android', desc: 'iPhone Voice Memos exportieren als .m4a — vollständig unterstützt. Android-Sprachrekorder exportieren als .m4a, .mp3 oder .wav — alle unterstützt.' },
        { icon: '🧠', title: 'Ideal für Notizen und Ideen', desc: 'Verwandeln Sie Sprachnotizen, Brainstorming-Sessions und Erinnerungen in durchsuchbaren Text, den Sie in Notion, Obsidian oder Ihren bevorzugten Editor einfügen können.' },
        { icon: '🆓', title: '100% kostenlos', desc: 'Kein Abo, kein In-App-Kauf, kein Wasserzeichen. Keine monatliche Obergrenze — laden Sie eine Memo hoch, wann immer Sie eine Transkription brauchen.' },
      ]}
      faq={[
        { q: 'Wie sende ich meine iPhone-Sprachmemo auf den Computer?', a: 'Öffnen Sie die Voice-Memos-App, tippen Sie die Memo an, dann auf "…" und "Teilen" → "In Dateien sichern" oder AirDrop an Ihren Mac. Legen Sie dann die .m4a-Datei in Mictoo am Computer ab.' },
        { q: 'Kann ich direkt auf dem iPhone transkribieren?', a: 'Ja. Öffnen Sie mictoo.com in Safari auf dem iPhone, tippen Sie auf den Upload-Bereich und wählen Sie eine Sprachmemo aus der Dateien-App. Die Transkription erscheint in Sekunden und Sie können sie kopieren oder als .txt herunterladen.' },
        { q: 'In welchem Format speichert Android Sprachaufnahmen?', a: 'Die meisten Android-Telefone speichern Sprachaufnahmen je nach Rekorder-App als .m4a oder .mp3. Beide werden unterstützt. Manche Apps nutzen .amr — wandeln Sie diese mit einem kostenlosen Konverter in .m4a um.' },
        { q: 'Ist meine Sprachaufnahme privat?', a: 'Ja. Dateien werden ausschließlich zur Transkription an die KI gesendet und niemals auf unseren Servern gespeichert. Die Transkription bleibt in Ihrem Browser und gehört nur Ihnen.' },
        { q: 'Was, wenn meine Sprachmemo größer als 25 MB ist?', a: 'iPhone Voice Memos benötigen ca. 1 MB pro Minute in Standardqualität — 25 Minuten passen also in 25 MB. Für längere Memos stellen Sie Voice Memos in Einstellungen → Sprachmemos auf "Komprimiert" um oder teilen Sie die Aufnahme auf.' },
      ]}
      relatedLinks={[
        { href: '/de', label: 'Alle Formate' },
        { href: '/de/meeting-transcription', label: 'Meeting Transkription' },
        { href: '/de/interview-transcription', label: 'Interview Transkription' },
      ]}
    />
  )
}
