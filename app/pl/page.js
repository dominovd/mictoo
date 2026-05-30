import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Transkrypcja AI audio i wideo na tekst, za darmo — Mictoo',
  description: "Transkrybuj pliki audio i wideo na tekst za darmo. Bez rejestracji. Oparte na OpenAI Whisper. MP3, MP4, WAV i ponad 50 języków.",
  alternates: {
    canonical: 'https://mictoo.com/pl',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'ja': 'https://mictoo.com/ja',
      'ko': 'https://mictoo.com/ko',
      'x-default': 'https://mictoo.com',
    },
  },
  openGraph: {
    title: 'Mictoo — Darmowa transkrypcja AI audio i wideo',
    description: "Prześlij plik audio lub wideo i odbierz transkrypcję w kilka sekund.",
    url: 'https://mictoo.com/pl',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — Darmowa transkrypcja audio i wideo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — Darmowa transkrypcja AI',
    description: "Prześlij plik audio lub wideo i odbierz transkrypcję w kilka sekund.",
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PolishPage() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="AI · Za darmo · Bez rejestracji · 50+ języków"
      h1={<>Transkrypcja audio i wideo na tekst<br /><span className="text-brand-600">z AI, za darmo online</span></>}
      subtitle="Prześlij dowolny plik audio lub wideo i odbierz dokładną transkrypcję AI w kilka sekund. Konto nie jest wymagane."
      howItWorks={[
        { icon: '📂', title: 'Prześlij plik', desc: "Przeciągnij i upuść albo kliknij, żeby załadować. MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Do 25 MB anonimowo, 60 MB po rejestracji." },
        { icon: '⚡', title: 'AI transkrybuje', desc: "Whisper od OpenAI zamienia audio na tekst z wysoką dokładnością w ponad 50 językach. Plik 10-minutowy zwykle kończy się w mniej niż 30 sekund." },
        { icon: '📋', title: 'Skopiuj albo pobierz', desc: "Edytuj transkrypcję bezpośrednio w przeglądarce. Skopiuj do schowka albo wyeksportuj jako .txt, .srt, .pdf, .docx." },
      ]}
      whyUse={{ title: 'Dlaczego Mictoo', bullets: [
        { title: '100% za darmo', desc: "Bez abonamentu, bez okrojonego triala. Mictoo jest darmowy, bez miesięcznego limitu i licznika minut." },
        { title: 'Prywatność z założenia', desc: "Twoje pliki idą bezpośrednio do API Whisper (Groq jako główny, OpenAI jako zapas), są przetwarzane i kasowane w kilka sekund. Nic nie przechowujemy i nie trenujemy żadnego modelu na Twoich danych." },
        { title: 'Ponad 50 języków', desc: "Automatyczne wykrywanie języka. Działa z polskim, angielskim, hiszpańskim, francuskim, niemieckim, rosyjskim, japońskim i wieloma innymi." },
        { title: 'Wysoka dokładność', desc: "Napędzane przez Whisper od OpenAI, ten sam model rozpoznawania mowy, którego używa ChatGPT i czołowe serwisy transkrypcyjne." },
        { title: 'Szybkie wyniki', desc: "Plik 10-minutowy jest transkrybowany w mniej niż 30 sekund. Bez kolejki, bez pop-upów typu 'poczekaj 30 sekund'." },
        { title: 'Edytowalny wynik', desc: "Przejrzyj i popraw transkrypcję w przeglądarce, potem skopiuj do schowka albo pobierz jako .txt, .srt lub .pdf." },
        { title: "Streszczenie AI w komplecie", desc: "Po każdej transkrypcji generujemy darmowe streszczenie z kluczowymi punktami i listą zadań. Ta sama funkcja, którą TurboScribe sprzedaje za 20 $/mies. Bez dodatkowego kliknięcia, bez zachęt do upgrade'u." },
        { title: "Tłumaczenie na 28 języków", desc: "Jednym kliknięciem tłumaczysz pełną transkrypcję na hiszpański, francuski, niemiecki, japoński i 24 inne. Oryginalne znaczniki czasu są zachowane, więc przetłumaczony SRT nadal pasuje do audio." },
      ]}}
      useCases={{ title: 'Kto używa Mictoo', items: [
        { title: 'Studenci', desc: "Transkrybuj wykłady, wywiady i nagrania badawcze. Tekst da się przeszukiwać, łatwiej powtarzać niż przesłuchiwać audio." },
        { title: 'Podcasterzy', desc: "Zamień odcinki na artykuły blogowe, show notes albo napisy. Bonus SEO i natychmiastowa dostępność." },
        { title: 'Dziennikarze', desc: "Konwertuj nagrane wywiady na tekst w kilka sekund. Precyzyjne cytaty z timestampami do weryfikacji." },
        { title: 'Zespoły firmowe', desc: "Transkrybuj spotkania, calle z klientami i prezentacje. Potem szukasz po słowie kluczowym zamiast słuchać od nowa." },
        { title: 'Twórcy treści', desc: "Generuj napisy do YouTube, TikToka albo Instagram Reels. Eksport SRT gotowy do wrzucenia w YouTube Studio." },
        { title: 'Branża prawna i medyczna', desc: "Szybkie szkice transkrypcji do notatek i dokumentacji. Oryginalny plik zachowaj dla wersji ostatecznej." },
      ]}}
      proTips={{ title: 'Wskazówki dla lepszej transkrypcji', tips: [
        { title: 'Audio mono 64 kbps wystarczy do mowy', desc: "Mictoo przyjmuje do 25 MB. Dla mowy mono 64 kbps daje około 28 MB na godzinę bez zauważalnej utraty dokładności. Zobacz nasz poradnik do kompresji audio." },
        { title: 'Jeśli plik przekracza 30 minut, zarejestruj się', desc: "Anonimowo: maks. 30 minut. Darmowa rejestracja: 60 minut. Powyżej: podziel plik na części i potem skleisz transkrypcje." },
        { title: 'Podaj język, jeśli automatyczne wykrywanie się myli', desc: "Whisper trafia w 99% przypadków. Dla bardzo krótkich plików (poniżej 10 sekund) albo mocno wielojęzycznych ręczny wybór języka zabezpiecza wynik." },
        { title: 'Do transkrypcji wideo wystarczy ścieżka audio', desc: "Mictoo przyjmuje MP4 bezpośrednio, ale możesz też wyciągnąć audio (naszym konwerterem MP4 na MP3) i przesłać plik 10 razy mniejszy." },
        { title: 'Podsumowanie AI w komplecie', desc: "Po transkrypcji Mictoo automatycznie generuje podsumowanie treści, kluczowe punkty i listę zadań. Przydatne przy długich spotkaniach i podcastach." },
        { title: 'Przetłumacz transkrypcję na 28 języków', desc: "Kiedy transkrypcja będzie gotowa, kliknij Tłumacz w widoku Czytnik. Whisper transkrybuje język źródłowy, potem GPT-4o-mini tłumaczy na język docelowy." },
      ]}}
      faq={[
        {
          q: 'Jak przekształcić plik audio w tekst za darmo?',
          a: "Prześlij swój plik audio powyżej. Mictoo automatycznie transkrybuje go za pomocą Whisper od OpenAI i pokazuje tekst w kilka sekund. Bez rejestracji dla plików do 25 MB.",
        },
        {
          q: 'Czy Mictoo dobrze radzi sobie z polskim?',
          a: "Tak. Whisper, model OpenAI, na którym opiera się Mictoo, został wytrenowany na wielu godzinach polskiego audio i daje świetną dokładność, włącznie z akcentami regionalnymi i słownictwem technicznym.",
        },
        {
          q: 'Czy moje pliki są przechowywane?',
          a: "Nie. Twoje pliki trafiają bezpośrednio do API transkrypcji, są przetwarzane i kasowane w kilka sekund. Nic nie zostaje na naszych serwerach i nie używamy danych do trenowania modeli.",
        },
        {
          q: 'Jaki jest maksymalny rozmiar pliku?',
          a: "25 MB dla użytkowników anonimowych, 60 MB po darmowej rejestracji. MP3 mono 64 kbps to około godziny audio w 25 MB.",
        },
        {
          q: 'Ile trwa transkrypcja?',
          a: "Plik 10-minutowy jest zwykle transkrybowany w mniej niż 30 sekund. Dłuższe pliki zajmują proporcjonalnie więcej czasu, ale są wciąż znacznie szybsze niż czas rzeczywisty.",
        },
        {
          q: 'Jakie formaty audio i wideo są obsługiwane?',
          a: "MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, MPEG. Z plików wideo Mictoo automatycznie wyciąga ścieżkę audio. Jeśli Twojego formatu nie ma na liście, najpierw konwertuj go do MP3 lub WAV naszymi wbudowanymi konwerterami.",
        },
        {
          q: 'Czy mogę pobrać napisy w formacie SRT?',
          a: "Tak. Po transkrypcji kliknij przycisk .srt, żeby pobrać plik napisów z timestampami, gotowy do wrzucenia w YouTube Studio, Premiere albo Final Cut.",
        },
        {
          q: 'Czy Mictoo robi podsumowanie treści?',
          a: "Tak. Po każdej transkrypcji Mictoo automatycznie tworzy podsumowanie AI z kluczowymi punktami i listą zadań. Bardzo przydatne przy długich podcastach, spotkaniach i wykładach.",
        },
        {
          q: 'Czy mogę transkrybować film z YouTube?',
          a: "Bezpośrednio z URL nie, YouTube blokuje serwery trzecich stron. Najpierw pobierz film lokalnie narzędziem typu 4K Video Downloader, potem prześlij tutaj plik MP4. Nasz poradnik o pobieraniu z YouTube tłumaczy krok po kroku.",
        },
        {
          q: 'Czy Mictoo ma aplikację mobilną?',
          a: "Natywnej aplikacji jeszcze nie ma, ale strona działa świetnie na iOS Safari i Android Chrome. Wgrywaj z galerii albo z dyktafonu bezpośrednio z telefonu.",
        },
      ]}
      relatedLinks={[
        { href: '/pl/transcribe-mp3-to-text', label: 'MP3 na tekst', desc: 'Transkrybuj specjalnie pliki MP3, podcasty, notatki głosowe, nagrane rozmowy.' },
        { href: '/pl/transcribe-video-to-text', label: 'Wideo na tekst', desc: "Transkrybuj MP4, MOV, WEBM, dla nagrań Zoom, filmów YouTube, screencastów." },
        { href: '/pl/podcast-transcription', label: 'Transkrypcja podcastów', desc: 'Ten sam silnik z poradami dla długich podcastów i montażu.' },
        { href: '/pl/free-srt-generator', label: 'Darmowy generator SRT', desc: 'Napisy z timestampami gotowe do YouTube Studio, Premiere, DaVinci Resolve.' },
      ]}
    />
  )
}
