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
  title: 'WMA를 MP3로 변환하는 방법 — 무료 방법 (2026) | Mictoo',
  description: "WMA(Windows Media Audio)를 MP3로 무료로 변환하세요. 온라인 컨버터, VLC, Audacity, ffmpeg 중에서 맞는 것을 선택. 그 다음 Mictoo로 MP3를 텍스트로 전사.",
  alternates: { canonical: 'https://mictoo.com/ko/wma-to-mp3', languages: LANGS },
}

export default function KoWmaToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">WMA를 MP3로 변환하는 방법</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        WMA(Windows Media Audio)는 2000년대 Microsoft가 Windows 녹음기와 Windows Media Player 추출에 사용한 기본 형식입니다. Windows에서는 작동하지만, 다른 거의 모든 곳 — 최신 휴대폰, 웹 도구, 전사 엔진 — 에서는 보통 받아들이지 않습니다. MP3가 보편적 대체재입니다. 아래에 네 가지 무료 변환 방법을 소개합니다.
      </p>

      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700">
          <strong>왜 변환할까:</strong> Mictoo(및 대부분의 최신 전사 도구)는 WMA를 직접 읽지 못합니다 — 독점 코덱을 사용하기 때문입니다. 먼저 MP3, M4A 또는 WAV로 변환해야 합니다. MP3 결과는 약간 더 작고 어디서나 재생됩니다.
        </p>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">방법 1 — 온라인 컨버터 (설치 불필요)</h2>
          <p className="mb-4">
            파일이 ~200 MB 이하이고 녹음이 민감하지 않다면 가장 쉬운 길. 드래그, 드롭, 다운로드 — 보통 5–15초:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://cloudconvert.com/wma-to-mp3" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">CloudConvert</a> — 무료로 최대 1 GB 지원.</li>
            <li><a href="https://convertio.co/wma-mp3/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Convertio</a> — 배치 업로드, MP3 품질 선택 가능.</li>
            <li><a href="https://www.freeconvert.com/wma-to-mp3" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">FreeConvert</a> — 비트레이트와 채널 고급 옵션.</li>
            <li><a href="https://www.media.io/convert/wma-to-mp3.html" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Media.io</a> — 빠르고 깔끔한 인터페이스.</li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            개인정보: 민감한 녹음(인터뷰, 업무 통화, 의료)에는 아래 데스크톱 방법을 사용 — 오디오가 컴퓨터를 떠나지 않습니다.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">방법 2 — VLC (Windows / macOS / Linux)</h2>

          <img
            src="/svg/vlc-convert-dialog.svg"
            alt="VLC 변환 대화상자: 소스 recording.wma, 프로필 Audio – MP3, 대상 파일 .mp3, 시작 버튼."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={300}
          />

          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> 는 무료이며 모든 시스템에서 WMA를 기본적으로 읽습니다. 네 번의 클릭으로 변환:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>VLC를 엽니다. 클릭: <strong>미디어 → 변환 / 저장</strong>.</li>
            <li>파일 <code className="font-mono">.wma</code> 을 추가하고 다시 클릭: <strong>변환 / 저장</strong>.</li>
            <li><strong>프로필</strong> 에서 <code className="font-mono">Audio - MP3</code> 를 선택.</li>
            <li>대상 파일명을 <code className="font-mono">.mp3</code> 로 끝나게 정한 뒤 <strong>시작</strong> 를 클릭.</li>
          </ol>
          <p className="mt-3">완료. VLC 하단의 진행 표시줄이 변환 미터로 바뀝니다.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">방법 3 — Audacity (무료, 모든 플랫폼)</h2>
          <p className="mb-3">
            <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> 는 전사 전에 오디오 정리(무음 자르기, 작은 목소리 증폭, 배경 잡음 제거)도 하고 싶을 때 유용합니다.
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>파일 → 가져오기 → 오디오</strong> → <code className="font-mono">.wma</code></li>
            <li>(선택) 편집, 정규화, 잡음 제거.</li>
            <li><strong>파일 → 내보내기 → MP3로 내보내기</strong>. 음성이면 모노 및 64–96 kbps 선택.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">방법 4 — 명령줄 (ffmpeg)</h2>
          <p className="mb-4">
            <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a> 로 한 줄:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.wma -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            음성/전사용은 <code className="font-mono">-ab 64k -ac 1</code> (모노, 64 kbps)로 — 정확도 동일, 파일은 2~3배 작음.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">MP3 준비됐나요?</h2>
          <p className="mb-4">
            Mictoo에 드롭하면 무료 전사를 받을 수 있습니다 — 50개 이상의 언어 지원, 타임스탬프, SRT 자막, AI 요약 반환. 가입 불필요.
          </p>
          <a href="/ko" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ MP3를 무료로 텍스트로 변환
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">관련 가이드</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/ko/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC를 MP3로</a>
          <a href="/ko/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A를 MP3로</a>
          <a href="/ko/transcribe-audio-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">오디오 전사</a>
          <a href="/ko/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">오디오 압축</a>
        </div>
      </div>
    </section>
  )
}
