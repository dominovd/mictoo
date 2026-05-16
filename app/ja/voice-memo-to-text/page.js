import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/voice-memo-to-text',
  'fr': 'https://mictoo.com/fr/voice-memo-to-text',
  'de': 'https://mictoo.com/de/voice-memo-to-text',
  'es': 'https://mictoo.com/es/voice-memo-to-text',
  'ru': 'https://mictoo.com/ru/voice-memo-to-text',
  'it': 'https://mictoo.com/it/voice-memo-to-text',
  'pt': 'https://mictoo.com/pt/voice-memo-to-text',
  'pl': 'https://mictoo.com/pl/voice-memo-to-text',
  'ja': 'https://mictoo.com/ja/voice-memo-to-text',
  'ko': 'https://mictoo.com/ko/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: 'ボイスメモをテキストに — iPhoneボイスメモを無料で文字起こし | Mictoo',
  description: 'iPhoneボイスメモやAndroid録音を無料でテキストに変換。M4AとMP3に対応。登録不要、アプリ不要。高精度AI文字起こし。',
  alternates: { canonical: 'https://mictoo.com/ja/voice-memo-to-text', languages: LANGS },
}

export default function JaVoiceMemoPage() {
  return (
    <LandingLayout
      badge="iPhone · Android · 無料"
      h1={<>ボイスメモをテキストに<br /><span className="text-brand-600">オンライン無料文字起こし</span></>}
      subtitle="iPhoneボイスメモまたはAndroid録音をアップロードして、数秒で正確な文字起こしを取得。登録不要、インストールするアプリ不要。"
      defaultLanguage="ja"
      features={[
        { icon: '📱', title: 'iPhoneとAndroid', desc: 'iPhoneのボイスメモは.m4aとしてエクスポート — 完全対応。Androidのレコーダーは.m4a、.mp3、.wavでエクスポート — すべて対応。' },
        { icon: '🧠', title: 'ノートとアイデアに最適', desc: 'ボイスメモ、ブレインストーミングセッション、リマインダーを、Notion、Obsidian、お気に入りのエディターに貼り付けられる検索可能なテキストに変換。' },
        { icon: '🆓', title: '100%無料', desc: 'サブスクリプション不要、アプリ内課金なし、ウォーターマークなし。月次制限なし — 必要なときにメモをアップロード。' },
      ]}
      faq={[
        { q: 'iPhoneからボイスメモをPCに転送するには?', a: 'ボイスメモアプリを開き、メモをタップ → 「…」→ 「共有」→ 「ファイルに保存」またはMacへAirDrop。次に.m4aファイルをPCのMictooにアップロードしてください。' },
        { q: 'iPhoneで直接文字起こしできますか?', a: 'はい。iPhoneのSafariでmictoo.comを開き、アップロードエリアをタップしてファイルアプリからボイスメモを選択。文字起こしは数秒で表示され、コピーまたは.txtとしてダウンロードできます。' },
        { q: 'Androidは音声録音をどのフォーマットで保存しますか?', a: 'ほとんどのAndroidスマートフォンは、レコーダーアプリに応じて.m4aまたは.mp3で保存します。どちらのフォーマットもサポートされています。一部のアプリは.amrを使用します — 無料のコンバーターで最初に.m4aに変換してください。' },
        { q: '音声録音はプライベートに保たれますか?', a: 'はい。ファイルは文字起こしのためにのみAIエンジンに送信され、サーバーに保存されることはありません。文字起こしはブラウザに残り、あなたのものだけです。' },
        { q: 'メモが25 MBを超える場合は?', a: 'iPhoneのボイスメモはデフォルト品質で1分あたり約1 MB — 25分が25 MBに収まります。長いメモの場合は、設定 → ボイスメモでボイスメモの品質を「圧縮」に変更するか、録音を分割してください。' },
      ]}
      relatedLinks={[
        { href: '/ja', label: 'すべてのフォーマット' },
        { href: '/ja/meeting-transcription', label: '会議の文字起こし' },
        { href: '/ja/interview-transcription', label: 'インタビュー文字起こし' },
      ]}
    />
  )
}
