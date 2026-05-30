import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-m4a',
  'fr': 'https://mictoo.com/fr/mp3-to-m4a',
  'de': 'https://mictoo.com/de/mp3-to-m4a',
  'es': 'https://mictoo.com/es/mp3-to-m4a',
  'ru': 'https://mictoo.com/ru/mp3-to-m4a',
  'it': 'https://mictoo.com/it/mp3-to-m4a',
  'pt': 'https://mictoo.com/pt/mp3-to-m4a',
  'pl': 'https://mictoo.com/pl/mp3-to-m4a',
  'ja': 'https://mictoo.com/ja/mp3-to-m4a',
  'ko': 'https://mictoo.com/ko/mp3-to-m4a',
  'x-default': 'https://mictoo.com/mp3-to-m4a',
}

export const metadata = {
  title: 'MP3 para M4A — conversor online gratuito | Mictoo',
  description:
    'Converta MP3 para M4A online grátis. Re-codifique MP3 para AAC dentro de um contêiner M4A para iPhone, iTunes e ecossistema Apple. Sem cadastro, sem marca d\'água.',
  alternates: { canonical: 'https://mictoo.com/pt/mp3-to-m4a', languages: LANGS },

  openGraph: {
    title: "MP3 para M4A — conversor online gratuito | Mictoo",
    description: "Converta MP3 para M4A online grátis. Re-codifique MP3 para AAC dentro de um contêiner M4A para iPhone, iTunes e ecossistema Apple. Sem cadastro, sem marca d\\'água.",
    url: "https://mictoo.com/pt/mp3-to-m4a",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP3 para M4A — conversor online gratuito | Mictoo",
    description: "Converta MP3 para M4A online grátis. Re-codifique MP3 para AAC dentro de um contêiner M4A para iPhone, iTunes e ecossistema Apple. Sem cadastro, sem marca d\\'água.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtMp3ToM4aPage() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="MP3 → M4A · Grátis · Sem cadastro"
      h1={<>MP3 para M4A<br /><span className="text-brand-600">Conversor online gratuito</span></>}
      subtitle="Solte um MP3. Receba um M4A, áudio AAC dentro de um contêiner MP4. Toca nativamente no iTunes, Apple Music e em todo iPhone. Sem marca d&apos;água, sem email."
      tool={<ConverterZone from="mp3" to="m4a" />}
      howItWorks={[
        { icon: '📂', title: 'Solte o MP3', desc: 'Arraste qualquer MP3 para a caixa. Até 25 MB anonimamente, 60 MB depois do cadastro.' },
        { icon: '⚡', title: 'ffmpeg re-codifica para AAC', desc: 'AAC a 128 kbps dentro de um contêiner M4A, com a flag faststart para tocar imediatamente quando transmitido. Termina em 3-10 segundos.' },
        { icon: '⬇️', title: 'Baixe o M4A', desc: 'O resultado tem o nome original com .m4a. Os arquivos são apagados dos nossos servidores em até uma hora.' },
      ]}
      whyUse={{ title: 'Por que converter MP3 para M4A', bullets: [
        { title: 'O ecossistema Apple prefere M4A', desc: 'iTunes, Apple Music, iCloud Music Library, GarageBand, todos lidam com M4A como formato de primeira classe. MP3 também funciona, mas M4A é o que eles falam nativamente.' },
        { title: 'AAC soa um pouco melhor que MP3 na mesma taxa', desc: 'A 128 kbps a diferença é pequena mas real, especialmente nas altas frequências. Se sua fonte MP3 já tem perdas, essa re-codificação não a deixa pior.' },
        { title: 'M4A suporta marcadores de capítulo e metadados mais ricos', desc: 'Se você está fazendo audiolivros, arquivos de preview de podcast ou qualquer coisa para o ecossistema Apple, M4A lida com capítulos de forma limpa. Suporte a capítulos do MP3 é irregular.' },
        { title: 'Toques de iPhone precisam ser M4A', desc: 'Toques personalizados de iPhone usam a extensão M4R, mesmo formato AAC-em-MP4 do M4A. Converta e renomeie para .m4r para uso como toque.' },
        { title: 'Sem marca d\'água, sem upsell', desc: 'Seu áudio re-codificado, nada mais.' },
      ]}}
      useCases={{ title: 'Quando você converteria MP3 para M4A', items: [
        { title: 'Importar uma coleção musical para o Apple Music', desc: 'M4A importa de forma limpa e integra com iCloud Music Library. MP3s podem ocasionalmente ter problemas de metadados durante a sincronização.' },
        { title: 'Fazer um toque de iPhone', desc: 'Converta MP3 → M4A, corte para menos de 40 segundos, renomeie para .m4r, solte no Finder enquanto o iPhone está conectado.' },
        { title: 'Audiolivro com marcadores de capítulo', desc: 'M4A suporta capítulos; suporte do MP3 é não confiável. Para audiolivros longos onde os ouvintes querem pular entre capítulos, M4A é o formato certo.' },
        { title: 'Limpeza de notas de voz para iCloud', desc: 'Se você tem uma pasta de notas de voz em MP3 e as quer no iCloud ou Apple Voice Memos, M4A é mais nativo e sincroniza de forma mais confiável.' },
        { title: 'Projeto GarageBand ou Logic', desc: 'Ao importar áudio de referência para o software musical da Apple, M4A entra mais liso que MP3 em alguns workflows.' },
      ]}}
      proTips={{ title: 'Dicas para conversão MP3 para M4A', tips: [
        { title: 'Re-codificar adiciona uma pequena perda', desc: 'Você está indo de um formato com perdas para outro. A 128 kbps AAC a partir de um MP3 de 128 kbps, a perda é real mas inaudível para quase todos em quase tudo. Para uso crítico, ache uma fonte sem perdas.' },
        { title: 'Para toques, corte antes de converter', desc: 'Toques de iPhone limitam a 40 segundos. Corte o MP3 no Audacity ou QuickTime primeiro, depois converta.' },
        { title: 'AAC a 96 kbps geralmente bate MP3 a 128 kbps', desc: 'Nosso conversor gera a 128 kbps por compatibilidade, mas se você tem controle total poderia ir mais baixo com AAC e ainda igualar a qualidade do MP3. Não oferecemos o seletor para manter a ferramenta simples.' },
        { title: 'M4A vs MP4, mesmo contêiner, convenção diferente', desc: 'Arquivos M4A contêm só áudio. Arquivos MP4 podem conter vídeo, áudio ou ambos. iTunes usa a extensão .m4a para deixar a distinção óbvia. Alguns players aceitam qualquer extensão.' },
        { title: 'Marcadores de capítulo não são adicionados por nós', desc: 'Só re-codificamos o áudio. Para adicionar marcadores de capítulo, use Apple Books para audiolivros ou uma ferramenta dedicada como Chapter and Verse.' },
        { title: 'Para MP3s protegidos por DRM, a conversão vai falhar', desc: 'DRM é extremamente raro para MP3 em 2026, mas se você de alguma forma tem um, não vai decodificar.' },
      ]}}
      faq={[
        { q: 'A conversão MP3 para M4A é realmente grátis?', a: 'Sim. Sem conta até 25 MB, sem marca d\'água, sem limite de tempo.' },
        { q: 'Qual o tamanho máximo do arquivo?', a: '25 MB anonimamente, 60 MB com conta gratuita.' },
        { q: 'O M4A vai soar pior que o MP3?', a: 'Teoricamente sim, re-codificar qualquer formato com perdas adiciona uma pequena perda. Praticamente, a 128 kbps AAC de um MP3 de 128 kbps, nenhum humano consegue ouvir a diferença em reprodução consumidor.' },
        { q: 'Qual a diferença entre M4A e MP4?', a: 'M4A e MP4 são o mesmo formato de contêiner. A extensão .m4a só sinaliza "só áudio" para que o iTunes saiba o que fazer com ele. Alguns players aceitam qualquer extensão.' },
        { q: 'Quanto tempo leva?', a: 'Segundos. Um MP3 de 25 MB converte em 3-10 segundos.' },
        { q: 'Que qualidade vocês geram?', a: 'AAC a 128 kbps dentro de um contêiner M4A, 44.1 kHz, layout de canais da fonte preservado.' },
        { q: 'Vocês guardam meus arquivos?', a: 'Não. Upload deletado após a conversão. Saída eliminada em até uma hora.' },
        { q: 'Posso fazer um toque de iPhone com isso?', a: 'Indiretamente. Converta MP3 para M4A, corte para menos de 40 segundos no QuickTime, renomeie o .m4a para .m4r, solte no Finder com seu iPhone conectado.' },
        { q: 'O iTunes vai aceitar o resultado?', a: 'Sim. M4A é o formato nativo do iTunes.' },
        { q: 'Meu MP3 já é 320 kbps. Devo converter?', a: 'Só se você precisa especificamente de M4A por compatibilidade. O resultado será AAC a 128 kbps, tecnicamente uma queda de qualidade do MP3 a 320 kbps, mas praticamente inaudível na maioria das reproduções. Para preservar a qualidade de 320 kbps você precisaria de um conversor diferente que permita configurar taxas maiores.' },
        { q: 'Tags transferem?', a: 'Tags básicas (título, artista, álbum) geralmente sim. Capa do álbum e comentários detalhados são imprevisíveis entre ID3 do MP3 e metadados iTunes do M4A. Re-marque no iTunes ou Mp3tag depois da conversão.' },
        { q: 'Posso converter em lote?', a: 'Ainda não no plano grátis. Abra várias abas do navegador para converter vários arquivos em paralelo.' },
      ]}
      relatedLinks={[
        { href: '/pt/m4a-to-mp3', label: 'M4A para MP3', desc: 'A direção reversa.' },
        { href: '/pt/wav-to-mp3', label: 'WAV para MP3', desc: 'Encolha WAV para MP3 portátil.' },
        { href: '/pt/m4a-to-text', label: 'M4A para texto', desc: 'Transcreva áudio M4A diretamente.' },
        { href: '/pt/how-to-compress-audio', label: 'Comprimir áudio', desc: 'Para arquivos que precisam ser ainda menores.' },
      ]}
    />
  )
}
