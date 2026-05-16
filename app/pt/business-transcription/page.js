import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: 'Transcrição empresarial — Reuniões, calls e entrevistas em texto | Mictoo',
  description: 'Transcrição empresarial grátis para reuniões, calls com clientes, entrevistas de usuário e demos de produto. Sem cadastro. Áudio ou vídeo, até 25 MB.',
  alternates: { canonical: 'https://mictoo.com/pt/business-transcription', languages: LANGS },
}

export default function PtBusinessPage() {
  return (
    <LandingLayout
      badge="Empresas · Times · Grátis"
      h1={<>Transcrição empresarial<br /><span className="text-brand-600">Reuniões, calls, entrevistas em texto</span></>}
      subtitle="Transforme reuniões, calls com clientes, entrevistas de usuário e demos em transcrições limpas. Prontas para Notion, Confluence, CRM ou relatórios. Grátis, sem conta."
      defaultLanguage="pt"
      features={[
        { icon: '💼', title: 'Fluxos empresariais', desc: 'Reuniões de equipe, calls de vendas, pesquisa de usuário, entrevistas de candidatos — converta áudio em texto pesquisável e compartilhável.' },
        { icon: '📊', title: 'Resumo IA incluído', desc: 'Além da transcrição, receba automaticamente um resumo IA com pontos-chave e action items. Pronto para colar no relatório ou no CRM.' },
        { icon: '🔒', title: 'Segurança e privacidade', desc: 'Arquivos são processados e imediatamente excluídos. Não armazenamos áudio nem transcrições em nossos servidores.' },
      ]}
      faq={[
        { q: 'O Mictoo serve para reuniões confidenciais?', a: 'Para conteúdo regulamentado (LGPD, dados sensíveis), verifique a política da empresa sobre serviços IA de terceiros. O Mictoo não armazena arquivos, mas o áudio passa pelo provedor IA. Para áudio estritamente confidencial, considere soluções on-premise.' },
        { q: 'Como transcrever uma call do Zoom ou Teams?', a: 'Grave a call com o recurso integrado da plataforma, baixe o MP4 ou M4A e envie ao Mictoo. Transcrição e resumo ficam prontos em segundos.' },
        { q: 'Posso obter etiquetas de oradores (Host, Cliente, etc.)?', a: 'Não automaticamente no plano grátis. A transcrição é um único fluxo de texto — as etiquetas podem ser adicionadas manualmente no editor do navegador antes do export.' },
        { q: 'Funciona para reuniões multilíngues?', a: 'O Whisper suporta mais de 50 idiomas com detecção automática. Se a reunião mistura dois idiomas, é melhor dividir o arquivo e transcrever cada parte separadamente definindo o idioma manualmente.' },
        { q: 'Qual o limite de duração?', a: 'Até 25 MB por arquivo. Para reuniões de 1+ hora, exporte em mono a baixo bitrate ou divida a gravação em partes. O guia how-to-compress-audio descreve três abordagens.' },
      ]}
      relatedLinks={[
        { href: '/pt/meeting-transcription', label: 'Transcrição de reuniões' },
        { href: '/pt/zoom-transcription', label: 'Transcrição do Zoom' },
        { href: '/pt/interview-transcription', label: 'Transcrição de entrevistas' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
