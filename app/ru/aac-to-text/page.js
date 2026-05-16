import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'pl': 'https://mictoo.com/pl/aac-to-text',
  'ja': 'https://mictoo.com/ja/aac-to-text',
  'ko': 'https://mictoo.com/ko/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC в текст — Бесплатная расшифровка AAC онлайн | Mictoo',
  description: 'Бесплатная расшифровка AAC-аудиофайлов в текст. Перетащите .aac, .m4a или другой AAC-закодированный файл и получите точную расшифровку за несколько секунд.',
  alternates: { canonical: 'https://mictoo.com/ru/aac-to-text', languages: LANGS },
}

export default function RuAacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · M4A · Бесплатно"
      h1={<>AAC в текст<br /><span className="text-brand-600">Бесплатная расшифровка AAC онлайн</span></>}
      subtitle="Загрузите AAC-аудиофайл и получите точную текстовую расшифровку за несколько секунд. Работает с .aac и .m4a (AAC внутри MP4-контейнера). Без регистрации."
      defaultLanguage="ru"
      features={[
        { icon: '🎧', title: 'Нативная поддержка AAC', desc: 'AAC — стандартный аудиокодек устройств Apple, YouTube и большинства стриминг-сервисов. Mictoo принимает .aac и .m4a напрямую, без конвертации.' },
        { icon: '🎯', title: 'Высокая точность', desc: 'AAC сохраняет высокое качество при малом размере — идеально для ИИ-расшифровки. Чистые записи обычно расшифровываются с точностью 95%+.' },
        { icon: '📥', title: 'Редактирование и экспорт', desc: 'Просмотрите расшифровку в браузере, поправьте имена и пунктуацию, затем скачайте как обычный .txt или .srt-субтитры.' },
      ]}
      faq={[
        { q: 'Что такое AAC-файл?', a: 'AAC (Advanced Audio Coding) — формат аудио с потерями, используемый iTunes, Apple Music, YouTube и большинством подкаст-приложений. Расширения файлов: .aac или .m4a. AAC даёт лучше качество, чем MP3 при том же битрейте.' },
        { q: 'В чём разница между .aac и .m4a?', a: 'Оба содержат аудио в кодировке AAC. .aac — это сырой аудиопоток; .m4a оборачивает его в MP4-контейнер (так это сохраняют iTunes и голосовые заметки iPhone). Mictoo поддерживает оба напрямую.' },
        { q: 'Как бесплатно конвертировать AAC в текст?', a: 'Перетащите AAC-файл в зону загрузки выше. Mictoo автоматически расшифрует через ИИ и покажет текст за несколько секунд. Скопируйте или скачайте как .txt.' },
        { q: 'Какой максимальный размер AAC?', a: 'До 25 МБ за раз. AAC на 128 kbps даёт около 25 минут аудио на 25 МБ; на 64 kbps — почти час. Для более длинных файлов снизьте битрейт или разделите на сегменты.' },
        { q: 'Можно ли получить таймкоды для расшифровки AAC?', a: 'Да. После расшифровки скачайте .srt-субтитры с точными таймкодами — пригодится для синхронизации текста с оригинальным аудио или видео.' },
      ]}
      relatedLinks={[
        { href: '/ru/m4a-to-text', label: 'M4A в текст' },
        { href: '/ru/transcribe-mp3-to-text', label: 'MP3 в текст' },
        { href: '/ru', label: 'Все форматы' },
      ]}
    />
  )
}
