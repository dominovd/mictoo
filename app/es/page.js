// Mictoo homepage (ES).
//
// Rediseñado de un diseño funcional de una sola columna a una moderna
// página de inicio de SaaS con una cuadrícula de herramientas, vista previa
// de resultados en vivo, segmentación de audiencia, tabla de comparación,
// y una placa CTA en la parte inferior. Adaptado del mockup proporcionado
// con los siguientes cambios deliberados:
//   - paleta de marca (azul de marca) en lugar del azul predeterminado del mockup
//   - encabezado y pie de página existentes mantenidos (renderizados por layout.js)
//   - UploadZone existente mantenido en su totalidad (sin funcionalidad simplificada)
//   - navegación plana en el encabezado (sin mega-menú) ,  SiteHeader sin cambios
//   - FAQ larga (10 preguntas) preservada para SEO / citación de IA
//   - "vista previa en vivo" es JSX estático con colores de marca, no un componente en vivo
//     (ruta de actualización: intercambiar por una animación de escritura más tarde si es necesario)
//
// Cobertura de locales: solo EN por ahora. fr/de/es/ru/it/pt/pl/ja/ko las páginas aún
// utilizan el diseño anterior; se trasladarán a través de scripts/translate-page.mjs
// una vez que validemos esta en producción.

import Image from 'next/image'
import UploadZone from '@/components/UploadZone'
import HeroChips from '@/components/HeroChips'
import HeroCounter from '@/components/HeroCounter'

// ── Metadata de nivel de página & canónica ─────────────────────────────────────────
export const metadata = {
  alternates: {
    canonical: 'https://mictoo.com/es',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'ja': 'https://mictoo.com/ja',
      'ko': 'https://mictoo.com/ko',
      'x-default': 'https://mictoo.com',
    },
  },
  title: 'Transcripción de audio y video gratuita con IA a texto ,  Mictoo',
  description: 'Transcripción de audio y video en línea gratuita, impulsada por OpenAI Whisper. No se requiere registro. Soporta más de 50 idiomas.',
}

// ── Datos de FAQ (compartidos entre UI y JSON-LD) ─────────────────────────────────
const FAQ = [
  {
    q: '¿Es Mictoo realmente gratis?',
    a: 'Sí. Mictoo es completamente gratis para archivos de hasta 25 MB. Sin cuenta, sin tarjeta de crédito, sin tarifas ocultas. Los usuarios registrados obtienen un límite de 60 MB por archivo y 7 transcripciones gratuitas por día, aún sin pago requerido.',
  },
  {
    q: '¿Qué tan precisa es la transcripción?',
    a: "Mictoo utiliza Whisper large-v3 de OpenAI, uno de los modelos de reconocimiento de voz abierto más precisos disponibles. La precisión depende de la calidad del audio y del acento, pero generalmente supera el 95% para grabaciones claras.",
  },
  {
    q: '¿Qué idiomas son compatibles?',
    a: "Whisper admite más de 50 idiomas, incluidos inglés, español, francés, alemán, portugués, ruso, ucraniano, japonés, chino, árabe y más. El idioma se detecta automáticamente, o puedes elegir uno manualmente en el formulario de carga.",
  },
  {
    q: '¿Se almacena mi archivo en sus servidores?',
    a: "No. Los archivos se transmiten directamente a la API Whisper de Groq (alojada en EE. UU.) para la transcripción, con la API Whisper de OpenAI como respaldo automático, y no se almacenan en los servidores de Mictoo. Ninguno de los proveedores utiliza audio de API para el entrenamiento del modelo; OpenAI retiene datos por un máximo de 30 días para monitoreo de abuso antes de la eliminación.",
  },
  {
    q: '¿Cuál es el tamaño máximo de archivo?',
    a: 'Hasta 25 MB de forma anónima, 60 MB después de un registro gratuito. Archivos más grandes de hasta 180 MB se dividen automáticamente en fragmentos y se combinan en una sola transcripción para usuarios registrados.',
  },
  {
    q: '¿Qué formatos de archivo admite Mictoo?',
    a: 'Mictoo admite MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, AAC, MOV y MPEG. Se aceptan archivos de audio y video; para video extraemos la pista de audio del lado del servidor.',
  },
  {
    q: '¿Cuánto tiempo tarda la transcripción?',
    a: 'La mayoría de los archivos terminan en segundos. Un archivo de audio de 10 minutos generalmente toma de 15 a 30 segundos; un podcast de 60 minutos se completa en aproximadamente un minuto.',
  },
  {
    q: '¿Puedo editar la transcripción después de que se genere?',
    a: 'Sí. La transcripción es completamente editable en tu navegador antes de que la copies o la descargues. No se necesita cuenta para guardar cambios en tu sesión local.',
  },
  {
    q: '¿Necesito crear una cuenta?',
    a: 'No. Para archivos de hasta 25 MB, puedes transcribir sin una cuenta. Una cuenta gratuita desbloquea archivos más grandes (hasta 60 MB por archivo, 180 MB a través de la división automática), historial, resumen de IA, traducción a 28 idiomas y chat con tu transcripción.',
  },
  {
    q: '¿Qué tecnología impulsa Mictoo?',
    a: "Mictoo está construido sobre el modelo Whisper large-v3 de OpenAI, servido por Groq para velocidad con OpenAI como respaldo. Es el mismo modelo de reconocimiento de voz que impulsa las funciones de voz de ChatGPT y muchos servicios profesionales de subtítulos.",
  },
]

