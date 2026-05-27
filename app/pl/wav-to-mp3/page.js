import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-mp3',
  'fr': 'https://mictoo.com/fr/wav-to-mp3',
  'de': 'https://mictoo.com/de/wav-to-mp3',
  'es': 'https://mictoo.com/es/wav-to-mp3',
  'ru': 'https://mictoo.com/ru/wav-to-mp3',
  'it': 'https://mictoo.com/it/wav-to-mp3',
  'pt': 'https://mictoo.com/pt/wav-to-mp3',
  'pl': 'https://mictoo.com/pl/wav-to-mp3',
  'ja': 'https://mictoo.com/ja/wav-to-mp3',
  'ko': 'https://mictoo.com/ko/wav-to-mp3',
  'x-default': 'https://mictoo.com/wav-to-mp3',
}

export const metadata = {
  title: 'WAV na MP3 — darmowy konwerter online | Mictoo',
  description:
    'Konwertuj WAV na MP3 online za darmo. Zmniejsz pliki WAV bezstratne na przenośne MP3 128 kbps w kilka sekund. Bez rejestracji, bez znaku wodnego. Do 25 MB.',
  alternates: { canonical: 'https://mictoo.com/pl/wav-to-mp3', languages: LANGS },
}

export default function PlWavToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="WAV → MP3 · Za darmo · Bez rejestracji"
      h1={<>WAV na MP3<br /><span className="text-brand-600">Darmowy konwerter online</span></>}
      subtitle="Upuść plik WAV. Dostań kompaktowy MP3 dziesięć razy mniejszy, prawie identyczny dźwięk dla mowy lub luźnego słuchania. Bez znaku wodnego, bez emaila."
      tool={<ConverterZone from="wav" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Upuść WAV', desc: 'Przeciągnij dowolny WAV (16-bit, 24-bit, mono, stereo) do okna. Pliki do 25 MB przechodzą anonimowo, 60 MB z rejestracją.' },
        { icon: '⚡', title: 'Ponownie kodujemy do MP3', desc: 'ffmpeg po stronie serwera, stały bitrate 128 kbps, 44.1 kHz, stereo. WAV 25 MB (około 2 minuty przy 24-bit/96 kHz lub 5 minut przy 16-bit/44.1) kończy się w kilka sekund.' },
        { icon: '⬇️', title: 'Pobierz MP3', desc: 'Wynik jest nazwany jak oryginał z podmienionym .mp3. I upload, i wyjście są kasowane z naszych serwerów w ciągu godziny.' },
      ]}
      whyUse={{ title: 'Dlaczego konwertować WAV na MP3', bullets: [
        { title: 'Pliki WAV są ogromne', desc: '5-minutowy WAV 16-bit/44.1 kHz to około 50 MB. To samo audio jako MP3 128 kbps to 5 MB. Do emaila, uploadu na hosta podcastów lub wrzucenia na telefon, MP3 to format, którego chcesz.' },
        { title: 'MP3 odtwarza wszędzie', desc: 'WAV jest ok na desktopie, ale chwiejny na starszych radiach samochodowych, niektórych głośnikach Bluetooth i wielu odtwarzaczach internetowych. MP3 po prostu działa.' },
        { title: 'Strata jakości przy 128 kbps jest niesłyszalna dla większości słuchania', desc: 'Nie usłyszysz różnicy między MP3 128 kbps a oryginalnym WAV, chyba że masterujesz muzykę na monitorach studyjnych. Dla głosu, podcastu lub luźnego słuchania to oczywisty kompromis.' },
        { title: 'Bez znaku wodnego, bez popupów', desc: 'MP3 to po prostu twoje audio ponownie zakodowane. Nie dodajemy intro mówiącego "Converted by..." i nie pokazujemy fałszywego popupu, że musisz poczekać 30 sekund.' },
        { title: 'Prywatność domyślnie', desc: 'WAV z nagrań terenowych mogą być wrażliwe. Plik ląduje na Vercel Blob storage, jest konwertowany i wyczyszczony. Nie patrzymy na niego, nie trzymamy go.' },
      ]}}
      useCases={{ title: 'Kiedy konwertować WAV na MP3', items: [
        { title: 'Nagranie terenowe → klip gotowy do emaila', desc: 'Zoom H1n lub podobny rejestrator zwykle zapisuje w WAV domyślnie. Konwertuj na MP3 przed udostępnieniem producentowi, dziennikarzowi lub transkrybentowi.' },
        { title: 'Eksport ze studia → odsłuch z telefonu', desc: 'Audacity, Reaper, Logic, wszystkie domyślnie dają WAV. Wyeksportuj surowy miks jako MP3, żeby udostępnić współpracownikom lub słuchać w drodze.' },
        { title: 'Przygotowanie podcastu', desc: 'Większość hostów podcastów (Anchor, Buzzsprout, Transistor) akceptuje WAV, ale zaleca MP3, bo upload jest szybszy, a koszty pasma niższe.' },
        { title: 'Czyszczenie notatek głosowych', desc: 'Jeśli twój telefon lub rejestrator zapisał w WAV, konwertuj na MP3 przed wrzuceniem do archiwum Notion lub Notatek, oszczędza miejsce tanio.' },
        { title: 'Pipeline czyszczenia audio', desc: 'Nagrałeś w WAV do edycji, zrobiłeś swoje edycje, teraz chcesz, żeby finał był mniejszym MP3 do dystrybucji. To ostatni krok.' },
      ]}}
      proTips={{ title: 'Wskazówki do czystej konwersji WAV na MP3', tips: [
        { title: 'WAV 24-bit konwertuje tak samo jak 16-bit', desc: 'MP3 nie zachowuje głębi bitowej powyżej tego, czego potrzebuje kodowanie percepcyjne. WAV 24-bit nie daje ci słyszalnej przewagi nad 16-bit po ponownym zakodowaniu na MP3 128 kbps.' },
        { title: 'Jeśli WAV jest większy niż 25 MB, najpierw przytnij', desc: 'Otwórz w Audacity (darmowy) lub QuickTime, wytnij potrzebną część, wyeksportuj jako mniejszy WAV, potem konwertuj. Albo zaloguj się dla limitu 60 MB.' },
        { title: 'Mono wchodzi, mono wychodzi', desc: 'Jeśli twój źródłowy WAV jest mono (typowe dla nagrań głosowych), powstały MP3 też będzie mono. MP3 mono przy 128 kbps to za dużo, ale nasz konwerter standardyzuje na 128 dla prostoty.' },
        { title: 'Do masteringu lub archiwizacji nie używaj MP3', desc: 'Jeśli trzymasz plik jako kopię master do przyszłego re-masteringu, zostań w WAV (lub FLAC). MP3 to format dystrybucji, nie archiwizacji.' },
        { title: '320 kbps lub VBR? Otwórz MP3 w Audacity potem', desc: 'Eksportujemy stałe 128 kbps. Dla wyższego bitrate lub VBR weź MP3 do Audacity i wyeksportuj ponownie, strata jakości z jednego dodatkowego kodowania jest mała.' },
        { title: 'WAV z dziwnymi nagłówkami padają po cichu', desc: 'Niektóre pliki BWF (broadcast WAV) mają nagłówki, których ffmpeg nie czyta. Otwórz w Audacity, zapisz jako standardowy WAV i spróbuj ponownie.' },
      ]}}
      faq={[
        { q: 'Czy konwersja WAV na MP3 jest naprawdę darmowa?', a: 'Tak. Bez konta do 25 MB, bez limitu czasu, bez znaku wodnego na wyjściu. Reklamy display na stronach edytorialnych płacą za serwer.' },
        { q: 'Jaki jest maksymalny rozmiar pliku?', a: '25 MB anonimowo, 60 MB z darmowym kontem. WAV 25 MB to około 5 minut przy 16-bit/44.1 kHz stereo lub około 2 minuty przy 24-bit/96 kHz.' },
        { q: 'Ile trwa?', a: 'Sekundy. Sama konwersja jest znacznie szybsza niż czas rzeczywisty, WAV 25 MB kończy się w 3-8 sekund. Wąskim gardłem jest prędkość uploadu.' },
        { q: 'Jaką jakość MP3 wypuszczacie?', a: '128 kbps stały bitrate, 44.1 kHz, zgodne z liczbą kanałów źródła (mono in → mono out, stereo in → stereo out). To uniwersalne ustawienie "wystarczająco dobre na wszystko".' },
        { q: 'Trzymacie moje pliki?', a: 'Nie. Upload jest kasowany zaraz po konwersji. Wynik jest czyszczony w ciągu godziny przez nasz cron sprzątający. Zapisz lokalnie.' },
        { q: 'Czy MP3 będzie brzmiał inaczej niż WAV?', a: 'Na większości systemów odtwarzania i większości materiału źródłowego, nie. Masterując na monitorach studyjnych ze świeżymi uszami, może, ale wtedy nie używałbyś konwertera webowego.' },
        { q: 'Mogę dostać wyższy bitrate (256 lub 320 kbps)?', a: 'Nie bezpośrednio tutaj. Weź nasz MP3 128 kbps do Audacity i wyeksportuj ponownie przy bitrate, którego chcesz. Podwójne kodowanie dodaje pomijalną słyszalną stratę.' },
        { q: 'A FLAC zamiast MP3?', a: 'FLAC to bezstratna kompresja, połowa rozmiaru WAV, bez utraty jakości. Do użytku archiwizacyjnego to lepszy wybór. Nie wypuszczamy FLAC z tego konwertera, ale nasza strona /flac-to-mp3 obsługuje drugi kierunek.' },
        { q: 'Mój WAV jest 32-bit float. Skonwertuje?', a: 'Tak. ffmpeg obsługuje WAV 32-bit float bez problemu. Wyjście MP3 jest takie samo niezależnie od głębi bitowej wejścia.' },
        { q: 'Dlaczego audio mono dostaje stereo MP3?', a: 'Zachowujemy układ kanałów źródła. WAV mono → MP3 mono. WAV stereo → MP3 stereo. Nie robimy upmix ani downmix.' },
        { q: 'Działa dla muzyki czy tylko głosu?', a: 'Obie rzeczy. MP3 128 kbps to lekki percepcyjny kompromis dla muzyki, ok do słuchania w samochodzie, słuchawkach w hałaśliwych otoczeniach, luźnego odtwarzania. Do krytycznego odsłuchu muzycznego trzymaj WAV lub używaj FLAC.' },
        { q: 'Mogę konwertować wsadowo?', a: 'Jeszcze nie. Jeden plik na raz w darmowym planie. Wsad jest planowany na przyszły plan Pro.' },
      ]}
      relatedLinks={[
        { href: '/pl/mp4-to-mp3', label: 'MP4 na MP3', desc: 'Wyciągnij audio MP3 z pliku wideo.' },
        { href: '/pl/flac-to-mp3', label: 'FLAC na MP3', desc: 'Konwertuj bezstratny FLAC na przenośny MP3.' },
        { href: '/pl/mp3-to-wav', label: 'MP3 na WAV', desc: 'Odwrotnie, nieskompresowany WAV z MP3.' },
        { href: '/pl/transcribe-audio-to-text', label: 'Audio na tekst', desc: 'Potrzebujesz słów, nie audio? Pomiń MP3 i transkrybuj bezpośrednio.' },
      ]}
    />
  )
}
