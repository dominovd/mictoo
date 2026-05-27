import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-wav',
  'fr': 'https://mictoo.com/fr/mp3-to-wav',
  'de': 'https://mictoo.com/de/mp3-to-wav',
  'es': 'https://mictoo.com/es/mp3-to-wav',
  'ru': 'https://mictoo.com/ru/mp3-to-wav',
  'it': 'https://mictoo.com/it/mp3-to-wav',
  'pt': 'https://mictoo.com/pt/mp3-to-wav',
  'pl': 'https://mictoo.com/pl/mp3-to-wav',
  'ja': 'https://mictoo.com/ja/mp3-to-wav',
  'ko': 'https://mictoo.com/ko/mp3-to-wav',
  'x-default': 'https://mictoo.com/mp3-to-wav',
}

export const metadata = {
  title: 'MP3 para WAV — conversor online gratuito | Mictoo',
  description:
    'Converta MP3 para WAV online grátis. Expanda MP3 comprimido em WAV não comprimido a 16-bit/44.1 kHz para edição de áudio. Sem cadastro, sem marca d\'água.',
  alternates: { canonical: 'https://mictoo.com/pt/mp3-to-wav', languages: LANGS },
}

export default function PtMp3ToWavPage() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="MP3 → WAV · Grátis · Sem cadastro"
      h1={<>MP3 para WAV<br /><span className="text-brand-600">Conversor online gratuito</span></>}
      subtitle="Solte um MP3. Receba um WAV PCM a 16-bit/44.1 kHz pronto para software de edição de áudio. Sem marca d&apos;água, sem email."
      tool={<ConverterZone from="mp3" to="wav" />}
      howItWorks={[
        { icon: '📂', title: 'Solte o MP3', desc: 'Arraste o MP3 para a caixa. Arquivos até 25 MB anonimamente, 60 MB depois do cadastro.' },
        { icon: '⚡', title: 'ffmpeg decodifica para PCM', desc: 'PCM de 16-bit, 44.1 kHz, layout de canais da fonte preservado. Poucos segundos para um arquivo típico.' },
        { icon: '⬇️', title: 'Baixe o WAV', desc: 'O arquivo WAV é cerca de dez vezes maior que o MP3 porque é não comprimido. Apagado dos nossos servidores em até uma hora.' },
      ]}
      whyUse={{ title: 'Por que converter MP3 para WAV', bullets: [
        { title: 'Editores de áudio preferem WAV', desc: 'Audacity, Adobe Audition, Logic, Pro Tools, todos abrem MP3 mas a maioria das operações (edição precisa, aplicação de efeitos, normalização) funciona melhor em WAV. Converter primeiro evita a pequena perda de qualidade das codificações MP3 repetidas.' },
        { title: 'Sem perda de qualidade adicional nos edits', desc: 'Cada re-codificação MP3 degrada o áudio ligeiramente. Converta para WAV, faça seus edits, exporte de volta para MP3 no final, esse round-trip único é o melhor que você pode fazer.' },
        { title: 'Exigido por algum hardware e software legado', desc: 'Alguns softwares antigos de gravação de CD, samplers e equipamentos de gravação só leem WAV. A conversão é a ponte.' },
        { title: 'Uso forense e broadcast', desc: 'Análise forense de áudio e workflows de broadcast tradicionalmente usam WAV porque o formato é bem compreendido e não comprimido. MP3 é aceitável como material fonte mas WAV é o formato de trabalho.' },
        { title: 'Sem marca d\'água, sem upsell', desc: 'Só áudio decodificado num contêiner WAV. Não adicionamos nada.' },
      ]}}
      useCases={{ title: 'Quando você converteria MP3 para WAV', items: [
        { title: 'Editando áudio no Audacity, Reaper, Logic', desc: 'Converta para WAV primeiro, depois aplique efeitos, corte, normalize, mixe. Re-exporte para MP3 no final se você precisa de um arquivo pequeno para distribuição.' },
        { title: 'Masterização para vinil ou CD', desc: 'Corte de vinil e prensagem de CD ambos querem áudio sem perdas. Se sua única fonte é MP3, converter para WAV dá ao engenheiro de masterização algo com que trabalhar, embora a qualidade do áudio seja limitada pela fonte MP3.' },
        { title: 'Preparação de sample para um sampler', desc: 'Samplers de hardware (Akai, Korg) frequentemente querem arquivos WAV em profundidades de bit e sample rates específicos.' },
        { title: 'Trabalho de voiceover para um vídeo', desc: 'Alguns editores de vídeo (DaVinci, Premiere) lidam bem com MP3 mas mostram formas de onda melhores e aplicam efeitos de forma mais limpa em WAV.' },
        { title: 'Análise forense ou de transcrição', desc: 'Algumas ferramentas de análise especializadas exigem entrada WAV.' },
      ]}}
      proTips={{ title: 'Dicas para conversão MP3 para WAV', tips: [
        { title: 'WAV vai ter 10x o tamanho do MP3', desc: 'Um MP3 de 5 MB se expande para cerca de 50 MB como WAV a 16-bit/44.1 kHz. A conversão não restaura qualidade perdida, só te dá um formato trabalhável.' },
        { title: 'A qualidade do WAV é limitada pelo MP3', desc: 'Você não pode fazer um MP3 de 128 kbps soar como um CD convertendo para WAV. O WAV só torna o áudio existente editável sem mais perda de compressão.' },
        { title: 'Para maior fidelidade, peça o original', desc: 'Se você está fazendo masterização ou restauração séria, pegue o original sem perdas (WAV, FLAC, ALAC) da fonte. MP3 → WAV é um contorno, não um upgrade.' },
        { title: 'Sample rate importa para hardware', desc: 'A maioria do hardware quer 44.1 kHz (CD) ou 48 kHz (vídeo). Nosso conversor sempre gera 44.1. Se você precisa de 48, abra o WAV no Audacity e re-amostre.' },
        { title: 'WAV de 24-bit, use Audacity', desc: 'Nosso conversor gera WAV de 16-bit. Para 24-bit, abra o WAV resultante no Audacity e re-exporte com 24-bit float. A profundidade de bit extra dá margem para edição mesmo que o áudio fonte seja só equivalente a 16-bit.' },
        { title: 'Mono entra, mono sai, economiza espaço', desc: 'Se seu MP3 é mono, o WAV também é mono, metade do tamanho de uma conversão estéreo. Preservamos o layout de canais da fonte.' },
      ]}}
      faq={[
        { q: 'A conversão MP3 para WAV é realmente grátis?', a: 'Sim. Sem conta até 25 MB, sem marca d\'água, sem limite de tempo.' },
        { q: 'Por que o WAV é tanto maior que o MP3?', a: 'MP3 usa compressão perceptual para jogar fora dados de áudio que seus ouvidos mal notam. WAV armazena cada amostra em precisão total. Um MP3 típico é um décimo do tamanho do equivalente WAV.' },
        { q: 'O WAV vai soar melhor que o MP3?', a: 'Não. O MP3 já perdeu dados durante sua codificação original. WAV preserva o áudio como está, não restaura qualidade.' },
        { q: 'Que formato WAV vocês geram?', a: 'PCM de 16-bit, 44.1 kHz, layout de canais da fonte preservado (mono in → mono out, estéreo in → estéreo out).' },
        { q: 'Quanto tempo leva?', a: 'Segundos. Decodificar MP3 é rápido.' },
        { q: 'Posso obter WAV de 24-bit ou 32-bit float?', a: 'Não deste conversor. Abra nosso WAV de 16-bit no Audacity e re-exporte com a profundidade de bit que você quiser, os bits extras dão margem para edição mesmo que a precisão do áudio fonte seja limitada pelo MP3.' },
        { q: 'Vocês guardam meus arquivos?', a: 'Não. Upload deletado após a conversão. Saída eliminada em até uma hora.' },
        { q: 'Posso converter em lote?', a: 'Ainda não no plano grátis. Abra várias abas do navegador.' },
        { q: 'E o sample rate de 48 kHz?', a: 'Geramos 44.1 kHz (taxa de CD). Para 48 kHz (trabalho de vídeo), re-amostre o WAV no Audacity depois da conversão.' },
        { q: 'Por que converter afinal?', a: 'Principalmente para edição de áudio. Audacity, Pro Tools, Logic, todos funcionam melhor em WAV que em MP3, especialmente para edits repetidos.' },
        { q: 'A conversão vai falhar para alguns MP3s?', a: 'Raramente. ffmpeg decodifica essencialmente todo MP3 padrão. Um arquivo genuinamente corrompido pode falhar; do contrário é confiável.' },
        { q: 'Devo manter os dois arquivos?', a: 'Para edição, trabalhe em WAV. Para distribuição, mantenha o MP3 também. Quando a edição acabar, re-exporte do WAV para um MP3 fresco no fim da cadeia.' },
      ]}
      relatedLinks={[
        { href: '/pt/wav-to-mp3', label: 'WAV para MP3', desc: 'A direção reversa.' },
        { href: '/pt/flac-to-mp3', label: 'FLAC para MP3', desc: 'FLAC sem perdas para MP3 portátil.' },
        { href: '/pt/wav-to-text', label: 'WAV para texto', desc: 'Transcreva áudio WAV diretamente.' },
        { href: '/pt/how-to-compress-audio', label: 'Comprimir áudio', desc: 'Para arquivos que você precisa deixar menores.' },
      ]}
    />
  )
}
