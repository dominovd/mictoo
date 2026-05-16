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
  title: 'Contacto — Mictoo',
  description: 'Contacta con el equipo de Mictoo. Leemos cada mensaje.',
  alternates: { canonical: 'https://mictoo.com/es/contact', languages: LOCALE_ALTERNATES },
}

export default function EsContactPage() {
  return (
    <ContactLayout
      privacyHref="/es/privacy"
      strings={{
        h1: 'Contáctanos',
        lead: '¿Tienes una pregunta, un comentario o una sugerencia de funcionalidad? Nos encantaría saber de ti. Leemos cada mensaje y respondemos en menos de 24 horas.',
        privacyPrefix: 'Para temas de privacidad, consulta nuestra',
        privacyLinkLabel: 'Política de privacidad',
        privacySuffix: '.',
      }}
    />
  )
}
