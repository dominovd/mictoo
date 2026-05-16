import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Transcripción de Microsoft Teams — Transcribe grabaciones de Teams | Mictoo',
  description: 'Transcribe grabaciones de reuniones de Microsoft Teams a texto gratis. Funciona con MP4 de OneDrive o SharePoint. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/teams-meeting-transcription', languages: LANGS },
}

export default function EsTeamsPage() {
  return (
    <LandingLayout
      badge="Microsoft Teams · MP4 · Gratis"
      h1={<>Transcripción de Microsoft Teams<br /><span className="text-brand-600">Reuniones de Teams en texto</span></>}
      subtitle="Convierte la grabación de tu reunión de Microsoft Teams en una transcripción de texto limpia o en un archivo de subtítulos SRT. Gratis, sin cuenta. Funciona con MP4 de OneDrive o SharePoint."
      defaultLanguage="es"
      features={[
        { icon: '🏢', title: 'Diseñado para flujos de Teams', desc: 'Descarga la grabación desde OneDrive o SharePoint — normalmente en "Grabaciones" dentro del chat de la reunión — y suéltala en Mictoo. El MP4 funciona directamente.' },
        { icon: '📤', title: 'Transcripciones para compartir', desc: 'Pega la transcripción en un chat de Teams, en OneNote o en un componente Loop para compartirla con quienes no asistieron a la reunión.' },
        { icon: '🌐', title: 'Todos los idiomas', desc: 'Transcribe inglés, español, francés, alemán, italiano, neerlandés, polaco, japonés, chino y más de 40 idiomas. El idioma se detecta automáticamente.' },
      ]}
      faq={[
        { q: '¿Dónde guarda Teams mis grabaciones de reuniones?', a: 'En la mayoría de organizaciones, Teams guarda las grabaciones en el OneDrive del organizador (chats 1:1 / grupales) o en la carpeta SharePoint del canal (reuniones de canal). Abre la grabación, haz clic en Descargar y obtienes un archivo MP4.' },
        { q: '¿Teams no ofrece ya una transcripción?', a: 'Microsoft Teams ofrece transcripción en vivo si tu administrador la ha habilitado, pero el archivo se queda en el ecosistema de Teams y no siempre se puede descargar. Mictoo te da un .txt o .srt portable que puedes usar en cualquier sitio.' },
        { q: '¿Puedo obtener subtítulos SRT para el vídeo de Teams?', a: 'Sí. Tras la transcripción puedes descargar un archivo .srt con marcas de tiempo y subirlo como subtítulos en YouTube, Vimeo o cualquier editor de vídeo.' },
        { q: '¿Y el contenido confidencial de las reuniones?', a: 'Mictoo no almacena archivos. El audio se envía a nuestro proveedor IA solo para transcripción y se descarta inmediatamente. Para reuniones con datos regulados (HIPAA, GDPR-restringido, confidencial), revisa la política de tu organización sobre servicios IA de terceros antes de subir.' },
        { q: '¿Cuál es la duración máxima de la grabación?', a: 'Hasta 25 MB por archivo. La mayoría de MP4 de Teams superan ese límite en reuniones de más de 30 minutos — extrae primero el audio (M4A) o usa un compresor de vídeo.' },
      ]}
      relatedLinks={[
        { href: '/es/zoom-transcription', label: 'Transcripción de Zoom' },
        { href: '/es/meeting-transcription', label: 'Transcripción de reuniones' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
