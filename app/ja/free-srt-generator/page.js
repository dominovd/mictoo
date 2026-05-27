import LandingLayout from '@/components/LandingLayout'

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
  title: 'SRTジェネレーター — オンラインでSRT字幕ファイル作成 | Mictoo',
  description:
    '無料SRT字幕ジェネレーター。音声または動画ファイルをアップロードしてタイムコード付きクリーンな.srtを数秒で取得。YouTube、Premiere、DaVinci、CapCutで動作。',
  alternates: { canonical: 'https://mictoo.com/ja/free-srt-generator', languages: LANGS },
}

export default function JaSrtPage() {
  return (
    <LandingLayout
      defaultLanguage="ja"
      badge="SRT · 字幕 · 無料"
      h1={<>SRTジェネレーター<br /><span className="text-brand-600">あらゆる音声・動画からAI字幕</span></>}
      subtitle="あらゆる音声または動画から字幕ファイルを生成。数秒で正確なタイムコード付きクリーンな.srtを取得。YouTube、Premiere、DaVinci Resolve、CapCut、Final Cut用のドロップイン。"
      howItWorks={[
        { icon: '📂', title: '音声または動画をドロップ', desc: 'MP3、M4A、MP4、MOV、WAV、FLAC、OGG、WEBM、AAC。動画から音声を自動抽出。' },
        { icon: '⚡', title: 'AIが文字起こしと整列', desc: 'Whisper large-v3が音声を文字起こしして各行のタイムコードを生成。10分動画は通常15秒、30分は約1分。' },
        { icon: '💾', title: '.srtをダウンロード', desc: '「SRTとしてダウンロード」をクリック。ファイルは標準フォーマット、すべての主要動画エディタとYouTube Studioとドロップイン互換。' },
      ]}
      whyUse={{ title: 'なぜこのSRTジェネレーター', bullets: [
        { title: 'Whisper large-v3のタイムコードはフレーム精度', desc: 'タイムコードはミリ秒単位で、任意の一般的な動画フレームレートよりも精密。24、25、29.97、30、50、60 fpsでオフセット調整なしで正しくフィット。' },
        { title: '無料、分カウンターなし', desc: '10分でも60分でも文字起こし。同じ価格(無料)。最初のファイル後の「Proにアップグレード」ゲートなし。' },
        { title: '50以上の言語', desc: 'あらゆる主要言語のコンテンツの字幕を生成。国際YouTubeチャンネルと翻訳字幕トラックに便利。' },
        { title: '標準.srtフォーマット', desc: 'プロプライエタリ拡張なし、奇妙なエンコーディングなし。Premiere Pro、DaVinci Resolve、Final Cut、CapCut、Kapwing、Descript、YouTube Studio、VLC、MPVで動作。' },
        { title: 'ファイルは保存されない', desc: '音声は文字起こしプロバイダに行き、処理後に破棄。動画を保持しません。' },
      ]}}
      useCases={{ title: '人々がSRTファイルを生成する用途', items: [
        { title: 'YouTubeアップロード', desc: 'YouTubeの自動字幕をクリーンな.srtに置き換え。より良い句読点、より少ないエラー、難聴視聴者のためのより良いアクセシビリティ。ボーナス: YouTubeの検索は自動生成より信頼性高くアップロードされた字幕をインデックス。' },
        { title: 'ソーシャルメディア動画(TikTok、Reels、Shorts)の字幕', desc: 'ここで.srtを生成、CapCutやPremiereにインポート、好みに合わせて字幕をスタイル、動画に焼き付け。ほとんどの視聴者は音なしで見るので、字幕はもはや任意ではない。' },
        { title: 'アクセシビリティ用字幕', desc: 'カンファレンストーク録画、社内トレーニング動画、オンラインコース。字幕は聴覚障害者と難聴視聴者、騒がしい環境の人にとって使用可能にする。' },
        { title: '翻訳パイプライン', desc: 'ソース言語で.srtを生成、DeepLやChatGPTに貼り付けて翻訳、ターゲット言語の.srtとして保存。結果: 人間の翻訳者を雇わずに別の言語での吹替品質の字幕。' },
        { title: '締め切り下の動画編集', desc: '昨日字幕が必要で人間の文字起こし業者を待てないなら、AI字幕は最初のカットには十分。後で磨く。' },
      ]}}
      proTips={{ title: 'SRT生成のコツ', tips: [
        { title: '長い動画には10分チャンクで.srtを生成して結合', desc: 'ドリフトが発生した場合、中間の間違ったタイムコードを修正しやすい。ほとんどのエディタは複数の.srtをインポートして結合できます。' },
        { title: '同じコンテンツでは音声のみアップロードが動画アップロードより速い', desc: '先に音声を抽出: ffmpeg -i video.mp4 -vn -ac 1 -b:a 64k audio.mp3。受け取る.srtは元の動画に対して動作、タイムコードはタイムコードだから。' },
        { title: '編集が終わってから字幕を焼き付け', desc: 'カットする前に動画に字幕を焼き付けると、カットする時に字幕をやり直す必要があります。動画がロックされたら最後に焼き付け。' },
        { title: '.srtの行の長さを管理可能に保つ', desc: 'Whisperは時々長い文に長い単一行字幕を生成。ほとんどのエディタは長い行を自動的に分割できるか、より良い可読性のために手動で分割できます。' },
        { title: '多言語動画では一度に1言語で.srtを生成', desc: '動画に英語とスペイン語のセクションがある場合、各セクションの.srtを別々に生成(毎回手動で言語を設定)してから1つの.srtに結合。' },
        { title: '.srtを動画エディタではなくテキストエディタで編集', desc: '.srtはタイムコード付きのテキストだけ。VS Code、Notepad++、BBEditで開いてタイプミスを素早く修正。準備ができたら動画エディタに再インポート。' },
        { title: 'TikTokとReelsには字幕ごとに短い1行に手動で短縮', desc: 'Whisperの自然な文はTikTokのパンチーな字幕スタイルより長い。プラットフォームのスタイルに合わせて.srtを編集。' },
      ]}}
      faq={[
        { q: 'SRTファイルとは?', a: 'SRT(SubRip Subtitle)は最も一般的な字幕フォーマット。タイムコードと字幕テキストを含むプレーンテキスト。すべての主要動画プレーヤーとエディタが.srtファイルを読む。' },
        { q: '動画からSRTファイルを生成するには?', a: 'ここに動画をアップロード。音声を抽出、文字起こし、.srtを生成。準備ができたら「SRTとしてダウンロード」をクリック。' },
        { q: 'YouTube動画にSRT字幕を追加するには?', a: 'YouTube Studioで動画を開き、字幕に移動し、言語を追加をクリック、.srtファイルをアップロード。YouTubeはその言語の公式字幕として使います。' },
        { q: 'SRTファイルはPremiere ProとDaVinci Resolveで動作しますか?', a: 'はい。Premiere: ファイル、インポート、.srtを選択。DaVinci: .srtをプロジェクトビンにドラッグ。両方とも字幕トラックとして扱い、タイムラインでさらに編集可能。' },
        { q: 'CapCutとFinal Cutで動作しますか?', a: 'はい。CapCut: キャプションをタップ、SRTをインポート。Final Cut: ファイル、インポート、キャプション、.srtを選択。両方ともタイムライン上の正しい時間に字幕を配置。' },
        { q: 'SRTジェネレーターは本当に無料?', a: 'はい。ファイルあたり料金なし、分カウンターなし、25 MB未満のファイルにメール不要。25 MBから60 MBの間のファイルには無料アカウントが必要。' },
        { q: '最大ファイルサイズは?', a: 'アカウントなしで25 MB、無料アカウントで60 MB。' },
        { q: '音声ファイル(MP3、WAV)からSRTを生成できますか?', a: 'はい。音声ファイルを直接ドロップ。動画音声であるかのようにタイムコード付きの.srtを生成。後で音声を画像やスライドと同期する時に字幕を追加するのに便利。' },
        { q: '長い動画でタイムコードはドリフトしますか?', a: 'Whisperのタイムコードは実際の音声に整列されるので、ドリフトはまれ。非常に長いファイル(60分)では最後の字幕にサブ秒のドリフトが現れることがあります。気づいたら影響を受けた字幕を手動で修正。' },
        { q: 'ダウンロード前に字幕を編集できますか?', a: 'はい。文字起こし後、結果ビューで誤った単語を修正してから変更付きの.srtをダウンロード。' },
        { q: 'SRTジェネレーターはどの言語をサポートしていますか?', a: '自動検出で50以上の言語。短い動画や非英語コンテンツには、より信頼できる結果のために言語を手動で選択。' },
        { q: '音声は保存されますか?', a: 'いいえ。ファイルは文字起こしプロバイダに行き、処理されて破棄。音声も生成された.srtも保持しません。' },
        { q: '音声の言語と異なる言語でSRTを生成できますか?', a: '直接はできません。ソース言語でSRTを生成してから、.srtのテキストをDeepLやChatGPTで翻訳。タイムコードは同じまま、テキストだけ変わります。' },
      ]}
      relatedLinks={[
        { href: '/ja/transcribe-video-to-text', label: '動画をテキストに', desc: '同じエンジン、プレーンテキスト出力向け。' },
        { href: '/ja/timestamped-transcription', label: 'タイムコード付き文字起こし', desc: '他のフォーマットでの文または単語タイムコード用。' },
        { href: '/ja/youtube-to-text', label: 'YouTubeをテキストに', desc: 'YouTubeの自動字幕を置き換えるため。' },
        { href: '/ja/transcribe-audio-to-text', label: '音声をテキストに', desc: '純粋な音声文字起こし用。' },
      ]}
    />
  )
}
