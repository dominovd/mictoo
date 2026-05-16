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
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: '会議の文字起こし — Zoom/Teams/Meet通話をテキストに | Mictoo',
  description: 'Zoom、Teams、Google Meetの会議録音を無料で文字起こし。MP4またはM4Aをアップロードして、トランスクリプト + AI要約を数秒で取得。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/meeting-transcription', languages: LANGS },
}

export default function JaMeetingPage() {
  return (
    <LandingLayout
      badge="Zoom · Teams · Meet · 無料"
      h1={<>会議の文字起こし<br /><span className="text-brand-600">通話をテキストに、無料で</span></>}
      subtitle="会議の録音(Zoom、Teams、Google Meet、または任意のMP4/M4A)をアップロードして、清書済みの文字起こしとアクションアイテム付きAI要約を取得。アカウント不要。"
      defaultLanguage="ja"
      features={[
        { icon: '🎥', title: 'すべてのプラットフォーム', desc: 'Zoom、Microsoft Teams、Google Meet、Webex、Loomなど、MP4またはM4Aをエクスポートするすべてのプラットフォームで動作します。' },
        { icon: '✨', title: 'AI要約 + アクション', desc: '文字起こし後、自動的に要約、要点、アクションアイテムを取得 — メールフォローアップにすぐ使えます。' },
        { icon: '🔒', title: 'プライベート', desc: '通話に参加するAIボットなし。あなたが録音し、アップロードし、コントロールします。ファイルは処理後即座に削除されます。' },
      ]}
      faq={[
        { q: 'Zoom会議を文字起こしするには?', a: 'Zoomで: 通話前にローカル録音またはクラウド録音を有効にします。会議後、MP4(または音声のみのM4A)をダウンロードして、ここにアップロードしてください。' },
        { q: 'Teams会議を文字起こしするには?', a: 'Microsoft TeamsはOneDriveまたはSharePointに録音を保存します。開いてダウンロードをクリックすると、MP4を取得できます — 直接Mictooにアップロードしてください。' },
        { q: 'Google Meet会議を文字起こしするには?', a: 'Google MeetはMP4でGoogle Drive(「Meet Recordings」フォルダ)にエクスポートします。ダウンロードしてここにアップロードしてください。' },
        { q: 'スピーカーラベルを自動で取得できますか?', a: '無料プランでは取得できません。文字起こしは1つのストリームです。ラベル(ホスト / 参加者1 / 参加者2)はブラウザエディターで手動で追加できます。' },
        { q: '会議の最大長さは?', a: '最大25 MB。30分以上の会議の場合は低ビットレートでエクスポートするか、音声トラックのみ(M4A)を抽出して制限内に収めてください。' },
      ]}
      relatedLinks={[
        { href: '/ja/zoom-transcription', label: 'Zoom文字起こし' },
        { href: '/ja/google-meet-transcription', label: 'Google Meet文字起こし' },
        { href: '/ja/teams-meeting-transcription', label: 'Teams文字起こし' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
