import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-mp3',
  'fr': 'https://mictoo.com/fr/webm-to-mp3',
  'de': 'https://mictoo.com/de/webm-to-mp3',
  'es': 'https://mictoo.com/es/webm-to-mp3',
  'ru': 'https://mictoo.com/ru/webm-to-mp3',
  'it': 'https://mictoo.com/it/webm-to-mp3',
  'pt': 'https://mictoo.com/pt/webm-to-mp3',
  'pl': 'https://mictoo.com/pl/webm-to-mp3',
  'ja': 'https://mictoo.com/ja/webm-to-mp3',
  'ko': 'https://mictoo.com/ko/webm-to-mp3',
  'x-default': 'https://mictoo.com/webm-to-mp3',
}

export const metadata = {
  title: 'WEBMをMP3に変換する、無料のオンラインコンバーター | Mictoo',
  description:
    'WEBMをMP3に無料で変換します。WEBMビデオまたはオーディオファイルから数秒でMP3オーディオを抽出します。サインアップ不要、ウォーターマークなし。最大25MB。',
  alternates: { canonical: 'https://mictoo.com/ja/webm-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WEBMをMP3に変換する、無料のオンラインコンバーター | Mictoo',
    description: '任意のWEBMからMP3を抽出します。サインアップ不要、ウォーターマークなし。',
    url: 'https://mictoo.com/ja/webm-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEBMをMP3に変換する、無料のオンラインコンバーター',
    description: '任意のWEBMからMP3を抽出します。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaWebmToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ja"
      mode="converter" from="webm" to="mp3" currentHref="/ja/webm-to-mp3"
      badge="WEBM → MP3 · 無料 · サインアップ不要"
      h1First="WEBMをMP3に"
      h1Second="無料のオンラインコンバーター"
      subtitle="WEBM（Loom、OBS、Firefox録画、またはYouTubeダウンローダーから）をドロップして、数秒でクリーンなMP3を取得します。ウォーターマークなし、メールアドレス不要。"
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="ステレオ"
      stepsTitle="WEBMからMP3への変換の仕組み"
      steps={[
        { icon: 'upload',   title: 'WEBMをドロップ',   desc: 'ビデオまたはオーディオのみのWEBM、どちらでも動作します。最大25MBを匿名で。' },
        { icon: 'waveform', title: 'デマルクスとエンコード', desc: 'ffmpegがビデオトラック（あれば）を削除し、OpusまたはVorbisオーディオを128 kbps MP3に再エンコードします。' },
        { icon: 'download', title: 'MP3をダウンロード', desc: '数秒でクリーンなMP3を取得します。元のファイル名に.mp3拡張子が付いています。' },
      ]}
      previewInputName="loom-walkthrough.webm"
      previewInputSize="72 MB · 00:08:12"
      previewOutputName="loom-walkthrough.mp3"
      previewOutputSize="00:08:12 · 128 kbps · 7.5 MB"
      whyTitle="WEBMからMP3にMictooを使用する理由"
      whyCards={[
        { icon: 'target',   title: 'OpusとVorbisに対応', desc: '両方のWEBMオーディオコーデックが直接動作します。手動での再パッケージ化は不要です。' },
        { icon: 'video',    title: 'WEBM内のビデオを処理',   desc: 'サーバー側でビデオトラックをデマルクスします。オーディオを自分で抽出する必要はありません。' },
        { icon: 'lock',     title: 'ファイルは変換後に削除',     desc: 'アップロードされたWEBMは変換後に削除され、MP3は1時間以内に消去されます。' },
        { icon: 'shield',   title: 'ウォーターマークやタグなし',     desc: '出力MP3にはイントロスプライスやブランドメタデータはありません。' },
      ]}
      scenariosTitle="WEBMからMP3が役立つシーン"
      scenarios={[
        { icon: 'video',      title: 'Loomのウォークスルー' },
        { icon: 'headphones', title: 'YouTubeダウンローダーの出力' },
        { icon: 'mail',       title: '小さなファイルをメール' },
        { icon: 'editPen',    title: '文字起こしの準備' },
        { icon: 'waveform',   title: 'ブラウザ録画' },
        { icon: 'archive',    title: 'オーディオのみをアーカイブ' },
      ]}
      tipsTitle="クリーンなWEBMからMP3へのヒント"
      tips={[
        'ビデオWEBMは自動的にデマルクスされ、最初に削除する必要はありません。',
        '25MBを超える録画の場合、アップロード前にソースをトリミングまたは分割してください。',
        '複数のトラックが存在する場合は、デフォルトのオーディオトラックが使用されます。',
        'Whisperの文字起こしには、WEBMを直接/webm-to-textにアップロードしてください。',
      ]}
      processTitle="変換中に何が起こるか"
      processSteps={['WEBMコンテナ', 'オーディオトラックの抽出', 'MP3エンコーディング']}
      compareTitle="WEBMとMP3"
      compareRows={[
        { fmt: 'WEBM', contains: 'しばしばはい', size: '中-large', best: 'ウェブ録画、ブラウザビデオ' },
        { fmt: 'MP3',  contains: 'いいえ',        size: '小',        best: '共有、再生、どこでも' },
      ]}
      faq={[
        { q: 'WEBMからMP3へのコンバーターは無料ですか？', a: 'はい。25MBまでのファイルはアカウントなしで変換でき、出力にはウォーターマークがありません。' },
        { q: '私のWEBMにビデオがある場合は？', a: 'サーバー側でビデオトラックをデマルクスし、オーディオのみをエンコードします。事前に何も削除する必要はありません。' },
        { q: 'どのWEBMオーディオコーデックが動作しますか？', a: 'Opus（最新、最も一般的）とVorbis（古い）。両方が直接サポートされています。' },
        { q: 'アップロードされたファイルは保存されますか？', a: 'いいえ。WEBMは変換後に削除され、MP3は1時間以内に消去されます。' },
        { q: '私のWEBMは25MBを超えています。どうすればいいですか？', a: 'アップロード前にソースをトリミングするか、ファイルサイズを減らすためにオーディオのみのWEBMを最初に抽出してください。' },
      ]}
      ctaHeadline="今すぐWEBMをMP3に変換"
      ctaSubtitle="WEBMをドロップして、数秒でクリーンなMP3を取得します。サインアップ不要。ウォーターマークなし。"
      ctaButton="WEBMファイルを選択"
      moreTools={[
        { href: '/ja/mp4-to-mp3',  label: 'MP4からMP3へ' },
        { href: '/ja/wav-to-mp3',  label: 'WAVからMP3へ' },
        { href: '/ja/flac-to-mp3', label: 'FLACからMP3へ' },
        { href: '/ja/webm-to-text', label: 'WEBMからテキストへ' },
      ]}
    />
  )
}