import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'ja': 'https://mictoo.com/ja/zoom-transcription',
  'ko': 'https://mictoo.com/ko/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Transkrypcja Zoom dla nagrań w chmurze i lokalnych | Mictoo',
  description:
    'Prześlij nagranie Zoom w formacie MP4/M4A z chmury lub lokalne i uzyskaj transkrypt z znacznikami czasowymi, podsumowanie AI oraz pliki eksportowe.',
  alternates: {
    canonical: 'https://mictoo.com/pl/zoom-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transkrypcja nagrań Zoom | Mictoo',
    description: 'Prześlij nagranie Zoom w formacie MP4/M4A i uzyskaj transkrypt, podsumowanie oraz pliki eksportowe.',
    url: 'https://mictoo.com/pl/zoom-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transkrypcja Zoom: Darmowa',
    description: 'Prześlij nagranie Zoom i uzyskaj transkrypt z znacznikami czasowymi.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlZoomTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pl"
      badge="Zoom · Chmura / Lokalny / M4A audio · Darmowe"
      h1First="Transkrypcja Zoom"
      h1Second="Nagrania w chmurze i lokalne na tekst"
      subtitle="Prześlij nagranie Zoom w formacie MP4, audio M4A lub lokalne nagranie. Uzyskaj transkrypt z znacznikami czasowymi, podsumowanie AI, tłumaczenie oraz pliki eksportowe w jednym procesie."
      currentHref="/pl/zoom-transcription"

      platforms={[
        { name: 'Cloud MP4',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF' },
        { name: 'M4A audio',    iconKey: 'mic',             brandBg: '#0EA5A4' },
        { name: 'Local MP4',    iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Google Meet',  iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/pl/google-meet-transcription' },
        { name: 'MS Teams',     iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/pl/teams-meeting-transcription' },
        { name: 'Meeting hub',  iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/pl/meeting-transcription' },
      ]}

      howItWorksTitle="Jak działa transkrypcja Zoom"
      steps={[
        {
          icon: 'folder',
          title: 'Pobierz z Zoom',
          desc: 'Chmura: zoom.us → Nagrania → pobierz MP4 lub wersję "Tylko audio (M4A)". Lokalnie: ~/Documents/Zoom/.',
        },
        {
          icon: 'upload',
          title: 'Upuść plik tutaj',
          desc: 'Audio M4A jest zazwyczaj znacznie mniejsze niż MP4 i unika przesyłania ścieżki wideo. Bezpłatnie do 25 MB anonimowo, 60 MB po zalogowaniu.',
        },
        {
          icon: 'editPen',
          title: 'Przejrzyj i eksportuj',
          desc: 'Czas przetwarzania zależy od długości, rozmiaru pliku i zapotrzebowania. Po zakończeniu, przejrzyj transkrypt i eksportuj podsumowanie, napisy lub podsumowanie DOCX.',
        },
      ]}

      exampleTitle="Przykład transkryptu spotkania Zoom"
      exampleFileName="zoom-cloud-recording.m4a"
      exampleDurationLabel="34:12"
      exampleLines={[
        { t: '0:00',  line: 'Dobrze, przepraszam za opóźnienie. Zoom nie chciał mnie wpuścić, dopóki nie zaktualizowałem. Zaczynajmy.' },
        { t: '0:10',  line: 'Dzisiaj przeglądamy opinie na temat prototypu z zeszłego tygodnia i decydujemy, co priorytetować w sprincie.' },
        { t: '0:22',  line: 'Ogólnie opinie były pozytywne. Dwunastu z piętnastu uczestników zrozumiało przebieg bez pomocy.' },
        { t: '0:33',  line: 'Trzech, którzy utknęli, napotkało ten sam problem na ekranie ustawień. Powinniśmy to naprawić jako pierwsze.' },
        { t: '0:45',  line: 'Zgoda. Mam już w toku poprawkę projektu. Powinna być gotowa do przeglądu do czwartku.' },
        { t: '0:56',  line: 'Po drugie, wszystkim podobał się nowy pusty stan, ale nikt nie znalazł przycisku importu. Jest zbyt głęboko ukryty.' },
        { t: '1:08',  line: 'Przenieśmy import do głównej akcji w pustym stanie. To zmiana jednego wiersza dla inżynierii.' },
      ]}
      summaryPoints={[
        'Opinie na temat prototypu: 12/15 ukończonych bez pomocy.',
        'Blokada: ekran ustawień zdezorientował 3/15 uczestników.',
        'Pusty stan dobrze przyjęty, ale przycisk importu trudno znaleźć.',
        'Poprawka projektu do czwartku.',
      ]}
      actionItems={[
        'Napraw ekran ustawień (poprawka projektu w czwartek)',
        'Promuj import do głównej akcji w pustym stanie',
        'Podziel się poprawionym prototypem na piątkowym spotkaniu',
      ]}

      whyTitle="Dlaczego warto używać Mictoo z nagraniem Zoom"
      whyCards={[
        {
          icon: 'target',
          title: 'Drugi transkrypt do przeglądu',
          desc: 'Użyj Mictoo, gdy chcesz dodatkowy transkrypt i tekst z znacznikami czasowymi do sprawdzania nazw, terminologii i kluczowych cytatów.',
        },
        {
          icon: 'lock',
          title: 'Przetwarza pobrane pliki',
          desc: 'Mictoo nie łączy się z Twoim kontem Zoom. Prześlij nagranie w chmurze lub lokalne, do którego już masz pozwolenie na użycie.',
        },
        {
          icon: 'gear',
          title: 'Działa również z nagraniem lokalnym',
          desc: 'Wbudowany transkrypt Zoom jest tylko w chmurze. Nagranie lokalne nie ma nic. Mictoo działa z oboma.',
        },
        {
          icon: 'sparkles',
          title: 'Podsumowanie + Tłumaczenie w zestawie',
          desc: 'Podsumowanie AI pojawia się obok transkryptu automatycznie. Tłumacz na 50+ języków jednym kliknięciem.',
        },
      ]}

      scenariosTitle="Typowe scenariusze Zoom"
      scenarios={[
        { icon: 'chat',      title: 'Rozmowa z klientem' },
        { icon: 'users',     title: 'Standup zespołu' },
        { icon: 'briefcase', title: 'Prezentacja sprzedaży' },
        { icon: 'search',    title: 'Wywiad z użytkownikiem' },
        { icon: 'book',      title: 'Webinar' },
        { icon: 'globe',     title: 'Rozmowa wielojęzyczna' },
      ]}

      tipsTitle="Porady dotyczące nagrań Zoom"
      tips={[
        'Pobierz wersję M4A "Tylko audio". Ta sama dokładność, 10x mniejsza.',
        'Limit nagrania w chmurze nie jest wykorzystywany na naszą transkrypcję (działamy zewnętrznie).',
        'Nagranie lokalne również działa. Sprawdź w ~/Documents/Zoom/.',
        'Dla długich rozmów powyżej 60 MB, zaloguj się, aby automatycznie podzielić.',
      ]}

      guidesTitle="Platformy spotkań z własnymi przewodnikami"
      guides={[
        { href: '/pl/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: 'Workspace + darmowe obejście' },
        { href: '/pl/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'Ścieżki OneDrive + SharePoint' },
        { href: '/pl/meeting-transcription',       icon: 'video', title: 'Meeting hub', desc: 'Każda platforma, jeden upload' },
        { href: '/pl/webinar-transcription',       icon: 'monitor', title: 'Webinary',  desc: 'Zoom Webinars, Demio, ON24' },
      ]}

      faq={[
        {
          q: 'Jakie typy nagrań Zoom działają?',
          a: 'Nagranie w chmurze MP4 (wideo), nagranie w chmurze M4A (tylko audio) oraz nagranie lokalne MP4. Również eksport chat.txt, jeśli chcesz dziennik czatu, chociaż nie transkrybujemy czatu.',
        },
        {
          q: 'Czy potrzebuję Zoom Pro lub wyżej?',
          a: 'Nie. Działa każde nagranie Zoom, w tym z lokalnego nagrania w darmowej wersji. Nagranie w chmurze Zoom wymaga Pro+, ale jeśli już masz plik, Mictoo nie interesuje się Twoim poziomem Zoom.',
        },
        {
          q: 'Moje nagranie w chmurze MP4 ma ponad 60 MB. Co teraz?',
          a: 'Jeśli Twoje nagranie zawiera pobranie "Tylko audio (M4A)", użyj go, aby uniknąć przesyłania ścieżki wideo. Dostępność i rozmiar pliku zależą od ustawień nagrania i długości.',
        },
        {
          q: 'Czy powinienem używać transkrypcji audio Zoom czy Mictoo?',
          a: 'Transkrypcja audio Zoom jest wygodna, gdy nagranie w chmurze i transkrypcja są włączone na Twoim koncie. Mictoo jest przydatne dla plików lokalnych, dodatkowych formatów eksportu, tłumaczenia lub tworzenia innego transkryptu do przeglądu. Dokładność różni się w zależności od nagrania.',
        },
        {
          q: 'Czy Mictoo identyfikuje mówców Zoom?',
          a: 'Nie. Obecny transkrypt to ciągły tekst z znacznikami czasowymi na każdą linię i bez automatycznych etykiet "Mówca 1 / Mówca 2".',
        },
        {
          q: 'Gdzie zapisuje się nagranie lokalne?',
          a: 'Domyślnie, ~/Documents/Zoom/ na Macu i %USERPROFILE%\\Documents\\Zoom\\ na Windows. Każde spotkanie ma własny folder z MP4 i osobnym audio.m4a.',
        },
        {
          q: 'Czy moje nagranie Zoom jest przechowywane na Waszych serwerach?',
          a: 'Nie. Plik przesyłany jest do dostawcy transkrypcji, przetwarzany raz i usuwany z pamięci. Tylko transkrypt utrzymuje się, jeśli się zalogujesz.',
        },
      ]}

      ctaHeadline="Przekształć nagrania Zoom w czysty tekst"
      ctaSubtitle="Cloud MP4 lub M4A, nagranie lokalne, dowolny poziom Zoom. Darmowe za plik."
      ctaButton="Prześlij nagranie Zoom"

      relatedLinks={[
        { href: '/pl/meeting-transcription',       label: 'Transkrypcja spotkań' },
        { href: '/pl/google-meet-transcription',   label: 'Transkrypcja Google Meet' },
        { href: '/pl/teams-meeting-transcription', label: 'Transkrypcja Teams' },
        { href: '/pl/webinar-transcription',       label: 'Transkrypcja webinarów' },
        { href: '/pl/interview-transcription',     label: 'Transkrypcja wywiadów' },
      ]}
    />
  )
}