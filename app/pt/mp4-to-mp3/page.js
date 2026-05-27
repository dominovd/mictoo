import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp4-to-mp3',
  'fr': 'https://mictoo.com/fr/mp4-to-mp3',
  'de': 'https://mictoo.com/de/mp4-to-mp3',
  'es': 'https://mictoo.com/es/mp4-to-mp3',
  'ru': 'https://mictoo.com/ru/mp4-to-mp3',
  'it': 'https://mictoo.com/it/mp4-to-mp3',
  'pt': 'https://mictoo.com/pt/mp4-to-mp3',
  'pl': 'https://mictoo.com/pl/mp4-to-mp3',
  'ja': 'https://mictoo.com/ja/mp4-to-mp3',
  'ko': 'https://mictoo.com/ko/mp4-to-mp3',
  'x-default': 'https://mictoo.com/mp4-to-mp3',
}

export const metadata = {
  title: 'MP4 para MP3 — conversor online gratuito | Mictoo',
  description:
    'Converta MP4 para MP3 online grátis. Solte seu vídeo, receba um arquivo de áudio MP3 limpo a 128 kbps em segundos. Sem cadastro, sem marca d\'água, sem email. Até 25 MB.',
  alternates: { canonical: 'https://mictoo.com/pt/mp4-to-mp3', languages: LANGS },
}

