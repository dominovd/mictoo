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
      valueBlock={
        <article className="prose-content">
          <p>録音済みのディクテーションは、リアルタイム入力とは違います。考えながら話して、あとで文章として整えるためのワークフローです。</p>
          <p>Mictooに音声を入れると、下書き、メモ、章立て、報告書の素材として使えるテキストになります。</p>
        </article>
      }
      howItWorks={[
        { icon: '⬆️', title: 'ファイルをアップロード', desc: 'ディクテーションの録音または動画を選びます。変換してから入れる必要はありません。' },
        { icon: '🎧', title: '音声を読み取る', desc: 'Mictooが内部の音声トラックを取り出し、文字起こししやすい形にデコードします。' },
        { icon: '📝', title: '編集して保存', desc: '結果を確認し、名前や専門用語を直して、TXT、SRT、VTT、DOCXで保存できます。' },
      ]}
      whyUse={{
        title: 'ディクテーションにMictooを使う理由',
        bullets: [
          { title: '変換ステップを減らせる', desc: '別の形式へ変換してからアップロードすると時間がかかり、管理するファイルも増えます。元ファイルを直接使えます。' },
          { title: '字幕にもメモにも使える', desc: 'テキストだけでなく、タイムスタンプ付きのSRTやVTTも作れるため、動画公開やレビューに使えます。' },
          { title: '長い録音を後から探せる', desc: '文字にしておくと、重要な発言、引用、質問、章立てを検索しやすくなります。' },
          { title: '登録なしで試せる', desc: '短い確認や一度だけの作業でも、アカウント作成なしで始められます。' },
        ],
      }}
      useCases={{
        title: 'ディクテーション文字起こしの使い道',
        items: [
          { title: '会議やインタビューの記録', desc: '録音を文章にして、要約、引用、共有用メモへつなげられます。' },
          { title: '字幕の下書き', desc: '動画や音声公開前に、SRT/VTTの土台を作れます。' },
          { title: '教育・研究メモ', desc: '講義、調査、フィールドノートを検索できるテキストにできます。' },
          { title: '社内ナレッジ化', desc: 'デモ、説明会、トレーニングをあとで読める資料に変換できます。' },
        ],
      }}
      proTips={{
        title: 'ディクテーション文字起こしのコツ',
        tips: [
          { title: '音声だけ必要なら抽出する', desc: '動画が大きすぎる場合は音声だけを書き出すとアップロードが速くなります。' },
          { title: '専門用語は最後に確認する', desc: '人名、商品名、聖書箇所、ブランド名などは手で見直すと品質が上がります。' },
          { title: '長い録音は分割する', desc: '長時間ファイルは章やセッションごとに分けると、確認と修正が楽になります。' },
        ],
      }}
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
