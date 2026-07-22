import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'pl': 'https://mictoo.com/pl/free-srt-generator',
  'ja': 'https://mictoo.com/ja/free-srt-generator',
  'ko': 'https://mictoo.com/ko/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: '無料SRTジェネレーター：音声または動画からオンラインでSRT字幕ファイルを作成 | Mictoo',
  description:
    '任意の音声または動画からクリーンなSRT字幕ファイルを生成します。Whisper品質のタイムスタンプ、YouTube、Premiere、Final Cut、DaVinci Resolve、CapCutに対応。無料、サインアップ不要。',
  alternates: {
    canonical: 'https://mictoo.com/ja/free-srt-generator',
    languages: LANGS,
  },
  openGraph: {
    title: '無料SRTジェネレーター | Mictoo',
    description: '音声または動画からSRT字幕ファイルを生成します。YouTube、Premiere、Final Cutに対応。',
    url: 'https://mictoo.com/ja/free-srt-generator',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '無料SRTジェネレーター',
    description: '音声または動画からWhisper品質のSRT字幕を生成します。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaFreeSrtGeneratorPage() {
  return (
    <ConverterPageLayout
      locale="ja"
      mode="upload" currentHref="/ja/free-srt-generator"
      badge="SRT · 音声または動画 · 無料"
      h1First="無料SRTジェネレーター"
      h1Second="任意の音声または動画からWhisper品質の字幕"
      subtitle="音声または動画をアップロードし、YouTube、Premiere、Final Cut、DaVinci Resolve、またはCapCut用のSRT字幕ファイルを取得します。サインアップ不要、分単位の料金なし。"
      stepsTitle="SRT生成の仕組み"
      steps={[
        { icon: 'upload',   title: '音声または動画をドロップ', desc: 'MP3、MP4、WAV、M4A、WEBM、FLACなど。匿名で最大25 MB、サインインで180 MBまで。' },
        { icon: 'waveform', title: 'Whisperが文字起こし', desc: 'Whisper large-v3が元の音声に合わせたセグメントごとのタイムスタンプを生成します。' },
        { icon: 'download', title: 'SRTをダウンロード',        desc: 'SRTとVTTのエクスポートが含まれています。動画編集ソフトやYouTubeアップロードにドロップできます。' },
      ]}
      whyTitle="なぜMictooをSRT生成に使うのか？"
      whyCards={[
        { icon: 'target',   title: '正確な多言語キャプション', desc: 'Whisper large-v3が句読点を追加し、多くの言語、アクセント、録音タイプに対応します。' },
        { icon: 'captions', title: 'SRT + VTTが含まれています',                desc: '両方の字幕形式が自動的に生成されます。ウェブプレイヤー用のVTT、編集者用のSRT。' },
        { icon: 'lock',     title: 'ファイルは生成後に削除',               desc: 'アップロードされた音声は文字起こし後に削除され、トランスクリプトはサインインしたアカウントにのみ残ります。' },
        { icon: 'shield',   title: 'ウォーターマークやタグなし',               desc: 'ブランディングのイントロや「Xで作成」タグのないクリーンなSRT。' },
      ]}
      scenariosTitle="SRT生成が役立つ場面"
      scenarios={[
        { icon: 'video',      title: 'YouTubeアップロードキャプション' },
        { icon: 'editPen',    title: 'Premiere / DaVinciインポート' },
        { icon: 'headphones', title: 'ポッドキャストの動画版' },
        { icon: 'mail',       title: 'クライアントレビュー用コピー' },
        { icon: 'archive',    title: 'アクセシビリティアーカイブ' },
        { icon: 'target',     title: '外国語キャプション' },
      ]}
      tipsTitle="クリーンな字幕のためのヒント"
      tips={[
        '25 MBを超えるファイルの場合、サインインして最大180 MBの自動分割アップロードを利用してください。',
        '非英語または技術的なコンテンツの場合、言語を明示的に設定してください。',
        'エクスポート前にエディターモードで名前や珍しい用語を確認してください。',
        'トランスクリプトを最初に翻訳し、その後外国語キャプション用にSRTをエクスポートしてください。',
      ]}
      processTitle="生成中に何が起こるか"
      processSteps={['音声 / 動画', 'Whisper文字起こし', 'SRT + VTTエクスポート']}
      faq={[
        { q: 'SRTジェネレーターは無料ですか？', a: 'はい。匿名で最大25 MB、サインイン時に180 MBまで利用可能です。SRTにウォーターマークはなく、分単位の料金もありません。' },
        { q: 'どの字幕形式が得られますか？', a: 'SRTとVTTが両方含まれています。TXT（プレーンテキスト）とDOCXも利用可能です。サインインしたユーザーはPDFとJSONも追加で取得できます。' },
        { q: 'タイムスタンプの精度はどのくらいですか？', a: 'Whisper large-v3は元の音声に合わせたセグメントごとのタイムスタンプを提供します。YouTubeキャプションやほとんどの動画編集の使用ケースに十分な精度です。' },
        { q: 'スピーカーを識別しますか（ダイアリゼーション）？', a: 'まだです。タイムスタンプ付きの連続キャプションですが、スピーカーラベルはありません。ダイアリゼーションはProのロードマップにあります。' },
        { q: 'Mictooは非英語音声を文字起こししますか？', a: 'はい。Whisper large-v3は50以上の言語を自動検出でサポートしています。クリーンな結果を得るために言語を明示的に設定してください。' },
        { q: '録音はサーバーに保存されますか？', a: 'いいえ。音声は文字起こしプロバイダーにストリーミングされ、一度処理されて削除されます。トランスクリプトはサインインしたアカウントにのみ残ります。' },
      ]}
      ctaHeadline="任意の録音からSRTキャプションを生成"
      ctaSubtitle="YouTube、Premiere、Final Cut、DaVinci、CapCut。Whisper品質のタイムスタンプ。"
      ctaButton="音声または動画をアップロード"
      moreTools={[
        { href: '/ja/timestamped-transcription', label: 'タイムスタンプ付きトランスクリプト' },
        { href: '/ja/youtube-to-text',           label: 'YouTubeからテキストへ' },
        { href: '/ja/transcribe-video-to-text',  label: '動画からテキストへ' },
        { href: '/ja/transcribe-audio-to-text',  label: '音声からテキストへ' },
      ]}
    />
  )
}