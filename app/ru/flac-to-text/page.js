import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-text',
  'fr': 'https://mictoo.com/fr/flac-to-text',
  'de': 'https://mictoo.com/de/flac-to-text',
  'es': 'https://mictoo.com/es/flac-to-text',
  'ru': 'https://mictoo.com/ru/flac-to-text',
  'it': 'https://mictoo.com/it/flac-to-text',
  'pt': 'https://mictoo.com/pt/flac-to-text',
  'pl': 'https://mictoo.com/pl/flac-to-text',
  'ja': 'https://mictoo.com/ja/flac-to-text',
  'ko': 'https://mictoo.com/ko/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC в текст — Бесплатная расшифровка FLAC онлайн | Mictoo',
  description: 'Бесплатная конвертация FLAC-аудио в текст онлайн. Загрузите любую FLAC-запись и получите точную расшифровку за несколько секунд. Без регистрации.',
  alternates: { canonical: 'https://mictoo.com/ru/flac-to-text', languages: LANGS },
}

export default function RuFlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · Без потерь · Бесплатно"
      h1={<>FLAC в текст<br /><span className="text-brand-600">Бесплатная расшифровка FLAC онлайн</span></>}
      subtitle="Загрузите любой FLAC-аудиофайл и конвертируйте в текст мгновенно. Качество без потерь у FLAC обеспечивает отличную точность расшифровки. Без аккаунта."
      defaultLanguage="ru"
      features={[
        { icon: '🎵', title: 'Качество без потерь', desc: 'FLAC-файлы сохраняют полное качество аудио, что помогает ИИ-расшифровке достигать максимальной точности.' },
        { icon: '⚡', title: 'Мгновенные результаты', desc: 'Большинство FLAC-файлов расшифровываются менее чем за 30 секунд независимо от качества и битности.' },
        { icon: '📄', title: 'Экспорт .txt и .srt', desc: 'Скачайте расшифровку как обычный текст или SRT-субтитры с таймкодами.' },
      ]}
      faq={[
        { q: 'Как конвертировать FLAC-файл в текст?', a: 'Загрузите FLAC-файл выше. ИИ расшифрует его и покажет текст за несколько секунд.' },
        { q: 'FLAC расшифровывается точнее, чем MP3?', a: 'Качество без потерь у FLAC может слегка улучшить точность на тихих или сложных записях по сравнению с сильно сжатыми форматами.' },
        { q: 'Конвертация FLAC в текст бесплатная?', a: 'Да, полностью бесплатная. Без аккаунта и регистрации.' },
        { q: 'Какой максимальный размер FLAC?', a: 'До 25 МБ. FLAC-файлы большие из-за компрессии без потерь — если файл превышает лимит, конвертируйте в формат с потерями.' },
      ]}
      relatedLinks={[
        { href: '/ru/wav-to-text', label: 'WAV в текст' },
        { href: '/ru/transcribe-mp3-to-text', label: 'MP3 в текст' },
        { href: '/ru', label: 'Все форматы' },
      ]}
    />
  )
}
