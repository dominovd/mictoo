import ConverterPageLayout from '@/components/ConverterPageLayout'

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
  title: 'Бесплатный генератор SRT: создавайте SRT-файлы субтитров онлайн из аудио или видео | Mictoo',
  description:
    'Создавайте чистые SRT-файлы субтитров из любого аудио или видео. Точные временные метки Whisper, готовые для YouTube, Premiere, Final Cut, DaVinci Resolve, CapCut. Бесплатно, без регистрации.',
  alternates: {
    canonical: 'https://mictoo.com/ru/free-srt-generator',
    languages: LANGS,
  },
  openGraph: {
    title: 'Бесплатный генератор SRT | Mictoo',
    description: 'Создавайте SRT-файлы субтитров из аудио или видео. Готово для YouTube, Premiere, Final Cut.',
    url: 'https://mictoo.com/ru/free-srt-generator',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Бесплатный генератор SRT',
    description: 'Субтитры SRT качества Whisper из аудио или видео.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RuFreeSrtGeneratorPage() {
  return (
    <ConverterPageLayout
      locale="ru"
      mode="upload" currentHref="/ru/free-srt-generator"
      badge="SRT · Аудио или видео · Бесплатно"
      h1First="Бесплатный генератор SRT"
      h1Second="Субтитры качества Whisper из любого аудио или видео"
      subtitle="Загрузите аудио или видео, получите файл субтитров SRT, готовый для YouTube, Premiere, Final Cut, DaVinci Resolve или CapCut. Без регистрации, без оплаты за минуту."
      stepsTitle="Как работает генерация SRT"
      steps={[
        { icon: 'upload',   title: 'Перетащите аудио или видео', desc: 'MP3, MP4, WAV, M4A, WEBM, FLAC и другие. До 25 MB анонимно, 180 MB при входе.' },
        { icon: 'waveform', title: 'Whisper транскрибирует', desc: 'Whisper large-v3 создает временные метки для каждого сегмента, синхронизированные с оригинальным аудио.' },
        { icon: 'download', title: 'Скачайте SRT',        desc: 'Экспорт SRT и VTT включен. Перетащите в ваш видеоредактор или загрузите на YouTube.' },
      ]}
      whyTitle="Почему стоит использовать Mictoo для генерации SRT?"
      whyCards={[
        { icon: 'target',   title: 'Точные многоязычные субтитры', desc: 'Whisper large-v3 добавляет знаки препинания и обрабатывает множество языков, акцентов и типов записи.' },
        { icon: 'captions', title: 'SRT + VTT включены',                desc: 'Оба формата субтитров генерируются автоматически. VTT для веб-плееров, SRT для редакторов.' },
        { icon: 'lock',     title: 'Файлы удаляются после',               desc: 'Загруженное аудио удаляется после транскрипции; транскрипт сохраняется только на учетных записях с входом.' },
        { icon: 'shield',   title: 'Без водяных знаков или тегов',       desc: 'Чистый SRT без брендированного вступления или тега "Создано с X".' },
      ]}
      scenariosTitle="Когда генерация SRT полезна"
      scenarios={[
        { icon: 'video',      title: 'Субтитры для загрузки на YouTube' },
        { icon: 'editPen',    title: 'Импорт в Premiere / DaVinci' },
        { icon: 'headphones', title: 'Версия видео подкаста' },
        { icon: 'mail',       title: 'Копия для рецензии клиента' },
        { icon: 'archive',    title: 'Архив доступности' },
        { icon: 'target',     title: 'Субтитры на иностранном языке' },
      ]}
      tipsTitle="Советы для более чистых субтитров"
      tips={[
        'Для файлов более 25 MB войдите в систему для автоматического разделения загрузок до 180 MB.',
        'Явно укажите язык для неанглийского или технического контента.',
        'Проверьте имена и необычные термины в режиме редактора перед экспортом.',
        'Сначала переведите транскрипт, затем экспортируйте SRT для иностранных субтитров.',
      ]}
      processTitle="Что происходит во время генерации"
      processSteps={['Аудио / видео', 'Транскрипция Whisper', 'Экспорт SRT + VTT']}
      faq={[
        { q: 'Генератор SRT бесплатный?', a: 'Да. До 25 MB анонимно или 180 MB при входе. Без водяных знаков на SRT и без оплаты за минуту.' },
        { q: 'Какие форматы субтитров я получаю?', a: 'Включены SRT и VTT. TXT (обычный текст) и DOCX также доступны. Пользователи с входом дополнительно получают PDF и JSON.' },
        { q: 'Насколько точны временные метки?', a: 'Whisper large-v3 предоставляет временные метки для каждого сегмента, синхронизированные с оригинальным аудио. Достаточно точно для субтитров на YouTube и большинства случаев редактирования видео.' },
        { q: 'Вы определяете говорящих (диаризация)?', a: 'Пока нет. Непрерывные субтитры с временными метками, но без меток говорящих. Диаризация в планах Pro.' },
        { q: 'Mictoo транскрибирует неанглийское аудио?', a: 'Да. Whisper large-v3 поддерживает более 50 языков с автоматическим определением. Явно укажите язык для более чистых результатов.' },
        { q: 'Записи хранятся на ваших серверах?', a: 'Нет. Аудио передается поставщику транскрипции, обрабатывается один раз и удаляется. Транскрипты сохраняются только на учетных записях с входом.' },
      ]}
      ctaHeadline="Создавайте SRT-субтитры из любой записи"
      ctaSubtitle="YouTube, Premiere, Final Cut, DaVinci, CapCut. Временные метки качества Whisper."
      ctaButton="Загрузите аудио или видео"
      moreTools={[
        { href: '/ru/timestamped-transcription', label: 'Транскрибированный текст с временными метками' },
        { href: '/ru/youtube-to-text',           label: 'YouTube в текст' },
        { href: '/ru/transcribe-video-to-text',  label: 'Видео в текст' },
        { href: '/ru/transcribe-audio-to-text',  label: 'Аудио в текст' },
      ]}
    />
  )
}