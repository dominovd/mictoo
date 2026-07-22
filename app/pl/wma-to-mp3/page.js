import ConverterPageLayout from '@/components/ConverterPageLayout'

export const metadata = {
  title: 'WMA na MP3: Darmowy konwerter dla starszego Windows Media Audio | Mictoo',
  description:
    'Konwertuj stare pliki WMA na uniwersalne MP3. Stworzony, aby uratować archiwa starszego Windows Media, eksporty wiadomości głosowych i zgrane płyty CD, które nowoczesne urządzenia nie chcą otworzyć.',
  alternates: {
    canonical: 'https://mictoo.com/pl/wma-to-mp3',
    languages: {
      'en': 'https://mictoo.com/wma-to-mp3',
      'fr': 'https://mictoo.com/fr/wma-to-mp3',
      'de': 'https://mictoo.com/de/wma-to-mp3',
      'es': 'https://mictoo.com/es/wma-to-mp3',
      'ru': 'https://mictoo.com/ru/wma-to-mp3',
      'it': 'https://mictoo.com/it/wma-to-mp3',
      'pt': 'https://mictoo.com/pt/wma-to-mp3',
      'pl': 'https://mictoo.com/pl/wma-to-mp3',
      'ja': 'https://mictoo.com/ja/wma-to-mp3',
      'ko': 'https://mictoo.com/ko/wma-to-mp3',
      'x-default': 'https://mictoo.com/wma-to-mp3',
    },
  },
  openGraph: {
    title: 'WMA na MP3: Konwerter dla starszego Windows Media | Mictoo',
    description: 'Uratować archiwa WMA, eksporty wiadomości głosowych, zgrane płyty CD.',
    url: 'https://mictoo.com/pl/wma-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WMA na MP3: Darmowy konwerter',
    description: 'Uratować stare pliki WMA. Darmowe.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlWmaToMp3Page() {
  return (
    <ConverterPageLayout
      locale="pl"
      mode="converter" from="wma" to="mp3" currentHref="/pl/wma-to-mp3"
      badge="WMA → MP3 · Darmowy · Ratowanie archiwów"
      h1First="WMA na MP3"
      h1Second="Darmowy konwerter dla starszego Windows Media"
      subtitle="Przeciągnij stary plik WMA (eksport wiadomości głosowej, zgrana płyta CD, archiwum Windows Media) i uzyskaj uniwersalne MP3, które otworzy każde nowoczesne urządzenie lub odtwarzacz."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="Jak działa konwersja WMA na MP3"
      steps={[
        { icon: 'upload',   title: 'Przeciągnij WMA',        desc: 'Każda wersja Windows Media Audio, do 25 MB anonimowo.' },
        { icon: 'waveform', title: 'Dekodujemy i kodujemy', desc: 'ffmpeg odczytuje WMA i ponownie koduje na 128 kbps stereo MP3 przy 44.1 kHz.' },
        { icon: 'download', title: 'Pobierz MP3',    desc: 'Uzyskaj MP3 kompatybilne z większością aktualnych odtwarzaczy, telefonów i edytorów audio.' },
      ]}
      previewInputName="wiadomość-głosowa-2011.wma"
      previewInputSize="1.2 MB · 00:02:34"
      previewOutputName="wiadomość-głosowa-2011.mp3"
      previewOutputSize="00:02:34 · 128 kbps · 2.4 MB"
      whyTitle="Dlaczego warto używać Mictoo do WMA na MP3?"
      whyCards={[
        { icon: 'target',   title: 'Obsługa plików starszych',    desc: 'Stare pliki Windows Media Audio, które iTunes, Apple Music i nowoczesne odtwarzacze odmawiają otwarcia.' },
        { icon: 'fileAudio',title: 'Szeroka kompatybilność MP3', desc: 'MP3 jest szeroko wspierane w macOS, Linux, iPhone, Android i popularnych odtwarzaczach muzycznych.' },
        { icon: 'lock',     title: 'Pliki usuwane po',     desc: 'Przesłane WMA jest usuwane po konwersji; MP3 jest usuwane w ciągu godziny.' },
        { icon: 'shield',   title: 'Bez znaku wodnego lub tagu',     desc: 'Tylko audio, ponownie zakodowane. Bez wprowadzenia marki, bez wstrzykiwania metadanych.' },
      ]}
      scenariosTitle="Kiedy WMA na MP3 jest przydatne"
      scenarios={[
        { icon: 'archive',    title: 'Zgranie starej płyty CD' },
        { icon: 'headphones', title: 'Stary eksport wiadomości głosowej' },
        { icon: 'editPen',    title: 'Wynik Windows Movie Maker' },
        { icon: 'mail',       title: 'Udostępnij na urządzeniu nie-Windows' },
        { icon: 'video',      title: 'Import do nowoczesnego edytora' },
        { icon: 'waveform',   title: 'Uratować archiwum taśmy' },
      ]}
      tipsTitle="Wskazówki dotyczące czystego WMA na MP3"
      tips={[
        'WMA chronione DRM (stare wypożyczenia Windows Media Player) nie mogą być dekodowane.',
        'Bardzo niskobitowe WMA (wiadomość głosowa) będzie brzmieć tak samo jak źródło.',
        'Stare wideo WMV nie jest tutaj obsługiwane; użyj MP4 do MP3 zamiast tego.',
        'Dla nagrań powyżej 25 MB, przytnij lub podziel źródło przed przesłaniem.',
      ]}
      processTitle="Co się dzieje podczas konwersji"
      processSteps={['WMA (ASF)', 'Dekodowanie Windows Media', 'Kodowanie MP3']}
      compareTitle="WMA vs MP3"
      compareRows={[
        { fmt: 'WMA', contains: 'Nie', size: 'Mały', best: 'Stare procesy Windows (wycofane)' },
        { fmt: 'MP3', contains: 'Nie', size: 'Mały', best: 'Uniwersalna kompatybilność, nowoczesne urządzenia' },
      ]}
      faq={[
        { q: 'Czy konwerter WMA na MP3 jest darmowy?', a: 'Tak. Pliki do 25 MB można konwertować bez konta, a wynik nie ma znaku wodnego.' },
        { q: 'Dlaczego nowoczesne odtwarzacze odmawiają otwarcia WMA?', a: 'Apple nigdy nie wspierało WMA. Niektóre odtwarzacze Androida zrezygnowały z tego. WMA to starszy format Microsoftu, od którego Windows sam się odsuwa.' },
        { q: 'Czy możesz konwertować WMA chronione DRM?', a: 'Nie. Stare wypożyczenia Windows Media Player używały DRM, którego ffmpeg nie może dekodować. Nigdy nie omijamy ochrony praw autorskich.' },
        { q: 'Czy pliki są przechowywane?', a: 'Nie. Przesłane WMA jest usuwane po konwersji; MP3 jest usuwane w ciągu godziny.' },
        { q: 'Co z WMA bezstratnym?', a: 'Konwerter odczytuje również WMA bezstratne, ale wynik to nadal 128 kbps MP3 (stratny). Dla wyjścia bezstratnego, konwertuj na WAV zamiast tego.' },
      ]}
      ctaHeadline="Konwertuj swoje WMA na MP3 teraz"
      ctaSubtitle="Uratować starsze Windows Media Audio. Uzyskaj przenośne MP3 w kilka sekund."
      ctaButton="Wybierz plik WMA"
      moreTools={[
        { href: '/pl/mp4-to-mp3',  label: 'MP4 na MP3' },
        { href: '/pl/wav-to-mp3',  label: 'WAV na MP3' },
        { href: '/pl/flac-to-mp3', label: 'FLAC na MP3' },
        { href: '/pl/aac-to-mp3',  label: 'AAC na MP3' },
      ]}
    />
  )
}