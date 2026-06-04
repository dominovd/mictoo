import LandingLayout from '@/components/LandingLayout'

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
  title: 'YouTubeをテキストに — YouTube動画を無料文字起こし | Mictoo',
  description:
    '無料YouTubeテキスト文字起こし。動画をダウンロードしてファイルをドロップすれば、正確なAI文字起こし。YouTubeの自動字幕より良い、タイムコードとSRTエクスポート付き。',
  alternates: { canonical: 'https://mictoo.com/ja/youtube-to-text', languages: LANGS },

  openGraph: {
    title: "YouTubeをテキストに — YouTube動画を無料文字起こし | Mictoo",
    description: "無料YouTubeテキスト文字起こし。動画をダウンロードしてファイルをドロップすれば、正確なAI文字起こし。YouTubeの自動字幕より良い、タイムコードとSRTエクスポート付き。",
    url: "https://mictoo.com/ja/youtube-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTubeをテキストに — YouTube動画を無料文字起こし | Mictoo",
    description: "無料YouTubeテキスト文字起こし。動画をダウンロードしてファイルをドロップすれば、正確なAI文字起こし。YouTubeの自動字幕より良い、タイムコードとSRTエクスポート付き。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaYouTubeToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="ja"
      enableYouTubeUrl
      badge="YouTube · SRT · 無料"
      h1={<>YouTubeをテキストに<br /><span className="text-brand-600">無料YouTube文字起こしツール</span></>}
      subtitle="任意のYouTube動画のクリーンで正確な文字起こしを取得。ファイルをダウンロード、ここにドロップ、AIが残りを処理。YouTubeの自動字幕より良い、適切な句読点とタイムコード付き。"
      howItWorks={[
        { icon: '🔗', title: 'YouTubeリンクを貼る', desc: '上のフィールドにYouTubeのURLを貼り付けるだけ。既存の字幕を数秒で取得します。ダウンロード不要、Whisperの再文字起こし待ちもなし。自動字幕や投稿者がアップした字幕がある公開動画なら、ほぼすべて対応します。' },
        { icon: '📂', title: 'またはファイルをアップロード', desc: '字幕がない動画、限定公開、Whisperのクオリティで取り直したい場合は、無料のデスクトップアプリで音声をダウンロード(下のダウンロードガイド参照)し、同じページにドロップしてください。Whisper large-v3で処理します。' },
        { icon: '📋', title: '文字起こしを取得', desc: 'ブラウザで読む、クリップボードにコピー、TXT・SRT・VTT・DOCXでエクスポート。28言語へワンクリックで翻訳。冒頭には無料のAI要約付き。' },
      ]}
      whyUse={{ title: 'Mictooで得られるもの', bullets: [
        { title: 'ダウンロード作業は不要', desc: 'YouTubeのURLを貼るだけで、数秒で文字起こしが返ってきます。デスクトップアプリも、ファイル管理も、長時間動画のアップロード待ちもありません。' },
        { title: '字幕がない動画にはWhisperで補完', desc: '字幕がない動画は音声をアップロードしてください。Whisper large-v3はアクセント、音楽、固有名詞をYouTubeの自動字幕より上手く扱います。誤認識が少なく、句読点も完備。' },
        { title: '編集にそのまま使えるクリーンなSRT', desc: 'Premiere、DaVinci Resolve、Final Cut、CapCutにそのままインポートできる標準SRT形式。XMLや変なタイムコードもなく、手作業のクリーンアップも不要です。' },
        { title: 'すべての文字起こしに無料AI要約', desc: '結果の冒頭に主要なポイントとアクション項目を表示。追加クリック不要です。同様の機能を競合は月額15〜20ドルで提供しています。' },
        { title: '28言語への翻訳', desc: '文字起こし後にワンクリックで翻訳。元のタイムコードは保持されるので、翻訳後のSRTも音声と同期したまま使えます。' },
        { title: '登録不要、透かしなし、時間制限なし', desc: '匿名利用で最大25 MBまで対応。無料登録すれば60 MBまでアップロードでき、文字起こしの履歴をプライベートに保存できます。' },
      ]}}
      useCases={{ title: '人々がYouTube文字起こしを使う用途', items: [
        { title: '長い講義やチュートリアルの学習', desc: '90分のMITレクチャーはテキストバージョンの方が学習しやすい。必要な部分をスキム、ライブの説明のために動画のタイムコードにジャンプ。' },
        { title: '学術または報道作業での引用', desc: '誰かが動画で言ったことを参照する時、タイムコード付き文字起こしで正確な瞬間を引用できます。引用を探すために再視聴するよりずっと速い。' },
        { title: '自分のYouTubeコンテンツを再利用', desc: 'YouTube動画をブログ記事、ニュースレター、Xスレッド、LinkedIn記事に変換。文字起こしは最初の下書き。' },
        { title: '個人使用のための動画翻訳', desc: 'ソース言語で文字起こしを取得、DeepLやChatGPTに投入、翻訳取得。外国語チュートリアルやインタビューに便利。' },
        { title: '自分のチャンネルで悪い自動字幕を置き換え', desc: 'ここでクリーンなSRTを生成し、YouTube Studioに公式字幕トラックとしてアップロード。視聴者体験向上、SEO向上。' },
      ]}}
      proTips={{ title: 'YouTube文字起こしのコツ', tips: [
        { title: 'ダウンローダーで常に「音声のみ」を選ぶ', desc: '文字起こしに動画は不要。音声のみのM4Aは動画の10分の1のサイズで数秒でダウンロード。4K Video DownloaderとClipGrabの両方にフォーマットドロップダウンに「音声のみ」オプションがあります。M4Aは通常30分動画でも25 MB以下です。' },
        { title: '30分超の動画は通常分割なしで音声のみがフィットする', desc: '音声のみはほとんどの動画でサイズ制限を回避します。90分のレクチャーがまだ60 MB超なら、30分のチャンクに3つ分割。分割ガイドにAudacityのステップバイステップ手順があり、コマンドライン不要。' },
        { title: 'イントロ音楽とアウトロをスキップ', desc: 'YouTubeチュートリアルにはよく最初と最後に15秒のテーマ音楽があります。アップロード前にAudacityで切り取り。Whisperは音楽だけのセクションで時々単語を作ります。' },
        { title: '画面上にコードがあるチュートリアルチャンネルでも音声バージョンは必要', desc: '画面上のテキスト認識は別のツールカテゴリ(OCR)です。チュートリアルがコードを表示することに依存しているなら、視覚部分のために別途スクリーンショットを撮る必要があります。文字起こしは発表者が声に出したすべてをキャプチャ。' },
        { title: 'YouTubeのライブ字幕をサニティチェックとして使う', desc: '動画に自動字幕がある場合、Whisper文字起こしと比較して相違点を見つけられます。通常Whisperが勝ちますが、珍しいスラングや固有名詞ではYouTubeがWhisperが逃したものを捕まえることもあります。' },
        { title: '動画タイトルをファイル名として保持するダウンローダーを使う', desc: '4K Video DownloaderとClipGrabの両方がYouTubeタイトルをデフォルトファイル名として使えます。「video.mp4」「video (1).mp4」「video (2).mp4」でいっぱいのフォルダになる代わりに文字起こしを整理。' },
      ]}}
      faq={[
        { q: 'YouTubeリンクを直接Mictooに貼れますか?', a: '現在はできません。YouTubeは第三者サーバーが動画を取得することを積極的にブロックしています。まず動画または音声をダウンロード(4K Video DownloaderやClipGrabのような無料デスクトップアプリが2クリックで実行)し、ファイルをMictooにアップロードする必要があります。URLサポートは、YouTubeが定期的に壊すサーバーサイドダウンロードインフラを運営することを意味します。' },
        { q: 'YouTube動画を文字起こしするのは合法ですか?', a: '個人学習、研究、ジャーナリズム、アクセシビリティ、フェアユースのためには、ほとんどの管轄で一般的にはい。文字起こしの商業出版には通常動画作成者の許可が必要。YouTube利用規約は、YouTubeが明示的に許可する場合(ダウンロードボタン)または作成者の許可がある場合を除き、コンテンツのダウンロードを禁止しています。あなたのケースの規約を確認してください。これは法的助言ではありません。' },
        { q: '私の文字起こしはYouTubeの自動字幕と一致しますか?', a: 'いいえ、私たちのほうが良いです。自動字幕には句読点がなく精度が低い。Whisper large-v3は句読点、大文字化、音楽、アクセント、固有名詞でのより良い精度付きの完全な文を生成します。' },
        { q: '最高のYouTubeダウンローダーは?', a: 'ほとんどの人には: 4K Video DownloaderまたはClipGrab。両方とも無料、両方ともMac、Windows、Linuxのクリーンなデスクトップアプリがあり、両方ともワンクリックで音声のみを取れます。Googleに表示される「youtube downloader online」サイトは避けてください、ほとんどがマルウェア広告に埋もれており数ヶ月ごとに壊れます。コマンドラインに慣れているなら、yt-dlpが最も信頼できるオプション(多くのGUIアプリの内部エンジン)。' },
        { q: '音声だけをダウンロードするには?', a: '4K Video Downloaderで: YouTubeリンクを貼り、フォーマットダイアログが開いたら「Extract Audio」を選択してM4AまたはMP3を取得。ClipGrabで: リンクを貼り、「Format」ドロップダウンでMP3または「Original audio」を選択。両方とも単一の音声ファイルを生成し、ここにアップロードする準備が整います。' },
        { q: 'YouTube動画が話せない言語の場合は?', a: 'Whisperは言語を自動検出してソース言語で文字起こし。それからDeepLやChatGPTに結果を貼り付けて翻訳できます。2ステップですが、結果は通常YouTubeの自動翻訳字幕より良い。' },
        { q: 'YouTube動画の文字起こしにはどれくらいかかりますか?', a: '文字起こしステップ自体は音声の長さの約1〜2%。30分のレクチャーは約1分で完了。ダウンロード時間は接続とyt-dlpの速度によります。' },
        { q: 'マルチスピーカーYouTube動画のスピーカーラベルは取得できますか?', a: 'いいえ、Whisperはデフォルトでスピーカーダイアライゼーションを行いません。複数のスピーカーのインタビューやパネルでは、会話の流れに基づいて手動でスピーカーラベルを追加する必要があります。' },
        { q: 'YouTubeに準備済みの字幕を生成できますか?', a: 'はい。文字起こし後、SRTでダウンロードし、YouTube StudioのキャプションでSRTをアップロード。自動字幕をクリーンなバージョンで置き換え。' },
        { q: 'MictooはアップロードしたYouTube動画を保存しますか?', a: 'いいえ。ファイルは文字起こしプロバイダにストリーミングされ、処理され、破棄されます。動画も音声も保持しません。' },
        { q: 'YouTube動画にチャプターがあります。文字起こしはそれを反映しますか?', a: 'YouTubeのチャプターメタデータは抽出しません。文字起こしは1つの連続したドキュメントとして提供されます。チャプターごとの文字起こしが必要なら、チャプターのタイムコードでアップロード前に音声ファイルを分割してください。' },
        { q: 'YouTubeライブストリームを終了後に文字起こしできますか?', a: 'はい、ライブストリームが通常動画としてアーカイブされている限り。他と同様にダウンロード(yt-dlp)してアップロード。ストリーム自体中のライブ文字起こしはサポートされていません。' },
      ]}
      relatedLinks={[
        { href: '/ja/transcribe-video-to-text', label: '動画をテキストに', desc: 'YouTube以外の動画ファイル(Zoom、スクリーンキャスト、Vログ)向け。' },
        { href: '/ja/free-srt-generator', label: 'SRT生成', desc: 'クリーンな字幕をYouTube Studioに戻すために。' },
        { href: '/ja/podcast-transcription', label: 'ポッドキャスト文字起こし', desc: 'YouTubeにアップロードされたポッドキャスト的音声向け。' },
        { href: '/ja/how-to-split-audio', label: '音声を分割', desc: '60分制限を超える長い動画向け。' },
      ]}
    />
  )
}
