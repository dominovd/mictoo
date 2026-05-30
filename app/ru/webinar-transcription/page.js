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
      features={[
        { icon: '🎥', title: 'Любая платформа', desc: 'Zoom, Webex, GoToWebinar, Demio, Livestorm — все экспортируют MP4 или M4A. Загружайте файл напрямую, без конвертации.' },
        { icon: '📝', title: 'Используйте вебинар повторно', desc: 'Превратите один вебинар в статью для блога, посты для соцсетей, рассылку и follow-up документ для участников.' },
        { icon: '📺', title: 'SRT для повторов', desc: 'Скачайте .srt-файл и используйте как субтитры при публикации повтора на YouTube, Vimeo или своём сайте.' },
      ]}
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
