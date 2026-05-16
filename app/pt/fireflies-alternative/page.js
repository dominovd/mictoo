import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/fireflies-alternative',
  'fr': 'https://mictoo.com/fr/fireflies-alternative',
  'de': 'https://mictoo.com/de/fireflies-alternative',
  'es': 'https://mictoo.com/es/fireflies-alternative',
  'ru': 'https://mictoo.com/ru/fireflies-alternative',
  'it': 'https://mictoo.com/it/fireflies-alternative',
  'pt': 'https://mictoo.com/pt/fireflies-alternative',
  'pl': 'https://mictoo.com/pl/fireflies-alternative',
  'ja': 'https://mictoo.com/ja/fireflies-alternative',
  'x-default': 'https://mictoo.com/fireflies-alternative',
}

export const metadata = {
  title: 'Alternativa ao Fireflies — Transcreva reuniões sem bot | Mictoo',
  description: 'O Fireflies entra nas suas reuniões como bot para gravar e transcrever. O Mictoo transcreve as gravações que você já tem — sem bot, sem cadastro, sem OAuth. Grátis com OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/pt/fireflies-alternative', languages: LANGS },
}

export default function PtFirefliesAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparação · Fireflies · Grátis"
      h1={<>Alternativa ao Fireflies<br /><span className="text-brand-600">Transcreva reuniões sem bot</span></>}
      subtitle="O Fireflies entra nas suas reuniões como bot IA para gravar e transcrever em tempo real. O Mictoo funciona ao contrário — envie a gravação que você já tem e receba a transcrição. Sem bot, sem integração com calendário, sem cadastro."
      competitorName="Fireflies"
      rows={[
        { label: 'Plano grátis',          mictoo: 'Sem teto mensal, 25 MB por arquivo', them: '800 minutos / usuário / mês' },
        { label: 'Conta exigida',         mictoo: 'Não', them: 'Sim (email + OAuth)' },
        { label: 'Planos pagos',          mictoo: 'Grátis',  them: '$10-19 / usuário / mês' },
        { label: 'Método de gravação',    mictoo: 'Você envia a gravação', them: 'O bot entra na call ao vivo' },
        { label: 'Transcrição live',      mictoo: 'Não', them: 'Sim (durante a chamada)' },
        { label: 'Integração calendário', mictoo: 'Não', them: 'Google / Outlook / Zoom' },
        { label: 'Resumo IA',             mictoo: 'Sim, grátis', them: 'Sim (pago)' },
        { label: 'Integração CRM',        mictoo: 'Não', them: 'Salesforce, HubSpot, etc.' },
        { label: 'Modelo de transcrição', mictoo: 'OpenAI Whisper', them: 'Proprietário' },
      ]}
      whyMictoo={[
        { icon: '🚫', title: 'Nenhum bot nas suas reuniões', desc: 'Alguns participantes ficam desconfortáveis com um bot IA gravando a chamada. Com o Mictoo, você grava localmente com Zoom/Meet/Teams e transcreve depois.' },
        { icon: '🆓', title: 'Sem cadastro, sem cota', desc: 'O plano grátis do Fireflies limita a 800 minutos por usuário/mês e exige OAuth. O Mictoo funciona sem conta e sem contagem mensal de minutos.' },
        { icon: '🌍', title: 'Melhor para áudio não-inglês', desc: 'O OpenAI Whisper lida com mais de 50 idiomas com alta precisão. O Fireflies é otimizado para chamadas de negócio em inglês e é mais fraco em idiomas como russo, ucraniano, polonês ou coreano.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Você grava as reuniões e quer uma transcrição depois',
          'Não quer um bot IA nas suas chamadas',
          'Precisa de transcrição para reuniões em outros idiomas',
          'Quer uma opção grátis sem cadastro para gravações pontuais',
        ],
        them: [
          'Quer transcrição live durante a reunião',
          'Precisa de logging CRM das conversas de vendas',
          'Seu time quer gravação automática de todas as calls',
          'Precisa de analytics de conversa (tempo de fala, sentimento, etc.)',
        ],
      }}
      faq={[
        { q: 'O Mictoo pode entrar na minha reunião Zoom ou Teams como o Fireflies?', a: 'Não. O Mictoo não entra em reuniões. Você grava a call com a gravação integrada do Zoom/Teams/Meet e envia o arquivo. Isso evita o bot nas suas reuniões e as preocupações de privacidade associadas.' },
        { q: 'Como obtenho uma gravação para enviar?', a: 'No Zoom: habilite Local Recording ou Cloud Recording na reunião. Após a reunião, baixe o MP4 ou M4A do Zoom e envie ao Mictoo.' },
        { q: 'O Mictoo faz action items e resumo como o Fireflies?', a: 'Sim. Após a transcrição, o Resumo IA do Mictoo mostra uma visão geral de 2-3 frases, pontos-chave e action items — tudo no plano grátis. O Fireflies oferece funções similares apenas em planos pagos.' },
        { q: 'E os analytics de reunião?', a: 'O Mictoo não faz tempo de fala, sentimento ou analytics de orador. Se você precisa de conversation intelligence para coaching de vendas, o Fireflies (ou Gong) é melhor.' },
        { q: 'O Mictoo é seguro para reuniões confidenciais?', a: 'Os arquivos são enviados direto à API Whisper da OpenAI e descartados. O Mictoo não armazena nada. Segundo a política de dados da API da OpenAI, seu áudio não é usado para treino e é excluído após no máximo 30 dias de monitoramento anti-abuso.' },
      ]}
      relatedLinks={[
        { href: '/pt/otter-alternative', label: 'Alternativa ao Otter' },
        { href: '/pt/meeting-transcription', label: 'Transcrição de reuniões' },
        { href: '/pt/zoom-transcription', label: 'Transcrição do Zoom' },
        { href: '/pt', label: 'Experimente o Mictoo' },
      ]}
    />
  )
}
