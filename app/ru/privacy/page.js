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
  'x-default': 'https://mictoo.com/privacy',
}

export const metadata = {
  title: 'Политика конфиденциальности — Mictoo',
  description: 'Политика конфиденциальности Mictoo. Мы не храним ваши аудиофайлы и расшифровки.',
  alternates: { canonical: 'https://mictoo.com/ru/privacy', languages: LOCALE_ALTERNATES },
}

export default function RuPrivacyPage() {
  return (
    <InfoSectionsLayout
      h1="Политика конфиденциальности"
      lastUpdated="Последнее обновление: май 2026"
      sections={[
        {
          heading: '1. Что мы собираем',
          body: 'Mictoo не требует аккаунта и не собирает персональные данные. Когда вы загружаете файл, браузер отправляет его напрямую в Vercel Blob — хранилище файлов Vercel, размещённое в США. Файл лежит там короткое время, пока наш сервер не передаст его в Whisper API от Groq (хостинг США) для распознавания, с автоматическим резервным переключением на Whisper API от OpenAI, если Groq временно недоступен. Файл удаляется из Vercel Blob автоматически сразу после завершения транскрипции — обычно меньше чем за минуту. Ежечасный задание-уборщик подметает загрузки, которые по какой-то причине не удалились сразу. Сам Mictoo не сохраняет постоянных копий вашего аудио, видео или расшифровки на собственных серверах.',
        },
        {
          heading: '2. Обработка файлов и наш AI-провайдер',
          body: 'Файлы передаются по HTTPS в Whisper API от Groq и обрабатываются в режиме реального времени на инфраструктуре в США. Согласно политике обработки данных Groq, ваше аудио не используется для обучения моделей. В редких случаях, когда Groq недоступен, запрос автоматически перенаправляется на Whisper API от OpenAI; OpenAI также не использует данные API для обучения и хранит их не более 30 дней для мониторинга злоупотреблений, после чего удаляет. Сам Mictoo не сохраняет ни аудио, ни расшифровку после завершения вашей браузерной сессии.',
        },
        {
          heading: '3. Аналитика и реклама',
          body: (
            <>
              Мы можем показывать рекламу через Google AdSense. Google может использовать cookies для подбора релевантной рекламы. Вы можете отключить персонализацию в{' '}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">настройках Google Ad Settings</a>
              . Мы можем использовать анонимную аналитику (например, счётчик просмотров страниц), чтобы понимать, как используется сервис. Персональные данные при этом не собираются.
            </>
          ),
        },
        {
          heading: '4. Cookies',
          body: 'Сам Mictoo не устанавливает cookies. Сторонние сервисы, например Google AdSense, могут устанавливать собственные cookies на вашем устройстве.',
        },
        {
          heading: '5. Конфиденциальность детей',
          body: 'Mictoo не предназначен для детей младше 13 лет. Мы сознательно не собираем данные детей.',
        },
        {
          heading: '6. Контакты',
          body: (
            <>
              Вопросы по политике? Пишите на{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>.
            </>
          ),
        },
      ]}
    />
  )
}
