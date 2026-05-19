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
  title: '긴 오디오 파일을 전사용으로 분할하는 방법 — 무료 방법 | Mictoo',
  description: '긴 녹음을 전사용으로 짧은 부분으로 분할하는 세 가지 무료 방법: 온라인 도구, Audacity 또는 ffmpeg. MP3, M4A, WAV, MP4 등 지원.',
  alternates: { canonical: 'https://mictoo.com/ko/how-to-split-audio', languages: LANGS },
}

export default function KoHowToSplitAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">긴 오디오 파일을 전사용으로 분할하는 방법</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Mictoo는 익명 사용자에게는 <strong>30분</strong>까지, 로그인 사용자에게는 <strong>60분</strong>까지의 파일을 전사합니다.
        녹음이 더 길다면, 가장 깔끔한 해결책은 두세 개의 짧은 부분으로 나누고 각각을 따로 전사하는 것입니다.
        아래 세 가지 무료 방법 중 파일과 숙련도에 맞는 것을 선택하세요.
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">방법 1 — 온라인 도구 (설치 불필요)</h2>
          <p className="mb-4">
            일회성 분할에 가장 빠른 옵션입니다. 파일을 드래그하고, 시작/종료 시간을 설정하고,
            조각을 다운로드합니다. 각 세그먼트마다 반복합니다.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://mp3cut.net/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">mp3cut.net</a> — 파일을 끌어다 놓고, 시작/종료 마커를 끌고, Cut을 클릭한 뒤 다운로드. 브라우저에서 동작.</li>
            <li><a href="https://clideo.com/cut-audio" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Clideo Cut Audio</a> — 깔끔한 UI, MP3, M4A, WAV, FLAC, OGG 및 동영상 파일 지원.</li>
            <li><a href="https://online-audio-converter.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Online Audio Converter</a> — 긴 파일도 처리 가능하며 세그먼트를 일괄 내보낼 수 있음.</li>
          </ul>

          <p className="mt-3 text-xs text-slate-500">
            팁: 자연스러운 멈춤(문장 사이 또는 화자 전환)에서 분할하면 부분을 결합한 후 전사가 매끄럽게 읽힙니다.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">방법 2 — Audacity (무료 데스크톱 앱)</h2>
          <p className="mb-4">
            정확도를 위해서는 최선의 선택, 특히 녹음에 정적이나 일시정지가 있어 거기서 자르고 싶을 때 유용합니다.
            Audacity는 macOS, Windows, Linux용 무료·오픈소스입니다.
          </p>

          <ol className="list-decimal pl-5 space-y-1">
            <li><a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a>를 다운로드하고 오디오 파일을 엽니다.</li>
            <li>필요하면 <strong>파일 → 가져오기 → 오디오</strong>를 사용. Audacity는 MP3, M4A, WAV, FLAC, OGG 등을 읽습니다.</li>
            <li>분할 지점에서 파형을 클릭(Ctrl/Cmd+B로 라벨을 두거나, 한 파트의 영역을 드래그하여 선택).</li>
            <li><strong>파일 → 내보내기 → 선택한 오디오 내보내기</strong>를 선택하고 첫 부분을 MP3 또는 WAV로 저장.</li>
            <li>다음 영역을 선택하고, 내보내고, 반복합니다.</li>
          </ol>

          <p className="mt-3 text-xs text-slate-500">
            긴 녹음의 경우, Audacity의 <strong>분석 → Sound Finder</strong> 도구가 무음 구간을 자동으로 찾아줍니다 —
            팟캐스트나 인터뷰를 자연스러운 멈춤에서 분할할 때 유용합니다.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">방법 3 — 명령줄 (ffmpeg)</h2>
          <p className="mb-4">
            한 줄 명령으로 전체 파일을 동일한 길이로 분할합니다. 재인코딩이 없어서
            2시간 녹음도 즉시 처리됩니다. ffmpeg가 이미 설치된 경우에 가장 좋습니다.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">25분 단위로 분할</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1500 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">1500</code>은 세그먼트 길이(초, 25분)입니다.
            출력 파일은 <code className="font-mono">part_001.mp3</code>,{' '}
            <code className="font-mono">part_002.mp3</code> 등이 됩니다.{' '}
            <code className="font-mono">-c copy</code> 플래그는 재인코딩을 피하여 무손실·빠르게 분할합니다.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">특정 시간 구간 추출</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -ss 00:00:00 -t 00:25:00 -c copy part1.mp4
ffmpeg -i input.mp4 -ss 00:25:00 -t 00:25:00 -c copy part2.mp4`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ss</code>는 시작 시간, <code className="font-mono">-t</code>는 길이입니다.
            동영상 파일에도 동일하게 동작하며 오디오 트랙도 같은 방식으로 나뉩니다.
          </p>

          <p className="mt-3">
            아직 ffmpeg가 없다면?{' '}
            <a href="https://ffmpeg.org/download.html" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg.org/download</a>{' '}
            에서 설치하거나 macOS에서 Homebrew로: <code className="font-mono">brew install ffmpeg</code>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">전사를 다시 합치기</h2>
          <p className="mb-3">
            각 부분을 Mictoo에서 전사한 후, 결과를 순서대로 하나의 문서에 붙여 넣습니다.
            깔끔한 최종 텍스트를 위한 몇 가지 팁:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>가능하면 멈춤에서 분할 — 단어가 중간에 끊기지 않습니다.</li>
            <li>문장 중간에서 잘렸다면, 다음 부분의 첫 단어가 대문자로 표시될 수 있습니다. 어떤 편집기에서든 쉽게 수정 가능.</li>
            <li>SRT/VTT 자막의 경우: 이전 부분의 총 길이를 다음 파일의 모든 타임스탬프에 더하세요. 찾기-바꾸기나 작은 스크립트로 몇 초 만에 가능.</li>
            <li>Mictoo의 AI 요약은 하나의 결합된 전사에서 가장 잘 작동합니다 — 먼저 부분들을 합친 다음 결합된 텍스트에서 요약을 다시 실행하세요.</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">준비됐나요?</h2>
          <p className="mb-4">
            각 부분이 길이 제한 내에 들어오면, 홈페이지로 돌아가 하나씩 업로드하세요.
          </p>
          <a href="/ko" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ 전사로 돌아가기
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">더 많은 전사 가이드</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/ko/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">오디오 압축 방법</a>
          <a href="/ko/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3를 텍스트로</a>
          <a href="/ko/podcast-transcription" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">팟캐스트 전사</a>
          <a href="/ko" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">모든 형식</a>
        </div>
      </div>
    </section>
  )
}
