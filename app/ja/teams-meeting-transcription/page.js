import UseCaseLayout from '@/components/UseCaseLayout'

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
  title: 'MP4録画からのTeams会議の文字起こし | Mictoo',
  description:
    'OneDriveまたはSharePointからMicrosoft TeamsのMP4をアップロードし、タイムスタンプ付きの文字起こし、AI要約、エクスポートファイルを取得します。',
  alternates: {
    canonical: 'https://mictoo.com/ja/teams-meeting-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'MP4からのTeams会議の文字起こし | Mictoo',
    description: 'OneDriveまたはSharePointからTeamsの録画をドロップし、テキスト、要約、エクスポートを取得します。',
    url: 'https://mictoo.com/ja/teams-meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teams会議の文字起こし',
    description: 'OneDriveまたはSharePointからMP4をアップロードし、文字起こしを取得します。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaTeamsMeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ja"
      badge="Teams · OneDrive / SharePoint · M365 · 無料"
      h1First="Teams会議の文字起こし"
      h1Second="OneDriveまたはSharePointのMP4からテキストへ"
      subtitle="アクセス許可のあるTeamsの録画をダウンロードし、MP4をアップロードしてタイムスタンプ付きの文字起こし、AI要約、エクスポートを取得します。録画の可用性は、Microsoft 365ライセンスと組織のポリシーによります。"
      currentHref="/ja/teams-meeting-transcription"

      platforms={[
        { name: 'OneDrive',    iconKey: 'videoCameraFill', brandBg: '#0364B8' },
        { name: 'SharePoint',  iconKey: 'videoCameraFill', brandBg: '#036C70' },
        { name: 'Channel MP4', iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/ja/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/ja/google-meet-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/ja/meeting-transcription' },
      ]}

      howItWorksTitle="Teams会議の文字起こしの仕組み"
      steps={[
        {
          icon: 'folder',
          title: '録画を見つける',
          desc: 'プライベート会議: OneDrive › マイファイル › 録画。チャンネル会議: チャンネルのSharePointサイト。',
        },
        {
          icon: 'upload',
          title: 'ここにMP4をドロップ',
          desc: 'OneDriveまたはSharePointからダウンロードし、ドラッグします。60MBを超える場合は、音声を抽出するか、サインインして自動分割を行います。',
        },
        {
          icon: 'editPen',
          title: '文字起こし、要約、エクスポート',
          desc: 'タイムスタンプ付きの文字起こし、AI要約、TXT/SRT/VTT/DOCX。30分のTeamsコールは約1分で完了します。',
        },
      ]}

      exampleTitle="Teams会議の文字起こしの例"
      exampleFileName="teams-channel-meeting.mp4"
      exampleDurationLabel="41:08"
      exampleLines={[
        { t: '0:00',  line: 'はい、スプリントレビューへようこそ。出荷されたもの、出荷されなかったもの、そしてその理由を説明します。' },
        { t: '0:11',  line: '支払いチームは火曜日に新しい返金フローを出荷しました。採用率は期待を上回り、約40％の対象チケットです。' },
        { t: '0:24',  line: '検索チームは予想以上に長いインデックスパイプラインに直面しました。出荷は次のスプリントに持ち越されました。' },
        { t: '0:35',  line: 'それは問題ありませんが、顧客成功チームに遅延を伝える必要があります。そうすれば、期待を管理できます。' },
        { t: '0:47',  line: '今日、共有チャンネルに修正されたタイムラインと理由を記載したメモを送ります。' },
        { t: '0:58',  line: '第三に、モバイルのクラッシュ率がわずかに上昇しました。SLA内ですが、このスプリント中は注意が必要です。' },
        { t: '1:09',  line: 'デバイステームはすでに対応しています。水曜日までに根本原因を特定し、スプリントの終わりまでに修正を行う予定です。' },
      ]}
      summaryPoints={[
        '返金フローは火曜日に出荷され、40％の採用率。',
        '検索チームは1スプリント遅延（インデックスパイプライン）。',
        'モバイルのクラッシュ率は上昇しましたが、SLA内です。',
        '水曜日までにモバイルのクラッシュの根本原因を特定します。',
      ]}
      actionItems={[
        '顧客成功チャンネルに遅延通知を送信',
        'モバイルクラッシュの根本原因を調査（水曜日）',
        '検索チームの新しい出荷日を確認',
      ]}

      whyTitle="Teamsの録画にMictooを選ぶ理由"
      whyCards={[
        {
          icon: 'folder',
          title: 'ダウンロードした録画で動作',
          desc: 'OneDriveまたはチャンネルのSharePointサイトからダウンロードする権限のあるMP4を使用します。',
        },
        {
          icon: 'target',
          title: '名前と用語を確認',
          desc: 'タイムスタンプ付きの出力により、製品名、略語、専門用語を見つけて修正しやすくなります。',
        },
        {
          icon: 'sparkles',
          title: '文字起こしと一緒に要約',
          desc: '要約のドラフトを生成し、共有する前に完全なテキストの横に置いておきます。',
        },
        {
          icon: 'globe',
          title: '異なる言語の録画を翻訳',
          desc: 'ある言語での録画、別の言語での要約が必要です。ワンクリックで50以上の言語に対応。',
        },
      ]}

      scenariosTitle="一般的なTeamsのシナリオ"
      scenarios={[
        { icon: 'chat',      title: 'スプリントレビュー' },
        { icon: 'briefcase', title: 'ボード同期' },
        { icon: 'users',     title: 'スタンドアップ' },
        { icon: 'target',    title: 'OKRレビュー' },
        { icon: 'headset',   title: 'サポートエスカレーション' },
        { icon: 'globe',     title: '国際電話' },
      ]}

      tipsTitle="Teamsの録画に関するヒント"
      tips={[
        'プライベート会議はOneDrive（主催者のアカウント）に保存されます。',
        'チャンネル会議はチャンネルのSharePointサイトに保存されます。',
        'GCC / エンタープライズテナントはダウンロードを制限する場合があります: ITに確認してください。',
        '長時間の会議の場合は、ffmpegを使用して音声を抽出し、ファイルを縮小します。',
      ]}

      guidesTitle="他の会議プラットフォーム"
      guides={[
        { href: '/ja/zoom-transcription',        icon: 'video', title: 'Zoom',        desc: 'クラウド + ローカル + M4A' },
        { href: '/ja/google-meet-transcription', icon: 'video', title: 'Google Meet', desc: 'ワークスペース + 無料' },
        { href: '/ja/meeting-transcription',     icon: 'video', title: 'Meeting hub', desc: '任意のプラットフォーム、1回のアップロード' },
        { href: '/ja/business-transcription',    icon: 'briefcase', title: 'ビジネス', desc: '承認された内部録画' },
      ]}

      faq={[
        {
          q: 'Teamsの録画はどこに保存されますか？',
          a: 'プライベート会議: 主催者のOneDriveのマイファイル › 録画。チャンネル会議: そのチャンネルを支えるSharePointサイトのドキュメント内のチャンネルフォルダ。',
        },
        {
          q: '録画をアップロードするのにTeams Premiumは必要ですか？',
          a: 'Mictooは、Teamsアカウントに接続するのではなく、ダウンロードしたメディアファイルを処理します。録画、文字起こし、またはTeams内でのダウンロードの能力は、Microsoft 365ライセンス、会議の役割、組織のポリシーによります。',
        },
        {
          q: 'Teamsの文字起こしを使用すべきですか、それとも録画をアップロードすべきですか？',
          a: '利用可能でニーズを満たす場合は、Teamsの文字起こしを使用してください。Mictooのエクスポート、翻訳、またはレビュー用の追加の文字起こしが必要な場合は、録画をアップロードすることが有用です。録画によって精度は異なります。',
        },
        {
          q: '私のTeams MP4は60MBを超えています。どうすればいいですか？',
          a: '音声を抽出します: ffmpeg -i teams.mp4 -vn -ac 1 -ar 16000 audio.m4a。または、約3時間までのファイルの自動分割のためにサインインします。',
        },
        {
          q: 'GCC / エンタープライズテナントでMictooを使用できますか？',
          a: '一部のエンタープライズおよび政府のテナントは、ダウンロードや外部処理を制限しています。組織のポリシーに従い、ダウンロードまたは会議メディアのアップロード前にITまたは録画の所有者に確認してください。',
        },
        {
          q: 'MictooはTeamsの話者を特定しますか？',
          a: 'いいえ。現在の文字起こしは、行ごとのタイムスタンプ付きの連続テキストであり、自動話者ラベルはありません。',
        },
        {
          q: 'Teamsの録画はあなたのサーバーに保存されますか？',
          a: 'いいえ。ファイルは文字起こしプロバイダーにストリーミングされ、一度処理されて削除されます。サインインしたアカウントには文字起こしのみが残ります。',
        },
      ]}

      ctaHeadline="Teamsの会議をクリーンなテキストに変換"
      ctaSubtitle="承認されたOneDriveまたはSharePointの録画をアップロードし、テキスト、要約、エクスポートを取得します。"
      ctaButton="Teamsの録画をアップロード"

      relatedLinks={[
        { href: '/ja/meeting-transcription',       label: '会議の文字起こし' },
        { href: '/ja/zoom-transcription',          label: 'Zoomの文字起こし' },
        { href: '/ja/google-meet-transcription',   label: 'Google Meetの文字起こし' },
        { href: '/ja/business-transcription',      label: 'ビジネスの文字起こし' },
        { href: '/ja/webinar-transcription',       label: 'ウェビナーの文字起こし' },
      ]}
    />
  )
}