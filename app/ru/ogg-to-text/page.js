import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/ogg-to-text',
  'fr': 'https://mictoo.com/fr/ogg-to-text',
  'de': 'https://mictoo.com/de/ogg-to-text',
  'es': 'https://mictoo.com/es/ogg-to-text',
  'ru': 'https://mictoo.com/ru/ogg-to-text',
  'it': 'https://mictoo.com/it/ogg-to-text',
  'pt': 'https://mictoo.com/pt/ogg-to-text',
  'pl': 'https://mictoo.com/pl/ogg-to-text',
  'ja': 'https://mictoo.com/ja/ogg-to-text',
  'ko': 'https://mictoo.com/ko/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGG в текст — Бесплатная расшифровка OGG онлайн | Mictoo',
  description: 'Бесплатная конвертация OGG-аудио в текст онлайн. Загрузите любую OGG Vorbis запись и получите точную расшифровку мгновенно. Без регистрации.',
  alternates: { canonical: 'https://mictoo.com/ru/ogg-to-text', languages: LANGS },

  openGraph: {
    title: "OGG в текст — Бесплатная расшифровка OGG онлайн | Mictoo",
    description: "Бесплатная конвертация OGG-аудио в текст онлайн. Загрузите любую OGG Vorbis запись и получите точную расшифровку мгновенно. Без регистрации.",
    url: "https://mictoo.com/ru/ogg-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OGG в текст — Бесплатная расшифровка OGG онлайн | Mictoo",
    description: "Бесплатная конвертация OGG-аудио в текст онлайн. Загрузите любую OGG Vorbis запись и получите точную расшифровку мгновенно. Без регистрации.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function RuOggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · Бесплатно · Мгновенно"
      h1={<>OGG в текст<br /><span className="text-brand-600">Бесплатная расшифровка OGG онлайн</span></>}
      subtitle="Загрузите любой OGG-аудиофайл и конвертируйте в текст за несколько секунд. Поддержка OGG Vorbis и OGG Opus. Без аккаунта."
      defaultLanguage="ru"
      valueBlock={
        <article className="prose-content">
          <p>
            OGG — это контейнер, а не один конкретный аудиоформат. Внутри
            может быть Vorbis, Opus или даже FLAC. Поэтому качество и размер
            файла зависят не от расширения .ogg, а от кодека внутри.
          </p>
          <p>
            Чаще всего сюда загружают голосовые сообщения Telegram с
            расширением .oga: это Opus внутри OGG. Такие файлы маленькие,
            хорошо подходят для речи и обычно не требуют конвертации в MP3.
          </p>
          <p className="text-sm text-slate-500">
            Mictoo принимает .ogg, .oga и .opus, извлекает аудио, расшифровывает
            речь и отдаёт текст, SRT/VTT-субтитры или DOCX.
          </p>
        </article>
      }
      howItWorks={[
        { icon: '📥', title: 'Загрузите OGG или .oga', desc: 'Подойдут Telegram voice, записи Linux-приложений, WebRTC-аудио и файлы с Vorbis или Opus внутри OGG-контейнера.' },
        { icon: '🔎', title: 'Мы определяем кодек', desc: 'Файл может выглядеть одинаково снаружи, но внутри быть Vorbis, Opus или FLAC. Mictoo проверяет заголовки и декодирует правильным способом.' },
        { icon: '📝', title: 'Редактируйте и экспортируйте', desc: 'После расшифровки можно поправить имена, скопировать текст или скачать TXT, SRT, VTT и DOCX.' },
      ]}
      whyUse={{
        title: 'Почему OGG лучше не конвертировать заранее',
        bullets: [
          { title: 'Telegram .oga работает напрямую', desc: 'Голосовые сообщения Telegram Desktop и Telegram Web обычно сохраняются как .oga. Это нормальный OGG Audio-файл, его не нужно переименовывать или прогонять через конвертер.' },
          { title: 'Opus уже оптимизирован для речи', desc: 'Opus хорошо сохраняет голос даже на низком битрейте. Для обычных voice messages предварительная обработка чаще не улучшает точность, а только добавляет лишний шаг.' },
          { title: 'Подходит для Linux- и open-source-рабочих процессов', desc: 'Многие Linux-рекордеры, архивы и free-software-проекты используют OGG/Vorbis или OGG/Opus. Страница рассчитана именно на такие файлы.' },
          { title: 'Таймкоды остаются привязаны к исходному аудио', desc: 'SRT и VTT строятся по исходной записи. Это удобно, если текст нужен для субтитров, заметок или поиска по длинному голосовому сообщению.' },
        ],
      }}
      useCases={{
        title: 'Откуда обычно берутся OGG-файлы',
        items: [
          { title: 'Голосовые сообщения Telegram', desc: 'Длинные voice notes из рабочих чатов, интервью, консультаций или личных переписок. Особенно полезно, когда нужно быстро превратить длинный голос в текст.' },
          { title: 'Записи с Linux-десктопа', desc: 'GNOME Sound Recorder, KDE-приложения и другие рекордеры часто сохраняют аудио в OGG Opus или Vorbis.' },
          { title: 'WebRTC и браузерные звонки', desc: 'Некоторые инструменты записи звонков сохраняют голос как Opus в OGG. Mictoo извлекает аудио и расшифровывает его без отдельного конвертера.' },
          { title: 'Архивы и справочные аудио', desc: 'Wikipedia, образовательные коллекции и старые open-source-архивы часто публикуют короткие записи в OGG Vorbis.' },
        ],
      }}
      proTips={{
        title: 'Практические советы для OGG',
        tips: [
          { title: 'Не путайте .oga и .ogg', desc: '.oga — официальное расширение для аудио-only OGG. Для Mictoo разницы нет: оба варианта принимаются напрямую.' },
          { title: 'Если файл слишком большой, извлеките аудио без перекодирования', desc: 'Для видео или странных контейнеров используйте ffmpeg -i input.ogv -vn -c:a copy audio.ogg. Это быстрее и не портит звук.' },
          { title: 'Для коротких сообщений задайте язык вручную', desc: 'На голосовых заметках короче минуты автоопределение языка иногда ошибается. Выберите язык в выпадающем списке перед загрузкой.' },
        ],
      }}
      faq={[
        { q: 'Как конвертировать OGG в текст?', a: 'Загрузите OGG-файл выше. Расшифровка генерируется автоматически за несколько секунд.' },
        { q: 'Конвертация OGG в текст бесплатная?', a: 'Да, полностью бесплатная. Без регистрации и аккаунта.' },
        { q: 'Какой максимальный размер OGG?', a: 'До 25 МБ.' },
        { q: 'Какие ещё аудиоформаты поддерживаются?', a: 'Также поддерживаются MP3, MP4, WAV, M4A, FLAC, WEBM.' },
      ]}
      relatedLinks={[
        { href: '/ru/wav-to-text', label: 'WAV в текст' },
        { href: '/ru/flac-to-text', label: 'FLAC в текст' },
        { href: '/ru', label: 'Все форматы' },
      ]}
    />
  )
}
