import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-mp3',
  'fr': 'https://mictoo.com/fr/aac-to-mp3',
  'de': 'https://mictoo.com/de/aac-to-mp3',
  'es': 'https://mictoo.com/es/aac-to-mp3',
  'ru': 'https://mictoo.com/ru/aac-to-mp3',
  'it': 'https://mictoo.com/it/aac-to-mp3',
  'pt': 'https://mictoo.com/pt/aac-to-mp3',
  'pl': 'https://mictoo.com/pl/aac-to-mp3',
  'ja': 'https://mictoo.com/ja/aac-to-mp3',
  'ko': 'https://mictoo.com/ko/aac-to-mp3',
  'x-default': 'https://mictoo.com/aac-to-mp3',
}

export const metadata = {
  title: 'AAC から MP3 への変換：無料オンラインコンバーター | Mictoo',
  description:
    'AAC を MP3 に無料で変換します。数秒で、変換が実際に役立つ時と、品質を損なうだけの時について明確に説明します。',
  alternates: {
    canonical: 'https://mictoo.com/ja/aac-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'AAC から MP3 への変換：無料オンラインコンバーター | Mictoo',
    description: 'AAC を MP3 に無料で変換します。数秒で。',
    url: 'https://mictoo.com/ja/aac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC から MP3 への変換：無料オンラインコンバーター',
    description: 'AAC を MP3 に数秒で変換します。無料、サインアップ不要。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaAacToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ja"
      mode="converter" from="aac" to="mp3" currentHref="/ja/aac-to-mp3"
      badge="AAC → MP3 · 無料 · サインアップ不要"
      h1First="AAC から MP3 へ"
      h1Second="無料オンラインコンバーター"
      subtitle="生の .aac ファイル（ADTS ストリーム、放送ダンプ、または抽出された iPhone 音声）をドロップすると、数秒でポータブル MP3 が得られます。"
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="ステレオ"
      stepsTitle="AAC から MP3 への変換の仕組み"
      steps={[
        { icon: 'upload',   title: 'AAC をドロップ',        desc: '生の ADTS または ADIF フレーミング、最大 25 MB を匿名で。' },
        { icon: 'waveform', title: 'デコードとエンコード', desc: 'ffmpeg が AAC ビットストリームを読み取り、128 kbps ステレオ MP3 に再エンコードします。' },
        { icon: 'download', title: 'MP3 をダウンロード',    desc: '数秒でクリーンな MP3 を取得し、任意のプレーヤーで再生できる状態にします。' },
      ]}
      previewInputName="broadcast-clip.aac"
      previewInputSize="8.4 MB · 00:07:22 · 128 kbps AAC"
      previewOutputName="broadcast-clip.mp3"
      previewOutputSize="00:07:22 · 128 kbps MP3 · 6.8 MB"
      whyTitle="なぜ Mictoo を AAC から MP3 への変換に使用するのか？"
      whyCards={[
        { icon: 'target',   title: '生の AAC を処理',        desc: 'ADTS と ADIF の両方のフレーミングが直接機能し、手動での再パッケージは不要です。' },
        { icon: 'fileAudio',title: 'MP3 はどこでも再生',   desc: '古いデバイスやレガシー ポッドキャストホストは、時々 AAC よりも MP3 を好みます。' },
        { icon: 'lock',     title: 'ファイルは変換後に削除',    desc: 'アップロードされた AAC は変換後に削除され、MP3 は1時間以内に消去されます。' },
        { icon: 'shield',   title: 'ウォーターマークやタグなし',    desc: '音声のみ、再エンコードされます。ブランドのイントロやメタデータはありません。' },
      ]}
      scenariosTitle="AAC から MP3 への変換が有用な場合"
      scenarios={[
        { icon: 'video',      title: 'HLS 放送ダンプ' },
        { icon: 'headphones', title: 'ポッドキャストホストが MP3 を要求' },
        { icon: 'mail',       title: 'レガシープレーヤーの互換性' },
        { icon: 'editPen',    title: 'DAW インポート（古いツール）' },
        { icon: 'archive',    title: '一貫したアーカイブ形式' },
        { icon: 'waveform',   title: 'リッピングされた iPhone AAC' },
      ]}
      tipsTitle="クリーンな AAC から MP3 への変換のためのヒント"
      tips={[
        'デバイスが AAC をネイティブに再生できる場合、変換は必要ないかもしれません。',
        'AAC と MP3 はどちらもロスのある形式であり、再エンコードはわずかな品質損失を追加します。',
        'ソースファイルは現在の 25 MB のアップロード制限内に保ってください。',
        '文字起こしには、AAC を直接 /ja/aac-to-text にアップロードしてください。',
      ]}
      processTitle="変換中に何が起こるか"
      processSteps={['AAC ADTS フレーム', 'デコード', 'MP3 エンコーディング']}
      compareTitle="AAC と MP3"
      compareRows={[
        { fmt: 'AAC', contains: 'いいえ', size: '小さい（効率的）', best: '最新のデバイス、ストリーミング、iPhone' },
        { fmt: 'MP3', contains: 'いいえ', size: '小さい',             best: '普遍的な互換性、レガシープレーヤー' },
      ]}
      faq={[
        { q: '本当に AAC を MP3 に変換する必要がありますか？', a: 'ほとんどありません。ほとんどの最新デバイスは AAC をネイティブに再生します。特定のツールやホストが明示的に MP3 を要求する場合のみ変換してください。' },
        { q: 'コンバーターは無料ですか？', a: 'はい。最大 25 MB のファイルはアカウントなしで変換でき、出力にはウォーターマークがありません。' },
        { q: '品質損失はどのくらいですか？', a: 'AAC と MP3 はどちらもロスのある形式です。再エンコードはわずかな追加損失をもたらしますが、128 kbps での通常のリスニングでは聞こえません。' },
        { q: 'どの AAC フレーミングが機能しますか？', a: 'ADTS（最も一般的）、ADIF、および LATM はすべてデコードできます。MP4/M4A 内の AAC も機能しますが、異なる取り込みパスです。' },
        { q: 'ファイルは保存されますか？', a: 'いいえ。アップロードされた AAC は変換後に削除され、MP3 は1時間以内に消去されます。' },
      ]}
      ctaHeadline="今すぐ AAC を MP3 に変換"
      ctaSubtitle="AAC をドロップして、数秒でクリーンな MP3 を取得します。サインアップ不要。ウォーターマークなし。"
      ctaButton="AAC ファイルを選択"
      moreTools={[
        { href: '/ja/m4a-to-mp3',  label: 'M4A から MP3 へ' },
        { href: '/ja/mp4-to-mp3',  label: 'MP4 から MP3 へ' },
        { href: '/ja/wav-to-mp3',  label: 'WAV から MP3 へ' },
        { href: '/ja/aac-to-text', label: 'AAC からテキストへ' },
      ]}
    />
  )
}