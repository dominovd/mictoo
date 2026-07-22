import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'ja': 'https://mictoo.com/ja/zoom-transcription',
  'ko': 'https://mictoo.com/ko/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Транскрипция Zoom для облачных и локальных записей | Mictoo',
  description:
    'Загрузите облачную или локальную запись Zoom в формате MP4/M4A и получите транскрипцию с временными метками, AI-резюме и экспортируемые файлы.',
  alternates: {
    canonical: 'https://mictoo.com/ru/zoom-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Транскрипция записи Zoom | Mictoo',
    description: 'Загрузите облачную или локальную запись MP4/M4A и получите транскрипцию, резюме и экспорт.',
    url: 'https://mictoo.com/ru/zoom-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Транскрипция Zoom: Бесплатно',
    description: 'Загрузите запись Zoom и получите транскрипцию с временными метками.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RuZoomTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ru"
      badge="Zoom · Облако / Локально / M4A аудио · Бесплатно"
      h1First="Транскрипция Zoom"
      h1Second="Облачные и локальные записи в текст"
      subtitle="Загрузите облачную запись Zoom в формате MP4, аудиофайл M4A или локальную запись. Получите транскрипцию с временными метками, AI-резюме, перевод и экспортируемые файлы в одном рабочем процессе."
      currentHref="/ru/zoom-transcription"

      platforms={[
        { name: 'Облако MP4',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF' },
        { name: 'M4A аудио',    iconKey: 'mic',             brandBg: '#0EA5A4' },
        { name: 'Локальный MP4',    iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Google Meet',  iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/ru/google-meet-transcription' },
        { name: 'MS Teams',     iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/ru/teams-meeting-transcription' },
        { name: 'Центр встреч',  iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/ru/meeting-transcription' },
      ]}

      howItWorksTitle="Как работает транскрипция Zoom"
      steps={[
        {
          icon: 'folder',
          title: 'Скачайте из Zoom',
          desc: 'Облако: zoom.us → Записи → скачайте MP4 или версию "Только аудио (M4A)". Локально: ~/Documents/Zoom/.',
        },
        {
          icon: 'upload',
          title: 'Перетащите файл сюда',
          desc: 'Аудиофайл M4A обычно намного меньше, чем MP4, и избегает загрузки видеотрека. Бесплатно до 25 MB анонимно, 60 MB при входе в систему.',
        },
        {
          icon: 'editPen',
          title: 'Просмотрите и экспортируйте',
          desc: 'Время обработки зависит от продолжительности, размера файла и спроса. Когда завершите, просмотрите транскрипцию и экспортируйте резюме, субтитры или DOCX-резюме.',
        },
      ]}

      exampleTitle="Пример транскрипции встречи Zoom"
      exampleFileName="zoom-cloud-recording.m4a"
      exampleDurationLabel="34:12"
      exampleLines={[
        { t: '0:00',  line: 'Хорошо, извините за задержку, всем. Zoom отказался впустить меня, пока я не обновил. Давайте начнем.' },
        { t: '0:10',  line: 'Сегодня мы рассматриваем отзывы о прототипе с прошлой недели и решаем, что приоритизировать для спринта.' },
        { t: '0:22',  line: 'В целом отзывы были положительными. Двенадцать из пятнадцати участников поняли процесс без помощи.' },
        { t: '0:33',  line: 'Трое, кто застрял, столкнулись с одной и той же проблемой на экране настроек. Мы должны это исправить в первую очередь.' },
        { t: '0:45',  line: 'Согласен. У меня уже есть переработка дизайна в работе. Должно быть готово к четвергу.' },
        { t: '0:56',  line: 'Во-вторых, всем понравилось новое пустое состояние, но никто не нашел кнопку импорта. Она слишком глубоко зарыта.' },
        { t: '1:08',  line: 'Давайте переместим импорт в основное действие на пустом состоянии. Это одно изменение для инженеров.' },
      ]}
      summaryPoints={[
        'Отзывы о прототипе: 12/15 завершили процесс без помощи.',
        'Блокирующий фактор: экран настроек запутал 3/15 участников.',
        'Пустое состояние хорошо воспринято, но кнопку Импорт трудно найти.',
        'Переработка дизайна к четвергу.',
      ]}
      actionItems={[
        'Исправить экран настроек (переработка дизайна в четверг)',
        'Продвигать Импорт в основное действие на пустом состоянии',
        'Поделиться переработанным прототипом на пятничной встрече',
      ]}

      whyTitle="Почему стоит использовать Mictoo с записью Zoom"
      whyCards={[
        {
          icon: 'target',
          title: 'Вторая транскрипция для проверки',
          desc: 'Используйте Mictoo, когда вам нужна дополнительная транскрипция и текст с временными метками для проверки имен, терминологии и ключевых цитат.',
        },
        {
          icon: 'lock',
          title: 'Обрабатывает загруженные файлы',
          desc: 'Mictoo не подключается к вашему аккаунту Zoom. Загрузите облачную или локальную запись, на которую у вас уже есть разрешение на использование.',
        },
        {
          icon: 'gear',
          title: 'Работает и с локальной записью',
          desc: 'Встроенная транскрипция Zoom доступна только для облака. Локальная запись ничего не получает. Mictoo работает с обоими.',
        },
        {
          icon: 'sparkles',
          title: 'Резюме + перевод включены',
          desc: 'AI-резюме появляется рядом с транскрипцией автоматически. Перевод на 50+ языков в один клик.',
        },
      ]}

      scenariosTitle="Распространенные сценарии Zoom"
      scenarios={[
        { icon: 'chat',      title: 'Звонок с клиентом' },
        { icon: 'users',     title: 'Командная встреча' },
        { icon: 'briefcase', title: 'Демонстрация продаж' },
        { icon: 'search',    title: 'Интервью с пользователем' },
        { icon: 'book',      title: 'Вебинар' },
        { icon: 'globe',     title: 'Многоязычный звонок' },
      ]}

      tipsTitle="Советы для записей Zoom"
      tips={[
        'Скачайте версию M4A "Только аудио". Та же точность, в 10 раз меньше.',
        'Квота облачной записи не тратится на нашу транскрипцию (мы работаем внешне).',
        'Локальная запись тоже работает. Посмотрите в ~/Documents/Zoom/.',
        'Для длинных звонков свыше 60 MB войдите в систему для автоматического разделения.',
      ]}

      guidesTitle="Платформы встреч с собственными руководствами"
      guides={[
        { href: '/ru/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: 'Workspace + бесплатное решение' },
        { href: '/ru/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'Пути OneDrive + SharePoint' },
        { href: '/ru/meeting-transcription',       icon: 'video', title: 'Центр встреч', desc: 'Любая платформа, одна загрузка' },
        { href: '/ru/webinar-transcription',       icon: 'monitor', title: 'Вебинары',  desc: 'Zoom Webinars, Demio, ON24' },
      ]}

      faq={[
        {
          q: 'Какие типы записей Zoom работают?',
          a: 'Облачная запись MP4 (видео), облачная запись M4A (только аудио) и локальная запись MP4. Также экспорт chat.txt, если вам нужен журнал чата, хотя мы не транскрибируем чат.',
        },
        {
          q: 'Мне нужен Zoom Pro или выше?',
          a: 'Нет. Работает любая запись Zoom, включая бесплатную локальную запись. Облачная запись Zoom требует Pro+, но если у вас уже есть файл, Mictoo не интересует ваш уровень Zoom.',
        },
        {
          q: 'Моя облачная запись MP4 превышает 60 MB. Что теперь?',
          a: 'Если ваша запись включает загрузку "Только аудио (M4A)", используйте ее, чтобы избежать загрузки видеотрека. Доступность и размер файла зависят от настроек записи и продолжительности.',
        },
        {
          q: 'Должен ли я использовать транскрипцию аудио Zoom или Mictoo?',
          a: 'Транскрипция аудио Zoom удобна, когда облачная запись и транскрипция включены в вашем аккаунте. Mictoo полезен для локальных файлов, дополнительных форматов экспорта, перевода или создания другой транскрипции для проверки. Точность варьируется в зависимости от записи.',
        },
        {
          q: 'Определяет ли Mictoo спикеров Zoom?',
          a: 'Нет. Текущая транскрипция ,  это непрерывный текст с временными метками на каждой строке и без автоматических меток "Спикер 1 / Спикер 2".',
        },
        {
          q: 'Где сохраняется локальная запись?',
          a: 'По умолчанию, ~/Documents/Zoom/ на Mac и %USERPROFILE%\\Documents\\Zoom\\ на Windows. Каждая встреча получает свою папку с MP4 и отдельным audio.m4a.',
        },
        {
          q: 'Хранится ли моя запись Zoom на ваших серверах?',
          a: 'Нет. Файл передается поставщику транскрипции, обрабатывается один раз и удаляется из памяти. Только транскрипция сохраняется, если вы вошли в систему.',
        },
      ]}

      ctaHeadline="Преобразуйте записи Zoom в чистый текст"
      ctaSubtitle="Облачный MP4 или M4A, локальная запись, любой уровень Zoom. Бесплатно за файл."
      ctaButton="Загрузить запись Zoom"

      relatedLinks={[
        { href: '/ru/meeting-transcription',       label: 'Транскрипция встреч' },
        { href: '/ru/google-meet-transcription',   label: 'Транскрипция Google Meet' },
        { href: '/ru/teams-meeting-transcription', label: 'Транскрипция Teams' },
        { href: '/ru/webinar-transcription',       label: 'Транскрипция вебинаров' },
        { href: '/ru/interview-transcription',     label: 'Транскрипция интервью' },
      ]}
    />
  )
}