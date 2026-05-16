import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-text',
  'fr': 'https://mictoo.com/fr/webm-to-text',
  'de': 'https://mictoo.com/de/webm-to-text',
  'es': 'https://mictoo.com/es/webm-to-text',
  'ru': 'https://mictoo.com/ru/webm-to-text',
  'it': 'https://mictoo.com/it/webm-to-text',
  'pt': 'https://mictoo.com/pt/webm-to-text',
  'pl': 'https://mictoo.com/pl/webm-to-text',
  'ja': 'https://mictoo.com/ja/webm-to-text',
  'ko': 'https://mictoo.com/ko/webm-to-text',
  'x-default': 'https://mictoo.com/webm-to-text',
}

export const metadata = {
  title: 'WEBMをテキストに — オンラインWEBM無料文字起こし | Mictoo',
  description: 'WEBM音声・動画ファイルをオンラインで無料でテキストに変換。任意のWEBM録画をアップロードして、即座に正確な文字起こしを取得。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/webm-to-text', languages: LANGS },
}

export default function JaWebmToTextPage() {
  return (
    <LandingLayout
      badge="WEBM · ブラウザ録画 · 無料"
      h1={<>WEBMをテキストに<br /><span className="text-brand-600">オンラインWEBM無料文字起こし</span></>}
      subtitle="任意のWEBM音声または動画ファイルをアップロードして、数秒で正確なテキスト文字起こしを取得。WEBMはブラウザ、画面録画ツール、ビデオ会議ツールで広く使用されています。アカウント不要。"
      defaultLanguage="ja"
      features={[
        { icon: '🖥️', title: 'ブラウザと画面', desc: 'WEBMはChromeおよびFirefoxの画面録画、Loomクリップ、WebRTC録画のデフォルトフォーマットです。' },
        { icon: '🎬', title: 'WEBM音声と動画', desc: '音声のみのWEBMと動画WEBMの両方に対応。音声は自動的に抽出されます。' },
        { icon: '📄', title: '.txtと.srtエクスポート', desc: '文字起こしをプレーンテキストとして、またはタイムスタンプ付きSRTファイルとしてダウンロード。' },
      ]}
      faq={[
        { q: 'WEBMをテキストに変換するには?', a: '上記にWEBMファイルをアップロードしてください。文字起こしは数秒で自動的に生成されます。' },
        { q: 'WEBMからテキストへの変換は無料ですか?', a: 'はい、完全に無料です。アカウントや登録は不要です。' },
        { q: 'Chromeの画面録画を文字起こしできますか?', a: 'はい。Chromeの組み込み画面録画ツールはWEBMとして動画を保存します。ファイルを直接アップロードして文字起こしを取得してください。' },
        { q: 'WEBMの最大サイズは?', a: '最大25 MB。大きな録画の場合は、最初に音声トラックを抽出してサイズを減らしてください。' },
      ]}
      relatedLinks={[
        { href: '/ja/transcribe-video-to-text', label: '動画をテキストに' },
        { href: '/ja/wav-to-text', label: 'WAVをテキストに' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
