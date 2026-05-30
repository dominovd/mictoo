import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'pl': 'https://mictoo.com/pl/aac-to-text',
  'ja': 'https://mictoo.com/ja/aac-to-text',
  'ko': 'https://mictoo.com/ko/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AACをテキストに — オンラインAAC音声無料文字起こし | Mictoo',
  description: 'AAC音声ファイルを無料でテキストに文字起こし。.aac、.m4a、その他のAACエンコードファイルをドラッグして、数秒で正確な文字起こしを取得。',
  alternates: { canonical: 'https://mictoo.com/ja/aac-to-text', languages: LANGS },

  openGraph: {
    title: "AACをテキストに — オンラインAAC音声無料文字起こし | Mictoo",
    description: "AAC音声ファイルを無料でテキストに文字起こし。.aac、.m4a、その他のAACエンコードファイルをドラッグして、数秒で正確な文字起こしを取得。",
    url: "https://mictoo.com/ja/aac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AACをテキストに — オンラインAAC音声無料文字起こし | Mictoo",
    description: "AAC音声ファイルを無料でテキストに文字起こし。.aac、.m4a、その他のAACエンコードファイルをドラッグして、数秒で正確な文字起こしを取得。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaAacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · M4A · 無料"
      h1={<>AACをテキストに<br /><span className="text-brand-600">オンラインAAC無料文字起こし</span></>}
      subtitle="AAC音声ファイルをアップロードして、数秒で正確なテキスト文字起こしを取得。.aacと.m4a(MP4コンテナ内のAAC)に対応。登録不要。"
      defaultLanguage="ja"
      features={[
        { icon: '🎧', title: 'AACネイティブサポート', desc: 'AACはAppleデバイス、YouTube、ほとんどのストリーミングサービスのデフォルト音声コーデックです。Mictooは.aacと.m4aを変換なしで直接受け入れます。' },
        { icon: '🎯', title: '高精度', desc: 'AACは小さなファイルサイズで高品質を保ちます — AI文字起こしに最適。クリアな録音は通常95%以上の精度で文字起こしされます。' },
        { icon: '📥', title: '編集とエクスポート', desc: 'ブラウザで文字起こしを確認し、名前と句読点を修正してから、プレーン.txtまたは.srt字幕としてダウンロード。' },
      ]}
      faq={[
        { q: 'AACファイルとは?', a: 'AAC(Advanced Audio Coding)はiTunes、Apple Music、YouTube、ほとんどのポッドキャストアプリで使われる損失圧縮音声フォーマットです。ファイルは.aacまたは.m4a拡張子を持ちます。AACは同じビットレートでMP3より優れた品質を提供します。' },
        { q: '.aacと.m4aの違いは?', a: 'どちらもAACエンコードされた音声を含みます。.aacは生の音声ストリーム、.m4aはMP4コンテナでラップされています(iTunesとiPhoneボイスメモが保存する方法)。Mictooは両方を直接サポートします。' },
        { q: 'AACを無料でテキストに変換するには?', a: 'AACファイルを上記のアップロードエリアにドラッグしてください。MictooがAIで自動的に文字起こしを行い、数秒でテキストを表示します。コピーまたは.txtとしてダウンロードしてください。' },
        { q: 'AACファイルの最大サイズは?', a: '1アップロードあたり最大25 MB。128 kbpsのAACで25 MBあたり約25分の音声、64 kbpsでほぼ1時間です。長いファイルの場合はビットレートを下げるかセグメントに分割してください。' },
        { q: 'AAC文字起こしのタイムスタンプを取得できますか?', a: 'はい。文字起こし後、正確なタイムスタンプ付きの.srtファイルをダウンロードできます — 文字起こしを元の音声や動画と同期させるのに便利です。' },
      ]}
      relatedLinks={[
        { href: '/ja/m4a-to-text', label: 'M4Aをテキストに' },
        { href: '/ja/transcribe-mp3-to-text', label: 'MP3をテキストに' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
