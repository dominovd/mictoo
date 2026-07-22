import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'pl': 'https://mictoo.com/pl/sermon-transcription',
  'ja': 'https://mictoo.com/ja/sermon-transcription',
  'ko': 'https://mictoo.com/ko/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: 'Transkrypcja kazań dla usług i studiów | Mictoo',
  description:
    'Prześlij nagranie kazania lub usługi i uzyskaj tekst do przeszukiwania, znaczniki czasowe, podsumowanie AI oraz pliki do eksportu.',
  alternates: {
    canonical: 'https://mictoo.com/pl/sermon-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transkrypcja kazań: Darmowe | Mictoo',
    description: 'Prześlij nagranie usługi, uzyskaj czystą transkrypcję.',
    url: 'https://mictoo.com/pl/sermon-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transkrypcja kazań',
    description: 'Darmowe transkrypcje dla kościołów i studiów.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlSermonTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pl"
      badge="Kościoły · Pastorzy · Studia · Darmowe"
      h1First="Transkrypcja kazań"
      h1Second="Darmowa transkrypcja dla usług i studiów"
      subtitle="Prześlij nagranie z niedzielnej usługi, nauczania w tygodniu lub sesji studiów biblijnych. Uzyskaj czystą transkrypcję z znacznikami czasowymi na stronę kościoła, notatki do studiów i notatki do podcastu."
      currentHref="/pl/sermon-transcription"

      platforms={[
        { name: 'SermonAudio',   iconKey: 'broadcast', brandBg: '#B91C1C' },
        { name: 'ProPresenter',  iconKey: 'monitor',   brandBg: '#0EA5E9' },
        { name: 'YouTube Live',  iconKey: 'broadcast', brandBg: '#FF0000' },
        { name: 'Facebook Live', iconKey: 'broadcast', brandBg: '#1877F2' },
        { name: 'Zoom',          iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/pl/zoom-transcription' },
        { name: 'Church stream', iconKey: 'broadcast', brandBg: '#6B21A8' },
      ]}

      howItWorksTitle="Jak działa transkrypcja kazań"
      steps={[
        {
          icon: 'folder',
          title: 'Eksportuj nagranie usługi',
          desc: 'Niedzielny livestream MP4, WAV z dźwięku w kościele lub MP3 podcastu, który już publikujesz.',
        },
        {
          icon: 'upload',
          title: 'Prześlij plik tutaj',
          desc: 'MP3, MP4, WAV, M4A działają. Długie usługi korzystają z automatycznego podziału po zalogowaniu.',
        },
        {
          icon: 'editPen',
          title: 'Transkrypcja na stronę',
          desc: 'Czysty tekst gotowy na stronę kościoła, notatki do studiów, opis podcastu i przeszukiwalny archiwum.',
        },
      ]}

      exampleTitle="Przykładowa transkrypcja kazania"
      exampleFileName="niedzielna-usługa-14-stycznia.mp3"
      exampleDurationLabel="38:56"
      exampleLines={[
        { t: '0:00',  line: 'Dzień dobry kościele. Proszę, otwórzcie Ewangelię Mateusza, rozdział piąty, werset trzeci.' },
        { t: '0:12',  line: 'Dziś zaczynamy nową serię na temat tego, co Jezus nazywał błogosławionym życiem, Błogosławieństwami.' },
        { t: '0:24',  line: 'Błogosławieni są ubodzy duchem, albowiem do nich należy królestwo niebieskie. To jest nasz tekst na ten tydzień.' },
        { t: '0:38',  line: 'Słowo, którego Jezus używa tutaj dla błogosławionych, nie oznacza szczęśliwych w płytkim, okolicznościowym sensie.' },
        { t: '0:51',  line: 'Oznacza głęboką, fundamentalną satysfakcję z powodu twojego związku z Bogiem, niezależnie od okoliczności.' },
        { t: '1:04',  line: 'A być ubogim duchem nie oznacza materialnej biedy. To postawa zależności od Boga.' },
        { t: '1:18',  line: 'To wiedza, że cokolwiek zbudujesz, cokolwiek osiągniesz, ostatecznie opiera się na łasce, a nie na zasługach.' },
      ]}
      summaryPoints={[
        'Nowa seria na temat Błogosławieństw (Mateusz 5).',
        'Skupienie: "Błogosławieni ubodzy duchem."',
        'Błogosławieni = głęboka satysfakcja przez związek z Bogiem.',
        'Ubogi w duchu = postawa zależności, a nie materialna bieda.',
      ]}
      actionItems={[
        'Opublikuj transkrypcję na stronie kościoła',
        'Zrób 60-sekundowy klip do mediów społecznościowych',
        'Dołącz do tygodniowego przewodnika do studiów',
      ]}

      whyTitle="Dlaczego Mictoo do transkrypcji kazań"
      whyCards={[
        {
          icon: 'search',
          title: 'Przeszukiwalny archiwum kazań',
          desc: 'Publikuj transkrypcje na stronie kościoła. Członkowie znajdują nauczanie według tematu lub wersetu, miesiące lub lata później.',
        },
        {
          icon: 'sparkles',
          title: 'Notatki do studiów i przewodniki dla małych grup',
          desc: 'Podsumowanie AI jest punktem wyjścia do tygodniowego przewodnika do studiów lub pytań dyskusyjnych dla małych grup.',
        },
        {
          icon: 'clip',
          title: 'Napisy do powtórki livestreamu',
          desc: 'SRT dla wersji wideo na YouTube lub Facebooku. Dostępność dla osób z trudnościami w słyszeniu.',
        },
        {
          icon: 'globe',
          title: 'Tłumaczenie dla wielojęzycznych kongregacji',
          desc: 'Kazanie po angielsku, ale część kongregacji woli hiszpański lub koreański. Tłumaczenie jednym kliknięciem.',
        },
      ]}

      scenariosTitle="Typowe scenariusze kazań"
      scenarios={[
        { icon: 'church',    title: 'Niedzielna usługa' },
        { icon: 'book',      title: 'Studium biblijne' },
        { icon: 'chat',      title: 'Mała grupa' },
        { icon: 'sparkles',  title: 'Duchowe' },
        { icon: 'globe',     title: 'Misje' },
        { icon: 'headset',   title: 'Podcast' },
      ]}

      tipsTitle="Porady dotyczące nagrań kazań"
      tips={[
        'WAV lub M4A z dźwięku w kościele daje czystszy dźwięk niż mikrofon w pomieszczeniu.',
        'Dla długich usług powyżej 60 MB, zaloguj się, aby uzyskać automatyczny podział.',
        'Dla kongregacji z dużą ilością terminów biblijnych, przeglądaj kluczowe słowa.',
        'Uwzględnij tytuł kazania w nazwie pliku dla porządku archiwum.',
      ]}

      guidesTitle="Powiązane narzędzia"
      guides={[
        { href: '/pl/transcribe-mp3-to-text',    icon: 'file',  title: 'Format MP3',        desc: 'Eksport przyjazny dla podcastów' },
        { href: '/pl/wav-to-text',               icon: 'file',  title: 'Format WAV',        desc: 'Nagranie z dźwięku w kościele' },
        { href: '/pl/lecture-transcription',     icon: 'book',  title: 'Transkrypcja wykładów',   desc: 'Treści z dużą ilością nauczania' },
        { href: '/pl/free-srt-generator',        icon: 'file',  title: 'Napisy SRT',      desc: 'Powtórka livestreamu' },
      ]}

      faq={[
        {
          q: 'Czy mogę transkrybować nagranie z niedzielnego livestreamu?',
          a: 'Tak. Pobierz MP4 z YouTube Live, Facebook Live lub dostawcy streamingu kościoła i prześlij tutaj. Wideo jest automatycznie demuxowane po stronie serwera.',
        },
        {
          q: 'Czy Mictoo dokładnie obsługuje odniesienia biblijne i terminy teologiczne?',
          a: 'Whisper large-v3 dobrze radzi sobie z powszechnymi angielskimi terminami biblijnymi i teologicznymi. W przypadku nietypowych nazw własnych (starsze transliteracje, specyficzne terminy tłumaczeniowe), przeglądaj po transkrypcji.',
        },
        {
          q: 'Czy Mictoo jest darmowe dla kościołów?',
          a: 'Tak. Darmowe za plik do limitu rozmiaru. Brak specyficznej dla kościoła taryfy lub licencji.',
        },
        {
          q: 'Moje nagranie usługi ma ponad 60 MB. Co teraz?',
          a: 'Zaloguj się, aby uzyskać automatyczny podział (do około 3 godzin). Lub zmniejsz: ffmpeg -i service.mp3 -b:a 64k -ac 1 out.mp3. Ta sama dokładność, 3-5x mniejszy rozmiar.',
        },
        {
          q: 'Czy mogę uzyskać napisy do powtórki livestreamu?',
          a: 'Tak. Pobierz SRT lub VTT po transkrypcji. Znaczniki czasowe są zgodne z oryginalnym nagraniem dla YouTube, Facebooka lub twojego hostingu wideo.',
        },
        {
          q: 'Czy mogę przetłumaczyć kazanie dla zespołu misyjnego?',
          a: 'Tak. Wybierz język docelowy i kliknij Tłumacz. Przydatne dla wielojęzycznych kongregacji, misji i posługi w diasporze.',
        },
        {
          q: 'Czy nagrania są przechowywane na waszych serwerach?',
          a: 'Nie. Audio przesyłane jest do dostawcy transkrypcji, przetwarzane raz i usuwane. Tylko transkrypcja pozostaje na zalogowanych kontach.',
        },
      ]}

      ctaHeadline="Zmień każde kazanie w przeszukiwalny zasób"
      ctaSubtitle="Transkrypcja na stronę, napisy do powtórki, notatki do grup studenckich."
      ctaButton="Prześlij kazanie"

      relatedLinks={[
        { href: '/pl/lecture-transcription',     label: 'Transkrypcja wykładów' },
        { href: '/pl/podcast-transcription',     label: 'Transkrypcja podcastów' },
        { href: '/pl/webinar-transcription',     label: 'Transkrypcja webinarów' },
        { href: '/pl/free-srt-generator',        label: 'Darmowy generator SRT' },
        { href: '/pl/interview-transcription',   label: 'Transkrypcja wywiadów' },
      ]}
    />
  )
}