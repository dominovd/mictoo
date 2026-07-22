import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/dictation-to-text',
  'fr': 'https://mictoo.com/fr/dictation-to-text',
  'de': 'https://mictoo.com/de/dictation-to-text',
  'es': 'https://mictoo.com/es/dictation-to-text',
  'ru': 'https://mictoo.com/ru/dictation-to-text',
  'it': 'https://mictoo.com/it/dictation-to-text',
  'pt': 'https://mictoo.com/pt/dictation-to-text',
  'pl': 'https://mictoo.com/pl/dictation-to-text',
  'ja': 'https://mictoo.com/ja/dictation-to-text',
  'ko': 'https://mictoo.com/ko/dictation-to-text',
  'x-default': 'https://mictoo.com/dictation-to-text',
}

export const metadata = {
  title: '録音された声の草稿からテキストへ | Mictoo',
  description:
    '声の草稿を録音し、ファイルをアップロードして、編集可能なテキストをタイムスタンプと書き込みワークフローのためのエクスポートオプションと共に取得します。',
  alternates: {
    canonical: 'https://mictoo.com/ja/dictation-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: '録音からテキストへ: 無料 | Mictoo',
    description: '声で草稿を録音し、ファイルをドロップして、クリーンなテキストを取得します。',
    url: 'https://mictoo.com/ja/dictation-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '録音からテキストへ',
    description: 'プロフェッショナル向けの音声優先のライティング。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaDictationToTextPage() {
  return (
    <UseCaseLayout
      locale="ja"
      badge="ライター · プロフェッショナル · 無料"
      h1First="録音からテキストへ"
      h1Second="タイプするより早く考える誰にでも"
      subtitle="電話、ラップトップ、または任意のボイスレコーダーで草稿を録音します。ファイルをドロップします。エディタにペーストする準備が整ったクリーンで句読点のあるテキストを取得します。長文コンテンツに対しては、内蔵の電話の音声認識よりも高い精度です。"
      currentHref="/ja/dictation-to-text"

      platforms={[
        { name: 'iPhone',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: 'Windows Rec',  iconKey: 'mic',       brandBg: '#0078D4' },
        { name: 'QuickTime',    iconKey: 'videoCameraFill', brandBg: '#374151' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
        { name: 'Dragon',       iconKey: 'mic',       brandBg: '#DC2626' },
      ]}

      howItWorksTitle="録音からテキストへの仕組み"
      steps={[
        {
          icon: 'folder',
          title: '草稿を録音する',
          desc: '任意のレコーダー: 電話のボイスメモ、ラップトップのボイスレコーダー、または専用の音声認識アプリ。',
        },
        {
          icon: 'upload',
          title: 'ここにファイルをドロップ',
          desc: 'M4A（iPhone）、MP3（Android）、WAV（レコーダー）。匿名で最大25 MB、サインインで60 MBまで無料。',
        },
        {
          icon: 'editPen',
          title: 'クリーンなテキスト、ペーストの準備完了',
          desc: '自動的な句読点、文の区切り、フォーマット。エクスポート前に調整するためにエディタモードに切り替えます。',
        },
      ]}

      exampleTitle="例: 録音された草稿"
      exampleFileName="chapter-3-draft.m4a"
      exampleDurationLabel="12:44"
      exampleLines={[
        { t: '0:00',  line: '第3章。裁判の朝。' },
        { t: '0:06',  line: 'アレックスはほとんど眠れなかった。正確には不安からではなく、長い準備の後に続く奇妙な静けさからだった。' },
        { t: '0:20',  line: '6か月間、目覚めている時間はすべてその事件に費やされた。そして今、突然、するべきことはただ出席することだけだった。' },
        { t: '0:36',  line: '裁判所は彼女のアパートから3ブロックの距離にあった。彼女はゆっくり歩き、冷たい3月の空気が彼女を通り抜けるのを感じた。' },
        { t: '0:50',  line: '彼女が前の階段に到着する頃には、記者たちはすでに集まっており、認識できる顔を待っていた。' },
        { t: '1:04',  line: '彼女は頭を下げて彼らを通り過ぎた。質問の時間は後である。前ではない。' },
        { t: '1:18',  line: '中に入ると、ロビーはほとんど空だった。数人の事務員、一人の清掃員、そして今週毎日見かけた警備員。' },
      ]}
      summaryPoints={[
        '第3章のオープニング: 裁判の朝。',
        'キャラクター: アレックス、主人公、眠れないが不安ではない。',
        '設定: 冷たい3月の朝、裁判所は3ブロック先。',
        '外にメディアの存在; 中は空のロビー。',
      ]}
      actionItems={[]}

      whyTitle="録音にはMictooを選ぶ理由"
      whyCards={[
        {
          icon: 'target',
          title: '録音された草稿のために設計',
          desc: '最初に完全な草稿を録音し、その後1つのファイルとして転写します。これにより、テキストをレビューおよび編集する際に元の音声が利用可能になります。',
        },
        {
          icon: 'editPen',
          title: '音声認識後のクリーンアップ用エディタ',
          desc: 'エディタモードに切り替え、名前を修正し、段落の区切りを追加し、ライティングアプリ用にDOCXとしてエクスポートします。',
        },
        {
          icon: 'sparkles',
          title: 'アウトライン抽出のためのAI要約',
          desc: '章のビート、メモの箇条書き、または記事の構造のためのしっかりした初稿。',
        },
        {
          icon: 'globe',
          title: '任意の言語で音声入力',
          desc: '50以上の言語に自動検出。多言語のライターは、設定を変更せずに録音間で言語を切り替えることができます。',
        },
      ]}

      scenariosTitle="一般的な音声入力シナリオ"
      scenarios={[
        { icon: 'editPen', title: '初稿' },
        { icon: 'book',    title: '章の音声入力' },
        { icon: 'briefcase', title: 'メモ / メール' },
        { icon: 'chat',    title: '日記' },
        { icon: 'search',  title: '研究ノート' },
        { icon: 'globe',   title: '多言語' },
      ]}

      tipsTitle="クリーンな音声入力のためのヒント"
      tips={[
        '明示的な句読点が必要な場合は「コンマ」、「ピリオド」、「新しい段落」と言ってください。',
        '言葉を区別しやすくするために静かな部屋で録音してください。',
        '60 MBを超える長い章の場合は、サインインして自動分割を利用してください。',
        'エクスポート前にエディタモードをレビューして、名前や専門用語を確認してください。',
      ]}

      guidesTitle="関連ツール"
      guides={[
        { href: '/ja/voice-memo-to-text',      icon: 'mic',    title: 'ボイスメモ',   desc: 'アイデアキャプチャ、草稿作成ではない' },
        { href: '/ja/m4a-to-text',             icon: 'file',   title: 'M4A形式',   desc: 'iPhone / Appleのエクスポート' },
        { href: '/ja/transcribe-mp3-to-text',  icon: 'file',   title: 'MP3形式',   desc: 'Androidレコーダーのエクスポート' },
        { href: '/ja/interview-transcription', icon: 'chat',   title: 'インタビュー',    desc: '二人の録音された会話' },
      ]}

      faq={[
        {
          q: 'Mictooはライブ電話の音声入力とどう違いますか？',
          a: 'Mictooは、入力中にライブで聞くのではなく、保存された録音から作業します。これにより、元の音声に対して長い草稿をレビューするのに便利です。現在のファイルサイズと時間の制限に従います。',
        },
        {
          q: '技術的または医療用語を音声入力できますか？',
          a: 'Whisperは一般的な技術用語をうまく処理します。珍しいまたは特許用語については、転写後にエディタモードを使用して修正してください。インラインで音声入力して再修正するよりも速いです。',
        },
        {
          q: '音声入力のファイルサイズ制限は何ですか？',
          a: '匿名で25 MB、サインイン時に60 MBです。典型的なビットレートでの60分の音声録音は20-30 MBなので、ほとんどの音声入力セッションは無料の制限内に収まります。',
        },
        {
          q: 'Mictooは自動的に句読点を追加しますか？',
          a: 'はい。文や段落はスピーチのリズムから検出されます。特定のポイントで明示的な句読点が必要な場合は「コンマ」または「ピリオド」と言ってください。',
        },
        {
          q: 'エクスポート前にトランスクリプトを編集できますか？',
          a: 'はい。エディタモードに切り替えて、インラインで任意の単語や行を編集できます。変更を保存し、TXT、DOCX、またはPDF（サインイン時）としてエクスポートします。',
        },
        {
          q: '録音された草稿を翻訳できますか？',
          a: 'はい。ターゲット言語を選択し、翻訳をクリックします。第二言語で制作するライターや、作業バージョンを作成する翻訳者に便利です。',
        },
        {
          q: '音声入力はサーバーに保存されますか？',
          a: 'いいえ。音声は転写プロバイダーにストリーミングされ、一度処理されて削除されます。サインインして保存した場合のみ、トランスクリプトが残ります。',
        },
      ]}

      ctaHeadline="話された草稿をテキストに変換"
      ctaSubtitle="章、メモ、記事、日記のエントリー。言いたいことがすでにわかっているときは、タイピングよりも速いです。"
      ctaButton="音声入力をアップロード"

      relatedLinks={[
        { href: '/ja/voice-memo-to-text',      label: 'ボイスメモからテキストへ' },
        { href: '/ja/interview-transcription', label: 'インタビューの転写' },
        { href: '/ja/lecture-transcription',   label: '講義の転写' },
        { href: '/ja/m4a-to-text',             label: 'M4Aからテキストへ' },
        { href: '/ja/transcribe-mp3-to-text',  label: 'MP3からテキストへ' },
      ]}
    />
  )
}