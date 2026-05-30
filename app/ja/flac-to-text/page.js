import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-text',
  'fr': 'https://mictoo.com/fr/flac-to-text',
  'de': 'https://mictoo.com/de/flac-to-text',
  'es': 'https://mictoo.com/es/flac-to-text',
  'ru': 'https://mictoo.com/ru/flac-to-text',
  'it': 'https://mictoo.com/it/flac-to-text',
  'pt': 'https://mictoo.com/pt/flac-to-text',
  'pl': 'https://mictoo.com/pl/flac-to-text',
  'ja': 'https://mictoo.com/ja/flac-to-text',
  'ko': 'https://mictoo.com/ko/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLACをテキストに — オンラインFLAC音声無料文字起こし | Mictoo',
  description: 'FLACファイルをオンラインで無料でテキストに変換。任意のFLAC録音をアップロードして、数秒で正確な文字起こしを取得。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/flac-to-text', languages: LANGS },

  openGraph: {
    title: "FLACをテキストに — オンラインFLAC音声無料文字起こし | Mictoo",
    description: "FLACファイルをオンラインで無料でテキストに変換。任意のFLAC録音をアップロードして、数秒で正確な文字起こしを取得。登録不要。",
    url: "https://mictoo.com/ja/flac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLACをテキストに — オンラインFLAC音声無料文字起こし | Mictoo",
    description: "FLACファイルをオンラインで無料でテキストに変換。任意のFLAC録音をアップロードして、数秒で正確な文字起こしを取得。登録不要。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaFlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · ロスレス · 無料"
      h1={<>FLACをテキストに<br /><span className="text-brand-600">オンラインFLAC無料文字起こし</span></>}
      subtitle="任意のFLAC音声ファイルをアップロードして、即座にテキストに変換。FLACのロスレス品質により、優れた文字起こし精度を実現します。アカウント不要。"
      defaultLanguage="ja"
      features={[
        { icon: '🎵', title: 'ロスレス音質', desc: 'FLACファイルは完全な音質を保持し、AI文字起こしが最大の精度を達成するのに役立ちます。' },
        { icon: '⚡', title: '即座の結果', desc: 'ほとんどのFLACファイルは、品質やビット深度に関係なく、30秒以内に文字起こしされます。' },
        { icon: '📄', title: '.txtと.srtエクスポート', desc: '文字起こしをプレーンテキストまたはタイムスタンプ付きSRTファイルとしてダウンロード。' },
      ]}
      faq={[
        { q: 'FLACファイルをテキストに変換するには?', a: '上記のツールでFLACファイルをアップロードしてください。AIが文字起こしを行い、数秒でテキストを表示します。' },
        { q: 'FLACはMP3より正確に文字起こしされますか?', a: 'FLACのロスレス品質は、強く圧縮されたフォーマットと比較して、静かな音声や複雑な音声でわずかに精度を向上させる可能性があります。' },
        { q: 'FLACからテキストへの変換は無料ですか?', a: 'はい、完全に無料です。アカウントや登録は不要です。' },
        { q: 'FLACの最大サイズは?', a: '最大25 MB。FLACファイルはロスレス圧縮のため大きいです — ファイルが制限を超える場合は、ロッシーフォーマットへの変換を検討してください。' },
      ]}
      relatedLinks={[
        { href: '/ja/wav-to-text', label: 'WAVをテキストに' },
        { href: '/ja/transcribe-mp3-to-text', label: 'MP3をテキストに' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
