import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'pt': 'https://mictoo.com/pt/meeting-transcription',
  'pl': 'https://mictoo.com/pl/meeting-transcription',
  'ja': 'https://mictoo.com/ja/meeting-transcription',
  'ko': 'https://mictoo.com/ko/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: 'Transkrypcja spotkań — Z calli Zoom/Teams/Meet na tekst | Mictoo',
  description: 'Transkrybuj za darmo nagrania spotkań Zoom, Teams lub Google Meet. Prześlij MP4 lub M4A i otrzymaj transcript + podsumowanie AI w kilka sekund. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/meeting-transcription', languages: LANGS },
}

export default function PlMeetingPage() {
  return (
    <LandingLayout
      badge="Zoom · Teams · Meet · Za darmo"
      h1={<>Transkrypcja spotkań<br /><span className="text-brand-600">Calle na tekst, za darmo</span></>}
      subtitle="Prześlij nagranie swojego spotkania (Zoom, Teams, Google Meet lub dowolny MP4/M4A) i otrzymaj czystą transkrypcję oraz podsumowanie AI z zadaniami. Bez konta."
      defaultLanguage="pl"
      features={[
        { icon: '🎥', title: 'Każda platforma', desc: 'Działa z Zoom, Microsoft Teams, Google Meet, Webex, Loom — każdą platformą eksportującą MP4 lub M4A.' },
        { icon: '✨', title: 'Podsumowanie AI + zadania', desc: 'Po transkrypcji otrzymujesz automatycznie podsumowanie, kluczowe punkty i zadania — gotowe do follow-up emailem.' },
        { icon: '🔒', title: 'Prywatnie', desc: 'Bez bota AI na twoich callach. Ty nagrywasz, ty przesyłasz, ty kontrolujesz. Pliki są przetwarzane i natychmiastowo usuwane.' },
      ]}
      faq={[
        { q: 'Jak transkrybować spotkanie Zoom?', a: 'W Zoom: włącz Local Recording lub Cloud Recording przed callem. Po spotkaniu pobierz MP4 (lub M4A tylko audio) i prześlij tutaj.' },
        { q: 'Jak transkrybować spotkanie Teams?', a: 'Microsoft Teams zapisuje nagrania w OneDrive lub SharePoint. Otwórz, kliknij Pobierz, otrzymaj MP4 — prześlij bezpośrednio do Mictoo.' },
        { q: 'Jak transkrybować spotkanie Google Meet?', a: 'Google Meet eksportuje w MP4 do Google Drive (folder "Meet Recordings"). Pobierz i prześlij tutaj.' },
        { q: 'Czy mogę otrzymać etykiety mówców automatycznie?', a: 'Nie w planie darmowym. Transkrypcja to pojedynczy strumień. Etykiety (Host / Uczestnik 1 / Uczestnik 2) można dodać ręcznie w edytorze przeglądarki.' },
        { q: 'Jaki jest maksymalny czas spotkania?', a: 'Do 25 MB na plik. Dla spotkań 30+ minutowych eksportuj w niskim bitratie lub wyodrębnij tylko ścieżkę audio (M4A), aby zmieścić się w limicie.' },
      ]}
      relatedLinks={[
        { href: '/pl/zoom-transcription', label: 'Transkrypcja Zoom' },
        { href: '/pl/google-meet-transcription', label: 'Transkrypcja Google Meet' },
        { href: '/pl/teams-meeting-transcription', label: 'Transkrypcja Teams' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
