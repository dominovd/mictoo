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
  title: 'AACをMP3に変換する方法 — 無料の方法（2026年）| Mictoo',
  description: "AAC音声ファイルを無料でMP3に変換。オンラインコンバーター、QuickTime/VLC、ffmpegコマンドラインの3つの方法。ヒント：MictooはほとんどのAACファイルを変換なしで直接文字起こしできます。",
  alternates: { canonical: 'https://mictoo.com/ja/aac-to-mp3', languages: LANGS },
}

export default function JaAacToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">AACをMP3に変換する方法</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        AAC（Advanced Audio Coding）は、iPhoneのボイスメモ、Androidのレコーダー、MP4動画内の音声で使われる標準形式です。MP3はより汎用的で、あらゆるプレーヤー、エディター、文字起こしツールで使えます。以下に無料の3つの方法と、本当に変換が必要かどうかの簡単なメモを記載します。
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>変換する前に：</strong> 目的が文字起こしなら、MictooはほとんどのAACファイルを直接受け付けます。MP4コンテナ内の <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.aac</code> ファイル（iPhoneボイスメモ、共有メニュー経由のエクスポート、ほとんどのAndroidレコーダー）も含まれます。まずアップロードしてみて、拒否されたときだけ変換してください。
        </p>
        <a href="/ja" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline">
          ↑ .aacを直接文字起こし
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">方法1 — オンラインコンバーター（インストール不要）</h2>

          <img
            src="/svg/online-converter-3step.svg"
            alt="3ステップ：AACファイルをドロップ、出力形式にMP3を選択、結果をダウンロード。"
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={240}
          />

          <p className="mb-4">
            ~200 MB以下のファイルなら最速。ブラウザにドロップして数秒でMP3が返ってきます。すべて登録不要：
          </p>
          <p className="text-xs text-slate-500 mt-3">
            プライバシー：オンラインコンバーターはファイルを自社サーバーにアップロードします。機密音声（医療、法務、業務通話）には下記のデスクトップ手法を推奨。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">方法2 — デスクトップアプリ（オフライン）</h2>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">macOS — QuickTime + iMovie</h3>
          <p className="mb-2">
            QuickTimeはAACを開けます。<strong>ファイル → 書き出す → オーディオのみ</strong> を使い、ダイアログでMP3を選択。すべてのMacに標準搭載。
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Windows / macOS / Linux — Audacity（無料）</h3>
          <p>
            AACファイルを <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> で開き、<strong>ファイル → 書き出し → MP3として書き出し</strong>。音声ならモノラル・64–96 kbpsを選択。
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">クロスプラットフォーム — VLC</h3>
          <p>
            VLCは <strong>メディア → 変換 / 保存</strong> から変換できます。.aacを追加し、プロファイル <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded mx-1">Audio - MP3</code> を選び、保存先を指定して開始をクリック。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">方法3 — コマンドライン（ffmpeg）</h2>
          <p className="mb-4">
            インストール済みの <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a> で1行：
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.aac -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            音声・文字起こしには <code className="font-mono">-ab 64k -ac 1</code> に下げると、精度を保ったままファイルサイズが2〜3分の1に。
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">MP3はできましたか？</h2>
          <p className="mb-4">
            Mictooにドロップすれば、タイムスタンプ、SRT字幕、AI要約付きの無料文字起こしが手に入ります。登録不要。
          </p>
          <a href="/ja" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ MP3を無料でテキストに変換
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">関連ガイド</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/ja/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMAをMP3に</a>
          <a href="/ja/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4AをMP3に</a>
          <a href="/ja/aac-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AACをテキストに</a>
          <a href="/ja/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">音声を圧縮</a>
        </div>
      </div>
    </section>
  )
}
