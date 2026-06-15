import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-text',
  'fr': 'https://mictoo.com/fr/webm-to-text',
  'de': 'https://mictoo.com/de/webm-to-text',
  'es': 'https://mictoo.com/es/webm-to-text',
  'ru': 'https://mictoo.com/ru/webm-to-text',
  'it': 'https://mictoo.com/it/webm-to-text',
  'pt': 'https://mictoo.com/pt/webm-to-text',
  'pl': 'https://mictoo.com/pl/webm-to-text',
  'ja': 'https://mictoo.com/ja/webm-to-text',
  'ko': 'https://mictoo.com/ko/webm-to-text',
  'x-default': 'https://mictoo.com/webm-to-text',
}

export const metadata = {
  title: 'WEBM в текст — Бесплатная расшифровка WEBM онлайн | Mictoo',
  description: 'Бесплатная конвертация WEBM-аудио и видео в текст онлайн. Загрузите любую WEBM-запись и получите точную расшифровку мгновенно. Без регистрации.',
  alternates: { canonical: 'https://mictoo.com/ru/webm-to-text', languages: LANGS },

  openGraph: {
    title: "WEBM в текст — Бесплатная расшифровка WEBM онлайн | Mictoo",
    description: "Бесплатная конвертация WEBM-аудио и видео в текст онлайн. Загрузите любую WEBM-запись и получите точную расшифровку мгновенно. Без регистрации.",
    url: "https://mictoo.com/ru/webm-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBM в текст — Бесплатная расшифровка WEBM онлайн | Mictoo",
    description: "Бесплатная конвертация WEBM-аудио и видео в текст онлайн. Загрузите любую WEBM-запись и получите точную расшифровку мгновенно. Без регистрации.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function RuWebmToTextPage() {
  return (
    <LandingLayout
      badge="WEBM · Записи в браузере · Бесплатно"
      h1={<>WEBM в текст<br /><span className="text-brand-600">Бесплатная расшифровка WEBM онлайн</span></>}
      subtitle="Загрузите любой WEBM-аудио или видеофайл и получите точную расшифровку за несколько секунд. WEBM часто используют браузеры, рекордеры экрана и видеозвонки. Без аккаунта."
      defaultLanguage="ru"
      valueBlock={
        <article className="prose-content">
          <p>
            WebM чаще всего появляется после записи экрана или браузерного
            видео: Loom, OBS, расширения Chrome, MediaRecorder API, локальные
            бэкапы видеозвонков. Внутри обычно есть видеодорожка и аудио Opus.
          </p>
          <p>
            Для расшифровки видео не нужно. Mictoo извлекает только аудио,
            сохраняет таймкоды относительно исходной записи и возвращает текст,
            который удобно искать, цитировать или превращать в субтитры.
          </p>
          <p className="text-sm text-slate-500">
            Если WebM больше лимита, сначала извлеките аудио: ffmpeg -i input.webm -vn -c:a copy audio.webm.
          </p>
        </article>
      }
      howItWorks={[
        { icon: '📹', title: 'Загрузите WebM', desc: 'Подойдут записи Loom, OBS, Chrome/Firefox screen recorder, MediaRecorder API и WebRTC-экспорты.' },
        { icon: '✂️', title: 'Мы берём только аудио', desc: 'Видео VP8, VP9 или AV1 игнорируется. Для Whisper важна аудиодорожка Opus или Vorbis.' },
        { icon: '🎯', title: 'Получите текст с таймкодами', desc: 'TXT подходит для заметок, SRT/VTT — для субтитров, DOCX — для документации и ревью.' },
      ]}
      whyUse={{
        title: 'Почему WebM не нужно вручную конвертировать в MP3',
        bullets: [
          { title: 'Аудио извлекается автоматически', desc: 'Многие сервисы просят сначала сделать MP3. Mictoo делает demux сам и отправляет модели только звуковую дорожку.' },
          { title: 'Таймкоды совпадают с видео', desc: 'Если вы скачаете SRT или VTT, отметки времени будут соответствовать исходному WebM, что удобно для Loom, YouTube и видеоредакторов.' },
          { title: 'Opus хорошо подходит для речи', desc: 'В WebM почти всегда используется Opus: компактный, чистый для голоса и хорошо распознаваемый современными speech-to-text моделями.' },
          { title: 'Видео не сохраняется', desc: 'Mictoo не публикует и не переиспользует видеодорожку. Она нужна только как контейнер, из которого извлекается аудио.' },
        ],
      }}
      useCases={{
        title: 'Типичные источники WebM',
        items: [
          { title: 'Loom и async-video', desc: 'Туториалы, баг-репорты, дизайн-ревью и walkthrough-видео удобно превращать в searchable transcript.' },
          { title: 'OBS и скринкасты', desc: 'Стримеры, преподаватели и авторы курсов могут получить текст комментариев без отдельного аудиоэкспорта.' },
          { title: 'Записи прямо из браузера', desc: 'Многие web-приложения используют MediaRecorder API и скачивают результат именно как WebM.' },
          { title: 'Локальные бэкапы звонков', desc: 'Если облачная запись не сохранилась, локальный WebM-файл часто остаётся единственной копией разговора.' },
        ],
      }}
      proTips={{
        title: 'Советы для WebM-записей',
        tips: [
          { title: 'Сначала извлекайте аудио из больших видео', desc: 'В 30-минутной записи экрана видео может занимать 90% размера. Извлечение аудио без перекодирования резко ускоряет загрузку.' },
          { title: 'Микрофон важнее формата', desc: 'Плохой звук издалека ухудшит расшифровку сильнее, чем выбор WebM или MP4. Для важных записей используйте гарнитуру или близкий микрофон.' },
          { title: 'Храните исходный WebM отдельно', desc: 'Mictoo возвращает текст, а не смонтированное видео. Если нужно потом резать ролик, делайте это в редакторе по исходному файлу.' },
        ],
      }}
      faq={[
        { q: 'Как конвертировать WEBM в текст?', a: 'Загрузите WEBM-файл выше. Расшифровка генерируется автоматически и появляется за несколько секунд.' },
        { q: 'Конвертация WEBM в текст бесплатная?', a: 'Да, полностью бесплатная. Без аккаунта и регистрации.' },
        { q: 'Можно ли расшифровать запись экрана Chrome?', a: 'Да. Встроенный рекордер Chrome сохраняет видео в WEBM. Загружайте файл напрямую для расшифровки.' },
        { q: 'Какой максимальный размер WEBM?', a: 'До 25 МБ. Для более крупных записей сначала извлеките аудиодорожку, чтобы уменьшить размер.' },
      ]}
      relatedLinks={[
        { href: '/ru/transcribe-video-to-text', label: 'Видео в текст' },
        { href: '/ru/wav-to-text', label: 'WAV в текст' },
        { href: '/ru', label: 'Все форматы' },
      ]}
    />
  )
}
