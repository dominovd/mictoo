import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'pt': 'https://mictoo.com/pt/m4a-to-text',
  'pl': 'https://mictoo.com/pl/m4a-to-text',
  'ja': 'https://mictoo.com/ja/m4a-to-text',
  'ko': 'https://mictoo.com/ko/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4Aをテキストに — オンラインM4A無料文字起こし | Mictoo',
  description: 'M4A音声ファイルを無料でテキストに変換。iPhoneボイスメモ、録音、ポッドキャストなど任意のM4Aファイルをアップロードして、即座に文字起こしを取得。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/m4a-to-text', languages: LANGS },

  openGraph: {
    title: "M4Aをテキストに — オンラインM4A無料文字起こし | Mictoo",
    description: "M4A音声ファイルを無料でテキストに変換。iPhoneボイスメモ、録音、ポッドキャストなど任意のM4Aファイルをアップロードして、即座に文字起こしを取得。登録不要。",
    url: "https://mictoo.com/ja/m4a-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "M4Aをテキストに — オンラインM4A無料文字起こし | Mictoo",
    description: "M4A音声ファイルを無料でテキストに変換。iPhoneボイスメモ、録音、ポッドキャストなど任意のM4Aファイルをアップロードして、即座に文字起こしを取得。登録不要。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaM4AToTextPage() {
  return (
    <LandingLayout
      badge="M4A · iPhone · 無料 · 即座"
      h1={<>M4Aをテキストに<br /><span className="text-brand-600">オンラインM4A無料文字起こし</span></>}
      subtitle="M4A音声ファイルを即座にテキストに変換。iPhoneボイスメモ、音声録音、ポッドキャストファイルに最適。アカウント不要。"
      defaultLanguage="ja"
      valueBlock={
        <article className="prose-content">
          <p>M4AはiPhoneのボイスメモ、Apple系アプリ、FaceTime録音でよく見かける音声コンテナです。多くはAACで、場合によってはALACです。</p>
          <p>MictooはM4Aから音声を直接読み取り、会話、講義、メモを編集可能なテキストにします。WAVへ変換する必要はありません。</p>
        </article>
      }
      howItWorks={[
        { icon: '⬆️', title: 'ファイルをアップロード', desc: 'M4Aの録音または動画を選びます。変換してから入れる必要はありません。' },
        { icon: '🎧', title: '音声を読み取る', desc: 'Mictooが内部の音声トラックを取り出し、文字起こししやすい形にデコードします。' },
        { icon: '📝', title: '編集して保存', desc: '結果を確認し、名前や専門用語を直して、TXT、SRT、VTT、DOCXで保存できます。' },
      ]}
      whyUse={{
        title: 'M4AにMictooを使う理由',
        bullets: [
          { title: '変換ステップを減らせる', desc: '別の形式へ変換してからアップロードすると時間がかかり、管理するファイルも増えます。元ファイルを直接使えます。' },
          { title: '字幕にもメモにも使える', desc: 'テキストだけでなく、タイムスタンプ付きのSRTやVTTも作れるため、動画公開やレビューに使えます。' },
          { title: '長い録音を後から探せる', desc: '文字にしておくと、重要な発言、引用、質問、章立てを検索しやすくなります。' },
          { title: '登録なしで試せる', desc: '短い確認や一度だけの作業でも、アカウント作成なしで始められます。' },
        ],
      }}
      useCases={{
        title: 'M4A文字起こしの使い道',
        items: [
          { title: '会議やインタビューの記録', desc: '録音を文章にして、要約、引用、共有用メモへつなげられます。' },
          { title: '字幕の下書き', desc: '動画や音声公開前に、SRT/VTTの土台を作れます。' },
          { title: '教育・研究メモ', desc: '講義、調査、フィールドノートを検索できるテキストにできます。' },
          { title: '社内ナレッジ化', desc: 'デモ、説明会、トレーニングをあとで読める資料に変換できます。' },
        ],
      }}
      proTips={{
        title: 'M4A文字起こしのコツ',
        tips: [
          { title: '音声だけ必要なら抽出する', desc: '動画が大きすぎる場合は音声だけを書き出すとアップロードが速くなります。' },
          { title: '専門用語は最後に確認する', desc: '人名、商品名、聖書箇所、ブランド名などは手で見直すと品質が上がります。' },
          { title: '長い録音は分割する', desc: '長時間ファイルは章やセッションごとに分けると、確認と修正が楽になります。' },
        ],
      }}
      faq={[
        { q: 'M4Aをテキストに変換するには?', a: '上記のツールでM4Aファイルをアップロードしてください。文字起こしは自動的に生成され、数秒で表示されます。' },
        { q: 'iPhoneボイスメモを文字起こしできますか?', a: 'はい。iPhoneボイスメモはM4Aファイルとして保存されます。iPhoneから直接、またはコンピューターに転送後にファイルをアップロードしてください。' },
        { q: 'M4Aからテキストへの変換は無料ですか?', a: 'はい、完全に無料です。アカウント不要、サブスクリプション不要。アップロードして文字起こしするだけ。' },
        { q: 'M4Aの最大サイズは?', a: '最大25 MB。ほとんどの音声録音と短い音声クリップは、この制限に余裕で収まります。' },
        { q: '他にどの音声フォーマットに対応していますか?', a: 'M4Aに加えて、MictooはMP3、MP4、WAV、OGG、WEBM、FLACをサポートしています。' },
      ]}
      relatedLinks={[
        { href: '/ja/wav-to-text', label: 'WAVをテキストに' },
        { href: '/ja/transcribe-mp3-to-text', label: 'MP3をテキストに' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
