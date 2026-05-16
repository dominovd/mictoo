import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'ko': 'https://mictoo.com/ko/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: 'ビジネス文字起こし — 会議、通話、インタビューをテキストに | Mictoo',
  description: '会議、顧客との通話、ユーザーインタビュー、製品デモのための無料ビジネス文字起こし。登録不要。音声または動画、最大25 MB。',
  alternates: { canonical: 'https://mictoo.com/ja/business-transcription', languages: LANGS },
}

export default function JaBusinessPage() {
  return (
    <LandingLayout
      badge="ビジネス · チーム · 無料"
      h1={<>ビジネス文字起こし<br /><span className="text-brand-600">会議、通話、インタビューをテキストに</span></>}
      subtitle="会議、顧客通話、ユーザーインタビュー、デモを清書済みの文字起こしに変換。Notion、Confluence、CRM、レポートにすぐ使えます。無料、アカウント不要。"
      defaultLanguage="ja"
      features={[
        { icon: '💼', title: 'ビジネスプロセス', desc: 'チーム会議、セールス通話、ユーザーリサーチ、候補者インタビュー — 音声を検索可能で共有可能なテキストに変換。' },
        { icon: '📊', title: 'AI要約付き', desc: '文字起こしに加えて、要点とアクションアイテム付きのAI要約を自動的に取得。レポートやCRMにすぐ貼り付け可能。' },
        { icon: '🔒', title: 'セキュリティとプライバシー', desc: 'ファイルは処理後即座に削除されます。音声や文字起こしをサーバーに保存することはありません。' },
      ]}
      faq={[
        { q: 'Mictooは機密性の高いビジネス会議に適していますか?', a: '規制対象のコンテンツ(GDPR機密データなど)については、外部AIサービスに関する社内ポリシーを確認してください。Mictooはファイルを保存しませんが、音声はAIプロバイダーを経由します。極めて機密性の高い音声には、オンプレミスソリューションを検討してください。' },
        { q: 'ZoomまたはTeamsの通話を文字起こしするには?', a: 'プラットフォーム内蔵機能で通話を録画し、MP4またはM4Aファイルをダウンロードして、Mictooにアップロードします。文字起こしと要約は数秒で完成します。' },
        { q: 'スピーカーラベル(ホスト、クライアントなど)を取得できますか?', a: '無料プランでは自動では取得できません。文字起こしは1つのテキストストリームです — ラベルはエクスポート前にブラウザエディターで手動で追加できます。' },
        { q: '多言語会議でも動作しますか?', a: 'Whisperは自動検出で50以上の言語に対応しています。会議が2つの言語を混在させている場合は、ファイルを分割して各部分を別々に文字起こしし、言語を手動で設定するのが最善です。' },
        { q: '時間制限は?', a: '1ファイルあたり最大25 MB。1時間以上の会議の場合は、低ビットレートのモノラルでエクスポートするか、録音を分割してください。how-to-compress-audioガイドで3つのアプローチを説明しています。' },
      ]}
      relatedLinks={[
        { href: '/ja/meeting-transcription', label: '会議の文字起こし' },
        { href: '/ja/zoom-transcription', label: 'Zoom文字起こし' },
        { href: '/ja/interview-transcription', label: 'インタビュー文字起こし' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
