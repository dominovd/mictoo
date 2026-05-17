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
  title: 'Cómo convertir WMA a MP3 — métodos gratis (2026) | Mictoo',
  description: "Convierte WMA (Windows Media Audio) a MP3 gratis. Convertidores online, VLC, Audacity y ffmpeg — elige el que te encaje. Después transcribe el MP3 a texto con Mictoo.",
  alternates: { canonical: 'https://mictoo.com/es/wma-to-mp3', languages: LANGS },
}

export default function EsWmaToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Cómo convertir WMA a MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        WMA (Windows Media Audio) fue el formato por defecto de Microsoft en los 2000 para grabadoras Windows y rips de Windows Media Player. Funciona en Windows, pero es incómodo casi en cualquier otro sitio — móviles modernos, herramientas web y motores de transcripción no suelen aceptarlo. MP3 es el reemplazo universal. Aquí cuatro formas gratis de convertir.
      </p>

      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700">
          <strong>Por qué convertir:</strong> Mictoo (y la mayoría de las herramientas modernas de transcripción) no lee WMA directamente — usa un códec propietario. Necesitas convertir primero a MP3, M4A o WAV. El resultado MP3 será un poco más pequeño y se reproduce en cualquier sitio.
        </p>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 1 — Convertidor online (sin instalación)</h2>
          <p className="mb-4">
            El camino más fácil si tu archivo pesa menos de ~200 MB y la grabación no es sensible. Arrastra, suelta, descarga — normalmente 5–15 segundos:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://cloudconvert.com/wma-to-mp3" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">CloudConvert</a> — soporta hasta 1 GB gratis.</li>
            <li><a href="https://convertio.co/wma-mp3/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Convertio</a> — subida por lotes, calidad MP3 seleccionable.</li>
            <li><a href="https://www.freeconvert.com/wma-to-mp3" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">FreeConvert</a> — opciones avanzadas para bitrate y canales.</li>
            <li><a href="https://www.media.io/convert/wma-to-mp3.html" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Media.io</a> — rápido, interfaz limpia.</li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            Privacidad: para grabaciones confidenciales (entrevistas, llamadas de negocio, médico) prefiere los métodos de escritorio — tu audio nunca sale de tu equipo.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 2 — VLC (Windows / macOS / Linux)</h2>

          <img
            src="/svg/vlc-convert-dialog.svg"
            alt="Diálogo Convertir de VLC: origen recording.wma, perfil Audio – MP3, archivo destino .mp3, botón Iniciar."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={300}
          />

          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> es gratis y lee WMA de forma nativa en todos los sistemas. Conversión en cuatro clics:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Abre VLC. Haz clic en <strong>Medio → Convertir / Guardar</strong>.</li>
            <li>Añade tu archivo <code className="font-mono">.wma</code>, haz clic en <strong>Convertir / Guardar</strong> otra vez.</li>
            <li>En <strong>Perfil</strong> elige <code className="font-mono">Audio - MP3</code>.</li>
            <li>Elige un destino acabado en <code className="font-mono">.mp3</code> y haz clic en <strong>Iniciar</strong>.</li>
          </ol>
          <p className="mt-3">Listo. La barra de progreso al pie de VLC se convierte en el medidor de conversión.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 3 — Audacity (gratis, todas las plataformas)</h2>
          <p className="mb-3">
            <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> es útil si también quieres limpiar el audio (recortar silencios, subir una voz baja, quitar zumbidos) antes de transcribir.
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>Archivo → Importar → Audio</strong> → elige el <code className="font-mono">.wma</code></li>
            <li>(Opcional) edita, normaliza, reduce ruido.</li>
            <li><strong>Archivo → Exportar → Exportar como MP3</strong>. Elige mono y 64–96 kbps para voz.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 4 — Línea de comandos (ffmpeg)</h2>
          <p className="mb-4">
            Una línea con <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a>:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.wma -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Para voz/transcripción baja a <code className="font-mono">-ab 64k -ac 1</code> (mono, 64 kbps) — misma precisión, archivo 2–3× más pequeño.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">¿Listo el MP3?</h2>
          <p className="mb-4">
            Suéltalo en Mictoo para una transcripción gratis — funciona con 50+ idiomas, devuelve marcas de tiempo, subtítulos SRT y resumen IA. Sin registro.
          </p>
          <a href="/es" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Transcribir MP3 a texto gratis
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Guías relacionadas</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/es/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC a MP3</a>
          <a href="/es/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A a MP3</a>
          <a href="/es/transcribe-audio-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Transcribir audio</a>
          <a href="/es/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Comprimir audio</a>
        </div>
      </div>
    </section>
  )
}
