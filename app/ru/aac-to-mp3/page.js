import ConverterPageLayout from '@/components/ConverterPageLayout'

export const metadata = {
  title: 'AAC в MP3: Бесплатный онлайн-конвертер | Mictoo',
  description:
    'Конвертируйте AAC в MP3 бесплатно, за считанные секунды, с четким объяснением, когда конвертация действительно помогает, а когда просто ухудшает качество.',
  alternates: {
    canonical: 'https://mictoo.com/ru/aac-to-mp3',
    languages: {
      'en': 'https://mictoo.com/aac-to-mp3',
      'fr': 'https://mictoo.com/fr/aac-to-mp3',
      'de': 'https://mictoo.com/de/aac-to-mp3',
      'es': 'https://mictoo.com/es/aac-to-mp3',
      'ru': 'https://mictoo.com/ru/aac-to-mp3',
      'it': 'https://mictoo.com/it/aac-to-mp3',
      'pt': 'https://mictoo.com/pt/aac-to-mp3',
      'pl': 'https://mictoo.com/pl/aac-to-mp3',
      'ja': 'https://mictoo.com/ja/aac-to-mp3',
      'ko': 'https://mictoo.com/ko/aac-to-mp3',
      'x-default': 'https://mictoo.com/aac-to-mp3',
    },
  },
  openGraph: {
    title: 'AAC в MP3: Бесплатный онлайн-конвертер | Mictoo',
    description: 'Конвертируйте AAC в MP3 бесплатно, за считанные секунды.',
    url: 'https://mictoo.com/ru/aac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC в MP3: Бесплатный онлайн-конвертер',
    description: 'Конвертируйте AAC в MP3 за считанные секунды. Бесплатно, без регистрации.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RuAacToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ru"
      mode="converter" from="aac" to="mp3" currentHref="/ru/aac-to-mp3"
      badge="AAC → MP3 · Бесплатно · Без регистрации"
      h1First="AAC в MP3"
      h1Second="Бесплатный онлайн-конвертер"
      subtitle="Перетащите сырой файл .aac (поток ADTS, дамп трансляции или извлеченный звук iPhone) и получите портативный MP3 за считанные секунды."
      outputFormat="MP3" outputQuality="128 кбит/с" outputAudio="Стерео"
      stepsTitle="Как работает конвертация AAC в MP3"
      steps={[
        { icon: 'upload',   title: 'Перетащите AAC',        desc: 'Сырые ADTS или ADIF кадры, до 25 МБ анонимно.' },
        { icon: 'waveform', title: 'Мы декодируем и кодируем', desc: 'ffmpeg считывает битовый поток AAC и повторно кодирует в стерео MP3 на 128 кбит/с.' },
        { icon: 'download', title: 'Скачайте MP3',    desc: 'Получите ваш чистый MP3 за считанные секунды, готовый для любого плеера.' },
      ]}
      previewInputName="broadcast-clip.aac"
      previewInputSize="8.4 МБ · 00:07:22 · 128 кбит/с AAC"
      previewOutputName="broadcast-clip.mp3"
      previewOutputSize="00:07:22 · 128 кбит/с MP3 · 6.8 МБ"
      whyTitle="Почему стоит использовать Mictoo для AAC в MP3?"
      whyCards={[
        { icon: 'target',   title: 'Обработка сырого AAC',        desc: 'Оба кадра ADTS и ADIF работают напрямую, без ручной переработки.' },
        { icon: 'fileAudio',title: 'MP3 воспроизводится повсюду',   desc: 'Старые устройства и устаревшие хосты подкастов иногда предпочитают MP3 вместо AAC.' },
        { icon: 'lock',     title: 'Файлы удаляются после',    desc: 'Загруженный AAC удаляется после конвертации; MP3 очищается в течение часа.' },
        { icon: 'shield',   title: 'Без водяного знака или тега',    desc: 'Только аудио, повторно закодированное. Без брендированного интро или метаданных.' },
      ]}
      scenariosTitle="Когда AAC в MP3 полезен"
      scenarios={[
        { icon: 'video',      title: 'Дамп трансляции HLS' },
        { icon: 'headphones', title: 'Хост подкастов требует MP3' },
        { icon: 'mail',       title: 'Совместимость с устаревшими плеерами' },
        { icon: 'editPen',    title: 'Импорт в DAW (старые инструменты)' },
        { icon: 'archive',    title: 'Последовательный архивный формат' },
        { icon: 'waveform',   title: 'С ripped iPhone AAC' },
      ]}
      tipsTitle="Советы для чистого AAC в MP3"
      tips={[
        'Если ваше устройство воспроизводит AAC нативно, возможно, вам не нужно конвертировать.',
        'Оба AAC и MP3 являются сжатым форматом; повторная кодировка добавляет небольшую потерю качества.',
        'Держите исходный файл в пределах текущего лимита загрузки 25 МБ.',
        'Для транскрипции загрузите AAC напрямую на /ru/aac-to-text вместо этого.',
      ]}
      processTitle="Что происходит во время конвертации"
      processSteps={['Кадры AAC ADTS', 'Декодирование', 'Кодирование MP3']}
      compareTitle="AAC против MP3"
      compareRows={[
        { fmt: 'AAC', contains: 'Нет', size: 'Маленький (эффективный)', best: 'Современные устройства, стриминг, iPhone' },
        { fmt: 'MP3', contains: 'Нет', size: 'Маленький',             best: 'Универсальная совместимость, устаревшие плееры' },
      ]}
      faq={[
        { q: 'Мне действительно нужно конвертировать AAC в MP3?', a: 'Редко. Большинство современных устройств воспроизводят AAC нативно. Конвертируйте только если конкретный инструмент или хост явно требует MP3.' },
        { q: 'Конвертер бесплатный?', a: 'Да. Файлы до 25 МБ могут быть конвертированы без аккаунта, и выходной файл не имеет водяного знака.' },
        { q: 'Какова потеря качества?', a: 'AAC и MP3 оба являются сжатыми форматами. Повторная кодировка добавляет небольшую дополнительную потерю, но она не слышна при обычном прослушивании на 128 кбит/с.' },
        { q: 'Какие кадры AAC работают?', a: 'ADTS (наиболее распространенный), ADIF и LATM все декодируются. AAC внутри MP4/M4A тоже работает, но это другой путь приема.' },
        { q: 'Файлы хранятся?', a: 'Нет. Загруженный AAC удаляется после конвертации; MP3 очищается в течение часа.' },
      ]}
      ctaHeadline="Конвертируйте ваш AAC в MP3 сейчас"
      ctaSubtitle="Перетащите ваш AAC и получите чистый MP3 за считанные секунды. Без регистрации. Без водяного знака."
      ctaButton="Выберите файл AAC"
      moreTools={[
        { href: '/ru/m4a-to-mp3',  label: 'M4A в MP3' },
        { href: '/ru/mp4-to-mp3',  label: 'MP4 в MP3' },
        { href: '/ru/wav-to-mp3',  label: 'WAV в MP3' },
        { href: '/ru/aac-to-text', label: 'AAC в текст' },
      ]}
    />
  )
}