import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'pl': 'https://mictoo.com/pl/free-srt-generator',
  'ja': 'https://mictoo.com/ja/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: '無料SRTジェネレーター — オンラインで字幕を作成 | Mictoo',
  description: '任意の音声・動画から無料でSRTファイルを生成。ファイルをアップロードして、タイムスタンプ付き文字起こしを取得し、.srtをダウンロード。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/free-srt-generator', languages: LANGS },
}

export default function JaSrtGeneratorPage() {
  return (
    <LandingLayout
      badge="SRT · 字幕 · 無料"
      h1={<>無料SRTジェネレーター<br /><span className="text-brand-600">オンラインで字幕を作成</span></>}
      subtitle="任意の音声または動画ファイルをアップロードして、数秒で完成したSRTファイルをダウンロード。YouTube、Premiere Pro、DaVinci Resolve、任意の動画エディターと互換。"
      defaultLanguage="ja"
      features={[
        { icon: '🎬', title: 'YouTube対応SRT', desc: 'YouTube Studioに.srtファイルを直接アップロードして字幕を追加。タイムスタンプは自動的に同期されます。' },
        { icon: '⏱️', title: '正確なタイムコード', desc: '各字幕セグメントにHH:MM:SS,msのタイムスタンプが付与 — すべてのプロ動画ツールで使われる標準フォーマット。' },
        { icon: '🌍', title: '50以上の言語', desc: '日本語、英語、中国語、韓国語、スペイン語ほか45以上の言語でSRTを生成。言語は自動検出されます。' },
      ]}
      faq={[
        { q: 'SRTファイルとは?', a: 'SRT(SubRip Subtitle)ファイルはタイムスタンプ付きの字幕エントリを含むテキストファイルです。各エントリにはシーケンス番号、開始 → 終了時刻、字幕テキストが含まれます。SRTは最も広くサポートされている字幕フォーマットです。' },
        { q: '動画からSRTを生成するには?', a: '上記から動画または音声ファイルをアップロードしてください。Mictooが文字起こしを行い、各セグメントにタイムスタンプを追加します。文字起こし後、.srtボタンをクリックして字幕ファイルをダウンロードします。' },
        { q: 'YouTube動画にSRT字幕を追加するには?', a: 'YouTube Studioで動画を開き、字幕をクリック。言語を追加 → ファイルをアップロードを選択し、.srtを選びます。YouTubeが字幕を自動的に同期します。' },
        { q: 'SRTファイルはPremiere ProとDaVinci Resolveで動作しますか?', a: 'はい。Premiere Pro: ファイル → 読み込み → .srtを選択。DaVinci Resolve: Editページを開き、ファイル → 字幕を読み込みに進み、.srtを選択します。' },
        { q: 'SRTジェネレーターは本当に無料ですか?', a: 'はい、完全に無料です。アカウント不要、サブスクリプション不要、ウォーターマークなし。ファイルをアップロードしてSRTをダウンロード — それだけです。' },
        { q: 'ファイルサイズの上限は?', a: '最大25 MB。長い動画の場合は、音声トラックを最初に抽出してサイズを減らすか、動画を短いセグメントに分割してください。' },
        { q: '音声ファイル(MP3、WAV)からSRTを生成できますか?', a: 'はい。MictooはMP3、MP4、WAV、M4A、OGG、WEBM、FLAC — 任意の音声・動画フォーマットからSRTを生成します。' },
        { q: 'ダウンロード前に字幕を編集できますか?', a: 'はい。文字起こし後、ダウンロード前にブラウザでテキストを編集できます。タイムスタンプ構造はエクスポートされたSRTに保持されます。' },
      ]}
      relatedLinks={[
        { href: '/ja/timestamped-transcription', label: 'タイムスタンプ付き文字起こし' },
        { href: '/ja/transcribe-video-to-text', label: '動画をテキストに' },
        { href: '/ja/transcribe-mp3-to-text', label: 'MP3をテキストに' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
