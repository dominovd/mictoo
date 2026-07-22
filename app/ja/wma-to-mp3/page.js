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
  title: 'WMAからMP3へ：レガシーWindows Media Audioのための無料コンバーター | Mictoo',
  description:
    '古いWMAファイルを普遍的なMP3に変換します。レガシーWindows Mediaアーカイブ、ボイスメールエクスポート、リッピングしたCDを救うために作られました。現代のプレーヤーが開けないものです。',
  alternates: {
    canonical: 'https://mictoo.com/ja/wma-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'WMAからMP3へ：レガシーWindows Mediaコンバーター | Mictoo',
    description: 'レガシーWMAアーカイブ、ボイスメールエクスポート、リッピングしたCDを救います。',
    url: 'https://mictoo.com/ja/wma-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WMAからMP3へ：無料コンバーター',
    description: 'レガシーWMAファイルを救います。無料です。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaWmaToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ja"
      mode="converter" from="wma" to="mp3" currentHref="/ja/wma-to-mp3"
      badge="WMA → MP3 · 無料 · レガシー救助"
      h1First="WMAからMP3へ"
      h1Second="無料のレガシーWindows Mediaコンバーター"
      subtitle="古いWMAファイル（ボイスメールエクスポート、リッピングしたCD、レガシーWindows Mediaアーカイブ）をドロップして、どの現代のデバイスやプレーヤーでも開ける普遍的なMP3を取得します。"
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="ステレオ"
      stepsTitle="WMAからMP3への変換方法"
      steps={[
        { icon: 'upload',   title: 'WMAをドロップ',        desc: '任意のWindows Media Audioバージョン、最大25 MBを匿名で。' },
        { icon: 'waveform', title: 'デコードとエンコード', desc: 'ffmpegがWMAを読み取り、128 kbpsステレオMP3に44.1 kHzで再エンコードします。' },
        { icon: 'download', title: 'MP3をダウンロード',    desc: 'ほとんどの現在のプレーヤー、電話、オーディオエディターと互換性のあるMP3を取得します。' },
      ]}
      previewInputName="voicemail-2011.wma"
      previewInputSize="1.2 MB · 00:02:34"
      previewOutputName="voicemail-2011.mp3"
      previewOutputSize="00:02:34 · 128 kbps · 2.4 MB"
      whyTitle="WMAからMP3への変換にMictooを使用する理由"
      whyCards={[
        { icon: 'target',   title: 'レガシーファイルの処理',    desc: 'iTunes、Apple Music、現代のプレーヤーが開けない古いWindows Media Audioファイル。' },
        { icon: 'fileAudio',title: '広範なMP3互換性', desc: 'MP3はmacOS、Linux、iPhone、Android、一般的な音楽プレーヤーで広くサポートされています。' },
        { icon: 'lock',     title: '変換後にファイル削除',     desc: 'アップロードされたWMAは変換後に削除され、MP3は1時間以内に消去されます。' },
        { icon: 'shield',   title: 'ウォーターマークやタグなし',     desc: 'ただ音声が再エンコードされます。ブランドのイントロやメタデータは挿入されません。' },
      ]}
      scenariosTitle="WMAからMP3への変換が役立つ場面"
      scenarios={[
        { icon: 'archive',    title: 'レガシーCDリップ' },
        { icon: 'headphones', title: '古いボイスメールエクスポート' },
        { icon: 'editPen',    title: 'Windows Movie Maker出力' },
        { icon: 'mail',       title: '非Windowsデバイスで共有' },
        { icon: 'video',      title: '現代のエディターにインポート' },
        { icon: 'waveform',   title: 'テープアーカイブを救助' },
      ]}
      tipsTitle="クリーンなWMAからMP3への変換のためのヒント"
      tips={[
        'DRM保護されたWMA（古いWindows Media Playerレンタル）はデコードできません。',
        '非常に低ビットレートのWMA（ボイスメール）はソースと同じ音質になります。',
        '古いWMVビデオはここではサポートされていません。MP4からMP3に変換してください。',
        '25 MBを超える録音の場合は、アップロードする前にソースをトリミングまたは分割してください。',
      ]}
      processTitle="変換中に何が起こるか"
      processSteps={['WMA (ASF)', 'Windows Mediaのデコード', 'MP3エンコーディング']}
      compareTitle="WMAとMP3"
      compareRows={[
        { fmt: 'WMA', contains: 'いいえ', size: '小', best: 'レガシーWindowsワークフロー（非推奨）' },
        { fmt: 'MP3', contains: 'いいえ', size: '小', best: '普遍的な互換性、現代のデバイス' },
      ]}
      faq={[
        { q: 'WMAからMP3へのコンバーターは無料ですか？', a: 'はい。25 MBまでのファイルはアカウントなしで変換でき、出力にはウォーターマークがありません。' },
        { q: 'なぜ現代のプレーヤーはWMAを開けないのですか？', a: 'AppleはWMAをサポートしていません。一部のAndroidプレーヤーはそれを廃止しました。WMAはレガシーMicrosoftフォーマットで、Windows自体がそこから移行しています。' },
        { q: 'DRM保護されたWMAを変換できますか？', a: 'いいえ。古いWindows Media PlayerレンタルはDRMを使用しており、ffmpegはデコードできません。著作権保護を回避することはありません。' },
        { q: 'ファイルは保存されますか？', a: 'いいえ。アップロードされたWMAは変換後に削除され、MP3は1時間以内に消去されます。' },
        { q: 'WMAロスレスについてはどうですか？', a: 'コンバーターはWMAロスレスも読み取りますが、出力は依然として128 kbps MP3（ロスィ）です。ロスレス出力が必要な場合は、WAVに変換してください。' },
      ]}
      ctaHeadline="今すぐWMAをMP3に変換"
      ctaSubtitle="レガシーWindows Media Audioを救助します。数秒でポータブルMP3を取得します。"
      ctaButton="WMAファイルを選択"
      moreTools={[
        { href: '/ja/mp4-to-mp3',  label: 'MP4からMP3へ' },
        { href: '/ja/wav-to-mp3',  label: 'WAVからMP3へ' },
        { href: '/ja/flac-to-mp3', label: 'FLACからMP3へ' },
        { href: '/ja/aac-to-mp3',  label: 'AACからMP3へ' },
      ]}
    />
  )
}