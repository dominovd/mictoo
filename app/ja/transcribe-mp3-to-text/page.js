import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3をテキストに — 無料AI MP3文字起こし | Mictoo',
  description:
    '無料のMP3テキスト変換ツール。任意のMP3をアップロードして数秒でAI文字起こしを取得。ポッドキャスト、インタビュー、講義に対応。50以上の言語、登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/transcribe-mp3-to-text', languages: LANGS },

  openGraph: {
    title: "MP3をテキストに — 無料AI MP3文字起こし | Mictoo",
    description: "無料のMP3テキスト変換ツール。任意のMP3をアップロードして数秒でAI文字起こしを取得。ポッドキャスト、インタビュー、講義に対応。50以上の言語、登録不要。",
    url: "https://mictoo.com/ja/transcribe-mp3-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP3をテキストに — 無料AI MP3文字起こし | Mictoo",
    description: "無料のMP3テキスト変換ツール。任意のMP3をアップロードして数秒でAI文字起こしを取得。ポッドキャスト、インタビュー、講義に対応。50以上の言語、登録不要。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaMp3ToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="ja"
      badge="MP3 · 無料 · 登録不要"
      h1={<>MP3をテキストに<br /><span className="text-brand-600">無料MP3文字起こし</span></>}
      subtitle="任意のMP3の無料AI文字起こし。ファイルをドロップ、数秒でテキスト取得。アカウント不要、分単位課金なし、メール不要。"
      howItWorks={[
        { icon: '📂', title: 'MP3をドロップ', desc: '任意のMP3対応。ポッドキャストのダウンロード、ボイスメモのエクスポート、音声リップ、AI生成音声ファイル。ドラッグするかクリックして選択。' },
        { icon: '⚡', title: 'AIが文字起こし', desc: 'Whisper large-v3がMP3を読んで音声をテキストに変換します。一般的な30分のポッドキャストは約1分で完了。5分のボイスメモは約15秒。' },
        { icon: '📋', title: 'コピー、ダウンロード、編集', desc: 'ブラウザで読む、クリップボードにコピー、またはTXTかSRTでダウンロード。エクスポート前に誤認識された単語をインラインで修正。' },
      ]}
      whyUse={{ title: 'なぜMictooがMP3に向いているか', bullets: [
        { title: 'Whisper large-v3、無料層のために削られたモデルではない', desc: '「無料ユーザー用」に小さなモデル、有料ユーザー用に大きなモデル、なんてことはしません。同じモデル、同じ精度、すべてのファイル。' },
        { title: 'MP3特有の扱いがうまい', desc: 'MP3は不可逆圧縮で、ツールによっては非常に高圧縮のファイル(32 kbps、モノラル、低サンプルレート)で詰まります。Whisperは文句なしに処理。24 kbpsの電話通話MP3でも読める文字起こしを見てきました。' },
        { title: 'ファイル変換不要', desc: '一部の「MP3テキスト」ツールは内部でWAVを要求してMP3を再エンコードします。私たちはMP3を直接モデルに送ります。より速く、二度目のエンコードによる劣化なし。' },
        { title: '分カウンターなし', desc: '一部の競合は月60分まで無料、それ以降は1分25セント課金。私たちは広告で運営、分数制限なし。1ファイルでも100ファイルでも文字起こし。' },
        { title: 'デフォルトでプライバシー', desc: 'MP3は音声プロバイダに行き、文字起こしされて破棄されます。私たち側のディスクに音声を書き込むことは決してありません。' },
      ]}}
      useCases={{ title: '人々が「MP3をテキストに」を使う目的', items: [
        { title: 'ポッドキャストエピソード', desc: 'ポッドキャストホスト(Anchor、Buzzsprout、Transistor)からMP3をドラッグして、ショーノート、ブログでの再利用、アクセシビリティ用のテキストを取得。' },
        { title: '通話録音', desc: 'MP3はほとんどの通話録音アプリの標準エクスポート。長い通話を素早くスキャンして重要な部分を見つけるために文字起こし。' },
        { title: 'スマホからエクスポートしたボイスメモ', desc: 'iPhoneのボイスメモはデフォルトでM4Aですが、AirDropでMP3として送った、またはMP3で保存するAndroidアプリを使った場合、これがあなたのツールです。' },
        { title: 'オーディオブックの抜粋や講義のリップ', desc: '勉強用に、音声の横にテキストがあると記憶定着が倍になります。著作権の正しい側にいるだけです。' },
        { title: 'AI音声とTTS出力', desc: 'ElevenLabs、OpenAI TTS、Murfなどの合成ツールで音声を生成した場合、字幕や同期作業のためにクリーンな文字起こしを戻したいかもしれません。' },
      ]}}
      proTips={{ title: 'MP3文字起こしのコツ', tips: [
        { title: '可変ビットレートよりも一定ビットレートがWhisperには良い', desc: 'MP3 VBR(可変ビットレート)はエッジケースで一部の音声デコーダーを混乱させることがあります。エクスポートを制御できるなら、CBR 64または96 kbpsモノラルを選んでください。モデルへの負荷が減ります。' },
        { title: 'MP3の音声は64 kbpsモノラルがスイートスポット', desc: 'それより高くても音声には無駄。64 kbpsモノラルの60分エピソードは約28 MB。25 MBの無料層に収まり、60 MBログイン層には余裕。' },
        { title: 'MP3が巨大(60 MB超)なら分割前に再エンコード', desc: '分割して2ファイル文字起こしより、低ビットレートで1回再エンコードする方が手間が少ない。ffmpeg: ffmpeg -i big.mp3 -ac 1 -b:a 64k small.mp3。元の200 MBが25〜40 MBに。' },
        { title: 'ファイルがギリギリならID3メタデータを削除', desc: 'ID3タグ(カバー、歌詞など)はMP3に数MB追加されることがあります。制限を1〜2 MB超えているなら、ffmpeg -i in.mp3 -map_metadata -1 -c:a copy out.mp3でタグを削除すれば足ります。' },
        { title: '古いコンバータの悪いMP3エンコードは無音ギャップを引き起こす', desc: '文字起こしがセクションをスキップする場合、MP3にバグのあるエンコーダーからの実際の無音ギャップがある可能性。ソースから再エンコードするか、AudacityのFind Silenceで確認。' },
        { title: '電話通話のMP3(8 kHzモノラル)は精度がやや低めと見込む', desc: '電話音声は高周波が失われ、精度がいくつかポイント下がります。読めるレベルは保つので、名前や数字でクリーンアップを多めに計画してください。' },
      ]}}
      faq={[
        { q: 'MP3は文字起こしに最適なフォーマットですか?', a: 'ほとんどのユーザーには、はい。MP3は小さく、どこでもサポートされ、Whisperでの精度はWAVやFLACと実質同じです。ロスレス(WAV、FLAC)は編集にも音声が必要な場合だけ使ってください。' },
        { q: 'どのMP3ビットレートが最適?', a: '32 kbpsモノラルから320 kbpsステレオまで何でも。音声には64〜96 kbpsモノラルが実用的なスイートスポット。それより高くても文字起こしは改善せず、それより低いとモデルにとっての可解性が下がり始めます。' },
        { q: 'MP3が60 MBを超えます。どうすれば?', a: '2つのオプション。低ビットレートに再エンコード(64 kbpsモノラルはほとんどのMP3を4分の1以下に)、または60 MB以下のチャンクに分割。両方のガイドがあります。' },
        { q: 'MP3の文字起こしにどれくらい時間がかかりますか?', a: '音声の長さの約1〜2%。60分のMP3は約60秒で完了。10分のは10〜20秒。ネットワークアップロードが通常一番長い待ち時間です。' },
        { q: 'MP3は保存または共有されますか?', a: 'いいえ。ファイルは音声プロバイダ(Groq、バックアップとしてOpenAI)に行き、文字起こしされて破棄されます。私たちのサーバーには書き込まれず、使用するプロバイダはAPIデータでトレーニングしません。' },
        { q: '複数のMP3をバッチでアップロードできますか?', a: 'まだワンクリックではできません。今は1つずつ文字起こしします。バッチアップロードは有料Proプランのロードマップにあります。' },
        { q: 'どの言語をサポートしていますか?', a: '50以上の言語。自動検出がほとんどのケースを処理。5分未満のファイルや音楽や無音で始まるファイルでは言語を手動で選んでください。' },
        { q: 'MP3からタイムコードを取得できますか?', a: 'はい。SRT(字幕ファイル)としてダウンロードすれば数秒ごとのタイムコードが得られます。または単語レベルの粒度はタイムコード付き文字起こしページをお使いください。' },
        { q: 'Mictooはチャプターマーカー付きポッドキャストMP3で動作しますか?', a: '音声を抽出してチャプターメタデータは無視します。1つのドキュメントとして完全な文字起こしを取得。チャプター整列文字起こしが必要なら、事前にチャプター境界でMP3を分割してください。' },
        { q: 'MP3の文字起こしにはスピーカーラベルがありますか?', a: 'デフォルトでは自動的にはありません。Whisperはダイアライゼーションを行いません。ラベルが必要なら、各スピーカーのトラックを別々にアップロードし(あれば)、自分でラベル付けしてください。' },
        { q: 'AI生成音声のMP3を文字起こしできますか?', a: 'はい。TTS音声(ElevenLabs、OpenAI、Murfなど)は背景ノイズやためらいがないので、人間の声よりクリーンに文字起こしされます。' },
        { q: 'MP3が珍しい言語です。動作しますか?', a: 'Whisperがその言語をサポートしているなら、はい。モデルは50以上の言語を良好な精度でカバーし、多くの他言語に基本サポートがあります。試してみてください。結果が使えない場合、その言語はトレーニングデータ外の可能性があります。' },
      ]}
      relatedLinks={[
        { href: '/ja/transcribe-audio-to-text', label: '音声をテキストに', desc: 'MP3以外のフォーマット(WAV、M4A、FLAC、OGG)向け。' },
        { href: '/ja/podcast-transcription', label: 'ポッドキャスト文字起こし', desc: '同じエンジン、ポッドキャスト向けのコツ。' },
        { href: '/ja/free-srt-generator', label: 'SRT生成', desc: 'テキストだけでなく動画字幕が必要な時。' },
        { href: '/ja/how-to-compress-audio', label: '音声を圧縮する方法', desc: 'MP3が大きすぎる時。' },
      ]}
    />
  )
}
