import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'pl': 'https://mictoo.com/pl/free-srt-generator',
  'ja': 'https://mictoo.com/ja/free-srt-generator',
  'ko': 'https://mictoo.com/ko/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'Darmowy generator SRT: Twórz pliki napisów SRT online z audio lub wideo | Mictoo',
  description:
    'Generuj czyste pliki napisów SRT z dowolnego audio lub wideo. Czasówki w jakości Whisper, gotowe do YouTube, Premiere, Final Cut, DaVinci Resolve, CapCut. Darmowe, bez rejestracji.',
  alternates: {
    canonical: 'https://mictoo.com/pl/free-srt-generator',
    languages: LANGS,
  },
  openGraph: {
    title: 'Darmowy generator SRT | Mictoo',
    description: 'Generuj pliki napisów SRT z audio lub wideo. Gotowe do YouTube, Premiere, Final Cut.',
    url: 'https://mictoo.com/pl/free-srt-generator',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darmowy generator SRT',
    description: 'Napisy SRT w jakości Whisper z audio lub wideo.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlFreeSrtGeneratorPage() {
  return (
    <ConverterPageLayout
      locale="pl"
      mode="upload" currentHref="/pl/free-srt-generator"
      badge="SRT · Audio lub wideo · Darmowe"
      h1First="Darmowy generator SRT"
      h1Second="Napisy w jakości Whisper z dowolnego audio lub wideo"
      subtitle="Prześlij audio lub wideo, uzyskaj plik napisów SRT gotowy do YouTube, Premiere, Final Cut, DaVinci Resolve lub CapCut. Bez rejestracji, bez opłat za minutę."
      stepsTitle="Jak działa generowanie SRT"
      steps={[
        { icon: 'upload',   title: 'Przeciągnij audio lub wideo', desc: 'MP3, MP4, WAV, M4A, WEBM, FLAC i inne. Do 25 MB anonimowo, 180 MB po zalogowaniu.' },
        { icon: 'waveform', title: 'Whisper transkrybuje', desc: 'Whisper large-v3 produkuje czasówki segmentów zgodne z oryginalnym audio.' },
        { icon: 'download', title: 'Pobierz SRT',        desc: 'Eksporty SRT i VTT w zestawie. Wstaw do swojego edytora wideo lub przesyłaj na YouTube.' },
      ]}
      whyTitle="Dlaczego warto używać Mictoo do generowania SRT?"
      whyCards={[
        { icon: 'target',   title: 'Dokładne napisy w wielu językach', desc: 'Whisper large-v3 dodaje interpunkcję i obsługuje wiele języków, akcentów i typów nagrań.' },
        { icon: 'captions', title: 'SRT + VTT w zestawie',                desc: 'Oba formaty napisów generowane automatycznie. VTT dla odtwarzaczy internetowych, SRT dla edytorów.' },
        { icon: 'lock',     title: 'Pliki usuwane po',               desc: 'Przesłane audio jest usuwane po transkrypcji; transkrypt utrzymuje się tylko na kontach zalogowanych.' },
        { icon: 'shield',   title: 'Bez znaku wodnego lub tagu',               desc: 'Czyste SRT bez markowego wprowadzenia lub tagu "Stworzone z X".' },
      ]}
      scenariosTitle="Kiedy generowanie SRT jest przydatne"
      scenarios={[
        { icon: 'video',      title: 'Napisy do przesyłania na YouTube' },
        { icon: 'editPen',    title: 'Import do Premiere / DaVinci' },
        { icon: 'headphones', title: 'Wersja wideo podcastu' },
        { icon: 'mail',       title: 'Kopia do przeglądu przez klienta' },
        { icon: 'archive',    title: 'Archiwum dostępności' },
        { icon: 'target',     title: 'Napisy w obcym języku' },
      ]}
      tipsTitle="Wskazówki dotyczące czystszych napisów"
      tips={[
        'Dla plików powyżej 25 MB, zaloguj się, aby automatycznie dzielić przesyłki do 180 MB.',
        'Ustaw język explicite dla treści nieanglojęzycznych lub technicznych.',
        'Przejrzyj nazwy i nietypowe terminy w trybie edytora przed eksportem.',
        'Najpierw przetłumacz transkrypt, a następnie eksportuj SRT dla obcych napisów.',
      ]}
      processTitle="Co się dzieje podczas generowania"
      processSteps={['Audio / wideo', 'Transkrypcja Whisper', 'Eksport SRT + VTT']}
      faq={[
        { q: 'Czy generator SRT jest darmowy?', a: 'Tak. Do 25 MB anonimowo lub 180 MB po zalogowaniu. Brak znaku wodnego na SRT i brak opłat za minutę.' },
        { q: 'Jakie formaty napisów otrzymam?', a: 'SRT i VTT są w zestawie. TXT (czysty tekst) i DOCX są również dostępne. Użytkownicy zalogowani dodatkowo otrzymują PDF i JSON.' },
        { q: 'Jak dokładne są czasówki?', a: 'Whisper large-v3 dostarcza czasówki segmentów zgodne z oryginalnym audio. Wystarczająco dokładne dla napisów YouTube i większości przypadków edycji wideo.' },
        { q: 'Czy identyfikujecie mówców (diaryzacja)?', a: 'Jeszcze nie. Ciągłe napisy z czasówkami, ale bez etykiet mówców. Diaryzacja jest na liście planów Pro.' },
        { q: 'Czy Mictoo transkrybuje audio w obcych językach?', a: 'Tak. Whisper large-v3 obsługuje ponad 50 języków z automatycznym wykrywaniem. Ustaw język explicite dla lepszych wyników.' },
        { q: 'Czy nagrania są przechowywane na waszych serwerach?', a: 'Nie. Audio przesyłane jest do dostawcy transkrypcji, przetwarzane raz i usuwane. Transkrypty utrzymują się tylko na kontach zalogowanych.' },
      ]}
      ctaHeadline="Generuj napisy SRT z dowolnego nagrania"
      ctaSubtitle="YouTube, Premiere, Final Cut, DaVinci, CapCut. Czasówki w jakości Whisper."
      ctaButton="Prześlij audio lub wideo"
      moreTools={[
        { href: '/pl/timestamped-transcription', label: 'Transkrypcja z czasówkami' },
        { href: '/pl/youtube-to-text',           label: 'YouTube na tekst' },
        { href: '/pl/transcribe-video-to-text',  label: 'Wideo na tekst' },
        { href: '/pl/transcribe-audio-to-text',  label: 'Audio na tekst' },
      ]}
    />
  )
}