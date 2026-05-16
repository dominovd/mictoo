import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/otter-alternative',
  'fr': 'https://mictoo.com/fr/otter-alternative',
  'de': 'https://mictoo.com/de/otter-alternative',
  'es': 'https://mictoo.com/es/otter-alternative',
  'ru': 'https://mictoo.com/ru/otter-alternative',
  'it': 'https://mictoo.com/it/otter-alternative',
  'pt': 'https://mictoo.com/pt/otter-alternative',
  'x-default': 'https://mictoo.com/otter-alternative',
}

export const metadata = {
  title: 'Alternativa ao Otter — Transcreva gravações, não reuniões live | Mictoo',
  description: 'O Otter é feito para transcrição live de reuniões com legendas em tempo real. O Mictoo transcreve as gravações que você já tem — grátis, sem cadastro, sem bot. Baseado em OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/pt/otter-alternative', languages: LANGS },
}

export default function PtOtterAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparação · Otter · Grátis"
      h1={<>Alternativa ao Otter<br /><span className="text-brand-600">Para gravações, não reuniões live</span></>}
      subtitle="O Otter é famoso pela transcrição live de reuniões — as legendas aparecem enquanto as pessoas falam. O Mictoo resolve a outra metade do problema: uma gravação que você já tem, transcrita em texto em segundos. Grátis, sem cadastro, OpenAI Whisper."
      competitorName="Otter"
      rows={[
        { label: 'Plano grátis',          mictoo: 'Sem teto mensal, 25 MB por arquivo', them: '300 minutos / mês, 30 min por gravação' },
        { label: 'Conta exigida',         mictoo: 'Não', them: 'Sim (cadastro por email)' },
        { label: 'Planos pagos',          mictoo: 'Grátis',  them: '$8.33 - 30 / usuário / mês' },
        { label: 'Transcrição live',      mictoo: 'Não', them: 'Sim (legendas em tempo real)' },
        { label: 'Upload de gravação',    mictoo: 'Sim (drag-n-drop)', them: 'Sim (import pago)' },
        { label: 'Resumo IA',             mictoo: 'Sim, grátis', them: 'Sim (pago)' },
        { label: 'Modelo de transcrição', mictoo: 'OpenAI Whisper', them: 'Proprietário' },
        { label: 'Etiquetas de orador',   mictoo: 'Edição manual', them: 'Automático (pago)' },
        { label: 'Idiomas',               mictoo: '50+', them: '3 (inglês, francês, espanhol)' },
      ]}
      whyMictoo={[
        { icon: '🌍', title: '50+ idiomas contra 3', desc: 'O Otter suporta só inglês, francês e espanhol. O Mictoo usa Whisper, que lida com mais de 50 idiomas com detecção automática — português, alemão, russo, japonês, árabe, ucraniano e outros.' },
        { icon: '🆓', title: 'Sem teto de 300 minutos', desc: 'O plano grátis do Otter limita a 300 minutos por mês. O Mictoo não tem cota de minutos — só o limite de 25 MB por arquivo.' },
        { icon: '🚫', title: 'Nenhum bot nas suas reuniões', desc: 'O valor do Otter é o bot live que entra nas chamadas. Se você prefere gravar localmente sem bot IA na reunião, o Mictoo encaixa nesse fluxo.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Você tem uma gravação e quer uma transcrição rápida e grátis',
          'Trabalha com áudio não inglês (português, russo, japonês, etc.)',
          'Não quer um bot IA nas suas chamadas',
          'Transcreve podcasts, aulas, voice memos, não só reuniões',
        ],
        them: [
          'Quer legendas live durante reuniões',
          'Está em time que precisa de notas de reunião compartilhadas',
          'A integração Otter Assistant com Zoom/Google Meet é crítica',
          'A diarização de oradores é requisito obrigatório (plano pago)',
        ],
      }}
      faq={[
        { q: 'O Mictoo faz transcrição live como o Otter?', a: 'Não. O Mictoo trabalha só sobre arquivos gravados. Para transcrição em tempo real durante uma reunião, use o Otter, as legendas integradas do Zoom ou do Google Meet. Use o Mictoo depois se quiser um arquivo de transcrição polido.' },
        { q: 'O Mictoo substitui o Otter para podcasters?', a: 'Para transcrição de podcast especificamente, sim. Envie seu MP3/M4A, receba a transcrição, baixe como .txt ou .srt. O valor do Otter é a captura live; o do Mictoo, a transcrição rápida pós-gravação.' },
        { q: 'E os resumos de reunião?', a: 'Ambas ferramentas geram resumos IA com pontos-chave e action items. O Otter põe nos planos pagos; o Mictoo oferece grátis em cada transcrição.' },
        { q: 'O Mictoo é preciso com áudio não inglês?', a: 'Sim — o OpenAI Whisper é um dos modelos de voz multilíngues mais fortes disponíveis. O Otter é limitado a inglês, francês e espanhol; o Mictoo lida com mais de 50 idiomas com detecção automática.' },
        { q: 'O Mictoo tem app móvel?', a: 'Não tem app nativo, mas o site funciona em navegadores móveis. Abra mictoo.com no iPhone ou Android, escolha um arquivo do dispositivo, receba a transcrição.' },
      ]}
      relatedLinks={[
        { href: '/pt/fireflies-alternative', label: 'Alternativa ao Fireflies' },
        { href: '/pt/meeting-transcription', label: 'Transcrição de reuniões' },
        { href: '/pt/voice-memo-to-text', label: 'Memo de voz em texto' },
        { href: '/pt', label: 'Experimente o Mictoo' },
      ]}
    />
  )
}
