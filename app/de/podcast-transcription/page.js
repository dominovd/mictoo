import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'ko': 'https://mictoo.com/ko/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'Podcast-Transkription — kostenloser KI-Transkript-Generator | Mictoo',
  description:
    'Kostenlose KI-Podcast-Transkription. Laden Sie Ihre Episode hoch (MP3, MP4, M4A, WAV) und erhalten Sie in Sekunden ein sauberes Transkript mit Zeitstempeln. Ohne Anmeldung, ohne Tarif pro Minute.',
  alternates: { canonical: 'https://mictoo.com/de/podcast-transcription', languages: LANGS },
}

export default function DePodcastPage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="Podcaster · Hosts · Kostenlos"
      h1={
        <>
          Podcast-Transkription
          <br />
          <span className="text-brand-600">Kostenloser Transkript-Generator</span>
        </>
      }
      subtitle="Verwandeln Sie jede Episode in sauberen Text. Laden Sie Ihre MP3, MP4 oder M4A hoch und erhalten Sie in Sekunden das Transkript. Ohne Konto, ohne Tarif pro Minute."
      howItWorks={[
        {
          icon: '📂',
          title: 'Episode ablegen',
          desc: 'MP3, MP4, M4A, WAV oder FLAC. Cloud Recording von Riverside, Exports aus Descript, rohes Audio aus Zoom, Anchor.fm-Dateien. Alles geht.',
        },
        {
          icon: '⚡',
          title: 'KI macht die Arbeit',
          desc: 'Whisper large-v3 läuft auf unserem Backend und wandelt das Audio in Text um. Die meisten 30-Minuten-Episoden sind in unter einer Minute fertig.',
        },
        {
          icon: '📋',
          title: 'Kopieren, herunterladen oder bearbeiten',
          desc: 'Holen Sie sich den Text als TXT, als SRT für Untertitel, oder fügen Sie ihn direkt in Ihren Show-Notes-Editor ein. Korrigieren Sie falsche Wörter in unserem Viewer vor dem Export.',
        },
      ]}
      whyUse={{
        title: 'Warum Podcaster Mictoo nutzen',
        bullets: [
          {
            title: 'Lange Episoden sind kein Problem',
            desc: 'Bis zu 60 Minuten pro Datei nach kostenloser Anmeldung. Bei einer Aufteilung in zwei Teile behalten wir relative Zeitstempel, damit Sie die SRT-Dateien ohne Rechnerei wieder zusammensetzen können.',
          },
          {
            title: 'Akzente und Crosstalk halten stand',
            desc: 'Whisper large-v3 ist das stärkste offene Sprachmodell, das wir für nicht-muttersprachliches Englisch kennen. Wenn Ihr Co-Host aus Berlin oder São Paulo kommt, wird das Transkript nicht zu Brei.',
          },
          {
            title: 'Musik-Beds brechen es nicht',
            desc: 'Unsere Pipeline führt Voice Activity Detection vor der Transkription aus. Lange instrumentale Intros werden als Stille markiert, nicht als erfundene Wörter. Sponsor-Reads mit Musik-Bett kommen ebenfalls sauber durch.',
          },
          {
            title: 'Kein Abo',
            desc: 'Viele Podcaster transkribieren eine oder zwei Episoden im Monat. 15 Dollar für einen monatlichen Seat dafür zu zahlen, ist Verschwendung. Laden Sie die Datei nach Bedarf hoch. Wir verdienen mit Werbung und einem geplanten Pro-Tarif für Power-User.',
          },
          {
            title: 'Ihr Audio wird nicht gespeichert',
            desc: 'Dateien werden direkt zum Sprach-Anbieter gestreamt, transkribiert und gelöscht. Wir behalten Ihre Episoden nicht, und die Anbieter (Groq, OpenAI) trainieren nicht auf API-Daten.',
          },
        ],
      }}
      useCases={{
        title: 'Was Podcaster wirklich mit dem Transkript machen',
        items: [
          {
            title: 'Show Notes und Blog-Posts',
            desc: 'Fügen Sie das Transkript in Ihr CMS ein, markieren Sie Kapitel, fügen Sie Links hinzu, veröffentlichen Sie den Blog-Post. Eine 45-Minuten-Episode liefert meist 6000 bis 8000 Wörter Quellmaterial. Drei oder vier leicht bearbeitete Blog-Posts aus einer Aufnahme.',
          },
          {
            title: 'Episoden-Zitate für Social Media',
            desc: 'Scannen Sie das Transkript nach der Zeile, die gesessen hat, und machen Sie eine Grafik daraus. Viel schneller, als das Audio in 1,5x-Geschwindigkeit nach dem Zeitstempel zu durchsuchen.',
          },
          {
            title: 'Durchsuchbares Archiv des Backkatalogs',
            desc: 'Lassen Sie Ihre alten Episoden durch Batch-Transkription laufen, und plötzlich haben Sie ein Strg+F über Jahre an Gesprächen. Nützlich, wenn ein Gast zurückkommt und Sie sich erinnern wollen, worüber Sie das letzte Mal gesprochen haben.',
          },
          {
            title: 'Ersatz für YouTube-Auto-Untertitel',
            desc: 'YouTubes Auto-Untertitel sind mittelmäßig für Podcasts mit zwei Stimmen und Musik. Laden Sie stattdessen eine Mictoo-SRT hoch. Bessere Zeichensetzung, weniger Fehler, bessere Barrierefreiheit.',
          },
          {
            title: 'Barrierefreiheits-Transkript-Link',
            desc: 'Viele Podcaster fügen einen „Transkript lesen"-Link in den RSS-Show-Notes hinzu. Das hilft gehörlosen und schwerhörigen Hörern, und es hilft Suchmaschinen, Ihre Inhalte zu finden.',
          },
        ],
      }}
      proTips={{
        title: 'Tipps für sauberere Podcast-Transkripte',
        tips: [
          {
            title: 'Intro- und Outro-Musik zuerst entfernen',
            desc: 'Whisper ignoriert Musik gut, aber ein 90 Sekunden langes instrumentales Cold Open löst manchmal Geisterwörter aus. Wenn Ihr Intro in jeder Episode gleich ist, schneiden Sie die ersten 1:30 in Audacity vor dem Upload weg. Spart ein paar Minuten Cleanup später.',
          },
          {
            title: 'In 64 kbps Mono exportieren, wenn die Rohdatei riesig ist',
            desc: 'Stimme braucht kein Stereo, und 64 kbps reichen für Sprache. Eine zweistündige Episode mit 64 kbps Mono ist rund 55 MB. Passt in das 60-MB-Limit mit Anmeldung ohne Teilen. ffmpeg: ffmpeg -i episode.wav -ac 1 -b:a 64k episode.mp3.',
          },
          {
            title: 'Bei Interviews mit schlechtem Gast-Audio jede Spur einzeln transkribieren',
            desc: 'Wenn Sie auf Riverside oder SquadCast aufnehmen und separate Audiospuren pro Sprecher haben, laden Sie jede für sich hoch. Whisper kommt mit einer Stimme nach der anderen leichter klar. Sauberere Zuordnung, weniger verlorene Wörter bei Überlappungen.',
          },
          {
            title: 'Bei kurzen Episoden die Sprache explizit setzen',
            desc: 'Die Auto-Erkennung samplet den ersten Audio-Chunk. Wenn Sie mit einem einwortigen Cold Open oder einem Lachen öffnen, kann die Erkennung in die falsche Sprache fallen. Für alles unter 5 Minuten die Sprache manuell wählen.',
          },
          {
            title: 'Zeichensetzung wird unvollkommen sein. Erste 10 Zeilen korrigieren, Rest stehen lassen',
            desc: 'Whisper bekommt die meiste Zeichensetzung richtig hin, aber verpasst manchmal Strichpunkte und direkte Rede. Für Show Notes zählen die ersten 10 Zeilen (Leute überfliegen sie). Darüber hinaus: rausschicken wie es ist.',
          },
          {
            title: 'SRT-Export nutzen, auch wenn Sie keine Untertitel brauchen',
            desc: 'SRT gibt Ihnen alle paar Sekunden Zeitstempel. Selbst wenn Sie in einen Blog-Post einfügen, helfen diese Zeitstempel, ins Audio zurückzuspringen, um ein Zitat zu verifizieren. Wir haben einen kostenlosen SRT-Generator direkt hier.',
          },
        ],
      }}
      faq={[
        {
          q: 'Kann ich eine 2-Stunden-Episode transkribieren?',
          a: 'Ja, aber teilen Sie sie zuerst. Unser Datei-Cap ist 30 Minuten kostenlos, oder 60 Minuten nach Anmeldung. Für eine 2-Stunden-Episode in zwei oder drei Teile teilen und jeden transkribieren. Unser Audio-Teilen-Guide erklärt, wie das in 60 Sekunden mit ffmpeg oder Audacity geht.',
        },
        {
          q: 'Bekomme ich Sprecher-Labels (Host vs. Gast)?',
          a: 'Derzeit nicht automatisch. Whisper selbst macht keine Sprecher-Diarisierung. Wenn Sie separate Spuren pro Sprecher haben (üblich bei Riverside, SquadCast, Zencastr), laden Sie jede separat hoch und beschriften Sie sie selbst im finalen Transkript. Wir schauen uns Diarisierung an, aber nur, wenn wir es gut hinbekommen.',
        },
        {
          q: 'Wie kommt es mit Akzenten und zweisprachigen Podcasts klar?',
          a: 'Whisper large-v3 wurde auf 680.000 Stunden mehrsprachiges Audio trainiert. Nicht-muttersprachliches Englisch, regionale Akzente und Code-Switching funktionieren besser als bei kleineren Modellen. Für einen Podcast, der mitten in der Episode zwischen Englisch und Spanisch wechselt, wählen Sie „Auto-Erkennung" als Sprache, und Whisper folgt dem Wechsel.',
        },
        {
          q: 'Welche Audioformate unterstützen Sie für Podcasts?',
          a: 'MP3, M4A, WAV, FLAC, OGG, WEBM und AAC. Plus Videodateien wie MP4 und MOV (wir extrahieren das Audio). Wenn Ihr Podcast-Hoster einen Download in einem davon bietet, sind Sie startklar. AIFF und ALAC werden nicht direkt unterstützt, konvertieren Sie zuerst in WAV.',
        },
        {
          q: 'Gibt es ein Wörter-Limit pro Episode?',
          a: 'Kein Wörter-Limit. Nur das Dateigrößen-Limit (25 MB kostenlos, 60 MB mit Anmeldung) und die Dauer (30 Min kostenlos, 60 Min mit Anmeldung). Eine typische 60-Minuten-Episode produziert rund 9000 bis 11.000 Wörter.',
        },
        {
          q: 'Wie genau ist die Podcast-Transkription im Vergleich zu menschlichen Transkribierern?',
          a: 'Für sauberes Studio-Audio landet Whisper large-v3 typischerweise bei 5 bis 10 Prozent Wortfehlerrate. Menschliche Transkribierer liegen bei 3 bis 5 Prozent. Für die meiste Show-Notes- und Blog-Repurposing-Arbeit ist KI gut genug. Für Gerichtsaussagen oder akademische Zitate nehmen Sie einen Menschen.',
        },
        {
          q: 'Wird meine Episode auf Ihren Servern gespeichert?',
          a: 'Nein. Wir leiten das Audio direkt zum Transkriptions-Anbieter (Groq, mit OpenAI als Backup). Sie verarbeiten es, und wir verwerfen es. Wir schreiben Ihre Podcast-Datei nie in unsere Datenbank oder unseren Speicher.',
        },
        {
          q: 'Kann ich als SRT für Untertitel herunterladen?',
          a: 'Ja. Klicken Sie nach der Transkription den SRT-Download-Button. Nutzen Sie ihn direkt in YouTube Studio, Premiere Pro, DaVinci Resolve oder jedem Video-Editor.',
        },
        {
          q: 'Berechnen Sie pro Minute?',
          a: 'Nein. Transkription auf Mictoo ist kostenlos. Wir sind derzeit werbefinanziert, mit einem bezahlten Pro-Tarif, der später für Nutzer kommt, die längere Dateien oder Batch-Uploads brauchen.',
        },
        {
          q: 'Meine Episode hat explizite Sprache. Wird sie zensiert?',
          a: 'Keine Filterung. Das Transkript spiegelt exakt wider, was gesagt wurde. Wenn Sie Schimpfwörter für eine saubere Version bearbeiten wollen, machen Sie das selbst nach dem Download.',
        },
        {
          q: 'Kann ich das Transkript vor dem Download bearbeiten?',
          a: 'Ja. Es gibt einen einfachen Editor im Ergebnis-View. Korrigieren Sie falsche Wörter, dann laden Sie die bearbeitete Version als TXT oder SRT herunter.',
        },
        {
          q: 'Ist die Podcast-Transkription auf Mictoo DSGVO-konform?',
          a: 'Wir speichern Audio oder Transkript nicht auf unseren Servern, nachdem Sie die Seite verlassen. Wir sind in Europa, und unsere Anbieter (Groq US, OpenAI US) haben DPAs unterzeichnet. Für spezifische Compliance-Fragen siehe unsere Datenschutzerklärung oder schreiben Sie an info@mictoo.com.',
        },
      ]}
      relatedLinks={[
        { href: '/de/free-srt-generator', label: 'SRT-Generator', desc: 'Podcast-fertige Untertiteldateien, nicht nur reiner Text.' },
        { href: '/de/timestamped-transcription', label: 'Transkription mit Zeitstempeln', desc: 'Für Kapitelmarken, Schnitte und Zitatsuche.' },
        { href: '/de/interview-transcription', label: 'Interview-Transkription', desc: 'Derselbe Motor, optimiert für das One-on-One-Format.' },
        { href: '/de/youtube-to-text', label: 'YouTube in Text', desc: 'Ihre Episode ist schon auf YouTube? Holen Sie das Audio von dort.' },
      ]}
    />
  )
}
