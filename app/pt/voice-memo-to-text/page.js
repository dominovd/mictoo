import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/voice-memo-to-text',
  'fr': 'https://mictoo.com/fr/voice-memo-to-text',
  'de': 'https://mictoo.com/de/voice-memo-to-text',
  'es': 'https://mictoo.com/es/voice-memo-to-text',
  'ru': 'https://mictoo.com/ru/voice-memo-to-text',
  'it': 'https://mictoo.com/it/voice-memo-to-text',
  'pt': 'https://mictoo.com/pt/voice-memo-to-text',
  'pl': 'https://mictoo.com/pl/voice-memo-to-text',
  'ja': 'https://mictoo.com/ja/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: 'Memo de voz em texto — Transcreva Voice Memos do iPhone grátis | Mictoo',
  description: 'Converta grátis memos de voz do iPhone e gravações Android em texto. Suporta M4A e MP3. Sem cadastro, sem app. Transcrição IA precisa.',
  alternates: { canonical: 'https://mictoo.com/pt/voice-memo-to-text', languages: LANGS },
}

export default function PtVoiceMemoPage() {
  return (
    <LandingLayout
      badge="iPhone · Android · Grátis"
      h1={<>Memo de voz em texto<br /><span className="text-brand-600">Transcrição grátis online</span></>}
      subtitle="Envie seu memo de voz do iPhone ou gravação Android e receba uma transcrição precisa em segundos. Sem cadastro, sem app para instalar."
      defaultLanguage="pt"
      features={[
        { icon: '📱', title: 'iPhone e Android', desc: 'Os Voice Memos do iPhone são exportados em .m4a — totalmente suportados. Gravadores Android exportam em .m4a, .mp3 ou .wav — todos suportados.' },
        { icon: '🧠', title: 'Ideal para notas e ideias', desc: 'Transforme notas de voz, sessões de brainstorming e lembretes em texto pesquisável para colar no Notion, Obsidian ou seu editor favorito.' },
        { icon: '🆓', title: '100% grátis', desc: 'Sem assinatura, sem compras no app, sem marca d\'água. Sem teto mensal — envie um memo sempre que precisar de uma transcrição.' },
      ]}
      faq={[
        { q: 'Como transferir meu Voice Memo do iPhone para o computador?', a: 'Abra o app Voice Memos, toque no memo, depois em "…" e "Compartilhar" → "Salvar em Arquivos" ou AirDrop para o Mac. Depois envie o arquivo .m4a ao Mictoo no computador.' },
        { q: 'Posso transcrever direto no iPhone?', a: 'Sim. Abra mictoo.com no Safari do iPhone, toque na área de upload e escolha um Voice Memo no app Arquivos. A transcrição aparece em segundos e você pode copiar ou baixar como .txt.' },
        { q: 'Em qual formato o Android salva gravações de voz?', a: 'A maioria dos celulares Android salva em .m4a ou .mp3 dependendo do app de gravação. Ambos os formatos são compatíveis. Alguns apps usam .amr — converta primeiro para .m4a com qualquer conversor gratuito.' },
        { q: 'Minha gravação de voz é privada?', a: 'Sim. Os arquivos são enviados ao motor IA somente para a transcrição e nunca armazenados em nossos servidores. A transcrição fica no seu navegador e é só sua.' },
        { q: 'E se meu memo passar de 25 MB?', a: 'Os Voice Memos do iPhone ocupam ~1 MB por minuto na qualidade padrão — então 25 minutos cabem em 25 MB. Para memos mais longos, mude a qualidade do Voice Memos para "Comprimido" em Ajustes → Voice Memos, ou divida a gravação.' },
      ]}
      relatedLinks={[
        { href: '/pt', label: 'Todos os formatos' },
        { href: '/pt/meeting-transcription', label: 'Transcrição de reuniões' },
        { href: '/pt/interview-transcription', label: 'Transcrição de entrevistas' },
      ]}
    />
  )
}
