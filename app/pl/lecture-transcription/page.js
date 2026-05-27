import LandingLayout from '@/components/LandingLayout'

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
  title: 'Transkrypcja wykładu — darmowy generator AI | Mictoo',
  description:
    'Darmowa transkrypcja wykładów. Prześlij nagranie wykładu, kursu lub seminarium (MP3, M4A, MP4) i otrzymaj czysty tekst w kilka sekund. Zbudowane dla studentów.',
  alternates: { canonical: 'https://mictoo.com/pl/lecture-transcription', languages: LANGS },
}

export default function PlLecturePage() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="Studenci · Akademicy · Za darmo"
      h1={<>Transkrypcja wykładu<br /><span className="text-brand-600">Darmowe narzędzie do transkrypcji wykładów</span></>}
      subtitle="Zamień każdy nagrany wykład w czysty tekst do nauki. Uniwersytet, kurs online, talk konferencyjny, szkolenie zawodowe. Bez rejestracji, bez opłaty za minutę."
      howItWorks={[
        { icon: '🎓', title: 'Upuść audio lub wideo wykładu', desc: 'MP3 z dyktafonu, M4A z telefonu, MP4 z wykładu Zoom lub nagrania ekranu wykładu online. WAV z rejestratora terenowego. Wszystko działa.' },
        { icon: '⚡', title: 'AI transkrybuje', desc: 'Whisper large-v3 czyta audio. Wykład 60-minutowy kończy się w około minutę.' },
        { icon: '📋', title: 'Weź transkrypcję', desc: 'Czytaj, skopiuj do swoich notatek lub pobierz jako TXT lub SRT. Popraw błędne terminy techniczne inline przed eksportem.' },
      ]}
      whyUse={{ title: 'Dlaczego Mictoo do wykładów', bullets: [
        { title: 'Długi format jest ok', desc: 'Do 60 minut na plik po darmowej rejestracji. Dla wykładu 90-minutowego podziel na dwa kawałki po 45 minut. Transkrypcja jest składalna.' },
        { title: 'Radzi sobie ze słownictwem technicznym lepiej niż większość', desc: 'Whisper został wytrenowany na ogromnej różnorodności audio, włącznie z wykładami akademickimi. Łacina, żargon specjalistyczny, terminy matematyczne, fragmenty kodu często wychodzą czyściej, niż się spodziewasz.' },
        { title: 'Bez kosztu za wykład', desc: 'Dla studenta płacenie za transkrypcję na kurs to marnotrawstwo. Za darmo bez licznika minut oznacza, że możesz transkrybować każdy wykład w semestrze.' },
        { title: 'Prywatność i copyright', desc: 'Plik jest strumieniowany do dostawcy transkrypcji i odrzucany. Nie przechowujemy audio. Przydatne, gdy transkrybujesz materiał, który jest twój (twoje nagrania), ale nie chcesz wgrywać do serwisu storage strony trzeciej.' },
        { title: 'Ponad 50 języków', desc: 'Międzynarodowi studenci i kursy online w językach innych niż angielski wszystkie działają. Auto-wykrywanie pokrywa większość przypadków.' },
      ]}}
      useCases={{ title: 'Do czego studenci i akademicy używają transkrypcji wykładu', items: [
        { title: 'Przeszukiwalne notatki do nauki', desc: 'Wklej transkrypcję w Notion, Obsidian lub dokument Word. Ctrl+F po dowolnym terminie, który profesor wspomniał. Lepsze niż przewijanie 90 minut audio.' },
        { title: 'Przygotowanie do egzaminu', desc: 'Przejrzyj transkrypcję podczas przeglądania notatek odręcznych. Łapie rzeczy, które przegapiłeś podczas wykładu na żywo.' },
        { title: 'Tłumaczenie wykładów dla nienatywnych', desc: 'Transkrybuj w języku źródłowym, potem przepuść przez DeepL lub ChatGPT do tłumaczenia. Przydatne dla studentów uczestniczących w kursach w drugim języku.' },
        { title: 'Dostępność dla studentów niesłyszących i niedosłyszących', desc: 'Transkrypcja lub plik SRT dostarcza tę samą treść w innej modalności. Niektóre uniwersytety to wymagają dla nagrywanych treści dydaktycznych.' },
        { title: 'Tworzenie fiszek i materiałów do nauki', desc: 'Transkrypcje zasilają karty Anki, dokumenty podsumowania lub narzędzia do nauki wspomagane AI.' },
      ]}}
      proTips={{ title: 'Wskazówki do transkrypcji wykładu', tips: [
        { title: 'Na wykładach stacjonarnych usiądź blisko profesora', desc: 'Nagrywanie z ostatniego rzędu przez szum sali produkuje transkrypcję z wieloma lukami. Telefon w pierwszym rzędzie, ekran w dół, łapie czysty głos.' },
        { title: 'Dla długich wykładów używaj dedykowanego dyktafonu', desc: 'Nagrania telefoniczne mają agresywne auto-leveling i redukcję szumów, co szkodzi transkrypcji. Zoom H1n lub podobny rejestrator entry-level daje zauważalnie czystsze audio za 300 zł.' },
        { title: 'Dla wykładów online nagrywaj audio systemu bezpośrednio', desc: 'OBS Studio na Windows lub Mac może nagrywać audio wykładu bezpośrednio z systemu. Czystsze niż nagrywanie przez mikrofon laptopa.' },
        { title: 'Ustaw język ręcznie', desc: 'Auto-wykrywanie zwykle trafia, ale może zostać zmylone przez warmup profesora w innym języku. Wybierz język wykładu wyraźnie z menu.' },
        { title: 'Wytnij pierwsze 5 minut, jeśli to ogłoszenia administracyjne', desc: '"Czy zrobiliście pracę domową? Czy przeczytaliście rozdział 3?" nie jest przydatne dla transkrypcji. Wytnij w Audacity przed uploadem, aby zaoszczędzić budget rozmiaru pliku.' },
        { title: 'Dla wykładów STEM z równaniami transkrypcja łapie mówioną matematykę, nie równania', desc: 'Wyrażenia matematyczne na tablicy nie są w audio, więc nie w transkrypcji. Musisz je i tak przechwycić osobno (zdjęcia tablicy, screenshoty slajdów).' },
        { title: 'Przy pierwszym przeglądzie odsłuchaj nagranie podczas czytania transkrypcji', desc: 'To najlepszy sposób na poprawienie terminów specyficznych dla profesora i odniesień do równań. Raz oczyszczona transkrypcja stoi samodzielnie.' },
      ]}}
      faq={[
        { q: 'Czy to wystarczająco dokładne dla prac uniwersyteckich?', a: 'Dla większości treści wykładu tak. Whisper large-v3 produkuje 90-95% dokładności na czystym audio wykładu. Terminy techniczne i nazwy własne często wymagają oczyszczania. Użyj transkrypcji jako notatek do nauki, nie jako kanonicznego źródła do cytatów.' },
        { q: 'Mój wykład nie jest po angielsku. Czy zadziała?', a: 'Tak. Whisper obsługuje ponad 50 języków z dobrą dokładnością w głównych i podstawowym wsparciem dla wielu innych. Wybierz język ręcznie z menu dla najlepszych wyników.' },
        { q: 'Mój wykład trwa 90 minut. Co robić?', a: 'Podziel. Nasz cap to 60 minut na plik. Potnij na dwa kawałki po 45 minut w naturalnym punkcie przerwy (przerwa na lunch lub przejście tematu).' },
        { q: 'Czy transkrybowanie wykładów jest legalne?', a: 'Dla osobistego użytku do nauki generalnie tak w większości jurysdykcji, dopóki masz legalny dostęp do nagrania. Dla redystrybucji (publikacji transkrypcji online, sprzedaży materiałów do nauki) potrzebujesz zgody wykładowcy lub instytucji. Niektóre uniwersytety mają wyraźne polityki dotyczące nagrywania i transkrybowania wykładów. Sprawdź swoją.' },
        { q: 'Czy mogę transkrybować wideo-wykład z Coursera, edX lub Khan Academy?', a: 'Tak, jeśli możesz pobrać plik wideo. Niektóre platformy pozwalają pobierać do oglądania offline (dostajesz MP4). Wgraj tutaj. Dla platform, które nie pozwalają pobierać, sprawdź warunki przed scrapingiem.' },
        { q: 'Czy transkrypcja będzie zawierać treść slajdów?', a: 'Nie. Transkrybujemy tylko audio. Jeśli profesor czyta slajdy na głos, ten tekst jest w transkrypcji. Jeśli slajdy mają tekst na ekranie, którego profesor nie przeczytał, to nie jest w transkrypcji. Połącz z screenshotami slajdów dla pełnych notatek.' },
        { q: 'Jak dokładne są terminy techniczne i żargon?', a: 'Mniej dokładne niż popularne słownictwo. Dla łacińskich terminów medycznych, zaawansowanych symboli matematycznych, niszowych skrótów spodziewaj się ręcznego poprawiania. Ogólny przepływ wykładu będzie solidny.' },
        { q: 'Czy mogę wyeksportować transkrypcję do mojej aplikacji notatek?', a: 'Tak. Pobierz jako TXT i wklej w Notion, Obsidian, OneNote, Bear lub dowolne narzędzie tekstowe. SRT działa w video playerach, jeśli chcesz napisy obok nagrania.' },
        { q: 'Czy audio mojego wykładu jest zapisywane?', a: 'Nie. Plik idzie do naszego dostawcy transkrypcji, jest przetwarzany, potem odrzucany. Nie przechowujemy audio.' },
        { q: 'Jak długo trwa transkrypcja wykładu?', a: 'Około 1-2% długości audio. Wykład 60-minutowy kończy się w około 60 sekund. Upload zwykle jest dłuższym czekaniem.' },
        { q: 'Czy mogę dostać timecode, aby przeskoczyć do konkretnych momentów?', a: 'Tak. Pobierz jako SRT. Każda linia ma timecode wyrównany z oryginalnym audio. Przydatne do powrotu do konkretnego punktu podczas przygotowań do egzaminu.' },
        { q: 'Co jeśli wykład ma Q&A na końcu?', a: 'Q&A transkrybuje się tak samo jak główny wykład. Pytania z publiczności czasem przychodzą mniej wyraźnie (publiczność jest zwykle dalej od mikrofonu), ale odpowiedź profesora powinna być czysta. Dodaj sekcję "Q&A" w swoich notatkach.' },
      ]}
      relatedLinks={[
        { href: '/pl/transcribe-audio-to-text', label: 'Audio na tekst', desc: 'Dla ogólnych plików audio.' },
        { href: '/pl/transcribe-video-to-text', label: 'Wideo na tekst', desc: 'Dla wideo-wykładów (MP4, MOV).' },
        { href: '/pl/timestamped-transcription', label: 'Transkrypcja ze znacznikami czasu', desc: 'Aby przeskakiwać do konkretnych momentów.' },
        { href: '/pl/how-to-split-audio', label: 'Podział audio', desc: 'Dla wykładów powyżej 60 minut.' },
      ]}
    />
  )
}
