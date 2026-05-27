import LandingLayout from '@/components/LandingLayout'

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
  title: 'Transkrypcja wywiadu — darmowy generator AI | Mictoo',
  description:
    'Darmowa transkrypcja wywiadu z AI. Prześlij swoje nagranie (MP3, M4A, MP4, WAV) i otrzymaj czystą transkrypcję z timecode w kilka sekund. Zbudowane dla dziennikarzy i badaczy.',
  alternates: { canonical: 'https://mictoo.com/pl/interview-transcription', languages: LANGS },
}

export default function PlInterviewPage() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="Dziennikarstwo · Badania · Za darmo"
      h1={<>Transkrypcja wywiadu<br /><span className="text-brand-600">Darmowe transkrypcje wywiadów</span></>}
      subtitle="Zamień każde nagranie wywiadu w czysty, cytowalny tekst. Dla dziennikarzy, badaczy, podcasterów, zespołów rekrutacyjnych. Bez rejestracji, bez opłaty za minutę, bez emaila."
      howItWorks={[
        { icon: '🎙️', title: 'Upuść audio wywiadu', desc: 'MP3 z dyktafonu, M4A z telefonu, MP4 z rozmowy wideo, WAV z rejestratora terenowego. Wszystko działa.' },
        { icon: '⚡', title: 'AI transkrybuje', desc: 'Whisper large-v3 czyta audio. Wywiad 30-minutowy jest zwykle gotowy w około minutę.' },
        { icon: '📋', title: 'Czytaj, edytuj, eksportuj', desc: 'Przewijaj transkrypcję z timecode. Popraw błędne nazwiska lub żargon inline. Pobierz jako TXT do notatek, SRT dla wideo lub skopiuj do oprogramowania do kodowania.' },
      ]}
      whyUse={{ title: 'Dlaczego Mictoo do transkrypcji wywiadu', bullets: [
        { title: 'Whisper dobrze radzi sobie z wywiadami', desc: 'Pojedyncze nagrania z dwoma głosami i czystą wymianą to najczystszy przypadek dla rozpoznawania mowy. Większość wywiadów osiąga 90-95% dokładności w pierwszym przejściu.' },
        { title: 'Timecode dla cytatów i wyszukiwania źródeł', desc: 'Każda linia w eksporcie SRT ma timecode. Gdy musisz zweryfikować cytat lub wrócić do dokładnego momentu w nagraniu, timecode mówi dokładnie gdzie.' },
        { title: 'Bez kosztu za wywiad', desc: 'Niektóre serwisy transkrypcji liczą za minutę lub za wywiad. My nie. Transkrybuj jeden lub pięćdziesiąt, cena ta sama (darmowa).' },
        { title: 'Ponad 50 języków, także wywiady dwujęzyczne', desc: 'Wywiady międzyjęzykowe są częste w badaniach i dziennikarstwie. Whisper radzi sobie z code-switching lepiej niż większość serwisów.' },
        { title: 'Prywatność i ochrona źródeł', desc: 'Plik jest strumieniowany do dostawcy transkrypcji i odrzucany. Nie przechowujemy audio. Dla wrażliwego materiału źródłowego to ma znaczenie.' },
      ]}}
      useCases={{ title: 'Kto używa transkrypcji wywiadu', items: [
        { title: 'Dziennikarstwo i pisanie feature', desc: 'Reporterzy transkrybują wywiady, aby precyzyjnie cytować i przeglądać długie rozmowy w poszukiwaniu najbardziej użytecznego materiału. Wywiad 60-minutowy często staje się 3-5 kluczowymi cytatami w opublikowanym tekście.' },
        { title: 'Badania jakościowe i studia akademickie', desc: 'Badacze transkrybują wywiady półustrukturyzowane, aby kodować i analizować w narzędziach jak NVivo, Atlas.ti lub MAXQDA. Transkrypcja to dataset.' },
        { title: 'Wywiady podcastowe', desc: 'Hosty transkrybują wywiady z gośćmi do show notes, postów blogowych odcinka i grafik cytatów na social. Audio dociera do jednej publiczności, tekst do innej przez wyszukiwarkę.' },
        { title: 'Rekrutacja i screening kandydatów', desc: 'Rekruterzy i hiring managerowie transkrybują wywiady, aby udostępniać zespołowi. Łatwiejsze niż wideo dla recenzentów w różnych strefach. Łatwiej porównać notatki, gdy wszyscy mają ten sam tekst.' },
        { title: 'User research i customer interview', desc: 'Zespoły produktowe transkrybują rozmowy z klientami, aby znaleźć wzorce. Transkrypcja trafia do research repository (Dovetail, Marvin lub współdzielony Notion).' },
      ]}}
      proTips={{ title: 'Wskazówki do transkrypcji wywiadów', tips: [
        { title: 'Użyj prawdziwego mikrofonu, nawet do wywiadu telefonicznego', desc: 'Lavalier lub USB dla osoby na miejscu i porządne słuchawki dla wywiadującego przez telefon. Jakość nagrania to największy pojedynczy czynnik dokładności transkrypcji.' },
        { title: 'Nagrywaj w cichym miejscu', desc: 'Wywiady w kawiarni wyglądają świetnie na kamerze i kiepsko transkrybują. Muzyka tła i pogwarki szkodzą dokładności bardziej, niż ludzie myślą.' },
        { title: 'Dla wywiadów na dwa głosy najpierw transkrybuj całe nagranie, potem ręcznie dodaj etykiety mówców', desc: 'Whisper nie robi diaryzacji. Dla czystego wywiadu pytanie-odpowiedź dodanie "Rozmówca:" i "Źródło:" zajmuje około 5 minut na każde 30 minut wywiadu.' },
        { title: 'Jeśli masz osobne ścieżki audio (Riverside, SquadCast), transkrybuj każdą osobno', desc: 'Wtedy dostajesz czystą atrybucję bez zgadywania. Niektóre rejestratory badawcze przechwytują dwa mikrofony w dwóch kanałach jednego pliku stereo. Możesz podzielić na dwa pliki mono wcześniej.' },
        { title: 'Zapisz transkrypcję z datą i nazwiskiem źródła', desc: 'Plik transkrypcji nazwany 2026-05-25-jan-kowalski.txt jest łatwiejszy do znalezienia sześć miesięcy później niż transcript-final-v2.txt.' },
        { title: 'Edytuj pierwsze 50 linii pod kątem dokładności, resztę zostaw', desc: 'Ludzie skanują transkrypcje. Początek liczy się najbardziej. Powyżej koryguj tylko cytaty, których planujesz użyć.' },
        { title: 'Ustaw język ręcznie, jeśli wywiad nie jest po angielsku', desc: 'Auto-wykrywanie działa w większości plików, ale 5-sekundowy fałszywy start na początku może je zmylić. Wybór języka wyraźnie jest bardziej niezawodny.' },
      ]}}
      faq={[
        { q: 'Czy to wystarczająco dokładne dla cytatów dziennikarskich?', a: 'Dla cytowania dosłownego zawsze powinieneś weryfikować z audio. Whisper trafia 90-95% słów na czystym audio wywiadu. 5-10%, które myli, często obejmuje nazwiska, terminy techniczne i nakładającą się mowę. Użyj timecode SRT, aby wrócić do nagrania dla każdego cytatu, który publikujesz.' },
        { q: 'Czy dostanę etykiety mówców?', a: 'Nie automatycznie. Dodajesz je w oparciu o przepływ rozmowy. Dla wywiadu na 2 mówców jest to szybkie. Dla paneli lub focus groups planuj więcej czasu lub wgrywaj ścieżkę każdego mówcy osobno, jeśli je masz.' },
        { q: 'Czy mogę transkrybować wywiad w innym języku?', a: 'Tak, ponad 50 języków z auto-wykrywaniem. Dla wywiadów poniżej 5 minut lub wywiadów nieangielskich zaczynających się od small talk po angielsku wybierz język ręcznie.' },
        { q: 'Mój wywiad ma 90 minut. Co robić?', a: 'Podziel na kawałki poniżej naszego cap 60-minutowego. Naturalna przerwa jest tam, gdzie rozmowa zatrzymuje się (kawa w środku wywiadu, zmiana tematu).' },
        { q: 'Jak dokładne są terminy techniczne i nazwy własne?', a: 'Mniej dokładne niż popularne słownictwo. Whisper nie zna nazwy firmy twojego źródła, terminu medycznego, którego użył, ani konkretnego oprogramowania, do którego się odwołał. Spodziewaj się ręcznego poprawiania. Reszta transkrypcji będzie solidna.' },
        { q: 'Czy audio jest zapisywane?', a: 'Nie. Plik jest strumieniowany do dostawcy transkrypcji (Groq, z OpenAI jako backup), przetwarzany, potem odrzucany. Nie zatrzymujemy audio na naszych serwerach.' },
        { q: 'Czy to jest zgodne z politykami etyki badań?', a: 'Większość protokołów badawczych zatwierdzonych przez IRB wymaga wiedzy, gdzie audio jest przetwarzane. Nasi dostawcy przetwarzają w USA. Nie zatrzymujemy. Dla konkretnego compliance IRB udokumentuj workflow i sprawdź ze swoim IRB.' },
        { q: 'Czy mogę zaimportować transkrypcję do NVivo, Atlas.ti lub Dedoose?', a: 'Tak. Pobierz jako TXT i zaimportuj do swojego narzędzia analizy jakościowej. Transkrypcja to czysty tekst, bez specjalnego formatu.' },
        { q: 'Jak długo trwa transkrypcja?', a: 'Około 1-2% długości audio. Wywiad 30-minutowy kończy się w około 60 sekund.' },
        { q: 'Co jeśli wywiad ma kiepską jakość audio?', a: 'Przepuść najpierw przez narzędzie denoise (Audacity Noise Reduction lub Adobe Podcast Enhance). Potem wgraj czystą wersję. Lepszy input daje zauważalnie lepszy output.' },
        { q: 'Czy mogę transkrybować wywiad nagrany na telefonie?', a: 'Tak. iPhone Voice Memos zapisuje jako M4A, dyktafony Android zwykle jako M4A lub MP3. Oba działają. AirDrop lub email plik na komputer, potem wgraj tutaj.' },
        { q: 'Czy timecode w SRT będą dokładnie pasować do oryginalnego nagrania?', a: 'Tak, do milisekundy. Timecode SRT odzwierciedlają rzeczywisty czas w pliku audio. Działają, aby wrócić do konkretnego momentu w dowolnym playerze audio lub wideo.' },
      ]}
      relatedLinks={[
        { href: '/pl/podcast-transcription', label: 'Transkrypcja podcastu', desc: 'Dla wywiadów podcastowych i rozmów host.' },
        { href: '/pl/timestamped-transcription', label: 'Transkrypcja ze znacznikami czasu', desc: 'Dla timecode na słowo lub zdanie.' },
        { href: '/pl/voice-memo-to-text', label: 'Notatka głosowa na tekst', desc: 'Dla wywiadów nagranych na telefonie.' },
        { href: '/pl/business-transcription', label: 'Transkrypcja business', desc: 'Dla calli sprzedażowych, customer calls, focus groups.' },
      ]}
    />
  )
}
