import ConverterPageLayout from '@/components/ConverterPageLayout'

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
  title: 'WAV в MP3, бесплатный онлайн конвертер | Mictoo',
  description:
    'Конвертируйте WAV в MP3 бесплатно онлайн. Уменьшите без потерь файлы WAV до портативного MP3 128 кбит/с за считанные секунды. Без регистрации, без водяного знака. До 25 МБ.',
  alternates: { canonical: 'https://mictoo.com/ru/wav-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WAV в MP3, бесплатный онлайн конвертер | Mictoo',
    description: 'Уменьшите без потерь WAV до портативного MP3 128 кбит/с. Без регистрации.',
    url: 'https://mictoo.com/ru/wav-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WAV в MP3, бесплатный онлайн конвертер',
    description: 'Уменьшите WAV до портативного MP3.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RuWavToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ru"
      mode="converter" from="wav" to="mp3" currentHref="/ru/wav-to-mp3"
      badge="WAV → MP3 · Бесплатно · Без регистрации"
      h1First="WAV в MP3"
      h1Second="Бесплатный онлайн конвертер"
      subtitle="Перетащите не сжатый WAV файл и получите маленький, портативный MP3 за считанные секунды. Без водяного знака, без электронной почты, без ожидания."
      outputFormat="MP3" outputQuality="128 кбит/с" outputAudio="Стерео"
      stepsTitle="Как работает конвертация WAV в MP3"
      steps={[
        { icon: 'upload',   title: 'Перетащите WAV',         desc: 'Загрузите WAV файл размером до 25 МБ. Учетная запись не требуется.' },
        { icon: 'waveform', title: 'Мы кодируем в MP3',      desc: 'ffmpeg кодирует в стерео MP3 128 кбит/с на 44.1 кГц. 25 МБ WAV завершает конвертацию примерно за 10 секунд.' },
        { icon: 'download', title: 'Скачайте MP3',     desc: 'Получите меньший MP3 128 кбит/с с оригинальным именем файла.' },
      ]}
      previewInputName="studio-bounce.wav"
      previewInputSize="120 МБ · 00:12:34 · 16-бит / 44.1 кГц"
      previewOutputName="studio-bounce.mp3"
      previewOutputSize="00:12:34 · 128 кбит/с · 11.5 МБ"
      whyTitle="Почему стоит использовать Mictoo для WAV в MP3?"
      whyCards={[
        { icon: 'target',   title: 'Одна задача выполнена хорошо',      desc: 'Только конвертация. Без всплывающих окон с новостями, без фальшивой полосы прогресса.' },
        { icon: 'fileAudio',title: 'Гораздо меньший выход',    desc: 'Несжатые PCM WAV файлы часто становятся в 8, 12 раз меньше при 128 кбит/с. Точное соотношение зависит от источника.' },
        { icon: 'lock',     title: 'Файлы удаляются после',    desc: 'Ваш загрузка удаляется сразу после завершения конвертации; MP3 очищается в течение часа.' },
        { icon: 'shield',   title: 'Без водяного знака или метки',    desc: 'Без брендированного интро, без внедренных метаданных. Только аудио, перекодированное.' },
      ]}
      scenariosTitle="Когда WAV в MP3 полезно"
      scenarios={[
        { icon: 'headphones', title: 'Студийный файл для телефона' },
        { icon: 'mail',       title: 'Отправьте меньший файл по электронной почте' },
        { icon: 'archive',    title: 'Архивирование меньшего размера' },
        { icon: 'editPen',    title: 'Подготовка к транскрипции' },
        { icon: 'waveform',   title: 'Импорт музыкальной библиотеки' },
        { icon: 'video',      title: 'Озвучивание для видео' },
      ]}
      tipsTitle="Советы для чистого WAV в MP3"
      tips={[
        '128 кбит/с является прозрачным для большинства прослушиваний.',
        'Если WAV больше 25 МБ, обрежьте или сожмите его перед загрузкой.',
        'Многоканальный WAV смешивается в стерео.',
        'Для без потерь сохранения, храните WAV как архивную копию.',
      ]}
      processTitle="Что происходит во время конвертации"
      processSteps={['Контейнер WAV', 'Декодирование PCM', 'Кодирование MP3']}
      compareTitle="WAV против MP3"
      compareRows={[
        { fmt: 'WAV', contains: 'Нет', size: 'Большой (~10 МБ/мин)', best: 'Редактирование, архивирование, студия' },
        { fmt: 'MP3', contains: 'Нет', size: 'Маленький (~1 МБ/мин)',  best: 'Обмен, воспроизведение, прослушивание' },
      ]}
      faq={[
        { q: 'Конвертер WAV в MP3 бесплатный?', a: 'Да. Учетная запись не нужна для файлов до 25 МБ, и выходной файл не имеет водяного знака.' },
        { q: 'Снижает ли конвертация качество аудио?', a: 'Немного. MP3 на 128 кбит/с является сжатым форматом, но падение качества не слышно для голоса и обычного воспроизведения музыки. Храните ваш WAV как мастер.' },
        { q: 'Хранятся ли загруженные файлы?', a: 'Нет. Ваш WAV попадает в хранилище Vercel Blob ровно на время конвертации, затем он удаляется. MP3 очищается в течение часа.' },
        { q: 'Могу ли я конвертировать большой WAV?', a: 'Текущий лимит загрузки составляет 25 МБ. Для большего файла обрежьте его или экспортируйте моно или копию с более низкой частотой дискретизации перед загрузкой.' },
        { q: 'Работает ли это на мобильных устройствах?', a: 'Да. Загрузки работают из iOS Safari и Android Chrome.' },
      ]}
      ctaHeadline="Конвертируйте ваш WAV в MP3 сейчас"
      ctaSubtitle="Перетащите ваш WAV и получите портативный MP3 за считанные секунды. Без регистрации. Без водяного знака."
      ctaButton="Выберите WAV файл"
      moreTools={[
        { href: '/ru/mp4-to-mp3',  label: 'MP4 в MP3' },
        { href: '/ru/webm-to-mp3', label: 'WEBM в MP3' },
        { href: '/ru/flac-to-mp3', label: 'FLAC в MP3' },
        { href: '/ru/mp3-to-wav',  label: 'MP3 в WAV' },
        { href: '/ru/wav-to-text', label: 'WAV в текст' },
      ]}
    />
  )
}