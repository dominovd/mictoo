import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/ogg-to-text',
  'fr': 'https://mictoo.com/fr/ogg-to-text',
  'de': 'https://mictoo.com/de/ogg-to-text',
  'es': 'https://mictoo.com/es/ogg-to-text',
  'ru': 'https://mictoo.com/ru/ogg-to-text',
  'it': 'https://mictoo.com/it/ogg-to-text',
  'pt': 'https://mictoo.com/pt/ogg-to-text',
  'pl': 'https://mictoo.com/pl/ogg-to-text',
  'ja': 'https://mictoo.com/ja/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGGをテキストに — オンラインOGG音声無料文字起こし | Mictoo',
  description: 'OGG音声ファイルをオンラインで無料でテキストに変換。任意のOGG Vorbis録音をアップロードして、即座に正確な文字起こしを取得。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/ogg-to-text', languages: LANGS },
}

export default function JaOggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · 無料 · 即座"
      h1={<>OGGをテキストに<br /><span className="text-brand-600">オンラインOGG無料文字起こし</span></>}
      subtitle="任意のOGG音声ファイルをアップロードして、数秒でテキストに変換。OGG VorbisとOGG Opusに対応。アカウント不要。"
      defaultLanguage="ja"
      features={[
        { icon: '🎙️', title: 'OGG VorbisとOpus', desc: '任意のソースからのOGGファイルに対応 — レコーダー、ブラウザ、メッセージングアプリ。' },
        { icon: '🌍', title: '50以上の言語', desc: '言語は自動検出。日本語、英語、中国語、韓国語、スペイン語、フランス語などに対応。' },
        { icon: '📄', title: '.txtと.srtエクスポート', desc: 'プレーンテキストとして、またはタイムスタンプ付きSRTファイルとしてダウンロード。' },
      ]}
      faq={[
        { q: 'OGGをテキストに変換するには?', a: '上記にOGGファイルをアップロードしてください。文字起こしは数秒で自動的に生成されます。' },
        { q: 'OGGからテキストへの変換は無料ですか?', a: 'はい、完全に無料です。登録もアカウントも不要です。' },
        { q: 'OGGファイルの最大サイズは?', a: '最大25 MB。' },
        { q: '他にどの音声フォーマットに対応していますか?', a: 'MP3、MP4、WAV、M4A、FLAC、WEBMにも対応しています。' },
      ]}
      relatedLinks={[
        { href: '/ja/wav-to-text', label: 'WAVをテキストに' },
        { href: '/ja/flac-to-text', label: 'FLACをテキストに' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
