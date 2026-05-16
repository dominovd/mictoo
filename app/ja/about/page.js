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
  title: 'Mictooについて — Mictoo',
  description: 'Mictooは、AI搭載の無料音声・動画文字起こしツールです。',
  alternates: { canonical: 'https://mictoo.com/ja/about', languages: LOCALE_ALTERNATES },
}

export default function JaAboutPage() {
  return (
    <AboutLayout
      strings={{
        h1: 'Mictooについて',
        lead: 'Mictooは登録不要の無料音声・動画文字起こしツールです。音声を素早く正確にテキスト化したいすべての人のために作られました。',
        ourWhy: 'Mictooを作ったのは、優れた文字起こしにサブスクリプション、アカウント、技術的なスキルが必要であってはならないと考えたからです。ファイルをアップロードして、テキストを受け取る。それだけです。',
        whatPowersHeading: 'Mictooの仕組み',
        whatPowersBody: 'MictooはOpenAIのWhisperを使用しています。これはChatGPTで使われているのと同じ音声認識モデルで、68万時間の多言語音声で学習されており、50以上の言語の自動検出に対応し、最も正確な文字起こしモデルの一つとして広く認識されています。Mictooは速度とコスト効率のためにGroq API(米国ホスト、whisper-large-v3モデル)経由でWhisperを実行し、OpenAIのWhisper APIを自動フォールバックとして使用します。ファイルは文字起こしプロバイダーに直接送信され、Mictooのサーバーには保存されません。GroqもOpenAIも、APIデータをモデル学習に使用することはなく、OpenAIは不正利用監視のためにAPIデータを最大30日間保持した後に削除します。',
        principlesHeading: '私たちの原則',
        principles: [
          { label: '無料。', body: '隠れた費用、トライアル期間、クレジットカードは不要です。' },
          { label: 'プライバシー。', body: 'ファイルは保存されません。処理され、すぐに削除されます。' },
          { label: 'シンプル。', body: '1ページ、1ツール、ゼロ摩擦。' },
          { label: '正確。', body: '文字起こし品質のために、利用可能な最高のAIモデルを使用しています。' },
        ],
        contactHeading: 'お問い合わせ',
        contactPrefix: 'フィードバック、ご要望、ご質問はありますか?',
        contactLinkLabel: 'お問い合わせフォーム',
        contactSuffix: ' — 個別にお返事します。',
      }}
    />
  )
}
