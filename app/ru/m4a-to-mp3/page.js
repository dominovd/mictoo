import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-mp3',
  'fr': 'https://mictoo.com/fr/m4a-to-mp3',
  'de': 'https://mictoo.com/de/m4a-to-mp3',
  'es': 'https://mictoo.com/es/m4a-to-mp3',
  'ru': 'https://mictoo.com/ru/m4a-to-mp3',
  'it': 'https://mictoo.com/it/m4a-to-mp3',
  'pt': 'https://mictoo.com/pt/m4a-to-mp3',
  'pl': 'https://mictoo.com/pl/m4a-to-mp3',
  'ja': 'https://mictoo.com/ja/m4a-to-mp3',
  'ko': 'https://mictoo.com/ko/m4a-to-mp3',
  'x-default': 'https://mictoo.com/m4a-to-mp3',
}

export const metadata = {
  title: 'M4A в MP3: Бесплатный конвертер для аудио Apple | Mictoo',
  description:
    'Конвертируйте голосовые заметки iPhone, GarageBand и файлы M4A из экосистемы Apple в универсальный MP3 для хостов подкастов, старых Android-устройств и устаревших плееров.',
  alternates: {
    canonical: 'https://mictoo.com/ru/m4a-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'M4A в MP3: Бесплатный конвертер для аудио Apple | Mictoo',
    description: 'Голосовые заметки iPhone и GarageBand в универсальный MP3.',
    url: 'https://mictoo.com/ru/m4a-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4A в MP3: Бесплатный конвертер',
    description: 'Голосовые заметки iPhone в универсальный MP3.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RuM4aToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ru"
      mode="converter" from="m4a" to="mp3" currentHref="/ru/m4a-to-mp3"
      badge="M4A → MP3 · Бесплатно · Аудио Apple"
      h1First="M4A в MP3"
      h1Second="Бесплатный конвертер для аудио экосистемы Apple"
      subtitle="Перетащите голосовую заметку iPhone, файл GarageBand или экспорт из Apple Podcasts и получите универсальный MP3 для хостов подкастов, старых Android-устройств и устаревших плееров."
      outputFormat="MP3" outputQuality="128 кбит/с" outputAudio="Стерео"
      stepsTitle="Как работает конвертация M4A в MP3"
      steps={[
        { icon: 'upload',   title: 'Перетащите M4A',        desc: 'Из голосовых заметок, GarageBand, Apple Podcasts. До 25 MB анонимно.' },
        { icon: 'waveform', title: 'Мы декодируем и кодируем', desc: 'ffmpeg декодирует AAC внутри контейнера M4A и перекодирует в 128 кбит/с MP3.' },
        { icon: 'download', title: 'Скачайте MP3',    desc: 'Получите MP3, совместимый с большинством современных плееров и аудиоредакторов.' },
      ]}
      previewInputName="voice-memo.m4a"
      previewInputSize="6.2 MB · 00:12:04"
      previewOutputName="voice-memo.mp3"
      previewOutputSize="00:12:04 · 128 кбит/с · 11.5 MB"
      whyTitle="Почему стоит использовать Mictoo для M4A в MP3?"
      whyCards={[
        { icon: 'target',   title: 'Дружественно к iPhone',        desc: 'Голосовые заметки iPhone в формате .m4a перетаскиваются напрямую, переименовывать не нужно.' },
        { icon: 'fileAudio',title: 'MP3 для устаревших хостов',   desc: 'Некоторые хосты подкастов и старые Android-устройства все еще предпочитают MP3 вместо M4A.' },
        { icon: 'lock',     title: 'Файлы удаляются после',    desc: 'Загруженный M4A удаляется после конвертации; MP3 очищается в течение часа.' },
        { icon: 'shield',   title: 'Без водяного знака или тега',    desc: 'Только аудио, перекодированное. Без брендированного интро, без метаданных.' },
      ]}
      scenariosTitle="Когда M4A в MP3 полезно"
      scenarios={[
        { icon: 'headphones', title: 'Голосовая заметка iPhone' },
        { icon: 'waveform',   title: 'Файл GarageBand' },
        { icon: 'mail',       title: 'Устаревший хост подкастов' },
        { icon: 'archive',    title: 'Единый формат библиотеки' },
        { icon: 'editPen',    title: 'Импорт в старую DAW' },
        { icon: 'video',      title: 'Не-Apple видеоредактор' },
      ]}
      tipsTitle="Советы для чистого M4A в MP3"
      tips={[
        'Если ваша платформа принимает M4A, возможно, вам не нужно конвертировать.',
        'Оба формата с потерями; перекодирование добавляет небольшую потерю качества.',
        'Метаданные ID3 и iTunes не переносятся.',
        'Для транскрипции загрузите M4A напрямую на /ru/m4a-to-text.',
      ]}
      processTitle="Что происходит во время конвертации"
      processSteps={['M4A (контейнер MP4)', 'Декодирование AAC', 'Кодирование MP3']}
      compareTitle="M4A против MP3"
      compareRows={[
        { fmt: 'M4A', contains: 'Нет', size: 'Маленький (эффективный)', best: 'Экосистема Apple, современные устройства' },
        { fmt: 'MP3', contains: 'Нет', size: 'Маленький',             best: 'Универсальный, устаревшие плееры, старые хосты' },
      ]}
      faq={[
        { q: 'Нужно ли конвертировать M4A в MP3?', a: 'Только если конкретный инструмент или хост требует MP3. Большинство современных устройств (включая все Android и Windows в 2026 году) воспроизводят M4A нативно.' },
        { q: 'Конвертер бесплатный?', a: 'Да. Файлы до 25 MB могут быть конвертированы без аккаунта, и выходной файл не содержит водяного знака.' },
        { q: 'Потеряю ли я качество?', a: 'M4A и MP3 оба с потерями. Перекодирование добавляет небольшую потерю, но она не слышна при обычном прослушивании.' },
        { q: 'Работает ли родной формат голосовых заметок iPhone?', a: 'Да. Голосовые заметки iPhone записывают стандартный .m4a, который перетаскивается напрямую.' },
        { q: 'Файлы хранятся?', a: 'Нет. Загруженный M4A удаляется после конвертации; MP3 очищается в течение часа.' },
      ]}
      ctaHeadline="Конвертируйте ваш M4A в MP3 сейчас"
      ctaSubtitle="Перетащите вашу голосовую заметку iPhone или аудио Apple и получите портативный MP3."
      ctaButton="Выберите файл M4A"
      moreTools={[
        { href: '/ru/aac-to-mp3',  label: 'AAC в MP3' },
        { href: '/ru/mp4-to-mp3',  label: 'MP4 в MP3' },
        { href: '/ru/mp3-to-m4a',  label: 'MP3 в M4A' },
        { href: '/ru/m4a-to-text', label: 'M4A в текст' },
      ]}
    />
  )
}