// ── Esquemas JSON-LD ──────────────────────────────────────────────────────────
const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Mictoo',
  url: 'https://mictoo.com/es',
  description:
    'Herramienta de transcripción de audio y video gratuita en línea impulsada por OpenAI Whisper. No se requiere registro. Soporta más de 50 idiomas.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  browserRequirements: 'Requiere un navegador moderno con JavaScript habilitado.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Transcribir audio a texto',
    'Transcribir video a texto',
    'Soporta más de 50 idiomas',
    'No se requiere cuenta',
    'Gratis para usar',
    'Resumen de la transcripción generado por IA',
    'Traducir la transcripción a 28 idiomas',
    'Chatear con la transcripción',
    'Soporta MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, AAC',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

// ── Pequeñas piezas reutilizables ────────────────────────────────────────────────────

// Chip de confianza: icono + etiqueta corta, se encuentra en el héroe debajo del H1.
function TrustChip({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-slate-600 text-sm">
      <span className="w-5 h-5 text-brand-600 flex-shrink-0">{icon}</span>
      <span>{label}</span>
    </div>
  )
}

// Conjunto de iconos SVG utilizados en chips de confianza + cuadrícula de herramientas + tarjetas de beneficios + fila de audiencia.
// Todo estilo de contorno, vista 24x24, trazo de color actual ,  hereda color de
// la clase padre `text-brand-*`.
const Icons = {
  gift: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" /></svg>
  ),
  shield: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 2l9 4v6c0 5-3.9 9.5-9 10-5.1-.5-9-5-9-10V6z" /></svg>
  ),
  globe: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z" /></svg>
  ),
  sparkles: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" /></svg>
  ),
  trending: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>
  ),
  music: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M9 18V5l10-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="16" cy="16" r="3" /></svg>
  ),
  video: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="2" y="6" width="14" height="12" rx="2" /><path d="M22 8l-6 4 6 4z" /></svg>
  ),
  waveform: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M3 12h2M19 12h2M7 8v8M11 5v14M15 8v8" /></svg>
  ),
  users: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  ),
  mic: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8" /></svg>
  ),
  editPen: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4z" /></svg>
  ),
  target: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
  ),
  bolt: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg>
  ),
  lock: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
  ),
  cap: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M2 9l10-5 10 5-10 5L2 9z" /><path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4M22 9v5" /></svg>
  ),
  newspaper: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M4 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z" /><path d="M20 8h2v10a2 2 0 0 1-2 2" /><path d="M8 8h6M8 12h6M8 16h6" /></svg>
  ),
  briefcase: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /></svg>
  ),
  check: (
    <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
  ),
  upload: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3v14m-5-5l5-5 5 5" /><path d="M4 21h16" /></svg>
  ),
  arrowRight: (
    <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
}

