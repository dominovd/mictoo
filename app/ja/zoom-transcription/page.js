import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'ja': 'https://mictoo.com/ja/zoom-transcription',
  'ko': 'https://mictoo.com/ko/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Zoomのクラウドおよびローカル録音の文字起こし | Mictoo',
  description:
    'ZoomのクラウドまたはローカルのMP4/M4A録音をアップロードし、タイムスタンプ付きの文字起こし、AI要約、エクスポートファイルを取得します。',
  alternates: {
    canonical: 'https://mictoo.com/ja/zoom-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Zoom録音の文字起こし | Mictoo',
    description: 'ZoomのクラウドまたはローカルのMP4/M4Aをアップロードし、文字起こし、要約、エクスポートを取得します。',
    url: 'https://mictoo.com/ja/zoom-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoomの文字起こし: 無料',
    description: 'Zoomの録音をアップロードし、タイムスタンプ付きの文字起こしを取得します。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaZoomTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ja"
      badge="Zoom · クラウド / ローカル / M4Aオーディオ · 無料"
      h1First="Zoomの文字起こし"
      h1Second="クラウドおよびローカル録音からテキストへ"
      subtitle="Zoomクラウド録音のMP4、オーディオのみのM4A、またはローカル録音をアップロードします。タイムスタンプ付きの文字起こし、AI要約、翻訳、エクスポートファイルを1つのワークフローで取得します。"
      currentHref="/ja/zoom-transcription"

      platforms={[
        { name: 'クラウドMP4',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF' },
        { name: 'M4Aオーディオ',    iconKey: 'mic',             brandBg: '#0EA5A4' },
        { name: 'ローカルMP4',    iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Google Meet',  iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/ja/google-meet-transcription' },
        { name: 'MS Teams',     iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/ja/teams-meeting-transcription' },
        { name: 'ミーティングハブ',  iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/ja/meeting-transcription' },
      ]}

      howItWorksTitle="Zoomの文字起こしの仕組み"
      steps={[
        {
          icon: 'folder',
          title: 'Zoomからダウンロード',
          desc: 'クラウド: zoom.us → 録音 → MP4または「オーディオのみ(M4A)」バージョンをダウンロードします。ローカル: ~/Documents/Zoom/.',
        },
        {
          icon: 'upload',
          title: 'ここにファイルをドロップ',
          desc: 'オーディオのみのM4Aは通常MP4よりもはるかに小さく、ビデオトラックのアップロードを回避します。匿名で最大25MB、サインインで60MBまで無料です。',
        },
        {
          icon: 'editPen',
          title: 'レビューとエクスポート',
          desc: '処理時間は、長さ、ファイルサイズ、需要によって異なります。完了したら、文字起こしをレビューし、要約、キャプション、またはDOCXの要約をエクスポートします。',
        },
      ]}

      exampleTitle="Zoomミーティングの文字起こしの例"
      exampleFileName="zoom-cloud-recording.m4a"
      exampleDurationLabel="34:12"
      exampleLines={[
        { t: '0:00',  line: 'さて、皆さん遅れてすみません。Zoomが更新するまで入れてくれませんでした。始めましょう。' },
        { t: '0:10',  line: '今日は先週のプロトタイプフィードバックをレビューし、スプリントの優先順位を決定します。' },
        { t: '0:22',  line: '全体的にフィードバックは良好でした。15人中12人が助けなしでフローを理解しました。' },
        { t: '0:33',  line: 'つまずいた3人は全員、設定画面で同じ問題に直面しました。まずそれを修正する必要があります。' },
        { t: '0:45',  line: '同意します。すでにデザインの修正を進めています。木曜日までにレビューできるはずです。' },
        { t: '0:56',  line: '次に、皆さんは新しい空の状態を気に入っていましたが、インポートボタンが見つかりませんでした。深すぎて埋もれています。' },
        { t: '1:08',  line: 'インポートを空の状態の主要なアクションに移動しましょう。それはエンジニアリングにとって1行の変更です。' },
      ]}
      summaryPoints={[
        'プロトタイプフィードバック: 12/15が支援なしでフローを完了。',
        'ブロッカー: 設定画面が3/15の参加者を混乱させた。',
        '空の状態は好評だが、インポートボタンが見つけにくい。',
        '木曜日までにデザインの修正。',
      ]}
      actionItems={[
        '設定画面を修正（木曜日にデザインの修正）',
        '空の状態でインポートを主要なアクションに昇格',
        '金曜日のスタンドアップで修正されたプロトタイプを共有',
      ]}

      whyTitle="Zoom録音でMictooを使用する理由"
      whyCards={[
        {
          icon: 'target',
          title: 'レビュー用の2つ目の文字起こし',
          desc: '名前、用語、重要な引用を確認するために、追加の文字起こしとタイムスタンプ付きのテキストが必要な場合はMictooを使用します。',
        },
        {
          icon: 'lock',
          title: 'ダウンロードしたファイルを処理',
          desc: 'MictooはあなたのZoomアカウントに接続しません。すでに使用許可のあるクラウドまたはローカル録音をアップロードします。',
        },
        {
          icon: 'gear',
          title: 'ローカル録音にも対応',
          desc: 'Zoomの内蔵文字起こしはクラウド専用です。ローカル録音は何も得られません。Mictooは両方に対応しています。',
        },
        {
          icon: 'sparkles',
          title: '要約 + 翻訳が含まれています',
          desc: 'AI要約が文字起こしと自動的に表示されます。ワンクリックで50以上の言語に翻訳します。',
        },
      ]}

      scenariosTitle="一般的なZoomシナリオ"
      scenarios={[
        { icon: 'chat',      title: 'クライアントコール' },
        { icon: 'users',     title: 'チームスタンドアップ' },
        { icon: 'briefcase', title: '営業デモ' },
        { icon: 'search',    title: 'ユーザーインタビュー' },
        { icon: 'book',      title: 'ウェビナー' },
        { icon: 'globe',     title: '多言語コール' },
      ]}

      tipsTitle="Zoom録音のヒント"
      tips={[
        'M4Aの「オーディオのみ」バージョンをダウンロードします。同じ精度で、10倍小さいです。',
        'クラウド録音のクォータは、私たちの文字起こしには消費されません（外部で実行しています）。',
        'ローカル録音も機能します。~/Documents/Zoom/の下を確認してください。',
        '60MBを超える長い通話の場合は、サインインして自動分割を利用してください。',
      ]}

      guidesTitle="独自のガイドを持つミーティングプラットフォーム"
      guides={[
        { href: '/ja/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: 'Workspace + 無料のワークアラウンド' },
        { href: '/ja/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'OneDrive + SharePointのパス' },
        { href: '/ja/meeting-transcription',       icon: 'video', title: 'ミーティングハブ', desc: '任意のプラットフォーム、1回のアップロード' },
        { href: '/ja/webinar-transcription',       icon: 'monitor', title: 'ウェビナー',  desc: 'Zoomウェビナー、Demio、ON24' },
      ]}

      faq={[
        {
          q: 'どのZoom録音タイプが機能しますか？',
          a: 'クラウド録音MP4（ビデオ）、クラウド録音M4A（オーディオのみ）、およびローカル録音MP4。また、チャットログが必要な場合はchat.txtエクスポートも可能ですが、チャットは文字起こししません。',
        },
        {
          q: 'Zoom Proまたはそれ以上が必要ですか？',
          a: 'いいえ。無料プランのローカル録音を含む、任意のZoom録音が機能します。Zoomクラウド録音自体はPro+が必要ですが、すでにファイルを持っている場合、MictooはあなたのZoomティアを気にしません。',
        },
        {
          q: '私のクラウド録音MP4は60MBを超えています。どうすればいいですか？',
          a: '録音にオーディオのみ（M4A）のダウンロードが含まれている場合は、それを使用してビデオトラックのアップロードを回避してください。可用性とファイルサイズは、録音設定と長さによって異なります。',
        },
        {
          q: 'Zoomのオーディオ文字起こしを使用するべきですか、それともMictooを使用するべきですか？',
          a: 'Zoomのオーディオ文字起こしは、クラウド録音と文字起こしがアカウントで有効になっている場合に便利です。Mictooは、ローカルファイル、追加のエクスポート形式、翻訳、またはレビュー用の別の文字起こしを生成するのに役立ちます。精度は録音によって異なります。',
        },
        {
          q: 'MictooはZoomのスピーカーを特定しますか？',
          a: 'いいえ。現在の文字起こしは、行ごとのタイムスタンプ付きの連続テキストであり、自動的な「スピーカー1 / スピーカー2」ラベルはありません。',
        },
        {
          q: 'ローカル録音はどこに保存されますか？',
          a: 'デフォルトでは、Macの~/Documents/Zoom/およびWindowsの%USERPROFILE%\\Documents\\Zoom\\です。各ミーティングには、MP4と別のaudio.m4aを含む独自のフォルダーが作成されます。',
        },
        {
          q: '私のZoom録音はあなたのサーバーに保存されていますか？',
          a: 'いいえ。ファイルは文字起こしプロバイダーにストリーミングされ、1回処理され、メモリから削除されます。サインインした場合のみ、文字起こしが持続します。',
        },
      ]}

      ctaHeadline="Zoom録音をクリーンなテキストに変換"
      ctaSubtitle="クラウドMP4またはM4A、ローカル録音、任意のZoomティア。ファイルごとに無料です。"
      ctaButton="Zoom録音をアップロード"

      relatedLinks={[
        { href: '/ja/meeting-transcription',       label: 'ミーティングの文字起こし' },
        { href: '/ja/google-meet-transcription',   label: 'Google Meetの文字起こし' },
        { href: '/ja/teams-meeting-transcription', label: 'Teamsの文字起こし' },
        { href: '/ja/webinar-transcription',       label: 'ウェビナーの文字起こし' },
        { href: '/ja/interview-transcription',     label: 'インタビューの文字起こし' },
      ]}
    />
  )
}