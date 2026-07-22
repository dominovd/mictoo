import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'pt': 'https://mictoo.com/pt/meeting-transcription',
  'pl': 'https://mictoo.com/pl/meeting-transcription',
  'ja': 'https://mictoo.com/ja/meeting-transcription',
  'ko': 'https://mictoo.com/ko/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: 'Transcrição de Reuniões para Qualquer Plataforma Gravada | Mictoo',
  description:
    'Carregue uma gravação de reunião autorizada do Zoom, Teams, Meet, Webex, Loom ou Riverside para texto, resumo e exportações.',
  alternates: {
    canonical: 'https://mictoo.com/pt/meeting-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcrição de Reuniões: Qualquer Plataforma, Qualquer Gravação | Mictoo',
    description: 'Envie qualquer gravação de reunião, obtenha uma transcrição. Gratuito.',
    url: 'https://mictoo.com/pt/meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcrição de Reuniões: Qualquer Plataforma',
    description: 'Envie qualquer gravação de reunião, obtenha uma transcrição.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtMeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pt"
      badge="Qualquer plataforma · Gratuito · Sem registro"
      h1First="Transcrição de Reuniões"
      h1Second="Uma página de upload para qualquer plataforma"
      subtitle="Carregue uma gravação do Zoom, Teams, Google Meet, Webex, Loom ou qualquer captura de tela. Obtenha uma transcrição limpa com timestamps, resumo de IA e exportações."
      currentHref="/pt/meeting-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/pt/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/pt/google-meet-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/pt/teams-meeting-transcription' },
        { name: 'Webex',       iconKey: 'videoCameraFill', brandBg: '#0F1F35' },
        { name: 'Loom',        iconKey: 'loomPlay',        brandBg: '#625DF5' },
        { name: 'Riverside',   iconKey: 'waveMic',         brandBg: '#4B2AF7' },
      ]}

      howItWorksTitle="Como funciona a transcrição de reuniões"
      steps={[
        {
          icon: 'folder',
          title: 'Encontre sua gravação de reunião',
          desc: 'Exporte ou baixe a gravação de qualquer plataforma.',
        },
        {
          icon: 'upload',
          title: 'Coloque o arquivo aqui',
          desc: 'Carregue seu arquivo em MP3, MP4, WAV ou outros formatos suportados.',
        },
        {
          icon: 'editPen',
          title: 'Transcrição, resumo, exportações',
          desc: 'Obtenha uma transcrição com timestamps, resumo de IA e arquivos de exportação.',
        },
      ]}

      exampleTitle="Exemplo de transcrição e resumo"
      exampleFileName="meeting-recording.mp4"
      exampleDurationLabel="30:15"
      exampleLines={[
        { t: '0:00',  line: 'Obrigado a todos por estarem aqui. Vamos recapitular rapidamente o progresso da semana passada antes de entrarmos na agenda de hoje.' },
        { t: '0:12',  line: 'Lançamos o fluxo de integração e vimos um aumento de doze por cento na ativação em relação à linha de base anterior.' },
        { t: '0:28',  line: 'Ótimo. A seguir, precisamos corrigir o bug de checkout no mobile antes que afete mais clientes pagantes.' },
        { t: '0:36',  line: 'Vou criar um ticket e atribuí-lo à equipe até o final do dia. Deve ser resolvido dentro do sprint.' },
        { t: '0:44',  line: 'Devemos também discutir as atualizações da página de preços. A versão atual não está convertendo como esperávamos.' },
        { t: '0:55',  line: 'Vou compartilhar um rascunho até o final do dia e podemos revisar juntos amanhã antes do standup.' },
      ]}
      summaryPoints={[
        'Fluxo de integração lançado com aumento de 12% na ativação.',
        'Bug de checkout no mobile precisa ser corrigido.',
        'Atualizações da página de preços a serem discutidas.',
        'Rascunho a ser compartilhado até o final do dia e revisado amanhã.',
      ]}
      actionItems={[
        'Criar ticket para bug de checkout no mobile',
        'Compartilhar rascunho da página de preços',
        'Revisar rascunho amanhã',
      ]}

      whyTitle="Por que um upload agnóstico à plataforma ajuda"
      whyCards={[
        {
          icon: 'globe',
          title: 'Funciona em todas as plataformas de reunião',
          desc: 'Carregue do Zoom, Teams, Google Meet, Webex, Loom e mais.',
        },
        {
          icon: 'target',
          title: 'Um fluxo de revisão',
          desc: 'Use o mesmo layout com timestamps e opções de exportação independentemente da plataforma que criou a gravação.',
        },
        {
          icon: 'lock',
          title: 'Funciona a partir de um arquivo autorizado',
          desc: 'Mictoo processa uma gravação que você já tem permissão para usar; as políticas de acesso e download ainda pertencem à plataforma de origem.',
        },
        {
          icon: 'sparkles',
          title: 'Resumo e tradução incluídos',
          desc: 'Obtenha resumos de IA e traduza transcrições para mais de 50 idiomas.',
        },
      ]}

      scenariosTitle="Cenários comuns de transcrição de reuniões"
      scenarios={[
        { icon: 'chat',      title: 'E-mails de recapitulação para clientes' },
        { icon: 'search',    title: 'Notas de pesquisa de usuários' },
        { icon: 'users',     title: 'Triagens de recrutadores' },
        { icon: 'briefcase', title: 'Arquivos de reuniões de equipe' },
        { icon: 'headset',   title: 'Escalonamentos de suporte' },
        { icon: 'globe',     title: 'Reuniões multilíngues' },
      ]}

      practicalTitle="Onde encontrar uma gravação de reunião"
      practicalIntro="A localização exata depende da plataforma e do seu papel na reunião. Baixe apenas gravações que você está autorizado a acessar e siga as políticas de consentimento dos participantes e da organização antes de carregar."
      practicalItems={[
        {
          title: 'Gravação na nuvem ou local do Zoom',
          desc: 'Gravações na nuvem estão disponíveis no portal web do Zoom em contas pagas elegíveis. Gravações de computador normalmente são salvas na pasta local do Zoom.',
        },
        {
          title: 'Gravação do Google Meet',
          desc: 'Gravações elegíveis do Meet são salvas na pasta Meu Drive › Gravações do Meet do organizador. A disponibilidade depende da edição e das configurações do administrador.',
        },
        {
          title: 'Gravação do Microsoft Teams',
          desc: 'Encontre a gravação no chat da reunião, OneDrive ou no site SharePoint do canal. As permissões de download podem ser restritas por política.',
        },
        {
          title: 'Webex, Loom e Riverside',
          desc: 'Use o controle de exportação ou download da plataforma para obter um arquivo de áudio ou vídeo, e confirme que o arquivo reproduz corretamente antes do upload.',
        },
      ]}

      tipsTitle="Dicas para melhores transcrições de reuniões"
      tips={[
        'Prefira exportações apenas de áudio quando quiser um upload menor.',
        'Grave em um espaço silencioso e reduza o ruído de fundo.',
        'Use Auto-detect para chamadas multilíngues ou de idiomas mistos.',
        'Revise nomes e terminologia após a transcrição.',
      ]}

      guidesTitle="Escolha o guia da plataforma certa"
      guides={[
        { href: '/pt/zoom-transcription',          icon: 'video', title: 'Reuniões Zoom',    desc: 'Guia de download passo a passo' },
        { href: '/pt/google-meet-transcription',   icon: 'video', title: 'Google Meet',      desc: 'Guia de download passo a passo' },
        { href: '/pt/teams-meeting-transcription', icon: 'video', title: 'Microsoft Teams',  desc: 'Guia de download passo a passo' },
        { href: '/pt/meeting-transcription#tool',  icon: 'file',  title: 'Outras plataformas',  desc: 'Veja todos os guias e dicas' },
      ]}

      faq={[
        {
          q: 'Posso transcrever uma gravação do Zoom, Meet ou Teams?',
          a: 'Sim. Qualquer arquivo de áudio ou vídeo de qualquer plataforma de reunião funciona. Basta baixar a gravação e colocá-la aqui. Aceitamos MP3, MP4, WAV, M4A, WEBM, FLAC e mais.',
        },
        {
          q: 'A transcrição de reuniões é gratuita?',
          a: 'Sim. Arquivos de até 25 MB anonimamente, 60 MB quando conectado. Reuniões mais longas podem ser divididas automaticamente para usuários conectados. Nenhum cartão de crédito necessário.',
        },
        {
          q: 'A Mictoo identifica diferentes falantes?',
          a: 'Não. A transcrição atual é texto contínuo com timestamps por linha e sem rótulos automáticos "Falante 1 / Falante 2".',
        },
        {
          q: 'As gravações de reuniões são armazenadas?',
          a: 'Não. O arquivo é transmitido para o provedor de transcrição, processado uma vez e removido da memória. A transcrição só é salva se você se conectar e adicioná-la ao seu histórico.',
        },
        {
          q: 'Quais formatos de exportação estão disponíveis?',
          a: 'TXT (texto simples), SRT e VTT (legendas com timestamps alinhados à gravação) e DOCX (documento Word). Usuários conectados também recebem PDF e JSON.',
        },
        {
          q: 'Posso traduzir a transcrição?',
          a: 'Sim. Após a transcrição, escolha um idioma de destino e clique em Traduzir. Útil para enviar e-mails de recapitulação aos participantes em seu idioma preferido ou para arquivar reuniões entre idiomas em um único idioma de trabalho.',
        },
      ]}

      ctaHeadline="Transforme sua próxima reunião em notas claras"
      ctaSubtitle="Envie uma gravação de qualquer plataforma e obtenha uma transcrição, resumo e exportações em segundos."
      ctaButton="Carregar uma gravação de reunião"

      relatedLinks={[
        { href: '/pt/interview-transcription',  label: 'Transcrição de Entrevista' },
        { href: '/pt/podcast-transcription',    label: 'Transcrição de Podcast' },
        { href: '/pt/lecture-transcription',    label: 'Transcrição de Palestra' },
        { href: '/pt/business-transcription',   label: 'Transcrição de Negócios' },
        { href: '/pt/voice-memo-to-text',       label: 'Nota de Voz para Texto' },
      ]}
    />
  )
}