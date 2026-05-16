import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'pt': 'https://mictoo.com/pt/m4a-to-text',
  'pl': 'https://mictoo.com/pl/m4a-to-text',
  'ja': 'https://mictoo.com/ja/m4a-to-text',
  'ko': 'https://mictoo.com/ko/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4Aをテキストに — オンラインM4A無料文字起こし | Mictoo',
  description: 'M4A音声ファイルを無料でテキストに変換。iPhoneボイスメモ、録音、ポッドキャストなど任意のM4Aファイルをアップロードして、即座に文字起こしを取得。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/m4a-to-text', languages: LANGS },
}

export default function JaM4AToTextPage() {
  return (
    <LandingLayout
      badge="M4A · iPhone · 無料 · 即座"
      h1={<>M4Aをテキストに<br /><span className="text-brand-600">オンラインM4A無料文字起こし</span></>}
      subtitle="M4A音声ファイルを即座にテキストに変換。iPhoneボイスメモ、音声録音、ポッドキャストファイルに最適。アカウント不要。"
      defaultLanguage="ja"
      features={[
        { icon: '📱', title: 'iPhoneボイスメモ', desc: 'M4AはiPhoneボイスメモと録音のデフォルトフォーマットです。直接アップロードして、数秒で文字起こしを取得。' },
        { icon: '🎵', title: '任意のM4A', desc: '任意のソースからのM4Aファイル — iPhone、Mac、デジタルレコーダー、ポッドキャストアプリ — に完全対応。' },
        { icon: '📄', title: 'テキストまたはSRTエクスポート', desc: '文字起こしをプレーン.txtまたはタイムスタンプ付き.srt字幕ファイルとしてダウンロード。' },
      ]}
      faq={[
        { q: 'M4Aをテキストに変換するには?', a: '上記のツールでM4Aファイルをアップロードしてください。文字起こしは自動的に生成され、数秒で表示されます。' },
        { q: 'iPhoneボイスメモを文字起こしできますか?', a: 'はい。iPhoneボイスメモはM4Aファイルとして保存されます。iPhoneから直接、またはコンピューターに転送後にファイルをアップロードしてください。' },
        { q: 'M4Aからテキストへの変換は無料ですか?', a: 'はい、完全に無料です。アカウント不要、サブスクリプション不要。アップロードして文字起こしするだけ。' },
        { q: 'M4Aの最大サイズは?', a: '最大25 MB。ほとんどの音声録音と短い音声クリップは、この制限に余裕で収まります。' },
        { q: '他にどの音声フォーマットに対応していますか?', a: 'M4Aに加えて、MictooはMP3、MP4、WAV、OGG、WEBM、FLACをサポートしています。' },
      ]}
      relatedLinks={[
        { href: '/ja/wav-to-text', label: 'WAVをテキストに' },
        { href: '/ja/transcribe-mp3-to-text', label: 'MP3をテキストに' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
