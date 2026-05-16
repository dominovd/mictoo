import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3をテキストに — オンラインMP3無料文字起こし | Mictoo',
  description: 'MP3をオンラインで無料でテキストに変換。MP3ファイルをアップロードして、数秒で正確な文字起こしを取得。AI。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/transcribe-mp3-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'MP3をテキストに — Mictoo',
  url: 'https://mictoo.com/ja/transcribe-mp3-to-text',
  description: 'AIを使った無料のオンラインMP3テキスト変換ツール。',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function JaMP3ToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="無料 · 登録不要 · 即座"
        h1={<>MP3をテキストに変換<br /><span className="text-brand-600">オンラインで無料</span></>}
        subtitle="任意のMP3ファイルをアップロードして、数秒で正確なテキスト文字起こしを取得。インタビュー、ポッドキャスト、講義、ボイスメモなどに対応。"
        defaultLanguage="ja"
        features={[
          { icon: '🎵', title: '任意のMP3', desc: '音声録音、ポッドキャストエピソード、音楽インタビュー、講義 — 最大25 MBの任意のMP3で動作。' },
          { icon: '🌍', title: '50以上の言語', desc: '自動言語検出。MP3は日本語、英語、中国語、韓国語、スペイン語、または他の46言語で構いません。' },
          { icon: '📋', title: 'コピーまたはダウンロード', desc: '編集可能なテキストとして文字起こしを取得。.txtまたは.srt(字幕)としてダウンロード。' },
        ]}
        faq={[
          { q: 'MP3をテキストに変換するには?', a: '上記のツールでMP3ファイルをアップロードしてください。MictooはAIで自動的に文字起こしを行い、数秒でテキストを表示します。' },
          { q: 'MP3からテキストへの変換は無料ですか?', a: 'はい、完全に無料です。アカウント不要。アップロードして文字起こしするだけ。' },
          { q: 'MP3の最大サイズは?', a: '最大25 MB。長い録音の場合は、ファイルを圧縮するか、短いセグメントに分割してください。' },
          { q: 'MP3の文字起こしはどれくらい正確ですか?', a: 'MictooはAIを使用し、クリアな録音で通常95%以上の精度を達成します。背景ノイズが大きい場合や強いアクセントの場合は品質が異なる場合があります。' },
          { q: 'MP3ファイルから字幕を取得できますか?', a: 'はい。文字起こし後、.srtボタンをクリックしてタイムスタンプ付き字幕ファイルをダウンロードできます。' },
        ]}
        relatedLinks={[
          { href: '/ja/transcribe-audio-to-text', label: '音声をテキストに' },
          { href: '/ja/transcribe-video-to-text', label: '動画をテキストに' },
          { href: '/ja', label: 'すべてのフォーマット' },
        ]}
      />
    </>
  )
}
