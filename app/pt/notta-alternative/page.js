import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/notta-alternative',
  'fr': 'https://mictoo.com/fr/notta-alternative',
  'de': 'https://mictoo.com/de/notta-alternative',
  'es': 'https://mictoo.com/es/notta-alternative',
  'ru': 'https://mictoo.com/ru/notta-alternative',
  'it': 'https://mictoo.com/it/notta-alternative',
  'pt': 'https://mictoo.com/pt/notta-alternative',
  'pl': 'https://mictoo.com/pl/notta-alternative',
  'x-default': 'https://mictoo.com/notta-alternative',
}

export const metadata = {
  title: 'Alternativa ao Notta — Transcrição grátis sem limites mensais | Mictoo',
  description: 'O Notta limita usuários grátis a 120 minutos por mês e cada transcrição a 3 minutos. O Mictoo é grátis, sem cadastro, sem cota mensal de minutos — baseado em OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/pt/notta-alternative', languages: LANGS },
}

export default function PtNottaAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparação · Notta · Grátis"
      h1={<>Alternativa ao Notta<br /><span className="text-brand-600">Sem teto mensal de 120 minutos</span></>}
      subtitle="O Notta é uma ferramenta all-in-one de transcrição popular, mas o plano grátis limita a 120 minutos por mês e 3 minutos por arquivo. O Mictoo não tem cota mensal e só um limite por tamanho de arquivo — grátis, sem cadastro."
      competitorName="Notta"
      rows={[
        { label: 'Plano grátis',          mictoo: 'Sem teto mensal, 25 MB por arquivo', them: '120 min/mês, 3 min por arquivo' },
        { label: 'Conta exigida',         mictoo: 'Não', them: 'Sim (cadastro por email)' },
        { label: 'Planos pagos',          mictoo: 'Grátis',  them: '$9 - 25 / usuário / mês' },
        { label: 'Duração por arquivo',   mictoo: '~25 min (limite de tamanho)', them: '3 min (grátis) / 5 h (pago)' },
        { label: 'Transcrição live',      mictoo: 'Não', them: 'Sim (Notta Bot em reuniões)' },
        { label: 'Resumo IA',             mictoo: 'Sim, grátis', them: 'Sim (pago)' },
        { label: 'Modelo de transcrição', mictoo: 'OpenAI Whisper', them: 'Proprietário' },
        { label: 'Etiquetas de orador',   mictoo: 'Edição manual', them: 'Automático (pago)' },
        { label: 'Idiomas',               mictoo: '50+', them: '100+ (planos pagos)' },
      ]}
      whyMictoo={[
        { icon: '⏳', title: 'Sem limite de 3 minutos por arquivo', desc: 'O limite de 3 minutos por arquivo do Notta é curto demais para podcast, aula ou entrevista. O Mictoo lida com arquivos de áudio de ~25 minutos grátis.' },
        { icon: '🆓', title: 'Sem cota mensal de minutos', desc: 'O Notta conta cada minuto contra uma cota de 120 min/mês. O Mictoo limita só o tamanho individual do arquivo — envie um arquivo ou vários, sem contagem de minutos.' },
        { icon: '✨', title: 'Resumo IA no plano grátis', desc: 'O Notta põe resumos IA nos planos pagos. O Mictoo gera um resumo com pontos-chave e action items grátis, sempre.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Precisa transcrever grátis arquivos com mais de 3 minutos',
          'Não quer bater no teto mensal de 120 minutos',
          'Quer resumo IA sem pagar',
          'Não precisa de diarização automática de oradores',
        ],
        them: [
          'Precisa de um Notta Bot que entre nas reuniões ao vivo',
          'Precisa de etiquetas de orador automáticas',
          'Quer um fluxo integrado com CRM',
          'Tudo bem pagar por funcionalidades ilimitadas',
        ],
      }}
      faq={[
        { q: 'O Mictoo é realmente grátis sem cota de minutos?', a: 'Sim. O único limite é o tamanho por arquivo (25 MB, que equivale a cerca de 25 minutos em bitrate típico de podcast). Sem tracking mensal de minutos e sem limite de número de arquivos.' },
        { q: 'Por que o Notta limita tanto os usuários grátis?', a: 'O Notta usa modelo freemium onde o plano grátis é intencionalmente limitado para incentivar upgrades pagos. O modelo do Mictoo é ad-supported, então o plano grátis é generoso by design.' },
        { q: 'Como o Mictoo ganha dinheiro se é grátis?', a: 'Anúncios display (Google AdSense) exibidos no estado de carregamento enquanto um arquivo é transcrito. A transcrição em si e a área de upload são sem anúncios.' },
        { q: 'O Mictoo suporta transcrição live de reuniões?', a: 'Não — o Mictoo trabalha só sobre arquivos gravados. Para captura live, use as legendas integradas da sua plataforma (Zoom, Google Meet, Teams) e envie a gravação ao Mictoo depois para uma transcrição polida.' },
        { q: 'Quais idiomas o Mictoo suporta?', a: 'O OpenAI Whisper lida com mais de 50 idiomas com detecção automática — português, inglês, espanhol, francês, alemão, russo, ucraniano, japonês, chinês, árabe, hindi, coreano e muitos outros. Não precisa selecionar o idioma a menos que a detecção erre.' },
      ]}
      relatedLinks={[
        { href: '/pt/turboscribe-alternative', label: 'Alternativa ao TurboScribe' },
        { href: '/pt/otter-alternative', label: 'Alternativa ao Otter' },
        { href: '/pt/podcast-transcription', label: 'Transcrição de podcasts' },
        { href: '/pt', label: 'Experimente o Mictoo' },
      ]}
    />
  )
}
