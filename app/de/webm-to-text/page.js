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
}

export default function DeWebmToTextPage() {
  return (
    <LandingLayout
      badge="WEBM · Browser-Aufnahmen · Kostenlos"
      h1={<>WEBM zu Text<br /><span className="text-brand-600">Kostenlose WEBM-Transkription online</span></>}
      subtitle="Laden Sie eine beliebige WEBM-Audio- oder Videodatei hoch und erhalten Sie in Sekunden eine genaue Texttranskription. WEBM wird häufig von Browsern, Bildschirmrekordern und Videokonferenz-Tools genutzt. Kein Konto nötig."
      defaultLanguage="de"
      features={[
        { icon: '🖥️', title: 'Browser- & Bildschirmaufnahmen', desc: 'WEBM ist das Standardformat für Chrome- und Firefox-Bildschirmaufnahmen, Loom-Clips und WebRTC-Aufnahmen.' },
        { icon: '🎬', title: 'Audio- und Video-WEBM', desc: 'Unterstützt sowohl reine Audio- als auch Video-WEBM-Dateien. Audio wird automatisch extrahiert.' },
        { icon: '📄', title: '.txt- und .srt-Export', desc: 'Laden Sie die Transkription als einfachen Text oder als SRT-Untertiteldatei mit Zeitstempeln herunter.' },
      ]}
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
