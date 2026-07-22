import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-wav',
  'fr': 'https://mictoo.com/fr/mp3-to-wav',
  'de': 'https://mictoo.com/de/mp3-to-wav',
  'es': 'https://mictoo.com/es/mp3-to-wav',
  'ru': 'https://mictoo.com/ru/mp3-to-wav',
  'it': 'https://mictoo.com/it/mp3-to-wav',
  'pt': 'https://mictoo.com/pt/mp3-to-wav',
  'pl': 'https://mictoo.com/pl/mp3-to-wav',
  'ja': 'https://mictoo.com/ja/mp3-to-wav',
  'ko': 'https://mictoo.com/ko/mp3-to-wav',
  'x-default': 'https://mictoo.com/mp3-to-wav',
}

export const metadata = {
  title: 'MP3 na WAV, darmowy konwerter online | Mictoo',
  description:
    'Konwertuj MP3 na WAV za darmo online. Rozwiń skompresowane MP3 do nieskompresowanego 16-bitowego/44,1 kHz WAV do edycji audio. Bez rejestracji, bez znaku wodnego.',
  alternates: { canonical: 'https://mictoo.com/pl/mp3-to-wav', languages: LANGS },
  openGraph: {
    title: 'MP3 na WAV, darmowy konwerter online | Mictoo',
    description: 'MP3 na nieskompresowane 16-bitowe/44,1 kHz WAV. Do edycji.',
    url: 'https://mictoo.com/pl/mp3-to-wav',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 na WAV, darmowy konwerter online',
    description: 'Do edycji i masteringu w DAW.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlMp3ToWavPage() {
  return (
    <ConverterPageLayout
      locale="pl"
      mode="converter" from="mp3" to="wav" currentHref="/pl/mp3-to-wav"
      badge="MP3 → WAV · Darmowy · Przyjazny dla edytorów"
      h1First="MP3 na WAV"
      h1Second="Darmowy konwerter online"
      subtitle="Wrzuć MP3 i otrzymaj nieskompresowane 16-bitowe / 44,1 kHz WAV do edycji w DAW, masteringu lub nagrywania na CD. Bez znaku wodnego, bez e-maila."
      outputFormat="WAV" outputQuality="16-bit / 44,1 kHz" outputAudio="Stereo"
      stepsTitle="Jak działa konwersja MP3 na WAV"
      steps={[
        { icon: 'upload',   title: 'Wrzuć MP3',       desc: 'Dowolne MP3 o bitrate do 25 MB anonimowo.' },
        { icon: 'waveform', title: 'Dekodujemy do PCM', desc: 'ffmpeg dekoduje MP3 do nieskompresowanego 16-bitowego / 44,1 kHz PCM w kontenerze WAV.' },
        { icon: 'download', title: 'Pobierz WAV',     desc: 'Gotowe do Audacity, Pro Tools, Logic, Ableton i każdego edytora audio.' },
      ]}
      previewInputName="voiceover.mp3"
      previewInputSize="4,6 MB · 00:05:00 · 128 kbps"
      previewOutputName="voiceover.wav"
      previewOutputSize="00:05:00 · 16-bit / 44,1 kHz · 50 MB"
      whyTitle="Dlaczego warto używać Mictoo do MP3 na WAV?"
      whyCards={[
        { icon: 'target',   title: 'Wyjście gotowe do DAW',       desc: 'Nieskompresowane PCM to to, czego oczekują edytory audio i narzędzia do masteringu.' },
        { icon: 'fileAudio',title: 'Standard 16-bit / 44,1', desc: 'Szeroko wspierane ustawienie PCM dla edytorów audio, narzędzi do masteringu i oprogramowania do nagrywania CD.' },
        { icon: 'lock',     title: 'Pliki usuwane po',    desc: 'Przesłane MP3 jest usuwane po konwersji; WAV jest usuwane w ciągu godziny.' },
        { icon: 'shield',   title: 'Bez znaku wodnego ani tagu',    desc: 'Tylko audio, dekodowane do PCM. Bez wprowadzenia marki, bez wstrzykiwania metadanych.' },
      ]}
      scenariosTitle="Kiedy MP3 na WAV jest przydatne"
      scenarios={[
        { icon: 'editPen',    title: 'Edycja w Audacity' },
        { icon: 'waveform',   title: 'Import w Pro Tools' },
        { icon: 'headphones', title: 'Workflow masteringu' },
        { icon: 'archive',    title: 'Nagrywanie na CD' },
        { icon: 'video',      title: 'Edytor wideo z wymaganiem WAV' },
        { icon: 'target',     title: 'Wejście do treningu klonowania głosu' },
      ]}
      tipsTitle="Wskazówki dotyczące czystej konwersji MP3 na WAV"
      tips={[
        'WAV jest 10× większy niż MP3 (około 10 MB na minutę).',
        'Wyjście nie jest „prawdziwie” bezstratne ,  zachowuje sygnał MP3.',
        'Aby uzyskać prawdziwe audio bezstratne, zacznij od FLAC lub oryginalnego mastera WAV.',
        'Trzymaj plik źródłowy poniżej aktualnego limitu przesyłania 25 MB.',
      ]}
      processTitle="Co się dzieje podczas konwersji"
      processSteps={['Strumień MP3', 'Dekodowanie do PCM', 'Kontener WAV']}
      compareTitle="MP3 vs WAV"
      compareRows={[
        { fmt: 'MP3', contains: 'Nie', size: 'Mały (~1 MB/min)', best: 'Udostępnianie, telefony, strumieniowanie' },
        { fmt: 'WAV', contains: 'Nie', size: 'Duży (~10 MB/min)', best: 'Edycja, mastering, nagrywanie na CD' },
      ]}
      faq={[
        { q: 'Czy konwersja MP3 na WAV przywraca jakość bezstratną?', a: 'Nie. MP3 jest stratne; WAV zachowuje sygnał MP3, ale nic więcej. Aby uzyskać prawdziwie bezstratne, musisz zacząć od FLAC lub oryginalnego WAV.' },
        { q: 'Czy konwerter jest darmowy?', a: 'Tak. Pliki do 25 MB można konwertować bez konta, a wyjście nie ma znaku wodnego.' },
        { q: 'Dlaczego plik WAV jest tak dużo większy?', a: 'WAV to nieskompresowane PCM. 5 MB MP3 staje się mniej więcej 50 MB WAV. To normalne.' },
        { q: 'Jaka jest głębokość bitowa i częstotliwość próbkowania?', a: '16-bit / 44,1 kHz stereo (jakość CD). To standardowy format importu do DAW.' },
        { q: 'Czy pliki są przechowywane?', a: 'Nie. Przesłane MP3 jest usuwane po konwersji; WAV jest usuwane w ciągu godziny.' },
      ]}
      ctaHeadline="Konwertuj swoje MP3 na WAV teraz"
      ctaSubtitle="Wrzuć swoje MP3 i otrzymaj nieskompresowane WAV gotowe do edycji."
      ctaButton="Wybierz plik MP3"
      moreTools={[
        { href: '/pl/wav-to-mp3',  label: 'WAV na MP3' },
        { href: '/pl/mp3-to-m4a',  label: 'MP3 na M4A' },
        { href: '/pl/flac-to-mp3', label: 'FLAC na MP3' },
        { href: '/pl/wav-to-text', label: 'WAV na tekst' },
      ]}
    />
  )
}