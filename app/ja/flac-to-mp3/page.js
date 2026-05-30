import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLACからMP3へ — 無料オンライン変換ツール | Mictoo',
  description:
    'FLACからMP3への変換が無料オンラインで使えます。ロスレスFLACを128 kbps MP3に数秒で縮小します。登録不要、ウォーターマークなし。最大25 MB。',
  alternates: { canonical: 'https://mictoo.com/ja/flac-to-mp3', languages: LANGS },

  openGraph: {
    title: "FLACからMP3へ — 無料オンライン変換ツール | Mictoo",
    description: "FLACからMP3への変換が無料オンラインで使えます。ロスレスFLACを128 kbps MP3に数秒で縮小します。登録不要、ウォーターマークなし。最大25 MB。",
    url: "https://mictoo.com/ja/flac-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLACからMP3へ — 無料オンライン変換ツール | Mictoo",
    description: "FLACからMP3への変換が無料オンラインで使えます。ロスレスFLACを128 kbps MP3に数秒で縮小します。登録不要、ウォーターマークなし。最大25 MB。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaFlacToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="ja"
      badge="FLAC → MP3 · 無料 · 登録不要"
      h1={<>FLACからMP3へ<br /><span className="text-brand-600">無料オンライン変換ツール</span></>}
      subtitle="FLACファイルをドロップしてください。サイズが3分の1で、どこでも再生できる携帯しやすいMP3が手に入ります。ウォーターマークなし、メール不要。"
      tool={<ConverterZone from="flac" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'FLACをドロップ', desc: 'FLACをボックスにドラッグしてください。25 MBまでは登録なし、60 MBまではサインインで利用できます。' },
        { icon: '⚡', title: 'ffmpegでMP3に再エンコード', desc: '128 kbps固定ビットレート、44.1 kHz、元のチャンネルレイアウトを維持します。一般的な25 MBのFLACなら3〜10秒で完了します。' },
        { icon: '⬇️', title: 'MP3をダウンロード', desc: '結果は元のファイル名に.mp3を付けたものです。1時間以内にサーバーから削除されます。' },
      ]}
      whyUse={{ title: 'FLACからMP3に変換する理由', bullets: [
        { title: 'FLACはロスレスだが巨大', desc: '5分のFLACは一般的なビットレートで25〜40 MBです。同じ音声を128 kbps MP3にすると5 MBです。スマホ、車、Bluetoothではこのサイズの違いが効いてきます。' },
        { title: 'カーステレオやBluetoothスピーカーの多くはFLACに対応していない', desc: '2026年でも、工場出荷時の車載インフォテインメントや中位機種のBluetooth機器の多くはMP3しか受け付けません。MP3はとにかく動きます。' },
        { title: '128 kbpsの品質低下はほぼ誰にも聞き取れない', desc: '一般向けヘッドホン、車内、スマホスピーカー、どこでも違いは分かりません。妥協が見えてくるのはスタジオモニターでのクリティカルリスニングだけです。' },
        { title: 'iPod、古いMP3プレーヤー、シンプルな音楽アプリ、すべてMP3に分がある', desc: '最近のiPhoneより古い機器に音楽を入れるなら、MP3の方が安全な選択です。レガシーハードウェアのFLACサポートはまちまちです。' },
        { title: 'ウォーターマークなし、課金誘導なし', desc: '音声を再エンコードしただけ。何も追加しません。' },
      ]}}
      useCases={{ title: 'FLACからMP3に変換したくなる場面', items: [
        { title: 'Bandcamp / Qobuzのダウンロードをスマホのライブラリへ', desc: 'Bandcampは有料ダウンロードでデフォルトでFLACを渡します。MP3に変換すれば、スマホの音楽コレクションに収まりますし、FLACを扱えないカーシステムに同期できます。' },
        { title: 'CDリッピングを携帯ライブラリに', desc: 'アーカイブ用にCDをFLACでリッピングした場合、普段聞き用に各アルバムをMP3に変換し、FLACはマスターとして残してください。' },
        { title: 'スタジオ書き出しから配布へ', desc: '音楽プロデューサーがFLACで送ってくることもあります。ポッドキャストホスト、Webプレーヤー、または共同作業者へのラフミックスのメール用にMP3に変換してください。' },
        { title: 'フィールド録音をすばやく共有', desc: 'Tascam DR-40XやZoom F3のようなフィールドレコーダーはFLACで録音できます。MP3で作業するプロデューサーやサウンドエディターに送る前に変換してください。' },
        { title: 'ライブラリの整理', desc: '古いハードディスクのFLACを整理する際、オリジナルはNASに保管し、普段使い用にMP3に変換します。' },
      ]}}
      proTips={{ title: 'FLACからMP3への変換をきれいに行うコツ', tips: [
        { title: 'FLACはロスレスなので、最初のエンコードは問題なし', desc: 'FLAC → MP3を一度行っても品質ペナルティはありません。アーティファクトが聞こえ始めるのは、MP3をさらに再エンコードした場合や、MP3から別の非可逆形式に変換した場合です。' },
        { title: 'オーディオファイル用途ならFLACを残す', desc: 'ハイエンドヘッドホン、専用DAC、クリティカルリスニングのために聞いているなら、FLACは残す価値があります。MP3は配布や普段使い向けです。' },
        { title: 'タグは常に引き継がれるわけではない', desc: 'FLACタグ（Vorbisコメント）とMP3タグ（ID3）は別形式です。Mictooの変換ツールはこれらの間でカバーアートや詳細メタデータを転送しません。変換後にMusicBrainz PicardやMp3tagでタグを付け直してください。' },
        { title: '24ビット/96 kHz FLACは16ビット/44.1と変換結果が同じ', desc: 'MP3は実質16ビット/48 kHzで頭打ちになります。元のビット深度やサンプルレートが高くてもMP3エンコードでは残りませんが、害もありません。' },
        { title: 'ロスレス変換にはALACを使う', desc: 'iTunes/Apple Musicで再生できるロスレスが必要なら、FLACをALAC（Apple Lossless）に変換してください。音質は同じで、メタデータのフットプリントはFLACの半分、Apple環境でネイティブに再生されます。' },
        { title: 'MP3を高いビットレートにしたい場合はAudacityで再エクスポート', desc: 'Mictooの変換ツールは128 kbpsで出力します。320 kbpsが必要なら、MP3をAudacity（無料）で開いて再エクスポートしてください。二重エンコードはほとんど聞き取れません。' },
      ]}}
      faq={[
        { q: 'FLACからMP3への変換は本当に無料ですか', a: 'はい。25 MBまでアカウント不要、ウォーターマークなし、時間制限なし。サーバー費用はマーケティングページのディスプレイ広告で賄っています。' },
        { q: '最大ファイルサイズはどれくらいですか', a: '登録なしで25 MB、無料アカウントで60 MBです。FLACの一般的な5分の曲は30〜40 MBなので、フルアルバムはトラックごとに変換する必要があるかもしれません。' },
        { q: '音質の違いは分かりますか', a: 'スマホスピーカー、車、安価なヘッドホンでは分かりません。スタジオモニターでクリティカルに聞けば気づくかもしれません。マスタリングやオーディオファイル再生以外には妥当な妥協です。' },
        { q: 'カバーアートとメタデータは引き継がれますか', a: '部分的にです。基本的なタグ（アーティスト、タイトル、アルバム）は通常引き継がれます。カバーアートや詳細なVorbisコメントは引き継がれないことが多いです。変換後にMusicBrainz PicardやMp3tagできれいに付け直してください。' },
        { q: 'MP3の品質はどれくらいですか', a: '固定128 kbps、44.1 kHz、元のチャンネルレイアウトを維持します。' },
        { q: 'どれくらい時間がかかりますか', a: '数秒です。25 MBのFLACなら3〜10秒で変換できます。ボトルネックはアップロードです。' },
        { q: 'ファイルは保存されますか', a: 'いいえ。アップロードは変換後に削除されます。出力は1時間以内にクリーンアップのcronで消去されます。' },
        { q: 'アルバム全体を一括変換できますか', a: 'まだできません。無料枠は1ファイルずつです。回避策として複数のブラウザタブを開いてください。' },
        { q: '24ビット/96 kHz FLACがMP3と同じに聞こえるのはなぜですか', a: 'コンシューマー再生ではほぼ確実にそうなります。24ビットや高サンプルレートは処理やマスタリングで意味があり、MP3グレードの音声チェーン経由の聴取には意味がありません。' },
        { q: 'ALACに変換した方がいいですか', a: 'Apple MusicやiTunesでロスレス音声が必要なら、はい。ALACはFLACのApple版です。MictooはALACを出力しませんが、Audacityなら可能です。' },
        { q: 'Hi-ResダウンロードのFLACですが、変換する価値はありますか', a: 'スマホや車内での聴取なら、MP3も同じように聞こえます。将来の処理用に元のファイルは残しておいてください。' },
        { q: '128 kbpsより高くできますか', a: 'この変換ツールではできません。MP3をAudacityで好みのビットレートで再エンコードしてください。' },
      ]}
      relatedLinks={[
        { href: '/ja/wav-to-mp3', label: 'WAVからMP3へ', desc: 'ロスレスWAVをMP3に変換します。' },
        { href: '/ja/mp3-to-wav', label: 'MP3からWAVへ', desc: '逆方向。MP3から非圧縮WAVへ。' },
        { href: '/ja/flac-to-text', label: 'FLACからテキストへ', desc: 'FLAC音声を直接テキストに文字起こしします。' },
        { href: '/ja/how-to-compress-audio', label: '音声を圧縮', desc: 'MP3でもまだ小さくする必要がある場合に。' },
      ]}
    />
  )
}
