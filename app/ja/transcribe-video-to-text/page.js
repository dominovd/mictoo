import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: '動画からテキストへ：MP4、MOV、WebMの無料オンライン動画文字起こし | Mictoo',
  description:
    'MP4、MOV、WebM、AVI、またはMKV動画をアップロードし、タイムスタンプ付きのトランスクリプト、AI要約、SRT字幕を取得します。画面録画、チュートリアル、ブログ、ウェビナーに最適です。',
  alternates: {
    canonical: 'https://mictoo.com/ja/transcribe-video-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: '動画からテキストへ：無料オンライン動画文字起こし | Mictoo',
    description: 'MP4、MOV、WebM動画の文字起こし、SRT、要約、翻訳付き。',
    url: 'https://mictoo.com/ja/transcribe-video-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '動画からテキストへ：無料オンライン動画文字起こし',
    description: 'MP4、MOV、WebM動画の文字起こし、SRTと要約付き。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaTranscribeVideoToTextPage() {
  return (
    <FormatPageLayout
      locale="ja"
      badge="動画ファイル · MP4 · MOV · WebM · 無料"
      h1First="動画からテキストへ"
      h1Second="画面録画、チュートリアル、ブログ用"
      subtitle="MP4、MOV、WebM、MKV、またはAVIファイルをアップロードします。音声トラックを抽出し、Whisper large-v3で文字起こしを行い、タイムスタンプ付きのトランスクリプト、AI要約、SRT字幕を返します。"
      highlightFormat="video"
      relatedFormatsTitle="アップロード可能な動画コンテナ"
      relatedFormats={[
        { key: 'video', name: 'MP4', ext: '.mp4' },
        { key: 'mov', name: 'MOV', ext: '.mov' },
        { key: 'webm', name: 'WebM', ext: '.webm', href: '/ja/webm-to-text' },
        { key: 'mkv', name: 'MKV', ext: '.mkv' },
        { key: 'avi', name: 'AVI', ext: '.avi' },
        { key: 'mpeg', name: 'MPEG', ext: '.mpeg' },
      ]}
      previewFileName="keynote-recording.mp4"
      previewWordCount={205}
      previewDurationLabel="32分47秒"
      enableYouTubeUrl={true}
      previewLines={[
        { t: '0:00',  line: '皆さん、おはようございます。今日はここに来てくれてありがとうございます。' },
        { t: '0:06',  line: '次の30分間、2026年に動画がどのように変わったか、そしてそれがクリエイターにとって何を意味するのかをお話しします。' },
        { t: '0:15',  line: '始める前に、3つの数字をお伝えします。インターネットユーザーの92％が毎週動画を視聴しています。' },
        { t: '0:24',  line: 'ショートフォームは、すべての主要なプラットフォームでロングフォームよりも多くの視聴時間を占めています。' },
        { t: '0:32',  line: '動画結果に至る検索は、前年同期比で2.5倍に増加しています。' },
        { t: '0:41',  line: 'プラットフォームは動画を推進しています。視聴者はより多くの動画を見ています。それは論争の余地がありません。' },
        { t: '0:50',  line: '論争の余地があるのは、その動画の海の中で実際に注目を集めるものです。' },
        { t: '0:58',  line: '毎週クリエイターが成功している3つのパターンをお話しします。' },
      ]}
      whyTitle="動画文字起こしにMictooを選ぶ理由"
      whyCards={[
        {
          icon: 'video',
          title: 'すべての一般的な動画コンテナ',
          desc: 'MP4、MOV、WebM、MKV、AVI。音声トラックをサーバー側でデマルクスするので、変換ステップなしでそのまま動画をアップロードできます。',
        },
        {
          icon: 'clip',
          title: 'タイムライン用のSRTとVTT',
          desc: 'タイムスタンプは元の動画タイムラインに合わせています。SRTまたはVTTをダウンロードし、Premiere、DaVinci、CapCut、またはYouTubeアップロードに直接ドロップできます。',
        },
        {
          icon: 'sparkles',
          title: '説明用のAI要約',
          desc: 'トランスクリプトと一緒に自動生成された要約。動画の説明、ブログの要約、章タイトルのためのしっかりした初稿です。',
        },
        {
          icon: 'globe',
          title: '50以上の言語に字幕を翻訳',
          desc: 'トランスクリプトが準備できたら、ワンクリックでスペイン語、フランス語、ドイツ語、ポルトガル語、その他45以上の言語に字幕を翻訳します。',
        },
      ]}
      scenariosTitle="動画からテキストが適している場合"
      scenarios={[
        {
          icon: 'video',
          title: 'YouTube動画の字幕',
          desc: '録画、編集、MP4にエクスポート。SRT字幕と説明用の要約を得るためにファイルをドロップします。',
        },
        {
          icon: 'briefcase',
          title: 'Loomと画面録画',
          desc: 'Loom、OBS、またはブラウザの画面キャプチャからのWebMまたはMP4。ウォークスルーのクリーンなテキスト版を取得します。',
        },
        {
          icon: 'users',
          title: 'ウェビナーとワークショップの録画',
          desc: 'ロングフォームのイベント録画。トランスクリプトはフォローアップのブログ投稿、LinkedInの要約、検索可能なアーカイブになります。',
        },
        {
          icon: 'editPen',
          title: 'ブログとチュートリアルコンテンツ',
          desc: 'ブログカット、チュートリアルの説明、または製品デモ。トランスクリプトはショーノート、クローズドキャプション、ソーシャルメディアへの再利用に役立ちます。',
        },
        {
          icon: 'book',
          title: 'コースレッスンのアーカイブ',
          desc: '録画された講義またはレッスンのMP4。学生に検索可能なテキスト版を提供し、アクセシビリティのために字幕を固定します。',
        },
        {
          icon: 'mic',
          title: 'インタビューとテストモニアル動画',
          desc: '座談会インタビューまたは顧客のテストモニアル。トランスクリプトにより引用、編集、翻訳が劇的に容易になります。',
        },
      ]}
      technicalTitle="動画ファイルに何が起こるか"
      technicalIntro="Mictooは、文字起こしのために話された音声トラックを使用します。コンテナと画質は音声認識を改善しませんが、アップロードサイズや音声ストリームの可用性に影響します。"
      technicalFacts={[
        {
          icon: 'video',
          title: '音声トラックが抽出される',
          desc: '音声トラックは動画コンテナからデコードされます。アップロードする前に別のMP3をエクスポートする必要はありません。',
        },
        {
          icon: 'clip',
          title: '元のタイムラインが保持される',
          desc: 'トランスクリプトセグメントと字幕エクスポートは元のメディアタイムラインを使用するため、動画に戻すことができます。',
        },
        {
          icon: 'layers',
          title: 'コンテナはコーデックではない',
          desc: 'MP4、MOV、WebM、MKV、AVIは異なる音声コーデックを含むことがあります。ファイルは処理時に検査されます。',
        },
        {
          icon: 'ear',
          title: '音声が必要',
          desc: '無音クリップや音楽のみの動画には信頼できる音声トランスクリプトがありません。意図した音声トラックが聞こえることを確認してください。',
        },
      ]}
      faq={[
        {
          q: 'Mictooはどの動画フォーマットを受け付けますか？',
          a: 'MP4、MOV、WebM、MKV、AVI、その他の一般的なコンテナ。音声トラックをサーバー側でデマルクスするので、これらのいずれかを直接アップロードできます。',
        },
        {
          q: 'どのくらいの大きさの動画ファイルをアップロードできますか？',
          a: '匿名で最大25MB、サインイン時は60MBです。長い動画の場合、サインインしているときは約3時間まで自動でファイルを分割します。非常に大きなエクスポートの場合は、最初に動画をダウンサンプルするか、音声トラックを抽出して音声をアップロードしてください。',
        },
        {
          q: 'YouTubeのURLを代わりに貼り付けてもいいですか？',
          a: 'はい。このページではYouTube動画のURLを貼り付けることができ、Mictooが利用可能な場合は字幕を取得します。字幕が存在しない場合は、動画ファイルまたは抽出した音声をアップロードして完全なWhisperトランスクリプションを行ってください。',
        },
        {
          q: 'タイムスタンプは元の動画と一致しますか？',
          a: 'はい。トランスクリプトとSRT/VTTのタイムスタンプは元の動画タイムラインを使用します。役立つ初回のキャプショントラックを提供しますが、公開前にエディタでタイミングと行の区切りを確認する必要があります。',
        },
        {
          q: '動画のSRT字幕を取得できますか？',
          a: 'はい。文字起こし後にSRTまたはVTTとしてダウンロードできます。どちらのフォーマットもPremiere、DaVinci Resolve、Final Cut、CapCut、YouTube Studio、ほとんどの現代の動画プレーヤーで動作します。',
        },
        {
          q: '無音動画クリップから音声を抽出しますか？',
          a: 'いいえ。動画に聞こえる音声がない場合、文字起こしするものはありません。音楽のみのクリップの場合、トランスクリプトは通常空であるか、短い歌詞の断片になります。',
        },
        {
          q: '字幕を別の言語に翻訳できますか？',
          a: 'はい。文字起こし後にターゲット言語を選択し、翻訳をクリックします。翻訳はGPT-4o-miniで実行され、元の内容と一緒に表示されます。翻訳されたSRTをエクスポートして外国語の字幕を取得できます。',
        },
        {
          q: '私の動画ファイルはサーバーに保存されますか？',
          a: 'いいえ。動画は文字起こしプロバイダーにストリーミングされ、音声をメモリ内で抽出し、一度だけ文字起こしを行い、すべてをメモリから削除します。トランスクリプトは、サインインして履歴に保存することを選択した場合のみ保存されます。',
        },
        {
          q: 'Mictooは非英語の動画を文字起こししますか？',
          a: 'はい。Whisper large-v3は50以上の言語をサポートし、自動検出が可能です。短い動画や非英語のコンテンツの場合、よりクリーンな初回検出のためにドロップダウンで言語を明示的に設定してください。',
        },
        {
          q: '動画の文字起こしにはどのくらいの時間がかかりますか？',
          a: '30分のMP4は通常、エンドツーエンドで40〜70秒で完了します。アップロード時間と動画ファイルサイズが通常は長いステップです。音声をデマルクスする前にファイルを受信する必要があるためです。',
        },
      ]}
      ctaHeadline="動画をアップロードし、字幕とトランスクリプトを取得"
      ctaSubtitle="MP4、MOV、WebM、MKV、AVI。SRT、VTT、DOCX、要約を数秒で取得します。"
      ctaButton="文字起こしのために動画をアップロード"
    />
  )
}