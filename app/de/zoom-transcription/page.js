import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'ja': 'https://mictoo.com/ja/zoom-transcription',
  'ko': 'https://mictoo.com/ko/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Zoom-Transkription — Zoom-Aufnahmen kostenlos transkribieren | Mictoo',
  description:
    'Kostenlose Zoom-Transkription. Laden Sie Ihre Cloud Recording (MP4) oder lokale Aufnahme (M4A) hoch und erhalten Sie in Sekunden ein präzises KI-Transkript. Ohne Anmeldung, ohne Tarif pro Minute.',
  alternates: { canonical: 'https://mictoo.com/de/zoom-transcription', languages: LANGS },
}

export default function DeZoomPage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="ZOOM · MP4 · M4A · KOSTENLOS"
      h1={
        <>
          Zoom-Transkription
          <br />
          <span className="text-brand-600">Zoom-Aufnahmen in Text umwandeln</span>
        </>
      }
      subtitle="Verwandeln Sie Ihre Zoom-Aufnahme in sauberen Text. Cloud Recording MP4 oder lokale M4A, beides geht. Datei ablegen, in Sekunden das Transkript bekommen."
      howItWorks={[
        {
          icon: '🎬',
          title: 'Zoom-Aufnahme exportieren',
          desc: 'Cloud Recordings laden sich als MP4 (Video plus Audio) oder M4A (nur Audio) herunter. Lokale Aufnahmen werden auf Ihrem Gerät als MP4 plus M4A gespeichert. Beide Formate funktionieren hier.',
        },
        {
          icon: '⚡',
          title: 'Datei ablegen',
          desc: 'Reinziehen. Wir holen das Audio (falls es Video ist) und schicken es an Whisper large-v3. Ein 30-Minuten-Meeting ist meist in unter einer Minute fertig.',
        },
        {
          icon: '📋',
          title: 'Transkript holen',
          desc: 'Lesen, kopieren oder als TXT oder SRT herunterladen. Korrigieren Sie falsche Namen oder Fachbegriffe inline vor dem Export.',
        },
      ]}
      whyUse={{
        title: 'Warum Mictoo für Zoom-Aufnahmen',
        bullets: [
          {
            title: 'Funktioniert auf jedem Zoom-Plan, auch dem kostenlosen',
            desc: 'Zooms Transkription ist auf bestimmte Bezahl-Tarife beschränkt. Unsere hat keine Zoom-Plan-Anforderung. Aufnehmen, herunterladen, hochladen, fertig.',
          },
          {
            title: 'Besser bei nicht-muttersprachlichem Englisch und Code-Switching',
            desc: 'Whisper large-v3 behandelt Akzente und zweisprachige Meetings besser als Zooms eingebaute Transkription, die historisch englisch-first ist.',
          },
          {
            title: 'Nur-Audio-M4A ist klein genug für direkten Upload',
            desc: 'Die meisten 30-Minuten-Zoom-Meetings landen bei 15 bis 25 MB als M4A. Passt komfortabel in unser Free-Tier ohne jegliche Komprimierung.',
          },
          {
            title: 'Keine 14-Tage-Retention-Sorge',
            desc: 'Zoom Cloud Recordings können nach 14 bis 30 Tagen verschwinden, je nach Plan. Sobald Sie die Datei heruntergeladen und hier transkribiert haben, gehört sie Ihnen für immer.',
          },
          {
            title: 'Privatsphäre',
            desc: 'Die Datei wird zum Transkriptions-Anbieter gestreamt und verworfen. Wir schreiben die Zoom-Aufnahme nicht in unsere Datenbank oder unseren Speicher.',
          },
        ],
      }}
      useCases={{
        title: 'Wofür Leute Zoom-Aufnahmen transkribieren',
        items: [
          {
            title: 'Interne Meeting-Protokolle',
            desc: 'Aufnahme durchlaufen lassen, Text holen, in Notion oder Confluence einfügen. Wer das Meeting verpasst hat, holt es in fünf Minuten Lesen statt einer Stunde Video nach.',
          },
          {
            title: 'Kunden- und Vertriebsgespräche',
            desc: 'Speichern Sie das Transkript im CRM neben dem Deal. Das zukünftige Ich, sechs Monate später, wird Ihnen danken.',
          },
          {
            title: 'Asynchrone Stand-ups für verteilte Teams',
            desc: 'Manche Teams nehmen asynchrone Stand-ups auf, statt Live-Meetings zu machen. Transkripte machen sie durchsuchbar und überfliegbar.',
          },
          {
            title: 'Forschungs-Interviews',
            desc: 'Qualitative Forschung, User Interviews, Screening-Calls für Kandidaten. Was Sie codieren und taggen, ist der Text, nicht das Video.',
          },
          {
            title: 'Webinar- und Panel-Transkripte',
            desc: 'Veröffentlichen Sie das Transkript neben der Aufnahme für Barrierefreiheit und SEO. Suchmaschinen indizieren den Text, nicht das Video.',
          },
        ],
      }}
      proTips={{
        title: 'Tipps für Zoom-Transkription',
        tips: [
          {
            title: 'Die Nur-Audio-M4A herunterladen, nicht die MP4',
            desc: 'Zoom Cloud Recording bietet beides an. Die M4A ist ein Zehntel der MP4-Größe bei identischer Audioqualität. Schnellerer Upload, weit unter unserem 60-MB-Cap für die meisten Meetings.',
          },
          {
            title: '„Record a separate audio file for each participant" für Multi-Speaker-Meetings aktivieren',
            desc: 'Unter Zoom-Einstellungen, Recording. Das gibt Ihnen eine M4A pro Sprecher. Jede separat transkribieren für saubere Sprecher-Zuordnung, ohne Diarisierung nötig.',
          },
          {
            title: 'Teilnehmer stummschalten, die nicht sprechen',
            desc: 'Hintergrundgeräusche aus offenen Mikros während einer Präsentation produzieren Geisterwörter im Transkript. In großen Calls lohnt es sich, das durchzusetzen.',
          },
          {
            title: 'Lokale Aufnahme und Cloud-Aufnahme haben die gleiche Qualität',
            desc: 'Beide nehmen standardmäßig mit denselben Audio-Einstellungen auf. Lokal ist schneller (kein Upload zu Zoom zuerst), aber braucht Festplattenplatz.',
          },
          {
            title: 'Für sensiblen Content lokale Aufnahme nutzen',
            desc: 'Cloud Recording speichert Ihr Meeting auf Zoom-Servern. Lokale Aufnahme bleibt auf Ihrem Gerät, bis Sie wählen, wohin sie geht. Für vertrauliche Kunden- oder HR-Gespräche ist lokal und dann direkt zu uns der Weg, der die Privatsphäre wahrt.',
          },
          {
            title: 'Lange Zoom-Meetings (über 60 Minuten) müssen geteilt werden',
            desc: 'Unser Datei-Cap ist 60 Minuten mit Anmeldung. Für einen 90-Minuten-Call in zwei 45-Minuten-Stücke teilen. Einfach in Audacity (File, Export, Multiple) oder mit ffmpeg.',
          },
        ],
      }}
      faq={[
        {
          q: 'Funktioniert Mictoo mit Zoom Cloud Recordings?',
          a: 'Ja. Laden Sie die MP4 oder M4A aus Ihrer Zoom-Aufnahme-Bibliothek herunter, dann hier hochladen. Der M4A-Nur-Audio-Export ist schneller und kleiner.',
        },
        {
          q: 'Funktioniert es mit Zoom-Phone-Anrufaufnahmen?',
          a: 'Ja. Zoom Phone nimmt als MP3 oder M4A auf. Beides funktioniert. Telefonqualitäts-Audio (8 kHz Mono) transkribiert etwas weniger genau als Video-Meeting-Audio, aber das Ergebnis ist trotzdem lesbar.',
        },
        {
          q: 'Was ist mit lokalen Zoom-Aufnahmen?',
          a: 'Gleiche Geschichte. Zoom speichert sie als MP4 plus M4A in Ihrem Standard-Zoom-Ordner. Legen Sie die M4A hier ab.',
        },
        {
          q: 'Bekomme ich Sprecher-Labels?',
          a: 'Nicht automatisch. Wenn Sie „Record a separate audio file for each participant" in den Zoom-Einstellungen aktiviert haben, können Sie die Datei jedes Sprechers separat transkribieren. Andernfalls müssen Sie Sprecher-Labels manuell basierend auf dem Gesprächsfluss hinzufügen.',
        },
        {
          q: 'Meine Zoom-Aufnahme ist über 60 MB. Was tun?',
          a: 'Nutzen Sie den Nur-Audio-M4A-Download statt der MP4. Wenn es immer noch zu groß ist, in Stücke teilen oder mit niedrigerer Bitrate neu kodieren. Siehe unsere Komprimierungs- und Teil-Guides.',
        },
        {
          q: 'Wie vergleicht sich Mictoo mit Zooms eingebauter Transkription?',
          a: 'Wir sind besser bei nicht-muttersprachlichem Englisch, besser bei Akzenten und haben breitere Sprachunterstützung (über 50). Zooms eingebaute Transkription ist bequemer, wenn Sie bereits den richtigen Zoom-Plan bezahlen. Unsere ist kostenlos und funktioniert unabhängig von Ihrem Zoom-Tier.',
        },
        {
          q: 'Wird meine Zoom-Aufnahme auf Ihren Servern gespeichert?',
          a: 'Nein. Die Datei wird zum Transkriptions-Anbieter (Groq, mit OpenAI als Backup) gestreamt, transkribiert und verworfen. Wir schreiben die Aufnahme nicht auf die Festplatte.',
        },
        {
          q: 'Kann ich ein Zoom-Meeting in Echtzeit transkribieren?',
          a: 'Nein. Wir arbeiten nur mit aufgenommenen Dateien. Für Echtzeit während des Meetings wäre Zooms eingebautes Tool oder ein dedizierter Meeting-Assistent die richtige Wahl.',
        },
        {
          q: 'Was ist mit Zoom-Webinaren und großen Meetings?',
          a: 'Gleicher Workflow. Aufnahme herunterladen, hochladen, transkribieren. Für sehr lange Webinare (über 60 Minuten) zuerst teilen.',
        },
        {
          q: 'Werden Chat-Nachrichten aus dem Meeting transkribiert?',
          a: 'Nein. Chat-Nachrichten werden separat von Zoom gespeichert (als TXT in Ihrem Zoom-Ordner). Wir transkribieren nur das Audio. Kombinieren Sie beides selbst, wenn Sie beides brauchen.',
        },
        {
          q: 'Wie genau ist die Zoom-Audio-Transkription?',
          a: 'Für sauberes Meeting-Audio mit guten Mikros: 90 bis 95 Prozent. Für Meetings mit schlechtem Audio (Laptop-Mikro, lauter Raum, schwaches WLAN) sinkt die Genauigkeit etwas. Namen und Fachbegriffe brauchen oft Cleanup.',
        },
        {
          q: 'Funktioniert das auch für Microsoft Teams- oder Google Meet-Aufnahmen?',
          a: 'Ja, derselbe Motor. Wir haben eigene Seiten für Google Meet und Microsoft Teams.',
        },
      ]}
      relatedLinks={[
        { href: '/de/google-meet-transcription', label: 'Google Meet-Transkription', desc: 'Gleicher Workflow für Google Meet-Aufnahmen.' },
        { href: '/de/teams-meeting-transcription', label: 'Teams-Transkription', desc: 'Für Microsoft Teams-Aufnahmen.' },
        { href: '/de/meeting-transcription', label: 'Meeting-Transkription', desc: 'Generische Seite, wenn Ihre Aufnahme von einer anderen Plattform stammt.' },
        { href: '/de/interview-transcription', label: 'Interview-Transkription', desc: 'Für Einzelgespräche und qualitative Interviews.' },
      ]}
    />
  )
}
