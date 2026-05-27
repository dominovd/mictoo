import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: 'Video in Text — kostenlose Online-Transkription | Mictoo',
  description:
    'Kostenlose Video-zu-Text-Transkription. Laden Sie MP4, MOV, WEBM, AVI hoch und bekommen Sie ein KI-Transkript oder eine SRT-Untertiteldatei. Funktioniert mit Bildschirmaufnahmen, Tutorials, Vlogs.',
  alternates: { canonical: 'https://mictoo.com/de/transcribe-video-to-text', languages: LANGS },
}

export default function DeVideoToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="MP4 · MOV · WEBM · KOSTENLOS"
      h1={
        <>
          Video in Text
          <br />
          <span className="text-brand-600">Kostenlose KI-Video-Transkription</span>
        </>
      }
      subtitle="Kostenlose KI-Transkription für jede Videodatei. Wir extrahieren das Audio automatisch. Ohne Konto, ohne Tarif pro Minute, ohne E-Mail."
      howItWorks={[
        {
          icon: '🎬',
          title: 'Video ablegen',
          desc: 'MP4, MOV, WEBM, AVI oder jeder gängige Videocontainer. Bildschirmaufnahmen, Vlogs, Webinar-Exporte, Zoom-MP4s. Reinziehen oder zum Auswählen klicken.',
        },
        {
          icon: '⚡',
          title: 'Wir extrahieren das Audio, KI transkribiert',
          desc: 'Wir holen die Tonspur aus dem Video heraus und schicken nur die an Whisper large-v3. Keine Notwendigkeit, zuerst in MP3 zu konvertieren. Ein 30-Minuten-Video ist meist in rund einer Minute fertig.',
        },
        {
          icon: '📋',
          title: 'Kopieren, herunterladen oder Untertitel holen',
          desc: 'Laden Sie es als TXT für Notizen herunter, oder als SRT, um es als Untertitel in einen Video-Editor zu legen. Falsche Wörter im Browser vor dem Export korrigieren.',
        },
      ]}
      whyUse={{
        title: 'Warum Mictoo für Video',
        bullets: [
          {
            title: 'Direkter Upload, kein Umweg über YouTube',
            desc: 'Viele kostenlose Transkribierer sagen Ihnen, Sie sollen Ihr Video als „Nicht gelistet" auf YouTube hochladen, auf die Auto-Untertitel warten und den Text kopieren. Das ist langsam und liefert mittelmäßige Untertitel. Überspringen Sie es.',
          },
          {
            title: 'Audio-Extraktion ist automatisch',
            desc: 'Sie legen die MP4 ab. Wir holen das Audio intern raus und schicken es an das Sprachmodell. Sie müssen ffmpeg nicht selbst starten.',
          },
          {
            title: 'Die Ausgabe funktioniert in echten Video-Editoren',
            desc: 'Die SRT, die wir erzeugen, funktioniert in Premiere Pro, DaVinci Resolve, Final Cut, CapCut und YouTube Studio. Zeitstempel sind framegenau.',
          },
          {
            title: 'Größere Videodateien? Audio komprimieren, nicht Video',
            desc: 'Ein 200-MB-Video besteht meist aus 195 MB Video und 5 MB Audio. Sie müssen nicht alles komprimieren, nur die Tonspur.',
          },
          {
            title: 'Keine Datei wird gespeichert',
            desc: 'Das Video kommt zu uns, wir extrahieren das Audio, schicken es an den Transkriptions-Anbieter und verwerfen beides. Wir behalten weder Ihr Video noch Ihr Audio auf unseren Servern.',
          },
        ],
      }}
      useCases={{
        title: 'Wofür Video-Transkription gut ist',
        items: [
          {
            title: 'Untertitel für Social-Media-Videos',
            desc: 'TikTok, Instagram Reels, YouTube Shorts profitieren alle von eingebrannten Untertiteln. Erzeugen Sie die SRT hier, importieren Sie in CapCut oder Premiere, gestalten Sie die Untertitel nach Geschmack und brennen Sie sie ins Video ein.',
          },
          {
            title: 'Tutorials und Kursinhalte',
            desc: 'Wenn Sie Screencast-Tutorials aufnehmen, hilft eine Textversion bei SEO, Barrierefreiheit und Übersetzung. Fügen Sie das Transkript in Ihren Blog oder Ihre Kursplattform als Begleitung zum Video ein.',
          },
          {
            title: 'Webinar-Follow-ups',
            desc: 'Sie haben ein einstündiges Webinar gemacht. Transkribieren Sie die Aufnahme, bearbeiten Sie leicht und schicken Sie sie als Follow-up-Mail an Teilnehmer, die nicht bis zum Ende bleiben konnten.',
          },
          {
            title: 'Interview-Schnitte für die Bearbeitung',
            desc: 'Beim Schneiden eines langen Video-Interviews können Sie mit dem Transkript auf einem zweiten Bildschirm einen „Paper Edit" machen. Markieren Sie die gewünschten Zeilen, finden Sie sie auf der Timeline, viel schneller als zu scrubben.',
          },
          {
            title: 'Übersetzungs- und Synchronisations-Vorbereitung',
            desc: 'Transkribieren Sie in der Ausgangssprache, jagen Sie den Text durch DeepL oder ChatGPT zum Übersetzen und nutzen Sie das als Skript für Synchronisation oder Untertitelübersetzung.',
          },
        ],
      }}
      proTips={{
        title: 'Tipps für Video-Transkription',
        tips: [
          {
            title: 'Audio zuerst extrahieren, wenn Ihr Video über 60 MB ist',
            desc: 'Ein 1080p-Video besteht hauptsächlich aus Pixel-Bytes, die wir sowieso wegwerfen. Holen Sie nur die Tonspur: ffmpeg -i video.mp4 -vn -ac 1 -b:a 64k audio.mp3. Ein 500-MB-Video schrumpft auf unter 30 MB Audio.',
          },
          {
            title: 'Hintergrundmusik im Editor vor dem Export stummschalten',
            desc: 'Wenn Ihr Video Musik unter dem Dialog hat (B-Roll, Intro, Übergänge), schalten Sie die Musikspur im Editor vor dem Export der hochzuladenden Version stumm oder leiser. Whisper erfindet manchmal Wörter, wenn Sprache unter Musik begraben ist.',
          },
          {
            title: 'Bildschirmaufnahmen ohne Musik sind am einfachsten',
            desc: 'Loom-, Zoom-, OBS-Aufnahmen von jemandem, der über Slides spricht, ergeben die saubersten Transkripte. Keine Musik, eine Stimme, klares Mikro. Sie bekommen nahezu menschliche Genauigkeit.',
          },
          {
            title: 'Bei Multi-Speaker-Videos wenn möglich separate Audiospuren aufnehmen',
            desc: 'Wenn Sie die Aufnahme kontrollieren, nehmen Sie jeden Sprecher auf seine eigene Spur auf. Transkribieren Sie jede Spur separat. Sauberere Zuordnung, weniger Fehler bei Überlappungen.',
          },
          {
            title: 'Die Framerate ist egal, nur die Audioqualität zählt',
            desc: 'Whisper schaut nicht aufs Video, nur aufs Audio. Ein 4K-Video mit schlechtem Audio transkribiert schlechter als ein 480p-Video mit Lavalier-Mikro. Stecken Sie Ihre Mühe ins Audio.',
          },
          {
            title: 'SRT-Zeitstempel brauchen in manchen Editoren einen kleinen Versatz',
            desc: 'Die meisten Editoren richten SRT-Zeitstempel perfekt aus. Ein paar ältere Editoren erwarten, dass der erste Untertitel bei 00:00:01,000 startet statt bei 00:00:00,000. Wenn Ihre Untertitel um eine Sekunde verschoben sind, liegt es meist daran.',
          },
        ],
      }}
      faq={[
        {
          q: 'Welche Videoformate unterstützen Sie?',
          a: 'MP4, MOV, WEBM, AVI, MKV, FLV. Wenn Ihr Video in VLC läuft, funktioniert es fast sicher hier. Wir extrahieren das Audio intern, der Video-Codec spielt also kaum eine Rolle.',
        },
        {
          q: 'Meine Videodatei ist zu groß zum Hochladen. Was tun?',
          a: 'Zwei Optionen. Extrahieren Sie zuerst nur das Audio (ein ffmpeg-Befehl, siehe Tipps oben) und laden Sie das hoch. Oder nutzen Sie einen kleineren Export aus Ihrem Editor (niedrigere Auflösung oder Bitrate). Für Dateien über 60 MB ist Audio-Extraktion schneller.',
        },
        {
          q: 'Kann ich SRT-Untertitel bekommen, nicht nur reinen Text?',
          a: 'Ja. Klicken Sie nach der Transkription auf „Als SRT herunterladen". Die SRT funktioniert in YouTube Studio, Premiere Pro, DaVinci Resolve, Final Cut, CapCut und jedem Standard-Video-Editor.',
        },
        {
          q: 'Passen die SRT-Timings exakt zu meinen Video-Frames?',
          a: 'Ja. SRT-Zeitstempel sind in Millisekunden, was präziser ist als jede Videoframerate. Sie passen korrekt bei 24, 25, 29.97, 30, 50 und 60 fps.',
        },
        {
          q: 'Kann ich ein Video ohne Ton transkribieren (nur Text am Bildschirm)?',
          a: 'Nein. Wir transkribieren gesprochenes Audio. Für Texterkennung am Bildschirm brauchen Sie OCR, das ist ein anderes Tool.',
        },
        {
          q: 'Wie genau ist Video in Text?',
          a: 'Hängt vom Audio ab. Saubere Voiceover-Aufnahmen: nahezu menschliche Genauigkeit (95 Prozent oder besser). Konferenzvideos mit schlechter Raumakustik: rund 85 bis 90 Prozent. Musiklastige Videos mit leisem Dialog: weiter darunter.',
        },
        {
          q: 'Wird mein Video zu YouTube oder Drittdiensten hochgeladen?',
          a: 'Nein. Ihr Video wird zu unserem Transkriptions-Anbieter gestreamt und verworfen. Nichts wird zu YouTube, Google oder anderswo hochgeladen. Wir sind nicht im Cloud-Video-Storage-Geschäft.',
        },
        {
          q: 'Kann ich das Transkript vor dem Download bearbeiten?',
          a: 'Ja. Korrigieren Sie falsche Wörter im Browser vor dem Export. Nützlich für Eigennamen und Fachbegriffe.',
        },
        {
          q: 'Unterstützen Sie 360-Video oder VR-Videoformate?',
          a: 'Der Video-Codec spielt für uns keine Rolle. Solange die Datei ein Standard-Container (MP4, MOV) mit einer Tonspur ist, extrahieren wir das Audio und transkribieren.',
        },
        {
          q: 'Was, wenn mein Video mehrere Audiospuren hat (Kommentar, Original, Musik)?',
          a: 'Wir nutzen nur die Standardspur. Wenn Sie eine bestimmte Spur wollen, exportieren Sie das Video neu mit dieser Spur als Standard, oder extrahieren Sie die gewünschte Spur und laden Sie sie als Audio hoch.',
        },
        {
          q: 'Gibt es eine Längen-Begrenzung für Videos?',
          a: '30 Minuten pro Datei kostenlos, 60 Minuten mit Anmeldung. Für längere Videos teilen Sie in Stücke. Die Transkripte lassen sich danach zusammenfügen.',
        },
        {
          q: 'Kann ich einen Live-Video-Stream transkribieren?',
          a: 'Nein. Wir arbeiten nur mit aufgenommenen Dateien. Für Live-Transkription brauchen Sie eine andere Kategorie von Tool.',
        },
      ]}
      relatedLinks={[
        { href: '/de/free-srt-generator', label: 'SRT-Generator', desc: 'Dasselbe Tool, ausgerichtet auf Untertitel-Workflows.' },
        { href: '/de/youtube-to-text', label: 'YouTube in Text', desc: 'Wenn Ihr Video bereits auf YouTube ist.' },
        { href: '/de/zoom-transcription', label: 'Zoom-Transkription', desc: 'Speziell für Zoom-MP4-Aufnahmen.' },
        { href: '/de/how-to-compress-audio', label: 'Audio komprimieren', desc: 'Für Videos, deren Audio die Größenbeschränkung überschreitet.' },
      ]}
    />
  )
}
