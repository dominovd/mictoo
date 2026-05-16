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
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'Бесплатный генератор SRT — создание файлов субтитров онлайн | Mictoo',
  description: 'Создавайте SRT-файлы из любого аудио или видео бесплатно. Загрузите файл, получите расшифровку с таймкодами и скачайте готовый .srt. Без регистрации.',
  alternates: { canonical: 'https://mictoo.com/ru/free-srt-generator', languages: LANGS },
}

export default function RuSrtGeneratorPage() {
  return (
    <LandingLayout
      badge="SRT · Субтитры · Бесплатно"
      h1={<>Бесплатный генератор SRT<br /><span className="text-brand-600">Создание субтитров онлайн</span></>}
      subtitle="Загрузите любой аудио- или видеофайл и скачайте готовый SRT-файл субтитров за секунды. Работает с YouTube, Premiere Pro, DaVinci Resolve и любым видеоредактором."
      defaultLanguage="ru"
      features={[
        { icon: '🎬', title: 'SRT для YouTube', desc: 'Загружайте .srt напрямую в YouTube Studio для добавления субтитров к вашим видео. Таймкоды синхронизируются автоматически.' },
        { icon: '⏱️', title: 'Точные таймкоды', desc: 'Каждый сегмент субтитров получает точный таймкод в формате HH:MM:SS,ms — стандартный формат для всех профессиональных видеоинструментов.' },
        { icon: '🌍', title: '50+ языков', desc: 'Генерирует SRT на любом языке — английском, испанском, французском, немецком, японском и ещё 46. Язык определяется автоматически.' },
      ]}
      faq={[
        { q: 'Что такое SRT-файл?', a: 'SRT (SubRip Subtitle) — это текстовый файл, содержащий записи субтитров с таймкодами. Каждая запись имеет порядковый номер, время начала → окончания и текст субтитра. SRT — самый широко поддерживаемый формат субтитров.' },
        { q: 'Как создать SRT из видео?', a: 'Загрузите ваш видео- или аудиофайл выше. Mictoo расшифрует его и добавит таймкоды к каждому сегменту. После расшифровки нажмите кнопку .srt, чтобы скачать файл субтитров.' },
        { q: 'Как добавить SRT-субтитры к видео на YouTube?', a: 'В YouTube Studio откройте видео и нажмите «Субтитры». Выберите «Добавить язык», затем «Загрузить файл» и выберите ваш .srt. YouTube синхронизирует субтитры автоматически.' },
        { q: 'Работает ли SRT в Premiere Pro и DaVinci Resolve?', a: 'Да. В Premiere Pro: Файл → Импорт → выберите ваш .srt. В DaVinci Resolve: откройте страницу Edit, перейдите в Файл → Импорт субтитра, выберите .srt.' },
        { q: 'Действительно ли генератор SRT бесплатный?', a: 'Да, полностью бесплатный. Без аккаунта, без подписки, без водяных знаков. Загрузите файл и скачайте SRT — всё.' },
        { q: 'Какой максимальный размер файла?', a: 'До 25 МБ. Для более длинных видео сначала извлеките аудиодорожку, чтобы уменьшить размер, или разбейте видео на короткие части.' },
        { q: 'Можно ли создать SRT из аудиофайлов (MP3, WAV)?', a: 'Да. Mictoo генерирует SRT из любого аудио- или видеоформата: MP3, MP4, WAV, M4A, OGG, WEBM, FLAC.' },
        { q: 'Можно ли отредактировать субтитры перед скачиванием?', a: 'Да. После расшифровки вы можете отредактировать текст в браузере перед скачиванием. Структура таймкодов сохраняется в экспортированном SRT.' },
      ]}
      relatedLinks={[
        { href: '/ru/timestamped-transcription', label: 'Расшифровка с таймкодами' },
        { href: '/transcribe-video-to-text', label: 'Видео в текст' },
        { href: '/transcribe-mp3-to-text', label: 'MP3 в текст' },
        { href: '/ru', label: 'Все форматы' },
      ]}
    />
  )
}
