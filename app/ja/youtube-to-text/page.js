import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTubeをテキストに — YouTube動画の無料文字起こし | Mictoo',
  description: 'YouTube動画をテキストおよびSRT字幕に無料で文字起こし。まず音声をダウンロードし、Mictooにアップロード。MP3、MP4、M4A対応。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/youtube-to-text', languages: LANGS },
}

export default function JaYouTubeToTextPage() {
  return (
    <LandingLayout
      badge="YouTube · SRT · 無料"
      h1={<>YouTubeをテキストに<br /><span className="text-brand-600">YouTube動画の無料文字起こし</span></>}
      subtitle="任意のYouTube動画を文字起こしまたはSRTファイルに変換。無料、登録不要。音声または動画をダウンロードしてから、Mictooにファイルをアップロードしてください。"
      defaultLanguage="ja"
      features={[
        { icon: '🎬', title: 'あらゆるYouTube動画', desc: 'チュートリアル、ポッドキャスト、インタビュー、講義、Vlog — クリアな音声があれば何でも。言語は自動検出、50以上に対応。' },
        { icon: '📺', title: '字幕用SRT', desc: '文字起こし後、すぐに使える.srtファイルをダウンロード。YouTube Studioにアップロードして、数秒で正確な字幕を動画に追加できます。' },
        { icon: '📝', title: 'コンテンツを再利用', desc: '動画をブログ記事、ショーノート、SNS用引用、翻訳用スクリプトに変換。文字起こしはブラウザで完全に編集可能です。' },
      ]}
      faq={[
        { q: 'YouTube動画から音声をダウンロードするには?', a: '自分の動画の場合: YouTube Studio → コンテンツ → 動画をクリック → ダウンロード。第三者の動画の場合、オプションは動画のライセンスとYouTubeの利用規約によって異なります。多くのユーザーはまず自分のコンテンツをダウンロードしてここにアップロードします。' },
        { q: 'MictooはYouTube URLから直接ダウンロードできますか?', a: 'いいえ — YouTubeの利用規約と作者の権利を尊重するため、MictooはURLからコンテンツをダウンロードしません。文字起こしの権利を持つ音声または動画ファイルをアップロードしてください。' },
        { q: 'MictooのキャプションをYouTube動画に追加するには?', a: '文字起こし後、「.srtをダウンロード」をクリックして字幕ファイルを取得。YouTube Studioで: 動画を開く → 字幕 → 言語を追加 → ファイルをアップロード → .srtを選択。字幕は自動的に同期されます。' },
        { q: '英語以外の動画でも文字起こしできますか?', a: 'はい。Mictooは話されている言語を自動検出し、50以上の言語に対応 — 日本語、中国語、韓国語、スペイン語、フランス語、ドイツ語、ロシア語、アラビア語など。検出が間違っている場合は手動で言語を設定できます。' },
        { q: '動画の最大サイズは?', a: '1アップロードあたり最大25 MB。128 kbpsの25分の音声エクスポートは収まります。長い動画の場合は音声トラックを抽出(M4Aが最も効率的)するか、ファイルを複数の部分に分割してください。' },
      ]}
      relatedLinks={[
        { href: '/ja/transcribe-video-to-text', label: '動画をテキストに' },
        { href: '/ja/free-srt-generator', label: 'SRTジェネレーター' },
        { href: '/ja/podcast-transcription', label: 'ポッドキャスト文字起こし' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
