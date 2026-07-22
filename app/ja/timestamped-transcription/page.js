import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'ja': 'https://mictoo.com/ja/timestamped-transcription',
  'ko': 'https://mictoo.com/ko/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'タイムスタンプ付き文字起こし：無料のタイムコード付きトランスクリプトジェネレーター | Mictoo',
  description:
    '音声または動画のためのセグメントレベルのタイムコード付き無料文字起こし。ジャーナリズム、研究、ポッドキャスティング、動画編集に役立ちます。',
  alternates: {
    canonical: 'https://mictoo.com/ja/timestamped-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'タイムスタンプ付き文字起こし：無料のタイムコード付きトランスクリプトジェネレーター | Mictoo',
    description: '任意の音声または動画のための文レベルのタイムスタンプ。',
    url: 'https://mictoo.com/ja/timestamped-transcription',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'タイムスタンプ付き文字起こし：無料',
    description: 'ジャーナリズム、研究、編集のためのタイムコード付きトランスクリプト。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaTimestampedTranscriptionPage() {
  return (
    <ConverterPageLayout
      locale="ja"
      mode="upload" currentHref="/ja/timestamped-transcription"
      badge="タイムスタンプ付き · 音声または動画 · 無料"
      h1First="タイムスタンプ付き文字起こし"
      h1Second="ジャーナリズム、研究、編集のためのタイムコード付きトランスクリプト"
      subtitle="音声または動画をアップロードすると、セグメントごとのタイムスタンプ付きトランスクリプトが得られます。任意のタイムスタンプをクリックすると、その瞬間にオーディオプレーヤーがジャンプします。無料で、サインアップ不要です。"
      stepsTitle="タイムスタンプ付き文字起こしの仕組み"
      steps={[
        { icon: 'upload',   title: '音声または動画をドロップ',       desc: 'MP3、MP4、WAV、M4A、WEBM、FLACなど。最大25 MBは匿名で、180 MBはサインインして利用可能です。' },
        { icon: 'waveform', title: 'Whisperがセグメントのタイムスタンプを提供', desc: 'Whisper large-v3は、元の音声に合わせたセグメントごとのタイムスタンプを提供します。' },
        { icon: 'download', title: 'タイムスタンプ付きでエクスポート',      desc: 'インラインタイムスタンプ付きのTXT、字幕用のSRT / VTT、レビュー用のDOCX。' },
      ]}
      whyTitle="タイムスタンプ付きトランスクリプトにMictooを使用する理由"
      whyCards={[
        { icon: 'clock',    title: 'クリックでジャンプできるタイムスタンプ',   desc: 'リーダービューでは、すべてのタイムスタンプがクリック可能です。オーディオプレーヤーで任意の瞬間にジャンプできます。' },
        { icon: 'target',   title: 'Whisper品質の文字起こし', desc: 'Whisper large-v3は、句読点を追加し、多くの言語、アクセント、録音タイプを処理します。' },
        { icon: 'captions', title: 'SRT + VTTが含まれています',         desc: 'タイムスタンプは、動画キャプション用のSRTおよびVTTエクスポートに引き継がれます。' },
        { icon: 'lock',     title: 'ファイルはアップロード後に削除されます',        desc: 'アップロードされた音声は文字起こし後に削除され、トランスクリプトはサインインしたアカウントにのみ残ります。' },
      ]}
      scenariosTitle="タイムスタンプ付きトランスクリプトが役立つ場面"
      scenarios={[
        { icon: 'editPen',    title: 'ジャーナリズムの引用探し' },
        { icon: 'target',     title: 'UXリサーチの引用' },
        { icon: 'video',      title: '動画編集のキューリスト' },
        { icon: 'headphones', title: 'ポッドキャストのショーノート' },
        { icon: 'archive',    title: '法的 / 発見' },
        { icon: 'waveform',   title: '音声ブックマーク' },
      ]}
      tipsTitle="クリーンなタイムスタンプ出力のためのヒント"
      tips={[
        'リーダービューはクリックでジャンプするナビゲーションに最適です。',
        'SRT / VTTエクスポートの場合、タイムスタンプは元のファイルのタイムラインに合わせて調整されます。',
        '長時間の録音の場合は、サインインして自動分割を利用してください（約3時間まで）。',
        '検索バーは一致をハイライトし、そのタイムスタンプを瞬時に表示します。',
      ]}
      processTitle="文字起こし中に何が起こるか"
      processSteps={['音声 / 動画', 'Whisper large-v3', 'タイムスタンプ付きテキスト']}
      faq={[
        { q: 'タイムスタンプの粒度はどのくらいですか？', a: 'セグメントごと（おおよそ文ごと）。Whisperはネイティブに音声に合わせたセグメントレベルのタイムスタンプを生成します。' },
        { q: 'タイムスタンプをクリックして音声にジャンプできますか？', a: 'はい。リーダービューでは、すべてのタイムスタンプがクリック可能で、オーディオプレーヤーがその瞬間にスクラブします。' },
        { q: 'このツールは無料ですか？', a: 'はい。最大25 MBは匿名で、180 MBはサインイン時に利用可能です。ウォーターマークはなく、分単位の料金もありません。' },
        { q: 'サポートされているエクスポート形式は何ですか？', a: 'TXT（インラインタイムスタンプ付き）、SRT、VTT、DOCX。サインインしたユーザーは、PDFおよび構造化されたタイムスタンプデータ付きのJSONも利用できます。' },
        { q: 'スピーカーを識別しますか？', a: 'まだです。スピーカーラベルなしの連続したタイムスタンプ付きテキスト。ダイアリゼーションはProのロードマップにあります。' },
        { q: '録音はサーバーに保存されますか？', a: 'いいえ。音声は文字起こしプロバイダーにストリーミングされ、一度処理されて削除されます。トランスクリプトはサインインしたアカウントにのみ残ります。' },
      ]}
      ctaHeadline="クリックでジャンプできるタイムスタンプ付きトランスクリプトを取得"
      ctaSubtitle="ジャーナリズム、UXリサーチ、動画編集、ポッドキャストのショーノート。ファイルごとに無料です。"
      ctaButton="音声または動画をアップロード"
      moreTools={[
        { href: '/ja/free-srt-generator',       label: 'SRTジェネレーター' },
        { href: '/ja/youtube-to-text',          label: 'YouTubeからテキストへ' },
        { href: '/ja/transcribe-audio-to-text', label: '音声からテキストへ' },
        { href: '/ja/transcribe-video-to-text', label: '動画からテキストへ' },
      ]}
    />
  )
}