import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube na tekst — Darmowa transkrypcja filmów YouTube | Mictoo',
  description: 'Transkrybuj filmy YouTube na tekst i napisy SRT za darmo. Najpierw pobierz audio, potem prześlij do Mictoo. MP3, MP4, M4A. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/youtube-to-text', languages: LANGS },
}

export default function PlYouTubeToTextPage() {
  return (
    <LandingLayout
      badge="YouTube · SRT · Za darmo"
      h1={<>YouTube na tekst<br /><span className="text-brand-600">Darmowa transkrypcja filmów YouTube</span></>}
      subtitle="Przekształć dowolny film YouTube w transkrypcję lub plik SRT. Za darmo, bez rejestracji. Pobierz audio lub wideo, a potem prześlij plik do Mictoo."
      defaultLanguage="pl"
      features={[
        { icon: '🎬', title: 'Każdy film YouTube', desc: 'Tutoriale, podcasty, wywiady, wykłady, vlogi — dowolny film z czystą mową. Języki wykrywane automatycznie, ponad 50 obsługiwanych.' },
        { icon: '📺', title: 'SRT do napisów', desc: 'Po transkrypcji pobierz gotowy plik .srt. Prześlij do YouTube Studio, aby dodać precyzyjne napisy do swoich filmów w kilka sekund.' },
        { icon: '📝', title: 'Wykorzystaj swoje treści', desc: 'Przekształć film w post na blog, show notes, cytaty na media społecznościowe lub skrypt do tłumaczenia. Transkrypcja jest w pełni edytowalna w przeglądarce.' },
      ]}
      faq={[
        { q: 'Jak pobrać audio z filmu YouTube?', a: 'Dla swoich filmów: otwórz YouTube Studio → Treść → kliknij film → Pobierz. Dla filmów stron trzecich opcje zależą od licencji filmu i Warunków YouTube. Wielu użytkowników najpierw pobiera własne treści i przesyła tutaj.' },
        { q: 'Czy Mictoo może pobrać bezpośrednio z URL YouTube?', a: 'Nie — aby uszanować Warunki YouTube i prawa twórców, Mictoo nie pobiera treści przez URL. Prześlij plik audio lub wideo, do którego masz prawo do transkrypcji.' },
        { q: 'Jak dodać napisy Mictoo do mojego filmu YouTube?', a: 'Po transkrypcji kliknij "Pobierz .srt", aby otrzymać plik napisów. W YouTube Studio: otwórz film → Napisy → Dodaj język → Prześlij plik → wybierz .srt. Napisy synchronizują się automatycznie.' },
        { q: 'Czy transkrypcja działa dla filmów nieanglojęzycznych?', a: 'Tak. Mictoo automatycznie wykrywa język mówiony i obsługuje ponad 50 języków — polski, hiszpański, francuski, niemiecki, rosyjski, japoński, chiński, arabski itp. Ustaw język ręcznie, jeśli wykrywanie pomyli się.' },
        { q: 'Jaki jest maksymalny rozmiar filmu?', a: 'Do 25 MB za upload. 25-minutowy eksport audio w 128 kbps mieści się. Dla dłuższych filmów wyodrębnij ścieżkę audio (M4A jest najwydajniejsze) lub podziel plik na kilka części.' },
      ]}
      relatedLinks={[
        { href: '/pl/transcribe-video-to-text', label: 'Wideo na tekst' },
        { href: '/pl/free-srt-generator', label: 'Generator SRT' },
        { href: '/pl/podcast-transcription', label: 'Transkrypcja podcastów' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
