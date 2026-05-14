import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Транскрибация аудио и видео в текст онлайн, бесплатно — Mictoo',
  description: 'Превратите аудио или видео в текст за секунды. Без регистрации. На ИИ. Поддерживаются MP3, MP4, WAV и 50+ языков.',
  alternates: {
    canonical: 'https://mictoo.com/ru',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'x-default': 'https://mictoo.com',
    },
  },
  openGraph: {
    title: 'Mictoo — Бесплатная транскрибация аудио и видео',
    description: 'Загрузите аудио или видео — получите расшифровку за несколько секунд.',
    url: 'https://mictoo.com/ru',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — Бесплатная транскрибация аудио и видео' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — Бесплатная транскрибация на ИИ',
    description: 'Загрузите аудио или видео — получите расшифровку за несколько секунд.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RussianPage() {
  return (
    <LandingLayout
      badge="Бесплатно · Без регистрации · 50+ языков"
      h1={<>Транскрибация аудио и видео<br /><span className="text-brand-600">в текст онлайн, бесплатно</span></>}
      subtitle="Загрузите аудио- или видеофайл и получите точную текстовую расшифровку за несколько секунд. Регистрация не нужна."
      defaultLanguage="ru"
      features={[
        {
          icon: '🎙️',
          title: 'Все популярные форматы',
          desc: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. До 25 МБ.',
        },
        {
          icon: '🇷🇺',
          title: 'Русский и 50+ языков',
          desc: 'Автоматическое определение языка. Работает с русским, английским, испанским, французским и многими другими.',
        },
        {
          icon: '📥',
          title: 'Скачайте как .txt или .srt',
          desc: 'Отредактируйте расшифровку в браузере и скачайте как текст или субтитры.',
        },
      ]}
      faq={[
        {
          q: 'Как бесплатно перевести аудио в текст?',
          a: 'Загрузите аудиофайл выше. Mictoo автоматически распознаёт речь с помощью ИИ и показывает текст за несколько секунд.',
        },
        {
          q: 'Хорошо ли работает распознавание русской речи?',
          a: 'Да. Модель ИИ обучена на тысячах часов русскоязычного аудио и обеспечивает высокую точность.',
        },
        {
          q: 'Сохраняются ли мои файлы на сервере?',
          a: 'Нет. Файлы обрабатываются мгновенно и не хранятся на наших серверах.',
        },
      ]}
      relatedLinks={[
        { href: '/', label: 'English' },
        { href: '/fr', label: 'Français' },
        { href: '/de', label: 'Deutsch' },
        { href: '/es', label: 'Español' },
      ]}
    />
  )
}
