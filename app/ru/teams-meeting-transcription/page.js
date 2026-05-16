import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Транскрибация Microsoft Teams — Расшифровка записей Teams | Mictoo',
  description: 'Бесплатная расшифровка записей встреч Microsoft Teams. Работает с MP4 из OneDrive или SharePoint. Без регистрации.',
  alternates: { canonical: 'https://mictoo.com/ru/teams-meeting-transcription', languages: LANGS },
}

export default function RuTeamsPage() {
  return (
    <LandingLayout
      badge="Microsoft Teams · MP4 · Бесплатно"
      h1={<>Транскрибация Microsoft Teams<br /><span className="text-brand-600">Встречи Teams в текст</span></>}
      subtitle="Превратите запись встречи в Microsoft Teams в чистый текст или SRT-субтитры. Бесплатно, без аккаунта. Работает с MP4 из OneDrive или SharePoint."
      defaultLanguage="ru"
      features={[
        { icon: '🏢', title: 'Для рабочих процессов Teams', desc: 'Скачайте запись из OneDrive или SharePoint — обычно в разделе "Recordings" в чате встречи — и загрузите в Mictoo. MP4 принимается напрямую.' },
        { icon: '📤', title: 'Расшифровки для расшаривания', desc: 'Вставьте расшифровку в Teams-чат, OneNote или Loop-компонент, чтобы поделиться с теми, кто пропустил встречу.' },
        { icon: '🌐', title: 'Все языки встреч', desc: 'Расшифровывает английский, русский, испанский, французский, немецкий, итальянский, голландский, польский, японский, китайский и ещё 40+ языков. Язык определяется автоматически.' },
      ]}
      faq={[
        { q: 'Где Teams сохраняет записи встреч?', a: 'У большинства организаций Teams сохраняет записи в OneDrive того, кто записывал (1:1 / групповые чаты), или в папке SharePoint канала (встречи в канале). Откройте запись, нажмите Скачать — получите файл MP4.' },
        { q: 'У Teams же есть встроенная расшифровка?', a: 'Да, Microsoft Teams предлагает live-транскрипцию, если её включил админ, но файл остаётся внутри Teams и не всегда доступен для скачивания. Mictoo даёт переносимый .txt или .srt, который можно использовать где угодно.' },
        { q: 'Можно ли получить SRT-субтитры для видео Teams?', a: 'Да. После расшифровки скачайте .srt с таймкодами и используйте его как субтитры на YouTube, Vimeo или в любом видеоредакторе.' },
        { q: 'А как насчёт конфиденциального контента встреч?', a: 'Mictoo не хранит файлы. Аудио передаётся ИИ-провайдеру только для расшифровки и сразу удаляется. Для встреч с регулируемыми данными (HIPAA, GDPR-ограничения, гриф конфиденциальности) сверьтесь с политикой вашей организации по сторонним ИИ-сервисам до загрузки.' },
        { q: 'Какая максимальная длина записи Teams?', a: 'До 25 МБ на файл. Большинство MP4-экспортов Teams превышают этот лимит для встреч длиннее 30 минут — извлеките аудиодорожку (M4A) или используйте видеокомпрессор.' },
      ]}
      relatedLinks={[
        { href: '/ru/zoom-transcription', label: 'Транскрибация Zoom' },
        { href: '/ru/meeting-transcription', label: 'Транскрибация встреч' },
        { href: '/ru', label: 'Все форматы' },
      ]}
    />
  )
}
