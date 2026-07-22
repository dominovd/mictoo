import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3 na tekst: Darmowa transkrypcja MP3 online dla podcastów i nagrań głosowych | Mictoo',
  description:
    'Transkrybuj pliki audio MP3 z znacznikami czasowymi, podsumowaniem AI i eksportami. Optymalizowane dla podcastów, notatek głosowych i pobranych audio. Przeciągnij swoje MP3, a tekst otrzymasz w kilka sekund.',
  alternates: {
    canonical: 'https://mictoo.com/pl/transcribe-mp3-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'MP3 na tekst: Darmowa transkrypcja MP3 online | Mictoo',
    description: 'Przeciągnij swój podcast MP3 lub nagranie głosowe, a otrzymasz transkrypcję z podsumowaniem w kilka sekund.',
    url: 'https://mictoo.com/pl/transcribe-mp3-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 na tekst: Darmowa transkrypcja MP3 online',
    description: 'Przeciągnij swoje MP3, a otrzymasz transkrypcję.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PlTranscribeMp3ToTextPage() {
  return (
    <FormatPageLayout
      locale="pl"
      badge="MP3 · Przyjazny dla podcastów · Darmowy"
      h1First="MP3 na tekst"
      h1Second="Dla podcastów, notatek głosowych i wywiadów"
      subtitle="MP3 to powszechny format dla podcastów i nagrań głosowych. Przeciągnij swój odcinek, notatkę głosową lub pobrany wywiad i otrzymaj transkrypcję z znacznikami czasowymi, podsumowaniem AI i czystymi eksportami do notatek."
      highlightFormat="mp3"
      previewFileName="podcast-episode.mp3"
      previewWordCount={182}
      previewDurationLabel="28 minut 14 sekund"
      previewLines={[
        { t: '0:00',  line: 'Witamy ponownie w programie. Dziś rozmawiamy o stanie niezależnego podcastingu w 2026 roku.' },
        { t: '0:07',  line: 'Mój gość prowadzi cotygodniowy program od ośmiu lat, nie opuszczając żadnego odcinka.' },
        { t: '0:14',  line: 'Dziękuję za zaproszenie. To szalone, że zaczęliśmy to, gdy wszyscy mówili, że audio jest już nasycone.' },
        { t: '0:22',  line: 'Zacznijmy od tego. Co było inne w uruchomieniu podcastu w 2018 roku w porównaniu do teraz?' },
        { t: '0:30',  line: 'Dystrybucja była trudniejsza, ale publiczność była bardziej cierpliwa.' },
        { t: '0:37',  line: 'Dziś narzędzia są niesamowite, transkrypcja w kilka sekund, podsumowania AI do notatek, ale uwaga jest rzadsza.' },
        { t: '0:47',  line: 'To dobry wstęp. Jaki jest twój proces tworzenia notatek teraz, gdy transkrypty są praktycznie darmowe?' },
        { t: '0:55',  line: 'Eksportuję MP3, wrzucam do narzędzia do transkrypcji i używam podsumowania AI jako pierwszej wersji notatek.' },
      ]}
      whyTitle="Dlaczego Mictoo do transkrypcji MP3"
      whyCards={[
        {
          icon: 'mic',
          title: 'Stworzone dla podcastów i głosu',
          desc: 'MP3 to format, który sieci podcastowe dystrybuują, a aplikacje głosowe eksportują. Dostosowane do treści mówionej z znacznikami czasowymi gotowymi do notatek i napisów.',
        },
        {
          icon: 'gear',
          title: 'Akceptowane powszechne ustawienia MP3',
          desc: 'Stały lub zmienny bitrate, mono lub stereo. Czysta mowa ma największe znaczenie; bardzo niskie bitrate i słyszalne artefakty kompresji mogą obniżyć dokładność.',
        },
        {
          icon: 'sparkles',
          title: 'Podsumowanie AI do notatek',
          desc: 'Podsumowanie pojawia się obok transkryptu automatycznie. Solidny pierwszy szkic notatek odcinka, opisów i przyjaznych SEO podsumowań.',
        },
        {
          icon: 'globe',
          title: 'SRT, VTT i 50+ języków',
          desc: 'Eksportuj SRT lub VTT dla wersji odcinka wideo na YouTube. Tłumacz na hiszpański, francuski, niemiecki i 45+ innych języków jednym kliknięciem.',
        },
      ]}
      scenariosTitle="Kiedy MP3 na tekst to dobre rozwiązanie"
      scenarios={[
        {
          icon: 'mic',
          title: 'Notatki do podcastu',
          desc: 'Zrealizowałeś odcinek, przesłałeś go do swojego hosta. Przeciągnij to samo MP3 tutaj, aby uzyskać transkrypt i podsumowanie AI, które staną się notatkami do odcinka.',
        },
        {
          icon: 'layers',
          title: 'Archiwum podcastu',
          desc: 'Lata odcinków już opublikowanych bez transkryptów. Przetwarzaj je po jednym, aby uzupełnić archiwum i uczynić każdy odcinek wyszukiwalnym.',
        },
        {
          icon: 'editPen',
          title: 'Notatka głosowa do dokumentu',
          desc: 'Notatki głosowe nagrane na twoim telefonie (wiele aplikacji eksportuje MP3). Przekształć chaotyczne pomysły w wyszukiwalny, edytowalny tekst dla swojej aplikacji do notatek.',
        },
        {
          icon: 'clip',
          title: 'Pobrane wywiady',
          desc: 'Wywiad podcastowy, który chcesz zacytować w artykule, MP3 z konferencji, do którego chcesz się odwołać, pobrana wykład, który chcesz studiować.',
        },
        {
          icon: 'book',
          title: 'Rozdziały audiobooków',
          desc: 'Rozdział audiobooka MP3, który chcesz mieć jako tekst do notowania. Duże pliki audiobooków często przekraczają 60 MB i wymagają najpierw podziału.',
        },
        {
          icon: 'video',
          title: 'Audio YouTube na MP3',
          desc: 'Ekstraktory audio YouTube często generują MP3 dla kompatybilności. Przeciągnij wyodrębniony plik, aby uzyskać czysty transkrypt ze znacznikami czasowymi.',
        },
      ]}
      technicalTitle="Co ma znaczenie w MP3"
      technicalIntro="Ustawienia MP3 wpływają na rozmiar pliku i mogą wpływać na zrozumiałość w skrajnych przypadkach. Te szczegóły pomogą ci zdecydować, czy przesłać plik w oryginalnej formie, czy najpierw stworzyć mniejszą wersję głosową."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'Bitrate i klarowność',
          desc: 'Mowa przy umiarkowanym bitrate jest zazwyczaj odpowiednia. Ekstremalnie niski bitrate, przesterowanie lub silne artefakty mogą ukrywać spółgłoski i imiona.',
        },
        {
          icon: 'gear',
          title: 'CBR i VBR',
          desc: 'Zarówno pliki MP3 o stałym bitrate, jak i zmiennym bitrate mogą być przesyłane; znaczniki czasowe podążają za dekodowanym czasem audio.',
        },
        {
          icon: 'clip',
          title: 'Tagi ID3 pozostają oddzielne',
          desc: 'Artysta, tytuł, okładka i metadane rozdziałów nie są wstawiane do transkryptu. Zachowaj te metadane w swoim systemie publikacji.',
        },
        {
          icon: 'cloud',
          title: 'Długie odcinki',
          desc: 'Jeśli odcinek przekracza limit przesyłania, wyeksportuj mono wersję głosową przy niższym bitrate lub podziel go w naturalnym miejscu przerwy.',
        },
      ]}
      faq={[
        {
          q: 'Czy Mictoo transkrybuje każdy plik MP3?',
          a: 'Mictoo akceptuje powszechne pliki MP3 z stałym lub zmiennym bitrate, mono lub stereo audio. Uszkodzone pliki, nieobsługiwane warianty lub nagrania z poważnymi artefaktami kompresji mogą wymagać ponownego eksportu. Limit wynosi 60 MB przy zalogowaniu i 25 MB anonimowo.',
        },
        {
          q: 'Czy bitrate MP3 wpływa na jakość transkrypcji?',
          a: 'Klarowność nagrania ma większe znaczenie niż wysoki bitrate, ale bitrate nie jest bez znaczenia. Czyste nagranie głosu przy umiarkowanym bitrate jest zazwyczaj odpowiednie; agresywna kompresja, przesterowanie lub bardzo niski bitrate mogą usunąć szczegóły mowy i obniżyć dokładność.',
        },
        {
          q: 'Mój podcast MP3 ma ponad 60 MB. Co teraz?',
          a: 'Utwórz mniejszą mono wersję głosową za pomocą ffmpeg: ffmpeg -i podcast.mp3 -b:a 64k -ac 1 output.mp3. Sprawdź wynik pod kątem słyszalnych artefaktów przed przesłaniem lub podziel odcinek w naturalnym miejscu przerwy.',
        },
        {
          q: 'Czy mogę uzyskać podsumowanie AI odcinka?',
          a: 'Tak. Podsumowanie AI pojawia się obok transkryptu automatycznie po zakończeniu transkrypcji. To solidny pierwszy szkic notatek do podcastu, opisów odcinków i przyjaznych SEO podsumowań.',
        },
        {
          q: 'Czy mogę pobrać napisy SRT dla wersji YouTube?',
          a: 'Tak. Eksportuj jako SRT lub VTT po zakończeniu transkrypcji. Oba formaty zawierają znaczniki czasowe dostosowane do oryginalnego harmonogramu MP3. Wstaw do swojego przesyłania na YouTube lub edytora wideo dla napisów.',
        },
        {
          q: 'Czy Mictoo transkrybuje pliki MP3 w innych językach?',
          a: 'Tak. Whisper large-v3 obsługuje 50+ języków z automatycznym wykrywaniem. Dla krótkich MP3 lub treści w innych językach, ustaw język explicite w rozwijanym menu dla lepszego wykrywania przy pierwszym podejściu.',
        },
        {
          q: 'Czy mogę przetłumaczyć transkrypt na inny język?',
          a: 'Tak. Po zakończeniu transkrypcji wybierz docelowy język i kliknij Tłumacz. Tłumaczenie jest generowane przez GPT-4o-mini i pojawia się obok oryginalnego transkryptu.',
        },
        {
          q: 'Czy mój plik MP3 będzie zapisany na waszych serwerach?',
          a: 'Nie. MP3 jest przesyłane do dostawcy transkrypcji, przetwarzane raz i usuwane z pamięci. Nigdy nie zapisujemy audio na dysku. Transkrypt tekstowy jest przechowywany tylko wtedy, gdy się zalogujesz i zdecydujesz dodać go do swojej historii.',
        },
        {
          q: 'Czy metadane ID3 (artysta, tytuł, album) pojawią się w transkrypcie?',
          a: 'Nie. Transkrypt to czysty tekst bez metadanych MP3. Tagi ID3 są ignorowane podczas transkrypcji. Jeśli potrzebujesz transkryptu dopasowanego do metadanych odcinka, zachowaj to dopasowanie w swoim własnym systemie archiwizacji.',
        },
        {
          q: 'Jak długo trwa transkrypcja MP3?',
          a: 'Transkrypcja 30-minutowego podcastu MP3 zazwyczaj kończy się w 30-50 sekund. Większe pliki bliskie limitu przesyłania zajmują 60-90 sekund. Prędkość przesyłania jest często dłuższym krokiem w tym procesie.',
        },
      ]}
      ctaHeadline="Przeciągnij swoje MP3, pisz notatki szybciej"
      ctaSubtitle="Odcinek podcastu, notatka głosowa, pobrany wywiad, rozdział audiobooka. Otrzymaj tekst i podsumowanie w kilka sekund."
      ctaButton="Prześlij MP3 do transkrypcji"
    />
  )
}