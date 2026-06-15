import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-text',
  'fr': 'https://mictoo.com/fr/webm-to-text',
  'de': 'https://mictoo.com/de/webm-to-text',
  'es': 'https://mictoo.com/es/webm-to-text',
  'ru': 'https://mictoo.com/ru/webm-to-text',
  'it': 'https://mictoo.com/it/webm-to-text',
  'pt': 'https://mictoo.com/pt/webm-to-text',
  'pl': 'https://mictoo.com/pl/webm-to-text',
  'ja': 'https://mictoo.com/ja/webm-to-text',
  'ko': 'https://mictoo.com/ko/webm-to-text',
  'x-default': 'https://mictoo.com/webm-to-text',
}

export const metadata = {
  title: 'WEBMをテキストに — オンラインWEBM無料文字起こし | Mictoo',
  description: 'WEBM音声・動画ファイルをオンラインで無料でテキストに変換。任意のWEBM録画をアップロードして、即座に正確な文字起こしを取得。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/webm-to-text', languages: LANGS },

  openGraph: {
    title: "WEBMをテキストに — オンラインWEBM無料文字起こし | Mictoo",
    description: "WEBM音声・動画ファイルをオンラインで無料でテキストに変換。任意のWEBM録画をアップロードして、即座に正確な文字起こしを取得。登録不要。",
    url: "https://mictoo.com/ja/webm-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBMをテキストに — オンラインWEBM無料文字起こし | Mictoo",
    description: "WEBM音声・動画ファイルをオンラインで無料でテキストに変換。任意のWEBM録画をアップロードして、即座に正確な文字起こしを取得。登録不要。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaWebmToTextPage() {
  return (
    <LandingLayout
      badge="WEBM · ブラウザ録画 · 無料"
      h1={<>WEBMをテキストに<br /><span className="text-brand-600">オンラインWEBM無料文字起こし</span></>}
      subtitle="任意のWEBM音声または動画ファイルをアップロードして、数秒で正確なテキスト文字起こしを取得。WEBMはブラウザ、画面録画ツール、ビデオ会議ツールで広く使用されています。アカウント不要。"
      defaultLanguage="ja"
      valueBlock={
        <article className="prose-content">
          <p>WebMはブラウザ録画や画面収録でよく使われる動画コンテナです。Mictooは動画全体を編集するのではなく、内部のOpusやVorbis音声を取り出して文字起こしします。</p>
          <p>Loom、OBS、Chromeの録画、ブラウザ通話のバックアップを、記事、議事録、字幕の下書きに変換できます。</p>
        </article>
      }
      howItWorks={[
        { icon: '⬆️', title: 'ファイルをアップロード', desc: 'WebMの録音または動画を選びます。変換してから入れる必要はありません。' },
        { icon: '🎧', title: '音声を読み取る', desc: 'Mictooが内部の音声トラックを取り出し、文字起こししやすい形にデコードします。' },
        { icon: '📝', title: '編集して保存', desc: '結果を確認し、名前や専門用語を直して、TXT、SRT、VTT、DOCXで保存できます。' },
      ]}
      whyUse={{
        title: 'WebMにMictooを使う理由',
        bullets: [
          { title: '変換ステップを減らせる', desc: '別の形式へ変換してからアップロードすると時間がかかり、管理するファイルも増えます。元ファイルを直接使えます。' },
          { title: '字幕にもメモにも使える', desc: 'テキストだけでなく、タイムスタンプ付きのSRTやVTTも作れるため、動画公開やレビューに使えます。' },
          { title: '長い録音を後から探せる', desc: '文字にしておくと、重要な発言、引用、質問、章立てを検索しやすくなります。' },
          { title: '登録なしで試せる', desc: '短い確認や一度だけの作業でも、アカウント作成なしで始められます。' },
        ],
      }}
      useCases={{
        title: 'WebM文字起こしの使い道',
        items: [
          { title: '会議やインタビューの記録', desc: '録音を文章にして、要約、引用、共有用メモへつなげられます。' },
          { title: '字幕の下書き', desc: '動画や音声公開前に、SRT/VTTの土台を作れます。' },
          { title: '教育・研究メモ', desc: '講義、調査、フィールドノートを検索できるテキストにできます。' },
          { title: '社内ナレッジ化', desc: 'デモ、説明会、トレーニングをあとで読める資料に変換できます。' },
        ],
      }}
      proTips={{
        title: 'WebM文字起こしのコツ',
        tips: [
          { title: '音声だけ必要なら抽出する', desc: '動画が大きすぎる場合は音声だけを書き出すとアップロードが速くなります。' },
          { title: '専門用語は最後に確認する', desc: '人名、商品名、聖書箇所、ブランド名などは手で見直すと品質が上がります。' },
          { title: '長い録音は分割する', desc: '長時間ファイルは章やセッションごとに分けると、確認と修正が楽になります。' },
        ],
      }}
      faq={[
        { q: 'WEBMをテキストに変換するには?', a: '上記にWEBMファイルをアップロードしてください。文字起こしは数秒で自動的に生成されます。' },
        { q: 'WEBMからテキストへの変換は無料ですか?', a: 'はい、完全に無料です。アカウントや登録は不要です。' },
        { q: 'Chromeの画面録画を文字起こしできますか?', a: 'はい。Chromeの組み込み画面録画ツールはWEBMとして動画を保存します。ファイルを直接アップロードして文字起こしを取得してください。' },
        { q: 'WEBMの最大サイズは?', a: '最大25 MB。大きな録画の場合は、最初に音声トラックを抽出してサイズを減らしてください。' },
      ]}
      relatedLinks={[
        { href: '/ja/transcribe-video-to-text', label: '動画をテキストに' },
        { href: '/ja/wav-to-text', label: 'WAVをテキストに' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
