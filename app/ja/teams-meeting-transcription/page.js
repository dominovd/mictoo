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
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Microsoft Teams文字起こし — Teams録画を文字起こし | Mictoo',
  description: 'Microsoft Teams会議録画を無料でテキストに文字起こし。OneDriveまたはSharePointからのMP4で動作。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/teams-meeting-transcription', languages: LANGS },
}

export default function JaTeamsPage() {
  return (
    <LandingLayout
      badge="Microsoft Teams · MP4 · 無料"
      h1={<>Microsoft Teams文字起こし<br /><span className="text-brand-600">Teams会議をテキストに</span></>}
      subtitle="Microsoft Teams会議の録画を清書済みのテキスト文字起こしまたはSRT字幕ファイルに変換。無料、アカウント不要。OneDriveまたはSharePointのMP4で動作します。"
      defaultLanguage="ja"
      features={[
        { icon: '🏢', title: 'Teamsワークフローに最適', desc: 'OneDriveまたはSharePointから録画をダウンロード — 通常は会議チャット内の「Recordings」 — してMictooにアップロード。MP4はそのまま動作します。' },
        { icon: '📤', title: '共有可能な文字起こし', desc: '会議を見逃した参加者に共有するために、文字起こしをTeamsチャット、OneNote、Loopコンポーネントに貼り付けられます。' },
        { icon: '🌐', title: 'すべての会議言語', desc: '日本語、英語、スペイン語、フランス語、ドイツ語、イタリア語、オランダ語、中国語、韓国語など40以上の言語を文字起こし。言語は自動検出されます。' },
      ]}
      faq={[
        { q: 'Teamsは会議録画をどこに保存しますか?', a: 'ほとんどの組織で、Teamsは録画者のOneDrive(1:1 / グループチャット)またはチャネルのSharePointフォルダ(チャネル会議)に録画を保存します。録画を開いてダウンロードをクリックすると、MP4ファイルを取得できます。' },
        { q: 'Teamsにすでに文字起こしがありませんか?', a: 'Microsoft Teamsは管理者が有効にしている場合、組み込みのライブ文字起こしを提供しますが、ファイルはTeamsエコシステム内に残り、必ずしもダウンロードできるとは限りません。Mictooはどこでも使える持ち運び可能な.txtまたは.srtを提供します。' },
        { q: 'Teams動画用のSRT字幕を取得できますか?', a: 'はい。文字起こし後、タイムスタンプ付き.srtファイルをダウンロードして、YouTube、Vimeo、任意の動画エディターで字幕として使用できます。' },
        { q: '機密性の高い会議内容についてはどうですか?', a: 'Mictooはファイルを保存しません。音声は文字起こしのためにのみAIプロバイダーに送信され、即座に破棄されます。規制対象データを含む会議については、外部AIサービスに関する組織のポリシーを確認してください。' },
        { q: 'Teams録画の最大長さは?', a: '1ファイルあたり最大25 MB。30分を超える会議のほとんどのTeams MP4はこの制限を超えます — 音声を抽出(M4A)するか、動画コンプレッサーを使用してください。' },
      ]}
      relatedLinks={[
        { href: '/ja/zoom-transcription', label: 'Zoom文字起こし' },
        { href: '/ja/meeting-transcription', label: '会議の文字起こし' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
