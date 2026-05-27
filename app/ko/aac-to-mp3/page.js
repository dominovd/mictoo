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
  title: 'AAC를 MP3로 변환하는 방법 — 무료 방법 (2026) | Mictoo',
  description: "AAC 오디오 파일을 무료로 MP3로 변환하세요. 온라인 컨버터, QuickTime/VLC, ffmpeg 명령줄의 세 가지 빠른 방법. 팁: Mictoo는 대부분의 AAC 파일을 변환 없이 바로 받아들입니다.",
  alternates: { canonical: 'https://mictoo.com/ko/aac-to-mp3', languages: LANGS },
}

export default function KoAacToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">AAC를 MP3로 변환하는 방법</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        AAC(Advanced Audio Coding)는 iPhone 음성 메모, Android 녹음기, MP4 비디오 내 오디오의 기본 형식입니다. MP3는 더 범용적이며 모든 플레이어, 편집기, 전사 도구에서 작동합니다. 아래에 세 가지 무료 방법과, 변환이 정말 필요한지에 대한 간단한 메모를 정리했습니다.
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>변환하기 전에:</strong> 목적이 전사라면, Mictoo는 대부분의 AAC 파일을 직접 받습니다. MP4 컨테이너 안의 <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.aac</code> 파일(iPhone 음성 메모, 공유 시트 내보내기, 대부분의 Android 녹음기 포함). 먼저 업로드해 보고, 파일이 거부될 때만 변환하세요.
        </p>
        <a href="/ko" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline">
          ↑ .aac 바로 전사하기
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">방법 1 — 온라인 컨버터 (설치 불필요)</h2>

          <img
            src="/svg/online-converter-3step.svg"
            alt="세 단계: AAC 파일 드롭, 출력 형식으로 MP3 선택, 결과 다운로드."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={240}
          />

          <p className="mb-4">
            약 200 MB 이하 파일에 가장 빠릅니다. 브라우저에 드롭하면 몇 초 만에 MP3가 반환됩니다. 모두 가입 없이 가능:
          </p>
          <p className="text-xs text-slate-500 mt-3">
            개인정보: 온라인 컨버터는 파일을 자사 서버에 업로드합니다. 민감한 녹음(의료, 법률, 업무 통화)에는 아래 데스크톱 방법을 사용하세요.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">방법 2 — 데스크톱 앱 (오프라인)</h2>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">macOS — QuickTime + iMovie</h3>
          <p className="mb-2">
            QuickTime은 AAC 파일을 엽니다. <strong>파일 → 다른 이름으로 내보내기 → 오디오 전용</strong>를 사용하고 대화상자에서 MP3를 선택하세요. 모든 Mac에 기본 탑재.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Windows / macOS / Linux — Audacity (무료)</h3>
          <p>
            AAC 파일을 <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a>에서 연 다음, <strong>파일 → 내보내기 → MP3로 내보내기</strong>. 음성이면 모노 및 64–96 kbps를 선택하세요.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">크로스 플랫폼 — VLC</h3>
          <p>
            VLC는 <strong>미디어 → 변환 / 저장</strong>에서 변환합니다. .aac를 추가하고 프로필 <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded mx-1">Audio - MP3</code>를 선택, 저장 위치를 정하고 시작을 클릭하세요.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">방법 3 — 명령줄 (ffmpeg)</h2>
          <p className="mb-4">
            설치된 <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a>로 한 줄:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.aac -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            음성/전사용으로는 <code className="font-mono">-ab 64k -ac 1</code>로 낮추세요 — 정확도 손실 없이 파일이 2~3배 작아집니다.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">MP3 준비됐나요?</h2>
          <p className="mb-4">
            Mictoo에 드롭하면 타임스탬프, SRT 자막, AI 요약이 포함된 무료 전사를 받을 수 있습니다. 가입 불필요.
          </p>
          <a href="/ko" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ MP3를 무료로 텍스트로 변환
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">관련 가이드</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/ko/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMA를 MP3로</a>
          <a href="/ko/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A를 MP3로</a>
          <a href="/ko/aac-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC를 텍스트로</a>
          <a href="/ko/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">오디오 압축</a>
        </div>
      </div>
    </section>
  )
}
