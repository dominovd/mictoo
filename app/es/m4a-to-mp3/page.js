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
  title: 'Cómo convertir M4A a MP3 — métodos gratis (o sáltatelo) | Mictoo',
  description: "Convierte M4A a MP3 en segundos con herramientas online gratis, QuickTime, VLC o ffmpeg. Aviso: la mayoría de apps (incluido Mictoo) aceptan M4A directamente — puede que ni necesites convertir.",
  alternates: { canonical: 'https://mictoo.com/es/m4a-to-mp3', languages: LANGS },
}

export default function EsM4aToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Cómo convertir M4A a MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        M4A es el formato de audio por defecto para las notas de voz iPhone, descargas de Apple Podcasts y la mayoría de apps de grabación en macOS. MP3 es más universal, pero en 2026 un sorprendente número de herramientas acepta M4A directamente — incluidos casi todos los navegadores, editores de audio, apps de podcast y servicios de transcripción. Aquí cuándo realmente necesitas convertir, y las formas gratis más rápidas de hacerlo.
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>Probablemente no necesitas convertir.</strong> M4A y MP3 tienen calidad de audio muy similar. Las apps modernas que leen MP3 casi siempre leen M4A también. En concreto:
        </p>
        <ul className="text-sm text-slate-700 list-disc pl-5 mt-2 space-y-1">
          <li><strong>Transcripción:</strong> Mictoo acepta <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.m4a</code> directamente — suelta el archivo y obtén el texto. Sin convertir.</li>
          <li><strong>Edición de audio:</strong> Audacity, GarageBand, Logic, Premiere, DaVinci Resolve leen M4A.</li>
          <li><strong>Streaming/reproducción:</strong> Spotify, Apple Music, YouTube Music, cualquier navegador y SO moderno reproduce M4A.</li>
        </ul>
        <p className="text-sm text-slate-700 mt-3">
          Solo necesitas MP3 cuando la app destino dice explícitamente «solo MP3» — algunos autorradios antiguos, equipos de fitness, grabadoras básicas o software heredado.
        </p>
        <a href="/es" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline mt-3">
          ↑ Prueba a transcribir el .m4a directamente con Mictoo
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <p className="-mb-6 text-slate-700">
          <strong>¿Aún necesitas MP3?</strong> Elige el método de abajo que se ajuste a tu setup. Todos gratis.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 1 — Convertidor online</h2>
          <p className="mb-4">
            Arrastra, suelta, descarga — normalmente menos de 10 segundos para una nota de voz típica:
          </p>
          <p className="text-xs text-slate-500 mt-3">
            Privacidad: las herramientas online suben tu archivo. Sáltatelas para grabaciones confidenciales — usa un método de escritorio.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 2 — macOS (sin instalación)</h2>

          <img
            src="/svg/macos-music-convert.svg"
            alt="App Música de macOS: clic en Archivo en la barra de menú, pasa sobre Convertir, luego elige Crear versión MP3."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={280}
          />

          <p className="mb-3">
            <strong>App Música:</strong> Arrastra el <code className="font-mono">.m4a</code> a Música, selecciónalo, luego <strong>Archivo → Convertir → Crear versión MP3</strong>. El MP3 aparece junto al original.
          </p>
          <p className="mb-3">
            <strong>QuickTime Player:</strong> Abre el archivo → <strong>Archivo → Exportar como → Solo audio</strong>. QuickTime exporta en M4A por defecto, pero combínalo con VLC o Audacity abajo si necesitas MP3.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 3 — VLC (multiplataforma)</h2>
          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> en Windows/macOS/Linux:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Abre VLC → <strong>Medio → Convertir / Guardar</strong>.</li>
            <li>Añade el archivo <code className="font-mono">.m4a</code>, haz clic en <strong>Convertir / Guardar</strong>.</li>
            <li>Elige el perfil <code className="font-mono">Audio - MP3</code>.</li>
            <li>Elige destino en <code className="font-mono">.mp3</code>, pulsa <strong>Iniciar</strong>.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 4 — Línea de comandos (ffmpeg)</h2>
          <p className="mb-4">
            Una línea con <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a>:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.m4a -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Para voz/transcripción usa <code className="font-mono">-ab 64k -ac 1</code> — archivo 2–3× más pequeño sin pérdida de calidad en habla.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">¿Necesitas transcripción?</h2>
          <p className="mb-4">
            Tanto M4A como MP3 funcionan directamente en Mictoo. Suelta el archivo, obtén texto con marcas de tiempo, subtítulos SRT y resumen IA — gratis, sin registro.
          </p>
          <a href="/es" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Transcribir audio a texto gratis
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Guías relacionadas</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/es/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC a MP3</a>
          <a href="/es/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMA a MP3</a>
          <a href="/es/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A a texto</a>
          <a href="/es/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Comprimir audio</a>
        </div>
      </div>
    </section>
  )
}
