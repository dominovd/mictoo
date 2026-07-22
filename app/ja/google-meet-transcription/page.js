import UseCaseLayout from '@/components/UseCaseLayout'

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
  title: 'Google Meetの録音をテキストに変換 | Mictoo',
  description:
    'Driveまたはローカルのスクリーンキャプチャから認可されたGoogle Meetの録音をアップロードし、トランスクリプト、AI要約、エクスポートを取得します。',
  alternates: {
    canonical: 'https://mictoo.com/ja/google-meet-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Google Meetのトランスクリプション: ワークスペースまたは無料アカウント | Mictoo',
    description: 'Driveからの録音または無料Meetのスクリーンキャプチャ。どちらでも動作します。',
    url: 'https://mictoo.com/ja/google-meet-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Meetのトランスクリプション',
    description: 'どのアカウントティアでも、1つのアップロードページ。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaGoogleMeetTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ja"
      badge="Google Meet · Driveまたはローカルキャプチャ · 無料"
      h1First="Google Meetのトランスクリプション"
      h1Second="Driveの録音とローカルキャプチャをテキストに変換"
      subtitle="DriveからのGoogle Meetの録音または認可されたローカルキャプチャをアップロードします。録音の可用性はホストのワークスペースエディション、権限、および管理者設定に依存します。"
      currentHref="/ja/google-meet-transcription"

      platforms={[
        { name: 'Meet MP4',    iconKey: 'videoCameraFill', brandBg: '#00832D' },
        { name: 'QuickTime',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'OBS',         iconKey: 'videoCameraFill', brandBg: '#302E31' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/ja/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/ja/teams-meeting-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/ja/meeting-transcription' },
      ]}

      howItWorksTitle="Google Meetのトランスクリプションの仕組み"
      steps={[
        {
          icon: 'folder',
          title: '録音を取得',
          desc: '対象のワークスペース録音: Drive › マイドライブ › Meetの録音。そうでない場合は、参加者の同意ルールに従った認可されたローカルキャプチャを使用してください。',
        },
        {
          icon: 'upload',
          title: 'ここにファイルをドロップ',
          desc: 'MP4またはM4Aの両方が動作します。大きなMP4の場合は、最初にffmpegで音声を抽出するか、サインインして自動分割を行ってください。',
        },
        {
          icon: 'editPen',
          title: 'トランスクリプト、要約、エクスポート',
          desc: 'タイムスタンプ付きのトランスクリプト、AI要約、およびTXT/SRT/VTT/DOCXエクスポートを取得します。処理時間は、長さとファイルサイズに依存します。',
        },
      ]}

      exampleTitle="Google Meetのトランスクリプトの例"
      exampleFileName="meet-recording.mp4"
      exampleDurationLabel="27分45秒"
      exampleLines={[
        { t: '0:00',  line: '皆さん、参加してくれてありがとう。来週のオフサイトに入る前に、Q3のローンチプランについて簡単に同期しましょう。' },
        { t: '0:10',  line: 'マーケティングはランディングページのコピーを最終決定しました。エンジニアリングは金曜日の機能凍結に向けて順調です。' },
        { t: '0:22',  line: 'サポートドキュメントがリスク項目です。私たちは約3日遅れており、ローンチ前に追いつく必要があります。' },
        { t: '0:33',  line: '今週、アナをオンボーディングドキュメントからシフトさせることができます。それでギャップを回復できるはずです。' },
        { t: '0:44',  line: '素晴らしい。次のトピックは、私たちが話し合った価格ページの変更です。出荷する前に懸念がある人はいますか。' },
        { t: '0:56',  line: '私が指摘したいのは、エンタープライズティアのフレーミングです。価格帯に対して少し薄いと感じます。' },
        { t: '1:08',  line: '公平なポイントです。そのセクションを今週再訪し、金曜日に改訂版を共有します。' },
      ]}
      summaryPoints={[
        'Q3のローンチは順調、金曜日に機能凍結。',
        'サポートドキュメントは3日遅れ（リスク）。',
        'アナがドキュメントのギャップを埋めるために再割り当て。',
        'エンタープライズティアのフレーミングは改訂が必要。',
      ]}
      actionItems={[
        '今週アナをサポートドキュメントに再割り当て',
        '金曜日までにエンタープライズティアのフレーミングを改訂',
        '金曜日のスタンドアップで機能凍結を確認',
      ]}

      whyTitle="Google MeetのトランスクリプションにMictooを選ぶ理由"
      whyCards={[
        {
          icon: 'lock',
          title: 'メディアファイルで動作',
          desc: 'GoogleアカウントにMictooを接続せずに、Driveの録音または認可されたローカルキャプチャをアップロードできます。',
        },
        {
          icon: 'target',
          title: 'レビュー用のタイムスタンプ付きテキスト',
          desc: '録音に対して名前や技術用語を確認し、必要な形式で修正されたトランスクリプトをエクスポートします。',
        },
        {
          icon: 'sparkles',
          title: 'AI要約が常に含まれます',
          desc: 'ワークスペースのAIトランスクリプト要約は別途有料機能です。私たちのものはすべてのトランスクリプトにバンドルされています。',
        },
        {
          icon: 'globe',
          title: '50以上の言語に翻訳',
          desc: '翻訳ベンダーなしでの多言語会議の要約。',
        },
      ]}

      scenariosTitle="一般的なMeetのシナリオ"
      scenarios={[
        { icon: 'chat',      title: 'スタンドアップ / 同期' },
        { icon: 'briefcase', title: 'クライアントレビュー' },
        { icon: 'search',    title: 'ユーザーインタビュー' },
        { icon: 'users',     title: '全体会議' },
        { icon: 'headset',   title: 'サポートコール' },
        { icon: 'globe',     title: '多言語' },
      ]}

      tipsTitle="Google Meetの録音のヒント"
      tips={[
        'ワークスペースのMeet録音はDrive › Meetの録音に保存されます。',
        '無料ティア: QuickTime（Mac）またはOBS（Win/Linux）が適しています。',
        '大きなMP4? 音声を抽出: ffmpeg -i meet.mp4 -vn -ac 1 -ar 16000 audio.m4a。',
        '長い会議の自動分割のためにサインインしてください。',
      ]}

      guidesTitle="他の会議プラットフォーム"
      guides={[
        { href: '/ja/zoom-transcription',          icon: 'video', title: 'Zoom',           desc: 'クラウド + ローカル + M4A' },
        { href: '/ja/teams-meeting-transcription', icon: 'video', title: 'MS Teams',       desc: 'OneDrive + SharePointパス' },
        { href: '/ja/meeting-transcription',       icon: 'video', title: 'Meeting hub',    desc: 'どのプラットフォームでも、1つのアップロード' },
        { href: '/ja/webinar-transcription',       icon: 'monitor', title: 'ウェビナー',     desc: 'ON24, Demio, StreamYard' },
      ]}

      faq={[
        {
          q: 'Meetコールを録音するためにGoogle Workspaceは必要ですか？',
          a: 'Googleの録音の可用性はホストアカウントのエディション、会議の役割、管理者設定、および権限に依存します。対象の録音はDriveに保存されます。ローカルキャプチャを行う場合は、必要な参加者の同意を得て、適用されるポリシーに従ってください。',
        },
        {
          q: 'WorkspaceのMeet録音はどこに保存されますか？',
          a: '会議の主催者のDriveに: マイドライブ › Meetの録音。MP4は通常、会議終了後数分以内に表示されます。準備ができたら、メール通知が送信されます。',
        },
        {
          q: 'Meetのトランスクリプトを使用するべきですか、それとも録音をアップロードするべきですか？',
          a: 'Meetのトランスクリプトが利用可能でニーズを満たす場合は、それを使用してください。メディアをアップロードすることは、Mictooのエクスポート、翻訳、またはレビュー用の追加トランスクリプトを希望する場合に便利です。音声によって精度は異なります。',
        },
        {
          q: '私のMeet録音は60 MBを超えています。どうすればいいですか？',
          a: '音声のみを抽出: ffmpeg -i meet.mp4 -vn -ac 1 -ar 16000 audio.m4a。あるいは、約3時間までの長いファイルの自動分割のためにサインインしてください。',
        },
        {
          q: 'MeetコールのAI要約を取得できますか？',
          a: 'はい。AI要約はトランスクリプトと一緒に自動的に表示されます。要約メールやフォローアップドキュメントのためのしっかりした初稿です。',
        },
        {
          q: 'MictooはMeetで誰が話しているかを特定しますか？',
          a: 'いいえ。現在のトランスクリプトは、行ごとのタイムスタンプ付きの連続テキストであり、自動スピーカーレベルはありません。',
        },
        {
          q: 'Meetの録音はあなたのサーバーに保存されますか？',
          a: 'いいえ。音声はトランスクリプションプロバイダーにストリーミングされ、一度処理されて削除されます。サインインしたアカウントにはトランスクリプトのみが残ります。',
        },
      ]}

      ctaHeadline="Meetコールをクリーンなテキストに変換"
      ctaSubtitle="認可されたDriveの録音またはローカルキャプチャをアップロードして、テキスト、要約、エクスポートを取得します。"
      ctaButton="Meet録音をアップロード"

      relatedLinks={[
        { href: '/ja/meeting-transcription',       label: 'ミーティングトランスクリプション' },
        { href: '/ja/zoom-transcription',          label: 'Zoomトランスクリプション' },
        { href: '/ja/teams-meeting-transcription', label: 'Teamsトランスクリプション' },
        { href: '/ja/webinar-transcription',       label: 'ウェビナートランスクリプション' },
        { href: '/ja/business-transcription',      label: 'ビジネストランスクリプション' },
      ]}
    />
  )
}