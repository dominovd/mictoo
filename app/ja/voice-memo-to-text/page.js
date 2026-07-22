import UseCaseLayout from '@/components/UseCaseLayout'

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
  title: 'iPhoneとAndroidのボイスメモをテキストに | Mictoo',
  description:
    'iPhoneまたはAndroidの音声録音をアップロードし、タイムスタンプ付きのテキスト、AI要約、編集可能なエクスポートを取得します。',
  alternates: {
    canonical: 'https://mictoo.com/ja/voice-memo-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'ボイスメモをテキストに: 無料 | Mictoo',
    description: 'iPhoneまたはAndroidの音声録音をアップロードし、クリーンなテキストを取得します。',
    url: 'https://mictoo.com/ja/voice-memo-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ボイスメモをテキストに',
    description: '電話の音声録音の無料転写。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaVoiceMemoToTextPage() {
  return (
    <UseCaseLayout
      locale="ja"
      badge="iPhone · Android · 無料"
      h1First="ボイスメモをテキストに"
      h1Second="電話の音声録音の無料転写"
      subtitle="iPhoneのボイスメモ、Androidの音声録音、WhatsAppの音声ノート、またはTelegramの音声メッセージをアップロードしてください。数秒でクリーンなトランスクリプトを取得できます。サインアップ不要、分単位の料金もありません。"
      currentHref="/ja/voice-memo-to-text"

      platforms={[
        { name: 'iPhone',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: 'Samsung',      iconKey: 'mic',       brandBg: '#1428A0' },
        { name: 'WhatsApp',     iconKey: 'phone',     brandBg: '#25D366' },
        { name: 'Telegram',     iconKey: 'phone',     brandBg: '#0088CC' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
      ]}

      howItWorksTitle="ボイスメモの転写の仕組み"
      steps={[
        {
          icon: 'folder',
          title: '録音を共有する',
          desc: 'iPhone: ボイスメモから共有シート。Android: ファイルアプリからファイル。WhatsApp: ファイルとして転送。',
        },
        {
          icon: 'upload',
          title: 'ここにファイルをアップロード',
          desc: 'M4A（iPhone）、MP3（Android）、OPUS/OGG（WhatsApp、Telegram）はすべて直接動作します。',
        },
        {
          icon: 'editPen',
          title: '数秒でトランスクリプト',
          desc: '5分のメモは約10秒で完了します。AI要約は、長々としたアイデアを簡潔なアクションリストに変えます。',
        },
      ]}

      exampleTitle="ボイスメモのトランスクリプトの例"
      exampleFileName="voice-memo.m4a"
      exampleDurationLabel="3:22"
      exampleLines={[
        { t: '0:00',  line: 'さて、全体のアイデアを忘れないうちに、簡単なボイスメモを録音します。' },
        { t: '0:04',  line: 'ピッチは、チェックアウトフローを一つの長いフォームではなく、二つの明確なステップに分けることです。' },
        { t: '0:13',  line: 'ステップ1は、メールとカード。ステップ2は、確認番号を見た後の配送詳細です。' },
        { t: '0:22',  line: 'これが重要な理由は、現在のシングルページフォームでのドロップオフが約38パーセントだからです。' },
        { t: '0:32',  line: 'そのドロップオフのほとんどは、カード入力ではなく、配送セクションで発生します。これは直感に反します。' },
        { t: '0:42',  line: 'もし配送を購入後に移すことができれば、そのトラフィックの12〜15パーセントを回復できるでしょう。' },
        { t: '0:52',  line: 'タイムライン的には、フロントエンドに2週間、バックエンドに1週間、テストに1週間かかると思います。' },
      ]}
      summaryPoints={[
        'アイデア: チェックアウトフローを二つのステップに分ける。',
        'ステップ1: メール + カード。ステップ2: 確認後の配送。',
        '現在のドロップオフ: 38%、主に配送セクションで。',
        '推定回復: トラフィックの12-15%。',
      ]}
      actionItems={[
        '二段階チェックアウトのモックアップを作成する',
        '分析で38%のドロップオフを確認する',
        'エンジニアリングの範囲を決定する（合計約4週間）',
      ]}

      whyTitle="ボイスメモにMictooを選ぶ理由"
      whyCards={[
        {
          icon: 'sparkles',
          title: '長々としたメモのためのAI要約',
          desc: 'ボイスメモは本質的に散らかっています。要約は5分間の考えの流れを2行の要点に変えます。',
        },
        {
          icon: 'mic',
          title: 'iPhone .m4aネイティブ',
          desc: 'Appleのボイスメモは.m4a（MP4のAAC）を書き込みます。変換なしで直接受け入れます。',
        },
        {
          icon: 'chat',
          title: 'Telegram .ogaネイティブ',
          desc: 'チャットからTelegramの音声メッセージを保存し、.ogaファイルをアップロードしてください。OpusはOGGでネイティブに処理されます。',
        },
        {
          icon: 'globe',
          title: '言語を超えたメモの翻訳',
          desc: '母国語のメモ、チームのための英語のノート。一クリックで。',
        },
      ]}

      scenariosTitle="一般的なボイスメモのシナリオ"
      scenarios={[
        { icon: 'sparkles', title: 'アイデアのキャプチャ' },
        { icon: 'chat',     title: '会議のメモ' },
        { icon: 'editPen',  title: 'ドラフト作成' },
        { icon: 'book',     title: '日記' },
        { icon: 'phone',    title: '音声メッセージ' },
        { icon: 'globe',    title: '多言語' },
      ]}

      tipsTitle="クリーンなボイスメモのためのヒント"
      tips={[
        '部屋のノイズを減らすために、電話を近くに持ってください。',
        '60 MBを超える長いメモの場合は、サインインして自動分割を利用してください。',
        'クリーンな検出のために、メモごとに一つの言語で話してください。',
        'トランスクリプトをそこで区切りたい場合は、「新しい段落」と言ってください。',
      ]}

      guidesTitle="関連ツール"
      guides={[
        { href: '/ja/m4a-to-text',        icon: 'file',  title: 'M4Aフォーマット',       desc: 'iPhone / GarageBandの深堀り' },
        { href: '/ja/ogg-to-text',        icon: 'file',  title: 'OGG / .oga',       desc: 'Telegramの音声の深堀り' },
        { href: '/ja/dictation-to-text',  icon: 'editPen', title: 'ディクテーション',      desc: '音声優先のライティングワークフロー' },
        { href: '/ja/interview-transcription', icon: 'chat', title: 'インタビュー',    desc: '電話または対面インタビュー' },
      ]}

      faq={[
        {
          q: 'iPhoneのボイスメモを直接転写できますか？',
          a: 'はい。ボイスメモアプリからメモを共有し（共有シート → ファイルに保存または自分に送信）、.m4aをMictooにアップロードしてください。変換は不要です。',
        },
        {
          q: 'MictooはWhatsAppやTelegramの音声メッセージを転写しますか？',
          a: 'はい。チャットから音声メッセージを保存し（転送 → ファイルとして保存）、アップロードしてください。WhatsAppの音声ノートは.opus、Telegramの音声ノートは.oga（どちらもOGGコンテナ）です。どちらも直接動作します。',
        },
        {
          q: 'ファイルサイズの制限は何ですか？',
          a: '匿名で25 MB、サインイン時に60 MBです。典型的なビットレートでの60分のボイスメモは約20-30 MBなので、ほとんどが無料の制限内に収まります。',
        },
        {
          q: 'Mictooは非英語のボイスメモを転写しますか？',
          a: 'はい。Whisper large-v3は50以上の言語をサポートしています。短いメモや非英語のコンテンツの場合は、クリーンな初回検出のために言語を明示的に設定してください。',
        },
        {
          q: '長々としたブレインストームメモの要約を取得できますか？',
          a: 'はい。AI要約はトランスクリプトと一緒に自動的に表示されます。流れるようなメモを緊密なアクションリストに変えるのに最適です。',
        },
        {
          q: 'ボイスメモはサーバーに保存されますか？',
          a: 'いいえ。音声は転写プロバイダーにストリーミングされ、一度処理されて削除されます。サインインして保存した場合のみ、トランスクリプトが残ります。',
        },
        {
          q: 'ボイスメモを別の言語に翻訳できますか？',
          a: 'はい。ターゲット言語を選択し、転写後に翻訳をクリックしてください。GPT-4o-miniが翻訳を処理し、元のメモと一緒に表示されます。',
        },
      ]}

      ctaHeadline="ボイスメモをテキストとアクションアイテムに変換"
      ctaSubtitle="iPhone、Android、WhatsApp、Telegramの音声ノート。すべてのフォーマット、一回のアップロード。"
      ctaButton="ボイスメモをアップロード"

      relatedLinks={[
        { href: '/ja/dictation-to-text',       label: 'ディクテーションからテキストへ' },
        { href: '/ja/interview-transcription', label: 'インタビュー転写' },
        { href: '/ja/m4a-to-text',             label: 'M4Aからテキストへ' },
        { href: '/ja/ogg-to-text',             label: 'OGGからテキストへ' },
        { href: '/ja/meeting-transcription',   label: '会議転写' },
      ]}
    />
  )
}