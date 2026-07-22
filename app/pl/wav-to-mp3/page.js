import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-mp3',
  'fr': 'https://mictoo.com/fr/wav-to-mp3',
  'de': 'https://mictoo.com/de/wav-to-mp3',
  'es': 'https://mictoo.com/es/wav-to-mp3',
  'ru': 'https://mictoo.com/ru/wav-to-mp3',
  'it': 'https://mictoo.com/it/wav-to-mp3',
  'pt': 'https://mictoo.com/pt/wav-to-mp3',
  'pl': 'https://mictoo.com/pl/wav-to-mp3',
  'ja': 'https://mictoo.com/ja/wav-to-mp3',
  'ko': 'https://mictoo.com/ko/wav-to-mp3',
  'x-default': 'https://mictoo.com/wav-to-mp3',
}

export const metadata = {
  title: 'WAV na MP3, darmowy konwerter online | Mictoo',
  description:
    'Konwertuj WAV na MP3 za darmo online. Zmniejsz bezstratne pliki WAV do przenośnych 128 kbps MP3 w kilka sekund. Bez rejestracji, bez znaku wodnego. Do 25 MB.',
  alternates: { canonical: 'https://mictoo.com/pl/wav-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WAV na MP3, darmowy konwerter online | Mictoo',
    description: 'Zmniejsz bezstratne WAV do przenośnych 128 kbps MP3. Bez rejestracji.',
    url: 'https://mictoo.com/pl/wav-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WAV na MP3, darmowy konwerter online',
    description: 'Zmniejsz WAV do przenośnego MP3.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlWavToMp3Page() {
  return (
    <ConverterPageLayout
      locale="pl"
      mode="converter" from="wav" to="mp3" currentHref="/pl/wav-to-mp3"
      badge="WAV → MP3 · Darmowy · Bez rejestracji"
      h1First="WAV na MP3"
      h1Second="Darmowy konwerter online"
      subtitle="Przeciągnij niekompresowany plik WAV i uzyskaj małe, przenośne MP3 w kilka sekund. Bez znaku wodnego, bez e-maila, bez oczekiwania."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="Jak działa konwersja WAV na MP3"
      steps={[
        { icon: 'upload',   title: 'Przeciągnij WAV',         desc: 'Prześlij plik WAV do 25 MB. Nie jest wymagane konto.' },
        { icon: 'waveform', title: 'Kodujemy do MP3',      desc: 'ffmpeg koduje do 128 kbps stereo MP3 przy 44.1 kHz. 25 MB WAV kończy się w około 10 sekund.' },
        { icon: 'download', title: 'Pobierz MP3',     desc: 'Uzyskaj mniejsze 128 kbps MP3 z oryginalną nazwą pliku.' },
      ]}
      previewInputName="studio-bounce.wav"
      previewInputSize="120 MB · 00:12:34 · 16-bit / 44.1 kHz"
      previewOutputName="studio-bounce.mp3"
      previewOutputSize="00:12:34 · 128 kbps · 11.5 MB"
      whyTitle="Dlaczego warto używać Mictoo do konwersji WAV na MP3?"
      whyCards={[
        { icon: 'target',   title: 'Jedna robota wykonana dobrze',      desc: 'Tylko konwersja. Bez wyskakujących okienek z newsletterem, bez fałszywego paska postępu.' },
        { icon: 'fileAudio',title: 'Znacznie mniejszy plik wyjściowy',    desc: 'Niekompresowane pliki WAV PCM często stają się 8, 12× mniejsze przy 128 kbps. Dokładny stosunek zależy od źródła.' },
        { icon: 'lock',     title: 'Pliki usuwane po',    desc: 'Twój plik zostaje usunięty po zakończeniu konwersji; MP3 jest usuwane w ciągu godziny.' },
        { icon: 'shield',   title: 'Brak znaku wodnego lub tagu',    desc: 'Brak wprowadzenia z marką, brak wstrzykiwanych metadanych. Tylko audio, ponownie zakodowane.' },
      ]}
      scenariosTitle="Kiedy konwersja WAV na MP3 jest przydatna"
      scenarios={[
        { icon: 'headphones', title: 'Studio bounce na telefon' },
        { icon: 'mail',       title: 'Wyślij mniejszy plik' },
        { icon: 'archive',    title: 'Archiwizuj w mniejszym rozmiarze' },
        { icon: 'editPen',    title: 'Przygotuj do transkrypcji' },
        { icon: 'waveform',   title: 'Import biblioteki muzycznej' },
        { icon: 'video',      title: 'Lektor do wideo' },
      ]}
      tipsTitle="Wskazówki dotyczące czystej konwersji WAV na MP3"
      tips={[
        '128 kbps jest przezroczyste dla większości słuchania.',
        'Jeśli WAV ma ponad 25 MB, przytnij lub skompresuj go przed przesłaniem.',
        'WAV wielokanałowy jest miksowany do stereo.',
        'Dla bezstratnego zachowania, zachowaj WAV jako kopię archiwalną.',
      ]}
      processTitle="Co się dzieje podczas konwersji"
      processSteps={['Kontener WAV', 'Dekodowanie PCM', 'Kodowanie MP3']}
      compareTitle="WAV vs MP3"
      compareRows={[
        { fmt: 'WAV', contains: 'Nie', size: 'Duży (~10 MB/min)', best: 'Edycja, archiwizacja, studio' },
        { fmt: 'MP3', contains: 'Nie', size: 'Mały (~1 MB/min)',  best: 'Udostępnianie, odtwarzanie, słuchanie' },
      ]}
      faq={[
        { q: 'Czy konwerter WAV na MP3 jest darmowy?', a: 'Tak. Nie jest wymagane konto dla plików do 25 MB, a wyjście nie ma znaku wodnego.' },
        { q: 'Czy konwersja obniża jakość dźwięku?', a: 'Nieznacznie. MP3 przy 128 kbps to format stratny, ale spadek jakości jest niesłyszalny dla głosu i typowego odtwarzania muzyki. Zachowaj swojego WAV jako master.' },
        { q: 'Czy przesłane pliki są przechowywane?', a: 'Nie. Twój WAV ląduje w pamięci Blob Vercel na czas konwersji, a następnie jest usuwany. MP3 jest usuwane w ciągu godziny.' },
        { q: 'Czy mogę konwertować duży plik WAV?', a: 'Aktualny limit przesyłania wynosi 25 MB. Dla większego pliku, przytnij go lub wyeksportuj kopię mono lub o niższej częstotliwości próbkowania przed przesłaniem.' },
        { q: 'Czy działa na urządzeniach mobilnych?', a: 'Tak. Przesyłanie działa w iOS Safari i Android Chrome.' },
      ]}
      ctaHeadline="Konwertuj swój WAV na MP3 teraz"
      ctaSubtitle="Przeciągnij swój WAV i uzyskaj przenośne MP3 w kilka sekund. Bez rejestracji. Bez znaku wodnego."
      ctaButton="Wybierz plik WAV"
      moreTools={[
        { href: '/pl/mp4-to-mp3',  label: 'MP4 na MP3' },
        { href: '/pl/webm-to-mp3', label: 'WEBM na MP3' },
        { href: '/pl/flac-to-mp3', label: 'FLAC na MP3' },
        { href: '/pl/mp3-to-wav',  label: 'MP3 na WAV' },
        { href: '/pl/wav-to-text', label: 'WAV na tekst' },
      ]}
    />
  )
}