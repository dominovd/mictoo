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
      features={[
        { icon: '🎙️', title: '任意のWAV', desc: '標準WAV、PCM、ブロードキャストWAV — 最大25 MBの任意のWAVフォーマット。' },
        { icon: '⏱️', title: 'タイムスタンプ付き', desc: '文字起こしを.txtまたはタイムコード付き.srt字幕ファイルとしてダウンロード。' },
        { icon: '🌍', title: '50以上の言語', desc: '言語は自動検出。日本語、英語、中国語、韓国語、スペイン語、フランス語、ドイツ語など多くの言語に対応。' },
      ]}
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
