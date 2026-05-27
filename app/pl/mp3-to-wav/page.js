import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-wav',
  'fr': 'https://mictoo.com/fr/mp3-to-wav',
  'de': 'https://mictoo.com/de/mp3-to-wav',
  'es': 'https://mictoo.com/es/mp3-to-wav',
  'ru': 'https://mictoo.com/ru/mp3-to-wav',
  'it': 'https://mictoo.com/it/mp3-to-wav',
  'pt': 'https://mictoo.com/pt/mp3-to-wav',
  'pl': 'https://mictoo.com/pl/mp3-to-wav',
  'ja': 'https://mictoo.com/ja/mp3-to-wav',
  'ko': 'https://mictoo.com/ko/mp3-to-wav',
  'x-default': 'https://mictoo.com/mp3-to-wav',
}

export const metadata = {
  title: 'MP3 na WAV — darmowy konwerter online | Mictoo',
  description:
    'Konwertuj MP3 na WAV online za darmo. Rozszerz skompresowany MP3 do nieskompresowanego WAV 16-bit/44.1 kHz do edycji audio. Bez rejestracji, bez znaku wodnego.',
  alternates: { canonical: 'https://mictoo.com/pl/mp3-to-wav', languages: LANGS },
}

export default function PlMp3ToWavPage() {
  return (
    <LandingLayout
      defaultLanguage="pl"
      badge="MP3 → WAV · Za darmo · Bez rejestracji"
      h1={<>MP3 na WAV<br /><span className="text-brand-600">Darmowy konwerter online</span></>}
      subtitle="Upuść MP3. Dostań WAV PCM 16-bit/44.1 kHz gotowy do oprogramowania edycji audio. Bez znaku wodnego, bez emaila."
      tool={<ConverterZone from="mp3" to="wav" />}
      howItWorks={[
        { icon: '📂', title: 'Upuść MP3', desc: 'Przeciągnij MP3 do okna. Pliki do 25 MB anonimowo, 60 MB po rejestracji.' },
        { icon: '⚡', title: 'ffmpeg dekoduje do PCM', desc: 'PCM 16-bit, 44.1 kHz, układ kanałów źródła zachowany. Kilka sekund dla typowego pliku.' },
        { icon: '⬇️', title: 'Pobierz WAV', desc: 'Plik WAV jest około dziesięć razy większy niż MP3, bo jest nieskompresowany. Wymazany z naszych serwerów w ciągu godziny.' },
      ]}
      whyUse={{ title: 'Dlaczego konwertować MP3 na WAV', bullets: [
        { title: 'Edytory audio wolą WAV', desc: 'Audacity, Adobe Audition, Logic, Pro Tools, wszystkie otwierają MP3, ale większość operacji (precyzyjna edycja, nakładanie efektów, normalizacja) działa lepiej na WAV. Konwersja najpierw unika lekkiej straty jakości powtórzonych kodowań MP3.' },
        { title: 'Brak dodatkowej straty jakości przy edycjach', desc: 'Każde ponowne kodowanie MP3 lekko degraduje audio. Konwertuj na WAV, zrób edycje, wyeksportuj z powrotem na MP3 na końcu, ten pojedynczy obrót to najlepsze, co możesz zrobić.' },
        { title: 'Wymagane przez niektóry starszy sprzęt i oprogramowanie', desc: 'Niektóre stare oprogramowanie do wypalania CD, samplery i sprzęt nagrywający czytają tylko WAV. Konwersja to most.' },
        { title: 'Użycie kryminalistyczne i broadcastowe', desc: 'Kryminalistyczna analiza audio i workflow broadcastowe tradycyjnie używają WAV, bo format jest dobrze rozumiany i nieskompresowany. MP3 jest akceptowalne jako materiał źródłowy, ale WAV to format roboczy.' },
        { title: 'Bez znaku wodnego, bez upsellu', desc: 'Po prostu zdekodowane audio w kontenerze WAV. Nic nie dodajemy.' },
      ]}}
      useCases={{ title: 'Kiedy konwertować MP3 na WAV', items: [
        { title: 'Edycja audio w Audacity, Reaper, Logic', desc: 'Konwertuj najpierw na WAV, potem nakładaj efekty, tnij, normalizuj, miksuj. Wyeksportuj ponownie na MP3 na końcu, jeśli potrzebujesz małego pliku do dystrybucji.' },
        { title: 'Mastering pod winyl lub CD', desc: 'Cięcie winyla i tłoczenie CD oba chcą bezstratnego audio. Jeśli twoim jedynym źródłem jest MP3, konwersja na WAV daje inżynierowi masteringu coś, z czym można pracować, choć jakość audio jest ograniczona źródłem MP3.' },
        { title: 'Przygotowanie sampla do samplera', desc: 'Sampelry sprzętowe (Akai, Korg) często chcą plików WAV w określonych głębiach bitowych i sample rate.' },
        { title: 'Praca voiceover do wideo', desc: 'Niektóre edytory wideo (DaVinci, Premiere) dobrze obsługują MP3, ale pokazują lepsze przebiegi i nakładają efekty czyściej na WAV.' },
        { title: 'Analiza kryminalistyczna lub transkrypcyjna', desc: 'Niektóre specjalistyczne narzędzia analizy wymagają wejścia WAV.' },
      ]}}
      proTips={{ title: 'Wskazówki do konwersji MP3 na WAV', tips: [
        { title: 'WAV będzie 10x rozmiaru MP3', desc: 'MP3 5 MB rozszerza się do około 50 MB jako WAV 16-bit/44.1 kHz. Konwersja nie przywraca utraconej jakości, daje ci tylko działający format.' },
        { title: 'Jakość WAV jest ograniczona MP3', desc: 'Nie możesz sprawić, żeby MP3 128 kbps brzmiał jak CD, konwertując na WAV. WAV po prostu czyni istniejące audio edytowalnym bez dalszej straty kompresji.' },
        { title: 'Dla wyższej wierności, poproś o oryginał', desc: 'Jeśli robisz poważny mastering lub restaurację, weź bezstratny oryginał (WAV, FLAC, ALAC) ze źródła. MP3 → WAV to obejście, nie upgrade.' },
        { title: 'Sample rate ma znaczenie dla sprzętu', desc: 'Większość sprzętu chce 44.1 kHz (CD) lub 48 kHz (wideo). Nasz konwerter zawsze wypuszcza 44.1. Jeśli potrzebujesz 48, otwórz WAV w Audacity i przesampluj.' },
        { title: 'WAV 24-bit, użyj Audacity', desc: 'Nasz konwerter wypuszcza WAV 16-bit. Dla 24-bit otwórz powstały WAV w Audacity i wyeksportuj ponownie z 24-bit float. Dodatkowa głębia bitowa daje zapas do edycji, nawet jeśli audio źródłowe to tylko ekwiwalent 16-bit.' },
        { title: 'Mono wchodzi, mono wychodzi, oszczędza miejsce', desc: 'Jeśli twój MP3 jest mono, WAV też jest mono, połowa rozmiaru konwersji stereo. Zachowujemy układ kanałów źródła.' },
      ]}}
      faq={[
        { q: 'Czy konwersja MP3 na WAV jest naprawdę darmowa?', a: 'Tak. Bez konta do 25 MB, bez znaku wodnego, bez limitu czasu.' },
        { q: 'Dlaczego WAV jest tak dużo większy niż MP3?', a: 'MP3 używa kompresji percepcyjnej, żeby wyrzucić dane audio, których twoje uszy ledwo zauważają. WAV przechowuje każdą próbkę w pełnej precyzji. Typowy MP3 to jedna dziesiąta rozmiaru ekwiwalentu WAV.' },
        { q: 'Czy WAV będzie brzmiał lepiej niż MP3?', a: 'Nie. MP3 już stracił dane podczas swojego oryginalnego kodowania. WAV zachowuje audio jak jest, nie przywraca jakości.' },
        { q: 'Jaki format WAV wypuszczacie?', a: 'PCM 16-bit, 44.1 kHz, układ kanałów źródła zachowany (mono in → mono out, stereo in → stereo out).' },
        { q: 'Ile trwa?', a: 'Sekundy. Dekodowanie MP3 jest szybkie.' },
        { q: 'Mogę dostać WAV 24-bit lub 32-bit float?', a: 'Nie z tego konwertera. Otwórz nasz WAV 16-bit w Audacity i wyeksportuj ponownie z głębią bitową, której chcesz, dodatkowe bity dają zapas do edycji, nawet jeśli precyzja audio źródła jest ograniczona MP3.' },
        { q: 'Trzymacie moje pliki?', a: 'Nie. Upload kasowany po konwersji. Wyjście czyszczone w ciągu godziny.' },
        { q: 'Mogę konwertować wsadowo?', a: 'Jeszcze nie w darmowym planie. Otwórz kilka zakładek przeglądarki.' },
        { q: 'A sample rate 48 kHz?', a: 'Wypuszczamy 44.1 kHz (rate CD). Dla 48 kHz (praca z wideo) przesampluj WAV w Audacity po konwersji.' },
        { q: 'Po co w ogóle konwertować?', a: 'Głównie do edycji audio. Audacity, Pro Tools, Logic, wszystkie działają lepiej na WAV niż na MP3, zwłaszcza dla powtarzanych edycji.' },
        { q: 'Czy konwersja zawiedzie dla niektórych MP3?', a: 'Rzadko. ffmpeg dekoduje zasadniczo każdy standardowy MP3. Naprawdę uszkodzony plik może zawieść; poza tym jest niezawodne.' },
        { q: 'Powinienem trzymać oba pliki?', a: 'Do edycji pracuj w WAV. Do dystrybucji trzymaj też MP3. Kiedy edycja jest gotowa, wyeksportuj ponownie z WAV na świeży MP3 na końcu łańcucha.' },
      ]}
      relatedLinks={[
        { href: '/pl/wav-to-mp3', label: 'WAV na MP3', desc: 'Odwrotny kierunek.' },
        { href: '/pl/flac-to-mp3', label: 'FLAC na MP3', desc: 'Bezstratny FLAC na przenośny MP3.' },
        { href: '/pl/wav-to-text', label: 'WAV na tekst', desc: 'Transkrybuj audio WAV bezpośrednio.' },
        { href: '/pl/how-to-compress-audio', label: 'Skompresuj audio', desc: 'Dla plików, które musisz zmniejszyć.' },
      ]}
    />
  )
}
