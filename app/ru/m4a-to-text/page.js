import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'pt': 'https://mictoo.com/pt/m4a-to-text',
  'pl': 'https://mictoo.com/pl/m4a-to-text',
  'ja': 'https://mictoo.com/ja/m4a-to-text',
  'ko': 'https://mictoo.com/ko/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4A в текст — Бесплатная расшифровка M4A онлайн | Mictoo',
  description: 'Бесплатная конвертация M4A-аудио в текст. Загрузите любой M4A-файл — голосовые заметки iPhone, записи, подкасты — и получите расшифровку мгновенно. Без регистрации.',
  alternates: { canonical: 'https://mictoo.com/ru/m4a-to-text', languages: LANGS },

  openGraph: {
    title: "M4A в текст — Бесплатная расшифровка M4A онлайн | Mictoo",
    description: "Бесплатная конвертация M4A-аудио в текст. Загрузите любой M4A-файл — голосовые заметки iPhone, записи, подкасты — и получите расшифровку мгновенно. Без регистрации.",
    url: "https://mictoo.com/ru/m4a-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "M4A в текст — Бесплатная расшифровка M4A онлайн | Mictoo",
    description: "Бесплатная конвертация M4A-аудио в текст. Загрузите любой M4A-файл — голосовые заметки iPhone, записи, подкасты — и получите расшифровку мгновенно. Без регистрации.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function RuM4AToTextPage() {
  return (
    <LandingLayout
      badge="M4A · iPhone · Бесплатно · Мгновенно"
      h1={<>M4A в текст<br /><span className="text-brand-600">Бесплатная расшифровка M4A онлайн</span></>}
      subtitle="Конвертируйте M4A-аудиофайлы в текст мгновенно. Отлично подходит для голосовых заметок iPhone, записей и подкастов. Без аккаунта."
      defaultLanguage="ru"
      valueBlock={
        <article className="prose-content">
          <p>
            M4A — типичный формат для iPhone Voice Memos, GarageBand,
            FaceTime-аудио, Apple Podcasts и многих web-рекордеров. Обычно
            внутри M4A лежит AAC-аудио в MP4-контейнере, поэтому файл меньше
            WAV, но хорошо сохраняет речь.
          </p>
          <p>
            Конвертировать M4A в MP3 перед расшифровкой не нужно. Mictoo
            читает M4A напрямую, сохраняет таймкоды и возвращает текст,
            который можно отредактировать, скопировать или скачать.
          </p>
          <p className="text-sm text-slate-500">
            Для iPhone Voice Memos обычно достаточно качества “Сжато”.
            Lossless-записи в M4A становятся намного больше, но почти не
            улучшают распознавание речи.
          </p>
        </article>
      }
      howItWorks={[
        { icon: '📱', title: 'Загрузите M4A', desc: 'AirDrop с iPhone, экспорт из Voice Memos, GarageBand, FaceTime-запись или аудио из web-рекордера.' },
        { icon: '⚡', title: 'Мы читаем AAC-дорожку', desc: 'M4A декодируется напрямую, без промежуточной конвертации в MP3 и без потери качества.' },
        { icon: '✍️', title: 'Исправьте и экспортируйте', desc: 'Проверьте имена, термины и пунктуацию, затем скачайте TXT, SRT, VTT или DOCX.' },
      ]}
      whyUse={{
        title: 'Почему M4A удобно расшифровывать напрямую',
        bullets: [
          { title: 'Это родной формат iPhone Voice Memos', desc: 'Большинство голосовых заметок уже сохранены как M4A. Их можно отправить через Share Sheet или AirDrop и сразу загрузить сюда.' },
          { title: 'M4A меньше WAV при той же полезности для речи', desc: 'AAC хорошо сжимает голос. Для чистой диктовки или интервью качество распознавания обычно не хуже, чем у WAV.' },
          { title: 'Поддерживаются родственные варианты', desc: 'M4A, M4B-аудиокниги и MP4-файлы с одной аудиодорожкой обрабатываются похожим способом.' },
          { title: 'Файл не меняется', desc: 'Mictoo читает аудио и создаёт текст, но не перезаписывает исходный M4A и не меняет метаданные.' },
        ],
      }}
      useCases={{
        title: 'Откуда чаще всего берутся M4A',
        items: [
          { title: 'Голосовые заметки iPhone', desc: 'Интервью, идеи, лекции, личные заметки и рабочие voice notes, записанные стандартным приложением.' },
          { title: 'GarageBand и Logic exports', desc: 'Черновики подкастов, демо, voiceover и аудиоэкспорты из Apple-инструментов.' },
          { title: 'FaceTime и звонки', desc: 'Записи удалённых интервью или семейных разговоров через QuickTime или сторонние рекордеры.' },
          { title: 'Аудиокниги и учебные материалы', desc: 'M4B и M4A можно расшифровать для поиска цитат, заметок и учебных конспектов.' },
        ],
      }}
      proTips={{
        title: 'Советы для M4A',
        tips: [
          { title: 'Обрежьте тишину перед экспортом', desc: 'В Voice Memos можно убрать пустое начало и конец. Файл станет меньше, а расшифровка быстрее.' },
          { title: 'Не включайте Lossless без причины', desc: 'ALAC внутри M4A сильно увеличивает размер. Для речи AAC обычно даёт тот же текстовый результат.' },
          { title: 'Для коротких записей задайте язык вручную', desc: 'Если запись меньше пары минут или начинается с паузы, автоопределение языка может ошибиться.' },
        ],
      }}
      faq={[
        { q: 'Как конвертировать M4A в текст?', a: 'Загрузите M4A-файл через инструмент выше. Расшифровка генерируется автоматически и появляется за несколько секунд.' },
        { q: 'Можно ли расшифровать голосовые заметки iPhone?', a: 'Да. Голосовые заметки iPhone сохраняются как M4A. Загружайте файл прямо с iPhone или после переноса на компьютер.' },
        { q: 'M4A в текст бесплатно?', a: 'Да, полностью бесплатно. Без аккаунта, без подписки. Просто загрузите и расшифруйте.' },
        { q: 'Какой максимальный размер M4A?', a: 'До 25 МБ. Большинство голосовых записей и коротких аудиоклипов укладываются с запасом.' },
        { q: 'Какие ещё аудиоформаты поддерживаются?', a: 'Помимо M4A, Mictoo поддерживает MP3, MP4, WAV, OGG, WEBM и FLAC.' },
      ]}
      relatedLinks={[
        { href: '/ru/wav-to-text', label: 'WAV в текст' },
        { href: '/ru/transcribe-mp3-to-text', label: 'MP3 в текст' },
        { href: '/ru', label: 'Все форматы' },
      ]}
    />
  )
}
