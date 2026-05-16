import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'pl': 'https://mictoo.com/pl/google-meet-transcription',
  'ja': 'https://mictoo.com/ja/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Transkrypcja Google Meet — Transkrybuj nagrania Meet za darmo | Mictoo',
  description: 'Transkrybuj za darmo nagrania Google Meet na tekst. Działa z MP4 eksportowanymi z Google Drive. Bez rejestracji, bez instalacji.',
  alternates: { canonical: 'https://mictoo.com/pl/google-meet-transcription', languages: LANGS },
}

export default function PlGoogleMeetPage() {
  return (
    <LandingLayout
      badge="Google Meet · MP4 · Za darmo"
      h1={<>Transkrypcja Google Meet<br /><span className="text-brand-600">Przekształć nagrania Meet w tekst</span></>}
      subtitle="Prześlij MP4 eksportowany z Google Meet i otrzymaj czystą transkrypcję w kilka sekund. Za darmo, bez rejestracji. Uzupełnia napisy live Google o uporządkowane podsumowanie spotkania."
      defaultLanguage="pl"
      features={[
        { icon: '🎬', title: 'Bezpośrednie wsparcie MP4', desc: 'Google Meet eksportuje nagrania do Google Drive jako MP4. Pobierz plik i prześlij do Mictoo — bez konwersji i ekstrakcji.' },
        { icon: '🧾', title: 'Czyściej niż napisy live', desc: 'Napisy live Google wychwytują sens, ale pomijają interpunkcję i nazwiska. Mictoo tworzy dopracowaną transkrypcję do wklejenia w Docs, Notion lub email z podsumowaniem.' },
        { icon: '🔒', title: 'Prywatnie', desc: 'Pliki są przetwarzane i natychmiastowo usuwane. Nigdy nie zachowujemy ani audio spotkania, ani transkrypcji.' },
      ]}
      faq={[
        { q: 'Jak pobrać nagranie Google Meet?', a: 'Otwórz Google Drive → Mój dysk → Meet Recordings (folder tworzony automatycznie). Znajdź spotkanie, kliknij ⋮ → Pobierz. Plik to MP4 — prześlij do Mictoo tak jak jest.' },
        { q: 'Po co używać Mictoo, jeśli Google Meet ma napisy live?', a: 'Napisy live są przydatne podczas spotkania, ale nie są zapisywane domyślnie i nie mają interpunkcji ani wielkich liter. Mictoo daje dopracowaną, edytowalną transkrypcję, gotową do udostępnienia lub ponownego wykorzystania.' },
        { q: 'Czy mogę otrzymać etykiety mówców (Host, Gość 1 itd.)?', a: 'Nie automatycznie w planie darmowym. Transkrypcja to pojedynczy strumień tekstu — etykiety można dodać ręcznie w edytorze przeglądarki.' },
        { q: 'Jaki jest maksymalny czas nagrania Meet?', a: 'Do 25 MB na plik. MP4 z Google Meet w domyślnej jakości waży około 50 MB na 30 minut; rozważ wyodrębnienie ścieżki audio (M4A) lub kompresję wideo, aby zmieścić się w limicie.' },
        { q: 'Czy funkcja "Take notes for me" Google to to samo?', a: 'Nie — funkcja "Take notes for me" w Workspace generuje podsumowanie AI, nie wierną transkrypcję. Mictoo daje pełną transkrypcję słowo w słowo, którą możesz osobno podsumować w razie potrzeby.' },
      ]}
      relatedLinks={[
        { href: '/pl/zoom-transcription', label: 'Transkrypcja Zoom' },
        { href: '/pl/meeting-transcription', label: 'Transkrypcja spotkań' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
