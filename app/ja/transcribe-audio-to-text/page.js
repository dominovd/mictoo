import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-audio-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
  'de': 'https://mictoo.com/de/transcribe-audio-to-text',
  'es': 'https://mictoo.com/es/transcribe-audio-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
  'it': 'https://mictoo.com/it/transcribe-audio-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-audio-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-audio-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-audio-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-audio-to-text',
  'x-default': 'https://mictoo.com/transcribe-audio-to-text',
}

export const metadata = {
  title: '音声をテキストに — オンライン無料音声文字起こし | Mictoo',
  description: '音声をオンラインで無料でテキストに文字起こし。任意の音声ファイルをアップロードして、正確な文字起こしを即座に取得。50以上の言語。AI。',
  alternates: { canonical: 'https://mictoo.com/ja/transcribe-audio-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '音声をテキストに — Mictoo',
  url: 'https://mictoo.com/ja/transcribe-audio-to-text',
  description: 'オンラインで無料の音声テキスト変換ツール。MP3、WAV、M4A、OGG、FLACなどに対応。',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function JaAudioToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP3 · WAV · M4A · FLAC · 無料"
        h1={<>音声をテキストに<br /><span className="text-brand-600">無料AI文字起こし</span></>}
        subtitle="あらゆる音声録音をテキストに変換する最速の方法。ファイルをアップロード — アカウント不要、サブスクリプション不要、待ち時間なし。"
        defaultLanguage="ja"
        features={[
          { icon: '🎙️', title: 'すべての音声フォーマット', desc: 'MP3、WAV、M4A、OGG、FLAC、WEBM — 最大25 MBの任意の音声ファイル。' },
          { icon: '🧠', title: 'AIの精度', desc: '何十万時間もの多言語音声で学習されたAIで、業界水準の精度を提供します。' },
          { icon: '🔒', title: 'プライベートで安全', desc: '音声は保存されません。ファイルは一度処理され、即座に削除されます。' },
        ]}
        faq={[
          { q: '最良の無料音声テキスト変換ツールは?', a: 'Mictooは最も正確な無料音声認識モデルの一つとされるAIを使用しています。50以上の言語に対応し、アカウント不要です。' },
          { q: '音声文字起こしはどれくらい正確ですか?', a: '私たちのAIはクリアな録音で95%以上の精度を達成します。背景ノイズや強いアクセントは精度をわずかに低下させる可能性があります。' },
          { q: 'どの音声フォーマットに対応していますか?', a: 'MP3、WAV、M4A、OGG、FLAC、WEBM、MPEG。動画ファイル(MP4)も受け付けます。' },
          { q: '音声文字起こしにはどれくらい時間がかかりますか?', a: '10分の録音は通常15〜30秒で文字起こしされます。キュー待ちなし — ファイルは即座に処理されます。' },
          { q: '通話録音を文字起こしできますか?', a: 'はい。MP3、WAV、M4Aの通話録音はうまく動作します。複数の話者の音声は単一のテキストブロックとして文字起こしされます(スピーカーラベルにはプロツールが必要)。' },
          { q: '言語を選ぶ必要がありますか?', a: 'いいえ — 言語は自動検出されます。検出結果が良くない場合は、ドロップダウンから手動で言語を選択できます。' },
        ]}
        relatedLinks={[
          { href: '/ja/transcribe-mp3-to-text', label: 'MP3をテキストに' },
          { href: '/ja/transcribe-video-to-text', label: '動画をテキストに' },
          { href: '/ja', label: 'すべてのフォーマット' },
        ]}
      />
    </>
  )
}
