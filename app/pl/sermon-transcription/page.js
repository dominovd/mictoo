import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'pl': 'https://mictoo.com/pl/sermon-transcription',
  'ja': 'https://mictoo.com/ja/sermon-transcription',
  'ko': 'https://mictoo.com/ko/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: 'Transkrypcja kazań — Darmowy generator transkryptów kazań | Mictoo',
  description: 'Transkrybuj kazania i audio kościelne na tekst za darmo. Idealne do blogów, notatek do studium i dostępności. Obsługuje MP3, MP4, M4A. Bez rejestracji.',
  alternates: { canonical: 'https://mictoo.com/pl/sermon-transcription', languages: LANGS },
}

export default function PlSermonPage() {
  return (
    <LandingLayout
      badge="Kazania · Kościół · Za darmo"
      h1={<>Transkrypcja kazań<br /><span className="text-brand-600">Darmowy generator transkryptów</span></>}
      subtitle="Przekształć nagrania kazań w czysty tekst w kilka sekund. Idealne do blogów kościelnych, przewodników do studium, postów na social media i uczynienia przesłania dostępnym dla niesłyszących."
      defaultLanguage="pl"
      features={[
        { icon: '📖', title: 'Wykorzystaj każde kazanie ponownie', desc: 'Przekształć kazanie w post na blog, rozważanie, newsletter, przewodnik do studium i cytaty gotowe na social media. Zwielokrotnij zasięg bez dodatkowej pracy.' },
        { icon: '♿', title: 'Dostępność', desc: 'Oferuj transkrypcje, aby członkowie niesłyszący, niedosłyszący lub uczestniczący zdalnie mogli w pełni odebrać przesłanie.' },
        { icon: '🌐', title: 'Wsparcie wielojęzyczne', desc: 'Działa dla polskiego, angielskiego, hiszpańskiego, portugalskiego, koreańskiego, francuskiego, rosyjskiego i ponad 45 innych języków. Idealne dla wielojęzycznych zborów.' },
      ]}
      faq={[
        { q: 'Jak przekształcić nagranie kazania w tekst?', a: 'Eksportuj nagranie z konsoli dźwiękowej kościoła, z feedu podcastów lub z YouTube jako MP3, MP4 lub M4A. Prześlij plik powyżej — Mictoo transkrybuje w kilka sekund.' },
        { q: 'Czy mogę transkrybować kazania z kanału YouTube naszego kościoła?', a: 'Tak. Dla swojego kanału: YouTube Studio → Treść → kliknij wideo → Pobierz. Prześlij plik do Mictoo. Dla zewnętrznych kanałów potrzebujesz pozwolenia — wiele służb udostępnia pobieranie audio przez feed podcastów.' },
        { q: 'A wersety biblijne i imiona własne?', a: 'Transkrypcja AI dobrze radzi sobie z popularnymi wersetami i imionami, ale czasami błędnie zapisuje rzadkie biblijne imiona lub terminologię specyficzną dla twojego kościoła. Popraw je w edytorze przeglądarki przed pobraniem — zwykle 30 sekund recenzji.' },
        { q: 'Jaka jest maksymalna długość kazania?', a: 'Do 25 MB na plik. 30-minutowe kazanie w 128 kbps mieści się wygodnie. Dla dłuższych przesłań (45-60 minut) obniż bitrate do 64 kbps mono lub podziel na dwie części.' },
        { q: 'Czy pliki pozostają prywatne?', a: 'Tak. Kazania są przetwarzane i natychmiastowo usuwane. Nie przechowujemy ani audio, ani treści transkrypcji.' },
      ]}
      relatedLinks={[
        { href: '/pl/podcast-transcription', label: 'Transkrypcja podcastów' },
        { href: '/pl/lecture-transcription', label: 'Transkrypcja wykładów' },
        { href: '/pl', label: 'Wszystkie formaty' },
      ]}
    />
  )
}
