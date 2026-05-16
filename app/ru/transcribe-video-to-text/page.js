import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: 'Видео в текст — Бесплатная онлайн-расшифровка видео | Mictoo',
  description: 'Бесплатная конвертация видео в текст онлайн. Загрузите MP4, WEBM или MOV и получите точную расшифровку мгновенно. ИИ. Без аккаунта.',
  alternates: { canonical: 'https://mictoo.com/ru/transcribe-video-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Видео в текст — Mictoo',
  url: 'https://mictoo.com/ru/transcribe-video-to-text',
  description: 'Бесплатный онлайн-конвертер видео в текст. Расшифровывает MP4, WEBM и другие форматы.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function RuVideoToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP4 · WEBM · Бесплатно · Мгновенно"
        h1={<>Видео в текст онлайн<br /><span className="text-brand-600">Бесплатная расшифровка</span></>}
        subtitle="Загрузите любой видеофайл — выгрузки с YouTube, скринкасты, интервью, лекции — и получите сказанное текстом за несколько секунд."
        defaultLanguage="ru"
        features={[
          { icon: '🎬', title: 'MP4, WEBM и другие', desc: 'Поддержка MP4, WEBM, MPEG и других видеоформатов. Аудио извлекается автоматически.' },
          { icon: '🎞️', title: 'SRT-субтитры', desc: 'Скачайте .srt-файл с таймкодами — готов для загрузки в YouTube или любой видеоредактор.' },
          { icon: '⚡', title: 'Мгновенные результаты', desc: '10-минутное видео обычно расшифровывается менее чем за 30 секунд. Без очереди, без ожидания.' },
        ]}
        faq={[
          { q: 'Как бесплатно расшифровать видео?', a: 'Загрузите видеофайл через инструмент выше. Mictoo извлечёт аудио и расшифрует его через ИИ. Текст появится за несколько секунд.' },
          { q: 'Можно ли получить субтитры из видео?', a: 'Да. После расшифровки нажмите кнопку скачивания .srt — получите файл субтитров с таймкодами для загрузки в YouTube, Premiere или любой редактор.' },
          { q: 'Какие форматы видео поддерживаются?', a: 'MP4, WEBM, MPEG. Также поддерживаются аудиофайлы (MP3, WAV, M4A, OGG, FLAC).' },
          { q: 'Работает ли с YouTube-видео?', a: 'Да — сначала скачайте видео с YouTube (через YouTube-загрузчик), потом загрузите файл сюда для расшифровки.' },
          { q: 'Есть ли ограничение по размеру?', a: 'До 25 МБ. Для длинных видео сначала извлеките аудиодорожку (например, через ffmpeg или онлайн-конвертер), чтобы уменьшить размер.' },
        ]}
        relatedLinks={[
          { href: '/ru/transcribe-mp3-to-text', label: 'MP3 в текст' },
          { href: '/ru/transcribe-audio-to-text', label: 'Аудио в текст' },
          { href: '/ru', label: 'Все форматы' },
        ]}
      />
    </>
  )
}
