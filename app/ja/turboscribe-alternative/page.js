import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/turboscribe-alternative',
  'fr': 'https://mictoo.com/fr/turboscribe-alternative',
  'de': 'https://mictoo.com/de/turboscribe-alternative',
  'es': 'https://mictoo.com/es/turboscribe-alternative',
  'ru': 'https://mictoo.com/ru/turboscribe-alternative',
  'it': 'https://mictoo.com/it/turboscribe-alternative',
  'pt': 'https://mictoo.com/pt/turboscribe-alternative',
  'pl': 'https://mictoo.com/pl/turboscribe-alternative',
  'ja': 'https://mictoo.com/ja/turboscribe-alternative',
  'ko': 'https://mictoo.com/ko/turboscribe-alternative',
  'x-default': 'https://mictoo.com/turboscribe-alternative',
}

export const metadata = {
  title: 'TurboScribeの代替 — 登録不要のWhisper無料文字起こし | Mictoo',
  description: 'TurboScribeはWhisperベースの人気ツールですが、アカウントが必要で無料ユーザーは1日30分に制限されます。MictooはAI要約内蔵で完全に登録不要です。',
  alternates: { canonical: 'https://mictoo.com/ja/turboscribe-alternative', languages: LANGS },

  openGraph: {
    title: "TurboScribeの代替 — 登録不要のWhisper無料文字起こし | Mictoo",
    description: "TurboScribeはWhisperベースの人気ツールですが、アカウントが必要で無料ユーザーは1日30分に制限されます。MictooはAI要約内蔵で完全に登録不要です。",
    url: "https://mictoo.com/ja/turboscribe-alternative",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TurboScribeの代替 — 登録不要のWhisper無料文字起こし | Mictoo",
    description: "TurboScribeはWhisperベースの人気ツールですが、アカウントが必要で無料ユーザーは1日30分に制限されます。MictooはAI要約内蔵で完全に登録不要です。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaTurboScribeAlternativePage() {
  return (
    <ComparisonLayout
      badge="比較 · TurboScribe · 無料"
      h1={<>TurboScribeの代替<br /><span className="text-brand-600">同じWhisper、登録不要</span></>}
      subtitle="TurboScribeとMictooはどちらもOpenAI Whisperを使用するため、文字起こしの品質はほぼ同じです。主な違いは登録、ファイル制限、AI要約の組み込みです。"
      competitorName="TurboScribe"
      rows={[
        { label: '無料プラン',           mictoo: '月間制限なし、1ファイルあたり25 MB', them: '1日3ファイル、各30分' },
        { label: 'アカウント必須',       mictoo: 'いいえ', them: 'はい(メール登録)' },
        { label: '有料プラン',           mictoo: '無料',  them: '$20 / 月で無制限' },
        { label: 'ファイルサイズ(無料)', mictoo: '1ファイルあたり25 MB', them: '1ファイルあたり〜150 MB / 30分' },
        { label: 'ファイルサイズ(有料)', mictoo: '無料と同じ', them: '1ファイルあたり5 GB / 10時間' },
        { label: 'バッチアップロード',   mictoo: 'いいえ', them: 'はい(有料、最大50ファイル)' },
        { label: '文字起こしモデル',     mictoo: 'OpenAI Whisper', them: 'OpenAI Whisper' },
        { label: 'AI要約',               mictoo: 'はい、無料', them: 'はい(有料)' },
        { label: 'SRTエクスポート',      mictoo: 'はい、無料', them: 'はい' },
        { label: '文字起こし履歴',       mictoo: 'いいえ', them: 'はい(アカウントベース)' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: '本当に登録不要', desc: 'TurboScribeは無料プランでもメールが必要です。Mictooは何も要求しません — ファイルをアップロードして、テキストを取得。もう一つのアカウントを作りたくないときの一度きりの録音に役立ちます。' },
        { icon: '✨', title: '無料プランでAI要約', desc: 'Mictooは各文字起こし後に2〜3文の要約、要点、アクションアイテムを自動的に生成します。TurboScribeはAI要約を$20/月のペイウォールの後ろに置いています。' },
        { icon: '🔒', title: '何も保存されない', desc: '文字起こし履歴なし、クラウドワークスペースなし、プロジェクトなし。音声はWhisperに送信され即座に破棄されます。TurboScribeは文字起こしをアカウントに保存します。' },
      ]}
      whenToChoose={{
        mictoo: [
          '登録の摩擦がゼロが欲しい',
          '無料プランでAI要約が必要',
          'ファイルが25 MB以下(または圧縮可能)',
          '履歴が保存されないことを評価する',
        ],
        them: [
          '無料プランで25 MBより大きなファイルが必要',
          '過去のすべての文字起こしの履歴が欲しい',
          '一度に複数ファイルをアップロード(バッチ)する必要がある',
          '無制限の大きなファイルのために$20/月を支払える',
        ],
      }}
      faq={[
        { q: '文字起こしの品質は同じですか?', a: '本質的にははい。どちらのツールもOpenAIのWhisperモデルを使用します。違いは各ツールが音声をセグメント化しエッジケースを処理する方法から生じますが、基本的な精度は同等です。' },
        { q: 'なぜMictooはファイル制限が小さいのですか?', a: '25 MBの制限はOpenAIのWhisper APIから来ています。TurboScribeはサーバーでファイルを分割し結果を結合することで、より大きなファイルを処理します。同じアプローチに取り組んでいます。' },
        { q: 'Mictooで長いファイルを文字起こしできますか?', a: '現時点では、ファイルは25 MB以下に収まる必要があります。サイトのhow-to-compress-audioガイドで、3つの素早い方法を説明しています: 音声を抽出、ビットレートを下げる、セグメントに分割。' },
        { q: 'Mictooはアカウント/履歴を追加する予定はありますか?', a: 'ローカル履歴(ブラウザに保存、サーバーアカウントなし)はロードマップにあります。登録によるクラウド履歴は意図的に製品に含めていません — 登録不要のポジショニングと衝突します。' },
        { q: 'どちらが速いですか?', a: 'TurboScribeは〜30分を1分以内に処理すると宣伝しています。Mictooは似ています — ほとんどのファイルが15〜30秒で文字起こしされます。25分以下のファイルでは、両方ともほぼ即座に感じられます。' },
      ]}
      relatedLinks={[
        { href: '/ja/descript-alternative', label: 'Descriptの代替' },
        { href: '/ja/notta-alternative', label: 'Nottaの代替' },
        { href: '/ja', label: 'Mictooを試す' },
      ]}
    />
  )
}
