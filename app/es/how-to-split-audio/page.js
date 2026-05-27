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
  title: 'Cómo dividir un audio largo para la transcripción — Métodos gratuitos | Mictoo',
  description: 'Tres formas gratuitas de dividir una grabación larga en partes más cortas para la transcripción: herramientas online, Audacity o ffmpeg. Funciona con MP3, M4A, WAV, MP4 y más.',
  alternates: { canonical: 'https://mictoo.com/es/how-to-split-audio', languages: LANGS },
}

export default function EsHowToSplitAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Cómo dividir un audio largo para la transcripción</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Mictoo transcribe archivos de hasta <strong>30 minutos</strong> para usuarios anónimos y
        <strong> 60 minutos</strong> cuando inicias sesión. Si tu grabación es más larga, la solución
        más limpia es dividirla en dos o tres partes más cortas y transcribir cada una por separado.
        Abajo hay tres formas gratuitas de hacerlo — elige la que se adapte a tu archivo y a tus conocimientos.
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 1 — Herramientas online (sin instalar nada)</h2>
          <p className="mb-4">
            La opción más rápida para una división puntual. Arrastra el archivo, define inicio/fin, descarga el trozo. Repite por cada segmento.
          </p>


          <p className="mt-3 text-xs text-slate-500">
            Consejo: corta en una pausa natural (entre frases o cambios de orador)
            para que la transcripción se lea con fluidez al unir las partes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 2 — Audacity (aplicación gratuita)</h2>
          <p className="mb-4">
            La mejor opción para precisión, sobre todo si tu grabación tiene silencios o pausas donde quieres cortar.
            Audacity es gratuito y de código abierto para macOS, Windows y Linux.
          </p>

          <ol className="list-decimal pl-5 space-y-1">
            <li>Descarga <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> y abre tu archivo de audio.</li>
            <li>Usa <strong>Archivo → Importar → Audio</strong> si hace falta. Audacity lee MP3, M4A, WAV, FLAC, OGG y más.</li>
            <li>Haz clic en la onda en el punto de corte (Ctrl/Cmd+B para poner una marca, o selecciona la región para una parte).</li>
            <li>Elige <strong>Archivo → Exportar → Exportar audio seleccionado</strong> y guarda la primera parte como MP3 o WAV.</li>
            <li>Selecciona la siguiente región, exporta, repite.</li>
          </ol>

          <p className="mt-3 text-xs text-slate-500">
            Para grabaciones largas, la herramienta <strong>Analizar → Sound Finder</strong> de Audacity encuentra
            regiones silenciosas automáticamente — útil para cortar podcasts o entrevistas en pausas naturales.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 3 — Línea de comandos (ffmpeg)</h2>
          <p className="mb-4">
            Un solo comando divide el archivo entero en partes iguales. Sin recodificación, así que es instantáneo
            incluso en una grabación de 2 horas. Ideal si ya tienes ffmpeg instalado.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Dividir en partes de 25 minutos</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1500 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">1500</code> es la duración del segmento en segundos (25 min).
            Los archivos de salida serán <code className="font-mono">part_001.mp3</code>,{' '}
            <code className="font-mono">part_002.mp3</code>, etc. La opción{' '}
            <code className="font-mono">-c copy</code> evita la recodificación — sin pérdida y rápido.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Extraer un rango específico</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -ss 00:00:00 -t 00:25:00 -c copy part1.mp4
ffmpeg -i input.mp4 -ss 00:25:00 -t 00:25:00 -c copy part2.mp4`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ss</code> es el tiempo de inicio, <code className="font-mono">-t</code>{' '}
            es la duración. Funciona también para vídeo — la pista de audio se divide del mismo modo.
          </p>

          <p className="mt-3">
            ¿No tienes ffmpeg aún? Instala desde{' '}
            <a href="https://ffmpeg.org/download.html" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg.org/download</a>{' '}
            o con Homebrew en macOS: <code className="font-mono">brew install ffmpeg</code>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Volver a unir las transcripciones</h2>
          <p className="mb-3">
            Transcribe cada parte en Mictoo, luego pega los resultados en un solo documento por orden.
            Consejos rápidos para una transcripción final limpia:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Corta en una pausa cuando puedas — las palabras no quedan partidas a la mitad.</li>
            <li>Si el corte cae en medio de una frase, la primera palabra de la parte siguiente puede aparecer en mayúscula. Fácil de arreglar en cualquier editor.</li>
            <li>Para subtítulos SRT/VTT: suma la duración total de la parte anterior a cada marca de tiempo del siguiente archivo. Un buscar-y-reemplazar o un script pequeño lo resuelven en segundos.</li>
            <li>El resumen IA de Mictoo funciona mejor sobre una transcripción única — junta primero las partes y luego vuelve a ejecutar el resumen sobre el texto completo.</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">¿Todo listo?</h2>
          <p className="mb-4">
            Cuando cada parte esté por debajo del límite de duración, vuelve a la página de inicio y súbelas una a una.
          </p>
          <a href="/es" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Volver a la transcripción
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Más guías de transcripción</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/es/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Cómo comprimir audio</a>
          <a href="/es/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3 a texto</a>
          <a href="/es/podcast-transcription" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Transcripción de podcast</a>
          <a href="/es" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Todos los formatos</a>
        </div>
      </div>
    </section>
  )
}
