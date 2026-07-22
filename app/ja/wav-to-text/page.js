import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-text',
  'fr': 'https://mictoo.com/fr/wav-to-text',
  'de': 'https://mictoo.com/de/wav-to-text',
  'es': 'https://mictoo.com/es/wav-to-text',
  'ru': 'https://mictoo.com/ru/wav-to-text',
  'it': 'https://mictoo.com/it/wav-to-text',
  'pt': 'https://mictoo.com/pt/wav-to-text',
  'pl': 'https://mictoo.com/pl/wav-to-text',
  'ja': 'https://mictoo.com/ja/wav-to-text',
  'ko': 'https://mictoo.com/ko/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export const metadata = {
  title: 'WAVからテキストへ：無料オンラインWAV転写 | Mictoo',
  description:
    'WAVファイルをアップロードし、秒単位のタイムスタンプ付きの編集可能なトランスクリプトを取得します。スタジオのバウンス、フィールド録音、DAWエクスポートに最適です。PCMとBroadcast Wave（BWF）をサポート。無料、サインアップ不要。',
  alternates: {
    canonical: 'https://mictoo.com/ja/wav-to-text',
    languages: LANGS,
  },

  openGraph: {
    title: "WAVからテキストへ：無料オンラインWAV転写 | Mictoo",
    description: "WAVファイルをアップロードし、秒単位のタイムスタンプ付きの編集可能なトランスクリプトを取得します。スタジオのバウンス、フィールド録音、DAWエクスポートに最適です。PCMとBWFをサポート。",
    url: "https://mictoo.com/ja/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAVからテキストへ：無料オンラインWAV転写",
    description: "WAVをアップロードし、秒単位のタイムスタンプ付きの編集可能なトランスクリプトを取得します。スタジオのバウンス、フィールド録音、DAWエクスポートに最適です。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaWavToTextPage() {
  return (
    <FormatPageLayout
      locale="ja"
      badge="WAV · PCM · BWF · 無料"
      h1First="WAVからテキストへ"
      h1Second="スタジオのバウンス、フィールド録音、DAWエクスポート"
      subtitle="WAVは、あなたのDAWがバウンスするフォーマットであり、フィールドレコーダーがカードに書き込むフォーマットであり、放送スタジオが標準化するフォーマットです。PCMまたはBWFのWAVをドロップして、秒単位のタイムスタンプ付きのトランスクリプトを取得します。無料、サインアップ不要。"
      highlightFormat="wav"
      previewFileName="field-recording.wav"
      previewWordCount={166}
      previewDurationLabel="14分22秒"
      previewLines={[
        { t: '0:00',  line: 'ロケハン、3日目。私たちは約6000フィートの ridge の東側にセットアップしています。' },
        { t: '0:09',  line: '風は西からの突風で吹いているので、私はブリンプを使い、80ヘルツでロールオフしました。' },
        { t: '0:18',  line: 'インタビュー用マイクのレベルはマイナス12付近でピークに達しており、この環境にはちょうど良い感じです。' },
        { t: '0:28',  line: '私の隣に立っているのは、この公園のこのセクションで22年間働いているレンジャーです。' },
        { t: '0:37',  line: '人々がここで何が最も変わったかを尋ねると、私はいつも2020年夏の火事から始めます。' },
        { t: '0:47',  line: 'その後、森は決して同じようには見えなくなり、野生動物のパターンは再設定するのに何年もかかりました。' },
        { t: '0:57',  line: '火事の後の最初の数週間がどのようなものであったかを教えてもらえますか？' },
        { t: '1:05',  line: 'もちろん。煙は合計で約6週間続き、視界は決して半マイルを超えませんでした。' },
      ]}
      whyTitle="WAV転写にMictooを選ぶ理由"
      whyCards={[
        {
          icon: 'waveform',
          title: 'PCMとBWF、変換不要',
          desc: '標準の16/24/32ビットPCM WAVおよびメタデータ付きのBroadcast Wave（BWF）。変換ステップなしでそのままファイルを受け付けます。',
        },
        {
          icon: 'target',
          title: 'ロスレスコーデックアーティファクトなし',
          desc: '非圧縮PCMはロスのある圧縮アーティファクトを追加しません。クリーンな録音は強力なソースになり得ますが、部屋のノイズやマイクの配置も重要です。',
        },
        {
          icon: 'gear',
          title: '任意のサンプルレート、任意のビット深度',
          desc: '44.1 kHz、48 kHz、96 kHz、192 kHz。Whisperは内部で16 kHzモノにリサンプリングするため、ソースレートは品質に影響しません。',
        },
        {
          icon: 'clip',
          title: 'BWFメタデータはあなたの側で保持されます',
          desc: 'トランスクリプション中にiXML/bextメタデータブロックを無視します。元のWAVファイル（およびそのメタデータ）は決して変更されません。',
        },
      ]}
      scenariosTitle="WAVからテキストへの適切なフィット"
      scenarios={[
        {
          icon: 'mic',
          title: 'フィールドレコーダーキャプチャ',
          desc: 'Zoom H4n、H5、H6、Tascam DR-40、Sound Devices MixPre。フィールドキットがカードに書き込むものは何でも、WAVをドロップしてクリーンなトランスクリプトを取得します。',
        },
        {
          icon: 'waveform',
          title: '参照用のDAWバウンス',
          desc: 'Logic、Pro Tools、またはAbletonからのラフミックスまたはボーカルのみのバウンス。歌詞や対話のテキストバージョンを参照用に取得します。',
        },
        {
          icon: 'briefcase',
          title: '放送インタビュー',
          desc: 'ラジオインタビューまたはポッドキャストスタジオからのBWF録音。トランスクリプトはショーノート、引用、アーカイブ文書に供給されます。',
        },
        {
          icon: 'book',
          title: '口述歴史アーカイブ',
          desc: '保存のためにWAVにキャプチャされた長編口述歴史録音。トランスクリプトによりアーカイブが検索可能で引用可能になります。',
        },
        {
          icon: 'users',
          title: '宣誓供述および法的録音',
          desc: '証拠品質のために非圧縮WAVとしてキャプチャされた録音。レビューと引用のためのトランスクリプト。',
        },
        {
          icon: 'sparkles',
          title: 'ボイスオーバー作業',
          desc: 'ADRパス、ナレーション録音、またはWAVにバウンスされたボイスオーバーセッション。トランスクリプトは、読み上げがスクリプトと一致していることを確認します。',
        },
      ]}
      technicalTitle="WAVファイルの内部"
      technicalIntro="WAVは、非圧縮PCMオーディオに一般的に使用されるコンテナです。その追加の解像度は、制作やアーカイブに役立ちますが、録音条件がスピーチの理解度を決定します。"
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'PCMとBroadcast Wave',
          desc: '標準のPCM WAVとBWF録音は同じ音声を運ぶことができます。BWFはその周りに制作メタデータを追加します。',
        },
        {
          icon: 'gear',
          title: 'サンプルレートとビット深度',
          desc: '高いサンプルレートとビット深度は制作ヘッドルームを保持しますが、ノイズ、クリッピング、または遠くのマイクを修復することはできません。',
        },
        {
          icon: 'cloud',
          title: '設計上大きい',
          desc: '非圧縮WAVは急速に増加します。長いインタビューの場合、録音を分割するか、必要に応じて小さなモノスピーチコピーを作成します。',
        },
        {
          icon: 'clip',
          title: 'メタデータは外部に保持',
          desc: 'BWF、iXML、およびキューメタデータはトランスクリプトに追加されず、元のソースファイルは変更されません。',
        },
      ]}
      faq={[
        {
          q: 'MictooはどのようなWAVファイルを受け付けますか？',
          a: '標準のPCM WAV（16ビット、24ビット、または32ビットフロート）、任意のサンプルレート（44.1 kHzから192 kHz）、モノまたはステレオ。Broadcast Wave（BWF）も完全にサポートされており、iXML/bextメタデータは元のファイルに保持されます。',
        },
        {
          q: 'ビット深度やサンプルレートを上げるとトランスクリプトが改善されますか？',
          a: 'いいえ。Whisperはすべてのオーディオを内部で16 kHzモノにリサンプリングするため、その上のビット深度やサンプルレートは精度に影響しません。録音品質（マイクの選択、部屋、ノイズフロア）がコンテナ仕様よりもはるかに重要です。',
        },
        {
          q: '私のスタジオWAVは60 MBを超えています。どうすればいいですか？',
          a: 'ステレオの24ビット48 kHz WAVは、1分あたり約17 MBですので、約3分を超える録音は上限に達します。ffmpeg -i in.wav -ar 16000 -ac 1 out.wavを使用して16 kHzモノWAV（または128 kbps MP3）に変換します。トランスクリプション品質は同じです。',
        },
        {
          q: '私のWAVファイルは保持されますか？',
          a: 'いいえ。ファイルはトランスクリプションプロバイダーにストリーミングされ、一度処理され、メモリから削除されます。ディスクに書き込むことはありません。トランスクリプトは、サインインして履歴に追加した場合のみ保存されます。',
        },
        {
          q: '元のBWFタイムスタンプをトランスクリプトに保持できますか？',
          a: 'トランスクリプトはファイルの開始からの相対タイムスタンプ（0:00ベースライン）を使用します。BWFの絶対時間メタデータはテキスト出力に持ち込まれません。シーンタイムコードの整合が必要な場合は、あなたの側で2つを一致させてください。',
        },
        {
          q: 'Mictooは非英語のWAVを転写しますか？',
          a: 'はい。Whisper large-v3は50以上の言語を自動検出でサポートしています。短い録音や珍しいアクセントの場合、初回検出をクリーンにするために、ドロップダウンで言語を明示的に設定してください。',
        },
        {
          q: 'WAV録音のSRTキャプションを取得できますか？',
          a: 'はい。トランスクリプション後にSRTまたはVTTをダウンロードします。両方のフォーマットには、ビデオエディタやアクセシビリティツールで使用するために、元のWAVタイムラインに合わせたタイムスタンプが含まれています。',
        },
        {
          q: 'WAVのトランスクリプションにはどのくらいの時間がかかりますか？',
          a: '15分のWAVは通常、エンドツーエンドで20〜40秒で終了します。アップロード上限に近い大きなファイルは40〜80秒かかります。WAVファイルは大きいため、アップロード速度がしばしば長いステップです。',
        },
        {
          q: 'Sound Devicesからの32ビットフロート録音をサポートしていますか？',
          a: 'はい。MixPre、Fシリーズ、またはZoom Fシリーズレコーダーからの32ビットフロートWAVファイルは受け入れられ、標準PCMと同じ方法で転写されます。',
        },
        {
          q: 'トランスクリプトを別の言語に翻訳できますか？',
          a: 'はい。トランスクリプション後、ターゲット言語を選択し、翻訳をクリックします。翻訳はGPT-4o-miniで実行され、元のトランスクリプトと並んで表示されます。',
        },
      ]}
      ctaHeadline="WAVをドロップして、クリーンなトランスクリプトを取得"
      ctaSubtitle="PCM、BWF、任意のサンプルレート。スタジオのバウンス、フィールド録音、DAWエクスポート。"
      ctaButton="WAVをアップロードして転写する"
    />
  )
}