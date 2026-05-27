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
  'ko': 'https://mictoo.com/ko/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'Generator SRT — twórz pliki napisów SRT online | Mictoo',
  description:
    'Darmowy generator napisów SRT. Prześlij swój plik audio lub wideo i otrzymaj czysty .srt z timecode w kilka sekund. Działa z YouTube, Premiere, DaVinci, CapCut.',
  alternates: { canonical: 'https://mictoo.com/pl/free-srt-generator', languages: LANGS },
}

export default function PlSrtPage() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="SRT · Napisy · Za darmo"
      h1={<>Generator SRT<br /><span className="text-brand-600">Napisy AI z dowolnego audio lub wideo</span></>}
      subtitle="Generuj pliki napisów z dowolnego audio lub wideo. Otrzymaj czysty .srt z precyzyjnymi timecodes w kilka sekund. Drop-in dla YouTube, Premiere, DaVinci Resolve, CapCut, Final Cut."
      howItWorks={[
        { icon: '📂', title: 'Upuść audio lub wideo', desc: 'MP3, M4A, MP4, MOV, WAV, FLAC, OGG, WEBM, AAC. Wyciągamy audio z wideo automatycznie.' },
        { icon: '⚡', title: 'AI transkrybuje i wyrównuje', desc: 'Whisper large-v3 transkrybuje audio i generuje timecodes dla każdej linii. Wideo 10-minutowe zwykle zajmuje 15 sekund. 30-minutowe, około minutę.' },
        { icon: '💾', title: 'Pobierz .srt', desc: 'Kliknij "Pobierz jako SRT". Plik jest formatem standardowym, drop-in kompatybilny z każdym dużym edytorem wideo i YouTube Studio.' },
      ]}
      whyUse={{ title: 'Dlaczego ten generator SRT', bullets: [
        { title: 'Timecodes Whisper large-v3 są frame-accurate', desc: 'Timecodes są w milisekundach, bardziej precyzyjne niż dowolny popularny framerate wideo. Pasują poprawnie przy 24, 25, 29.97, 30, 50 i 60 fps bez dostosowania offsetu.' },
        { title: 'Za darmo, bez licznika minut', desc: 'Transkrybuj 10 minut lub 60. Ta sama cena (darmowa). Bez gate "przejdź na Pro" po pierwszym pliku.' },
        { title: 'Ponad 50 języków', desc: 'Generuj napisy dla treści w dowolnym dużym języku. Przydatne dla międzynarodowych kanałów YouTube i tłumaczonych ścieżek napisów.' },
        { title: 'Standardowy format .srt', desc: 'Bez rozszerzeń własnościowych, bez dziwnego kodowania. Działa w Premiere Pro, DaVinci Resolve, Final Cut, CapCut, Kapwing, Descript, YouTube Studio, VLC, MPV.' },
        { title: 'Żaden plik nie jest zapisywany', desc: 'Audio idzie do dostawcy transkrypcji i jest odrzucane po przetworzeniu. Nie przechowujemy twojego wideo.' },
      ]}}
      useCases={{ title: 'Do czego ludzie generują pliki SRT', items: [
        { title: 'Uploads YouTube', desc: 'Zamień auto-napisy YouTube na czysty .srt. Lepsza interpunkcja, mniej błędów, lepsza dostępność dla niedosłyszących widzów. Bonus: wyszukiwarka YouTube indeksuje wgrane napisy bardziej niezawodnie niż auto-generowane.' },
        { title: 'Napisy do wideo z mediów społecznościowych (TikTok, Reels, Shorts)', desc: 'Wygeneruj .srt tutaj, zaimportuj do CapCut lub Premiere, stylizuj napisy do gustu, wpal w wideo. Większość widzów ogląda bez dźwięku, więc napisy nie są już opcjonalne.' },
        { title: 'Napisy dla dostępności', desc: 'Nagrania talków konferencyjnych, wewnętrzne wideo szkoleniowe, kursy online. Napisy czynią je użytecznymi dla niesłyszących i niedosłyszących widzów oraz dla każdego w głośnych środowiskach.' },
        { title: 'Pipeline tłumaczenia', desc: 'Wygeneruj .srt w języku źródłowym, wklej do DeepL lub ChatGPT do tłumaczenia, zapisz jako .srt w języku docelowym. Wynik: napisy jakości dubbingowej w innym języku bez płacenia ludzkiemu tłumaczowi.' },
        { title: 'Edycja wideo pod deadline', desc: 'Gdy potrzebujesz napisów na wczoraj i nie możesz czekać na ludzkiego transkryptora, napisy AI są wystarczająco dobre dla pierwszego cięcia. Dopracuj później.' },
      ]}}
      proTips={{ title: 'Wskazówki do generowania SRT', tips: [
        { title: 'Dla długich filmów wygeneruj .srt w kawałkach po 10 minut i połącz', desc: 'Łatwiej poprawić błędne timecodes w środku, jeśli pojawi się drift. Większość edytorów pozwala importować wiele .srt i łączyć.' },
        { title: 'Upload tylko-audio jest szybszy niż upload wideo dla tej samej treści', desc: 'Wyciągnij audio wcześniej: ffmpeg -i video.mp4 -vn -ac 1 -b:a 64k audio.mp3. .srt, który dostaniesz, działa przeciwko oryginalnemu wideo, bo timecodes to timecodes.' },
        { title: 'Wpal napisy dopiero po skończeniu montażu', desc: 'Jeśli wpalisz napisy w wideo przed cięciami, musisz przerobić napisy, gdy tniesz. Wpal na końcu, gdy wideo jest locked.' },
        { title: 'Utrzymuj długość linii .srt zarządzalną', desc: 'Whisper czasem produkuje długie napisy jednoliniowe dla długich zdań. Większość edytorów pozwala dzielić długie linie automatycznie, lub możesz dzielić ręcznie dla lepszej czytelności.' },
        { title: 'Dla filmów wielojęzycznych generuj .srt jeden język na raz', desc: 'Jeśli twoje wideo ma sekcje angielskie i hiszpańskie, wygeneruj .srt dla każdej sekcji osobno (ustaw język ręcznie za każdym razem), potem złącz w jeden .srt.' },
        { title: 'Edytuj .srt w edytorze tekstu, nie w edytorze wideo', desc: '.srt to tylko tekst z timecodes. Otwórz w VS Code, Notepad++ lub BBEdit, aby szybko poprawić literówki. Reimportuj do edytora wideo, gdy gotowe.' },
        { title: 'Dla TikTok i Reels ręcznie skróć napisy do krótkiej linii na napis', desc: 'Naturalne zdania Whispera są dłuższe niż punchy styl napisów TikToka. Edytuj .srt, aby pasować do stylu platformy.' },
      ]}}
      faq={[
        { q: 'Czym jest plik SRT?', a: 'SRT (SubRip Subtitle) to najczęstszy format napisów. Czysty tekst z timecodes i tekstem napisu. Każdy duży player i edytor wideo czyta pliki .srt.' },
        { q: 'Jak wygenerować plik SRT z wideo?', a: 'Wgraj wideo tutaj. Wyciągamy audio, transkrybujemy i generujemy .srt. Kliknij "Pobierz jako SRT", gdy gotowe.' },
        { q: 'Jak dodać napisy SRT do wideo YouTube?', a: 'W YouTube Studio otwórz swoje wideo, przejdź do Napisów, kliknij Dodaj język, wgraj plik .srt. YouTube użyje go jako oficjalnych napisów dla tego języka.' },
        { q: 'Czy plik SRT działa w Premiere Pro i DaVinci Resolve?', a: 'Tak. W Premiere: Plik, Importuj, wybierz .srt. W DaVinci: przeciągnij .srt do project bin. Oba traktują jako ścieżkę napisów, którą można dalej edytować na timeline.' },
        { q: 'Czy działa w CapCut i Final Cut?', a: 'Tak. CapCut: tap Captions, Import SRT. Final Cut: Plik, Importuj, Captions, wybierz .srt. Oba pozycjonują napisy w odpowiednich czasach na timeline.' },
        { q: 'Czy generator SRT jest naprawdę darmowy?', a: 'Tak. Bez opłaty za plik, bez licznika minut, bez emaila wymaganego dla plików poniżej 25 MB. Pliki między 25 MB a 60 MB wymagają darmowego konta.' },
        { q: 'Jaki jest maksymalny rozmiar pliku?', a: '25 MB bez konta, 60 MB z darmowym kontem.' },
        { q: 'Czy mogę generować SRT z plików audio (MP3, WAV)?', a: 'Tak. Upuść plik audio bezpośrednio. Generujemy .srt z timecodes, jakby to było audio wideo. Przydatne do dodawania napisów, gdy zsynchronizujesz audio z obrazami lub slajdami później.' },
        { q: 'Czy timecodes będą driftować w długim wideo?', a: 'Timecodes Whispera są wyrównane do prawdziwego audio, więc drift jest rzadki. Dla bardzo długich plików (60 minut) może pojawić się sub-sekundowy drift w ostatnich napisach. Jeśli zauważysz, poprawić ręcznie dotknięte napisy.' },
        { q: 'Czy mogę edytować napisy przed pobraniem?', a: 'Tak. Po transkrypcji popraw błędne słowa w widoku wyniku, potem pobierz .srt z twoimi zmianami.' },
        { q: 'Jakie języki obsługuje generator SRT?', a: 'Ponad 50 języków z auto-wykrywaniem. Dla krótszych filmów lub treści nieangielskich wybierz język ręcznie dla bardziej niezawodnych wyników.' },
        { q: 'Czy audio jest zapisywane?', a: 'Nie. Plik idzie do naszego dostawcy transkrypcji, jest przetwarzany i odrzucany. Nie przechowujemy ani audio, ani wygenerowanego .srt.' },
        { q: 'Czy mogę wygenerować SRT w innym języku niż język audio?', a: 'Nie bezpośrednio. Wygeneruj SRT w języku źródłowym, potem przetłumacz tekst .srt z DeepL lub ChatGPT. Timecodes pozostają takie same, zmienia się tylko tekst.' },
      ]}
      relatedLinks={[
        { href: '/pl/transcribe-video-to-text', label: 'Wideo na tekst', desc: 'Ten sam silnik, ukierunkowany na output czystego tekstu.' },
        { href: '/pl/timestamped-transcription', label: 'Transkrypcja ze znacznikami czasu', desc: 'Dla timecode na zdanie lub słowo w innych formatach.' },
        { href: '/pl/youtube-to-text', label: 'YouTube na tekst', desc: 'Aby zastąpić auto-napisy YouTube.' },
        { href: '/pl/transcribe-audio-to-text', label: 'Audio na tekst', desc: 'Dla czystej transkrypcji audio.' },
      ]}
    />
  )
}
