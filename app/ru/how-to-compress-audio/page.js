const LANGS = {
  'en': 'https://mictoo.com/how-to-compress-audio',
  'fr': 'https://mictoo.com/fr/how-to-compress-audio',
  'de': 'https://mictoo.com/de/how-to-compress-audio',
  'es': 'https://mictoo.com/es/how-to-compress-audio',
  'ru': 'https://mictoo.com/ru/how-to-compress-audio',
  'it': 'https://mictoo.com/it/how-to-compress-audio',
  'x-default': 'https://mictoo.com/how-to-compress-audio',
}

export const metadata = {
  title: 'Как сжать аудио для расшифровки — Бесплатные способы | Mictoo',
  description: 'Три бесплатных способа уменьшить аудио- или видеофайл до 25 МБ для расшифровки: извлечь аудио, снизить битрейт или разбить файл. Без установки софта.',
  alternates: { canonical: 'https://mictoo.com/ru/how-to-compress-audio', languages: LANGS },
}

export default function RuHowToCompressAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Как сжать аудио для расшифровки</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Mictoo принимает файлы до <strong>25 МБ</strong> бесплатно. Если ваш файл больше, вот три быстрых
        способа сжать его без потери качества расшифровки. Выберите тот, который подходит вашему файлу
        и навыкам.
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Способ 1 — Извлечь аудио из видеофайла</h2>
          <p className="mb-4">
            Если у вас видеофайл (MP4, WEBM, MOV), где в основном речь, аудиодорожка обычно
            в 5-10× меньше видео. Mictoo нужно только аудио — видео не помогает расшифровке.
            Это самый быстрый способ для большинства пользователей.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Онлайн (без установки)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://convertio.co/mp4-mp3/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Convertio</a> — загрузите MP4, выберите MP3 или M4A, скачайте.</li>
            <li><a href="https://cloudconvert.com/mp4-to-mp3" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">CloudConvert</a> — поддерживает MP4 → MP3 / M4A / WAV.</li>
            <li><a href="https://www.media.io/audio-converter.html" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Media.io</a> — быстрая конвертация в браузере.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Командная строка (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -vn -acodec copy output.m4a`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-vn</code> убирает видео, <code className="font-mono">-acodec copy</code> сохраняет качество аудио без изменений. Быстро — без перекодирования.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Способ 2 — Снизить битрейт аудио</h2>
          <p className="mb-4">
            Большинство подкастов и встреч записываются с битрейтом 128-192 kbps. Для расшифровки достаточно
            64 kbps моно — точность остаётся той же, а файл становится в 2-3× меньше. Лучший способ
            для длинных аудиофайлов.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Онлайн</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://online-audio-converter.com/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Online Audio Converter</a> — выставьте качество 64 kbps, моно.</li>
            <li><a href="https://www.freeconvert.com/audio-compressor" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">FreeConvert Audio Compressor</a> — выберите целевой размер.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Командная строка (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -ac 1 -b:a 64k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ac 1</code> превращает в моно (речь нормально звучит в моно),
            <code className="font-mono">-b:a 64k</code> устанавливает битрейт аудио на 64 kbps.
          </p>
          <p className="mt-3"><strong>Грубая прикидка:</strong> 64 kbps даёт ~28 МБ в час. Часовое интервью укладывается примерно в 28 МБ — близко к лимиту. Снизьте до <code className="font-mono">-b:a 48k</code> ради ~21 МБ/час без заметной потери точности.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Способ 3 — Разбить на короткие части</h2>
          <p className="mb-4">
            Если нужно сохранить исходное качество (юридические, медицинские, архивные записи), разбейте файл
            на куски по 20-25 минут и расшифруйте каждый отдельно. Потом объедините расшифровки в любом
            текстовом редакторе.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Онлайн</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://mp3cut.net/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">mp3cut.net</a> — загрузите MP3, выставьте начало/конец, скачайте.</li>
            <li><a href="https://clideo.com/cut-audio" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Clideo Cut Audio</a> — чистый интерфейс, поддерживает большинство форматов.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Командная строка (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1200 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Разбивает входной файл на 20-минутные части (<code className="font-mono">1200</code> секунд) с именами <code className="font-mono">part_001.mp3</code>, <code className="font-mono">part_002.mp3</code> и т.д. Потом загрузите каждую в Mictoo.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Всё готово?</h2>
          <p className="mb-4">
            Когда файл будет меньше 25 МБ, вернитесь на главную и загрузите его в инструмент расшифровки.
          </p>
          <a href="/ru" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Назад к расшифровке
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Больше инструментов расшифровки</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/ru/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3 в текст</a>
          <a href="/ru/transcribe-video-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Видео в текст</a>
          <a href="/ru/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A в текст</a>
          <a href="/ru" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Все форматы</a>
        </div>
      </div>
    </section>
  )
}
