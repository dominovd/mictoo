import LandingLayout from '@/components/LandingLayout'

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
  title: 'Transkrypcja Zoom — transkrybuj nagrania Zoom za darmo | Mictoo',
  description:
    'Darmowa transkrypcja Zoom. Prześlij swoje Cloud Recording (MP4) lub nagranie lokalne (M4A) i otrzymaj precyzyjną transkrypcję AI w kilka sekund. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/zoom-transcription', languages: LANGS },
}

export default function PlZoomPage() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="ZOOM · MP4 · M4A · ZA DARMO"
      h1={<>Transkrypcja Zoom<br /><span className="text-brand-600">Konwertuj nagrania Zoom na tekst</span></>}
      subtitle="Zamień swoje nagranie Zoom w czysty tekst. Cloud Recording MP4 lub lokalne M4A, oba działają. Upuść plik, otrzymaj transkrypcję w kilka sekund."
      howItWorks={[
        { icon: '🎬', title: 'Wyeksportuj nagranie Zoom', desc: 'Cloud Recordings pobierają się jako MP4 (wideo plus audio) lub M4A (tylko audio). Local Recording są zapisywane na twoim urządzeniu jako MP4 plus M4A. Oba formaty działają tutaj.' },
        { icon: '⚡', title: 'Upuść plik', desc: 'Przeciągnij. Wyciągamy audio (jeśli to wideo) i wysyłamy do Whisper large-v3. Spotkanie 30-minutowe jest zwykle gotowe w mniej niż minutę.' },
        { icon: '📋', title: 'Weź transkrypcję', desc: 'Przeczytaj, skopiuj lub pobierz jako TXT lub SRT. Popraw błędne nazwy lub terminy techniczne inline przed eksportem.' },
      ]}
      whyUse={{ title: 'Dlaczego Mictoo do nagrań Zoom', bullets: [
        { title: 'Działa na każdym planie Zoom, także darmowym', desc: 'Transkrypcja Zoom jest ograniczona do określonych planów płatnych. Nasza nie wymaga planu Zoom. Nagraj, pobierz, wgraj, gotowe.' },
        { title: 'Lepiej dla nienatywnego angielskiego i code-switching', desc: 'Whisper large-v3 radzi sobie z akcentami i spotkaniami dwujęzycznymi lepiej niż wbudowana transkrypcja Zoom, historycznie angielsko-first.' },
        { title: 'M4A tylko-audio jest na tyle mały dla bezpośredniego uploadu', desc: 'Większość 30-minutowych spotkań Zoom mieści się w 15-25 MB jako M4A. Komfortowo wchodzi w tier free bez kompresji.' },
        { title: 'Brak troski o 14-dniową retencję', desc: 'Cloud Recordings Zoom mogą zniknąć po 14-30 dniach zależnie od planu. Gdy pobrałeś plik i przetranskrybowałeś tutaj, należy do ciebie na zawsze.' },
        { title: 'Prywatność', desc: 'Plik jest strumieniowany do dostawcy transkrypcji i odrzucany. Nie zapisujemy nagrania Zoom w naszej bazie ani storage.' },
      ]}}
      useCases={{ title: 'Do czego ludzie transkrybują nagrania Zoom', items: [
        { title: 'Wewnętrzne protokoły spotkań', desc: 'Przepuść nagranie, weź tekst, wklej w Notion lub Confluence. Kto przegapił spotkanie, nadrabia w pięć minut czytania zamiast godziny wideo.' },
        { title: 'Calle z klientami i sprzedażowe', desc: 'Zapisz transkrypcję w CRM obok deala. Ty z przyszłości, sześć miesięcy później, podziękuje.' },
        { title: 'Asynchroniczne stand-upy dla rozproszonych zespołów', desc: 'Niektóre zespoły nagrywają asynchroniczne stand-upy zamiast robić spotkania na żywo. Transkrypcje czynią je przeszukiwalnymi i skanowanymi.' },
        { title: 'Wywiady badawcze', desc: 'Badania jakościowe, user interview, calle screeningowe kandydatów. To, co kodujesz i tagujesz, to tekst, nie wideo.' },
        { title: 'Transkrypcje webinarów i paneli', desc: 'Opublikuj transkrypcję obok nagrania dla dostępności i SEO. Wyszukiwarki indeksują tekst, nie wideo.' },
      ]}}
      proTips={{ title: 'Wskazówki do transkrypcji Zoom', tips: [
        { title: 'Pobierz M4A tylko-audio, nie MP4', desc: 'Cloud Recording Zoom oferuje oba. M4A to dziesiąta część rozmiaru MP4 przy identycznej jakości audio. Szybszy upload, daleko poniżej naszego limitu 60 MB dla większości spotkań.' },
        { title: 'Włącz "Record a separate audio file for each participant" dla spotkań wielomówcowych', desc: 'W ustawieniach Zoom, Recording. Daje to M4A na mówcę. Transkrybuj każdą osobno dla czystej atrybucji, bez potrzeby diaryzacji.' },
        { title: 'Wycisz uczestników, którzy nie mówią', desc: 'Szum tła z otwartych mikrofonów podczas prezentacji produkuje słowa-duchy w transkrypcji. W dużych callach warto to wymusić.' },
        { title: 'Lokalne nagrywanie i cloud mają tę samą jakość', desc: 'Oba nagrywają domyślnie z tymi samymi ustawieniami audio. Lokalne jest szybsze (bez uploadu do Zoom najpierw), ale wymaga miejsca na dysku.' },
        { title: 'Dla wrażliwych treści używaj lokalnego nagrywania', desc: 'Cloud Recording zapisuje twoje spotkanie na serwerach Zoom. Lokalne pozostaje na twoim urządzeniu, dopóki nie wybierzesz, dokąd idzie. Dla poufnych calli klientów lub HR lokalne + bezpośrednio do nas to droga zachowująca prywatność.' },
        { title: 'Długie spotkania Zoom (powyżej 60 minut) muszą być podzielone', desc: 'Nasz limit pliku to 60 minut z rejestracją. Dla calla 90-minutowego podziel na dwa kawałki po 45 minut. Łatwe w Audacity (File, Export, Multiple) lub z ffmpeg.' },
      ]}}
      faq={[
        { q: 'Czy Mictoo działa z Cloud Recordings Zoom?', a: 'Tak. Pobierz MP4 lub M4A z biblioteki nagrań Zoom, potem wgraj tutaj. Eksport M4A tylko-audio jest szybszy i mniejszy.' },
        { q: 'Czy działa z nagraniami Zoom Phone?', a: 'Tak. Zoom Phone nagrywa jako MP3 lub M4A. Oba działają. Audio jakości telefonicznej (8 kHz mono) transkrybuje się trochę mniej dokładnie niż audio spotkania wideo, ale wynik nadal jest czytelny.' },
        { q: 'A co z lokalnymi nagraniami Zoom?', a: 'Ta sama historia. Zoom zapisuje je jako MP4 plus M4A w twoim domyślnym folderze Zoom. Upuść M4A tutaj.' },
        { q: 'Czy dostanę etykiety mówców?', a: 'Nie automatycznie. Jeśli włączyłeś "Record a separate audio file for each participant" w ustawieniach Zoom, możesz transkrybować plik każdego mówcy osobno. W przeciwnym razie musisz dodać etykiety ręcznie w oparciu o przepływ rozmowy.' },
        { q: 'Moje nagranie Zoom przekracza 60 MB. Co teraz?', a: 'Użyj pobierania M4A tylko-audio zamiast MP4. Jeśli wciąż za duże, podziel na kawałki lub przekoduj z niższym bitrate. Zobacz nasze przewodniki kompresji i podziału.' },
        { q: 'Jak Mictoo wypada w porównaniu z wbudowaną transkrypcją Zoom?', a: 'Jesteśmy lepsi w nienatywnym angielskim, lepsi w akcentach i mamy szersze wsparcie języków (ponad 50). Wbudowana transkrypcja Zoom jest wygodniejsza, jeśli już płacisz odpowiedni plan Zoom. Nasza jest darmowa i działa niezależnie od twojego tier Zoom.' },
        { q: 'Czy moje nagranie Zoom jest zapisywane na waszych serwerach?', a: 'Nie. Plik jest strumieniowany do dostawcy transkrypcji (Groq, z OpenAI jako backup), transkrybowany i odrzucany. Nie zapisujemy nagrania na dysku.' },
        { q: 'Czy mogę transkrybować spotkanie Zoom w czasie rzeczywistym?', a: 'Nie. Pracujemy tylko z nagranymi plikami. Do czasu rzeczywistego podczas spotkania wbudowane narzędzie Zoom lub dedykowany meeting assistant byłyby właściwym wyborem.' },
        { q: 'A co z webinarami Zoom i dużymi spotkaniami?', a: 'Ten sam workflow. Pobierz nagranie, wgraj, transkrybuj. Dla bardzo długich webinarów (powyżej 60 minut) najpierw podziel.' },
        { q: 'Czy wiadomości czatu ze spotkania są transkrybowane?', a: 'Nie. Wiadomości czatu są zapisywane osobno przez Zoom (jako TXT w twoim folderze Zoom). Transkrybujemy tylko audio. Połącz oba sam, jeśli potrzebujesz obojga.' },
        { q: 'Jak dokładna jest transkrypcja audio Zoom?', a: 'Dla czystego audio spotkania z dobrymi mikrofonami: 90-95%. Dla spotkań ze słabym audio (mikrofon laptopa, hałaśliwy pokój, słaby WiFi) dokładność trochę spada. Nazwy i terminy techniczne często wymagają oczyszczenia.' },
        { q: 'Czy działa też dla nagrań Microsoft Teams lub Google Meet?', a: 'Tak, ten sam silnik. Mamy dedykowane strony dla Google Meet i Microsoft Teams.' },
      ]}
      relatedLinks={[
        { href: '/pl/google-meet-transcription', label: 'Transkrypcja Google Meet', desc: 'Ten sam workflow dla nagrań Google Meet.' },
        { href: '/pl/teams-meeting-transcription', label: 'Transkrypcja Teams', desc: 'Dla nagrań Microsoft Teams.' },
        { href: '/pl/meeting-transcription', label: 'Transkrypcja spotkań', desc: 'Ogólna strona, jeśli twoje nagranie pochodzi z innej platformy.' },
        { href: '/pl/interview-transcription', label: 'Transkrypcja wywiadu', desc: 'Dla rozmów jeden-na-jeden i wywiadów jakościowych.' },
      ]}
    />
  )
}
