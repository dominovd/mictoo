import LandingLayout from '@/components/LandingLayout'

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
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: 'Голосовая заметка в текст — Расшифровка Voice Memos iPhone бесплатно | Mictoo',
  description: 'Бесплатная конвертация голосовых заметок iPhone и Android в текст. Поддержка M4A и MP3. Без регистрации, без установки приложений. Точная ИИ-расшифровка.',
  alternates: { canonical: 'https://mictoo.com/ru/voice-memo-to-text', languages: LANGS },
}

export default function RuVoiceMemoPage() {
  return (
    <LandingLayout
      badge="iPhone · Android · Бесплатно"
      h1={<>Голосовая заметка в текст<br /><span className="text-brand-600">Бесплатная онлайн-расшифровка</span></>}
      subtitle="Загрузите голосовую заметку с iPhone или запись с Android и получите точную расшифровку за несколько секунд. Без регистрации и без установки приложений."
      defaultLanguage="ru"
      features={[
        { icon: '📱', title: 'iPhone и Android', desc: 'iPhone Voice Memos экспортируются в .m4a — полная поддержка. Голосовые рекордеры Android выгружают .m4a, .mp3 или .wav — все поддерживаются.' },
        { icon: '🧠', title: 'Отлично для заметок и идей', desc: 'Превратите голосовые заметки, брейншторминги и напоминания в текст, по которому можно искать и вставлять в Notion, Obsidian или ваш любимый редактор.' },
        { icon: '🆓', title: '100% бесплатно', desc: 'Без подписки, без покупок в приложении, без водяных знаков. Без месячного лимита — загружайте заметку, когда нужна расшифровка.' },
      ]}
      faq={[
        { q: 'Как передать голосовую заметку iPhone на компьютер?', a: 'Откройте приложение Voice Memos, нажмите на заметку, затем "…" и "Поделиться" → "Сохранить в Файлы" или AirDrop на Mac. После этого загрузите файл .m4a в Mictoo на компьютере.' },
        { q: 'Можно ли расшифровывать прямо на iPhone?', a: 'Да. Откройте mictoo.com в Safari на iPhone, нажмите область загрузки и выберите голосовую заметку через приложение Файлы. Расшифровка появится за несколько секунд — её можно скопировать или скачать как .txt.' },
        { q: 'В каком формате Android сохраняет голосовые записи?', a: 'Большинство Android-телефонов сохраняют в .m4a или .mp3 (зависит от приложения-диктофона). Оба формата поддерживаются. Некоторые приложения используют .amr — сначала конвертируйте его в .m4a через любой бесплатный конвертер.' },
        { q: 'Моя голосовая запись приватна?', a: 'Да. Файлы передаются ИИ-движку только для расшифровки и не сохраняются на наших серверах. Расшифровка остаётся в вашем браузере и принадлежит только вам.' },
        { q: 'А если голосовая заметка больше 25 МБ?', a: 'iPhone Voice Memos в стандартном качестве занимают ~1 МБ в минуту — то есть 25 минут влезают в 25 МБ. Для более длинных заметок переключите качество Voice Memos на "Сжатое" в Настройки → Голосовые заметки, или разделите запись.' },
      ]}
      relatedLinks={[
        { href: '/ru', label: 'Все форматы' },
        { href: '/ru/meeting-transcription', label: 'Транскрибация встреч' },
        { href: '/ru/interview-transcription', label: 'Транскрибация интервью' },
      ]}
    />
  )
}
