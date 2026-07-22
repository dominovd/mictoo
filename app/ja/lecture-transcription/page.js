import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'it': 'https://mictoo.com/it/lecture-transcription',
  'pt': 'https://mictoo.com/pt/lecture-transcription',
  'pl': 'https://mictoo.com/pl/lecture-transcription',
  'ja': 'https://mictoo.com/ja/lecture-transcription',
  'ko': 'https://mictoo.com/ko/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: '授業やセミナーの講義文字起こし | Mictoo',
  description:
    '録音した授業、講義、またはセミナーをアップロードして、検索可能なテキスト、タイムスタンプ、AI要約、エクスポートファイルを取得します。',
  alternates: {
    canonical: 'https://mictoo.com/ja/lecture-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: '講義文字起こし: 無料の文字起こし生成器 | Mictoo',
    description: '録音した授業やセミナーをアップロードして、数秒でクリーンなテキストを取得します。',
    url: 'https://mictoo.com/ja/lecture-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '講義文字起こし: 無料の生成器',
    description: '授業やセミナーの録音をアップロードします。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaLectureTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ja"
      badge="学生 · 学者 · 無料"
      h1First="講義文字起こし"
      h1Second="授業やセミナーの無料文字起こし"
      subtitle="Zoom、Panopto、YouTube、Kaltura、または電話から録音した講義をアップロードします。学習ノート、復習、引用のためにタイムスタンプ付きの検索可能な文字起こしを取得します。"
      currentHref="/ja/lecture-transcription"

      platforms={[
        { name: 'Zoom',      iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/ja/zoom-transcription' },
        { name: 'YouTube',   iconKey: 'videoCameraFill', brandBg: '#FF0000' },
        { name: 'Panopto',   iconKey: 'cap',             brandBg: '#014A96' },
        { name: 'Kaltura',   iconKey: 'cap',             brandBg: '#FA6425' },
        { name: 'Camtasia',  iconKey: 'videoCameraFill', brandBg: '#00A651' },
        { name: 'Voice Memo',iconKey: 'mic',             brandBg: '#F97316', href: '/ja/voice-memo-to-text' },
      ]}

      howItWorksTitle="講義文字起こしの仕組み"
      steps={[
        {
          icon: 'folder',
          title: '講義をエクスポート',
          desc: 'Panopto/Kalturaからダウンロード、Zoomクラウドから保存、または授業中に電話で録音します。',
        },
        {
          icon: 'upload',
          title: 'ファイルをここにドロップ',
          desc: 'MP3、MP4、M4A、WAV、MOVがすべて動作します。長い講義はサインイン時に自動分割されます。',
        },
        {
          icon: 'editPen',
          title: 'ノート、要約、引用',
          desc: '検索可能なタイムスタンプ付きの文字起こし、AI要約、学習ノート用のDOCX。試験準備のために文字起こしとチャットします。',
        },
      ]}

      exampleTitle="講義文字起こしの例"
      exampleFileName="intro-microeconomics-lecture-08.mp4"
      exampleDurationLabel="47:32"
      exampleLines={[
        { t: '0:00',  line: 'さて、先週は消費者余剰の概念について終わりました。今日はそれを基に生産者余剰について説明します。' },
        { t: '0:11',  line: '生産者余剰は、生産者が商品に対して受け入れる金額と、実際に受け取る金額の差です。' },
        { t: '0:23',  line: '消費者余剰と生産者余剰を合わせると、税金や価格規制を導入する前の市場の総福祉が得られます。' },
        { t: '0:35',  line: 'では、なぜこの概念が実際に重要なのでしょうか？政策が市場を良くするか悪くするかを評価できるからです。' },
        { t: '0:47',  line: '単位あたりの税金を考えてみましょう。それは供給曲線を税額分だけ上にシフトさせ、両方の余剰が縮小します。' },
        { t: '0:58',  line: '買い手が支払う金額と売り手が受け取る金額の間に現れるギャップを、我々は死重損失と呼びます。' },
        { t: '1:08',  line: 'ワークブックの31ページを開いて、一緒に数値例を解いていきましょう。' },
      ]}
      summaryPoints={[
        '要約: 前回の講義からの消費者余剰。',
        '新しい概念: 生産者余剰と総福祉。',
        '税金分析に適用。',
        '死重損失を数値で示す。',
      ]}
      actionItems={[
        'ワークブックの31ページを確認',
        '死重損失の計算を練習',
        '木曜日までに第4章を読む',
      ]}

      whyTitle="講義文字起こしにMictooを選ぶ理由"
      whyCards={[
        {
          icon: 'search',
          title: '文字起こし内で検索可能',
          desc: '45分の講義全体から任意の概念を一瞬でCtrl-Fできます。ビデオをスクラブするよりも優れています。',
        },
        {
          icon: 'sparkles',
          title: '復習ノート用のAI要約',
          desc: '要約はしっかりとした復習の出発点です。既に知っていることを削り、見逃したことを保持します。',
        },
        {
          icon: 'chat',
          title: '講義とチャット',
          desc: '試験準備のために資料について質問できます。RAGスタイルの回答は正確なタイムスタンプを引用します。',
        },
        {
          icon: 'globe',
          title: '非ネイティブ学生のための翻訳',
          desc: '英語の講義ですが、ポルトガル語で学習しますか？50以上の言語へのワンクリック翻訳。',
        },
      ]}

      scenariosTitle="一般的な講義シナリオ"
      scenarios={[
        { icon: 'book',      title: '大学の授業' },
        { icon: 'cap' ,      title: 'オンラインコース' },
        { icon: 'search',    title: '試験復習' },
        { icon: 'editPen',   title: '学習ノート' },
        { icon: 'globe',     title: '非ネイティブ学生' },
        { icon: 'headset',   title: '録音されたセミナー' },
      ]}

      tipsTitle="クリーンな講義文字起こしのためのヒント"
      tips={[
        '前の方に座り、電話をバックアップマイクとして使用します。',
        '60 MBを超える長い講義は、サインイン時に自動分割されます。',
        '技術的または非英語のコンテンツに対して言語を明示的に設定します。',
        '文字起こし後にフォローアップの質問をするためにチャットを使用します。',
      ]}

      guidesTitle="関連する学習ツール"
      guides={[
        { href: '/ja/zoom-transcription',        icon: 'video', title: 'Zoom講義',      desc: 'クラウド録音のダウンロード' },
        { href: '/ja/youtube-to-text',           icon: 'video', title: 'YouTube講義',   desc: 'URLを貼り付けるかアップロード' },
        { href: '/ja/voice-memo-to-text',        icon: 'mic',   title: '電話録音',   desc: '授業中のiPhoneボイスメモ' },
        { href: '/ja/timestamped-transcription', icon: 'file',  title: 'タイムスタンプ付きノート', desc: '時間に合わせたエクスポート' },
      ]}

      faq={[
        {
          q: 'Zoomの授業録音を文字起こしできますか？',
          a: 'はい。Cloud RecordingのMP4またはM4Aをダウンロードして、ここにドロップします。正確なダウンロードパスについてはZoomガイドを参照してください。',
        },
        {
          q: '私の講義は60 MBを超えています。どうすればいいですか？',
          a: 'サインインして自動分割を有効にします（約3時間まで）。または、ffmpegを使用して64 kbpsモノMP3にダウンサンプルして、サイズを5倍に削減します。',
        },
        {
          q: 'Mictooは非英語の講義を文字起こししますか？',
          a: 'はい。Whisper large-v3は50以上の言語をサポートしています。技術的な語彙や重いアクセントに対して言語を明示的に設定します。',
        },
        {
          q: '文字起こし内で検索できますか？',
          a: 'はい。リーダービューには、マッチ数とハイライト付きの検索ボックスが含まれています。Ctrl-Fで用語を検索し、ヒット間をジャンプします。',
        },
        {
          q: '講義資料について質問できますか？',
          a: 'はい。文字起こしとチャットを使って「死重損失を説明して」や「教授が言及したページはどれですか？」と質問できます。回答はタイムスタンプを引用します。',
        },
        {
          q: '講義ノートをDOCXまたはPDFとしてエクスポートできますか？',
          a: 'はい。DOCXは誰でも、PDFとJSONはサインインしたユーザーのために提供されます。TXTは常に利用可能です。',
        },
        {
          q: '講義録音はサーバーに保存されますか？',
          a: 'いいえ。音声は文字起こしプロバイダーにストリーミングされ、一度処理されて削除されます。文字起こしは、サインインした場合のみ保存されます。',
        },
      ]}

      ctaHeadline="講義を学習ノートに変えましょう"
      ctaSubtitle="検索可能な文字起こし、AI要約、資料とのチャット。講義ごとに無料です。"
      ctaButton="講義をアップロード"

      relatedLinks={[
        { href: '/ja/webinar-transcription',     label: 'ウェビナー文字起こし' },
        { href: '/ja/sermon-transcription',      label: '説教文字起こし' },
        { href: '/ja/voice-memo-to-text',        label: 'ボイスメモからテキストへ' },
        { href: '/ja/interview-transcription',   label: 'インタビュー文字起こし' },
        { href: '/ja/meeting-transcription',     label: '会議文字起こし' },
      ]}
    />
  )
}