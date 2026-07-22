import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-mp3',
  'fr': 'https://mictoo.com/fr/webm-to-mp3',
  'de': 'https://mictoo.com/de/webm-to-mp3',
  'es': 'https://mictoo.com/es/webm-to-mp3',
  'ru': 'https://mictoo.com/ru/webm-to-mp3',
  'it': 'https://mictoo.com/it/webm-to-mp3',
  'pt': 'https://mictoo.com/pt/webm-to-mp3',
  'pl': 'https://mictoo.com/pl/webm-to-mp3',
  'ja': 'https://mictoo.com/ja/webm-to-mp3',
  'ko': 'https://mictoo.com/ko/webm-to-mp3',
  'x-default': 'https://mictoo.com/webm-to-mp3',
}

export const metadata = {
  title: 'WEBM в MP3, бесплатный онлайн конвертер | Mictoo',
  description:
    'Конвертируйте WEBM в MP3 бесплатно онлайн. Извлеките MP3 аудио из любого WEBM видео или аудиофайла за считанные секунды. Без регистрации, без водяного знака. До 25 MB.',
  alternates: { canonical: 'https://mictoo.com/ru/webm-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WEBM в MP3, бесплатный онлайн конвертер | Mictoo',
    description: 'Извлеките MP3 из любого WEBM. Без регистрации, без водяного знака.',
    url: 'https://mictoo.com/ru/webm-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEBM в MP3, бесплатный онлайн конвертер',
    description: 'Извлеките MP3 из любого WEBM.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RuWebmToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ru"
      mode="converter" from="webm" to="mp3" currentHref="/ru/webm-to-mp3"
      badge="WEBM → MP3 · Бесплатно · Без регистрации"
      h1First="WEBM в MP3"
      h1Second="Бесплатный онлайн конвертер"
      subtitle="Перетащите WEBM (из Loom, OBS, записи Firefox или загрузчика YouTube) и получите чистый MP3 за считанные секунды. Без водяного знака, без электронной почты."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Стерео"
      stepsTitle="Как работает конвертация WEBM в MP3"
      steps={[
        { icon: 'upload',   title: 'Перетащите WEBM',   desc: 'Видео или только аудио WEBM, оба варианта подходят. До 25 MB анонимно.' },
        { icon: 'waveform', title: 'Мы демультиплексируем и кодируем', desc: 'ffmpeg удаляет видеодорожку (если она есть) и перекодирует аудио Opus или Vorbis в MP3 на 128 kbps.' },
        { icon: 'download', title: 'Скачайте MP3', desc: 'Получите ваш чистый MP3 за считанные секунды. Оригинальное имя файла с расширением .mp3.' },
      ]}
      previewInputName="loom-walkthrough.webm"
      previewInputSize="72 MB · 00:08:12"
      previewOutputName="loom-walkthrough.mp3"
      previewOutputSize="00:08:12 · 128 kbps · 7.5 MB"
      whyTitle="Почему стоит использовать Mictoo для WEBM в MP3?"
      whyCards={[
        { icon: 'target',   title: 'Обрабатывает Opus и Vorbis', desc: 'Оба кодека WEBM работают напрямую, без ручной переработки.' },
        { icon: 'video',    title: 'Обработка видео в WEBM',   desc: 'Мы демультиплексируем видеодорожку на сервере. Вам никогда не нужно извлекать аудио самостоятельно.' },
        { icon: 'lock',     title: 'Файлы удаляются после',     desc: 'Загруженный WEBM удаляется после конвертации; MP3 очищается в течение часа.' },
        { icon: 'shield',   title: 'Без водяного знака или метки',     desc: 'Выходной MP3 не имеет вставки в начале, без брендированной метаданных.' },
      ]}
      scenariosTitle="Когда WEBM в MP3 полезно"
      scenarios={[
        { icon: 'video',      title: 'Обзор Loom' },
        { icon: 'headphones', title: 'Вывод загрузчика YouTube' },
        { icon: 'mail',       title: 'Отправить меньший файл по электронной почте' },
        { icon: 'editPen',    title: 'Подготовка к транскрипции' },
        { icon: 'waveform',   title: 'Запись в браузере' },
        { icon: 'archive',    title: 'Архивировать только аудио' },
      ]}
      tipsTitle="Советы для чистого WEBM в MP3"
      tips={[
        'Видео-WEBM автоматически демультиплексируется, нет необходимости сначала удалять.',
        'Для записей более 25 MB обрежьте или разделите источник перед загрузкой.',
        'Используется дорожка аудио по умолчанию, если их несколько.',
        'Для транскрипции Whisper загрузите WEBM напрямую на /webm-to-text.',
      ]}
      processTitle="Что происходит во время конвертации"
      processSteps={['Контейнер WEBM', 'Извлечение аудиодорожки', 'Кодирование MP3']}
      compareTitle="WEBM против MP3"
      compareRows={[
        { fmt: 'WEBM', contains: 'Часто да', size: 'Средний-большой', best: 'Веб-запись, видео в браузере' },
        { fmt: 'MP3',  contains: 'Нет',        size: 'Маленький',        best: 'Обмен, воспроизведение, везде' },
      ]}
      faq={[
        { q: 'Конвертер WEBM в MP3 бесплатный?', a: 'Да. Файлы до 25 MB могут быть конвертированы без аккаунта, и выходной файл не имеет водяного знака.' },
        { q: 'Что если мой WEBM имеет видео?', a: 'Мы демультиплексируем видеодорожку на сервере и только кодируем аудио. Вам не нужно предварительно удалять ничего.' },
        { q: 'Какие кодеки аудио WEBM работают?', a: 'Opus (современный, наиболее распространенный) и Vorbis (старый). Оба поддерживаются напрямую.' },
        { q: 'Хранятся ли загруженные файлы?', a: 'Нет. WEBM удаляется после конвертации; MP3 очищается в течение часа.' },
        { q: 'Мой WEBM больше 25 MB. Что теперь?', a: 'Обрежьте источник перед загрузкой или сначала извлеките только аудио WEBM, чтобы уменьшить размер файла.' },
      ]}
      ctaHeadline="Конвертируйте ваш WEBM в MP3 сейчас"
      ctaSubtitle="Перетащите ваш WEBM и получите чистый MP3 за считанные секунды. Без регистрации. Без водяного знака."
      ctaButton="Выберите файл WEBM"
      moreTools={[
        { href: '/ru/mp4-to-mp3',  label: 'MP4 в MP3' },
        { href: '/ru/wav-to-mp3',  label: 'WAV в MP3' },
        { href: '/ru/flac-to-mp3', label: 'FLAC в MP3' },
        { href: '/ru/webm-to-text', label: 'WEBM в текст' },
      ]}
    />
  )
}