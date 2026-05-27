import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'pl': 'https://mictoo.com/pl/google-meet-transcription',
  'ja': 'https://mictoo.com/ja/google-meet-transcription',
  'ko': 'https://mictoo.com/ko/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Google Meet 文字起こし — Meet録画を無料で文字起こし | Mictoo',
  description:
    '無料Google Meet文字起こし。Driveからの録画(MP4またはM4A)をアップロードして、クリーンなAI文字起こしを数秒で取得。無料Google Workspaceで動作。',
  alternates: { canonical: 'https://mictoo.com/ja/google-meet-transcription', languages: LANGS },
}

export default function JaGoogleMeetPage() {
  return (
    <LandingLayout
      defaultLanguage="ja"
      badge="GOOGLE MEET · MP4 · 無料"
      h1={<>Google Meet 文字起こし<br /><span className="text-brand-600">Meet録画を文字起こし</span></>}
      subtitle="Google Meet録画をクリーンなテキストに変換。DriveのMP4をドロップして数秒で文字起こし。アカウント不要、分単位課金なし。"
      howItWorks={[
        { icon: '☁️', title: 'Google Driveからダウンロード', desc: 'Google Meet録画はDriveの「Meet Recordings」フォルダに保存。MP4としてダウンロード(右クリック、ダウンロード)。長い会議には先に音声を抽出してアップロード時間節約。' },
        { icon: '⚡', title: 'ファイルをドロップ', desc: 'MP4から音声を抽出してWhisper large-v3に送信。30分の会議は約1分で完了。' },
        { icon: '📋', title: '文字起こし取得', desc: 'ブラウザで読む、コピー、またはTXTかSRTでダウンロード。エクスポート前に誤った単語をインラインで修正。' },
      ]}
      whyUse={{ title: 'Google MeetにMictooを使う理由', bullets: [
        { title: '無料を含むあらゆるWorkspaceティアで動作', desc: 'Meet録画自体には有料ティアが必要ですが、ファイルがあれば、Workspaceティアに関係なく文字起こしは無料。' },
        { title: '非英語サポートがより良い', desc: 'Googleの文字起こしは歴史的に英語に最も強い。Whisper large-v3は自動検出で50以上の言語をカバーし、アクセント、バイリンガル会話、コードスイッチングで顕著に良い。' },
        { title: 'データはGoogleに戻らない', desc: '機密会議のために意識的にGoogleエコシステムロックインを避けているなら、ここで文字起こしすればテキストはGoogle Workspaceの外に保たれます。' },
        { title: 'SRTエクスポートはあらゆる動画エディタで動作', desc: 'Googleの文字起こしはテキストをDocsに提供。私たちのはPremiere、DaVinci、YouTube Studio用の準備済みクリーンなSRTをエクスポート。' },
        { title: 'プライバシー', desc: 'ファイルは文字起こしプロバイダにストリーミングされ、処理後に破棄。サーバーには何も書き込まれません。' },
      ]}}
      useCases={{ title: '人々がGoogle Meet録画を文字起こしする用途', items: [
        { title: '誰でも検索できる会議メモ', desc: 'Google DocsまたはNotionに文字起こしを貼り付け。未来のあなたはプロジェクトの14週目に何が決定されたかを覚えていません。検索可能なテキストが助けます。' },
        { title: '分散チームの非同期キャッチアップ', desc: 'ライブ会議を逃した他のタイムゾーンの人は、60分の録画を1.5倍速で見る代わりに数分で文字起こしを読みます。' },
        { title: 'クライアント通話のレビュー', desc: 'アカウントマネージャーは重要なクライアント通話を文字起こしし、CRMにテキストを保存。より速い思い出し、より良いハンドオフ。' },
        { title: 'ウェビナーとタウンホール文字起こし', desc: 'Meetで録画された大きなイベントでは、文字起こしがアクセシビリティと発見可能性のために(録画と一緒に)公開するものです。' },
        { title: '1対1とパフォーマンス会話(マネージャー向け)', desc: '一部のマネージャーはフォローアップ用のメモのために1対1を文字起こし。便利ですが、なぜかについて従業員に透明にしてください。' },
      ]}}
      proTips={{ title: 'Google Meet文字起こしのコツ', tips: [
        { title: 'アップロード前にMP4から音声を抽出', desc: 'Meet録画は720p動画で、文字起こしには無駄なバイト。音声のみ取得: ffmpeg -i meet.mp4 -vn -ac 1 -b:a 64k meet.mp3。1 GB MP4が25 MB以下に縮小。' },
        { title: 'MP4をダウンロード、ストリームしない', desc: 'Driveは時々ブラウザビューアでMP4を再生。ここにアップロードしようとする前に、実際にファイルをダウンロードしたことを確認。Drive共有リンクはファイルアップロードではありません。' },
        { title: '60分超の会議はアップロード前に分割', desc: '私たちの制限は登録で1ファイルあたり60分。最初に音声をチャンクに切る。文字起こしは後で再結合できます。' },
        { title: '可能なら会議中にバックグラウンドタブとアプリをミュート', desc: '会議で声の下で再生されるSpotifyトラックは、ランダムな単語として文字起こしに着地。通知音も同じ。録画後に修正できないこともあります。' },
        { title: '実物のマイクを使う、安いヘッドセットでも', desc: 'ノートPCの内蔵マイクはキーボードタイピング、ファンノイズ、部屋のエコーを拾う。1000円の有線USBヘッドセットは顕著にクリーンに文字起こしされる。' },
        { title: '共有録画では他の場所に再アップロードする前にDrive共有設定を確認', desc: '誰かがMeet録画を共有してくれた場合、外部使用のために文字起こしする前に、それで何ができるか二重チェック。' },
      ]}}
      faq={[
        { q: 'MictooはGoogle Meet録画で動作しますか?', a: 'はい。DriveのMeet RecordingsフォルダからMP4をダウンロードし、ここにアップロード。音声抽出(ffmpegまたは任意の音声ツールで)は長い会議でこれを高速化。' },
        { q: 'Google Workspaceの有料プランが必要ですか?', a: 'Meetを録画するために有料Workspaceプランが必要です。録画がDriveにあれば、ティアに関係なくここでの文字起こしは無料。' },
        { q: '録画はGoogleに戻りますか?', a: 'いいえ。ファイルは私たちの文字起こしプロバイダ(Groq、バックアップとしてOpenAI)に行き、処理後に破棄。Google、Googleサービスには何も戻りません。' },
        { q: 'Google内蔵文字起こしと比較してどうですか?', a: '私たちのは無料で、あらゆるWorkspaceティアで動作。Googleのはプランに含まれていて会議が英語なら便利。非英語、アクセント、バイリンガル会議には私たちのほうが正確。' },
        { q: 'Meet録画が60 MBを超えています。どうすれば?', a: 'ffmpegや音声ツールで音声のみ抽出。1 GB動画は通常30 MB未満の音声に。音声自体が60 MB超なら、チャンクに分割。' },
        { q: 'スピーカーラベルは取得できますか?', a: '自動的にはありません。Whisperはデフォルトでダイアライゼーションをしません。手動でラベルを追加する必要があります。4人会議で区別できる声があれば通常5分。' },
        { q: 'Meetチャットメッセージで動作しますか?', a: 'いいえ。チャットメッセージはGoogleによってMeet録画フォルダに別々に保存。音声のみを文字起こし。両方が必要なら自分で組み合わせ。' },
        { q: 'Google Meet文字起こしはどれくらい正確?', a: 'クリーンな音声(良いマイク、背景ノイズなし): 90〜95%。複数マイクまたはスピーカーフォンの会議室録音は80〜90%に低下。名前と専門用語は通常クリーンアップが必要。' },
        { q: 'Google Meetライブストリームを文字起こしできますか?', a: 'いいえ。録画されたファイルでのみ動作、ライブストリームではありません。ストリームが終了して録画がDriveに保存されたら、ダウンロードして文字起こしできます。' },
        { q: 'どの言語をサポートしていますか?', a: '自動検出で50以上の言語。5分未満の会議や非音声のイントロがあるファイルでは、より良い結果のために言語を手動で選択。' },
        { q: 'Google Docにエクスポートできますか?', a: 'プレーンテキスト(TXT)とSRTをエクスポート。コピーしてGoogle Docsに貼り付け。直接のDrive統合はまだありません。' },
        { q: '他のWorkspace組織からのMeet録画で動作しますか?', a: 'Driveからファイルをダウンロードするアクセスがあれば、はい。ファイルを単にMP4として扱います。起源を確認したり気にしたりしません。' },
      ]}
      relatedLinks={[
        { href: '/ja/zoom-transcription', label: 'Zoom文字起こし', desc: 'Zoom CloudまたはLocal Recordings用。' },
        { href: '/ja/teams-meeting-transcription', label: 'Teams文字起こし', desc: 'Microsoft Teams録画用。' },
        { href: '/ja/meeting-transcription', label: '会議文字起こし', desc: '他のプラットフォームからの録画用。' },
        { href: '/ja/transcribe-video-to-text', label: '動画をテキストに', desc: '一般動画テキストページ。' },
      ]}
    />
  )
}
