import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'ja': 'https://mictoo.com/ja/zoom-transcription',
  'ko': 'https://mictoo.com/ko/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Zoom文字起こし — Zoom録画を無料でテキストに | Mictoo',
  description: 'Zoom会議録画を無料でテキストに文字起こし。Zoom CloudまたはLocal RecordingでエクスポートしたMP4・M4Aで動作。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/zoom-transcription', languages: LANGS },
}

export default function JaZoomPage() {
  return (
    <LandingLayout
      badge="Zoom · MP4 · 無料"
      h1={<>Zoom文字起こし<br /><span className="text-brand-600">Zoom録画をテキストに</span></>}
      subtitle="Zoom通話録画をアップロードして、数秒で清書済みの文字起こしを取得。無料、アカウント不要。Cloud RecordingまたはLocal RecordingのMP4で動作します。"
      defaultLanguage="ja"
      features={[
        { icon: '⚡', title: '高速で無料', desc: '25分のZoom会議は通常30秒以内に文字起こしされます。100%無料、アカウント不要、クレジットカード不要。' },
        { icon: '🎯', title: '高精度', desc: 'Zoomの音声(通常はクリアで一度に一人の話者)はWhisperで優れた結果が得られます — 精度は通常95%以上。' },
        { icon: '📥', title: '.txtまたは.srtでエクスポート', desc: '文字起こしをプレーンテキストとして、またはタイムコード付きSRT字幕ファイルとしてダウンロード。' },
      ]}
      faq={[
        { q: 'Zoomで録画を有効にするには?', a: 'Zoom設定: 録画に移動 → Local Recording(自分のPCに保存)またはCloud Recording(Zoomクラウドに保存、有料プランが必要)を有効にします。通話中にRecordをクリックします。' },
        { q: 'Zoomにすでに自動文字起こしがありますか?', a: 'はい、Zoomは有効にすればライブ文字起こしを提供しますが、ファイルはZoomエコシステム内に残り、必ずしも持ち運び可能な.txtとしてダウンロードできるとは限りません。Mictooはどこでも使える持ち運び可能な.txtまたは.srtを提供します。' },
        { q: 'Zoom動画用のSRT字幕を取得できますか?', a: 'はい。文字起こし後、タイムコード付き.srtファイルをダウンロードして、YouTube、Vimeo、任意の動画エディターで字幕として使用できます。' },
        { q: '機密性の高い内容についてはどうですか?', a: 'Mictooはファイルを保存しません。音声は文字起こしのためにAIプロバイダーに送信され、破棄されます。規制対象データを含む通話については、外部AIサービスに関する社内ポリシーを確認してください。' },
        { q: 'Zoom録画の最大長さは?', a: '1ファイルあたり最大25 MB。64 kbpsモノラルの30分通話は収まります。長い通話の場合は、音声のみ(M4A)を抽出するか、動画を圧縮してください。' },
      ]}
      relatedLinks={[
        { href: '/ja/meeting-transcription', label: '会議の文字起こし' },
        { href: '/ja/google-meet-transcription', label: 'Google Meet文字起こし' },
        { href: '/ja/teams-meeting-transcription', label: 'Teams文字起こし' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
