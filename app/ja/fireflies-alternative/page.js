import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/fireflies-alternative',
  'fr': 'https://mictoo.com/fr/fireflies-alternative',
  'de': 'https://mictoo.com/de/fireflies-alternative',
  'es': 'https://mictoo.com/es/fireflies-alternative',
  'ru': 'https://mictoo.com/ru/fireflies-alternative',
  'it': 'https://mictoo.com/it/fireflies-alternative',
  'pt': 'https://mictoo.com/pt/fireflies-alternative',
  'pl': 'https://mictoo.com/pl/fireflies-alternative',
  'ja': 'https://mictoo.com/ja/fireflies-alternative',
  'ko': 'https://mictoo.com/ko/fireflies-alternative',
  'x-default': 'https://mictoo.com/fireflies-alternative',
}

export const metadata = {
  title: 'Firefliesの代替 — ボットなしで会議を文字起こし | Mictoo',
  description: 'Firefliesはボットとして会議に参加して録音・文字起こしを行います。Mictooはすでにある録音を文字起こし — ボットなし、登録なし、OAuthなし。OpenAI Whisperで無料。',
  alternates: { canonical: 'https://mictoo.com/ja/fireflies-alternative', languages: LANGS },

  openGraph: {
    title: "Firefliesの代替 — ボットなしで会議を文字起こし | Mictoo",
    description: "Firefliesはボットとして会議に参加して録音・文字起こしを行います。Mictooはすでにある録音を文字起こし — ボットなし、登録なし、OAuthなし。OpenAI Whisperで無料。",
    url: "https://mictoo.com/ja/fireflies-alternative",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firefliesの代替 — ボットなしで会議を文字起こし | Mictoo",
    description: "Firefliesはボットとして会議に参加して録音・文字起こしを行います。Mictooはすでにある録音を文字起こし — ボットなし、登録なし、OAuthなし。OpenAI Whisperで無料。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaFirefliesAlternativePage() {
  return (
    <ComparisonLayout
      badge="比較 · Fireflies · 無料"
      h1={<>Firefliesの代替<br /><span className="text-brand-600">ボットなしで会議を文字起こし</span></>}
      subtitle="Firefliesはあなたの会議にAIボットとして参加し、リアルタイムで録音と文字起こしを行います。Mictooは逆の動作 — すでにある録音をアップロードして文字起こしを取得。ボットなし、カレンダー統合なし、登録なし。"
      competitorName="Fireflies"
      rows={[
        { label: '無料プラン',           mictoo: '月間制限なし、1ファイルあたり25 MB', them: '800分 / ユーザー / 月' },
        { label: 'アカウント必須',       mictoo: 'いいえ', them: 'はい(メール + OAuth)' },
        { label: '有料プラン',           mictoo: '無料',  them: '$10〜19 / ユーザー / 月' },
        { label: '録音方法',             mictoo: '自分で録音をアップロード', them: 'ボットがライブ会議に参加' },
        { label: 'ライブ文字起こし',     mictoo: 'いいえ', them: 'はい(通話中)' },
        { label: 'カレンダー統合',       mictoo: 'いいえ', them: 'Google / Outlook / Zoom' },
        { label: 'AI要約',               mictoo: 'はい、無料', them: 'はい(有料)' },
        { label: 'CRM統合',              mictoo: 'いいえ', them: 'Salesforce、HubSpotなど' },
        { label: '文字起こしモデル',     mictoo: 'OpenAI Whisper', them: '独自' },
      ]}
      whyMictoo={[
        { icon: '🚫', title: '会議にボットなし', desc: '一部の参加者は通話を録音するAIボットに不快感を覚えます。MictooならZoom/Meet/Teamsでローカルに録音して後で文字起こしできます。' },
        { icon: '🆓', title: '登録なし、クォータなし', desc: 'Fireflies無料プランは800分/ユーザー/月に制限し、OAuthが必要です。Mictooはアカウントなしで動作し、月の分数カウントなし。' },
        { icon: '🌍', title: '英語以外の音声に強い', desc: 'OpenAI Whisperは50以上の言語を高精度でサポートします。Firefliesは英語のビジネス通話に最適化されており、日本語、ウクライナ語、韓国語などには弱いです。' },
      ]}
      whenToChoose={{
        mictoo: [
          '自分で会議を録音し、終了後に文字起こしが欲しい',
          '通話に参加するAIボットが欲しくない',
          '他の言語の会議の文字起こしが必要',
          '一度きりの録音のために登録不要の無料オプションが欲しい',
        ],
        them: [
          '会議中にライブ文字起こしが欲しい',
          'セールス通話のCRMロギングが必要',
          'チームがすべての通話の自動録音を望む',
          '会話分析(話す時間、感情分析など)が必要',
        ],
      }}
      faq={[
        { q: 'MictooはFirefliesのようにZoomやTeams会議に参加できますか?', a: 'いいえ。Mictooは会議に参加しません。Zoom/Teams/Meetの組み込み録音で通話を録音し、ファイルをアップロードします。これは会議でのボットと関連するプライバシーの問題を避けます。' },
        { q: 'アップロード用の録音を取得するには?', a: 'Zoomで: 会議中にローカル録音またはクラウド録音を有効にします。会議後、ZoomからMP4またはM4Aをダウンロードしてmictooにアップロードします。' },
        { q: 'MictooはFirefliesのようにアクションアイテムや要約を作成しますか?', a: 'はい。文字起こし後、MictooのAI要約には2〜3文の概要、要点、アクションアイテムが表示されます — すべて無料プランで。Firefliesは同様の機能を有料プランでのみ提供します。' },
        { q: '会議分析については?', a: 'Mictooは話す時間、感情、スピーカー分析を行いません。セールスコーチング用の会話インテリジェンスが必要な場合は、Fireflies(またはGong)の方が良いです。' },
        { q: 'Mictooは機密会議に安全ですか?', a: 'ファイルはOpenAIのWhisper APIに直接送信され、破棄されます。Mictooは何も保存しません。OpenAIのAPIデータポリシーによれば、音声は学習に使用されず、不正利用監視のために最大30日後に削除されます。' },
      ]}
      relatedLinks={[
        { href: '/ja/otter-alternative', label: 'Otterの代替' },
        { href: '/ja/meeting-transcription', label: '会議の文字起こし' },
        { href: '/ja/zoom-transcription', label: 'Zoom文字起こし' },
        { href: '/ja', label: 'Mictooを試す' },
      ]}
    />
  )
}
