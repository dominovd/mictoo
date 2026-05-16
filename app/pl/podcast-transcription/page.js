import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'Transkrypcja podcastów — Darmowy generator transkryptów | Mictoo',
  description: 'Transkrybuj odcinki podcastów na tekst za darmo. Prześlij plik audio i otrzymaj pełną transkrypcję natychmiastowo. Obsługa MP3, M4A, WAV. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/podcast-transcription', languages: LANGS },
}

export default function PlPodcastPage() {
  return (
    <LandingLayout
      badge="Podcasterzy · YouTube · Za darmo"
      h1={<>Transkrypcja podcastów<br /><span className="text-brand-600">Darmowy generator transkryptów</span></>}
      subtitle="Przekształć dowolny odcinek podcastu w pełną transkrypcję tekstową w kilka sekund. Idealne do show notes, postów na blog, SEO i dostępności. Prześlij MP3, M4A lub WAV — bez konta."
      defaultLanguage="pl"
      features={[
        { icon: '🎙️', title: 'Wszystkie formaty podcastów', desc: 'Prześlij swoje pliki MP3, M4A, WAV, OGG lub FLAC. Działa ze wszystkimi eksportami platform hostingowych podcastów.' },
        { icon: '📝', title: 'Show notes i artykuły', desc: 'Przekształć transkrypcję w treść zoptymalizowaną pod SEO, show notes lub przeszukiwalne archiwum.' },
        { icon: '♿', title: 'Dostępność', desc: 'Oferuj transkrypcję, aby uczynić swój podcast dostępnym dla osób niesłyszących i niedosłyszących.' },
      ]}
      faq={[
        { q: 'Jak transkrybować odcinek podcastu za darmo?', a: 'Pobierz swój odcinek w formacie MP3 lub M4A, prześlij powyżej i otrzymaj pełną transkrypcję w kilka sekund.' },
        { q: 'Czy mogę transkrybować podcast ze Spotify?', a: 'Jeśli masz dostęp do pliku audio (np. swój własny program), prześlij go bezpośrednio. Dla podcastów stron trzecich pobierz odcinek przez aplikację umożliwiającą słuchanie offline, a następnie zaimportuj plik.' },
        { q: 'Dlaczego tworzyć transkrypcję swojego podcastu?', a: 'Transkrypcje poprawiają SEO (Google indeksuje tekst), czynią treść dostępną dla niesłyszących, mogą być wykorzystywane jako artykuły lub newslettery i pomagają słuchaczom przeglądać odcinek.' },
        { q: 'Czy transkrypcja jest dokładna?', a: 'Dla dobrze nagranego podcastu z jednym mówcą lub czystym duetem dokładność zwykle przekracza 95%. Spada przy nakładających się głosach, mocnych akcentach lub słabej jakości audio.' },
        { q: 'Czy mogę transkrybować wywiad na dwa głosy?', a: 'Tak. Transkrypcja przechwytuje wszystkie wypowiedzi. Etykiety mówców (Host / Gość) dodaje się ręcznie w edytorze przeglądarki.' },
        { q: 'Jaki jest maksymalny rozmiar?', a: 'Do 25 MB. Większość MP3 w 128 kbps mieści się w tym limicie dla 25 minut. Dla dłuższych odcinków obniż bitrate lub podziel plik.' },
      ]}
      relatedLinks={[
        { href: '/pl/transcribe-mp3-to-text', label: 'MP3 na tekst' },
        { href: '/pl/m4a-to-text', label: 'M4A na tekst' },
        { href: '/pl/interview-transcription', label: 'Transkrypcja wywiadów' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
