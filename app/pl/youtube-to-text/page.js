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
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube na tekst — transkrybuj filmy YouTube za darmo | Mictoo',
  description:
    'Darmowa transkrypcja YouTube na tekst. Pobierz wideo, upuść plik, otrzymaj precyzyjną transkrypcję AI. Lepsza niż auto-napisy YouTube, z timecode i eksportem SRT.',
  alternates: { canonical: 'https://mictoo.com/pl/youtube-to-text', languages: LANGS },
}

export default function PlYouTubeToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="YouTube · SRT · ZA DARMO"
      h1={<>YouTube na tekst<br /><span className="text-brand-600">Darmowe narzędzie do transkrypcji YouTube</span></>}
      subtitle="Otrzymaj czystą, precyzyjną transkrypcję dowolnego filmu YouTube. Pobierz plik, upuść tutaj, AI robi resztę. Lepsze niż auto-napisy YouTube, z porządną interpunkcją i timecode."
      howItWorks={[
        { icon: '⬇️', title: 'Pobierz wideo lub audio', desc: 'Najprościej: darmowa aplikacja desktop jak 4K Video Downloader lub ClipGrab (Mac, Windows, Linux). Otwórz aplikację, wklej link YouTube, wybierz "Tylko audio" (M4A lub MP3), kliknij pobierz. Gotowe w sekundach. Strona prawna w FAQ poniżej.' },
        { icon: '📂', title: 'Upuść plik', desc: 'Przeciągnij pobrany plik do Mictoo. Akceptujemy MP4, M4A, MP3, WAV, FLAC, OGG, WEBM. Audio idzie do Whisper large-v3.' },
        { icon: '📋', title: 'Weź transkrypcję', desc: 'Przeczytaj w przeglądarce, skopiuj do schowka lub pobierz jako TXT lub SRT. SRT działa jako napisy YouTube, dużo lepiej niż auto-napisy.' },
      ]}
      whyUse={{ title: 'Dlaczego Mictoo zamiast auto-napisów YouTube', bullets: [
        { title: 'Auto-napisy gubią interpunkcję i nazwy własne', desc: 'Napisy YouTube to strumień świadomości bez przecinków, bez kropek i z tendencją do okaleczania nazw. Whisper large-v3 daje ci kompletne zdania z interpunkcją, kapitalizacją i rozpoznawalnymi nazwami własnymi.' },
        { title: 'Auto-napisy nie zawsze są dostępne', desc: 'Mniejsze kanały, prywatne filmy, zakończone transmisje na żywo lub filmy w mniej popularnych językach często nie mają napisów lub mają słabe automatyczne. Whisper działa na wszystkich.' },
        { title: 'Lepsza dokładność dla muzyki i akcentów', desc: 'Auto-napisy YouTube walczą z fragmentami muzycznymi i angielskim nienatywnym. Whisper radzi sobie z obojgiem lepiej, z mniejszą liczbą halucynowanych słów i silniejszym pokryciem akcentów.' },
        { title: 'Dostajesz czysty SRT, nie format XML YouTube', desc: 'Ścieżka napisów YouTube pobiera się jako XML lub VTT z dziwnymi timestampami. Nasz SRT jest standardowy, drop-in kompatybilny z każdym edytorem wideo.' },
        { title: 'Działa na filmach, które nie są twoje', desc: 'Możesz transkrybować wykłady, wywiady, podcasty na YouTube do osobistej nauki lub badań bez potrzeby dostępu właściciela kanału (z zastrzeżeniem prawa autorskiego i warunków YouTube, zobacz FAQ).' },
      ]}}
      useCases={{ title: 'Do czego ludzie używają transkrypcji YouTube', items: [
        { title: 'Studiowanie długich wykładów i tutoriali', desc: '90-minutowy wykład MIT łatwiej studiować z wersją tekstową. Przejrzyj część, której potrzebujesz, skocz do timecode w wideo dla wyjaśnienia na żywo.' },
        { title: 'Cytaty w pracy akademickiej lub dziennikarskiej', desc: 'Gdy odwołujesz się do czegoś, co ktoś powiedział na filmie, transkrypcja z timecode pozwala zacytować dokładny moment. Dużo szybciej niż ponowne oglądanie w poszukiwaniu cytatu.' },
        { title: 'Recykling własnych treści YouTube', desc: 'Zmień film YouTube w post na blog, newsletter, wątek na X, artykuł na LinkedIn. Transkrypcja to pierwsza wersja.' },
        { title: 'Tłumaczenie filmów do użytku osobistego', desc: 'Weź transkrypcję w języku źródłowym, wrzuć do DeepL lub ChatGPT, dostań tłumaczenie. Przydatne dla tutoriali lub wywiadów w obcych językach.' },
        { title: 'Zastępowanie słabych auto-napisów na własnym kanale', desc: 'Wygeneruj czysty SRT tutaj, prześlij na YouTube Studio jako oficjalną ścieżkę napisów. Lepsze doświadczenie widza, lepsze SEO.' },
      ]}}
      proTips={{ title: 'Wskazówki do transkrypcji YouTube', tips: [
        { title: 'W downloaderze zawsze wybieraj "Tylko audio"', desc: 'Nie potrzebujesz wideo do transkrypcji. M4A samego audio to dziesiąta część rozmiaru i pobiera się w sekundach. Zarówno 4K Video Downloader, jak i ClipGrab mają opcję "Tylko audio" w menu formatu. M4A zwykle mieści się poniżej 25 MB, nawet przy filmach 30-minutowych.' },
        { title: 'Dla filmów powyżej 30 minut tylko-audio mieści się bez dzielenia w większości przypadków', desc: 'Tylko-audio omija limit rozmiaru w większości filmów. Jeśli 90-minutowy wykład wciąż przekracza 60 MB, podziel na trzy 30-minutowe kawałki. Nasz przewodnik podziału ma instrukcje krok po kroku dla Audacity, bez wiersza poleceń.' },
        { title: 'Pomiń muzykę intro i outro', desc: 'Tutoriale YouTube często mają 15 sekund motywu na początku i końcu. Wytnij w Audacity przed uploadem. Whisper czasami wymyśla słowa we fragmentach tylko muzycznych.' },
        { title: 'Dla kanałów tutorialowych z kodem na ekranie nadal potrzebujesz wersji audio', desc: 'Rozpoznawanie tekstu na ekranie to inna kategoria narzędzi (OCR). Jeśli tutorial polega na pokazywaniu kodu, musisz robić osobne screenshoty dla części wizualnej. Transkrypcja łapie wszystko, co prezenter mówi na głos.' },
        { title: 'Użyj napisów na żywo YouTube jako sanity-check', desc: 'Jeśli film ma auto-napisy, możesz porównać je z transkrypcją Whispera, aby znaleźć rozbieżności. Zwykle Whisper wygrywa, ale w rzadkim slangu lub nazwach własnych YouTube czasem łapie coś, co Whisper przegapił.' },
        { title: 'Użyj downloadera, który zachowuje tytuł filmu jako nazwę pliku', desc: 'Zarówno 4K Video Downloader, jak i ClipGrab mogą używać tytułu YouTube jako domyślnej nazwy. To trzyma twoje transkrypcje uporządkowane zamiast skończyć z folderem pełnym "video.mp4", "video (1).mp4", "video (2).mp4".' },
      ]}}
      faq={[
        { q: 'Czy mogę wkleić link YouTube bezpośrednio w Mictoo?', a: 'Obecnie nie. YouTube aktywnie blokuje serwery trzecie przed pobieraniem filmów. Najpierw musisz pobrać wideo lub audio (darmowa aplikacja desktop jak 4K Video Downloader lub ClipGrab robi to w dwóch kliknięciach), potem wgrać plik do Mictoo. Wsparcie URL oznaczałoby prowadzenie infrastruktury serwerowej pobierania, którą YouTube okresowo psuje.' },
        { q: 'Czy legalne jest transkrybowanie filmów YouTube?', a: 'Dla osobistej nauki, badań, dziennikarstwa, dostępności i fair use w większości jurysdykcji generalnie tak. Dla komercyjnej publikacji transkrypcji zwykle potrzebujesz pozwolenia twórcy. Warunki YouTube zabraniają pobierania treści, chyba że YouTube wyraźnie pozwala (przycisk Pobierz) lub masz pozwolenie twórcy. Sprawdź warunki dla swojego przypadku. To nie jest porada prawna.' },
        { q: 'Czy moja transkrypcja będzie pasować do auto-napisów YouTube?', a: 'Nie, nasza będzie lepsza. Auto-napisy nie mają interpunkcji i mają niższą dokładność. Whisper large-v3 produkuje kompletne zdania z interpunkcją, kapitalizacją i lepszą dokładnością dla muzyki, akcentów i nazw własnych.' },
        { q: 'Który downloader YouTube jest najlepszy?', a: 'Dla większości: 4K Video Downloader lub ClipGrab. Oba są darmowe, oba mają czystą aplikację desktop dla Mac, Windows i Linux, oba pozwalają wziąć tylko audio jednym kliknięciem. Unikaj stron "youtube downloader online" wyskakujących w Google, większość jest zakopana w reklamach malware i psuje się co kilka miesięcy. Jeśli ogarniasz wiersz poleceń, yt-dlp jest najbardziej niezawodną opcją (to silnik pod wieloma aplikacjami GUI).' },
        { q: 'Jak pobrać tylko audio?', a: 'W 4K Video Downloader: wklej link YouTube, gdy otworzy się okno formatu, wybierz "Extract Audio" i weź M4A lub MP3. W ClipGrab: wklej link, w menu "Format" wybierz MP3 lub "Original audio". Oba produkują pojedynczy plik audio, gotowy do uploadu tutaj.' },
        { q: 'Co jeśli mój film YouTube jest w języku, którego nie mówię?', a: 'Whisper wykrywa język automatycznie i transkrybuje w języku źródłowym. Potem możesz wkleić wynik do DeepL lub ChatGPT do tłumaczenia. Dwa kroki, ale wynik zwykle lepszy niż auto-tłumaczone napisy YouTube.' },
        { q: 'Jak długo trwa transkrypcja filmu YouTube?', a: 'Sam krok transkrypcji zajmuje około 1-2% długości audio. 30-minutowy wykład jest gotowy w około minutę. Czas pobierania zależy od twojego łącza i prędkości yt-dlp.' },
        { q: 'Czy dostanę etykiety mówców dla filmów YouTube z wieloma mówcami?', a: 'Nie, Whisper nie robi domyślnie diaryzacji mówców. Dla wywiadów i paneli z wieloma mówcami musisz dodać etykiety ręcznie w oparciu o przepływ rozmowy.' },
        { q: 'Czy mogę wygenerować napisy gotowe dla YouTube?', a: 'Tak. Po transkrypcji pobierz jako SRT, potem wgraj SRT do YouTube Studio w Napisach. Zastępuje auto-napisy czystą wersją.' },
        { q: 'Czy Mictoo zapisuje wideo YouTube, które wgrywam?', a: 'Nie. Plik jest strumieniowany do naszego dostawcy transkrypcji, przetwarzany i odrzucany. Nie przechowujemy wideo ani audio.' },
        { q: 'Mój film YouTube ma rozdziały. Czy transkrypcja to odzwierciedla?', a: 'Nie wyciągamy metadanych rozdziałów YouTube. Transkrypcja przychodzi jako ciągły dokument. Jeśli chcesz transkrypcje rozdziałów, podziel plik audio przed uploadem na timecode rozdziałów.' },
        { q: 'Czy mogę transkrybować livestream YouTube po zakończeniu?', a: 'Tak, dopóki livestream jest zarchiwizowany jako regularne wideo. Pobierz jak każde inne (yt-dlp), potem upload. Transkrypcja na żywo podczas samego streamu nie jest obsługiwana.' },
      ]}
      relatedLinks={[
        { href: '/pl/transcribe-video-to-text', label: 'Wideo na tekst', desc: 'Dla plików wideo nie-YouTube (Zoom, screencasty, vlogi).' },
        { href: '/pl/free-srt-generator', label: 'Generator SRT', desc: 'Aby wgrać czyste napisy z powrotem do YouTube Studio.' },
        { href: '/pl/podcast-transcription', label: 'Transkrypcja podcastu', desc: 'Dla audio podcastowego wgranego na YouTube.' },
        { href: '/pl/how-to-split-audio', label: 'Podział audio', desc: 'Dla długich filmów przekraczających nasz limit 60 minut.' },
      ]}
    />
  )
}
