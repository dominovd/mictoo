import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
  'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
  'ko': 'https://mictoo.com/ko/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Transcrição Microsoft Teams — Transcreva gravações Teams | Mictoo',
  description: 'Transcreva grátis gravações de reuniões do Microsoft Teams em texto. Funciona com MP4 do OneDrive ou SharePoint. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/teams-meeting-transcription', languages: LANGS },
}

export default function PtTeamsPage() {
  return (
    <LandingLayout
      badge="Microsoft Teams · MP4 · Grátis"
      h1={<>Transcrição do Microsoft Teams<br /><span className="text-brand-600">Reuniões Teams em texto</span></>}
      subtitle="Transforme a gravação da sua reunião do Microsoft Teams em transcrição em texto ou arquivo de legendas SRT. Grátis, sem conta. Funciona com MP4 do OneDrive ou SharePoint."
      defaultLanguage="pt"
      features={[
        { icon: '🏢', title: 'Feito para fluxos Teams', desc: 'Baixe a gravação do OneDrive ou SharePoint — geralmente em "Recordings" no chat da reunião — e envie ao Mictoo. O MP4 funciona direto.' },
        { icon: '📤', title: 'Transcrições compartilháveis', desc: 'Cole a transcrição em um chat do Teams, OneNote ou componente Loop para compartilhar com quem perdeu a reunião.' },
        { icon: '🌐', title: 'Todos os idiomas', desc: 'Transcreve português, inglês, espanhol, francês, alemão, italiano, holandês, polonês, japonês, chinês e mais de 40 outros. O idioma é detectado automaticamente.' },
      ]}
      faq={[
        { q: 'Onde o Teams salva as gravações?', a: 'Na maioria das organizações, o Teams salva as gravações no OneDrive de quem gravou (chats 1:1 / grupo) ou na pasta SharePoint do canal (reuniões de canal). Abra a gravação, clique em Baixar e receba um arquivo MP4.' },
        { q: 'O Teams já não oferece transcrição?', a: 'O Microsoft Teams oferece transcrição live se seu admin habilitar, mas o arquivo fica no ecossistema Teams e nem sempre pode ser baixado. O Mictoo te dá um .txt ou .srt portátil para usar onde quiser.' },
        { q: 'Posso obter legendas SRT para o vídeo Teams?', a: 'Sim. Após a transcrição você pode baixar um arquivo .srt com timestamps e usar como legendas no YouTube, Vimeo ou em qualquer editor de vídeo.' },
        { q: 'E o conteúdo confidencial das reuniões?', a: 'O Mictoo não armazena arquivos. O áudio é enviado ao nosso provedor IA apenas para transcrição e descartado imediatamente. Para reuniões com dados regulamentados, verifique a política da sua organização sobre serviços IA de terceiros.' },
        { q: 'Qual a duração máxima da gravação Teams?', a: 'Até 25 MB por arquivo. A maioria dos MP4 do Teams ultrapassa esse limite para reuniões acima de 30 minutos — extraia o áudio (M4A) primeiro ou use um compressor de vídeo.' },
      ]}
      relatedLinks={[
        { href: '/pt/zoom-transcription', label: 'Transcrição do Zoom' },
        { href: '/pt/meeting-transcription', label: 'Transcrição de reuniões' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
