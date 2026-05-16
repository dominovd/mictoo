import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: 'Расшифровка для бизнеса — встречи, звонки, интервью | Mictoo',
  description: 'Бесплатная расшифровка встреч, звонков продаж, интервью и конференций. Быстро, точно, без регистрации. Скачайте как .txt или .srt.',
  alternates: { canonical: 'https://mictoo.com/ru/business-transcription', languages: LANGS },
}

export default function RuBusinessPage() {
  return (
    <LandingLayout
      badge="Встречи · Звонки · Интервью · Бесплатно"
      h1={<>Расшифровка для бизнеса<br /><span className="text-brand-600">Встречи и звонки в текст</span></>}
      subtitle="Превратите любую записанную встречу, звонок продаж, интервью или презентацию в искабельный документ за секунды. Без аккаунта и без подписки."
      defaultLanguage="ru"
      features={[
        { icon: '📞', title: 'Звонки продаж и клиентам', desc: 'Расшифровывайте записи sales-звонков, интервью с клиентами и discovery-сессий. Просматривайте ключевые точки и обязательства без повторного прослушивания.' },
        { icon: '📊', title: 'Встречи и стендапы', desc: 'Переводите записи Zoom, Google Meet и Teams в текст. Делитесь заметками, не заставляя всех смотреть видео.' },
        { icon: '🔐', title: 'Конфиденциальная обработка', desc: 'Записи обрабатываются мгновенно и не сохраняются. Деловые разговоры остаются конфиденциальными.' },
      ]}
      faq={[
        { q: 'Как расшифровать запись встречи?', a: 'Экспортируйте встречу как MP4 или MP3 из Zoom, Google Meet или Teams. Загрузите файл сюда — получите полный текст за секунды.' },
        { q: 'Можно ли бесплатно расшифровать запись Zoom?', a: 'Да. Скачайте запись локально (MP4 или M4A), затем загрузите в Mictoo. Расшифровка появляется мгновенно и бесплатно.' },
        { q: 'Безопасны ли мои деловые данные?', a: 'Да. Файлы обрабатываются в реальном времени и сразу удаляются. На наших серверах ничего не остаётся. Мы не обучаем модели на ваших данных.' },
        { q: 'Как расшифровать запись sales-звонка?', a: 'Экспортируйте звонок из CRM или инструмента записи как MP3 или WAV, загрузите выше и скачайте расшифровку в .txt.' },
        { q: 'Поддерживается ли несколько спикеров?', a: 'Расшифровка собирает все произнесённые слова в единый текст. Автоматическая разметка спикеров требует профессионального сервиса.' },
        { q: 'Какие платформы совещаний поддерживаются?', a: 'Любая платформа с возможностью скачать запись: Zoom, Google Meet, Microsoft Teams, Webex, Riverside, Loom и другие. Экспорт в MP4, MP3, M4A или WAV.' },
        { q: 'Можно ли расшифровать подкаст или вебинар?', a: 'Да. Эпизоды подкастов, записи вебинаров и доклады конференций расшифровываются отлично. Загрузите аудио — получите расшифровку за секунды.' },
      ]}
      relatedLinks={[
        { href: '/transcribe-audio-to-text', label: 'Аудио в текст' },
        { href: '/timestamped-transcription', label: 'Расшифровка с таймкодами' },
        { href: '/transcribe-video-to-text', label: 'Видео в текст' },
        { href: '/ru', label: 'Все форматы' },
      ]}
    />
  )
}