// ── Componente de página ───────────────────────────────────────────────────────────
export default function EsHome() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ────────────────── HÉROE + CARGA ──────────────────
        Sección continua única para que el sutil degradado de fondo envuelva
        desde el H1 hasta el selector de idioma y la zona de carga. Antes de este cambio,
        el selector de idioma flotaba sobre blanco puro con el fondo gris comenzando
        solo debajo de él ,  se sentía desconectado. Ahora todo se sienta dentro de un
        contenedor suave de pizarra y la tarjeta de zona de carga destaca limpiamente
        contra el tono circundante.
      */}
      <section className="bg-gradient-to-b from-brand-50/40 via-slate-100/60 to-slate-100 pt-16 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
            Transcripción gratuita con IA · Sin registro
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Transcripción de Audio &amp; Video<br />
            <span className="text-brand-600">Gratuita a Texto</span>
          </h1>
          <p className="text-lg text-slate-600 mb-7 max-w-2xl mx-auto">
            Transcripciones precisas en segundos. Sube MP3, MP4, WAV y más. No se requiere cuenta.
          </p>

          {/* Chips de confianza ,  componente compartido para que el héroe de LandingLayout coincida
              exactamente con este (una única fuente de verdad, las actualizaciones se propagan
              en todo el sitio). */}
          <div className="mb-5">
            <HeroChips locale="es" />
          </div>

          {/* Contador en vivo de /api/stats (tabla de transcripciones de Supabase).
              Redondeado hacia abajo al múltiplo de 500 más cercano con un sufijo +, para que se lea
              como un hito en lugar de un número exacto. Se oculta si
              la API está caída o el conteo está por debajo del umbral de visibilidad.
              Ver components/HeroCounter.js. */}
          <HeroCounter locale="es" />
        </div>

        {/* La herramienta de carga se encuentra dentro de la misma sección para que el fondo
            envuelva también el selector de idioma. */}
        <div id="tool" className="max-w-2xl mx-auto mt-10 scroll-mt-20">
          <UploadZone defaultLanguage="es" locale="es" />
        </div>
      </section>

      {/* ────────────────── CUADRÍCULA DE HERRAMIENTAS ──────────────────
        Envuelta en el mismo tono de pizarra-100 que la sección de héroe + carga
        anterior para que la parte superior de la página se lea como un bloque de introducción cohesivo
        (héroe + carga + "aquí están todas las herramientas que tenemos"). La costura
        contra la siguiente sección "Cómo funciona Mictoo" (bg-white) es
        donde termina el área de introducción y comienza el contenido más profundo.
      */}
      <section className="bg-slate-100 border-b border-slate-200 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Convierte cualquier archivo a texto</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { href: '/es/transcribe-mp3-to-text',   label: 'MP3 a Texto',        icon: Icons.music },
              { href: '/es/transcribe-video-to-text', label: 'Video a Texto',      icon: Icons.video },
              { href: '/es/wav-to-text',              label: 'WAV a Texto',        icon: Icons.waveform },
              { href: '/es/meeting-transcription',    label: 'Transcripción de Reuniones', icon: Icons.users },
              { href: '/es/podcast-transcription',    label: 'Transcripción de Podcast', icon: Icons.mic },
              { href: '/es/voice-memo-to-text',       label: 'Nota de Voz a Texto', icon: Icons.editPen },
            ].map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                className="bg-white border border-slate-200 rounded-2xl p-4 text-center hover:border-brand-400 hover:shadow-sm transition-all group"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50 text-brand-600 mb-3 group-hover:bg-brand-100 transition-colors">
                  <span className="w-6 h-6">{icon}</span>
                </div>
                <div className="text-sm font-semibold text-slate-800 leading-tight">{label}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── CÓMO FUNCIONA MICTOO ────────────────── */}
      <section id="how-it-works" className="bg-white border-y border-slate-100 py-16 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">Cómo funciona Mictoo</h2>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-10 items-start">
            {/* 3 pasos */}
            <ol className="space-y-8">
              {[
                {
                  step: 1,
                  icon: Icons.upload,
                  title: 'Sube tu archivo',
                  desc: 'Arrastra y suelta o elige un archivo de audio o video. MP3, MP4, WAV, M4A y más.',
                },
                {
                  step: 2,
                  icon: Icons.sparkles,
                  title: 'IA transcribe',
                  desc: 'Whisper large-v3 convierte el habla a texto con alta precisión y puntuación automática.',
                },
                {
                  step: 3,
                  icon: Icons.editPen,
                  title: 'Revisa y exporta',
                  desc: 'Edita, resume, traduce y descarga tu transcripción como TXT, DOCX, PDF o SRT.',
                },
              ].map(({ step, icon, title, desc }) => (
                <li key={step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-sm font-semibold flex items-center justify-center">
                    {step}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 text-brand-600">{icon}</span>
                      <h3 className="font-semibold text-slate-900">{title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Vista previa del resultado del producto */}
            <Image
              src="/how-mictoo-works-interview.webp"
              alt="Espacio de trabajo de transcripción de Mictoo mostrando una transcripción en inglés con marcas de tiempo y controles de traducción"
              width={1127}
              height={1395}
              sizes="(max-width: 1024px) 100vw, 512px"
              className="w-full max-w-lg h-auto justify-self-center lg:-mt-[72px] rounded-2xl border border-slate-200 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* ────────────────── ¿POR QUÉ ELEGIR MICTOO? ────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">¿Por qué elegir Mictoo?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Icons.target,
              title: 'Alta precisión',
              desc: 'Whisper large-v3 ofrece transcripciones precisas incluso con acentos y ruido de fondo.',
            },
            {
              icon: Icons.bolt,
              title: 'Resultados rápidos',
              desc: 'Obtén transcripciones en segundos, no en horas. Un archivo de 30 minutos generalmente termina en aproximadamente un minuto.',
            },
            {
              icon: Icons.lock,
              title: 'Privado por diseño',
              desc: 'Los archivos se procesan de forma segura y nunca se almacenan en nuestros servidores. No hay entrenamiento con tu audio.',
            },
            {
              icon: Icons.globe,
              title: 'Más de 50 idiomas',
              desc: 'Transcribe y traduce en más de 50 idiomas. Detección automática o elige tu idioma.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white border border-slate-200 rounded-2xl p-5">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50 text-brand-600 mb-4">
                <span className="w-6 h-6">{icon}</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── CREADO PARA CADA VOZ ────────────────── */}
      <section className="bg-white border-y border-slate-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Creado para cada voz</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              {
                href: '/es/lecture-transcription',
                icon: Icons.cap,
                label: 'Estudiantes',
                desc: 'Transcribe conferencias y materiales de estudio. Concéntrate en aprender.',
              },
              {
                href: '/es/podcast-transcription',
                icon: Icons.mic,
                label: 'Podcasters',
                desc: 'Convierte episodios en notas de programa, blogs y contenido social.',
              },
              {
                href: '/es/interview-transcription',
                icon: Icons.newspaper,
                label: 'Periodistas',
                desc: 'Transcribe entrevistas rápidamente y verifica citas con facilidad.',
              },
              {
                href: '/es/meeting-transcription',
                icon: Icons.briefcase,
                label: 'Equipos',
                desc: 'Documenta reuniones y comparte transcripciones accionables.',
              },
              {
                href: '/es/free-srt-generator',
                icon: Icons.video,
                label: 'Creadores de contenido',
                desc: 'Reutiliza audio y video en subtítulos, artículos y más.',
              },
            ].map(({ href, icon, label, desc }) => (
              <a
                key={href}
                href={href}
                className="bg-white border border-slate-200 rounded-2xl p-4 hover:border-brand-400 hover:shadow-sm transition-all group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 text-brand-600 mb-3">
                  <span className="w-5 h-5">{icon}</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1 text-sm">{label}</h3>
                <p className="text-xs text-slate-500 leading-relaxed flex items-start justify-between gap-2">
                  <span>{desc}</span>
                  <span className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-500 transition-colors flex-shrink-0 mt-0.5">{Icons.arrowRight}</span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── TABLA DE COMPARACIÓN UNIFICADA ──────────────────
        Tabla única donde cada competidor nombrado obtiene su propia fila y
        toda la fila es un enlace a la página alternativa de esa herramienta.
        Estructura:
          - 4 columnas de características: Gratis / Sin registro / Resumen / Traducción
          - Fila 1: mictoo (destacado de marca) con ✓ insignias por celda
          - Filas 2-6: Descript / Fireflies / TurboScribe / Otter / Notta
                      cada fila es clickeable → su página alternativa
                      Las celdas utilizan etiquetas compactas y honestas; las afirmaciones de precios
                      detalladas viven en las páginas de comparación por herramienta.
        El texto de la celda se mantiene deliberadamente conservador en números específicos para que
        la tabla no se quede desactualizada cada vez que un competidor cambia
        su nivel gratuito. Los números reales están en cada página vinculada.
      */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Transcripción gratuita sin suscripción</h2>
        <p className="text-slate-600 mb-8 max-w-2xl">
          Cómo se compara mictoo con las herramientas que la gente suele considerar. Haz clic en cualquier fila para una comparación completa característica por característica.
        </p>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-x-auto">
          <table className="w-full text-sm min-w-[820px] border-collapse">
            <thead>
              <tr>
                <th className="text-left px-5 py-4 w-56"></th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Gratis</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Sin registro</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Resumen de IA</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Traducción</th>
              </tr>
            </thead>
            <tbody>
              {/* Fila de Mictoo ,  destacado de marca, no clickeable (es la referencia) */}
              <tr className="bg-gradient-to-r from-brand-50 to-brand-50/40">
                <td className="px-5 py-5 border-t border-slate-100 align-middle">
                  <div className="inline-flex items-center gap-2.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="#0284c7" />
                      <path d="M8 8v8M12 6v12M16 10v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <div>
                      <div className="font-bold text-slate-900 leading-tight">mictoo</div>
                      <div className="text-[11px] text-brand-700 font-medium">Gratis para todos</div>
                    </div>
                  </div>
                </td>
                {[
                  { yes: true, label: 'Gratis para usar' },
                  { yes: true, label: 'Sin cuenta' },
                  { yes: true, label: 'Incluido' },
                  { yes: true, label: 'Más de 50 idiomas' },
                ].map(({ label }, i) => (
                  <td key={i} className="text-center px-4 py-5 border-t border-slate-100 align-middle">
                    <div className="inline-flex flex-col items-center gap-1.5">
                      <span className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center">
                        <span className="w-3.5 h-3.5">{Icons.check}</span>
                      </span>
                      <span className="text-[11px] text-slate-600 leading-snug">{label}</span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Filas de competidores ,  una por herramienta, toda la fila es un enlace. */}
              {[
                {
                  name: 'Descript',    href: '/es/descript-alternative',    tag: 'Flujo de trabajo centrado en el editor',
                  cells: ['Nivel limitado',    'Registro requerido', 'Complemento de pago',   'Limitado'],
                },
                {
                  name: 'Fireflies',   href: '/es/fireflies-alternative',   tag: 'Grabador de reuniones',
                  cells: ['Nivel limitado',    'Registro requerido', 'Nivel pro',      'Limitado'],
                },
                {
                  name: 'TurboScribe', href: '/es/turboscribe-alternative', tag: 'Transcripción casual',
                  cells: ['Límite diario',        'Registro requerido', 'No incluido',  'Limitado'],
                },
                {
                  name: 'Otter',       href: '/es/otter-alternative',       tag: 'Notas de reunión en vivo',
                  cells: ['Límite mensual',      'Registro requerido', 'Nivel pro',      'Limitado'],
                },
                {
                  name: 'Notta',       href: '/es/notta-alternative',       tag: 'Enfoque multilingüe',
                  cells: ['Límite mensual',      'Registro requerido', 'Nivel pro',      'Amplio'],
                },
              ].map(({ name, href, tag, cells }) => (
                <tr key={href} className="group hover:bg-slate-50 transition-colors">
                  <td className="border-t border-slate-100 align-middle p-0">
                    <a href={href} className="flex items-center justify-between gap-3 px-5 py-4">
                      <div>
                        <div className="font-semibold text-slate-800">vs {name}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{tag}</div>
                      </div>
                      <span className="w-4 h-4 text-slate-300 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-all">
                        {Icons.arrowRight}
                      </span>
                    </a>
                  </td>
                  {cells.map((label, i) => (
                    <td key={i} className="border-t border-slate-100 align-middle p-0">
                      <a
                        href={href}
                        className="block text-center px-4 py-4 text-xs text-slate-500"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {label}
                      </a>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-400 text-center mt-4">
          Solo una instantánea. Las páginas de precios cambian; consulta la comparación vinculada para obtener números actuales.
        </p>
      </section>

      {/* ────────────────── FAQ ────────────────── */}
      <section id="faq" className="bg-white border-y border-slate-100 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
            Preguntas frecuentes
          </h2>
          <div className="space-y-3">
            {FAQ.map(({ q, a }, i) => (
              <details
                key={q}
                className="group border border-slate-200 rounded-xl overflow-hidden bg-white open:shadow-sm"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-3 font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                  <span>{q}</span>
                  <svg
                    className="w-4 h-4 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                  <p>{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── PLACA CTA INFERIOR ──────────────────
        Rediseñada: se eliminó la insignia de forma de onda del medio (era una tercera
        forma de onda encima de los dos acentos laterales ,  demasiado repetitivo),
        reemplazada por una insignia de destellos de IA, se agregó una fila de chips de confianza
        debajo del eslogan, y se hizo el botón CTA más grande con una
        flecha a la derecha para que se lea como una acción, no como un enlace estático.
        Acentos de forma de onda laterales más suaves para que el texto tenga más contraste.
      */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="relative bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 rounded-3xl overflow-hidden shadow-lg shadow-brand-500/20">
          {/* Suave resplandor radial detrás del botón ,  enfoque suave, sin
              acentos de forma de onda (eliminados por solicitud del usuario; la placa se lee
              más limpia sin ellos y la insignia de destellos sola lleva
              la pista de "transcripción de IA"). */}
          <div className="absolute right-24 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none hidden md:block" />

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 py-10 px-6 md:px-10 text-center md:text-left">
            {/* Insignia de IA ,  destellos en lugar de una tercera forma de onda */}
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-white flex-shrink-0">
              <span className="w-7 h-7">{Icons.sparkles}</span>
            </div>

            <div className="min-w-0 flex-1 max-w-lg">
              <div className="font-bold text-white text-xl md:text-2xl leading-tight">
                Transcribe tu archivo, gratis
              </div>
              <div className="text-sm text-white/85 mt-1.5">
                Sube tu audio o video y obtén una transcripción precisa en segundos.
              </div>
              {/* Chips de confianza ,  tres razones para confiar en el CTA */}
              <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-[11px] text-white/80">
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> Sin registro
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> Sin tarjeta de crédito
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> Más de 50 idiomas
                </span>
              </div>
            </div>

            <a
              href="#tool"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold text-sm md:text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex-shrink-0 group"
            >
              <span>Comenzar a transcribir</span>
              <span className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">{Icons.arrowRight}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}