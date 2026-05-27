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
  title: 'Transkrypcja spotkań — darmowy transcript AI dla calli i spotkań | Mictoo',
  description:
    'Darmowa transkrypcja AI spotkań. Prześlij dowolne nagranie spotkania (z dowolnej platformy) i otrzymaj czysty tekst w kilka sekund. Bez rejestracji, bez opłaty za minutę, ponad 50 języków.',
  alternates: { canonical: 'https://mictoo.com/pl/meeting-transcription', languages: LANGS },
}

export default function PlMeetingPage() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="Każda platforma · Za darmo · 50+ języków"
      h1={<>Transkrypcja spotkań<br /><span className="text-brand-600">Darmowe transkrypcje AI spotkań</span></>}
      subtitle="Zamień dowolne nagranie spotkania w czysty tekst. Działa z Zoom, Meet, Teams, Webex, Discord, Skype, dyktafonami, czymkolwiek. Bez rejestracji, bez opłaty za minutę."
      howItWorks={[
        { icon: '🎙️', title: 'Weź nagranie spotkania', desc: 'Nieważne, której platformy użyłeś (Zoom, Meet, Teams, Webex, Discord, GoToMeeting, dyktafon stacjonarny), wyeksportuj nagranie jako MP4, MP3, M4A, WAV, FLAC lub OGG.' },
        { icon: '⚡', title: 'Upuść plik', desc: 'Wyciągamy audio, jeśli potrzeba, i wysyłamy do Whisper large-v3. Spotkanie 30-minutowe jest gotowe w około minutę.' },
        { icon: '📋', title: 'Weź transkrypcję', desc: 'Przeczytaj, skopiuj lub pobierz jako TXT lub SRT. Popraw błędne słowa lub terminy techniczne inline przed eksportem.' },
      ]}
      whyUse={{ title: 'Dlaczego Mictoo do spotkań', bullets: [
        { title: 'Platforma źródłowa nie ma znaczenia', desc: 'Zoom, Meet, Teams, Webex, Discord, GoToMeeting, BlueJeans, dyktafon stacjonarny. Jeśli masz plik, transkrybujemy.' },
        { title: 'Jeden model dla wszystkich spotkań', desc: 'Ten sam Whisper large-v3 dla calla sprzedażowego nagranego w Zoom i retro zespołu w Teams. Spójna dokładność, spójny format wyjściowy.' },
        { title: 'Za darmo, bez licznika minut', desc: 'Większość transkrypcji wbudowanych w narzędzia spotkań jest częścią tier licencji, który ma własny koszt. Nasza jest naprawdę darmowa, bez miesięcznego cap.' },
        { title: 'Ponad 50 języków', desc: 'Spotkania międzynarodowe, rozmowy dwujęzyczne, zespoły międzynarodowe. Whisper radzi sobie ze wszystkim, z auto-wykrywaniem lub ręcznym wyborem języka.' },
        { title: 'Nic nie jest zapisywane', desc: 'Plik jest strumieniowany do dostawcy transkrypcji i odrzucany. Nie zapisujemy audio spotkania na naszych serwerach.' },
      ]}}
      useCases={{ title: 'Częste typy spotkań, które ludzie transkrybują', items: [
        { title: 'Stand-upy zespołu i retro', desc: 'Asynchroniczne zespoły transkrybują stand-upy, aby ludzie w innych strefach mogli nadrobić. Retro korzystają z pisemnego zapisu do działań follow-up.' },
        { title: 'Calle z klientami', desc: 'Calle sprzedażowe, check-iny account, customer interview. Zapisz transkrypcję w CRM obok deala lub kontaktu.' },
        { title: 'Wewnętrzne sesje szkoleniowe i onboardingu', desc: 'Nowi pracownicy czytają transkrypcję podczas oglądania wideo. Lepsze zapamiętywanie, przeszukiwalne później, gdy zapomną kroku.' },
        { title: 'Spotkania zarządu, leadership offsite, all-hands', desc: 'Transkrypcje czynią komunikację korporacyjną bardziej dostępną. Przydatne dla pracowników, którzy nie mogli uczestniczyć, i dla dokumentacji.' },
        { title: 'Wywiady i badania jakościowe', desc: 'Czy to screening kandydata, user interview czy dziennikarstwo, transkrypcja to faktyczny rezultat pracy.' },
      ]}}
      proTips={{ title: 'Wskazówki do transkrypcji spotkań', tips: [
        { title: 'Wyciągnij audio, gdy źródło to wideo', desc: 'Platformy spotkań eksportują MP4 z audio i wideo. Potrzebujemy tylko audio. ffmpeg -i meeting.mp4 -vn -ac 1 -b:a 64k meeting.mp3 zamienia MP4 1 GB w 25 MB lub mniej. Szybszy upload, ta sama transkrypcja.' },
        { title: 'Upewnij się, że wszyscy mają prawdziwy mikrofon', desc: 'Wbudowane mikrofony laptopa na callu wifi produkują zaszumione, echowate audio. Przewodowy USB headset za 100 zł dla każdego uczestnika opłaca się w dokładności transkrypcji.' },
        { title: 'Wycisz uczestników, którzy nie mówią', desc: 'Otwarte mikrofony podczas prezentacji łapią pisanie na klawiaturze, szum tła pokoju i rozmowy poboczne. Whisper czasem transkrybuje to jako słowa-bzdury.' },
        { title: 'Dla spotkań z nienatywnymi mówcami angielskiego nie dziel bez potrzeby', desc: 'Whisper korzysta z dłuższego kontekstu dla rzadszych fraz. Ciągły plik 30-minutowy transkrybuje się lepiej niż trzy 10-minutowe kawałki, jeśli masz wybór.' },
        { title: 'Długie spotkania dzielą się lepiej w naturalnych przerwach', desc: 'Jeśli musisz podzielić 90-minutowe spotkanie na kawałki, szukaj naturalnych przerw (przerwa na kawę, przejście agendy) i podziel tam. Mniejsze ryzyko przecięcia zdania w środku.' },
        { title: 'Wybierz język ręcznie dla krótkich lub nietypowych spotkań', desc: 'Auto-wykrywanie próbkuje pierwszy fragment audio. Dla spotkań zaczynających się muzyką poczekalni, krótkim powitaniem lub ciszą ręczny wybór języka jest bardziej niezawodny.' },
      ]}}
      faq={[
        { q: 'Jakie platformy spotkań obsługujecie?', a: 'Wszystkie. Pracujemy z plikiem nagrania, nie z platformą. Zoom, Microsoft Teams, Google Meet, Webex, Discord, Skype, GoToMeeting, BlueJeans, dyktafon stacjonarny. Jeśli plik to MP4, MP3, M4A, WAV, FLAC, OGG lub WEBM, transkrybujemy.' },
        { q: 'Moje spotkanie było w Zoom (lub Meet, lub Teams). Czy używać tej strony, czy specyficznej dla platformy?', a: 'Ten sam silnik, ta sama dokładność. Strony specyficzne dla platformy dają bardziej ukierunkowane wskazówki. Użyj tego, co ci łatwiej.' },
        { q: 'Czy dostanę etykiety mówców?', a: 'Nie automatycznie. Whisper domyślnie nie robi diaryzacji. Dla spotkania z rozróżnialnymi głosami dodaj etykiety ręcznie w oparciu o rozmowę. Dla spotkań z osobnymi ścieżkami audio na mówcę (Riverside, SquadCast, czasem Zoom) transkrybuj każdą ścieżkę osobno.' },
        { q: 'Moje nagranie spotkania przekracza 60 MB. Co teraz?', a: 'Dwie opcje. Wyciągnij tylko audio z wideo (jedno polecenie ffmpeg), lub podziel spotkanie na kawałki.' },
        { q: 'Jak dokładna jest transkrypcja spotkań?', a: 'Dla czystego audio (dobre mikrofony, bez szumu tła): 90-95%. Dla mikrofonów sali konferencyjnej lub speakerphonów: 80-90%. Nazwy i terminy techniczne często wymagają oczyszczania.' },
        { q: 'Czy moje spotkanie jest zapisywane na waszych serwerach?', a: 'Nie. Plik jest strumieniowany do dostawcy transkrypcji i odrzucany po przetworzeniu. Nie zapisujemy ani audio spotkania, ani transkrypcji w naszej bazie.' },
        { q: 'Czy transkrypcja spotkania w Mictoo jest zgodna z RODO?', a: 'Nie przechowujemy audio ani transkryptu po opuszczeniu strony. Jesteśmy w Europie, a nasi dostawcy (Groq US, OpenAI US) mają DPA. Dla konkretnych pytań compliance zobacz naszą politykę prywatności.' },
        { q: 'Czy mogę dostać podsumowanie spotkania, nie tylko transkrypcję?', a: 'Obecnie dostarczamy pełną transkrypcję. Dla podsumowań wklej transkrypcję w ChatGPT lub Claude z promptem typu "Podsumuj tę transkrypcję spotkania w kluczowe decyzje i zadania".' },
        { q: 'Jakie języki są obsługiwane?', a: 'Ponad 50, z auto-wykrywaniem. Dla spotkań poniżej 5 minut lub plików z niemowymi intrami wybierz język ręcznie dla bardziej niezawodnych wyników.' },
        { q: 'Czy mogę transkrybować spotkanie w czasie rzeczywistym?', a: 'Nie. Pracujemy z plikami nagranymi. Do czasu rzeczywistego użyj wbudowanej transkrypcji platformy spotkań lub dedykowanego meeting assistant.' },
        { q: 'Jak dostaję plik SRT wyrównany z moim wideo spotkania?', a: 'Pobierz SRT po transkrypcji. Większość edytorów wideo (Premiere, DaVinci, CapCut, Final Cut) importuje SRT, które wyrównuje się automatycznie, dopóki audio w wideo pasuje do tego, co transkrybowałeś.' },
        { q: 'Czy mogę transkrybować poufne spotkania?', a: 'Dla poufnych spotkań (HR, prawo, M&A, zarząd) bądź ostrożny z każdym serwisem transkrypcji w chmurze, włącznie z naszym. Nasz plik nie jest zapisywany, ale przechodzi przez zewnętrznego dostawcę mowy do przetwarzania. Dla maksymalnej prywatności użyj lokalnej instalacji Whisper.' },
      ]}
      relatedLinks={[
        { href: '/pl/zoom-transcription', label: 'Transkrypcja Zoom', desc: 'Wskazówki i workflow eksportu specyficzne dla Zoom.' },
        { href: '/pl/google-meet-transcription', label: 'Transkrypcja Google Meet', desc: 'Dla nagrań Google Meet.' },
        { href: '/pl/teams-meeting-transcription', label: 'Transkrypcja Teams', desc: 'Dla nagrań Microsoft Teams.' },
        { href: '/pl/business-transcription', label: 'Transkrypcja business', desc: 'Dla rozmów z klientami, konferencji i calli sprzedażowych.' },
      ]}
    />
  )
}
