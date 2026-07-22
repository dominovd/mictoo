import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTubeからテキストへ: トランスクリプト、要約、SRT | Mictoo',
  description:
    'YouTubeのURLを貼り付けて利用可能なキャプションを使用するか、音声をアップロードして新しいトランスクリプトを作成し、タイムスタンプ、要約、SRTエクスポートを行います。',
  alternates: {
    canonical: 'https://mictoo.com/ja/youtube-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'YouTubeからテキストへ: 無料のYouTubeビデオトランスクリプション | Mictoo',
    description: 'YouTubeのURLを貼り付けて、タイムスタンプ、要約、SRT字幕付きのクリーンなトランスクリプトを取得します。',
    url: 'https://mictoo.com/ja/youtube-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTubeからテキストへ: 無料のYouTubeトランスクリプション',
    description: 'YouTubeのURLを貼り付けるか音声をアップロードして、トランスクリプトを取得します。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaYouTubeToTextPage() {
  return (
    <UseCaseLayout
      locale="ja"
      badge="YouTube URLまたはアップロード · 無料 · サインアップ不要"
      h1First="YouTubeからテキストへ"
      h1Second="URLを貼り付けて、クリーンなトランスクリプトを取得"
      subtitle="YouTubeリンクを貼り付けて、既に利用可能なキャプションを使用するか、音声をアップロードして新しいWhisperトランスクリプトを作成します。テキストを確認し、要約を生成し、SRT字幕をエクスポートします。"
      currentHref="/ja/youtube-to-text"
      enableYouTubeUrl

      platforms={[
        { name: 'YouTube',      iconKey: 'videoCameraFill', brandBg: '#FF0000' },
        { name: 'YouTube Live', iconKey: 'broadcast',       brandBg: '#B91C1C' },
        { name: 'YT Shorts',    iconKey: 'videoCameraFill', brandBg: '#DC2626' },
        { name: 'YT Music',     iconKey: 'soundwave',       brandBg: '#7F1D1D' },
        { name: 'YT Premium',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'Video hub',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/ja/transcribe-video-to-text' },
      ]}

      howItWorksTitle="YouTubeトランスクリプションの仕組み"
      steps={[
        {
          icon: 'folder',
          title: 'URLを貼り付けるか音声をアップロード',
          desc: 'ファストパス: YouTubeリンクを貼り付けると、既存のキャプションを取得します。Whisperパス: 音声をアップロードして新しいトランスクリプションを作成します。',
        },
        {
          icon: 'upload',
          title: 'キャプションまたは新しいトランスクリプション',
          desc: 'URLパスは利用可能なキャプションを返します。アップロードパスはWhisper large-v3を実行します。処理時間はメディアの長さとサイズによります。',
        },
        {
          icon: 'editPen',
          title: '要約、SRT、翻訳',
          desc: 'トランスクリプトにAI要約が付随します。ビデオ用のSRTをダウンロードし、50以上の言語に翻訳し、DOCXまたはPDFとしてエクスポートします。',
        },
      ]}

      exampleTitle="例: YouTubeトランスクリプト"
      exampleFileName="youtube-video.mp4"
      exampleDurationLabel="12:34"
      exampleLines={[
        { t: '0:00',  line: 'チャンネルに戻ってきてくれてありがとう。今日は2026年の製品分析における3つの大きな変化を見ていきます。' },
        { t: '0:12',  line: '変化の一つ、セッションリプレイは基本的にテーブルステークスです。すべての真剣なツールはそれを基本Tierに搭載しています。' },
        { t: '0:24',  line: '変化の二つ、カスタムSQLダッシュボードから自然言語クエリへの移行が急速に進んでいます。' },
        { t: '0:37',  line: '変化の三つ、ウェアハウスネイティブツールが古いイベントベースの分析スタックを食べています。' },
        { t: '0:50',  line: '各変化が今年評価すべきツールに実際に何を意味するのかを説明します。' },
        { t: '1:02',  line: 'まずセッションリプレイです。現在のツールが追加料金を請求する場合、それは他を探すサインです。' },
        { t: '1:14',  line: '現代のツールはリプレイをイベント、ファネル、コホートと一つの製品としてバンドルしています。' },
      ]}
      summaryPoints={[
        '2026年の製品分析における3つの大きな変化。',
        'セッションリプレイは真剣なツール全体でテーブルステークスです。',
        'SQLダッシュボードから自然言語クエリへの移行。',
        'ウェアハウスネイティブツールがイベントベースのスタックを置き換えています。',
      ]}
      actionItems={[
        'バンドルされたリプレイのために現在のツールを評価する',
        '今四半期に1つのウェアハウスネイティブ分析ツールを試す',
        '3つの変化のブログ要約を作成する',
      ]}

      whyTitle="YouTubeトランスクリプションにMictooを選ぶ理由"
      whyCards={[
        {
          icon: 'target',
          title: '適切なトランスクリプトパスを選択',
          desc: 'スピードのために既存のキャプションを使用するか、名前、句読点、専門用語を確認するために新しいトランスクリプトを作成する際に音声をアップロードします。',
        },
        {
          icon: 'clip',
          title: 'ビデオ説明用のSRT',
          desc: 'SRTをダウンロードしてYouTube Studioに再アップロードし、編集されたキャプションを使用するか、ワークフローの他の場所で使用します。',
        },
        {
          icon: 'sparkles',
          title: 'エピソードノート用のAI要約',
          desc: 'ビデオ説明、ブログ要約、章タイトルのためのしっかりとした初稿。60分のポッドキャストを200語にまとめます。',
        },
        {
          icon: 'globe',
          title: '50以上の言語にキャプションを翻訳',
          desc: '国際的なオーディエンスですか？トランスクリプトを翻訳して、翻訳されたSRTをビデオに再アップロードします。',
        },
      ]}

      scenariosTitle="一般的なYouTubeシナリオ"
      scenarios={[
        { icon: 'search',    title: 'ビデオを調査' },
        { icon: 'editPen',   title: 'ブログ要約' },
        { icon: 'clip',      title: 'SRTキャプション' },
        { icon: 'chat',      title: '引用の抽出' },
        { icon: 'globe',     title: 'キャプションを翻訳' },
        { icon: 'headset',   title: 'YTでのポッドキャスト' },
      ]}

      tipsTitle="YouTubeトランスクリプションのヒント"
      tips={[
        'ビデオに既にキャプションがある場合、最も早いパスはURLです。',
        '技術的または非英語のビデオの場合、音声アップロードパスを優先します。',
        '非常に長いストリーム: 音声をダウンロードしてアップロード前に分割します。',
        '自分のビデオの場合、最良の精度のためにソース音声をアップロードします。',
      ]}

      guidesTitle="関連ツール"
      guides={[
        { href: '/ja/transcribe-video-to-text',      icon: 'video', title: 'ビデオからテキストへ',       desc: '非YouTube MP4、MOV、WebM' },
        { href: '/ja/transcribe-audio-to-text',      icon: 'file',  title: '音声からテキストへ',       desc: '任意の音声フォーマット' },
        { href: '/ja/free-srt-generator',            icon: 'file',  title: 'SRTジェネレーター',       desc: '字幕に特化したエクスポート' },
        { href: '/ja/how-to-download-youtube-video', icon: 'video', title: 'YouTubeからのダウンロード',    desc: 'ガイド: 音声を取得する' },
      ]}

      faq={[
        {
          q: 'YouTubeのURLを貼り付けるだけでいいですか？',
          a: 'はい。ビデオにキャプションがある場合（クリエイターがアップロードしたものまたは自動生成されたもの）、数秒で取得します。キャプションがない場合は、音声ファイルをアップロードして完全なWhisperトランスクリプションを行ってください。',
        },
        {
          q: 'アップロードパスはYouTubeキャプションとどう違いますか？',
          a: 'URLパスはビデオに既に利用可能なキャプションを返します。アップロードパスは音声から別のWhisperトランスクリプトを作成します。どちらのバージョンにもエラーが含まれる可能性があるため、公開前に名前、番号、タイミングを確認してください。',
        },
        {
          q: 'YouTubeビデオから音声を取り出すにはどうすればいいですか？',
          a: 'お好みのブラウザツールまたはデスクトップエクストラクターを使用して、MP3またはM4Aをアップロードしてください。著作権上の理由からダウンロードツールをホストしていませんが、「YouTubeビデオをダウンロードする方法」のガイドを参照してください。',
        },
        {
          q: 'Mictooは非英語のYouTubeビデオをトランスクリプトしますか？',
          a: 'はい。Whisper large-v3は50以上の言語を自動検出でサポートしています。短いクリップや珍しいアクセントの場合は、ドロップダウンで言語を明示的に設定してください。',
        },
        {
          q: 'ビデオのAI要約を取得できますか？',
          a: 'はい。AI要約はトランスクリプトと一緒に自動的に表示されます。ビデオ説明、ブログ要約、エピソードノートのためのしっかりとした初稿です。',
        },
        {
          q: 'SRTをダウンロードしてビデオにキャプションを追加できますか？',
          a: 'はい。トランスクリプション後にSRTまたはVTTをダウンロードできます。どちらのフォーマットもYouTube Studio、Premiere、DaVinci、Final Cut、CapCut、およびほとんどの現代のプレーヤーで動作します。',
        },
        {
          q: 'YouTubeトランスクリプトを翻訳できますか？',
          a: 'はい。ターゲット言語を選択して翻訳をクリックしてください。国際的なオーディエンスや非英語のリプレイページに便利です。',
        },
        {
          q: '私のYouTubeデータはサーバーに保存されますか？',
          a: 'いいえ。取得したキャプションとアップロードした音声は一度処理されて削除されます。サインインして履歴に保存した場合のみ、トランスクリプトが残ります。',
        },
      ]}

      ctaHeadline="任意のYouTubeビデオをテキストに変換"
      ctaSubtitle="迅速なパスのためにURLを貼り付け、完全なWhisperパスのために音声をアップロードします。ビデオごとに無料です。"
      ctaButton="YouTubeのURLを貼り付けるかアップロード"

      relatedLinks={[
        { href: '/ja/transcribe-video-to-text', label: 'ビデオからテキストへ' },
        { href: '/ja/podcast-transcription',    label: 'ポッドキャストトランスクリプション' },
        { href: '/ja/lecture-transcription',    label: '講義トランスクリプション' },
        { href: '/ja/free-srt-generator',       label: '無料SRTジェネレーター' },
        { href: '/ja/webinar-transcription',    label: 'ウェビナートランスクリプション' },
      ]}
    />
  )
}