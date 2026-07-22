import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-m4a',
  'fr': 'https://mictoo.com/fr/mp3-to-m4a',
  'de': 'https://mictoo.com/de/mp3-to-m4a',
  'es': 'https://mictoo.com/es/mp3-to-m4a',
  'ru': 'https://mictoo.com/ru/mp3-to-m4a',
  'it': 'https://mictoo.com/it/mp3-to-m4a',
  'pt': 'https://mictoo.com/pt/mp3-to-m4a',
  'pl': 'https://mictoo.com/pl/mp3-to-m4a',
  'ja': 'https://mictoo.com/ja/mp3-to-m4a',
  'ko': 'https://mictoo.com/ko/mp3-to-m4a',
  'x-default': 'https://mictoo.com/mp3-to-m4a',
}

export const metadata = {
  title: 'MP3からM4Aへの無料オンラインコンバーター | Mictoo',
  description:
    'MP3をM4Aに無料で変換します。iPhone、iTunes、Appleエコシステム用にM4Aコンテナ内にAACとしてMP3を再エンコードします。サインアップ不要、ウォーターマークなし。',
  alternates: { canonical: 'https://mictoo.com/ja/mp3-to-m4a', languages: LANGS },
  openGraph: {
    title: 'MP3からM4Aへの無料オンラインコンバーター | Mictoo',
    description: 'M4A内のMP3からAAC。iPhoneに優しい。サインアップ不要。',
    url: 'https://mictoo.com/ja/mp3-to-m4a',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3からM4Aへの無料オンラインコンバーター',
    description: 'iPhoneに優しいAAC-in-MP4。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaMp3ToM4aPage() {
  return (
    <ConverterPageLayout
      locale="ja"
      mode="converter" from="mp3" to="m4a" currentHref="/ja/mp3-to-m4a"
      badge="MP3 → M4A · 無料 · iPhoneに優しい"
      h1First="MP3からM4Aへ"
      h1Second="無料オンラインコンバーター"
      subtitle="MP3をドロップすると、iPhoneのボイスメモ、iTunes、GarageBand、Appleエコシステム用のM4A（MP4コンテナ内のAAC）が得られます。ウォーターマークなし、メール不要。"
      outputFormat="M4A" outputQuality="128 kbps AAC" outputAudio="ステレオ"
      stepsTitle="MP3からM4Aへの変換の仕組み"
      steps={[
        { icon: 'upload',   title: 'MP3をドロップ',        desc: '任意のビットレートのMP3、最大25 MBを匿名で。' },
        { icon: 'waveform', title: 'AACに再エンコード', desc: 'ffmpegがMP3をデコードし、.m4aコンテナ内に128 kbps AACとして再エンコードします。' },
        { icon: 'download', title: 'M4Aをダウンロード',   desc: '元の名前に.m4a拡張子を追加したiPhoneに優しいファイル。' },
      ]}
      previewInputName="episode.mp3"
      previewInputSize="8.4 MB · 00:09:22"
      previewOutputName="episode.m4a"
      previewOutputSize="00:09:22 · 128 kbps AAC · 7.6 MB"
      whyTitle="なぜMictooをMP3からM4Aに使用するのか？"
      whyCards={[
        { icon: 'target',    title: 'Appleに優しい出力',    desc: 'M4Aは一般的なiPhone、iTunes、GarageBand、Appleメディアワークフローとネイティブに動作します。' },
        { icon: 'fileAudio', title: '予測可能な出力',       desc: 'ファイルは128 kbps AACとして再エンコードされます。最終サイズは主に録音時間に依存します。' },
        { icon: 'lock',      title: '変換後にファイルを削除',      desc: 'アップロードされたMP3は変換後に削除され、M4Aは1時間以内に消去されます。' },
        { icon: 'shield',    title: 'ウォーターマークやタグなし',      desc: '音声のみ、再エンコードされます。ブランドのイントロなし、メタデータの挿入なし。' },
      ]}
      scenariosTitle="MP3からM4Aが役立つシーン"
      scenarios={[
        { icon: 'headphones', title: 'iTunesライブラリのインポート' },
        { icon: 'waveform',   title: 'GarageBandプロジェクト' },
        { icon: 'video',      title: 'iMovieサウンドトラック' },
        { icon: 'mail',       title: 'AirDropの互換性' },
        { icon: 'archive',    title: 'Appleエコシステムのアーカイブ' },
        { icon: 'editPen',    title: 'Logic Proのインポート' },
      ]}
      tipsTitle="クリーンなMP3からM4Aへのヒント"
      tips={[
        'MP3とAACはどちらもロスあり; 再エンコードはわずかな品質損失を追加します。',
        'ロスレスの場合は、代わりにWAVに変換してください。',
        'ID3タグはM4Aに引き継がれません。',
        'ソースファイルは現在の25 MBのアップロード制限内に保ってください。',
      ]}
      processTitle="変換中に何が起こるか"
      processSteps={['MP3ストリーム', 'デコード', 'AAC / M4Aエンコーディング']}
      compareTitle="MP3とM4A"
      compareRows={[
        { fmt: 'MP3', contains: 'いいえ', size: '小さい', best: 'ユニバーサル、レガシープレーヤー' },
        { fmt: 'M4A', contains: 'いいえ', size: 'やや小さい', best: 'iPhone、iTunes、GarageBand、Appleアプリ' },
      ]}
      faq={[
        { q: 'MP3からM4Aへのコンバーターは無料ですか？', a: 'はい。25 MBまでのファイルはアカウントなしで変換でき、出力にウォーターマークはありません。' },
        { q: 'MP3をM4Aに変換すると品質は向上しますか？', a: 'いいえ。1つのロスありフォーマットから別のロスありフォーマットに再エンコードすると、わずかに品質が失われる可能性があります。Appleエコシステムの互換性のためだけに行ってください。' },
        { q: 'M4AはiTunesやApple Musicで動作しますか？', a: 'はい。MP4コンテナ内の標準AACは、iTunesが使用する正確なフォーマットです。' },
        { q: 'ファイルは保存されますか？', a: 'いいえ。アップロードされたMP3は変換後に削除され、M4Aは1時間以内に消去されます。' },
        { q: 'ロスレスM4A（ALAC）に変換できますか？', a: 'このページからはできません。出力はロスありAACです。ロスレスの場合は、まずMP3をWAVに変換し、その後DAWでALACに変換してください。' },
      ]}
      ctaHeadline="今すぐMP3をM4Aに変換"
      ctaSubtitle="MP3をドロップすると、数秒でiPhoneに優しいM4Aが得られます。"
      ctaButton="MP3ファイルを選択"
      moreTools={[
        { href: '/ja/m4a-to-mp3',  label: 'M4AからMP3へ' },
        { href: '/ja/mp3-to-wav',  label: 'MP3からWAVへ' },
        { href: '/ja/mp4-to-mp3',  label: 'MP4からMP3へ' },
        { href: '/ja/m4a-to-text', label: 'M4Aからテキストへ' },
      ]}
    />
  )
}