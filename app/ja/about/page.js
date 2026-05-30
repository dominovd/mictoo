import AboutLayout from '@/components/AboutLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/about',
  'fr': 'https://mictoo.com/fr/about',
  'de': 'https://mictoo.com/de/about',
  'es': 'https://mictoo.com/es/about',
  'ru': 'https://mictoo.com/ru/about',
  'it': 'https://mictoo.com/it/about',
  'pt': 'https://mictoo.com/pt/about',
  'pl': 'https://mictoo.com/pl/about',
  'ja': 'https://mictoo.com/ja/about',
  'ko': 'https://mictoo.com/ko/about',
  'x-default': 'https://mictoo.com/about',
}

export const metadata = {
  title: 'Mictooについて — 無料AI文字起こしツール',
  description:
    'Mictooの背後にいる人々、無料AI音声・動画文字起こしツール。動作の仕組み、収益化の方法、あなたのファイルにすること(としないこと)。',
  alternates: { canonical: 'https://mictoo.com/ja/about', languages: LOCALE_ALTERNATES },

  openGraph: {
    title: "Mictooについて — 無料AI文字起こしツール",
    description: "Mictooの背後にいる人々、無料AI音声・動画文字起こしツール。動作の仕組み、収益化の方法、あなたのファイルにすること(としないこと)。",
    url: "https://mictoo.com/ja/about",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mictooについて — 無料AI文字起こしツール",
    description: "Mictooの背後にいる人々、無料AI音声・動画文字起こしツール。動作の仕組み、収益化の方法、あなたのファイルにすること(としないこと)。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaAboutPage() {
  return (
    <AboutLayout
      contactHref="/ja/contact"
      strings={{
        h1: 'Mictooについて',
        lead:
          'Mictooは、スピーチを素早く正確にテキストに変える必要があるすべての人のために構築された、登録不要の無料音声・動画文字起こしツールです。',
        ourWhy:
          '良い文字起こしにサブスクリプション、アカウント、技術スキルが必要であってはならないと考えてMictooを構築しました。ファイルをドロップ、テキスト取得。終わり。',

        whoBuiltHeading: 'Mictooの背後にいる人々',
        whoBuiltBody: [
          'Mictooはインディプロジェクトで、SEO、コンテンツ、開発者ツールに過去10年間取り組んできた小さなチームによって構築・運営されています。10億ユーザーを追いかけるVC資金提供のスタートアップではありません。フリーティアセグメントを獲得しようとする文字起こし巨人のサイドプロジェクトでもありません。私たち自身が文字起こしツールを使い、すべてのオプションが閉じられている、遅い、またはユーザーに敵対的であることに疲れた人々です。',
          'サイトの背後にいる人々に直接連絡したい場合、このページの下部のメールは実際の人間の受信箱に届きます。すべてのメッセージが読まれます。',
        ],

        whatPowersHeading: 'Mictooを動かすもの',
        whatPowersBody:
          'MictooはChatGPTで使用されているのと同じ音声認識モデル、OpenAIのWhisperで動作します。Whisper large-v3は68万時間の多言語音声でトレーニングされました。自動検出で50以上の言語をサポートし、利用可能な最も強力なオープン音声認識モデルと広く考えられています。速度とコスト効率のためにGroqの米国ホストAPI(whisper-large-v3)経由でWhisperを実行し、Groqが利用できない場合は自動フォールバックとしてOpenAIのWhisper APIを使用。ファイルは文字起こしプロバイダに直接ストリーミングされ、Mictooサーバーには保存されません。GroqもOpenAIもAPIオーディオでモデルをトレーニングせず、OpenAIは削除前に最大30日間APIデータを乱用監視のために保持します。',

        securityHeading: 'セキュリティとあなたのファイルに何が起こるか',
        securityBody: [
          'あなたの音声または動画ファイルはVercel Blob Storageにアップロードされ、文字起こしプロバイダにストリーミングされ、文字起こしされて削除されます。ほとんどのファイルでラウンドトリップ全体は1分未満で、最後に私たちのインフラ上にファイルのコピーはありません。',
          '文字起こしも保持しません。ブラウザタブに存在します。保持したい場合は、ダウンロードボタンをクリック。タブを閉じたら、何を文字起こししたかの記録はありません。ログするのは処理されたファイル数の匿名カウンターだけで、使用状況を追跡してプロバイダに支払うため。',
          'ログイン中(無料、オプション)は、アカウントに過去の文字起こしの小さな履歴を保持し、再オープンできるようにします。匿名文字起こしは履歴を保持しません。',
        ],

        moneyHeading: '私たちの収益化方法',
        moneyBody: [
          'Mictooはディスプレイ広告で資金提供されています。Google AdSenseに申請し、マーケティングページ(実際のツールフローではない)に広告を表示する予定です。広告がホスティングとAPI請求をカバーします。',
          '広告を超えて、より長いファイル、バッチアップロード、またはスピーカーダイアライゼーションが必要なユーザー向けに小さなProプランを構築しています、提供できれば。フリーティアは消えません。フリーティアが存在するのは、ほとんどの人が時々1つのファイルを文字起こしする必要があり、それのために月額サブスクリプションを払う必要がないからです。',
          'あなたのデータを売りません。売るデータがありません、ファイルや文字起こしを保存しないので。第三者があなたについて見るのは、Google側でAdSenseが処理する標準広告ターゲティング(場所、広い興味)だけです。',
        ],

        principlesHeading: '私たちの原則',
        principles: [
          { label: '無料。', body: '隠れたコストなし、トライアルなし、コアツールにクレジットカードなし。' },
          { label: 'プライベート。', body: 'ファイルは決して保存されません。処理されてすぐに削除。' },
          { label: 'シンプル。', body: '1ページ、1ツール、ゼロ摩擦。' },
          { label: '正確。', body: '文字起こし品質に最高のAIモデルを使用。' },
        ],

        editorialHeading: '私たちがしないこと',
        editorialBullets: [
          { label: 'ダークパターンなし。', body: '偽のカウントダウンタイマーなし、「ファイルは60秒後に期限切れ、ダウンロードに支払い」なし、アップロードフロー途中のメールウォールなし。' },
          { label: '価格のおとり商法なし。', body: 'フリーティアは本当に無料。以前無料だった機能を遡及的に制限することはありません。' },
          { label: '文字起こしの再販なし。', body: '文字起こしを保存しません。利用規約に隠された「トレーニングデータ」ライセンスはありません。' },
          { label: '欺瞞的な広告ネットワークなし。', body: 'Google AdSenseを使用、ブラウザUIをスワップしたり戻るボタンをハイジャックしたりするネットワークではありません。' },
          { label: '偽のレビューなし。', body: 'レビューサイトでMictooを見るなら、それは有機的にそこに来ました。プレースメントに支払わず、自分のレビューを書きません。' },
        ],

        contactHeading: '連絡先',
        contactPrefix: 'フィードバック、機能リクエスト、または質問?',
        contactCtaLabel: 'お問い合わせ',
        contactSuffix: ' またはメール:',
      }}
    />
  )
}
