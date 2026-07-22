import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-m4a',
  'fr': 'https://mictoo.com/fr/mp3-to-m4a',
  'de': 'https://mictoo.com/de/mp3-to-m4a',
  'es': 'https://mictoo.com/es/mp3-to-m4a',
  'ru': 'https://mictoo.com/ru/mp3-to-m4a',
  'it': 'https://mictoo.com/it/mp3-to-m4a',
  'pt': 'https://mictoo.com/pt/mp3-to-m4a',
  'pl': 'https://mictoo.com/pl/mp3-to-m4a',
  'ja': 'https://mictoo.com/ja/mp3-to-m4a',
  'ko': 'https://mictoo.com/ko/mp3-to-m4a',
  'x-default': 'https://mictoo.com/mp3-to-m4a',
}

export const metadata = {
  title: 'MP3 в M4A, бесплатный онлайн конвертер | Mictoo',
  description:
    'Конвертируйте MP3 в M4A бесплатно онлайн. Пере编码ируйте MP3 в AAC внутри контейнера M4A для iPhone, iTunes и экосистемы Apple. Без регистрации, без водяного знака.',
  alternates: { canonical: 'https://mictoo.com/ru/mp3-to-m4a', languages: LANGS },
  openGraph: {
    title: 'MP3 в M4A, бесплатный онлайн конвертер | Mictoo',
    description: 'MP3 в AAC внутри M4A. Совместим с iPhone. Без регистрации.',
    url: 'https://mictoo.com/ru/mp3-to-m4a',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 в M4A, бесплатный онлайн конвертер',
    description: 'Совместимый с iPhone AAC в MP4.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RuMp3ToM4aPage() {
  return (
    <ConverterPageLayout
      locale="ru"
      mode="converter" from="mp3" to="m4a" currentHref="/ru/mp3-to-m4a"
      badge="MP3 → M4A · Бесплатно · Совместимо с iPhone"
      h1First="MP3 в M4A"
      h1Second="Бесплатный онлайн конвертер"
      subtitle="Перетащите MP3 и получите M4A (AAC в контейнере MP4) для заметок голоса iPhone, iTunes, GarageBand и экосистемы Apple. Без водяного знака, без электронной почты."
      outputFormat="M4A" outputQuality="128 кбит/с AAC" outputAudio="Стерео"
      stepsTitle="Как работает конвертация MP3 в M4A"
      steps={[
        { icon: 'upload',   title: 'Перетащите MP3',        desc: 'Любой битрейт MP3, до 25 MB анонимно.' },
        { icon: 'waveform', title: 'Мы пере编码ируем в AAC', desc: 'ffmpeg декодирует MP3 и пере编码ирует как 128 кбит/с AAC внутри контейнера .m4a.' },
        { icon: 'download', title: 'Скачайте M4A',   desc: 'Файл, совместимый с iPhone, с оригинальным именем и расширением .m4a.' },
      ]}
      previewInputName="episode.mp3"
      previewInputSize="8.4 MB · 00:09:22"
      previewOutputName="episode.m4a"
      previewOutputSize="00:09:22 · 128 кбит/с AAC · 7.6 MB"
      whyTitle="Почему стоит использовать Mictoo для MP3 в M4A?"
      whyCards={[
        { icon: 'target',    title: 'Выход, совместимый с Apple',    desc: 'M4A работает нативно с общими рабочими процессами iPhone, iTunes, GarageBand и Apple.' },
        { icon: 'fileAudio', title: 'Предсказуемый выход',       desc: 'Файл пере编码ируется как 128 кбит/с AAC. Его окончательный размер зависит в основном от продолжительности записи.' },
        { icon: 'lock',      title: 'Файлы удаляются после',      desc: 'Загруженный MP3 удаляется после конвертации; M4A удаляется в течение часа.' },
        { icon: 'shield',    title: 'Без водяного знака или тега',      desc: 'Только аудио, пере编码ированное. Без брендированного интро, без внедренных метаданных.' },
      ]}
      scenariosTitle="Когда MP3 в M4A полезно"
      scenarios={[
        { icon: 'headphones', title: 'Импорт в библиотеку iTunes' },
        { icon: 'waveform',   title: 'Проект GarageBand' },
        { icon: 'video',      title: 'Звуковая дорожка iMovie' },
        { icon: 'mail',       title: 'Совместимость с AirDrop' },
        { icon: 'archive',    title: 'Архив экосистемы Apple' },
        { icon: 'editPen',    title: 'Импорт в Logic Pro' },
      ]}
      tipsTitle="Советы для чистого MP3 в M4A"
      tips={[
        'MP3 и AAC оба являются сжатым форматом; пере编码ирование добавляет небольшую потерю качества.',
        'Для без потерь конвертируйте в WAV вместо этого.',
        'ID3 теги не переносятся в M4A.',
        'Держите исходный файл ниже текущего лимита загрузки в 25 MB.',
      ]}
      processTitle="Что происходит во время конвертации"
      processSteps={['MP3 поток', 'Декодирование', 'AAC / M4A кодирование']}
      compareTitle="MP3 против M4A"
      compareRows={[
        { fmt: 'MP3', contains: 'Нет', size: 'Маленький', best: 'Универсальные, устаревшие плееры' },
        { fmt: 'M4A', contains: 'Нет', size: 'Немного меньше', best: 'iPhone, iTunes, GarageBand, приложения Apple' },
      ]}
      faq={[
        { q: 'Конвертер MP3 в M4A бесплатный?', a: 'Да. Файлы до 25 MB могут быть конвертированы без учетной записи, и выход не имеет водяного знака.' },
        { q: 'Улучшает ли конвертация MP3 в M4A качество?', a: 'Нет. Пере编码ирование из одного сжатого формата в другой может лишь немного ухудшить качество. Делайте это только для совместимости с экосистемой Apple.' },
        { q: 'Будет ли M4A работать в iTunes и Apple Music?', a: 'Да. Стандартный AAC внутри контейнера MP4 - это именно тот формат, который использует iTunes.' },
        { q: 'Файлы хранятся?', a: 'Нет. Загруженный MP3 удаляется после конвертации; M4A удаляется в течение часа.' },
        { q: 'Могу ли я конвертировать в без потерь M4A (ALAC)?', a: 'Не с этой страницы. Выход - сжатый AAC. Для без потерь конвертируйте MP3 в WAV сначала, затем в ALAC в вашей DAW.' },
      ]}
      ctaHeadline="Конвертируйте ваш MP3 в M4A сейчас"
      ctaSubtitle="Перетащите ваш MP3 и получите совместимый с iPhone M4A за считанные секунды."
      ctaButton="Выберите MP3 файл"
      moreTools={[
        { href: '/ru/m4a-to-mp3',  label: 'M4A в MP3' },
        { href: '/ru/mp3-to-wav',  label: 'MP3 в WAV' },
        { href: '/ru/mp4-to-mp3',  label: 'MP4 в MP3' },
        { href: '/ru/m4a-to-text', label: 'M4A в текст' },
      ]}
    />
  )
}