import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLAC в MP3, бесплатный онлайн конвертер | Mictoo',
  description:
    'Конвертируйте FLAC в MP3 бесплатно онлайн. Уменьшите без потерь FLAC до 128 кбит/с MP3 за считанные секунды. Без регистрации, без водяных знаков. До 25 МБ.',
  alternates: { canonical: 'https://mictoo.com/ru/flac-to-mp3', languages: LANGS },
  openGraph: {
    title: 'FLAC в MP3, бесплатный онлайн конвертер | Mictoo',
    description: 'Уменьшите без потерь FLAC до 128 кбит/с MP3. Без регистрации.',
    url: 'https://mictoo.com/ru/flac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLAC в MP3, бесплатный онлайн конвертер',
    description: 'Уменьшите без потерь FLAC до портативного MP3.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RuFlacToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ru"
      mode="converter" from="flac" to="mp3" currentHref="/ru/flac-to-mp3"
      badge="FLAC → MP3 · Бесплатно · Без регистрации"
      h1First="FLAC в MP3"
      h1Second="Бесплатный онлайн конвертер"
      subtitle="Перетащите без потерь файл FLAC (с CD, загрузки Tidal или высококачественного источника) и получите портативный MP3 128 кбит/с за считанные секунды."
      outputFormat="MP3" outputQuality="128 кбит/с" outputAudio="Стерео"
      stepsTitle="Как работает конвертация FLAC в MP3"
      steps={[
        { icon: 'upload',   title: 'Перетащите FLAC',       desc: 'Любой FLAC (родной или FLAC в OGG). До 25 МБ анонимно.' },
        { icon: 'waveform', title: 'Мы декодируем и кодируем', desc: 'ffmpeg декодирует без потерь FLAC и перекодирует в стерео MP3 128 кбит/с.' },
        { icon: 'download', title: 'Скачайте MP3',    desc: 'Получите ваш MP3, который в 5-8 раз меньше, готовый для любого плеера.' },
      ]}
      previewInputName="album-track.flac"
      previewInputSize="42 МБ · 00:05:12 · 16-бит / 44.1 кГц"
      previewOutputName="album-track.mp3"
      previewOutputSize="00:05:12 · 128 кбит/с · 4.8 МБ"
      whyTitle="Почему стоит использовать Mictoo для FLAC в MP3?"
      whyCards={[
        { icon: 'target',    title: 'Сохраняет оригинал без потерь', desc: 'Ваш файл FLAC никогда не изменяется. Мы только создаем копию.' },
        { icon: 'fileAudio', title: 'Меньшая копия для прослушивания',    desc: 'MP3 128 кбит/с часто в несколько раз меньше, чем FLAC. Конвертация с потерями, поэтому сохраняйте FLAC как оригинал.' },
        { icon: 'lock',      title: 'Файлы удаляются после',       desc: 'Загруженный FLAC удаляется после конвертации; MP3 удаляется в течение часа.' },
        { icon: 'shield',    title: 'Без водяных знаков или тегов',       desc: 'Только аудио, перекодированное. Без вступительных вставок, без брендированных метаданных.' },
      ]}
      scenariosTitle="Когда FLAC в MP3 полезен"
      scenarios={[
        { icon: 'headphones', title: 'CD для телефона' },
        { icon: 'mail',       title: 'Отправить меньший файл по электронной почте' },
        { icon: 'archive',    title: 'Портативная музыкальная библиотека' },
        { icon: 'editPen',    title: 'Импорт в DAW' },
        { icon: 'waveform',   title: 'Копия для прослушивания подкаста' },
        { icon: 'video',      title: 'Звуковая дорожка видео' },
      ]}
      tipsTitle="Советы для чистой конвертации FLAC в MP3"
      tips={[
        'Сохраняйте FLAC как архивную копию без потерь.',
        '128 кбит/с прозрачен для большинства прослушиваний.',
        'Для треков более 25 МБ обрежьте или разделите источник перед загрузкой.',
        'Теги метаданных Vorbis (название/артист) не переносятся в MP3.',
      ]}
      processTitle="Что происходит во время конвертации"
      processSteps={['Контейнер FLAC', 'Декодирование без потерь', 'Кодирование MP3']}
      compareTitle="FLAC против MP3"
      compareRows={[
        { fmt: 'FLAC', contains: 'Нет', size: 'Большой (~5-8 МБ/мин)', best: 'Архивный, высококачественное воспроизведение' },
        { fmt: 'MP3',  contains: 'Нет', size: 'Маленький (~1 МБ/мин)',   best: 'Обмен, телефоны, везде' },
      ]}
      faq={[
        { q: 'Конвертер FLAC в MP3 бесплатный?', a: 'Да. Файлы до 25 МБ можно конвертировать без учетной записи, а выходной файл не имеет водяного знака.' },
        { q: 'Я теряю качество, конвертируя FLAC в MP3?', a: 'Технически да (MP3 с потерями), но при 128 кбит/с потеря не слышна для типичного прослушивания. Сохраняйте FLAC как архивную копию.' },
        { q: 'Поддерживаются файлы FLAC в OGG?', a: 'Да. Работают как родные FLAC (магические байты fLaC), так и FLAC внутри контейнеров OGG.' },
        { q: 'Файлы хранятся?', a: 'Нет. Загруженный FLAC удаляется после конвертации; MP3 удаляется в течение часа.' },
        { q: 'Мой FLAC больше 25 МБ. Что теперь?', a: 'Обрежьте или разделите источник, или экспортируйте копию для прослушивания с более низким разрешением перед загрузкой.' },
      ]}
      ctaHeadline="Конвертируйте ваш FLAC в MP3 сейчас"
      ctaSubtitle="Перетащите ваш FLAC и получите портативный MP3 за считанные секунды. Без регистрации. Без водяных знаков."
      ctaButton="Выберите файл FLAC"
      moreTools={[
        { href: '/ru/wav-to-mp3',  label: 'WAV в MP3' },
        { href: '/ru/mp4-to-mp3',  label: 'MP4 в MP3' },
        { href: '/ru/webm-to-mp3', label: 'WEBM в MP3' },
        { href: '/ru/flac-to-text', label: 'FLAC в текст' },
      ]}
    />
  )
}