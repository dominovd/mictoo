import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: '動画をテキストに — 無料オンライン文字起こし | Mictoo',
  description:
    '無料の動画テキスト文字起こし。MP4、MOV、WEBM、AVIをアップロードしてAI文字起こしまたはSRT字幕ファイルを取得。スクリーンレコーディング、チュートリアル、ブログに対応。',
  alternates: { canonical: 'https://mictoo.com/ja/transcribe-video-to-text', languages: LANGS },

  openGraph: {
    title: "動画をテキストに — 無料オンライン文字起こし | Mictoo",
    description: "無料の動画テキスト文字起こし。MP4、MOV、WEBM、AVIをアップロードしてAI文字起こしまたはSRT字幕ファイルを取得。スクリーンレコーディング、チュートリアル、ブログに対応。",
    url: "https://mictoo.com/ja/transcribe-video-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "動画をテキストに — 無料オンライン文字起こし | Mictoo",
    description: "無料の動画テキスト文字起こし。MP4、MOV、WEBM、AVIをアップロードしてAI文字起こしまたはSRT字幕ファイルを取得。スクリーンレコーディング、チュートリアル、ブログに対応。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaVideoToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="ja"
      enableYouTubeUrl
      badge="MP4 · MOV · WEBM · 無料"
      h1={<>動画をテキストに<br /><span className="text-brand-600">無料AI動画文字起こし</span></>}
      subtitle="任意の動画ファイルの無料AI文字起こし。音声を自動抽出します。アカウント不要、分単位課金なし、メール不要。"
      howItWorks={[
        { icon: '🎬', title: '動画をドロップ — またはYouTube URLを貼る', desc: 'MP4、MOV、WEBM、AVI、その他一般的な動画コンテナに対応。スクリーンレコーディング、Vログ、ウェビナーのエクスポート、ZoomのMP4。ドラッグするかクリックして選択。新機能: アップロードの代わりにYouTubeリンクを貼れば、ダウンロード不要で数秒で文字起こしを取得できます。' },
        { icon: '⚡', title: '音声を抽出してAIが文字起こし', desc: '動画から音声トラックを取り出して、それだけをWhisper large-v3に送ります。先にMP3に変換する必要はありません。30分の動画は通常約1分で完了。' },
        { icon: '📋', title: 'コピー、ダウンロード、字幕取得', desc: 'メモ用にTXT、または動画エディターに字幕として入れるためにSRTでダウンロード。エクスポート前に誤った単語をブラウザで修正。' },
      ]}
      whyUse={{ title: 'なぜMictooが動画に向いているか', bullets: [
        { title: 'YouTubeのURLを直接貼り付け', desc: 'YouTube動画ならダウンロード作業をスキップ。ドロップゾーン上のフィールドにリンクを貼れば、数秒で文字起こしが返ってきます。字幕がない動画は音声ファイルをアップロードすれば、Whisperが処理します。' },
        { title: '音声抽出は自動', desc: 'MP4をドロップ。内部で音声を取り出して音声モデルに送ります。自分でffmpegを実行する必要はありません。' },
        { title: '出力は本物の動画エディターで動作', desc: '生成するSRTはPremiere Pro、DaVinci Resolve、Final Cut、CapCut、YouTube Studioで動作します。タイムコードはフレーム精度。' },
        { title: '動画ファイルが大きい?動画ではなく音声を圧縮', desc: '200 MBの動画は通常195 MBの動画と5 MBの音声。全部を圧縮する必要はなく、音声トラックだけです。' },
        { title: 'ファイルは保存されない', desc: '動画が私たちに届き、音声を抽出して文字起こしプロバイダに送り、両方を破棄します。動画も音声もサーバーに保持しません。' },
      ]}}
      useCases={{ title: '動画文字起こしの用途', items: [
        { title: 'ソーシャルメディア動画の字幕', desc: 'TikTok、Instagram Reels、YouTube Shortsは焼き付け字幕の恩恵を受けます。ここでSRTを生成し、CapCutやPremiereにインポートし、字幕を好みのスタイルにして動画に焼き付け。' },
        { title: 'チュートリアルとコースコンテンツ', desc: 'スクリーンキャストチュートリアルを録画する場合、テキストバージョンがあるとSEO、アクセシビリティ、翻訳に役立ちます。動画の横に文字起こしをブログやコースプラットフォームに貼り付け。' },
        { title: 'ウェビナーのフォローアップ', desc: '1時間のウェビナーをやりました。録画を文字起こしし、軽く編集し、最後まで残れなかった参加者にフォローアップメールとして送信。' },
        { title: '編集用のインタビューカット', desc: '長いビデオインタビューを編集する時、第2モニターで文字起こしを使って「ペーパー編集」ができます。残したいラインをマーク、タイムラインで見つける、スクラブよりずっと速い。' },
        { title: '翻訳と吹替の準備', desc: 'ソース言語で文字起こし、DeepLやChatGPTでテキストを翻訳、それを吹替や字幕翻訳のスクリプトとして使用。' },
      ]}}
      proTips={{ title: '動画文字起こしのコツ', tips: [
        { title: '動画が60 MB超なら先に音声を抽出', desc: '1080p動画は主にピクセルバイトで、どうせ捨てます。音声トラックだけ取り出す: ffmpeg -i video.mp4 -vn -ac 1 -b:a 64k audio.mp3。500 MBの動画が30 MB未満の音声に。' },
        { title: 'エクスポート前にエディタでバックグラウンドミュージックをミュート', desc: '動画のダイアログの下に音楽がある場合(Bロール、イントロ、トランジション)、アップロード用バージョンをエクスポートする前にエディタで音楽トラックをミュートまたはダウン。Whisperは音楽の下に埋もれたスピーチで時々単語を作ります。' },
        { title: '音楽なしのスクリーンキャストが最も簡単', desc: '誰かがスライドについて話すLoom、Zoom、OBSの録画は最もクリーンな文字起こしを生みます。音楽なし、1つの声、クリアなマイク。ほぼ人間レベルの精度。' },
        { title: 'マルチスピーカー動画は可能なら別々のトラックを録音', desc: '録画をコントロールできるなら、各スピーカーを自分のトラックに録音。各トラックを別々に文字起こし。よりクリーンな帰属、重なりでのエラーが少ない。' },
        { title: 'フレームレートは関係ない、音声の品質だけ', desc: 'Whisperは動画を見ません、音声だけ。悪い音声の4K動画はラベリアマイクの480p動画よりも文字起こしが悪い。努力は音声に注いでください。' },
        { title: 'SRTタイムコードは一部のエディタで小さなオフセットが必要', desc: 'ほとんどのエディタはSRTタイムコードを完璧に整列します。古いエディタの中には最初の字幕が00:00:00,000ではなく00:00:01,000から始まることを期待するものもあります。字幕が1秒ずれている場合、通常これが原因です。' },
      ]}}
      faq={[
        { q: 'どの動画フォーマットに対応していますか?', a: 'MP4、MOV、WEBM、AVI、MKV、FLV。動画がVLCで再生できるなら、ここでもほぼ確実に動作します。音声を内部で抽出するので、動画コーデックはほとんど関係ありません。' },
        { q: '動画ファイルがアップロードに大きすぎます。どうすれば?', a: '2つのオプション。まず音声だけ抽出(ffmpegコマンド1つ、上記のコツ参照)してそれをアップロード。またはエディタからより小さいエクスポート(低解像度または低ビットレート)を使用。60 MB超のファイルには音声抽出が速い。' },
        { q: 'プレーンテキストだけでなくSRT字幕を取得できますか?', a: 'はい。文字起こし後、「SRTとしてダウンロード」をクリック。SRTはYouTube Studio、Premiere Pro、DaVinci Resolve、Final Cut、CapCut、任意の標準動画エディタで動作。' },
        { q: 'SRTのタイミングは動画のフレームと正確に一致しますか?', a: 'はい。SRTタイムコードはミリ秒単位で、任意の動画フレームレートよりも精密です。24、25、29.97、30、50、60 fpsで正しくフィットします。' },
        { q: '音声なしの動画(画面上のテキストのみ)を文字起こしできますか?', a: 'いいえ。話された音声を文字起こしします。画面上のテキスト認識にはOCRが必要で、別のツールです。' },
        { q: '動画からテキストへの精度はどれくらい?', a: '音声によります。クリーンなボイスオーバー: ほぼ人間レベルの精度(95%以上)。室内音響の悪い会議動画: 約85〜90%。ダイアログの低い音楽中心の動画: それより下。' },
        { q: '私の動画はYouTubeや第三者サービスにアップロードされますか?', a: 'いいえ。あなたの動画は文字起こしプロバイダにストリーミングされて破棄されます。YouTube、Google、その他にも何もアップロードされません。クラウドビデオストレージビジネスではありません。' },
        { q: 'ダウンロード前に文字起こしを編集できますか?', a: 'はい。エクスポート前にブラウザで誤った単語を修正。固有名詞や専門用語に便利。' },
        { q: '360動画やVR動画フォーマットをサポートしていますか?', a: '動画コーデックは私たちには関係ありません。ファイルが標準コンテナ(MP4、MOV)で音声トラックを含む限り、音声を抽出して文字起こしします。' },
        { q: '動画に複数の音声トラック(コメント、オリジナル、音楽)がある場合は?', a: 'デフォルトトラックのみを使います。特定のトラックが欲しい場合は、そのトラックをデフォルトとして動画を再エクスポートするか、希望のトラックを抽出して音声としてアップロード。' },
        { q: '動画の長さ制限はありますか?', a: '無料で1ファイルあたり30分、登録で60分。長い動画はチャンクに分割。文字起こしは後で再結合できます。' },
        { q: 'ライブ動画ストリームを文字起こしできますか?', a: 'いいえ。録画されたファイルのみで動作します。ライブ文字起こしには別のカテゴリのツールが必要です。' },
      ]}
      relatedLinks={[
        { href: '/ja/free-srt-generator', label: 'SRT生成', desc: '同じツール、字幕ワークフロー向け。' },
        { href: '/ja/youtube-to-text', label: 'YouTubeをテキストに', desc: '動画がすでにYouTubeにある時。' },
        { href: '/ja/zoom-transcription', label: 'Zoom文字起こし', desc: 'Zoom MP4録画専用。' },
        { href: '/ja/how-to-compress-audio', label: '音声を圧縮', desc: '音声がサイズ制限を超える動画向け。' },
      ]}
    />
  )
}
