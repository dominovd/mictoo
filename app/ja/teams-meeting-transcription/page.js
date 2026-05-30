import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
  'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
  'ko': 'https://mictoo.com/ko/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Microsoft Teams文字起こし — 会議を文字起こし | Mictoo',
  description:
    '無料Microsoft Teams文字起こし。OneDriveまたはSharePointからの録画(MP4)をアップロードして、クリーンなAI文字起こしを数秒で取得。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/teams-meeting-transcription', languages: LANGS },

  openGraph: {
    title: "Microsoft Teams文字起こし — 会議を文字起こし | Mictoo",
    description: "無料Microsoft Teams文字起こし。OneDriveまたはSharePointからの録画(MP4)をアップロードして、クリーンなAI文字起こしを数秒で取得。登録不要。",
    url: "https://mictoo.com/ja/teams-meeting-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microsoft Teams文字起こし — 会議を文字起こし | Mictoo",
    description: "無料Microsoft Teams文字起こし。OneDriveまたはSharePointからの録画(MP4)をアップロードして、クリーンなAI文字起こしを数秒で取得。登録不要。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaTeamsPage() {
  return (
    <LandingLayout
      defaultLanguage="ja"
      badge="TEAMS · ONEDRIVE · 無料"
      h1={<>Microsoft Teams文字起こし<br /><span className="text-brand-600">無料Teams会議文字起こし</span></>}
      subtitle="Teams録画をクリーンなテキストに変換。OneDriveまたはSharePointからMP4をドロップして、数秒で文字起こし。アカウント不要、分単位課金なし。"
      howItWorks={[
        { icon: '☁️', title: 'OneDriveまたはSharePointからダウンロード', desc: 'Teams録画は主催者のOneDrive(チャネル外会議)またはSharePointサイト(チャネル会議)に保存。MP4としてダウンロード。長い会議には先に音声を抽出。' },
        { icon: '⚡', title: 'ファイルをドロップ', desc: 'MP4から音声を抽出してWhisper large-v3に送信。30分の会議は約1分で完了。' },
        { icon: '📋', title: '文字起こし取得', desc: 'ブラウザで読む、コピー、またはTXTかSRTでダウンロード。エクスポート前に誤った名前や専門用語をインラインで修正。' },
      ]}
      whyUse={{ title: 'Teams会議にMictooを使う理由', bullets: [
        { title: '文字起こし用の特定Microsoft 365ライセンスエントリーなしで動作', desc: '録画ファイルがあれば、ここで文字起こしできます。Teams Premiumや特定のOfficeプランは不要。' },
        { title: 'より強い非英語とアクセントカバレッジ', desc: 'Microsoft Teams文字起こしは英語と主要西欧言語でうまく動作。Whisper large-v3は50以上の言語をカバーし、アクセントとバイリンガル会話のより強い扱い。' },
        { title: '無料、分カウンターなし', desc: 'Teams文字起こしはライセンスに組み込まれていますが、機能ゲートで制限。Mictooには会議制限も月間分制限もありません。' },
        { title: '動画エディタ向けSRTエクスポート', desc: 'Teams文字起こしはTeamsアプリ内に存在するか、VTTとしてダウンロード。私たちは両方をエクスポート、TXTとクリーンなSRT、Premiere、DaVinci、CapCut、YouTube Studioとドロップイン互換。' },
        { title: 'デフォルトでプライバシー', desc: 'ファイルは文字起こしプロバイダにストリーミングされ、処理されて破棄。会議音声を保持しません。' },
      ]}}
      useCases={{ title: '人々がTeams会議を文字起こしする用途', items: [
        { title: 'プロジェクト会議議事録', desc: 'Confluence、Notion、またはSharePointページに文字起こしを貼り付け。会議を逃した人は60分の動画ではなく5分でテキストを読む。' },
        { title: 'アカウントチームのクライアント通話レビュー', desc: 'Salesforce、Dynamics、HubSpotのディール横に文字起こしを保存。フォローアップメール用の引用検索は数秒。' },
        { title: 'クロスファンクショナル決定ログ', desc: 'Teams通話からの大きな決定が文字起こしで要約。ガバナンスと監査証跡に便利。' },
        { title: 'ベンダーと請負業者通話', desc: 'プロジェクトが外部関係者を含む時、文字起こしは合意されたことの曖昧でない記録。' },
        { title: 'コンプライアンスと規制業界', desc: '一部の業界では特定の会話の記録が必要。文字起こしは音声録音を検索可能でインデックス可能にします。' },
      ]}}
      proTips={{ title: 'Teams文字起こしのコツ', tips: [
        { title: 'アップロード前にMP4から音声を抽出', desc: 'Teams MP4は720pまたは1080p動画で、文字起こしには無関係。音声のみ取得: ffmpeg -i teams.mp4 -vn -ac 1 -b:a 64k teams.mp3。1.5 GB MP4が30 MB以下に縮小。' },
        { title: 'OneDriveまたはSharePointからダウンロード、ストリームしない', desc: 'OneDriveは時々ブラウザでMP4を再生。ここにアップロードする前に実際にファイルをダウンロードしたことを確認。SharePoint共有リンクはファイル自体と同じではありません。' },
        { title: '60分超の会議はアップロード前に分割', desc: '30分か45分のチャンクに切る。文字起こしは再結合可能。長いTeams通話は一般的で、慎重に扱う価値あり。' },
        { title: '可能なら会議中にバックグラウンド通知をミュート', desc: '通話中のOutlookデスクトップ通知とTeamsチャット音は音声に着地し、時々文字起こしにも。WindowsのFocus AssistまたはMacの「邪魔しない」を使用。' },
        { title: '会議室マイクはクリーンアップが必要', desc: '天井マイクのTeams Roomsは音声品質が変動。エコーと遠距離フィールド録音が精度を傷つける。Adobe Podcast Enhance(無料Web)はこれらの録音でアップロード前に助ける。' },
        { title: '機密会議は外部にアップロードしない', desc: '私たちにも。HR、法的、または取締役会話には、オンプレミス文字起こしを優先。私たちのサービスはクラウドAI処理が許容される非機密会議用。' },
      ]}}
      faq={[
        { q: 'MictooはMicrosoft Teams録画で動作しますか?', a: 'はい。OneDrive(チャネル外会議用の主催者のOneDrive)またはチャネルSharePointサイトからMP4をダウンロード。ここにアップロード。音声抽出を先にすると長い会議が速くなる。' },
        { q: 'Teams Premiumや特定のMicrosoft 365プランが必要ですか?', a: '会議を録画させるプランが必要。録画がOneDriveまたはSharePointにあれば、ここでの文字起こしはライセンスに関係なく無料。' },
        { q: '録画はMicrosoftに戻りますか?', a: 'いいえ。ファイルは文字起こしプロバイダ(Groq、バックアップとしてOpenAI)に行き、処理後に破棄。Microsoft、Outlook、Microsoftサービスには何も戻りません。' },
        { q: 'Teams内蔵文字起こしと比較してどうですか?', a: 'Teams文字起こしはライセンスに含まれていれば英語会議には大丈夫。私たちのは無料で、より多くの言語とアクセントで動作し、動画エディタ用にクリーンなSRTをエクスポート。会議に合うものを使用。' },
        { q: 'Teams録画が60 MBを超えています。どうすれば?', a: 'ffmpegや音声ツールで音声のみ抽出。1.5 GB Teams MP4は音声として30 MB以下に。音声がまだ60 MB超なら、チャンクに分割。' },
        { q: 'スピーカーラベルは取得できますか?', a: '自動的にはありません。区別できる声の会議では、会話に基づいて手動でラベルを追加できます。スピーカーごとに別々の音声トラックで録画された会議(Teamsでは稀)では、クリーンな帰属のために各トラックを別々にアップロード。' },
        { q: 'Teamsチャットメッセージで動作しますか?', a: 'いいえ。チャットメッセージはTeams内に残る。音声のみ文字起こし。両方が必要なら自分で組み合わせ。' },
        { q: 'Teams文字起こしはどれくらい正確?', a: '良いマイクの会議(USBヘッドセットのノートPC): 90〜95%。天井マイクの会議室会議: 80〜90%。名前、専門用語、頭字語は通常クリーンアップが必要。' },
        { q: 'Teams会議をリアルタイムで文字起こしできますか?', a: 'いいえ。録画されたファイルで動作。会議中のリアルタイムにはTeamsの内蔵ライブキャプションまたはTranscript機能を使用。' },
        { q: 'どの言語をサポートしていますか?', a: '自動検出で50以上の言語。5分未満の会議や非音声のイントロ(待機室音楽、ホールド音)があるファイルでは、言語を手動で選んでください。' },
        { q: '文字起こしをWord文書またはOneDriveにエクスポートできますか?', a: 'プレーンテキスト(TXT)とSRTをエクスポート。コピーしてWordに貼り付けるか、TXTを自分でOneDriveにアップロード。Microsoft 365統合はまだありません。' },
        { q: 'ヨーロッパのTeams会議でGDPR準拠ですか?', a: 'サイトを離れた後、音声や文字起こしをサーバーに保存しません。私たちはヨーロッパにあり、プロバイダ(Groq US、OpenAI US)はDPAに署名しています。特定のコンプライアンス質問にはプライバシーポリシーを参照するか、info@mictoo.comに書いてください。' },
      ]}
      relatedLinks={[
        { href: '/ja/zoom-transcription', label: 'Zoom文字起こし', desc: 'Zoom CloudまたはLocal Recordings用。' },
        { href: '/ja/google-meet-transcription', label: 'Google Meet文字起こし', desc: 'Google Meet録画用。' },
        { href: '/ja/meeting-transcription', label: '会議文字起こし', desc: '他のプラットフォームからの録画用。' },
        { href: '/ja/business-transcription', label: 'ビジネス文字起こし', desc: '営業通話、インタビュー、その他のビジネス音声用。' },
      ]}
    />
  )
}
