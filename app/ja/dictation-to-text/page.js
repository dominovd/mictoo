import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/dictation-to-text',
  'fr': 'https://mictoo.com/fr/dictation-to-text',
  'de': 'https://mictoo.com/de/dictation-to-text',
  'es': 'https://mictoo.com/es/dictation-to-text',
  'ru': 'https://mictoo.com/ru/dictation-to-text',
  'it': 'https://mictoo.com/it/dictation-to-text',
  'pt': 'https://mictoo.com/pt/dictation-to-text',
  'pl': 'https://mictoo.com/pl/dictation-to-text',
  'ja': 'https://mictoo.com/ja/dictation-to-text',
  'ko': 'https://mictoo.com/ko/dictation-to-text',
  'x-default': 'https://mictoo.com/dictation-to-text',
}

export const metadata = {
  title: '音声口述をテキストに — 無料音声ディクテーション文字起こし | Mictoo',
  description: '口述音声録音を無料でテキストに変換。作家、医師、弁護士、研究者に最適。MP3、M4A、WAV対応。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/dictation-to-text', languages: LANGS },

  openGraph: {
    title: "音声口述をテキストに — 無料音声ディクテーション文字起こし | Mictoo",
    description: "口述音声録音を無料でテキストに変換。作家、医師、弁護士、研究者に最適。MP3、M4A、WAV対応。登録不要。",
    url: "https://mictoo.com/ja/dictation-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "音声口述をテキストに — 無料音声ディクテーション文字起こし | Mictoo",
    description: "口述音声録音を無料でテキストに変換。作家、医師、弁護士、研究者に最適。MP3、M4A、WAV対応。登録不要。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaDictationPage() {
  return (
    <LandingLayout
      badge="ディクテーション · 声 → テキスト · 無料"
      h1={<>音声口述をテキストに<br /><span className="text-brand-600">無料音声ディクテーション文字起こし</span></>}
      subtitle="考えを録音、章を口述、メモを取る — そしてここにファイルをアップロードして正確なテキスト文字起こしを取得。登録不要、インストールするアプリ不要。"
      defaultLanguage="ja"
      features={[
        { icon: '📝', title: '作家と研究者向け', desc: '章のドラフト、記事のアウトライン、インタビューノートを口述。Mictooは数秒で声を清書済みで編集可能なテキストに変換します。' },
        { icon: '👨‍⚕️', title: '医師と弁護士向け', desc: 'スマートフォンで症例ノート、患者の要約、メモを口述し、テキストに変換して記録に保存。ファイルは処理後即座に削除されます。' },
        { icon: '🌍', title: '50以上の言語', desc: '日本語、英語、中国語、韓国語、スペイン語、フランス語、ドイツ語などで口述できます。言語は自動検出され、必要に応じて変更できます。' },
      ]}
      faq={[
        { q: 'スマートフォンで口述を録音するには?', a: 'iPhone: ボイスメモアプリ — .m4aでエクスポート。Android: 内蔵レコーダーまたはEasy Voice Recorder — .mp3または.m4aでエクスポート。ファイルをMictooにアップロードしてください。' },
        { q: 'Mictooはリアルタイムディクテーションツールですか?', a: 'いいえ — Mictooは既存の音声ファイルを文字起こしします。リアルタイムディクテーション(話しながらテキストを見る)には、システムの組み込みディクテーション(macOS、Windows、iOS、Android)を使用してください。後でMictooを使って長い録音を整理できます。' },
        { q: '口述文字起こしの精度はどのくらい?', a: '一人で話す明瞭な口述は通常95%以上の精度で文字起こしされます。自然なペースで、静かな部屋で話し、最良の結果のためにヘッドフォンを使用してください。' },
        { q: '医療や法務の口述に使えますか?', a: 'はい、ただしAI処理による患者や顧客データの取り扱いに関する現地法規制を確認してください。Mictooはファイルを保存しません — ですが音声は文字起こしのためにAIプロバイダーを経由します。規制対象のワークフローについては、コンプライアンスチームに相談してください。' },
        { q: '口述の最大長さは?', a: '最大25 MB。64 kbpsモノラルで約50分の口述に相当します。長い録音の場合は、章ごとに分割するか、ビットレートを下げてください。' },
      ]}
      relatedLinks={[
        { href: '/ja/voice-memo-to-text', label: 'ボイスメモをテキストに' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
