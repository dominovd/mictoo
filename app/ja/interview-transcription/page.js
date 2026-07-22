import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'pt': 'https://mictoo.com/pt/interview-transcription',
  'pl': 'https://mictoo.com/pl/interview-transcription',
  'ja': 'https://mictoo.com/ja/interview-transcription',
  'ko': 'https://mictoo.com/ko/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: '音声とビデオのインタビュー文字起こし | Mictoo',
  description:
    'インタビューの録音をアップロードし、タイムスタンプ付きのテキスト、AIによる要約、報告、研究、またはレビュー用のエクスポートを取得します。',
  alternates: {
    canonical: 'https://mictoo.com/ja/interview-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: '無料インタビュー文字起こしツール | Mictoo',
    description: '無料のインタビュー文字起こしをAIで。音声またはビデオをアップロードし、数分でクリーンな文字起こしを取得します。',
    url: 'https://mictoo.com/ja/interview-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '無料インタビュー文字起こし',
    description: '音声またはビデオをアップロードし、数分でクリーンな文字起こしを取得します。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaInterviewTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ja"
      badge="ジャーナリスト · 研究者 · UX · 無料"
      h1First="インタビュー文字起こし"
      h1Second="ジャーナリスト、研究者、UXチームのための無料ツール"
      subtitle="任意のレコーダーや会議アプリから1対1またはパネルインタビューをアップロードします。クリーンでタイムスタンプ付きの文字起こしとAI要約、記事、論文、または研究リポジトリ用のエクスポートを取得します。"
      currentHref="/ja/interview-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/ja/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/ja/google-meet-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/ja/teams-meeting-transcription' },
        { name: 'Riverside',   iconKey: 'waveMic',         brandBg: '#4B2AF7' },
        { name: 'Voice Memo',  iconKey: 'mic',             brandBg: '#F97316', href: '/ja/voice-memo-to-text' },
        { name: 'Phone call',  iconKey: 'phone',           brandBg: '#0EA5A4' },
      ]}

      howItWorksTitle="インタビュー文字起こしの仕組み"
      steps={[
        {
          icon: 'folder',
          title: 'インタビューをエクスポート',
          desc: 'どんな録音でも大丈夫です。ボイスメモ、Zoomクラウド録音、Riverside音声トラック、電話通話のエクスポート。',
        },
        {
          icon: 'upload',
          title: 'ファイルをここにドロップ',
          desc: 'MP3、MP4、M4A、WAV、MOV、または60 MBまでの一般的な音声およびビデオ形式をアップロードします。',
        },
        {
          icon: 'editPen',
          title: '文字起こし、引用、エクスポート',
          desc: 'タイムスタンプ付きの文字起こし、AI要約、TXT / SRT / VTT / DOCXエクスポート。記事や研究論文の準備が整っています。',
        },
      ]}

      exampleTitle="インタビュー文字起こしの例"
      exampleFileName="researcher-interview.m4a"
      exampleDurationLabel="42:18"
      exampleLines={[
        { t: '0:00',  line: 'お時間をいただきありがとうございます。まず、あなたの役割とその役割にどれくらいの期間いるかを説明していただけますか。' },
        { t: '0:08',  line: 'もちろんです。私は中規模のフィンテックで分析チームをリードしており、この役割には2年以上います。' },
        { t: '0:20',  line: 'その前は大手銀行にいて、主に顧客維持とライフタイムバリューのモデリングに取り組んでいました。' },
        { t: '0:32',  line: '大手銀行からフィンテックへの移行は、主にペースと新しいことを試す自由に関するものでした。' },
        { t: '0:44',  line: 'ツールも大きく進化しました。以前は1週間かかっていたことが、今では午後の数時間で済みます。' },
        { t: '0:56',  line: 'そのような変化の具体例を教えていただけますか？以前は試みなかった具体的な何かです。' },
        { t: '1:04',  line: '明らかな例はリアルタイムのコホート実験です。私たちは朝にアイデアを出し、その日の夕方には意味のあるデータを得ます。' },
      ]}
      summaryPoints={[
        'フィンテックの分析リーダー、役割に2年以上。',
        '大手銀行での前職は維持モデリングに焦点を当てていました。',
        'フィンテックへの移行はペースと実験の自由によって推進されました。',
        '現代のツールを使ったリアルタイムのコホート実験が可能です。',
      ]}
      actionItems={[
        '維持モデリングの比較についてフォローアップする',
        'リアルタイムのコホート実験の例を尋ねる',
        '前の雇用主の連絡先を紹介してもらう',
      ]}

      whyTitle="インタビュー文字起こしにMictooを選ぶ理由"
      whyCards={[
        {
          icon: 'target',
          title: '名前や固有名詞を確認',
          desc: 'タイムスタンプを使用して、名前、都市、組織、専門用語を元のインタビュー録音と照合します。',
        },
        {
          icon: 'sparkles',
          title: 'AI要約と引用抽出',
          desc: 'AI要約は、プルクオートリスト、研究メモ、または記事のイントロのためのしっかりとした初稿です。',
        },
        {
          icon: 'lock',
          title: '明確な処理モデル',
          desc: '録音は処理のために文字起こしプロバイダーに送信され、作業が完了した後はMictooに保持されません。',
        },
        {
          icon: 'globe',
          title: '多言語作業のために翻訳',
          desc: 'スペイン語、ドイツ語、日本語で行われたインタビュー。ワンクリックで作業言語に翻訳します。',
        },
      ]}

      scenariosTitle="一般的なインタビューシナリオ"
      scenarios={[
        { icon: 'chat',      title: 'ジャーナリズム' },
        { icon: 'search',    title: 'UXリサーチ' },
        { icon: 'users',     title: '採用' },
        { icon: 'book',      title: '口述歴史' },
        { icon: 'briefcase', title: '法的証言' },
        { icon: 'globe',     title: '多言語' },
      ]}

      tipsTitle="クリーンなインタビュー文字起こしのためのヒント"
      tips={[
        '被写体の近くでラペルまたはハンドヘルドマイクで録音します。',
        '長い回答の間に被写体に短く一時停止するように頼みます。',
        '非英語または重いアクセントの場合は言語を明示的に設定します。',
        '文字起こし後に名前や珍しい用語を確認します。',
      ]}

      guidesTitle="適切なレコーダーガイドを選ぶ"
      guides={[
        { href: '/ja/zoom-transcription',        icon: 'video', title: 'Zoomインタビュー',    desc: 'クラウド録音MP4またはM4A' },
        { href: '/ja/google-meet-transcription', icon: 'video', title: 'Meetインタビュー',    desc: 'ドライブ録音ダウンロード' },
        { href: '/ja/voice-memo-to-text',        icon: 'mic',   title: 'iPhoneボイスメモ', desc: '任意のM4A音声録音' },
        { href: '/ja/podcast-transcription',     icon: 'headset', title: 'ポッドキャストスタイル',   desc: 'Riverside、Zencastr、Cleanfeed' },
      ]}

      faq={[
        {
          q: 'Mictooがインタビューに受け入れるファイル形式は何ですか？',
          a: 'MP3、MP4、M4A、WAV、MOV、WEBM、FLAC、OGG、AACおよびその他の一般的な音声およびビデオ形式。ビデオファイルはサーバー側で自動的にデマルクスされます。',
        },
        {
          q: 'Mictooは誰が話しているかを特定しますか？',
          a: 'いいえ。現在の文字起こしは、行ごとのタイムスタンプ付きの連続テキストであり、自動的な「インタビュアー / 被験者」ラベルはありません。',
        },
        {
          q: 'インタビュー文字起こしは無料ですか？',
          a: 'はい。匿名で25 MBまでのファイルは無料、サインインした場合は60 MBまでです。長いインタビューはサインインしたユーザーのために自動的に分割されることがあります。',
        },
        {
          q: '公開前に名前を削除できますか？',
          a: 'はい。文字起こし後にエディターモードに切り替えて、任意の単語や行を編集します。編集したバージョンを保存してエクスポートします。',
        },
        {
          q: '録音はサーバーに保存されますか？',
          a: 'いいえ。音声は文字起こしプロバイダーにストリーミングされ、一度処理されて削除されます。文字起こしは、サインインした場合のみ保存されます。',
        },
        {
          q: 'インタビュー文字起こしを翻訳できますか？',
          a: 'はい。ターゲット言語を選択し、翻訳をクリックします。多言語のフィールドリサーチや多言語報告に便利です。',
        },
        {
          q: 'どのエクスポート形式が利用可能ですか？',
          a: 'TXT、SRT、VTT、DOCX。サインインしたユーザーはPDFとJSONも取得できます。SRTおよびVTTのタイムスタンプは元の録音に合わせて調整されます。',
        },
      ]}

      ctaHeadline="インタビューを公開可能なテキストに変換"
      ctaSubtitle="録音をドロップして、文字起こし、要約、記事や研究リポジトリ用のエクスポートを取得します。"
      ctaButton="インタビューをアップロード"

      relatedLinks={[
        { href: '/ja/meeting-transcription',      label: '会議の文字起こし' },
        { href: '/ja/podcast-transcription',      label: 'ポッドキャストの文字起こし' },
        { href: '/ja/voice-memo-to-text',         label: 'ボイスメモからテキストへ' },
        { href: '/ja/business-transcription',     label: 'ビジネスの文字起こし' },
        { href: '/ja/lecture-transcription',      label: '講義の文字起こし' },
      ]}
    />
  )
}