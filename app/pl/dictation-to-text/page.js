import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Dyktowanie do tekstu dla nagranych szkiców głosowych | Mictoo',
  description:
    'Nagraj szkic głosowy, załaduj plik i uzyskaj edytowalny tekst z znacznikami czasowymi oraz opcjami eksportu do swojego przepływu pracy.',
  alternates: {
    canonical: 'https://mictoo.com/pl/dictation-to-text',
    languages: {
      'en': 'https://mictoo.com/dictation-to-text',
      'fr': 'https://mictoo.com/fr/dictation-to-text',
      'de': 'https://mictoo.com/de/dictation-to-text',
      'es': 'https://mictoo.com/es/dictation-to-text',
      'ru': 'https://mictoo.com/ru/dictation-to-text',
      'it': 'https://mictoo.com/it/dictation-to-text',
      'pt': 'https://mictoo.com/pt/dictation-to-text',
      'pl': 'https://mictoo.com/pl/dictation-to-text',
      'ja': 'https://mictoo.com/ja/dictation-to-text',
      'ko': 'https://mictoo.com/ko/dictation-to-text',
      'x-default': 'https://mictoo.com/dictation-to-text',
    },
  },
  openGraph: {
    title: 'Dyktowanie do tekstu: Darmowe | Mictoo',
    description: 'Nagraj szkic głosowy, załaduj plik, uzyskaj czysty tekst.',
    url: 'https://mictoo.com/pl/dictation-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dyktowanie do tekstu',
    description: 'Pisanie z użyciem głosu dla profesjonalistów.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlDictationToTextPage() {
  return (
    <UseCaseLayout
      locale="pl"
      badge="Pisanie · Profesjonaliści · Darmowe"
      h1First="Dyktowanie do tekstu"
      h1Second="Pisanie z użyciem głosu dla każdego, kto myśli szybciej niż pisze"
      subtitle="Nagraj szkic za pomocą telefonu, laptopa lub dowolnego rejestratora głosu. Załaduj plik. Uzyskaj czysty, punktowany tekst gotowy do wklejenia do swojego edytora. Lepsza dokładność niż wbudowane dyktowanie w telefonie dla długich treści."
      currentHref="/pl/dictation-to-text"

      platforms={[
        { name: 'iPhone',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: 'Windows Rec',  iconKey: 'mic',       brandBg: '#0078D4' },
        { name: 'QuickTime',    iconKey: 'videoCameraFill', brandBg: '#374151' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
        { name: 'Dragon',       iconKey: 'mic',       brandBg: '#DC2626' },
      ]}

      howItWorksTitle="Jak działa dyktowanie do tekstu"
      steps={[
        {
          icon: 'folder',
          title: 'Nagraj swój szkic',
          desc: 'Dowolny rejestrator: notatnik głosowy w telefonie, rejestrator głosu w laptopie lub dedykowana aplikacja do dyktowania.',
        },
        {
          icon: 'upload',
          title: 'Załaduj plik tutaj',
          desc: 'M4A (iPhone), MP3 (Android), WAV (rejestrator). Darmowe do 25 MB anonimowo, 60 MB po zalogowaniu.',
        },
        {
          icon: 'editPen',
          title: 'Czysty tekst, gotowy do wklejenia',
          desc: 'Automatyczna interpunkcja, przerwy między zdaniami i formatowanie. Przełącz się na tryb edytora, aby wprowadzić poprawki przed eksportem.',
        },
      ]}

      exampleTitle="Przykład dyktowanego szkicu"
      exampleFileName="chapter-3-draft.m4a"
      exampleDurationLabel="12:44"
      exampleLines={[
        { t: '0:00',  line: 'Rozdział trzeci. Poranek procesu.' },
        { t: '0:06',  line: 'Alex ledwo spał. Nie z powodu niepokoju, dokładnie, ale z powodu dziwnej ciszy, która następuje po długim przygotowaniu.' },
        { t: '0:20',  line: 'Przez sześć miesięcy każda godzina na jawie była pochłonięta sprawą. A teraz, nagle, nie było nic do zrobienia, tylko się pojawić.' },
        { t: '0:36',  line: 'Sąd był trzy ulice od jej mieszkania. Szła powoli, pozwalając zimnem marcowego powietrza przeniknąć przez siebie.' },
        { t: '0:50',  line: 'Kiedy dotarła na schody, dziennikarze już się zebrali, czekając na twarz, którą rozpoznają.' },
        { t: '1:04',  line: 'Zachowała głowę w dół i przeszła obok nich. Na pytania będzie czas później. Nie wcześniej.' },
        { t: '1:18',  line: 'W środku, w holu było prawie pusto. Kilku urzędników, jeden sprzątacz i strażnik, którego widziała codziennie w tym tygodniu.' },
      ]}
      summaryPoints={[
        'Otwarcie rozdziału 3: poranek procesu.',
        'Postać: Alex, protagonista, bezsenna, nie zaniepokojona.',
        'Miejsce akcji: zimny marcowy poranek, sąd trzy ulice dalej.',
        'Obecność mediów na zewnątrz; puste hol wewnątrz.',
      ]}
      actionItems={[]}

      whyTitle="Dlaczego Mictoo do dyktowania"
      whyCards={[
        {
          icon: 'target',
          title: 'Zaprojektowane dla nagranych szkiców',
          desc: 'Najpierw nagraj kompletny szkic, a następnie przetranskrybuj go jako jeden plik. To pozwala zachować oryginalne nagranie audio podczas przeglądania i edytowania tekstu.',
        },
        {
          icon: 'editPen',
          title: 'Edytor do czyszczenia po dyktowaniu',
          desc: 'Przełącz się na tryb edytora, popraw imiona, dodaj przerwy między akapitami i eksportuj jako DOCX gotowy do twojej aplikacji do pisania.',
        },
        {
          icon: 'sparkles',
          title: 'Podsumowanie AI do ekstrakcji zarysu',
          desc: 'Solidny pierwszy szkic dla kluczowych punktów rozdziału, punktów pamięci lub struktury artykułu.',
        },
        {
          icon: 'globe',
          title: 'Dyktuj w dowolnym języku',
          desc: 'Ponad 50 języków z automatycznym wykrywaniem. Wielojęzyczni pisarze mogą zmieniać języki między nagraniami bez zmiany ustawień.',
        },
      ]}

      scenariosTitle="Typowe scenariusze dyktowania"
      scenarios={[
        { icon: 'editPen', title: 'Pierwszy szkic' },
        { icon: 'book',    title: 'Dyktowanie rozdziału' },
        { icon: 'briefcase', title: 'Notatka / e-mail' },
        { icon: 'chat',    title: 'Prowadzenie dziennika' },
        { icon: 'search',  title: 'Notatki badawcze' },
        { icon: 'globe',   title: 'Wielojęzyczne' },
      ]}

      tipsTitle="Wskazówki dla czystszego dyktowania"
      tips={[
        'Mów "przecinek", "kropka", "nowy akapit", jeśli chcesz wyraźnej interpunkcji.',
        'Nagraj w cichym pomieszczeniu, aby słowa były łatwiejsze do rozróżnienia.',
        'Dla długich rozdziałów powyżej 60 MB, zaloguj się, aby uzyskać automatyczne podział.',
        'Przejrzyj tryb edytora przed eksportem pod kątem imion i terminów technicznych.',
      ]}

      guidesTitle="Powiązane narzędzia"
      guides={[
        { href: '/pl/voice-memo-to-text',      icon: 'mic',    title: 'Notatka głosowa',   desc: 'Zbieranie pomysłów, nie pisanie szkicu' },
        { href: '/pl/m4a-to-text',             icon: 'file',   title: 'Format M4A',   desc: 'Eksporty iPhone / Apple' },
        { href: '/pl/transcribe-mp3-to-text',  icon: 'file',   title: 'Format MP3',   desc: 'Eksporty rejestratorów Android' },
        { href: '/pl/interview-transcription', icon: 'chat',   title: 'Wywiad',    desc: 'Nagrana rozmowa dwóch osób' },
      ]}

      faq={[
        {
          q: 'Jak Mictoo różni się od dyktowania na żywo przez telefon?',
          a: 'Mictoo działa na podstawie zapisanego nagrania, a nie słuchając na żywo podczas pisania. To sprawia, że jest użyteczne do przeglądania dłuższych szkiców w porównaniu do oryginalnego nagrania, z uwzględnieniem obecnych limitów rozmiaru pliku i czasu trwania.',
        },
        {
          q: 'Czy mogę dyktować terminy techniczne lub medyczne?',
          a: 'Whisper dobrze radzi sobie z powszechnym słownictwem technicznym. W przypadku rzadkich lub zastrzeżonych terminów, użyj trybu edytora po transkrypcji, aby poprawić wszelkie pomyłki. Szybsze niż dyktowanie i poprawianie na bieżąco.',
        },
        {
          q: 'Jaki jest limit rozmiaru pliku dla dyktowania?',
          a: '25 MB anonimowo, 60 MB po zalogowaniu. 60-minutowe nagranie głosowe przy typowym bitrate to 20-30 MB, więc większość sesji dyktacyjnych mieści się w darmowym limicie.',
        },
        {
          q: 'Czy Mictoo automatycznie dodaje interpunkcję?',
          a: 'Tak. Zdania i akapity są wykrywane na podstawie rytmu mowy. Powiedz "przecinek" lub "kropka", jeśli chcesz wyraźnej interpunkcji w konkretnym miejscu.',
        },
        {
          q: 'Czy mogę edytować transkrypt przed eksportem?',
          a: 'Tak. Przełącz się na tryb edytora, aby edytować dowolne słowo lub linię na bieżąco. Zapisz zmiany i eksportuj jako TXT, DOCX lub PDF (po zalogowaniu).',
        },
        {
          q: 'Czy mogę przetłumaczyć mój dyktowany szkic?',
          a: 'Tak. Wybierz docelowy język i kliknij Tłumacz. Przydatne dla pisarzy tworzących w drugim języku lub tłumaczy przygotowujących wersję roboczą.',
        },
        {
          q: 'Czy dyktaty są przechowywane na waszych serwerach?',
          a: 'Nie. Audio jest przesyłane do dostawcy transkrypcji, przetwarzane raz i usuwane. Tylko transkrypt pozostaje, jeśli się zalogujesz i go zapiszesz.',
        },
      ]}

      ctaHeadline="Przekształć mówione szkice w tekst"
      ctaSubtitle="Rozdział, notatka, artykuł, wpis do dziennika. Szybciej niż pisanie, gdy już wiesz, co chcesz powiedzieć."
      ctaButton="Załaduj dyktat"

      relatedLinks={[
        { href: '/pl/voice-memo-to-text',      label: 'Notatka głosowa do tekstu' },
        { href: '/pl/interview-transcription', label: 'Transkrypcja wywiadu' },
        { href: '/pl/lecture-transcription',   label: 'Transkrypcja wykładu' },
        { href: '/pl/m4a-to-text',             label: 'M4A do tekstu' },
        { href: '/pl/transcribe-mp3-to-text',  label: 'MP3 do tekstu' },
      ]}
    />
  )
}