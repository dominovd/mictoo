import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/dictation-to-text',
  'fr': 'https://mictoo.com/fr/dictation-to-text',
  'de': 'https://mictoo.com/de/dictation-to-text',
  'es': 'https://mictoo.com/es/dictation-to-text',
  'ru': 'https://mictoo.com/ru/dictation-to-text',
  'it': 'https://mictoo.com/it/dictation-to-text',
  'pt': 'https://mictoo.com/pt/dictation-to-text',
  'pl': 'https://mictoo.com/pl/dictation-to-text',
  'ja': 'https://mictoo.com/ja/dictation-to-text',
  'x-default': 'https://mictoo.com/dictation-to-text',
}

export const metadata = {
  title: 'Dyktowanie na tekst — Darmowa transkrypcja dyktowania głosowego | Mictoo',
  description: 'Konwertuj dyktowane nagrania audio na tekst za darmo. Idealne dla pisarzy, lekarzy, prawników i badaczy. Obsługuje MP3, M4A, WAV. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/dictation-to-text', languages: LANGS },
}

export default function PlDictationPage() {
  return (
    <LandingLayout
      badge="Dyktowanie · Głos → Tekst · Za darmo"
      h1={<>Dyktowanie na tekst<br /><span className="text-brand-600">Darmowa transkrypcja dyktowania głosowego</span></>}
      subtitle="Nagraj swoje myśli, podyktuj rozdział lub rób notatki — a następnie prześlij plik tutaj, aby uzyskać precyzyjną transkrypcję tekstową. Bez rejestracji, bez aplikacji do instalacji."
      defaultLanguage="pl"
      features={[
        { icon: '📝', title: 'Dla pisarzy i badaczy', desc: 'Podyktuj szkic rozdziału, zarys artykułu lub notatki z wywiadu. Mictoo konwertuje twój głos w czysty, edytowalny tekst w kilka sekund.' },
        { icon: '👨‍⚕️', title: 'Dla lekarzy i prawników', desc: 'Podyktuj notatki sprawy, podsumowania pacjentów lub memoranda na telefonie, a następnie przekształć je w tekst do swoich archiwów. Pliki są przetwarzane i natychmiast usuwane.' },
        { icon: '🌍', title: '50+ języków', desc: 'Dyktuj po polsku, angielsku, hiszpańsku, francusku, niemiecku, japońsku i w wielu innych. Język jest wykrywany automatycznie; można zmienić w razie potrzeby.' },
      ]}
      faq={[
        { q: 'Jak nagrać dyktowanie na telefonie?', a: 'iPhone: aplikacja Voice Memos — eksport w .m4a. Android: wbudowany dyktafon lub Easy Voice Recorder — eksport w .mp3 lub .m4a. Prześlij plik do Mictoo.' },
        { q: 'Czy Mictoo to narzędzie do dyktowania w czasie rzeczywistym?', a: 'Nie — Mictoo transkrybuje istniejące pliki audio. Do dyktowania w czasie rzeczywistym (mówisz i widzisz tekst) użyj wbudowanego dyktowania systemu (macOS, Windows, iOS, Android). Użyj Mictoo później do oczyszczenia długich nagrań.' },
        { q: 'Jak dokładna jest transkrypcja dyktowania?', a: 'Czyste dyktowanie z jednym mówcą jest zwykle transkrybowane z dokładnością 95%+. Mów w naturalnym tempie, w cichym pomieszczeniu, używaj słuchawek dla najlepszych rezultatów.' },
        { q: 'Czy mogę używać do dyktowania medycznego lub prawnego?', a: 'Tak, ale sprawdź lokalne przepisy dotyczące przetwarzania AI danych pacjentów lub klientów. Mictoo nie przechowuje plików — ale audio przechodzi przez naszego dostawcę AI do transkrypcji. Dla procesów regulowanych skonsultuj się z zespołem compliance.' },
        { q: 'Jaka jest maksymalna długość dyktowania?', a: 'Do 25 MB. Przy 64 kbps mono to około 50 minut dyktowania. Dla dłuższych nagrań podziel na rozdziały lub obniż bitrate.' },
      ]}
      relatedLinks={[
        { href: '/pl/voice-memo-to-text', label: 'Notatka głosowa na tekst' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
