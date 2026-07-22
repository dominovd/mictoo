import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube na tekst: transkrypcja, podsumowanie i SRT | Mictoo',
  description:
    'Wklej adres URL YouTube, aby skorzystać z dostępnych napisów lub prześlij audio, aby uzyskać nową transkrypcję z znacznikami czasowymi, podsumowaniem i eksportem SRT.',
  alternates: {
    canonical: 'https://mictoo.com/pl/youtube-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'YouTube na tekst: darmowa transkrypcja wideo YouTube | Mictoo',
    description: 'Wklej adres URL YouTube, uzyskaj czystą transkrypcję z znacznikami czasowymi, podsumowaniem i napisami SRT.',
    url: 'https://mictoo.com/pl/youtube-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube na tekst: darmowa transkrypcja YouTube',
    description: 'Wklej adres URL YouTube lub prześlij audio, uzyskaj transkrypcję.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlYouTubeToTextPage() {
  return (
    <UseCaseLayout
      locale="pl"
      badge="Adres URL YouTube lub przesyłanie · Darmowe · Bez rejestracji"
      h1First="YouTube na tekst"
      h1Second="Wklej adres URL, uzyskaj czystą transkrypcję"
      subtitle="Wklej link do YouTube, aby skorzystać z dostępnych napisów, lub prześlij audio, aby stworzyć nową transkrypcję Whisper. Przejrzyj tekst, wygeneruj podsumowanie i wyeksportuj napisy SRT."
      currentHref="/pl/youtube-to-text"
      enableYouTubeUrl

      platforms={[
        { name: 'YouTube',      iconKey: 'videoCameraFill', brandBg: '#FF0000' },
        { name: 'YouTube Live', iconKey: 'broadcast',       brandBg: '#B91C1C' },
        { name: 'YT Shorts',    iconKey: 'videoCameraFill', brandBg: '#DC2626' },
        { name: 'YT Music',     iconKey: 'soundwave',       brandBg: '#7F1D1D' },
        { name: 'YT Premium',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'Video hub',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/pl/transcribe-video-to-text' },
      ]}

      howItWorksTitle="Jak działa transkrypcja YouTube"
      steps={[
        {
          icon: 'folder',
          title: 'Wklej adres URL lub prześlij audio',
          desc: 'Szybka ścieżka: wklej link do YouTube, my pobieramy dostępne napisy. Ścieżka Whisper: prześlij audio do nowej transkrypcji.',
        },
        {
          icon: 'upload',
          title: 'Napisy lub nowa transkrypcja',
          desc: 'Ścieżka URL zwraca dostępne napisy. Ścieżka przesyłania uruchamia Whisper large-v3; czas przetwarzania zależy od długości i rozmiaru mediów.',
        },
        {
          icon: 'editPen',
          title: 'Podsumowanie, SRT, tłumaczenie',
          desc: 'Podsumowanie AI obok transkrypcji. Pobierz SRT dla wideo, przetłumacz na 50+ języków, wyeksportuj jako DOCX lub PDF.',
        },
      ]}

      exampleTitle="Przykład transkrypcji YouTube"
      exampleFileName="youtube-video.mp4"
      exampleDurationLabel="12:34"
      exampleLines={[
        { t: '0:00',  line: 'Witaj ponownie na kanale. Dziś przyjrzymy się trzem największym zmianom w analizie produktów w 2026 roku.' },
        { t: '0:12',  line: 'Zmiana pierwsza, odtwarzanie sesji to teraz standard. Każde poważne narzędzie ma to w podstawowej wersji.' },
        { t: '0:24',  line: 'Zmiana druga, szybka zmiana z niestandardowych pulpitów SQL na zapytania w języku naturalnym.' },
        { t: '0:37',  line: 'Zmiana trzecia, narzędzia natywne dla magazynów zastępują starą architekturę analityczną opartą na zdarzeniach.' },
        { t: '0:50',  line: 'Pozwól, że przeprowadzę cię przez to, co każda zmiana oznacza dla narzędzi, które powinieneś ocenić w tym roku.' },
        { t: '1:02',  line: 'Odtwarzanie sesji jako pierwsze. Jeśli twoje obecne narzędzie pobiera dodatkowe opłaty za to, to sygnał, aby poszukać innych opcji.' },
        { t: '1:14',  line: 'Nowoczesne narzędzia łączą odtwarzanie z wydarzeniami, lejkami i grupami jako jeden produkt, a nie płatny dodatek.' },
      ]}
      summaryPoints={[
        '3 największe zmiany w analizie produktów w 2026 roku.',
        'Odtwarzanie sesji to teraz standard w poważnych narzędziach.',
        'Przejście z pulpitów SQL na zapytania w języku naturalnym.',
        'Narzędzia natywne dla magazynów zastępują architektury oparte na zdarzeniach.',
      ]}
      actionItems={[
        'Oceń obecne narzędzie pod kątem zintegrowanego odtwarzania',
        'Wypróbuj 1 narzędzie analityczne natywne dla magazynów w tym kwartale',
        'Sporządź podsumowanie bloga dotyczące 3 zmian',
      ]}

      whyTitle="Dlaczego Mictoo do transkrypcji YouTube"
      whyCards={[
        {
          icon: 'target',
          title: 'Wybierz odpowiednią ścieżkę transkrypcji',
          desc: 'Skorzystaj z dostępnych napisów dla szybkości, lub prześlij audio, gdy chcesz nową transkrypcję do przeglądu pod kątem nazw, interpunkcji i terminów specjalistycznych.',
        },
        {
          icon: 'clip',
          title: 'SRT do opisu wideo',
          desc: 'Pobierz SRT i prześlij ponownie do YouTube Studio, aby uzyskać edytowane napisy, lub użyj w innym miejscu w swoim workflow.',
        },
        {
          icon: 'sparkles',
          title: 'Podsumowanie AI do notatek z odcinka',
          desc: 'Solidny pierwszy szkic do opisu wideo, podsumowania bloga i tytułów rozdziałów. Przekształć 60-minutowy podcast w 200 słów.',
        },
        {
          icon: 'globe',
          title: 'Tłumacz napisy na 50+ języków',
          desc: 'Międzynarodowa publiczność? Przetłumacz transkrypcję, a następnie prześlij jako przetłumaczone SRT do swojego wideo.',
        },
      ]}

      scenariosTitle="Typowe scenariusze YouTube"
      scenarios={[
        { icon: 'search',    title: 'Badanie wideo' },
        { icon: 'editPen',   title: 'Podsumowanie bloga' },
        { icon: 'clip',      title: 'Napisy SRT' },
        { icon: 'chat',      title: 'Cytat' },
        { icon: 'globe',     title: 'Tłumaczenie napisów' },
        { icon: 'headset',   title: 'Podcast na YT' },
      ]}

      tipsTitle="Porady dotyczące transkrypcji YouTube"
      tips={[
        'Naj szybsza ścieżka to adres URL, gdy wideo ma już napisy.',
        'Dla technicznych lub nieanglojęzycznych wideo, preferuj ścieżkę przesyłania audio.',
        'Bardzo długie transmisje: pobierz audio i podziel przed przesłaniem.',
        'Dla własnych wideo, prześlij źródłowe audio dla najlepszej dokładności.',
      ]}

      guidesTitle="Powiązane narzędzia"
      guides={[
        { href: '/pl/transcribe-video-to-text',      icon: 'video', title: 'Wideo na tekst',       desc: 'Nie-YouTube MP4, MOV, WebM' },
        { href: '/pl/transcribe-audio-to-text',      icon: 'file',  title: 'Audio na tekst',       desc: 'Dowolny format audio' },
        { href: '/pl/free-srt-generator',            icon: 'file',  title: 'Generator SRT',       desc: 'Eksport skoncentrowany na napisach' },
        { href: '/pl/how-to-download-youtube-video', icon: 'video', title: 'Pobierz z YT',    desc: 'Przewodnik: jak uzyskać audio' },
      ]}

      faq={[
        {
          q: 'Czy mogę po prostu wkleić adres URL YouTube?',
          a: 'Tak. Gdy wideo ma napisy (załadowane przez twórcę lub automatycznie wygenerowane), pobieramy je w kilka sekund. Jeśli nie ma napisów, prześlij plik audio zamiast tego, aby uzyskać pełną transkrypcję Whisper.',
        },
        {
          q: 'Jak różni się ścieżka przesyłania od napisów YouTube?',
          a: 'Ścieżka URL zwraca napisy już dostępne dla wideo. Ścieżka przesyłania tworzy osobną transkrypcję Whisper z audio. Obie wersje mogą zawierać błędy, więc sprawdź nazwy, liczby i czas przed publikacją.',
        },
        {
          q: 'Jak mogę wydobyć audio z wideo YouTube?',
          a: 'Użyj narzędzia przeglądarki lub ekstraktora na komputerze, a następnie prześlij MP3 lub M4A. Nie hostujemy narzędzia do pobierania z powodów praw autorskich, ale zobacz nasz przewodnik "Jak pobrać wideo z YouTube" dla typowych opcji.',
        },
        {
          q: 'Czy Mictoo transkrybuje nieanglojęzyczne wideo YouTube?',
          a: 'Tak. Whisper large-v3 obsługuje 50+ języków z automatycznym wykrywaniem. Dla krótkich klipów lub nietypowych akcentów, ustaw język jawnie w rozwijanym menu.',
        },
        {
          q: 'Czy mogę uzyskać podsumowanie AI wideo?',
          a: 'Tak. Podsumowanie AI pojawia się automatycznie obok transkrypcji. Solidny pierwszy szkic do opisu wideo, podsumowania bloga lub notatek z odcinka.',
        },
        {
          q: 'Czy mogę pobrać SRT, aby dodać napisy z powrotem do mojego wideo?',
          a: 'Tak. Pobierz SRT lub VTT po transkrypcji. Oba formaty działają z YouTube Studio, Premiere, DaVinci, Final Cut, CapCut i większością nowoczesnych odtwarzaczy.',
        },
        {
          q: 'Czy mogę przetłumaczyć transkrypcję YouTube?',
          a: 'Tak. Wybierz docelowy język i kliknij Tłumacz. Przydatne dla międzynarodowych odbiorców lub stron odtwarzania w języku obcym.',
        },
        {
          q: 'Czy moje dane YouTube są przechowywane na waszych serwerach?',
          a: 'Nie. Pobierane napisy i przesyłane audio są przetwarzane raz i usuwane. Tylko transkrypcja pozostaje, jeśli się zalogujesz i zapiszesz ją w historii.',
        },
      ]}

      ctaHeadline="Przekształć każde wideo YouTube w tekst"
      ctaSubtitle="Wklej adres URL dla szybkiej ścieżki, prześlij audio dla pełnej ścieżki Whisper. Darmowe za wideo."
      ctaButton="Wklej adres URL YouTube lub prześlij"

      relatedLinks={[
        { href: '/pl/transcribe-video-to-text', label: 'Wideo na tekst' },
        { href: '/pl/podcast-transcription',    label: 'Transkrypcja podcastu' },
        { href: '/pl/lecture-transcription',    label: 'Transkrypcja wykładu' },
        { href: '/pl/free-srt-generator',       label: 'Darmowy generator SRT' },
        { href: '/pl/webinar-transcription',    label: 'Transkrypcja webinaru' },
      ]}
    />
  )
}