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
  'ko': 'https://mictoo.com/ko/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Transkrypcja Google Meet — transkrybuj nagrania Meet za darmo | Mictoo',
  description:
    'Darmowa transkrypcja Google Meet. Prześlij nagranie z Drive (MP4 lub M4A) i otrzymaj czystą transkrypcję AI w kilka sekund. Działa z darmowym Google Workspace.',
  alternates: { canonical: 'https://mictoo.com/pl/google-meet-transcription', languages: LANGS },
}

export default function PlGoogleMeetPage() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="GOOGLE MEET · MP4 · ZA DARMO"
      h1={<>Transkrypcja Google Meet<br /><span className="text-brand-600">Transkrybuj nagrania Meet</span></>}
      subtitle="Zamień swoje nagranie Google Meet w czysty tekst. Upuść MP4 z Drive, w sekundach masz transkrypcję. Bez rejestracji, bez opłaty za minutę."
      howItWorks={[
        { icon: '☁️', title: 'Pobierz z Google Drive', desc: 'Nagrania Google Meet są zapisywane na twoim Drive w folderze "Meet Recordings". Pobierz jako MP4 (prawy klik, Pobierz). Dla długich spotkań najpierw wyciągnij audio, aby oszczędzić czas uploadu.' },
        { icon: '⚡', title: 'Upuść plik', desc: 'Wyciągamy audio z MP4 i wysyłamy do Whisper large-v3. Spotkanie 30-minutowe jest gotowe w około minutę.' },
        { icon: '📋', title: 'Weź transkrypcję', desc: 'Przeczytaj w przeglądarce, skopiuj lub pobierz jako TXT lub SRT. Popraw błędne słowa inline przed eksportem.' },
      ]}
      whyUse={{ title: 'Dlaczego Mictoo do Google Meet', bullets: [
        { title: 'Działa na każdym tier Workspace, także darmowym', desc: 'Samo nagrywanie Meet wymaga tier płatnego, ale gdy masz plik, nasza transkrypcja jest darmowa niezależnie od twojego tier Workspace.' },
        { title: 'Lepsze wsparcie języków nieangielskich', desc: 'Transkrypcja Google jest historycznie najsilniejsza w angielskim. Whisper large-v3 pokrywa ponad 50 języków z auto-wykrywaniem i jest zauważalnie lepszy w akcentach, rozmowach dwujęzycznych i code-switching.' },
        { title: 'Żadne dane nie wracają do Google', desc: 'Jeśli świadomie unikasz lock-inu w ekosystemie Google dla wrażliwych spotkań, transkrybowanie tutaj trzyma tekst poza Google Workspace.' },
        { title: 'Eksport SRT działa w każdym edytorze wideo', desc: 'Transkrypcja Google daje tekst w Docs. Nasza eksportuje czysty SRT, gotowy dla Premiere, DaVinci lub YouTube Studio.' },
        { title: 'Prywatność', desc: 'Plik jest strumieniowany do dostawcy transkrypcji i odrzucany po przetworzeniu. Nic nie jest zapisywane na naszych serwerach.' },
      ]}}
      useCases={{ title: 'Do czego ludzie transkrybują nagrania Google Meet', items: [
        { title: 'Notatki ze spotkania, które wszyscy mogą przeszukać', desc: 'Wklej transkrypcję w Google Docs lub Notion. Ty z przyszłości nie zapamięta, co zostało zdecydowane w 14. tygodniu projektu. Przeszukiwalny tekst pomaga.' },
        { title: 'Asynchroniczny catch-up dla rozproszonych zespołów', desc: 'Osoby w innych strefach czasowych, które przegapiły spotkanie na żywo, czytają transkrypcję w minutach zamiast oglądać 60-minutowe nagranie na 1.5x.' },
        { title: 'Przegląd calli klientów', desc: 'Account managerowie transkrybują ważne calle z klientami i zapisują tekst w CRM. Szybsze przypominanie, lepsze handoffy.' },
        { title: 'Transkrypcje webinarów i town halli', desc: 'Dla większych eventów nagranych w Meet transkrypcja to to, co publikujesz (obok nagrania) dla dostępności i odkrywalności.' },
        { title: 'Rozmowy 1:1 i performance review (dla menedżera)', desc: 'Niektórzy managerowie transkrybują swoje 1:1, aby mieć notatki do follow-up. Przydatne, ale bądź transparentny wobec pracownika, dlaczego.' },
      ]}}
      proTips={{ title: 'Wskazówki do transkrypcji Google Meet', tips: [
        { title: 'Wyciągnij audio z MP4 przed uploadem', desc: 'Nagrania Meet to wideo 720p, co jest zmarnowanymi bajtami dla transkrypcji. Weź tylko audio: ffmpeg -i meet.mp4 -vn -ac 1 -b:a 64k meet.mp3. MP4 1 GB schodzi do 25 MB lub mniej.' },
        { title: 'Pobierz MP4, nie streamuj', desc: 'Drive czasem otwiera MP4 w viewerze przeglądarki. Upewnij się, że naprawdę pobrałeś plik, zanim spróbujesz wgrać tutaj. Linki udostępniania Drive to nie upload pliku.' },
        { title: 'Dla spotkań powyżej 60 minut podziel przed uploadem', desc: 'Nasz limit to 60 minut na plik z rejestracją. Najpierw potnij audio na kawałki. Transkrypcje można potem złączyć.' },
        { title: 'Wycisz karty i aplikacje w tle podczas spotkania, jeśli możesz', desc: 'Utwór Spotify lecący pod twoim głosem na spotkaniu trafia do transkrypcji jako losowe słowa. To samo z dźwiękami powiadomień. Nie zawsze da się naprawić po nagraniu.' },
        { title: 'Użyj prawdziwego mikrofonu, nawet taniego headsetu', desc: 'Wbudowane mikrofony laptopa łapią pisanie na klawiaturze, hałas wentylatora i echo pokoju. Przewodowy USB headset za 100 zł transkrybuje zauważalnie czyściej.' },
        { title: 'W udostępnianych nagraniach sprawdź ustawienia udostępniania Drive przed wgrywaniem gdzie indziej', desc: 'Jeśli ktoś udostępnił ci nagranie Meet, dwukrotnie sprawdź, co możesz z nim zrobić, zanim przetranskrybujesz do zewnętrznego użytku.' },
      ]}}
      faq={[
        { q: 'Czy Mictoo działa z nagraniami Google Meet?', a: 'Tak. Pobierz MP4 z folderu Meet Recordings na Drive, potem wgraj tutaj. Wyciągnięcie audio (z ffmpeg lub dowolnym narzędziem audio) przyspiesza dla długich spotkań.' },
        { q: 'Czy potrzebuję płatnego planu Google Workspace?', a: 'Potrzebujesz płatnego planu Workspace, aby w ogóle nagrać Meet. Gdy nagranie jest na Drive, transkrypcja tutaj jest darmowa niezależnie od tier.' },
        { q: 'Czy moje nagranie wraca do Google?', a: 'Nie. Plik idzie do naszego dostawcy transkrypcji (Groq, z OpenAI jako backup) i jest odrzucany po przetworzeniu. Nic nie wraca do Google ani innego serwisu Google.' },
        { q: 'Jak to wypada w porównaniu z wbudowaną transkrypcją Google?', a: 'Nasza jest darmowa i działa na każdym tier Workspace. Googla jest wygodniejsza, jeśli plan to obejmuje i twoje spotkania są po angielsku. Dla nieangielskich, akcentów lub spotkań dwujęzycznych nasza jest dokładniejsza.' },
        { q: 'Moje nagranie Meet przekracza 60 MB. Co teraz?', a: 'Wyciągnij tylko audio z ffmpeg lub narzędzia audio. Wideo 1 GB zwykle spada do mniej niż 30 MB jako audio. Jeśli samo audio przekracza 60 MB, podziel na kawałki.' },
        { q: 'Czy dostanę etykiety mówców?', a: 'Nie automatycznie. Whisper domyślnie nie robi diaryzacji. Musisz dodać etykiety ręcznie. Dla spotkania 4-osobowego z rozróżnialnymi głosami zwykle zajmuje to 5 minut.' },
        { q: 'Czy działa z wiadomościami czatu Meet?', a: 'Nie. Wiadomości czatu są zapisywane osobno przez Google w folderze Meet Recordings. Transkrybujemy tylko audio. Połącz oba sam, jeśli potrzebujesz obojga.' },
        { q: 'Jak dokładna jest transkrypcja Google Meet?', a: 'Dla czystego audio (dobre mikrofony, bez szumu tła): 90-95%. Nagrania z sali konferencyjnej z wieloma mikrofonami lub speakerphone spadają do 80-90%. Nazwy i terminy techniczne często wymagają oczyszczenia.' },
        { q: 'Czy mogę transkrybować livestream Google Meet?', a: 'Nie. Pracujemy tylko z plikami nagranymi, nie ze streamami na żywo. Gdy stream się kończy i nagranie zostaje zapisane na Drive, możesz pobrać i transkrybować.' },
        { q: 'Jakie języki obsługujecie?', a: 'Ponad 50 języków z auto-wykrywaniem. Dla spotkań poniżej 5 minut lub plików z niemowymi intrami wybierz język ręcznie dla lepszego wyniku.' },
        { q: 'Czy mogę wyeksportować do Google Doc?', a: 'Eksportujemy czysty tekst (TXT) i SRT. Skopiuj i wklej w Google Docs. Bezpośredniej integracji Drive jeszcze nie mamy.' },
        { q: 'Czy działa z nagraniami Meet z innych organizacji Workspace?', a: 'Jeśli masz dostęp do pobrania pliku ze swojego Drive, tak. Traktujemy plik po prostu jako MP4. Nie sprawdzamy i nie obchodzi nas jego pochodzenie.' },
      ]}
      relatedLinks={[
        { href: '/pl/zoom-transcription', label: 'Transkrypcja Zoom', desc: 'Dla nagrań Zoom Cloud lub lokalnych.' },
        { href: '/pl/teams-meeting-transcription', label: 'Transkrypcja Teams', desc: 'Dla nagrań Microsoft Teams.' },
        { href: '/pl/meeting-transcription', label: 'Transkrypcja spotkań', desc: 'Dla nagrań z innych platform.' },
        { href: '/pl/transcribe-video-to-text', label: 'Wideo na tekst', desc: 'Ogólna strona wideo na tekst.' },
      ]}
    />
  )
}
