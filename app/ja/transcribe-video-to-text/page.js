import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: '動画をテキストに — オンライン無料動画文字起こし | Mictoo',
  description: '動画をオンラインで無料でテキストに変換。MP4、WEBM、MOVをアップロードして、正確な文字起こしを即座に取得。AI。アカウント不要。',
  alternates: { canonical: 'https://mictoo.com/ja/transcribe-video-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '動画をテキストに — Mictoo',
  url: 'https://mictoo.com/ja/transcribe-video-to-text',
  description: 'オンラインで無料の動画テキスト変換ツール。MP4、WEBMなどを文字起こし。',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function JaVideoToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP4 · WEBM · 無料 · 即座"
        h1={<>動画をテキストに変換<br /><span className="text-brand-600">無料文字起こし</span></>}
        subtitle="任意の動画ファイル — YouTubeからのダウンロード、スクリーンキャスト、インタビュー、講義 — をアップロードして、数秒で話された言葉をテキストとして取得。"
        defaultLanguage="ja"
        features={[
          { icon: '🎬', title: 'MP4、WEBMなど', desc: 'MP4、WEBM、MPEG、その他の動画フォーマットに対応。音声は自動的に抽出されます。' },
          { icon: '🎞️', title: 'SRT字幕', desc: 'タイムスタンプ付き.srtファイルをダウンロード — YouTubeまたは任意の動画エディターにアップロードできます。' },
          { icon: '⚡', title: '即座の結果', desc: '10分の動画は通常30秒以内に文字起こしされます。キュー待ちなし、待ち時間なし。' },
        ]}
        faq={[
          { q: '動画を無料で文字起こしするには?', a: '上記のツールで動画ファイルをアップロードしてください。Mictooが音声を抽出し、AIで文字起こしします。文字起こしは数秒で表示されます。' },
          { q: '動画から字幕を取得できますか?', a: 'はい。文字起こし後、.srtダウンロードボタンをクリックして、YouTube、Premiere、任意の編集ツールにアップロードできるタイムスタンプ付き字幕ファイルを取得できます。' },
          { q: 'どの動画フォーマットに対応していますか?', a: 'MP4、WEBM、MPEG。音声ファイル(MP3、WAV、M4A、OGG、FLAC)にも対応。' },
          { q: 'YouTube動画でも動作しますか?', a: 'はい — まずダウンローダーでYouTubeから自分の動画をダウンロードし、ファイルをここにアップロードして文字起こしします。' },
          { q: 'サイズ制限はありますか?', a: '最大25 MB。長い動画の場合は、最初に音声トラックを抽出してサイズを減らしてください(例: ffmpegまたはオンラインコンバーター)。' },
        ]}
        relatedLinks={[
          { href: '/ja/transcribe-mp3-to-text', label: 'MP3をテキストに' },
          { href: '/ja/transcribe-audio-to-text', label: '音声をテキストに' },
          { href: '/ja', label: 'すべてのフォーマット' },
        ]}
      />
    </>
  )
}
