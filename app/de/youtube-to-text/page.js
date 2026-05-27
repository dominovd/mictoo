import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube in Text — YouTube-Videos kostenlos transkribieren | Mictoo',
  description:
    'Kostenlose YouTube-zu-Text-Transkription. Video herunterladen, Datei ablegen, präzises KI-Transkript erhalten. Besser als YouTubes Auto-Untertitel, mit Zeitstempeln und SRT-Export.',
  alternates: { canonical: 'https://mictoo.com/de/youtube-to-text', languages: LANGS },
}

export default function DeYouTubeToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="YouTube · SRT · KOSTENLOS"
      h1={
        <>
          YouTube in Text
          <br />
          <span className="text-brand-600">Kostenloses YouTube-Transkript-Tool</span>
        </>
      }
      subtitle="Holen Sie sich ein sauberes, präzises Transkript von jedem YouTube-Video. Datei herunterladen, hier ablegen, KI macht den Rest. Besser als YouTubes Auto-Untertitel, mit ordentlicher Zeichensetzung und Zeitstempeln."
      howItWorks={[
        {
          icon: '⬇️',
          title: 'Video oder Audio herunterladen',
          desc: 'Am einfachsten: eine kostenlose Desktop-App wie 4K Video Downloader oder ClipGrab (Mac, Windows, Linux). App öffnen, YouTube-Link einfügen, „Nur Audio" wählen (M4A oder MP3), Download klicken. In Sekunden erledigt. Zur rechtlichen Seite siehe FAQ unten.',
        },
        {
          icon: '📂',
          title: 'Datei ablegen',
          desc: 'Ziehen Sie die heruntergeladene Datei in Mictoo. Wir nehmen MP4, M4A, MP3, WAV, FLAC, OGG, WEBM. Das Audio geht an Whisper large-v3.',
        },
        {
          icon: '📋',
          title: 'Transkript holen',
          desc: 'Im Browser lesen, in die Zwischenablage kopieren oder als TXT oder SRT herunterladen. Die SRT funktioniert als YouTube-Untertitel, weit besser als Auto-Untertitel.',
        },
      ]}
      whyUse={{
        title: 'Warum Mictoo statt YouTubes Auto-Untertitel',
        bullets: [
          {
            title: 'Auto-Untertitel verfehlen Zeichensetzung und Eigennamen',
            desc: 'YouTubes Untertitel sind Stream-of-Consciousness ohne Kommas, ohne Punkte und mit einer Tendenz, Namen zu verstümmeln. Whisper large-v3 gibt Ihnen vollständige Sätze mit Zeichensetzung, Großschreibung und erkennbaren Eigennamen.',
          },
          {
            title: 'Auto-Untertitel sind nicht immer verfügbar',
            desc: 'Kleinere Kanäle, private Videos, beendete Livestreams oder Videos in weniger verbreiteten Sprachen haben oft keine Untertitel oder schlechte maschinelle Untertitel. Whisper funktioniert auf allen.',
          },
          {
            title: 'Bessere Genauigkeit bei Musik und Akzenten',
            desc: 'YouTubes Auto-Untertitel kämpfen mit Musik-Interludes und nicht-muttersprachlichem Englisch. Whisper behandelt beides besser, mit weniger halluzinierten Wörtern und stärkerer Akzent-Abdeckung.',
          },
          {
            title: 'Sie bekommen eine saubere SRT, kein YouTube-XML-Format',
            desc: 'YouTubes Untertitel-Spur lädt sich in XML oder VTT mit seltsamen Zeitstempeln herunter. Unsere SRT ist Standard, drop-in kompatibel mit jedem Video-Editor.',
          },
          {
            title: 'Funktioniert auf Videos, die nicht Ihnen gehören',
            desc: 'Sie können Vorlesungen, Interviews, Podcasts auf YouTube für persönliches Studium oder Forschungszwecke transkribieren, ohne Kanal-Besitzer-Zugriff zu brauchen (vorbehaltlich Urheberrecht und YouTube-Bedingungen, siehe FAQ).',
          },
        ],
      }}
      useCases={{
        title: 'Wofür Leute YouTube-Transkripte nutzen',
        items: [
          {
            title: 'Lange Vorlesungen und Tutorials studieren',
            desc: 'Eine 90-minütige MIT-Vorlesung lässt sich mit einer Textversion leichter studieren. Überfliegen Sie den Teil, den Sie brauchen, springen Sie für die Live-Erklärung zum Zeitstempel im Video.',
          },
          {
            title: 'Zitate in akademischer oder journalistischer Arbeit',
            desc: 'Wenn Sie auf etwas verweisen, das jemand in einem Video gesagt hat, lässt das Transkript mit Zeitstempeln den exakten Moment zitieren. Viel schneller als erneutes Anschauen zur Suche nach dem Zitat.',
          },
          {
            title: 'Eigenen YouTube-Content recyceln',
            desc: 'Verwandeln Sie ein YouTube-Video in einen Blog-Post, einen Newsletter, einen X-Thread, einen LinkedIn-Artikel. Das Transkript ist der erste Entwurf.',
          },
          {
            title: 'Videos für den persönlichen Gebrauch übersetzen',
            desc: 'Holen Sie das Transkript in der Ausgangssprache, werfen Sie es in DeepL oder ChatGPT, bekommen Sie eine Übersetzung. Nützlich für fremdsprachige Tutorials oder Interviews.',
          },
          {
            title: 'Schlechte Auto-Untertitel auf dem eigenen Kanal ersetzen',
            desc: 'Erzeugen Sie hier eine saubere SRT, laden Sie sie in YouTube Studio als offizielle Untertitelspur hoch. Bessere Zuschauer-Erfahrung, besseres SEO.',
          },
        ],
      }}
      proTips={{
        title: 'Tipps für YouTube-Transkription',
        tips: [
          {
            title: 'Im Downloader immer „Nur Audio" wählen',
            desc: 'Sie brauchen kein Video für die Transkription. Eine reine Audio-M4A ist ein Zehntel der Größe und lädt in Sekunden herunter. Sowohl 4K Video Downloader als auch ClipGrab haben eine „Nur Audio"-Option im Format-Dropdown. Die M4A ist meist unter 25 MB, sogar bei 30-Minuten-Videos.',
          },
          {
            title: 'Für Videos über 30 Minuten passt Nur-Audio meist ohne Teilen',
            desc: 'Nur-Audio umgeht das Größenlimit bei den meisten Videos. Wenn ein 90-Minuten-Vortrag trotzdem über 60 MB ist, teilen Sie in drei 30-Minuten-Stücke. Unser Teil-Guide hat Schritt-für-Schritt-Anweisungen für Audacity, keine Kommandozeile nötig.',
          },
          {
            title: 'Intro-Musik und Outro überspringen',
            desc: 'YouTube-Tutorials haben oft 15 Sekunden Theme-Musik am Anfang und Ende. Schneiden Sie diese in Audacity vor dem Upload weg. Whisper erfindet manchmal Wörter in nur-musikalischen Abschnitten.',
          },
          {
            title: 'Für Tutorial-Kanäle mit Code am Bildschirm brauchen Sie trotzdem die Audio-Version',
            desc: 'Texterkennung am Bildschirm ist eine andere Tool-Kategorie (OCR). Wenn das Tutorial darauf basiert, Code zu zeigen, müssen Sie separat Screenshots machen für den visuellen Teil. Das Transkript erfasst alles, was der Vortragende laut sagt.',
          },
          {
            title: 'YouTubes Live-Untertitel als Sanity-Check',
            desc: 'Wenn das Video Auto-Untertitel hat, können Sie sie mit Ihrem Whisper-Transkript vergleichen, um Abweichungen zu finden. Meist gewinnt Whisper, aber bei seltenem Slang oder Eigennamen erwischt YouTube vielleicht etwas, das Whisper verpasst hat.',
          },
          {
            title: 'Nutzen Sie einen Downloader, der den Videotitel als Dateinamen behält',
            desc: 'Sowohl 4K Video Downloader als auch ClipGrab können den YouTube-Titel als Standard-Dateinamen setzen. Das hält Ihre Transkripte organisiert, statt mit einem Ordner voller „video.mp4", „video (1).mp4", „video (2).mp4" zu enden.',
          },
        ],
      }}
      faq={[
        {
          q: 'Kann ich einen YouTube-Link direkt in Mictoo einfügen?',
          a: 'Derzeit nicht. YouTube blockiert aktiv, dass Drittanbieter-Server Videos abrufen. Sie müssen das Video oder Audio zuerst herunterladen (eine kostenlose Desktop-App wie 4K Video Downloader oder ClipGrab macht das mit zwei Klicks), dann die Datei zu Mictoo hochladen. URL-Unterstützung würde bedeuten, dass wir Server-seitige Download-Infrastruktur betreiben, die YouTube regelmäßig kaputtmacht.',
        },
        {
          q: 'Ist es legal, YouTube-Videos zu transkribieren?',
          a: 'Für persönliches Studium, Forschung, Journalismus, Barrierefreiheit und Fair-Use-Zwecke in den meisten Jurisdiktionen generell ja. Für kommerzielle Veröffentlichung des Transkripts brauchen Sie meist die Erlaubnis des Video-Erstellers. YouTubes Nutzungsbedingungen verbieten das Herunterladen von Inhalten, außer YouTube erlaubt es ausdrücklich (Download-Button) oder Sie haben die Erlaubnis des Erstellers. Prüfen Sie die Bedingungen für Ihren Fall. Das ist keine Rechtsberatung.',
        },
        {
          q: 'Wird mein Transkript zu YouTubes Auto-Untertiteln passen?',
          a: 'Nein, unseres wird besser sein. Auto-Untertitel haben keine Zeichensetzung und schwächere Genauigkeit. Whisper large-v3 erzeugt vollständige Sätze mit Zeichensetzung, Großschreibung und besserer Genauigkeit bei Musik, Akzenten und Eigennamen.',
        },
        {
          q: 'Welcher YouTube-Downloader ist der beste?',
          a: 'Für die meisten: 4K Video Downloader oder ClipGrab. Beide sind kostenlos, beide haben eine saubere Desktop-App für Mac, Windows und Linux, beide lassen Sie mit einem Klick nur Audio holen. Vermeiden Sie die „YouTube-Downloader online"-Seiten, die in Google auftauchen, die meisten sind in Malware-Anzeigen vergraben und gehen alle paar Monate kaputt. Wenn Sie mit der Kommandozeile vertraut sind, ist yt-dlp die zuverlässigste Option (es ist die Engine, die unter der Haube vieler GUI-Apps steckt).',
        },
        {
          q: 'Wie lade ich nur das Audio herunter?',
          a: 'In 4K Video Downloader: YouTube-Link einfügen, wenn der Format-Dialog öffnet, „Extract Audio" wählen und M4A oder MP3 nehmen. In ClipGrab: Link einfügen, im „Format"-Dropdown MP3 oder „Original audio" wählen. Beide produzieren eine einzelne Audiodatei, fertig zum Hochladen hier.',
        },
        {
          q: 'Was, wenn mein YouTube-Video in einer Sprache ist, die ich nicht spreche?',
          a: 'Whisper erkennt die Sprache automatisch und transkribiert in der Ausgangssprache. Dann können Sie das Ergebnis in DeepL oder ChatGPT einfügen zum Übersetzen. Zwei Schritte, aber das Ergebnis ist meist besser als YouTubes auto-übersetzte Untertitel.',
        },
        {
          q: 'Wie lange dauert die Transkription eines YouTube-Videos?',
          a: 'Nur der Transkriptionsschritt dauert etwa 1 bis 2 Prozent der Audiolänge. Ein 30-minütiger Vortrag ist in rund einer Minute fertig. Die Download-Zeit hängt von Ihrer Verbindung und der yt-dlp-Geschwindigkeit ab.',
        },
        {
          q: 'Bekomme ich Sprecher-Labels für Multi-Speaker-YouTube-Videos?',
          a: 'Nein, Whisper macht standardmäßig keine Sprecher-Diarisierung. Für Interviews und Panels mit mehreren Sprechern müssen Sie Sprecher-Labels manuell basierend auf dem Gesprächsfluss hinzufügen.',
        },
        {
          q: 'Kann ich YouTube-fertige Untertitel erzeugen?',
          a: 'Ja. Nach der Transkription als SRT herunterladen, dann die SRT in YouTube Studio unter Untertitel hochladen. Ersetzt die Auto-Untertitel durch eine saubere Version.',
        },
        {
          q: 'Speichert Mictoo das YouTube-Video, das ich hochlade?',
          a: 'Nein. Die Datei wird zu unserem Transkriptions-Anbieter gestreamt, verarbeitet und verworfen. Wir behalten weder Video noch Audio.',
        },
        {
          q: 'Mein YouTube-Video hat Kapitel. Reflektiert das Transkript das?',
          a: 'Wir extrahieren keine YouTube-Kapitel-Metadaten. Das Transkript kommt als ein zusammenhängendes Dokument. Wenn Sie kapitelweise Transkripte wollen, teilen Sie die Audiodatei vor dem Upload an den Kapitel-Zeitstempeln.',
        },
        {
          q: 'Kann ich einen YouTube-Livestream nach Ende transkribieren?',
          a: 'Ja, solange der Livestream als reguläres Video archiviert ist. Laden Sie ihn gleich herunter (yt-dlp), dann hochladen. Live-Transkription während des Streams selbst wird nicht unterstützt.',
        },
      ]}
      relatedLinks={[
        { href: '/de/transcribe-video-to-text', label: 'Video in Text', desc: 'Für Nicht-YouTube-Videodateien (Zoom, Bildschirmaufnahmen, Vlogs).' },
        { href: '/de/free-srt-generator', label: 'SRT-Generator', desc: 'Um saubere Untertitel zurück in YouTube Studio hochzuladen.' },
        { href: '/de/podcast-transcription', label: 'Podcast-Transkription', desc: 'Für Podcast-artiges Audio, das auf YouTube hochgeladen wurde.' },
        { href: '/de/how-to-split-audio', label: 'Audio teilen', desc: 'Für lange Videos, die unser 60-Minuten-Datei-Limit überschreiten.' },
      ]}
    />
  )
}
