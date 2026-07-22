import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-mp3',
  'fr': 'https://mictoo.com/fr/aac-to-mp3',
  'de': 'https://mictoo.com/de/aac-to-mp3',
  'es': 'https://mictoo.com/es/aac-to-mp3',
  'ru': 'https://mictoo.com/ru/aac-to-mp3',
  'it': 'https://mictoo.com/it/aac-to-mp3',
  'pt': 'https://mictoo.com/pt/aac-to-mp3',
  'pl': 'https://mictoo.com/pl/aac-to-mp3',
  'ja': 'https://mictoo.com/ja/aac-to-mp3',
  'ko': 'https://mictoo.com/ko/aac-to-mp3',
  'x-default': 'https://mictoo.com/aac-to-mp3',
}

export const metadata = {
  title: 'AAC do MP3: Darmowy Konwerter Online | Mictoo',
  description:
    'Konwertuj AAC na MP3 za darmo, w kilka sekund, z wyjaśnieniem, kiedy konwersja naprawdę pomaga, a kiedy tylko pogarsza jakość.',
  alternates: {
    canonical: 'https://mictoo.com/pl/aac-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'AAC do MP3: Darmowy Konwerter Online | Mictoo',
    description: 'Konwertuj AAC na MP3 za darmo, w kilka sekund.',
    url: 'https://mictoo.com/pl/aac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC do MP3: Darmowy Konwerter Online',
    description: 'Konwertuj AAC na MP3 w kilka sekund. Darmowe, bez rejestracji.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlAacToMp3Page() {
  return (
    <ConverterPageLayout
      locale="pl"
      mode="converter" from="aac" to="mp3" currentHref="/pl/aac-to-mp3"
      badge="AAC → MP3 · Darmowe · Bez rejestracji"
      h1First="AAC do MP3"
      h1Second="Darmowy konwerter online"
      subtitle="Wrzuć surowy plik .aac (strumień ADTS, zrzut z transmisji lub wyodrębniony dźwięk z iPhone’a) i otrzymaj przenośne MP3 w kilka sekund."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="Jak działa konwersja AAC do MP3"
      steps={[
        { icon: 'upload',   title: 'Wrzuć AAC',        desc: 'Surowe ramki ADTS lub ADIF, do 25 MB anonimowo.' },
        { icon: 'waveform', title: 'Dekodujemy i kodujemy', desc: 'ffmpeg odczytuje strumień bitowy AAC i ponownie koduje do 128 kbps stereo MP3.' },
        { icon: 'download', title: 'Pobierz MP3',    desc: 'Otrzymaj czyste MP3 w kilka sekund, gotowe do każdego odtwarzacza.' },
      ]}
      previewInputName="broadcast-clip.aac"
      previewInputSize="8.4 MB · 00:07:22 · 128 kbps AAC"
      previewOutputName="broadcast-clip.mp3"
      previewOutputSize="00:07:22 · 128 kbps MP3 · 6.8 MB"
      whyTitle="Dlaczego warto używać Mictoo do AAC do MP3?"
      whyCards={[
        { icon: 'target',   title: 'Obsługa surowego AAC',        desc: 'Obie ramki ADTS i ADIF działają bezpośrednio, bez ręcznego pakowania.' },
        { icon: 'fileAudio',title: 'MP3 odtwarzane wszędzie',   desc: 'Starsze urządzenia i tradycyjne hosty podcastów czasami preferują MP3 zamiast AAC.' },
        { icon: 'lock',     title: 'Pliki usuwane po',    desc: 'Przesłane AAC jest usuwane po konwersji; MP3 jest usuwane w ciągu godziny.' },
        { icon: 'shield',   title: 'Brak znaku wodnego lub tagu',    desc: 'Tylko dźwięk, ponownie zakodowany. Brak wprowadzenia z logo ani metadanych.' },
      ]}
      scenariosTitle="Kiedy AAC do MP3 jest przydatne"
      scenarios={[
        { icon: 'video',      title: 'Zrzut z transmisji HLS' },
        { icon: 'headphones', title: 'Host podcastu wymaga MP3' },
        { icon: 'mail',       title: 'Kompatybilność ze starszymi odtwarzaczami' },
        { icon: 'editPen',    title: 'Import do DAW (starsze narzędzia)' },
        { icon: 'archive',    title: 'Spójny format archiwum' },
        { icon: 'waveform',   title: 'Zgrany AAC z iPhone’a' },
      ]}
      tipsTitle="Wskazówki dotyczące czystej konwersji AAC do MP3"
      tips={[
        'Jeśli Twoje urządzenie odtwarza AAC natywnie, możesz nie potrzebować konwersji.',
        'Zarówno AAC, jak i MP3 są stratne; ponowne kodowanie powoduje niewielką utratę jakości.',
        'Zachowaj plik źródłowy poniżej aktualnego limitu przesyłania 25 MB.',
        'Do transkrypcji, przesyłaj AAC bezpośrednio do /pl/aac-to-text zamiast tego.',
      ]}
      processTitle="Co się dzieje podczas konwersji"
      processSteps={['Ramki AAC ADTS', 'Dekodowanie', 'Kodowanie MP3']}
      compareTitle="AAC vs MP3"
      compareRows={[
        { fmt: 'AAC', contains: 'Nie', size: 'Mały (efektywny)', best: 'Nowoczesne urządzenia, streaming, iPhone' },
        { fmt: 'MP3', contains: 'Nie', size: 'Mały',             best: 'Uniwersalna kompatybilność, starsze odtwarzacze' },
      ]}
      faq={[
        { q: 'Czy naprawdę muszę konwertować AAC na MP3?', a: 'Rzadko. Większość nowoczesnych urządzeń odtwarza AAC natywnie. Konwertuj tylko, jeśli konkretne narzędzie lub host wyraźnie wymaga MP3.' },
        { q: 'Czy konwerter jest darmowy?', a: 'Tak. Pliki do 25 MB można konwertować bez konta, a wynik nie ma znaku wodnego.' },
        { q: 'Jaka jest utrata jakości?', a: 'AAC i MP3 są obie stratne. Ponowne kodowanie powoduje niewielką dodatkową utratę, ale jest niesłyszalna przy typowym słuchaniu przy 128 kbps.' },
        { q: 'Które ramki AAC działają?', a: 'ADTS (najczęstsze), ADIF i LATM wszystkie dekodują. AAC w MP4/M4A również działa, ale to inna ścieżka wejściowa.' },
        { q: 'Czy pliki są przechowywane?', a: 'Nie. Przesłane AAC jest usuwane po konwersji; MP3 jest usuwane w ciągu godziny.' },
      ]}
      ctaHeadline="Konwertuj swoje AAC na MP3 teraz"
      ctaSubtitle="Wrzuć swoje AAC i otrzymaj czyste MP3 w kilka sekund. Bez rejestracji. Bez znaku wodnego."
      ctaButton="Wybierz plik AAC"
      moreTools={[
        { href: '/pl/m4a-to-mp3',  label: 'M4A do MP3' },
        { href: '/pl/mp4-to-mp3',  label: 'MP4 do MP3' },
        { href: '/pl/wav-to-mp3',  label: 'WAV do MP3' },
        { href: '/pl/aac-to-text', label: 'AAC do Tekstu' },
      ]}
    />
  )
}