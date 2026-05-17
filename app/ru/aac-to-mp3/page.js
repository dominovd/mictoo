const LANGS = {
  'en': 'https://mictoo.com/aac-to-mp3',
  'fr': 'https://mictoo.com/fr/aac-to-mp3',
  'de': 'https://mictoo.com/de/aac-to-mp3',
  'es': 'https://mictoo.com/es/aac-to-mp3',
  'ru': 'https://mictoo.com/ru/aac-to-mp3',
  'it': 'https://mictoo.com/it/aac-to-mp3',
  'pt': 'https://mictoo.com/pt/aac-to-mp3',
  'pl': 'https://mictoo.com/pl/aac-to-mp3',
  'ja': 'https://mictoo.com/ja/aac-to-mp3',
  'ko': 'https://mictoo.com/ko/aac-to-mp3',
  'x-default': 'https://mictoo.com/aac-to-mp3',
}

export const metadata = {
  title: 'Как конвертировать AAC в MP3 — бесплатные способы (2026) | Mictoo',
  description: "Конвертируйте AAC в MP3 бесплатно. Три быстрых способа — онлайн-конвертер, QuickTime/VLC или ffmpeg в командной строке. Совет: Mictoo транскрибирует большинство AAC-файлов напрямую, без конвертации.",
  alternates: { canonical: 'https://mictoo.com/ru/aac-to-mp3', languages: LANGS },
}

export default function RuAacToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Как конвертировать AAC в MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        AAC (Advanced Audio Coding) — стандартный формат голосовых заметок iPhone, диктофонов Android и аудиодорожки в MP4-видео. MP3 более универсален и работает со всеми плеерами, редакторами и инструментами транскрипции. Ниже — три бесплатных способа плюс короткое уточнение, нужна ли конвертация вообще.
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>Перед конвертацией:</strong> если ваша цель — транскрипция, Mictoo принимает большинство AAC-файлов напрямую, включая <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.aac</code>-файлы внутри MP4-контейнеров (голосовые заметки iPhone, экспорт через «Поделиться», большинство Android-диктофонов). Сначала попробуйте загрузить; конвертировать нужно, только если файл отклонён.
        </p>
        <a href="/ru" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline">
          ↑ Транскрибировать .aac напрямую
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Способ 1 — Онлайн-конвертер (без установки)</h2>

          <img
            src="/svg/online-converter-3step.svg"
            alt="Три шага: перетащить AAC-файл, выбрать MP3 как формат вывода, скачать результат."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={240}
          />

          <p className="mb-4">
            Самый быстрый вариант для файлов до ~200 МБ. Перетащите в браузер, получите MP3 за пару секунд. Все работают без регистрации:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://cloudconvert.com/aac-to-mp3" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">CloudConvert</a> — чистый интерфейс, поддерживает пакетную обработку.</li>
            <li><a href="https://convertio.co/aac-mp3/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Convertio</a> — быстрый, можно выбрать качество MP3.</li>
            <li><a href="https://online-audio-converter.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Online Audio Converter</a> — позволяет выбрать моно/64 кбит/с для транскрипции.</li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            Конфиденциальность: онлайн-конвертеры загружают файл на свои серверы. Для чувствительных записей (медицина, юридические, деловые звонки) используйте десктоп-методы ниже.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Способ 2 — Десктоп-приложения (офлайн)</h2>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">macOS — QuickTime + iMovie</h3>
          <p className="mb-2">
            QuickTime открывает AAC. Используйте <strong>Файл → Экспортировать как → Только аудио</strong> и выберите MP3 в диалоге. Встроен в каждый Mac.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Windows / macOS / Linux — Audacity (бесплатно)</h3>
          <p>
            Откройте AAC-файл в <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a>, затем <strong>Файл → Экспорт → Экспорт в MP3</strong>. Выберите моно и 64–96 кбит/с для голоса.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Кроссплатформенно — VLC</h3>
          <p>
            VLC конвертирует через <strong>Медиа → Конвертировать / Сохранить</strong>. Добавьте .aac, выберите профиль <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded mx-1">Audio - MP3</code>, укажите назначение, нажмите Старт.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Способ 3 — Командная строка (ffmpeg)</h2>
          <p className="mb-4">
            Одна строка, если установлен <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a>:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.aac -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Для голоса/транскрипции снизьте до <code className="font-mono">-ab 64k -ac 1</code> — файл в 2–3 раза меньше без потери точности.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">MP3 готов?</h2>
          <p className="mb-4">
            Перетащите его в Mictoo и получите бесплатную транскрипцию с тайм-кодами, SRT-субтитрами и AI-конспектом. Регистрация не нужна.
          </p>
          <a href="/ru" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Бесплатно транскрибировать MP3 в текст
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Связанные руководства</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/ru/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMA в MP3</a>
          <a href="/ru/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A в MP3</a>
          <a href="/ru/aac-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC в текст</a>
          <a href="/ru/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Сжать аудио</a>
        </div>
      </div>
    </section>
  )
}
