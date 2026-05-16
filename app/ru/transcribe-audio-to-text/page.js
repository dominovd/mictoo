import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-audio-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
  'de': 'https://mictoo.com/de/transcribe-audio-to-text',
  'es': 'https://mictoo.com/es/transcribe-audio-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
  'it': 'https://mictoo.com/it/transcribe-audio-to-text',
  'x-default': 'https://mictoo.com/transcribe-audio-to-text',
}

export const metadata = {
  title: 'Аудио в текст — Бесплатная онлайн-расшифровка аудио | Mictoo',
  description: 'Бесплатная расшифровка аудио в текст онлайн. Загрузите любой аудиофайл и получите точную расшифровку мгновенно. 50+ языков. На ИИ.',
  alternates: { canonical: 'https://mictoo.com/ru/transcribe-audio-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Аудио в текст — Mictoo',
  url: 'https://mictoo.com/ru/transcribe-audio-to-text',
  description: 'Бесплатный онлайн-конвертер аудио в текст. Поддержка MP3, WAV, M4A, OGG, FLAC и других.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function RuAudioToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP3 · WAV · M4A · FLAC · Бесплатно"
        h1={<>Аудио в текст<br /><span className="text-brand-600">Бесплатная ИИ-расшифровка</span></>}
        subtitle="Самый быстрый способ превратить любую аудиозапись в текст. Загрузите файл — без аккаунта, без подписки, без ожидания."
        defaultLanguage="ru"
        features={[
          { icon: '🎙️', title: 'Все аудиоформаты', desc: 'MP3, WAV, M4A, OGG, FLAC, WEBM — любой аудиофайл до 25 МБ.' },
          { icon: '🧠', title: 'Точность на ИИ', desc: 'Наш ИИ обучен на сотнях тысяч часов многоязычного аудио — обеспечивает индустриальную точность.' },
          { icon: '🔒', title: 'Приватно и безопасно', desc: 'Ваше аудио никогда не сохраняется. Файлы обрабатываются один раз и сразу удаляются.' },
        ]}
        faq={[
          { q: 'Какой самый лучший бесплатный конвертер аудио в текст?', a: 'Mictoo использует ИИ — одну из самых точных бесплатных моделей распознавания речи. Поддерживает 50+ языков и не требует регистрации.' },
          { q: 'Насколько точна расшифровка аудио?', a: 'Наш ИИ даёт 95%+ точности на чистых записях. Фоновый шум или сильный акцент могут немного снизить точность.' },
          { q: 'Какие аудиоформаты поддерживаются?', a: 'MP3, WAV, M4A, OGG, FLAC, WEBM, MPEG. Видеофайлы (MP4) тоже принимаются.' },
          { q: 'Сколько занимает расшифровка аудио?', a: 'Запись 10 минут обычно расшифровывается за 15-30 секунд. Без очереди — файл обрабатывается сразу.' },
          { q: 'Можно ли расшифровать запись телефонного звонка?', a: 'Да. Записи звонков в MP3, WAV или M4A работают хорошо. Аудио с несколькими спикерами расшифровывается как один блок текста (метки спикеров — про-инструменты).' },
          { q: 'Нужно ли выбирать язык?', a: 'Нет — язык определяется автоматически. Если определение работает плохо, можно выбрать язык вручную через выпадающее меню.' },
        ]}
        relatedLinks={[
          { href: '/ru/transcribe-mp3-to-text', label: 'MP3 в текст' },
          { href: '/ru/transcribe-video-to-text', label: 'Видео в текст' },
          { href: '/ru', label: 'Все форматы' },
        ]}
      />
    </>
  )
}
