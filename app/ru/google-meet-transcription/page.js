import UseCaseLayout from '@/components/UseCaseLayout'

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
  'ko': 'https://mictoo.com/ko/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Транскрипция записи Google Meet в текст | Mictoo',
  description:
    'Загрузите авторизованную запись Google Meet из Drive или локального захвата экрана и получите транскрипцию, AI-резюме и экспорты.',
  alternates: {
    canonical: 'https://mictoo.com/ru/google-meet-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Транскрипция Google Meet: рабочая или бесплатная учетная запись | Mictoo',
    description: 'Запись из Drive или захват экрана из бесплатного Meet. Оба варианта подходят.',
    url: 'https://mictoo.com/ru/google-meet-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Транскрипция Google Meet',
    description: 'Любой уровень учетной записи, одна страница загрузки.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RuGoogleMeetTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ru"
      badge="Google Meet · Запись из Drive или локальный захват · Бесплатно"
      h1First="Транскрипция Google Meet"
      h1Second="Записи из Drive и локальные захваты в текст"
      subtitle="Загрузите запись Google Meet из Drive или авторизованный локальный захват. Доступность записи зависит от версии Workspace хоста, разрешений и настроек администратора."
      currentHref="/ru/google-meet-transcription"

      platforms={[
        { name: 'Meet MP4',    iconKey: 'videoCameraFill', brandBg: '#00832D' },
        { name: 'QuickTime',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'OBS',         iconKey: 'videoCameraFill', brandBg: '#302E31' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/ru/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/ru/teams-meeting-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/ru/meeting-transcription' },
      ]}

      howItWorksTitle="Как работает транскрипция Google Meet"
      steps={[
        {
          icon: 'folder',
          title: 'Получите запись',
          desc: 'Запись Workspace: Drive › Мой диск › Записи Meet. В противном случае используйте авторизованный локальный захват, который соответствует правилам согласия участников.',
        },
        {
          icon: 'upload',
          title: 'Перетащите файл сюда',
          desc: 'MP4 или M4A подходят. Для больших MP4 сначала извлеките аудио с помощью ffmpeg или войдите для автоматического разбиения.',
        },
        {
          icon: 'editPen',
          title: 'Транскрипция, резюме, экспорты',
          desc: 'Получите транскрипцию с временными метками, AI-резюме и экспорты в форматах TXT/SRT/VTT/DOCX. Время обработки зависит от продолжительности и размера файла.',
        },
      ]}

      exampleTitle="Пример транскрипции Google Meet"
      exampleFileName="meet-recording.mp4"
      exampleDurationLabel="27:45"
      exampleLines={[
        { t: '0:00',  line: 'Привет, команда, спасибо, что присоединились. Быстрая синхронизация по плану запуска Q3 перед тем, как я уеду на выезд на следующей неделе.' },
        { t: '0:10',  line: 'Маркетинг завершил копию целевой страницы. Инженеры готовы к заморозке функций в пятницу.' },
        { t: '0:22',  line: 'Документы поддержки являются рискованным элементом. Мы отстаем примерно на три дня и должны наверстать упущенное перед запуском.' },
        { t: '0:33',  line: 'Я могу перевести Анну с документации по внедрению, чтобы помочь на этой неделе. Это должно восполнить пробел.' },
        { t: '0:44',  line: 'Отлично. Вторая тема, изменения на странице цен, которые мы обсуждали. Есть ли у кого-то сомнения перед тем, как мы их выпустим?' },
        { t: '0:56',  line: 'Единственное, что я бы отметил, это оформление уровня корпоративного тарифа. Кажется, немного тонким для этой ценовой категории.' },
        { t: '1:08',  line: 'Справедливо. Позвольте мне пересмотреть этот раздел на этой неделе и поделиться обновленной версией в пятницу.' },
      ]}
      summaryPoints={[
        'Запуск Q3 идет хорошо, заморозка функций в пятницу.',
        'Документы поддержки отстают на 3 дня (риск).',
        'Анна переведена для закрытия пробела в документах.',
        'Оформление уровня корпоративного тарифа нуждается в пересмотре.',
      ]}
      actionItems={[
        'Перевести Анну на документы поддержки на этой неделе',
        'Пересмотреть оформление уровня корпоративного тарифа к пятнице',
        'Подтвердить заморозку функций на пятничной встрече',
      ]}

      whyTitle="Почему Mictoo для транскрипции Google Meet"
      whyCards={[
        {
          icon: 'lock',
          title: 'Работает с медиафайлом',
          desc: 'Загрузите запись из Drive или авторизованный локальный захват без подключения Mictoo к вашей учетной записи Google.',
        },
        {
          icon: 'target',
          title: 'Текст с временными метками для проверки',
          desc: 'Проверьте имена и технические термины по сравнению с записью, затем экспортируйте исправленную транскрипцию в нужном вам формате.',
        },
        {
          icon: 'sparkles',
          title: 'AI-резюме всегда включено',
          desc: 'AI-резюме транскрипции Workspace ,  это отдельная платная функция. Наша функция включена в каждую транскрипцию.',
        },
        {
          icon: 'globe',
          title: 'Перевод на 50+ языков',
          desc: 'Краткое содержание многоязычной встречи без переводчика.',
        },
      ]}

      scenariosTitle="Распространенные сценарии Meet"
      scenarios={[
        { icon: 'chat',      title: 'Стендап / синхронизация' },
        { icon: 'briefcase', title: 'Обзор клиента' },
        { icon: 'search',    title: 'Интервью с пользователем' },
        { icon: 'users',     title: 'Общее собрание' },
        { icon: 'headset',   title: 'Поддержка' },
        { icon: 'globe',     title: 'Многоязычный' },
      ]}

      tipsTitle="Советы для записей Google Meet"
      tips={[
        'Записи Workspace Meet сохраняются в Drive › Записи Meet.',
        'Бесплатный уровень: QuickTime (Mac) или OBS (Win/Linux) хорошо работают.',
        'Большой MP4? Извлеките аудио: ffmpeg -i meet.mp4 -vn -ac 1 -ar 16000 audio.m4a.',
        'Войдите для автоматического разбиения длинных встреч.',
      ]}

      guidesTitle="Другие платформы для встреч"
      guides={[
        { href: '/ru/zoom-transcription',          icon: 'video', title: 'Zoom',           desc: 'Облако + Локально + M4A' },
        { href: '/ru/teams-meeting-transcription', icon: 'video', title: 'MS Teams',       desc: 'Пути OneDrive + SharePoint' },
        { href: '/ru/meeting-transcription',       icon: 'video', title: 'Meeting hub',    desc: 'Любая платформа, одна загрузка' },
        { href: '/ru/webinar-transcription',       icon: 'monitor', title: 'Вебинары',     desc: 'ON24, Demio, StreamYard' },
      ]}

      faq={[
        {
          q: 'Мне нужна ли Google Workspace для записи звонка Meet?',
          a: 'Доступность записи Google зависит от версии учетной записи хоста, роли в встрече, настроек администратора и разрешений. Подходящие записи сохраняются в Drive. Если вы делаете локальный захват, получите все необходимые согласия участников и следуйте применимой политике.',
        },
        {
          q: 'Где сохраняются записи Workspace Meet?',
          a: 'В Drive организатора встречи: Мой диск › Записи Meet. MP4 обычно появляется через несколько минут после окончания встречи. Уведомление по электронной почте отправляется, когда оно готово.',
        },
        {
          q: 'Должен ли я использовать транскрипцию Meet или загрузить запись?',
          a: 'Используйте транскрипцию Meet, когда она доступна и соответствует вашим потребностям. Загрузка медиа полезна, когда вы хотите экспортировать Mictoo, перевод или дополнительную транскрипцию для проверки. Точность варьируется в зависимости от аудио.',
        },
        {
          q: 'Моя запись Meet больше 60 MB. Что теперь?',
          a: 'Извлеките только аудио с помощью ffmpeg -i meet.mp4 -vn -ac 1 -ar 16000 audio.m4a. Или войдите для автоматического разбиения длинных файлов до примерно 3 часов.',
        },
        {
          q: 'Могу ли я получить AI-резюме звонка Meet?',
          a: 'Да. AI-резюме появляется вместе с транскрипцией автоматически. Отличный первый черновик для электронного письма с кратким содержанием или документа для последующих действий.',
        },
        {
          q: 'Определяет ли Mictoo, кто говорит в Meet?',
          a: 'Нет. Текущая транскрипция ,  это непрерывный текст с временными метками для каждой строки и без автоматических меток спикеров.',
        },
        {
          q: 'Записи Meet хранятся на ваших серверах?',
          a: 'Нет. Аудио передается поставщику транскрипции, обрабатывается один раз и удаляется. Только транскрипция сохраняется на учетных записях с входом.',
        },
      ]}

      ctaHeadline="Преобразуйте звонки Meet в чистый текст"
      ctaSubtitle="Загрузите авторизованную запись из Drive или локальный захват для текста, резюме и экспортов."
      ctaButton="Загрузить запись Meet"

      relatedLinks={[
        { href: '/ru/meeting-transcription',       label: 'Транскрипция встреч' },
        { href: '/ru/zoom-transcription',          label: 'Транскрипция Zoom' },
        { href: '/ru/teams-meeting-transcription', label: 'Транскрипция Teams' },
        { href: '/ru/webinar-transcription',       label: 'Транскрипция вебинаров' },
        { href: '/ru/business-transcription',      label: 'Транскрипция для бизнеса' },
      ]}
    />
  )
}