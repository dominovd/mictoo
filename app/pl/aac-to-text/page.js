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
  'ja': 'https://mictoo.com/ja/aac-to-text',
  'ko': 'https://mictoo.com/ko/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC na tekst — Darmowa transkrypcja audio AAC online | Mictoo',
  description: 'Transkrybuj pliki audio AAC na tekst za darmo. Przeciągnij swój .aac, .m4a lub inny plik zakodowany w AAC i otrzymaj precyzyjną transkrypcję w kilka sekund.',
  alternates: { canonical: 'https://mictoo.com/pl/aac-to-text', languages: LANGS },

  openGraph: {
    title: "AAC na tekst — Darmowa transkrypcja audio AAC online | Mictoo",
    description: "Transkrybuj pliki audio AAC na tekst za darmo. Przeciągnij swój .aac, .m4a lub inny plik zakodowany w AAC i otrzymaj precyzyjną transkrypcję w kilka sekund.",
    url: "https://mictoo.com/pl/aac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AAC na tekst — Darmowa transkrypcja audio AAC online | Mictoo",
    description: "Transkrybuj pliki audio AAC na tekst za darmo. Przeciągnij swój .aac, .m4a lub inny plik zakodowany w AAC i otrzymaj precyzyjną transkrypcję w kilka sekund.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PlAacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · M4A · Za darmo"
      h1={<>AAC na tekst<br /><span className="text-brand-600">Darmowa transkrypcja AAC online</span></>}
      subtitle="Prześlij swój plik audio AAC i otrzymaj precyzyjną transkrypcję tekstową w kilka sekund. Działa z .aac i .m4a (AAC wewnątrz kontenera MP4). Bez rejestracji."
      defaultLanguage="pl"
      valueBlock={
        <>
          <p>AAC to kodek audio, nie zawsze widoczny jako osobny format pliku. Może występować jako czysty .aac, wewnątrz M4A/MP4 albo w eksportach wideo i podcastów.</p>
          <p>Mictoo pozwala przesłać takie pliki bezpośrednio, transkrybować mowę i wyeksportować wynik bez tworzenia pośredniej kopii WAV.</p>
        </>
      }
      howItWorks={[
        { title: 'Prześlij AAC lub M4A', desc: 'Dodaj .aac, .m4a albo plik multimedialny używający audio AAC.' },
        { title: 'Ścieżka jest przetwarzana', desc: 'Mictoo czyta audio i przygotowuje edytowalną transkrypcję.' },
        { title: 'Edytuj i eksportuj', desc: 'Popraw nazwy lub terminy techniczne i pobierz TXT albo SRT.' },
      ]}
      whyUse={{
        title: 'Dlaczego Mictoo do AAC',
        bullets: [
          { title: 'Bezpośrednie przesyłanie', desc: 'Nie trzeba konwertować do WAV lub MP3 przed transkrypcją.' },
          { title: 'Dobre dla wyraźnej mowy skompresowanej', desc: 'AAC utrzymuje czytelny głos przy relatywnie małych plikach.' },
          { title: 'Przydatne przy źródłach wideo', desc: 'Wiele klipów i eksportów mobilnych używa AAC wewnętrznie.' },
          { title: 'Niedestrukcyjny przepływ pracy', desc: 'Pracuj na kopii albo oryginale bez zmieniania pliku.' },
        ],
      }}
      useCases={{
        title: 'Typowe zastosowania AAC',
        items: [
          { title: 'Podcasty i CDN', desc: 'Konwertuj odcinki lub wycinki audio zakodowane w AAC.' },
          { title: 'Fragmenty YouTube lub MP4', desc: 'Transkrybuj ścieżkę głosu po oddzieleniu audio.' },
          { title: 'Aplikacje mobilne', desc: 'Przetwarzaj audio eksportowane z aplikacji używających AAC domyślnie.' },
          { title: 'Lekkie nagrania', desc: 'Uzyskaj tekst z małych plików bez powiększania ich do WAV.' },
        ],
      }}
      proTips={{
        title: 'Wskazówki dla AAC',
        tips: [
          { title: 'Nie podbijaj sztucznie bitrate', desc: 'Nie odzyska to utraconych szczegółów, a tylko zwiększy plik.' },
          { title: 'Użyj M4A, jeśli aplikacja ma problem', desc: 'Niektóre narzędzia lepiej obsługują kontener M4A niż czysty strumień .aac.' },
          { title: 'Sprawdź nazwy własne', desc: 'Kompresja może wpływać na marki, nazwiska i terminy techniczne.' },
        ],
      }}
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
