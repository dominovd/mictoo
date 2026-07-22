import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'it': 'https://mictoo.com/it/lecture-transcription',
  'pt': 'https://mictoo.com/pt/lecture-transcription',
  'pl': 'https://mictoo.com/pl/lecture-transcription',
  'ja': 'https://mictoo.com/ja/lecture-transcription',
  'ko': 'https://mictoo.com/ko/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: 'Transkrypcja wykładów na zajęcia i seminaria | Mictoo',
  description:
    'Prześlij nagraną lekcję, wykład lub seminarium i otrzymaj tekst do przeszukiwania, znaczniki czasowe, podsumowanie AI oraz pliki do eksportu.',
  alternates: {
    canonical: 'https://mictoo.com/pl/lecture-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transkrypcja wykładów: Darmowy generator transkryptów | Mictoo',
    description: 'Prześlij nagranie swojego wykładu lub seminarium i otrzymaj czysty tekst w kilka sekund.',
    url: 'https://mictoo.com/pl/lecture-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transkrypcja wykładów: Darmowy generator',
    description: 'Prześlij nagranie swojej lekcji lub seminarium.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlLectureTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pl"
      badge="Studenci · Akademicy · Darmowe"
      h1First="Transkrypcja wykładów"
      h1Second="Darmowe transkrypty dla zajęć i seminariów"
      subtitle="Prześlij nagrany wykład z Zoom, Panopto, YouTube, Kaltura lub swojego telefonu. Otrzymaj przeszukiwalny transkrypt z znacznikami czasowymi gotowy do notatek, powtórek i cytatów."
      currentHref="/pl/lecture-transcription"

      platforms={[
        { name: 'Zoom',      iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/pl/zoom-transcription' },
        { name: 'YouTube',   iconKey: 'videoCameraFill', brandBg: '#FF0000' },
        { name: 'Panopto',   iconKey: 'cap',             brandBg: '#014A96' },
        { name: 'Kaltura',   iconKey: 'cap',             brandBg: '#FA6425' },
        { name: 'Camtasia',  iconKey: 'videoCameraFill', brandBg: '#00A651' },
        { name: 'Voice Memo',iconKey: 'mic',             brandBg: '#F97316', href: '/pl/voice-memo-to-text' },
      ]}

      howItWorksTitle="Jak działa transkrypcja wykładów"
      steps={[
        {
          icon: 'folder',
          title: 'Eksportuj wykład',
          desc: 'Pobierz z Panopto/Kaltura, zapisz z chmury Zoom lub nagraj na swoim telefonie podczas zajęć.',
        },
        {
          icon: 'upload',
          title: 'Upuść plik tutaj',
          desc: 'MP3, MP4, M4A, WAV, MOV działają. Długie wykłady są automatycznie dzielone po zalogowaniu.',
        },
        {
          icon: 'editPen',
          title: 'Notatki, podsumowanie, cytaty',
          desc: 'Przeszukiwalny transkrypt z znacznikami czasowymi, podsumowanie AI, DOCX do notatek. Rozmawiaj z transkryptem, aby przygotować się do egzaminów.',
        },
      ]}

      exampleTitle="Przykładowy transkrypt wykładu"
      exampleFileName="intro-microeconomics-lecture-08.mp4"
      exampleDurationLabel="47:32"
      exampleLines={[
        { t: '0:00',  line: 'Dobrze. W zeszłym tygodniu zakończyliśmy na koncepcji nadwyżki konsumenta. Dziś rozwijamy to o nadwyżkę producenta.' },
        { t: '0:11',  line: 'Nadwyżka producenta to różnica między tym, co producent zaakceptowałby za towar, a tym, co faktycznie otrzymuje.' },
        { t: '0:23',  line: 'Razem, nadwyżka konsumenta i producenta daje nam całkowity dobrobyt na rynku, zanim wprowadzimy podatki lub kontrolę cen.' },
        { t: '0:35',  line: 'Dlaczego to pojęcie jest dla nas praktycznie ważne? Ponieważ pozwala nam ocenić, czy polityka poprawia, czy pogarsza sytuację na rynku.' },
        { t: '0:47',  line: 'Rozważmy podatek jednostkowy. Przesuwa krzywą podaży w górę o wysokość podatku, a obie nadwyżki maleją.' },
        { t: '0:58',  line: 'Luka, która pojawia się między tym, co płacą nabywcy, a tym, co otrzymują sprzedawcy, to to, co nazywamy stratą wagi martwej.' },
        { t: '1:08',  line: 'Proszę otworzyć zeszyt na stronie trzydzieści jeden i przepracujmy razem przykład numeryczny.' },
      ]}
      summaryPoints={[
        'Podsumowanie: nadwyżka konsumenta z poprzedniego wykładu.',
        'Nowa koncepcja: nadwyżka producenta i całkowity dobrobyt.',
        'Zastosowane w analizie podatkowej.',
        'Strata wagi martwej zilustrowana numerycznie.',
      ]}
      actionItems={[
        'Przejrzyj zeszyt na stronie 31',
        'Ćwicz obliczanie straty wagi martwej',
        'Przeczytaj rozdział 4 przed czwartkiem',
      ]}

      whyTitle="Dlaczego Mictoo do transkrypcji wykładów"
      whyCards={[
        {
          icon: 'search',
          title: 'Przeszukiwalne w transkrypcie',
          desc: 'Ctrl-F jakiekolwiek pojęcie z całego 45-minutowego wykładu w sekundę. Lepiej niż przeszukiwanie wideo.',
        },
        {
          icon: 'sparkles',
          title: 'Podsumowanie AI do notatek',
          desc: 'Podsumowanie to solidny punkt wyjścia do powtórek. Skróć to, co już wiesz, zachowaj to, co przegapiłeś.',
        },
        {
          icon: 'chat',
          title: 'Rozmawiaj z wykładem',
          desc: 'Zadawaj pytania dotyczące materiału, aby przygotować się do egzaminów. Odpowiedzi w stylu RAG cytują dokładny znacznik czasowy.',
        },
        {
          icon: 'globe',
          title: 'Tłumacz dla studentów nieznających języka',
          desc: 'Wykład po angielsku, ale uczysz się po portugalsku? Tłumaczenie jednym kliknięciem na 50+ języków.',
        },
      ]}

      scenariosTitle="Typowe scenariusze wykładów"
      scenarios={[
        { icon: 'book',      title: 'Zajęcia uniwersyteckie' },
        { icon: 'cap' ,      title: 'Kurs online' },
        { icon: 'search',    title: 'Powtórka przed egzaminem' },
        { icon: 'editPen',   title: 'Notatki do nauki' },
        { icon: 'globe',     title: 'Student nieznający języka' },
        { icon: 'headset',   title: 'Nagrane seminarium' },
      ]}

      tipsTitle="Wskazówki dla czystszych transkryptów wykładów"
      tips={[
        'Siedź blisko przodu i używaj telefonu jako zapasowego mikrofonu.',
        'Długie wykłady powyżej 60 MB są automatycznie dzielone po zalogowaniu.',
        'Ustaw język wyraźnie dla treści technicznych lub nieanglojęzycznych.',
        'Użyj czatu, aby zadawać pytania po transkrypcji.',
      ]}

      guidesTitle="Powiązane narzędzia do nauki"
      guides={[
        { href: '/pl/zoom-transcription',        icon: 'video', title: 'Wykład Zoom',      desc: 'Pobieranie nagrania w chmurze' },
        { href: '/pl/youtube-to-text',           icon: 'video', title: 'Wykład YouTube',   desc: 'Wklej URL lub prześlij' },
        { href: '/pl/voice-memo-to-text',        icon: 'mic',   title: 'Nagranie z telefonu',   desc: 'iPhone Voice Memo na zajęciach' },
        { href: '/pl/timestamped-transcription', icon: 'file',  title: 'Notatki z znacznikami czasowymi', desc: 'Eksporty z dopasowaniem czasowym' },
      ]}

      faq={[
        {
          q: 'Czy mogę transkrybować nagranie klasy Zoom?',
          a: 'Tak. Pobierz nagranie w chmurze MP4 lub M4A i upuść tutaj. Zobacz przewodnik Zoom, aby uzyskać dokładną ścieżkę pobierania.',
        },
        {
          q: 'Mój wykład ma ponad 60 MB. Co teraz?',
          a: 'Zaloguj się, aby włączyć automatyczne dzielenie (do około 3 godzin). Lub zmniejsz do 64 kbps mono MP3 za pomocą ffmpeg, aby uzyskać 5-krotną redukcję rozmiaru.',
        },
        {
          q: 'Czy Mictoo transkrybuje wykłady w innych językach?',
          a: 'Tak. Whisper large-v3 obsługuje 50+ języków. Ustaw język wyraźnie dla słownictwa technicznego lub mocnych akcentów.',
        },
        {
          q: 'Czy mogę przeszukiwać transkrypt?',
          a: 'Tak. Widok czytnika zawiera pole wyszukiwania z liczbą dopasowań i podświetleniem. Ctrl-F swoje hasło i przeskakuj między trafieniami.',
        },
        {
          q: 'Czy mogę zadawać pytania dotyczące materiału wykładu?',
          a: 'Tak. Czat z transkryptem pozwala zadawać pytania „wyjaśnij stratę wagi martwej” lub „jakie strony wspomniał profesor”. Odpowiedzi cytują znaczniki czasowe.',
        },
        {
          q: 'Czy mogę eksportować notatki wykładowe jako DOCX lub PDF?',
          a: 'Tak. DOCX dla każdego, PDF i JSON dla zalogowanych użytkowników. TXT jest zawsze dostępny.',
        },
        {
          q: 'Czy nagrania wykładów są przechowywane na waszych serwerach?',
          a: 'Nie. Strumienie audio są przesyłane do dostawcy transkrypcji, przetwarzane raz i usuwane. Transkrypty są zapisywane tylko, jeśli się zalogujesz.',
        },
      ]}

      ctaHeadline="Zamień wykłady w notatki do nauki"
      ctaSubtitle="Przeszukiwalny transkrypt, podsumowanie AI, czat z materiałem. Darmowe za wykład."
      ctaButton="Prześlij wykład"

      relatedLinks={[
        { href: '/pl/webinar-transcription',     label: 'Transkrypcja webinarów' },
        { href: '/pl/sermon-transcription',      label: 'Transkrypcja kazań' },
        { href: '/pl/voice-memo-to-text',        label: 'Notatki głosowe na tekst' },
        { href: '/pl/interview-transcription',   label: 'Transkrypcja wywiadów' },
        { href: '/pl/meeting-transcription',     label: 'Transkrypcja spotkań' },
      ]}
    />
  )
}