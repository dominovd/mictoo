import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: '音声・動画をテキストに変換するAI文字起こし、無料 — Mictoo',
  description: '音声と動画を無料でテキスト化。登録不要、OpenAI Whisper搭載。MP3、MP4、WAV、50以上の言語に対応。',
  alternates: {
    canonical: 'https://mictoo.com/ja',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'ja': 'https://mictoo.com/ja',
      'ko': 'https://mictoo.com/ko',
      'x-default': 'https://mictoo.com',
    },
  },
  openGraph: {
    title: 'Mictoo — 無料AI音声・動画文字起こし',
    description: '音声または動画ファイルをアップロードして、数秒で文字起こしを取得。',
    url: 'https://mictoo.com/ja',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — 無料AI音声・動画文字起こし' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — 無料AI文字起こし',
    description: '音声または動画ファイルをアップロードして、数秒で文字起こしを取得。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JapanesePage() {
  return (
    <LandingLayout
      defaultLanguage="ja"
      badge="AI · 無料 · 登録不要 · 50以上の言語"
      h1={<>音声と動画をテキストに変換<br /><span className="text-brand-600">AI搭載、無料オンライン文字起こし</span></>}
      subtitle="音声または動画ファイルをアップロードするだけで、数秒以内に正確なAI文字起こしを取得できます。アカウントは必要ありません。"
      howItWorks={[
        { icon: '📂', title: 'ファイルをアップロード', desc: 'ドラッグ＆ドロップまたはクリックでアップロードします。MP3、MP4、WAV、M4A、OGG、WEBM、FLACに対応。匿名で最大25 MB、登録後は60 MBまで利用できます。' },
        { icon: '⚡', title: 'AIが文字起こし', desc: 'OpenAIのWhisperが50以上の言語で高精度に音声をテキスト化します。10分のファイルは通常30秒以内に処理が完了します。' },
        { icon: '📋', title: 'コピーまたはダウンロード', desc: 'ブラウザ内で文字起こしを直接編集できます。クリップボードへコピーするか、.txt、.srt、.pdf、.docxとして書き出せます。' },
      ]}
      whyUse={{ title: 'Mictooを選ぶ理由', bullets: [
        { title: '完全無料', desc: '月額料金や試用期間の制限はありません。Mictooは無料で利用でき、月間上限や分単位のカウンターもありません。' },
        { title: 'プライバシー重視', desc: 'ファイルはWhisper API（メインはGroq、フォールバックはOpenAI）に直接送信され、処理後すぐに削除されます。当社では保存せず、お客様のデータでモデルを学習することもありません。' },
        { title: '50以上の言語に対応', desc: '言語は自動検出されます。日本語、英語、中国語、韓国語、スペイン語、ドイツ語、ロシア語など多数の言語で動作します。' },
        { title: '高い精度', desc: 'OpenAIのWhisperを採用しています。ChatGPTや主要な文字起こしサービスで使われているのと同じ音声認識モデルです。' },
        { title: '高速な結果', desc: '10分のファイルは30秒未満で文字起こしできます。順番待ちもなく、「30秒お待ちください」のポップアップもありません。' },
        { title: '編集可能な出力', desc: 'ブラウザ内で文字起こしを確認・修正してから、クリップボードへコピーまたは.txt、.srt、.pdfでダウンロードできます。' },
      ]}}
      useCases={{ title: 'Mictooの利用シーン', items: [
        { title: '学生', desc: '講義、インタビュー、研究録音を文字起こしできます。検索可能なテキストは音声を聞き直すよりも復習が楽になります。' },
        { title: 'ポッドキャスター', desc: 'エピソードをブログ記事、ショーノート、字幕に変換できます。SEO効果とアクセシビリティ向上が同時に得られます。' },
        { title: 'ジャーナリスト', desc: '録音したインタビューを数秒でテキスト化できます。タイムスタンプ付きで正確な引用と裏取りに役立ちます。' },
        { title: '企業チーム', desc: '会議、商談、プレゼンテーションを文字起こしできます。再生し直す代わりにキーワードで検索できるようになります。' },
        { title: 'コンテンツクリエイター', desc: 'YouTube、TikTok、Instagram Reels向けの字幕を生成できます。SRT書き出しはYouTube Studioにそのままアップロードできます。' },
        { title: '法務・医療分野', desc: 'メモやドキュメント用の文字起こし下書きを素早く作成できます。最終版には元の音声ファイルを併用してください。' },
      ]}}
      proTips={{ title: 'より良い文字起こしのコツ', tips: [
        { title: '音声はモノラル64 kbpsで十分です', desc: 'Mictooは最大25 MBまで受け付けます。話し声であればモノラル64 kbpsで1時間あたり約28 MBに収まり、精度はほとんど落ちません。詳しくは音声圧縮ガイドをご覧ください。' },
        { title: 'ファイルが30分を超えたら登録を', desc: '匿名では最大30分、無料登録で最大60分まで対応します。それ以上の場合はファイルを分割して、後で文字起こしを結合してください。' },
        { title: '自動検出が外れたら言語を指定', desc: 'Whisperは99%の確率で正しく言語を判定します。10秒未満の短いファイルや多言語が混在するファイルでは、手動の言語セレクターを使うと安定します。' },
        { title: '動画の文字起こしには音声だけで十分', desc: 'MictooはMP4を直接受け付けますが、音声だけを抽出（MP4からMP3への変換ツールあり）すれば、ファイルサイズが10分の1になります。' },
        { title: 'AI要約も結果に含まれます', desc: '文字起こしの後、Mictooは要点とアクションアイテムを含むAI要約を自動生成します。長時間の会議やポッドキャストで便利です。' },
        { title: '文字起こしを28言語に翻訳', desc: '文字起こしが完成したら、リーダー画面の「翻訳」をクリックします。Whisperが原文を書き起こし、その後GPT-4o-miniが目的の言語へ翻訳します。' },
      ]}}
      faq={[
        {
          q: '音声ファイルを無料でテキストに変換するには？',
          a: '上のエリアに音声ファイルをアップロードしてください。MictooがOpenAIのWhisperで自動的に文字起こしを行い、数秒以内にテキストを表示します。25 MBまでのファイルは登録なしで利用できます。',
        },
        {
          q: '日本語の音声認識は正確に動作しますか？',
          a: 'はい。Mictooが基盤とするOpenAIのWhisperモデルは、何千時間もの日本語音声で学習されています。地域による発音の違いや専門用語にも高い精度で対応します。',
        },
        {
          q: 'ファイルはサーバーに保存されますか？',
          a: 'いいえ。ファイルは文字起こしAPIに直接送信され、処理後すぐに削除されます。当社のサーバーには何も残らず、モデルの学習にも使用しません。',
        },
        {
          q: 'ファイルサイズの上限はどれくらいですか？',
          a: '匿名ユーザーは25 MB、無料登録後は60 MBまで利用できます。モノラル64 kbpsのMP3なら、約1時間分の音声が25 MBに収まります。',
        },
        {
          q: '文字起こしにはどれくらい時間がかかりますか？',
          a: '10分のファイルは通常30秒以内に処理が完了します。長いファイルは比例して時間がかかりますが、実時間より大幅に高速に処理されます。',
        },
        {
          q: '対応している音声・動画フォーマットは？',
          a: 'MP3、MP4、WAV、M4A、OGG、WEBM、FLAC、MPEGに対応しています。動画ファイルの場合、Mictooが自動で音声トラックを抽出します。対応外のフォーマットは、内蔵コンバーターで先にMP3またはWAVへ変換してください。',
        },
        {
          q: 'SRT形式の字幕をダウンロードできますか？',
          a: 'はい。文字起こし後に.srtボタンをクリックすると、タイムスタンプ付き字幕ファイルをダウンロードできます。YouTube Studio、Premiere、Final Cutにそのままアップロードできます。',
        },
        {
          q: 'Mictooはコンテンツの要約を生成しますか？',
          a: 'はい。文字起こしのたびに、要点とアクションアイテムを含むAI要約を自動で作成します。長尺のポッドキャスト、会議、講義で特に役立ちます。',
        },
        {
          q: 'YouTube動画を文字起こしできますか？',
          a: 'URLからの直接処理はできません。YouTubeはサードパーティのサーバーをブロックしています。4K Video Downloaderなどのツールで動画をローカルに保存してから、MP4ファイルをここにアップロードしてください。YouTubeダウンロードガイドで手順を詳しく解説しています。',
        },
        {
          q: 'モバイルアプリはありますか？',
          a: 'ネイティブアプリはまだありませんが、サイトはiOS SafariとAndroid Chromeで快適に動作します。スマートフォンのカメラロールやボイスメモから直接アップロードできます。',
        },
      ]}
      relatedLinks={[
        { href: '/ja/transcribe-mp3-to-text', label: 'MP3をテキストに変換', desc: 'ポッドキャスト、ボイスメモ、録音通話などMP3ファイル専用の文字起こし。' },
        { href: '/ja/transcribe-video-to-text', label: '動画をテキストに変換', desc: 'MP4、MOV、WEBMの文字起こし。Zoom録画、YouTube動画、画面録画に最適です。' },
        { href: '/ja/podcast-transcription', label: 'ポッドキャスト文字起こし', desc: '同じエンジンに、長時間のポッドキャストや編集向けの専用ヒントを追加。' },
        { href: '/ja/free-srt-generator', label: '無料SRT字幕ジェネレーター', desc: 'YouTube Studio、Premiere、DaVinci Resolveですぐ使えるタイムスタンプ付き字幕。' },
      ]}
    />
  )
}
