import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp4-to-mp3',
  'fr': 'https://mictoo.com/fr/mp4-to-mp3',
  'de': 'https://mictoo.com/de/mp4-to-mp3',
  'es': 'https://mictoo.com/es/mp4-to-mp3',
  'ru': 'https://mictoo.com/ru/mp4-to-mp3',
  'it': 'https://mictoo.com/it/mp4-to-mp3',
  'pt': 'https://mictoo.com/pt/mp4-to-mp3',
  'pl': 'https://mictoo.com/pl/mp4-to-mp3',
  'ja': 'https://mictoo.com/ja/mp4-to-mp3',
  'ko': 'https://mictoo.com/ko/mp4-to-mp3',
  'x-default': 'https://mictoo.com/mp4-to-mp3',
}

export const metadata = {
  title: 'MP4からMP3への無料オンラインコンバーター | Mictoo',
  description:
    'MP4をMP3に無料でオンライン変換します。動画をアップロードすると、数秒でクリーンな128 kbpsのMP3オーディオファイルが得られます。サインアップ不要、ウォーターマークなし、メールも不要。最大25 MBまで対応。',
  alternates: { canonical: 'https://mictoo.com/ja/mp4-to-mp3', languages: LANGS },
  openGraph: {
    title: 'MP4からMP3への無料オンラインコンバーター | Mictoo',
    description: 'MP4をMP3に無料でオンライン変換します。128 kbps、サインアップ不要、ウォーターマークなし。',
    url: 'https://mictoo.com/ja/mp4-to-mp3',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP4からMP3への無料オンラインコンバーター',
    description: 'MP4をMP3に無料でオンライン変換します。128 kbps、サインアップ不要、ウォーターマークなし。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaMp4ToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ja"
      mode="converter"
      from="mp4"
      to="mp3"
      currentHref="/ja/mp4-to-mp3"

      badge="MP4 → MP3 · 無料 · サインアップ不要"
      h1First="MP4からMP3"
      h1Second="無料オンラインコンバーター"
      subtitle="MP4動画をアップロードすると、数秒でクリーンなMP3オーディオファイルが得られます。ウォーターマークなし、メール不要、待機時間なし。"

      outputFormat="MP3"
      outputQuality="128 kbps"
      outputAudio="ステレオ"

      stepsTitle="MP4からMP3への変換方法"
      steps={[
        {
          icon: 'upload',
          title: 'MP4をアップロード',
          desc: 'MP4動画をアップロードします。最大25 MBのファイルに対応しています。',
        },
        {
          icon: 'waveform',
          title: 'オーディオを抽出',
          desc: 'サーバーがオーディオトラックを抽出し、MP3にエンコードします。',
        },
        {
          icon: 'download',
          title: 'MP3をダウンロード',
          desc: '数秒でクリーンなMP3ファイルを取得します。',
        },
      ]}

      previewInputName="meeting-recording.mp4"
      previewInputSize="128.4 MB · 00:45:32"
      previewOutputName="meeting-recording.mp3"
      previewOutputSize="00:45:32 · 128 kbps"

      whyTitle="なぜMictooをMP4からMP3に使用するのか？"
      whyCards={[
        {
          icon: 'target',
          title: '変換に特化',
          desc: 'MP4からMP3への変換に特化し、迅速かつ信頼性の高いサービスを提供します。',
        },
        {
          icon: 'fileAudio',
          title: '小さく、普遍的なMP3',
          desc: 'MP3はどこでも動作し、ファイルサイズを小さく保ちます。',
        },
        {
          icon: 'lock',
          title: 'ファイルは削除されます',
          desc: 'アップロードされたファイルは安全に処理され、変換後に削除されます。',
        },
        {
          icon: 'shield',
          title: 'ウォーターマークやオーディオタグなし',
          desc: 'ウォーターマークや追加タグのないクリーンなMP3を取得します。',
        },
      ]}

      scenariosTitle="MP4からMP3が役立つ場面"
      scenarios={[
        { icon: 'headphones', title: 'ビデオポッドキャストを保存' },
        { icon: 'cap',        title: '講義の音声を抽出' },
        { icon: 'mail',       title: '小さなファイルをメール' },
        { icon: 'editPen',    title: '文字起こしの準備' },
        { icon: 'waveform',   title: 'バックグラウンドオーディオ' },
        { icon: 'archive',    title: '音声録音をアーカイブ' },
      ]}

      tipsTitle="クリーンな変換のためのヒント"
      tips={[
        'まずは大きな動画をトリミングしてください。',
        '128 kbpsは音声や音楽に適しています。',
        'デフォルトのオーディオトラックが使用されます。',
        'DRM保護された動画はサポートされていません。',
      ]}
      processTitle="変換中に何が起こるか"
      processSteps={[
        'MP4コンテナ',
        'オーディオトラックの抽出',
        'MP3エンコード',
      ]}

      compareTitle="MP4とMP3の比較"
      compareRows={[
        { fmt: 'MP4', contains: 'はい', size: '大きい', best: '動画の視聴、共有' },
        { fmt: 'MP3', contains: 'いいえ', size: '小さい', best: '音声のみの視聴' },
      ]}

      faq={[
        { q: 'MP4からMP3へのコンバーターは無料ですか？', a: 'はい。最大25 MBのファイルにはアカウントは不要で、時間制限や出力にウォーターマークはありません。マーケティングページの広告がサーバーコストをカバーしています。' },
        { q: '変換によって音質は低下しますか？', a: 'わずかに。MP3はロスィフォーマットですが、128 kbpsでは音質の低下は音声や一般的な音楽再生では聞こえません。ロスレスが必要な場合は、WAVに変換してください。' },
        { q: 'アップロードされたファイルは保存されますか？', a: 'いいえ。あなたのMP4はVercel Blobストレージに変換されるまでの短い時間だけ保存され、その後削除されます。生成されたMP3も1時間以内に削除されます。MP3はローカルに保存してください。' },
        { q: '大きなMP4を変換できますか？', a: '現在のアップロード制限は25 MBです。MP4がそれ以上の場合は、QuickTime、Photosアプリ、または他の動画編集ソフトでトリミングしてからアップロードしてください。' },
        { q: 'モバイルで動作しますか？', a: 'はい。このページはモバイルフレンドリーで、iOS SafariやAndroid Chromeからのアップロードが可能です。iPhoneでは、最初に動画をファイルに共有して、ピッカーがアクセスできるようにしてください。' },
      ]}

      ctaHeadline="今すぐMP4をMP3に変換"
      ctaSubtitle="動画をアップロードし、数秒でクリーンなMP3を取得します。サインアップ不要。ウォーターマークなし。"
      ctaButton="MP4ファイルを選択"

      moreTools={[
        { href: '/ja/wav-to-mp3',  label: 'WAVからMP3' },
        { href: '/ja/webm-to-mp3', label: 'WEBMからMP3' },
        { href: '/ja/flac-to-mp3', label: 'FLACからMP3' },
        { href: '/ja/aac-to-mp3',  label: 'AACからMP3' },
        { href: '/ja/m4a-to-mp3',  label: 'M4AからMP3' },
        { href: '/ja/mp3-to-wav',  label: 'MP3からWAV' },
      ]}
    />
  )
}