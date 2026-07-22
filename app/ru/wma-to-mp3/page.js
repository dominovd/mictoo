import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/wma-to-mp3',
  'fr': 'https://mictoo.com/fr/wma-to-mp3',
  'de': 'https://mictoo.com/de/wma-to-mp3',
  'es': 'https://mictoo.com/es/wma-to-mp3',
  'ru': 'https://mictoo.com/ru/wma-to-mp3',
  'it': 'https://mictoo.com/it/wma-to-mp3',
  'pt': 'https://mictoo.com/pt/wma-to-mp3',
  'pl': 'https://mictoo.com/pl/wma-to-mp3',
  'ja': 'https://mictoo.com/ja/wma-to-mp3',
  'ko': 'https://mictoo.com/ko/wma-to-mp3',
  'x-default': 'https://mictoo.com/wma-to-mp3',
}

export const metadata = {
  title: 'WMA в MP3: Бесплатный конвертер для устаревшего Windows Media Audio | Mictoo',
  description:
    'Конвертируйте старые WMA файлы в универсальный MP3. Создан для восстановления устаревших архивов Windows Media, экспорта голосовых сообщений и рипов CD, которые ничего современное не хочет открывать.',
  alternates: {
    canonical: 'https://mictoo.com/ru/wma-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'WMA в MP3: Конвертер устаревшего Windows Media | Mictoo',
    description: 'Восстановите устаревшие архивы WMA, экспорт голосовых сообщений, рипы CD.',
    url: 'https://mictoo.com/ru/wma-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WMA в MP3: Бесплатный конвертер',
    description: 'Восстановите устаревшие WMA файлы. Бесплатно.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RuWmaToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ru"
      mode="converter" from="wma" to="mp3" currentHref="/ru/wma-to-mp3"
      badge="WMA → MP3 · Бесплатно · Восстановление устаревших файлов"
      h1First="WMA в MP3"
      h1Second="Бесплатный конвертер устаревшего Windows Media"
      subtitle="Перетащите старый WMA файл (экспорт голосового сообщения, рип CD, устаревший архив Windows Media) и получите универсальный MP3, который откроет любое современное устройство или плеер."
      outputFormat="MP3" outputQuality="128 кбит/с" outputAudio="Стерео"
      stepsTitle="Как работает конвертация WMA в MP3"
      steps={[
        { icon: 'upload',   title: 'Перетащите WMA',        desc: 'Любая версия Windows Media Audio, до 25 MB анонимно.' },
        { icon: 'waveform', title: 'Мы декодируем и кодируем', desc: 'ffmpeg считывает WMA и перекодирует в 128 кбит/с стерео MP3 на 44.1 кГц.' },
        { icon: 'download', title: 'Скачайте MP3',    desc: 'Получите MP3, совместимый с большинством современных плееров, телефонов и аудиоредакторов.' },
      ]}
      previewInputName="voicemail-2011.wma"
      previewInputSize="1.2 MB · 00:02:34"
      previewOutputName="voicemail-2011.mp3"
      previewOutputSize="00:02:34 · 128 кбит/с · 2.4 MB"
      whyTitle="Почему стоит использовать Mictoo для WMA в MP3?"
      whyCards={[
        { icon: 'target',   title: 'Обработка устаревших файлов',    desc: 'Старые файлы Windows Media Audio, которые iTunes, Apple Music и современные плееры отказываются открывать.' },
        { icon: 'fileAudio',title: 'Широкая совместимость MP3', desc: 'MP3 широко поддерживается на macOS, Linux, iPhone, Android и обычных музыкальных плеерах.' },
        { icon: 'lock',     title: 'Файлы удаляются после',     desc: 'Загруженный WMA удаляется после конвертации; MP3 очищается в течение часа.' },
        { icon: 'shield',   title: 'Без водяных знаков или тегов',     desc: 'Только аудио, перекодированное. Без брендированного интро, без внедренных метаданных.' },
      ]}
      scenariosTitle="Когда WMA в MP3 полезно"
      scenarios={[
        { icon: 'archive',    title: 'Рип устаревшего CD' },
        { icon: 'headphones', title: 'Старый экспорт голосового сообщения' },
        { icon: 'editPen',    title: 'Вывод Windows Movie Maker' },
        { icon: 'mail',       title: 'Поделиться на не-Windows устройстве' },
        { icon: 'video',      title: 'Импорт в современный редактор' },
        { icon: 'waveform',   title: 'Восстановление архивов с пленки' },
      ]}
      tipsTitle="Советы для чистого WMA в MP3"
      tips={[
        'WMA с защитой DRM (старые аренды Windows Media Player) не могут быть декодированы.',
        'WMA с очень низким битрейтом (голосовые сообщения) будут звучать так же, как источник.',
        'Старое видео WMV здесь не поддерживается; используйте MP4 в MP3 вместо этого.',
        'Для записей более 25 MB обрежьте или разделите источник перед загрузкой.',
      ]}
      processTitle="Что происходит во время конвертации"
      processSteps={['WMA (ASF)', 'Декодирование Windows Media', 'Кодирование MP3']}
      compareTitle="WMA против MP3"
      compareRows={[
        { fmt: 'WMA', contains: 'Нет', size: 'Маленький', best: 'Устаревшие рабочие процессы Windows (устарело)' },
        { fmt: 'MP3', contains: 'Нет', size: 'Маленький', best: 'Универсальная совместимость, современные устройства' },
      ]}
      faq={[
        { q: 'Конвертер WMA в MP3 бесплатный?', a: 'Да. Файлы до 25 MB могут быть конвертированы без аккаунта, и выходной файл не имеет водяного знака.' },
        { q: 'Почему современные плееры отказываются открывать WMA?', a: 'Apple никогда не поддерживала WMA. Некоторые Android плееры отказались от него. WMA ,  это устаревший формат Microsoft, от которого Windows сама уходит.' },
        { q: 'Можете ли вы конвертировать WMA с защитой DRM?', a: 'Нет. Старые аренды Windows Media Player использовали DRM, который ffmpeg не может декодировать. Мы никогда не обходим защиту авторских прав.' },
        { q: 'Файлы хранятся?', a: 'Нет. Загруженный WMA удаляется после конвертации; MP3 очищается в течение часа.' },
        { q: 'Что насчет WMA без потерь?', a: 'Конвертер также считывает WMA без потерь, но выходной файл все равно будет 128 кбит/с MP3 (с потерями). Для без потерь конвертируйте в WAV вместо этого.' },
      ]}
      ctaHeadline="Конвертируйте ваш WMA в MP3 сейчас"
      ctaSubtitle="Восстановите устаревшее Windows Media Audio. Получите портативный MP3 за считанные секунды."
      ctaButton="Выберите файл WMA"
      moreTools={[
        { href: '/ru/mp4-to-mp3',  label: 'MP4 в MP3' },
        { href: '/ru/wav-to-mp3',  label: 'WAV в MP3' },
        { href: '/ru/flac-to-mp3', label: 'FLAC в MP3' },
        { href: '/ru/aac-to-mp3',  label: 'AAC в MP3' },
      ]}
    />
  )
}