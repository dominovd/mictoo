import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'Kostenloser SRT-Generator — SRT-Untertitel online erstellen | Mictoo',
  description: 'SRT-Untertiteldateien aus beliebigen Audio- oder Videodateien kostenlos erstellen. Datei hochladen, Transkript mit Zeitstempeln erhalten und einsatzbereite .srt herunterladen. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/free-srt-generator', languages: LANGS },
}

export default function DeSrtGeneratorPage() {
  return (
    <LandingLayout
      badge="SRT · Untertitel · Kostenlos"
      h1={<>Kostenloser SRT-Generator<br /><span className="text-brand-600">Untertitel online erstellen</span></>}
      subtitle="Laden Sie eine beliebige Audio- oder Videodatei hoch und laden Sie in Sekunden eine einsatzbereite SRT-Untertiteldatei herunter. Funktioniert mit YouTube, Premiere Pro, DaVinci Resolve und jedem Videoeditor."
      defaultLanguage="de"
      features={[
        { icon: '🎬', title: 'YouTube-tauglich', desc: 'Die .srt-Datei direkt in YouTube Studio hochladen, um Untertitel zu Ihren Videos hinzuzufügen. Zeitstempel werden automatisch synchronisiert.' },
        { icon: '⏱️', title: 'Präzise Timecodes', desc: 'Jedes Untertitelsegment erhält einen exakten HH:MM:SS,ms-Zeitstempel — das Standardformat aller professionellen Videotools.' },
        { icon: '🌍', title: '50+ Sprachen', desc: 'Erzeugt SRT-Dateien in jeder Sprache — Englisch, Spanisch, Französisch, Deutsch, Japanisch und 46 weitere. Die Sprache wird automatisch erkannt.' },
      ]}
      faq={[
        { q: 'Was ist eine SRT-Datei?', a: 'Eine SRT-Datei (SubRip Subtitle) ist eine Klartext-Datei mit zeitgesteuerten Untertiteleinträgen. Jeder Eintrag hat eine Sequenznummer, Start → Endzeit und den Untertiteltext. SRT ist das am weitesten verbreitete Untertitelformat.' },
        { q: 'Wie erzeuge ich eine SRT-Datei aus einem Video?', a: 'Laden Sie Ihre Video- oder Audiodatei oben hoch. Mictoo transkribiert sie und fügt jedem Segment Zeitstempel hinzu. Nach der Transkription klicken Sie auf den .srt-Button, um Ihre Untertiteldatei herunterzuladen.' },
        { q: 'Wie füge ich SRT-Untertitel zu einem YouTube-Video hinzu?', a: 'In YouTube Studio öffnen Sie Ihr Video und klicken auf Untertitel. Wählen Sie Sprache hinzufügen, dann Datei hochladen und wählen Sie Ihre .srt-Datei. YouTube synchronisiert die Untertitel automatisch.' },
        { q: 'Funktioniert die SRT-Datei in Premiere Pro und DaVinci Resolve?', a: 'Ja. In Premiere Pro: Datei → Importieren → Ihre .srt-Datei wählen. In DaVinci Resolve: Edit-Seite öffnen, Datei → Untertitel importieren, .srt-Datei wählen.' },
        { q: 'Ist der SRT-Generator wirklich kostenlos?', a: 'Ja, vollständig kostenlos. Kein Konto, kein Abonnement, kein Wasserzeichen. Datei hochladen und SRT herunterladen — das war\'s.' },
        { q: 'Was ist die maximale Dateigröße?', a: 'Bis zu 25 MB. Für längere Videos zuerst die Audiospur extrahieren oder das Video in kürzere Segmente teilen.' },
        { q: 'Kann ich SRT aus Audiodateien (MP3, WAV) erzeugen?', a: 'Ja. Mictoo erzeugt SRT-Dateien aus jedem Audio- oder Videoformat: MP3, MP4, WAV, M4A, OGG, WEBM, FLAC.' },
        { q: 'Kann ich Untertitel vor dem Download bearbeiten?', a: 'Ja. Nach der Transkription können Sie den Text im Browser bearbeiten. Die Zeitstempelstruktur bleibt in der exportierten SRT erhalten.' },
      ]}
      relatedLinks={[
        { href: '/de/timestamped-transcription', label: 'Transkript mit Zeitstempeln' },
        { href: '/transcribe-video-to-text', label: 'Video in Text' },
        { href: '/transcribe-mp3-to-text', label: 'MP3 in Text' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
