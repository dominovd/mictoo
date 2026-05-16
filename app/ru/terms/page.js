import InfoSectionsLayout from '@/components/InfoSectionsLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/terms',
  'fr': 'https://mictoo.com/fr/terms',
  'de': 'https://mictoo.com/de/terms',
  'es': 'https://mictoo.com/es/terms',
  'ru': 'https://mictoo.com/ru/terms',
  'it': 'https://mictoo.com/it/terms',
  'pt': 'https://mictoo.com/pt/terms',
  'pl': 'https://mictoo.com/pl/terms',
  'ja': 'https://mictoo.com/ja/terms',
  'ko': 'https://mictoo.com/ko/terms',
  'x-default': 'https://mictoo.com/terms',
}

export const metadata = {
  title: 'Условия использования — Mictoo',
  description: 'Условия использования бесплатного сервиса транскрибации Mictoo.',
  alternates: { canonical: 'https://mictoo.com/ru/terms', languages: LOCALE_ALTERNATES },
}

export default function RuTermsPage() {
  return (
    <InfoSectionsLayout
      h1="Условия использования"
      lastUpdated="Последнее обновление: май 2026"
      sections={[
        {
          heading: '1. Принятие условий',
          body: 'Используя Mictoo («Сервис»), вы соглашаетесь с этими Условиями использования. Если вы не согласны, пожалуйста, не используйте Сервис.',
        },
        {
          heading: '2. Использование сервиса',
          body: 'Mictoo предоставляет бесплатный инструмент транскрибации аудио и видео на ИИ. Вы можете использовать Сервис в личных и коммерческих целях при условии, что:',
          list: [
            'Вы загружаете только те файлы, на транскрибацию которых у вас есть права.',
            'Вы не пытаетесь злоупотреблять Сервисом, перегружать его или производить обратную разработку.',
            'Вы не загружаете контент, который является незаконным или нарушает права третьих лиц.',
          ],
        },
        {
          heading: '3. Интеллектуальная собственность',
          body: 'Вы сохраняете полные права собственности на загруженные файлы и созданные расшифровки. Мы не претендуем на ваш контент.',
        },
        {
          heading: '4. Отказ от гарантий',
          body: 'Сервис предоставляется «как есть», без каких-либо гарантий. Мы не гарантируем 100% точности транскрибации. Используйте результаты на своё усмотрение.',
        },
        {
          heading: '5. Ограничение ответственности',
          body: 'В максимальной степени, разрешённой законом, Mictoo и его операторы не несут ответственности за любые косвенные, случайные или последующие убытки, возникающие в связи с использованием Сервиса.',
        },
        {
          heading: '6. Изменения условий',
          body: 'Мы можем обновлять эти условия в любое время. Продолжение использования Сервиса после публикации изменений означает согласие с обновлёнными условиями.',
        },
        {
          heading: '7. Контакты',
          body: (
            <>
              Вопросы? Пишите на{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>.
            </>
          ),
        },
      ]}
    />
  )
}
