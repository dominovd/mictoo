import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/voice-memo-to-text',
  'fr': 'https://mictoo.com/fr/voice-memo-to-text',
  'de': 'https://mictoo.com/de/voice-memo-to-text',
  'es': 'https://mictoo.com/es/voice-memo-to-text',
  'ru': 'https://mictoo.com/ru/voice-memo-to-text',
  'it': 'https://mictoo.com/it/voice-memo-to-text',
  'pt': 'https://mictoo.com/pt/voice-memo-to-text',
  'pl': 'https://mictoo.com/pl/voice-memo-to-text',
  'ja': 'https://mictoo.com/ja/voice-memo-to-text',
  'ko': 'https://mictoo.com/ko/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: 'Przekształcanie notatek głosowych na tekst dla iPhone’a i Androida | Mictoo',
  description:
    'Prześlij nagranie głosowe z iPhone’a lub Androida i otrzymaj tekst z znacznikami czasowymi, podsumowanie AI i edytowalne eksporty.',
  alternates: {
    canonical: 'https://mictoo.com/pl/voice-memo-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'Przekształcanie notatek głosowych na tekst: Darmowe | Mictoo',
    description: 'Prześlij swoje nagranie głosowe z iPhone’a lub Androida, otrzymaj czysty tekst.',
    url: 'https://mictoo.com/pl/voice-memo-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Przekształcanie notatek głosowych na tekst',
    description: 'Darmowa transkrypcja nagrań głosowych z telefonu.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlVoiceMemoToTextPage() {
  return (
    <UseCaseLayout
      locale="pl"
      badge="iPhone · Android · Darmowe"
      h1First="Przekształcanie notatek głosowych na tekst"
      h1Second="Darmowa transkrypcja nagrań głosowych z telefonu"
      subtitle="Prześlij swoją notatkę głosową z iPhone’a, nagranie głosowe z Androida, notatkę głosową z WhatsAppa lub wiadomość głosową z Telegrama. Otrzymaj czysty transkrypt w kilka sekund. Bez rejestracji, bez opłaty za minutę."
      currentHref="/pl/voice-memo-to-text"

      platforms={[
        { name: 'iPhone',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: 'Samsung',      iconKey: 'mic',       brandBg: '#1428A0' },
        { name: 'WhatsApp',     iconKey: 'phone',     brandBg: '#25D366' },
        { name: 'Telegram',     iconKey: 'phone',     brandBg: '#0088CC' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
      ]}

      howItWorksTitle="Jak działa transkrypcja notatek głosowych"
      steps={[
        {
          icon: 'folder',
          title: 'Udostępnij nagranie',
          desc: 'iPhone: udostępnij z aplikacji Notatki Głosowe. Android: plik z aplikacji Pliki. WhatsApp: przekaż jako plik.',
        },
        {
          icon: 'upload',
          title: 'Prześlij plik tutaj',
          desc: 'M4A (iPhone), MP3 (Android), OPUS/OGG (WhatsApp, Telegram) działają bezpośrednio.',
        },
        {
          icon: 'editPen',
          title: 'Transkrypt w kilka sekund',
          desc: '5-minutowa notatka kończy się w około 10 sekund. Podsumowanie AI przekształca chaotyczne pomysły w zwięzłą listę działań.',
        },
      ]}

      exampleTitle="Przykład transkryptu notatki głosowej"
      exampleFileName="voice-memo.m4a"
      exampleDurationLabel="3:22"
      exampleLines={[
        { t: '0:00',  line: 'Dobrze, szybka notatka głosowa, zanim zapomnę cały pomysł.' },
        { t: '0:04',  line: 'Więc pomysł polega na tym, że bierzemy proces zakupu i dzielimy go na dwa wyraźne kroki zamiast jednego długiego formularza.' },
        { t: '0:13',  line: 'Krok pierwszy, tylko e-mail i karta. Krok drugi, dane do wysyłki po zobaczeniu numeru potwierdzenia.' },
        { t: '0:22',  line: 'Powód, dla którego to ma znaczenie, jest taki, że spadek w obecnym formularzu jednolitym wynosi około trzydzieści osiem procent.' },
        { t: '0:32',  line: 'Większość tego spadku występuje w sekcji wysyłki, a nie przy wprowadzaniu karty, co jest nieintuicyjne.' },
        { t: '0:42',  line: 'Jeśli przeniesiemy wysyłkę na czas po zakupie, możemy prawdopodobnie odzyskać dwanaście do piętnastu procent tego ruchu.' },
        { t: '0:52',  line: 'Pod względem czasu, myślę, że to dwa tygodnie frontend, jeden tydzień backend, może tydzień testowania.' },
      ]}
      summaryPoints={[
        'Pomysł: podzielić proces zakupu na dwa kroki.',
        'Krok 1: e-mail + karta. Krok 2: wysyłka po potwierdzeniu.',
        'Obecny spadek: 38%, głównie w sekcji wysyłki.',
        'Szacowane odzyskanie: 12-15% ruchu.',
      ]}
      actionItems={[
        'Sporządź makietę dwuetapowego procesu zakupu',
        'Zweryfikuj 38% spadku w analizach',
        'Określ zakres inżynieryjny (~4 tygodnie łącznie)',
      ]}

      whyTitle="Dlaczego Mictoo do notatek głosowych"
      whyCards={[
        {
          icon: 'sparkles',
          title: 'Podsumowanie AI dla chaotycznych notatek',
          desc: 'Notatki głosowe są z natury chaotyczne. Podsumowanie przekształca pięciominutowy strumień myśli w dwulinijkowe podsumowanie.',
        },
        {
          icon: 'mic',
          title: 'iPhone .m4a natywnie',
          desc: 'Apple Notatki Głosowe zapisują w .m4a (AAC w MP4). Akceptujemy to bezpośrednio, bez konwersji.',
        },
        {
          icon: 'chat',
          title: 'Telegram .oga natywnie',
          desc: 'Zapisz wiadomość głosową z czatu i prześlij plik .oga. Opus w OGG, obsługiwane natywnie.',
        },
        {
          icon: 'globe',
          title: 'Tłumaczenie dla notatek w różnych językach',
          desc: 'Notatka w twoim ojczystym języku, notatki w języku angielskim dla zespołu. Jedno kliknięcie.',
        },
      ]}

      scenariosTitle="Typowe scenariusze notatek głosowych"
      scenarios={[
        { icon: 'sparkles', title: 'Zbieranie pomysłów' },
        { icon: 'chat',     title: 'Notatki ze spotkań' },
        { icon: 'editPen',  title: 'Pisanie szkiców' },
        { icon: 'book',     title: 'Prowadzenie dziennika' },
        { icon: 'phone',    title: 'Wiadomość głosowa' },
        { icon: 'globe',    title: 'Wielojęzyczne' },
      ]}

      tipsTitle="Porady na temat czystszych notatek głosowych"
      tips={[
        'Trzymaj telefon blisko, aby zredukować hałas w tle.',
        'Dla długich notatek powyżej 60 MB, zaloguj się, aby automatycznie podzielić.',
        'Mów w jednym języku na notatkę dla najczystszej detekcji.',
        'Powiedz "nowy akapit", jeśli chcesz, aby transkrypt się tam przerwał.',
      ]}

      guidesTitle="Powiązane narzędzia"
      guides={[
        { href: '/pl/m4a-to-text',        icon: 'file',  title: 'Format M4A',       desc: 'iPhone / GarageBand głęboka analiza' },
        { href: '/pl/ogg-to-text',        icon: 'file',  title: 'OGG / .oga',       desc: 'Głęboka analiza wiadomości głosowych z Telegrama' },
        { href: '/pl/dictation-to-text',  icon: 'editPen', title: 'Dyktowanie',      desc: 'Praca w trybie głosowym' },
        { href: '/pl/interview-transcription', icon: 'chat', title: 'Wywiad',    desc: 'Wywiad telefoniczny lub osobisty' },
      ]}

      faq={[
        {
          q: 'Czy mogę bezpośrednio transkrybować notatki głosowe z iPhone’a?',
          a: 'Tak. Udostępnij notatkę z aplikacji Notatki Głosowe (udzielanie → zapisz do Plików lub wyślij do siebie) i prześlij .m4a do Mictoo. Nie wymaga konwersji.',
        },
        {
          q: 'Czy Mictoo transkrybuje wiadomości głosowe z WhatsAppa lub Telegrama?',
          a: 'Tak. Zapisz wiadomość głosową z czatu (przekaż → zapisz jako plik) i prześlij ją. Notatki głosowe z WhatsAppa są w .opus, notatki głosowe z Telegrama są w .oga (oba są kontenerami OGG). Oba działają bezpośrednio.',
        },
        {
          q: 'Jaki jest limit rozmiaru pliku?',
          a: '25 MB anonimowo, 60 MB po zalogowaniu. 60-minutowa notatka głosowa przy typowym bitrate wynosi około 20-30 MB, więc większość mieści się w darmowym limicie.',
        },
        {
          q: 'Czy Mictoo transkrybuje notatki głosowe w językach innych niż angielski?',
          a: 'Tak. Whisper large-v3 obsługuje ponad 50 języków. Dla krótkich notatek lub treści w językach obcych, ustaw język explicite dla czystszej detekcji przy pierwszym podejściu.',
        },
        {
          q: 'Czy mogę uzyskać podsumowanie chaotycznej notatki burzy mózgów?',
          a: 'Tak. Podsumowanie AI pojawia się automatycznie obok transkryptu. Doskonałe do przekształcania notatek strumienia świadomości w zwięzłe listy działań.',
        },
        {
          q: 'Czy notatki głosowe są przechowywane na waszych serwerach?',
          a: 'Nie. Audio jest przesyłane do dostawcy transkrypcji, przetwarzane raz i usuwane. Tylko transkrypt pozostaje, jeśli się zalogujesz i go zapiszesz.',
        },
        {
          q: 'Czy mogę przetłumaczyć swoją notatkę głosową na inny język?',
          a: 'Tak. Wybierz docelowy język i kliknij Tłumacz po transkrypcji. GPT-4o-mini zajmuje się tłumaczeniem i pojawia się obok oryginału.',
        },
      ]}

      ctaHeadline="Przekształć notatki głosowe w tekst i zadania"
      ctaSubtitle="Notatki głosowe z iPhone’a, Androida, WhatsAppa, Telegrama. Wszystkie formaty, jedno przesłanie."
      ctaButton="Prześlij notatkę głosową"

      relatedLinks={[
        { href: '/pl/dictation-to-text',       label: 'Dyktowanie na tekst' },
        { href: '/pl/interview-transcription', label: 'Transkrypcja wywiadów' },
        { href: '/pl/m4a-to-text',             label: 'M4A na tekst' },
        { href: '/pl/ogg-to-text',             label: 'OGG na tekst' },
        { href: '/pl/meeting-transcription',   label: 'Transkrypcja spotkań' },
      ]}
    />
  )
}