export default function PtMp4ToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="MP4 → MP3 · Grátis · Sem cadastro"
      h1={<>MP4 para MP3<br /><span className="text-brand-600">Conversor online gratuito</span></>}
      subtitle="Solte um vídeo MP4. Receba um arquivo de áudio MP3. Sem marca d&apos;água, sem email, sem sala de espera. ffmpeg do lado servidor, pronto em segundos."
      tool={<ConverterZone from="mp4" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Solte o MP4', desc: 'Arraste qualquer vídeo MP4 para a caixa ou clique para escolher um. Arquivos até 25 MB passam de forma anônima. Faça login se precisar de 60 MB.' },
        { icon: '⚡', title: 'Extraímos o áudio', desc: 'ffmpeg roda do lado servidor, retira o fluxo de vídeo e re-codifica o áudio como MP3 estéreo a 128 kbps a 44.1 kHz. Um vídeo de 25 MB geralmente termina em 5-15 segundos.' },
        { icon: '⬇️', title: 'Baixe o MP3', desc: 'O botão de download te dá o arquivo com o nome original mais a extensão .mp3. Seu upload e o resultado são deletados dos nossos servidores em até uma hora.' },
      ]}
      whyUse={{ title: 'Por que Mictoo para MP4 para MP3', bullets: [
        { title: 'Só a conversão. Nada mais', desc: 'Sem popups, sem contagem regressiva, sem falso plano "grátis" que te empurra para pagar. Solte, converta, baixe.' },
        { title: 'MP3 a 128 kbps, leve e universal', desc: 'Essa taxa é o ponto certo para áudio falado: cerca de 1 MB por minuto, toca em todo lugar, soa limpo. Não oferecemos um seletor de qualidade porque as escolhas adicionam atrito sem trazer valor para o uso típico.' },
        { title: 'Os arquivos não ficam nos nossos servidores', desc: 'Seu MP4 cai no Vercel Blob storage, é convertido e deletado na hora. O próprio MP3 é eliminado pela nossa varredura horária. Mantenha uma cópia local.' },
        { title: 'Sem marca d\'água, sem tag de áudio', desc: 'Muitos conversores grátis enfiam uma intro própria "Converted by FreeMP3.com". Nós não tocamos no áudio além de re-codificá-lo.' },
        { title: 'A maioria dos outros conversores grátis é uma casca de rede de anúncios', desc: 'Muitos sites que você acha no Google para "mp4 to mp3" são portas de AdSense que sequestram o botão voltar ou disparam falsos avisos de vírus. Somos um projeto SEO indie financiado por display ads nas páginas editoriais, não no fluxo de conversão.' },
      ]}}
      useCases={{ title: 'Quando você converteria MP4 para MP3', items: [
        { title: 'Salvar um podcast que você tem como vídeo', desc: 'Muitos feeds de podcast também são publicados como uploads no YouTube ou MP4s no Vimeo. Se você só tem a cópia em vídeo, MP3 a deixa amigável ao celular e dez vezes menor.' },
        { title: 'Extrair música ou áudio de uma gravação de aula', desc: 'Zoom e Teams exportam MP4. Você só precisa do áudio se quiser ouvir no trajeto, transcrever ou alimentar um software de edição.' },
        { title: 'Reduzir um vídeo de 1 GB para poder enviar por email', desc: 'Um vídeo de 1 hora em 1080p pode facilmente bater 1 GB. O áudio dessa mesma gravação tem 30-60 MB em qualidade total, frequentemente abaixo de 30 MB a 128 kbps. De repente enviável.' },
        { title: 'Alimentar uma transcrição que espera áudio', desc: 'Nossa própria ferramenta de transcrição aceita MP4 direto, mas ferramentas de terceiros, editores de áudio e DAWs geralmente querem áudio puro. MP3 é o formato denominador comum mais baixo.' },
        { title: 'Música de fundo para um screencast ou slideshow', desc: 'Muitos MP4s em tutoriais do YouTube contêm música ou narração que você pode querer como clipe independente. Converta e arraste para iMovie, Audacity ou Logic.' },
      ]}}
      proTips={{ title: 'Dicas para conversão MP4 para MP3 limpa', tips: [
        { title: 'Se o MP4 for enorme, corte primeiro', desc: 'Nosso limite é 25 MB sem cadastro, 60 MB com. Um vídeo 1080p muito acima de dez minutos não vai caber. Abra no QuickTime (Mac) ou no app Fotos (Windows), corte só a parte que você precisa e re-exporte.' },
        { title: '128 kbps é exagero para voz, perfeito para música', desc: 'Para áudio falado um MP3 a 64 kbps seria metade do tamanho sem perda audível. Padronizamos em 128 kbps porque a maioria das pessoas não tem certeza do que tem no vídeo e 128 soa limpo para os dois.' },
        { title: 'Se o vídeo fonte tem múltiplas trilhas de áudio, só a padrão toca', desc: 'Filmes, rips de DVD e alguns exports de aula embutem várias trilhas de idioma. Nosso conversor pega a trilha padrão. Se você precisa da trilha secundária, mude a trilha padrão no seu editor de vídeo e re-exporte o MP4 antes de enviar.' },
        { title: 'MP4s antigos de filmadoras podem não decodificar', desc: 'AVCHD e outros MP4s da era das filmadoras às vezes usam codecs que ffmpeg não lê sem bibliotecas extras. Se a conversão falhar, abra o arquivo no HandBrake (grátis, todas as plataformas), re-exporte como MP4 H.264 padrão, depois tente de novo.' },
        { title: 'Precisa de 320 kbps ou VBR? Use Audacity depois', desc: 'Nosso MP3 é a 128 kbps constante. Se você precisa de uma taxa maior ou um arquivo VBR, pegue o MP3, abra no Audacity (também grátis) e re-exporte com suas configurações preferidas. A perda de qualidade da re-codificação em taxa maior é desprezível.' },
        { title: 'Para conteúdo protegido (filmes iTunes, DRM), vai falhar', desc: 'MP4s protegidos por DRM não podem ser lidos pelo ffmpeg. Nunca descriptografamos conteúdo protegido por direitos autorais. Se o arquivo veio de um serviço de streaming, você provavelmente não tem o direito de convertê-lo.' },
      ]}}
      faq={[
        { q: 'O conversor MP4 para MP3 é realmente grátis?', a: 'Sim. Sem conta necessária para arquivos até 25 MB, sem limite de tempo, sem marca d\'água na saída, sem truque de "primeira conversão grátis depois upgrade". Cobrimos os custos do servidor com display ads nas páginas editoriais (não no conversor em si).' },
        { q: 'Qual o tamanho máximo do arquivo?', a: '25 MB sem conta, 60 MB se você fizer login (grátis). O budget das funções da Vercel é o limite real. Cortamos abaixo dele para manter a conversão sob 60 segundos para todos.' },
        { q: 'Quanto tempo leva a conversão?', a: 'Para um MP4 típico de 10-20 MB (poucos minutos de vídeo), termina em 5-15 segundos. O gargalo é a sua velocidade de upload, não a conversão em si, ffmpeg passa pela re-codificação de áudio muito mais rápido que tempo real.' },
        { q: 'Qual a qualidade do MP3?', a: '128 kbps em taxa constante, 44.1 kHz, estéreo. Essa é a configuração universal "boa o suficiente para tudo": indistinguível do original para a maioria dos ouvidos, voz e música, cerca de 1 MB por minuto de áudio.' },
        { q: 'Vocês guardam meus arquivos?', a: 'Não. Seu upload vive no Vercel Blob storage só o tempo necessário para ser convertido, depois deletamos. O MP3 resultante é eliminado em até uma hora pelo nosso cron de limpeza. Salve o MP3 localmente, não podemos reenviá-lo.' },
        { q: 'A saída terá alguma marca d\'água ou tag de áudio?', a: 'Não. Não enfiamos intros "Converted by Mictoo" ou outros com marca. O MP3 é só o áudio original re-codificado.' },
        { q: 'Posso converter vídeos do YouTube com isso?', a: 'Você pode converter qualquer arquivo MP4 que tenha direitos. Não baixamos vídeos do YouTube, isso nos colocaria do lado errado dos termos de serviço do YouTube. Use uma ferramenta como 4K Video Downloader ou yt-dlp para salvar o MP4 localmente, depois solte aqui.' },
        { q: 'Por que os formatos estão limitados só a MP4?', a: 'Cada conversor é uma URL com uma tarefa. MP4 para MP3 vive em /mp4-to-mp3, WAV para MP3 vive em /wav-to-mp3, e assim por diante. Escolher o certo nos diz o que esperar e dá ao Google uma página limpa para rankear.' },
        { q: 'Meu MP4 falhou com "codec não suportado". E agora?', a: 'MP4s antigos de filmadoras e alguns arquivos protegidos por DRM usam codecs que ffmpeg não decodifica de fábrica. Abra o arquivo no HandBrake (grátis), re-exporte como MP4 H.264 padrão e tente de novo. Se ainda falhar, o arquivo provavelmente está travado por DRM.' },
        { q: 'Funciona no celular?', a: 'Sim. A página é amigável ao celular e os uploads funcionam do Safari iOS e Chrome Android. No iPhone, talvez você precise compartilhar o vídeo para Arquivos primeiro para que o seletor de arquivo possa alcançá-lo.' },
        { q: 'MP3s têm perdas? Devo me preocupar?', a: 'Sim, MP3 tem perdas. A 128 kbps a perda é inaudível para quase todos os ouvintes em quase todo material de origem. Se você precisa sem perdas, digamos para masterização musical, converta MP4 para WAV em vez disso.' },
        { q: 'Por que não tem upload em lote?', a: 'O plano grátis é um arquivo por vez. Lote está no roadmap do plano Pro quando lançar. Por enquanto você pode rodar várias conversões em paralelo em abas separadas do navegador.' },
      ]}
      relatedLinks={[
        { href: '/pt/wav-to-mp3', label: 'WAV para MP3', desc: 'Encolha arquivos WAV sem perdas em MP3 compactos.' },
        { href: '/pt/webm-to-mp3', label: 'WEBM para MP3', desc: 'Extraia MP3 de um WEBM (frequentemente o que os baixadores de YouTube te dão).' },
        { href: '/pt/transcribe-video-to-text', label: 'Vídeo para texto', desc: 'Pule a etapa do MP3, vá direto para uma transcrição em texto do vídeo.' },
        { href: '/pt/how-to-compress-audio', label: 'Comprimir áudio', desc: 'Quando seu MP3 ainda está grande demais para compartilhar.' },
      ]}
    />
  )
}
