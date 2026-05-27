import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: '音声・動画をテキストに変換するAI文字起こし、無料 — Mictoo',
  description: '音声と動画を無料でテキスト化。登録不要、AI搭載。MP3、MP4、WAV、50以上の言語に対応。',
  alternates: {
    canonical: 'https://mictoo.com/ja',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'ja': 'https://mictoo.com/ja',
      'ko': 'https://mictoo.com/ko',
      'x-default': 'https://mictoo.com',
    },
  },
  openGraph: {
    title: 'Mictoo — 無料AI音声・動画文字起こし',
    description: '音声または動画をアップロードして、数秒で文字起こしを取得。',
    url: 'https://mictoo.com/ja',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — 無料AI音声・動画文字起こし' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — 無料AI文字起こし',
    description: '音声または動画をアップロードして、数秒で文字起こしを取得。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JapanesePage() {
  return (
    <LandingLayout
      badge="AI · 無料 · 登録不要 · 50以上の言語"
      h1={<>音声と動画をテキストに<br /><span className="text-brand-600">AI搭載、無料オンライン文字起こし</span></>}
      subtitle="任意の音声または動画ファイルをアップロードして、数秒で正確なAI文字起こしを取得。アカウント登録は不要です。"
      defaultLanguage="ja"
      features={[
        {
          icon: '🎙️',
          title: 'すべての音声フォーマット',
          desc: 'MP3、MP4、WAV、M4A、OGG、WEBM、FLAC。最大25 MB。',
        },
        {
          icon: '🇯🇵',
          title: '日本語と50以上の言語',
          desc: '自動言語検出。日本語、英語、中国語、韓国語など多数の言語に対応。',
        },
        {
          icon: '📥',
          title: '.txt または .srt でダウンロード',
          desc: 'ブラウザ内で文字起こしを編集し、テキストまたは字幕としてダウンロード。',
        },
      ]}
      faq={[
        {
          q: '音声を無料でテキストに変換するには？',
          a: '上記から音声ファイルをアップロードしてください。MictooはOpenAIのWhisperで自動的に文字起こしを行い、数秒でテキストを表示します。',
        },
        {
          q: '日本語の音声認識は正確に動作しますか？',
          a: 'はい。Mictooが基盤とするWhisperモデルは、何千時間もの日本語音声で学習されており、高い精度を提供します。',
        },
        {
          q: 'ファイルはサーバーに保存されますか？',
          a: 'いいえ。ファイルは即座に処理され、サーバーに保存されることはありません。',
        },
      ]}
    />
  )
}
