import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-text',
  'fr': 'https://mictoo.com/fr/wav-to-text',
  'de': 'https://mictoo.com/de/wav-to-text',
  'es': 'https://mictoo.com/es/wav-to-text',
  'ru': 'https://mictoo.com/ru/wav-to-text',
  'it': 'https://mictoo.com/it/wav-to-text',
  'pt': 'https://mictoo.com/pt/wav-to-text',
  'pl': 'https://mictoo.com/pl/wav-to-text',
  'ja': 'https://mictoo.com/ja/wav-to-text',
  'ko': 'https://mictoo.com/ko/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export const metadata = {
  title: 'WAVをテキストに — オンラインWAV無料文字起こし | Mictoo',
  description: 'WAVファイルをオンラインで無料でテキストに変換。任意のWAV音声ファイルをアップロードして、数秒で正確な文字起こしを取得。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/wav-to-text', languages: LANGS },

  openGraph: {
    title: "WAVをテキストに — オンラインWAV無料文字起こし | Mictoo",
    description: "WAVファイルをオンラインで無料でテキストに変換。任意のWAV音声ファイルをアップロードして、数秒で正確な文字起こしを取得。登録不要。",
    url: "https://mictoo.com/ja/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAVをテキストに — オンラインWAV無料文字起こし | Mictoo",
    description: "WAVファイルをオンラインで無料でテキストに変換。任意のWAV音声ファイルをアップロードして、数秒で正確な文字起こしを取得。登録不要。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaWavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · 無料 · 即座"
      h1={<>WAVをテキストに<br /><span className="text-brand-600">オンラインWAV無料文字起こし</span></>}
      subtitle="任意のWAV音声ファイルをアップロードして、数秒で正確なテキスト文字起こしを取得。インタビュー、通話、講義、ボイスメモなどすべてのWAV録音に対応。アカウント不要。"
      defaultLanguage="ja"
      valueBlock={
        <article className="prose-content">
          <p>WAVは非圧縮またはそれに近い録音で、レコーダー、スタジオ、講義収録、アーカイブ音声でよく使われます。ファイルは大きいですが、音声情報が多く残っています。</p>
          <p>MictooはPCMやBroadcast WAVを直接処理します。大きなファイルは必要に応じて分割または作業用コピーを作ると扱いやすくなります。</p>
        </article>
      }
      howItWorks={[
        { icon: '⬆️', title: 'ファイルをアップロード', desc: 'WAVの録音または動画を選びます。変換してから入れる必要はありません。' },
        { icon: '🎧', title: '音声を読み取る', desc: 'Mictooが内部の音声トラックを取り出し、文字起こししやすい形にデコードします。' },
        { icon: '📝', title: '編集して保存', desc: '結果を確認し、名前や専門用語を直して、TXT、SRT、VTT、DOCXで保存できます。' },
      ]}
      whyUse={{
        title: 'WAVにMictooを使う理由',
        bullets: [
          { title: '変換ステップを減らせる', desc: '別の形式へ変換してからアップロードすると時間がかかり、管理するファイルも増えます。元ファイルを直接使えます。' },
          { title: '字幕にもメモにも使える', desc: 'テキストだけでなく、タイムスタンプ付きのSRTやVTTも作れるため、動画公開やレビューに使えます。' },
          { title: '長い録音を後から探せる', desc: '文字にしておくと、重要な発言、引用、質問、章立てを検索しやすくなります。' },
          { title: '登録なしで試せる', desc: '短い確認や一度だけの作業でも、アカウント作成なしで始められます。' },
        ],
      }}
      useCases={{
        title: 'WAV文字起こしの使い道',
        items: [
          { title: '会議やインタビューの記録', desc: '録音を文章にして、要約、引用、共有用メモへつなげられます。' },
          { title: '字幕の下書き', desc: '動画や音声公開前に、SRT/VTTの土台を作れます。' },
          { title: '教育・研究メモ', desc: '講義、調査、フィールドノートを検索できるテキストにできます。' },
          { title: '社内ナレッジ化', desc: 'デモ、説明会、トレーニングをあとで読める資料に変換できます。' },
        ],
      }}
      proTips={{
        title: 'WAV文字起こしのコツ',
        tips: [
          { title: '音声だけ必要なら抽出する', desc: '動画が大きすぎる場合は音声だけを書き出すとアップロードが速くなります。' },
          { title: '専門用語は最後に確認する', desc: '人名、商品名、聖書箇所、ブランド名などは手で見直すと品質が上がります。' },
          { title: '長い録音は分割する', desc: '長時間ファイルは章やセッションごとに分けると、確認と修正が楽になります。' },
        ],
      }}
      faq={[
        { q: 'WAVファイルをテキストに変換するには?', a: '上記のツールでWAVファイルをアップロードしてください。MictooがAIで自動的に文字起こしを行い、数秒でテキストを表示します。' },
        { q: 'WAVからテキストへの変換は無料ですか?', a: 'はい、完全に無料です。アカウント不要。WAVをアップロード — 月次分数クォータなし、登録なし。' },
        { q: 'WAVの最大サイズは?', a: '最大25 MB。大きな録音の場合は、最初にMP3に変換するか、録音をセグメントに分割してください。' },
        { q: 'WAVからタイムスタンプ付き文字起こしを取得できますか?', a: 'はい。文字起こし後、.srtボタンをクリックして、各セグメントの正確なタイムスタンプを含む字幕ファイルをダウンロードできます。' },
        { q: '他にどの音声フォーマットに対応していますか?', a: 'MictooはWAVに加えてMP3、MP4、M4A、OGG、WEBM、FLACもサポートしています。' },
      ]}
      relatedLinks={[
        { href: '/ja/transcribe-mp3-to-text', label: 'MP3をテキストに' },
        { href: '/ja/transcribe-audio-to-text', label: '音声をテキストに' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
