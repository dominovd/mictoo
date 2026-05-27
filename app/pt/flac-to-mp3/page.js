import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLAC para MP3 — conversor online gratuito | Mictoo',
  description:
    'Converta FLAC para MP3 online grátis. Encolha FLAC sem perdas para MP3 a 128 kbps em segundos. Sem cadastro, sem marca d\'água. Até 25 MB.',
  alternates: { canonical: 'https://mictoo.com/pt/flac-to-mp3', languages: LANGS },
}

export default function PtFlacToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="FLAC → MP3 · Grátis · Sem cadastro"
      h1={<>FLAC para MP3<br /><span className="text-brand-600">Conversor online gratuito</span></>}
      subtitle="Solte um arquivo FLAC. Receba um MP3 portátil com um terço do tamanho, que toca em todo lugar. Sem marca d&apos;água, sem email."
      tool={<ConverterZone from="flac" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Solte o FLAC', desc: 'Arraste seu FLAC para a caixa. Arquivos até 25 MB anonimamente, 60 MB com cadastro.' },
        { icon: '⚡', title: 'ffmpeg re-codifica para MP3', desc: '128 kbps em taxa constante, 44.1 kHz, layout de canais preservado. Um FLAC típico de 25 MB termina em 3-10 segundos.' },
        { icon: '⬇️', title: 'Baixe o MP3', desc: 'O resultado mantém o nome original do arquivo com .mp3. Apagado dos nossos servidores em até uma hora.' },
      ]}
      whyUse={{ title: 'Por que converter FLAC para MP3', bullets: [
        { title: 'FLAC é sem perdas mas enorme', desc: 'Um FLAC de 5 minutos em taxas típicas tem 25-40 MB. O mesmo áudio como MP3 a 128 kbps tem 5 MB. Para celulares, carros e Bluetooth, esse tamanho importa.' },
        { title: 'A maioria dos estéreos de carro e alto-falantes Bluetooth não toca FLAC', desc: 'Mesmo em 2026, o infotainment de fábrica do carro e muito hardware Bluetooth mediano é MP3 ou nada. MP3 simplesmente funciona.' },
        { title: 'A 128 kbps a perda de qualidade é inaudível para quase todos', desc: 'Em fones de consumidor, em carros, em alto-falantes de celular, ninguém vai notar a diferença. O compromisso só aparece em monitores de estúdio com escuta crítica.' },
        { title: 'iPods, players MP3 antigos, apps básicos de música, MP3 ganha', desc: 'Se você está carregando música em algo mais antigo que um iPhone recente, MP3 é a aposta mais segura. Suporte a FLAC em hardware legado é imprevisível.' },
        { title: 'Sem marca d\'água, sem upsell', desc: 'Só seu áudio re-codificado. Não enfiamos nada.' },
      ]}}
      useCases={{ title: 'Quando você converteria FLAC para MP3', items: [
        { title: 'Download do Bandcamp / Qobuz → biblioteca do celular', desc: 'Bandcamp te dá FLAC por padrão para downloads pagos. Converta para MP3 para caber numa coleção musical no celular ou sincronizar com um sistema de carro que não lida com FLAC.' },
        { title: 'Rip de CD → biblioteca portátil', desc: 'Se você rippou CDs para FLAC para arquivamento, converta cada álbum para MP3 para escuta do dia a dia, mantenha os FLACs como master.' },
        { title: 'Export de estúdio → distribuição', desc: 'Seu produtor musical pode te mandar FLAC. Converta para MP3 para hosts de podcast, players web, ou só para mandar por email o mix bruto para um colaborador.' },
        { title: 'Gravações de campo → compartilhamento rápido', desc: 'Gravadores de campo como o Tascam DR-40X ou Zoom F3 podem gravar em FLAC. Converta antes de compartilhar com um produtor ou editor de som que trabalha em MP3.' },
        { title: 'Limpeza de biblioteca', desc: 'Limpando um HD antigo de FLACs, mantenha os originais num NAS, converta para MP3 para uso ativo.' },
      ]}}
      proTips={{ title: 'Dicas para conversão FLAC para MP3 limpa', tips: [
        { title: 'FLAC é sem perdas então a primeira codificação está ok', desc: 'Não há penalidade de qualidade indo FLAC → MP3 uma vez. Você só começa a ouvir artefatos quando re-codifica o MP3 de novo, ou quando vai MP3 → outros formatos com perdas.' },
        { title: 'Para uso audiófilo, mantenha o FLAC', desc: 'Se você está ouvindo em fones de ponta, num DAC dedicado ou fazendo escuta crítica, vale a pena manter o FLAC. MP3 é para distribuição e uso casual.' },
        { title: 'Tags nem sempre passam', desc: 'Tags FLAC (Vorbis comments) e tags MP3 (ID3) são formatos diferentes. Nosso conversor não transfere capa do álbum e metadados detalhados entre eles. Adicione tags você mesmo no MusicBrainz Picard ou Mp3tag depois da conversão.' },
        { title: 'FLAC 24-bit/96 kHz converte igual a 16-bit/44.1', desc: 'MP3 chega no máximo a 16-bit/48 kHz na prática. Profundidade de bit extra e sample rate na fonte não sobrevivem à codificação MP3, mas também não machucam nada.' },
        { title: 'Para conversão sem perdas, use ALAC em vez disso', desc: 'Se você precisa de sem perdas que toque em iTunes/Apple Music, converta FLAC para ALAC (Apple Lossless) em vez disso, mesma qualidade de áudio, metade da pegada de metadados do FLAC, toca nativamente no ecossistema Apple.' },
        { title: 'Para uma taxa MP3 maior, re-exporte do Audacity', desc: 'Nosso conversor gera a 128 kbps. Para 320 kbps, abra o MP3 no Audacity (grátis) e re-exporte. A codificação dupla mal é audível.' },
      ]}}
      faq={[
        { q: 'A conversão FLAC para MP3 é realmente grátis?', a: 'Sim. Sem conta até 25 MB, sem marca d\'água, sem limite de tempo. Display ads nas páginas editoriais cobrem o custo do servidor.' },
        { q: 'Qual o tamanho máximo do arquivo?', a: '25 MB anonimamente, 60 MB com conta gratuita. Uma música típica de 5 minutos em FLAC tem 30-40 MB, então para álbuns completos você pode precisar converter faixa por faixa.' },
        { q: 'Vou ouvir uma diferença de qualidade?', a: 'Em alto-falantes de celular, em carros, em fones baratos, não. Em monitores de estúdio com escuta crítica, possivelmente. O compromisso é razoável para tudo exceto masterização e reprodução audiófila.' },
        { q: 'Capa do álbum e metadados transferem?', a: 'Parcialmente. Tags básicas (artista, título, álbum) geralmente passam. Capa do álbum e Vorbis comments detalhados frequentemente não. Use MusicBrainz Picard ou Mp3tag depois da conversão para tags limpas.' },
        { q: 'Que qualidade de MP3 vocês geram?', a: '128 kbps em taxa constante, 44.1 kHz, preserva o layout de canais da fonte.' },
        { q: 'Quanto tempo leva?', a: 'Segundos. Um FLAC de 25 MB converte em 3-10 segundos. Upload é o gargalo.' },
        { q: 'Vocês guardam meus arquivos?', a: 'Não. Upload deletado após a conversão. Saída eliminada em até uma hora pelo nosso cron de limpeza.' },
        { q: 'Posso converter em lote um álbum inteiro?', a: 'Ainda não, plano grátis é um arquivo por vez. Abra várias abas do navegador como contorno.' },
        { q: 'Meu FLAC 24-bit/96 kHz soa igual ao MP3?', a: 'Quase certamente, em reprodução consumidor. O 24-bit e o sample rate alto importam para processamento e masterização, não para escutar através de cadeias de áudio nível MP3.' },
        { q: 'Devo converter para ALAC em vez disso?', a: 'Se você precisa de áudio sem perdas no Apple Music ou iTunes, sim, ALAC é o equivalente Apple do FLAC. Não geramos ALAC, mas o Audacity gera.' },
        { q: 'Meu FLAC é de um download Hi-Res. Vale a pena converter?', a: 'Para escuta no celular ou no carro, o MP3 vai soar idêntico. Mantenha o original para qualquer processamento futuro.' },
        { q: 'Posso obter mais que 128 kbps?', a: 'Não deste conversor. Re-codifique o MP3 no Audacity com sua taxa preferida.' },
      ]}
      relatedLinks={[
        { href: '/pt/wav-to-mp3', label: 'WAV para MP3', desc: 'Converta WAV sem perdas para MP3.' },
        { href: '/pt/mp3-to-wav', label: 'MP3 para WAV', desc: 'A direção reversa, MP3 expandido para WAV não comprimido.' },
        { href: '/pt/flac-to-text', label: 'FLAC para texto', desc: 'Transcreva áudio FLAC direto para texto.' },
        { href: '/pt/how-to-compress-audio', label: 'Comprimir áudio', desc: 'Quando o MP3 ainda precisa ser menor.' },
      ]}
    />
  )
}
