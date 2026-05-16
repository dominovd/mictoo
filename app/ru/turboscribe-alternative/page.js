import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/turboscribe-alternative',
  'fr': 'https://mictoo.com/fr/turboscribe-alternative',
  'de': 'https://mictoo.com/de/turboscribe-alternative',
  'es': 'https://mictoo.com/es/turboscribe-alternative',
  'ru': 'https://mictoo.com/ru/turboscribe-alternative',
  'it': 'https://mictoo.com/it/turboscribe-alternative',
  'pt': 'https://mictoo.com/pt/turboscribe-alternative',
  'pl': 'https://mictoo.com/pl/turboscribe-alternative',
  'ja': 'https://mictoo.com/ja/turboscribe-alternative',
  'ko': 'https://mictoo.com/ko/turboscribe-alternative',
  'x-default': 'https://mictoo.com/turboscribe-alternative',
}

export const metadata = {
  title: 'Альтернатива TurboScribe — Бесплатная Whisper-расшифровка без регистрации | Mictoo',
  description: 'TurboScribe — популярный инструмент на Whisper, но требует аккаунт и ограничивает бесплатных юзеров 30 минутами в день. Mictoo полностью без регистрации, с встроенным ИИ-резюме.',
  alternates: { canonical: 'https://mictoo.com/ru/turboscribe-alternative', languages: LANGS },
}

export default function RuTurboScribeAlternativePage() {
  return (
    <ComparisonLayout
      badge="Сравнение · TurboScribe · Бесплатно"
      h1={<>Альтернатива TurboScribe<br /><span className="text-brand-600">Тот же Whisper, без регистрации</span></>}
      subtitle="TurboScribe и Mictoo используют OpenAI Whisper, поэтому качество расшифровки практически одинаковое. Основные различия — регистрация, лимиты файла и встроенное ИИ-резюме."
      competitorName="TurboScribe"
      rows={[
        { label: 'Бесплатный тариф',       mictoo: 'Без месячного лимита, 25 МБ на файл', them: '3 файла / день, по 30 мин' },
        { label: 'Нужен аккаунт',          mictoo: 'Нет', them: 'Да (email-регистрация)' },
        { label: 'Платные тарифы',         mictoo: 'Бесплатно',  them: '20 $ / мес безлимит' },
        { label: 'Размер файла (free)',    mictoo: '25 МБ на файл', them: '~150 МБ / 30 мин на файл' },
        { label: 'Размер файла (платно)',  mictoo: 'Как на free',  them: '5 ГБ / 10 ч на файл' },
        { label: 'Batch-загрузка',         mictoo: 'Нет', them: 'Да (платно, до 50 файлов)' },
        { label: 'Модель расшифровки',     mictoo: 'OpenAI Whisper', them: 'OpenAI Whisper' },
        { label: 'ИИ-резюме',              mictoo: 'Да, бесплатно', them: 'Да (платно)' },
        { label: 'Экспорт SRT',            mictoo: 'Да, бесплатно', them: 'Да' },
        { label: 'История расшифровок',    mictoo: 'Нет', them: 'Да (в аккаунте)' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: 'Реально без регистрации', desc: 'TurboScribe просит email даже на free-тарифе. Mictoo не просит ничего — загрузил файл, получил текст. Удобно для разовых записей, когда не хочется заводить ещё один аккаунт.' },
        { icon: '✨', title: 'ИИ-резюме на бесплатном тарифе', desc: 'Mictoo автоматически выдаёт резюме на 2-3 предложения, ключевые пункты и action items после каждой расшифровки. TurboScribe прячет ИИ-резюме за платным тарифом $20/мес.' },
        { icon: '🔒', title: 'Ничего не сохраняется', desc: 'Никакой истории, облачного рабочего пространства или проектов. Аудио передаётся в Whisper и сразу удаляется. TurboScribe сохраняет ваши расшифровки в аккаунте.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Хочется ноль трения при входе',
          'Нужно ИИ-резюме на бесплатном тарифе',
          'Файлы меньше 25 МБ (или можно сжать)',
          'Цените, что нет сохранённой истории',
        ],
        them: [
          'Нужны файлы больше 25 МБ на free-тарифе',
          'Хочется история всех прошлых расшифровок',
          'Нужно грузить много файлов сразу (batch)',
          'Готовы платить $20/мес за безлимитные большие файлы',
        ],
      }}
      faq={[
        { q: 'Качество расшифровки одинаковое?', a: 'Да, по сути. Оба инструмента используют модель Whisper от OpenAI. Различия — в том, как каждый сегментирует аудио и обрабатывает edge cases, но базовая точность сопоставима.' },
        { q: 'Почему у Mictoo меньший лимит файла?', a: 'Лимит 25 МБ берётся из Whisper API OpenAI. TurboScribe обрабатывает большие файлы, разбивая их на сервере и склеивая результаты. Мы работаем над тем же подходом.' },
        { q: 'Можно ли расшифровать длинные файлы через Mictoo?', a: 'Пока файлы должны быть до 25 МБ. Гайд how-to-compress-audio на сайте описывает три быстрых способа уложить длинную запись: извлечь аудио, снизить битрейт или разбить на сегменты.' },
        { q: 'Mictoo планирует добавить аккаунт/историю?', a: 'Локальная история (в браузере, без серверного аккаунта) в roadmap. Облачная история с регистрацией намеренно не планируется — это противоречит позиционированию "без регистрации".' },
        { q: 'Что быстрее?', a: 'TurboScribe заявляет ~30 минут обрабатываются менее чем за минуту. Mictoo похоже — большинство файлов расшифровываются за 15-30 секунд. Оба ощущаются почти мгновенными на файлах до 25 минут.' },
      ]}
      relatedLinks={[
        { href: '/ru/descript-alternative', label: 'Альтернатива Descript' },
        { href: '/ru/notta-alternative', label: 'Альтернатива Notta' },
        { href: '/ru', label: 'Попробовать Mictoo' },
      ]}
    />
  )
}
