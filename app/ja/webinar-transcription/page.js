import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'ja': 'https://mictoo.com/ja/webinar-transcription',
  'ko': 'https://mictoo.com/ko/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: 'ウェビナーの文字起こしと要約、キャプション | Mictoo',
  description:
    'ウェビナーの録画をアップロードし、タイムスタンプ付きのテキスト、AIによる要約、リプレイ用のSRT/VTTキャプションを取得します。',
  alternates: {
    canonical: 'https://mictoo.com/ja/webinar-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'ウェビナーの文字起こし: 無料 | Mictoo',
    description: 'ウェビナーの録画をアップロードし、クリーンな文字起こしを取得します。',
    url: 'https://mictoo.com/ja/webinar-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ウェビナーの文字起こし',
    description: 'どのウェビナープラットフォームでも無料の文字起こし。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaWebinarTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ja"
      badge="ウェビナー · 長文 · 無料"
      h1First="ウェビナーの文字起こし"
      h1Second="どのウェビナーの録画でも無料の文字起こし"
      subtitle="Zoom Webinars、StreamYard、Demio、ON24、GoToWebinar、またはRestreamからアップロードします。完全な文字起こし、AIによる要約、オンデマンドリプレイページ用のキャプションを取得します。"
      currentHref="/ja/webinar-transcription"

      platforms={[
        { name: 'Zoom Webinar', iconKey: 'broadcast',       brandBg: '#2D8CFF', href: '/ja/zoom-transcription' },
        { name: 'StreamYard',   iconKey: 'broadcast',       brandBg: '#6B21A8' },
        { name: 'Restream',     iconKey: 'broadcast',       brandBg: '#EC1E62' },
        { name: 'ON24',         iconKey: 'videoCameraFill', brandBg: '#3B82F6' },
        { name: 'Demio',        iconKey: 'videoCameraFill', brandBg: '#F97316' },
        { name: 'Livestorm',    iconKey: 'videoCameraFill', brandBg: '#DA1F5C' },
      ]}

      howItWorksTitle="ウェビナーの文字起こしの仕組み"
      steps={[
        {
          icon: 'folder',
          title: 'ウェビナーの録画をエクスポート',
          desc: 'ほとんどのプラットフォームは、イベント後にMP4のダウンロードを提供します。一部は音声のみのM4Aも提供します。',
        },
        {
          icon: 'upload',
          title: 'ここにファイルをドロップ',
          desc: '長いウェビナー（60分以上）は、サインインした状態で自動分割の恩恵を受けます。匿名で最大25 MB、サインインした状態で60 MBまで無料です。',
        },
        {
          icon: 'editPen',
          title: '文字起こし、要約、キャプション',
          desc: 'リプレイページ用のタイムスタンプ付き文字起こし、ブログの要約としてのAI要約、オンデマンドビデオ用のキャプション用SRT。',
        },
      ]}

      exampleTitle="ウェビナーの文字起こしの例"
      exampleFileName="product-launch-webinar.mp4"
      exampleDurationLabel="1:04:22"
      exampleLines={[
        { t: '0:00',  line: '皆さん、ようこそ。ご参加いただきありがとうございます。私の名前はサムで、会社のプロダクトマーケティングを担当しています。' },
        { t: '0:12',  line: '今日は、プラットフォームのバージョン5を公式に発表します。新しい機能についてご紹介したいと思います。' },
        { t: '0:25',  line: '3つの主要な変更点: 再構築されたレポート、トップ10のCRMとのネイティブ統合、新しい価格モデルです。' },
        { t: '0:40',  line: 'レポートについてお話しします。これは、皆さんが2年間求めていた変更です。' },
        { t: '0:52',  line: '旧レポートは遅く、大規模なデータセットでは壊れ、カスタマイズが難しかったです。これらの3つはすべて修正されました。' },
        { t: '1:07',  line: '新しいレポートビルダーのライブデモをご覧ください。クリックするたびに、プレビューがどれだけ速く更新されるかに注目してください。' },
        { t: '1:22',  line: 'すべてのフィールドはドラッグアンドドロップ可能で、フィルターはスタッカブルです。任意のレポートを共有テンプレートとして保存できます。' },
      ]}
      summaryPoints={[
        'バージョン5の発表と3つの主要な変更点。',
        '再構築されたレポート（速度、データセットサイズ、カスタマイズの修正）。',
        'トップ10のCRMとのネイティブ統合。',
        '新しい価格モデル。',
      ]}
      actionItems={[
        '文字起こしからブログの要約を作成',
        'ソーシャル用のデモクリップを作成',
        'キャプション付きリプレイをオンデマンドで公開',
      ]}

      whyTitle="ウェビナーの文字起こしにMictooを選ぶ理由"
      whyCards={[
        {
          icon: 'clip',
          title: 'リプレイ用のSRTキャプション',
          desc: 'タイムスタンプは元のビデオに合わせて調整されます。SRTをオンデマンドリプレイプレーヤーやYouTubeアップロードにドロップします。',
        },
        {
          icon: 'sparkles',
          title: 'ブログの要約用AI',
          desc: '60分のウェビナーを200語の要約に変換します。フォローアップメールやブログ投稿のためのしっかりとした初稿です。',
        },
        {
          icon: 'search',
          title: 'ランディングページで検索可能な文字起こし',
          desc: 'オンデマンドランディングページに文字起こしを公開します。参加者はスキミングでき、SEOが向上し、60分見る必要がありません。',
        },
        {
          icon: 'globe',
          title: '国際的な参加者のための翻訳',
          desc: 'フォローアップメールや非英語のリプレイページのために50以上の言語にワンクリックで翻訳します。',
        },
      ]}

      scenariosTitle="一般的なウェビナーシナリオ"
      scenarios={[
        { icon: 'broadcast', title: '製品発表' },
        { icon: 'book',      title: 'トレーニング / アカデミー' },
        { icon: 'briefcase', title: '営業支援' },
        { icon: 'target',    title: '顧客教育' },
        { icon: 'users',     title: 'アナリストブリーフィング' },
        { icon: 'globe',     title: '多言語イベント' },
      ]}

      tipsTitle="ウェビナー録画のためのヒント"
      tips={[
        'プラットフォームが提供する場合は、音声のみのエクスポートを優先してください。',
        '60分以上のウェビナーの場合、サインインして自動分割を最大3時間まで利用してください。',
        '文字起こしのヘッダーがコンテキストを保持できるように、ファイルにホスト名を含めてください。',
        'ソーシャルクリップ用に文字起こしから重要な引用を抜き出してください。',
      ]}

      guidesTitle="関連ツール"
      guides={[
        { href: '/ja/zoom-transcription',        icon: 'video', title: 'Zoom Webinar',      desc: 'クラウド録画MP4 / M4A' },
        { href: '/ja/free-srt-generator',        icon: 'file',  title: 'SRTジェネレーター',     desc: 'オンデマンドビデオキャプション' },
        { href: '/ja/podcast-transcription',     icon: 'headset', title: 'ポッドキャスト',         desc: 'ウェビナー音声を再利用' },
        { href: '/ja/timestamped-transcription', icon: 'file',  title: 'タイムスタンプ付き',       desc: '読みやすいエクスポート' },
      ]}

      faq={[
        {
          q: 'Mictooはどのウェビナープラットフォームに対応していますか？',
          a: 'すべてのプラットフォームに対応しています。プラットフォームに関係なく、任意の音声またはビデオファイルを受け付けます。Zoom Webinars、StreamYard、Demio、Livestorm、ON24、GoToWebinar、Restream、Riverside Studioなど。',
        },
        {
          q: '私のウェビナー録画は60 MBを超えています。どうすればいいですか？',
          a: 'サインインして自動分割を利用してください（約3時間まで）。または、プラットフォームから音声のみをエクスポートするか、音声を抽出してください: ffmpeg -i webinar.mp4 -vn -ac 1 -ar 16000 audio.m4a。',
        },
        {
          q: 'オンデマンドリプレイページに文字起こしを公開できますか？',
          a: 'はい。文字起こしをオンデマンドランディングページのHTMLにコピーしてください。検索可能なコンテンツが追加され、SEOが向上し、視聴できない参加者がスキミングできるようになります。',
        },
        {
          q: '録画されたウェビナー動画にキャプションを追加できますか？',
          a: 'はい。文字起こし後にSRTまたはVTTをダウンロードできます。どちらもYouTube、Vimeo、Wistia、Descript、すべての最新のビデオプレーヤーで動作します。',
        },
        {
          q: 'MictooはプレゼンターとQ&Aスピーカーを識別しますか？',
          a: 'いいえ。現在の文字起こしは、行ごとのタイムスタンプを持つ連続したテキストであり、自動スピーカーラベルはありません。',
        },
        {
          q: 'ウェビナーの文字起こしを翻訳できますか？',
          a: 'はい。ターゲット言語を選択し、翻訳をクリックしてください。国際的な参加者や非英語のリプレイページに便利です。',
        },
        {
          q: 'ウェビナー録画はサーバーに保存されますか？',
          a: 'いいえ。ファイルは文字起こしプロバイダーにストリーミングされ、一度処理されて削除されます。文字起こしのみがサインインしたアカウントに残ります。',
        },
      ]}

      ctaHeadline="ウェビナーをリプレイ用の資産に変えましょう"
      ctaSubtitle="完全な文字起こし、SRTキャプション、AI要約、検索可能なランディングページコピー。"
      ctaButton="ウェビナー録画をアップロード"

      relatedLinks={[
        { href: '/ja/meeting-transcription',   label: 'ミーティングの文字起こし' },
        { href: '/ja/zoom-transcription',      label: 'Zoomの文字起こし' },
        { href: '/ja/podcast-transcription',   label: 'ポッドキャストの文字起こし' },
        { href: '/ja/lecture-transcription',   label: '講義の文字起こし' },
        { href: '/ja/free-srt-generator',      label: '無料SRTジェネレーター' },
      ]}
    />
  )
}