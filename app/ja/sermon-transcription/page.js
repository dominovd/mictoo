import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'pl': 'https://mictoo.com/pl/sermon-transcription',
  'ja': 'https://mictoo.com/ja/sermon-transcription',
  'ko': 'https://mictoo.com/ko/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: '説教文字起こし — 無料説教トランスクリプトジェネレーター | Mictoo',
  description: '説教や教会の音声を無料でテキストに文字起こし。ブログ、学習ノート、アクセシビリティに最適。MP3、MP4、M4Aに対応。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/sermon-transcription', languages: LANGS },

  openGraph: {
    title: "説教文字起こし — 無料説教トランスクリプトジェネレーター | Mictoo",
    description: "説教や教会の音声を無料でテキストに文字起こし。ブログ、学習ノート、アクセシビリティに最適。MP3、MP4、M4Aに対応。登録不要。",
    url: "https://mictoo.com/ja/sermon-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "説教文字起こし — 無料説教トランスクリプトジェネレーター | Mictoo",
    description: "説教や教会の音声を無料でテキストに文字起こし。ブログ、学習ノート、アクセシビリティに最適。MP3、MP4、M4Aに対応。登録不要。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaSermonPage() {
  return (
    <LandingLayout
      badge="説教 · 教会 · 無料"
      h1={<>説教文字起こし<br /><span className="text-brand-600">無料トランスクリプトジェネレーター</span></>}
      subtitle="説教録音を数秒で清書済みテキストに変換。教会のブログ、学習ガイド、SNS投稿、聴覚障害者向けアクセシビリティに最適。"
      defaultLanguage="ja"
      valueBlock={
        <article className="prose-content">
          <p>説教の文字起こしは、礼拝の記録だけでなく、教会サイト、学び会資料、引用、字幕、検索可能なアーカイブに使えます。</p>
          <p>Mictooは礼拝音声や動画から音声を取り出したファイルをテキスト化し、編集しやすい下書きを返します。</p>
        </article>
      }
      howItWorks={[
        { icon: '⬆️', title: 'ファイルをアップロード', desc: '説教の録音または動画を選びます。変換してから入れる必要はありません。' },
        { icon: '🎧', title: '音声を読み取る', desc: 'Mictooが内部の音声トラックを取り出し、文字起こししやすい形にデコードします。' },
        { icon: '📝', title: '編集して保存', desc: '結果を確認し、名前や専門用語を直して、TXT、SRT、VTT、DOCXで保存できます。' },
      ]}
      whyUse={{
        title: '説教にMictooを使う理由',
        bullets: [
          { title: '変換ステップを減らせる', desc: '別の形式へ変換してからアップロードすると時間がかかり、管理するファイルも増えます。元ファイルを直接使えます。' },
          { title: '字幕にもメモにも使える', desc: 'テキストだけでなく、タイムスタンプ付きのSRTやVTTも作れるため、動画公開やレビューに使えます。' },
          { title: '長い録音を後から探せる', desc: '文字にしておくと、重要な発言、引用、質問、章立てを検索しやすくなります。' },
          { title: '登録なしで試せる', desc: '短い確認や一度だけの作業でも、アカウント作成なしで始められます。' },
        ],
      }}
      useCases={{
        title: '説教文字起こしの使い道',
        items: [
          { title: '会議やインタビューの記録', desc: '録音を文章にして、要約、引用、共有用メモへつなげられます。' },
          { title: '字幕の下書き', desc: '動画や音声公開前に、SRT/VTTの土台を作れます。' },
          { title: '教育・研究メモ', desc: '講義、調査、フィールドノートを検索できるテキストにできます。' },
          { title: '社内ナレッジ化', desc: 'デモ、説明会、トレーニングをあとで読める資料に変換できます。' },
        ],
      }}
      proTips={{
        title: '説教文字起こしのコツ',
        tips: [
          { title: '音声だけ必要なら抽出する', desc: '動画が大きすぎる場合は音声だけを書き出すとアップロードが速くなります。' },
          { title: '専門用語は最後に確認する', desc: '人名、商品名、聖書箇所、ブランド名などは手で見直すと品質が上がります。' },
          { title: '長い録音は分割する', desc: '長時間ファイルは章やセッションごとに分けると、確認と修正が楽になります。' },
        ],
      }}
      faq={[
        { q: '説教録音をテキストに変換するには?', a: '教会のサウンドボード、ポッドキャストフィード、YouTubeからMP3、MP4、M4Aでエクスポート。上記からファイルをアップロードすると、Mictooが数秒で文字起こしを行います。' },
        { q: '教会のYouTubeチャンネルから説教を文字起こしできますか?', a: 'はい。自分のチャンネルの場合: YouTube Studio → コンテンツ → 動画をクリック → ダウンロード。Mictooにファイルをアップロードします。第三者のチャンネルの場合は許可が必要です。多くのミニストリーはポッドキャストフィード経由で音声ダウンロードを提供しています。' },
        { q: '聖書箇所や固有名詞はどうなりますか?', a: 'AI文字起こしは一般的な箇所と名前にはよく対応しますが、稀な聖書名や教会固有の用語を時々誤記することがあります。ダウンロード前にブラウザエディターで修正してください — 通常30秒のレビューで完了します。' },
        { q: '説教の最大長さは?', a: '最大25 MB。128 kbpsの30分の説教は余裕で収まります。長いメッセージ(45〜60分)の場合は、ビットレートを64 kbpsモノラルに下げるか、2つの部分に分割してください。' },
        { q: 'ファイルはプライベートに保たれますか?', a: 'はい。説教は処理され即座に削除されます。音声も文字起こし内容も保存しません。' },
      ]}
      relatedLinks={[
        { href: '/ja/podcast-transcription', label: 'ポッドキャスト文字起こし' },
        { href: '/ja/lecture-transcription', label: '講義文字起こし' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
