import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'ja': 'https://mictoo.com/ja/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'Расшифровка с таймкодами — бесплатный генератор | Mictoo',
  description: 'Бесплатные расшифровки с таймкодами. Загрузите аудио или видео и скачайте файл SRT с точными timecode. Без регистрации.',
  alternates: { canonical: 'https://mictoo.com/ru/timestamped-transcription', languages: LANGS },
}

export default function RuTimestampedPage() {
  return (
    <LandingLayout
      badge="Таймкоды · SRT · Бесплатно"
      h1={<>Расшифровка с таймкодами<br /><span className="text-brand-600">Бесплатный генератор с timecode</span></>}
      subtitle="Загрузите любой аудио- или видеофайл и получите расшифровку с точными таймкодами. Скачайте как SRT — готово для YouTube, видеоредакторов и инструментов субтитрования. Без регистрации."
      defaultLanguage="ru"
      features={[
        { icon: '⏱️', title: 'Автоматические таймкоды', desc: 'Каждый сегмент получает точный таймкод начала и конца — автоматически генерируется из вашего аудио.' },
        { icon: '📄', title: 'Скачивание в .srt', desc: 'Экспортируйте расшифровку с таймкодами как файл субтитров SRT. Загружайте напрямую в YouTube, Premiere, DaVinci или любой инструмент субтитрования.' },
        { icon: '✏️', title: 'Редактируемый текст', desc: 'Просмотрите и отредактируйте обычный текст расшифровки в браузере перед скачиванием. Без аккаунта.' },
      ]}
      faq={[
        { q: 'Что такое расшифровка с таймкодами?', a: 'Расшифровка с таймкодами (или time-coded transcript) — это текстовая версия аудио или видео, в которой каждая строка включает точное время произнесения — например, «00:01:23 → Здравствуйте, добро пожаловать в выпуск». Это позволяет синхронизировать текст с оригинальным медиа.' },
        { q: 'Как бесплатно создать расшифровку с таймкодами?', a: 'Загрузите ваш аудио- или видеофайл с помощью инструмента выше. Mictoo автоматически создаёт расшифровку с таймкодами и позволяет скачать её как SRT или текст с таймкодами.' },
        { q: 'Что такое файл SRT?', a: 'SRT (SubRip Subtitle) — это стандартный формат файла субтитров, содержащий текстовые сегменты с таймкодами. SRT поддерживается YouTube, Netflix, Premiere Pro, Final Cut, DaVinci Resolve и большинством видеоплатформ и редакторов.' },
        { q: 'Можно ли использовать SRT для субтитров YouTube?', a: 'Да. После скачивания .srt откройте YouTube Studio → Субтитры → Добавить язык → Загрузить файл. Ваши субтитры с таймкодами синхронизируются с видео автоматически.' },
        { q: 'Насколько точны таймкоды?', a: 'Таймкоды создаются на уровне сегментов (обычно каждые 5–15 секунд). Точность высокая для чистого аудио. Перекрывающиеся голоса или шум фона могут влиять на точность.' },
        { q: 'Чем отличается обычная расшифровка от расшифровки с таймкодами?', a: 'Обычная расшифровка — только текст. Расшифровка с таймкодами добавляет временные метки, чтобы каждый фрагмент можно было соотнести с конкретным моментом записи — необходимо для субтитров и монтажа.' },
        { q: 'Какие форматы поддерживаются?', a: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Любой аудио- или видеофайл до 25 МБ.' },
      ]}
      relatedLinks={[
        { href: '/ru/free-srt-generator', label: 'Генератор SRT' },
        { href: '/transcribe-video-to-text', label: 'Видео в текст' },
        { href: '/transcribe-audio-to-text', label: 'Аудио в текст' },
        { href: '/ru', label: 'Все форматы' },
      ]}
    />
  )
}
