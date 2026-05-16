import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/ogg-to-text',
  'fr': 'https://mictoo.com/fr/ogg-to-text',
  'de': 'https://mictoo.com/de/ogg-to-text',
  'es': 'https://mictoo.com/es/ogg-to-text',
  'ru': 'https://mictoo.com/ru/ogg-to-text',
  'it': 'https://mictoo.com/it/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGG в текст — Бесплатная расшифровка OGG онлайн | Mictoo',
  description: 'Бесплатная конвертация OGG-аудио в текст онлайн. Загрузите любую OGG Vorbis запись и получите точную расшифровку мгновенно. Без регистрации.',
  alternates: { canonical: 'https://mictoo.com/ru/ogg-to-text', languages: LANGS },
}

export default function RuOggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · Бесплатно · Мгновенно"
      h1={<>OGG в текст<br /><span className="text-brand-600">Бесплатная расшифровка OGG онлайн</span></>}
      subtitle="Загрузите любой OGG-аудиофайл и конвертируйте в текст за несколько секунд. Поддержка OGG Vorbis и OGG Opus. Без аккаунта."
      defaultLanguage="ru"
      features={[
        { icon: '🎙️', title: 'OGG Vorbis и Opus', desc: 'Поддержка OGG-файлов из любых источников — диктофоны, веб-браузеры, мессенджеры.' },
        { icon: '🌍', title: '50+ языков', desc: 'Язык определяется автоматически. Работает с русским, английским, испанским, французским и другими.' },
        { icon: '📄', title: 'Экспорт .txt и .srt', desc: 'Скачайте как обычный текст или SRT-субтитры с таймкодами.' },
      ]}
      faq={[
        { q: 'Как конвертировать OGG в текст?', a: 'Загрузите OGG-файл выше. Расшифровка генерируется автоматически за несколько секунд.' },
        { q: 'Конвертация OGG в текст бесплатная?', a: 'Да, полностью бесплатная. Без регистрации и аккаунта.' },
        { q: 'Какой максимальный размер OGG?', a: 'До 25 МБ.' },
        { q: 'Какие ещё аудиоформаты поддерживаются?', a: 'Также поддерживаются MP3, MP4, WAV, M4A, FLAC, WEBM.' },
      ]}
      relatedLinks={[
        { href: '/ru/wav-to-text', label: 'WAV в текст' },
        { href: '/ru/flac-to-text', label: 'FLAC в текст' },
        { href: '/ru', label: 'Все форматы' },
      ]}
    />
  )
}
