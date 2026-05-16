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
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: 'Transkrypcja firmowa — Spotkania, calle i wywiady na tekst | Mictoo',
  description: 'Darmowa transkrypcja firmowa dla spotkań, calli z klientami, wywiadów z użytkownikami i dem produktu. Bez rejestracji. Audio lub wideo, do 25 MB.',
  alternates: { canonical: 'https://mictoo.com/pl/business-transcription', languages: LANGS },
}

export default function PlBusinessPage() {
  return (
    <LandingLayout
      badge="Firmy · Zespoły · Za darmo"
      h1={<>Transkrypcja firmowa<br /><span className="text-brand-600">Spotkania, calle, wywiady na tekst</span></>}
      subtitle="Przekształć spotkania, calle z klientami, wywiady z użytkownikami i dema w czyste transkrypcje. Gotowe do Notion, Confluence, CRM lub raportów. Za darmo, bez konta."
      defaultLanguage="pl"
      features={[
        { icon: '💼', title: 'Procesy firmowe', desc: 'Spotkania zespołu, calle sprzedażowe, badania użytkowników, wywiady z kandydatami — konwertuj audio w przeszukiwalny i udostępnialny tekst.' },
        { icon: '📊', title: 'Podsumowanie AI w komplecie', desc: 'Oprócz transkrypcji otrzymujesz automatycznie podsumowanie AI z kluczowymi punktami i zadaniami. Gotowe do wklejenia w raport lub CRM.' },
        { icon: '🔒', title: 'Bezpieczeństwo i prywatność', desc: 'Pliki są przetwarzane i natychmiastowo usuwane. Nie przechowujemy audio ani transkrypcji na naszych serwerach.' },
      ]}
      faq={[
        { q: 'Czy Mictoo nadaje się do poufnych spotkań firmowych?', a: 'Dla treści regulowanych (RODO wrażliwe dane), sprawdź politykę firmy dotyczącą zewnętrznych usług AI. Mictoo nie przechowuje plików, ale audio przechodzi przez dostawcę AI. Dla audio ściśle poufnego rozważ rozwiązania on-premise.' },
        { q: 'Jak transkrybować call Zoom lub Teams?', a: 'Nagraj call wbudowaną funkcją platformy, pobierz plik MP4 lub M4A i prześlij do Mictoo. Transkrypcja i podsumowanie są gotowe w kilka sekund.' },
        { q: 'Czy mogę otrzymać etykiety mówców (Host, Klient itp.)?', a: 'Nie automatycznie w planie darmowym. Transkrypcja to pojedynczy strumień tekstu — etykiety można dodać ręcznie w edytorze przeglądarki przed eksportem.' },
        { q: 'Czy działa dla wielojęzycznych spotkań?', a: 'Whisper obsługuje ponad 50 języków z automatycznym wykrywaniem. Jeśli spotkanie miesza dwa języki, najlepiej podzielić plik i transkrybować każdą część osobno, ustawiając język ręcznie.' },
        { q: 'Jaki jest limit czasu?', a: 'Do 25 MB na plik. Dla spotkań 1+ godzinnych eksportuj w mono z niskim bitratem lub podziel nagranie na części. Przewodnik how-to-compress-audio opisuje trzy podejścia.' },
      ]}
      relatedLinks={[
        { href: '/pl/meeting-transcription', label: 'Transkrypcja spotkań' },
        { href: '/pl/zoom-transcription', label: 'Transkrypcja Zoom' },
        { href: '/pl/interview-transcription', label: 'Transkrypcja wywiadów' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
