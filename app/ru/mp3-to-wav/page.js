import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-wav',
  'fr': 'https://mictoo.com/fr/mp3-to-wav',
  'de': 'https://mictoo.com/de/mp3-to-wav',
  'es': 'https://mictoo.com/es/mp3-to-wav',
  'ru': 'https://mictoo.com/ru/mp3-to-wav',
  'it': 'https://mictoo.com/it/mp3-to-wav',
  'pt': 'https://mictoo.com/pt/mp3-to-wav',
  'pl': 'https://mictoo.com/pl/mp3-to-wav',
  'ja': 'https://mictoo.com/ja/mp3-to-wav',
  'ko': 'https://mictoo.com/ko/mp3-to-wav',
  'x-default': 'https://mictoo.com/mp3-to-wav',
}

export const metadata = {
  title: 'MP3 в WAV, бесплатный онлайн конвертер | Mictoo',
  description:
    'Конвертируйте MP3 в WAV бесплатно онлайн. Расширьте сжатый MP3 в несжатый 16-битный/44,1 кГц WAV для редактирования аудио. Без регистрации, без водяных знаков.',
  alternates: { canonical: 'https://mictoo.com/ru/mp3-to-wav', languages: LANGS },
  openGraph: {
    title: 'MP3 в WAV, бесплатный онлайн конвертер | Mictoo',
    description: 'MP3 в несжатый 16-битный/44,1 кГц WAV. Для редактирования.',
    url: 'https://mictoo.com/ru/mp3-to-wav',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 в WAV, бесплатный онлайн конвертер',
    description: 'Для редактирования и мастеринга в DAW.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RuMp3ToWavPage() {
  return (
    <ConverterPageLayout
      locale="ru"
      mode="converter" from="mp3" to="wav" currentHref="/ru/mp3-to-wav"
      badge="MP3 → WAV · Бесплатно · Удобно для редакторов"
      h1First="MP3 в WAV"
      h1Second="Бесплатный онлайн конвертер"
      subtitle="Перетащите MP3 и получите несжатый 16-битный / 44,1 кГц WAV для редактирования в DAW, мастеринга или записи на CD. Без водяных знаков, без электронной почты."
      outputFormat="WAV" outputQuality="16-бит / 44,1 кГц" outputAudio="Стерео"
      stepsTitle="Как работает конвертация MP3 в WAV"
      steps={[
        { icon: 'upload',   title: 'Перетащите MP3',       desc: 'Любой MP3 с битрейтом до 25 МБ анонимно.' },
        { icon: 'waveform', title: 'Мы декодируем в PCM',   desc: 'ffmpeg декодирует MP3 в несжатый 16-битный / 44,1 кГц PCM, обернутый в контейнер WAV.' },
        { icon: 'download', title: 'Скачайте WAV',   desc: 'Готово для Audacity, Pro Tools, Logic, Ableton и любого аудио редактора.' },
      ]}
      previewInputName="voiceover.mp3"
      previewInputSize="4.6 МБ · 00:05:00 · 128 кбит/с"
      previewOutputName="voiceover.wav"
      previewOutputSize="00:05:00 · 16-бит / 44,1 кГц · 50 МБ"
      whyTitle="Почему стоит использовать Mictoo для MP3 в WAV?"
      whyCards={[
        { icon: 'target',   title: 'Выход, готовый для DAW',       desc: 'Несжатый PCM ,  это то, что ожидают аудио редакторы и инструменты мастеринга.' },
        { icon: 'fileAudio',title: 'Стандарт 16-бит / 44,1', desc: 'Широко поддерживаемая настройка PCM для аудио редакторов, инструментов мастеринга и программного обеспечения для записи CD.' },
        { icon: 'lock',     title: 'Файлы удаляются после',    desc: 'Загруженный MP3 удаляется после конвертации; WAV очищается в течение часа.' },
        { icon: 'shield',   title: 'Без водяных знаков или тегов',    desc: 'Только аудио, декодированное в PCM. Без брендированного интро, без метаданных.' },
      ]}
      scenariosTitle="Когда MP3 в WAV полезно"
      scenarios={[
        { icon: 'editPen',    title: 'Редактирование в Audacity' },
        { icon: 'waveform',   title: 'Импорт в Pro Tools' },
        { icon: 'headphones', title: 'Процесс мастеринга' },
        { icon: 'archive',    title: 'Запись на CD' },
        { icon: 'video',      title: 'Видеоредактор с требованием WAV' },
        { icon: 'target',     title: 'Ввод для обучения клонирования голоса' },
      ]}
      tipsTitle="Советы для чистого MP3 в WAV"
      tips={[
        'WAV в 10 раз больше, чем MP3 (около 10 МБ за минуту).',
        'Выход не является "истинным" без потерь ,  он сохраняет сигнал MP3.',
        'Для настоящего без потерь аудио начните с FLAC или оригинального WAV мастер-файла.',
        'Держите исходный файл ниже текущего лимита загрузки в 25 МБ.',
      ]}
      processTitle="Что происходит во время конвертации"
      processSteps={['MP3 поток', 'Декодировать в PCM', 'Контейнер WAV']}
      compareTitle="MP3 против WAV"
      compareRows={[
        { fmt: 'MP3', contains: 'Нет', size: 'Маленький (~1 МБ/мин)', best: 'Обмен, телефоны, стриминг' },
        { fmt: 'WAV', contains: 'Нет', size: 'Большой (~10 МБ/мин)', best: 'Редактирование, мастеринг, запись на CD' },
      ]}
      faq={[
        { q: 'Восстанавливает ли конвертация MP3 в WAV качество без потерь?', a: 'Нет. MP3 с потерями; WAV сохраняет сигнал MP3, но ничего больше. Для истинного без потерь нужно начинать с FLAC или оригинального WAV.' },
        { q: 'Конвертер бесплатный?', a: 'Да. Файлы до 25 МБ могут быть конвертированы без учетной записи, и выход не имеет водяного знака.' },
        { q: 'Почему файл WAV так много больше?', a: 'WAV ,  это несжатый PCM. 5 МБ MP3 становится примерно 50 МБ WAV. Это нормально.' },
        { q: 'Какова глубина битов и частота дискретизации?', a: '16-бит / 44,1 кГц стерео (качество CD). Это стандартный формат импорта в DAW.' },
        { q: 'Файлы хранятся?', a: 'Нет. Загруженный MP3 удаляется после конвертации; WAV очищается в течение часа.' },
      ]}
      ctaHeadline="Конвертируйте ваш MP3 в WAV сейчас"
      ctaSubtitle="Перетащите ваш MP3 и получите несжатый WAV, готовый к редактированию."
      ctaButton="Выбрать MP3 файл"
      moreTools={[
        { href: '/ru/wav-to-mp3',  label: 'WAV в MP3' },
        { href: '/ru/mp3-to-m4a',  label: 'MP3 в M4A' },
        { href: '/ru/flac-to-mp3', label: 'FLAC в MP3' },
        { href: '/ru/wav-to-text', label: 'WAV в текст' },
      ]}
    />
  )
}