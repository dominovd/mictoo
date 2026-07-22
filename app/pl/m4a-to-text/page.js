import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'pt': 'https://mictoo.com/pt/m4a-to-text',
  'pl': 'https://mictoo.com/pl/m4a-to-text',
  'ja': 'https://mictoo.com/ja/m4a-to-text',
  'ko': 'https://mictoo.com/ko/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4A na tekst: Darmowa transkrypcja notatek głosowych i audio Apple | Mictoo',
  description:
    'Prześlij plik M4A z notatek głosowych iPhone’a, GarageBand, Apple Podcasts lub FaceTime i uzyskaj edytowalny transkrypt w kilka sekund. AAC w MP4, bez potrzeby konwersji.',
  alternates: {
    canonical: 'https://mictoo.com/pl/m4a-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'M4A na tekst: Transkrypcja notatek głosowych iPhone’a i audio Apple | Mictoo',
    description: 'Prześlij M4A z notatek głosowych, GarageBand, Apple Podcasts lub FaceTime. Edytowalny transkrypt w kilka sekund.',
    url: 'https://mictoo.com/pl/m4a-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4A na tekst: Darmowa transkrypcja notatek głosowych iPhone’a',
    description: 'Prześlij M4A z notatek głosowych, GarageBand, Apple Podcasts. Edytowalny transkrypt w kilka sekund.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlM4aToTextPage() {
  return (
    <FormatPageLayout
      locale="pl"
      badge="M4A · AAC · iPhone · Darmowe"
      h1First="M4A na tekst"
      h1Second="Dla notatek głosowych iPhone’a i audio Apple"
      subtitle="M4A to format, który zapisuje aplikacja Notatki głosowe na iPhone’a, który eksportuje GarageBand i który dystrybuuje Apple Podcasts. Przeciągnij plik bezpośrednio z urządzenia, zachowaj AAC, uzyskaj transkrypt z znacznikami czasowymi w kilka sekund."
      highlightFormat="m4a"
      previewFileName="voice-memo.m4a"
      previewWordCount={148}
      previewDurationLabel="6:18"
      previewLines={[
        { t: '0:00',  line: 'Okay, szybka notatka głosowa, zanim zapomnę cały pomysł.' },
        { t: '0:04',  line: 'Więc pomysł jest taki, że podzielimy proces zakupu na dwa wyraźne kroki zamiast jednego długiego formularza.' },
        { t: '0:13',  line: 'Krok pierwszy, tylko e-mail i karta. Krok drugi, dane do wysyłki po tym, jak zobaczą numer potwierdzenia.' },
        { t: '0:22',  line: 'Powód, dla którego to ma znaczenie, jest taki, że odsetek rezygnacji w obecnym formularzu jednokolumnowym wynosi około trzydzieści osiem procent.' },
        { t: '0:32',  line: 'Większość tych rezygnacji występuje w sekcji wysyłki, a nie przy wprowadzaniu karty, co jest nieintuicyjne.' },
        { t: '0:42',  line: 'Jeśli przeniesiemy wysyłkę na czas po zakupie, prawdopodobnie odzyskamy dwanaście do piętnastu procent tego ruchu.' },
        { t: '0:52',  line: 'Czasowo, myślę, że to dwa tygodnie frontendu, tydzień backendu, może tydzień testowania.' },
        { t: '1:02',  line: 'Skontaktuj się z zespołem zakupów jutro, aby zobaczyć, czy jest coś, co już próbowali, a co się nie udało.' },
      ]}
      whyTitle="Dlaczego Mictoo do transkrypcji M4A"
      whyCards={[
        {
          icon: 'mic',
          title: 'Stworzony dla notatek głosowych iPhone’a',
          desc: 'Przeciągnij .m4a bezpośrednio z arkusza udostępniania Notatek głosowych lub z iCloud. Bez problemów z formatem, bez kroku konwersji.',
        },
        {
          icon: 'gear',
          title: 'AAC w MP4, obsługiwane natywnie',
          desc: 'M4A to audio AAC w kontenerze MP4. Analizujemy box ftyp, wyodrębniamy ścieżkę AAC i przekazujemy ją do Whisper bez ponownego kodowania.',
        },
        {
          icon: 'sparkles',
          title: 'Podsumowanie AI dla pomysłów z notatek głosowych',
          desc: 'Podsumowanie pojawia się obok transkryptu. Przekształca chaotyczne notatki burzy mózgów w zwięzłą listę działań.',
        },
        {
          icon: 'globe',
          title: 'Tłumaczenie na 50+ języków',
          desc: 'Notatka głosowa w języku hiszpańskim, notatka nagrana podczas francuskiego spotkania, dyktowanie w języku japońskim. Tłumacz na angielski (lub dowolny cel) po transkrypcji.',
        },
      ]}
      scenariosTitle="Kiedy M4A na tekst to odpowiedni wybór"
      scenarios={[
        {
          icon: 'mic',
          title: 'Notatki głosowe iPhone’a',
          desc: 'Każde nagranie z wbudowanej aplikacji Notatki głosowe na iPhone’ie lub iPadzie. Pomysły, notatki ze spotkań, klipy wywiadów, wykłady.',
        },
        {
          icon: 'briefcase',
          title: 'Nagrania z FaceTime i rozmów',
          desc: 'Audio eksportowane z FaceTime, rozmów WhatsApp lub sesji Zoom często ląduje jako M4A. Przeciągnij plik, aby uzyskać czystą wersję tekstową.',
        },
        {
          icon: 'sparkles',
          title: 'Eksporty z GarageBand i Logic',
          desc: 'Wokalowy bounce, odcinek podcastu lub edycja wywiadu z GarageBand lub Logic Pro. Uzyskaj transkrypt, aby stworzyć notatki do programu.',
        },
        {
          icon: 'video',
          title: 'Odcinki Apple Podcasts',
          desc: 'Pobrany odcinek z Apple Podcasts (M4A na iOS domyślnie). Transkrypt do cytowania, odniesienia lub ponownego wykorzystania.',
        },
        {
          icon: 'editPen',
          title: 'Dyktowanie i długie notatki',
          desc: 'Dyktowałeś rozdział, notatkę lub wpis do dziennika w Notatkach głosowych. Przekształć to w edytowalny tekst gotowy do twojej aplikacji do pisania.',
        },
        {
          icon: 'users',
          title: 'Wywiad w terenie',
          desc: 'Dziennikarstwo, badania lub wywiad ustny nagrany na iPhone’a. Transkrypt to surowy materiał do historii lub pracy.',
        },
      ]}
      technicalTitle="Co warto wiedzieć o M4A"
      technicalIntro="M4A opisuje kontener audio oparty na MP4, a nie jeden pojedynczy kodek. Większość nagrań głosowych używa AAC, podczas gdy niektóre pliki używają bezstratnego ALAC."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Kontener i kodek',
          desc: 'Plik .m4a zazwyczaj zawiera audio AAC lub ALAC. Kontener zapewnia synchronizację i metadane wokół tego strumienia audio.',
        },
        {
          icon: 'mic',
          title: 'Przepływ pracy Notatek głosowych',
          desc: 'Możesz udostępnić oryginalne nagranie z iPhone’a lub Maca i przesłać je bez wcześniejszego zmieniania nazwy na MP3.',
        },
        {
          icon: 'clip',
          title: 'Metadane są oddzielne',
          desc: 'Tytuły, grafika i metadane Apple nie są wstawiane do tekstu transkryptu. Zachowaj je w swoich notatkach lub systemie publikacji.',
        },
        {
          icon: 'cloud',
          title: 'Długie nagrania',
          desc: 'M4A jest zazwyczaj kompaktowy, ale długie notatki głosowe mogą nadal przekraczać limity przesyłania. Podziel lub wyeksportuj mniejszą kopię mowy w razie potrzeby.',
        },
      ]}
      faq={[
        {
          q: 'Czy akceptujecie M4A z notatek głosowych iPhone’a bezpośrednio?',
          a: 'Tak. Notatki głosowe zapisują standardowe M4A (AAC w kontenerze MP4). Udostępnij plik z aplikacji, zapisz w iCloud lub Plikach i przeciągnij go tutaj. Nie wymaga konwersji.',
        },
        {
          q: 'Jaka jest różnica między M4A a MP4?',
          a: 'M4A to wersja audio tylko kontenera MP4. Oba używają nagłówka ftyp i kodeka AAC. .m4a sygnalizuje treść audio, podczas gdy .mp4 zazwyczaj sugeruje wideo. Mictoo akceptuje oba bezpośrednio.',
        },
        {
          q: 'Moje nagranie z iPhone’a ma ponad 60 MB. Co teraz?',
          a: '90-minutowa notatka głosowa może przekroczyć 60 MB. Jeśli jesteś zalogowany, automatycznie dzielimy do około 3 godzin. Dla anonimowych użytkowników, najpierw zmniejsz jakość: ffmpeg -i in.m4a -b:a 64k -ac 1 out.m4a. Jakość mowy pozostaje czysta.',
        },
        {
          q: 'Czy metadane iPhone’a (tytuł, lokalizacja, data) będą widoczne?',
          a: 'Nie. Transkrypt to zwykły tekst bez metadanych urządzenia. Jeśli polegasz na dacie nagrania lub lokalizacji, zachowaj to w swoich notatkach.',
        },
        {
          q: 'Czy Mictoo transkrybuje pliki M4A w językach innych niż angielski?',
          a: 'Tak. Whisper large-v3 obsługuje 50+ języków z automatycznym wykrywaniem. Dla krótkich notatek głosowych lub akcentów w innych językach, ustaw język explicite dla czystszych wyników w pierwszym podejściu.',
        },
        {
          q: 'Czy mogę pobrać napisy SRT dla wideo, które używa tego M4A?',
          a: 'Tak. Pobierz SRT lub VTT po transkrypcji. Znaczniki czasowe są zgodne z oryginalnym harmonogramem M4A, więc jeśli zsynchronizujesz M4A z ścieżką wideo, napisy będą pasować dokładnie do klatek.',
        },
        {
          q: 'Czy mogę przetłumaczyć transkrypt na inny język?',
          a: 'Tak. Po transkrypcji wybierz docelowy język i kliknij Tłumacz. Tłumaczenie działa na GPT-4o-mini i pojawia się obok oryginału.',
        },
        {
          q: 'Czy mój plik M4A jest przechowywany na waszych serwerach?',
          a: 'Nie. Audio przesyłane jest do dostawcy transkrypcji, przetwarzane raz i usuwane z pamięci. Nigdy nie zapisujemy go na dysku. Transkrypty są przechowywane tylko wtedy, gdy zalogujesz się i zapiszesz w historii.',
        },
        {
          q: 'Czy jakość M4A wpływa na transkrypt?',
          a: 'Niewiele. Notatki głosowe iPhone’a nagrywają z prędkością około 32-64 kbps AAC, co jest wystarczające dla Whisper. Whisper wewnętrznie przetwarza do 16 kHz mono, więc bitrate kodeka ma minimalny wpływ na czystą mowę.',
        },
        {
          q: 'Jak długo trwa transkrypcja M4A?',
          a: '10-minutowa notatka głosowa zazwyczaj kończy się w 15-30 sekund. 60-minutowy wywiad kończy się w 60-90 sekund. Prędkość przesyłania często jest dłuższym krokiem.',
        },
      ]}
      ctaHeadline="Przeciągnij swoją notatkę głosową, uzyskaj czysty transkrypt"
      ctaSubtitle="Notatki głosowe iPhone’a, GarageBand, FaceTime, Apple Podcasts. AAC w MP4, bez potrzeby konwersji."
      ctaButton="Prześlij M4A do transkrypcji"
    />
  )
}