import FormatPageLayout from '@/components/FormatPageLayout'

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
  title: 'M4Aをテキストに変換：無料のiPhoneボイスメモとApple音声文字起こし | Mictoo',
  description:
    'iPhoneボイスメモ、GarageBand、Apple Podcasts、またはFaceTimeからM4Aファイルをアップロードし、数秒で編集可能なトランスクリプトを取得します。MP4内のAAC、変換は不要です。',
  alternates: {
    canonical: 'https://mictoo.com/ja/m4a-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'M4Aをテキストに変換：iPhoneボイスメモとApple音声文字起こし | Mictoo',
    description: 'ボイスメモ、GarageBand、Apple Podcasts、またはFaceTimeからM4Aをアップロードします。数秒で編集可能なトランスクリプト。',
    url: 'https://mictoo.com/ja/m4a-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4Aをテキストに変換：無料のiPhoneボイスメモ文字起こし',
    description: 'ボイスメモ、GarageBand、Apple PodcastsからM4Aをアップロードします。数秒で編集可能なトランスクリプト。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaM4aToTextPage() {
  return (
    <FormatPageLayout
      locale="ja"
      badge="M4A · AAC · iPhone · 無料"
      h1First="M4Aをテキストに変換"
      h1Second="iPhoneボイスメモとApple音声用"
      subtitle="M4Aは、あなたのiPhoneボイスメモアプリが書き出すもので、GarageBandがエクスポートし、Apple Podcastsが配信するものです。デバイスから直接ファイルをドロップし、AACを保持し、数秒でタイムスタンプ付きのトランスクリプトを取得します。"
      highlightFormat="m4a"
      previewFileName="voice-memo.m4a"
      previewWordCount={148}
      previewDurationLabel="6分18秒"
      previewLines={[
        { t: '0:00',  line: 'さて、全体のアイデアを忘れないうちに、簡単なボイスメモを録音します。' },
        { t: '0:04',  line: '提案は、チェックアウトフローを一つの長いフォームではなく、二つの明確なステップに分けることです。' },
        { t: '0:13',  line: 'ステップ1は、メールアドレスとカード情報です。ステップ2は、確認番号を見た後の配送詳細です。' },
        { t: '0:22',  line: 'これが重要な理由は、現在の単一ページフォームでの離脱率が約38％だからです。' },
        { t: '0:32',  line: 'そのほとんどの離脱は、カード入力ではなく配送セクションで発生しています。これは直感に反します。' },
        { t: '0:42',  line: 'もし購入後に配送を移動させれば、約12〜15％のトラフィックを回復できると思います。' },
        { t: '0:52',  line: 'タイムライン的には、これはフロントエンドで2週間、バックエンドで1週間、テストに1週間かかると思います。' },
        { t: '1:02',  line: '明日、チェックアウトチームにフォローアップして、彼らが試したことがあるかどうかを確認します。' },
      ]}
      whyTitle="M4A文字起こしにMictooを選ぶ理由"
      whyCards={[
        {
          icon: 'mic',
          title: 'iPhoneボイスメモ用に構築',
          desc: 'ボイスメモの共有シートまたはiCloudから.m4aを直接ドロップします。形式の煩わしさはなく、変換ステップもありません。',
        },
        {
          icon: 'gear',
          title: 'MP4内のAACをネイティブに処理',
          desc: 'M4AはMP4コンテナ内のAAC音声です。ftypボックスを解析し、AACトラックを抽出して、再エンコードせずにWhisperに渡します。',
        },
        {
          icon: 'sparkles',
          title: 'ボイスメモアイデアのAI要約',
          desc: '要約はトランスクリプトと一緒に表示されます。長々としたブレインストーミングメモを、緊密なアクションリストに変えます。',
        },
        {
          icon: 'globe',
          title: '50以上の言語に翻訳',
          desc: 'スペイン語のボイスメモ、フランスの会議中に録音されたメモ、日本語のディクテーション。文字起こし後に英語（または任意のターゲット）に翻訳します。',
        },
      ]}
      scenariosTitle="M4Aをテキストに変換するのが適している場合"
      scenarios={[
        {
          icon: 'mic',
          title: 'iPhoneボイスメモ',
          desc: 'iPhoneまたはiPadの内蔵ボイスメモアプリからのすべての録音。アイデア、会議のメモ、インタビュークリップ、講義。',
        },
        {
          icon: 'briefcase',
          title: 'FaceTimeや通話の録音',
          desc: 'FaceTime、WhatsApp通話、またはZoomセッションからエクスポートされた音声は、しばしばM4Aとして保存されます。ファイルをドロップして、クリーンなテキストバージョンを取得します。',
        },
        {
          icon: 'sparkles',
          title: 'GarageBandやLogicのエクスポート',
          desc: 'ボーカルのみのバウンス、ポッドキャストエピソード、またはGarageBandやLogic Proからのインタビュー編集。ショーノートを作成するためのトランスクリプトを取得します。',
        },
        {
          icon: 'video',
          title: 'Apple Podcastsエピソード',
          desc: 'Apple Podcastsからダウンロードしたエピソード（デフォルトでiOS上のM4A）。引用、参照、または再利用のためのトランスクリプト。',
        },
        {
          icon: 'editPen',
          title: 'ディクテーションと長文メモ',
          desc: 'ボイスメモに章、メモ、または日記のエントリーをディクテーションしました。それを編集可能なテキストに変換し、ライティングアプリの準備をします。',
        },
        {
          icon: 'users',
          title: 'フィールドインタビュー',
          desc: 'iPhoneで録音されたジャーナリズム、研究、または口述歴史のインタビュー。トランスクリプトはストーリーや論文のための原材料です。',
        },
      ]}
      technicalTitle="M4Aについて知っておくべきこと"
      technicalIntro="M4Aは、単一のコーデックではなく、MP4ベースの音声コンテナを表します。ほとんどの音声録音はAACを使用し、一部のファイルはロスレスALACを使用します。"
      technicalFacts={[
        {
          icon: 'layers',
          title: 'コンテナとコーデック',
          desc: '.m4aファイルには一般的にAACまたはALAC音声が含まれています。コンテナはその音声ストリームのタイミングとメタデータを提供します。',
        },
        {
          icon: 'mic',
          title: 'ボイスメモワークフロー',
          desc: 'iPhoneまたはMacから元の録音を共有し、MP3に名前を変更することなくアップロードできます。',
        },
        {
          icon: 'clip',
          title: 'メタデータは別',
          desc: 'タイトル、アートワーク、Appleメタデータはトランスクリプトテキストに挿入されません。それらはメモや出版システムに保持してください。',
        },
        {
          icon: 'cloud',
          title: '長い録音',
          desc: 'M4Aは通常コンパクトですが、長いボイスメモはアップロード制限を超えることがあります。必要に応じて、より小さなスピーチコピーを分割またはエクスポートしてください。',
        },
      ]}
      faq={[
        {
          q: 'iPhoneボイスメモからM4Aを直接受け付けますか？',
          a: 'はい。ボイスメモは標準のM4A（MP4コンテナ内のAAC）を書き込みます。アプリからファイルを共有し、iCloudまたはファイルに保存して、ここにドロップします。変換は不要です。',
        },
        {
          q: 'M4AとMP4の違いは何ですか？',
          a: 'M4AはMP4コンテナの音声専用バージョンです。両方ともftypヘッダーとAACコーデックを使用します。.m4aは音声専用コンテンツを示し、.mp4は通常ビデオを示します。Mictooは両方を直接受け付けます。',
        },
        {
          q: '私のiPhone録音は60 MBを超えています。どうすればいいですか？',
          a: '90分のボイスメモは60 MBを超えることがあります。サインインしている場合、約3時間まで自動的に分割します。匿名ユーザーの場合、最初にダウンサンプルしてください：ffmpeg -i in.m4a -b:a 64k -ac 1 out.m4a。音声品質はクリーンに保たれます。',
        },
        {
          q: 'iPhoneのメタデータ（タイトル、場所、日付）は表示されますか？',
          a: 'いいえ。トランスクリプトはデバイスメタデータなしのプレーンテキストです。録音日や場所に依存する場合は、そのマッピングをメモに保持してください。',
        },
        {
          q: 'Mictooは非英語のM4Aファイルを文字起こししますか？',
          a: 'はい。Whisper large-v3は50以上の言語を自動検出でサポートします。短いボイスメモや非英語のアクセントの場合、よりクリーンな初回結果のために言語を明示的に設定してください。',
        },
        {
          q: 'このM4Aを使用するビデオのSRTキャプションをダウンロードできますか？',
          a: 'はい。文字起こし後にSRTまたはVTTをダウンロードします。タイムスタンプは元のM4Aタイムラインに合わせているので、M4Aをビデオトラックに同期させると、キャプションがフレーム単位で一致します。',
        },
        {
          q: 'トランスクリプトを別の言語に翻訳できますか？',
          a: 'はい。文字起こし後にターゲット言語を選択し、翻訳をクリックします。翻訳はGPT-4o-miniで実行され、元のテキストの横に表示されます。',
        },
        {
          q: '私のM4Aファイルはサーバーに保存されますか？',
          a: 'いいえ。音声は文字起こしプロバイダーにストリーミングされ、一度処理され、メモリから削除されます。ディスクに書き込むことはありません。トランスクリプトは、サインインして履歴に保存した場合のみ保存されます。',
        },
        {
          q: 'M4Aの品質はトランスクリプトに影響しますか？',
          a: 'ほとんど影響しません。iPhoneボイスメモは約32-64 kbpsのAACで録音され、Whisperには十分です。Whisperは内部で16 kHzモノにリサンプリングするため、コーデックビットレートはクリーンな音声に対して最小限の影響を与えます。',
        },
        {
          q: 'M4Aの文字起こしにはどれくらいの時間がかかりますか？',
          a: '10分のボイスメモは通常、エンドツーエンドで15〜30秒で完了します。60分のインタビューは60〜90秒で完了します。アップロード速度が長いステップであることが多いです。',
        },
      ]}
      ctaHeadline="ボイスメモをドロップして、クリーンなトランスクリプトを取得"
      ctaSubtitle="iPhoneボイスメモ、GarageBand、FaceTime、Apple Podcasts。MP4内のAAC、変換は不要です。"
      ctaButton="M4Aをアップロードして文字起こし"
    />
  )
}