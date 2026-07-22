import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'ja': 'https://mictoo.com/ja/webinar-transcription',
  'ko': 'https://mictoo.com/ko/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: 'Transkrypcja Webinarów z Podsumowaniem i Napisami | Mictoo',
  description:
    'Prześlij nagranie webinaru i otrzymaj tekst z czasami, podsumowanie AI oraz napisy SRT/VTT do powtórki.',
  alternates: {
    canonical: 'https://mictoo.com/pl/webinar-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transkrypcja Webinarów: Darmowa | Mictoo',
    description: 'Prześlij swoje nagranie webinaru, otrzymaj czystą transkrypcję.',
    url: 'https://mictoo.com/pl/webinar-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transkrypcja Webinarów',
    description: 'Darmowa transkrypcja dla każdej platformy webinarowej.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlWebinarTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pl"
      badge="Webinary · Długie formy · Darmowe"
      h1First="Transkrypcja Webinarów"
      h1Second="Darmowa transkrypcja dla każdego nagrania webinaru"
      subtitle="Prześlij z Zoom Webinars, StreamYard, Demio, ON24, GoToWebinar lub Restream. Otrzymaj pełną transkrypcję, podsumowanie AI i napisy gotowe do strony powtórkowej na żądanie."
      currentHref="/pl/webinar-transcription"

      platforms={[
        { name: 'Zoom Webinar', iconKey: 'broadcast',       brandBg: '#2D8CFF', href: '/pl/zoom-transcription' },
        { name: 'StreamYard',   iconKey: 'broadcast',       brandBg: '#6B21A8' },
        { name: 'Restream',     iconKey: 'broadcast',       brandBg: '#EC1E62' },
        { name: 'ON24',         iconKey: 'videoCameraFill', brandBg: '#3B82F6' },
        { name: 'Demio',        iconKey: 'videoCameraFill', brandBg: '#F97316' },
        { name: 'Livestorm',    iconKey: 'videoCameraFill', brandBg: '#DA1F5C' },
      ]}

      howItWorksTitle="Jak działa transkrypcja webinarów"
      steps={[
        {
          icon: 'folder',
          title: 'Eksportuj nagranie webinaru',
          desc: 'Większość platform oferuje pobranie MP4 po wydarzeniu. Niektóre oferują również audio w formacie M4A.',
        },
        {
          icon: 'upload',
          title: 'Upuść plik tutaj',
          desc: 'Długie webinary (ponad 60 minut) korzystają z automatycznego podziału po zalogowaniu. Do 25 MB anonimowo, 60 MB po zalogowaniu.',
        },
        {
          icon: 'editPen',
          title: 'Transkrypcja, podsumowanie, napisy',
          desc: 'Transkrypcja z czasami do strony powtórkowej, podsumowanie AI jako streszczenie bloga, SRT dla napisów w wideo na żądanie.',
        },
      ]}

      exampleTitle="Przykład transkrypcji webinaru"
      exampleFileName="product-launch-webinar.mp4"
      exampleDurationLabel="1:04:22"
      exampleLines={[
        { t: '0:00',  line: 'Witajcie wszyscy, dziękuję za dołączenie. Nazywam się Sam i kieruję marketingiem produktu w firmie.' },
        { t: '0:12',  line: 'Dziś oficjalnie uruchamiamy wersję piątą platformy i chcę przeprowadzić was przez nowości.' },
        { t: '0:25',  line: 'Trzy główne zmiany: przebudowane raportowanie, natywne integracje z dziesięcioma najlepszymi CRM-ami oraz nowy model cenowy.' },
        { t: '0:40',  line: 'Zacznę od raportowania, ponieważ to zmiana, o którą pytaliście przez dwa lata.' },
        { t: '0:52',  line: 'Stare raporty były wolne, psuły się przy dużych zbiorach danych i były trudne do dostosowania. Wszystkie trzy problemy zostały rozwiązane.' },
        { t: '1:07',  line: 'Oto na żywo demo nowego kreatora raportów. Zwróćcie uwagę, jak szybko aktualizują się podglądy.' },
        { t: '1:22',  line: 'Każde pole można przeciągać i upuszczać, filtry są stosowalne, a każdy raport można zapisać jako wspólny szablon.' },
      ]}
      summaryPoints={[
        'Uruchomienie wersji 5 z 3 głównymi zmianami.',
        'Przebudowane raportowanie (poprawia szybkość, rozmiar zbioru danych, dostosowanie).',
        'Natywne integracje z 10 najlepszymi CRM-ami.',
        'Nowy model cenowy.',
      ]}
      actionItems={[
        'Szkic podsumowania bloga z transkrypcji',
        'Wytnij klip demo do mediów społecznościowych',
        'Opublikuj napisy do powtórki na żądanie',
      ]}

      whyTitle="Dlaczego Mictoo do transkrypcji webinarów"
      whyCards={[
        {
          icon: 'clip',
          title: 'Napisy SRT do powtórki',
          desc: 'Czasy są zgodne z oryginalnym wideo. Wstaw SRT do swojego odtwarzacza powtórek na żądanie lub przesyłania na YouTube.',
        },
        {
          icon: 'sparkles',
          title: 'Podsumowanie AI do streszczenia bloga',
          desc: 'Przekształca 60-minutowy webinar w 200-słowne podsumowanie. Solidny pierwszy szkic do e-maila follow-up lub wpisu na blogu.',
        },
        {
          icon: 'search',
          title: 'Przeszukiwalna transkrypcja na stronie docelowej',
          desc: 'Opublikuj transkrypcję na stronie docelowej na żądanie. Uczestnicy mogą przeszukiwać, SEO rośnie, nikt nie musi oglądać 60 minut.',
        },
        {
          icon: 'globe',
          title: 'Tłumaczenie dla międzynarodowych uczestników',
          desc: 'Tłumaczenie jednym kliknięciem na 50+ języków do e-maili follow-up i stron powtórek w innych językach.',
        },
      ]}

      scenariosTitle="Typowe scenariusze webinarów"
      scenarios={[
        { icon: 'broadcast', title: 'Wprowadzenie produktu' },
        { icon: 'book',      title: 'Szkolenie / akademia' },
        { icon: 'briefcase', title: 'Wsparcie sprzedaży' },
        { icon: 'target',    title: 'Edukacja klientów' },
        { icon: 'users',     title: 'Briefing analityków' },
        { icon: 'globe',     title: 'Wydarzenie wielojęzyczne' },
      ]}

      tipsTitle="Wskazówki dotyczące nagrań webinarów"
      tips={[
        'Preferuj eksport audio tylko, gdy twoja platforma to oferuje.',
        'Dla webinarów powyżej 60 minut, zaloguj się, aby uzyskać automatyczny podział do 3 godzin.',
        'Dołącz nazwisko prowadzącego do pliku, aby nagłówek transkrypcji zachował kontekst.',
        'Wyciągnij kluczowe cytaty z transkrypcji do klipów społecznościowych.',
      ]}

      guidesTitle="Powiązane narzędzia"
      guides={[
        { href: '/pl/zoom-transcription',        icon: 'video', title: 'Zoom Webinar',      desc: 'Nagranie w chmurze MP4 / M4A' },
        { href: '/pl/free-srt-generator',        icon: 'file',  title: 'Generator SRT',     desc: 'Napisy do wideo na żądanie' },
        { href: '/pl/podcast-transcription',     icon: 'headset', title: 'Podcast',         desc: 'Wykorzystaj dźwięk webinaru' },
        { href: '/pl/timestamped-transcription', icon: 'file',  title: 'Transkrypcja z czasami', desc: 'Eksport przyjazny dla czytelnika' },
      ]}

      faq={[
        {
          q: 'Z jakimi platformami webinarowymi współpracuje Mictoo?',
          a: 'Z wszystkimi. Akceptujemy każdy plik audio lub wideo, niezależnie od platformy. Zoom Webinars, StreamYard, Demio, Livestorm, ON24, GoToWebinar, Restream, Riverside Studio i inne.',
        },
        {
          q: 'Moje nagranie webinaru ma ponad 60 MB. Co teraz?',
          a: 'Zaloguj się, aby uzyskać automatyczny podział (do około 3 godzin). Lub wyeksportuj tylko audio z platformy, albo wyodrębnij audio: ffmpeg -i webinar.mp4 -vn -ac 1 -ar 16000 audio.m4a.',
        },
        {
          q: 'Czy mogę opublikować transkrypcję na stronie powtórkowej na żądanie?',
          a: 'Tak. Skopiuj transkrypcję do HTML strony docelowej na żądanie. Dodaje przeszukiwalną treść, poprawia SEO, daje uczestnikom, którzy nie mogą oglądać, możliwość przeszukiwania.',
        },
        {
          q: 'Czy mogę uzyskać napisy do nagranego wideo webinaru?',
          a: 'Tak. Pobierz SRT lub VTT po transkrypcji. Oba działają z YouTube, Vimeo, Wistia, Descript i każdym nowoczesnym odtwarzaczem wideo.',
        },
        {
          q: 'Czy Mictoo identyfikuje prezenterów i mówców Q&A?',
          a: 'Nie. Obecna transkrypcja to ciągły tekst z czasami dla każdej linii i bez automatycznych etykiet mówców.',
        },
        {
          q: 'Czy mogę przetłumaczyć transkrypcję webinaru?',
          a: 'Tak. Wybierz docelowy język i kliknij Tłumacz. Przydatne dla międzynarodowych uczestników lub stron powtórek w innych językach.',
        },
        {
          q: 'Czy nagrania webinarów są przechowywane na waszych serwerach?',
          a: 'Nie. Plik jest przesyłany do dostawcy transkrypcji, przetwarzany raz i usuwany. Tylko transkrypcja pozostaje na kontach zalogowanych.',
        },
      ]}

      ctaHeadline="Przekształć swój webinar w gotowy do powtórki zasób"
      ctaSubtitle="Pełna transkrypcja, napisy SRT, podsumowanie AI i przeszukiwalna treść na stronie docelowej."
      ctaButton="Prześlij nagranie webinaru"

      relatedLinks={[
        { href: '/pl/meeting-transcription',   label: 'Transkrypcja Spotkań' },
        { href: '/pl/zoom-transcription',      label: 'Transkrypcja Zoom' },
        { href: '/pl/podcast-transcription',   label: 'Transkrypcja Podcastów' },
        { href: '/pl/lecture-transcription',   label: 'Transkrypcja Wykładów' },
        { href: '/pl/free-srt-generator',      label: 'Darmowy Generator SRT' },
      ]}
    />
  )
}