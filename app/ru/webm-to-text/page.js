import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-text',
  'fr': 'https://mictoo.com/fr/webm-to-text',
  'de': 'https://mictoo.com/de/webm-to-text',
  'es': 'https://mictoo.com/es/webm-to-text',
  'ru': 'https://mictoo.com/ru/webm-to-text',
  'it': 'https://mictoo.com/it/webm-to-text',
  'pt': 'https://mictoo.com/pt/webm-to-text',
  'x-default': 'https://mictoo.com/webm-to-text',
}

export const metadata = {
  title: 'WEBM в текст — Бесплатная расшифровка WEBM онлайн | Mictoo',
  description: 'Бесплатная конвертация WEBM-аудио и видео в текст онлайн. Загрузите любую WEBM-запись и получите точную расшифровку мгновенно. Без регистрации.',
  alternates: { canonical: 'https://mictoo.com/ru/webm-to-text', languages: LANGS },
}

export default function RuWebmToTextPage() {
  return (
    <LandingLayout
      badge="WEBM · Записи в браузере · Бесплатно"
      h1={<>WEBM в текст<br /><span className="text-brand-600">Бесплатная расшифровка WEBM онлайн</span></>}
      subtitle="Загрузите любой WEBM-аудио или видеофайл и получите точную расшифровку за несколько секунд. WEBM часто используют браузеры, рекордеры экрана и видеозвонки. Без аккаунта."
      defaultLanguage="ru"
      features={[
        { icon: '🖥️', title: 'Браузер и экран', desc: 'WEBM — формат по умолчанию для скринкастов Chrome и Firefox, клипов Loom и WebRTC-записей.' },
        { icon: '🎬', title: 'Аудио и видео WEBM', desc: 'Поддержка как только-аудио WEBM, так и видео WEBM. Аудио извлекается автоматически.' },
        { icon: '📄', title: 'Экспорт .txt и .srt', desc: 'Скачайте расшифровку как обычный текст или SRT-субтитры с таймкодами.' },
      ]}
      faq={[
        { q: 'Как конвертировать WEBM в текст?', a: 'Загрузите WEBM-файл выше. Расшифровка генерируется автоматически и появляется за несколько секунд.' },
        { q: 'Конвертация WEBM в текст бесплатная?', a: 'Да, полностью бесплатная. Без аккаунта и регистрации.' },
        { q: 'Можно ли расшифровать запись экрана Chrome?', a: 'Да. Встроенный рекордер Chrome сохраняет видео в WEBM. Загружайте файл напрямую для расшифровки.' },
        { q: 'Какой максимальный размер WEBM?', a: 'До 25 МБ. Для более крупных записей сначала извлеките аудиодорожку, чтобы уменьшить размер.' },
      ]}
      relatedLinks={[
        { href: '/ru/transcribe-video-to-text', label: 'Видео в текст' },
        { href: '/ru/wav-to-text', label: 'WAV в текст' },
        { href: '/ru', label: 'Все форматы' },
      ]}
    />
  )
}
