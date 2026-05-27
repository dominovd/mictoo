import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'ja': 'https://mictoo.com/ja/timestamped-transcription',
  'ko': 'https://mictoo.com/ko/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'Transkrypcja ze znacznikami czasu — darmowy generator | Mictoo',
  description:
    'Darmowa transkrypcja ze znacznikami czasu. Otrzymaj timecode na słowo lub zdanie dla dowolnego audio lub wideo. Idealne dla dziennikarstwa, badań, podcastingu, edycji wideo.',
  alternates: { canonical: 'https://mictoo.com/pl/timestamped-transcription', languages: LANGS },
}

export default function PlTimestampedPage() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="Timecode · Cytaty · Za darmo"
      h1={<>Transkrypcja ze znacznikami czasu<br /><span className="text-brand-600">Darmowe transkrypcje time-coded</span></>}
      subtitle="Precyzyjne timecodes dla każdej linii lub słowa w twoim audio. Wracaj do dokładnych momentów, cytuj konkretne fragmenty, buduj rozdziały. Za darmo, bez rejestracji."
      howItWorks={[
        { icon: '📂', title: 'Upuść plik', desc: 'MP3, M4A, MP4, WAV, FLAC, OGG, WEBM, AAC. Pracujemy z formatami audio i wideo.' },
        { icon: '⚡', title: 'AI transkrybuje i daje timecodes', desc: 'Whisper large-v3 generuje transkrypcję z timecodes co do milisekundy dla każdego segmentu (i opcjonalnie każdego słowa).' },
        { icon: '💾', title: 'Wybierz granularność i pobierz', desc: 'Wybierz timecode na zdanie (najczęstsze) lub na słowo (do precyzyjnej pracy alignment). Pobierz jako TXT z timecode inline, jako SRT dla workflow napisów, lub skopiuj do schowka.' },
      ]}
      whyUse={{ title: 'Dlaczego Mictoo do transkrypcji ze znacznikami czasu', bullets: [
        { title: 'Timecodes co do milisekundy', desc: 'Whisper produkuje timecodes z precyzją milisekundową. Bardziej precyzyjne niż dowolny popularny framerate wideo, więcej niż wystarczające dla pracy nad cytatami.' },
        { title: 'Na poziomie zdania domyślnie, na poziomie słowa, gdy potrzeba', desc: 'Poziom zdania utrzymuje transkrypcje czytelne. Poziom słowa to przesada dla notatek, ale niezbędne dla edycji wideo i alignment muzycznego.' },
        { title: 'Za darmo', desc: 'Bez licznika minut. Bez tier "timecodes kosztują więcej". Ta sama cena co czysta transkrypcja (darmowa).' },
        { title: 'Eksport SRT dla workflow wideo', desc: 'Timecodes w formacie SRT działają bezpośrednio w Premiere, DaVinci, CapCut i YouTube Studio jako ścieżki napisów.' },
        { title: 'Inline timecodes w TXT dla cytatów', desc: 'Czysty tekst z markerami [00:01:23] na początku każdego segmentu. Łatwo wklejać w notatki badawcze, posty na blog lub szkice dziennikarskie.' },
        { title: 'Żaden plik nie jest zapisywany', desc: 'Audio idzie do dostawcy transkrypcji i jest odrzucane. Nic nie pozostaje na naszych serwerach.' },
      ]}}
      useCases={{ title: 'Do czego ludzie używają transkrypcji ze znacznikami czasu', items: [
        { title: 'Dziennikarstwo i cytaty', desc: 'Cytujesz źródło z wywiadu? Postaw timecode obok cytatu w swoich notatkach. Gdy redakcja lub fact-checker pyta "gdzie dokładnie to powiedział", masz odpowiedź w dwie sekundy.' },
        { title: 'Markery rozdziałów dla podcastów', desc: 'Wygeneruj transkrypcję, przeskanuj pod kątem naturalnych przejść sekcji, skopiuj te timecodes do funkcji rozdziałów twojego hostingu podcastów. Nowoczesne playery pokazują rozdziały na pasku odtwarzania.' },
        { title: 'Surowe cięcia edycji wideo', desc: 'Weź transkrypcję, zaznacz linie, które chcesz zachować, znajdź je na timeline przez timecode. "Paper editing" jest znacznie szybsze niż przewijanie.' },
        { title: 'Badania akademickie i kodowanie jakościowe', desc: 'Badacze w NVivo, Atlas.ti lub MAXQDA tagują segmenty transkrypcji kodami. Timecodes pozwalają wracać do audio dla dokładnego momentu, gdy kodujesz niejednoznaczne fragmenty.' },
        { title: 'Wyrównanie muzyczne dla wideo sing-along', desc: 'Timecodes na słowo dla projektów typu karaoke lub lyric video. Każde słowo zapala się w dokładnym momencie, gdy jest śpiewane.' },
      ]}}
      proTips={{ title: 'Wskazówki do transkrypcji ze znacznikami czasu', tips: [
        { title: 'Timecodes na zdanie działają w 95% przypadków', desc: 'Chyba że robisz wyrównanie muzyczne lub podpisywanie wideo słowo-po-słowie, poziom zdania to to, czego chcesz. Bardziej czytelne, łatwiejsze do edycji.' },
        { title: 'Timecodes na słowo nadymają rozmiar pliku i złożoność', desc: 'SRT na słowo dla wykładu 30-minutowego ma tysiące wpisów. Używaj tylko, gdy naprawdę potrzebujesz precyzji na słowo.' },
        { title: 'Dla podcastów generuj markery rozdziałów z naturalnych przerw', desc: 'Szukaj w transkrypcji przejść tematycznych, zmian agendy lub przedstawień gości. Skopiuj te timecodes do twojego hostingu podcastów jako markery rozdziałów.' },
        { title: 'Dla dziennikarstwa zapisuj timecode z każdym cytatem, którego mógłbyś użyć', desc: 'Ty z przyszłości, 3 tygodnie później, nie zapamięta, z którego wywiadu pochodzi cytat, a tym bardziej gdzie w wywiadzie. Timecode rozwiązuje.' },
        { title: 'Timecodes SRT są zero-padded, TXT nie', desc: 'SRT używa 00:01:23,456. TXT zwykle używa [1:23]. Jeśli wklejasz w CMS oczekujący formatu, przekonwertuj przed wklejeniem.' },
        { title: 'Dla edycji wideo timecode w naszym SRT wyrównuje się do audio w oryginalnym pliku', desc: 'Jeśli reeksportujesz wideo z innym framerate, timecodes nadal pasują, bo są w czasie absolutnym (milisekundy), nie w klatkach.' },
        { title: 'Timecodes driftują przy słabym audio', desc: 'Jeśli Whisper halucynuje słowa podczas muzyki lub ciszy, timecodes tych słów-duchów są szacunkami. Timecodes prawdziwej mowy pozostają precyzyjne. Po prostu ufaj sekcjom mowy, ignoruj sekcje muzyczne.' },
      ]}}
      faq={[
        { q: 'Jaka jest różnica między timecodes na zdanie a na słowo?', a: 'Poziom zdania: jeden timecode na linię tekstu (zwykle zdanie). Poziom słowa: jeden timecode na słowo. Poziom zdania jest czytelny i dobry dla cytatów, podcastingu i większości pracy wideo. Poziom słowa jest do wyrównania muzycznego, wideo karaoke i animacji napisów słowo-po-słowie.' },
        { q: 'Jak dokładne są timecodes?', a: 'Whisper produkuje timecodes co do milisekundy. Pasują poprawnie przy dowolnym popularnym framerate wideo (24, 25, 29.97, 30, 50, 60 fps) bez offsetu.' },
        { q: 'Czy timecodes będą driftować w długim pliku?', a: 'Rzadko. Whisper wyrównuje timecodes do prawdziwego audio, więc pozostają precyzyjne nawet w plikach 60-minutowych. Sub-sekundowy drift może pojawić się w ostatnich segmentach bardzo długich plików. Jeśli zauważysz, dostosuj ręcznie.' },
        { q: 'Czy mogę dostać TXT z inline timecodes, jak [00:01:23] przed każdą linią?', a: 'Tak. Pobierz jako TXT i wstawimy timecodes na zdanie inline. Format: [00:01:23] tekst zdania tutaj.' },
        { q: 'Czy SRT zawiera timecodes?', a: 'Tak, to cały sens formatu SRT. Każdy wpis napisu ma timecode początku i końca.' },
        { q: 'Jak to wypada w porównaniu z auto-napisami YouTube z timecodes?', a: 'Auto-napisy YouTube mają timecodes, ale bez interpunkcji i niższej dokładności. Nasze mają pełną interpunkcję, lepszą dokładność i standardowy wyjście SRT, który działa w każdym edytorze wideo.' },
        { q: 'Czy mogę przeskoczyć z transkrypcji do konkretnego timecode w audio?', a: 'W naszym widoku wyniku kliknij dowolny timecode, aby ustawić player audio na ten moment. Po pobraniu potrzebujesz osobnego playera audio.' },
        { q: 'Czy timecodes będą działać w Premiere lub DaVinci Resolve?', a: 'Tak. Zaimportuj SRT na timeline. Napisy pojawiają się automatycznie w odpowiednich momentach.' },
        { q: 'Jakie języki są obsługiwane dla transkrypcji ze znacznikami czasu?', a: 'Te same ponad 50 języków co dla czystej transkrypcji. Timecodes pochodzą automatycznie z każdą transkrypcją, niezależnie od języka.' },
        { q: 'Czy audio jest zapisywane?', a: 'Nie. Plik jest strumieniowany do dostawcy transkrypcji i odrzucany po przetworzeniu.' },
        { q: 'Czy mogę użyć timecodes na słowo, aby zrobić wideo karaoke?', a: 'Tak, ale potrzebujesz oprogramowania wideo, które może renderować wyróżnienie słowo-po-słowie z formatu JSON lub SRT. Niektóre narzędzia (Premiere, After Effects, dedykowane oprogramowanie karaoke) obsługują to bezpośrednio.' },
        { q: 'Jak długo trwa generowanie transkrypcji ze znacznikami czasu?', a: 'Tak samo jak czysta transkrypcja, około 1-2% długości audio. Timecodes pochodzą automatycznie, bez dodatkowego czasu przetwarzania.' },
      ]}
      relatedLinks={[
        { href: '/pl/free-srt-generator', label: 'Generator SRT', desc: 'Te same timecodes, ukierunkowane na workflow napisów.' },
        { href: '/pl/podcast-transcription', label: 'Transkrypcja podcastu', desc: 'Timecodes dla show notes i markerów rozdziałów.' },
        { href: '/pl/interview-transcription', label: 'Transkrypcja wywiadu', desc: 'Timecodes dla cytatów i wyszukiwania źródeł.' },
        { href: '/pl/transcribe-audio-to-text', label: 'Audio na tekst', desc: 'Dla wyjścia tylko tekstu bez timecodes.' },
      ]}
    />
  )
}
