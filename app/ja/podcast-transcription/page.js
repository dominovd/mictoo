import UseCaseLayout from '@/components/UseCaseLayout'

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
  'ko': 'https://mictoo.com/ko/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'ポッドキャストの文字起こしと要約とSRT | Mictoo',
  description:
    'ポッドキャストのエピソードをアップロードし、タイムスタンプ付きのテキスト、AIによる要約、ショーノート、キャプション、アーカイブ用のエクスポートを取得します。',
  alternates: {
    canonical: 'https://mictoo.com/ja/podcast-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'ポッドキャストの文字起こし：無料のAIポッドキャスト文字起こしジェネレーター | Mictoo',
    description: 'エピソードをアップロードし、数秒でクリーンなタイムスタンプ付きの文字起こしを取得します。',
    url: 'https://mictoo.com/ja/podcast-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ポッドキャストの文字起こし：無料のジェネレーター',
    description: 'エピソードをアップロードし、クリーンな文字起こしを取得します。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaPodcastTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ja"
      badge="ポッドキャスター · ホスト · 無料"
      h1First="ポッドキャストの文字起こし"
      h1Second="すべてのエピソードに対する無料のAI文字起こし"
      subtitle="任意の録音ツールからエピソードをドロップします。ショーノート、SEOの要約、YouTubeのキャプション用に準備されたクリーンなタイムスタンプ付きの文字起こしを取得します。"
      currentHref="/ja/podcast-transcription"

      platforms={[
        { name: 'Riverside',  iconKey: 'waveMic',   brandBg: '#4B2AF7' },
        { name: 'Zencastr',   iconKey: 'soundwave', brandBg: '#F7B32B' },
        { name: 'SquadCast',  iconKey: 'waveMic',   brandBg: '#7E22CE' },
        { name: 'Cleanfeed',  iconKey: 'soundwave', brandBg: '#0F766E' },
        { name: 'Descript',   iconKey: 'soundwave', brandBg: '#111827' },
        { name: 'Anchor',     iconKey: 'mic',       brandBg: '#8B5CF6' },
      ]}

      howItWorksTitle="ポッドキャストの文字起こしの仕組み"
      steps={[
        {
          icon: 'folder',
          title: 'エピソードをエクスポート',
          desc: 'DAWや録音ツールが生成する任意のフォーマット。MP3が最も一般的ですが、M4A、WAV、FLACもすべて対応しています。',
        },
        {
          icon: 'upload',
          title: 'ファイルをここにドロップ',
          desc: 'サインイン時に最大60 MBのファイルをアップロードします。長いエピソードは自動的にセグメントに分割され、再度結合されます。',
        },
        {
          icon: 'editPen',
          title: 'ショーノート、キャプション、エクスポート',
          desc: '文字起こし、AIによる要約、YouTube動画版のSRT、ブログ用のDOCX。処理時間はエピソードの長さとファイルサイズによります。',
        },
      ]}

      exampleTitle="ポッドキャストの文字起こしの例"
      exampleFileName="episode-042.mp3"
      exampleDurationLabel="52:07"
      exampleLines={[
        { t: '0:00',  line: 'ショーに戻ってきていただきありがとうございます。これはエピソード42で、今日は2026年の独立ポッドキャスティングについて話します。' },
        { t: '0:10',  line: '私のゲストは、エピソードを欠かさずに8年間週刊ショーを運営しています。ここにいてくれてありがとう。' },
        { t: '0:20',  line: '招待していただきありがとうございます。皆が音声はすでに飽和状態だと言っていた頃に始めたことを考えると、驚きです。' },
        { t: '0:30',  line: 'そこから始めましょう。2018年にポッドキャストを立ち上げるのと今では何が違いましたか。' },
        { t: '0:38',  line: '配信は入り込むのが難しかったですが、オーディエンスはもっと忍耐強かったです。本質的に注意は安価でした。' },
        { t: '0:48',  line: '今日のツールは素晴らしいです。数秒での文字起こし、AIによるショーノートですが、注意自体ははるかに希少です。' },
        { t: '0:58',  line: 'それは良いつなぎです。文字起こしが基本的に無料になった今、あなたのショーノートのワークフローはどうなっていますか。' },
      ]}
      summaryPoints={[
        'エピソード42、2026年の独立ポッドキャスティングに焦点を当てています。',
        'ゲスト：8年間の週刊ショーホスト。',
        '議論：2018年と2026年の配信の変化。',
        '注意経済が新たなボトルネック。',
      ]}
      actionItems={[
        '要約からショーノートをドラフト',
        'ソーシャル用に3つの引用を抽出',
        'YouTube動画版にSRTを公開',
      ]}

      whyTitle="ポッドキャストの文字起こしにMictooを選ぶ理由"
      whyCards={[
        {
          icon: 'sparkles',
          title: 'ショーノート用のAI要約',
          desc: 'エピソードの説明、ブログの要約、SEOに優しいショーノートのためのしっかりとした初稿。',
        },
        {
          icon: 'clip',
          title: 'YouTube版のSRT',
          desc: 'タイムスタンプは元の音声に合わせて調整されています。SRTをYouTube Studioにドロップするとキャプションが完成します。',
        },
        {
          icon: 'globe',
          title: '国際的なオーディエンス向けに翻訳',
          desc: '50以上の言語へのワンクリック翻訳。ソロホストは翻訳エージェンシーなしでグローバルに配信します。',
        },
        {
          icon: 'gear',
          title: '任意のビットレート、任意のレコーダー',
          desc: '32 kbpsのボイスノートから320 kbpsのスタジオバウンスまで、クリーンなスピーチのために同一に文字起こしされます。',
        },
      ]}

      scenariosTitle="ポッドキャストの文字起こしシナリオ"
      scenarios={[
        { icon: 'chat',      title: 'ショーノート' },
        { icon: 'clip',      title: 'YouTubeキャプション' },
        { icon: 'search',    title: 'SEOの要約' },
        { icon: 'sparkles',  title: '引用クリップ' },
        { icon: 'globe',     title: '翻訳' },
        { icon: 'book',      title: 'バックカタログ' },
      ]}

      tipsTitle="クリーンなポッドキャストの文字起こしのためのヒント"
      tips={[
        'DAWが許可する場合は、ボイスオンリーステムをバウンスします。',
        'ボイス最適化された64 kbpsモノMP3も同様に文字起こしされます。',
        'インタビューエピソードの場合、文字起こしの前に音楽ベッドを削除します。',
        'ホストとゲストの名前を一度確認すれば、その後は一貫して表示されます。',
      ]}

      guidesTitle="関連する文字起こしガイド"
      guides={[
        { href: '/ja/transcribe-mp3-to-text',    icon: 'file',  title: 'MP3の文字起こし',   desc: 'ポッドキャストフォーマットガイド' },
        { href: '/ja/m4a-to-text',               icon: 'file',  title: 'M4Aの文字起こし',   desc: 'GarageBandとAppleのエクスポート' },
        { href: '/ja/wav-to-text',               icon: 'file',  title: 'WAVの文字起こし',   desc: 'スタジオバウンス' },
        { href: '/ja/timestamped-transcription', icon: 'file',  title: 'タイムスタンプの詳細', desc: 'SRT / VTTエクスポートメカニクス' },
      ]}

      faq={[
        {
          q: 'Mictooはどのポッドキャストプラットフォームと連携していますか？',
          a: 'すべてのプラットフォームです。ホストに関係なく、任意の音声または動画ファイルを受け付けます。一般的なもの：Riverside、Zencastr、SquadCast、Anchor、Buzzsprout、Libsyn。サインイン時に最大60 MBまで無料です。',
        },
        {
          q: '文字起こしを自動的にショーノートとして取得できますか？',
          a: 'AI要約は文字起こしとともに自動的に表示されます。これをショーノートの初稿として使用し、あなたの声に合わせて調整してください。',
        },
        {
          q: '私のエピソードは60 MBを超えています。どうすればいいですか？',
          a: '長いファイルを自動分割するにはサインインするか、最初にffmpeg -i episode.mp3 -b:a 64k -ac 1 out.mp3でダウンサンプルしてください。60分のポッドキャストは精度を失うことなく約28 MBになります。',
        },
        {
          q: 'YouTube動画版のSRTをダウンロードできますか？',
          a: 'はい。SRTとVTTには元の音声に合わせたタイムスタンプが含まれています。YouTube Studioに直接ドロップしてください。',
        },
        {
          q: 'Mictooは非英語のポッドキャストを文字起こししますか？',
          a: 'はい。Whisper large-v3は50以上の言語を自動検出でサポートしています。短いエピソードや珍しいアクセントの場合は、言語を明示的に選択してください。',
        },
        {
          q: 'エピソードはあなたのサーバーに保存されていますか？',
          a: 'いいえ。音声は文字起こしプロバイダーにストリーミングされ、一度処理されてメモリから削除されます。文字起こしはサインインした場合のみ保存されます。',
        },
        {
          q: '誰が話しているか（ホスト対ゲスト）を特定できますか？',
          a: 'いいえ。現在の文字起こしはタイムスタンプ付きの連続したテキストであり、自動的な話者ラベルはありません。',
        },
      ]}

      ctaHeadline="すべてのエピソードを公開可能なテキストに変換"
      ctaSubtitle="ショーノート、YouTubeキャプション、SEOの要約、翻訳。すべて単一のアップロードから。"
      ctaButton="ポッドキャストのエピソードをアップロード"

      relatedLinks={[
        { href: '/ja/interview-transcription',   label: 'インタビューの文字起こし' },
        { href: '/ja/webinar-transcription',     label: 'ウェビナーの文字起こし' },
        { href: '/ja/transcribe-mp3-to-text',    label: 'MP3からテキストへ' },
        { href: '/ja/free-srt-generator',        label: '無料のSRTジェネレーター' },
        { href: '/ja/meeting-transcription',     label: '会議の文字起こし' },
      ]}
    />
  )
}