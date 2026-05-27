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
  'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
  'ko': 'https://mictoo.com/ko/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Transkrypcja Microsoft Teams — transkrybuj spotkania | Mictoo',
  description:
    'Darmowa transkrypcja Microsoft Teams. Prześlij swoje nagranie (MP4) z OneDrive lub SharePoint i otrzymaj czystą transkrypcję AI w kilka sekund. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/teams-meeting-transcription', languages: LANGS },
}

export default function PlTeamsPage() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="TEAMS · ONEDRIVE · ZA DARMO"
      h1={<>Transkrypcja Microsoft Teams<br /><span className="text-brand-600">Darmowa transkrypcja spotkań Teams</span></>}
      subtitle="Zamień swoje nagranie Teams w czysty tekst. Upuść MP4 z OneDrive lub SharePoint, w sekundach masz transkrypcję. Bez rejestracji, bez opłaty za minutę."
      howItWorks={[
        { icon: '☁️', title: 'Pobierz z OneDrive lub SharePoint', desc: 'Nagrania Teams są w OneDrive organizatora (spotkania poza kanałem) lub na stronie SharePoint (spotkania kanału). Pobierz jako MP4. Dla długich spotkań wyciągnij audio wcześniej.' },
        { icon: '⚡', title: 'Upuść plik', desc: 'Wyciągamy audio z MP4 i wysyłamy do Whisper large-v3. Spotkanie 30-minutowe jest gotowe w około minutę.' },
        { icon: '📋', title: 'Weź transkrypcję', desc: 'Przeczytaj w przeglądarce, skopiuj lub pobierz jako TXT lub SRT. Popraw błędne nazwy lub terminy techniczne inline przed eksportem.' },
      ]}
      whyUse={{ title: 'Dlaczego Mictoo dla spotkań Teams', bullets: [
        { title: 'Działa bez specyficznej licencji Microsoft 365 na transkrypcję', desc: 'Dopóki masz plik nagrania, możesz tutaj transkrybować. Nie potrzeba Teams Premium ani konkretnych planów Office.' },
        { title: 'Silniejsze pokrycie nieangielskie i akcentów', desc: 'Transkrypcja Microsoft Teams działa dobrze w angielskim i głównych językach zachodnioeuropejskich. Whisper large-v3 pokrywa ponad 50 języków z silniejszym traktowaniem akcentów i rozmów dwujęzycznych.' },
        { title: 'Za darmo, bez licznika minut', desc: 'Transkrypcja Teams jest wbudowana w twoją licencję, ale ograniczona feature gates. Mictoo nie ma cap spotkania ani miesięcznego limitu minut.' },
        { title: 'Eksport SRT dla edytorów wideo', desc: 'Transkrypcja Teams żyje w aplikacji Teams lub pobiera się jako VTT. My eksportujemy oba, TXT i czysty SRT, drop-in kompatybilny z Premiere, DaVinci, CapCut i YouTube Studio.' },
        { title: 'Prywatność domyślnie', desc: 'Plik jest strumieniowany do dostawcy transkrypcji, przetwarzany i odrzucany. Nie przechowujemy twojego audio spotkania.' },
      ]}}
      useCases={{ title: 'Do czego ludzie transkrybują spotkania Teams', items: [
        { title: 'Protokoły spotkań projektowych', desc: 'Wklej transkrypcję w Confluence, Notion lub na stronie SharePoint. Kto przegapił spotkanie, czyta tekst w 5 minut zamiast oglądać 60 minut wideo.' },
        { title: 'Przegląd calli klientów dla zespołów account', desc: 'Zapisz transkrypcję obok deala w Salesforce, Dynamics lub HubSpot. Wyszukanie cytatu do emaila follow-up zajmuje sekundy.' },
        { title: 'Log decyzji przekrojowych', desc: 'Duże decyzje z calli Teams są podsumowane w transkrypcji. Przydatne dla governance i audit trail.' },
        { title: 'Calle z dostawcami i kontrahentami', desc: 'Gdy projekt obejmuje strony zewnętrzne, transkrypcja to jednoznaczny zapis tego, co zostało ustalone.' },
        { title: 'Compliance i branże regulowane', desc: 'Niektóre branże wymagają zapisu określonych rozmów. Transkrypcje czynią nagrania audio przeszukiwalnymi i indeksowalnymi.' },
      ]}}
      proTips={{ title: 'Wskazówki do transkrypcji Teams', tips: [
        { title: 'Wyciągnij audio z MP4 przed uploadem', desc: 'MP4 z Teams to wideo 720p lub 1080p, nieistotne dla transkrypcji. Weź tylko audio: ffmpeg -i teams.mp4 -vn -ac 1 -b:a 64k teams.mp3. MP4 1.5 GB schodzi do 30 MB lub mniej.' },
        { title: 'Pobierz z OneDrive lub SharePoint, nie streamuj', desc: 'OneDrive czasem odtwarza MP4 w przeglądarce. Upewnij się, że naprawdę pobrałeś plik, zanim spróbujesz wgrać tutaj. Linki udostępniania SharePoint to nie to samo co sam plik.' },
        { title: 'Dla spotkań powyżej 60 minut podziel przed uploadem', desc: 'Potnij na kawałki 30 lub 45-minutowe. Transkrypcje można złączyć. Długie calle Teams są częste i warto je traktować z troską.' },
        { title: 'Wycisz powiadomienia w tle podczas spotkania, jeśli możesz', desc: 'Powiadomienia desktop Outlooka i dźwięki czatu Teams podczas calla trafiają do audio i czasem do transkrypcji. Użyj Focus Assist na Windows lub "Nie przeszkadzać" na Mac.' },
        { title: 'Mikrofony sali konferencyjnej wymagają oczyszczania', desc: 'Teams Rooms z mikrofonami sufitowymi mają zmienną jakość audio. Echo i nagrywanie z dalekiego pola szkodzą dokładności. Adobe Podcast Enhance (darmowe web) może pomóc na tych nagraniach przed uploadem.' },
        { title: 'Dla poufnych spotkań nie wgrywaj na zewnątrz', desc: 'Nawet do nas. Dla rozmów HR, prawnych lub zarządczych preferuj transkrypcję on-premise. Nasz serwis jest dla niepoufnych spotkań, gdzie przetwarzanie AI w chmurze jest akceptowalne.' },
      ]}}
      faq={[
        { q: 'Czy Mictoo działa z nagraniami Microsoft Teams?', a: 'Tak. Pobierz MP4 z OneDrive (OneDrive organizatora dla spotkań poza kanałem) lub ze strony SharePoint kanału. Wgraj tutaj. Wyciągnięcie audio wcześniej przyspiesza dla długich spotkań.' },
        { q: 'Czy potrzebuję Teams Premium lub konkretnego planu Microsoft 365?', a: 'Potrzebujesz planu, który pozwala nagrywać spotkania. Gdy nagranie jest w OneDrive lub SharePoint, transkrypcja tutaj jest darmowa niezależnie od licencji.' },
        { q: 'Czy moje nagranie wraca do Microsoftu?', a: 'Nie. Plik idzie do naszego dostawcy transkrypcji (Groq, z OpenAI jako backup) i jest odrzucany po przetworzeniu. Nic nie wraca do Microsoftu, Outlooka ani innego serwisu Microsoft.' },
        { q: 'Jak to wypada w porównaniu z wbudowaną transkrypcją Teams?', a: 'Transkrypcja Teams jest ok dla spotkań anglojęzycznych, jeśli twoja licencja to obejmuje. Nasza jest darmowa, działa w większej liczbie języków i akcentów i eksportuje czysty SRT dla edytorów wideo. Używaj tego, co pasuje do spotkania.' },
        { q: 'Moje nagranie Teams przekracza 60 MB. Co teraz?', a: 'Wyciągnij tylko audio z ffmpeg lub narzędzia audio. MP4 z Teams 1.5 GB schodzi do mniej niż 30 MB jako audio. Jeśli samo audio nadal powyżej 60 MB, podziel na kawałki.' },
        { q: 'Czy dostanę etykiety mówców?', a: 'Nie automatycznie. Dla spotkania z rozróżnialnymi głosami możesz dodać etykiety ręcznie w oparciu o rozmowę. Jeśli spotkanie zostało nagrane z osobnymi ścieżkami audio na mówcę (rzadkie w Teams), wgraj każdą ścieżkę osobno dla czystej atrybucji.' },
        { q: 'Czy działa z wiadomościami czatu Teams?', a: 'Nie. Wiadomości czatu zostają w Teams. Transkrybujemy tylko audio. Połącz oba sam, jeśli potrzebujesz obojga.' },
        { q: 'Jak dokładna jest transkrypcja Teams?', a: 'Dla spotkań z dobrymi mikrofonami (laptop z USB headsetem): 90-95%. Dla spotkań w salach konferencyjnych z mikrofonami sufitowymi: 80-90%. Nazwy, terminy techniczne i skróty często wymagają oczyszczania.' },
        { q: 'Czy mogę transkrybować spotkanie Teams w czasie rzeczywistym?', a: 'Nie. Pracujemy z plikami nagranymi. Do czasu rzeczywistego podczas spotkania użyj wbudowanych napisów na żywo Teams lub funkcji Transcript.' },
        { q: 'Jakie języki obsługujecie?', a: 'Ponad 50 języków z auto-wykrywaniem. Dla spotkań poniżej 5 minut lub plików z niemowymi intrami (muzyka poczekalni, hold tones) wybierz język ręcznie.' },
        { q: 'Czy mogę wyeksportować transkrypcję do dokumentu Word lub OneDrive?', a: 'Eksportujemy czysty tekst (TXT) i SRT. Skopiuj i wklej w Word, lub sam wgraj TXT do OneDrive. Integracji Microsoft 365 jeszcze nie mamy.' },
        { q: 'Czy to jest zgodne z RODO dla spotkań Teams w Europie?', a: 'Nie przechowujemy audio ani transkryptu na naszych serwerach po opuszczeniu strony. Jesteśmy w Europie, a nasi dostawcy (Groq US, OpenAI US) podpisali DPA. Dla konkretnych pytań compliance zobacz naszą politykę prywatności lub napisz na info@mictoo.com.' },
      ]}
      relatedLinks={[
        { href: '/pl/zoom-transcription', label: 'Transkrypcja Zoom', desc: 'Dla nagrań Zoom Cloud lub lokalnych.' },
        { href: '/pl/google-meet-transcription', label: 'Transkrypcja Google Meet', desc: 'Dla nagrań Google Meet.' },
        { href: '/pl/meeting-transcription', label: 'Transkrypcja spotkań', desc: 'Dla nagrań z innych platform.' },
        { href: '/pl/business-transcription', label: 'Transkrypcja business', desc: 'Dla calli sprzedażowych, wywiadów i innego audio business.' },
      ]}
    />
  )
}
