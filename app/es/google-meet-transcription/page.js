import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'pl': 'https://mictoo.com/pl/google-meet-transcription',
  'ja': 'https://mictoo.com/ja/google-meet-transcription',
  'ko': 'https://mictoo.com/ko/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Transcripción de Google Meet — transcribe grabaciones gratis | Mictoo',
  description:
    'Transcripción gratuita de Google Meet. Sube la grabación de Meet desde Drive (MP4 o M4A) y obtén una transcripción limpia con IA en segundos. Funciona en Workspace gratuito.',
  alternates: { canonical: 'https://mictoo.com/es/google-meet-transcription', languages: LANGS },
}

export default function EsGoogleMeetPage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="GOOGLE MEET · MP4 · GRATIS"
      h1={
        <>
          Transcripción de Google Meet
          <br />
          <span className="text-brand-600">Transcribe grabaciones de Meet</span>
        </>
      }
      subtitle="Convierte tu grabación de Google Meet en texto limpio. Sube el MP4 desde tu Drive y obtén la transcripción en segundos. Sin registro, sin tarifa por minuto."
      howItWorks={[
        {
          icon: '☁️',
          title: 'Descarga desde Google Drive',
          desc: 'Las grabaciones de Google Meet se guardan en tu Drive en la carpeta "Meet Recordings". Descárgalas como MP4 (clic derecho, Download). Para reuniones largas, extrae el audio primero para ahorrar tiempo de subida.',
        },
        {
          icon: '⚡',
          title: 'Sube el archivo',
          desc: 'Extraemos el audio del MP4 y lo enviamos a Whisper large-v3. Una reunión de 30 minutos termina en alrededor de un minuto.',
        },
        {
          icon: '📋',
          title: 'Recibe la transcripción',
          desc: 'Léela en el navegador, cópiala o descárgala como TXT o SRT. Arregla palabras mal entendidas en el editor antes de exportar.',
        },
      ]}
      whyUse={{
        title: 'Por qué Mictoo para Google Meet',
        bullets: [
          {
            title: 'Funciona en cualquier tier de Workspace, incluido el gratuito',
            desc: 'Grabar Meet sí requiere un tier de pago, pero una vez tienes el archivo, nuestra transcripción es gratis sea cual sea tu tier de Workspace.',
          },
          {
            title: 'Mejor soporte de idiomas no ingleses',
            desc: 'La transcripción de Google ha sido históricamente más fuerte en inglés. Whisper large-v3 cubre más de 50 idiomas con detección automática y maneja mucho mejor acentos, conversaciones bilingües y code-switching.',
          },
          {
            title: 'Los datos no vuelven a Google',
            desc: 'Si evitas deliberadamente el lock-in del ecosistema de Google para reuniones sensibles, transcribir aquí mantiene el texto fuera de Google Workspace.',
          },
          {
            title: 'El SRT funciona en cualquier editor de vídeo',
            desc: 'La transcripción de Google te da el texto dentro de Docs. La nuestra exporta SRT limpio, listo para Premiere, DaVinci o YouTube Studio.',
          },
          {
            title: 'Privacidad',
            desc: 'El archivo va al proveedor de transcripción y se descarta tras procesarse. No se escribe nada en nuestros servidores.',
          },
        ],
      }}
      useCases={{
        title: 'Para qué se transcriben grabaciones de Google Meet',
        items: [
          {
            title: 'Actas buscables por todo el equipo',
            desc: 'Pega la transcripción en Google Docs o Notion. El tú del futuro no recordará qué se decidió en la semana 14 del proyecto. El texto buscable ayuda.',
          },
          {
            title: 'Catch-up asíncrono para equipos distribuidos',
            desc: 'Los compañeros en otras zonas horarias que se perdieron la reunión en vivo leen la transcripción en minutos, en vez de ver una grabación de 60 minutos a 1.5x.',
          },
          {
            title: 'Revisión de llamadas con cliente',
            desc: 'Los account managers transcriben llamadas clave con cliente y guardan el texto en el CRM. Recuerdo más rápido, mejores handoffs.',
          },
          {
            title: 'Transcripciones de webinars y town halls',
            desc: 'Para eventos grandes grabados en Meet, la transcripción es lo que publicas (junto a la grabación) para accesibilidad y buscabilidad.',
          },
          {
            title: '1:1 y conversaciones de rendimiento (para el manager)',
            desc: 'Algunos managers transcriben sus 1:1 para guardar notas y hacer follow-up. Útil, pero sé transparente con tu reporte sobre el porqué.',
          },
        ],
      }}
      proTips={{
        title: 'Consejos para transcribir Google Meet',
        tips: [
          {
            title: 'Extrae el audio del MP4 antes de subir',
            desc: 'Las grabaciones de Meet son vídeo 720p, lo que para una transcripción son bytes desperdiciados. Coge solo el audio: ffmpeg -i meet.mp4 -vn -ac 1 -b:a 64k meet.mp3. Un MP4 de 1 GB baja a 25 MB o menos.',
          },
          {
            title: 'Descarga el MP4, no lo veas en streaming',
            desc: 'Drive a veces abre los MP4 en el reproductor del navegador. Asegúrate de haberte descargado el archivo antes de intentar subirlo aquí. Los enlaces compartidos de Drive no son subidas de archivo.',
          },
          {
            title: 'Para reuniones de más de 60 minutos, divide antes de subir',
            desc: 'Nuestro tope es 60 minutos por archivo con login. Corta el audio en trozos primero. Las transcripciones se pueden concatenar después.',
          },
          {
            title: 'Silencia pestañas y apps de fondo durante la reunión si puedes',
            desc: 'Un tema de Spotify sonando bajo tu voz acaba en la transcripción como palabras aleatorias. Lo mismo con los sonidos de notificación. No siempre se puede arreglar después.',
          },
          {
            title: 'Usa un micrófono de verdad, aunque sea un cascos baratos',
            desc: 'Los micrófonos integrados de los laptops captan el tecleo, el ruido del ventilador y el eco de la sala. Un cascos USB con cable de 20 dólares se transcribe notablemente más limpio.',
          },
          {
            title: 'Para grabaciones compartidas, revisa los permisos antes de volver a subirlas',
            desc: 'Si alguien te ha compartido una grabación de Meet, comprueba qué se te permite hacer con ella antes de transcribirla para uso externo.',
          },
        ],
      }}
      faq={[
        {
          q: '¿Mictoo funciona con grabaciones de Google Meet?',
          a: 'Sí. Descarga el MP4 de la carpeta Meet Recordings de tu Drive y súbelo aquí. La extracción solo de audio (con ffmpeg o cualquier app de audio) lo acelera para reuniones largas.',
        },
        {
          q: '¿Necesito un plan de pago de Google Workspace?',
          a: 'Necesitas un plan de pago de Workspace para grabar el Meet en primer lugar. Cuando la grabación está en OneDrive o SharePoint, la transcripción aquí es gratis sea cual sea tu tier.',
        },
        {
          q: '¿Mi grabación se subirá de vuelta a Google?',
          a: 'No. El archivo va a nuestro proveedor de transcripción (Groq, con OpenAI como respaldo) y se descarta tras procesarse. No va a Google ni a ningún servicio de Google.',
        },
        {
          q: '¿Cómo se compara con la transcripción nativa de Google?',
          a: 'La nuestra es gratis y funciona en cualquier tier de Workspace. La de Google es más cómoda si tu plan la incluye y las reuniones son en inglés. Para no inglés, acentos o reuniones bilingües, la nuestra es más precisa.',
        },
        {
          q: 'Mi grabación de Meet supera los 60 MB. ¿Qué hago?',
          a: 'Extrae solo el audio con ffmpeg o cualquier app de audio. Un vídeo de 1 GB suele bajar a menos de 30 MB como audio. Si el audio en sí supera los 60 MB, divídelo en trozos.',
        },
        {
          q: '¿Tendré etiquetas de hablante?',
          a: 'No automáticamente. Whisper no hace diarización por defecto. Tendrás que añadir las etiquetas a mano. Para una reunión de 4 personas con voces distinguibles, esto suele tardar 5 minutos.',
        },
        {
          q: '¿Funciona con los mensajes del chat de Meet?',
          a: 'No. Google guarda los mensajes del chat por separado en la carpeta de la grabación de Meet. Nosotros solo transcribimos el audio. Combínalos tú si necesitas ambos.',
        },
        {
          q: '¿Qué precisión tiene la transcripción de Google Meet?',
          a: 'Para audio limpio (buenos micrófonos, sin ruido de fondo), 90–95 %. Las grabaciones en sala con varios micrófonos o altavoces caen al 80–90 %. Los nombres y términos técnicos suelen necesitar limpieza.',
        },
        {
          q: '¿Puedo transcribir un directo de Google Meet?',
          a: 'No. Trabajamos solo con archivos grabados, no con streams en vivo. Una vez termine el stream y la grabación se guarde en Drive, puedes descargarla y transcribirla.',
        },
        {
          q: '¿Qué idiomas soportan?',
          a: 'Más de 50 con detección automática. Para reuniones de menos de 5 minutos o archivos con intros sin habla, elige el idioma manualmente para mejor resultado.',
        },
        {
          q: '¿Puedo exportar a un Google Doc?',
          a: 'Exportamos texto plano (TXT) y SRT. Copia y pega en Google Docs. No tenemos integración directa con Drive todavía.',
        },
        {
          q: '¿Esto funciona con grabaciones de Meet de otras organizaciones de Workspace?',
          a: 'Si tienes acceso a descargar el archivo desde tu Drive, sí. Tratamos el archivo como un MP4 sin más. No comprobamos ni nos importa de dónde viene.',
        },
      ]}
      relatedLinks={[
        { href: '/es/zoom-transcription', label: 'Transcripción de Zoom', desc: 'Para grabaciones Cloud o locales de Zoom.' },
        { href: '/es/teams-meeting-transcription', label: 'Transcripción de Teams', desc: 'Para grabaciones de Microsoft Teams.' },
        { href: '/es/meeting-transcription', label: 'Transcripción de reunión', desc: 'Para grabaciones de otras plataformas.' },
        { href: '/es/transcribe-video-to-text', label: 'Vídeo a texto', desc: 'Página genérica de vídeo a texto.' },
      ]}
    />
  )
}
