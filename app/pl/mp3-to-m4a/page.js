import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-m4a',
  'fr': 'https://mictoo.com/fr/mp3-to-m4a',
  'de': 'https://mictoo.com/de/mp3-to-m4a',
  'es': 'https://mictoo.com/es/mp3-to-m4a',
  'ru': 'https://mictoo.com/ru/mp3-to-m4a',
  'it': 'https://mictoo.com/it/mp3-to-m4a',
  'pt': 'https://mictoo.com/pt/mp3-to-m4a',
  'pl': 'https://mictoo.com/pl/mp3-to-m4a',
  'ja': 'https://mictoo.com/ja/mp3-to-m4a',
  'ko': 'https://mictoo.com/ko/mp3-to-m4a',
  'x-default': 'https://mictoo.com/mp3-to-m4a',
}

export const metadata = {
  title: 'MP3 na M4A, darmowy konwerter online | Mictoo',
  description:
    'Konwertuj MP3 na M4A za darmo online. Przekoduj MP3 na AAC w kontenerze M4A dla iPhone’a, iTunes i ekosystemu Apple. Bez rejestracji, bez znaku wodnego.',
  alternates: { canonical: 'https://mictoo.com/pl/mp3-to-m4a', languages: LANGS },
  openGraph: {
    title: 'MP3 na M4A, darmowy konwerter online | Mictoo',
    description: 'MP3 na AAC w M4A. Przyjazny dla iPhone’a. Bez rejestracji.',
    url: 'https://mictoo.com/pl/mp3-to-m4a',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 na M4A, darmowy konwerter online',
    description: 'Przyjazny dla iPhone’a AAC w MP4.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlMp3ToM4aPage() {
  return (
    <ConverterPageLayout
      locale="pl"
      mode="converter" from="mp3" to="m4a" currentHref="/pl/mp3-to-m4a"
      badge="MP3 → M4A · Darmowy · Przyjazny dla iPhone’a"
      h1First="MP3 na M4A"
      h1Second="Darmowy konwerter online"
      subtitle="Wrzuć plik MP3 i otrzymaj M4A (AAC w kontenerze MP4) do notatek głosowych iPhone’a, iTunes, GarageBand oraz ekosystemu Apple. Bez znaku wodnego, bez e-maila."
      outputFormat="M4A" outputQuality="128 kbps AAC" outputAudio="Stereo"
      stepsTitle="Jak działa konwersja MP3 na M4A"
      steps={[
        { icon: 'upload',   title: 'Wrzuć MP3',        desc: 'Każde MP3 o bitrate do 25 MB anonimowo.' },
        { icon: 'waveform', title: 'Przekodowujemy do AAC', desc: 'ffmpeg dekoduje MP3 i przekodowuje na 128 kbps AAC w kontenerze .m4a.' },
        { icon: 'download', title: 'Pobierz M4A',   desc: 'Plik przyjazny dla iPhone’a z oryginalną nazwą oraz rozszerzeniem .m4a.' },
      ]}
      previewInputName="odcinek.mp3"
      previewInputSize="8.4 MB · 00:09:22"
      previewOutputName="odcinek.m4a"
      previewOutputSize="00:09:22 · 128 kbps AAC · 7.6 MB"
      whyTitle="Dlaczego warto używać Mictoo do konwersji MP3 na M4A?"
      whyCards={[
        { icon: 'target',    title: 'Przyjazny dla Apple’a',    desc: 'M4A działa natywnie z popularnymi iPhone’ami, iTunes, GarageBand oraz mediami Apple.' },
        { icon: 'fileAudio', title: 'Przewidywalny wynik',       desc: 'Plik jest przekodowany na 128 kbps AAC. Jego ostateczny rozmiar zależy głównie od długości nagrania.' },
        { icon: 'lock',      title: 'Pliki usuwane po',      desc: 'Przesłane MP3 jest usuwane po konwersji; M4A jest usuwane w ciągu godziny.' },
        { icon: 'shield',    title: 'Bez znaku wodnego lub tagu',      desc: 'Tylko audio, przekodowane. Bez wprowadzenia marki, bez wstrzykiwania metadanych.' },
      ]}
      scenariosTitle="Kiedy konwersja MP3 na M4A jest przydatna"
      scenarios={[
        { icon: 'headphones', title: 'Import do biblioteki iTunes' },
        { icon: 'waveform',   title: 'Projekt GarageBand' },
        { icon: 'video',      title: 'Ścieżka dźwiękowa iMovie' },
        { icon: 'mail',       title: 'Kompatybilność AirDrop' },
        { icon: 'archive',    title: 'Archiwum ekosystemu Apple' },
        { icon: 'editPen',    title: 'Import do Logic Pro' },
      ]}
      tipsTitle="Wskazówki dotyczące czystej konwersji MP3 na M4A"
      tips={[
        'MP3 i AAC są stratne; przekodowanie wprowadza niewielką utratę jakości.',
        'Dla bezstratnej jakości, przekonwertuj na WAV.',
        'Tagi ID3 nie są przenoszone do M4A.',
        'Utrzymuj plik źródłowy poniżej aktualnego limitu 25 MB.',
      ]}
      processTitle="Co się dzieje podczas konwersji"
      processSteps={['Strumień MP3', 'Dekodowanie', 'Kodowanie AAC / M4A']}
      compareTitle="MP3 vs M4A"
      compareRows={[
        { fmt: 'MP3', contains: 'Nie', size: 'Mały', best: 'Uniwersalny, starsze odtwarzacze' },
        { fmt: 'M4A', contains: 'Nie', size: 'Nieco mniejszy', best: 'iPhone, iTunes, GarageBand, aplikacje Apple' },
      ]}
      faq={[
        { q: 'Czy konwerter MP3 na M4A jest darmowy?', a: 'Tak. Pliki do 25 MB można konwertować bez konta, a wynik nie ma znaku wodnego.' },
        { q: 'Czy konwersja MP3 na M4A poprawia jakość?', a: 'Nie. Przekodowanie z jednego stratnego formatu na inny może jedynie nieznacznie pogorszyć jakość. Rób to tylko dla kompatybilności z ekosystemem Apple.' },
        { q: 'Czy M4A będzie działać w iTunes i Apple Music?', a: 'Tak. Standardowe AAC w kontenerze MP4 to dokładnie ten format, którego używa iTunes.' },
        { q: 'Czy pliki są przechowywane?', a: 'Nie. Przesłane MP3 jest usuwane po konwersji; M4A jest usuwane w ciągu godziny.' },
        { q: 'Czy mogę przekonwertować na bezstratne M4A (ALAC)?', a: 'Nie z tej strony. Wynik to stratne AAC. Dla bezstratnej jakości, najpierw przekonwertuj MP3 na WAV, a potem na ALAC w swoim DAW.' },
      ]}
      ctaHeadline="Przekonwertuj swoje MP3 na M4A teraz"
      ctaSubtitle="Wrzuć swoje MP3 i otrzymaj przyjazne dla iPhone’a M4A w kilka sekund."
      ctaButton="Wybierz plik MP3"
      moreTools={[
        { href: '/pl/m4a-to-mp3',  label: 'M4A na MP3' },
        { href: '/pl/mp3-to-wav',  label: 'MP3 na WAV' },
        { href: '/pl/mp4-to-mp3',  label: 'MP4 na MP3' },
        { href: '/pl/m4a-to-text', label: 'M4A na tekst' },
      ]}
    />
  )
}