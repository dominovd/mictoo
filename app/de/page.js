import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'KI-Transkription Audio und Video in Text, Kostenlos — Mictoo',
  description: 'Transkribieren Sie Audio- und Videodateien kostenlos in Text. Ohne Anmeldung. Betrieben mit OpenAI Whisper. MP3, MP4, WAV und mehr als 50 Sprachen.',
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
      'pl': 'https://mictoo.com/pl',
      'ja': 'https://mictoo.com/ja',
      'ko': 'https://mictoo.com/ko',
      'x-default': 'https://mictoo.com',
    },
  },
  openGraph: {
    title: 'Mictoo — Kostenlose KI-Transkription für Audio und Video',
    description: 'Laden Sie eine Audio- oder Videodatei hoch und erhalten Sie in Sekunden ein Transkript.',
    url: 'https://mictoo.com/de',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — Kostenlose Audio- und Video-Transkription' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — Kostenlose KI-Transkription',
    description: 'Laden Sie eine Audio- oder Videodatei hoch und erhalten Sie in Sekunden ein Transkript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function GermanPage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="KI · Kostenlos · Ohne Anmeldung · 50+ Sprachen"
      h1={<>Audio und Video in Text umwandeln<br /><span className="text-brand-600">mit KI, kostenlos online</span></>}
      subtitle="Laden Sie eine beliebige Audio- oder Videodatei hoch und erhalten Sie in Sekunden eine präzise KI-Transkription. Kein Konto erforderlich."
      howItWorks={[
        { icon: '📂', title: 'Datei hochladen', desc: 'Per Drag-and-drop oder Klick hochladen. MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Bis zu 25 MB anonym, 60 MB nach Anmeldung.' },
        { icon: '⚡', title: 'KI transkribiert', desc: 'Whisper von OpenAI wandelt das Audio mit hoher Genauigkeit in Text um, in mehr als 50 Sprachen. Eine 10-minütige Datei ist meist in unter 30 Sekunden fertig.' },
        { icon: '📋', title: 'Kopieren oder herunterladen', desc: 'Bearbeiten Sie das Transkript direkt im Browser. In die Zwischenablage kopieren oder als .txt, .srt, .pdf, .docx exportieren.' },
      ]}
      whyUse={{ title: 'Warum Mictoo', bullets: [
        { title: '100% kostenlos', desc: 'Kein Abo, keine begrenzte Testphase. Mictoo ist kostenlos, ohne monatliche Obergrenze und ohne Minutenzähler.' },
        { title: 'Privatsphäre by design', desc: 'Ihre Dateien werden direkt an die Whisper-API gesendet (Groq als primärer Anbieter, OpenAI als Fallback), verarbeitet und innerhalb von Sekunden gelöscht. Wir speichern nichts und trainieren keine Modelle mit Ihren Daten.' },
        { title: 'Über 50 Sprachen', desc: 'Automatische Spracherkennung. Funktioniert für Deutsch, Englisch, Französisch, Spanisch, Russisch, Japanisch und viele weitere Sprachen.' },
        { title: 'Hohe Genauigkeit', desc: 'Betrieben mit Whisper von OpenAI, demselben Spracherkennungsmodell, das in ChatGPT und bei führenden Transkriptionsdiensten zum Einsatz kommt.' },
        { title: 'Schnelle Ergebnisse', desc: 'Eine 10-minütige Datei wird in unter 30 Sekunden transkribiert. Keine Warteschlange, keine "Bitte warten Sie 30 Sekunden"-Pop-ups.' },
        { title: 'Bearbeitbare Ausgabe', desc: 'Lesen und korrigieren Sie das Transkript im Browser, kopieren Sie es in die Zwischenablage oder laden Sie es als .txt, .srt oder .pdf herunter.' },
        { title: "KI-Zusammenfassung inklusive", desc: "Nach jeder Transkription erstellen wir kostenlos eine GPT-basierte Zusammenfassung mit Kernaussagen und To-dos. Dieselbe Funktion, die TurboScribe für 20 $/Monat verlangt. Kein zusätzlicher Klick, kein Upgrade-Hinweis." },
        { title: "In 28 Sprachen übersetzen", desc: "Ein Klick übersetzt die komplette Transkription ins Spanische, Französische, Japanische und 25 weitere Sprachen. Die ursprünglichen Zeitstempel bleiben erhalten, sodass die übersetzte SRT-Datei weiterhin zum Audio passt." },
      ]}}
      useCases={{ title: 'Wer nutzt Mictoo', items: [
        { title: 'Studierende', desc: 'Vorlesungen, Interviews und Forschungsaufnahmen transkribieren. Der Text ist durchsuchbar und einfacher zu wiederholen als Audio.' },
        { title: 'Podcaster', desc: 'Verwandeln Sie Folgen in Blogartikel, Show Notes oder Untertitel. SEO-Bonus und Barrierefreiheit inklusive.' },
        { title: 'Journalisten', desc: 'Aufgezeichnete Interviews in Sekunden in Text umwandeln. Genaue Zitate mit Zeitstempeln zur Verifikation.' },
        { title: 'Teams im Unternehmen', desc: 'Meetings, Kundengespräche und Präsentationen transkribieren. Anschließend per Stichwort durchsuchen, statt erneut zuzuhören.' },
        { title: 'Content Creator', desc: 'Untertitel für YouTube, TikTok oder Instagram Reels erstellen. SRT-Export ist sofort bereit für den Upload in YouTube Studio.' },
        { title: 'Recht und Medizin', desc: 'Schnelle Transkript-Entwürfe für Notizen und Dokumentation. Die Originaldatei für die finale Fassung aufbewahren.' },
      ]}}
      proTips={{ title: 'Tipps für bessere Transkripte', tips: [
        { title: 'Mono mit 64 kbps reicht für Sprache', desc: 'Mictoo akzeptiert bis zu 25 MB. Für Sprachaufnahmen ergibt Mono bei 64 kbps etwa 28 MB pro Stunde, ohne spürbaren Genauigkeitsverlust. Siehe unseren Leitfaden zur Audio-Komprimierung.' },
        { title: 'Bei Dateien über 30 Minuten anmelden', desc: 'Anonym: maximal 30 Minuten. Kostenlose Anmeldung: 60 Minuten. Darüber hinaus die Datei in Teile zerlegen und die Transkripte anschließend zusammenfügen.' },
        { title: 'Sprache manuell wählen, falls die Erkennung daneben liegt', desc: 'Whisper rät in 99% der Fälle richtig. Bei sehr kurzen Dateien (unter 10 Sekunden) oder stark mehrsprachigen Aufnahmen sichert die manuelle Sprachauswahl das Ergebnis ab.' },
        { title: 'Für Videos genügt die Audiospur', desc: 'Mictoo akzeptiert MP4 direkt, aber Sie können auch das Audio extrahieren (unser MP4-zu-MP3-Konverter) und eine 10-mal kleinere Datei hochladen.' },
        { title: 'KI-Zusammenfassung im Ergebnis enthalten', desc: 'Nach der Transkription erstellt Mictoo automatisch eine Zusammenfassung des Inhalts, mit Kernpunkten und To-dos. Praktisch für lange Meetings und Podcasts.' },
        { title: 'Transkript in 28 Sprachen übersetzen', desc: 'Sobald das Transkript bereit ist, klicken Sie in der Reader-Ansicht auf Übersetzen. Whisper transkribiert die Quellsprache, GPT-4o-mini übersetzt anschließend in Ihre Zielsprache.' },
      ]}}
      faq={[
        {
          q: 'Wie kann ich eine Audiodatei kostenlos in Text umwandeln?',
          a: 'Laden Sie Ihre Audiodatei oben hoch. Mictoo transkribiert sie automatisch mit Whisper von OpenAI und zeigt den Text in wenigen Sekunden an. Für Dateien bis 25 MB ist keine Anmeldung nötig.',
        },
        {
          q: 'Funktioniert Mictoo gut für Deutsch?',
          a: 'Ja. Whisper, das Modell von OpenAI, auf dem Mictoo aufbaut, wurde mit vielen Stunden deutschsprachiger Audiodaten trainiert und liefert eine sehr hohe Genauigkeit. Das gilt auch für regionale Dialekte und Fachvokabular.',
        },
        {
          q: 'Werden meine Dateien gespeichert?',
          a: 'Nein. Ihre Dateien werden direkt an die Transkriptions-API gesendet, verarbeitet und innerhalb von Sekunden gelöscht. Wir speichern nichts auf unseren Servern und nutzen Ihre Daten nicht zum Training von Modellen.',
        },
        {
          q: 'Wie groß darf eine Datei maximal sein?',
          a: '25 MB für anonyme Nutzer, 60 MB nach kostenloser Anmeldung. Ein Mono-MP3 mit 64 kbps entspricht etwa einer Stunde Audio in 25 MB.',
        },
        {
          q: 'Wie lange dauert die Transkription?',
          a: 'Eine 10-minütige Datei ist typischerweise in unter 30 Sekunden transkribiert. Längere Dateien dauern entsprechend länger, sind aber weiterhin deutlich schneller als die Echtzeit.',
        },
        {
          q: 'Welche Audio- und Videoformate werden akzeptiert?',
          a: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, MPEG. Bei Videodateien extrahiert Mictoo automatisch die Audiospur. Wird Ihr Format nicht unterstützt, konvertieren Sie es zuerst mit unseren integrierten Konvertern in MP3 oder WAV.',
        },
        {
          q: 'Kann ich Untertitel im SRT-Format herunterladen?',
          a: 'Ja. Klicken Sie nach der Transkription auf den .srt-Button, um eine Untertiteldatei mit Zeitstempeln herunterzuladen, bereit für den Upload in YouTube Studio, Premiere oder Final Cut.',
        },
        {
          q: 'Erstellt Mictoo eine Zusammenfassung des Inhalts?',
          a: 'Ja. Nach jeder Transkription erstellt Mictoo automatisch eine KI-Zusammenfassung mit Kernpunkten und To-dos. Besonders nützlich für lange Podcasts, Meetings und Vorlesungen.',
        },
        {
          q: 'Kann ich ein YouTube-Video transkribieren?',
          a: 'Nicht direkt per URL, denn YouTube blockiert Server von Drittanbietern. Laden Sie das Video zuerst lokal herunter, zum Beispiel mit 4K Video Downloader, und legen Sie die MP4-Datei hier ab. Unser YouTube-Download-Leitfaden beschreibt das Vorgehen Schritt für Schritt.',
        },
        {
          q: 'Gibt es eine mobile App von Mictoo?',
          a: 'Eine native App gibt es noch nicht, die Website funktioniert aber einwandfrei in iOS Safari und Android Chrome. Sie können Aufnahmen aus der Fotomediathek oder Sprachmemos direkt vom Smartphone hochladen.',
        },
      ]}
      relatedLinks={[
        { href: '/de/transcribe-mp3-to-text', label: 'MP3 in Text', desc: 'Speziell für MP3-Dateien, etwa Podcasts, Sprachmemos und aufgezeichnete Anrufe.' },
        { href: '/de/transcribe-video-to-text', label: 'Video in Text', desc: 'Transkription von MP4, MOV, WEBM, ideal für Zoom-Aufnahmen, YouTube-Videos und Screencasts.' },
        { href: '/de/podcast-transcription', label: 'Podcast-Transkription', desc: 'Dieselbe Engine mit speziellen Tipps für lange Folgen und den anschließenden Schnitt.' },
        { href: '/de/free-srt-generator', label: 'Kostenloser SRT-Generator', desc: 'Untertitel mit Zeitstempeln, fertig für YouTube Studio, Premiere und DaVinci Resolve.' },
      ]}
    />
  )
}
