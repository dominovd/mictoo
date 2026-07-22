import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp4-to-mp3',
  'fr': 'https://mictoo.com/fr/mp4-to-mp3',
  'de': 'https://mictoo.com/de/mp4-to-mp3',
  'es': 'https://mictoo.com/es/mp4-to-mp3',
  'ru': 'https://mictoo.com/ru/mp4-to-mp3',
  'it': 'https://mictoo.com/it/mp4-to-mp3',
  'pt': 'https://mictoo.com/pt/mp4-to-mp3',
  'pl': 'https://mictoo.com/pl/mp4-to-mp3',
  'ja': 'https://mictoo.com/ja/mp4-to-mp3',
  'ko': 'https://mictoo.com/ko/mp4-to-mp3',
  'x-default': 'https://mictoo.com/mp4-to-mp3',
}

export const metadata = {
  title: 'MP4 в MP3, бесплатный онлайн-конвертер | Mictoo',
  description:
    'Конвертируйте MP4 в MP3 бесплатно онлайн. Загрузите ваше видео, получите чистый MP3 аудиофайл 128 кбит/с за считанные секунды. Без регистрации, без водяных знаков, без электронной почты. До 25 МБ.',
  alternates: { canonical: 'https://mictoo.com/ru/mp4-to-mp3', languages: LANGS },
  openGraph: {
    title: 'MP4 в MP3, бесплатный онлайн-конвертер | Mictoo',
    description: 'Конвертируйте MP4 в MP3 бесплатно онлайн. 128 кбит/с, без регистрации, без водяных знаков.',
    url: 'https://mictoo.com/ru/mp4-to-mp3',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP4 в MP3, бесплатный онлайн-конвертер',
    description: 'Конвертируйте MP4 в MP3 бесплатно онлайн. 128 кбит/с, без регистрации, без водяных знаков.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RuMp4ToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ru"
      mode="converter"
      from="mp4"
      to="mp3"
      currentHref="/ru/mp4-to-mp3"

      badge="MP4 → MP3 · Бесплатно · Без регистрации"
      h1First="MP4 в MP3"
      h1Second="Бесплатный онлайн-конвертер"
      subtitle="Загрузите видео MP4 и получите чистый аудиофайл MP3 за считанные секунды. Без водяных знаков, без электронной почты, без ожидания."

      outputFormat="MP3"
      outputQuality="128 кбит/с"
      outputAudio="Стерео"

      stepsTitle="Как работает конвертация MP4 в MP3"
      steps={[
        {
          icon: 'upload',
          title: 'Загрузите MP4',
          desc: 'Загрузите ваше видео MP4. Мы принимаем файлы размером до 25 МБ.',
        },
        {
          icon: 'waveform',
          title: 'Мы извлекаем аудио',
          desc: 'Наш сервер извлекает аудиотрек и кодирует его в MP3.',
        },
        {
          icon: 'download',
          title: 'Скачайте MP3',
          desc: 'Получите ваш чистый MP3 файл за считанные секунды.',
        },
      ]}

      previewInputName="meeting-recording.mp4"
      previewInputSize="128.4 МБ · 00:45:32"
      previewOutputName="meeting-recording.mp3"
      previewOutputSize="00:45:32 · 128 кбит/с"

      whyTitle="Почему стоит использовать Mictoo для MP4 в MP3?"
      whyCards={[
        {
          icon: 'target',
          title: 'Только конвертация',
          desc: 'Мы сосредоточены на одной задаче ,  быстрой и надежной конвертации MP4 в MP3.',
        },
        {
          icon: 'fileAudio',
          title: 'Маленький, универсальный MP3',
          desc: 'MP3 работает везде и сохраняет небольшой размер файлов.',
        },
        {
          icon: 'lock',
          title: 'Файлы удаляются',
          desc: 'Ваши загрузки обрабатываются безопасно и удаляются после конвертации.',
        },
        {
          icon: 'shield',
          title: 'Без водяных знаков или аудиотегов',
          desc: 'Получите чистый MP3 без водяных знаков или добавленных тегов.',
        },
      ]}

      scenariosTitle="Когда MP4 в MP3 полезно"
      scenarios={[
        { icon: 'headphones', title: 'Сохранить видео подкаст' },
        { icon: 'cap',        title: 'Извлечь аудио лекции' },
        { icon: 'mail',       title: 'Отправить меньший файл по электронной почте' },
        { icon: 'editPen',    title: 'Подготовить к транскрипции' },
        { icon: 'waveform',   title: 'Фоновое аудио' },
        { icon: 'archive',    title: 'Архивировать голосовые записи' },
      ]}

      tipsTitle="Советы для чистой конвертации"
      tips={[
        'Сначала обрежьте большие видео.',
        '128 кбит/с подходит для голоса и музыки.',
        'Используется дорожка аудио по умолчанию.',
        'Видео с защитой DRM не поддерживается.',
      ]}
      processTitle="Что происходит во время конвертации"
      processSteps={[
        'Контейнер MP4',
        'Извлечение аудиотрека',
        'Кодирование MP3',
      ]}

      compareTitle="MP4 против MP3"
      compareRows={[
        { fmt: 'MP4', contains: 'Да', size: 'Большой', best: 'Просмотр, обмен видео' },
        { fmt: 'MP3', contains: 'Нет',  size: 'Маленький', best: 'Прослушивание, только аудио' },
      ]}

      faq={[
        { q: 'Конвертер MP4 в MP3 бесплатный?', a: 'Да. Не требуется учетная запись для файлов до 25 МБ, нет ограничения по времени, без водяных знаков на выходе, без предложений об обновлении. Рекламные объявления на маркетинговых страницах покрывают расходы на сервер.' },
        { q: 'Снижает ли конвертация качество аудио?', a: 'Немного. MP3 ,  это сжатый формат, но при 128 кбит/с потеря качества незаметна для голоса и обычного воспроизведения музыки. Если вам нужно без потерь, конвертируйте в WAV вместо этого.' },
        { q: 'Хранятся ли загруженные файлы?', a: 'Нет. Ваш MP4 попадает в хранилище Vercel Blob ровно на время конвертации, затем он удаляется. Получившийся MP3 очищается в течение часа. Сохраните MP3 локально.' },
        { q: 'Могу ли я конвертировать большой MP4?', a: 'Текущий лимит загрузки составляет 25 МБ. Если ваш MP4 больше, обрежьте его в QuickTime, приложении Photos или другом видеоредакторе перед загрузкой.' },
        { q: 'Работает ли на мобильных устройствах?', a: 'Да. Страница удобна для мобильных устройств, и загрузки работают из iOS Safari и Android Chrome. На iPhone сначала поделитесь видео с Файлами, чтобы выбор мог к нему добраться.' },
      ]}

      ctaHeadline="Конвертируйте ваш MP4 в MP3 сейчас"
      ctaSubtitle="Загрузите ваше видео и получите чистый MP3 за считанные секунды. Без регистрации. Без водяных знаков."
      ctaButton="Выберите файл MP4"

      moreTools={[
        { href: '/ru/wav-to-mp3',  label: 'WAV в MP3' },
        { href: '/ru/webm-to-mp3', label: 'WEBM в MP3' },
        { href: '/ru/flac-to-mp3', label: 'FLAC в MP3' },
        { href: '/ru/aac-to-mp3',  label: 'AAC в MP3' },
        { href: '/ru/m4a-to-mp3',  label: 'M4A в MP3' },
        { href: '/ru/mp3-to-wav',  label: 'MP3 в WAV' },
      ]}
    />
  )
}