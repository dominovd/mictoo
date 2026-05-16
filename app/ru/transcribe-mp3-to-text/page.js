import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3 в текст — Бесплатная онлайн-расшифровка MP3 | Mictoo',
  description: 'Бесплатная конвертация MP3 в текст онлайн. Загрузите MP3-файл и получите точную расшифровку за несколько секунд. ИИ. Без регистрации.',
  alternates: { canonical: 'https://mictoo.com/ru/transcribe-mp3-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'MP3 в текст — Mictoo',
  url: 'https://mictoo.com/ru/transcribe-mp3-to-text',
  description: 'Бесплатный онлайн-конвертер MP3 в текст на ИИ.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function RuMP3ToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="Бесплатно · Без регистрации · Мгновенно"
        h1={<>Конвертация MP3 в текст<br /><span className="text-brand-600">Онлайн, бесплатно</span></>}
        subtitle="Загрузите любой MP3-файл и получите точную текстовую расшифровку за несколько секунд. Подходит для интервью, подкастов, лекций, голосовых заметок и многого другого."
        defaultLanguage="ru"
        features={[
          { icon: '🎵', title: 'Любой MP3', desc: 'Работает с голосовыми записями, эпизодами подкастов, музыкальными интервью, лекциями — любой MP3 до 25 МБ.' },
          { icon: '🌍', title: '50+ языков', desc: 'Автоматическое определение языка. MP3 может быть на русском, английском, испанском, французском или ещё 47 языках.' },
          { icon: '📋', title: 'Скопировать или скачать', desc: 'Получите расшифровку как редактируемый текст. Скачайте как .txt или .srt (субтитры).' },
        ]}
        faq={[
          { q: 'Как конвертировать MP3 в текст?', a: 'Загрузите MP3-файл через инструмент выше. Mictoo автоматически расшифрует его с помощью ИИ и покажет текст за несколько секунд.' },
          { q: 'Конвертация MP3 в текст бесплатная?', a: 'Да, полностью бесплатная. Без регистрации. Загружайте и расшифровывайте.' },
          { q: 'Какой максимальный размер MP3?', a: 'До 25 МБ. Для более длинных записей сожмите файл или разбейте на короткие сегменты.' },
          { q: 'Насколько точна расшифровка MP3?', a: 'Mictoo использует ИИ, который обычно даёт 95%+ точности на чистых записях. Качество может снижаться при сильном фоновом шуме или акценте.' },
          { q: 'Можно ли получить субтитры из MP3?', a: 'Да. После расшифровки нажмите кнопку .srt — скачается файл субтитров с таймкодами.' },
        ]}
        relatedLinks={[
          { href: '/ru/transcribe-audio-to-text', label: 'Аудио в текст' },
          { href: '/ru/transcribe-video-to-text', label: 'Видео в текст' },
          { href: '/ru', label: 'Все форматы' },
        ]}
      />
    </>
  )
}
