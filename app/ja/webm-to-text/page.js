import FormatPageLayout from '@/components/FormatPageLayout'

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
  title: 'WebMからテキストへ：Loom、OBS、およびブラウザ画面録画の文字起こし | Mictoo',
  description:
    'Loom、OBS、またはブラウザのMediaRecorder APIからWebM画面録画をアップロードします。動画を削除し、音声を文字起こしします。秒単位のタイムスタンプ付きの編集可能なトランスクリプト。',
  alternates: {
    canonical: 'https://mictoo.com/ja/webm-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'WebMからテキストへ：Loom、OBS、ブラウザ録画の文字起こし | Mictoo',
    description: 'WebM画面録画をアップロードします。音声を抽出し、タイムスタンプ付きの編集可能なトランスクリプトを返します。',
    url: 'https://mictoo.com/ja/webm-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebMからテキストへ：Loom、OBS、ブラウザ録画の文字起こし',
    description: 'WebM画面録画をアップロードします。音声を抽出し、編集可能なトランスクリプトを返します。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaWebmToTextPage() {
  return (
    <FormatPageLayout
      locale="ja"
      badge="WebM · Loom · OBS · 画面録画"
      h1First="WebMからテキストへ"
      h1Second="Loom、OBS、およびブラウザ画面録画用"
      subtitle="WebMはLoomがエクスポートするものであり、OBSが新しいバージョンでデフォルトで録画するものであり、ブラウザがMediaRecorder APIを使用する際にアプリが生成するものです。ファイルをドロップすると、動画を削除し、音声を数秒で文字起こしします。"
      highlightFormat="webm"
      previewFileName="loom-recording.webm"
      previewWordCount={172}
      previewDurationLabel="7分36秒"
      previewLines={[
        { t: '0:00',  line: 'チームの皆さん、新しいオンボーディングフローを木曜日に出荷する前に説明したいと思います。' },
        { t: '0:07',  line: 'これが私の画面です。見ているのは、新規サインアップ後のランディングページです。' },
        { t: '0:14',  line: '最初に気づくべきことは、ウェルカムモーダルがダッシュボードの上に表示され、全体のビューポートをブロックしないことです。' },
        { t: '0:23',  line: 'これは意図的です。ユーザーはツアーによってダッシュボードが完全に隠されると混乱していました。' },
        { t: '0:32',  line: '次に、3つのツアーステップが短くなっています。最後のフィードバックに基づいて、コピーを約半分に削減しました。' },
        { t: '0:41',  line: 'ここでツアーをスキップをクリックすると、モーダルが閉じ、ユーザーは空の状態のコーチマークに直接入ります。' },
        { t: '0:51',  line: 'そのコーチマークは、すべてのユーザーが最初に行う必要があるアクションである主要なアップロードボタンを指しています。' },
        { t: '1:00',  line: 'あなたの意見を教えてください。可能であれば、水曜日の朝までに出荷ブロッキングの問題を解決してください。' },
      ]}
      whyTitle="WebM文字起こしにMictooを選ぶ理由"
      whyCards={[
        {
          icon: 'video',
          title: 'サーバーサイドで処理されるWebM動画',
          desc: '動画トラックを保持したWebM画面録画。デマルクスし、動画を削除し、音声を文字起こしします。ローカル抽出は不要です。',
        },
        {
          icon: 'gear',
          title: 'OpusとVorbisの両方をサポート',
          desc: 'ほとんどのWebMファイルはOpus音声（新しい）またはVorbis（古い）を持っています。両方のコーデックに対応し、手動変換は不要です。',
        },
        {
          icon: 'clip',
          title: 'ウォークスルー用のSRTキャプション',
          desc: '文字起こし後にSRTまたはVTTをダウンロードします。タイムスタンプは元のWebMに合わせているため、キャプションは画面録画に正確に一致します。',
        },
        {
          icon: 'sparkles',
          title: 'リリースノート用のAI要約',
          desc: 'AI要約は、チケットの説明、リリースノート、またはウォークスルーを置き換えるために作成された非同期更新のための良い初稿です。',
        },
      ]}
      scenariosTitle="WebMからテキストへの適切なシナリオ"
      scenarios={[
        {
          icon: 'video',
          title: 'Loomウォークスルー',
          desc: 'Loomで録画された製品デモ、コードレビュー、または非同期更新。トランスクリプトがチケット、ノーションドキュメント、またはフォローアップメールに役立ちます。',
        },
        {
          icon: 'briefcase',
          title: 'OBS画面録画',
          desc: 'OBS Studioで録画されたチュートリアルまたはゲームプレイキャプチャ。トランスクリプトがYouTubeの説明やブログ記事になります。',
        },
        {
          icon: 'gear',
          title: 'ブラウザMediaRecorder出力',
          desc: 'MediaRecorder APIを介してアプリが録音した音声。変換ステップなしでアプリが生成した.webmをドロップします。',
        },
        {
          icon: 'users',
          title: 'Google MeetまたはFirefox録画',
          desc: '一部の会議ツールやブラウザはデフォルトでWebMに録画します。ファイルをドロップして、会話の検索可能なテキストバージョンを取得します。',
        },
        {
          icon: 'editPen',
          title: '非同期デザインレビュー',
          desc: 'デザイナーがモックアップを説明するWebMを録画します。レビュアーは、視聴する前にスキミングできるように書面のトランスクリプトを受け取ります。',
        },
        {
          icon: 'book',
          title: '講義の画面キャプチャ',
          desc: '講師がナレーション付きのスライドを録画し、WebMとして共有します。学生はビデオと一緒に検索可能なトランスクリプトを取得します。',
        },
      ]}
      technicalTitle="WebM録画について知っておくべきこと"
      technicalIntro="WebMは、動画と音声の両方または音声のみを保持できるブラウザフレンドリーなコンテナです。ブラウザとレコーダーの設定により、どのトラックとコーデックが存在するかが決まります。"
      technicalFacts={[
        {
          icon: 'layers',
          title: 'OpusまたはVorbis音声',
          desc: '最近のWebM音声録音はOpusを使用しています。古いファイルはVorbisを使用する場合があります。両方ともWebMコンテナ内にあります。',
        },
        {
          icon: 'video',
          title: '音声のみまたは動画付き',
          desc: 'WebMには画面録画またはマイクトラックのみが含まれる場合があります。文字起こしは可聴音声ストリームを使用します。',
        },
        {
          icon: 'clip',
          title: 'タイムラインベースのエクスポート',
          desc: 'トランスクリプトのタイムスタンプは、後の字幕や編集作業のためにデコードされた録音のタイムラインに従います。',
        },
        {
          icon: 'gear',
          title: 'ブラウザレコーダー出力',
          desc: 'MediaRecorderの設定はブラウザによって異なります。キャプチャにマイクの許可がない場合、文字起こしする音声が含まれない可能性があります。',
        },
      ]}
      faq={[
        {
          q: 'MictooはどのようなWebMファイルを受け付けますか？',
          a: '標準的なWebM：OpusまたはVorbis音声付きの動画（Loom、OBS、ブラウザMediaRecorder）、または音声のみのWebM。サーバーサイドで音声トラックをデマルクスし、Whisper large-v3で文字起こしします。',
        },
        {
          q: '最初に自分で音声を抽出する必要がありますか？',
          a: 'いいえ。WebM動画をそのままアップロードしてください。サーバーサイドでデマルクスし、音声トラックのみを文字起こしします。すでに音声（OpusまたはVorbis）を抽出している場合も、それで問題ありません。',
        },
        {
          q: '私のLoomは60 MBを超えています。どうすればいいですか？',
          a: '20〜30分のLoomはしばしば60 MBを超えます。サインインしている場合、長いファイルを約3時間まで自動分割します。そうでない場合は、Loomのダウンロード設定を使用して品質を下げるか、音声をエクスポートしてアップロードしてください。',
        },
        {
          q: 'タイムスタンプは私の画面録画と一致しますか？',
          a: 'はい。トランスクリプトのタイムスタンプとSRT/VTTエクスポートのタイムスタンプは元のWebMタイムラインに合わせているため、キャプションはビデオに戻すと正確に一致します。',
        },
        {
          q: 'ウォークスルー用のSRTキャプションを取得できますか？',
          a: 'はい。文字起こし後にSRTまたはVTTをダウンロードできます。ビデオ編集ソフト、YouTubeアップロード、またはLoom再レンダリングワークフローにドロップしてください。',
        },
        {
          q: 'Mictooは非英語のWebMを文字起こししますか？',
          a: 'はい。Whisper large-v3は50以上の言語をサポートし、自動検出が可能です。短い録音や非英語のコンテンツの場合、よりクリーンな初回結果を得るために言語を明示的に設定してください。',
        },
        {
          q: 'WebMに音声トラックがない場合はどうなりますか？',
          a: 'トランスクリプトは空になります。音声トラックがないWebMファイル（無音の画面録画、GIFスタイルのキャプチャ）には、Whisperが文字起こしするものがありません。',
        },
        {
          q: 'トランスクリプトを別の言語に翻訳できますか？',
          a: 'はい。文字起こし後にターゲット言語を選択し、翻訳をクリックしてください。翻訳はGPT-4o-miniで実行され、元の内容と並んで表示されます。',
        },
        {
          q: '私のWebMファイルはあなたのサーバーに保存されますか？',
          a: 'いいえ。WebMは文字起こしプロバイダーにストリーミングされ、私たちはメモリ内でデマルクスして文字起こしを行い、その後すべてを削除します。トランスクリプトは、サインインして履歴に保存する場合のみ保存されます。',
        },
        {
          q: 'WebMの文字起こしにはどのくらい時間がかかりますか？',
          a: '10分のLoomは通常、エンドツーエンドで20〜40秒で完了します。長いWebMファイル（30〜45分）は60〜90秒かかります。大きな画面録画のアップロード速度が長いステップになることがよくあります。',
        },
      ]}
      ctaHeadline="あなたのLoomまたはOBS録画をドロップしてください"
      ctaSubtitle="WebM画面録画、ブラウザMediaRecorder出力。動画はサーバーサイドでデマルクスされます。"
      ctaButton="文字起こしのためにWebMをアップロード"
    />
  )
}