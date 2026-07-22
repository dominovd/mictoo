import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-mp3',
  'fr': 'https://mictoo.com/fr/webm-to-mp3',
  'de': 'https://mictoo.com/de/webm-to-mp3',
  'es': 'https://mictoo.com/es/webm-to-mp3',
  'ru': 'https://mictoo.com/ru/webm-to-mp3',
  'it': 'https://mictoo.com/it/webm-to-mp3',
  'pt': 'https://mictoo.com/pt/webm-to-mp3',
  'pl': 'https://mictoo.com/pl/webm-to-mp3',
  'ja': 'https://mictoo.com/ja/webm-to-mp3',
  'ko': 'https://mictoo.com/ko/webm-to-mp3',
  'x-default': 'https://mictoo.com/webm-to-mp3',
}

export const metadata = {
  title: 'WEBM na MP3, darmowy konwerter online | Mictoo',
  description:
    'Konwertuj WEBM na MP3 za darmo online. Wyciągnij dźwięk MP3 z dowolnego pliku wideo lub audio WEBM w kilka sekund. Bez rejestracji, bez znaku wodnego. Do 25 MB.',
  alternates: { canonical: 'https://mictoo.com/pl/webm-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WEBM na MP3, darmowy konwerter online | Mictoo',
    description: 'Wyciągnij MP3 z dowolnego WEBM. Bez rejestracji, bez znaku wodnego.',
    url: 'https://mictoo.com/pl/webm-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEBM na MP3, darmowy konwerter online',
    description: 'Wyciągnij MP3 z dowolnego WEBM.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlWebmToMp3Page() {
  return (
    <ConverterPageLayout
      locale="pl"
      mode="converter" from="webm" to="mp3" currentHref="/pl/webm-to-mp3"
      badge="WEBM → MP3 · Darmowy · Bez rejestracji"
      h1First="WEBM na MP3"
      h1Second="Darmowy konwerter online"
      subtitle="Przeciągnij plik WEBM (z Loom, OBS, nagrania Firefox lub pobieracza YouTube) i uzyskaj czyste MP3 w kilka sekund. Bez znaku wodnego, bez e-maila."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="Jak działa konwersja WEBM na MP3"
      steps={[
        { icon: 'upload',   title: 'Przeciągnij WEBM',   desc: 'Wideo lub tylko audio WEBM, oba działają. Do 25 MB anonimowo.' },
        { icon: 'waveform', title: 'Demuxujemy i kodujemy', desc: 'ffmpeg usuwa ścieżkę wideo (jeśli jest) i ponownie koduje audio Opus lub Vorbis do 128 kbps MP3.' },
        { icon: 'download', title: 'Pobierz MP3', desc: 'Uzyskaj swoje czyste MP3 w kilka sekund. Oryginalna nazwa pliku z rozszerzeniem .mp3.' },
      ]}
      previewInputName="loom-walkthrough.webm"
      previewInputSize="72 MB · 00:08:12"
      previewOutputName="loom-walkthrough.mp3"
      previewOutputSize="00:08:12 · 128 kbps · 7.5 MB"
      whyTitle="Dlaczego warto używać Mictoo do konwersji WEBM na MP3?"
      whyCards={[
        { icon: 'target',   title: 'Obsługuje Opus i Vorbis', desc: 'Oba kodeki audio WEBM działają bezpośrednio, bez ręcznego pakowania.' },
        { icon: 'video',    title: 'Wideo w WEBM obsługiwane',   desc: 'Demuxujemy ścieżkę wideo po stronie serwera. Nigdy nie musisz samodzielnie wyciągać audio.' },
        { icon: 'lock',     title: 'Pliki usuwane po',     desc: 'Przesłany WEBM jest usuwany po konwersji; MP3 jest usuwane w ciągu godziny.' },
        { icon: 'shield',   title: 'Bez znaku wodnego lub tagu',     desc: 'Wynikowe MP3 nie ma wprowadzenia, nie ma oznaczonej metadanych.' },
      ]}
      scenariosTitle="Kiedy konwersja WEBM na MP3 jest przydatna"
      scenarios={[
        { icon: 'video',      title: 'Przewodnik Loom' },
        { icon: 'headphones', title: 'Wynik pobieracza YouTube' },
        { icon: 'mail',       title: 'Wyślij mniejszy plik' },
        { icon: 'editPen',    title: 'Przygotuj do transkrypcji' },
        { icon: 'waveform',   title: 'Nagrywanie w przeglądarce' },
        { icon: 'archive',    title: 'Archiwizuj tylko audio' },
      ]}
      tipsTitle="Porady dotyczące czystej konwersji WEBM na MP3"
      tips={[
        'Wideo-WEBM jest automatycznie demuxowane, nie ma potrzeby wcześniejszego usuwania.',
        'Dla nagrań powyżej 25 MB, przytnij lub podziel źródło przed przesłaniem.',
        'Domyślna ścieżka audio jest używana, jeśli istnieje wiele.',
        'Dla transkrypcji Whisper, przesyłaj WEBM bezpośrednio do /webm-to-text.',
      ]}
      processTitle="Co się dzieje podczas konwersji"
      processSteps={['Kontener WEBM', 'Ekstrakcja ścieżki audio', 'Kodowanie MP3']}
      compareTitle="WEBM vs MP3"
      compareRows={[
        { fmt: 'WEBM', contains: 'Często tak', size: 'Średni-duży', best: 'Nagranie w sieci, wideo z przeglądarki' },
        { fmt: 'MP3',  contains: 'Nie',        size: 'Mały',        best: 'Udostępnianie, odtwarzanie, wszędzie' },
      ]}
      faq={[
        { q: 'Czy konwerter WEBM na MP3 jest darmowy?', a: 'Tak. Pliki do 25 MB można konwertować bez konta, a wynik nie ma znaku wodnego.' },
        { q: 'Co jeśli mój WEBM ma wideo?', a: 'Demuxujemy ścieżkę wideo po stronie serwera i kodujemy tylko audio. Nie musisz niczego wstępnie usuwać.' },
        { q: 'Które kodeki audio WEBM działają?', a: 'Opus (nowoczesny, najczęstszy) i Vorbis (starszy). Oba są obsługiwane bezpośrednio.' },
        { q: 'Czy przesłane pliki są przechowywane?', a: 'Nie. WEBM jest usuwany po konwersji; MP3 jest usuwane w ciągu godziny.' },
        { q: 'Mój WEBM ma ponad 25 MB. Co teraz?', a: 'Przytnij źródło przed przesłaniem lub najpierw wyciągnij WEBM tylko z audio, aby zmniejszyć rozmiar pliku.' },
      ]}
      ctaHeadline="Konwertuj swoje WEBM na MP3 teraz"
      ctaSubtitle="Przeciągnij swoje WEBM i uzyskaj czyste MP3 w kilka sekund. Bez rejestracji. Bez znaku wodnego."
      ctaButton="Wybierz plik WEBM"
      moreTools={[
        { href: '/pl/mp4-to-mp3',  label: 'MP4 na MP3' },
        { href: '/pl/wav-to-mp3',  label: 'WAV na MP3' },
        { href: '/pl/flac-to-mp3', label: 'FLAC na MP3' },
        { href: '/pl/webm-to-text', label: 'WEBM na tekst' },
      ]}
    />
  )
}