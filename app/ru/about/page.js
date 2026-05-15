import AboutLayout from '@/components/AboutLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/about',
  'fr': 'https://mictoo.com/fr/about',
  'de': 'https://mictoo.com/de/about',
  'es': 'https://mictoo.com/es/about',
  'ru': 'https://mictoo.com/ru/about',
  'x-default': 'https://mictoo.com/about',
}

export const metadata = {
  title: 'О сервисе — Mictoo, бесплатная транскрибация на ИИ',
  description: 'Mictoo — бесплатный сервис транскрибации аудио и видео на ИИ. Без регистрации.',
  alternates: { canonical: 'https://mictoo.com/ru/about', languages: LOCALE_ALTERNATES },
}

export default function RuAboutPage() {
  return (
    <AboutLayout
      contactHref="/ru/contact"
      strings={{
        h1: 'О Mictoo',
        lead: 'Mictoo — это бесплатный сервис транскрибации аудио и видео, без регистрации, для всех, кому нужно быстро и точно превратить речь в текст.',
        ourWhy: 'Мы сделали Mictoo, потому что хорошая транскрибация не должна требовать подписки, аккаунта или технических навыков. Загрузите файл — получите текст. Всё.',
        whatPowersHeading: 'На чём работает Mictoo?',
        whatPowersBody: 'В основе Mictoo — OpenAI Whisper, та же модель распознавания речи, что используется в ChatGPT, обученная на 680 000 часов многоязычного аудио. Поддерживает 50+ языков с автоопределением и считается одной из самых точных доступных моделей распознавания речи. Файлы передаются напрямую в API OpenAI и не сохраняются на серверах Mictoo. Согласно политике обработки данных API OpenAI, ваше аудио не используется для обучения моделей и удаляется не позднее чем через 30 дней мониторинга на предмет злоупотреблений.',
        principlesHeading: 'Наши принципы',
        principles: [
          { label: 'Бесплатно.', body: 'Никаких скрытых платежей, триалов или карт.' },
          { label: 'Конфиденциально.', body: 'Ваши файлы не сохраняются. Они обрабатываются и сразу удаляются.' },
          { label: 'Просто.', body: 'Одна страница, один инструмент, ноль трения.' },
          { label: 'Точно.', body: 'Используем лучшую доступную модель ИИ для качества распознавания.' },
        ],
        contactHeading: 'Связаться с нами',
        contactPrefix: 'Есть вопрос, пожелание или идея?',
        contactCtaLabel: 'Свяжитесь с нами',
        contactSuffix: ' или пишите на',
      }}
    />
  )
}
