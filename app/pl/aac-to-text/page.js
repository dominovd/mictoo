import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'pl': 'https://mictoo.com/pl/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC na tekst — Darmowa transkrypcja audio AAC online | Mictoo',
  description: 'Transkrybuj pliki audio AAC na tekst za darmo. Przeciągnij swój .aac, .m4a lub inny plik zakodowany w AAC i otrzymaj precyzyjną transkrypcję w kilka sekund.',
  alternates: { canonical: 'https://mictoo.com/pl/aac-to-text', languages: LANGS },
}

export default function PlAacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · M4A · Za darmo"
      h1={<>AAC na tekst<br /><span className="text-brand-600">Darmowa transkrypcja AAC online</span></>}
      subtitle="Prześlij swój plik audio AAC i otrzymaj precyzyjną transkrypcję tekstową w kilka sekund. Działa z .aac i .m4a (AAC wewnątrz kontenera MP4). Bez rejestracji."
      defaultLanguage="pl"
      features={[
        { icon: '🎧', title: 'Natywne wsparcie AAC', desc: 'AAC to domyślny kodek audio dla urządzeń Apple, YouTube i większości serwisów streamingowych. Mictoo akceptuje .aac i .m4a bezpośrednio bez konwersji.' },
        { icon: '🎯', title: 'Wysoka precyzja', desc: 'AAC zachowuje wysoką jakość przy małych rozmiarach plików — idealne dla transkrypcji AI. Czyste nagrania są transkrybowane typowo z dokładnością 95%+.' },
        { icon: '📥', title: 'Edytuj i eksportuj', desc: 'Przejrzyj transkrypcję w przeglądarce, popraw nazwiska i interpunkcję, a następnie pobierz jako prosty .txt lub napisy .srt.' },
      ]}
      faq={[
        { q: 'Czym jest plik AAC?', a: 'AAC (Advanced Audio Coding) to stratny format kompresji audio używany przez iTunes, Apple Music, YouTube i większość aplikacji podcastowych. Pliki mają rozszerzenie .aac lub .m4a. AAC oferuje lepszą jakość niż MP3 przy tym samym bitratie.' },
        { q: 'Jaka jest różnica między .aac i .m4a?', a: 'Oba zawierają audio zakodowane w AAC. .aac to surowy strumień audio; .m4a opakowuje go w kontener MP4 (tak zapisują iTunes i Voice Memos iPhone). Mictoo obsługuje oba bezpośrednio.' },
        { q: 'Jak konwertuję AAC na tekst za darmo?', a: 'Przeciągnij swój plik AAC do obszaru uploadu powyżej. Mictoo transkrybuje go automatycznie przez AI i pokazuje tekst w kilka sekund. Skopiuj lub pobierz jako .txt.' },
        { q: 'Jaki jest maksymalny rozmiar pliku AAC?', a: 'Do 25 MB na upload. AAC w 128 kbps daje około 25 minut audio w 25 MB; w 64 kbps prawie godzinę. Dla dłuższych plików obniż bitrate lub podziel na segmenty.' },
        { q: 'Czy mogę otrzymać timestamps dla transkrypcji AAC?', a: 'Tak. Po transkrypcji możesz pobrać plik .srt z precyzyjnymi timestampami — przydatne do synchronizacji transkrypcji z oryginalnym audio lub wideo.' },
      ]}
      relatedLinks={[
        { href: '/pl/m4a-to-text', label: 'M4A na tekst' },
        { href: '/pl/transcribe-mp3-to-text', label: 'MP3 na tekst' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
