const LANGS = {
  'en': 'https://mictoo.com/wma-to-mp3',
  'fr': 'https://mictoo.com/fr/wma-to-mp3',
  'de': 'https://mictoo.com/de/wma-to-mp3',
  'es': 'https://mictoo.com/es/wma-to-mp3',
  'ru': 'https://mictoo.com/ru/wma-to-mp3',
  'it': 'https://mictoo.com/it/wma-to-mp3',
  'pt': 'https://mictoo.com/pt/wma-to-mp3',
  'pl': 'https://mictoo.com/pl/wma-to-mp3',
  'ja': 'https://mictoo.com/ja/wma-to-mp3',
  'ko': 'https://mictoo.com/ko/wma-to-mp3',
  'x-default': 'https://mictoo.com/wma-to-mp3',
}

export const metadata = {
  title: 'Как конвертировать WMA в MP3 — бесплатные способы (2026) | Mictoo',
  description: "Конвертируйте WMA (Windows Media Audio) в MP3 бесплатно. Онлайн-конвертеры, VLC, Audacity и ffmpeg — выберите подходящий. Затем транскрибируйте MP3 в текст с Mictoo.",
  alternates: { canonical: 'https://mictoo.com/ru/wma-to-mp3', languages: LANGS },
}

export default function RuWmaToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Как конвертировать WMA в MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        WMA (Windows Media Audio) был стандартным форматом Microsoft в 2000-х для Windows-диктофонов и записей в Windows Media Player. Он работает на Windows, но почти везде остальное вызывает проблемы — современные телефоны, веб-инструменты и движки транскрипции его обычно не принимают. MP3 — универсальная замена. Вот четыре бесплатных способа конвертации.
      </p>

      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700">
          <strong>Зачем конвертировать:</strong> Mictoo (и большинство современных инструментов транскрипции) не читает WMA напрямую — это проприетарный кодек. Сначала нужно сконвертировать в MP3, M4A или WAV. MP3 будет чуть меньше по размеру и воспроизводится везде.
        </p>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Способ 1 — Онлайн-конвертер (без установки)</h2>
          <p className="mb-4">
            Самый простой путь, если файл до ~200 МБ и запись не конфиденциальная. Перетащить, отпустить, скачать — обычно 5–15 секунд:
          </p>
          <p className="text-xs text-slate-500 mt-3">
            Конфиденциальность: для чувствительных записей (интервью, деловые звонки, медицина) используйте десктоп-методы ниже — аудио никогда не покидает ваш компьютер.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Способ 2 — VLC (Windows / macOS / Linux)</h2>

          <img
            src="/svg/vlc-convert-dialog.svg"
            alt="Диалог Конвертирования VLC: источник recording.wma, профиль Audio – MP3, файл назначения .mp3, кнопка Старт."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={300}
          />

          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> бесплатен и читает WMA нативно на всех системах. Конвертация в четыре клика:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Откройте VLC. Нажмите <strong>Медиа → Конвертировать / Сохранить</strong>.</li>
            <li>Добавьте файл <code className="font-mono">.wma</code>, нажмите <strong>Конвертировать / Сохранить</strong> ещё раз.</li>
            <li>В <strong>Профиль</strong> выберите <code className="font-mono">Audio - MP3</code>.</li>
            <li>Укажите файл назначения с <code className="font-mono">.mp3</code> и нажмите <strong>Старт</strong>.</li>
          </ol>
          <p className="mt-3">Готово. Полоса прогресса внизу VLC превращается в индикатор конвертации.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Способ 3 — Audacity (бесплатно, все платформы)</h2>
          <p className="mb-3">
            <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> удобен, если хочется также почистить аудио (обрезать тишину, поднять тихий голос, убрать фоновый гул) перед транскрипцией.
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>Файл → Импорт → Аудио</strong> → выберите <code className="font-mono">.wma</code></li>
            <li>(Опционально) отредактируйте, нормализуйте, уберите шум.</li>
            <li><strong>Файл → Экспорт → Экспорт в MP3</strong>. Выберите моно и 64–96 кбит/с для речи.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Способ 4 — Командная строка (ffmpeg)</h2>
          <p className="mb-4">
            Одна строка с <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a>:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.wma -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Для голоса/транскрипции снизьте до <code className="font-mono">-ab 64k -ac 1</code> (моно, 64 кбит/с) — та же точность, файл в 2–3 раза меньше.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">MP3 готов?</h2>
          <p className="mb-4">
            Перетащите его в Mictoo и получите бесплатную транскрипцию — работает на 50+ языках, возвращает тайм-коды, SRT-субтитры и AI-конспект. Без регистрации.
          </p>
          <a href="/ru" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Бесплатно транскрибировать MP3 в текст
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Связанные руководства</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/ru/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC в MP3</a>
          <a href="/ru/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A в MP3</a>
          <a href="/ru/transcribe-audio-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Транскрибировать аудио</a>
          <a href="/ru/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Сжать аудио</a>
        </div>
      </div>
    </section>
  )
}
