import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'pt': 'https://mictoo.com/pt/interview-transcription',
  'pl': 'https://mictoo.com/pl/interview-transcription',
  'ja': 'https://mictoo.com/ja/interview-transcription',
  'ko': 'https://mictoo.com/ko/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: 'Transcrição de entrevista — gerador IA grátis | Mictoo',
  description:
    'Transcrição de entrevista grátis com IA. Envie sua gravação (MP3, M4A, MP4, WAV) e receba uma transcrição limpa com timecode em segundos. Feito para jornalistas e pesquisadores.',
  alternates: { canonical: 'https://mictoo.com/pt/interview-transcription', languages: LANGS },

  openGraph: {
    title: "Transcrição de entrevista — gerador IA grátis | Mictoo",
    description: "Transcrição de entrevista grátis com IA. Envie sua gravação (MP3, M4A, MP4, WAV) e receba uma transcrição limpa com timecode em segundos. Feito para jornalistas e pesquisadores.",
    url: "https://mictoo.com/pt/interview-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcrição de entrevista — gerador IA grátis | Mictoo",
    description: "Transcrição de entrevista grátis com IA. Envie sua gravação (MP3, M4A, MP4, WAV) e receba uma transcrição limpa com timecode em segundos. Feito para jornalistas e pesquisadores.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtInterviewPage() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="Jornalismo · Pesquisa · Grátis"
      h1={<>Transcrição de entrevista<br /><span className="text-brand-600">Transcrições de entrevista grátis</span></>}
      subtitle="Transforme qualquer gravação de entrevista em texto limpo e citável. Para jornalistas, pesquisadores, podcasters, times de recruiting. Sem cadastro, sem cobrança por minuto, sem email."
      howItWorks={[
        { icon: '🎙️', title: 'Solte o áudio da entrevista', desc: 'MP3 de um gravador de voz, M4A de um telefone, MP4 de uma videochamada, WAV de um gravador de campo. Tudo funciona.' },
        { icon: '⚡', title: 'A IA transcreve', desc: 'O Whisper large-v3 lê o áudio. Uma entrevista de 30 minutos normalmente termina em cerca de um minuto.' },
        { icon: '📋', title: 'Leia, edite, exporte', desc: 'Folheie a transcrição com timecode. Corrija nomes ou jargão errados inline. Baixe como TXT para notas, SRT para vídeo, ou copie para o software de coding.' },
      ]}
      whyUse={{ title: 'Por que Mictoo para transcrição de entrevista', bullets: [
        { title: 'O Whisper se dá bem com entrevistas', desc: 'Gravações únicas com duas vozes e troca clara são o caso mais limpo para reconhecimento de fala. A maioria das entrevistas chega a 90-95% de precisão na primeira passada.' },
        { title: 'Timecode para citação e busca de fonte', desc: 'Cada linha do export SRT tem um timecode. Quando você precisa verificar uma citação ou voltar a um momento exato da gravação, o timecode diz onde.' },
        { title: 'Sem custo por entrevista', desc: 'Alguns serviços de transcrição cobram por minuto ou por entrevista. Nós não. Transcreva uma ou cinquenta, o preço é o mesmo (grátis).' },
        { title: 'Mais de 50 idiomas, inclusive entrevistas bilíngues', desc: 'Entrevistas cross-linguísticas são comuns em pesquisa e jornalismo. O Whisper lida com code-switching melhor que a maioria dos serviços.' },
        { title: 'Privacidade e proteção de fonte', desc: 'O arquivo vai ao provedor de transcrição e é descartado. Não guardamos o áudio. Para material-fonte sensível, isso conta.' },
      ]}}
      useCases={{ title: 'Quem usa transcrições de entrevista', items: [
        { title: 'Jornalismo e escrita de feature', desc: 'Repórteres transcrevem entrevistas para citar com precisão e percorrer conversas longas em busca do material mais útil. Uma entrevista de 60 minutos frequentemente vira 3-5 citações-chave no texto publicado.' },
        { title: 'Pesquisa qualitativa e estudos acadêmicos', desc: 'Pesquisadores transcrevem entrevistas semi-estruturadas para codificar e analisar em ferramentas como NVivo, Atlas.ti ou MAXQDA. A transcrição é o dataset.' },
        { title: 'Entrevistas de podcast', desc: 'Hosts transcrevem entrevistas com convidados para show notes, posts de blog de episódio e gráficos de citação para social. O áudio alcança um público, o texto alcança outro via busca.' },
        { title: 'Recruiting e screening de candidatos', desc: 'Recruiters e hiring managers transcrevem entrevistas para compartilhar com o time. Mais fácil que vídeo para revisores em fusos diferentes. Mais fácil comparar notas quando todo mundo tem o mesmo texto.' },
        { title: 'User research e customer interview', desc: 'Times de produto transcrevem conversas com clientes para achar padrões. A transcrição vai no research repository (Dovetail, Marvin ou um Notion compartilhado).' },
      ]}}
      proTips={{ title: 'Dicas para transcrever entrevistas', tips: [
        { title: 'Use um microfone de verdade, mesmo para entrevista por telefone', desc: 'Um lavalier ou USB para o entrevistado presencial, e cuffies decentes para o entrevistador no telefone. A qualidade da gravação é o maior fator individual na precisão da transcrição.' },
        { title: 'Grave num lugar tranquilo', desc: 'Entrevistas em café ficam ótimas na câmera e transcrevem mal. Música de fundo e papo paralelo prejudicam a precisão mais do que as pessoas acham.' },
        { title: 'Para entrevistas a duas vozes, transcreva a gravação inteira e depois adicione etiquetas de orador manualmente', desc: 'O Whisper não faz diarização. Para uma entrevista limpa de pergunta-resposta, adicionar "Entrevistador:" e "Fonte:" leva cerca de 5 minutos para cada 30 minutos de entrevista.' },
        { title: 'Se você tem faixas de áudio separadas (Riverside, SquadCast), transcreva cada uma separadamente', desc: 'Aí você recebe atribuição limpa sem chute. Alguns gravadores de pesquisa capturam dois microfones em dois canais de um arquivo stereo. Você pode dividir em dois arquivos mono antes.' },
        { title: 'Salve a transcrição com data e nome da fonte', desc: 'Um arquivo de transcrição chamado 2026-05-25-jane-smith.txt é mais fácil de achar seis meses depois que transcript-final-v2.txt.' },
        { title: 'Edite as 50 primeiras linhas para precisão, deixe o resto', desc: 'As pessoas escaneiam transcrições. A parte inicial conta mais. Daí em diante, corrija só as citações que você pensa em usar.' },
        { title: 'Defina o idioma manualmente se a entrevista não é em inglês', desc: 'A detecção automática funciona na maioria dos arquivos, mas um falso início de 5 segundos no começo pode enganar. Escolher o idioma explicitamente é mais confiável.' },
      ]}}
      faq={[
        { q: 'É preciso o bastante para citação jornalística?', a: 'Para citação literal, você deve sempre verificar contra o áudio. O Whisper acerta 90-95% das palavras em áudio de entrevista limpo. Os 5-10% que erra frequentemente incluem nomes, termos técnicos e fala sobreposta. Use os timecodes SRT para voltar à gravação em qualquer citação que você publicar.' },
        { q: 'Vou ter etiquetas de orador?', a: 'Não automaticamente. Você as adiciona com base no fluxo da conversa. Para uma entrevista de 2 oradores é rápido. Para painéis ou focus groups, planeje mais tempo ou suba a faixa de cada orador separadamente se você as tem.' },
        { q: 'Posso transcrever uma entrevista em outro idioma?', a: 'Sim, mais de 50 idiomas com detecção automática. Para entrevistas abaixo de 5 minutos ou entrevistas não-inglesas que começam com small talk em inglês, escolha o idioma manualmente.' },
        { q: 'Minha entrevista é de 90 minutos. O que faço?', a: 'Divida em pedaços abaixo do cap de 60 minutos. A pausa natural está onde a conversa para (café no meio da entrevista, mudança de tópico).' },
        { q: 'Quão precisos são termos técnicos e nomes próprios?', a: 'Menos precisos que o vocabulário comum. O Whisper não sabe o nome da empresa da sua fonte, o termo médico que ela usou ou o software específico que mencionou. Espere corrigir manualmente. O resto da transcrição vai ser sólido.' },
        { q: 'O áudio é guardado?', a: 'Não. O arquivo vai ao provedor de transcrição (Groq, com OpenAI como backup), é processado, depois descartado. Não guardamos o áudio nos nossos servidores.' },
        { q: 'É compatível com políticas de ética de pesquisa?', a: 'A maior parte dos protocolos de pesquisa aprovados por IRB exige saber onde o áudio é processado. Nossos provedores processam nos EUA. Não retemos. Para compliance IRB específico, documente o workflow e cheque com seu IRB.' },
        { q: 'Posso importar a transcrição no NVivo, Atlas.ti ou Dedoose?', a: 'Sim. Baixe como TXT e importe na sua ferramenta de análise qualitativa. A transcrição é texto puro, sem formato especial necessário.' },
        { q: 'Quanto demora a transcrição?', a: 'Cerca de 1-2% da duração do áudio. Uma entrevista de 30 minutos termina em cerca de 60 segundos.' },
        { q: 'E se a entrevista tem qualidade de áudio ruim?', a: 'Passe primeiro por uma ferramenta de denoise (Audacity Noise Reduction ou Adobe Podcast Enhance). Depois suba a versão limpa. Input melhor dá output notavelmente melhor.' },
        { q: 'Posso transcrever uma entrevista gravada no telefone?', a: 'Sim. Voice Memos do iPhone salva como M4A, gravadores de voz Android normalmente como M4A ou MP3. Os dois funcionam. AirDrop ou email para o computador, depois suba aqui.' },
        { q: 'Os timecodes no SRT vão bater exato com a gravação original?', a: 'Sim, ao milissegundo. Os timecodes SRT refletem o tempo real no arquivo de áudio. Funcionam para voltar a um momento específico em qualquer player de áudio ou vídeo.' },
      ]}
      relatedLinks={[
        { href: '/pt/podcast-transcription', label: 'Transcrição de podcast', desc: 'Para entrevistas em podcast e conversas com host.' },
        { href: '/pt/timestamped-transcription', label: 'Transcrição com timecode', desc: 'Para timecode por palavra ou frase.' },
        { href: '/pt/voice-memo-to-text', label: 'Memo de voz em texto', desc: 'Para entrevistas gravadas no telefone.' },
        { href: '/pt/business-transcription', label: 'Transcrição business', desc: 'Para calls de vendas, customer call, focus groups.' },
      ]}
    />
  )
}
