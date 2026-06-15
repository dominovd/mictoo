import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-text',
  'fr': 'https://mictoo.com/fr/flac-to-text',
  'de': 'https://mictoo.com/de/flac-to-text',
  'es': 'https://mictoo.com/es/flac-to-text',
  'ru': 'https://mictoo.com/ru/flac-to-text',
  'it': 'https://mictoo.com/it/flac-to-text',
  'pt': 'https://mictoo.com/pt/flac-to-text',
  'pl': 'https://mictoo.com/pl/flac-to-text',
  'ja': 'https://mictoo.com/ja/flac-to-text',
  'ko': 'https://mictoo.com/ko/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLACをテキストに — オンラインFLAC音声無料文字起こし | Mictoo',
  description: 'FLACファイルをオンラインで無料でテキストに変換。任意のFLAC録音をアップロードして、数秒で正確な文字起こしを取得。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/flac-to-text', languages: LANGS },

  openGraph: {
    title: "FLACをテキストに — オンラインFLAC音声無料文字起こし | Mictoo",
    description: "FLACファイルをオンラインで無料でテキストに変換。任意のFLAC録音をアップロードして、数秒で正確な文字起こしを取得。登録不要。",
    url: "https://mictoo.com/ja/flac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLACをテキストに — オンラインFLAC音声無料文字起こし | Mictoo",
    description: "FLACファイルをオンラインで無料でテキストに変換。任意のFLAC録音をアップロードして、数秒で正確な文字起こしを取得。登録不要。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaFlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · ロスレス · 無料"
      h1={<>FLACをテキストに<br /><span className="text-brand-600">オンラインFLAC無料文字起こし</span></>}
      subtitle="任意のFLAC音声ファイルをアップロードして、即座にテキストに変換。FLACのロスレス品質により、優れた文字起こし精度を実現します。アカウント不要。"
      defaultLanguage="ja"
      valueBlock={
        <article className="prose-content">
          <p>FLACは音質を落とさずに圧縮する形式です。インタビューのマスター、フィールド録音、口述史料、音楽以外の長期保存音声でよく使われます。</p>
          <p>MictooはFLACをMP3へ変換せずにデコードします。難しい録音ほど、元の情報を残したまま処理する意味があります。</p>
        </article>
      }
      howItWorks={[
        { icon: '⬆️', title: 'ファイルをアップロード', desc: 'FLACの録音または動画を選びます。変換してから入れる必要はありません。' },
        { icon: '🎧', title: '音声を読み取る', desc: 'Mictooが内部の音声トラックを取り出し、文字起こししやすい形にデコードします。' },
        { icon: '📝', title: '編集して保存', desc: '結果を確認し、名前や専門用語を直して、TXT、SRT、VTT、DOCXで保存できます。' },
      ]}
      whyUse={{
        title: 'FLACにMictooを使う理由',
        bullets: [
          { title: '変換ステップを減らせる', desc: '別の形式へ変換してからアップロードすると時間がかかり、管理するファイルも増えます。元ファイルを直接使えます。' },
          { title: '字幕にもメモにも使える', desc: 'テキストだけでなく、タイムスタンプ付きのSRTやVTTも作れるため、動画公開やレビューに使えます。' },
          { title: '長い録音を後から探せる', desc: '文字にしておくと、重要な発言、引用、質問、章立てを検索しやすくなります。' },
          { title: '登録なしで試せる', desc: '短い確認や一度だけの作業でも、アカウント作成なしで始められます。' },
        ],
      }}
      useCases={{
        title: 'FLAC文字起こしの使い道',
        items: [
          { title: '会議やインタビューの記録', desc: '録音を文章にして、要約、引用、共有用メモへつなげられます。' },
          { title: '字幕の下書き', desc: '動画や音声公開前に、SRT/VTTの土台を作れます。' },
          { title: '教育・研究メモ', desc: '講義、調査、フィールドノートを検索できるテキストにできます。' },
          { title: '社内ナレッジ化', desc: 'デモ、説明会、トレーニングをあとで読める資料に変換できます。' },
        ],
      }}
      proTips={{
        title: 'FLAC文字起こしのコツ',
        tips: [
          { title: '音声だけ必要なら抽出する', desc: '動画が大きすぎる場合は音声だけを書き出すとアップロードが速くなります。' },
          { title: '専門用語は最後に確認する', desc: '人名、商品名、聖書箇所、ブランド名などは手で見直すと品質が上がります。' },
          { title: '長い録音は分割する', desc: '長時間ファイルは章やセッションごとに分けると、確認と修正が楽になります。' },
        ],
      }}
      faq={[
        { q: 'FLACファイルをテキストに変換するには?', a: '上記のツールでFLACファイルをアップロードしてください。AIが文字起こしを行い、数秒でテキストを表示します。' },
        { q: 'FLACはMP3より正確に文字起こしされますか?', a: 'FLACのロスレス品質は、強く圧縮されたフォーマットと比較して、静かな音声や複雑な音声でわずかに精度を向上させる可能性があります。' },
        { q: 'FLACからテキストへの変換は無料ですか?', a: 'はい、完全に無料です。アカウントや登録は不要です。' },
        { q: 'FLACの最大サイズは?', a: '最大25 MB。FLACファイルはロスレス圧縮のため大きいです — ファイルが制限を超える場合は、ロッシーフォーマットへの変換を検討してください。' },
      ]}
      relatedLinks={[
        { href: '/ja/wav-to-text', label: 'WAVをテキストに' },
        { href: '/ja/transcribe-mp3-to-text', label: 'MP3をテキストに' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
