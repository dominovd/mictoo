import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'ja': 'https://mictoo.com/ja/webinar-transcription',
  'ko': 'https://mictoo.com/ko/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: 'Транскрипция вебинара с резюме и субтитрами | Mictoo',
  description:
    'Загрузите запись вебинара и получите текст с временными метками, резюме от ИИ и субтитры SRT/VTT для повтора.',
  alternates: {
    canonical: 'https://mictoo.com/ru/webinar-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Транскрипция вебинара: бесплатно | Mictoo',
    description: 'Загрузите запись вебинара, получите чистую транскрипцию.',
    url: 'https://mictoo.com/ru/webinar-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Транскрипция вебинара',
    description: 'Бесплатная транскрипция для любой платформы вебинаров.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RuWebinarTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ru"
      badge="Вебинары · Долгие формы · Бесплатно"
      h1First="Транскрипция вебинара"
      h1Second="Бесплатная транскрипция для любой записи вебинара"
      subtitle="Загрузите из Zoom Webinars, StreamYard, Demio, ON24, GoToWebinar или Restream. Получите полную транскрипцию, резюме от ИИ и субтитры, готовые для страницы повтора по запросу."
      currentHref="/ru/webinar-transcription"

      platforms={[
        { name: 'Zoom Webinar', iconKey: 'broadcast',       brandBg: '#2D8CFF', href: '/ru/zoom-transcription' },
        { name: 'StreamYard',   iconKey: 'broadcast',       brandBg: '#6B21A8' },
        { name: 'Restream',     iconKey: 'broadcast',       brandBg: '#EC1E62' },
        { name: 'ON24',         iconKey: 'videoCameraFill', brandBg: '#3B82F6' },
        { name: 'Demio',        iconKey: 'videoCameraFill', brandBg: '#F97316' },
        { name: 'Livestorm',    iconKey: 'videoCameraFill', brandBg: '#DA1F5C' },
      ]}

      howItWorksTitle="Как работает транскрипция вебинара"
      steps={[
        {
          icon: 'folder',
          title: 'Экспортируйте запись вебинара',
          desc: 'Большинство платформ предоставляют загрузку MP4 после мероприятия. Некоторые также предоставляют аудио только в формате M4A.',
        },
        {
          icon: 'upload',
          title: 'Перетащите файл сюда',
          desc: 'Долгие вебинары (более 60 минут) выигрывают от автоматического разделения при входе в систему. Бесплатно до 25 MB анонимно, 60 MB при входе.',
        },
        {
          icon: 'editPen',
          title: 'Транскрипция, резюме, субтитры',
          desc: 'Транскрипция с временными метками для страницы повтора, резюме от ИИ как краткое содержание блога, SRT для субтитров на видео по запросу.',
        },
      ]}

      exampleTitle="Пример транскрипции вебинара"
      exampleFileName="product-launch-webinar.mp4"
      exampleDurationLabel="1:04:22"
      exampleLines={[
        { t: '0:00',  line: 'Добро пожаловать всем и спасибо, что присоединились. Меня зовут Сэм, и я возглавляю маркетинг продуктов в компании.' },
        { t: '0:12',  line: 'Сегодня мы официально запускаем пятую версию платформы, и я хочу рассказать вам о новшествах.' },
        { t: '0:25',  line: 'Три основных изменения: переработанная отчетность, нативные интеграции с десятью лучшими CRM и новая модель ценообразования.' },
        { t: '0:40',  line: 'Позвольте мне начать с отчетности, потому что это изменение, о котором вы спрашивали на протяжении двух лет.' },
        { t: '0:52',  line: 'Старые отчеты были медленными, они ломались на больших наборах данных и их было трудно настраивать. Все три проблемы решены.' },
        { t: '1:07',  line: 'Вот живая демонстрация нового конструктора отчетов. Пока я кликаю, обратите внимание, как быстро обновляются предварительные просмотры.' },
        { t: '1:22',  line: 'Каждое поле можно перетаскивать, фильтры можно комбинировать, и вы можете сохранить любой отчет как общий шаблон.' },
      ]}
      summaryPoints={[
        'Запуск версии 5 с 3 основными изменениями.',
        'Переработанная отчетность (улучшение скорости, размера набора данных, настройки).',
        'Нативные интеграции с 10 лучшими CRM.',
        'Новая модель ценообразования.',
      ]}
      actionItems={[
        'Составить краткое содержание блога из транскрипции',
        'Вырезать демонстрационный клип для социальных сетей',
        'Опубликовать транскрибированный повтор на запрос',
      ]}

      whyTitle="Почему Mictoo для транскрипции вебинаров"
      whyCards={[
        {
          icon: 'clip',
          title: 'SRT-субтитры для повтора',
          desc: 'Временные метки соответствуют оригинальному видео. Добавьте SRT в ваш плеер повтора по запросу или загрузку на YouTube.',
        },
        {
          icon: 'sparkles',
          title: 'Резюме от ИИ для краткого содержания блога',
          desc: 'Преобразует 60-минутный вебинар в 200-словное резюме. Отличный первый черновик для последующего письма или блога.',
        },
        {
          icon: 'search',
          title: 'Поисковая транскрипция на целевой странице',
          desc: 'Опубликуйте транскрипцию на целевой странице по запросу. Участники могут просматривать, SEO улучшается, никому не нужно смотреть 60 минут.',
        },
        {
          icon: 'globe',
          title: 'Перевод для международных участников',
          desc: 'Одно нажатие для перевода на более чем 50 языков для последующих писем и страниц повтора на других языках.',
        },
      ]}

      scenariosTitle="Распространенные сценарии вебинаров"
      scenarios={[
        { icon: 'broadcast', title: 'Запуск продукта' },
        { icon: 'book',      title: 'Обучение / академия' },
        { icon: 'briefcase', title: 'Поддержка продаж' },
        { icon: 'target',    title: 'Образование клиентов' },
        { icon: 'users',     title: 'Брифинг для аналитиков' },
        { icon: 'globe',     title: 'Многоязычное мероприятие' },
      ]}

      tipsTitle="Советы для записей вебинаров"
      tips={[
        'Предпочитайте экспорт только аудио, когда ваша платформа это предлагает.',
        'Для вебинаров более 60 минут, войдите в систему для автоматического разделения до 3 часов.',
        'Включите имя ведущего в файл, чтобы заголовок транскрипции сохранял контекст.',
        'Выделите ключевые цитаты из транскрипции для социальных клипов.',
      ]}

      guidesTitle="Связанные инструменты"
      guides={[
        { href: '/ru/zoom-transcription',        icon: 'video', title: 'Zoom Webinar',      desc: 'Облачная запись MP4 / M4A' },
        { href: '/ru/free-srt-generator',        icon: 'file',  title: 'Генератор SRT',     desc: 'Субтитры для видео по запросу' },
        { href: '/ru/podcast-transcription',     icon: 'headset', title: 'Подкаст',         desc: 'Повторное использование аудио вебинара' },
        { href: '/ru/timestamped-transcription', icon: 'file',  title: 'С временными метками', desc: 'Экспорт, удобный для чтения' },
      ]}

      faq={[
        {
          q: 'С какими платформами вебинаров работает Mictoo?',
          a: 'Со всеми. Мы принимаем любой аудио или видео файл независимо от платформы. Zoom Webinars, StreamYard, Demio, Livestorm, ON24, GoToWebinar, Restream, Riverside Studio и другие.',
        },
        {
          q: 'Моя запись вебинара больше 60 MB. Что теперь?',
          a: 'Войдите в систему для автоматического разделения (до примерно 3 часов). Или экспортируйте только аудио с платформы, или извлеките аудио: ffmpeg -i webinar.mp4 -vn -ac 1 -ar 16000 audio.m4a.',
        },
        {
          q: 'Могу ли я опубликовать транскрипцию на странице повтора по запросу?',
          a: 'Да. Скопируйте транскрипцию в HTML вашей целевой страницы по запросу. Добавляет поисковый контент, улучшает SEO, дает участникам, которые не могут смотреть, способ просмотреть.',
        },
        {
          q: 'Могу ли я получить субтитры для записанного видео вебинара?',
          a: 'Да. Скачайте SRT или VTT после транскрипции. Оба работают с YouTube, Vimeo, Wistia, Descript и каждым современным видеоплеером.',
        },
        {
          q: 'Определяет ли Mictoo ведущих и спикеров Q&A?',
          a: 'Нет. Текущая транскрипция ,  это непрерывный текст с временными метками на каждой строке и без автоматических меток спикеров.',
        },
        {
          q: 'Могу ли я перевести транскрипцию вебинара?',
          a: 'Да. Выберите целевой язык и нажмите Перевести. Полезно для международных участников или страниц повтора на других языках.',
        },
        {
          q: 'Записи вебинаров хранятся на ваших серверах?',
          a: 'Нет. Файл передается поставщику транскрипции, обрабатывается один раз и удаляется. Только транскрипция сохраняется на учетных записях с входом в систему.',
        },
      ]}

      ctaHeadline="Преобразуйте свой вебинар в актив, готовый к повтору"
      ctaSubtitle="Полная транскрипция, SRT-субтитры, резюме от ИИ и поисковый текст на целевой странице."
      ctaButton="Загрузите запись вебинара"

      relatedLinks={[
        { href: '/ru/meeting-transcription',   label: 'Транскрипция встреч' },
        { href: '/ru/zoom-transcription',      label: 'Транскрипция Zoom' },
        { href: '/ru/podcast-transcription',   label: 'Транскрипция подкастов' },
        { href: '/ru/lecture-transcription',   label: 'Транскрипция лекций' },
        { href: '/ru/free-srt-generator',      label: 'Бесплатный генератор SRT' },
      ]}
    />
  )
}