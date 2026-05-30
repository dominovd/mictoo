import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-mp3',
  'fr': 'https://mictoo.com/fr/webm-to-mp3',
  'de': 'https://mictoo.com/de/webm-to-mp3',
  'es': 'https://mictoo.com/es/webm-to-mp3',
  'ru': 'https://mictoo.com/ru/webm-to-mp3',
  'it': 'https://mictoo.com/it/webm-to-mp3',
  'pt': 'https://mictoo.com/pt/webm-to-mp3',
  'pl': 'https://mictoo.com/pl/webm-to-mp3',
  'ja': 'https://mictoo.com/ja/webm-to-mp3',
  'ko': 'https://mictoo.com/ko/webm-to-mp3',
  'x-default': 'https://mictoo.com/webm-to-mp3',
}

export const metadata = {
  title: 'WEBM para MP3 — conversor online gratuito | Mictoo',
  description:
    'Converta WEBM para MP3 online grátis. Extraia áudio MP3 de qualquer arquivo WEBM de vídeo ou áudio em segundos. Sem cadastro, sem marca d\'água. Até 25 MB.',
  alternates: { canonical: 'https://mictoo.com/pt/webm-to-mp3', languages: LANGS },

  openGraph: {
    title: "WEBM para MP3 — conversor online gratuito | Mictoo",
    description: "Converta WEBM para MP3 online grátis. Extraia áudio MP3 de qualquer arquivo WEBM de vídeo ou áudio em segundos. Sem cadastro, sem marca d\\'água. Até 25 MB.",
    url: "https://mictoo.com/pt/webm-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBM para MP3 — conversor online gratuito | Mictoo",
    description: "Converta WEBM para MP3 online grátis. Extraia áudio MP3 de qualquer arquivo WEBM de vídeo ou áudio em segundos. Sem cadastro, sem marca d\\'água. Até 25 MB.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtWebmToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="WEBM → MP3 · Grátis · Sem cadastro"
      h1={<>WEBM para MP3<br /><span className="text-brand-600">Conversor online gratuito</span></>}
      subtitle="Solte um arquivo WEBM (o formato que gravadores de navegador, baixadores de YouTube e ferramentas de captura de tela adoram salvar). Receba um MP3 limpo. Sem marca d&apos;água, sem email."
      tool={<ConverterZone from="webm" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Solte o WEBM', desc: 'Só áudio ou vídeo WEBM, ambos funcionam. Até 25 MB anonimamente, 60 MB depois do cadastro.' },
        { icon: '⚡', title: 'Extraímos e re-codificamos', desc: 'ffmpeg puxa o fluxo de áudio (Opus ou Vorbis) para fora do contêiner WEBM e re-codifica para MP3 a 128 kbps a 44.1 kHz. Tipicamente 3-10 segundos.' },
        { icon: '⬇️', title: 'Baixe o MP3', desc: 'A saída mantém o nome original com .mp3. Os arquivos são apagados dos nossos servidores em até uma hora.' },
      ]}
      whyUse={{ title: 'Por que converter WEBM para MP3', bullets: [
        { title: 'WEBM é ótimo para o navegador, horrível para todo o resto', desc: 'iPhones não tocam WEBM. A maioria dos estéreos de carro não. Muitos alto-falantes Bluetooth antigos não. MP3 toca em tudo que você puder pensar.' },
        { title: 'Apps de notas de voz e gravadores de navegador salvam em WEBM', desc: 'Ferramentas de gravação baseadas na web (Loom, a API MediaRecorder do MDN, gravadores de áudio de navegador) saem em WEBM por padrão porque Chrome e Firefox suportam nativamente. Se você quer mandar a gravação para algum lugar, MP3 é o formato mais seguro.' },
        { title: 'Baixadores de YouTube te dão WEBM por padrão', desc: 'Quando você escolhe "só áudio" no 4K Video Downloader ou yt-dlp sem especificar um formato, frequentemente você recebe um arquivo WEBM Opus. Converter para MP3 o torna reproduzível no iOS e em apps de edição de áudio.' },
        { title: 'Opus é tecnicamente melhor, mas compatibilidade vence', desc: 'O codec Opus dentro de um contêiner WEBM é melhor que MP3 byte por byte. Mas se sua audiência não consegue tocar, isso não importa. MP3 é a língua franca.' },
        { title: 'Sem marca d\'água, sem upsell', desc: 'O MP3 é só o áudio re-codificado. Não adicionamos uma intro, uma tag ou um overlay "compre Pro" na página de resultado.' },
      ]}}
      useCases={{ title: 'Quando você converteria WEBM para MP3', items: [
        { title: 'Gravação de áudio no navegador → arquivo portátil', desc: 'Você usou um gravador baseado na web (ferramenta de microfone embutida, gravador de voz online, etc.) e recebeu um WEBM. Converta para MP3 para arrastar para seu editor de podcast ou mandar para um transcritor.' },
        { title: 'Download do Loom ou Vidyard → clipe só com áudio', desc: 'Downloads do Loom podem ser WEBM. Se você só precisa do áudio da gravação, converta e salve o arquivo menor.' },
        { title: 'Download de áudio do YouTube → formato universal', desc: 'Quando você baixa só áudio do YouTube com um baixador que sai em Opus/WEBM por padrão, a conversão para MP3 torna o arquivo reproduzível em todo lugar.' },
        { title: 'Gravação de tela → só a narração', desc: 'OBS, o gravador de tela embutido do Chrome e ferramentas similares frequentemente saem em WEBM. Se você só quer a narração para transcrição ou um podcast, converta.' },
        { title: 'Gravações de chamada WebRTC', desc: 'Algumas ferramentas de videoconferência gravam em WEBM. Converta antes de mandar para clientes ou guardar num CRM que espera MP3.' },
      ]}}
      proTips={{ title: 'Dicas para conversão WEBM para MP3 limpa', tips: [
        { title: 'WEBM com vídeo VP9 está ok, ignoramos o fluxo de vídeo', desc: 'Você pode soltar um WEBM de vídeo (VP9 + Opus) no conversor. Retiramos o vídeo e mantemos só o áudio. O resultado é do mesmo tamanho que se você tivesse nos dado só áudio.' },
        { title: 'Opus decodifica sem perdas dentro do ffmpeg', desc: 'Não há problema de segunda perda indo Opus → MP3. A codificação perceptual do MP3 a 128 kbps é a única coisa que afeta o resultado, não o fato de a entrada ser um formato com perdas.' },
        { title: 'Para voz, mono basta mas mantemos estéreo', desc: 'Nosso conversor preserva o layout de canais da fonte. Se seu WEBM é mono (típico para gravações de voz), o MP3 é mono. Não fazemos upmix.' },
        { title: 'Se a conversão falhar, o WEBM provavelmente está parcial', desc: 'Fluxos WEBM às vezes são cortados no meio da gravação, deixando o contêiner meio quebrado. Abra no VLC e re-exporte como novo WEBM, ou em um editor de vídeo, depois tente de novo.' },
        { title: 'Para downloads do YouTube, prefira M4A direto se seu baixador suporta', desc: 'Se você controla o download, escolher M4A (AAC dentro de um contêiner MP4) pula todo esse passo, M4A toca em todo lugar que MP3 toca. Use a opção "M4A" do 4K Video Downloader.' },
        { title: 'WEBMs encriptados com DRM vão falhar', desc: 'Alguns serviços de streaming usam WEBM com DRM. ffmpeg não pode descriptografar isso, e nem nós. O WEBM original tem que estar desprotegido.' },
      ]}}
      faq={[
        { q: 'A conversão WEBM para MP3 é realmente grátis?', a: 'Sim. Sem conta até 25 MB, sem marca d\'água, sem "trial" com tempo limitado. Display ads nas páginas editoriais cobrem o custo do servidor.' },
        { q: 'Qual o tamanho máximo do arquivo?', a: '25 MB anonimamente, 60 MB com conta gratuita. WEBM é eficiente, 25 MB geralmente representa 20-40 minutos de áudio.' },
        { q: 'Posso converter vídeo WEBM para MP3?', a: 'Sim. Retiramos o fluxo de vídeo e geramos só o áudio. O MP3 tem o mesmo tamanho se a fonte foi vídeo ou WEBM só de áudio.' },
        { q: 'O MP3 soa pior que o WEBM?', a: 'Teoricamente, ligeiramente. Opus na mesma taxa é melhor que MP3. A 128 kbps a diferença é inaudível para quase todos os ouvintes em quase todo material.' },
        { q: 'Quanto tempo leva?', a: 'Segundos. Um arquivo WEBM de 25 MB converte em 3-10 segundos. Velocidade de upload é o gargalo.' },
        { q: 'Quais configurações de MP3 vocês usam?', a: '128 kbps em taxa constante, 44.1 kHz, preserva o layout de canais da fonte (mono in → mono out, estéreo in → estéreo out).' },
        { q: 'Vocês guardam meus arquivos?', a: 'Não. O upload é deletado após a conversão. A saída é eliminada em até uma hora. Salve localmente.' },
        { q: 'Meu WEBM do Loom falhou. Por quê?', a: 'Alguns downloads do Loom usam MP4 fragmentado dentro de um contêiner WEBM ou têm cabeçalhos não padronizados. Tente abrir no VLC, exportar de novo, depois tentar. Ou baixe do Loom como MP4 direto se a opção estiver lá.' },
        { q: 'Funciona para arquivos Opus especificamente?', a: 'Se seu arquivo termina em .opus em vez de .webm, renomeie para .webm primeiro. O contêiner é funcionalmente o mesmo e ffmpeg os lê de forma idêntica.' },
        { q: 'Posso baixar vídeos do YouTube com isso?', a: 'Não. Não buscamos URLs. Use um app baixador (4K Video Downloader, yt-dlp, ClipGrab) para salvar o WEBM localmente primeiro, depois solte aqui.' },
        { q: 'iPhone ou iTunes vão tocar a saída?', a: 'Sim. MP3 toca em todo lugar, incluindo todos os dispositivos e softwares Apple.' },
        { q: 'Por que converter em vez de só ficar com WEBM?', a: 'WEBM vai bem no Chrome e Firefox, mas iOS, muitos estéreos de carro, alto-falantes Bluetooth antigos e muito software de áudio profissional não lidam com ele. MP3 é universal.' },
      ]}
      relatedLinks={[
        { href: '/pt/mp4-to-mp3', label: 'MP4 para MP3', desc: 'Mesma ideia, fonte MP4 em vez de WEBM.' },
        { href: '/pt/wav-to-mp3', label: 'WAV para MP3', desc: 'WAV sem perdas para MP3 portátil.' },
        { href: '/pt/webm-to-text', label: 'WEBM para texto', desc: 'Pule o MP3, vá direto para uma transcrição.' },
        { href: '/pt/how-to-compress-audio', label: 'Comprimir áudio', desc: 'Se o MP3 ainda está grande demais para compartilhar.' },
      ]}
    />
  )
}
