import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'pt': 'https://mictoo.com/pt/interview-transcription',
  'pl': 'https://mictoo.com/pl/interview-transcription',
  'ja': 'https://mictoo.com/ja/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: 'インタビュー文字起こし — 音声からテキストへ無料 | Mictoo',
  description: 'インタビュー、ユーザーリサーチ、二人のポッドキャストを文字起こし。無料、アカウント不要。MP3、M4A、WAVをアップロードして数秒で文字起こしを取得。',
  alternates: { canonical: 'https://mictoo.com/ja/interview-transcription', languages: LANGS },
}

export default function JaInterviewPage() {
  return (
    <LandingLayout
      badge="ジャーナリスト · リサーチ · 無料"
      h1={<>インタビュー文字起こし<br /><span className="text-brand-600">音声からテキストへ、無料</span></>}
      subtitle="インタビュー録音をアップロードして、数秒で清書済みの文字起こしを取得。ジャーナリズム、ユーザーリサーチ、記事の引用、二人のポッドキャストに最適。"
      defaultLanguage="ja"
      features={[
        { icon: '🎤', title: 'ジャーナリスト向け', desc: '録音インタビューを記事に貼り付けられる引用に変換。音声を聞き直す代わりにテキストを検索できます。' },
        { icon: '🧪', title: 'ユーザーリサーチ向け', desc: 'ユーザーリサーチセッションが検索可能なテキストに。質的データの中からパターン、引用、インサイトをすばやく見つけられます。' },
        { icon: '🌍', title: '50以上の言語', desc: '日本語、英語、中国語、韓国語、スペイン語、フランス語、ドイツ語など多くの言語のインタビューに対応。' },
      ]}
      faq={[
        { q: '二人のインタビューを文字起こしするには?', a: '音声ファイル(MP3、M4A、WAV)をアップロードしてください — Mictooはすべてを1つのストリームで文字起こしします。声を分離する(インタビュアー / ゲスト)には、ブラウザエディターで手動でラベルを追加できます。' },
        { q: '文字起こしはどれくらい正確ですか?', a: '声がよく分離されたクリアな録音では、精度は95%を超えます。重なる音声、非常に強いアクセント、背景ノイズは精度を低下させる可能性があります。' },
        { q: 'スピーカーラベルを自動で取得できますか?', a: '無料プランでは取得できません。文字起こしは1つのテキストブロックです。ラベルはダウンロード前にエディターで30〜60秒で追加できます。' },
        { q: '文字起こし用にインタビューを録音するには?', a: '対面: iPhoneのボイスメモアプリまたはAndroidの内蔵レコーダー。リモート: Zoom/Meet/Teams通話を録画します。MP3またはM4Aでエクスポートしてここにアップロードしてください。' },
        { q: 'インタビューはプライベートに保たれますか?', a: 'はい。ファイルは文字起こしのためにのみAIプロバイダーに送信され、即座に削除されます。Mictooは自社サーバーに何も保存しません。' },
      ]}
      relatedLinks={[
        { href: '/ja/podcast-transcription', label: 'ポッドキャスト文字起こし' },
        { href: '/ja/business-transcription', label: 'ビジネス文字起こし' },
        { href: '/ja/transcribe-mp3-to-text', label: 'MP3をテキストに' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
