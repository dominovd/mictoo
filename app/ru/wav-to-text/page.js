import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-text',
  'fr': 'https://mictoo.com/fr/wav-to-text',
  'de': 'https://mictoo.com/de/wav-to-text',
  'es': 'https://mictoo.com/es/wav-to-text',
  'ru': 'https://mictoo.com/ru/wav-to-text',
  'it': 'https://mictoo.com/it/wav-to-text',
  'pt': 'https://mictoo.com/pt/wav-to-text',
  'pl': 'https://mictoo.com/pl/wav-to-text',
  'ja': 'https://mictoo.com/ja/wav-to-text',
  'ko': 'https://mictoo.com/ko/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export const metadata = {
  title: 'WAV в текст — Бесплатная онлайн-расшифровка WAV | Mictoo',
  description: 'Бесплатная конвертация WAV-файлов в текст онлайн. Загрузите любой WAV-аудиофайл и получите точную расшифровку за несколько секунд. Без регистрации.',
  alternates: { canonical: 'https://mictoo.com/ru/wav-to-text', languages: LANGS },

  openGraph: {
    title: "WAV в текст — Бесплатная онлайн-расшифровка WAV | Mictoo",
    description: "Бесплатная конвертация WAV-файлов в текст онлайн. Загрузите любой WAV-аудиофайл и получите точную расшифровку за несколько секунд. Без регистрации.",
    url: "https://mictoo.com/ru/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV в текст — Бесплатная онлайн-расшифровка WAV | Mictoo",
    description: "Бесплатная конвертация WAV-файлов в текст онлайн. Загрузите любой WAV-аудиофайл и получите точную расшифровку за несколько секунд. Без регистрации.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function RuWavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · Бесплатно · Мгновенно"
      h1={<>WAV в текст<br /><span className="text-brand-600">Бесплатная расшифровка WAV онлайн</span></>}
      subtitle="Загрузите любой WAV-аудиофайл и получите точную текстовую расшифровку за несколько секунд. Подходит для всех WAV-записей — интервью, звонков, лекций, голосовых заметок. Без аккаунта."
      defaultLanguage="ru"
      valueBlock={
        <article className="prose-content">
          <p>
            WAV хранит несжатый звук: именно поэтому его любят DAW,
            полевые рекордеры и студийные рабочие процессы. Плюс — максимум
            качества. Минус — размер файла растёт очень быстро.
          </p>
          <p>
            Mictoo принимает WAV напрямую: PCM, mono/stereo, записи из
            Audacity, Reaper, Logic, Zoom/Tascam-рекордеров и Broadcast Wave.
            После загрузки вы получаете редактируемый текст и таймкоды.
          </p>
          <p className="text-sm text-slate-500">
            Для длинных WAV иногда лучше сделать временную 16 kHz mono-копию
            или MP3 64 kbps только для загрузки. Оригинал WAV храните отдельно.
          </p>
        </article>
      }
      howItWorks={[
        { icon: '📂', title: 'Загрузите WAV', desc: 'Стандартный PCM WAV, 16/24/32-bit, mono или stereo. Broadcast Wave тоже подходит.' },
        { icon: '⚡', title: 'Модель распознаёт речь', desc: 'Аудио подготавливается для speech-to-text, а большие sample rate и bit depth не требуют ручной настройки.' },
        { icon: '📋', title: 'Скачайте нужный формат', desc: 'TXT для текста, SRT/VTT для субтитров, DOCX для документа, копирование в буфер для быстрых заметок.' },
      ]}
      whyUse={{
        title: 'Когда WAV полезен для расшифровки',
        bullets: [
          { title: 'Не нужна ручная конвертация', desc: 'Если WAV проходит по размеру, загружайте его напрямую. Конвертация в MP3 нужна только для больших файлов.' },
          { title: 'Подходит для студийных и полевых записей', desc: 'Интервью с рекордера, DAW-bounce, лекции из Audacity, voiceover и архивные WAV обрабатываются одним сценарием.' },
          { title: 'Broadcast Wave читается как обычный WAV', desc: 'Дополнительные timecode/scene metadata остаются в исходном файле. Mictoo берёт только аудио для текста.' },
          { title: 'Хороший выбор для сложного звука', desc: 'На тихих, шумных или старых записях несжатый источник иногда помогает сохранить детали речи.' },
        ],
      }}
      useCases={{
        title: 'Типичные источники WAV',
        items: [
          { title: 'Интервью с рекордеров', desc: 'Zoom H5/H6, Tascam DR-серия и похожие устройства часто пишут WAV по умолчанию.' },
          { title: 'Подкасты и voiceover', desc: 'До публикации MP3 мастер часто хранится как WAV. Его удобно расшифровать для шоунотов и субтитров.' },
          { title: 'Лекции и учебные записи', desc: 'USB-микрофон плюс Audacity часто дают mono WAV, который легко превратить в конспект.' },
          { title: 'Архивное аудио', desc: 'Библиотеки, музеи и личные архивы используют WAV как мастер-копию для долгого хранения.' },
        ],
      }}
      proTips={{
        title: 'Практические настройки WAV',
        tips: [
          { title: 'Для загрузки достаточно 16 kHz mono', desc: 'Модель всё равно ресемплит звук. Команда: ffmpeg -i input.wav -ac 1 -ar 16000 -sample_fmt s16 output.wav.' },
          { title: 'Обрезайте тишину', desc: 'Полевые записи часто содержат пустое начало и конец. Уберите их в Audacity, чтобы не тратить лимит размера.' },
          { title: 'Для очень длинных лекций используйте временный MP3', desc: '64 kbps mono MP3 обычно сохраняет речь достаточно хорошо и резко уменьшает размер файла.' },
        ],
      }}
      faq={[
        { q: 'Как конвертировать WAV-файл в текст?', a: 'Загрузите WAV-файл через инструмент выше. Mictoo автоматически расшифрует его через ИИ и покажет текст за несколько секунд.' },
        { q: 'Конвертация WAV в текст бесплатная?', a: 'Да, полностью бесплатная. Без аккаунта. Загружайте WAV-файлы — без месячных квот, без регистрации.' },
        { q: 'Какой максимальный размер WAV-файла?', a: 'До 25 МБ. Для более крупных записей сначала конвертируйте в MP3 или разбейте на короткие сегменты.' },
        { q: 'Можно ли получить расшифровку с таймкодами из WAV?', a: 'Да. После расшифровки нажмите кнопку .srt — скачается файл субтитров с точными таймкодами для каждого сегмента.' },
        { q: 'Какие ещё аудиоформаты поддерживаются?', a: 'Mictoo также поддерживает MP3, MP4, M4A, OGG, WEBM и FLAC помимо WAV.' },
      ]}
      relatedLinks={[
        { href: '/ru/transcribe-mp3-to-text', label: 'MP3 в текст' },
        { href: '/ru/transcribe-audio-to-text', label: 'Аудио в текст' },
        { href: '/ru', label: 'Все форматы' },
      ]}
    />
  )
}
