import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'pl': 'https://mictoo.com/pl/sermon-transcription',
  'ja': 'https://mictoo.com/ja/sermon-transcription',
  'ko': 'https://mictoo.com/ko/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: '礼拝の説教の文字起こし | Mictoo',
  description:
    '説教や礼拝の録音をアップロードして、検索可能なテキスト、タイムスタンプ、AI要約、エクスポートファイルを取得します。',
  alternates: {
    canonical: 'https://mictoo.com/ja/sermon-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: '説教の文字起こし: 無料 | Mictoo',
    description: 'サービスの録音をアップロードし、クリーンな文字起こしを取得します。',
    url: 'https://mictoo.com/ja/sermon-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '説教の文字起こし',
    description: '教会や学習のための無料の文字起こし。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaSermonTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ja"
      badge="教会 · 牧師 · 学習 · 無料"
      h1First="説教の文字起こし"
      h1Second="サービスと学習のための無料の文字起こし"
      subtitle="日曜日の礼拝の録音、平日の教え、または聖書の学びのセッションをドロップしてください。教会のウェブサイト、学習ノート、ポッドキャストエピソードノート用のタイムスタンプ付きのクリーンな文字起こしを取得します。"
      currentHref="/ja/sermon-transcription"

      platforms={[
        { name: 'SermonAudio',   iconKey: 'broadcast', brandBg: '#B91C1C' },
        { name: 'ProPresenter',  iconKey: 'monitor',   brandBg: '#0EA5E9' },
        { name: 'YouTube Live',  iconKey: 'broadcast', brandBg: '#FF0000' },
        { name: 'Facebook Live', iconKey: 'broadcast', brandBg: '#1877F2' },
        { name: 'Zoom',          iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/ja/zoom-transcription' },
        { name: '教会のストリーム', iconKey: 'broadcast', brandBg: '#6B21A8' },
      ]}

      howItWorksTitle="説教の文字起こしの仕組み"
      steps={[
        {
          icon: 'folder',
          title: 'サービスの録音をエクスポート',
          desc: '日曜日のライブストリームのMP4、聖域のサウンドボードのWAV、またはすでに公開しているポッドキャストのMP3。',
        },
        {
          icon: 'upload',
          title: 'ファイルをここにドロップ',
          desc: 'MP3、MP4、WAV、M4Aがすべて動作します。長いサービスはサインインして自動分割の恩恵を受けます。',
        },
        {
          icon: 'editPen',
          title: 'ウェブサイト用の文字起こし',
          desc: '教会のウェブサイト、学習ノート、ポッドキャストの説明、検索可能なアーカイブ用のクリーンなテキスト。',
        },
      ]}

      exampleTitle="例の説教の文字起こし"
      exampleFileName="sunday-service-jan-14.mp3"
      exampleDurationLabel="38:56"
      exampleLines={[
        { t: '0:00',  line: 'おはようございます、教会の皆さん。マタイの福音書の第5章第3節を開いてください。' },
        { t: '0:12',  line: '今朝は、イエスが呼んだ祝福された生活、すなわち「八つの幸い」に関する新しいシリーズを始めます。' },
        { t: '0:24',  line: '心の貧しい者は幸いです。天の国は彼らのものだからです。それが今週の私たちのテキストです。' },
        { t: '0:38',  line: 'イエスがここで使う「祝福された」という言葉は、浅い状況的な意味での幸せを意味するものではありません。' },
        { t: '0:51',  line: 'それは、状況に関係なく、神との関係によって深く、根本的に満たされていることを意味します。' },
        { t: '1:04',  line: 'そして、心の貧しい者であることは、物質的な貧困についてではありません。それは神への依存の姿勢です。' },
        { t: '1:18',  line: 'あなたが何を築こうとも、何を達成しようとも、最終的には恵みに基づいていることを知ることです。' },
      ]}
      summaryPoints={[
        '八つの幸い（マタイ5）に関する新しいシリーズ。',
        '焦点: "心の貧しい者は幸いです。" ',
        '祝福された = 神との関係による深い満足。',
        '心の貧しい者 = 依存の姿勢、物質的な貧困ではない。',
      ]}
      actionItems={[
        '教会のウェブサイトに文字起こしを投稿',
        'ソーシャル用に60秒のクリップを作成',
        '週次の学習ガイドに含める',
      ]}

      whyTitle="なぜMictooを選ぶのか"
      whyCards={[
        {
          icon: 'search',
          title: '検索可能な説教アーカイブ',
          desc: '教会のサイトに文字起こしを公開します。信者はトピックや節によって、数ヶ月または数年後に教えを見つけます。',
        },
        {
          icon: 'sparkles',
          title: '学習ノートと小グループガイド',
          desc: 'AI要約は、週次の学習ガイドや小グループのディスカッションの質問の出発点です。',
        },
        {
          icon: 'clip',
          title: 'ライブストリーム再生用のキャプション',
          desc: 'YouTubeやFacebookのビデオ版用のSRT。聴覚障害者のメンバーのためのアクセシビリティ。',
        },
        {
          icon: 'globe',
          title: '多言語の会衆のための翻訳',
          desc: '英語の説教ですが、会衆の一部はスペイン語や韓国語を好みます。ワンクリックで翻訳。',
        },
      ]}

      scenariosTitle="一般的な説教のシナリオ"
      scenarios={[
        { icon: 'church',    title: '日曜日の礼拝' },
        { icon: 'book',      title: '聖書の学び' },
        { icon: 'chat',      title: '小グループ' },
        { icon: 'sparkles',  title: 'デボーション' },
        { icon: 'globe',     title: '宣教' },
        { icon: 'headset',   title: 'ポッドキャスト' },
      ]}

      tipsTitle="説教録音のためのヒント"
      tips={[
        'サウンドボードのWAVまたはM4Aは、部屋のマイクよりもクリーンな入力を提供します。',
        '60 MBを超える長いサービスの場合は、サインインして自動分割を利用してください。',
        '聖書用語が多い会衆の場合は、キーワードを確認してください。',
        'アーカイブの順序のために、ファイル名に説教のタイトルを含めてください。',
      ]}

      guidesTitle="関連ツール"
      guides={[
        { href: '/ja/transcribe-mp3-to-text',    icon: 'file',  title: 'MP3形式',        desc: 'ポッドキャストに優しいエクスポート' },
        { href: '/ja/wav-to-text',               icon: 'file',  title: 'WAV形式',        desc: 'サウンドボード録音' },
        { href: '/ja/lecture-transcription',     icon: 'book',  title: '講義 / 学習',   desc: '教育重視のコンテンツ' },
        { href: '/ja/free-srt-generator',        icon: 'file',  title: 'SRTキャプション',      desc: 'ライブストリーム再生' },
      ]}

      faq={[
        {
          q: '日曜日のライブストリームの録音を文字起こしできますか？',
          a: 'はい。YouTube Live、Facebook Live、または教会のストリームプロバイダーからMP4をダウンロードし、ここにドロップしてください。ビデオはサーバー側で自動的にデマルクスされます。',
        },
        {
          q: 'Mictooは聖書の引用や神学用語を正確に扱いますか？',
          a: 'Whisper large-v3は、一般的な英語の聖書や神学用語をうまく扱います。珍しい固有名詞（古い翻訳、特定の翻訳用語）については、文字起こし後に確認してください。',
        },
        {
          q: 'Mictooは教会にとって無料ですか？',
          a: 'はい。サイズ制限までのファイルごとに無料です。教会特有のティアやライセンスはありません。',
        },
        {
          q: '私のサービス録音は60 MBを超えています。どうすればいいですか？',
          a: 'サインインして自動分割を利用してください（約3時間まで）。またはダウンサンプルします: ffmpeg -i service.mp3 -b:a 64k -ac 1 out.mp3。同じ精度で、3-5倍小さくなります。',
        },
        {
          q: 'ライブストリーム再生用のキャプションを取得できますか？',
          a: 'はい。文字起こし後にSRTまたはVTTをダウンロードできます。タイムスタンプはYouTube、Facebook、またはビデオホスティングに合わせて元の録音に合わせられます。',
        },
        {
          q: '宣教チームのために説教を翻訳できますか？',
          a: 'はい。ターゲット言語を選択して翻訳をクリックしてください。多言語の会衆、宣教、ディアスポラのミニストリーに役立ちます。',
        },
        {
          q: '録音はあなたのサーバーに保存されますか？',
          a: 'いいえ。音声は文字起こしプロバイダーにストリーミングされ、一度処理されて削除されます。文字起こしのみがサインインしたアカウントに残ります。',
        },
      ]}

      ctaHeadline="すべての説教を検索可能なリソースに変えましょう"
      ctaSubtitle="ウェブサイト用の文字起こし、再生用のキャプション、学習グループ用のノート。"
      ctaButton="説教をアップロード"

      relatedLinks={[
        { href: '/ja/lecture-transcription',     label: '講義の文字起こし' },
        { href: '/ja/podcast-transcription',     label: 'ポッドキャストの文字起こし' },
        { href: '/ja/webinar-transcription',     label: 'ウェビナーの文字起こし' },
        { href: '/ja/free-srt-generator',        label: '無料のSRTジェネレーター' },
        { href: '/ja/interview-transcription',   label: 'インタビューの文字起こし' },
      ]}
    />
  )
}