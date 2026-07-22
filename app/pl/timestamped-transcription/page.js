import ConverterPageLayout from '@/components/ConverterPageLayout'

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
  title: 'Transkrypcja z znacznikami czasowymi: Darmowy generator transkryptów z kodami czasowymi | Mictoo',
  description:
    'Darmowa transkrypcja z znacznikami czasowymi z kodami czasowymi na poziomie segmentów dla audio lub wideo. Przydatne w dziennikarstwie, badaniach, podcastach i edycji wideo.',
  alternates: {
    canonical: 'https://mictoo.com/pl/timestamped-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transkrypcja z znacznikami czasowymi: Darmowy generator transkryptów z kodami czasowymi | Mictoo',
    description: 'Znaczniki czasowe na poziomie zdań dla każdego audio lub wideo.',
    url: 'https://mictoo.com/pl/timestamped-transcription',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transkrypcja z znacznikami czasowymi: Darmowa',
    description: 'Transkrypcje z kodami czasowymi dla dziennikarstwa, badań, edycji.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlTimestampedTranscriptionPage() {
  return (
    <ConverterPageLayout
      locale="pl"
      mode="upload" currentHref="/pl/timestamped-transcription"
      badge="Transkrypcja z znacznikami czasowymi · Audio lub wideo · Darmowe"
      h1First="Transkrypcja z znacznikami czasowymi"
      h1Second="Transkrypcje z kodami czasowymi dla dziennikarstwa, badań, edycji"
      subtitle="Prześlij audio lub wideo i uzyskaj transkrypt z znacznikami czasowymi dla każdego segmentu. Kliknij dowolny znacznik czasowy, aby przejść do tego momentu w odtwarzaczu audio. Darmowe, bez rejestracji."
      stepsTitle="Jak działa transkrypcja z znacznikami czasowymi"
      steps={[
        { icon: 'upload',   title: 'Przeciągnij audio lub wideo',       desc: 'MP3, MP4, WAV, M4A, WEBM, FLAC i inne. Do 25 MB anonimowo lub 180 MB po zalogowaniu.' },
        { icon: 'waveform', title: 'Whisper znaczników czasowych segmentów', desc: 'Whisper large-v3 zapewnia znaczniki czasowe na poziomie segmentów dostosowane do oryginalnego audio.' },
        { icon: 'download', title: 'Eksportuj ze znacznikami czasowymi',      desc: 'TXT z wbudowanymi znacznikami czasowymi, SRT / VTT dla napisów, DOCX do przeglądu.' },
      ]}
      whyTitle="Dlaczego warto używać Mictoo do transkrypcji z znacznikami czasowymi?"
      whyCards={[
        { icon: 'clock',    title: 'Znaczniki czasowe do kliknięcia',   desc: 'Każdy znacznik czasowy jest klikalny w widoku Czytelnika. Przejdź do dowolnego momentu w odtwarzaczu audio.' },
        { icon: 'target',   title: 'Transkrypcja wysokiej jakości Whisper', desc: 'Whisper large-v3 dodaje interpunkcję i obsługuje wiele języków, akcentów i typów nagrań.' },
        { icon: 'captions', title: 'SRT + VTT w zestawie',         desc: 'Znaczniki czasowe są przenoszone do eksportów SRT i VTT dla napisów wideo.' },
        { icon: 'lock',     title: 'Pliki usuwane po',        desc: 'Przesłane audio jest usuwane po transkrypcji; transkrypt utrzymuje się tylko na kontach zalogowanych.' },
      ]}
      scenariosTitle="Kiedy transkrypcje z znacznikami czasowymi są przydatne"
      scenarios={[
        { icon: 'editPen',    title: 'Poszukiwanie cytatów w dziennikarstwie' },
        { icon: 'target',     title: 'Cytowanie w badaniach UX' },
        { icon: 'video',      title: 'Lista wskazówek do edycji wideo' },
        { icon: 'headphones', title: 'Notatki do podcastów' },
        { icon: 'archive',    title: 'Prawne / odkrywanie' },
        { icon: 'waveform',   title: 'Zakładki audio' },
      ]}
      tipsTitle="Wskazówki dla czystszych wyników z znacznikami czasowymi"
      tips={[
        'Widok Czytelnika jest najlepszy do nawigacji kliknięciem.',
        'Dla eksportu SRT / VTT, znaczniki czasowe są dostosowane do osi czasu oryginalnego pliku.',
        'Dla długich nagrań, zaloguj się, aby automatycznie podzielić do około 3 godzin.',
        'Pasek wyszukiwania podświetla dopasowania i natychmiast pokazuje ich znacznik czasowy.',
      ]}
      processTitle="Co się dzieje podczas transkrypcji"
      processSteps={['Audio / wideo', 'Whisper large-v3', 'Transkrypcja z znacznikami czasowymi']}
      faq={[
        { q: 'Jak szczegółowe są znaczniki czasowe?', a: 'Na poziomie segmentów (mniej więcej na poziomie zdań). Whisper natywnie produkuje znaczniki czasowe na poziomie segmentów dostosowane do audio.' },
        { q: 'Czy mogę kliknąć znacznik czasowy, aby przejść do audio?', a: 'Tak. W widoku Czytelnika każdy znacznik czasowy jest klikalny i przewija odtwarzacz audio do tego momentu.' },
        { q: 'Czy narzędzie jest darmowe?', a: 'Tak. Do 25 MB anonimowo lub 180 MB po zalogowaniu. Bez znaku wodnego i bez opłaty za minutę.' },
        { q: 'Jakie formaty eksportu są obsługiwane?', a: 'TXT (z wbudowanymi znacznikami czasowymi), SRT, VTT, DOCX. Użytkownicy zalogowani otrzymują również PDF i JSON z danymi znaczników czasowych w strukturze.' },
        { q: 'Czy identyfikujecie mówców?', a: 'Jeszcze nie. Ciągły tekst z znacznikami czasowymi bez etykiet mówców. Diarizacja jest na liście zadań Pro.' },
        { q: 'Czy nagrania są przechowywane na waszych serwerach?', a: 'Nie. Audio jest przesyłane do dostawcy transkrypcji, przetwarzane raz i usuwane. Transkrypty utrzymują się tylko na kontach zalogowanych.' },
      ]}
      ctaHeadline="Uzyskaj transkrypt z znacznikami czasowymi do kliknięcia"
      ctaSubtitle="Dziennikarstwo, badania UX, edycja wideo, notatki do podcastów. Darmowe za plik."
      ctaButton="Prześlij audio lub wideo"
      moreTools={[
        { href: '/pl/free-srt-generator',       label: 'Generator SRT' },
        { href: '/pl/youtube-to-text',          label: 'YouTube na tekst' },
        { href: '/pl/transcribe-audio-to-text', label: 'Audio na tekst' },
        { href: '/pl/transcribe-video-to-text', label: 'Wideo na tekst' },
      ]}
    />
  )
}