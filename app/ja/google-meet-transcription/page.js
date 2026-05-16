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
  description: 'Google Meet録画を無料でテキストに文字起こし。Google DriveからエクスポートしたMP4で動作。登録不要、インストール不要。',
  alternates: { canonical: 'https://mictoo.com/ja/google-meet-transcription', languages: LANGS },
}

export default function JaGoogleMeetPage() {
  return (
    <LandingLayout
      badge="Google Meet · MP4 · 無料"
      h1={<>Google Meet 文字起こし<br /><span className="text-brand-600">Meet録画をテキストに変換</span></>}
      subtitle="Google MeetからエクスポートしたMP4をアップロードして、数秒で清書済みの文字起こしを取得。無料、登録不要。Googleのライブ字幕を整理された会議サマリーで補完します。"
      defaultLanguage="ja"
      features={[
        { icon: '🎬', title: 'MP4を直接サポート', desc: 'Google MeetはMP4でGoogle Driveに録画をエクスポートします。ファイルをダウンロードしてMictooにアップロードするだけ — 変換や抽出は不要です。' },
        { icon: '🧾', title: 'ライブ字幕より清潔', desc: 'Googleのライブ字幕は意味は捉えますが、句読点や名前を省きます。MictooはDocs、Notion、フォローアップメールに貼り付けられる洗練された文字起こしを作成します。' },
        { icon: '🔒', title: 'プライベート', desc: 'ファイルは処理後即座に削除されます。会議の音声も文字起こしも保存しません。' },
      ]}
      faq={[
        { q: 'Google Meetの録画をダウンロードするには?', a: 'Google Driveを開く → マイドライブ → Meet Recordings(自動作成されるフォルダ)。会議を見つけて⋮ → ダウンロードをクリック。ファイルはMP4です — そのままMictooにアップロードしてください。' },
        { q: 'Google Meetにライブ字幕があるのに、なぜMictooを使うのですか?', a: 'ライブ字幕は会議中には便利ですが、デフォルトでは保存されず、句読点や大文字小文字もありません。Mictooは共有や再利用にすぐ使える、洗練された編集可能な文字起こしを提供します。' },
        { q: 'スピーカーラベル(ホスト、ゲスト1など)を取得できますか?', a: '無料プランでは自動では取得できません。文字起こしは1つのテキストストリームです — ラベルはブラウザエディターで手動で追加できます。' },
        { q: 'Meet録画の最大長さは?', a: '1ファイルあたり最大25 MB。デフォルト品質のGoogle Meet MP4は30分あたり約50 MBです。制限内に収めるには、音声トラックの抽出(M4A)または動画の圧縮を検討してください。' },
        { q: 'Googleの「Take notes for me」機能と同じですか?', a: 'いいえ — Workspaceの「Take notes for me」機能はAI要約を生成するもので、忠実な文字起こしではありません。Mictooは一語一句のフル文字起こしを提供し、必要に応じて別途要約できます。' },
      ]}
      relatedLinks={[
        { href: '/ja/zoom-transcription', label: 'Zoom文字起こし' },
        { href: '/ja/meeting-transcription', label: '会議の文字起こし' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
