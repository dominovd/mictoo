import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'ja': 'https://mictoo.com/ja/timestamped-transcription',
  'ko': 'https://mictoo.com/ko/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'Transkription mit Zeitstempeln — kostenloser Time-Coded-Transkript-Generator | Mictoo',
  description:
    'Kostenlose Transkription mit Zeitstempeln. Holen Sie sich Zeitstempel auf Wort- oder Satzebene für jedes Audio oder Video. Perfekt für Journalismus, Forschung, Podcasting, Video-Bearbeitung.',
  alternates: { canonical: 'https://mictoo.com/de/timestamped-transcription', languages: LANGS },

  openGraph: {
    title: "Transkription mit Zeitstempeln — kostenloser Time-Coded-Transkript-Generator | Mictoo",
    description: "Kostenlose Transkription mit Zeitstempeln. Holen Sie sich Zeitstempel auf Wort- oder Satzebene für jedes Audio oder Video. Perfekt für Journalismus, Forschung, Podcasting, Video-Bearbeitung.",
    url: "https://mictoo.com/de/timestamped-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transkription mit Zeitstempeln — kostenloser Time-Coded-Transkript-Generator | Mictoo",
    description: "Kostenlose Transkription mit Zeitstempeln. Holen Sie sich Zeitstempel auf Wort- oder Satzebene für jedes Audio oder Video. Perfekt für Journalismus, Forschung, Podcasting, Video-Bearbeitung.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeTimestampedPage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="Zeitstempel · Zitate · Kostenlos"
      h1={
        <>
          Transkription mit Zeitstempeln
          <br />
          <span className="text-brand-600">Kostenlose Time-Coded-Transkripte</span>
        </>
      }
      subtitle="Präzise Zeitstempel für jede Zeile oder jedes Wort in Ihrem Audio. Springen Sie zu exakten Momenten zurück, zitieren Sie bestimmte Stellen, bauen Sie Kapitelmarken. Kostenlos, ohne Anmeldung."
      howItWorks={[
        {
          icon: '📂',
          title: 'Datei ablegen',
          desc: 'MP3, M4A, MP4, WAV, FLAC, OGG, WEBM, AAC. Wir arbeiten mit Audio- und Videoformaten.',
        },
        {
          icon: '⚡',
          title: 'KI transkribiert und vergibt Zeitstempel',
          desc: 'Whisper large-v3 erzeugt das Transkript mit millisekundengenauen Zeitstempeln für jedes Segment (und optional jedes Wort).',
        },
        {
          icon: '💾',
          title: 'Granularität wählen und herunterladen',
          desc: 'Wählen Sie Satz-Zeitstempel (am gängigsten) oder Wort-Zeitstempel (für präzise Alignment-Arbeit). Als TXT mit Inline-Zeitstempeln herunterladen, als SRT für Untertitel-Workflows oder in die Zwischenablage kopieren.',
        },
      ]}
      whyUse={{
        title: 'Warum Mictoo für Transkription mit Zeitstempeln',
        bullets: [
          {
            title: 'Zeitstempel auf die Millisekunde',
            desc: 'Whisper gibt Zeitstempel mit Millisekunden-Präzision aus. Präziser als jede gängige Video-Framerate, mehr als genug für Zitat-Arbeit.',
          },
          {
            title: 'Satz-Ebene standardmäßig, Wort-Ebene wenn nötig',
            desc: 'Satz-Ebene hält Transkripte lesbar. Wort-Ebene ist für Notizen übertrieben, aber essenziell für Video-Bearbeitung und Musik-Alignment.',
          },
          {
            title: 'Kostenlos',
            desc: 'Kein Minuten-Zähler. Kein „Zeitstempel kosten extra"-Tier. Gleicher Preis wie reine Transkription (kostenlos).',
          },
          {
            title: 'SRT-Export für Video-Workflows',
            desc: 'Zeitstempel im SRT-Format funktionieren direkt in Premiere, DaVinci, CapCut und YouTube Studio als Untertitelspuren.',
          },
          {
            title: 'Inline-Zeitstempel im TXT für Zitate',
            desc: 'Reiner Text mit [00:01:23]-Markern am Anfang jedes Segments. Leicht in Forschungsnotizen, Blog-Posts oder Journalismus-Entwürfe einzufügen.',
          },
          {
            title: 'Keine Datei wird gespeichert',
            desc: 'Das Audio wird zum Transkriptions-Anbieter gestreamt und verworfen. Nichts bleibt auf unseren Servern.',
          },
        ],
      }}
      useCases={{
        title: 'Wofür Leute Transkripte mit Zeitstempeln nutzen',
        items: [
          {
            title: 'Journalismus und Zitate',
            desc: 'Zitieren Sie eine Quelle aus einem Interview? Setzen Sie den Zeitstempel neben das Zitat in Ihre Notizen. Wenn die Redaktion oder der Faktenchecker fragt „wo haben sie das genau gesagt", haben Sie die Antwort in zwei Sekunden.',
          },
          {
            title: 'Kapitelmarken für Podcasts',
            desc: 'Transkript erzeugen, nach natürlichen Abschnitts-Übergängen scannen, die Zeitstempel in die Kapitel-Funktion Ihres Podcast-Hosters kopieren. Moderne Player zeigen Kapitel in der Wiedergabe-Leiste.',
          },
          {
            title: 'Video-Bearbeitung Rohschnitte',
            desc: 'Transkript holen, die Zeilen markieren, die Sie behalten wollen, sie per Zeitstempel auf der Timeline finden. „Paper Editing" ist viel schneller als zu scrubben.',
          },
          {
            title: 'Akademische Forschung und qualitative Codierung',
            desc: 'Forscher in NVivo, Atlas.ti oder MAXQDA taggen Transkript-Segmente mit Codes. Zeitstempel lassen Sie zum Audio zurückspringen für den exakten Moment beim Codieren mehrdeutiger Passagen.',
          },
          {
            title: 'Musik-Alignment für Sing-along-Videos',
            desc: 'Wort-Zeitstempel für Karaoke-artige oder Lyric-Video-Projekte. Jedes Wort leuchtet im exakten Moment auf, in dem es gesungen wird.',
          },
        ],
      }}
      proTips={{
        title: 'Tipps für Transkription mit Zeitstempeln',
        tips: [
          {
            title: 'Satz-Zeitstempel funktionieren für 95 Prozent der Anwendungsfälle',
            desc: 'Außer Sie machen Musik-Alignment oder Wort-für-Wort-Video-Untertitelung, ist Satz-Ebene das, was Sie wollen. Lesbarer, leichter zu bearbeiten.',
          },
          {
            title: 'Wort-Zeitstempel blasen Dateigröße und Komplexität auf',
            desc: 'Ein Wort-SRT für einen 30-Minuten-Vortrag hat tausende Einträge. Nutzen Sie das nur, wenn Sie wirklich Wort-Präzision brauchen.',
          },
          {
            title: 'Für Podcasts Kapitelmarken aus natürlichen Pausen erzeugen',
            desc: 'Schauen Sie im Transkript nach Themen-Übergängen, Agenda-Wechseln oder Gast-Vorstellungen. Kopieren Sie diese Zeitstempel in Ihren Podcast-Hoster als Kapitelmarken.',
          },
          {
            title: 'Für Journalismus den Zeitstempel mit jedem Zitat speichern, das Sie nutzen könnten',
            desc: 'Das zukünftige Ich wird sich, 3 Wochen später, nicht erinnern, aus welchem Interview ein Zitat kam, geschweige denn wo im Interview. Der Zeitstempel löst das.',
          },
          {
            title: 'SRT-Zeitstempel sind null-gepolstert, TXT-Zeitstempel nicht',
            desc: 'SRT nutzt 00:01:23,456. TXT nutzt meist [1:23]. Wenn Sie in ein CMS einfügen, das ein Format erwartet, vor dem Einfügen konvertieren.',
          },
          {
            title: 'Für Video-Bearbeitung richtet sich der Zeitstempel in unserer SRT am Audio in der Original-Datei aus',
            desc: 'Wenn Sie Ihr Video mit einer anderen Framerate neu exportieren, passen die Zeitstempel immer noch, weil sie in absoluter Zeit (Millisekunden) sind, nicht in Frames.',
          },
          {
            title: 'Zeitstempel driften bei schlechtem Audio',
            desc: 'Wenn Whisper Wörter während Musik oder Stille halluziniert, sind die Zeitstempel dieser Geisterwörter Schätzungen. Echte Sprach-Zeitstempel bleiben präzise. Vertrauen Sie einfach Sprach-Abschnitten, ignorieren Sie Musik-Abschnitte.',
          },
        ],
      }}
      faq={[
        {
          q: 'Was ist der Unterschied zwischen Satz- und Wort-Zeitstempeln?',
          a: 'Satz-Ebene: ein Zeitstempel pro Text-Zeile (meist ein Satz). Wort-Ebene: ein Zeitstempel pro Wort. Satz-Ebene ist lesbar und gut für Zitate, Podcasting und die meiste Video-Arbeit. Wort-Ebene ist für Musik-Alignment, Karaoke-Videos und Wort-für-Wort-Untertitel-Animationen.',
        },
        {
          q: 'Wie präzise sind die Zeitstempel?',
          a: 'Whisper gibt Zeitstempel in Millisekunden aus. Sie passen korrekt bei jeder gängigen Video-Framerate (24, 25, 29.97, 30, 50, 60 fps) ohne Offset.',
        },
        {
          q: 'Werden Zeitstempel bei einer langen Datei driften?',
          a: 'Selten. Whisper richtet Zeitstempel am tatsächlichen Audio aus, also bleiben sie auch bei 60-Minuten-Dateien präzise. Sub-Sekunden-Drift kann bei den letzten Segmenten sehr langer Dateien auftreten. Wenn Sie es bemerken, manuell anpassen.',
        },
        {
          q: 'Kann ich ein TXT mit Inline-Zeitstempeln bekommen, wie [00:01:23] vor jeder Zeile?',
          a: 'Ja. Als TXT herunterladen, und wir fügen Satz-Zeitstempel inline ein. Format: [00:01:23] Satz-Text hier.',
        },
        {
          q: 'Enthält die SRT Zeitstempel?',
          a: 'Ja, das ist der ganze Sinn des SRT-Formats. Jeder Untertitel-Eintrag hat einen Start- und End-Zeitstempel.',
        },
        {
          q: 'Wie vergleicht sich das mit YouTubes Auto-Untertiteln mit Zeitstempeln?',
          a: 'YouTubes Auto-Untertitel haben Zeitstempel, aber keine Zeichensetzung und niedrigere Genauigkeit. Unsere haben volle Zeichensetzung, bessere Genauigkeit und Standard-SRT-Output, der in jedem Video-Editor funktioniert.',
        },
        {
          q: 'Kann ich aus dem Transkript zu einem bestimmten Zeitstempel im Audio springen?',
          a: 'In unserem Ergebnis-View klicken Sie einen beliebigen Zeitstempel, um den Audio-Player auf diesen Moment zu setzen. Nach dem Download brauchen Sie einen separaten Audio-Player dafür.',
        },
        {
          q: 'Werden die Zeitstempel in Premiere oder DaVinci Resolve funktionieren?',
          a: 'Ja. SRT in die Timeline importieren. Untertitel erscheinen automatisch zu den richtigen Momenten.',
        },
        {
          q: 'Welche Sprachen werden für Transkription mit Zeitstempeln unterstützt?',
          a: 'Die gleichen über 50 Sprachen wie bei reiner Transkription. Zeitstempel kommen automatisch mit jedem Transkript, unabhängig von der Sprache.',
        },
        {
          q: 'Wird das Audio gespeichert?',
          a: 'Nein. Die Datei wird zum Transkriptions-Anbieter gestreamt und nach der Verarbeitung verworfen.',
        },
        {
          q: 'Kann ich Wort-Zeitstempel nutzen, um ein Karaoke-Video zu machen?',
          a: 'Ja, aber Sie brauchen Video-Software, die Wort-für-Wort-Hervorhebung aus einem JSON- oder SRT-Format rendern kann. Manche Tools (Premiere, After Effects, spezialisierte Karaoke-Software) unterstützen das direkt.',
        },
        {
          q: 'Wie lange dauert die Erzeugung von Transkripten mit Zeitstempeln?',
          a: 'Gleich wie reine Transkription, etwa 1 bis 2 Prozent der Audiolänge. Zeitstempel kommen automatisch, keine extra Verarbeitungszeit.',
        },
      ]}
      relatedLinks={[
        { href: '/de/free-srt-generator', label: 'SRT-Generator', desc: 'Gleiche Zeitstempel, ausgerichtet auf Untertitel-Workflows.' },
        { href: '/de/podcast-transcription', label: 'Podcast-Transkription', desc: 'Zeitstempel für Show Notes und Kapitelmarken.' },
        { href: '/de/interview-transcription', label: 'Interview-Transkription', desc: 'Zeitstempel für Zitate und Quellensuche.' },
        { href: '/de/transcribe-audio-to-text', label: 'Audio in Text', desc: 'Für reinen Text-Output ohne Zeitstempel.' },
      ]}
    />
  )
}
