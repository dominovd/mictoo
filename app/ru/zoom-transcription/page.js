import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Расшифровка Zoom — бесплатная расшифровка записей Zoom | Mictoo',
  description: 'Бесплатная расшифровка записей встреч Zoom в текст. Работает с MP4 и M4A из Zoom Cloud Recording или Local Recording. Без регистрации.',
  alternates: { canonical: 'https://mictoo.com/ru/zoom-transcription', languages: LANGS },
}

export default function RuZoomPage() {
  return (
    <LandingLayout
      badge="Zoom · MP4 · M4A · Бесплатно"
      h1={<>Расшифровка Zoom<br /><span className="text-brand-600">Записи Zoom в текст</span></>}
      subtitle="Загрузите Zoom-запись в MP4 или M4A и получите точную текстовую расшифровку за секунды. Идеально для встреч, вебинаров и интервью."
      defaultLanguage="ru"
      features={[
        { icon: '🎬', title: 'Все записи Zoom', desc: 'Поддерживаются и Zoom Cloud Recording (MP4), и Local Recording (только аудио M4A). Загружайте напрямую — без конвертации.' },
        { icon: '✏️', title: 'Редактируется в браузере', desc: 'Подчистите расшифровку, добавьте имена спикеров, исправьте имена собственные и скачайте как .txt или .srt для исходного видео.' },
        { icon: '⚡', title: 'Быстро и бесплатно', desc: '25-минутная Zoom-встреча обычно расшифровывается меньше чем за 30 секунд. 100% бесплатно, без аккаунта, без карты.' },
      ]}
      faq={[
        { q: 'Как скачать запись Zoom?', a: 'Для Cloud Recording: откройте веб-портал Zoom → Recordings → нажмите на встречу → Скачать. Для Local Recording: откройте Zoom desktop → Настройки → Запись, файлы лежат в настроенной папке.' },
        { q: 'Чем отличаются MP4 и M4A в Zoom?', a: 'MP4 — полное видео (с аудио), M4A — только аудио. Оба работают с Mictoo. Если нужна только расшифровка — M4A меньше и загружается быстрее.' },
        { q: 'Можно получить .srt-субтитры для Zoom-видео?', a: 'Да. После расшифровки Mictoo показывает кнопку .srt. Файл содержит синхронизированные таймкоды, его можно загрузить в Zoom, YouTube Studio, Premiere Pro или DaVinci Resolve.' },
        { q: 'Какой максимальный размер записи?', a: 'До 25 МБ на файл. Большинство 25-минутных MP4 Zoom превышают лимит — извлекайте аудиодорожку как M4A или сжимайте видео. Для 30–60 минут M4A при 64 kbps обычно укладывается.' },
        { q: 'Точность с несколькими спикерами?', a: 'Высокая, если спикеры говорят по очереди и не перебивают друг друга. Mictoo создаёт единую расшифровку без меток — добавьте Ведущий/Гость вручную в редакторе.' },
      ]}
      relatedLinks={[
        { href: '/ru/meeting-transcription', label: 'Расшифровка встреч' },
        { href: '/transcribe-mp3-to-text', label: 'MP3 в текст' },
        { href: '/transcribe-video-to-text', label: 'Видео в текст' },
        { href: '/ru', label: 'Все форматы' },
      ]}
    />
  )
}
