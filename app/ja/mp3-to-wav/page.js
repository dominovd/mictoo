import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

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
  title: 'MP3からWAVへ — 無料オンライン変換ツール | Mictoo',
  description:
    'MP3からWAVへの変換が無料オンラインで使えます。圧縮されたMP3を音声編集ソフト向けの非圧縮16ビット/44.1 kHz WAVに展開します。登録不要、ウォーターマークなし。',
  alternates: { canonical: 'https://mictoo.com/ja/mp3-to-wav', languages: LANGS },
}

export default function JaMp3ToWavPage() {
  return (
    <LandingLayout
      defaultLanguage="ja"
      badge="MP3 → WAV · 無料 · 登録不要"
      h1={<>MP3からWAVへ<br /><span className="text-brand-600">無料オンライン変換ツール</span></>}
      subtitle="MP3をドロップしてください。音声編集ソフトに読み込める16ビット/44.1 kHzのPCM WAVが手に入ります。ウォーターマークなし、メール不要。"
      tool={<ConverterZone from="mp3" to="wav" />}
      howItWorks={[
        { icon: '📂', title: 'MP3をドロップ', desc: 'MP3をボックスにドラッグしてください。25 MBまでは登録なし、60 MBまではサインイン後に利用できます。' },
        { icon: '⚡', title: 'ffmpegがPCMにデコード', desc: '16ビットPCM、44.1 kHz、元のチャンネルレイアウトを維持します。一般的なファイルなら数秒です。' },
        { icon: '⬇️', title: 'WAVをダウンロード', desc: 'WAVは非圧縮なので、MP3の約10倍のサイズになります。1時間以内にサーバーから削除されます。' },
      ]}
      whyUse={{ title: 'MP3からWAVに変換する理由', bullets: [
        { title: '音声エディタはWAVを好む', desc: 'Audacity、Adobe Audition、Logic、Pro Tools、どれもMP3を開きますが、ほとんどの操作（精密な編集、エフェクトの適用、ノーマライゼーション）はWAVの方がうまく動きます。先に変換しておけば、繰り返しのMP3エンコードによる微小な品質低下を避けられます。' },
        { title: '編集時の追加の品質低下なし', desc: 'MP3を再エンコードするたびに音声がわずかに劣化します。WAVに変換し、編集を行い、最後にMP3に書き出す、この一度のラウンドトリップがベストです。' },
        { title: '一部のレガシーハードウェアやソフトで必須', desc: '一部の古いCD書き込みソフト、サンプラー、録音機材はWAVしか読みません。変換が橋渡しになります。' },
        { title: 'フォレンジックや放送用途', desc: 'フォレンジック音声解析や放送ワークフローでは、形式が良く理解されていて非圧縮であるためWAVが伝統的に使われます。MP3はソース素材としては許容されますが、作業フォーマットはWAVです。' },
        { title: 'ウォーターマークなし、課金誘導なし', desc: 'WAVコンテナにデコードされた音声だけ。何も追加しません。' },
      ]}}
      useCases={{ title: 'MP3からWAVに変換したくなる場面', items: [
        { title: 'Audacity、Reaper、Logicで音声を編集する', desc: 'まずWAVに変換し、エフェクト適用、カット、ノーマライゼーション、ミックスを行います。配布用の小さいファイルが必要なら、最後にMP3に書き出してください。' },
        { title: 'レコードやCDのマスタリング', desc: 'レコードカットもCDプレスもロスレス音声を求めます。元データがMP3しかない場合、WAVに変換すればマスタリングエンジニアが作業できる素材になります。ただし音質はMP3のソースに制限されます。' },
        { title: 'サンプラー用のサンプル準備', desc: 'ハードウェアサンプラー（Akai、Korg）は、特定のビット深度とサンプルレートのWAVファイルを求めることが多いです。' },
        { title: '動画のナレーション作業', desc: '一部の動画エディタ（DaVinci、Premiere）はMP3を問題なく扱いますが、WAVの方が波形表示がきれいで、エフェクト適用もスムーズです。' },
        { title: 'フォレンジックや文字起こしの分析', desc: '一部の専門解析ツールはWAV入力が必須です。' },
      ]}}
      proTips={{ title: 'MP3からWAVへの変換のコツ', tips: [
        { title: 'WAVはMP3の10倍のサイズになる', desc: '5 MBのMP3は16ビット/44.1 kHz WAVではおよそ50 MBに展開されます。変換は失われた品質を復元しません。作業しやすいフォーマットを提供するだけです。' },
        { title: 'WAVの品質はMP3で頭打ち', desc: 'WAVに変換しても128 kbps MP3をCD音質にはできません。WAVは既存の音声を、さらなる圧縮損失なく編集可能にするだけです。' },
        { title: '高い忠実度が必要なら、オリジナルを依頼する', desc: '本格的なマスタリングやレストレーションを行うなら、ソースからロスレスのオリジナル（WAV、FLAC、ALAC）を入手してください。MP3 → WAVは回避策であり、アップグレードではありません。' },
        { title: 'ハードウェアにはサンプルレートが重要', desc: 'ほとんどのハードウェアは44.1 kHz（CD）または48 kHz（動画）を求めます。Mictooの変換ツールは常に44.1で出力します。48が必要なら、AudacityでWAVを開いてリサンプリングしてください。' },
        { title: '24ビットWAVが欲しいならAudacityを使う', desc: 'Mictooの変換ツールは16ビットWAVを出力します。24ビットが欲しい場合は、結果のWAVをAudacityで開いて24ビットfloatで再エクスポートしてください。ソース音声が16ビット相当でも、追加のビット深度は編集のヘッドルームになります。' },
        { title: 'モノ入力ならモノ出力でスペース節約', desc: 'MP3がモノならWAVもモノです。ステレオ変換の半分のサイズです。元のチャンネルレイアウトを維持します。' },
      ]}}
      faq={[
        { q: 'MP3からWAVへの変換は本当に無料ですか', a: 'はい。25 MBまでアカウント不要、ウォーターマークなし、時間制限なし。' },
        { q: 'なぜWAVはMP3よりずっと大きいのですか', a: 'MP3は知覚的圧縮で、耳がほぼ気づかない音声データを捨てます。WAVはすべてのサンプルをフル精度で保存します。一般的なMP3はWAV相当の10分の1のサイズです。' },
        { q: 'WAVはMP3より良い音に聞こえますか', a: 'いいえ。MP3は元のエンコード時にすでにデータを失っています。WAVは音声をそのまま保持しますが、品質を復元はしません。' },
        { q: 'どのWAV形式で出力しますか', a: '16ビットPCM、44.1 kHz、元のチャンネルレイアウトを維持します（モノ入力はモノ出力、ステレオ入力はステレオ出力）。' },
        { q: 'どれくらい時間がかかりますか', a: '数秒です。MP3のデコードは高速です。' },
        { q: '24ビットや32ビットfloatのWAVを取得できますか', a: 'この変換ツールではできません。Mictooの16ビットWAVをAudacityで開き、好みのビット深度で再エクスポートしてください。MP3でソース音声の精度は制限されますが、追加のビットは編集のヘッドルームになります。' },
        { q: 'ファイルは保存されますか', a: 'いいえ。アップロードは変換後に削除されます。出力は1時間以内に消去されます。' },
        { q: '一括変換はできますか', a: '無料枠ではまだできません。複数のブラウザタブを開いてください。' },
        { q: '48 kHzサンプルレートはどうですか', a: 'Mictooは44.1 kHz（CDレート）で出力します。48 kHz（動画作業）が必要なら、変換後にAudacityでWAVをリサンプリングしてください。' },
        { q: 'そもそもなぜ変換するのですか', a: '主に音声編集のためです。Audacity、Pro Tools、Logic、どれもMP3よりWAVの方がうまく動きます。特に編集を繰り返す場合に。' },
        { q: '一部のMP3で変換が失敗することはありますか', a: 'まれにあります。ffmpegは事実上すべての標準MP3をデコードします。本当に壊れたファイルは失敗するかもしれませんが、それ以外は安定しています。' },
        { q: '両方のファイルを保管すべきですか', a: '編集にはWAVを使ってください。配布にはMP3も保管してください。編集が終わったら、最後にWAVから新しいMP3に書き出してチェーンの終わりにします。' },
      ]}
      relatedLinks={[
        { href: '/ja/wav-to-mp3', label: 'WAVからMP3へ', desc: '逆方向の変換です。' },
        { href: '/ja/flac-to-mp3', label: 'FLACからMP3へ', desc: 'ロスレスFLACを携帯しやすいMP3に。' },
        { href: '/ja/wav-to-text', label: 'WAVからテキストへ', desc: 'WAV音声を直接文字起こしします。' },
        { href: '/ja/how-to-compress-audio', label: '音声を圧縮', desc: 'もっと小さくする必要があるファイルに。' },
      ]}
    />
  )
}
