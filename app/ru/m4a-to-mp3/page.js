const LANGS = {
  'en': 'https://mictoo.com/m4a-to-mp3',
  'fr': 'https://mictoo.com/fr/m4a-to-mp3',
  'de': 'https://mictoo.com/de/m4a-to-mp3',
  'es': 'https://mictoo.com/es/m4a-to-mp3',
  'ru': 'https://mictoo.com/ru/m4a-to-mp3',
  'it': 'https://mictoo.com/it/m4a-to-mp3',
  'pt': 'https://mictoo.com/pt/m4a-to-mp3',
  'pl': 'https://mictoo.com/pl/m4a-to-mp3',
  'ja': 'https://mictoo.com/ja/m4a-to-mp3',
  'ko': 'https://mictoo.com/ko/m4a-to-mp3',
  'x-default': 'https://mictoo.com/m4a-to-mp3',
}

export const metadata = {
  title: 'Как конвертировать M4A в MP3 — бесплатные способы (или пропустить) | Mictoo',
  description: "Конвертируйте M4A в MP3 за секунды бесплатными онлайн-инструментами, QuickTime, VLC или ffmpeg. К сведению: большинство приложений (включая Mictoo) принимают M4A напрямую — возможно, конвертация и не нужна.",
  alternates: { canonical: 'https://mictoo.com/ru/m4a-to-mp3', languages: LANGS },

  openGraph: {
    title: "Как конвертировать M4A в MP3 — бесплатные способы (или пропустить) | Mictoo",
    description: "Конвертируйте M4A в MP3 за секунды бесплатными онлайн-инструментами, QuickTime, VLC или ffmpeg. К сведению: большинство приложений (включая Mictoo) принимают M4A напрямую — возможно, конвертация и не нужна.",
    url: "https://mictoo.com/ru/m4a-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Как конвертировать M4A в MP3 — бесплатные способы (или пропустить) | Mictoo",
    description: "Конвертируйте M4A в MP3 за секунды бесплатными онлайн-инструментами, QuickTime, VLC или ffmpeg. К сведению: большинство приложений (включая Mictoo) принимают M4A напрямую — возможно, конвертация и не нужна.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function RuM4aToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Как конвертировать M4A в MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        M4A — стандартный аудиоформат голосовых заметок iPhone, загрузок Apple Podcasts и большинства приложений записи на macOS. MP3 универсальнее, но в 2026 году удивительно много инструментов принимают M4A напрямую — почти все браузеры, аудиоредакторы, подкаст-приложения и сервисы транскрипции. Здесь — когда конвертация действительно нужна, и самые быстрые бесплатные способы.
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>Скорее всего, конвертировать не нужно.</strong> M4A и MP3 имеют очень похожее качество звука. Современные приложения, читающие MP3, почти всегда читают и M4A. Конкретно:
        </p>
        <ul className="text-sm text-slate-700 list-disc pl-5 mt-2 space-y-1">
          <li><strong>Транскрипция:</strong> Mictoo принимает <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.m4a</code> напрямую — перетащите файл и получите текст. Без конвертации.</li>
          <li><strong>Аудиоредактирование:</strong> Audacity, GarageBand, Logic, Premiere, DaVinci Resolve — все читают M4A.</li>
          <li><strong>Стриминг/воспроизведение:</strong> Spotify, Apple Music, YouTube Music, любой современный браузер и ОС играют M4A.</li>
        </ul>
        <p className="text-sm text-slate-700 mt-3">
          MP3 реально нужен только когда целевое приложение явно говорит «только MP3» — некоторые старые автомагнитолы, фитнес-оборудование, простые диктофоны или старое ПО.
        </p>
        <a href="/ru" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline mt-3">
          ↑ Попробуйте транскрибировать .m4a напрямую с Mictoo
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <p className="-mb-6 text-slate-700">
          <strong>Всё-таки нужен MP3?</strong> Выберите способ ниже, который подходит вашему сетапу. Все бесплатны.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Способ 1 — Онлайн-конвертер</h2>
          <p className="mb-4">
            Перетащить, отпустить, скачать — обычно меньше 10 секунд для типичной голосовой заметки:
          </p>
          <p className="text-xs text-slate-500 mt-3">
            Конфиденциальность: онлайн-инструменты загружают файл. Пропустите их для конфиденциальных записей — используйте десктоп-метод.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Способ 2 — macOS (без установки)</h2>

          <img
            src="/svg/macos-music-convert.svg"
            alt="Приложение Музыка macOS: нажмите Файл в строке меню, наведите на Конвертировать в выпадающем списке, затем выберите Создать версию в MP3."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={280}
          />

          <p className="mb-3">
            <strong>Приложение Музыка:</strong> Перетащите <code className="font-mono">.m4a</code> в Музыку, выделите, затем <strong>Файл → Конвертировать → Создать MP3-версию</strong>. MP3 появится рядом с оригиналом.
          </p>
          <p className="mb-3">
            <strong>QuickTime Player:</strong> Откройте файл → <strong>Файл → Экспортировать как → Только аудио</strong>. QuickTime экспортирует в M4A по умолчанию; объедините с VLC или Audacity ниже, если нужен именно MP3.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Способ 3 — VLC (кроссплатформенно)</h2>
          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> на Windows/macOS/Linux:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Откройте VLC → <strong>Медиа → Конвертировать / Сохранить</strong>.</li>
            <li>Добавьте файл <code className="font-mono">.m4a</code>, нажмите <strong>Конвертировать / Сохранить</strong>.</li>
            <li>Выберите профиль <code className="font-mono">Audio - MP3</code>.</li>
            <li>Укажите файл назначения с <code className="font-mono">.mp3</code>, нажмите <strong>Старт</strong>.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Способ 4 — Командная строка (ffmpeg)</h2>
          <p className="mb-4">
            Одна строка с <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a>:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.m4a -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Для голоса/транскрипции используйте <code className="font-mono">-ab 64k -ac 1</code> — файл в 2–3 раза меньше без потери качества для речи.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Нужна транскрипция?</h2>
          <p className="mb-4">
            И M4A, и MP3 работают в Mictoo напрямую. Перетащите файл, получите текст с тайм-кодами, SRT-субтитрами и AI-конспектом — бесплатно, без регистрации.
          </p>
          <a href="/ru" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Бесплатно транскрибировать аудио в текст
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Связанные руководства</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/ru/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC в MP3</a>
          <a href="/ru/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMA в MP3</a>
          <a href="/ru/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A в текст</a>
          <a href="/ru/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Сжать аудио</a>
        </div>
      </div>
    </section>
  )
}
