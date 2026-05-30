import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-audio-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
  'de': 'https://mictoo.com/de/transcribe-audio-to-text',
  'es': 'https://mictoo.com/es/transcribe-audio-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
  'it': 'https://mictoo.com/it/transcribe-audio-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-audio-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-audio-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-audio-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-audio-to-text',
  'x-default': 'https://mictoo.com/transcribe-audio-to-text',
}

export const metadata = {
  title: '音声をテキストに — 無料オンライン文字起こし | Mictoo',
  description:
    '無料の音声テキスト変換ツール。任意のファイル(MP3、WAV、M4A、FLAC、OGG、AAC)をアップロードして、数秒でクリーンな文字起こしを取得。登録不要、50以上の言語対応。',
  alternates: { canonical: 'https://mictoo.com/ja/transcribe-audio-to-text', languages: LANGS },

  openGraph: {
    title: "音声をテキストに — 無料オンライン文字起こし | Mictoo",
    description: "無料の音声テキスト変換ツール。任意のファイル(MP3、WAV、M4A、FLAC、OGG、AAC)をアップロードして、数秒でクリーンな文字起こしを取得。登録不要、50以上の言語対応。",
    url: "https://mictoo.com/ja/transcribe-audio-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "音声をテキストに — 無料オンライン文字起こし | Mictoo",
    description: "無料の音声テキスト変換ツール。任意のファイル(MP3、WAV、M4A、FLAC、OGG、AAC)をアップロードして、数秒でクリーンな文字起こしを取得。登録不要、50以上の言語対応。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaAudioToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="ja"
      badge="MP3 · WAV · M4A · FLAC · 無料"
      h1={<>音声をテキストに<br /><span className="text-brand-600">無料AI文字起こし</span></>}
      subtitle="任意の音声ファイルの無料AI文字起こし。MP3、WAV、M4A、FLAC、OGG、AAC対応。アカウント不要、分単位の課金なし。"
      howItWorks={[
        { icon: '📂', title: '音声をドロップ', desc: '一般的なフォーマットすべて対応。スマホのMP3、フィールドレコーダーのWAV、iPhoneのボイスメモのM4A、ポッドキャストエクスポートのFLAC。ファイルをドラッグするかクリックして選択。' },
        { icon: '⚡', title: 'AIが文字起こし', desc: 'OpenAI Whisper large-v3を使用。10分のファイルは約20秒、30分のファイルは1分未満で完了します。' },
        { icon: '📋', title: 'コピー、ダウンロード、編集', desc: 'ブラウザで文字起こしを読む。メモ用にTXTとして、タイムスタンプが必要ならSRTとしてダウンロード。エクスポート前に誤認識された単語をインラインで修正できます。' },
      ]}
      whyUse={{ title: 'なぜMictooで音声をテキストに', bullets: [
        { title: '1つのモデル、それも最良のもの', desc: '全員にWhisper large-v3を使用します。「無料版は弱いモデルで動作する」というような小細工はなし。高価なエンタープライズ文字起こしを動かしているのと同じモデルがあなたのファイルを処理します。' },
        { title: '幅広いフォーマットサポート', desc: 'MP3、WAV、M4A、FLAC、OGG、WEBM、AACに加え、音声を含む動画フォーマット(MP4、MOV)。「MP3のみ受け付けます、先に変換してください」というような摩擦はありません。' },
        { title: '50以上の言語、バイリンガルファイルも', desc: '自動検出が短い音声サンプルから言語を選びます。録音の途中で言語が切り替わる場合(インタビューでよくある)、Whisperはその切り替えに追従します。' },
        { title: 'ファイルは保存されない', desc: 'あなたの音声は文字起こしプロバイダにストリーミングされ、処理されて破棄されます。ファイルをデータベースやストレージに書き込むことは絶対にありません。プロバイダ(Groq、OpenAI)はAPIデータでトレーニングしません。' },
        { title: 'アスタリスクなしの無料', desc: 'アカウントなしで1ファイルあたり最大30分。無料登録で最大60分。それ以外に制限はありません。' },
      ]}}
      useCases={{ title: '音声テキスト変換が本当に時間を節約する場面', items: [
        { title: 'インタビューのメモ', desc: '取材相手と1時間話しました。録音を巻き戻して引用を探す代わりに、文字起こしでCtrl+F。5分ではなく5秒です。' },
        { title: 'ボイスメモの整理', desc: '移動中に途中のアイデアを電話に吹き込んだ。今それをテキストとして欲しい。M4Aをドロップ、文章を得て、Notionにペースト。' },
        { title: '講義やウェビナーの復習', desc: '2時間の講義を2倍速で見るのは大変。テキスト文字起こしならセクションごとにざっと見て、重要な部分だけ深掘りできます。' },
        { title: '翻訳の準備', desc: 'Whisperはソース言語で文字起こしします。そこからDeepLやChatGPTにコピーしてきれいに翻訳。生の音声からの自動翻訳より良いです。' },
        { title: '過去カタログの音声検索', desc: '何年もの通話、エピソード、ミーティングの録音。バッチ文字起こしで突然検索可能なアーカイブができます。サブスクリプション付きの「AIミーティングツール」よりも安く済みます。' },
      ]}}
      proTips={{ title: 'クリーンな音声文字起こしのコツ', tips: [
        { title: 'モノラルで十分。ステレオは無駄', desc: '音声には2チャンネル不要。ファイルが巨大なら、モノラルに再エンコードすればサイズは半分になり、文字起こしの品質は落ちません。ffmpegワンライナー: ffmpeg -i input.wav -ac 1 output.wav.' },
        { title: '音声には64 kbps MP3で十分', desc: 'DAWやエディタからエクスポートする時、64 kbpsモノラルMP3でWhisperが必要とするものはすべて揃います。ビットレートを上げても精度は上がりません、ファイルが大きくなるだけです。' },
        { title: '最初と最後の長い沈黙はカット', desc: '最初の言葉まで90秒の無音があると、その90秒が長さ制限を食います。アップロード前にAudacityで切り取ってください(Effect、Truncate Silence)。' },
        { title: '短いファイルは言語を手動で設定', desc: '自動検出は最初の音声チャンクをサンプリングして言語を識別します。5分未満のファイルではこのサンプルが小さく、検出の信頼性が下がります。ドロップダウンから言語を明示的に選んでください。' },
        { title: 'バックグラウンドミュージックはWhisperを幻覚させる', desc: '音声の下に音楽がある場合(スポンサーリード、イントロベッド、Bロール)、モデルは音楽だけの部分で時々作り話の単語を入れます。音楽なしのバージョンがあればそちらを使ってください。' },
        { title: '非常にノイズの多いファイルはまずノイズ除去', desc: '無料オプション: Audacityのノイズリダクション(内蔵)またはAdobe Podcast Enhance(無料Web、意外と良い)。ファイルを一度通してから、クリーンなバージョンをアップロードしてください。' },
      ]}}
      faq={[
        { q: '最高の無料音声テキスト変換ツールは?', a: '私たちはバイアスがありますが、正直な答え: Whisper large-v3を使う任意のツールは無料層のトップです。Mictooは登録の壁なしにまさにそのモデルを動かしています。OtterとTrintは良いですが、無料枠を超えると分単位で課金します。たまの文字起こしなら無料が正しい層です。' },
        { q: '音声からテキストへの精度はどれくらい?', a: '主要言語のクリアなスピーチでは5〜10%の単語誤認識率。ノイズの多い音声、強いアクセント、専門用語では精度が下がります。多くの用途(メモ、検索、ドラフト)には十分です。法的または医療記録には人間を雇ってください。' },
        { q: 'どの音声フォーマットに対応していますか?', a: 'MP3、WAV、M4A、FLAC、OGG、WEBM、AAC。MP4やMOVのような動画ファイルも(音声を自動抽出)。AIFFとALACは直接サポートされていません。先にWAVまたはFLACに変換してください。' },
        { q: '文字起こしにどれくらい時間がかかりますか?', a: '5分のファイルは通常10〜15秒で完了。30分のファイルは45〜60秒。ファイル全体を1リクエストとして処理するので、あなた側で分割する必要はありません。' },
        { q: '電話録音を文字起こしできますか?', a: 'はい。電話通話は通常8 kHzモノラルでいくらか圧縮されています。Whisperは対応できます、スタジオ音声より精度はわずかに低いです。あなたの管轄区域で録音が合法であることを確認してください。' },
        { q: '言語を選ぶ必要がありますか?', a: 'いいえ、自動検出がデフォルトです。5分未満の音声や音声以外の冒頭があるファイルの場合は、より信頼性の高い結果のために手動で言語を選んでください。' },
        { q: '分単位の課金はありますか?', a: '料金なし。文字起こしは分カウンターなしで無料です。ディスプレイ広告とパワーユーザー向けの予定されたProプランで運営しています。' },
        { q: '最大ファイルサイズは?', a: 'アカウントなしで25 MB、無料登録で60 MB。ファイルが大きい場合は圧縮ガイドを参照してください。' },
        { q: '私の音声はサーバーに保存されますか?', a: 'いいえ。ファイルを直接文字起こしプロバイダにストリーミングし、テキストを受け取って音声を破棄します。データベースやストレージには何も書き込まれません。' },
        { q: 'ダウンロード前に文字起こしを編集できますか?', a: 'はい。文字起こし後、結果ビューアでインラインで誤認識された単語を修正し、編集したバージョンをダウンロードできます。' },
        { q: '出力フォーマットは何ですか?', a: 'プレーンテキスト(TXT)、タイムスタンプ付き字幕ファイル(SRT)、クリップボードへのコピー。SRTはYouTube Studio、Premiere Pro、DaVinci Resolveなどの標準動画エディタで動作します。' },
        { q: 'Mictooはモバイルで動作しますか?', a: 'はい。サイトはモバイルフレンドリーです。iOSのファイルアプリやAndroidのダウンロードフォルダから直接アップロードできます。' },
      ]}
      relatedLinks={[
        { href: '/ja/transcribe-mp3-to-text', label: 'MP3をテキストに', desc: 'MP3特有のコツと特徴。' },
        { href: '/ja/transcribe-video-to-text', label: '動画をテキストに', desc: '同じエンジン、MP4とMOVファイル向け。' },
        { href: '/ja/timestamped-transcription', label: 'タイムコード付き文字起こし', desc: '文または単語ごとのタイムスタンプが必要な時。' },
        { href: '/ja/how-to-compress-audio', label: '音声を圧縮する', desc: 'ファイルがアップロードに大きすぎる場合。' },
      ]}
    />
  )
}
