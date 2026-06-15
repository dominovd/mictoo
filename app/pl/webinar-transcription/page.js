import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'ja': 'https://mictoo.com/ja/webinar-transcription',
  'ko': 'https://mictoo.com/ko/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: 'Transkrypcja webinarów — Darmowy transcript dla nagrań | Mictoo',
  description: 'Transkrybuj za darmo nagrania webinarów na tekst i napisy SRT. Działa z Zoom, Webex, GoToWebinar i dowolnym eksportem MP4 lub MP3. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/webinar-transcription', languages: LANGS },

  openGraph: {
    title: "Transkrypcja webinarów — Darmowy transcript dla nagrań | Mictoo",
    description: "Transkrybuj za darmo nagrania webinarów na tekst i napisy SRT. Działa z Zoom, Webex, GoToWebinar i dowolnym eksportem MP4 lub MP3. Bez rejestracji.",
    url: "https://mictoo.com/pl/webinar-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transkrypcja webinarów — Darmowy transcript dla nagrań | Mictoo",
    description: "Transkrybuj za darmo nagrania webinarów na tekst i napisy SRT. Działa z Zoom, Webex, GoToWebinar i dowolnym eksportem MP4 lub MP3. Bez rejestracji.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlWebinarPage() {
  return (
    <LandingLayout
      badge="Webinary · MP4 · Za darmo"
      h1={<>Transkrypcja webinarów<br /><span className="text-brand-600">Darmowy generator transkryptów</span></>}
      subtitle="Przekształć nagranie swojego webinaru w przeszukiwalną transkrypcję tekstową lub plik napisów SRT. Działa z Zoom, Webex, GoToWebinar i dowolnym eksportem MP4/MP3."
      defaultLanguage="pl"
      valueBlock={
        <>
          <p>Webinar nie kończy się po zamknięciu pokoju. Nagranie może zasilić artykuły, dokumentację, follow-up sprzedażowy, bazę wiedzy i napisy.</p>
          <p>Mictoo zamienia audio lub wideo z webinaru w edytowalny tekst do wykorzystania po wydarzeniu.</p>
        </>
      }
      howItWorks={[
        { title: 'Pobierz nagranie', desc: 'Wyeksportuj webinar z Zoom, Teams, Meet albo innej platformy.' },
        { title: 'Prześlij plik', desc: 'Mictoo transkrybuje prezentację, demo i sekcję pytań.' },
        { title: 'Wykorzystaj treść ponownie', desc: 'Twórz notatki, klipy, artykuły, napisy albo dokumentację wewnętrzną.' },
      ]}
      whyUse={{
        title: 'Dlaczego transkrybować webinary',
        bullets: [
          { title: 'Szybkie wyszukiwanie', desc: 'Znajduj pytania, obiekcje i tematy bez oglądania całego filmu.' },
          { title: 'Treści po wydarzeniu', desc: 'Zamień sesję w podsumowanie, post lub email follow-up.' },
          { title: 'Napisy', desc: 'Użyj transkrypcji jako podstawy captions i dostępności.' },
          { title: 'Dokumentacja wewnętrzna', desc: 'Zapisuj dema, szkolenia i premiery jako tekst do przeszukania.' },
        ],
      }}
      useCases={{
        title: 'Zastosowania transkrypcji webinaru',
        items: [
          { title: 'Marketing', desc: 'Wyciągaj przekazy, pytania i klipy do kampanii.' },
          { title: 'Szkolenie klientów', desc: 'Zamieniaj sesje edukacyjne w przewodniki krok po kroku.' },
          { title: 'Q&A', desc: 'Wykorzystuj częste odpowiedzi w support i sprzedaży.' },
          { title: 'Dema wewnętrzne', desc: 'Dokumentuj procesy i decyzje produktowe.' },
        ],
      }}
      proTips={{
        title: 'Wskazówki dla webinarów',
        tips: [
          { title: 'Rozdziel długie sesje', desc: 'Podziel keynote, demo i Q&A, żeby szybciej je przejrzeć.' },
          { title: 'Sprawdź terminy marki', desc: 'Produkty, nazwy klientów i skróty często wymagają poprawek.' },
          { title: 'Wyodrębnij audio z dużych MP4', desc: 'Ścieżka M4A lub MP3 może oszczędzić czas przesyłania.' },
        ],
      }}
      faq={[
        { q: 'Jak pobrać nagranie webinaru Zoom lub Webex?', a: 'W Zoom: portal web → Nagrania → kliknij webinar → Pobierz. W Webex: otwórz nagranie w Moje Nagrania → Pobierz. Oba eksportują domyślnie w MP4.' },
        { q: 'Czy mogę otrzymać transkrypcję, gdy webinar jest live?', a: 'Mictoo działa na nagranych plikach, nie na live stream. Dla napisów w czasie rzeczywistym użyj funkcji live captions platformy webinarowej, a następnie prześlij nagranie po zakończeniu, aby uzyskać dopracowaną transkrypcję.' },
        { q: 'A wielu mówców i sesje Q&A?', a: 'Mictoo generuje pojedynczą transkrypcję ze wszystkimi wypowiedziami. Etykiety mówców (Host, Panelista 1, Publiczność) można dodać ręcznie w edytorze przeglądarki przed pobraniem.' },
        { q: 'Jaki jest maksymalny czas webinaru?', a: 'Do 25 MB na plik. 60-minutowy webinar w mono 64 kbps mieści się łatwo; eksportuj w niższym bitratie lub wyodrębnij audio M4A dla dłuższych sesji.' },
        { q: 'Czy transkrypcja jest dokładna dla terminów technicznych?', a: 'Dokładność jest wysoka dla czystego audio. Nazwy marek, akronimy i nietypowa terminologia są czasem źle pisane — łatwe do poprawienia w edytorze przeglądarki przed eksportem.' },
      ]}
      relatedLinks={[
        { href: '/pl/meeting-transcription', label: 'Transkrypcja spotkań' },
        { href: '/pl/zoom-transcription', label: 'Transkrypcja Zoom' },
        { href: '/pl/free-srt-generator', label: 'Generator SRT' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
