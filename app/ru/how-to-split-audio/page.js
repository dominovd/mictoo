const LANGS = {
  'en': 'https://mictoo.com/how-to-split-audio',
  'fr': 'https://mictoo.com/fr/how-to-split-audio',
  'de': 'https://mictoo.com/de/how-to-split-audio',
  'es': 'https://mictoo.com/es/how-to-split-audio',
  'ru': 'https://mictoo.com/ru/how-to-split-audio',
  'it': 'https://mictoo.com/it/how-to-split-audio',
  'pt': 'https://mictoo.com/pt/how-to-split-audio',
  'pl': 'https://mictoo.com/pl/how-to-split-audio',
  'ja': 'https://mictoo.com/ja/how-to-split-audio',
  'ko': 'https://mictoo.com/ko/how-to-split-audio',
  'x-default': 'https://mictoo.com/how-to-split-audio',
}

export const metadata = {
  title: 'Как разделить длинное аудио для расшифровки — Бесплатные способы | Mictoo',
  description: 'Три бесплатных способа разделить длинную запись на короткие части для расшифровки: онлайн-инструменты, Audacity или ffmpeg. Работает с MP3, M4A, WAV, MP4 и другими форматами.',
  alternates: { canonical: 'https://mictoo.com/ru/how-to-split-audio', languages: LANGS },
}

export default function RuHowToSplitAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Как разделить длинное аудио для расшифровки</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Mictoo расшифровывает файлы до <strong>30 минут</strong> для гостей и
        <strong> 60 минут</strong> для зарегистрированных пользователей. Если ваша запись длиннее,
        самое чистое решение — разделить её на две или три короткие части и расшифровать
        каждую отдельно. Ниже три бесплатных способа сделать это — выберите тот, что подходит вашему файлу и навыкам.
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Способ 1 — Онлайн-инструменты (без установки)</h2>
          <p className="mb-4">
            Самый быстрый вариант для разового разделения. Загрузите файл, выставьте начало и конец,
            скачайте часть. Повторите для каждого сегмента.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://mp3cut.net/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">mp3cut.net</a> — загрузите файл, двигайте маркеры начала и конца, нажмите Cut, скачайте. Работает прямо в браузере.</li>
            <li><a href="https://clideo.com/cut-audio" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Clideo Cut Audio</a> — чистый интерфейс, поддерживает MP3, M4A, WAV, FLAC, OGG и видеофайлы.</li>
            <li><a href="https://online-audio-converter.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Online Audio Converter</a> — справляется с длинными файлами и позволяет пакетно экспортировать сегменты.</li>
          </ul>

          <p className="mt-3 text-xs text-slate-500">
            Совет: режьте на естественной паузе (между предложениями или сменой говорящих),
            чтобы при склейке транскрипт читался плавно.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Способ 2 — Audacity (бесплатное приложение)</h2>
          <p className="mb-4">
            Лучший вариант для точности, особенно если в записи есть тишина или паузы,
            на которых хочется разделить. Audacity — бесплатный и open-source, для macOS, Windows и Linux.
          </p>

          <ol className="list-decimal pl-5 space-y-1">
            <li>Скачайте <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> и откройте аудиофайл.</li>
            <li>Используйте <strong>File → Import → Audio</strong> если нужно. Audacity читает MP3, M4A, WAV, FLAC, OGG и многое другое.</li>
            <li>Кликните на волну в точке разделения (Ctrl/Cmd+B чтобы поставить метку, или выделите регион для одной части).</li>
            <li>Выберите <strong>File → Export → Export Selected Audio</strong> и сохраните первую часть как MP3 или WAV.</li>
            <li>Выделите следующий регион, экспортируйте, повторите.</li>
          </ol>

          <p className="mt-3 text-xs text-slate-500">
            Для длинных записей инструмент <strong>Analyze → Sound Finder</strong> в Audacity находит тихие
            регионы автоматически — удобно резать подкасты или интервью на естественных паузах.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Способ 3 — Командная строка (ffmpeg)</h2>
          <p className="mb-4">
            Одна команда режет весь файл на равные части. Без перекодирования, поэтому мгновенно
            даже на 2-часовой записи. Подходит, если ffmpeg уже установлен.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Разделить на 25-минутные части</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1500 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">1500</code> — длительность сегмента в секундах (25 минут).
            Файлы на выходе будут <code className="font-mono">part_001.mp3</code>,{' '}
            <code className="font-mono">part_002.mp3</code> и т.д. Флаг{' '}
            <code className="font-mono">-c copy</code> избегает перекодирования — быстро и без потерь.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Вырезать конкретный диапазон</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -ss 00:00:00 -t 00:25:00 -c copy part1.mp4
ffmpeg -i input.mp4 -ss 00:25:00 -t 00:25:00 -c copy part2.mp4`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ss</code> — время старта, <code className="font-mono">-t</code>{' '}
            — длительность. Работает и для видеофайлов — аудиодорожка режется тем же способом.
          </p>

          <p className="mt-3">
            ffmpeg ещё не установлен? Поставьте через{' '}
            <a href="https://ffmpeg.org/download.html" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg.org/download</a>{' '}
            или через Homebrew на macOS: <code className="font-mono">brew install ffmpeg</code>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Как склеить транскрипты обратно</h2>
          <p className="mb-3">
            Расшифруйте каждую часть в Mictoo, потом вставьте результаты в один документ по порядку.
            Несколько советов для чистого итогового текста:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>По возможности режьте на паузе — слова не обрезаются пополам.</li>
            <li>Если разрез прошёл посреди предложения, первое слово следующей части может оказаться с заглавной буквы. Легко поправить в любом редакторе.</li>
            <li>Для SRT/VTT субтитров: прибавьте полную длительность предыдущей части ко всем таймкодам следующей. Find-and-replace или маленький скрипт справятся за секунды.</li>
            <li>AI-summary Mictoo работает лучше на едином транскрипте — сначала склейте части, потом запустите summary заново на объединённом тексте.</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Всё готово?</h2>
          <p className="mb-4">
            Когда каждая часть будет в пределах лимита по длительности, вернитесь на главную и загружайте их по одной.
          </p>
          <a href="/ru" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Назад к расшифровке
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Больше руководств по расшифровке</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/ru/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Как сжать аудио</a>
          <a href="/ru/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3 в текст</a>
          <a href="/ru/podcast-transcription" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Расшифровка подкастов</a>
          <a href="/ru" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Все форматы</a>
        </div>
      </div>
    </section>
  )
}
