import InfoSectionsLayout from '@/components/InfoSectionsLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/terms',
  'fr': 'https://mictoo.com/fr/terms',
  'de': 'https://mictoo.com/de/terms',
  'es': 'https://mictoo.com/es/terms',
  'ru': 'https://mictoo.com/ru/terms',
  'it': 'https://mictoo.com/it/terms',
  'pt': 'https://mictoo.com/pt/terms',
  'x-default': 'https://mictoo.com/terms',
}

export const metadata = {
  title: 'Termos de Serviço — Mictoo',
  description: 'Termos de serviço para o uso do Mictoo.',
  alternates: { canonical: 'https://mictoo.com/pt/terms', languages: LOCALE_ALTERNATES },
}

export default function PtTermsPage() {
  return (
    <InfoSectionsLayout
      h1="Termos de Serviço"
      lastUpdated="Última atualização: maio de 2026"
      sections={[
        {
          heading: '1. Aceitação',
          body: 'Ao usar o Mictoo, você concorda com estes termos. Se não concorda, não utilize o serviço.',
        },
        {
          heading: '2. Uso do serviço',
          body: 'O Mictoo é uma ferramenta gratuita de transcrição oferecida "no estado em que se encontra". Você é responsável pelos arquivos que envia e deve ter o direito legal de transcrevê-los. É proibido o uso para conteúdo ilegal, abusivo ou que viole direitos autorais.',
        },
        {
          heading: '3. Limitação de responsabilidade',
          body: 'O serviço é fornecido "no estado em que se encontra" sem garantias de nenhum tipo. Não garantimos 100% de precisão na transcrição. Use o resultado por sua conta e risco.',
        },
        {
          heading: '4. Disponibilidade',
          body: 'Podemos modificar, suspender ou interromper o serviço a qualquer momento sem aviso prévio.',
        },
        {
          heading: '5. Alterações dos termos',
          body: 'Podemos atualizar estes termos ocasionalmente. As mudanças entram em vigor com a publicação nesta página.',
        },
        {
          heading: '6. Contato',
          body: (
            <>
              Dúvidas sobre os termos? Escreva para{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>.
            </>
          ),
        },
      ]}
    />
  )
}
