import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-mp3',
  'fr': 'https://mictoo.com/fr/webm-to-mp3',
  'de': 'https://mictoo.com/de/webm-to-mp3',
  'es': 'https://mictoo.com/es/webm-to-mp3',
  'ru': 'https://mictoo.com/ru/webm-to-mp3',
  'it': 'https://mictoo.com/it/webm-to-mp3',
  'pt': 'https://mictoo.com/pt/webm-to-mp3',
  'pl': 'https://mictoo.com/pl/webm-to-mp3',
  'ja': 'https://mictoo.com/ja/webm-to-mp3',
  'ko': 'https://mictoo.com/ko/webm-to-mp3',
  'x-default': 'https://mictoo.com/webm-to-mp3',
}

export const metadata = {
  title: 'WEBMからMP3へ — 無料オンライン変換ツール | Mictoo',
  description:
    'WEBMからMP3への変換が無料オンラインで使えます。WEBM動画や音声ファイルから数秒でMP3音声を取り出せます。登録不要、ウォーターマークなし。最大25 MB。',
  alternates: { canonical: 'https://mictoo.com/ja/webm-to-mp3', languages: LANGS },
}

export default function JaWebmToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="ja"
      badge="WEBM → MP3 · 無料 · 登録不要"
      h1={<>WEBMからMP3へ<br /><span className="text-brand-600">無料オンライン変換ツール</span></>}
      subtitle="WEBMファイル（ブラウザ録音ツール、YouTubeダウンローダー、画面キャプチャツールが好んで保存する形式）をドロップしてください。クリーンなMP3が手に入ります。ウォーターマークなし、メール不要。"
      tool={<ConverterZone from="webm" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'WEBMをドロップ', desc: '音声のみでも動画WEBMでもどちらも使えます。25 MBまでは登録なし、60 MBまではサインイン後に利用できます。' },
        { icon: '⚡', title: '抽出して再エンコード', desc: 'ffmpegがWEBMコンテナから音声ストリーム（OpusまたはVorbis）を取り出し、44.1 kHzの128 kbps MP3に再エンコードします。通常3〜10秒です。' },
        { icon: '⬇️', title: 'MP3をダウンロード', desc: '出力は元のファイル名に.mp3拡張子を付けたものです。ファイルは1時間以内にサーバーから削除されます。' },
      ]}
      whyUse={{ title: 'WEBMからMP3に変換する理由', bullets: [
        { title: 'WEBMはブラウザには最適、他にはひどい', desc: 'iPhoneはWEBMを再生しません。多くのカーステレオも再生しません。古いBluetoothスピーカーも対応していないことが多いです。MP3は思いつくほぼすべてで再生できます。' },
        { title: 'ボイスメモアプリやブラウザ録音はWEBMで保存する', desc: 'WebベースのツールやAPI（Loom、MDNのMediaRecorder API、ブラウザ音声レコーダー）はChromeとFirefoxがネイティブ対応しているのでWEBMをデフォルトにします。録音をどこかに送りたい場合、MP3の方が安全な形式です。' },
        { title: 'YouTubeダウンローダーはデフォルトでWEBMを渡してくる', desc: '4K Video Downloaderやyt-dlpで「音声のみ」を選んでフォーマットを指定しないと、WEBM Opusファイルが手に入ることが多いです。MP3に変換すると、iOSや音声編集アプリで再生できるようになります。' },
        { title: 'Opusは技術的には優れている、しかし互換性が勝つ', desc: 'WEBMコンテナ内のOpusコーデックは、バイト単位ではMP3よりも優れています。しかし聞き手が再生できないなら意味がありません。MP3は共通言語です。' },
        { title: 'ウォーターマークなし、課金誘導なし', desc: 'MP3は音声を再エンコードしただけ。イントロもタグも追加せず、結果ページに「Proを購入」オーバーレイも表示しません。' },
      ]}}
      useCases={{ title: 'WEBMからMP3に変換したくなる場面', items: [
        { title: 'ブラウザ音声録音を携帯しやすいファイルに', desc: 'Webベースのレコーダー（マイクツール、オンライン音声レコーダーなど）を使ってWEBMができた場合、MP3に変換してポッドキャストエディタに読み込ませたり、文字起こし担当者に送ったりできます。' },
        { title: 'LoomやVidyardのダウンロードから音声だけを取り出す', desc: 'LoomのダウンロードはWEBMの場合があります。録画の音声だけが必要なら、変換して小さいファイルを保存できます。' },
        { title: 'YouTube音声ダウンロードを汎用フォーマットに', desc: 'デフォルトでOpus/WEBMを渡すダウンローダーでYouTubeから音声のみをダウンロードした場合、MP3に変換すればどこでも再生できます。' },
        { title: '画面録画からナレーションだけを取り出す', desc: 'OBSやChrome内蔵の画面録画ツールなどはWEBMで出力することがよくあります。文字起こしやポッドキャスト向けに声だけが必要なら変換してください。' },
        { title: 'WebRTC通話の録音', desc: '一部のビデオ会議ツールはWEBMで録音します。クライアントに送る前や、MP3を期待するCRMに保存する前に変換してください。' },
      ]}}
      proTips={{ title: 'WEBMからMP3への変換をきれいに行うコツ', tips: [
        { title: 'VP9動画のWEBMでも問題なし。動画ストリームは無視します', desc: '動画WEBM（VP9 + Opus）を変換ツールに投入できます。動画を取り除き、音声だけを残します。結果は音声のみのファイルを渡した場合と同じサイズです。' },
        { title: 'Opus音声はffmpeg内でロスレスにデコードされる', desc: 'Opus → MP3で二重ロスの問題は発生しません。結果に影響するのはMP3 128 kbpsの知覚的エンコードだけで、入力が非可逆形式であること自体は影響しません。' },
        { title: '音声ならモノで十分だが、Mictooはステレオを維持', desc: '変換ツールは元のチャンネルレイアウトを保ちます。WEBMがモノ（音声録音では一般的）ならMP3もモノになります。アップミックスはしません。' },
        { title: '変換が失敗したら、WEBMが部分的に壊れている可能性', desc: 'WEBMストリームは録音の途中で切れて、コンテナが半分壊れることがあります。VLCで開いて新しいWEBMとして再エクスポートするか、動画エディタで処理してから再試行してください。' },
        { title: 'YouTubeダウンロードは、可能ならM4Aを直接選ぶ', desc: 'ダウンロードを自分で制御できるなら、M4A（MP4コンテナ内のAAC）を選べばこの手順をまるごと省けます。M4AはMP3が再生できるところならどこでも再生できます。4K Video Downloaderの「M4A」フォーマットオプションを使ってください。' },
        { title: 'DRMで暗号化されたWEBMは失敗する', desc: '一部のストリーミングサービスはDRM付きのWEBMを使います。ffmpegは復号できず、Mictooもできません。元のWEBMが保護されていない必要があります。' },
      ]}}
      faq={[
        { q: 'WEBMからMP3への変換は本当に無料ですか', a: 'はい。25 MBまでアカウント不要、ウォーターマークなし、時間制限付きの「試用版」もありません。サーバー費用はマーケティングページのディスプレイ広告で賄っています。' },
        { q: '最大ファイルサイズはどれくらいですか', a: '登録なしで25 MB、無料アカウントで60 MBです。WEBMは効率が良く、25 MBでも音声で通常20〜40分に相当します。' },
        { q: 'WEBM動画をMP3に変換できますか', a: 'はい。動画ストリームを取り除き、音声のみを出力します。MP3のサイズは入力が動画でも音声のみでも同じです。' },
        { q: 'MP3はWEBMより音質が悪いですか', a: '理論的にはわずかに。同じビットレートならOpusの方がMP3より優れています。128 kbpsであれば、ほぼすべての素材についてほぼすべての聞き手にとって違いは聞き取れません。' },
        { q: 'どれくらい時間がかかりますか', a: '数秒です。25 MBのWEBMファイルは3〜10秒で変換できます。ボトルネックはアップロード速度です。' },
        { q: 'MP3の設定はどれですか', a: '固定128 kbps、44.1 kHz、元のチャンネルレイアウトを維持します（モノ入力はモノ出力、ステレオ入力はステレオ出力）。' },
        { q: 'ファイルは保存されますか', a: 'いいえ。アップロードは変換後に削除されます。出力は1時間以内に消去されます。ローカルに保存してください。' },
        { q: 'LoomのWEBMが失敗しました。なぜですか', a: '一部のLoomダウンロードはWEBMコンテナ内のフラグメンテッドMP4を使っていたり、非標準のヘッダーを持っていたりします。VLCで開いて再エクスポートしてから再試行してください。または、Loomで直接MP4ダウンロードのオプションがあればそちらを使ってください。' },
        { q: 'Opusファイル専用には使えますか', a: 'ファイルが.opus拡張子の場合、まず.webmにリネームしてください。コンテナは機能的に同じで、ffmpegは同様に読み取ります。' },
        { q: 'このツールでYouTube動画をダウンロードできますか', a: 'いいえ。URLを取得することはありません。ダウンローダーアプリ（4K Video Downloader、yt-dlp、ClipGrab）でWEBMをローカルに保存してから、ここにドロップしてください。' },
        { q: 'iPhoneやiTunesで出力を再生できますか', a: 'はい。MP3はすべてのAppleデバイスとソフトウェアを含めどこでも再生できます。' },
        { q: 'WEBMのまま使うのではなく、なぜ変換するのですか', a: 'WEBMはChromeとFirefoxでは問題ありませんが、iOS、多くのカーステレオ、古いBluetoothスピーカー、多くのプロ向け音声ソフトウェアでは扱えません。MP3は普遍的です。' },
      ]}
      relatedLinks={[
        { href: '/ja/mp4-to-mp3', label: 'MP4からMP3へ', desc: '同じ考え方で、ソースがWEBMの代わりにMP4の場合です。' },
        { href: '/ja/wav-to-mp3', label: 'WAVからMP3へ', desc: 'ロスレスWAVを携帯しやすいMP3に。' },
        { href: '/ja/webm-to-text', label: 'WEBMからテキストへ', desc: 'MP3を飛ばして、直接文字起こしへ。' },
        { href: '/ja/how-to-compress-audio', label: '音声を圧縮', desc: 'MP3でもまだ共有には大きすぎる場合に。' },
      ]}
    />
  )
}
