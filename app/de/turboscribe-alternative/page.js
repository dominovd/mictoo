import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/turboscribe-alternative',
  'fr': 'https://mictoo.com/fr/turboscribe-alternative',
  'de': 'https://mictoo.com/de/turboscribe-alternative',
  'es': 'https://mictoo.com/es/turboscribe-alternative',
  'ru': 'https://mictoo.com/ru/turboscribe-alternative',
  'x-default': 'https://mictoo.com/turboscribe-alternative',
}

export const metadata = {
  title: 'TurboScribe-Alternative — Kostenlose Whisper-Transkription ohne Anmeldung | Mictoo',
  description: 'TurboScribe ist ein beliebtes Whisper-basiertes Transkriptions-Tool, verlangt aber ein Konto und begrenzt kostenlose Nutzer auf 30 Minuten pro Tag. Mictoo ist komplett ohne Anmeldung mit integrierter KI-Zusammenfassung.',
  alternates: { canonical: 'https://mictoo.com/de/turboscribe-alternative', languages: LANGS },
}

export default function DeTurboScribeAlternativePage() {
  return (
    <ComparisonLayout
      badge="Vergleich · TurboScribe · Kostenlos"
      h1={<>TurboScribe-Alternative<br /><span className="text-brand-600">Gleiches Whisper, ohne Anmeldung</span></>}
      subtitle="TurboScribe und Mictoo nutzen beide OpenAI Whisper, daher ist die Transkriptionsqualität nahezu identisch. Die Hauptunterschiede liegen in Anmeldung, Datei-Limits und integrierter KI-Zusammenfassung."
      competitorName="TurboScribe"
      rows={[
        { label: 'Kostenlose Stufe',       mictoo: 'Keine Monatsgrenze, 25 MB pro Datei', them: '3 Dateien / Tag, je 30 Min' },
        { label: 'Konto erforderlich',     mictoo: 'Nein', them: 'Ja (E-Mail-Anmeldung)' },
        { label: 'Bezahlpläne',            mictoo: 'Kostenlos',  them: '20 $ / Monat unbegrenzt' },
        { label: 'Dateigröße (gratis)',    mictoo: '25 MB pro Datei', them: '~150 MB / 30 Min pro Datei' },
        { label: 'Dateigröße (payment)',   mictoo: 'Wie gratis',  them: '5 GB / 10 h pro Datei' },
        { label: 'Batch-Upload',           mictoo: 'Nein', them: 'Ja (kostenpflichtig, bis 50 Dateien)' },
        { label: 'Transkriptionsmodell',   mictoo: 'OpenAI Whisper', them: 'OpenAI Whisper' },
        { label: 'KI-Zusammenfassung',     mictoo: 'Ja, kostenlos', them: 'Ja (kostenpflichtig)' },
        { label: 'SRT-Export',             mictoo: 'Ja, kostenlos', them: 'Ja' },
        { label: 'Transkriptions-Historie', mictoo: 'Nein', them: 'Ja (kontobasiert)' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: 'Wirklich ohne Anmeldung', desc: 'TurboScribe verlangt eine E-Mail auch in der kostenlosen Stufe. Mictoo fragt nichts ab — Datei ablegen, Text bekommen. Nützlich für einmalige Aufnahmen ohne ein weiteres Konto.' },
        { icon: '✨', title: 'KI-Zusammenfassung in der kostenlosen Stufe', desc: 'Mictoo erzeugt nach jeder Transkription automatisch eine 2-3-Satz-Zusammenfassung, Kernpunkte und Action Items. TurboScribe versteckt die KI-Zusammenfassung hinter der 20 $/Monat-Paywall.' },
        { icon: '🔒', title: 'Nichts wird gespeichert', desc: 'Keine Transkriptions-Historie, kein Cloud-Workspace, keine Projekte. Audio wird zu Whisper gestreamt und sofort verworfen. TurboScribe speichert Ihre Transkripte in Ihrem Konto.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Sie wollen null Anmelde-Friction',
          'Sie brauchen KI-Zusammenfassung in der kostenlosen Stufe',
          'Ihre Dateien sind unter 25 MB (oder Sie können komprimieren)',
          'Sie schätzen es, keine gespeicherte Transkriptions-Historie zu haben',
        ],
        them: [
          'Sie brauchen Dateien größer 25 MB in der kostenlosen Stufe',
          'Sie wollen eine Historie aller vergangenen Transkriptionen',
          'Sie müssen viele Dateien gleichzeitig hochladen (Batch)',
          'Sie zahlen gerne 20 $/Monat für unbegrenzte große Dateien',
        ],
      }}
      faq={[
        { q: 'Ist die Transkriptionsqualität gleich?', a: 'Ja, im Wesentlichen. Beide Tools nutzen OpenAIs Whisper-Modell. Unterschiede entstehen durch Audio-Segmentierung und Edge-Case-Handling, aber die Kerngenauigkeit ist vergleichbar.' },
        { q: 'Warum hat Mictoo ein kleineres Datei-Limit?', a: 'Das 25-MB-Limit kommt von OpenAIs Whisper-API. TurboScribe handhabt größere Dateien, indem sie sie serverseitig splittet und die Ergebnisse zusammensetzt. Wir arbeiten am gleichen Ansatz.' },
        { q: 'Kann ich lange Dateien mit Mictoo transkribieren?', a: 'Aktuell müssen Dateien unter 25 MB liegen. Der how-to-compress-audio-Guide auf unserer Seite zeigt drei schnelle Wege, eine lange Aufnahme einzupassen: Audio-Spur extrahieren, Bitrate senken oder in Segmente teilen.' },
        { q: 'Plant Mictoo Konto/Historie hinzuzufügen?', a: 'Eine lokale Historie (in Ihrem Browser, kein Server-Konto) ist auf der Roadmap. Cloud-basierte Historie mit Anmeldung ist bewusst nicht im Produkt — sie steht im Konflikt mit dem Ohne-Anmeldung-Positioning.' },
        { q: 'Welches ist schneller?', a: 'TurboScribe wirbt mit ~30 Minuten verarbeitet in unter einer Minute. Mictoo ist ähnlich — die meisten Dateien werden in 15-30 Sekunden transkribiert. Beide fühlen sich bei Dateien unter 25 Minuten nahezu sofort an.' },
      ]}
      relatedLinks={[
        { href: '/de/descript-alternative', label: 'Descript-Alternative' },
        { href: '/de/notta-alternative', label: 'Notta-Alternative' },
        { href: '/de', label: 'Mictoo ausprobieren' },
      ]}
    />
  )
}
