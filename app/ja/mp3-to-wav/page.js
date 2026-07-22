import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-wav',
  'fr': 'https://mictoo.com/fr/mp3-to-wav',
  'de': 'https://mictoo.com/de/mp3-to-wav',
  'es': 'https://mictoo.com/es/mp3-to-wav',
  'ru': 'https://mictoo.com/ru/mp3-to-wav',
  'it': 'https://mictoo.com/it/mp3-to-wav',
  'pt': 'https://mictoo.com/pt/mp3-to-wav',
  'pl': 'https://mictoo.com/pl/mp3-to-wav',
  'ja': 'https://mictoo.com/ja/mp3-to-wav',
  'ko': 'https://mictoo.com/ko/mp3-to-wav',
  'x-default': 'https://mictoo.com/mp3-to-wav',
}

export const metadata = {
  title: 'MP3からWAVへの変換、無料オンラインコンバーター | Mictoo',
  description:
    'MP3を無料でWAVに変換します。圧縮されたMP3を非圧縮の16ビット/44.1 kHz WAVに展開してオーディオ編集を行います。サインアップ不要、ウォーターマークなし。',
  alternates: { canonical: 'https://mictoo.com/ja/mp3-to-wav', languages: LANGS },
  openGraph: {
    title: 'MP3からWAVへの変換、無料オンラインコンバーター | Mictoo',
    description: 'MP3を非圧縮の16ビット/44.1 kHz WAVに変換します。編集用。',
    url: 'https://mictoo.com/ja/mp3-to-wav',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3からWAVへの変換、無料オンラインコンバーター',
    description: 'DAW編集とマスタリング用。',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function JaMp3ToWavPage() {
  return (
    <ConverterPageLayout
      locale="ja"
      mode="converter" from="mp3" to="wav" currentHref="/ja/mp3-to-wav"
      badge="MP3 → WAV · 無料 · 編集者向け"
      h1First="MP3からWAVへ"
      h1Second="無料オンラインコンバーター"
      subtitle="MP3をドロップして、DAW編集、マスタリング、またはCD焼き用の非圧縮16ビット/44.1 kHz WAVを取得します。ウォーターマークなし、メールも不要です。"
      outputFormat="WAV" outputQuality="16ビット / 44.1 kHz" outputAudio="ステレオ"
      stepsTitle="MP3からWAVへの変換の仕組み"
      steps={[
        { icon: 'upload',   title: 'MP3をドロップ',       desc: '任意のビットレートのMP3、最大25 MBを匿名で。' },
        { icon: 'waveform', title: 'PCMにデコード',   desc: 'ffmpegがMP3を非圧縮の16ビット/44.1 kHz PCMにデコードし、WAVコンテナにラップします。' },
        { icon: 'download', title: 'WAVをダウンロード',   desc: 'Audacity、Pro Tools、Logic、Ableton、任意のオーディオエディタ用に準備完了です。' },
      ]}
      previewInputName="voiceover.mp3"
      previewInputSize="4.6 MB · 00:05:00 · 128 kbps"
      previewOutputName="voiceover.wav"
      previewOutputSize="00:05:00 · 16ビット / 44.1 kHz · 50 MB"
      whyTitle="MP3からWAVにMictooを使用する理由"
      whyCards={[
        { icon: 'target',   title: 'DAW対応の出力',       desc: '非圧縮PCMはオーディオエディタやマスタリングツールが期待するものです。' },
        { icon: 'fileAudio',title: '標準16ビット / 44.1', desc: 'オーディオエディタ、マスタリングツール、CD作成ソフトウェアに広く対応したPCM設定です。' },
        { icon: 'lock',     title: 'ファイルは変換後に削除',    desc: 'アップロードされたMP3は変換後に削除され、WAVは1時間以内に消去されます。' },
        { icon: 'shield',   title: 'ウォーターマークやタグなし',    desc: 'オーディオのみ、PCMにデコードされます。ブランディングされたイントロやメタデータは挿入されません。' },
      ]}
      scenariosTitle="MP3からWAVが役立つシーン"
      scenarios={[
        { icon: 'editPen',    title: 'Audacity編集' },
        { icon: 'waveform',   title: 'Pro Toolsインポート' },
        { icon: 'headphones', title: 'マスタリングワークフロー' },
        { icon: 'archive',    title: 'CD焼き' },
        { icon: 'video',      title: 'WAV要件のあるビデオエディタ' },
        { icon: 'target',     title: 'ボイスクローンのトレーニング入力' },
      ]}
      tipsTitle="クリーンなMP3からWAVへのヒント"
      tips={[
        'WAVはMP3の10倍のサイズです（約1分あたり10 MB）。',
        '出力は「真の」ロスレスではありません ,  MP3信号を保持します。',
        '真のロスレスオーディオには、FLACまたは元のWAVマスターから始めてください。',
        'ソースファイルは現在の25 MBのアップロード制限内に収めてください。',
      ]}
      processTitle="変換中に何が起こるか"
      processSteps={['MP3ストリーム', 'PCMにデコード', 'WAVコンテナ']}
      compareTitle="MP3とWAV"
      compareRows={[
        { fmt: 'MP3', contains: 'いいえ', size: '小 (~1 MB/分)', best: '共有、電話、ストリーミング' },
        { fmt: 'WAV', contains: 'いいえ', size: '大 (~10 MB/分)', best: '編集、マスタリング、CD焼き' },
      ]}
      faq={[
        { q: 'MP3からWAVに変換するとロスレス品質が回復しますか？', a: 'いいえ。MP3はロスがあり、WAVはMP3信号を保持しますが、それ以上のものはありません。真のロスレスには、FLACまたは元のWAVから始める必要があります。' },
        { q: 'コンバーターは無料ですか？', a: 'はい。25 MBまでのファイルはアカウントなしで変換でき、出力にはウォーターマークがありません。' },
        { q: 'なぜWAVファイルはそんなに大きいのですか？', a: 'WAVは非圧縮PCMです。5 MBのMP3は約50 MBのWAVになります。それは正常です。' },
        { q: 'ビット深度とサンプルレートは？', a: '16ビット / 44.1 kHzステレオ（CD品質）。これは標準のDAWインポート形式です。' },
        { q: 'ファイルは保存されますか？', a: 'いいえ。アップロードされたMP3は変換後に削除され、WAVは1時間以内に消去されます。' },
      ]}
      ctaHeadline="今すぐMP3をWAVに変換"
      ctaSubtitle="MP3をドロップして、編集用の非圧縮WAVを取得します。"
      ctaButton="MP3ファイルを選択"
      moreTools={[
        { href: '/ja/wav-to-mp3',  label: 'WAVからMP3へ' },
        { href: '/ja/mp3-to-m4a',  label: 'MP3からM4Aへ' },
        { href: '/ja/flac-to-mp3', label: 'FLACからMP3へ' },
        { href: '/ja/wav-to-text', label: 'WAVからテキストへ' },
      ]}
    />
  )
}