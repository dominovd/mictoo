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
  title: 'Cómo convertir AAC a MP3 — métodos gratis (2026) | Mictoo',
  description: "Convierte archivos AAC a MP3 gratis. Tres formas rápidas: convertidor online, QuickTime/VLC o ffmpeg por línea de comandos. Además: Mictoo transcribe la mayoría de archivos AAC directamente, sin convertir.",
  alternates: { canonical: 'https://mictoo.com/es/aac-to-mp3', languages: LANGS },
}

export default function EsAacToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Cómo convertir AAC a MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        AAC (Advanced Audio Coding) es el formato por defecto de las notas de voz del iPhone, grabadoras Android y el audio dentro del vídeo MP4. MP3 es más universal y funciona con cualquier reproductor, editor y herramienta de transcripción. Abajo — tres formas gratis y una nota rápida sobre si realmente necesitas convertir.
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>Antes de convertir:</strong> si tu objetivo es transcribir, Mictoo acepta la mayoría de archivos AAC directamente — incluidos archivos <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.aac</code> dentro de contenedores MP4 (notas de voz iPhone, exportaciones del menú compartir, casi todas las grabadoras Android). Prueba primero; solo necesitas convertir si rechaza el archivo.
        </p>
        <a href="/es" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline">
          ↑ Transcribir el .aac directamente
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 1 — Convertidor online (sin instalación)</h2>

          <img
            src="/svg/online-converter-3step.svg"
            alt="Tres pasos: suelta el archivo AAC, elige MP3 como formato de salida, descarga el resultado."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={240}
          />

          <p className="mb-4">
            El más rápido si tu archivo pesa menos de ~200 MB. Arrastra en el navegador, recibe el MP3 en segundos. Todos sin registro:
          </p>
          <p className="text-xs text-slate-500 mt-3">
            Privacidad: los convertidores online suben tu archivo a sus servidores. Para grabaciones sensibles (médicas, legales, llamadas de negocio) usa un método de escritorio.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 2 — Aplicaciones de escritorio (sin conexión)</h2>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">macOS — QuickTime + iMovie</h3>
          <p className="mb-2">
            QuickTime abre archivos AAC. Usa <strong>Archivo → Exportar como → Solo audio</strong> y elige MP3 en el diálogo. Viene en todos los Mac.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Windows / macOS / Linux — Audacity (gratis)</h3>
          <p>
            Abre el archivo AAC en <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a>, luego <strong>Archivo → Exportar → Exportar como MP3</strong>. Elige mono y 64–96 kbps si el audio es de voz.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Multiplataforma — VLC</h3>
          <p>
            VLC convierte vía <strong>Medio → Convertir / Guardar</strong>. Añade el .aac, elige el perfil <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded mx-1">Audio - MP3</code>, selecciona destino y pulsa Iniciar.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 3 — Línea de comandos (ffmpeg)</h2>
          <p className="mb-4">
            Una línea con <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a> instalado:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.aac -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Para voz/transcripción baja a <code className="font-mono">-ab 64k -ac 1</code> — archivo 2–3× más pequeño sin perder precisión.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">¿Listo el MP3?</h2>
          <p className="mb-4">
            Suéltalo en Mictoo para obtener una transcripción gratis con marcas de tiempo, subtítulos SRT y resumen IA. Sin registro.
          </p>
          <a href="/es" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Transcribir MP3 a texto gratis
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Guías relacionadas</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/es/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMA a MP3</a>
          <a href="/es/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A a MP3</a>
          <a href="/es/aac-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC a texto</a>
          <a href="/es/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Comprimir audio</a>
        </div>
      </div>
    </section>
  )
}
