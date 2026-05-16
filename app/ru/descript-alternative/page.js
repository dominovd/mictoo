import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/descript-alternative',
  'fr': 'https://mictoo.com/fr/descript-alternative',
  'de': 'https://mictoo.com/de/descript-alternative',
  'es': 'https://mictoo.com/es/descript-alternative',
  'ru': 'https://mictoo.com/ru/descript-alternative',
  'it': 'https://mictoo.com/it/descript-alternative',
  'pt': 'https://mictoo.com/pt/descript-alternative',
  'pl': 'https://mictoo.com/pl/descript-alternative',
  'x-default': 'https://mictoo.com/descript-alternative',
}

export const metadata = {
  title: 'Альтернатива Descript — Бесплатная расшифровка без регистрации | Mictoo',
  description: 'Ищете альтернативу Descript только для транскрибации? Mictoo даёт бесплатную ИИ-расшифровку без регистрации на OpenAI Whisper. Без редактора, без подписки.',
  alternates: { canonical: 'https://mictoo.com/ru/descript-alternative', languages: LANGS },
}

export default function RuDescriptAlternativePage() {
  return (
    <ComparisonLayout
      badge="Сравнение · Descript · Бесплатно"
      h1={<>Альтернатива Descript<br /><span className="text-brand-600">Бесплатная расшифровка без редактора</span></>}
      subtitle="Descript — это полноценный аудио- и видеоредактор со встроенной транскрибацией. Если нужна только сама расшифровка, Mictoo — бесплатный вариант без регистрации, на OpenAI Whisper."
      competitorName="Descript"
      rows={[
        { label: 'Бесплатный тариф',       mictoo: 'Без месячного лимита, 25 МБ на файл', them: '1 час расшифровки / месяц' },
        { label: 'Нужен аккаунт',          mictoo: 'Нет', them: 'Да (регистрация email)' },
        { label: 'Платные тарифы',         mictoo: 'Бесплатно',  them: '12-24 $ / мес' },
        { label: 'Аудио/видеоредактор',    mictoo: 'Нет',  them: 'Да (полноценный)' },
        { label: 'Модель расшифровки',     mictoo: 'OpenAI Whisper', them: 'Свой + Whisper по выбору' },
        { label: 'ИИ-резюме',              mictoo: 'Да, бесплатно', them: 'Да (платно)' },
        { label: 'Экспорт SRT',            mictoo: 'Да, бесплатно', them: 'Да (платно)' },
        { label: 'Метки спикеров',         mictoo: 'Вручную',  them: 'Автоматически' },
        { label: 'Языки',                  mictoo: '50+',  them: '20+' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: 'Бесплатно, без регистрации', desc: 'Загрузите файл — получите расшифровку без аккаунта, карты и email. Descript требует регистрацию даже на бесплатном тарифе.' },
        { icon: '⚡', title: 'Быстрее для разовых задач', desc: 'Не нужно ставить приложение, не нужно изучать редактор. Одна страница, один drop, результат за несколько секунд. Сделано для быстрой расшифровки, не для полной продакшен-обработки.' },
        { icon: '🔒', title: 'Приватность в приоритете', desc: 'Аудио передаётся напрямую в Whisper API и не сохраняется на серверах Mictoo. Никаких проектов, облачной библиотеки или командного пространства — by design.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Нужна только расшифровка, не редактирование',
          'Хочется бесплатно и без регистрации',
          'Разовое интервью, подкаст или встреча',
          'Не нужно десктопное приложение или командное пространство',
        ],
        them: [
          'Производите подкасты или видео и нужен полноценный редактор',
          'Хочется workflow "редактировать аудио, редактируя текст"',
          'Нужны автоматические метки спикеров каждый раз',
          'Работаете в команде с общей библиотекой проектов',
        ],
      }}
      faq={[
        { q: 'Mictoo полностью заменяет Descript?', a: 'Не для редактирования. Descript — это аудио/видеоредактор с расшифровкой внутри, Mictoo — только сама расшифровка. Если нужен только текст или субтитры из записи, Mictoo заменяет этот сценарий бесплатно.' },
        { q: 'Качество расшифровки одинаковое?', a: 'Оба инструмента могут использовать OpenAI Whisper. Mictoo использует только Whisper, поэтому точность сопоставима. У Descript на некоторых тарифах есть дополнительная собственная модель.' },
        { q: 'У Mictoo есть метки спикеров?', a: 'Mictoo выдаёт единый текст без автоматических меток на бесплатном тарифе. Можно проставить Спикер 1 / Спикер 2 вручную в браузерном редакторе перед скачиванием. Descript подписывает автоматически.' },
        { q: 'Можно редактировать расшифровку в Mictoo?', a: 'Да — текст появляется в редактируемом поле. Можно поправить имена, пунктуацию или разбивку на абзацы перед копированием или скачиванием в .txt или .srt.' },
        { q: 'А экспорт в Word или DOCX?', a: 'Mictoo сейчас экспортирует .txt и .srt. Скопируйте расшифровку и вставьте в Word для быстрого DOCX. Нативный экспорт DOCX в roadmap.' },
      ]}
      relatedLinks={[
        { href: '/ru/turboscribe-alternative', label: 'Альтернатива TurboScribe' },
        { href: '/ru/otter-alternative', label: 'Альтернатива Otter' },
        { href: '/ru/notta-alternative', label: 'Альтернатива Notta' },
        { href: '/ru', label: 'Попробовать Mictoo' },
      ]}
    />
  )
}
