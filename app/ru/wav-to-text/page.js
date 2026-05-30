import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-text',
  'fr': 'https://mictoo.com/fr/wav-to-text',
  'de': 'https://mictoo.com/de/wav-to-text',
  'es': 'https://mictoo.com/es/wav-to-text',
  'ru': 'https://mictoo.com/ru/wav-to-text',
  'it': 'https://mictoo.com/it/wav-to-text',
  'pt': 'https://mictoo.com/pt/wav-to-text',
  'pl': 'https://mictoo.com/pl/wav-to-text',
  'ja': 'https://mictoo.com/ja/wav-to-text',
  'ko': 'https://mictoo.com/ko/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export const metadata = {
  title: 'WAV в текст — Бесплатная онлайн-расшифровка WAV | Mictoo',
  description: 'Бесплатная конвертация WAV-файлов в текст онлайн. Загрузите любой WAV-аудиофайл и получите точную расшифровку за несколько секунд. Без регистрации.',
  alternates: { canonical: 'https://mictoo.com/ru/wav-to-text', languages: LANGS },

  openGraph: {
    title: "WAV в текст — Бесплатная онлайн-расшифровка WAV | Mictoo",
    description: "Бесплатная конвертация WAV-файлов в текст онлайн. Загрузите любой WAV-аудиофайл и получите точную расшифровку за несколько секунд. Без регистрации.",
    url: "https://mictoo.com/ru/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV в текст — Бесплатная онлайн-расшифровка WAV | Mictoo",
    description: "Бесплатная конвертация WAV-файлов в текст онлайн. Загрузите любой WAV-аудиофайл и получите точную расшифровку за несколько секунд. Без регистрации.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function RuWavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · Бесплатно · Мгновенно"
      h1={<>WAV в текст<br /><span className="text-brand-600">Бесплатная расшифровка WAV онлайн</span></>}
      subtitle="Загрузите любой WAV-аудиофайл и получите точную текстовую расшифровку за несколько секунд. Подходит для всех WAV-записей — интервью, звонков, лекций, голосовых заметок. Без аккаунта."
      defaultLanguage="ru"
      features={[
        { icon: '🎙️', title: 'Любой WAV', desc: 'Стандартный WAV, PCM, broadcast WAV — любой формат WAV до 25 МБ принимается.' },
        { icon: '⏱️', title: 'С таймкодами', desc: 'Скачайте расшифровку как .txt или .srt-субтитры с таймкодами.' },
        { icon: '🌍', title: '50+ языков', desc: 'Язык определяется автоматически. Работает с русским, английским, испанским, французским, немецким и многими другими.' },
      ]}
      faq={[
        { q: 'Как конвертировать WAV-файл в текст?', a: 'Загрузите WAV-файл через инструмент выше. Mictoo автоматически расшифрует его через ИИ и покажет текст за несколько секунд.' },
        { q: 'Конвертация WAV в текст бесплатная?', a: 'Да, полностью бесплатная. Без аккаунта. Загружайте WAV-файлы — без месячных квот, без регистрации.' },
        { q: 'Какой максимальный размер WAV-файла?', a: 'До 25 МБ. Для более крупных записей сначала конвертируйте в MP3 или разбейте на короткие сегменты.' },
        { q: 'Можно ли получить расшифровку с таймкодами из WAV?', a: 'Да. После расшифровки нажмите кнопку .srt — скачается файл субтитров с точными таймкодами для каждого сегмента.' },
        { q: 'Какие ещё аудиоформаты поддерживаются?', a: 'Mictoo также поддерживает MP3, MP4, M4A, OGG, WEBM и FLAC помимо WAV.' },
      ]}
      relatedLinks={[
        { href: '/ru/transcribe-mp3-to-text', label: 'MP3 в текст' },
        { href: '/ru/transcribe-audio-to-text', label: 'Аудио в текст' },
        { href: '/ru', label: 'Все форматы' },
      ]}
    />
  )
}
