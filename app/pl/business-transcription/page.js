import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'ko': 'https://mictoo.com/ko/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: 'Transkrypcja business — darmowe narzędzie dla spotkań i calli | Mictoo',
  description:
    'Darmowa transkrypcja business. Calle sprzedażowe, customer interview, focus groups, posiedzenia zarządu, konferencje. Wgraj i otrzymaj czystą transkrypcję AI w kilka sekund. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/business-transcription', languages: LANGS },
}

export default function PlBusinessPage() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="Sprzedaż · Badania · Compliance · Za darmo"
      h1={<>Transkrypcja business<br /><span className="text-brand-600">Audio business w tekst, za darmo</span></>}
      subtitle="Zamień każde audio business w czysty tekst. Calle sprzedażowe, customer interview, focus groups, konferencje, posiedzenia zarządu. Bez rejestracji, bez opłaty za minutę."
      howItWorks={[
        { icon: '🎙️', title: 'Upuść audio lub wideo', desc: 'MP3 z rejestratora rozmów, M4A z telefonu, MP4 z videokonferencji, WAV z rejestratora terenowego. Call sprzedażowy z Gong, nagranie Zoom customer interview, M4A z posiedzenia zarządu. Wszystko działa.' },
        { icon: '⚡', title: 'AI transkrybuje', desc: 'Whisper large-v3 przetwarza audio. Call 30-minutowy kończy się w około minutę. Spotkanie 60-minutowe w nieco mniej niż dwie.' },
        { icon: '📋', title: 'Weź transkrypcję', desc: 'Czytaj, kopiuj lub pobierz jako TXT lub SRT. Wklej w swój CRM, research repository, dokument projektu lub archiwum compliance.' },
      ]}
      whyUse={{ title: 'Dlaczego Mictoo dla audio business', bullets: [
        { title: 'Ta sama dokładność co drogie opcje', desc: 'Whisper large-v3 to model za wieloma drogimi narzędziami enterprise transkrypcji. Uruchamiamy go bez kosztu licencji pro seat.' },
        { title: 'Działa dla sporadycznego użycia', desc: 'Jeśli transkrybujesz jeden call sprzedażowy tygodniowo, płacenie miesięcznego seat narzędzia enterprise to marnowanie. Za darmo bez licznika minut pasuje do sporadycznego wzorca użycia.' },
        { title: 'Ponad 50 języków, przydatne dla biznesu międzynarodowego', desc: 'Wielojęzyczne customer interview, calle sprzedażowe cross-border, panele z nienatywnymi mówcami angielskiego. Wszystko pokryte.' },
        { title: 'Żaden plik nie jest zapisywany', desc: 'Nagranie jest strumieniowane do dostawcy transkrypcji i odrzucane. Dla audio business, którego nie chcesz widzieć leżącego na serwerze strony trzeciej, to się liczy.' },
        { title: 'Eksport SRT dla edytorów wideo', desc: 'Jeśli twoje audio business pochodzi z wideo (panel konferencyjny, town hall), SRT wchodzi bezpośrednio w Premiere, DaVinci lub YouTube Studio do pracy nad napisami.' },
      ]}}
      useCases={{ title: 'Częste przypadki użycia transkrypcji business', items: [
        { title: 'Podsumowania calli sprzedażowych', desc: 'Account Executives wkładają nagrania calli do CRM obok deala. Szybsze handoffy, lepsze wyszukiwanie cytatów do follow-up emaili, łatwiejszy coaching dla sales managerów.' },
        { title: 'Customer interview do badań produktowych', desc: 'Product managerowie i UX researcherzy transkrybują rozmowy z klientami, aby kodować wzorce, pisać user stories i budować research repositories.' },
        { title: 'Transkrypcje focus group', desc: 'Agencje badań rynku transkrybują sesje focus group do analizy. To, co kodują, to transkrypcja, nie wideo.' },
        { title: 'Posiedzenia zarządu i leadership offsite', desc: 'Transkrypcje czynią decyzje korporacyjne przeszukiwalnymi i redukują niejednoznaczność miesiące później. Przydatne dla governance, komunikacji z pracownikami i audit trail.' },
        { title: 'Nagrania paneli konferencyjnych', desc: 'Zespoły marketingu i PR transkrybują dyskusje panelowe, gdzie ich kadra kierownicza przemawiała. Posty na blog, grafiki cytatów na social, treści sales enablement. Wszystko zaczyna się od transkrypcji.' },
      ]}}
      proTips={{ title: 'Wskazówki do transkrypcji business', tips: [
        { title: 'Dla nagrań calli sprzedażowych użyj narzędzia typu Gong lub Chorus, jeśli możesz', desc: 'Te narzędzia robią nagrywanie, transkrypcję i logging CRM razem. Mictoo to właściwy wybór dla okazjonalnej transkrypcji, nie dla operacji sprzedaży o dużej objętości.' },
        { title: 'W customer interview uzyskaj zgodę i wyjaśnij, jak audio będzie używane', desc: '"Nagrywam tę rozmowę, abym nie musiał robić notatek. Audio jest transkrybowane i pozostaje w naszym research repository." W wielu jurysdykcjach to także wymóg prawny dla każdego nagrania calla.' },
        { title: 'Użyj porządnego mikrofonu, szczególnie dla klienta', desc: 'Głosy klientów łapane przez linię telefoniczną transkrybują się 5-10% mniej dokładnie niż calle dial-in z USB headsetem po stronie klienta. Dla wywiadów o wysokiej wartości wyślij headset przed callem.' },
        { title: 'Wytnij small talk przed uploadem, aby zaoszczędzić budget rozmiaru pliku', desc: 'Większość calli business zaczyna się od 2-5 minut pogody i uprzejmości. Wytnij w Audacity przed uploadem, jeśli plik jest blisko limitu.' },
        { title: 'Wybierz język ręcznie dla calli międzynarodowych', desc: 'Jeśli call sprzedażowy otwiera się po angielsku, ale przechodzi na francuski, auto-wykrywanie może się zmylić. Wybierz dominujący język ręcznie.' },
        { title: 'Dla poufnego audio business nie używaj transkrypcji w chmurze, nawet naszej', desc: 'Rozmowy HR, dyskusje M&A, calle prawne, cokolwiek objętego tajemnicą. Użyj lokalnej instalacji Whisper. Ten sam model, działa offline, bez przetwarzania strony trzeciej.' },
      ]}}
      faq={[
        { q: 'Czy Mictoo nadaje się do użytku business?', a: 'Dla okazjonalnej transkrypcji (calle sprzedażowe, interviews, panele) tak. Dla operacji o dużej objętości (zespół sprzedażowy transkrybujący 50 calli dziennie), dedykowane narzędzie jak Gong lub Chorus pasuje lepiej, bo pakuje integrację CRM, workflowy coachingu i analytics zespołu.' },
        { q: 'Czy moje audio business jest zapisywane na waszych serwerach?', a: 'Nie. Plik idzie do naszego dostawcy transkrypcji (Groq, z OpenAI jako backup) i jest odrzucany po przetworzeniu. Nie przechowujemy ani audio, ani transkrypcji.' },
        { q: 'Czy to jest zgodne z RODO?', a: 'Nie przechowujemy audio ani transkrypcji po opuszczeniu strony. Jesteśmy w Europie, a nasi dostawcy (Groq US, OpenAI US) podpisali DPA. Dla twojej konkretnej sytuacji RODO (obowiązki administratora, podstawa prawna nagrań) zobacz naszą politykę prywatności i skonsultuj się z inspektorem ochrony danych.' },
        { q: 'Czy mogę używać do nagrywania calli z klientami UE lub Kalifornii?', a: 'Możesz używać transkrypcji. Samo nagrywanie wymaga w wielu jurysdykcjach zgody drugiej strony (two-party consent w Kalifornii i częściach UE). Uzyskaj zgodę przed nagrywaniem.' },
        { q: 'Jak dokładna jest transkrypcja dla nazw własnych i firm?', a: 'Mniej dokładna niż popularne słowa. Whisper nie zna nazwy klienta, nazwy produktu ani specyficznej terminologii twojej firmy. Spodziewaj się ręcznego poprawiania. Reszta transkrypcji będzie solidna.' },
        { q: 'Czy dostanę etykiety mówców (Sprzedawca vs. Klient)?', a: 'Nie automatycznie. Dla calli na 2 mówców dodaj etykiety ręcznie w oparciu o rozmowę. Dla calli wieloosobowych z osobnymi ścieżkami audio na mówcę transkrybuj każdą ścieżkę osobno.' },
        { q: 'Jak to wypada w porównaniu z Gong, Chorus lub Fireflies?', a: 'To są pełne platformy dla calli sprzedażowych z integracją CRM, automatycznym coachingiem, tagowaniem deal stage i analytics rozmów. My to czysta transkrypcja, bez integracji, bez warstwy coachingu. Taniej (za darmo), znacznie węższe w zakresie. Użyj tamtych, jeśli potrzebujesz pełnej platformy. Użyj nas, jeśli potrzebujesz tylko tekstu.' },
        { q: 'Czy mogę transkrybować poufny call business?', a: 'Dla niewrażliwych calli business tak. Dla poufnych (HR, prawne, M&A, cokolwiek objętego tajemnicą) unikaj wszelkiej transkrypcji w chmurze, włącznie z naszą. Użyj zamiast lokalnej instalacji Whisper.' },
        { q: 'Jak długo trwa transkrypcja calla business?', a: 'Około 1-2% długości audio. Call 30-minutowy kończy się w około 30-60 sekund.' },
        { q: 'Jakie są formaty wyjściowe?', a: 'Czysty tekst (TXT) i SRT (plik napisów z timecodes). Kopiowanie do schowka działa też do wklejania bezpośrednio w CRM lub dokument.' },
        { q: 'Czy mogę wgrywać wiele calli sprzedażowych wsadowo?', a: 'Jeszcze nie jednym kliknięciem. Obecnie wgrywasz jeden plik na raz. Batch jest w roadmapie dla przyszłego planu Pro.' },
        { q: 'Co jeśli moje audio business przekracza 60 minut?', a: 'Podziel na kawałki poniżej 60 minut. Transkrypcje można złączyć potem.' },
      ]}
      relatedLinks={[
        { href: '/pl/interview-transcription', label: 'Transkrypcja wywiadu', desc: 'Dla rozmów jeden-na-jeden i badań jakościowych.' },
        { href: '/pl/meeting-transcription', label: 'Transkrypcja spotkań', desc: 'Dla każdego nagrania spotkania, każdej platformy.' },
        { href: '/pl/zoom-transcription', label: 'Transkrypcja Zoom', desc: 'Dla calli nagranych w Zoom.' },
        { href: '/pl/teams-meeting-transcription', label: 'Transkrypcja Teams', desc: 'Dla calli Microsoft Teams.' },
      ]}
    />
  )
}
