import ContactLayout from '@/components/ContactLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/contact',
  'fr': 'https://mictoo.com/fr/contact',
  'de': 'https://mictoo.com/de/contact',
  'es': 'https://mictoo.com/es/contact',
  'ru': 'https://mictoo.com/ru/contact',
  'it': 'https://mictoo.com/it/contact',
  'pt': 'https://mictoo.com/pt/contact',
  'pl': 'https://mictoo.com/pl/contact',
  'ja': 'https://mictoo.com/ja/contact',
  'ko': 'https://mictoo.com/ko/contact',
  'x-default': 'https://mictoo.com/contact',
}

export const metadata = {
  title: 'お問い合わせ — Mictoo',
  description:
    'Mictooお問い合わせ。info@mictoo.comは実際の人間の受信箱に届きます。1営業日以内に返信。サポート範囲、ビジネス問い合わせ、FAQショートカット。',
  alternates: { canonical: 'https://mictoo.com/ja/contact', languages: LOCALE_ALTERNATES },

  openGraph: {
    title: "お問い合わせ — Mictoo",
    description: "Mictooお問い合わせ。info@mictoo.comは実際の人間の受信箱に届きます。1営業日以内に返信。サポート範囲、ビジネス問い合わせ、FAQショートカット。",
    url: "https://mictoo.com/ja/contact",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "お問い合わせ — Mictoo",
    description: "Mictooお問い合わせ。info@mictoo.comは実際の人間の受信箱に届きます。1営業日以内に返信。サポート範囲、ビジネス問い合わせ、FAQショートカット。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaContactPage() {
  return (
    <ContactLayout
      privacyHref="/ja/privacy"
      strings={{
        h1: 'お問い合わせ',
        lead:
          '質問、フィードバック、機能リクエストがありますか?お聞かせいただけると嬉しいです。すべてのメッセージを読み、1営業日以内に返信します。',
        privacyPrefix: 'プライバシーに関する質問は',
        privacyLinkLabel: 'プライバシーポリシー',
        privacySuffix: 'をご覧ください。',

        responseTimeHeading: '応答時間',
        responseTimeBody:
          'info@mictoo.comは実際の人間の受信箱に届きます、チケットシステムではありません。月曜日から金曜日、中央ヨーロッパ時間で返信、通常1営業日以内。金曜日の夜に書いた場合、月曜日に返信を期待してください。24/7サポートではなく、そのふりをしません。',

        supportScopeHeading: 'お手伝いできること',
        supportScopeItems: [
          { label: 'バグレポート。', body: 'アップローダで壊れた何か、混乱して戻ってくる文字起こし、動画エディタで動作しないSRT。可能ならファイル名とアップロード時間を含めてください。' },
          { label: '機能リクエスト。', body: 'Mictooにしてほしいことを教えてください。何も約束しませんが、本当に読んで、ユーザーがリクエストした機能を提供してきました。' },
          { label: '文字起こし品質に関する質問。', body: '特定のファイルが悪い精度で戻ってきた場合、送る(または説明する)と、録音の問題かモデルの問題かの診断を手伝います。' },
          { label: 'アカウントまたは課金。', body: 'フリーティアには課金がありません。Proプラン(開始時)では、課金の質問もここに来ます。' },
          { label: 'パートナーシップと統合。', body: 'Mictooを自分の製品に統合したい、または補完的なものを構築したい場合、話し合いに開放的です。' },
        ],

        faqShortcutHeading: 'メールより速い',
        faqShortcutBody: [
          'あなたの質問が一般的なものの1つなら、適切なランディングのFAQがおそらくすでに答えを持っています。クイックリンク: 価格、ファイルサイズと長さの制限、サポートされるフォーマット、プライバシーの質問は各ランディングの下部で回答されています(例: 音声をテキストにページ)。',
          'それ以外のすべてには、メールが正しいチャネルです。',
        ],

        businessHeading: 'ビジネスとプレス問い合わせ',
        businessBody: [
          '同じメール: info@mictoo.com。件名に[Press]または[Business]を使うと、メッセージを適切にルーティングできます。インディSEOと生産性スペースのAIツールに関するインタビューに開放的ですが、有料プレースメントやスポンサードコンテンツはしません。',
          '文字起こしツールや生産性ソフトウェアのAIについて書くジャーナリストなら、Mictooが内部でどう動作するか、運営にいくらかかるか、競合をどう考えるかについて直接的な回答を提供します。',
        ],

        languagesHeading: '言語',
        languagesBody:
          '英語でサポートを提供。日本語、ロシア語、スペイン語の返信はベストエフォート。他の言語で書く場合、チームに流暢な話者を見つけられない限り英語で返信します。',
      }}
    />
  )
}
