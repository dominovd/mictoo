import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'ja': 'https://mictoo.com/ja/timestamped-transcription',
  'ko': 'https://mictoo.com/ko/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'Транскрипция с метками времени: бесплатный генератор транскриптов с временными кодами | Mictoo',
  description:
    'Бесплатная транскрипция с метками времени с временными кодами на уровне сегментов для аудио или видео. Полезно для журналистики, исследований, подкастов и видеомонтажа.',
  alternates: {
    canonical: 'https://mictoo.com/ru/timestamped-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Транскрипция с метками времени: бесплатный генератор транскриптов с временными кодами | Mictoo',
    description: 'Временные метки на уровне предложений для любого аудио или видео.',
    url: 'https://mictoo.com/ru/timestamped-transcription',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Транскрипция с метками времени: бесплатно',
    description: 'Транскрипты с временными кодами для журналистики, исследований, редактирования.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RuTimestampedTranscriptionPage() {
  return (
    <ConverterPageLayout
      locale="ru"
      mode="upload" currentHref="/ru/timestamped-transcription"
      badge="Транскрипция с метками времени · Аудио или видео · Бесплатно"
      h1First="Транскрипция с метками времени"
      h1Second="Транскрипты с временными кодами для журналистики, исследований, редактирования"
      subtitle="Загрузите аудио или видео и получите транскрипт с временными метками для каждого сегмента. Нажмите на любую метку времени, чтобы перейти к этому моменту в аудиоплеере. Бесплатно, без регистрации."
      stepsTitle="Как работает транскрипция с метками времени"
      steps={[
        { icon: 'upload',   title: 'Загрузите аудио или видео',       desc: 'MP3, MP4, WAV, M4A, WEBM, FLAC и другие. До 25 MB анонимно или 180 MB при входе.' },
        { icon: 'waveform', title: 'Whisper ставит временные метки сегментов', desc: 'Whisper large-v3 предоставляет временные метки для каждого сегмента, согласованные с оригинальным аудио.' },
        { icon: 'download', title: 'Экспорт с временными метками',      desc: 'TXT с временными метками, SRT / VTT для субтитров, DOCX для рецензирования.' },
      ]}
      whyTitle="Почему стоит использовать Mictoo для транскрипции с метками времени?"
      whyCards={[
        { icon: 'clock',    title: 'Нажмите, чтобы перейти по временным меткам',   desc: 'Каждая временная метка кликабельна в режиме Читателя. Перейдите к любому моменту в аудиоплеере.' },
        { icon: 'target',   title: 'Транскрипция высокого качества от Whisper', desc: 'Whisper large-v3 добавляет пунктуацию и обрабатывает множество языков, акцентов и типов записи.' },
        { icon: 'captions', title: 'SRT + VTT включены',         desc: 'Временные метки переносятся в SRT и VTT для экспорта субтитров.' },
        { icon: 'lock',     title: 'Файлы удаляются после',        desc: 'Загруженное аудио удаляется после транскрипции; транскрипт сохраняется только на аккаунтах с входом.' },
      ]}
      scenariosTitle="Когда транскрипция с метками времени полезна"
      scenarios={[
        { icon: 'editPen',    title: 'Поиск цитат для журналистики' },
        { icon: 'target',     title: 'Цитирование в UX-исследованиях' },
        { icon: 'video',      title: 'Список подсказок для видеомонтажа' },
        { icon: 'headphones', title: 'Заметки для подкастов' },
        { icon: 'archive',    title: 'Юридические / раскрытие информации' },
        { icon: 'waveform',   title: 'Закладки аудио' },
      ]}
      tipsTitle="Советы для более чистого результата транскрипции с метками времени"
      tips={[
        'Режим Читателя лучше всего подходит для навигации по кликам.',
        'Для экспорта SRT / VTT временные метки согласуются с временной шкалой оригинального файла.',
        'Для длинных записей войдите в систему для автоматического разделения до примерно 3 часов.',
        'Поиск выделяет совпадения и мгновенно показывает их временные метки.',
      ]}
      processTitle="Что происходит во время транскрипции"
      processSteps={['Аудио / видео', 'Whisper large-v3', 'Текст с метками времени']}
      faq={[
        { q: 'Какова гранулярность временных меток?', a: 'На уровне сегментов (примерно на уровне предложений). Whisper изначально производит временные метки на уровне сегментов, согласованные с аудио.' },
        { q: 'Могу ли я нажать на временную метку, чтобы перейти к аудио?', a: 'Да. В режиме Читателя каждая временная метка кликабельна и перематывает аудиоплеер к этому моменту.' },
        { q: 'Инструмент бесплатный?', a: 'Да. До 25 MB анонимно или 180 MB при входе. Без водяного знака и без платы за минуту.' },
        { q: 'Какие форматы экспорта поддерживаются?', a: 'TXT (с временными метками), SRT, VTT, DOCX. Пользователи с входом также получают PDF и JSON с структурированными данными временных меток.' },
        { q: 'Вы определяете говорящих?', a: 'Пока нет. Непрерывный текст с временными метками без меток говорящих. Диаризация в плане Pro.' },
        { q: 'Записи хранятся на ваших серверах?', a: 'Нет. Аудио передается поставщику транскрипции, обрабатывается один раз и удаляется. Транскрипты сохраняются только на аккаунтах с входом.' },
      ]}
      ctaHeadline="Получите транскрипт с метками времени, по которому можно перейти"
      ctaSubtitle="Журналистика, UX-исследования, видеомонтаж, заметки для подкастов. Бесплатно за файл."
      ctaButton="Загрузите аудио или видео"
      moreTools={[
        { href: '/ru/free-srt-generator',       label: 'Генератор SRT' },
        { href: '/ru/youtube-to-text',          label: 'YouTube в текст' },
        { href: '/ru/transcribe-audio-to-text', label: 'Аудио в текст' },
        { href: '/ru/transcribe-video-to-text', label: 'Видео в текст' },
      ]}
    />
  )
}