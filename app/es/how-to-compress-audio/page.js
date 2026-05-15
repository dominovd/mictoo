const LANGS = {
  'en': 'https://mictoo.com/how-to-compress-audio',
  'fr': 'https://mictoo.com/fr/how-to-compress-audio',
  'de': 'https://mictoo.com/de/how-to-compress-audio',
  'es': 'https://mictoo.com/es/how-to-compress-audio',
  'ru': 'https://mictoo.com/ru/how-to-compress-audio',
  'x-default': 'https://mictoo.com/how-to-compress-audio',
}

export const metadata = {
  title: 'Cómo comprimir audio para transcripción — Métodos gratis | Mictoo',
  description: 'Tres formas gratis de reducir un archivo de audio o vídeo por debajo de 25 MB para transcripción: extraer el audio, bajar el bitrate o dividir el archivo. Sin instalar software.',
  alternates: { canonical: 'https://mictoo.com/es/how-to-compress-audio', languages: LANGS },
}

export default function EsHowToCompressAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Cómo comprimir audio para la transcripción</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Mictoo acepta archivos de hasta <strong>25 MB</strong> gratis. Si tu archivo es más grande, aquí tienes
        tres formas rápidas de reducirlo sin perder calidad de transcripción. Elige la que se ajuste
        a tu archivo y tus conocimientos.
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 1 — Extraer el audio de un archivo de vídeo</h2>
          <p className="mb-4">
            Si tienes un vídeo (MP4, WEBM, MOV) que es principalmente voz, la pista de audio
            suele ser 5-10× más pequeña que el vídeo. Mictoo solo necesita el audio — el vídeo
            no ayuda a la transcripción. Es la solución más rápida para la mayoría.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Online (sin instalar nada)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://convertio.co/mp4-mp3/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Convertio</a> — suelta el MP4, elige MP3 o M4A, descarga.</li>
            <li><a href="https://cloudconvert.com/mp4-to-mp3" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">CloudConvert</a> — soporta MP4 → MP3 / M4A / WAV.</li>
            <li><a href="https://www.media.io/audio-converter.html" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Media.io</a> — conversión rápida en el navegador.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Línea de comandos (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -vn -acodec copy output.m4a`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-vn</code> quita el vídeo, <code className="font-mono">-acodec copy</code> mantiene la calidad del audio intacta. Rápido — sin re-codificación.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 2 — Bajar el bitrate de audio</h2>
          <p className="mb-4">
            La mayoría de podcasts y reuniones se graban a 128-192 kbps. Para transcripción, 64 kbps mono
            es más que suficiente — la precisión es la misma y el archivo se reduce 2-3×. Es la mejor
            opción para archivos de audio largos.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Online</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://online-audio-converter.com/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Online Audio Converter</a> — pon el deslizador de calidad a 64 kbps, mono.</li>
            <li><a href="https://www.freeconvert.com/audio-compressor" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">FreeConvert Audio Compressor</a> — elige el tamaño objetivo.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Línea de comandos (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -ac 1 -b:a 64k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ac 1</code> convierte a mono (la voz va bien en mono),
            <code className="font-mono">-b:a 64k</code> fija el bitrate de audio a 64 kbps.
          </p>
          <p className="mt-3"><strong>Cuenta rápida:</strong> 64 kbps da ~28 MB por hora. Una entrevista de 1 hora entra en unos 28 MB — cerca del límite. Baja a <code className="font-mono">-b:a 48k</code> para ~21 MB/hora sin pérdida notable de precisión.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 3 — Dividir en partes más cortas</h2>
          <p className="mb-4">
            Si necesitas mantener la calidad original (legal, médico, archivo), divide el archivo
            en trozos de 20-25 minutos y transcribe cada uno por separado. Luego une las transcripciones
            en cualquier editor de texto.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Online</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://mp3cut.net/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">mp3cut.net</a> — suelta MP3, marca inicio/fin, descarga.</li>
            <li><a href="https://clideo.com/cut-audio" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Clideo Cut Audio</a> — UI limpia, soporta la mayoría de formatos.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Línea de comandos (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1200 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Divide la entrada en partes de 20 minutos (<code className="font-mono">1200</code> segundos) llamadas <code className="font-mono">part_001.mp3</code>, <code className="font-mono">part_002.mp3</code>, etc. Luego sube cada una a Mictoo.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">¿Listo?</h2>
          <p className="mb-4">
            Cuando tu archivo esté bajo 25 MB, vuelve a la página principal y suéltalo en la herramienta de transcripción.
          </p>
          <a href="/es" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Volver a la transcripción
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Más herramientas de transcripción</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/es/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3 a texto</a>
          <a href="/es/transcribe-video-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Vídeo a texto</a>
          <a href="/es/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A a texto</a>
          <a href="/es" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Todos los formatos</a>
        </div>
      </div>
    </section>
  )
}
