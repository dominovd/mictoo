import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'ja': 'https://mictoo.com/ja/timestamped-transcription',
  'ko': 'https://mictoo.com/ko/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'タイムスタンプ付き文字起こし — 無料タイムコード生成 | Mictoo',
  description: 'タイムスタンプ付き文字起こしを無料で生成。音声または動画をアップロードし、正確なタイムコード付きSRTファイルをダウンロード。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/timestamped-transcription', languages: LANGS },
}

export default function JaTimestampedPage() {
  return (
    <LandingLayout
      badge="タイムコード · SRT · 無料"
      h1={<>タイムスタンプ付き文字起こし<br /><span className="text-brand-600">タイムコード付き無料文字起こし</span></>}
      subtitle="任意の音声または動画ファイルをアップロードして、正確なタイムスタンプ付きの文字起こしを取得。SRT形式でダウンロード — YouTube、動画編集ソフト、字幕ツールにすぐ使えます。登録不要。"
      defaultLanguage="ja"
      features={[
        { icon: '⏱️', title: '自動タイムコード', desc: '各セグメントに正確な開始・終了タイムスタンプが付与 — 音声から自動生成されます。' },
        { icon: '📄', title: '.srtでダウンロード', desc: 'タイムスタンプ付き文字起こしをSRT字幕ファイルとしてエクスポート。YouTube、Premiere、DaVinci、任意の字幕ツールに直接アップロード可能。' },
        { icon: '✏️', title: '編集可能なテキスト', desc: 'ダウンロード前にブラウザで文字起こしを確認・編集。アカウント不要。' },
      ]}
      faq={[
        { q: 'タイムスタンプ付き文字起こしとは?', a: 'タイムスタンプ付き(またはタイムコード付き)文字起こしとは、各行に発話された正確な時間が含まれる音声・動画のテキスト版です — 例: 「00:01:23 → ようこそ、番組へ」。テキストを元のメディアと同期できます。' },
        { q: 'タイムスタンプ付き文字起こしを無料で作成するには?', a: '上記のツールに音声または動画ファイルをアップロードしてください。Mictooがタイムスタンプ付き文字起こしを自動生成し、SRTまたはタイムコード付きプレーンテキストでダウンロードできます。' },
        { q: 'SRTファイルとは?', a: 'SRT(SubRip Subtitle)はタイムスタンプ付きテキストセグメントを含む標準字幕ファイル形式です。YouTube、Netflix、Premiere Pro、Final Cut、DaVinci Resolve、ほとんどの動画プラットフォームとエディターでサポートされています。' },
        { q: 'SRTをYouTubeの字幕として使えますか?', a: 'はい。.srtをダウンロードしたら、YouTube Studio → 字幕 → 言語を追加 → ファイルをアップロードに進みます。タイムスタンプ付き字幕が動画と自動的に同期されます。' },
        { q: 'タイムスタンプの精度はどのくらい?', a: 'タイムスタンプはセグメント単位(通常5〜15秒ごと)で生成されます。クリアな音声では精度が高いです。重なる音声や強い背景ノイズは精度に影響する場合があります。' },
        { q: '文字起こしとタイムスタンプ付き文字起こしの違いは?', a: '通常の文字起こしは音声のテキスト版です。タイムスタンプ付き文字起こしはタイムスタンプを追加し、各セクションを録音の正確な瞬間にリンクできます — 字幕や動画編集に不可欠です。' },
        { q: 'どのフォーマットがサポートされていますか?', a: 'MP3、MP4、WAV、M4A、OGG、WEBM、FLAC。最大25 MBの音声または動画ファイル。' },
      ]}
      relatedLinks={[
        { href: '/ja/free-srt-generator', label: 'SRTジェネレーター' },
        { href: '/ja/transcribe-video-to-text', label: '動画をテキストに' },
        { href: '/ja/transcribe-audio-to-text', label: '音声をテキストに' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
