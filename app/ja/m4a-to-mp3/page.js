const LANGS = {
  'en': 'https://mictoo.com/m4a-to-mp3',
  'fr': 'https://mictoo.com/fr/m4a-to-mp3',
  'de': 'https://mictoo.com/de/m4a-to-mp3',
  'es': 'https://mictoo.com/es/m4a-to-mp3',
  'ru': 'https://mictoo.com/ru/m4a-to-mp3',
  'it': 'https://mictoo.com/it/m4a-to-mp3',
  'pt': 'https://mictoo.com/pt/m4a-to-mp3',
  'pl': 'https://mictoo.com/pl/m4a-to-mp3',
  'ja': 'https://mictoo.com/ja/m4a-to-mp3',
  'ko': 'https://mictoo.com/ko/m4a-to-mp3',
  'x-default': 'https://mictoo.com/m4a-to-mp3',
}

export const metadata = {
  title: 'M4AをMP3に変換する方法 — 無料の方法（または不要）| Mictoo',
  description: "無料のオンラインツール、QuickTime、VLC、ffmpegでM4Aを数秒でMP3に変換。注意：ほとんどのアプリ（Mictooを含む）はM4Aを直接受け付けるため、変換が不要な場合もあります。",
  alternates: { canonical: 'https://mictoo.com/ja/m4a-to-mp3', languages: LANGS },
}

export default function JaM4aToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">M4AをMP3に変換する方法</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        M4Aは、iPhoneのボイスメモ、Apple Podcastsのダウンロード、ほとんどのmacOS録音アプリで使われる既定の音声形式です。MP3はより汎用的ですが、2026年現在、驚くほど多くのツールがM4Aを直接受け付けます — ほぼすべてのブラウザ、オーディオエディター、ポッドキャストアプリ、文字起こしサービスを含みます。本当に変換が必要な場合と、最速の無料変換方法を紹介します。
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>おそらく変換は不要です。</strong> M4AとMP3の音質は非常に似ています。MP3を読める最新アプリは、ほとんどの場合M4Aも読みます。具体的には：
        </p>
        <ul className="text-sm text-slate-700 list-disc pl-5 mt-2 space-y-1">
          <li><strong>文字起こし：</strong> Mictooは <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.m4a</code> を直接受け付けます — ファイルをドロップしてテキストを取得。変換不要。</li>
          <li><strong>オーディオ編集：</strong> Audacity、GarageBand、Logic、Premiere、DaVinci ResolveすべてM4Aを読みます。</li>
          <li><strong>ストリーミング・再生：</strong> Spotify、Apple Music、YouTube Music、すべての最新ブラウザとOSがM4Aを再生します。</li>
        </ul>
        <p className="text-sm text-slate-700 mt-3">
          MP3が本当に必要なのは、ターゲットアプリが明示的にMP3のみと書いている場合だけです — 一部の古いカーステレオ、フィットネス機器、基本的なボイスレコーダー、レガシーソフトウェアなど。
        </p>
        <a href="/ja" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline mt-3">
          ↑ MictooでM4Aを直接文字起こし
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <p className="-mb-6 text-slate-700">
          <strong>それでもMP3が必要？</strong> 環境に合う方法を以下から選択。すべて無料。
        </p>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">方法1 — オンラインコンバーター</h2>
          <p className="mb-4">
            ドラッグ、ドロップ、ダウンロード — 通常のボイスメモなら10秒以下：
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://cloudconvert.com/m4a-to-mp3" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">CloudConvert</a> — クリーンなUI、大きいファイルに対応。</li>
            <li><a href="https://convertio.co/m4a-mp3/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Convertio</a> — 高速、MP3品質選択可能。</li>
            <li><a href="https://online-audio-converter.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Online Audio Converter</a> — 細かい品質コントロール。</li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            プライバシー：オンラインツールはファイルをアップロードします。機密録音にはスキップしデスクトップ手法を使用。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">方法2 — macOS（インストール不要）</h2>

          <img
            src="/svg/macos-music-convert.svg"
            alt="macOSミュージックアプリ：メニューバーのファイルをクリック、ドロップダウンの変換にホバー、サブメニューからMP3バージョンを作成を選択。"
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={280}
          />

          <p className="mb-3">
            <strong>ミュージックアプリ：</strong> <code className="font-mono">.m4a</code> をミュージックにドラッグし、選択、続いて <strong>ファイル → 変換 → MP3バージョンを作成</strong>。MP3が元のファイルと並んで表示されます。
          </p>
          <p className="mb-3">
            <strong>QuickTime Player：</strong> ファイルを開く → <strong>ファイル → 書き出す → オーディオのみ</strong>。QuickTimeはデフォルトでM4Aとして書き出します。MP3が必要なら下のVLCまたはAudacityと組み合わせてください。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">方法3 — VLC（クロスプラットフォーム）</h2>
          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> Windows/macOS/Linuxで：
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>VLCを開く → <strong>メディア → 変換 / 保存</strong>。</li>
            <li>ファイル <code className="font-mono">.m4a</code> を追加、<strong>変換 / 保存</strong> をクリック。</li>
            <li>プロファイル <code className="font-mono">Audio - MP3</code> を選択。</li>
            <li>保存先ファイル名を <code className="font-mono">.mp3</code> で終わるように指定し、<strong>開始</strong> をクリック。</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">方法4 — コマンドライン（ffmpeg）</h2>
          <p className="mb-4">
            <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a> で1行：
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.m4a -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            音声・文字起こしには <code className="font-mono">-ab 64k -ac 1</code> を使用 — 音声の品質を保ったままファイルが2〜3分の1に。
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">文字起こしが必要？</h2>
          <p className="mb-4">
            M4AもMP3もMictooで直接動作します。ファイルをドロップして、タイムスタンプ、SRT字幕、AI要約付きのテキストを取得 — 無料、登録不要。
          </p>
          <a href="/ja" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ 音声を無料でテキストに変換
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">関連ガイド</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/ja/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AACをMP3に</a>
          <a href="/ja/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMAをMP3に</a>
          <a href="/ja/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4Aをテキストに</a>
          <a href="/ja/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">音声を圧縮</a>
        </div>
      </div>
    </section>
  )
}
