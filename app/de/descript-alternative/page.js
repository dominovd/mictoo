import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/descript-alternative',
  'fr': 'https://mictoo.com/fr/descript-alternative',
  'de': 'https://mictoo.com/de/descript-alternative',
  'es': 'https://mictoo.com/es/descript-alternative',
  'ru': 'https://mictoo.com/ru/descript-alternative',
  'x-default': 'https://mictoo.com/descript-alternative',
}

export const metadata = {
  title: 'Descript-Alternative — Kostenlose Transkription ohne Anmeldung | Mictoo',
  description: 'Suchen Sie eine Descript-Alternative nur für die Transkription? Mictoo bietet kostenlose KI-Transkription ohne Anmeldung, basierend auf OpenAI Whisper. Kein Editor, kein Abo.',
  alternates: { canonical: 'https://mictoo.com/de/descript-alternative', languages: LANGS },
}

export default function DeDescriptAlternativePage() {
  return (
    <ComparisonLayout
      badge="Vergleich · Descript · Kostenlos"
      h1={<>Descript-Alternative<br /><span className="text-brand-600">Kostenlose Transkription ohne Editor</span></>}
      subtitle="Descript ist ein vollwertiger Audio- und Video-Editor mit integrierter Transkription. Wenn Sie nur die Transkription brauchen, ist Mictoo die kostenlose Option ohne Anmeldung — angetrieben von OpenAI Whisper."
      competitorName="Descript"
      rows={[
        { label: 'Kostenlose Stufe',       mictoo: 'Keine Monatsgrenze, 25 MB pro Datei', them: '1 Stunde Transkription / Monat' },
        { label: 'Konto erforderlich',     mictoo: 'Nein', them: 'Ja (E-Mail-Anmeldung)' },
        { label: 'Bezahlpläne',            mictoo: 'Kostenlos',  them: '12-24 $ / Monat' },
        { label: 'Audio/Video-Editor',     mictoo: 'Nein',  them: 'Ja (vollwertig)' },
        { label: 'Transkriptionsmodell',   mictoo: 'OpenAI Whisper', them: 'Proprietär + Whisper-Option' },
        { label: 'KI-Zusammenfassung',     mictoo: 'Ja, kostenlos', them: 'Ja (kostenpflichtig)' },
        { label: 'SRT-Export',             mictoo: 'Ja, kostenlos', them: 'Ja (kostenpflichtig)' },
        { label: 'Sprecher-Labels',        mictoo: 'Manuell',   them: 'Automatisch' },
        { label: 'Sprachen',               mictoo: '50+',           them: '20+' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: 'Kostenlos, ohne Anmeldung', desc: 'Datei ablegen, Transkription erhalten — ohne Konto, Karte oder E-Mail. Descript verlangt eine Anmeldung selbst im kostenlosen Plan.' },
        { icon: '⚡', title: 'Schneller für Einzelaufgaben', desc: 'Keine App zu installieren, kein Editor zu lernen. Eine Seite, ein Drop, Ergebnisse in Sekunden. Gebaut für schnelle Transkription, nicht für volle Produktion.' },
        { icon: '🔒', title: 'Privatsphäre zuerst', desc: 'Audio wird direkt an die Whisper-API von OpenAI gestreamt und nicht auf Mictoos Servern gespeichert. Keine Projekte, keine Cloud-Bibliothek, kein Team-Workspace per Design.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Sie brauchen nur Transkription, kein Editing',
          'Sie wollen es kostenlos ohne Anmeldung',
          'Sie transkribieren ein einmaliges Interview, Podcast oder Meeting',
          'Sie wollen keine Desktop-App oder Team-Workspace',
        ],
        them: [
          'Sie produzieren Podcasts oder Videos und brauchen einen echten Editor',
          'Sie wollen den "Audio bearbeiten durch Text bearbeiten"-Workflow',
          'Sie brauchen jedes Mal automatische Sprecher-Labels',
          'Sie arbeiten in einem Team mit gemeinsamer Projektbibliothek',
        ],
      }}
      faq={[
        { q: 'Ist Mictoo ein vollständiger Ersatz für Descript?', a: 'Nicht beim Editing. Descript ist ein Audio- und Video-Editor mit integrierter Transkription — Mictoo ist nur die Transkription. Wenn Sie nur Text oder Untertitel aus einer Aufnahme brauchen, ersetzt Mictoo diesen Workflow kostenlos.' },
        { q: 'Ist die Transkriptionsqualität gleich?', a: 'Beide Tools können OpenAI Whisper nutzen. Mictoo nutzt ausschließlich Whisper, die Genauigkeit ist also vergleichbar. Descript bietet in einigen Plänen ein zusätzliches proprietäres Modell.' },
        { q: 'Hat Mictoo Sprecher-Labels?', a: 'Mictoo liefert in der kostenlosen Stufe eine einzelne Transkription ohne automatische Sprecher-Labels. Sie können Sprecher 1 / Sprecher 2 manuell im Browser-Editor vor dem Download hinzufügen. Descript labelt automatisch.' },
        { q: 'Kann ich die Transkription in Mictoo bearbeiten?', a: 'Ja — die Transkription erscheint in einem editierbaren Textfeld. Sie können Namen, Satzzeichen oder Absatzumbrüche korrigieren, bevor Sie als .txt oder .srt kopieren oder herunterladen.' },
        { q: 'Was ist mit Export nach Word oder DOCX?', a: 'Mictoo exportiert derzeit .txt und .srt. Transkription kopieren und in Word einfügen für ein schnelles DOCX. Nativer DOCX-Export ist auf der Roadmap.' },
      ]}
      relatedLinks={[
        { href: '/de/turboscribe-alternative', label: 'TurboScribe-Alternative' },
        { href: '/de/otter-alternative', label: 'Otter-Alternative' },
        { href: '/de/notta-alternative', label: 'Notta-Alternative' },
        { href: '/de', label: 'Mictoo ausprobieren' },
      ]}
    />
  )
}
