import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-mp3',
  'fr': 'https://mictoo.com/fr/m4a-to-mp3',
  'de': 'https://mictoo.com/de/m4a-to-mp3',
  'es': 'https://mictoo.com/es/m4a-to-mp3',
  'ru': 'https://mictoo.com/ru/m4a-to-mp3',
  'it': 'https://mictoo.com/it/m4a-to-mp3',
  'pt': 'https://mictoo.com/pt/m4a-to-mp3',
  'pl': 'https://mictoo.com/pl/m4a-to-mp3',
  'ja': 'https://mictoo.com/ja/m4a-to-mp3',
  'ko': 'https://mictoo.com/ko/m4a-to-mp3',
  'x-default': 'https://mictoo.com/m4a-to-mp3',
}

export const metadata = {
  title: 'M4AからMP3へ：Appleオーディオの無料コンバーター | Mictoo',
  description:
    'iPhoneのボイスメモ、GarageBandのバウンス、AppleエコシステムのM4Aファイルを、ポッドキャストホスト、古いAndroidフォン、レガシープレーヤー用の汎用MP3に変換します。',
  alternates: {
    canonical: 'https://mictoo.com/ja/m4a-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'M4AからMP3へ：Appleオーディオの無料コンバーター | Mictoo',
    description: 'iPhoneのボイスメモとGarageBandのバウンスを汎用MP3に変換します。',
    url: 'https://mictoo.com/ja/m4a-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4AからMP3へ：無料コンバーター',
    description: 'iPhoneのボイスメモを汎用MP3に変換します。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaM4aToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ja"
      mode="converter" from="m4a" to="mp3" currentHref="/ja/m4a-to-mp3"
      badge="M4A → MP3 · 無料 · Appleオーディオ"
      h1First="M4AからMP3へ"
      h1Second="Appleエコシステムオーディオの無料コンバーター"
      subtitle="iPhoneのボイスメモ、GarageBandのバウンス、またはApple Podcastsのエクスポートをドロップして、ポッドキャストホスト、古いAndroidフォン、レガシープレーヤー用の汎用MP3を取得します。"
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="ステレオ"
      stepsTitle="M4AからMP3への変換の仕組み"
      steps={[
        { icon: 'upload',   title: 'M4Aをドロップ',        desc: 'ボイスメモ、GarageBand、Apple Podcastsから。最大25 MBを匿名で。' },
        { icon: 'waveform', title: 'デコードとエンコード', desc: 'ffmpegがM4Aコンテナ内のAACをデコードし、128 kbps MP3に再エンコードします。' },
        { icon: 'download', title: 'MP3をダウンロード',    desc: 'ほとんどの現在のプレーヤーとオーディオエディターに互換性のあるMP3を取得します。' },
      ]}
      previewInputName="voice-memo.m4a"
      previewInputSize="6.2 MB · 00:12:04"
      previewOutputName="voice-memo.mp3"
      previewOutputSize="00:12:04 · 128 kbps · 11.5 MB"
      whyTitle="M4AからMP3への変換にMictooを使う理由"
      whyCards={[
        { icon: 'target',   title: 'iPhoneフレンドリー',        desc: 'iPhoneのボイスメモのネイティブ.m4aが直接ドロップイン、名前変更は不要です。' },
        { icon: 'fileAudio',title: 'レガシーホスト用のMP3',   desc: '一部のポッドキャストホストや古いAndroidデバイスは、MP3をM4Aよりも好むことがあります。' },
        { icon: 'lock',     title: '変換後にファイル削除',    desc: 'アップロードされたM4Aは変換後に削除され、MP3は1時間以内に消去されます。' },
        { icon: 'shield',   title: 'ウォーターマークやタグなし',    desc: 'オーディオだけが再エンコードされます。ブランドのイントロやメタデータは挿入されません。' },
      ]}
      scenariosTitle="M4AからMP3が役立つ場面"
      scenarios={[
        { icon: 'headphones', title: 'iPhoneのボイスメモ' },
        { icon: 'waveform',   title: 'GarageBandのバウンス' },
        { icon: 'mail',       title: 'レガシーポッドキャストホスト' },
        { icon: 'archive',    title: '一貫したライブラリ形式' },
        { icon: 'editPen',    title: '古いDAWのインポート' },
        { icon: 'video',      title: '非Appleのビデオエディター' },
      ]}
      tipsTitle="クリーンなM4AからMP3への変換のためのヒント"
      tips={[
        'プラットフォームがM4Aを受け入れる場合、変換する必要はないかもしれません。',
        '両方のフォーマットはロスィーです。再エンコードはわずかな品質損失を追加します。',
        'ID3およびiTunesメタデータは引き継がれません。',
        'トランスクリプションには、M4Aを直接/m4a-to-textにアップロードしてください。',
      ]}
      processTitle="変換中に何が起こるか"
      processSteps={['M4A (MP4コンテナ)', 'AACデコード', 'MP3エンコーディング']}
      compareTitle="M4AとMP3"
      compareRows={[
        { fmt: 'M4A', contains: 'いいえ', size: '小さい（効率的）', best: 'Appleエコシステム、現代のデバイス' },
        { fmt: 'MP3', contains: 'いいえ', size: '小さい',             best: '汎用、レガシープレーヤー、古いホスト' },
      ]}
      faq={[
        { q: 'M4AをMP3に変換する必要がありますか？', a: '特定のツールやホストがMP3を要求する場合のみです。ほとんどの現代のデバイス（2026年のすべてのAndroidおよびWindowsを含む）は、M4Aをネイティブに再生します。' },
        { q: 'コンバーターは無料ですか？', a: 'はい。最大25 MBのファイルはアカウントなしで変換でき、出力にはウォーターマークがありません。' },
        { q: '品質を失いますか？', a: 'M4AとMP3はどちらもロスィーです。再エンコードはわずかな損失を追加しますが、通常のリスニングでは聞こえません。' },
        { q: 'iPhoneのボイスメモのネイティブフォーマットは機能しますか？', a: 'はい。iPhoneのボイスメモは標準の.m4aを書き込み、直接ドロップインします。' },
        { q: 'ファイルは保存されますか？', a: 'いいえ。アップロードされたM4Aは変換後に削除され、MP3は1時間以内に消去されます。' },
      ]}
      ctaHeadline="今すぐM4AをMP3に変換"
      ctaSubtitle="iPhoneのボイスメモやAppleオーディオをドロップして、ポータブルMP3を取得します。"
      ctaButton="M4Aファイルを選択"
      moreTools={[
        { href: '/ja/aac-to-mp3',  label: 'AACからMP3へ' },
        { href: '/ja/mp4-to-mp3',  label: 'MP4からMP3へ' },
        { href: '/ja/mp3-to-m4a',  label: 'MP3からM4Aへ' },
        { href: '/ja/m4a-to-text', label: 'M4Aからテキストへ' },
      ]}
    />
  )
}