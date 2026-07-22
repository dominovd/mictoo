import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'pt': 'https://mictoo.com/pt/interview-transcription',
  'pl': 'https://mictoo.com/pl/interview-transcription',
  'ja': 'https://mictoo.com/ja/interview-transcription',
  'ko': 'https://mictoo.com/ko/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: 'Transkrypcja wywiadów dla audio i wideo | Mictoo',
  description:
    'Prześlij nagranie wywiadu i uzyskaj tekst z czasem, podsumowanie AI oraz eksporty do raportowania, badań lub przeglądów.',
  alternates: {
    canonical: 'https://mictoo.com/pl/interview-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Darmowe narzędzie do transkrypcji wywiadów | Mictoo',
    description: 'Darmowa transkrypcja wywiadów z AI. Prześlij audio lub wideo, uzyskaj czystą transkrypcję w kilka minut.',
    url: 'https://mictoo.com/pl/interview-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darmowa transkrypcja wywiadów',
    description: 'Prześlij audio lub wideo, uzyskaj czystą transkrypcję w kilka minut.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlInterviewTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pl"
      badge="Dziennikarze · Badacze · UX · Darmowe"
      h1First="Transkrypcja wywiadów"
      h1Second="Darmowe narzędzie dla dziennikarzy, badaczy i zespołów UX"
      subtitle="Prześlij wywiad 1:1 lub panelowy z dowolnego rejestratora lub aplikacji do spotkań. Uzyskaj czystą, opatrzoną czasem transkrypcję z podsumowaniem AI i eksportami gotowymi do artykułu, pracy naukowej lub repozytorium badawczego."
      currentHref="/pl/interview-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/pl/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/pl/google-meet-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/pl/teams-meeting-transcription' },
        { name: 'Riverside',   iconKey: 'waveMic',         brandBg: '#4B2AF7' },
        { name: 'Voice Memo',  iconKey: 'mic',             brandBg: '#F97316', href: '/pl/voice-memo-to-text' },
        { name: 'Phone call',  iconKey: 'phone',           brandBg: '#0EA5A4' },
      ]}

      howItWorksTitle="Jak działa transkrypcja wywiadów"
      steps={[
        {
          icon: 'folder',
          title: 'Eksportuj swój wywiad',
          desc: 'Każde nagranie się nada. Notatka głosowa, nagranie w chmurze Zoom, ścieżka audio Riverside, eksport rozmowy telefonicznej.',
        },
        {
          icon: 'upload',
          title: 'Przeciągnij plik tutaj',
          desc: 'Prześlij MP3, MP4, M4A, WAV, MOV lub dowolny popularny format audio i wideo do 60 MB.',
        },
        {
          icon: 'editPen',
          title: 'Transkrypcja, cytaty, eksporty',
          desc: 'Transkrypcja z czasem, podsumowanie AI, eksporty TXT / SRT / VTT / DOCX. Gotowe do artykułu lub pracy naukowej.',
        },
      ]}

      exampleTitle="Przykładowa transkrypcja wywiadu"
      exampleFileName="researcher-interview.m4a"
      exampleDurationLabel="42:18"
      exampleLines={[
        { t: '0:00',  line: 'Dziękuję za poświęcony czas. Czy mógłbyś zacząć od opisania swojej roli i jak długo w niej jesteś?' },
        { t: '0:08',  line: 'Pewnie. Kieruję zespołem analitycznym w średniej wielkości firmie fintech i jestem w tej roli od nieco ponad dwóch lat.' },
        { t: '0:20',  line: 'Wcześniej byłem w większym banku, głównie pracując nad utrzymywaniem klientów i modelowaniem wartości życiowej.' },
        { t: '0:32',  line: 'Przejście z dużego banku do fintechu dotyczyło głównie tempa i swobody próbowania nowych rzeczy.' },
        { t: '0:44',  line: 'I narzędzia bardzo się rozwinęły. To, co kiedyś zajmowało tydzień w starym stosie, teraz zajmuje popołudnie.' },
        { t: '0:56',  line: 'Czy możesz podać przykład tego rodzaju zmiany? Coś konkretnego, czego wcześniej byś nie spróbował.' },
        { t: '1:04',  line: 'Oczywistym przykładem są eksperymenty kohortowe w czasie rzeczywistym. Wprowadzamy pomysł rano i widzimy znaczące dane do wieczora.' },
      ]}
      summaryPoints={[
        'Lider analityki w fintechu, ponad 2 lata w roli.',
        'Poprzednia rola w dużym banku skoncentrowana na modelowaniu utrzymania.',
        'Przejście do fintechu napędzane tempem i swobodą eksperymentów.',
        'Eksperymenty kohortowe w czasie rzeczywistym możliwe dzięki nowoczesnym narzędziom.',
      ]}
      actionItems={[
        'Dopytać o porównanie modelowania utrzymania',
        'Poprosić o przykład eksperymentu kohortowego w czasie rzeczywistym',
        'Uzyskać kontakt do byłego pracodawcy',
      ]}

      whyTitle="Dlaczego Mictoo do transkrypcji wywiadów"
      whyCards={[
        {
          icon: 'target',
          title: 'Sprawdź imiona i nazwy własne',
          desc: 'Użyj znaczników czasowych, aby sprawdzić imiona, miasta, organizacje i terminy specjalistyczne w odniesieniu do oryginalnego nagrania wywiadu.',
        },
        {
          icon: 'sparkles',
          title: 'Podsumowanie AI i ekstrakcja cytatów',
          desc: 'Podsumowanie AI to solidny pierwszy szkic listy cytatów, notatki badawczej lub wprowadzenia do artykułu.',
        },
        {
          icon: 'lock',
          title: 'Przejrzysty model przetwarzania',
          desc: 'Nagranie jest wysyłane do dostawcy transkrypcji do przetworzenia i nie jest przechowywane przez Mictoo po zakończeniu pracy.',
        },
        {
          icon: 'globe',
          title: 'Tłumacz dla pracy w różnych językach',
          desc: 'Wywiad przeprowadzony w języku hiszpańskim, niemieckim lub japońskim. Przetłumacz na swój język roboczy jednym kliknięciem.',
        },
      ]}

      scenariosTitle="Typowe scenariusze wywiadów"
      scenarios={[
        { icon: 'chat',      title: 'Dziennikarstwo' },
        { icon: 'search',    title: 'Badania UX' },
        { icon: 'users',     title: 'Rekrutacja' },
        { icon: 'book',      title: 'Historia oralna' },
        { icon: 'briefcase', title: 'Depozycja prawna' },
        { icon: 'globe',     title: 'Wielojęzyczne' },
      ]}

      tipsTitle="Wskazówki dla czystszych transkrypcji wywiadów"
      tips={[
        'Nagrywaj z mikrofonem przypinanym lub ręcznym blisko tematu.',
        'Poproś temat o krótką przerwę między długimi odpowiedziami.',
        'Wyraźnie ustaw język dla nagrań w języku obcym lub z silnymi akcentami.',
        'Sprawdź imiona i nietypowe terminy po transkrypcji.',
      ]}

      guidesTitle="Wybierz odpowiedni przewodnik po rejestratorach"
      guides={[
        { href: '/pl/zoom-transcription',        icon: 'video', title: 'Wywiad Zoom',    desc: 'Nagranie w chmurze MP4 lub M4A' },
        { href: '/pl/google-meet-transcription', icon: 'video', title: 'Wywiad Meet',    desc: 'Pobierz nagranie z Dysku' },
        { href: '/pl/voice-memo-to-text',        icon: 'mic',   title: 'Notatka głosowa iPhone', desc: 'Każde nagranie głosowe M4A' },
        { href: '/pl/podcast-transcription',     icon: 'headset', title: 'Styl podcastu',   desc: 'Riverside, Zencastr, Cleanfeed' },
      ]}

      faq={[
        {
          q: 'Jakie formaty plików akceptuje Mictoo dla wywiadów?',
          a: 'MP3, MP4, M4A, WAV, MOV, WEBM, FLAC, OGG, AAC i większość innych popularnych formatów audio i wideo. Pliki wideo są automatycznie demuxowane po stronie serwera.',
        },
        {
          q: 'Czy Mictoo identyfikuje, kto mówi?',
          a: 'Nie. Obecna transkrypcja to ciągły tekst z znacznikami czasowymi dla każdej linii i bez automatycznych etykiet "Interviewer / Subject".',
        },
        {
          q: 'Czy transkrypcja wywiadów jest darmowa?',
          a: 'Tak. Darmowa dla plików do 25 MB anonimowo, 60 MB po zalogowaniu. Dłuższe wywiady mogą być automatycznie dzielone dla zalogowanych użytkowników.',
        },
        {
          q: 'Czy mogę usunąć imiona przed opublikowaniem transkrypcji?',
          a: 'Tak. Przełącz się na tryb edytora po transkrypcji, aby edytować dowolne słowo lub linię. Zapisz edytowaną wersję i eksportuj.',
        },
        {
          q: 'Czy nagrania są przechowywane na waszych serwerach?',
          a: 'Nie. Strumienie audio są wysyłane do dostawcy transkrypcji, przetwarzane raz i usuwane. Transkrypcje są przechowywane tylko, jeśli się zalogujesz.',
        },
        {
          q: 'Czy mogę przetłumaczyć transkrypcję wywiadu?',
          a: 'Tak. Wybierz język docelowy i kliknij Tłumacz. Przydatne do badań terenowych w różnych językach lub wielojęzycznego raportowania.',
        },
        {
          q: 'Jakie formaty eksportu są dostępne?',
          a: 'TXT, SRT, VTT, DOCX. Zalogowani użytkownicy mają również PDF i JSON. Znaczniki czasowe w SRT i VTT są zgodne z oryginalnym nagraniem.',
        },
      ]}

      ctaHeadline="Przekształć wywiady w tekst do publikacji"
      ctaSubtitle="Przeciągnij swoje nagranie i uzyskaj transkrypcję, podsumowanie oraz eksporty gotowe do artykułu lub repozytorium badawczego."
      ctaButton="Prześlij wywiad"

      relatedLinks={[
        { href: '/pl/meeting-transcription',      label: 'Transkrypcja spotkań' },
        { href: '/pl/podcast-transcription',      label: 'Transkrypcja podcastów' },
        { href: '/pl/voice-memo-to-text',         label: 'Notatka głosowa na tekst' },
        { href: '/pl/business-transcription',     label: 'Transkrypcja biznesowa' },
        { href: '/pl/lecture-transcription',      label: 'Transkrypcja wykładów' },
      ]}
    />
  )
}