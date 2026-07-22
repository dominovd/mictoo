import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'ko': 'https://mictoo.com/ko/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'Транскрипция подкастов с резюме и SRT | Mictoo',
  description:
    'Загрузите эпизод подкаста и получите текст с временными метками, резюме от ИИ и экспорт для заметок, субтитров и вашего архива.',
  alternates: {
    canonical: 'https://mictoo.com/ru/podcast-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Транскрипция подкастов: бесплатный генератор транскриптов подкастов от ИИ | Mictoo',
    description: 'Загрузите ваш эпизод, получите чистую транскрипцию с временными метками за считанные секунды.',
    url: 'https://mictoo.com/ru/podcast-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Транскрипция подкастов: бесплатный генератор',
    description: 'Загрузите ваш эпизод, получите чистую транскрипцию.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RuPodcastTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ru"
      badge="Подкастеры · Ведущие · Бесплатно"
      h1First="Транскрипция подкастов"
      h1Second="Бесплатная транскрипция ИИ для каждого эпизода"
      subtitle="Загрузите ваш эпизод из любого инструмента записи. Получите чистую транскрипцию с временными метками и резюме от ИИ, готовую для заметок, SEO-обзора и субтитров на YouTube."
      currentHref="/ru/podcast-transcription"

      platforms={[
        { name: 'Riverside',  iconKey: 'waveMic',   brandBg: '#4B2AF7' },
        { name: 'Zencastr',   iconKey: 'soundwave', brandBg: '#F7B32B' },
        { name: 'SquadCast',  iconKey: 'waveMic',   brandBg: '#7E22CE' },
        { name: 'Cleanfeed',  iconKey: 'soundwave', brandBg: '#0F766E' },
        { name: 'Descript',   iconKey: 'soundwave', brandBg: '#111827' },
        { name: 'Anchor',     iconKey: 'mic',       brandBg: '#8B5CF6' },
      ]}

      howItWorksTitle="Как работает транскрипция подкастов"
      steps={[
        {
          icon: 'folder',
          title: 'Экспортируйте эпизод',
          desc: 'Любой формат, который производит ваш DAW или инструмент записи. MP3 наиболее распространен, но M4A, WAV и FLAC также подходят.',
        },
        {
          icon: 'upload',
          title: 'Перетащите файл сюда',
          desc: 'Загружайте файлы размером до 60 MB после входа в систему. Более длинные эпизоды автоматически разбиваются на сегменты и снова соединяются.',
        },
        {
          icon: 'editPen',
          title: 'Заметки, субтитры, экспорты',
          desc: 'Транскрипция, резюме от ИИ, SRT для версии на YouTube и DOCX для блога. Время обработки зависит от длины эпизода и размера файла.',
        },
      ]}

      exampleTitle="Пример транскрипции подкаста"
      exampleFileName="episode-042.mp3"
      exampleDurationLabel="52:07"
      exampleLines={[
        { t: '0:00',  line: 'Добро пожаловать обратно в шоу. Это сорок второй эпизод, и сегодня мы говорим о независимом подкастинге в 2026 году.' },
        { t: '0:10',  line: 'Мой гость ведет еженедельное шоу уже восемь лет, не пропуская ни одного эпизода. Спасибо, что пришли.' },
        { t: '0:20',  line: 'Спасибо, что пригласили. Удивительно думать, что мы начали это, когда все говорили, что аудио уже насыщено.' },
        { t: '0:30',  line: 'Давайте начнем с этого. Чем запуск подкаста в 2018 году отличался от сегодняшнего?' },
        { t: '0:38',  line: 'Распределение было сложнее, но аудитории были более терпеливыми. Внимание было дешевле, по сути.' },
        { t: '0:48',  line: 'Сегодня инструменты потрясающие. Транскрипция за секунды, резюме от ИИ, но само внимание стало гораздо более дефицитным.' },
        { t: '0:58',  line: 'Это хороший переход. Каков ваш рабочий процесс заметок теперь, когда транскрипты по сути бесплатны?' },
      ]}
      summaryPoints={[
        'Эпизод 42, акцент на независимом подкастинге в 2026 году.',
        'Гость: ведущий еженедельного шоу в течение 8 лет.',
        'Обсуждение: изменения в распределении 2018 года по сравнению с 2026 годом.',
        'Экономика внимания ,  новое узкое место.',
      ]}
      actionItems={[
        'Составьте заметки из резюме',
        'Извлеките 3 цитаты для социальных сетей',
        'Опубликуйте SRT для версии на YouTube',
      ]}

      whyTitle="Почему Mictoo для транскрипции подкастов"
      whyCards={[
        {
          icon: 'sparkles',
          title: 'Резюме от ИИ для заметок',
          desc: 'Надежный первый черновик для описаний эпизодов, обзоров блога и заметок, оптимизированных для SEO.',
        },
        {
          icon: 'clip',
          title: 'SRT для версии на YouTube',
          desc: 'Временные метки соответствуют оригинальному аудио. Перетащите SRT в YouTube Studio, и субтитры готовы.',
        },
        {
          icon: 'globe',
          title: 'Перевод для международной аудитории',
          desc: 'Перевод в один клик на 50+ языков. Одинокие ведущие могут синдицировать глобально без агентства переводов.',
        },
        {
          icon: 'gear',
          title: 'Любой битрейт, любой рекордер',
          desc: 'Записи голосовых заметок 32 kbps до студийных записей 320 kbps транскрибируются одинаково для чистой речи.',
        },
      ]}

      scenariosTitle="Сценарии транскрипции подкастов"
      scenarios={[
        { icon: 'chat',      title: 'Заметки' },
        { icon: 'clip',      title: 'Субтитры на YouTube' },
        { icon: 'search',    title: 'SEO-обзор' },
        { icon: 'sparkles',  title: 'Цитаты' },
        { icon: 'globe',     title: 'Перевод' },
        { icon: 'book',      title: 'Архив' },
      ]}

      tipsTitle="Советы для более чистых транскрипций подкастов"
      tips={[
        'Записывайте только голос, когда ваш DAW это позволяет.',
        'Оптимизированный для голоса 64 kbps моно MP3 транскрибируется так же хорошо.',
        'Для эпизодов с интервью удалите музыкальные фоны перед транскрипцией.',
        'Проверьте имена ведущего и гостя один раз, они будут появляться последовательно после этого.',
      ]}

      guidesTitle="Связанные руководства по транскрипции"
      guides={[
        { href: '/ru/transcribe-mp3-to-text',    icon: 'file',  title: 'Транскрипция MP3',   desc: 'Руководство по формату подкаста' },
        { href: '/ru/m4a-to-text',               icon: 'file',  title: 'Транскрипция M4A',   desc: 'Экспорт из GarageBand и Apple' },
        { href: '/ru/wav-to-text',               icon: 'file',  title: 'Транскрипция WAV',   desc: 'Студийные записи' },
        { href: '/ru/timestamped-transcription', icon: 'file',  title: 'Глубокое погружение в временные метки', desc: 'Механика экспорта SRT / VTT' },
      ]}

      faq={[
        {
          q: 'С какими подкаст-платформами работает Mictoo?',
          a: 'Со всеми. Мы принимаем любые аудио или видео файлы независимо от хоста. Распространенные: Riverside, Zencastr, SquadCast, Anchor, Buzzsprout, Libsyn. Бесплатно за файл до 60 MB после входа в систему.',
        },
        {
          q: 'Могу ли я получить транскрипцию как заметки автоматически?',
          a: 'Резюме от ИИ появляется вместе с транскрипцией автоматически. Используйте его как первый черновик ваших заметок, затем подгоните под свой стиль.',
        },
        {
          q: 'Мой эпизод больше 60 MB. Что теперь?',
          a: 'Войдите в систему, чтобы автоматически разбить более длинные файлы, или сначала уменьшите размер с помощью ffmpeg -i episode.mp3 -b:a 64k -ac 1 out.mp3. Эпизод длительностью 60 минут становится ~28 MB без потери точности.',
        },
        {
          q: 'Могу ли я скачать SRT для версии на YouTube?',
          a: 'Да. SRT и VTT включают временные метки, соответствующие оригинальному аудио. Перетащите их в YouTube Studio напрямую.',
        },
        {
          q: 'Mictoo транскрибирует подкасты на других языках?',
          a: 'Да. Whisper large-v3 поддерживает 50+ языков с автоопределением. Для коротких эпизодов или необычных акцентов выберите язык явно.',
        },
        {
          q: 'Эпизоды хранятся на ваших серверах?',
          a: 'Нет. Аудио передается провайдеру транскрипции, обрабатывается один раз и удаляется из памяти. Транскрипты хранятся только если вы вошли в систему.',
        },
        {
          q: 'Могу ли я определить, кто говорит (ведущий или гость)?',
          a: 'Нет. Текущая транскрипция ,  это непрерывный текст с временными метками и без автоматических меток спикеров.',
        },
      ]}

      ctaHeadline="Превратите каждый эпизод в публикуемый текст"
      ctaSubtitle="Заметки, субтитры на YouTube, SEO-обзор, перевод. Все из одной загрузки."
      ctaButton="Загрузить эпизод подкаста"

      relatedLinks={[
        { href: '/ru/interview-transcription',   label: 'Транскрипция интервью' },
        { href: '/ru/webinar-transcription',     label: 'Транскрипция вебинаров' },
        { href: '/ru/transcribe-mp3-to-text',    label: 'MP3 в текст' },
        { href: '/ru/free-srt-generator',        label: 'Бесплатный генератор SRT' },
        { href: '/ru/meeting-transcription',     label: 'Транскрипция встреч' },
      ]}
    />
  )
}