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
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: 'Notatka głosowa na tekst — Transkrybuj Voice Memos iPhone za darmo | Mictoo',
  description: 'Konwertuj notatki głosowe iPhone i nagrania Android na tekst za darmo. Obsługuje M4A i MP3. Bez rejestracji, bez aplikacji. Precyzyjna transkrypcja AI.',
  alternates: { canonical: 'https://mictoo.com/pl/voice-memo-to-text', languages: LANGS },
}

export default function PlVoiceMemoPage() {
  return (
    <LandingLayout
      badge="iPhone · Android · Za darmo"
      h1={<>Notatka głosowa na tekst<br /><span className="text-brand-600">Darmowa transkrypcja online</span></>}
      subtitle="Prześlij notatkę głosową iPhone lub nagranie Android i otrzymaj precyzyjną transkrypcję w kilka sekund. Bez rejestracji, bez aplikacji do instalacji."
      defaultLanguage="pl"
      features={[
        { icon: '📱', title: 'iPhone i Android', desc: 'Voice Memos iPhone eksportują się jako .m4a — w pełni obsługiwane. Dyktafony Android eksportują w .m4a, .mp3 lub .wav — wszystkie obsługiwane.' },
        { icon: '🧠', title: 'Idealne do notatek i pomysłów', desc: 'Przekształć notatki głosowe, sesje brainstormingu i przypomnienia w przeszukiwalny tekst do wklejenia w Notion, Obsidian lub ulubiony edytor.' },
        { icon: '🆓', title: '100% za darmo', desc: 'Bez subskrypcji, bez zakupów w aplikacji, bez znaku wodnego. Bez miesięcznego limitu — prześlij notatkę, kiedykolwiek potrzebujesz transkrypcji.' },
      ]}
      faq={[
        { q: 'Jak przesłać Voice Memo z iPhone na komputer?', a: 'Otwórz aplikację Voice Memos, dotknij notatki, potem "…" i "Udostępnij" → "Zapisz w Plikach" lub AirDrop na Mac. Następnie prześlij plik .m4a do Mictoo na komputerze.' },
        { q: 'Czy mogę transkrybować bezpośrednio na iPhone?', a: 'Tak. Otwórz mictoo.com w Safari na iPhone, dotknij obszaru uploadu i wybierz Voice Memo z aplikacji Pliki. Transkrypcja pojawia się w kilka sekund i możesz ją skopiować lub pobrać jako .txt.' },
        { q: 'W jakim formacie Android zapisuje nagrania głosowe?', a: 'Większość telefonów Android zapisuje w .m4a lub .mp3 w zależności od aplikacji dyktafonu. Oba formaty są obsługiwane. Niektóre aplikacje używają .amr — najpierw przekonwertuj na .m4a dowolnym darmowym konwerterem.' },
        { q: 'Czy moje nagranie głosowe jest prywatne?', a: 'Tak. Pliki są wysyłane do silnika AI tylko do transkrypcji i nigdy nie przechowywane na naszych serwerach. Transkrypcja pozostaje w twojej przeglądarce i jest tylko twoja.' },
        { q: 'A jeśli moja notatka przekracza 25 MB?', a: 'Voice Memos iPhone zajmują ~1 MB na minutę w domyślnej jakości — więc 25 minut mieści się w 25 MB. Dla dłuższych notatek zmień jakość Voice Memos na "Skompresowane" w Ustawienia → Voice Memos, lub podziel nagranie.' },
      ]}
      relatedLinks={[
        { href: '/pl', label: 'Wszystkie formaty' },
        { href: '/pl/meeting-transcription', label: 'Transkrypcja spotkań' },
        { href: '/pl/interview-transcription', label: 'Transkrypcja wywiadów' },
      ]}
    />
  )
}
