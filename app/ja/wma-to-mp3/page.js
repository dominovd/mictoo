const LANGS = {
  'en': 'https://mictoo.com/wma-to-mp3',
  'fr': 'https://mictoo.com/fr/wma-to-mp3',
  'de': 'https://mictoo.com/de/wma-to-mp3',
  'es': 'https://mictoo.com/es/wma-to-mp3',
  'ru': 'https://mictoo.com/ru/wma-to-mp3',
  'it': 'https://mictoo.com/it/wma-to-mp3',
  'pt': 'https://mictoo.com/pt/wma-to-mp3',
  'pl': 'https://mictoo.com/pl/wma-to-mp3',
  'ja': 'https://mictoo.com/ja/wma-to-mp3',
  'ko': 'https://mictoo.com/ko/wma-to-mp3',
  'x-default': 'https://mictoo.com/wma-to-mp3',
}

export const metadata = {
  title: 'WMAをMP3に変換する方法 — 無料の方法（2026年）| Mictoo',
  description: "WMA（Windows Media Audio）を無料でMP3に変換。オンラインコンバーター、VLC、Audacity、ffmpegから合うものを選択。その後、MictooでMP3をテキストに文字起こし。",
  alternates: { canonical: 'https://mictoo.com/ja/wma-to-mp3', languages: LANGS },
}

export default function JaWmaToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">WMAをMP3に変換する方法</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        WMA（Windows Media Audio）は2000年代にMicrosoftがWindowsの録音機やWindows Media Playerのリッピングで使った標準形式です。Windowsでは動きますが、それ以外のほとんどの環境では扱いにくく、最新のスマートフォン、Webツール、文字起こしエンジンは受け付けません。MP3は普遍的な代替です。以下に無料の4つの変換方法を紹介します。
      </p>

      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700">
          <strong>なぜ変換するのか：</strong> Mictoo（および現代の文字起こしツールの大半）はWMAを直接読めません — 独自コーデックを使うためです。まずMP3、M4A、またはWAVに変換する必要があります。MP3の結果はわずかに小さく、どこでも再生できます。
        </p>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">方法1 — オンラインコンバーター（インストール不要）</h2>
          <p className="mb-4">
            ファイルが~200 MB以下で機密性が低いなら最も簡単です。ドラッグ、ドロップ、ダウンロード — 通常5～15秒：
          </p>
          <p className="text-xs text-slate-500 mt-3">
            プライバシー：機密性の高い録音（インタビュー、業務通話、医療）には下のデスクトップ手法を選択 — 音声は決してPCを離れません。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">方法2 — VLC（Windows / macOS / Linux）</h2>

          <img
            src="/svg/vlc-convert-dialog.svg"
            alt="VLCの変換ダイアログ：ソースrecording.wma、プロファイルAudio – MP3、保存先.mp3、開始ボタン。"
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={300}
          />

          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> は無料で、すべてのOSでWMAをネイティブに読み込みます。4クリックで変換：
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>VLCを開く。クリック：<strong>メディア → 変換 / 保存</strong>。</li>
            <li>ファイル <code className="font-mono">.wma</code> を追加し、もう一度クリック：<strong>変換 / 保存</strong>。</li>
            <li><strong>プロファイル</strong> で <code className="font-mono">Audio - MP3</code> を選択。</li>
            <li>保存先のファイル名を <code className="font-mono">.mp3</code> で終わるようにして、<strong>開始</strong> をクリック。</li>
          </ol>
          <p className="mt-3">完了。VLC下部のプログレスバーが変換メーターに変わります。</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">方法3 — Audacity（無料、全プラットフォーム）</h2>
          <p className="mb-3">
            <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> は、文字起こし前に音声を整える（無音をトリム、小さい声を持ち上げる、背景ノイズを除去）場合にも便利。
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>ファイル → 取り込み → オーディオ</strong> → <code className="font-mono">.wma</code></li>
            <li>（任意）編集、正規化、ノイズ除去。</li>
            <li><strong>ファイル → 書き出し → MP3として書き出し</strong>。音声ならモノラルと64–96 kbpsを選択。</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">方法4 — コマンドライン（ffmpeg）</h2>
          <p className="mb-4">
            <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a> で1行：
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.wma -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            音声・文字起こしには <code className="font-mono">-ab 64k -ac 1</code>（モノラル、64 kbps）に下げる — 精度はそのまま、ファイルが2〜3分の1。
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">MP3はできましたか？</h2>
          <p className="mb-4">
            Mictooにドロップすれば、無料の文字起こしが手に入ります — 50以上の言語に対応、タイムスタンプ、SRT字幕、AI要約を返します。登録不要。
          </p>
          <a href="/ja" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ MP3を無料でテキストに変換
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">関連ガイド</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/ja/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AACをMP3に</a>
          <a href="/ja/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4AをMP3に</a>
          <a href="/ja/transcribe-audio-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">音声を文字起こし</a>
          <a href="/ja/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">音声を圧縮</a>
        </div>
      </div>
    </section>
  )
}
