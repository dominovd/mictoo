import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLAC na MP3, darmowy konwerter online | Mictoo',
  description:
    'Konwertuj FLAC na MP3 za darmo online. Zmniejsz bezstratny FLAC do 128 kbps MP3 w kilka sekund. Brak rejestracji, brak znaku wodnego. Do 25 MB.',
  alternates: { canonical: 'https://mictoo.com/pl/flac-to-mp3', languages: LANGS },
  openGraph: {
    title: 'FLAC na MP3, darmowy konwerter online | Mictoo',
    description: 'Zmniejsz bezstratny FLAC do 128 kbps MP3. Brak rejestracji.',
    url: 'https://mictoo.com/pl/flac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLAC na MP3, darmowy konwerter online',
    description: 'Zmniejsz bezstratny FLAC do przenośnego MP3.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlFlacToMp3Page() {
  return (
    <ConverterPageLayout
      locale="pl"
      mode="converter" from="flac" to="mp3" currentHref="/pl/flac-to-mp3"
      badge="FLAC → MP3 · Darmowy · Brak rejestracji"
      h1First="FLAC na MP3"
      h1Second="Darmowy konwerter online"
      subtitle="Przeciągnij bezstratny plik FLAC (z ripu CD, pobrania Tidal lub źródła hi-res) i uzyskaj przenośne 128 kbps MP3 w kilka sekund."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="Jak działa konwersja FLAC na MP3"
      steps={[
        { icon: 'upload',   title: 'Przeciągnij FLAC',       desc: 'Dowolny FLAC (natywny lub FLAC w OGG). Do 25 MB anonimowo.' },
        { icon: 'waveform', title: 'Dekodujemy i kodujemy', desc: 'ffmpeg dekoduje bezstratny FLAC i ponownie koduje do 128 kbps stereo MP3.' },
        { icon: 'download', title: 'Pobierz MP3',    desc: 'Uzyskaj swoje 5-8x mniejsze MP3, gotowe do odtwarzania na każdym urządzeniu.' },
      ]}
      previewInputName="album-track.flac"
      previewInputSize="42 MB · 00:05:12 · 16-bit / 44.1 kHz"
      previewOutputName="album-track.mp3"
      previewOutputSize="00:05:12 · 128 kbps · 4.8 MB"
      whyTitle="Dlaczego warto używać Mictoo do konwersji FLAC na MP3?"
      whyCards={[
        { icon: 'target',    title: 'Zachowuje bezstratny master', desc: 'Twój plik FLAC nigdy nie jest modyfikowany. Tworzymy tylko kopię.' },
        { icon: 'fileAudio', title: 'Mniejsza wersja do odsłuchu',    desc: '128 kbps MP3 jest często kilka razy mniejsze niż FLAC. Konwersja jest stratna, więc zachowaj FLAC jako swój master.' },
        { icon: 'lock',      title: 'Pliki usuwane po',       desc: 'Przesłany FLAC jest usuwany po konwersji; MP3 jest usuwane w ciągu godziny.' },
        { icon: 'shield',    title: 'Brak znaku wodnego lub tagu',       desc: 'Tylko audio, ponownie zakodowane. Brak wprowadzenia, brak markowych metadanych.' },
      ]}
      scenariosTitle="Kiedy konwersja FLAC na MP3 jest przydatna"
      scenarios={[
        { icon: 'headphones', title: 'Rip CD na telefon' },
        { icon: 'mail',       title: 'Wyślij mniejszy plik' },
        { icon: 'archive',    title: 'Przenośna biblioteka muzyczna' },
        { icon: 'editPen',    title: 'Import do DAW' },
        { icon: 'waveform',   title: 'Kopia do słuchania podcastu' },
        { icon: 'video',      title: 'Ścieżka dźwiękowa do wideo' },
      ]}
      tipsTitle="Wskazówki dotyczące czystej konwersji FLAC na MP3"
      tips={[
        'Zachowaj FLAC jako bezstratną kopię archiwalną.',
        '128 kbps jest przezroczyste dla większości odsłuchów.',
        'Dla utworów powyżej 25 MB, przytnij lub podziel źródło przed przesłaniem.',
        'Tagi metadanych Vorbis (tytuł/artysta) nie są przenoszone do MP3.',
      ]}
      processTitle="Co się dzieje podczas konwersji"
      processSteps={['Kontener FLAC', 'Bezstratne dekodowanie', 'Kodowanie MP3']}
      compareTitle="FLAC vs MP3"
      compareRows={[
        { fmt: 'FLAC', contains: 'Nie', size: 'Duży (~5-8 MB/min)', best: 'Archiwalny, odtwarzanie hi-fi' },
        { fmt: 'MP3',  contains: 'Nie', size: 'Mały (~1 MB/min)',   best: 'Udostępnianie, telefony, wszędzie' },
      ]}
      faq={[
        { q: 'Czy konwerter FLAC na MP3 jest darmowy?', a: 'Tak. Pliki do 25 MB można konwertować bez konta, a wyjście nie ma znaku wodnego.' },
        { q: 'Czy tracę jakość konwertując FLAC na MP3?', a: 'Technicznie tak (MP3 jest stratny), ale przy 128 kbps utrata jest niesłyszalna dla typowego odsłuchu. Zachowaj FLAC jako kopię archiwalną.' },
        { q: 'Czy pliki FLAC w OGG są obsługiwane?', a: 'Tak. Działa zarówno natywny FLAC (magiczne bajty fLaC), jak i FLAC w kontenerach OGG.' },
        { q: 'Czy pliki są przechowywane?', a: 'Nie. Przesłany FLAC jest usuwany po konwersji; MP3 jest usuwane w ciągu godziny.' },
        { q: 'Mój FLAC ma ponad 25 MB. Co teraz?', a: 'Przytnij lub podziel źródło, lub wyeksportuj niższej rozdzielczości kopię do odsłuchu przed przesłaniem.' },
      ]}
      ctaHeadline="Konwertuj swój FLAC na MP3 teraz"
      ctaSubtitle="Przeciągnij swój FLAC i uzyskaj przenośne MP3 w kilka sekund. Brak rejestracji. Brak znaku wodnego."
      ctaButton="Wybierz plik FLAC"
      moreTools={[
        { href: '/pl/wav-to-mp3',  label: 'WAV na MP3' },
        { href: '/pl/mp4-to-mp3',  label: 'MP4 na MP3' },
        { href: '/pl/webm-to-mp3', label: 'WEBM na MP3' },
        { href: '/pl/flac-to-text', label: 'FLAC na tekst' },
      ]}
    />
  )
}