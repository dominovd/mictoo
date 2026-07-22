import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-mp3',
  'fr': 'https://mictoo.com/fr/wav-to-mp3',
  'de': 'https://mictoo.com/de/wav-to-mp3',
  'es': 'https://mictoo.com/es/wav-to-mp3',
  'ru': 'https://mictoo.com/ru/wav-to-mp3',
  'it': 'https://mictoo.com/it/wav-to-mp3',
  'pt': 'https://mictoo.com/pt/wav-to-mp3',
  'pl': 'https://mictoo.com/pl/wav-to-mp3',
  'ja': 'https://mictoo.com/ja/wav-to-mp3',
  'ko': 'https://mictoo.com/ko/wav-to-mp3',
  'x-default': 'https://mictoo.com/wav-to-mp3',
}

export const metadata = {
  title: 'WAVからMP3への変換、無料オンラインコンバーター | Mictoo',
  description:
    'WAVをMP3に無料でオンライン変換します。ロスレスWAVファイルをポータブルな128 kbps MP3に数秒で縮小します。サインアップ不要、ウォーターマークなし。最大25 MB。',
  alternates: { canonical: 'https://mictoo.com/ja/wav-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WAVからMP3への変換、無料オンラインコンバーター | Mictoo',
    description: 'ロスレスWAVをポータブルな128 kbps MP3に縮小します。サインアップ不要。',
    url: 'https://mictoo.com/ja/wav-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WAVからMP3への変換、無料オンラインコンバーター',
    description: 'WAVをポータブルMP3に縮小します。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaWavToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ja"
      mode="converter" from="wav" to="mp3" currentHref="/ja/wav-to-mp3"
      badge="WAV → MP3 · 無料 · サインアップ不要"
      h1First="WAVからMP3へ"
      h1Second="無料オンラインコンバーター"
      subtitle="非圧縮のWAVファイルをドロップすると、数秒で小さくてポータブルなMP3が得られます。ウォーターマークなし、メール不要、待機なし。"
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="ステレオ"
      stepsTitle="WAVからMP3への変換の仕組み"
      steps={[
        { icon: 'upload',   title: 'WAVをドロップ',         desc: '最大25 MBのWAVファイルをアップロードします。アカウントは必要ありません。' },
        { icon: 'waveform', title: 'MP3にエンコードします',      desc: 'ffmpegが44.1 kHzで128 kbpsステレオMP3にエンコードします。25 MBのWAVは約10秒で完了します。' },
        { icon: 'download', title: 'MP3をダウンロード',     desc: '元のベースファイル名で小さな128 kbps MP3を取得します。' },
      ]}
      previewInputName="studio-bounce.wav"
      previewInputSize="120 MB · 00:12:34 · 16ビット / 44.1 kHz"
      previewOutputName="studio-bounce.mp3"
      previewOutputSize="00:12:34 · 128 kbps · 11.5 MB"
      whyTitle="WAVからMP3への変換にMictooを使う理由"
      whyCards={[
        { icon: 'target',   title: '一つの仕事を確実に',      desc: '変換だけです。ニュースレターのポップアップなし、偽の進行状況バーなし。' },
        { icon: 'fileAudio',title: 'はるかに小さな出力',    desc: '非圧縮PCM WAVファイルは、128 kbpsで8〜12倍小さくなることがよくあります。正確な比率はソースによります。' },
        { icon: 'lock',     title: '変換後にファイルを削除',    desc: '変換が完了すると、アップロードされたファイルは削除されます。MP3は1時間以内に消去されます。' },
        { icon: 'shield',   title: 'ウォーターマークやタグなし',    desc: 'ブランドのイントロなし、メタデータの挿入なし。音声だけが再エンコードされます。' },
      ]}
      scenariosTitle="WAVからMP3への変換が役立つ場面"
      scenarios={[
        { icon: 'headphones', title: '電話用のスタジオバウンス' },
        { icon: 'mail',       title: '小さなファイルをメールする' },
        { icon: 'archive',    title: '小さなサイズでアーカイブ' },
        { icon: 'editPen',    title: 'トランスクリプションの準備' },
        { icon: 'waveform',   title: '音楽ライブラリのインポート' },
        { icon: 'video',      title: 'ビデオ用のナレーション' },
      ]}
      tipsTitle="クリーンなWAVからMP3への変換のためのヒント"
      tips={[
        '128 kbpsはほとんどのリスニングにおいて透明です。',
        'WAVが25 MBを超える場合は、アップロード前にトリミングまたは圧縮してください。',
        'マルチチャンネルWAVはステレオにダウンミックスされます。',
        'ロスレス保存のために、WAVをアーカイブコピーとして保持してください。',
      ]}
      processTitle="変換中に何が起こるか"
      processSteps={['WAVコンテナ', 'PCMデコード', 'MP3エンコーディング']}
      compareTitle="WAVとMP3"
      compareRows={[
        { fmt: 'WAV', contains: 'いいえ', size: '大きい (~10 MB/分)', best: '編集、アーカイブ、スタジオ' },
        { fmt: 'MP3', contains: 'いいえ', size: '小さい (~1 MB/分)',  best: '共有、再生、リスニング' },
      ]}
      faq={[
        { q: 'WAVからMP3への変換は無料ですか？', a: 'はい。25 MBまでのファイルにはアカウントは必要なく、出力にはウォーターマークがありません。' },
        { q: '変換によって音質は低下しますか？', a: 'わずかに。128 kbpsのMP3はロスのあるフォーマットですが、音質の低下は声や一般的な音楽再生には聞こえません。WAVをマスターとして保持してください。' },
        { q: 'アップロードされたファイルは保存されますか？', a: 'いいえ。あなたのWAVは変換するためにVercel Blobストレージに一時的に保存され、その後削除されます。MP3は1時間以内に消去されます。' },
        { q: '大きなWAVを変換できますか？', a: '現在のアップロード制限は25 MBです。大きなファイルの場合は、アップロード前にトリミングするか、モノラルまたは低サンプルレートのコピーをエクスポートしてください。' },
        { q: 'モバイルで動作しますか？', a: 'はい。iOS SafariやAndroid Chromeからのアップロードが可能です。' },
      ]}
      ctaHeadline="今すぐWAVをMP3に変換"
      ctaSubtitle="WAVをドロップして、数秒でポータブルMP3を取得します。サインアップ不要。ウォーターマークなし。"
      ctaButton="WAVファイルを選択"
      moreTools={[
        { href: '/ja/mp4-to-mp3',  label: 'MP4からMP3へ' },
        { href: '/ja/webm-to-mp3', label: 'WEBMからMP3へ' },
        { href: '/ja/flac-to-mp3', label: 'FLACからMP3へ' },
        { href: '/ja/mp3-to-wav',  label: 'MP3からWAVへ' },
        { href: '/ja/wav-to-text', label: 'WAVからテキストへ' },
      ]}
    />
  )
}