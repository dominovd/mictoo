import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-mp3',
  'fr': 'https://mictoo.com/fr/wav-to-mp3',
  'de': 'https://mictoo.com/de/wav-to-mp3',
  'es': 'https://mictoo.com/es/wav-to-mp3',
  'ru': 'https://mictoo.com/ru/wav-to-mp3',
  'it': 'https://mictoo.com/it/wav-to-mp3',
  'pt': 'https://mictoo.com/pt/wav-to-mp3',
  'pl': 'https://mictoo.com/pl/wav-to-mp3',
  'ja': 'https://mictoo.com/ja/wav-to-mp3',
  'ko': 'https://mictoo.com/ko/wav-to-mp3',
  'x-default': 'https://mictoo.com/wav-to-mp3',
}

export const metadata = {
  title: 'WAVからMP3へ — 無料オンライン変換ツール | Mictoo',
  description:
    'WAVからMP3への変換が無料オンラインで使えます。ロスレスWAVファイルを携帯しやすい128 kbps MP3に数秒で縮小します。登録不要、ウォーターマークなし。最大25 MB。',
  alternates: { canonical: 'https://mictoo.com/ja/wav-to-mp3', languages: LANGS },
}

export default function JaWavToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="ja"
      badge="WAV → MP3 · 無料 · 登録不要"
      h1={<>WAVからMP3へ<br /><span className="text-brand-600">無料オンライン変換ツール</span></>}
      subtitle="WAVファイルをドロップしてください。10分の1のサイズで、音声や普段の視聴ならほぼ同じ音質のコンパクトなMP3が手に入ります。ウォーターマークなし、メール不要。"
      tool={<ConverterZone from="wav" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'WAVをドロップ', desc: 'どんなWAV（16ビット、24ビット、モノ、ステレオ）でもボックスにドラッグできます。25 MBまでは登録なし、60 MBまではサインインで利用できます。' },
        { icon: '⚡', title: 'MP3に再エンコード', desc: 'サーバー側のffmpegで、128 kbps固定ビットレート、44.1 kHz、ステレオに再エンコードします。25 MBのWAV（24ビット/96 kHzで約2分、16ビット/44.1で約5分）でも数秒で完了します。' },
        { icon: '⬇️', title: 'MP3をダウンロード', desc: '結果のファイル名は元の名前から拡張子を.mp3に変えたものです。アップロードも出力も1時間以内にサーバーから削除されます。' },
      ]}
      whyUse={{ title: 'WAVからMP3に変換する理由', bullets: [
        { title: 'WAVファイルは巨大', desc: '5分の16ビット/44.1 kHz WAVは約50 MBです。同じ音声を128 kbps MP3にすると5 MBです。メール送信、ポッドキャストホストへのアップロード、スマホへの取り込みにはMP3が向いています。' },
        { title: 'MP3はどこでも再生できる', desc: 'WAVはデスクトップでは問題ありませんが、古いカーステレオや一部のBluetoothスピーカー、多くのWebプレーヤーでは不安定です。MP3はとにかく動きます。' },
        { title: '128 kbpsの品質低下はほとんどの場面で聞き取れない', desc: 'スタジオモニターで音楽をマスタリングしているのでもなければ、128 kbps MP3と元のWAVの違いは聞き取れません。音声、ポッドキャスト、普段のリスニングなら、これは妥当なトレードオフです。' },
        { title: 'ウォーターマークなし、ポップアップなし', desc: 'MP3はあなたの音声を再エンコードしただけ。「変換元 …」のイントロを追加することもなく、30秒待たせる偽のポップアップもありません。' },
        { title: 'デフォルトでプライバシー重視', desc: 'フィールド録音のWAVには機密情報が含まれることがあります。ファイルはVercel Blobストレージに着地して変換され、消去されます。Mictooは中身を見ませんし、保存もしません。' },
      ]}}
      useCases={{ title: 'WAVからMP3に変換したくなる場面', items: [
        { title: 'フィールド録音をメール送信できるクリップに', desc: 'Zoom H1nなどのレコーダーはデフォルトでWAVに保存します。プロデューサー、ジャーナリスト、文字起こし担当者と共有する前にMP3に変換してください。' },
        { title: 'スタジオ書き出しをスマホで聴く', desc: 'Audacity、Reaper、Logic、どれもデフォルトはWAVです。仮ミックスをMP3で書き出して、共同作業者と共有したり、移動中に聞いたりできます。' },
        { title: 'ポッドキャストの準備', desc: '多くのポッドキャストホスト（Anchor、Buzzsprout、Transistor）はWAVも受け付けますが、アップロードが速く、帯域料金も安いMP3を推奨しています。' },
        { title: 'ボイスメモの整理', desc: 'スマホやレコーダーがWAVで保存した場合、NotionやNotesのアーカイブに入れる前にMP3に変換すれば、ストレージを節約できます。' },
        { title: '音声編集パイプライン', desc: '編集のためにWAVで録音して、編集を済ませて、配布用にもっと小さいMP3を最終形にしたい。そんなときの最終ステップです。' },
      ]}}
      proTips={{ title: 'WAVからMP3への変換をきれいに行うコツ', tips: [
        { title: '24ビットWAVは16ビットと変換結果が同じ', desc: 'MP3は知覚的に必要な以上のビット深度を保持しません。24ビットWAVを128 kbps MP3に再エンコードしても、16ビットに対して聞き分けられる優位はありません。' },
        { title: 'WAVが25 MBを超えるなら先にトリミング', desc: 'Audacity（無料）またはQuickTimeで開き、本当に必要な部分だけに切って小さいWAVとして書き出してから変換してください。または60 MBの上限を使うためにサインインしてください。' },
        { title: 'モノ入力ならモノ出力', desc: '元のWAVがモノ（音声録音では一般的）なら、生成されるMP3もモノになります。モノのMP3で128 kbpsは過剰ですが、Mictooの変換ツールはシンプルさのため128 kbpsに揃えています。' },
        { title: 'マスタリングやアーカイブにはMP3を使わない', desc: '将来の再マスタリング用にマスターコピーを残すなら、WAV（またはFLAC）のままにしてください。MP3は配布フォーマットで、アーカイブ用ではありません。' },
        { title: '320 kbpsやVBRが欲しい場合はAudacityでMP3を開く', desc: 'Mictooは固定128 kbpsで書き出します。それより高いビットレートやVBRが欲しい場合はAudacityでMP3を開いて再エクスポートしてください。1回追加でエンコードしても品質低下はわずかです。' },
        { title: 'ヘッダーが特殊なWAVはサイレントに失敗することがある', desc: 'BWF（放送用WAV）の中にはffmpegが読めないヘッダーがあります。Audacityで開き、標準的なWAVとして保存し直してから再度試してください。' },
      ]}}
      faq={[
        { q: 'WAVからMP3への変換は本当に無料ですか', a: 'はい。25 MBまでアカウント不要、時間制限なし、出力にウォーターマークなし。サーバー費用はマーケティングページのディスプレイ広告で賄っています。' },
        { q: '最大ファイルサイズはどれくらいですか', a: '登録なしで25 MB、無料アカウントで60 MBです。25 MBのWAVは16ビット/44.1 kHzステレオで約5分、24ビット/96 kHzで約2分です。' },
        { q: 'どれくらい時間がかかりますか', a: '数秒です。変換自体はリアルタイムよりはるかに高速で、25 MBのWAVなら3〜8秒で完了します。ボトルネックはアップロード速度です。' },
        { q: 'MP3の品質はどれくらいですか', a: '固定128 kbps、44.1 kHz、元のチャンネル数に合わせます（モノ入力はモノ出力、ステレオ入力はステレオ出力）。これは「何にでも十分」な普遍的な設定です。' },
        { q: 'ファイルは保存されますか', a: 'いいえ。アップロードは変換直後に削除されます。結果は1時間以内にクリーンアップのcronで消去されます。ローカルに保存してください。' },
        { q: 'MP3はWAVと違って聞こえますか', a: 'ほとんどの再生環境とほとんどの素材では違いません。スタジオモニターと冴えた耳でマスタリングしているなら気づくかもしれませんが、その時点でWeb変換ツールは使っていないはずです。' },
        { q: 'もっと高いビットレート（256や320 kbps）を取得できますか', a: '直接はできません。Mictooの128 kbps MP3をAudacityに持っていき、好みのビットレートで再エクスポートしてください。二重エンコードによる音質低下はほぼ感じられません。' },
        { q: 'MP3ではなくFLACはどうですか', a: 'FLACはロスレス圧縮で、WAVの半分のサイズで品質低下はありません。アーカイブにはFLACが優れた選択肢です。Mictooのこの変換ツールはFLACを出力しませんが、/flac-to-mp3のページで逆方向は扱っています。' },
        { q: 'WAVが32ビットfloatでも変換できますか', a: 'はい。ffmpegは32ビットfloat WAVを問題なく処理します。MP3の出力は入力のビット深度にかかわらず同じです。' },
        { q: 'モノ音声なのに、なぜMP3がステレオになりますか', a: 'Mictooは元のチャンネルレイアウトを維持します。モノWAVならモノMP3に、ステレオWAVならステレオMP3になります。アップミックスもダウンミックスもしません。' },
        { q: '音楽にも使えますか、それとも音声だけですか', a: '両方使えます。128 kbps MP3は音楽にはわずかに知覚的な妥協がありますが、車内、騒がしい環境のヘッドホン、普段のリスニングなら十分です。クリティカルな音楽鑑賞にはWAVのままにするかFLACを使ってください。' },
        { q: '一括変換はできますか', a: 'まだできません。無料枠は1ファイルずつです。一括変換は将来のProプランで予定しています。' },
      ]}
      relatedLinks={[
        { href: '/ja/mp4-to-mp3', label: 'MP4からMP3へ', desc: '動画ファイルからMP3音声を取り出します。' },
        { href: '/ja/flac-to-mp3', label: 'FLACからMP3へ', desc: 'ロスレスFLACを携帯しやすいMP3に変換します。' },
        { href: '/ja/mp3-to-wav', label: 'MP3からWAVへ', desc: '逆方向。MP3から非圧縮WAVへ。' },
        { href: '/ja/transcribe-audio-to-text', label: '音声からテキストへ', desc: '言葉だけが必要で音声は不要ですか。MP3を飛ばして直接文字起こしへ。' },
      ]}
    />
  )
}
