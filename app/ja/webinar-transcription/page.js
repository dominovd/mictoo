import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'ja': 'https://mictoo.com/ja/webinar-transcription',
  'ko': 'https://mictoo.com/ko/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: 'ウェビナー文字起こし — 録画の無料トランスクリプト | Mictoo',
  description: 'ウェビナー録画をテキストとSRT字幕に無料で文字起こし。Zoom、Webex、GoToWebinarおよび任意のMP4・MP3エクスポートで動作。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/webinar-transcription', languages: LANGS },

  openGraph: {
    title: "ウェビナー文字起こし — 録画の無料トランスクリプト | Mictoo",
    description: "ウェビナー録画をテキストとSRT字幕に無料で文字起こし。Zoom、Webex、GoToWebinarおよび任意のMP4・MP3エクスポートで動作。登録不要。",
    url: "https://mictoo.com/ja/webinar-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ウェビナー文字起こし — 録画の無料トランスクリプト | Mictoo",
    description: "ウェビナー録画をテキストとSRT字幕に無料で文字起こし。Zoom、Webex、GoToWebinarおよび任意のMP4・MP3エクスポートで動作。登録不要。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaWebinarPage() {
  return (
    <LandingLayout
      badge="ウェビナー · MP4 · 無料"
      h1={<>ウェビナー文字起こし<br /><span className="text-brand-600">無料トランスクリプトジェネレーター</span></>}
      subtitle="ウェビナー録画を検索可能なテキスト文字起こしまたはSRT字幕ファイルに変換。Zoom、Webex、GoToWebinarおよび任意のMP4/MP3エクスポートで動作します。"
      defaultLanguage="ja"
      valueBlock={
        <article className="prose-content">
          <p>ウェビナー録画は、イベント後に記事、ナレッジベース、FAQ、フォローアップメールへ再利用できます。まず文字にすると、使える部分を探しやすくなります。</p>
          <p>MictooはMP4や音声だけの録音をアップロードして、Q&A、説明パート、製品名を後から整えられるテキストにします。</p>
        </article>
      }
      howItWorks={[
        { icon: '⬆️', title: 'ファイルをアップロード', desc: 'ウェビナーの録音または動画を選びます。変換してから入れる必要はありません。' },
        { icon: '🎧', title: '音声を読み取る', desc: 'Mictooが内部の音声トラックを取り出し、文字起こししやすい形にデコードします。' },
        { icon: '📝', title: '編集して保存', desc: '結果を確認し、名前や専門用語を直して、TXT、SRT、VTT、DOCXで保存できます。' },
      ]}
      whyUse={{
        title: 'ウェビナーにMictooを使う理由',
        bullets: [
          { title: '変換ステップを減らせる', desc: '別の形式へ変換してからアップロードすると時間がかかり、管理するファイルも増えます。元ファイルを直接使えます。' },
          { title: '字幕にもメモにも使える', desc: 'テキストだけでなく、タイムスタンプ付きのSRTやVTTも作れるため、動画公開やレビューに使えます。' },
          { title: '長い録音を後から探せる', desc: '文字にしておくと、重要な発言、引用、質問、章立てを検索しやすくなります。' },
          { title: '登録なしで試せる', desc: '短い確認や一度だけの作業でも、アカウント作成なしで始められます。' },
        ],
      }}
      useCases={{
        title: 'ウェビナー文字起こしの使い道',
        items: [
          { title: '会議やインタビューの記録', desc: '録音を文章にして、要約、引用、共有用メモへつなげられます。' },
          { title: '字幕の下書き', desc: '動画や音声公開前に、SRT/VTTの土台を作れます。' },
          { title: '教育・研究メモ', desc: '講義、調査、フィールドノートを検索できるテキストにできます。' },
          { title: '社内ナレッジ化', desc: 'デモ、説明会、トレーニングをあとで読める資料に変換できます。' },
        ],
      }}
      proTips={{
        title: 'ウェビナー文字起こしのコツ',
        tips: [
          { title: '音声だけ必要なら抽出する', desc: '動画が大きすぎる場合は音声だけを書き出すとアップロードが速くなります。' },
          { title: '専門用語は最後に確認する', desc: '人名、商品名、聖書箇所、ブランド名などは手で見直すと品質が上がります。' },
          { title: '長い録音は分割する', desc: '長時間ファイルは章やセッションごとに分けると、確認と修正が楽になります。' },
        ],
      }}
      faq={[
        { q: 'ZoomまたはWebexのウェビナー録画をダウンロードするには?', a: 'Zoom: ウェブポータル → 録画 → ウェビナーをクリック → ダウンロード。Webex: マイ録画で録画を開く → ダウンロード。どちらもデフォルトでMP4でエクスポートします。' },
        { q: 'ウェビナーがライブ中に文字起こしを取得できますか?', a: 'Mictooは録画ファイルで動作し、ライブストリームでは動作しません。リアルタイム字幕にはウェビナープラットフォームのライブキャプション機能を使用し、終了後に録画をアップロードして洗練された文字起こしを取得してください。' },
        { q: '複数のスピーカーとQ&Aセッションについては?', a: 'Mictooはすべての発言を含む単一の文字起こしを生成します。スピーカーラベル(ホスト、パネリスト1、聴衆)は、ダウンロード前にブラウザエディターで手動で追加できます。' },
        { q: 'ウェビナーの最大長さは?', a: '1ファイルあたり最大25 MB。64 kbpsモノラルの60分ウェビナーは余裕で収まります。長いセッションの場合は、低いビットレートでエクスポートするか、M4A音声を抽出してください。' },
        { q: '技術用語の文字起こしは正確ですか?', a: 'クリアな音声では精度が高いです。ブランド名、頭字語、珍しい用語は時々誤記されます — エクスポート前にブラウザエディターで簡単に修正できます。' },
      ]}
      relatedLinks={[
        { href: '/ja/meeting-transcription', label: '会議の文字起こし' },
        { href: '/ja/zoom-transcription', label: 'Zoom文字起こし' },
        { href: '/ja/free-srt-generator', label: 'SRTジェネレーター' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
