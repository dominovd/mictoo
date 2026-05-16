import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'it': 'https://mictoo.com/it/lecture-transcription',
  'pt': 'https://mictoo.com/pt/lecture-transcription',
  'pl': 'https://mictoo.com/pl/lecture-transcription',
  'ja': 'https://mictoo.com/ja/lecture-transcription',
  'ko': 'https://mictoo.com/ko/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: '講義文字起こし — 学生向け音声からテキストへ | Mictoo',
  description: '講義録音をテキストに変換して学習に活用。無料、アカウント不要。MP3またはM4Aをアップロードして、数秒で清書済みの文字起こしを取得。',
  alternates: { canonical: 'https://mictoo.com/ja/lecture-transcription', languages: LANGS },
}

export default function JaLecturePage() {
  return (
    <LandingLayout
      badge="学生 · 大学 · 無料"
      h1={<>講義文字起こし<br /><span className="text-brand-600">音声からノートへ</span></>}
      subtitle="講義録音をアップロードして、完全なテキスト文字起こしを取得。復習、勉強、ノート作成に最適。アカウント不要、アプリ不要。"
      defaultLanguage="ja"
      features={[
        { icon: '🎓', title: '学生向け', desc: '講義を録音し、Mictooにアップロードして、数秒で検索可能なテキストを取得。ブラウザ内で自分のコメントを追加できます。' },
        { icon: '🔍', title: '講義内検索', desc: '何時間もの音声を検索可能なテキストに変換。必要な定義、概念、参照をすばやく見つけられます。' },
        { icon: '🌍', title: '50以上の言語', desc: '日本語、英語、中国語、スペイン語、フランス語、ドイツ語など多くの学術言語の講義に対応。' },
      ]}
      faq={[
        { q: '文字起こし用に講義を録音するには?', a: 'iPhone: ボイスメモアプリ。Android: 内蔵レコーダー。ノートPC: QuickTime(Mac)またはボイスレコーダー(Windows)。MP3またはM4Aでエクスポートしてここにアップロードしてください。' },
        { q: '講義を録音するのは合法ですか?', a: '大学のポリシーと現地の法律によります。多くの大学では個人使用のための録音を許可していますが、講師の同意を必要とする大学もあります。事前に確認してください。' },
        { q: '講義文字起こしはどれくらい正確ですか?', a: 'ノイズの少ない教室で明瞭に話す講師の場合、精度は95%を超えます。背景ノイズ、強いアクセント、非常に大きな教室では精度が下がる可能性があります。' },
        { q: '外国語の講義も文字起こしできますか?', a: 'はい。Mictooは50以上の言語に自動検出で対応します。英語、スペイン語、フランス語、ドイツ語などの講義で非常に良く機能します。' },
        { q: '講義の最大長さは?', a: '最大25 MB。60〜90分の講義の場合は、モノラル64 kbpsでエクスポートするか、短いセグメントに分割してください。' },
      ]}
      relatedLinks={[
        { href: '/ja/transcribe-mp3-to-text', label: 'MP3をテキストに' },
        { href: '/ja/m4a-to-text', label: 'M4Aをテキストに' },
        { href: '/ja/voice-memo-to-text', label: 'ボイスメモをテキストに' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
