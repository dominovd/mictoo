import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/turboscribe-alternative',
  'fr': 'https://mictoo.com/fr/turboscribe-alternative',
  'de': 'https://mictoo.com/de/turboscribe-alternative',
  'es': 'https://mictoo.com/es/turboscribe-alternative',
  'ru': 'https://mictoo.com/ru/turboscribe-alternative',
  'it': 'https://mictoo.com/it/turboscribe-alternative',
  'pt': 'https://mictoo.com/pt/turboscribe-alternative',
  'pl': 'https://mictoo.com/pl/turboscribe-alternative',
  'ja': 'https://mictoo.com/ja/turboscribe-alternative',
  'x-default': 'https://mictoo.com/turboscribe-alternative',
}

export const metadata = {
  title: 'Alternativa ao TurboScribe — Transcrição Whisper grátis, sem cadastro | Mictoo',
  description: 'O TurboScribe é uma ferramenta popular baseada em Whisper, mas exige conta e limita usuários grátis a 30 minutos por dia. O Mictoo é totalmente sem cadastro com resumo IA integrado.',
  alternates: { canonical: 'https://mictoo.com/pt/turboscribe-alternative', languages: LANGS },
}

export default function PtTurboScribeAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparação · TurboScribe · Grátis"
      h1={<>Alternativa ao TurboScribe<br /><span className="text-brand-600">Mesmo Whisper, sem cadastro</span></>}
      subtitle="O TurboScribe e o Mictoo usam ambos OpenAI Whisper, então a qualidade da transcrição é quase idêntica. As principais diferenças são cadastro, limites de arquivo e resumo IA integrado."
      competitorName="TurboScribe"
      rows={[
        { label: 'Plano grátis',          mictoo: 'Sem teto mensal, 25 MB por arquivo', them: '3 arquivos por dia, 30 min cada' },
        { label: 'Conta exigida',         mictoo: 'Não', them: 'Sim (cadastro por email)' },
        { label: 'Planos pagos',          mictoo: 'Grátis',  them: '$20 / mês ilimitado' },
        { label: 'Tamanho arquivo (grátis)', mictoo: '25 MB por arquivo', them: '~150 MB / 30 min por arquivo' },
        { label: 'Tamanho arquivo (pago)', mictoo: 'Mesmo do grátis', them: '5 GB / 10 h por arquivo' },
        { label: 'Upload em lote',        mictoo: 'Não', them: 'Sim (pago, até 50 arquivos)' },
        { label: 'Modelo de transcrição', mictoo: 'OpenAI Whisper', them: 'OpenAI Whisper' },
        { label: 'Resumo IA',             mictoo: 'Sim, grátis', them: 'Sim (pago)' },
        { label: 'Export SRT',            mictoo: 'Sim, grátis', them: 'Sim' },
        { label: 'Histórico de transcrições', mictoo: 'Não', them: 'Sim (baseado em conta)' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: 'Realmente sem cadastro', desc: 'O TurboScribe pede email mesmo no plano grátis. O Mictoo não pede nada — envia arquivo, recebe texto. Útil para gravações pontuais quando você não quer mais uma conta.' },
        { icon: '✨', title: 'Resumo IA no plano grátis', desc: 'O Mictoo gera automaticamente um resumo de 2-3 frases, pontos-chave e action items após cada transcrição. O TurboScribe põe o resumo IA atrás do paywall de $20/mês.' },
        { icon: '🔒', title: 'Nada é armazenado', desc: 'Sem histórico de transcrições, sem workspace na nuvem, sem projetos. O áudio é enviado ao Whisper e descartado imediatamente. O TurboScribe armazena suas transcrições na conta.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Você quer zero fricção de cadastro',
          'Precisa de resumo IA no plano grátis',
          'Seus arquivos têm menos de 25 MB (ou você pode comprimir)',
          'Valoriza não ter um histórico armazenado',
        ],
        them: [
          'Precisa de arquivos maiores que 25 MB no plano grátis',
          'Quer um histórico de todas as transcrições passadas',
          'Precisa enviar muitos arquivos de uma vez (batch)',
          'Tudo bem pagar $20/mês por arquivos grandes ilimitados',
        ],
      }}
      faq={[
        { q: 'A qualidade da transcrição é a mesma?', a: 'Sim, essencialmente. Ambas ferramentas usam o modelo Whisper da OpenAI. As diferenças vêm de como cada ferramenta segmenta o áudio e lida com casos limite, mas a precisão central é comparável.' },
        { q: 'Por que o Mictoo tem limite menor de arquivo?', a: 'O limite de 25 MB vem da API Whisper da OpenAI. O TurboScribe lida com arquivos maiores dividindo-os em seus servidores e juntando os resultados. Estamos trabalhando na mesma abordagem.' },
        { q: 'Posso transcrever arquivos longos com o Mictoo?', a: 'Por enquanto os arquivos precisam ficar abaixo de 25 MB. O guia how-to-compress-audio no nosso site descreve três formas rápidas: extrair o áudio, reduzir o bitrate ou dividir em segmentos.' },
        { q: 'O Mictoo planeja adicionar conta/histórico?', a: 'Um histórico local (no navegador, sem conta no servidor) está no roadmap. Histórico em nuvem com cadastro não está no produto intencionalmente — conflita com o posicionamento sem cadastro.' },
        { q: 'Qual é mais rápido?', a: 'O TurboScribe anuncia ~30 minutos processados em menos de um minuto. O Mictoo é similar — a maioria dos arquivos é transcrita em 15-30 segundos. Ambos parecem quase instantâneos para arquivos abaixo de 25 minutos.' },
      ]}
      relatedLinks={[
        { href: '/pt/descript-alternative', label: 'Alternativa ao Descript' },
        { href: '/pt/notta-alternative', label: 'Alternativa ao Notta' },
        { href: '/pt', label: 'Experimente o Mictoo' },
      ]}
    />
  )
}
