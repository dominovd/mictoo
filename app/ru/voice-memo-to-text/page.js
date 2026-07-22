import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/voice-memo-to-text',
  'fr': 'https://mictoo.com/fr/voice-memo-to-text',
  'de': 'https://mictoo.com/de/voice-memo-to-text',
  'es': 'https://mictoo.com/es/voice-memo-to-text',
  'ru': 'https://mictoo.com/ru/voice-memo-to-text',
  'it': 'https://mictoo.com/it/voice-memo-to-text',
  'pt': 'https://mictoo.com/pt/voice-memo-to-text',
  'pl': 'https://mictoo.com/pl/voice-memo-to-text',
  'ja': 'https://mictoo.com/ja/voice-memo-to-text',
  'ko': 'https://mictoo.com/ko/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: 'Преобразование голосовых заметок в текст для iPhone и Android | Mictoo',
  description:
    'Загрузите голосовую запись с iPhone или Android и получите текст с отметками времени, AI-резюме и редактируемые экспорты.',
  alternates: {
    canonical: 'https://mictoo.com/ru/voice-memo-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'Преобразование голосовых заметок в текст: бесплатно | Mictoo',
    description: 'Загрузите свою голосовую запись с iPhone или Android, получите чистый текст.',
    url: 'https://mictoo.com/ru/voice-memo-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Преобразование голосовых заметок в текст',
    description: 'Бесплатная транскрипция голосовых записей с телефона.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RuVoiceMemoToTextPage() {
  return (
    <UseCaseLayout
      locale="ru"
      badge="iPhone · Android · Бесплатно"
      h1First="Преобразование голосовых заметок в текст"
      h1Second="Бесплатная транскрипция голосовых записей с телефона"
      subtitle="Загрузите свою голосовую заметку с iPhone, голосовую запись с Android, голосовое сообщение WhatsApp или Telegram. Получите чистый транскрипт за считанные секунды. Без регистрации, без платы за минуту."
      currentHref="/ru/voice-memo-to-text"

      platforms={[
        { name: 'iPhone',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: 'Samsung',      iconKey: 'mic',       brandBg: '#1428A0' },
        { name: 'WhatsApp',     iconKey: 'phone',     brandBg: '#25D366' },
        { name: 'Telegram',     iconKey: 'phone',     brandBg: '#0088CC' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
      ]}

      howItWorksTitle="Как работает транскрипция голосовых заметок"
      steps={[
        {
          icon: 'folder',
          title: 'Поделитесь записью',
          desc: 'iPhone: используйте меню общего доступа из Voice Memos. Android: файл из приложения Files. WhatsApp: переслать как файл.',
        },
        {
          icon: 'upload',
          title: 'Загрузите файл сюда',
          desc: 'M4A (iPhone), MP3 (Android), OPUS/OGG (WhatsApp, Telegram) все работают напрямую.',
        },
        {
          icon: 'editPen',
          title: 'Транскрипция за секунды',
          desc: '5-минутная заметка завершается примерно за 10 секунд. AI-резюме превращает бессвязные идеи в четкий список действий.',
        },
      ]}

      exampleTitle="Пример транскрипта голосовой заметки"
      exampleFileName="voice-memo.m4a"
      exampleDurationLabel="3:22"
      exampleLines={[
        { t: '0:00',  line: 'Хорошо, быстрая голосовая заметка, прежде чем я забуду всю идею.' },
        { t: '0:04',  line: 'Итак, идея в том, что мы разделяем процесс оформления заказа на два четких шага вместо одной длинной формы.' },
        { t: '0:13',  line: 'Шаг первый, просто email и карта. Шаг второй, детали доставки после того, как они увидят номер подтверждения.' },
        { t: '0:22',  line: 'Причина, по которой это важно, заключается в том, что отток на текущей одностраничной форме составляет около тридцати восьми процентов.' },
        { t: '0:32',  line: 'Большая часть этого оттока происходит на секции доставки, а не на вводе карты, что противоречит интуиции.' },
        { t: '0:42',  line: 'Если мы перенесем доставку на этап после покупки, мы, вероятно, сможем вернуть двенадцать-пятнадцать процентов этого трафика.' },
        { t: '0:52',  line: 'По времени, я думаю, это две недели фронтенда, одна неделя бэкенда, может быть, неделя тестирования.' },
      ]}
      summaryPoints={[
        'Идея: разделить процесс оформления заказа на два шага.',
        'Шаг 1: email + карта. Шаг 2: доставка после подтверждения.',
        'Текущий отток: 38%, в основном на секции доставки.',
        'Ожидаемое восстановление: 12-15% трафика.',
      ]}
      actionItems={[
        'Создать макет двухступенчатого оформления заказа',
        'Проверить 38% оттока в аналитике',
        'Определить объем работ для инженеров (~4 недели всего)',
      ]}

      whyTitle="Почему Mictoo для голосовых заметок"
      whyCards={[
        {
          icon: 'sparkles',
          title: 'AI-резюме для бессвязных заметок',
          desc: 'Голосовые заметки по своей природе беспорядочны. Резюме превращает пятиминутный поток мыслей в двухстрочное резюме.',
        },
        {
          icon: 'mic',
          title: 'iPhone .m4a нативный',
          desc: 'Apple Voice Memos записывает .m4a (AAC в MP4). Мы принимаем это напрямую, без конвертации.',
        },
        {
          icon: 'chat',
          title: 'Telegram .oga нативный',
          desc: 'Сохраните голосовое сообщение Telegram из чата и загрузите файл .oga. Opus в OGG, обрабатывается нативно.',
        },
        {
          icon: 'globe',
          title: 'Перевод для заметок на разных языках',
          desc: 'Заметка на вашем родном языке, английские заметки для команды. Один клик.',
        },
      ]}

      scenariosTitle="Распространенные сценарии голосовых заметок"
      scenarios={[
        { icon: 'sparkles', title: 'Запись идеи' },
        { icon: 'chat',     title: 'Записи встреч' },
        { icon: 'editPen',  title: 'Написание черновиков' },
        { icon: 'book',     title: 'Ведение дневника' },
        { icon: 'phone',    title: 'Голосовое сообщение' },
        { icon: 'globe',    title: 'Многоязычность' },
      ]}

      tipsTitle="Советы для более чистых голосовых заметок"
      tips={[
        'Держите телефон близко, чтобы уменьшить шум в комнате.',
        'Для длинных заметок более 60 MB, войдите в систему для автоматического разделения.',
        'Говорите на одном языке в каждой заметке для самой чистой детекции.',
        'Скажите "новый абзац", если хотите, чтобы транскрипция прерывалась там.',
      ]}

      guidesTitle="Связанные инструменты"
      guides={[
        { href: '/ru/m4a-to-text',        icon: 'file',  title: 'Формат M4A',       desc: 'Глубокое погружение в iPhone / GarageBand' },
        { href: '/ru/ogg-to-text',        icon: 'file',  title: 'OGG / .oga',       desc: 'Глубокое погружение в голос Telegram' },
        { href: '/ru/dictation-to-text',  icon: 'editPen', title: 'Диктовка',      desc: 'Рабочий процесс написания с голосом' },
        { href: '/ru/interview-transcription', icon: 'chat', title: 'Интервью',    desc: 'Телефонное или личное интервью' },
      ]}

      faq={[
        {
          q: 'Могу ли я транскрибировать голосовые заметки iPhone напрямую?',
          a: 'Да. Поделитесь заметкой из приложения Voice Memos (меню общего доступа → сохранить в Files или отправить себе) и загрузите .m4a в Mictoo. Конвертация не требуется.',
        },
        {
          q: 'Транскрибирует ли Mictoo голосовые сообщения WhatsApp или Telegram?',
          a: 'Да. Сохраните голосовое сообщение из чата (переслать → сохранить как файл) и загрузите его. Голосовые заметки WhatsApp ,  это .opus, голосовые заметки Telegram ,  это .oga (оба являются контейнерами OGG). Оба работают напрямую.',
        },
        {
          q: 'Каков лимит размера файла?',
          a: '25 MB анонимно, 60 MB при входе в систему. 60-минутная голосовая заметка при типичном битрейте составляет около 20-30 MB, так что большинство вписывается в бесплатный лимит.',
        },
        {
          q: 'Транскрибирует ли Mictoo неанглийские голосовые заметки?',
          a: 'Да. Whisper large-v3 поддерживает более 50 языков. Для коротких заметок или контента на других языках установите язык явно для более чистой первичной детекции.',
        },
        {
          q: 'Могу ли я получить резюме бессвязной мозговой атаки?',
          a: 'Да. AI-резюме появляется автоматически рядом с транскрипцией. Отлично подходит для превращения потоков сознания в четкие списки действий.',
        },
        {
          q: 'Хранятся ли голосовые заметки на ваших серверах?',
          a: 'Нет. Аудио передается поставщику транскрипции, обрабатывается один раз и удаляется. Только транскрипция сохраняется, если вы входите в систему и сохраняете ее.',
        },
        {
          q: 'Могу ли я перевести свою голосовую заметку на другой язык?',
          a: 'Да. Выберите целевой язык и нажмите Перевести после транскрипции. GPT-4o-mini обрабатывает перевод, и он появляется рядом с оригиналом.',
        },
      ]}

      ctaHeadline="Преобразуйте голосовые заметки в текст и действия"
      ctaSubtitle="Голосовые заметки с iPhone, Android, WhatsApp, Telegram. Все форматы, одна загрузка."
      ctaButton="Загрузить голосовую заметку"

      relatedLinks={[
        { href: '/ru/dictation-to-text',       label: 'Диктовка в текст' },
        { href: '/ru/interview-transcription', label: 'Транскрипция интервью' },
        { href: '/ru/m4a-to-text',             label: 'M4A в текст' },
        { href: '/ru/ogg-to-text',             label: 'OGG в текст' },
        { href: '/ru/meeting-transcription',   label: 'Транскрипция встречи' },
      ]}
    />
  )
}