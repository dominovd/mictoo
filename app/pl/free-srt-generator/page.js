import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'pl': 'https://mictoo.com/pl/free-srt-generator',
  'ja': 'https://mictoo.com/ja/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'Darmowy generator SRT — Twórz napisy online | Mictoo',
  description: 'Generuj pliki SRT z dowolnego audio lub wideo za darmo. Prześlij plik, otrzymaj transkrypcję ze znacznikami czasu i pobierz gotowy .srt. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/free-srt-generator', languages: LANGS },
}

export default function PlSrtGeneratorPage() {
  return (
    <LandingLayout
      badge="SRT · Napisy · Za darmo"
      h1={<>Darmowy generator SRT<br /><span className="text-brand-600">Twórz napisy online</span></>}
      subtitle="Prześlij dowolny plik audio lub wideo i pobierz gotowy plik SRT w kilka sekund. Kompatybilny z YouTube, Premiere Pro, DaVinci Resolve i dowolnym edytorem wideo."
      defaultLanguage="pl"
      features={[
        { icon: '🎬', title: 'SRT gotowy do YouTube', desc: 'Prześlij plik .srt bezpośrednio do YouTube Studio, aby dodać napisy. Timestamps synchronizują się automatycznie.' },
        { icon: '⏱️', title: 'Precyzyjne timecodes', desc: 'Każdy segment napisów otrzymuje timestamp HH:MM:SS,ms — standardowy format używany przez wszystkie profesjonalne narzędzia wideo.' },
        { icon: '🌍', title: '50+ języków', desc: 'Generuj SRT we wszystkich językach — polski, angielski, hiszpański, francuski, japoński i kolejne 46. Język jest wykrywany automatycznie.' },
      ]}
      faq={[
        { q: 'Czym jest plik SRT?', a: 'Plik SRT (SubRip Subtitle) to plik tekstowy zawierający wpisy napisów ze znacznikami czasu. Każdy wpis ma numer sekwencji, czas początku → końca i tekst napisu. SRT to najbardziej powszechnie obsługiwany format napisów.' },
        { q: 'Jak wygenerować SRT z wideo?', a: 'Prześlij plik wideo lub audio powyżej. Mictoo transkrybuje go i dodaje timestamps do każdego segmentu. Po transkrypcji kliknij przycisk .srt, aby pobrać plik napisów.' },
        { q: 'Jak dodać napisy SRT do wideo na YouTube?', a: 'W YouTube Studio otwórz swoje wideo i kliknij Napisy. Wybierz Dodaj język, potem Prześlij plik i wybierz swój .srt. YouTube zsynchronizuje napisy automatycznie.' },
        { q: 'Czy plik SRT działa w Premiere Pro i DaVinci Resolve?', a: 'Tak. W Premiere Pro: Plik → Importuj → wybierz swój .srt. W DaVinci Resolve: otwórz stronę Edit, przejdź do Plik → Importuj Napisy i wybierz .srt.' },
        { q: 'Czy generator SRT jest naprawdę darmowy?', a: 'Tak, całkowicie darmowy. Bez konta, bez subskrypcji, bez znaku wodnego. Prześlij plik i pobierz SRT — to wszystko.' },
        { q: 'Jaki jest maksymalny rozmiar pliku?', a: 'Do 25 MB. Dla dłuższych filmów wyodrębnij najpierw ścieżkę audio, aby zmniejszyć rozmiar, lub podziel wideo na krótsze segmenty.' },
        { q: 'Czy mogę wygenerować SRT z pliku audio (MP3, WAV)?', a: 'Tak. Mictoo generuje SRT z dowolnego formatu audio lub wideo: MP3, MP4, WAV, M4A, OGG, WEBM, FLAC.' },
        { q: 'Czy mogę edytować napisy przed pobraniem?', a: 'Tak. Po transkrypcji możesz edytować tekst w przeglądarce przed pobraniem. Struktura timestamps jest zachowana w eksportowanym SRT.' },
      ]}
      relatedLinks={[
        { href: '/pl/timestamped-transcription', label: 'Transkrypcja ze znacznikami czasu' },
        { href: '/pl/transcribe-video-to-text', label: 'Wideo na tekst' },
        { href: '/pl/transcribe-mp3-to-text', label: 'MP3 na tekst' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
