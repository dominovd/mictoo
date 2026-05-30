const LANGS = {
  'en': 'https://mictoo.com/how-to-compress-audio',
  'fr': 'https://mictoo.com/fr/how-to-compress-audio',
  'de': 'https://mictoo.com/de/how-to-compress-audio',
  'es': 'https://mictoo.com/es/how-to-compress-audio',
  'ru': 'https://mictoo.com/ru/how-to-compress-audio',
  'it': 'https://mictoo.com/it/how-to-compress-audio',
  'pt': 'https://mictoo.com/pt/how-to-compress-audio',
  'pl': 'https://mictoo.com/pl/how-to-compress-audio',
  'ja': 'https://mictoo.com/ja/how-to-compress-audio',
  'ko': 'https://mictoo.com/ko/how-to-compress-audio',
  'x-default': 'https://mictoo.com/how-to-compress-audio',
}

export const metadata = {
  title: '文字起こし用に音声を圧縮する方法 — 無料の方法 | Mictoo',
  description: '文字起こし用に音声・動画ファイルを25 MB未満に縮小する3つの無料の方法: 音声を抽出、ビットレートを下げる、ファイルを分割。ソフトウェアのインストール不要。',
  alternates: { canonical: 'https://mictoo.com/ja/how-to-compress-audio', languages: LANGS },

  openGraph: {
    title: "文字起こし用に音声を圧縮する方法 — 無料の方法 | Mictoo",
    description: "文字起こし用に音声・動画ファイルを25 MB未満に縮小する3つの無料の方法: 音声を抽出、ビットレートを下げる、ファイルを分割。ソフトウェアのインストール不要。",
    url: "https://mictoo.com/ja/how-to-compress-audio",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "文字起こし用に音声を圧縮する方法 — 無料の方法 | Mictoo",
    description: "文字起こし用に音声・動画ファイルを25 MB未満に縮小する3つの無料の方法: 音声を抽出、ビットレートを下げる、ファイルを分割。ソフトウェアのインストール不要。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaHowToCompressAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">文字起こし用に音声を圧縮する方法</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Mictooは無料で<strong>25 MB</strong>までのファイルを受け付けます。ファイルがより大きい場合、文字起こしの品質を犠牲にせずに縮小する3つの素早い方法があります。
        ファイルとスキルに合うものを選んでください。
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">方法1 — 動画ファイルから音声を抽出</h2>
          <p className="mb-4">
            主に音声を含む動画ファイル(MP4、WEBM、MOV)がある場合、音声トラックは通常動画より5〜10倍小さくなります。Mictooは音声のみが必要 — 動画は文字起こしに役立ちません。
            ほとんどのユーザーにとって最速の解決策です。
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">オンライン(インストール不要)</h3>
          <p className="mb-2">私たち独自のブラウザ変換ツールをご利用ください — ファイルをドロップして数秒で MP3 を取得。無料、登録不要、ウォーターマークなし:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="/mp4-to-mp3" className="text-brand-600 hover:underline">MP4 を MP3 に</a> — あらゆる MP4 動画から音声を抽出します。</li>
            <li><a href="/webm-to-mp3" className="text-brand-600 hover:underline">WEBM を MP3 に</a> — YouTube のダウンロードや画面録画用。</li>
            <li><a href="/wav-to-mp3" className="text-brand-600 hover:underline">WAV を MP3 に</a> — 非圧縮の WAV を扱いやすい MP3 に縮小します。</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">コマンドライン(ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -vn -acodec copy output.m4a`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-vn</code>は動画を削除、<code className="font-mono">-acodec copy</code>は音声品質を変更せずに保持します。高速 — 再エンコードなし。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">方法2 — 音声のビットレートを下げる</h2>
          <p className="mb-4">
            ほとんどのポッドキャストや会議は128〜192 kbpsで録音されています。文字起こしには64 kbpsモノラルで十分以上 — 精度は同じままで、ファイルは2〜3倍小さくなります。
            長い音声ファイルに最適な方法です。
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">コマンドライン(ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -ac 1 -b:a 64k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ac 1</code>はモノラルに変換(音声はモノラルでうまく聞こえます)、
            <code className="font-mono">-b:a 64k</code>は音声ビットレートを64 kbpsに設定します。
          </p>
          <p className="mt-3"><strong>クイック計算:</strong> 64 kbpsは1時間あたり〜28 MB。1時間のインタビューは約28 MBに収まります — 制限に近い。気づくほどの精度損失なしで<code className="font-mono">-b:a 48k</code>に下げると1時間あたり〜21 MBになります。</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">方法3 — 短い部分に分割</h2>
          <p className="mb-4">
            元の品質を保持する必要がある場合(法律、医療、アーカイブの録音)は、ファイルを20〜25分のチャンクに分割し、それぞれを別々に文字起こしします。
            その後、任意のテキストエディターで文字起こしを連結します。
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">コマンドライン(ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1200 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            入力ファイルを20分のチャンク(<code className="font-mono">1200</code>秒)に分割し、<code className="font-mono">part_001.mp3</code>、<code className="font-mono">part_002.mp3</code>などと命名します。次に各部分をMictooにアップロードしてください。
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">準備完了?</h2>
          <p className="mb-4">
            ファイルが25 MB未満になったら、ホームページに戻って文字起こしツールにアップロードしてください。
          </p>
          <a href="/ja" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ 文字起こしに戻る
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">その他の文字起こしツール</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/ja/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3をテキストに</a>
          <a href="/ja/transcribe-video-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">動画をテキストに</a>
          <a href="/ja/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4Aをテキストに</a>
          <a href="/ja" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">すべてのフォーマット</a>
        </div>
      </div>
    </section>
  )
}
