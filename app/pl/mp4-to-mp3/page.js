import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp4-to-mp3',
  'fr': 'https://mictoo.com/fr/mp4-to-mp3',
  'de': 'https://mictoo.com/de/mp4-to-mp3',
  'es': 'https://mictoo.com/es/mp4-to-mp3',
  'ru': 'https://mictoo.com/ru/mp4-to-mp3',
  'it': 'https://mictoo.com/it/mp4-to-mp3',
  'pt': 'https://mictoo.com/pt/mp4-to-mp3',
  'pl': 'https://mictoo.com/pl/mp4-to-mp3',
  'ja': 'https://mictoo.com/ja/mp4-to-mp3',
  'ko': 'https://mictoo.com/ko/mp4-to-mp3',
  'x-default': 'https://mictoo.com/mp4-to-mp3',
}

export const metadata = {
  title: 'MP4 na MP3, darmowy konwerter online | Mictoo',
  description:
    'Konwertuj MP4 na MP3 za darmo online. Przeciągnij swój film, uzyskaj czysty plik audio MP3 128 kbps w kilka sekund. Bez rejestracji, bez znaku wodnego, bez e-maila. Do 25 MB.',
  alternates: { canonical: 'https://mictoo.com/pl/mp4-to-mp3', languages: LANGS },
  openGraph: {
    title: 'MP4 na MP3, darmowy konwerter online | Mictoo',
    description: 'Konwertuj MP4 na MP3 za darmo online. 128 kbps, bez rejestracji, bez znaku wodnego.',
    url: 'https://mictoo.com/pl/mp4-to-mp3',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP4 na MP3, darmowy konwerter online',
    description: 'Konwertuj MP4 na MP3 za darmo online. 128 kbps, bez rejestracji, bez znaku wodnego.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlMp4ToMp3Page() {
  return (
    <ConverterPageLayout
      locale="pl"
      mode="converter"
      from="mp4"
      to="mp3"
      currentHref="/pl/mp4-to-mp3"

      badge="MP4 → MP3 · Darmowy · Bez rejestracji"
      h1First="MP4 na MP3"
      h1Second="Darmowy konwerter online"
      subtitle="Przeciągnij film MP4 i uzyskaj czysty plik audio MP3 w kilka sekund. Bez znaku wodnego, bez e-maila, bez czekania."

      outputFormat="MP3"
      outputQuality="128 kbps"
      outputAudio="Stereo"

      stepsTitle="Jak działa konwersja MP4 na MP3"
      steps={[
        {
          icon: 'upload',
          title: 'Przeciągnij MP4',
          desc: 'Prześlij swój film MP4. Akceptujemy pliki do 25 MB.',
        },
        {
          icon: 'waveform',
          title: 'Ekstrakcja audio',
          desc: 'Nasz serwer wyodrębnia ścieżkę audio i koduje ją do MP3.',
        },
        {
          icon: 'download',
          title: 'Pobierz MP3',
          desc: 'Uzyskaj czysty plik MP3 w kilka sekund.',
        },
      ]}

      previewInputName="nagranie-spotkania.mp4"
      previewInputSize="128,4 MB · 00:45:32"
      previewOutputName="nagranie-spotkania.mp3"
      previewOutputSize="00:45:32 · 128 kbps"

      whyTitle="Dlaczego warto używać Mictoo do konwersji MP4 na MP3?"
      whyCards={[
        {
          icon: 'target',
          title: 'Tylko konwersja',
          desc: 'Skupiamy się na jednej rzeczy ,  szybkim i niezawodnym konwertowaniu MP4 na MP3.',
        },
        {
          icon: 'fileAudio',
          title: 'Mały, uniwersalny MP3',
          desc: 'MP3 działa wszędzie i utrzymuje małe rozmiary plików.',
        },
        {
          icon: 'lock',
          title: 'Pliki są usuwane',
          desc: 'Twoje przesyłki są przetwarzane bezpiecznie i usuwane po konwersji.',
        },
        {
          icon: 'shield',
          title: 'Bez znaku wodnego ani tagu audio',
          desc: 'Uzyskaj czysty plik MP3 bez znaku wodnego lub dodatkowych tagów.',
        },
      ]}

      scenariosTitle="Kiedy konwersja MP4 na MP3 jest przydatna"
      scenarios={[
        { icon: 'headphones', title: 'Zapisz podcast wideo' },
        { icon: 'cap',        title: 'Wyodrębnij dźwięk wykładu' },
        { icon: 'mail',       title: 'Wyślij mniejszy plik' },
        { icon: 'editPen',    title: 'Przygotuj do transkrypcji' },
        { icon: 'waveform',   title: 'Dźwięk w tle' },
        { icon: 'archive',    title: 'Archiwizuj nagrania głosowe' },
      ]}

      tipsTitle="Porady dotyczące czystej konwersji"
      tips={[
        'Najpierw przytnij duże filmy.',
        '128 kbps działa dla głosu i muzyki.',
        'Używana jest domyślna ścieżka audio.',
        'Filmy chronione DRM nie są obsługiwane.',
      ]}
      processTitle="Co się dzieje podczas konwersji"
      processSteps={[
        'Kontener MP4',
        'Ekstrakcja ścieżki audio',
        'Kodowanie MP3',
      ]}

      compareTitle="MP4 vs MP3"
      compareRows={[
        { fmt: 'MP4', contains: 'Tak', size: 'Duży', best: 'Oglądanie, udostępnianie wideo' },
        { fmt: 'MP3', contains: 'Nie',  size: 'Mały', best: 'Słuchanie, tylko audio' },
      ]}

      faq={[
        { q: 'Czy konwerter MP4 na MP3 jest darmowy?', a: 'Tak. Nie jest potrzebne konto dla plików do 25 MB, brak limitu czasowego, brak znaku wodnego na wyjściu, brak komunikatów o aktualizacji. Reklamy wyświetlane na stronach marketingowych pokrywają koszty serwera.' },
        { q: 'Czy konwersja obniża jakość audio?', a: 'Nieznacznie. MP3 to format stratny, ale przy 128 kbps utrata jakości jest niesłyszalna dla głosu i typowego odtwarzania muzyki. Jeśli potrzebujesz bezstratnego, skonwertuj do WAV zamiast tego.' },
        { q: 'Czy przesłane pliki są przechowywane?', a: 'Nie. Twój MP4 ląduje w magazynie Vercel Blob na czas wystarczający do konwersji, a następnie jest usuwany. Powstały MP3 jest usuwany w ciągu godziny. Zapisz MP3 lokalnie.' },
        { q: 'Czy mogę skonwertować duży plik MP4?', a: 'Aktualny limit przesyłania to 25 MB. Jeśli Twój MP4 jest większy, przytnij go w QuickTime, aplikacji Zdjęcia lub innym edytorze wideo przed przesłaniem.' },
        { q: 'Czy działa na urządzeniach mobilnych?', a: 'Tak. Strona jest przyjazna dla urządzeń mobilnych, a przesyłanie działa w iOS Safari i Android Chrome. Na iPhonie najpierw udostępnij film do Plików, aby wybierak mógł do niego dotrzeć.' },
      ]}

      ctaHeadline="Skonwertuj swoje MP4 na MP3 teraz"
      ctaSubtitle="Przeciągnij swój film i uzyskaj czysty MP3 w kilka sekund. Bez rejestracji. Bez znaku wodnego."
      ctaButton="Wybierz plik MP4"

      moreTools={[
        { href: '/pl/wav-to-mp3',  label: 'WAV na MP3' },
        { href: '/pl/webm-to-mp3', label: 'WEBM na MP3' },
        { href: '/pl/flac-to-mp3', label: 'FLAC na MP3' },
        { href: '/pl/aac-to-mp3',  label: 'AAC na MP3' },
        { href: '/pl/m4a-to-mp3',  label: 'M4A na MP3' },
        { href: '/pl/mp3-to-wav',  label: 'MP3 na WAV' },
      ]}
    />
  )
}