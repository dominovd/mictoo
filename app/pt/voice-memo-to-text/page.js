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
  'ko': 'https://mictoo.com/ko/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: 'Memo de voz em texto — transcreva Voice Memos do iPhone grátis | Mictoo',
  description:
    'Transcrição grátis de memo de voz. Solte seu memo do iPhone ou gravação Android (M4A, MP3) e receba texto limpo em segundos. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/voice-memo-to-text', languages: LANGS },

  openGraph: {
    title: "Memo de voz em texto — transcreva Voice Memos do iPhone grátis | Mictoo",
    description: "Transcrição grátis de memo de voz. Solte seu memo do iPhone ou gravação Android (M4A, MP3) e receba texto limpo em segundos. Sem cadastro.",
    url: "https://mictoo.com/pt/voice-memo-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Memo de voz em texto — transcreva Voice Memos do iPhone grátis | Mictoo",
    description: "Transcrição grátis de memo de voz. Solte seu memo do iPhone ou gravação Android (M4A, MP3) e receba texto limpo em segundos. Sem cadastro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtVoiceMemoPage() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="iPhone · Android · Grátis"
      h1={<>Memo de voz em texto<br /><span className="text-brand-600">Transcritor grátis de memos de voz</span></>}
      subtitle="Transforme memos de voz em texto limpo. iPhone, Android, gravador dedicado, qualquer arquivo de voz. Solte, receba a transcrição em segundos. Sem cadastro, sem cobrança por minuto."
      howItWorks={[
        { icon: '📱', title: 'Leve o memo para o computador (ou suba do celular)', desc: 'iPhone: abra Voice Memos, toque em Compartilhar, mande por AirDrop ou email para você mesmo. Android: ache a gravação em Arquivos ou na pasta do seu app gravador. Ou use o navegador mobile para enviar direto do celular.' },
        { icon: '📂', title: 'Solte o arquivo', desc: 'M4A do iPhone, M4A ou MP3 do Android, WAV de alguns gravadores. Tudo funciona.' },
        { icon: '📋', title: 'Pegue a transcrição', desc: 'Leia no navegador, copie para a área de transferência ou baixe como TXT. Cole no Notion, Apple Notes, Google Docs ou onde suas notas vivem.' },
      ]}
      whyUse={{ title: 'Por que Mictoo para memos de voz', bullets: [
        { title: 'Suporte nativo a M4A', desc: 'Voice Memos do iPhone são salvos como M4A. Aceitamos M4A direto. Sem conversão necessária.' },
        { title: 'Grátis, sem contador por minuto', desc: 'Memos de voz são formato "um por vez". Pagar por minuto para uma ideia de 2 minutos é ridículo. Grátis sem cap se encaixa no caso de uso.' },
        { title: 'Rápido para arquivos curtos', desc: 'Um memo de voz de 2 minutos transcreve em cerca de 5 segundos. Mais rápido que digitar a ideia.' },
        { title: 'Privacidade', desc: 'Memos de voz frequentemente são pessoais. Seu áudio vai ao provedor de transcrição, é processado e descartado. Não guardamos.' },
        { title: 'Mobile-friendly', desc: 'Envie direto do celular pelo navegador. iOS e Android funcionam.' },
        { title: 'A detecção automática lida com o seu idioma', desc: 'Memos de voz em qualquer um de mais de 50 idiomas. Útil se você pensa em dois idiomas e os memos alternam.' },
      ]}}
      useCases={{ title: 'Para que as pessoas usam transcrições de memo de voz', items: [
        { title: 'Captura de ideias em movimento', desc: 'Você teve um pensamento durante uma caminhada, ditou no celular. Agora quer agir. Transcreva, cole no seu task manager ou app de notas.' },
        { title: 'Ditado de textos longos', desc: 'Algumas pessoas rascunham ensaios, posts de blog ou emails falando. Transcreva o memo de voz, edite o texto, envie.' },
        { title: 'Action items depois de uma reunião', desc: 'Você se ditou um resumo no caminho de volta da sala de reuniões. Transcreva, cole no doc do projeto.' },
        { title: 'Notas de campo para jornalistas e pesquisadores', desc: 'Capture observações e citações no local. Transcreva depois para notas organizadas.' },
        { title: 'Listas-lembrete (mercado, mala de viagem, planos de projeto)', desc: 'Memos de voz são mais rápidos que digitar no celular. Transcreva para uma versão textual pesquisável e editável.' },
      ]}}
      proTips={{ title: 'Dicas para transcrição de memo de voz', tips: [
        { title: 'Mantenha o celular perto, mas não tão perto', desc: '10-15 cm da boca é o ponto doce. Mais perto e o microfone pega plosivas e respiração. Mais longe e você perde inteligibilidade em ambientes ruidosos.' },
        { title: 'Vento é o inimigo', desc: 'Um memo de voz de 10 segundos numa rua ventosa pode ser inutilizável. Se puder, pare, dê as costas para o vento, depois grave. Ou use fones com microfone resistente a vento.' },
        { title: 'Pause antes de palavras-chave', desc: 'Quando ditar um nome, endereço ou termo técnico, dê uma pausa curta antes. O Whisper lida com palavras isoladas melhor que fala rápida para nomes próprios.' },
        { title: 'Voice Memos do iPhone vem padrão em M4A lossless, mas você pode mudar para lossy', desc: 'Ajustes, Voice Memos, Qualidade de áudio. Lossless é exagero para transcrição. Lossy é um terço do tamanho sem diferença de precisão.' },
        { title: 'Corte silêncio no começo e fim antes do upload', desc: 'Memos de voz às vezes pegam 3-5 segundos de ar morto. Corte no app Voice Memos (toque em Editar) antes de compartilhar. Arquivo menor, transcrito mais rápido.' },
        { title: 'Para ditados longos (escrever um rascunho por voz), divida em pedaços de 5-10 minutos', desc: 'Mais fácil de editar. Mais fácil regravar um pedaço único se sair errado.' },
        { title: 'O Whisper lida com seu sotaque melhor que a função de ditado integrada do telefone', desc: 'iOS tem ditado integrado, mas é inglês-first e mais fraco em sotaques. O Whisper cobre mais de 50 idiomas com precisão melhor.' },
      ]}}
      faq={[
        { q: 'O Mictoo suporta Voice Memos do iPhone?', a: 'Sim. Voice Memos do iPhone salva como M4A (às vezes lossless como ALAC). O M4A funciona direto. Para ALAC, converta para WAV ou M4A AAC antes.' },
        { q: 'Como levo o memo de voz do iPhone para o Mictoo?', a: 'Três opções. Abra o memo em Voice Memos, toque Compartilhar, escolha AirDrop para o Mac (mais rápido) ou email para você mesmo. Ou use Safari no iPhone para abrir mictoo.com e enviar direto do app Arquivos.' },
        { q: 'E gravações de voz Android?', a: 'Gravadores de voz Android normalmente salvam como M4A ou MP3. Os dois funcionam. Ache o arquivo no app Arquivos, compartilhe para o computador ou envie do navegador mobile.' },
        { q: 'Posso enviar direto do celular?', a: 'Sim. A página é mobile-friendly. Toque na área de upload, escolha o arquivo do app Arquivos do seu celular ou da pasta de gravações.' },
        { q: 'Quanto pode ter meu memo de voz?', a: 'Até 30 minutos por arquivo grátis, 60 minutos com cadastro. A maioria dos memos de voz fica abaixo de 5 minutos, bem dentro de qualquer limite.' },
        { q: 'Quão precisa é a transcrição de memo de voz?', a: 'Para fala clara em ambiente quieto: 90-95%. Para fala mastigada, ruído de fundo (rua, café, carro), a precisão cai. Nomes próprios frequentemente precisam de cleanup.' },
        { q: 'A transcrição vai ter pontuação?', a: 'Sim. O Whisper adiciona pontuação automaticamente. Nem sempre perfeito para fala ditada (que tem fronteiras de frase menos naturais), mas utilizável assim mesmo.' },
        { q: 'Funciona para ditar num idioma não-inglês?', a: 'Sim, mais de 50 idiomas. Escolha o idioma manualmente no menu para memos curtos (a detecção automática precisa de mais áudio para ser confiável).' },
        { q: 'Meu memo de voz é guardado?', a: 'Não. O arquivo vai ao nosso provedor de transcrição, é processado, depois descartado.' },
        { q: 'Posso editar a transcrição antes de baixar?', a: 'Sim. Corrija palavras erradas no navegador antes de exportar.' },
        { q: 'Funciona para gravar chamadas telefônicas?', a: 'Transcrevemos o arquivo que você envia, independente de como foi gravado. A gravação de chamada em si exige consentimento na maior parte das jurisdições. Obtenha consentimento antes de gravar.' },
        { q: 'Qual a diferença com a função de ditado integrada do iOS?', a: 'O ditado iOS é em tempo real enquanto você fala, limitado a certos idiomas e mais fraco em sotaques. Mictoo transcreve após a gravação, suporta mais de 50 idiomas e usa um modelo mais preciso (Whisper large-v3).' },
      ]}
      relatedLinks={[
        { href: '/pt/m4a-to-text', label: 'M4A em texto', desc: 'Específico para arquivos M4A.' },
        { href: '/pt/dictation-to-text', label: 'Ditado em texto', desc: 'Para rascunhos ditados e escrita de formato longo por voz.' },
        { href: '/pt/interview-transcription', label: 'Transcrição de entrevista', desc: 'Para entrevistas gravadas no telefone.' },
        { href: '/pt/transcribe-audio-to-text', label: 'Áudio em texto', desc: 'Para outros formatos de áudio.' },
      ]}
    />
  )
}
