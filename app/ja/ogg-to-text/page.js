import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/ogg-to-text',
  'fr': 'https://mictoo.com/fr/ogg-to-text',
  'de': 'https://mictoo.com/de/ogg-to-text',
  'es': 'https://mictoo.com/es/ogg-to-text',
  'ru': 'https://mictoo.com/ru/ogg-to-text',
  'it': 'https://mictoo.com/it/ogg-to-text',
  'pt': 'https://mictoo.com/pt/ogg-to-text',
  'pl': 'https://mictoo.com/pl/ogg-to-text',
  'ja': 'https://mictoo.com/ja/ogg-to-text',
  'ko': 'https://mictoo.com/ko/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGGからテキストへ：Telegramボイス、Linuxオーディオ、Opus/Vorbisの文字起こし | Mictoo',
  description:
    'OGGオーディオ（Vorbis、Opus、OGG内のFLAC）またはTelegramの.ogaボイスメッセージをアップロードします。編集可能なトランスクリプトに秒単位のタイムスタンプ付き、サインアップ不要。',
  alternates: {
    canonical: 'https://mictoo.com/ja/ogg-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'OGGからテキストへ：Telegramボイス、Linuxオーディオ、Opus/Vorbisの文字起こし | Mictoo',
    description: 'OGGオーディオまたはTelegramの.ogaボイスメッセージをアップロードします。編集可能なトランスクリプトに秒単位のタイムスタンプ付き。',
    url: 'https://mictoo.com/ja/ogg-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OGGからテキストへ：TelegramボイスとLinuxオーディオの文字起こし',
    description: 'OGGオーディオまたはTelegramの.ogaボイスメッセージをアップロードします。編集可能なトランスクリプトに秒単位のタイムスタンプ付き。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaOggToTextPage() {
  return (
    <FormatPageLayout
      locale="ja"
      badge="OGG · Vorbis · Opus · .oga"
      h1First="OGGからテキストへ"
      h1Second="Telegramボイス、Linuxオーディオ、OpusとVorbis"
      subtitle="OGGはTelegram Voiceが使用する形式（.oga）であり、Linuxオーディオアプリがデフォルトで使用する形式であり、オープンソースのOpusコーデックが内蔵されています。ファイルをドロップすると、オーディオストリームを自動検出し、Whisper large-v3で文字起こしを行います。"
      highlightFormat="ogg"
      previewFileName="telegram-voice.oga"
      previewWordCount={128}
      previewDurationLabel="1分52秒"
      previewLines={[
        { t: '0:00',  line: 'こんにちは、明日の電話についての短いボイスメッセージです。' },
        { t: '0:03',  line: 'デッキを見ましたが、スライド4から6はプレゼンする前に再考する必要があります。' },
        { t: '0:10',  line: '主な問題は、ストーリーが問題から価格に直接飛んでしまい、デモのスクリーンショットを示していないことです。' },
        { t: '0:20',  line: '私がすることは、スライド5をデモフローに置き換え、価格をデッキの最後に押し込むことです。' },
        { t: '0:30',  line: 'そうすれば、コストについて話す前に製品が実際に何をするのかについての緊張感を高めることができます。' },
        { t: '0:39',  line: 'また、クライアントは昨日、統合スライドを見たいと言っていましたが、それは現在付録にあります。' },
        { t: '0:49',  line: 'それをメインフローに移動し、デモと価格の間に置くかもしれません。' },
        { t: '0:56',  line: 'また話しましょう、機会があればあなたの考えを教えてください。' },
      ]}
      whyTitle="OGG文字起こしにMictooを選ぶ理由"
      whyCards={[
        {
          icon: 'mic',
          title: 'Telegramボイスメッセージ、ネイティブ',
          desc: 'Telegramの.ogaボイスノートがそのまま使用できます。名前変更や再パッケージは不要です。OGGコンテナ内のOpusストリームを処理します。',
        },
        {
          icon: 'gear',
          title: 'Vorbis、Opus、FLAC-in-OGG',
          desc: 'OGGコンテナ内の任意のコーデックが機能します：Vorbis（古い）、Opus（現代）、FLAC-in-OGG（オーディオファイル向け）。サーバー側で自動検出されます。',
        },
        {
          icon: 'sparkles',
          title: 'ボイスノートチェーンのAI要約',
          desc: 'ボイスメッセージは長くなりがちです。AI要約は5分の.ogaを2行のアクション可能な要約に変えます。',
        },
        {
          icon: 'globe',
          title: '50以上の言語に翻訳',
          desc: 'グループチャットからのロシア語、スペイン語、またはポルトガル語のボイスメッセージ。文字起こし後に英語（または任意のターゲット）に翻訳します。',
        },
      ]}
      scenariosTitle="OGGからテキストへの適切なシナリオ"
      scenarios={[
        {
          icon: 'mic',
          title: 'Telegramボイスメッセージ',
          desc: '同僚やクライアントからTelegram経由で送信されたボイスノート。チャットから.ogaを保存し、ここにドロップして、スキミング用のテキストバージョンを取得します。',
        },
        {
          icon: 'gear',
          title: 'Linuxオーディオ録音',
          desc: 'Audacity、GNOME Sound Recorder、またはOGGをデフォルトとするKDEオーディオツールからの録音。完全にサポートされ、変換は不要です。',
        },
        {
          icon: 'briefcase',
          title: 'オープンソースアプリのエクスポート',
          desc: 'OGGをエクスポートするポッドキャストまたはインタビュー録音（多くのFOSSアプリはライセンス上の理由でVorbisまたはOpusをデフォルトにしています）。',
        },
        {
          icon: 'video',
          title: 'Firefox MediaRecorderキャプチャ',
          desc: 'Firefoxはブラウザ録音アプリからOGG/Opusを生成することがよくあります。ファイルをドロップして、タイムスタンプ付きのクリーンなトランスクリプトを取得します。',
        },
        {
          icon: 'editPen',
          title: '音声でのメモまたはメモ',
          desc: 'OGGとして保存されるアプリでキャプチャされた音声優先のメモ。編集可能なテキストに変換し、執筆ワークフローの準備を整えます。',
        },
        {
          icon: 'users',
          title: '複数話者のOGGチャットログ',
          desc: 'Discord、Mumble、またはOGGにエクスポートされた類似のVOIP録音。参照用、会議の議事録、またはアーカイブのトランスクリプト。',
        },
      ]}
      technicalTitle="OGGファイルに含まれる可能性のあるもの"
      technicalIntro="OGGは単一のオーディオコーデックではなく、コンテナファミリーです。ストリームタイプと拡張子を知ることで、録音の出所を説明するのに役立ちますが、アップロード前に再パッケージする必要はありません。"
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Vorbis、Opus、またはFLAC',
          desc: 'OGGコンテナは複数のコーデックを運ぶことができます。ボイスメッセージは一般的にOpusを使用し、古いデスクトップオーディオはしばしばVorbisを使用します。',
        },
        {
          icon: 'file',
          title: '.ogaと.ogg',
          desc: '.ogaは同じコンテナファミリー内のオーディオ専用拡張子です。Telegramボイスはこの拡張子でエクスポートされることがよくあります。',
        },
        {
          icon: 'mic',
          title: 'ボイスメッセージのソース',
          desc: '短いモバイルメッセージには部屋のノイズや電話処理が含まれることがあります。クリアなキャプチャがコンテナ名よりも重要です。',
        },
        {
          icon: 'gear',
          title: 'ヘッダーに基づく検査',
          desc: 'ストリーム構造は処理中に検査されるため、異常な拡張子は最初に名前を変更する必要はありません。',
        },
      ]}
      faq={[
        {
          q: 'MictooはどのようなOGGファイルを受け付けますか？',
          a: '標準のOGGコンテナ：Vorbisオーディオ（古い、Linuxで一般的）、Opusオーディオ（新しい、Telegramボイスや現代のアプリで使用）、およびFLAC-in-OGG。異なる拡張子のOGGであるTelegramの.ogaファイルも受け付けます。',
        },
        {
          q: '.ogaファイルは.oggと同じですか？',
          a: '実質的にそうです。.ogaはオーディオ専用OGGの標準化された拡張子で、Opusストリームを運ぶTelegramボイスメッセージで最も一般的に使用されます。Mictooは.ogaと.oggを同じように扱います。',
        },
        {
          q: '私のOGGファイルは60 MBを超えています。どうすればいいですか？',
          a: 'OpusとVorbisは効率的なので、60 MBに達するということは通常、非常に長い録音を意味します。サインインしている場合、最大約3時間まで自動分割します。それ以外の場合は、最初にダウンサンプルしてください：ffmpeg -i in.ogg -b:a 32k -ac 1 out.ogg。音声はクリアです。',
        },
        {
          q: 'OGGビデオ（Theora）を受け付けますか？',
          a: 'OGG/Theoraコンテナ内のオーディオトラックが文字起こしされます。.ogvファイルをアップロードすると、他のビデオフォーマットと同様にオーディオをデマルクスします。サイレントTheoraクリップは空のトランスクリプトを生成します。',
        },
        {
          q: 'Mictooは非英語のOGGを文字起こししますか？',
          a: 'はい。Whisper large-v3は50以上の言語を自動検出でサポートします。短いボイスメッセージや非英語のコンテンツの場合、クリーンな初回結果を得るために言語を明示的に設定してください。',
        },
        {
          q: 'OGG録音のSRTキャプションを取得できますか？',
          a: 'はい。文字起こし後にSRTまたはVTTをダウンロードできます。タイムスタンプは元のOGGタイムラインに合わせて、ビデオエディタやアクセシビリティツールで使用できます。',
        },
        {
          q: '私のOGGファイルはサーバーに保存されますか？',
          a: 'いいえ。オーディオは文字起こしプロバイダーにストリーミングされ、一度処理され、メモリから削除されます。ディスクに書き込むことはありません。トランスクリプトは、サインインして履歴に保存する場合のみ保存されます。',
        },
        {
          q: 'トランスクリプトを別の言語に翻訳できますか？',
          a: 'はい。文字起こし後にターゲット言語を選択し、翻訳をクリックします。翻訳はGPT-4o-miniで実行され、元の内容と並んで表示されます。',
        },
        {
          q: 'OGGの品質はトランスクリプトに影響しますか？',
          a: 'ほとんど影響しません。24-32 kbpsのOpusは音声に対してクリアに聞こえ、高ビットレートとほぼ同じように文字起こしされます。Whisperは内部で16 kHzモノに再サンプリングするため、ビットレートはクリアな音声には最小限の影響を与えます。',
        },
        {
          q: 'OGGの文字起こしにはどのくらいの時間がかかりますか？',
          a: '2分のTelegramボイスノートは通常、エンドツーエンドで5-15秒で完了します。長いOGGファイル（30-45分）は45-90秒かかります。アップロード速度が長いステップになることがよくあります。',
        },
      ]}
      ctaHeadline="TelegramボイスまたはOGGファイルをドロップしてください"
      ctaSubtitle="Opus、Vorbis、FLAC-in-OGG、.ogaボイスメッセージ。すべてのOGGストリームをネイティブに処理します。"
      ctaButton="OGGをアップロードして文字起こし"
    />
  )
}