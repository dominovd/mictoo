import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4A в текст — Бесплатная расшифровка M4A онлайн | Mictoo',
  description: 'Бесплатная конвертация M4A-аудио в текст. Загрузите любой M4A-файл — голосовые заметки iPhone, записи, подкасты — и получите расшифровку мгновенно. Без регистрации.',
  alternates: { canonical: 'https://mictoo.com/ru/m4a-to-text', languages: LANGS },
}

export default function RuM4AToTextPage() {
  return (
    <LandingLayout
      badge="M4A · iPhone · Бесплатно · Мгновенно"
      h1={<>M4A в текст<br /><span className="text-brand-600">Бесплатная расшифровка M4A онлайн</span></>}
      subtitle="Конвертируйте M4A-аудиофайлы в текст мгновенно. Отлично подходит для голосовых заметок iPhone, записей и подкастов. Без аккаунта."
      defaultLanguage="ru"
      features={[
        { icon: '📱', title: 'Голосовые заметки iPhone', desc: 'M4A — формат по умолчанию для голосовых заметок и записей iPhone. Загружайте напрямую — расшифровка за несколько секунд.' },
        { icon: '🎵', title: 'Любой M4A', desc: 'M4A-файлы из любого источника — iPhone, Mac, цифровые рекордеры, подкаст-приложения — полностью поддерживаются.' },
        { icon: '📄', title: 'Экспорт в текст или SRT', desc: 'Скачайте расшифровку как обычный .txt или .srt-субтитры с таймкодами.' },
      ]}
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
