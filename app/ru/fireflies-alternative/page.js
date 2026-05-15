import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/fireflies-alternative',
  'fr': 'https://mictoo.com/fr/fireflies-alternative',
  'de': 'https://mictoo.com/de/fireflies-alternative',
  'es': 'https://mictoo.com/es/fireflies-alternative',
  'ru': 'https://mictoo.com/ru/fireflies-alternative',
  'x-default': 'https://mictoo.com/fireflies-alternative',
}

export const metadata = {
  title: 'Альтернатива Fireflies — Расшифровка встреч без бота | Mictoo',
  description: 'Fireflies подключается к вашим встречам как бот, чтобы записать и расшифровать. Mictoo расшифровывает уже имеющиеся записи — без бота, без регистрации, без OAuth. Бесплатно на OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/ru/fireflies-alternative', languages: LANGS },
}

export default function RuFirefliesAlternativePage() {
  return (
    <ComparisonLayout
      badge="Сравнение · Fireflies · Бесплатно"
      h1={<>Альтернатива Fireflies<br /><span className="text-brand-600">Расшифровка встреч без бота</span></>}
      subtitle="Fireflies подключается к вашим встречам как ИИ-бот, чтобы записать и расшифровать в реальном времени. Mictoo работает наоборот — загрузите уже имеющуюся запись и получите расшифровку. Без бота, без интеграции с календарём, без регистрации."
      competitorName="Fireflies"
      rows={[
        { label: 'Бесплатный тариф',       mictoo: 'Без месячного лимита, 25 МБ на файл', them: '800 минут / пользователь / месяц' },
        { label: 'Нужен аккаунт',          mictoo: 'Нет', them: 'Да (email + OAuth)' },
        { label: 'Платные тарифы',         mictoo: 'Бесплатно',  them: '10-19 $ / пользователь / мес' },
        { label: 'Способ записи',          mictoo: 'Загружаете сами', them: 'Бот подключается к встрече' },
        { label: 'Live-расшифровка',       mictoo: 'Нет',  them: 'Да (во время звонка)' },
        { label: 'Интеграция с календарём',mictoo: 'Нет',  them: 'Google / Outlook / Zoom' },
        { label: 'ИИ-резюме',              mictoo: 'Да, бесплатно', them: 'Да (платно)' },
        { label: 'Интеграция с CRM',       mictoo: 'Нет',  them: 'Salesforce, HubSpot и др.' },
        { label: 'Модель расшифровки',     mictoo: 'OpenAI Whisper', them: 'Собственная' },
      ]}
      whyMictoo={[
        { icon: '🚫', title: 'Никакого бота на встречах', desc: 'Некоторым участникам некомфортно, когда ИИ-бот пишет встречу. С Mictoo вы записываете локально через Zoom/Meet/Teams и расшифровываете потом.' },
        { icon: '🆓', title: 'Без регистрации и квоты', desc: 'Бесплатный тариф Fireflies — 800 минут на пользователя в месяц и OAuth обязателен. Mictoo работает без аккаунта и без подсчёта минут.' },
        { icon: '🌍', title: 'Лучше для не-английского аудио', desc: 'OpenAI Whisper хорошо справляется с 50+ языками. Fireflies оптимизирован под англоязычные бизнес-звонки и слабее на русском, украинском, польском или корейском.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Записываете встречи сами и нужна расшифровка после',
          'Не хотите ИИ-бота на ваших звонках',
          'Нужна расшифровка для не-английских встреч',
          'Хочется бесплатный вариант без регистрации для разовых записей',
        ],
        them: [
          'Нужна live-расшифровка во время встречи',
          'Нужно логирование sales-разговоров в CRM',
          'Команде нужна автоматическая запись всех звонков',
          'Нужна аналитика разговора (время речи, сентимент и т.п.)',
        ],
      }}
      faq={[
        { q: 'Может ли Mictoo подключаться к Zoom/Teams встрече как Fireflies?', a: 'Нет. Mictoo не подключается к встречам. Вы записываете звонок через встроенную запись Zoom/Teams/Meet и загружаете файл. Это исключает бота на встречах и связанные privacy-вопросы.' },
        { q: 'Как получить запись для загрузки?', a: 'В Zoom: включите Local Recording или Cloud Recording в настройках. После встречи скачайте MP4 или M4A из Zoom и загрузите в Mictoo.' },
        { q: 'Mictoo делает action items и резюме как Fireflies?', a: 'Да. После расшифровки ИИ-резюме Mictoo показывает обзор 2-3 предложения, ключевые пункты и action items — всё на бесплатном тарифе. У Fireflies похожее, но только платно.' },
        { q: 'А аналитика встреч?', a: 'Mictoo не делает время речи, сентимент или аналитику спикеров. Если нужен conversation intelligence для коучинга продаж, Fireflies (или Gong) лучше подходит.' },
        { q: 'Mictoo безопасен для конфиденциальных встреч?', a: 'Файлы передаются напрямую в Whisper API OpenAI и удаляются. Mictoo ничего не сохраняет. По политике API OpenAI ваше аудио не используется для обучения и удаляется максимум через 30 дней мониторинга злоупотреблений.' },
      ]}
      relatedLinks={[
        { href: '/ru/otter-alternative', label: 'Альтернатива Otter' },
        { href: '/ru/meeting-transcription', label: 'Транскрибация встреч' },
        { href: '/ru/zoom-transcription', label: 'Транскрибация Zoom' },
        { href: '/ru', label: 'Попробовать Mictoo' },
      ]}
    />
  )
}
