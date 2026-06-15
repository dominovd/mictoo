import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'pl': 'https://mictoo.com/pl/aac-to-text',
  'ja': 'https://mictoo.com/ja/aac-to-text',
  'ko': 'https://mictoo.com/ko/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC zu Text — Kostenlose AAC-Audio-Transkription online | Mictoo',
  description: 'AAC-Audiodateien kostenlos in Text transkribieren. Ziehen Sie Ihre .aac, .m4a oder andere AAC-codierte Datei hierher und erhalten Sie in Sekunden eine genaue Transkription.',
  alternates: { canonical: 'https://mictoo.com/de/aac-to-text', languages: LANGS },

  openGraph: {
    title: "AAC zu Text — Kostenlose AAC-Audio-Transkription online | Mictoo",
    description: "AAC-Audiodateien kostenlos in Text transkribieren. Ziehen Sie Ihre .aac, .m4a oder andere AAC-codierte Datei hierher und erhalten Sie in Sekunden eine genaue Transkription.",
    url: "https://mictoo.com/de/aac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AAC zu Text — Kostenlose AAC-Audio-Transkription online | Mictoo",
    description: "AAC-Audiodateien kostenlos in Text transkribieren. Ziehen Sie Ihre .aac, .m4a oder andere AAC-codierte Datei hierher und erhalten Sie in Sekunden eine genaue Transkription.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeAacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · M4A · Kostenlos"
      h1={<>AAC zu Text<br /><span className="text-brand-600">Kostenlose AAC-Transkription online</span></>}
      subtitle="Legen Sie Ihre AAC-Audiodatei ab und erhalten Sie in Sekunden eine genaue Texttranskription. Funktioniert mit .aac und .m4a (AAC in einem MP4-Container). Ohne Anmeldung."
      defaultLanguage="de"
      valueBlock={
        <>
          <p>
            AAC ist ein Audio-Codec, nicht immer ein einzelnes Dateiformat. Er steckt in rohen <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">.aac</code>-Streams, M4A-Dateien, MP4-Videos und vielen mobilen App-Exporten.
          </p>
          <p>
            Mictoo liest diese Varianten direkt, damit Sie die Aufnahme nicht erst in MP3 umwandeln und dabei unnötig Qualität verlieren.
          </p>
        </>
      }
      howItWorks={[
        { title: 'AAC-Datei hochladen', desc: 'Legen Sie eine rohe .aac-Datei, M4A oder MP4 mit AAC-Audiospur ab.' },
        { title: 'Container erkennen', desc: 'Mictoo identifiziert den Audiostream, dekodiert ihn und bereitet die Sprache für die Transkription vor.' },
        { title: 'Text exportieren', desc: 'Prüfen Sie Namen und Fachbegriffe, dann als TXT oder SRT mit Zeitstempeln herunterladen.' },
      ]}
      whyUse={{
        title: 'Warum AAC direkt transkribieren',
        bullets: [
          'Keine zusätzliche MP3-Kompression, die leise Stimmen oder schwierige Aufnahmen verschlechtern kann.',
          'Funktioniert mit rohen AAC-Streams und M4A/MP4-Dateien von iPhone, Podcasts oder Videoplattformen.',
          'Zeitstempel bleiben nützlich, um die passende Stelle im Originalaudio oder Video zu finden.',
          'Weniger Vorarbeit: Für lesbare AAC-Dateien brauchen Sie weder Audacity noch ffmpeg.',
        ],
      }}
      useCases={{
        title: 'Typische AAC-Anwendungsfälle',
        items: [
          { title: 'Podcast-Exporte', desc: 'Transkribieren Sie Episoden, Rohschnitte oder CDN-Audio im AAC-Format.' },
          { title: 'Videoarchive', desc: 'Machen Sie die AAC-Tonspur aus MP4-Dateien als Text durchsuchbar.' },
          { title: 'App- und Game-Audio', desc: 'Verarbeiten Sie Sprachaufnahmen aus mobilen Apps oder Export-Tools.' },
          { title: 'Kurse und Interviews', desc: 'Erstellen Sie Notizen, ohne jede Datei zuerst in MP3 umzuwandeln.' },
        ],
      }}
      proTips={{
        title: 'Tipps für bessere AAC-Transkripte',
        tips: [
          'Wenn ein roher .aac-Stream in anderen Tools Probleme macht, in M4A verpacken statt neu kodieren.',
          'Bitrate nicht künstlich erhöhen: Das macht Dateien größer, verbessert aber die Erkennung nicht.',
          'Bei sehr kurzen Clips die Sprache manuell wählen, damit die automatische Erkennung nicht danebenliegt.',
        ],
      }}
      faq={[
        { q: 'Was ist eine AAC-Datei?', a: 'AAC (Advanced Audio Coding) ist ein verlustbehaftetes Audio-Kompressionsformat, das von iTunes, Apple Music, YouTube und den meisten Podcast-Apps verwendet wird. Dateien haben die Endungen .aac oder .m4a. AAC bietet bei gleicher Bitrate bessere Qualität als MP3.' },
        { q: 'Was ist der Unterschied zwischen .aac und .m4a?', a: 'Beide enthalten AAC-codierte Audiodaten. .aac ist der rohe Audio-Stream; .m4a verpackt ihn in einen MP4-Container (so speichern es iTunes und iPhone-Sprachmemos). Mictoo unterstützt beide direkt.' },
        { q: 'Wie wandle ich AAC kostenlos in Text um?', a: 'Ziehen Sie Ihre AAC-Datei in den Upload-Bereich oben. Mictoo transkribiert sie automatisch per KI und zeigt den Text in Sekunden. Kopieren oder als .txt herunterladen.' },
        { q: 'Wie groß darf die AAC-Datei sein?', a: 'Bis 25 MB pro Upload. AAC bei 128 kbps liefert ca. 25 Minuten Audio pro 25 MB; bei 64 kbps fast eine Stunde. Für längere Dateien Bitrate senken oder in Segmente aufteilen.' },
        { q: 'Kann ich Zeitstempel für ein AAC-Transkript erhalten?', a: 'Ja. Nach der Transkription können Sie eine .srt-Untertiteldatei mit präzisen Zeitstempeln herunterladen — nützlich, um das Transkript mit dem Original-Audio oder -Video zu synchronisieren.' },
      ]}
      relatedLinks={[
        { href: '/de/m4a-to-text', label: 'M4A zu Text' },
        { href: '/de/transcribe-mp3-to-text', label: 'MP3 zu Text' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
