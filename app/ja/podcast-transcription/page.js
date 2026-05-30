import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'ko': 'https://mictoo.com/ko/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'ポッドキャスト文字起こし — 無料AIジェネレーター | Mictoo',
  description:
    'ポッドキャストの無料AI文字起こし。エピソード(MP3、MP4、M4A、WAV)をアップロードしてタイムコード付きのクリーンな文字起こしを数秒で取得。アカウント不要、分単位課金なし。',
  alternates: { canonical: 'https://mictoo.com/ja/podcast-transcription', languages: LANGS },

  openGraph: {
    title: "ポッドキャスト文字起こし — 無料AIジェネレーター | Mictoo",
    description: "ポッドキャストの無料AI文字起こし。エピソード(MP3、MP4、M4A、WAV)をアップロードしてタイムコード付きのクリーンな文字起こしを数秒で取得。アカウント不要、分単位課金なし。",
    url: "https://mictoo.com/ja/podcast-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ポッドキャスト文字起こし — 無料AIジェネレーター | Mictoo",
    description: "ポッドキャストの無料AI文字起こし。エピソード(MP3、MP4、M4A、WAV)をアップロードしてタイムコード付きのクリーンな文字起こしを数秒で取得。アカウント不要、分単位課金なし。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaPodcastPage() {
  return (
    <LandingLayout
      defaultLanguage="ja"
      badge="ポッドキャスター · ホスト · 無料"
      h1={<>ポッドキャスト文字起こし<br /><span className="text-brand-600">無料文字起こしジェネレーター</span></>}
      subtitle="任意のエピソードをクリーンなテキストに変換。MP3、MP4、M4Aをアップロードして数秒で文字起こし取得。アカウント不要、分単位課金なし。"
      howItWorks={[
        { icon: '📂', title: 'エピソードをドロップ', desc: 'MP3、MP4、M4A、WAV、FLAC。Riversideのクラウドレコーディング、Descriptのエクスポート、Zoomの生音声、Anchor.fmファイル。すべて動作。' },
        { icon: '⚡', title: 'AIが処理', desc: 'Whisper large-v3が私たちのバックエンドで動作し、音声をテキストに変換。ほとんどの30分エピソードは1分未満で完了。' },
        { icon: '📋', title: 'コピー、ダウンロード、編集', desc: 'テキストをTXTとして、字幕用にSRTとして、またはショーノートエディタに直接貼り付け。エクスポート前にビューアで誤った単語を修正。' },
      ]}
      whyUse={{ title: 'ポッドキャスターがMictooを使う理由', bullets: [
        { title: '長いエピソードも問題ない', desc: '無料登録後、1ファイルあたり最大60分。2部分に分割する場合、相対タイムコードを保つので、SRTファイルを数学なしで再結合できます。' },
        { title: 'アクセントとクロストークが持ちこたえる', desc: 'Whisper large-v3は、私たちが知る限り非ネイティブ英語に最も強い開放型音声モデル。共同ホストがベルリンやサンパウロ出身でも、文字起こしはおかゆにならない。' },
        { title: '音楽ベッドは壊さない', desc: '私たちのパイプラインは文字起こし前にVoice Activity Detectionを実行します。長いインストルメンタルイントロは作り話の単語ではなく無音としてマーク。音楽ベッド付きスポンサーリードもクリーンに通る。' },
        { title: 'サブスクリプションなし', desc: '多くのポッドキャスターは月に1〜2エピソードを文字起こし。月額15ドルのシートを払うのは無駄。必要に応じてファイルをアップロード。広告とパワーユーザー向けの予定されたProプランで運営。' },
        { title: '音声は保存されない', desc: 'ファイルは音声プロバイダに直接ストリーミングされ、文字起こしされて削除されます。エピソードを保持せず、プロバイダ(Groq、OpenAI)はAPIデータでトレーニングしません。' },
      ]}}
      useCases={{ title: 'ポッドキャスターが文字起こしで実際に行うこと', items: [
        { title: 'ショーノートとブログ記事', desc: '文字起こしをCMSに貼り付け、チャプターをマーク、リンクを追加、ブログ記事を公開。45分のエピソードは通常6000〜8000語のソース素材を生み出します。1つの録音から軽く編集した3〜4のブログ記事。' },
        { title: 'ソーシャルメディア用エピソード引用', desc: '文字起こしでヒットしたラインをスキャンしてグラフィックにする。1.5倍速で音声からタイムコードを探すよりずっと速い。' },
        { title: 'バックカタログの検索可能アーカイブ', desc: '古いエピソードをバッチ文字起こしに通すと、突然何年もの会話にCtrl+Fが可能。ゲストが戻ってきて前回何を話したかを思い出したい時に便利。' },
        { title: 'YouTube自動字幕の代替', desc: 'YouTubeの自動字幕は2声と音楽のポッドキャストには中途半端。代わりにMictooのSRTをアップロード。より良い句読点、少ないエラー、より良いアクセシビリティ。' },
        { title: 'アクセシビリティ文字起こしリンク', desc: '多くのポッドキャスターがRSSショーノートに「文字起こしを読む」リンクを挿入。聴覚障害者・難聴者リスナーを助け、検索エンジンがコンテンツを見つけるのを助ける。' },
      ]}}
      proTips={{ title: 'よりクリーンなポッドキャスト文字起こしのコツ', tips: [
        { title: 'イントロとアウトロの音楽をまず取り除く', desc: 'Whisperは音楽をうまく無視しますが、90秒のインストルメンタルコールドオープンは時々ゴースト単語をトリガー。エピソードごとに同じイントロなら、アップロード前にAudacityで最初の1:30を切り取り。後でいくつかの分のクリーンアップを節約。' },
        { title: '生ファイルが巨大なら64 kbpsモノラルでエクスポート', desc: '音声にステレオは不要、64 kbpsで音声には十分。64 kbpsモノラルの2時間エピソードは約55 MB。ログイン付きの60 MB制限に分割なしで収まる。ffmpeg: ffmpeg -i episode.wav -ac 1 -b:a 64k episode.mp3.' },
        { title: 'ゲストの音声が悪いインタビューでは各トラックを個別に文字起こし', desc: 'RiversideやSquadCastで録音し、スピーカーごとに別の音声トラックがある場合、各トラックを個別にアップロード。Whisperは一度に1声をより簡単に扱う。よりクリーンな帰属、重なりでの失われた単語が少ない。' },
        { title: '短いエピソードでは言語を明示的に設定', desc: '自動検出は最初の音声チャンクをサンプリング。1単語のコールドオープンや笑いで開く場合、検出が間違った言語に陥る可能性。5分未満のものすべてで言語を手動で選んでください。' },
        { title: '句読点は不完全。最初の10行を修正、残りは放置', desc: 'Whisperはほとんどの句読点を正しく取得しますが、時々セミコロンや直接話法を逃します。ショーノートには最初の10行が重要(人はスキャンします)。それを超えては: そのまま出荷。' },
        { title: '字幕が必要なくてもSRTエクスポートを使う', desc: 'SRTは数秒ごとにタイムコードを提供。ブログ記事に貼り付けても、これらのタイムコードは引用を確認するために音声に戻るのに役立ちます。ここに無料SRTジェネレーターがあります。' },
      ]}}
      faq={[
        { q: '2時間のエピソードを文字起こしできますか?', a: 'はい、ただし最初に分割。私たちのファイル制限は無料で30分、登録後60分。2時間エピソードには2〜3部分に分割して各部を文字起こし。音声分割ガイドはffmpegまたはAudacityで60秒で行う方法を説明しています。' },
        { q: 'スピーカーラベル(ホスト対ゲスト)は取得できますか?', a: '現在自動的にはありません。Whisper自体はスピーカーダイアライゼーションを行いません。スピーカーごとに別々のトラックがある場合(Riverside、SquadCast、Zencastrで一般的)、各トラックを別々にアップロードし、最終文字起こしで自分でラベル付け。ダイアライゼーションを検討中ですが、うまくいけばのみリリース。' },
        { q: 'アクセントとバイリンガルポッドキャストはどう扱いますか?', a: 'Whisper large-v3は68万時間の多言語音声でトレーニングされました。非ネイティブ英語、地域アクセント、コードスイッチングは小さなモデルよりうまく動作。エピソードの途中で英語とスペイン語を切り替えるポッドキャストには、言語として「自動検出」を選択するとWhisperが切り替えに追従します。' },
        { q: 'ポッドキャストでサポートしている音声フォーマットは?', a: 'MP3、M4A、WAV、FLAC、OGG、WEBM、AAC。プラスMP4やMOVのような動画ファイル(音声を抽出)。ポッドキャストホストがこれらのいずれかでダウンロードを提供すれば準備OK。AIFFとALACは直接サポートされていません、まずWAVに変換。' },
        { q: 'エピソードあたりの単語制限はありますか?', a: '単語制限なし。ファイルサイズ制限(無料25 MB、登録60 MB)と長さ(無料30分、登録60分)のみ。典型的な60分エピソードは約9000〜11000語を生成。' },
        { q: '人間の文字起こし業者と比較してポッドキャスト文字起こしはどれくらい正確?', a: 'クリーンなスタジオ音声で、Whisper large-v3は通常5〜10%の単語エラー率に着地。人間の文字起こし業者は3〜5%。ほとんどのショーノートとブログ再利用作業ではAIで十分。法廷証言や学術引用には人間を雇ってください。' },
        { q: '私のエピソードはサーバーに保存されますか?', a: 'いいえ。音声を文字起こしプロバイダ(Groq、バックアップとしてOpenAI)に直接渡します。彼らが処理し、私たちは破棄します。ポッドキャストファイルをデータベースやストレージに書き込むことは決してありません。' },
        { q: '字幕用にSRTとしてダウンロードできますか?', a: 'はい。文字起こし後、SRTダウンロードボタンをクリック。YouTube Studio、Premiere Pro、DaVinci Resolve、任意の動画エディタで直接使用。' },
        { q: '分単位で課金しますか?', a: 'いいえ。Mictooの文字起こしは無料です。現在は広告で運営、より長いファイルやバッチアップロードが必要なユーザー向けに有料Proプランが後で来ます。' },
        { q: '私のエピソードには露骨な言葉があります。検閲されますか?', a: 'フィルタリングなし。文字起こしは正確に言われたことを反映します。クリーンなバージョンのために罵り言葉を編集したい場合は、ダウンロード後に自分で行ってください。' },
        { q: 'ダウンロード前に文字起こしを編集できますか?', a: 'はい。結果ビューに簡単なエディタがあります。誤った単語を修正してから、編集したバージョンをTXTまたはSRTでダウンロード。' },
        { q: 'MictooのポッドキャストファイルはGDPR準拠ですか?', a: 'サイトを離れた後、サーバーに音声や文字起こしを保存しません。私たちはヨーロッパにあり、プロバイダ(Groq US、OpenAI US)はDPAに署名しています。特定のコンプライアンス質問にはプライバシーポリシーを参照するか、info@mictoo.comに書いてください。' },
      ]}
      relatedLinks={[
        { href: '/ja/free-srt-generator', label: 'SRT生成', desc: 'プレーンテキストではなくポッドキャスト準備済み字幕ファイル。' },
        { href: '/ja/timestamped-transcription', label: 'タイムコード付き文字起こし', desc: 'チャプターマーカー、編集、引用検索用。' },
        { href: '/ja/interview-transcription', label: 'インタビュー文字起こし', desc: '同じエンジン、1対1フォーマット向けに最適化。' },
        { href: '/ja/youtube-to-text', label: 'YouTubeをテキストに', desc: 'エピソードがすでにYouTubeにある場合、そこから音声を取得。' },
      ]}
    />
  )
}
