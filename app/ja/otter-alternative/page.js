import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/otter-alternative',
  'fr': 'https://mictoo.com/fr/otter-alternative',
  'de': 'https://mictoo.com/de/otter-alternative',
  'es': 'https://mictoo.com/es/otter-alternative',
  'ru': 'https://mictoo.com/ru/otter-alternative',
  'it': 'https://mictoo.com/it/otter-alternative',
  'pt': 'https://mictoo.com/pt/otter-alternative',
  'pl': 'https://mictoo.com/pl/otter-alternative',
  'ja': 'https://mictoo.com/ja/otter-alternative',
  'ko': 'https://mictoo.com/ko/otter-alternative',
  'x-default': 'https://mictoo.com/otter-alternative',
}

export const metadata = {
  title: 'Otterの代替 — ライブ会議ではなく録音を文字起こし | Mictoo',
  description: 'Otterはライブ会議のリアルタイム字幕用に作られています。Mictooはすでにある録音を文字起こし — 無料、登録不要、ボットなし。OpenAI Whisperベース。',
  alternates: { canonical: 'https://mictoo.com/ja/otter-alternative', languages: LANGS },

  openGraph: {
    title: "Otterの代替 — ライブ会議ではなく録音を文字起こし | Mictoo",
    description: "Otterはライブ会議のリアルタイム字幕用に作られています。Mictooはすでにある録音を文字起こし — 無料、登録不要、ボットなし。OpenAI Whisperベース。",
    url: "https://mictoo.com/ja/otter-alternative",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Otterの代替 — ライブ会議ではなく録音を文字起こし | Mictoo",
    description: "Otterはライブ会議のリアルタイム字幕用に作られています。Mictooはすでにある録音を文字起こし — 無料、登録不要、ボットなし。OpenAI Whisperベース。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaOtterAlternativePage() {
  return (
    <ComparisonLayout
      badge="比較 · Otter · 無料"
      h1={<>Otterの代替<br /><span className="text-brand-600">ライブ会議ではなく録音用</span></>}
      subtitle="Otterはライブ会議の文字起こしで有名です — 人々が話すと字幕が表示されます。Mictooは問題の後半を解決します: すでにある録音を数秒でテキストに文字起こし。無料、登録不要、OpenAI Whisper。"
      competitorName="Otter"
      rows={[
        { label: '無料プラン',           mictoo: '月間制限なし、1ファイルあたり25 MB', them: '月300分、録音あたり30分' },
        { label: 'アカウント必須',       mictoo: 'いいえ', them: 'はい(メール登録)' },
        { label: '有料プラン',           mictoo: '無料',  them: '$8.33〜30 / ユーザー / 月' },
        { label: 'ライブ文字起こし',     mictoo: 'いいえ', them: 'はい(リアルタイム字幕)' },
        { label: '録音アップロード',     mictoo: 'はい(ドラッグ&ドロップ)', them: 'はい(有料インポート)' },
        { label: 'AI要約',               mictoo: 'はい、無料', them: 'はい(有料)' },
        { label: '文字起こしモデル',     mictoo: 'OpenAI Whisper', them: '独自' },
        { label: 'スピーカーラベル',     mictoo: '手動編集', them: '自動(有料)' },
        { label: '言語',                 mictoo: '50以上', them: '3(英語、フランス語、スペイン語)' },
      ]}
      whyMictoo={[
        { icon: '🌍', title: '3対50以上の言語', desc: 'Otterは英語、フランス語、スペイン語のみをサポートしています。MictooはWhisperを使用し、自動検出で50以上の言語をサポートします — 日本語、ドイツ語、ロシア語、中国語、韓国語、アラビア語など。' },
        { icon: '🆓', title: '300分制限なし', desc: 'Otterの無料プランは月300分に制限されています。Mictooには分のクォータがありません — ファイルあたり25 MBの制限のみ。' },
        { icon: '🚫', title: '会議にボットなし', desc: 'Otterの価値は通話に参加するライブボットです。会議にAIボットなしでローカルに録音したい場合、Mictooはそのワークフローに合います。' },
      ]}
      whenToChoose={{
        mictoo: [
          '録音があり、迅速で無料の文字起こしが欲しい',
          '英語以外の音声で作業(日本語、中国語、ロシア語など)',
          '通話にAIボットが欲しくない',
          '会議だけでなくポッドキャスト、講義、ボイスメモを文字起こし',
        ],
        them: [
          '会議中のライブ字幕が欲しい',
          '共有会議ノートが必要なチームにいる',
          'Otter AssistantのZoom/Google Meet統合が重要',
          'スピーカーダイアライゼーションが必須要件(有料プラン)',
        ],
      }}
      faq={[
        { q: 'MictooはOtterのようなライブ文字起こしを行いますか?', a: 'いいえ。Mictooは録音ファイルでのみ動作します。会議中のリアルタイム文字起こしには、Otter、Zoomの組み込み字幕、Google Meetを使用してください。後で洗練された文字起こしファイルが欲しい場合はMictooを使用してください。' },
        { q: 'Mictooはポッドキャスターにとってのほぼ代替ですか?', a: '特にポッドキャスト文字起こしについてはそうです。MP3/M4Aをアップロードし、文字起こしを取得し、.txtまたは.srtとしてダウンロードします。Otterの価値はライブキャプチャ、Mictooの価値は録音後の迅速な文字起こしです。' },
        { q: '会議の要約については?', a: 'どちらのツールも要点とアクションアイテム付きのAI要約を生成します。Otterは有料プランに置いています。Mictooはすべての文字起こしで無料で提供します。' },
        { q: 'Mictooは英語以外の音声に正確ですか?', a: 'はい — OpenAI Whisperは利用可能な最強の多言語音声モデルの一つです。Otterは英語、フランス語、スペイン語に制限されています。Mictooは自動検出で50以上の言語をサポートします。' },
        { q: 'Mictooにモバイルアプリはありますか?', a: 'ネイティブアプリはありませんが、サイトはモバイルブラウザで動作します。iPhoneまたはAndroidでmictoo.comを開き、デバイスからファイルを選び、文字起こしを取得します。' },
      ]}
      relatedLinks={[
        { href: '/ja/fireflies-alternative', label: 'Firefliesの代替' },
        { href: '/ja/meeting-transcription', label: '会議の文字起こし' },
        { href: '/ja/voice-memo-to-text', label: 'ボイスメモをテキストに' },
        { href: '/ja', label: 'Mictooを試す' },
      ]}
    />
  )
}
