import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
  'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
  'ko': 'https://mictoo.com/ko/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Транскрипция встреч Teams из MP4 записей | Mictoo',
  description:
    'Загрузите MP4 файл Microsoft Teams из OneDrive или SharePoint и получите транскрипцию с отметками времени, AI-резюме и экспортируемые файлы.',
  alternates: {
    canonical: 'https://mictoo.com/ru/teams-meeting-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Транскрипция встреч Teams из MP4 | Mictoo',
    description: 'Загрузите запись Teams из OneDrive или SharePoint и получите текст, резюме и экспорт.',
    url: 'https://mictoo.com/ru/teams-meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Транскрипция встреч Teams',
    description: 'Загрузите MP4 файл из OneDrive или SharePoint и получите транскрипцию.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RuTeamsMeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ru"
      badge="Teams · OneDrive / SharePoint · M365 · Бесплатно"
      h1First="Транскрипция встреч Teams"
      h1Second="Из MP4 файла OneDrive или SharePoint в текст"
      subtitle="Скачайте запись Teams, к которой у вас есть доступ, затем загрузите MP4 для получения транскрипции с отметками времени, AI-резюме и экспортов. Доступность записи зависит от вашей лицензии Microsoft 365 и политик вашей организации."
      currentHref="/ru/teams-meeting-transcription"

      platforms={[
        { name: 'OneDrive',    iconKey: 'videoCameraFill', brandBg: '#0364B8' },
        { name: 'SharePoint',  iconKey: 'videoCameraFill', brandBg: '#036C70' },
        { name: 'Channel MP4', iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/ru/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/ru/google-meet-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/ru/meeting-transcription' },
      ]}

      howItWorksTitle="Как работает транскрипция встреч Teams"
      steps={[
        {
          icon: 'folder',
          title: 'Найдите запись',
          desc: 'Частная встреча: OneDrive › Мои файлы › Записи. Встреча канала: сайт SharePoint канала.',
        },
        {
          icon: 'upload',
          title: 'Перетащите MP4 сюда',
          desc: 'Скачайте из OneDrive или SharePoint и перетащите. Для файлов более 60 MB извлеките аудио или войдите для автоматического разделения.',
        },
        {
          icon: 'editPen',
          title: 'Транскрипция, резюме, экспорты',
          desc: 'Транскрипция с отметками времени, AI-резюме, TXT/SRT/VTT/DOCX. 30-минутный звонок в Teams завершается примерно за минуту.',
        },
      ]}

      exampleTitle="Пример транскрипции встречи Teams"
      exampleFileName="teams-channel-meeting.mp4"
      exampleDurationLabel="41:08"
      exampleLines={[
        { t: '0:00',  line: 'Итак, добро пожаловать на обзор спринта. Мы пройдемся по тому, что было выпущено, что нет и почему.' },
        { t: '0:11',  line: 'Команда по платежам выпустила новый процесс возврата во вторник. Уровень принятия выше ожиданий, около сорока процентов подходящих заявок.' },
        { t: '0:24',  line: 'Команда поиска столкнулась с более длительным, чем ожидалось, процессом индексации. Выпуск перенесен на следующий спринт.' },
        { t: '0:35',  line: 'Это нормально, но нам нужно сообщить команде по работе с клиентами о задержке, чтобы они могли управлять ожиданиями.' },
        { t: '0:47',  line: 'Я отправлю сообщение в общий канал сегодня с пересмотренным графиком и причиной.' },
        { t: '0:58',  line: 'Третье, уровень сбоев на мобильных устройствах немного увеличился. Все еще в пределах SLA, но стоит следить за этим спринтом.' },
        { t: '1:09',  line: 'Команда по устройствам уже работает над этим. Мы должны получить коренную причину к среде и исправление к концу спринта.' },
      ]}
      summaryPoints={[
        'Процесс возврата выпущен во вторник, 40% принятия.',
        'Команда поиска задержала на один спринт (процесс индексации).',
        'Уровень сбоев на мобильных устройствах увеличился, но в пределах SLA.',
        'Коренная причина сбоев на мобильных устройствах к среде.',
      ]}
      actionItems={[
        'Отправить сообщение о задержке в канал по работе с клиентами',
        'Исследовать коренную причину сбоев на мобильных устройствах (среда)',
        'Подтвердить новую дату выпуска команды поиска',
      ]}

      whyTitle="Почему Mictoo для записей Teams"
      whyCards={[
        {
          icon: 'folder',
          title: 'Работает с загруженными записями',
          desc: 'Используйте MP4, который у вас уже есть разрешение скачать из OneDrive или сайта SharePoint канала.',
        },
        {
          icon: 'target',
          title: 'Проверьте имена и терминологию',
          desc: 'Выход с отметками времени облегчает поиск и исправление названий продуктов, аббревиатур и специализированных терминов.',
        },
        {
          icon: 'sparkles',
          title: 'Резюме рядом с транскрипцией',
          desc: 'Создайте черновик резюме и держите его рядом с полным текстом для проверки перед отправкой.',
        },
        {
          icon: 'globe',
          title: 'Перевод записей на разных языках',
          desc: 'Запись на одном языке, резюме нужно на другом. Один клик, более 50 языков.',
        },
      ]}

      scenariosTitle="Распространенные сценарии Teams"
      scenarios={[
        { icon: 'chat',      title: 'Обзор спринта' },
        { icon: 'briefcase', title: 'Синхронизация совета' },
        { icon: 'users',     title: 'Стэнд-ап' },
        { icon: 'target',    title: 'Обзор OKR' },
        { icon: 'headset',   title: 'Эскалация поддержки' },
        { icon: 'globe',     title: 'Международный звонок' },
      ]}

      tipsTitle="Советы для записей Teams"
      tips={[
        'Частные встречи сохраняются в OneDrive (аккаунт организатора).',
        'Канальные встречи сохраняются на сайте SharePoint канала.',
        'GCC / корпоративные арендаторы могут ограничивать загрузки: спросите IT.',
        'Для длинных встреч извлеките аудио с помощью ffmpeg, чтобы уменьшить размер файла.',
      ]}

      guidesTitle="Другие платформы для встреч"
      guides={[
        { href: '/ru/zoom-transcription',        icon: 'video', title: 'Zoom',        desc: 'Облако + Локально + M4A' },
        { href: '/ru/google-meet-transcription', icon: 'video', title: 'Google Meet', desc: 'Workspace + бесплатно' },
        { href: '/ru/meeting-transcription',     icon: 'video', title: 'Meeting hub', desc: 'Любая платформа, одна загрузка' },
        { href: '/ru/business-transcription',    icon: 'briefcase', title: 'Бизнес', desc: 'Авторизованные внутренние записи' },
      ]}

      faq={[
        {
          q: 'Где сохраняются записи Teams?',
          a: 'Частные встречи: в OneDrive организатора в разделе Мои файлы › Записи. Канальные встречи: на сайте SharePoint, поддерживающем этот канал, в папке канала в Документах.',
        },
        {
          q: 'Нужен ли мне Teams Premium для загрузки записи?',
          a: 'Mictoo обрабатывает загруженный медиафайл, а не подключается к вашей учетной записи Teams. Ваша возможность записывать, транскрибировать или загружать в Teams по-прежнему зависит от вашей лицензии Microsoft 365, роли на встрече и политик вашей организации.',
        },
        {
          q: 'Должен ли я использовать транскрипцию Teams или загрузить запись?',
          a: 'Используйте транскрипцию Teams, когда она доступна и соответствует вашим потребностям. Загрузка записи полезна, когда вам нужны экспорты Mictoo, перевод или дополнительная транскрипция для проверки. Точность варьируется в зависимости от записи.',
        },
        {
          q: 'Мой Teams MP4 больше 60 MB. Что теперь?',
          a: 'Извлеките аудио: ffmpeg -i teams.mp4 -vn -ac 1 -ar 16000 audio.m4a. Или войдите для автоматического разделения файлов до примерно 3 часов.',
        },
        {
          q: 'Могу ли я использовать Mictoo для арендаторов GCC / корпоративных?',
          a: 'Некоторые корпоративные и государственные арендаторы ограничивают загрузки или внешнюю обработку. Следуйте политике вашей организации и проконсультируйтесь с IT или владельцем записи перед загрузкой или загрузкой медиафайлов встреч.',
        },
        {
          q: 'Определяет ли Mictoo спикеров Teams?',
          a: 'Нет. Текущая транскрипция представляет собой непрерывный текст с отметками времени на каждой строке и без автоматических меток спикеров.',
        },
        {
          q: 'Хранятся ли записи Teams на ваших серверах?',
          a: 'Нет. Файл передается поставщику транскрипции, обрабатывается один раз и удаляется. Только транскрипция сохраняется на подписанных учетных записях.',
        },
      ]}

      ctaHeadline="Преобразуйте встречи Teams в чистый текст"
      ctaSubtitle="Загрузите авторизованную запись из OneDrive или SharePoint и получите текст, резюме и экспорты."
      ctaButton="Загрузить запись Teams"

      relatedLinks={[
        { href: '/ru/meeting-transcription',       label: 'Транскрипция встреч' },
        { href: '/ru/zoom-transcription',          label: 'Транскрипция Zoom' },
        { href: '/ru/google-meet-transcription',   label: 'Транскрипция Google Meet' },
        { href: '/ru/business-transcription',      label: 'Транскрипция бизнеса' },
        { href: '/ru/webinar-transcription',       label: 'Транскрипция вебинаров' },
      ]}
    />
  )
}