import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-mp3',
  'fr': 'https://mictoo.com/fr/m4a-to-mp3',
  'de': 'https://mictoo.com/de/m4a-to-mp3',
  'es': 'https://mictoo.com/es/m4a-to-mp3',
  'ru': 'https://mictoo.com/ru/m4a-to-mp3',
  'it': 'https://mictoo.com/it/m4a-to-mp3',
  'pt': 'https://mictoo.com/pt/m4a-to-mp3',
  'pl': 'https://mictoo.com/pl/m4a-to-mp3',
  'ja': 'https://mictoo.com/ja/m4a-to-mp3',
  'ko': 'https://mictoo.com/ko/m4a-to-mp3',
  'x-default': 'https://mictoo.com/m4a-to-mp3',
}

export const metadata = {
  title: 'M4A na MP3: Darmowy konwerter audio Apple | Mictoo',
  description:
    'Konwertuj notatki głosowe iPhone’a, bounces GarageBand oraz pliki M4A z ekosystemu Apple na uniwersalne MP3 dla hostów podcastów, starszych telefonów Android i odtwarzaczy legacy.',
  alternates: {
    canonical: 'https://mictoo.com/pl/m4a-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'M4A na MP3: Darmowy konwerter audio Apple | Mictoo',
    description: 'Notatki głosowe iPhone’a i bounces GarageBand na uniwersalne MP3.',
    url: 'https://mictoo.com/pl/m4a-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4A na MP3: Darmowy konwerter',
    description: 'Notatki głosowe iPhone’a na uniwersalne MP3.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlM4aToMp3Page() {
  return (
    <ConverterPageLayout
      locale="pl"
      mode="converter" from="m4a" to="mp3" currentHref="/pl/m4a-to-mp3"
      badge="M4A → MP3 · Darmowy · Audio Apple"
      h1First="M4A na MP3"
      h1Second="Darmowy konwerter dla audio z ekosystemu Apple"
      subtitle="Przeciągnij notatkę głosową iPhone’a, bounce GarageBand lub eksport z Apple Podcasts i uzyskaj uniwersalne MP3 dla hostów podcastów, starszych telefonów Android i odtwarzaczy legacy."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="Jak działa konwersja M4A na MP3"
      steps={[
        { icon: 'upload',   title: 'Przeciągnij M4A',        desc: 'Z notatek głosowych, GarageBand, Apple Podcasts. Do 25 MB anonimowo.' },
        { icon: 'waveform', title: 'Dekodujemy i kodujemy', desc: 'ffmpeg dekoduje AAC wewnątrz kontenera M4A i ponownie koduje do 128 kbps MP3.' },
        { icon: 'download', title: 'Pobierz MP3',    desc: 'Uzyskaj MP3 kompatybilne z większością obecnych odtwarzaczy i edytorów audio.' },
      ]}
      previewInputName="voice-memo.m4a"
      previewInputSize="6.2 MB · 00:12:04"
      previewOutputName="voice-memo.mp3"
      previewOutputSize="00:12:04 · 128 kbps · 11.5 MB"
      whyTitle="Dlaczego warto używać Mictoo do M4A na MP3?"
      whyCards={[
        { icon: 'target',   title: 'Przyjazny dla iPhone’a',        desc: 'Notatki głosowe iPhone’a w formacie .m4a wczytują się bezpośrednio, nie trzeba zmieniać nazwy.' },
        { icon: 'fileAudio',title: 'MP3 dla starszych hostów',   desc: 'Niektórzy hostowie podcastów i starsze urządzenia Android wciąż preferują MP3 zamiast M4A.' },
        { icon: 'lock',     title: 'Pliki usuwane po',    desc: 'Przesłane M4A jest usuwane po konwersji; MP3 jest usuwane w ciągu godziny.' },
        { icon: 'shield',   title: 'Bez znaku wodnego lub tagu',    desc: 'Tylko audio, ponownie zakodowane. Bez wprowadzenia marki, bez wstrzykiwania metadanych.' },
      ]}
      scenariosTitle="Kiedy M4A na MP3 jest przydatne"
      scenarios={[
        { icon: 'headphones', title: 'Notatka głosowa iPhone’a' },
        { icon: 'waveform',   title: 'Bounce GarageBand' },
        { icon: 'mail',       title: 'Legacy host podcastu' },
        { icon: 'archive',    title: 'Spójny format biblioteki' },
        { icon: 'editPen',    title: 'Import starszego DAW' },
        { icon: 'video',      title: 'Odtwarzacz wideo nie-Apple' },
      ]}
      tipsTitle="Wskazówki dotyczące czystej konwersji M4A na MP3"
      tips={[
        'Jeśli twoja platforma akceptuje M4A, być może nie musisz konwertować.',
        'Oba formaty są stratne; ponowne kodowanie wprowadza niewielką utratę jakości.',
        'Metadane ID3 i iTunes nie są przenoszone.',
        'Aby transkrybować, przesyłaj M4A bezpośrednio do /pl/m4a-to-text.',
      ]}
      processTitle="Co się dzieje podczas konwersji"
      processSteps={['M4A (kontener MP4)', 'Dekodowanie AAC', 'Kodowanie MP3']}
      compareTitle="M4A vs MP3"
      compareRows={[
        { fmt: 'M4A', contains: 'Nie', size: 'Mały (efektywny)', best: 'Ekosystem Apple, nowoczesne urządzenia' },
        { fmt: 'MP3', contains: 'Nie', size: 'Mały',             best: 'Uniwersalny, odtwarzacze legacy, starsze hosty' },
      ]}
      faq={[
        { q: 'Czy muszę konwertować M4A na MP3?', a: 'Tylko jeśli konkretne narzędzie lub host wymaga MP3. Większość nowoczesnych urządzeń (w tym wszystkie Androidy i Windows w 2026 roku) odtwarza M4A natywnie.' },
        { q: 'Czy konwerter jest darmowy?', a: 'Tak. Pliki do 25 MB można konwertować bez konta, a wynik nie ma znaku wodnego.' },
        { q: 'Czy stracę jakość?', a: 'M4A i MP3 są obie stratne. Ponowne kodowanie wprowadza niewielką utratę, ale jest niesłyszalna podczas typowego słuchania.' },
        { q: 'Czy działa natywny format notatek głosowych iPhone’a?', a: 'Tak. Notatki głosowe iPhone’a zapisują standardowe .m4a, które wczytuje się bezpośrednio.' },
        { q: 'Czy pliki są przechowywane?', a: 'Nie. Przesłane M4A jest usuwane po konwersji; MP3 jest usuwane w ciągu godziny.' },
      ]}
      ctaHeadline="Konwertuj swoje M4A na MP3 teraz"
      ctaSubtitle="Przeciągnij swoją notatkę głosową iPhone’a lub audio Apple i uzyskaj przenośne MP3."
      ctaButton="Wybierz plik M4A"
      moreTools={[
        { href: '/pl/aac-to-mp3',  label: 'AAC na MP3' },
        { href: '/pl/mp4-to-mp3',  label: 'MP4 na MP3' },
        { href: '/pl/mp3-to-m4a',  label: 'MP3 na M4A' },
        { href: '/pl/m4a-to-text', label: 'M4A na tekst' },
      ]}
    />
  )
}