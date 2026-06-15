import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-text',
  'fr': 'https://mictoo.com/fr/webm-to-text',
  'de': 'https://mictoo.com/de/webm-to-text',
  'es': 'https://mictoo.com/es/webm-to-text',
  'ru': 'https://mictoo.com/ru/webm-to-text',
  'it': 'https://mictoo.com/it/webm-to-text',
  'pt': 'https://mictoo.com/pt/webm-to-text',
  'pl': 'https://mictoo.com/pl/webm-to-text',
  'ja': 'https://mictoo.com/ja/webm-to-text',
  'ko': 'https://mictoo.com/ko/webm-to-text',
  'x-default': 'https://mictoo.com/webm-to-text',
}

export const metadata = {
  title: 'WEBM zu Text — Kostenlose WEBM-Transkription online | Mictoo',
  description: 'WEBM-Audio- und Videodateien kostenlos online in Text umwandeln. Laden Sie eine beliebige WEBM-Aufnahme hoch und erhalten Sie sofort eine genaue Transkription. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/webm-to-text', languages: LANGS },

  openGraph: {
    title: "WEBM zu Text — Kostenlose WEBM-Transkription online | Mictoo",
    description: "WEBM-Audio- und Videodateien kostenlos online in Text umwandeln. Laden Sie eine beliebige WEBM-Aufnahme hoch und erhalten Sie sofort eine genaue Transkription. Ohne Anmeldung.",
    url: "https://mictoo.com/de/webm-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBM zu Text — Kostenlose WEBM-Transkription online | Mictoo",
    description: "WEBM-Audio- und Videodateien kostenlos online in Text umwandeln. Laden Sie eine beliebige WEBM-Aufnahme hoch und erhalten Sie sofort eine genaue Transkription. Ohne Anmeldung.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeWebmToTextPage() {
  return (
    <LandingLayout
      badge="WEBM · Browser-Aufnahmen · Kostenlos"
      h1={<>WEBM zu Text<br /><span className="text-brand-600">Kostenlose WEBM-Transkription online</span></>}
      subtitle="Laden Sie eine beliebige WEBM-Audio- oder Videodatei hoch und erhalten Sie in Sekunden eine genaue Texttranskription. WEBM wird häufig von Browsern, Bildschirmrekordern und Videokonferenz-Tools genutzt. Kein Konto nötig."
      defaultLanguage="de"
      valueBlock={
        <>
          <p>
            WEBM ist typisch für Browser-Aufnahmen: Screen-Captures, Loom-Clips, OBS-Exporte, WebRTC-Anrufe und viele webbasierte Video-Tools.
          </p>
          <p>
            Mictoo extrahiert die Audiospur aus WEBM-Dateien und erstellt Text oder synchronisierte Untertitel, ohne dass Sie vorher ein MP3 erzeugen müssen.
          </p>
        </>
      }
      howItWorks={[
        { title: 'WEBM importieren', desc: 'Laden Sie Video- oder Audiodateien direkt aus dem Browser-Workflow hoch.' },
        { title: 'Audio extrahieren', desc: 'Mictoo isoliert die Sprachspur, auch wenn die Datei Videobild enthält.' },
        { title: 'Text oder SRT nutzen', desc: 'Exportieren Sie Notizen, Support-Dokumentation oder Untertitel mit Zeitstempeln.' },
      ]}
      whyUse={{
        title: 'Warum WEBM mit Mictoo transkribieren',
        bullets: [
          'Kein manueller Zwischenschritt über MP3 nötig.',
          'Zeitstempel bleiben nah am Video, was Untertitel und Schnitt erleichtert.',
          'Opus-Audio aus Browser-Aufnahmen wird direkt verarbeitet.',
          'Das Originalvideo bleibt für spätere Bearbeitung erhalten.',
        ],
      }}
      useCases={{
        title: 'WEBM-Anwendungsfälle',
        items: [
          { title: 'Loom- und Browser-Demos', desc: 'Machen Sie Produktdemos zu Notizen oder Dokumentation.' },
          { title: 'OBS-Aufnahmen', desc: 'Transkribieren Sie Tutorials, Trainings oder Review-Videos.' },
          { title: 'Lokale Call-Backups', desc: 'Finden Sie Entscheidungen und Fragen, ohne das ganze Video anzusehen.' },
          { title: 'Support-Clips', desc: 'Verwandeln Sie eine Videoerklärung in einen Hilfeartikel.' },
        ],
      }}
      proTips={{
        title: 'Tipps für WEBM',
        tips: [
          'Wenn die Datei zu groß ist, mit ffmpeg nur die Audiospur extrahieren.',
          'Mikrofon nah an die sprechende Person bringen: gutes Bild ersetzt keinen klaren Ton.',
          'WEBM-Original behalten, falls die SRT später im Videoschnitt synchronisiert werden soll.',
        ],
      }}
      faq={[
        { q: 'Wie wandle ich WEBM in Text um?', a: 'Laden Sie Ihre WEBM-Datei oben hoch. Die Transkription wird automatisch erzeugt und in Sekunden angezeigt.' },
        { q: 'Ist die WEBM-zu-Text-Konvertierung kostenlos?', a: 'Ja, vollständig kostenlos. Kein Konto oder Anmeldung erforderlich.' },
        { q: 'Kann ich Chrome-Bildschirmaufnahmen transkribieren?', a: 'Ja. Chromes integrierter Bildschirmrekorder speichert Video als WEBM. Die Datei direkt hochladen, um eine Transkription zu erhalten.' },
        { q: 'Wie groß darf die WEBM-Datei sein?', a: 'Bis 25 MB. Für größere Aufnahmen die Audiospur zuerst extrahieren, um die Dateigröße zu reduzieren.' },
      ]}
      relatedLinks={[
        { href: '/de/transcribe-video-to-text', label: 'Video zu Text' },
        { href: '/de/wav-to-text', label: 'WAV zu Text' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
