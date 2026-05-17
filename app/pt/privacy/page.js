import InfoSectionsLayout from '@/components/InfoSectionsLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/privacy',
  'fr': 'https://mictoo.com/fr/privacy',
  'de': 'https://mictoo.com/de/privacy',
  'es': 'https://mictoo.com/es/privacy',
  'ru': 'https://mictoo.com/ru/privacy',
  'it': 'https://mictoo.com/it/privacy',
  'pt': 'https://mictoo.com/pt/privacy',
  'pl': 'https://mictoo.com/pl/privacy',
  'ja': 'https://mictoo.com/ja/privacy',
  'ko': 'https://mictoo.com/ko/privacy',
  'x-default': 'https://mictoo.com/privacy',
}

export const metadata = {
  title: 'Política de Privacidade — Mictoo',
  description: 'Política de privacidade do Mictoo. Não armazenamos seus arquivos de áudio nem transcrições.',
  alternates: { canonical: 'https://mictoo.com/pt/privacy', languages: LOCALE_ALTERNATES },
}

export default function PtPrivacyPage() {
  return (
    <InfoSectionsLayout
      h1="Política de Privacidade"
      lastUpdated="Última atualização: maio de 2026"
      sections={[
        {
          heading: '1. O que coletamos',
          body: 'O Mictoo não exige cadastro e não coleta dados pessoais. Quando você envia um arquivo, seu navegador o envia diretamente ao Vercel Blob, armazenamento de arquivos da Vercel hospedado nos EUA. O arquivo fica lá brevemente para que nosso servidor o entregue à API Whisper da Groq (hospedada nos EUA) para transcrição, com a API Whisper da OpenAI mantida como fallback automático se a Groq estiver indisponível. O arquivo é automaticamente excluído do Vercel Blob assim que a transcrição termina — normalmente em menos de um minuto. Um job de limpeza por hora remove uploads residuais que por algum motivo não foram excluídos imediatamente. O Mictoo não mantém cópia permanente do seu áudio, vídeo ou da transcrição em seus servidores.',
        },
        {
          heading: '2. Processamento de arquivos e nosso provedor de IA',
          body: 'Os arquivos são transmitidos via HTTPS para a API Whisper da Groq e processados em tempo real em infraestrutura situada nos EUA. Segundo a política de dados da Groq, seu áudio não é usado para treinar modelos. No raro caso de a Groq estar indisponível, a requisição é redirecionada automaticamente para a API Whisper da OpenAI; a OpenAI também não usa dados de API para treino e os retém por no máximo 30 dias para monitoramento anti-abuso antes de excluir. O Mictoo não mantém cópia do áudio nem da transcrição após o fim da sua sessão de navegação.',
        },
        {
          heading: '3. Analytics e publicidade',
          body: (
            <>
              Podemos exibir anúncios via Google AdSense. O Google pode usar cookies para oferecer anúncios relevantes. Você pode desativá-los em{' '}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Google Ad Settings</a>
              . Podemos usar analytics anônimos (por exemplo, contagem de page views) para entender o uso. Nenhum dado pessoal identificável é coletado.
            </>
          ),
        },
        {
          heading: '4. Cookies',
          body: 'O Mictoo não define cookies próprios. Serviços de terceiros como o Google AdSense podem definir seus próprios cookies no seu dispositivo.',
        },
        {
          heading: '5. Privacidade infantil',
          body: 'O Mictoo não é direcionado a crianças menores de 13 anos. Não coletamos conscientemente dados de menores.',
        },
        {
          heading: '6. Contato',
          body: (
            <>
              Dúvidas sobre a política? Escreva para{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>.
            </>
          ),
        },
      ]}
    />
  )
}
