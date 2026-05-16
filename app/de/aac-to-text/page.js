import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC zu Text — Kostenlose AAC-Audio-Transkription online | Mictoo',
  description: 'AAC-Audiodateien kostenlos in Text transkribieren. Ziehen Sie Ihre .aac, .m4a oder andere AAC-codierte Datei hierher und erhalten Sie in Sekunden eine genaue Transkription.',
  alternates: { canonical: 'https://mictoo.com/de/aac-to-text', languages: LANGS },
}

export default function DeAacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · M4A · Kostenlos"
      h1={<>AAC zu Text<br /><span className="text-brand-600">Kostenlose AAC-Transkription online</span></>}
      subtitle="Legen Sie Ihre AAC-Audiodatei ab und erhalten Sie in Sekunden eine genaue Texttranskription. Funktioniert mit .aac und .m4a (AAC in einem MP4-Container). Ohne Anmeldung."
      defaultLanguage="de"
      features={[
        { icon: '🎧', title: 'Native AAC-Unterstützung', desc: 'AAC ist der Standard-Audio-Codec für Apple-Geräte, YouTube und die meisten Streaming-Dienste. Mictoo akzeptiert .aac und .m4a direkt ohne Konvertierung.' },
        { icon: '🎯', title: 'Hohe Genauigkeit', desc: 'AAC liefert hohe Qualität bei kleinen Dateigrößen — perfekt für KI-Transkription. Klare Aufnahmen werden meist mit 95%+ Genauigkeit transkribiert.' },
        { icon: '📥', title: 'Bearbeiten und exportieren', desc: 'Sichten Sie die Transkription im Browser, korrigieren Sie Namen und Satzzeichen, dann als .txt oder .srt-Untertitel herunterladen.' },
      ]}
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
