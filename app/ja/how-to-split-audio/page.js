const LANGS = {
  'en': 'https://mictoo.com/how-to-split-audio',
  'fr': 'https://mictoo.com/fr/how-to-split-audio',
  'de': 'https://mictoo.com/de/how-to-split-audio',
  'es': 'https://mictoo.com/es/how-to-split-audio',
  'ru': 'https://mictoo.com/ru/how-to-split-audio',
  'it': 'https://mictoo.com/it/how-to-split-audio',
  'pt': 'https://mictoo.com/pt/how-to-split-audio',
  'pl': 'https://mictoo.com/pl/how-to-split-audio',
  'ja': 'https://mictoo.com/ja/how-to-split-audio',
  'ko': 'https://mictoo.com/ko/how-to-split-audio',
  'x-default': 'https://mictoo.com/how-to-split-audio',
}

export const metadata = {
  title: '長い音声ファイルを文字起こし用に分割する方法 — 無料の方法 | Mictoo',
  description: '長い録音を文字起こし用に短い部分に分割する3つの無料の方法：オンラインツール、Audacity、ffmpeg。MP3、M4A、WAV、MP4などに対応。',
  alternates: { canonical: 'https://mictoo.com/ja/how-to-split-audio', languages: LANGS },
}

export default function JaHowToSplitAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">長い音声ファイルを文字起こし用に分割する方法</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Mictooは匿名ユーザー向けに<strong>30分</strong>まで、ログインユーザー向けに<strong>60分</strong>までのファイルを文字起こしできます。
        録音がそれより長い場合、最もきれいな解決策は、2〜3の短い部分に分割して、それぞれを個別に文字起こしすることです。
        以下に3つの無料の方法があります — ファイルとスキルに合うものを選んでください。
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">方法1 — オンラインツール（インストール不要）</h2>
          <p className="mb-4">
            単発の分割に最も速い選択肢です。ファイルをドラッグし、開始/終了時刻を設定し、
            チャンクをダウンロードします。各セグメントで繰り返します。
          </p>


          <p className="mt-3 text-xs text-slate-500">
            ヒント：自然な間（文の切れ目や話者の交代）で分割すると、結合後の文字起こしが滑らかに読めます。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">方法2 — Audacity（無料のデスクトップアプリ）</h2>
          <p className="mb-4">
            精度を重視するなら最良の選択肢、特に録音に無音や間があり、そこで分割したい場合に最適です。
            AudacityはmacOS、Windows、Linux向けの無料・オープンソースのアプリです。
          </p>

          <ol className="list-decimal pl-5 space-y-1">
            <li><a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a>をダウンロードし、音声ファイルを開きます。</li>
            <li>必要なら<strong>ファイル → インポート → 音声</strong>を使用。AudacityはMP3、M4A、WAV、FLAC、OGGなどに対応します。</li>
            <li>分割したい場所の波形をクリック（Ctrl/Cmd+Bでラベルを置くか、1パート分の領域をドラッグ選択）。</li>
            <li><strong>ファイル → エクスポート → 選択範囲をエクスポート</strong>を選び、最初の部分をMP3またはWAVで保存。</li>
            <li>次の領域を選択し、エクスポートし、繰り返します。</li>
          </ol>

          <p className="mt-3 text-xs text-slate-500">
            長い録音には、Audacityの<strong>解析 → Sound Finder</strong>ツールが無音領域を自動的に見つけてくれます —
            ポッドキャストやインタビューを自然な間で分割するのに便利です。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">方法3 — コマンドライン（ffmpeg）</h2>
          <p className="mb-4">
            1つのコマンドでファイル全体を等長のパートに分割します。再エンコードなしなので、
            2時間の録音でも一瞬です。すでにffmpegがインストールされている方に最適。
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">25分のパートに分割</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1500 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">1500</code>はセグメント長（秒）です（25分）。
            出力ファイルは<code className="font-mono">part_001.mp3</code>、
            <code className="font-mono">part_002.mp3</code>などになります。
            <code className="font-mono">-c copy</code>フラグで再エンコードを避け、無劣化・高速です。
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">特定の時間範囲を抽出</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -ss 00:00:00 -t 00:25:00 -c copy part1.mp4
ffmpeg -i input.mp4 -ss 00:25:00 -t 00:25:00 -c copy part2.mp4`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ss</code>は開始時刻、<code className="font-mono">-t</code>は長さです。
            動画ファイルでも同様に動作し、音声トラックも同じように分割されます。
          </p>

          <p className="mt-3">
            ffmpegがまだ入っていない？{' '}
            <a href="https://ffmpeg.org/download.html" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg.org/download</a>{' '}
            からインストールするか、macOSではHomebrewで：<code className="font-mono">brew install ffmpeg</code>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">文字起こしを結合する</h2>
          <p className="mb-3">
            各パートをMictooで文字起こしし、結果を順番に1つのドキュメントに貼り付けます。
            きれいな最終テキストのためのヒント：
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>可能なら間で分割 — 単語が途中で切れません。</li>
            <li>文の途中で切れた場合、次のパートの最初の単語が大文字で始まることがあります。任意のエディタで簡単に修正可能。</li>
            <li>SRT/VTT字幕の場合：前のパートの総長を次のファイルのすべてのタイムスタンプに足してください。検索置換や小さなスクリプトで数秒で完了。</li>
            <li>MictooのAI要約は、1つの統合されたテキストで最も良く機能します — 先にパートを結合してから、結合テキストで要約を再実行してください。</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">準備完了？</h2>
          <p className="mb-4">
            各パートが時間制限内に収まったら、ホームページに戻って1つずつアップロードしてください。
          </p>
          <a href="/ja" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ 文字起こしに戻る
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">その他の文字起こしガイド</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/ja/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">音声を圧縮する方法</a>
          <a href="/ja/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3をテキストへ</a>
          <a href="/ja/podcast-transcription" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">ポッドキャストの文字起こし</a>
          <a href="/ja" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">すべての形式</a>
        </div>
      </div>
    </section>
  )
}
