import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'pl': 'https://mictoo.com/pl/aac-to-text',
  'ja': 'https://mictoo.com/ja/aac-to-text',
  'ko': 'https://mictoo.com/ko/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AACからテキストへ：生AACおよびADTSオーディオの文字起こし | Mictoo',
  description:
    '生の.aacファイル（ADTSストリームまたはADIF）をアップロードし、数秒で編集可能な文字起こしを取得します。ポッドキャストのダウンロード、放送アーカイブ、iPhoneオーディオのリッピングに一般的です。',
  alternates: {
    canonical: 'https://mictoo.com/ja/aac-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'AACからテキストへ：生AACおよびADTSオーディオの文字起こし | Mictoo',
    description: '生の.aacファイル（ADTSストリームまたはADIF）をアップロードします。数秒で編集可能な文字起こしが得られます。',
    url: 'https://mictoo.com/ja/aac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AACからテキストへ：生AACストリームの文字起こし',
    description: '生の.aac（ADTSまたはADIF）をアップロードします。数秒で編集可能な文字起こしが得られます。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaAacToTextPage() {
  return (
    <FormatPageLayout
      locale="ja"
      badge="AAC · ADTS · 生コーデックストリーム"
      h1First="AACからテキストへ"
      h1Second="生ADTSストリーム、放送アーカイブ、リッピングされたオーディオ"
      subtitle="生の.aacファイルは、放送ストリーム、ラジオキャプチャ、抽出されたメディアトラックから来ることがよくあります。ファイルをドロップすると、Mictooがその構造を検査し、Whisper large-v3で話された音声を文字起こしします。"
      highlightFormat="aac"
      previewFileName="broadcast-audio.aac"
      previewWordCount={142}
      previewDurationLabel="9分44秒"
      previewLines={[
        { t: '0:00',  line: 'あなたは朝のショーを聞いています。今は7時15分で、私たちは主要なストーリーに戻ります。' },
        { t: '0:08',  line: '市議会は、ほぼ3年の議論の末、新しい交通拡張を可決しました。' },
        { t: '0:17',  line: 'この計画では、2つの新しいライトレールラインを追加し、既存のラインを約8マイル延長します。' },
        { t: '0:27',  line: 'このことが日常の通勤者にとって何を意味するのかを解説するために、私たちはスタジオに交通レポーターを招いています。' },
        { t: '0:37',  line: 'お招きいただきありがとうございます。見出しは、東行きの回廊が20年ぶりに鉄道オプションを得るということです。' },
        { t: '0:47',  line: 'ラッシュアワーにその区間を運転している人にとって、これは本当に変革的です。' },
        { t: '0:56',  line: '建設は来春に始まり、最初の新しいラインは2029年に開通する予定です。' },
        { t: '1:06',  line: '市議会は、約40,000人の通勤者が新しい区間を利用すると見積もっています。' },
      ]}
      whyTitle="AAC文字起こしにMictooを選ぶ理由"
      whyCards={[
        {
          icon: 'waveform',
          title: '生ADTSをネイティブに処理',
          desc: 'ほとんどの生の.aacファイルはADTSフレーム（Audio Data Transport Stream）です。同期ワード0xFFFを検出し、ストリームをWhisperに渡します。',
        },
        {
          icon: 'gear',
          title: 'ADIFとLATMもサポート',
          desc: 'あまり一般的ではないADIF（Audio Data Interchange Format）やLATMフレーミングも機能します。手動での再パッケージングやffmpegステップは不要です。',
        },
        {
          icon: 'clip',
          title: 'コンテナは不要',
          desc: 'AACは通常M4AまたはMP4内に存在しますが、時には生のストリームがディスクに保存されることもあります。Mictooはどちらも要求せずに受け入れます。',
        },
        {
          icon: 'sparkles',
          title: 'アーカイブセグメントのAI要約',
          desc: '放送セグメント、ラジオアーカイブクリップ、またはストリーミングダンプ。AI要約により、アーカイブを迅速に整理できます。',
        },
      ]}
      scenariosTitle="AACからテキストへの適切なシナリオ"
      scenarios={[
        {
          icon: 'briefcase',
          title: '放送ラジオアーカイブ',
          desc: '生AACとして出荷されるHLSまたはIcecastストリームから録音されたセグメント。文字起こしによりアーカイブが検索可能になります。',
        },
        {
          icon: 'video',
          title: 'HLSライブストリームキャプチャ',
          desc: 'YouTube Live、Twitch、またはラジオHLSストリームが.aacチャンクシーケンスとしてキャプチャされます。ファイルをドロップし、テキストを取得します。',
        },
        {
          icon: 'mic',
          title: 'リッピングされたiPhoneオーディオ',
          desc: 'iPhoneの録音または共有ファイルから抽出されたオーディオがM4Aコンテナを失い、生のAACとして出てきたものです。',
        },
        {
          icon: 'gear',
          title: 'ストリーミングサービスのエクスポート',
          desc: '生AACダウンロードを提供するポッドキャストプラットフォームまたはストリーミングアプリ。変換をスキップし、ファイルを直接ドロップします。',
        },
        {
          icon: 'users',
          title: '放送インタビュー',
          desc: '生AACとしてアーカイブされたラジオホストのインタビュー。文字起こしは、記事やショーの引用用コピーです。',
        },
        {
          icon: 'editPen',
          title: 'FFmpeg中間出力',
          desc: 'ffmpeg -c:a copyでオーディオトラックを抽出し、.aacを取得しました。最初にM4Aに再マルチプレックスする代わりにここにドロップしてください。',
        },
      ]}
      technicalTitle="生AACとM4Aの比較"
      technicalIntro="AACはオーディオコーデックです。.aacで終わるファイルは通常、生のフレーム化されたストリームですが、M4Aは通常、MP4コンテナ内にAACオーディオをラップし、シークやメタデータを持っています。"
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'ADTSは一般的',
          desc: '生AACは、特にオーディオがストリームや放送ワークフローから抽出された場合、ADTSフレームとして一般的に保存されます。',
        },
        {
          icon: 'layers',
          title: 'M4Aはコンテナを追加',
          desc: 'M4Aは、タイミング、インデックス付け、MP4ベースのコンテナによって提供されるメタデータを持つ同じAACコーデックを運ぶことができます。',
        },
        {
          icon: 'search',
          title: '拡張子は単なる手がかり',
          desc: 'ファイル構造は処理中に検査されるため、誤解を招く拡張子は文字起こしテキストにはなりません。',
        },
        {
          icon: 'briefcase',
          title: '放送ワークフロー',
          desc: '生AACは、HLSキャプチャやオーディオ抽出の後によく現れます。アーカイブコンテキストのために元のソース参照を保持してください。',
        },
      ]}
      faq={[
        {
          q: 'MictooはどのようなAACファイルを受け付けますか？',
          a: '生AACはADTSフレーミング（最も一般的）、ADIF、およびLATMフレーミングです。サーバー側で同期ワードを検出し、ストリームをWhisperに渡します。M4A内のAAC（M4Aページを参照）も機能しますが、異なる取り込み経路です。',
        },
        {
          q: '.aacと.m4aの違いは何ですか？',
          a: '.aacは通常、生のADTSビットストリームです：小さな7バイトヘッダーを持つAACフレーム、コンテナなし。.m4aは、メタデータとシークインデックスを持つMP4コンテナ内にラップされたAACオーディオです。どちらもAACコーデックを使用しますが、ファイル構造は異なります。',
        },
        {
          q: '私のAACファイルは60MBを超えています。どうすればいいですか？',
          a: '典型的な放送ビットレート（128 kbps）のAACは、1分あたり約1MBですので、60MBは約1時間の録音です。サインインしている場合、最大約3時間まで自動的に分割します。そうでない場合は、ダウンサンプルしてください：ffmpeg -i in.aac -b:a 64k -ac 1 out.aac。',
        },
        {
          q: '生AACはM4Aよりも悪い文字起こしを生成しますか？',
          a: 'いいえ。オーディオストリームは同一で、コンテナだけが異なります。Whisperはどちらの方法でも内部的に16kHzモノに再サンプリングします。精度は、ADTSフレーミングかMP4ラッピングかに関係なく、基礎となる録音の品質に依存します。',
        },
        {
          q: 'Mictooは非英語のAACを文字起こししますか？',
          a: 'はい。Whisper large-v3は50以上の言語をサポートし、自動検出します。珍しいアクセントや短い放送クリップの場合、よりクリーンな初回結果を得るために言語を明示的に設定してください。',
        },
        {
          q: '放送クリップのSRTキャプションを取得できますか？',
          a: 'はい。文字起こし後にSRTまたはVTTをダウンロードできます。タイムスタンプは元のAACストリームのタイムラインに合わせて、ビデオエディタ、アクセシビリティオーバーレイ、またはアーカイブインデックスに使用できます。',
        },
        {
          q: '私のAACファイルはサーバーに保存されますか？',
          a: 'いいえ。オーディオは文字起こしプロバイダーにストリーミングされ、一度処理され、メモリから削除されます。ディスクに書き込むことはありません。文字起こしは、サインインして履歴に保存する場合のみ保存されます。',
        },
        {
          q: '文字起こしを別の言語に翻訳できますか？',
          a: 'はい。文字起こし後にターゲット言語を選択し、翻訳をクリックしてください。翻訳はGPT-4o-miniで実行され、元のテキストと並んで表示されます。',
        },
        {
          q: 'ファイルが.aac拡張子を持っているが実際にはM4Aの場合、どうなりますか？',
          a: 'マジックバイトを検査します、拡張子ではありません。ファイルがftyp（M4A/MP4署名）で始まる場合、M4Aとして扱います。ADTS同期バイトで始まる場合、生AACとして扱います。どちらにしても、文字起こしは機能します。',
        },
        {
          q: 'AACの文字起こしにはどのくらいの時間がかかりますか？',
          a: '10分のAACは通常、エンドツーエンドで15〜30秒で終了します。アップロード制限に近い大きなファイルは45〜80秒かかります。アップロード速度が長いステップになることがよくあります。',
        },
      ]}
      ctaHeadline="生のAACをドロップして文字起こしを取得"
      ctaSubtitle="ADTS、ADIF、LATMフレーミング。放送アーカイブ、HLSキャプチャ、リッピングされたオーディオ。"
      ctaButton="AACをアップロードして文字起こし"
    />
  )
}