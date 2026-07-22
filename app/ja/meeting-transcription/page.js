import UseCaseLayout from '@/components/UseCaseLayout'

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
  title: 'あらゆるプラットフォームの会議の文字起こし | Mictoo',
  description:
    'Zoom、Teams、Meet、Webex、Loom、またはRiversideからの承認された会議録音をアップロードして、テキスト、要約、およびエクスポートを取得します。',
  alternates: {
    canonical: 'https://mictoo.com/ja/meeting-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: '会議の文字起こし：あらゆるプラットフォーム、あらゆる録音 | Mictoo',
    description: '任意の会議録音をドロップして、文字起こしを取得します。無料です。',
    url: 'https://mictoo.com/ja/meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '会議の文字起こし：あらゆるプラットフォーム',
    description: '任意の会議録音をドロップして、文字起こしを取得します。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaMeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ja"
      badge="あらゆるプラットフォーム · 無料 · サインアップ不要"
      h1First="会議の文字起こし"
      h1Second="あらゆるプラットフォームのための1つのアップロードページ"
      subtitle="Zoom、Teams、Google Meet、Webex、Loom、または任意の画面キャプチャから録音をアップロードします。タイムスタンプ付きのクリーンな文字起こし、AI要約、およびエクスポートを取得します。"
      currentHref="/ja/meeting-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/ja/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/ja/google-meet-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/ja/teams-meeting-transcription' },
        { name: 'Webex',       iconKey: 'videoCameraFill', brandBg: '#0F1F35' },
        { name: 'Loom',        iconKey: 'loomPlay',        brandBg: '#625DF5' },
        { name: 'Riverside',   iconKey: 'waveMic',         brandBg: '#4B2AF7' },
      ]}

      howItWorksTitle="会議の文字起こしの仕組み"
      steps={[
        {
          icon: 'folder',
          title: '会議録音を見つける',
          desc: '任意のプラットフォームから録音をエクスポートまたはダウンロードします。',
        },
        {
          icon: 'upload',
          title: 'ここにファイルをドロップ',
          desc: 'MP3、MP4、WAV、またはその他のサポートされている形式でファイルをアップロードします。',
        },
        {
          icon: 'editPen',
          title: '文字起こし、要約、エクスポート',
          desc: 'タイムスタンプ付きの文字起こし、AI要約、およびエクスポートファイルを取得します。',
        },
      ]}

      exampleTitle="例の文字起こしと要約"
      exampleFileName="meeting-recording.mp4"
      exampleDurationLabel="30分15秒"
      exampleLines={[
        { t: '0:00',  line: '参加してくれた皆さん、ありがとうございます。今日の議題に入る前に、先週の進捗を簡単に振り返りましょう。' },
        { t: '0:12',  line: 'オンボーディングフローを出荷し、前回のベースラインに対して12％のアクティベーションの増加を見ました。' },
        { t: '0:28',  line: '素晴らしい。次に、モバイルでのチェックアウトバグを修正する必要があります。これ以上の支払い顧客に影響を与えないように。' },
        { t: '0:36',  line: 'チケットを作成し、今日中にチームに割り当てます。スプリント内で解決されるはずです。' },
        { t: '0:44',  line: '価格ページの更新についても話し合う必要があります。現在のバージョンは期待通りにコンバージョンされていません。' },
        { t: '0:55',  line: '今日中にドラフトを共有し、明日のスタンドアップ前に一緒にレビューしましょう。' },
      ]}
      summaryPoints={[
        'オンボーディングフローが出荷され、アクティベーションが12％増加しました。',
        'モバイルのチェックアウトバグを修正する必要があります。',
        '価格ページの更新について話し合います。',
        'EODまでにドラフトを共有し、明日レビューします。',
      ]}
      actionItems={[
        'モバイルチェックアウトバグのチケットを作成',
        '価格ページのドラフトを共有',
        '明日ドラフトをレビュー',
      ]}

      whyTitle="プラットフォームに依存しないアップロードが役立つ理由"
      whyCards={[
        {
          icon: 'globe',
          title: 'すべての会議プラットフォームで機能',
          desc: 'Zoom、Teams、Google Meet、Webex、Loomなどからアップロードします。',
        },
        {
          icon: 'target',
          title: '1つのレビューワークフロー',
          desc: 'どのプラットフォームが録音を作成したかに関係なく、同じタイムスタンプ付きのレイアウトとエクスポートオプションを使用します。',
        },
        {
          icon: 'lock',
          title: '承認されたファイルから機能',
          desc: 'Mictooは、すでに使用許可を持っている録音を処理します。アクセスおよびダウンロードポリシーは、ソースプラットフォームに属します。',
        },
        {
          icon: 'sparkles',
          title: '要約と翻訳が含まれています',
          desc: 'AI要約を取得し、50以上の言語に文字起こしを翻訳します。',
        },
      ]}

      scenariosTitle="一般的な会議の文字起こしシナリオ"
      scenarios={[
        { icon: 'chat',      title: 'クライアントの振り返りメール' },
        { icon: 'search',    title: 'ユーザーリサーチノート' },
        { icon: 'users',     title: 'リクルーターのスクリーニング' },
        { icon: 'briefcase', title: 'チーム会議のアーカイブ' },
        { icon: 'headset',   title: 'サポートのエスカレーション' },
        { icon: 'globe',     title: '多言語会議' },
      ]}

      practicalTitle="会議録音を見つける場所"
      practicalIntro="正確な場所はプラットフォームとあなたの会議の役割によって異なります。アクセスを許可されている録音のみをダウンロードし、アップロードする前に参加者の同意と組織のポリシーに従ってください。"
      practicalItems={[
        {
          title: 'Zoomクラウドまたはローカル録音',
          desc: 'クラウド録音は、対象の有料アカウントのZoomウェブポータルから利用できます。コンピュータ録音は通常、ローカルZoomフォルダに保存されます。',
        },
        {
          title: 'Google Meet録音',
          desc: '対象のMeet録音は、主催者のマイドライブ›Meet録音フォルダに保存されます。利用可能性はエディションと管理者設定によって異なります。',
        },
        {
          title: 'Microsoft Teams録音',
          desc: '会議チャット、OneDrive、またはチャンネルのSharePointサイトから録音を見つけます。ダウンロード権限はポリシーによって制限される場合があります。',
        },
        {
          title: 'Webex、Loom、およびRiverside',
          desc: 'プラットフォームのエクスポートまたはダウンロードコントロールを使用して音声またはビデオファイルを取得し、アップロード前にファイルが正しく再生されることを確認します。',
        },
      ]}

      tipsTitle="より良い会議の文字起こしのためのヒント"
      tips={[
        '小さなアップロードを希望する場合は、音声のみのエクスポートを優先してください。',
        '静かな場所で録音し、バックグラウンドノイズを減らしてください。',
        '多言語または混合言語の通話には自動検出を使用してください。',
        '文字起こし後に名前や用語を確認してください。',
      ]}

      guidesTitle="適切なプラットフォームガイドを選択"
      guides={[
        { href: '/ja/zoom-transcription',          icon: 'video', title: 'Zoomミーティング',    desc: 'ステップバイステップのダウンロードガイド' },
        { href: '/ja/google-meet-transcription',   icon: 'video', title: 'Google Meet',      desc: 'ステップバイステップのダウンロードガイド' },
        { href: '/ja/teams-meeting-transcription', icon: 'video', title: 'Microsoft Teams',  desc: 'ステップバイステップのダウンロードガイド' },
        { href: '/ja/meeting-transcription#tool',  icon: 'file',  title: 'その他のプラットフォーム',  desc: 'すべてのガイドとヒントを参照' },
      ]}

      faq={[
        {
          q: 'Zoom、Meet、またはTeamsの録音を文字起こしできますか？',
          a: 'はい。任意の会議プラットフォームからの音声またはビデオファイルが機能します。録音をダウンロードして、ここにドロップしてください。MP3、MP4、WAV、M4A、WEBM、FLACなどを受け付けています。',
        },
        {
          q: '会議の文字起こしは無料ですか？',
          a: 'はい。25 MBまでのファイルは匿名で、サインインすると60 MBまで利用できます。長時間の会議は、サインインしたユーザーのために自動的に分割されることがあります。クレジットカードは必要ありません。',
        },
        {
          q: 'Mictooは異なる話者を識別しますか？',
          a: 'いいえ。現在の文字起こしは、行ごとのタイムスタンプ付きの連続したテキストであり、自動的な「話者1 / 話者2」ラベルはありません。',
        },
        {
          q: '会議録音は保存されますか？',
          a: 'いいえ。ファイルは文字起こしプロバイダーにストリーミングされ、一度処理され、メモリから削除されます。文字起こしは、サインインして履歴に追加した場合のみ保存されます。',
        },
        {
          q: '利用可能なエクスポート形式は何ですか？',
          a: 'TXT（プレーンテキスト）、SRTおよびVTT（録音に合わせたタイムスタンプ付きのキャプション）、DOCX（Word文書）です。サインインしたユーザーはPDFとJSONも利用できます。',
        },
        {
          q: '文字起こしを翻訳できますか？',
          a: 'はい。文字起こし後にターゲット言語を選択し、翻訳をクリックしてください。参加者に好みの言語で振り返りメールを送信したり、異なる言語の会議を単一の作業言語にアーカイブするのに便利です。',
        },
      ]}

      ctaHeadline="次の会議を明確なノートに変えましょう"
      ctaSubtitle="任意のプラットフォームから録音をドロップし、数秒で文字起こし、要約、およびエクスポートを取得します。"
      ctaButton="会議録音をアップロード"

      relatedLinks={[
        { href: '/ja/interview-transcription',  label: 'インタビューの文字起こし' },
        { href: '/ja/podcast-transcription',    label: 'ポッドキャストの文字起こし' },
        { href: '/ja/lecture-transcription',    label: '講義の文字起こし' },
        { href: '/ja/business-transcription',   label: 'ビジネスの文字起こし' },
        { href: '/ja/voice-memo-to-text',       label: 'ボイスメモからテキストへ' },
      ]}
    />
  )
}