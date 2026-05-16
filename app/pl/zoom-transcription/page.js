import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'ja': 'https://mictoo.com/ja/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Transkrypcja Zoom — Z nagrań Zoom na tekst za darmo | Mictoo',
  description: 'Transkrybuj za darmo nagrania spotkań Zoom na tekst. Działa z MP4 i M4A eksportowanymi z Zoom Cloud lub Local Recording. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/zoom-transcription', languages: LANGS },
}

export default function PlZoomPage() {
  return (
    <LandingLayout
      badge="Zoom · MP4 · Za darmo"
      h1={<>Transkrypcja Zoom<br /><span className="text-brand-600">Nagrania Zoom na tekst</span></>}
      subtitle="Prześlij nagranie swojego calla Zoom i otrzymaj czystą transkrypcję w kilka sekund. Za darmo, bez konta. Działa z MP4 z Cloud Recording lub Local Recording."
      defaultLanguage="pl"
      features={[
        { icon: '⚡', title: 'Szybko i za darmo', desc: '25-minutowe spotkanie Zoom jest zwykle transkrybowane w mniej niż 30 sekund. 100% za darmo, bez konta, bez karty kredytowej.' },
        { icon: '🎯', title: 'Wysoka dokładność', desc: 'Audio z Zoom (zwykle czyste, z jednym mówcą naraz) daje doskonałe rezultaty z Whisperem — dokładność typowo >95%.' },
        { icon: '📥', title: 'Eksport .txt lub .srt', desc: 'Pobierz transkrypcję jako prosty tekst lub jako plik napisów SRT z timecodes.' },
      ]}
      faq={[
        { q: 'Jak włączyć nagrywanie w Zoom?', a: 'W ustawieniach Zoom: przejdź do Recording → włącz Local Recording (na twoim komputerze) lub Cloud Recording (w chmurze Zoom, wymaga planu płatnego). Podczas calla kliknij Record.' },
        { q: 'Czy Zoom ma już automatyczną transkrypcję?', a: 'Tak, Zoom oferuje live transcription jeśli włączysz, ale plik pozostaje w ekosystemie Zoom i nie zawsze można go pobrać jako przenośny .txt. Mictoo daje przenośny .txt lub .srt do użycia gdziekolwiek.' },
        { q: 'Czy mogę otrzymać napisy SRT do wideo Zoom?', a: 'Tak. Po transkrypcji pobierz plik .srt z timecodes i użyj jako napisów na YouTube, Vimeo lub w dowolnym edytorze wideo.' },
        { q: 'Co z poufną treścią?', a: 'Mictoo nie przechowuje plików. Audio jest wysyłane do naszego dostawcy AI do transkrypcji i odrzucane. Dla calli z regulowanymi danymi sprawdź politykę firmy dotyczącą zewnętrznych usług AI.' },
        { q: 'Jaki jest maksymalny czas nagrania Zoom?', a: 'Do 25 MB na plik. Call 30-minutowy w mono 64 kbps się zmieści; dla dłuższych calli wyodrębnij tylko audio (M4A) lub skompresuj wideo.' },
      ]}
      relatedLinks={[
        { href: '/pl/meeting-transcription', label: 'Transkrypcja spotkań' },
        { href: '/pl/google-meet-transcription', label: 'Transkrypcja Google Meet' },
        { href: '/pl/teams-meeting-transcription', label: 'Transkrypcja Teams' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
