import LandingLayout from '@/components/LandingLayout'

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
  title: 'Транскрибация вебинаров — Бесплатная расшифровка записей | Mictoo',
  description: 'Бесплатная расшифровка записей вебинаров в текст и SRT-субтитры. Работает с Zoom, Webex, GoToWebinar и любыми экспортами MP4 или MP3. Без регистрации.',
  alternates: { canonical: 'https://mictoo.com/ru/webinar-transcription', languages: LANGS },

  openGraph: {
    title: "Транскрибация вебинаров — Бесплатная расшифровка записей | Mictoo",
    description: "Бесплатная расшифровка записей вебинаров в текст и SRT-субтитры. Работает с Zoom, Webex, GoToWebinar и любыми экспортами MP4 или MP3. Без регистрации.",
    url: "https://mictoo.com/ru/webinar-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Транскрибация вебинаров — Бесплатная расшифровка записей | Mictoo",
    description: "Бесплатная расшифровка записей вебинаров в текст и SRT-субтитры. Работает с Zoom, Webex, GoToWebinar и любыми экспортами MP4 или MP3. Без регистрации.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function RuWebinarPage() {
  return (
    <LandingLayout
      badge="Вебинары · MP4 · Бесплатно"
      h1={<>Транскрибация вебинаров<br /><span className="text-brand-600">Бесплатный генератор расшифровок</span></>}
      subtitle="Превратите запись вебинара в текстовую расшифровку с возможностью поиска или SRT-субтитры. Работает с Zoom, Webex, GoToWebinar и любыми MP4/MP3-экспортами."
      defaultLanguage="ru"
      valueBlock={
        <article className="prose-content">
          <p>
            Запись вебинара обычно содержит больше ценности, чем кажется:
            презентацию, вопросы участников, объяснения спикера и ответы,
            которые потом можно превратить в статью, knowledge base или follow-up.
          </p>
          <p>
            Mictoo работает с файлом после события: загрузите MP4, M4A или MP3
            экспорт из Zoom, Webex, GoToWebinar, Demio, Livestorm или другой
            платформы, получите редактируемый текст и субтитры.
          </p>
          <p className="text-sm text-slate-500">
            Для больших MP4 лучше извлечь аудио перед загрузкой: это обычно
            уменьшает файл в десятки раз без потери качества расшифровки.
          </p>
        </article>
      }
      howItWorks={[
        { icon: '🎥', title: 'Скачайте запись вебинара', desc: 'Zoom/Webex/GoToWebinar обычно дают MP4. Иногда можно скачать отдельный M4A или MP3-аудиофайл.' },
        { icon: '📝', title: 'Загрузите в Mictoo', desc: 'Мы извлекаем речь, создаём текст и сохраняем таймкоды для SRT/VTT.' },
        { icon: '📣', title: 'Используйте повторно', desc: 'Сделайте статью, рассылку, summary для участников, субтитры или внутреннюю базу знаний.' },
      ]}
      whyUse={{
        title: 'Что даёт расшифровка вебинара',
        bullets: [
          { title: 'Поиск по записи', desc: 'Текст помогает быстро найти вопрос, цитату, продуктовый анонс или объяснение спикера.' },
          { title: 'Контент после события', desc: 'Из расшифровки проще собрать блог-пост, посты в соцсети, email follow-up и FAQ.' },
          { title: 'Субтитры для повторов', desc: 'SRT/VTT можно использовать при публикации записи на YouTube, Vimeo или сайте.' },
          { title: 'Документация для команды', desc: 'Внутренние training-сессии и customer webinars становятся searchable knowledge base.' },
        ],
      }}
      useCases={{
        title: 'Типичные вебинарные сценарии',
        items: [
          { title: 'Маркетинговые вебинары', desc: 'Превратите запись в статью, лендинг replay, короткие клипы и follow-up письмо.' },
          { title: 'Обучение клиентов', desc: 'Сделайте текстовую версию training-сессии для базы знаний и onboarding-материалов.' },
          { title: 'Вопросы и ответы', desc: 'Q&A-блок можно быстро превратить в FAQ или список продуктовых инсайтов.' },
          { title: 'Внутренние демо', desc: 'Команда сможет искать по тексту решения, ограничения и договорённости после демо.' },
        ],
      }}
      proTips={{
        title: 'Советы для записей вебинаров',
        tips: [
          { title: 'Извлекайте аудио из больших MP4', desc: 'Видео занимает почти весь размер файла. Аудиодорожка обычно даёт тот же transcript и загружается быстрее.' },
          { title: 'Разделяйте длинные сессии', desc: 'Если вебинар длится 2 часа, делите на презентацию и Q&A: редактировать и публиковать будет проще.' },
          { title: 'Проверяйте имена брендов и термины', desc: 'ИИ может ошибаться в продуктовых названиях, аббревиатурах и фамилиях спикеров.' },
        ],
      }}
      faq={[
        { q: 'Как скачать запись вебинара в Zoom или Webex?', a: 'В Zoom: веб-портал → Recordings → кликните по вебинару → Скачать. В Webex: откройте запись в My Recordings → Скачать. Оба экспортируют MP4 по умолчанию.' },
        { q: 'Можно ли получать расшифровку, пока вебинар идёт в прямом эфире?', a: 'Mictoo работает с записанными файлами, не со стримом. Для субтитров в реальном времени используйте встроенные live captions вашей платформы вебинаров, а потом загрузите запись для аккуратной расшифровки.' },
        { q: 'А что с несколькими спикерами и Q&A-сессией?', a: 'Mictoo выдаёт одну общую расшифровку всего сказанного. Метки спикеров (Хост, Панелист 1, Зрители) можно проставить вручную в браузерном редакторе перед скачиванием.' },
        { q: 'Какая максимальная длина вебинара?', a: 'До 25 МБ на файл. 60-минутный вебинар в моно 64 kbps легко влезает; для более длинных сессий экспортируйте на меньшем битрейте или извлеките M4A-аудио.' },
        { q: 'Точна ли расшифровка для технических и отраслевых терминов?', a: 'Точность высокая при чистом аудио. Названия брендов, акронимы и редкая терминология иногда пишутся с ошибкой — быстро правится в браузерном редакторе перед экспортом.' },
      ]}
      relatedLinks={[
        { href: '/ru/meeting-transcription', label: 'Транскрибация встреч' },
        { href: '/ru/zoom-transcription', label: 'Транскрибация Zoom' },
        { href: '/ru/free-srt-generator', label: 'Генератор SRT' },
        { href: '/ru', label: 'Все форматы' },
      ]}
    />
  )
}
