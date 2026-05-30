import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/otter-alternative',
  'fr': 'https://mictoo.com/fr/otter-alternative',
  'de': 'https://mictoo.com/de/otter-alternative',
  'es': 'https://mictoo.com/es/otter-alternative',
  'ru': 'https://mictoo.com/ru/otter-alternative',
  'it': 'https://mictoo.com/it/otter-alternative',
  'pt': 'https://mictoo.com/pt/otter-alternative',
  'pl': 'https://mictoo.com/pl/otter-alternative',
  'ja': 'https://mictoo.com/ja/otter-alternative',
  'ko': 'https://mictoo.com/ko/otter-alternative',
  'x-default': 'https://mictoo.com/otter-alternative',
}

export const metadata = {
  title: 'Альтернатива Otter — Расшифровка записей, не live-встреч | Mictoo',
  description: 'Otter сделан для live-расшифровки встреч с субтитрами в реальном времени. Mictoo расшифровывает уже имеющиеся записи — бесплатно, без регистрации, без бота. На OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/ru/otter-alternative', languages: LANGS },

  openGraph: {
    title: "Альтернатива Otter — Расшифровка записей, не live-встреч | Mictoo",
    description: "Otter сделан для live-расшифровки встреч с субтитрами в реальном времени. Mictoo расшифровывает уже имеющиеся записи — бесплатно, без регистрации, без бота. На OpenAI Whisper.",
    url: "https://mictoo.com/ru/otter-alternative",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Альтернатива Otter — Расшифровка записей, не live-встреч | Mictoo",
    description: "Otter сделан для live-расшифровки встреч с субтитрами в реальном времени. Mictoo расшифровывает уже имеющиеся записи — бесплатно, без регистрации, без бота. На OpenAI Whisper.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function RuOtterAlternativePage() {
  return (
    <ComparisonLayout
      badge="Сравнение · Otter · Бесплатно"
      h1={<>Альтернатива Otter<br /><span className="text-brand-600">Для записей, не live-встреч</span></>}
      subtitle="Otter знаменит расшифровкой в прямом эфире — субтитры появляются по мере речи. Mictoo решает вторую половину задачи: запись, которая у вас уже есть, переводится в текст за несколько секунд. Бесплатно, без регистрации, OpenAI Whisper."
      competitorName="Otter"
      rows={[
        { label: 'Бесплатный тариф',       mictoo: 'Без месячного лимита, 25 МБ на файл', them: '300 минут / мес, 30 мин на запись' },
        { label: 'Нужен аккаунт',          mictoo: 'Нет', them: 'Да (регистрация email)' },
        { label: 'Платные тарифы',         mictoo: 'Бесплатно',  them: '8.33 - 30 $ / пользователь / мес' },
        { label: 'Live-расшифровка',       mictoo: 'Нет',  them: 'Да (субтитры в реальном времени)' },
        { label: 'Загрузка записи',        mictoo: 'Да (drag-n-drop)', them: 'Да (импорт платно)' },
        { label: 'ИИ-резюме',              mictoo: 'Да, бесплатно', them: 'Да (платно)' },
        { label: 'Модель расшифровки',     mictoo: 'OpenAI Whisper', them: 'Собственная' },
        { label: 'Метки спикеров',         mictoo: 'Вручную',   them: 'Автоматически (платно)' },
        { label: 'Языки',                  mictoo: '50+',  them: '3 (английский, французский, испанский)' },
      ]}
      whyMictoo={[
        { icon: '🌍', title: '50+ языков против 3', desc: 'Otter поддерживает только английский, французский и испанский. Mictoo на Whisper — 50+ языков с автоопределением: немецкий, русский, японский, арабский, украинский и многие другие.' },
        { icon: '🆓', title: 'Нет лимита 300 минут', desc: 'Бесплатный план Otter ограничивает 300 минутами в месяц. У Mictoo нет квоты минут — только лимит 25 МБ на файл.' },
        { icon: '🚫', title: 'Никакого бота на встречах', desc: 'Главная ценность Otter — live-бот, который подключается к звонкам. Если предпочитаете записывать локально и не пускать ИИ-бота на встречу, Mictoo лучше подходит.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Есть запись и нужна быстрая бесплатная расшифровка',
          'Работаете с не-английским аудио (русский, немецкий, японский и т.п.)',
          'Не хотите ИИ-бота на своих звонках',
          'Расшифровываете подкасты, лекции, голосовые заметки, не только встречи',
        ],
        them: [
          'Нужны live-субтитры во время встречи',
          'В команде нужны общие заметки по встречам',
          'Критична интеграция Otter Assistant с Zoom/Google Meet',
          'Автоматическое разделение спикеров обязательно (платный тариф)',
        ],
      }}
      faq={[
        { q: 'Может ли Mictoo делать live-расшифровку как Otter?', a: 'Нет. Mictoo работает только с уже записанными файлами. Для расшифровки в реальном времени во время встречи используйте Otter, встроенные субтитры Zoom или Google Meet. Mictoo пригодится потом — для аккуратного транскрипт-файла.' },
        { q: 'Заменяет ли Mictoo Otter для подкастеров?', a: 'Для подкаст-расшифровки — да. Загрузите MP3/M4A, получите расшифровку, скачайте как .txt или .srt. Otter ценен live-захватом; Mictoo — быстрой пост-расшифровкой.' },
        { q: 'А что насчёт резюме встреч?', a: 'Оба инструмента генерируют ИИ-резюме с ключевыми пунктами и action items. Otter — на платных тарифах; Mictoo — бесплатно на каждой расшифровке.' },
        { q: 'Mictoo точен на не-английском аудио?', a: 'Да — OpenAI Whisper одна из самых сильных мультиязычных speech-моделей. Otter ограничен английским, французским и испанским; Mictoo тянет 50+ языков с автоопределением.' },
        { q: 'Есть мобильное приложение?', a: 'Нативного приложения нет, но сайт работает в мобильных браузерах. Откройте mictoo.com на iPhone или Android, выберите файл с устройства, получите расшифровку.' },
      ]}
      relatedLinks={[
        { href: '/ru/fireflies-alternative', label: 'Альтернатива Fireflies' },
        { href: '/ru/meeting-transcription', label: 'Транскрибация встреч' },
        { href: '/ru/voice-memo-to-text', label: 'Голосовая заметка в текст' },
        { href: '/ru', label: 'Попробовать Mictoo' },
      ]}
    />
  )
}
