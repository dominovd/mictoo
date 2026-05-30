import ContactLayout from '@/components/ContactLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/contact',
  'fr': 'https://mictoo.com/fr/contact',
  'de': 'https://mictoo.com/de/contact',
  'es': 'https://mictoo.com/es/contact',
  'ru': 'https://mictoo.com/ru/contact',
  'it': 'https://mictoo.com/it/contact',
  'pt': 'https://mictoo.com/pt/contact',
  'pl': 'https://mictoo.com/pl/contact',
  'ja': 'https://mictoo.com/ja/contact',
  'ko': 'https://mictoo.com/ko/contact',
  'x-default': 'https://mictoo.com/contact',
}

export const metadata = {
  title: 'Contato — Mictoo',
  description:
    'Contato Mictoo. info@mictoo.com chega numa caixa humana real. Resposta em até um dia útil. Escopo de suporte, pedidos business e atalhos para o FAQ.',
  alternates: { canonical: 'https://mictoo.com/pt/contact', languages: LOCALE_ALTERNATES },

  openGraph: {
    title: "Contato — Mictoo",
    description: "Contato Mictoo. info@mictoo.com chega numa caixa humana real. Resposta em até um dia útil. Escopo de suporte, pedidos business e atalhos para o FAQ.",
    url: "https://mictoo.com/pt/contact",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato — Mictoo",
    description: "Contato Mictoo. info@mictoo.com chega numa caixa humana real. Resposta em até um dia útil. Escopo de suporte, pedidos business e atalhos para o FAQ.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtContactPage() {
  return (
    <ContactLayout
      privacyHref="/pt/privacy"
      strings={{
        h1: 'Fale com a gente',
        lead:
          'Tem uma pergunta, feedback ou pedido de função? A gente vai gostar de ouvir. Lemos toda mensagem e respondemos em até um dia útil.',
        privacyPrefix: 'Para dúvidas de privacidade, veja nossa',
        privacyLinkLabel: 'privacy policy',
        privacySuffix: '.',

        responseTimeHeading: 'Tempo de resposta',
        responseTimeBody:
          'info@mictoo.com chega numa caixa humana real, não num sistema de ticket. Respondemos de segunda a sexta, horário da Europa Central, normalmente em até um dia útil. Se você escrever sexta à noite, espere uma resposta segunda. Não somos suporte 24/7 e não fingimos que somos.',

        supportScopeHeading: 'No que podemos ajudar',
        supportScopeItems: [
          { label: 'Bug reports.', body: 'Algo quebrado no uploader, transcrições voltando confusas, o SRT que não roda no seu editor de vídeo. Indique o nome do arquivo e o horário do upload se puder.' },
          { label: 'Pedidos de função.', body: 'Diga o que você gostaria que o Mictoo fizesse. Não prometemos nada, mas lemos de verdade e já entregamos funções que usuários pediram.' },
          { label: 'Dúvidas sobre qualidade da transcrição.', body: 'Se um arquivo específico voltou com precisão ruim, mande (ou descreva) e ajudamos a diagnosticar se é problema de gravação ou de modelo.' },
          { label: 'Conta ou billing.', body: 'No free tier não tem billing. Para o plano Pro (quando lançar), dúvidas de billing vêm aqui também.' },
          { label: 'Parcerias e integrações.', body: 'Se você quer integrar Mictoo no seu produto, ou construir algo complementar, estamos abertos a conversar.' },
        ],

        faqShortcutHeading: 'Mais rápido que email',
        faqShortcutBody: [
          'Se sua pergunta é uma das comuns, o FAQ na landing certa provavelmente já tem a resposta. Atalhos rápidos: preço, limites de tamanho e duração de arquivo, formatos suportados e dúvidas de privacidade são respondidos no fim de toda landing (por exemplo na página Áudio em texto).',
          'Para tudo o resto, email é o canal certo.',
        ],

        businessHeading: 'Pedidos business e imprensa',
        businessBody: [
          'Mesmo email: info@mictoo.com. Use [Press] ou [Business] no assunto para roteamento certo. Estamos abertos a entrevistas sobre SEO indie e ferramentas IA no espaço de produtividade, mas não fazemos placement pago ou conteúdo patrocinado.',
          'Se você é jornalista escrevendo sobre ferramentas de transcrição ou IA em software de produtividade, damos respostas diretas sobre como o Mictoo funciona por baixo do capô, quanto custa para rodar e o que pensamos da concorrência.',
        ],

        languagesHeading: 'Idiomas',
        languagesBody:
          'Oferecemos suporte em inglês. Respostas em português, russo e espanhol são best-effort. Se você escrever em outro idioma, respondemos em inglês a menos que encontremos um falante fluente no time.',
      }}
    />
  )
}
