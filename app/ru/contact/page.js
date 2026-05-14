import ContactLayout from '@/components/ContactLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/contact',
  'fr': 'https://mictoo.com/fr/contact',
  'de': 'https://mictoo.com/de/contact',
  'es': 'https://mictoo.com/es/contact',
  'ru': 'https://mictoo.com/ru/contact',
  'x-default': 'https://mictoo.com/contact',
}

export const metadata = {
  title: 'Контакты — Mictoo',
  description: 'Свяжитесь с командой Mictoo. Мы читаем каждое сообщение.',
  alternates: { canonical: 'https://mictoo.com/ru/contact', languages: LOCALE_ALTERNATES },
}

export default function RuContactPage() {
  return (
    <ContactLayout
      privacyHref="/ru/privacy"
      strings={{
        h1: 'Свяжитесь с нами',
        lead: 'Есть вопрос, отзыв или пожелание по функционалу? Будем рады сообщению. Мы читаем каждое письмо и обычно отвечаем в течение 24 часов.',
        privacyPrefix: 'По вопросам конфиденциальности — см.',
        privacyLinkLabel: 'Политику конфиденциальности',
        privacySuffix: '.',
      }}
    />
  )
}
