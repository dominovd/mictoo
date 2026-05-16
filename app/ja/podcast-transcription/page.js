import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'ポッドキャスト文字起こし — 無料文字起こしジェネレーター | Mictoo',
  description: 'ポッドキャストエピソードを無料でテキストに文字起こし。音声ファイルをアップロードして、完全な文字起こしを即座に取得。MP3、M4A、WAV対応。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/podcast-transcription', languages: LANGS },
}

export default function JaPodcastPage() {
  return (
    <LandingLayout
      badge="ポッドキャスター · YouTube · 無料"
      h1={<>ポッドキャスト文字起こし<br /><span className="text-brand-600">無料文字起こしジェネレーター</span></>}
      subtitle="任意のポッドキャストエピソードを数秒で完全なテキスト文字起こしに変換。ショーノート、ブログ記事、SEO、アクセシビリティに最適。MP3、M4A、WAVをアップロード — アカウント不要。"
      defaultLanguage="ja"
      features={[
        { icon: '🎙️', title: 'すべてのポッドキャストフォーマット', desc: 'MP3、M4A、WAV、OGG、FLACファイルをアップロード。すべてのポッドキャストホスティングプラットフォームのエクスポートに対応。' },
        { icon: '📝', title: 'ショーノートと記事', desc: '文字起こしをSEOに最適化されたコンテンツ、ショーノート、検索可能なアーカイブに変換。' },
        { icon: '♿', title: 'アクセシビリティ', desc: '文字起こしを提供することで、聴覚障害者・難聴者にもポッドキャストをアクセス可能にします。' },
      ]}
      faq={[
        { q: 'ポッドキャストエピソードを無料で文字起こしするには?', a: 'エピソードをMP3またはM4Aでダウンロードして上記からアップロードすると、数秒で完全な文字起こしを取得できます。' },
        { q: 'Spotifyのポッドキャストを文字起こしできますか?', a: '音声ファイルにアクセスできる場合(例: 自分の番組)は直接アップロードしてください。第三者のポッドキャストの場合は、オフライン再生に対応したアプリでエピソードをダウンロードしてからファイルをインポートしてください。' },
        { q: 'なぜポッドキャストの文字起こしを作るのですか?', a: '文字起こしはSEOを向上させ(Googleがテキストをインデックスする)、聴覚障害者がコンテンツにアクセスできるようにし、記事やニュースレターとして再利用でき、リスナーがエピソードを閲覧するのに役立ちます。' },
        { q: '文字起こしは正確ですか?', a: '一人のスピーカーまたはクリアなデュエットでうまく録音されたポッドキャストでは、精度は通常95%を超えます。重なる音声、強いアクセント、音質の悪い音声では低下します。' },
        { q: '2つの声のインタビューを文字起こしできますか?', a: 'はい。文字起こしはすべての発言をキャプチャします。スピーカーラベル(ホスト / ゲスト)はブラウザエディターで手動で追加します。' },
        { q: '最大サイズは?', a: '最大25 MB。ほとんどの128 kbps MP3は25分でこの制限に収まります。長いエピソードの場合は、ビットレートを下げるかファイルを分割してください。' },
      ]}
      relatedLinks={[
        { href: '/ja/transcribe-mp3-to-text', label: 'MP3をテキストに' },
        { href: '/ja/m4a-to-text', label: 'M4Aをテキストに' },
        { href: '/ja/interview-transcription', label: 'インタビュー文字起こし' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
