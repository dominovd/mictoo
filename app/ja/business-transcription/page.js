import UseCaseLayout from '@/components/UseCaseLayout'

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
  title: 'ビジネス会議の文字起こしとAI要約 | Mictoo',
  description:
    '承認された内部会議の録音をタイムスタンプ付きの文字起こし、AI要約、エクスポート可能な要約文書に変換します。',
  alternates: {
    canonical: 'https://mictoo.com/ja/business-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'ビジネスの文字起こし: 内部会議からテキストへ | Mictoo',
    description: 'IT設定なしで内部会社会議を文字起こしします。',
    url: 'https://mictoo.com/ja/business-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ビジネスの文字起こし',
    description: '創業者の1対1、全体会議、役員ブリーフィング。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaBusinessTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ja"
      badge="創業者 · 役員 · 小規模チーム · 無料"
      h1First="ビジネスの文字起こし"
      h1Second="創業者の1対1、全体会議、役員ブリーフィング"
      subtitle="承認された内部会議のための実用的な文字起こしツールです。録音をアップロードし、文字起こしとAI要約を確認し、チームのために要約をエクスポートします。"
      currentHref="/ja/business-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/ja/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/ja/teams-meeting-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/ja/google-meet-transcription' },
        { name: 'Webex',       iconKey: 'videoCameraFill', brandBg: '#0F1F35' },
        { name: 'BlueJeans',   iconKey: 'videoCameraFill', brandBg: '#005EB8' },
        { name: 'GoToMeeting', iconKey: 'videoCameraFill', brandBg: '#F68B1F' },
      ]}

      howItWorksTitle="ビジネスの文字起こしの仕組み"
      steps={[
        {
          icon: 'folder',
          title: '録音をエクスポート',
          desc: 'Zoom、Teams、Meet、Webex、または会社が使用するもので。MP4またはM4Aの音声のみのファイルが両方とも対応しています。',
        },
        {
          icon: 'upload',
          title: 'ファイルをここにドロップ',
          desc: '組織が処理を許可する録音をアップロードします。ソフトウェアのインストールやディレクトリ統合は必要ありません。',
        },
        {
          icon: 'editPen',
          title: '文字起こし、要約、アクションアイテム',
          desc: 'タイムスタンプ付きの文字起こし、AI要約、要約メール用に準備されたDOCXエクスポート。',
        },
      ]}

      exampleTitle="ビジネス会議の文字起こしの例"
      exampleFileName="q3-strategy-session.mp4"
      exampleDurationLabel="58分42秒"
      exampleLines={[
        { t: '0:00',  line: '皆さん、時間を作っていただきありがとうございます。これは私たちのQ3戦略チェックインで、約1時間のブロックがあります。' },
        { t: '0:10',  line: 'まずはトップラインの更新から始めます。収益は計画の8パーセント上回っています。主に中規模市場の拡大からです。' },
        { t: '0:22',  line: '新しいエンタープライズの動きは、私たちが予測したよりも遅れています。2件の契約がQ2からQ3にずれ込みました。' },
        { t: '0:35',  line: '今四半期に中規模市場に注力するか、エンタープライズの準備を進めるかを議論する必要があります。' },
        { t: '0:48',  line: '私の意見では、中規模市場は機能しており、エンタープライズセグメントを追いかけることでチームを混乱させるべきではありません。' },
        { t: '1:02',  line: '同意します。Q3の終わりまでに30の新しい中規模市場のアカウントを目標に設定し、Q4の計画でエンタープライズを再検討しましょう。' },
        { t: '1:14',  line: 'まとめる前にもう1つのトピックがあります。同じ四半期のエンジニアリングロードマップで、これらの顧客のコミットメントに結びつけます。' },
      ]}
      summaryPoints={[
        '収益は計画の8%上回り、中規模市場によって推進されています。',
        'エンタープライズの動きが遅れており（2件の契約がQ2からQ3に移動）。',
        '決定: 今四半期は中規模市場に注力します。',
        '目標: Q3の終わりまでに30の新しい中規模市場のアカウント。',
      ]}
      actionItems={[
        '30アカウントの中規模市場目標を設定',
        'Q4の計画でエンタープライズの動きを再検討',
        '顧客のコミットメントに合わせてエンジニアリングロードマップを調整',
      ]}

      whyTitle="ビジネスの文字起こしにMictooを選ぶ理由"
      whyCards={[
        {
          icon: 'lock',
          title: 'ソフトウェアのインストール不要',
          desc: 'ブラウザのワークフローはデスクトップクライアントやディレクトリ統合を必要としません。組織のポリシーは引き続き適用されます。',
        },
        {
          icon: 'sparkles',
          title: '要約メール用の準備が整った要約',
          desc: 'AI要約は数秒で要約のドラフトを提供します。すでにコミットした内容を削除し、エスカレーションが必要なものを保持します。',
        },
        {
          icon: 'shield',
          title: '録音は保存されません',
          desc: '音声は文字起こしプロバイダーにストリーミングされ、処理後にメモリから削除されます。文字起こしのみがサインインしたアカウントに残ります。',
        },
        {
          icon: 'globe',
          title: '国際チーム向けに翻訳',
          desc: '英語で会議を行っているが、要約をドイツの子会社に送る必要がありますか？ワンクリックです。',
        },
      ]}

      scenariosTitle="一般的なビジネスシナリオ"
      scenarios={[
        { icon: 'briefcase', title: '役員ブリーフィング' },
        { icon: 'users',     title: '全体会議' },
        { icon: 'chat',      title: '創業者の1対1' },
        { icon: 'target',    title: '戦略オフサイト' },
        { icon: 'search',    title: '取締役会の更新' },
        { icon: 'headset',   title: '顧客のエスカレーション' },
      ]}

      tipsTitle="内部録音のためのヒント"
      tips={[
        'プラットフォームが提供する場合、音声のみのエクスポートを優先してください。',
        '60 MBを超える会議ビデオMP4の場合、最初にffmpegで音声を抽出してください。',
        '多言語のリーダーシップコールには自動検出を使用してください。',
        '検索可能なアーカイブを構築するために、文字起こしを履歴に保存してください。',
      ]}

      guidesTitle="適切なプラットフォームガイドを選ぶ"
      guides={[
        { href: '/ja/zoom-transcription',          icon: 'video', title: 'Zoom',        desc: 'クラウド録音、M4A音声のみ' },
        { href: '/ja/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'OneDriveまたはSharePointパス' },
        { href: '/ja/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: 'ドライブ録音、無料の回避策' },
        { href: '/ja/meeting-transcription#tool',  icon: 'file',  title: 'その他',       desc: 'Webex、BlueJeans、GoToMeeting' },
      ]}

      faq={[
        {
          q: '私の会社の録音はあなたのサーバーに送信されますか？',
          a: '音声は文字起こしプロバイダー（ルーティングに応じてGroq/Replicate/Deepgram/OpenAI）にストリーミングされ、一度処理され、メモリから削除されます。音声をディスクに書き込むことはありません。文字起こしのみが残り、サインインして保存した場合のみです。',
        },
        {
          q: '会社の録音をアップロードするには承認が必要ですか？',
          a: 'それはあなたの組織のポリシーと録音の情報によります。Mictooはソフトウェアのインストールを必要としませんが、会社のメディアを外部の文字起こしプロバイダーに送信する前に、必要な承認を得るべきです。',
        },
        {
          q: '規制産業でMictooを使用できますか？',
          a: '特定のコンプライアンス要件を確認してください。署名されたBAAやSOC 2レポートは提供していません。厳格な規制環境では、完全に自己ホストされた文字起こしツールを使用してください。',
        },
        {
          q: '要約メールのためにAI要約を取得できますか？',
          a: 'はい。AI要約は自動的に文字起こしとともに表示されます。フォローアップメールやNotionドキュメントのためのしっかりとした初稿です。',
        },
        {
          q: '会議が60 MBを超えた場合はどうなりますか？',
          a: 'サインインして自動分割を有効にします（約3時間まで）。または、ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 audio.m4aでビデオから音声を抽出し、ファイルサイズを5-15倍に削減します。',
        },
        {
          q: '国際チームのために文字起こしを翻訳できますか？',
          a: 'はい。文字起こし後にターゲット言語を選択し、翻訳をクリックします。言語を超えた子会社に便利です。',
        },
        {
          q: '要約メールに適したエクスポート形式は何ですか？',
          a: 'メール本文に貼り付けるためのTXT、適切な添付ファイルのためのDOCX、アーカイブ用のPDF（サインイン時）です。要約は別途利用可能です。',
        },
      ]}

      ctaHeadline="内部会議を要約文書に変換"
      ctaSubtitle="創業者の1対1、全体会議、役員ブリーフィング。承認されたメディアをアップロードして文字起こしと要約を取得します。"
      ctaButton="ビジネス会議をアップロード"

      relatedLinks={[
        { href: '/ja/meeting-transcription',       label: '会議の文字起こし' },
        { href: '/ja/zoom-transcription',          label: 'Zoomの文字起こし' },
        { href: '/ja/teams-meeting-transcription', label: 'Teamsの文字起こし' },
        { href: '/ja/google-meet-transcription',   label: 'Google Meetの文字起こし' },
        { href: '/ja/interview-transcription',     label: 'インタビューの文字起こし' },
      ]}
    />
  )
}