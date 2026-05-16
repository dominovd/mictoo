import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'pt': 'https://mictoo.com/pt/meeting-transcription',
  'pl': 'https://mictoo.com/pl/meeting-transcription',
  'ja': 'https://mictoo.com/ja/meeting-transcription',
  'ko': 'https://mictoo.com/ko/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: 'Расшифровка встреч — бесплатные AI-протоколы | Mictoo',
  description: 'Расшифровывайте встречи, конференц-звонки и сессии Zoom/Teams в текст бесплатно. Без регистрации. Редактируйте в браузере, скачивайте .txt или .srt.',
  alternates: { canonical: 'https://mictoo.com/ru/meeting-transcription', languages: LANGS },
}

export default function RuMeetingPage() {
  return (
    <LandingLayout
      badge="Встречи · Звонки · Бесплатно"
      h1={<>Расшифровка встреч<br /><span className="text-brand-600">Бесплатные AI-протоколы</span></>}
      subtitle="Превратите записи встреч, конференц-звонки и сессии Zoom/Teams в искабельный текст. Без регистрации. Редактируйте в браузере и скачивайте как .txt или .srt."
      defaultLanguage="ru"
      features={[
        { icon: '🏢', title: 'Встречи и звонки', desc: 'Работает с Zoom, Microsoft Teams, Google Meet и любыми локальными записями. MP3, MP4, M4A, WAV, WEBM.' },
        { icon: '🔍', title: 'Искабельные заметки', desc: 'Полная текстовая расшифровка для поиска, расшаривания и превращения в action items, решения и follow-up.' },
        { icon: '🔒', title: 'Конфиденциально', desc: 'Файлы обрабатываются и сразу удаляются. Мы никогда не храним ваше аудио или расшифровку встреч.' },
      ]}
      faq={[
        { q: 'Как расшифровать запись встречи?', a: 'Экспортируйте запись как MP3, MP4, M4A или WAV. Загрузите выше — расшифровка появится за секунды и будет готова к копированию или скачиванию.' },
        { q: 'Работает с Zoom и Microsoft Teams?', a: 'Да. Zoom сохраняет в MP4 (видео) или M4A (только аудио). Teams — в MP4. Оба варианта работают с Mictoo напрямую — просто загрузите файл.' },
        { q: 'Можно получить метки спикеров (Ведущий, Гость 1, Гость 2)?', a: 'Mictoo возвращает полную расшифровку без автоматических меток спикеров в бесплатной версии. Можно добавить метки вручную в редакторе браузера перед скачиванием.' },
        { q: 'Какая точность для встреч?', a: 'Для встреч с одним говорящим за раз и чистой записью точность обычно выше 95%. Несколько одновременных голосов или сильный фоновый шум могут снизить точность.' },
        { q: 'Какая максимальная длительность?', a: 'До 25 МБ на файл (≈25 минут при 128 kbps). Для более длинных встреч экспортируйте с меньшим битрейтом или разделите на сегменты.' },
      ]}
      relatedLinks={[
        { href: '/ru/zoom-transcription', label: 'Расшифровка Zoom' },
        { href: '/ru/business-transcription', label: 'Расшифровка для бизнеса' },
        { href: '/ru/interview-transcription', label: 'Расшифровка интервью' },
        { href: '/ru', label: 'Все форматы' },
      ]}
    />
  )
}
