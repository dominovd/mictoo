import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'pt': 'https://mictoo.com/pt/meeting-transcription',
  'pl': 'https://mictoo.com/pl/meeting-transcription',
  'ja': 'https://mictoo.com/ja/meeting-transcription',
  'ko': 'https://mictoo.com/ko/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: '会議文字起こし — 通話と会議用の無料AI文字起こし | Mictoo',
  description:
    '無料AI会議文字起こし。任意のプラットフォームからの会議録画をアップロードして、数秒でクリーンなテキストを取得。登録不要、分単位課金なし、50以上の言語。',
  alternates: { canonical: 'https://mictoo.com/ja/meeting-transcription', languages: LANGS },
}

export default function JaMeetingPage() {
  return (
    <LandingLayout
      defaultLanguage="ja"
      badge="どのプラットフォームも · 無料 · 50以上の言語"
      h1={<>会議文字起こし<br /><span className="text-brand-600">無料AI会議文字起こし</span></>}
      subtitle="あらゆる会議録画をクリーンなテキストに変換。Zoom、Meet、Teams、Webex、Discord、Skype、ボイスレコーダー、何でも動作。アカウント不要、分単位課金なし。"
      howItWorks={[
        { icon: '🎙️', title: '会議録画を取得', desc: '使ったプラットフォーム(Zoom、Meet、Teams、Webex、Discord、GoToMeeting、対面ボイスレコーダー)に関係なく、MP4、MP3、M4A、WAV、FLAC、OGGとしてエクスポート。' },
        { icon: '⚡', title: 'ファイルをドロップ', desc: '必要なら音声を抽出してWhisper large-v3に送信。30分の会議は約1分で完了。' },
        { icon: '📋', title: '文字起こし取得', desc: '読む、コピー、またはTXTかSRTでダウンロード。エクスポート前に誤った単語や専門用語をインラインで修正。' },
      ]}
      whyUse={{ title: '会議にMictooを使う理由', bullets: [
        { title: 'ソースプラットフォームは関係ない', desc: 'Zoom、Meet、Teams、Webex、Discord、GoToMeeting、BlueJeans、対面レコーダー。ファイルがあれば、私たちは文字起こしします。' },
        { title: 'すべての会議に1つのモデル', desc: 'Zoomで録画した営業通話とTeamsでキャプチャしたチームレトロに同じWhisper large-v3。一貫した精度、一貫した出力フォーマット。' },
        { title: '無料、分カウンターなし', desc: 'ほとんどの会議ツール文字起こしは独自のコストを持つライセンスティアに組み込み。私たちのは本当に無料、月間制限なし。' },
        { title: '50以上の言語', desc: 'クロスボーダー会議、バイリンガル会話、国際チーム。Whisperはすべてに対応、自動検出または手動言語選択で。' },
        { title: '何も保存されない', desc: 'ファイルは文字起こしプロバイダにストリーミングされて破棄。会議音声をサーバーに書き込みません。' },
      ]}}
      useCases={{ title: '人々が文字起こしする一般的な会議タイプ', items: [
        { title: 'チームスタンドアップとレトロ', desc: '非同期チームは他のタイムゾーンの人がキャッチアップできるようスタンドアップを文字起こし。レトロはフォローアップアクションのための書面記録から恩恵を受ける。' },
        { title: 'クライアントと顧客通話', desc: '営業通話、アカウントチェックイン、顧客インタビュー。CRMでディールや連絡先の横に文字起こしを保存。' },
        { title: '社内トレーニングとオンボーディングセッション', desc: '新入社員は動画を見ながら文字起こしを読む。より良い保持、ステップを忘れた時に後で検索可能。' },
        { title: '取締役会議、リーダーシップオフサイト、全員会議', desc: '文字起こしは企業コミュニケーションをよりアクセス可能にする。参加できなかった従業員とドキュメント用に便利。' },
        { title: 'インタビューと質的研究', desc: '候補者スクリーニング、ユーザーインタビュー、ジャーナリズム、文字起こしが実際の作業出力。' },
      ]}}
      proTips={{ title: '会議文字起こしのコツ', tips: [
        { title: 'ソースが動画なら音声を抽出', desc: '会議プラットフォームは音声と動画でMP4をエクスポート。私たちには音声だけ必要。ffmpeg -i meeting.mp4 -vn -ac 1 -b:a 64k meeting.mp3で1 GB MP4が25 MB以下に。より速いアップロード、同じ文字起こし。' },
        { title: '全員が実物のマイクを持つことを確認', desc: 'WiFi通話のノートPC内蔵マイクはノイズの多いエコーの音声を生成。参加者ごとに1000円の有線USBヘッドセットは文字起こし精度で報われる。' },
        { title: '話さない参加者をミュート', desc: 'プレゼン中の開いたマイクはキーボード入力、部屋の背景ノイズ、サイドバーの会話を拾う。Whisperは時々これを意味不明な単語として文字起こし。' },
        { title: '非ネイティブ英語話者の会議では不必要に分割しない', desc: 'Whisperはより稀なフレーズに対してより長いコンテキストから恩恵を受ける。30分の連続ファイルは選択肢があれば3つの10分チャンクよりよく文字起こしされる。' },
        { title: '長い会議は自然な休憩でよりよく分割', desc: '90分会議をチャンクに分ける必要がある場合、自然な休憩(コーヒー休憩、議題遷移)を探してそこで分割。文の途中で切るリスクが減る。' },
        { title: '短いまたは異例な会議には言語を手動で選択', desc: '自動検出は最初の音声チャンクをサンプリング。待機室の音楽、短い挨拶、または無音で始まる会議には、手動言語選択がより信頼できる。' },
      ]}}
      faq={[
        { q: 'どの会議プラットフォームをサポートしていますか?', a: 'すべて。プラットフォームではなく録画ファイルで動作。Zoom、Microsoft Teams、Google Meet、Webex、Discord、Skype、GoToMeeting、BlueJeans、対面ボイスレコーダー。ファイルがMP4、MP3、M4A、WAV、FLAC、OGG、WEBMなら文字起こしします。' },
        { q: '会議がZoom(またはMeet、またはTeams)でした。このページを使うべきか、プラットフォーム固有のものを使うべきか?', a: '同じエンジン、同じ精度。プラットフォーム固有のページはより的を絞ったコツを与えます。どちらが簡単か使ってください。' },
        { q: 'スピーカーラベルは取得できますか?', a: '自動的にはありません。Whisperはデフォルトでダイアライゼーションを行いません。区別できる声の会議では、会話に基づいて手動でラベルを追加。スピーカーごとに別々の音声トラックの会議(Riverside、SquadCast、時々Zoom)では、各トラックを別々に文字起こし。' },
        { q: '会議録画が60 MBを超えています。どうすれば?', a: '2つのオプション。動画から音声のみ抽出(ffmpegコマンド1つ)、または会議をチャンクに分割。' },
        { q: '会議文字起こしはどれくらい正確?', a: 'クリーンな音声(良いマイク、背景ノイズなし): 90〜95%。会議室マイクまたはスピーカーフォン: 80〜90%。名前と専門用語は通常クリーンアップが必要。' },
        { q: '会議はサーバーに保存されますか?', a: 'いいえ。ファイルは文字起こしプロバイダにストリーミングされ、処理後に破棄。会議音声も文字起こしもデータベースに書き込みません。' },
        { q: 'Mictooの会議文字起こしはGDPR準拠ですか?', a: 'サイトを離れた後、音声や文字起こしを保持しません。私たちはヨーロッパにあり、プロバイダ(Groq US、OpenAI US)はDPAを持っています。特定のコンプライアンス質問にはプライバシーポリシーを参照。' },
        { q: '文字起こしだけでなく会議の要約を取得できますか?', a: '現在は完全な文字起こしを提供。要約には「この会議文字起こしをキー決定とアクションアイテムに要約して」のようなプロンプトでChatGPTやClaudeに文字起こしを貼り付け。' },
        { q: 'どの言語がサポートされていますか?', a: '50以上、自動検出付き。5分未満の会議や非音声のイントロがあるファイルには、より信頼できる結果のために言語を手動で選択。' },
        { q: '会議をリアルタイムで文字起こしできますか?', a: 'いいえ。録画されたファイルで動作。リアルタイムには会議プラットフォーム自体のライブ文字起こしまたは専用ミーティングアシスタントを使用。' },
        { q: '会議動画に合うSRTファイルはどうやって取得しますか?', a: '文字起こし後にSRTをダウンロード。ほとんどの動画エディタ(Premiere、DaVinci、CapCut、Final Cut)は、動画の音声が文字起こししたものと一致する限り、自動的に整列するSRTをインポート。' },
        { q: '機密会議を文字起こしできますか?', a: '機密会議(HR、法的、M&A、取締役会)には、私たちのを含むあらゆるクラウド文字起こしサービスに注意。ファイルは保存されませんが、処理のために第三者音声プロバイダを通ります。最大プライバシーには代わりにローカルWhisperインストールを使用。' },
      ]}
      relatedLinks={[
        { href: '/ja/zoom-transcription', label: 'Zoom文字起こし', desc: 'Zoom固有のコツとエクスポートワークフロー。' },
        { href: '/ja/google-meet-transcription', label: 'Google Meet文字起こし', desc: 'Google Meet録画用。' },
        { href: '/ja/teams-meeting-transcription', label: 'Teams文字起こし', desc: 'Microsoft Teams録画用。' },
        { href: '/ja/business-transcription', label: 'ビジネス文字起こし', desc: 'クライアント通話、会議、営業通話用。' },
      ]}
    />
  )
}
