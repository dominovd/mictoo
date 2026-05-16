import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Transkrypcja Microsoft Teams — Transkrybuj nagrania Teams | Mictoo',
  description: 'Transkrybuj za darmo nagrania spotkań Microsoft Teams na tekst. Działa z MP4 z OneDrive lub SharePoint. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/teams-meeting-transcription', languages: LANGS },
}

export default function PlTeamsPage() {
  return (
    <LandingLayout
      badge="Microsoft Teams · MP4 · Za darmo"
      h1={<>Transkrypcja Microsoft Teams<br /><span className="text-brand-600">Spotkania Teams w tekście</span></>}
      subtitle="Przekształć nagranie swojego spotkania Microsoft Teams w czystą transkrypcję tekstową lub plik napisów SRT. Za darmo, bez konta. Działa z MP4 z OneDrive lub SharePoint."
      defaultLanguage="pl"
      features={[
        { icon: '🏢', title: 'Dostosowane do procesów Teams', desc: 'Pobierz nagranie z OneDrive lub SharePoint — zwykle w "Recordings" w chacie spotkania — i prześlij do Mictoo. MP4 działa bezpośrednio.' },
        { icon: '📤', title: 'Udostępnialne transkrypcje', desc: 'Wklej transkrypcję w chat Teams, OneNote lub komponent Loop, aby udostępnić uczestnikom, którzy ominęli spotkanie.' },
        { icon: '🌐', title: 'Wszystkie języki spotkań', desc: 'Transkrybuje polski, angielski, hiszpański, francuski, niemiecki, włoski, holenderski, japoński, chiński i ponad 40 innych. Język jest wykrywany automatycznie.' },
      ]}
      faq={[
        { q: 'Gdzie Teams zapisuje moje nagrania spotkań?', a: 'W większości organizacji Teams zapisuje nagrania w OneDrive nagrywającego (chaty 1:1 / grupowe) lub w folderze SharePoint kanału (spotkania kanału). Otwórz nagranie, kliknij Pobierz i otrzymasz plik MP4.' },
        { q: 'Czy Teams nie oferuje już transkrypcji?', a: 'Microsoft Teams oferuje wbudowaną transkrypcję live, jeśli admin ją włączył, ale plik pozostaje w ekosystemie Teams i nie zawsze można go pobrać. Mictoo daje przenośny .txt lub .srt do użycia gdziekolwiek.' },
        { q: 'Czy mogę otrzymać napisy SRT do wideo Teams?', a: 'Tak. Po transkrypcji możesz pobrać plik .srt z timestampami i użyć jako napisów na YouTube, Vimeo lub w dowolnym edytorze wideo.' },
        { q: 'A co z poufną treścią spotkań?', a: 'Mictoo nie przechowuje plików. Audio jest wysyłane do naszego dostawcy AI tylko do transkrypcji i natychmiastowo odrzucane. Dla spotkań z regulowanymi danymi sprawdź politykę swojej organizacji dotyczącą zewnętrznych usług AI.' },
        { q: 'Jaki jest maksymalny czas nagrania Teams?', a: 'Do 25 MB na plik. Większość MP4 z Teams przekracza ten limit dla spotkań powyżej 30 minut — wyodrębnij audio (M4A) lub użyj kompresora wideo.' },
      ]}
      relatedLinks={[
        { href: '/pl/zoom-transcription', label: 'Transkrypcja Zoom' },
        { href: '/pl/meeting-transcription', label: 'Transkrypcja spotkań' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
