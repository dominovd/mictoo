import ContactLayout from '@/components/ContactLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/contact',
  'fr': 'https://mictoo.com/fr/contact',
  'de': 'https://mictoo.com/de/contact',
  'es': 'https://mictoo.com/es/contact',
  'ru': 'https://mictoo.com/ru/contact',
  'it': 'https://mictoo.com/it/contact',
  'pt': 'https://mictoo.com/pt/contact',
  'x-default': 'https://mictoo.com/contact',
}

export const metadata = {
  title: 'Contato — Mictoo',
  description: 'Fale com a equipe do Mictoo para feedback, pedidos de funcionalidades ou dúvidas.',
  alternates: { canonical: 'https://mictoo.com/pt/contact', languages: LOCALE_ALTERNATES },
}

export default function PtContactPage() {
  return (
    <ContactLayout
      strings={{
        h1: 'Fale com a gente',
        lead: 'Tem feedback, um pedido de funcionalidade ou problema com um arquivo? Adoraríamos ouvir.',
        emailHeading: 'E-mail',
        emailNote: 'Normalmente respondemos em 1-2 dias úteis.',
        topicsHeading: 'Tópicos que tratamos',
        topics: [
          'Problemas técnicos (a transcrição não funciona, formatos suportados, etc.)',
          'Pedidos e sugestões de funcionalidades',
          'Privacidade e tratamento de dados',
          'Parcerias e colaborações',
          'Imprensa e mídia',
        ],
      }}
    />
  )
}
