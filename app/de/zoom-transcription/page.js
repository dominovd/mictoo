import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Zoom-Transkription — Zoom-Aufnahmen kostenlos transkribieren | Mictoo',
  description: 'Zoom-Meeting-Aufnahmen kostenlos in Text umwandeln. Funktioniert mit MP4 und M4A aus Zoom Cloud oder Local Recording. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/zoom-transcription', languages: LANGS },
}

export default function DeZoomPage() {
  return (
    <LandingLayout
      badge="Zoom · MP4 · M4A · Kostenlos"
      h1={<>Zoom-Transkription<br /><span className="text-brand-600">Zoom-Aufnahmen als Text</span></>}
      subtitle="Laden Sie Ihre Zoom MP4 oder M4A-Aufnahme hoch und erhalten Sie in Sekunden ein präzises Transkript. Perfekt für Meetings, Webinare und Interviews."
      defaultLanguage="de"
      features={[
        { icon: '🎬', title: 'Alle Zoom-Aufnahmen', desc: 'Sowohl Zoom Cloud Recording (MP4) als auch Local Recording (M4A nur Audio) werden unterstützt. Einfach hochladen — keine Konvertierung nötig.' },
        { icon: '✏️', title: 'Im Browser bearbeitbar', desc: 'Transkript bereinigen, Sprechernamen hinzufügen, Eigennamen korrigieren und als .txt oder .srt für das Originalvideo herunterladen.' },
        { icon: '⚡', title: 'Schnell und kostenlos', desc: 'Ein 25-minütiges Zoom-Meeting wird üblicherweise in unter 30 Sekunden transkribiert. 100 % kostenlos, kein Konto, keine Kreditkarte.' },
      ]}
      faq={[
        { q: 'Wie lade ich meine Zoom-Aufnahme herunter?', a: 'Für Cloud Recording: Zoom Web-Portal → Recordings → Meeting anklicken → Download. Für Local Recording: Zoom Desktop → Einstellungen → Aufnahme, Aufnahmen liegen im konfigurierten Ordner.' },
        { q: 'Unterschied zwischen MP4 und M4A bei Zoom?', a: 'MP4 ist das vollständige Video (mit Audio), M4A nur Audio. Beides funktioniert mit Mictoo. Wenn Sie nur das Transkript brauchen, ist M4A kleiner und schneller hochgeladen.' },
        { q: 'Kann ich .srt-Untertitel für das Zoom-Video bekommen?', a: 'Ja. Nach der Transkription bietet Mictoo einen .srt-Download-Button. Die .srt enthält synchronisierte Zeitstempel und ist in Zoom, YouTube Studio, Premiere Pro oder DaVinci Resolve nutzbar.' },
        { q: 'Maximale Zoom-Aufnahme-Größe?', a: 'Bis zu 25 MB pro Datei. Die meisten 25-minütigen MP4-Aufnahmen überschreiten das — extrahieren Sie die Audiospur als M4A oder komprimieren Sie das Video.' },
        { q: 'Genauigkeit bei mehreren Sprechern?', a: 'Hoch, wenn Sprecher abwechselnd reden und sich nicht überlagern. Mictoo erstellt ein einzelnes Transkript ohne Sprecher-Labels — Host/Gast manuell im Browser-Editor hinzufügen.' },
      ]}
      relatedLinks={[
        { href: '/de/meeting-transcription', label: 'Meeting-Transkription' },
        { href: '/transcribe-mp3-to-text', label: 'MP3 in Text' },
        { href: '/transcribe-video-to-text', label: 'Video in Text' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
