import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/descript-alternative',
  'fr': 'https://mictoo.com/fr/descript-alternative',
  'de': 'https://mictoo.com/de/descript-alternative',
  'es': 'https://mictoo.com/es/descript-alternative',
  'ru': 'https://mictoo.com/ru/descript-alternative',
  'it': 'https://mictoo.com/it/descript-alternative',
  'pt': 'https://mictoo.com/pt/descript-alternative',
  'pl': 'https://mictoo.com/pl/descript-alternative',
  'x-default': 'https://mictoo.com/descript-alternative',
}

export const metadata = {
  title: 'Alternativa ao Descript — Transcrição grátis sem cadastro | Mictoo',
  description: 'Procurando uma alternativa ao Descript só para transcrição? O Mictoo oferece transcrição IA grátis sem cadastro, baseada em OpenAI Whisper. Sem editor, sem assinatura.',
  alternates: { canonical: 'https://mictoo.com/pt/descript-alternative', languages: LANGS },
}

export default function PtDescriptAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparação · Descript · Grátis"
      h1={<>Alternativa ao Descript<br /><span className="text-brand-600">Transcrição grátis sem o editor</span></>}
      subtitle="O Descript é um editor completo de áudio/vídeo com transcrição integrada. Se você só precisa da parte de transcrição, o Mictoo é a opção grátis sem cadastro, baseada em OpenAI Whisper."
      competitorName="Descript"
      rows={[
        { label: 'Plano grátis',          mictoo: 'Sem teto mensal, 25 MB por arquivo', them: '1 hora de transcrição por mês' },
        { label: 'Conta exigida',         mictoo: 'Não', them: 'Sim (cadastro por email)' },
        { label: 'Planos pagos',          mictoo: 'Grátis',  them: '$12-24 / mês' },
        { label: 'Editor áudio/vídeo',    mictoo: 'Não',  them: 'Sim (completo)' },
        { label: 'Modelo de transcrição', mictoo: 'OpenAI Whisper', them: 'Proprietário + opção Whisper' },
        { label: 'Resumo IA',             mictoo: 'Sim, grátis', them: 'Sim (pago)' },
        { label: 'Export SRT',            mictoo: 'Sim, grátis', them: 'Sim (pago)' },
        { label: 'Etiquetas de orador',   mictoo: 'Edição manual', them: 'Automático' },
        { label: 'Idiomas',               mictoo: '50+', them: '20+' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: 'Grátis, sem cadastro', desc: 'Envie um arquivo e receba a transcrição sem conta, cartão ou email. O Descript exige cadastro até no plano grátis.' },
        { icon: '⚡', title: 'Mais rápido para casos pontuais', desc: 'Sem app para instalar, sem editor para aprender. Uma página, um drop, resultados em segundos. Feito para transcrição rápida, não produção completa.' },
        { icon: '🔒', title: 'Privacidade em primeiro lugar', desc: 'O áudio é enviado direto à API Whisper da OpenAI e não armazenado nos servidores do Mictoo. Sem projetos, sem biblioteca em nuvem, sem espaço de equipe by design.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Só precisa de transcrição, não de edição',
          'Quer algo grátis sem cadastro',
          'Está transcrevendo uma entrevista, podcast ou reunião pontual',
          'Não quer um app de desktop ou espaço de equipe',
        ],
        them: [
          'Produz podcasts ou vídeos e precisa de um editor real',
          'Quer o fluxo "editar áudio editando o texto"',
          'Precisa de etiquetas de orador automáticas sempre',
          'Trabalha em time com biblioteca compartilhada de projetos',
        ],
      }}
      faq={[
        { q: 'O Mictoo é substituto completo do Descript?', a: 'Não para edição. O Descript é um editor áudio/vídeo com transcrição integrada — o Mictoo é só a parte de transcrição. Se você só precisa de texto ou legendas de uma gravação, o Mictoo substitui esse fluxo grátis.' },
        { q: 'A qualidade da transcrição é a mesma?', a: 'Ambas ferramentas podem usar OpenAI Whisper. O Mictoo usa Whisper exclusivamente, então a precisão é comparável. O Descript oferece um modelo proprietário adicional em alguns planos.' },
        { q: 'O Mictoo tem etiquetas de orador?', a: 'O Mictoo entrega uma única transcrição sem etiquetas automáticas no plano grátis. Você pode adicionar Orador 1 / Orador 2 manualmente no editor do navegador antes do download. O Descript rotula automaticamente.' },
        { q: 'Posso editar a transcrição no Mictoo?', a: 'Sim — a transcrição aparece em uma caixa de texto editável. Você pode corrigir nomes, pontuação ou parágrafos antes de copiar ou baixar como .txt ou .srt.' },
        { q: 'E o export para Word ou DOCX?', a: 'O Mictoo exporta atualmente .txt e .srt. Copie a transcrição e cole no Word para um DOCX rápido. Export DOCX nativo está no roadmap.' },
      ]}
      relatedLinks={[
        { href: '/pt/turboscribe-alternative', label: 'Alternativa ao TurboScribe' },
        { href: '/pt/otter-alternative', label: 'Alternativa ao Otter' },
        { href: '/pt/notta-alternative', label: 'Alternativa ao Notta' },
        { href: '/pt', label: 'Experimente o Mictoo' },
      ]}
    />
  )
}
