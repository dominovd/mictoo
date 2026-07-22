import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLACからMP3への変換、無料オンラインコンバーター | Mictoo',
  description:
    'FLACをMP3に無料でオンライン変換します。ロスレスFLACを128 kbps MP3に数秒で圧縮します。サインアップ不要、ウォーターマークなし。最大25 MB。',
  alternates: { canonical: 'https://mictoo.com/ja/flac-to-mp3', languages: LANGS },
  openGraph: {
    title: 'FLACからMP3への変換、無料オンラインコンバーター | Mictoo',
    description: 'ロスレスFLACを128 kbps MP3に圧縮します。サインアップ不要。',
    url: 'https://mictoo.com/ja/flac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLACからMP3への変換、無料オンラインコンバーター',
    description: 'ロスレスFLACをポータブルMP3に圧縮します。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaFlacToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ja"
      mode="converter" from="flac" to="mp3" currentHref="/ja/flac-to-mp3"
      badge="FLAC → MP3 · 無料 · サインアップ不要"
      h1First="FLACからMP3へ"
      h1Second="無料オンラインコンバーター"
      subtitle="ロスレスFLACファイル（CDリッピング、Tidalダウンロード、またはハイレゾソースから）をドロップして、数秒でポータブル128 kbps MP3を取得します。"
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="ステレオ"
      stepsTitle="FLACからMP3への変換の仕組み"
      steps={[
        { icon: 'upload',   title: 'FLACをドロップ',       desc: '任意のFLAC（ネイティブまたはFLAC-in-OGG）。最大25 MBを匿名で。' },
        { icon: 'waveform', title: 'デコードとエンコード', desc: 'ffmpegがロスレスFLACをデコードし、128 kbpsステレオMP3に再エンコードします。' },
        { icon: 'download', title: 'MP3をダウンロード',    desc: '5-8倍小さいMP3を取得し、任意のプレーヤーで再生できるようにします。' },
      ]}
      previewInputName="album-track.flac"
      previewInputSize="42 MB · 00:05:12 · 16ビット / 44.1 kHz"
      previewOutputName="album-track.mp3"
      previewOutputSize="00:05:12 · 128 kbps · 4.8 MB"
      whyTitle="なぜMictooをFLACからMP3に使用するのか？"
      whyCards={[
        { icon: 'target',    title: 'ロスレスマスターを保持', desc: 'あなたのFLACファイルは決して変更されません。私たちはコピーを生成するだけです。' },
        { icon: 'fileAudio', title: '小さなリスニングコピー',    desc: '128 kbps MP3はFLACよりも数倍小さいことがよくあります。変換はロスがあるので、FLACをマスターとして保持してください。' },
        { icon: 'lock',      title: 'ファイルは変換後に削除',       desc: 'アップロードされたFLACは変換後に削除され、MP3は1時間以内に消去されます。' },
        { icon: 'shield',    title: 'ウォーターマークやタグなし',       desc: 'ただ音声を再エンコードしただけです。イントロスプライスやブランドメタデータはありません。' },
      ]}
      scenariosTitle="FLACからMP3が役立つ時"
      scenarios={[
        { icon: 'headphones', title: '電話用のCDリッピング' },
        { icon: 'mail',       title: '小さなファイルをメール' },
        { icon: 'archive',    title: 'ポータブル音楽ライブラリ' },
        { icon: 'editPen',    title: 'DAWインポート' },
        { icon: 'waveform',   title: 'ポッドキャストリスニングコピー' },
        { icon: 'video',      title: 'ビデオサウンドトラック' },
      ]}
      tipsTitle="クリーンなFLACからMP3へのヒント"
      tips={[
        'FLACをロスレスアーカイブコピーとして保持してください。',
        '128 kbpsはほとんどのリスニングに対して透明です。',
        '25 MBを超えるトラックの場合、アップロード前にソースをトリミングまたは分割してください。',
        'Vorbisメタデータタグ（タイトル/アーティスト）はMP3に引き継がれません。',
      ]}
      processTitle="変換中に何が起こるか"
      processSteps={['FLACコンテナ', 'ロスレスデコード', 'MP3エンコーディング']}
      compareTitle="FLACとMP3"
      compareRows={[
        { fmt: 'FLAC', contains: 'いいえ', size: '大きい（約5-8 MB/分）', best: 'アーカイブ、ハイファイ再生' },
        { fmt: 'MP3',  contains: 'いいえ', size: '小さい（約1 MB/分）',   best: '共有、電話、どこでも' },
      ]}
      faq={[
        { q: 'FLACからMP3へのコンバーターは無料ですか？', a: 'はい。25 MBまでのファイルはアカウントなしで変換でき、出力にはウォーターマークがありません。' },
        { q: 'FLACをMP3に変換すると品質は失われますか？', a: '技術的にははい（MP3はロスがあります）が、128 kbpsでは典型的なリスニングでは損失は聞こえません。FLACをアーカイブコピーとして保持してください。' },
        { q: 'FLAC-in-OGGファイルはサポートされていますか？', a: 'はい。ネイティブFLAC（マジックバイトfLaC）およびOGGコンテナ内のFLACの両方が機能します。' },
        { q: 'ファイルは保存されますか？', a: 'いいえ。アップロードされたFLACは変換後に削除され、MP3は1時間以内に消去されます。' },
        { q: '私のFLACは25 MBを超えています。どうすればいいですか？', a: 'ソースをトリミングまたは分割するか、アップロード前に低解像度のリスニングコピーをエクスポートしてください。' },
      ]}
      ctaHeadline="今すぐFLACをMP3に変換"
      ctaSubtitle="FLACをドロップして、数秒でポータブルMP3を取得します。サインアップ不要。ウォーターマークなし。"
      ctaButton="FLACファイルを選択"
      moreTools={[
        { href: '/ja/wav-to-mp3',  label: 'WAVからMP3へ' },
        { href: '/ja/mp4-to-mp3',  label: 'MP4からMP3へ' },
        { href: '/ja/webm-to-mp3', label: 'WEBMからMP3へ' },
        { href: '/ja/flac-to-text', label: 'FLACからテキストへ' },
      ]}
    />
  )
}