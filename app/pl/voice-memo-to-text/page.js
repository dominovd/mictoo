import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/voice-memo-to-text',
  'fr': 'https://mictoo.com/fr/voice-memo-to-text',
  'de': 'https://mictoo.com/de/voice-memo-to-text',
  'es': 'https://mictoo.com/es/voice-memo-to-text',
  'ru': 'https://mictoo.com/ru/voice-memo-to-text',
  'it': 'https://mictoo.com/it/voice-memo-to-text',
  'pt': 'https://mictoo.com/pt/voice-memo-to-text',
  'pl': 'https://mictoo.com/pl/voice-memo-to-text',
  'ja': 'https://mictoo.com/ja/voice-memo-to-text',
  'ko': 'https://mictoo.com/ko/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: 'Notatka głosowa na tekst — transkrybuj Voice Memos iPhone za darmo | Mictoo',
  description:
    'Darmowa transkrypcja notatek głosowych. Upuść notatkę z iPhone lub nagranie głosowe Android (M4A, MP3) i otrzymaj czysty tekst w kilka sekund. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/voice-memo-to-text', languages: LANGS },

  openGraph: {
    title: "Notatka głosowa na tekst — transkrybuj Voice Memos iPhone za darmo | Mictoo",
    description: "Darmowa transkrypcja notatek głosowych. Upuść notatkę z iPhone lub nagranie głosowe Android (M4A, MP3) i otrzymaj czysty tekst w kilka sekund. Bez rejestracji.",
    url: "https://mictoo.com/pl/voice-memo-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notatka głosowa na tekst — transkrybuj Voice Memos iPhone za darmo | Mictoo",
    description: "Darmowa transkrypcja notatek głosowych. Upuść notatkę z iPhone lub nagranie głosowe Android (M4A, MP3) i otrzymaj czysty tekst w kilka sekund. Bez rejestracji.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlVoiceMemoPage() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="iPhone · Android · Za darmo"
      h1={<>Notatka głosowa na tekst<br /><span className="text-brand-600">Darmowy transkryptor notatek głosowych</span></>}
      subtitle="Zamień notatki głosowe w czysty tekst. iPhone, Android, dedykowany dyktafon, dowolny plik głosowy. Upuść, otrzymaj transkrypcję w kilka sekund. Bez rejestracji, bez opłaty za minutę."
      howItWorks={[
        { icon: '📱', title: 'Przenieś notatkę na komputer (lub wgraj z telefonu)', desc: 'iPhone: otwórz Voice Memos, dotknij Udostępnij, wyślij przez AirDrop lub email do siebie. Android: znajdź nagranie w Pliki lub w folderze aplikacji dyktafonu. Lub użyj przeglądarki mobilnej, aby wgrać bezpośrednio z telefonu.' },
        { icon: '📂', title: 'Upuść plik', desc: 'M4A z iPhone, M4A lub MP3 z Android, WAV z niektórych dyktafonów. Wszystko działa.' },
        { icon: '📋', title: 'Weź transkrypcję', desc: 'Czytaj w przeglądarce, skopiuj do schowka lub pobierz jako TXT. Wklej w Notion, Apple Notes, Google Docs lub gdzie żyją twoje notatki.' },
      ]}
      whyUse={{ title: 'Dlaczego Mictoo do notatek głosowych', bullets: [
        { title: 'Natywne wsparcie M4A', desc: 'Voice Memos iPhone są zapisywane jako M4A. Akceptujemy M4A bezpośrednio. Bez konwersji.' },
        { title: 'Za darmo, bez licznika minut', desc: 'Notatki głosowe to format "jeden na raz". Płacenie za minutę za 2-minutowy pomysł jest absurdalne. Za darmo bez cap pasuje do tego przypadku użycia.' },
        { title: 'Szybko dla krótkich plików', desc: '2-minutowa notatka głosowa transkrybuje się w około 5 sekund. Szybciej niż wystukiwanie pomysłu.' },
        { title: 'Prywatność', desc: 'Notatki głosowe są często osobiste. Twoje audio idzie do dostawcy transkrypcji, jest przetwarzane i odrzucane. Nie przechowujemy.' },
        { title: 'Mobile-friendly', desc: 'Wgraj bezpośrednio z telefonu przez przeglądarkę. iOS i Android oba działają.' },
        { title: 'Auto-wykrywanie obsługuje twój język', desc: 'Notatki głosowe w dowolnym z ponad 50 języków. Przydatne, jeśli myślisz w dwóch językach i twoje notatki się przełączają.' },
      ]}}
      useCases={{ title: 'Do czego ludzie używają transkrypcji notatek głosowych', items: [
        { title: 'Łapanie pomysłów w ruchu', desc: 'Miałeś myśl podczas spaceru, podyktowałeś do telefonu. Teraz chcesz działać. Transkrybuj, wklej w task manager lub aplikację notatek.' },
        { title: 'Dyktowanie długich tekstów', desc: 'Niektórzy szkicują eseje, posty na blog lub emaile, mówiąc. Transkrybuj notatkę głosową, edytuj tekst, wyślij.' },
        { title: 'Zadania po spotkaniu', desc: 'Podyktowałeś sobie podsumowanie w drodze powrotnej z sali konferencyjnej. Transkrybuj, wklej w dokument projektu.' },
        { title: 'Notatki terenowe dla dziennikarzy i badaczy', desc: 'Łap obserwacje i cytaty na miejscu. Transkrybuj później dla uporządkowanych notatek.' },
        { title: 'Listy przypomnień (zakupy, pakowanie, plany projektu)', desc: 'Notatki głosowe są szybsze niż pisanie na telefonie. Transkrybuj dla przeszukiwalnej, edytowalnej wersji tekstowej.' },
      ]}}
      proTips={{ title: 'Wskazówki do transkrypcji notatek głosowych', tips: [
        { title: 'Trzymaj telefon blisko, ale nie za blisko', desc: '10-15 cm od ust to słodki punkt. Bliżej i mikrofon łapie plozyje i oddech. Dalej i tracisz zrozumiałość w głośnych środowiskach.' },
        { title: 'Wiatr to wróg', desc: '10-sekundowa notatka głosowa na wietrznej ulicy może być nieużywalna. Jeśli możesz, zatrzymaj się, odwróć tyłem do wiatru, potem nagrywaj. Lub użyj słuchawek z mikrofonem odpornym na wiatr.' },
        { title: 'Pauza przed słowami kluczowymi', desc: 'Podczas dyktowania nazwiska, adresu lub terminu technicznego zrób krótką pauzę przed. Whisper radzi sobie z izolowanymi słowami lepiej niż z szybką mową dla nazw własnych.' },
        { title: 'Voice Memos iPhone domyślnie jest na lossless M4A, ale możesz przełączyć na lossy', desc: 'Ustawienia, Voice Memos, Jakość audio. Lossless to przesada dla transkrypcji. Lossy to jedna trzecia rozmiaru bez różnicy w dokładności.' },
        { title: 'Przytnij ciszę na początku i końcu przed uploadem', desc: 'Notatki głosowe czasem łapią 3-5 sekund martwego powietrza. Przytnij w aplikacji Voice Memos (dotknij Edytuj) przed udostępnieniem. Mniejszy plik, szybciej transkrybowany.' },
        { title: 'Dla długich dyktatów (pisanie szkicu głosem) podziel na kawałki 5-10 minut', desc: 'Łatwiejsze do edycji. Łatwiej ponownie nagrać pojedynczy kawałek, jeśli pójdzie źle.' },
        { title: 'Whisper radzi sobie z twoim akcentem lepiej niż wbudowana funkcja dyktowania telefonu', desc: 'iOS ma wbudowane dyktowanie, ale jest angielsko-first i słabsze przy akcentach. Whisper pokrywa ponad 50 języków z lepszą dokładnością.' },
      ]}}
      faq={[
        { q: 'Czy Mictoo obsługuje Voice Memos iPhone?', a: 'Tak. Voice Memos iPhone są zapisywane jako M4A (czasem lossless jako ALAC). M4A działa bezpośrednio. Dla ALAC najpierw skonwertuj na WAV lub M4A AAC.' },
        { q: 'Jak przenieść notatkę głosową z iPhone do Mictoo?', a: 'Trzy opcje. Otwórz notatkę w Voice Memos, dotknij Udostępnij, wybierz AirDrop na Mac (najszybciej) lub email do siebie. Lub użyj Safari na iPhone, aby otworzyć mictoo.com i wgrać bezpośrednio z aplikacji Pliki.' },
        { q: 'A co z nagraniami głosowymi Android?', a: 'Dyktafony Android zazwyczaj zapisują jako M4A lub MP3. Oba działają. Znajdź plik w aplikacji Pliki, udostępnij na komputer lub wgraj z przeglądarki mobilnej.' },
        { q: 'Czy mogę wgrywać bezpośrednio z telefonu?', a: 'Tak. Strona jest mobile-friendly. Dotknij obszaru uploadu, wybierz plik z aplikacji Pliki telefonu lub folderu nagrań.' },
        { q: 'Jak długa może być moja notatka głosowa?', a: 'Do 30 minut na plik za darmo, 60 minut z rejestracją. Większość notatek głosowych jest poniżej 5 minut, dobrze w ramach dowolnego limitu.' },
        { q: 'Jak dokładna jest transkrypcja notatek głosowych?', a: 'Dla wyraźnej mowy w cichym środowisku: 90-95%. Dla zamamrotaczej mowy, szumu tła (ulica, kawiarnia, samochód) dokładność spada. Nazwy własne często wymagają oczyszczenia.' },
        { q: 'Czy transkrypcja będzie zawierać interpunkcję?', a: 'Tak. Whisper dodaje interpunkcję automatycznie. Nie zawsze idealnie dla dyktowanej mowy (która ma mniej naturalne granice zdań), ale użyteczne tak jak jest.' },
        { q: 'Czy działa do dyktowania w języku nieangielskim?', a: 'Tak, ponad 50 języków. Wybierz język ręcznie z menu dla krótkich notatek (auto-wykrywanie potrzebuje więcej audio, aby być niezawodne).' },
        { q: 'Czy moja notatka głosowa jest zapisywana?', a: 'Nie. Plik idzie do naszego dostawcy transkrypcji, jest przetwarzany, potem odrzucany.' },
        { q: 'Czy mogę edytować transkrypcję przed pobraniem?', a: 'Tak. Popraw błędne słowa w przeglądarce przed eksportem.' },
        { q: 'Czy działa do nagrywania rozmów telefonicznych?', a: 'Transkrybujemy plik, który wgrywasz, niezależnie od tego, jak został nagrany. Samo nagrywanie rozmów wymaga zgody w większości jurysdykcji. Uzyskaj zgodę przed nagrywaniem.' },
        { q: 'Jaka jest różnica z wbudowaną funkcją dyktowania iOS?', a: 'Dyktowanie iOS jest w czasie rzeczywistym podczas mówienia, ograniczone do określonych języków i słabsze przy akcentach. Mictoo transkrybuje po nagraniu, obsługuje ponad 50 języków i używa bardziej dokładnego modelu (Whisper large-v3).' },
      ]}
      relatedLinks={[
        { href: '/pl/m4a-to-text', label: 'M4A na tekst', desc: 'Specyficznie dla plików M4A.' },
        { href: '/pl/dictation-to-text', label: 'Dyktowanie na tekst', desc: 'Dla podyktowanych szkiców tekstu i długoformatowego pisania głosem.' },
        { href: '/pl/interview-transcription', label: 'Transkrypcja wywiadu', desc: 'Dla wywiadów nagranych na telefonie.' },
        { href: '/pl/transcribe-audio-to-text', label: 'Audio na tekst', desc: 'Dla innych formatów audio.' },
      ]}
    />
  )
}
