import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'pl': 'https://mictoo.com/pl/google-meet-transcription',
  'ja': 'https://mictoo.com/ja/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Транскрибация Google Meet — Расшифровка записей Meet бесплатно | Mictoo',
  description: 'Бесплатная расшифровка записей Google Meet в текст. Работает с MP4 из Google Drive. Без регистрации, без установки.',
  alternates: { canonical: 'https://mictoo.com/ru/google-meet-transcription', languages: LANGS },
}

export default function RuGoogleMeetPage() {
  return (
    <LandingLayout
      badge="Google Meet · MP4 · Бесплатно"
      h1={<>Транскрибация Google Meet<br /><span className="text-brand-600">Превратите запись Meet в текст</span></>}
      subtitle="Загрузите MP4-экспорт из Google Meet и получите чистую расшифровку за несколько секунд. Бесплатно, без регистрации. Хорошо дополняет встроенные субтитры Google — получите аккуратный пост-ревью встречи."
      defaultLanguage="ru"
      features={[
        { icon: '🎬', title: 'Прямая поддержка MP4', desc: 'Google Meet экспортирует записи в Google Drive в формате MP4. Скачайте файл и загрузите в Mictoo — без конвертации и извлечения.' },
        { icon: '🧾', title: 'Чище живых субтитров', desc: 'Живые субтитры Google ловят суть, но пропускают пунктуацию и имена. Mictoo выдаёт аккуратную расшифровку, которую можно вставить в Docs, Notion или письмо с резюме встречи.' },
        { icon: '🔒', title: 'Приватно', desc: 'Файлы обрабатываются и сразу удаляются. Мы не сохраняем ни аудио встречи, ни расшифровку.' },
      ]}
      faq={[
        { q: 'Как скачать запись Google Meet?', a: 'Откройте Google Drive → Мой диск → Meet Recordings (папка создаётся автоматически). Найдите встречу, нажмите ⋮ → Скачать. Файл будет в формате MP4 — загружайте в Mictoo как есть.' },
        { q: 'Зачем Mictoo, если у Google Meet уже есть субтитры?', a: 'Живые субтитры полезны во время встречи, но по умолчанию не сохраняются и не имеют пунктуации и правильных заглавных букв. Mictoo даёт аккуратную редактируемую расшифровку, готовую к публикации или переработке.' },
        { q: 'Можно ли получить метки спикеров (Хост, Гость 1 и т.д.)?', a: 'Автоматически — нет (в бесплатном тарифе). Расшифровка — это единый текстовый поток. Метки спикеров можно проставить вручную в браузерном редакторе.' },
        { q: 'Какая максимальная длина записи?', a: 'До 25 МБ на файл. MP4 из Google Meet в качестве по умолчанию занимает ~50 МБ за 30 минут — рассмотрите извлечение аудиодорожки (M4A) или сжатие видео, чтобы уложиться в лимит.' },
        { q: 'А функция Google "Делать заметки за меня" — это то же самое?', a: 'Нет — функция "Делать заметки за меня" в Workspace генерирует ИИ-резюме, а не дословную расшифровку. Mictoo даёт полный verbatim-транскрипт, который при желании можно резюмировать отдельно.' },
      ]}
      relatedLinks={[
        { href: '/ru/zoom-transcription', label: 'Транскрибация Zoom' },
        { href: '/ru/meeting-transcription', label: 'Транскрибация встреч' },
        { href: '/ru', label: 'Все форматы' },
      ]}
    />
  )
}
