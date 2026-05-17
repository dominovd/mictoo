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
  title: 'M4A를 MP3로 변환하는 방법 — 무료 방법 (또는 건너뛰기) | Mictoo',
  description: "무료 온라인 도구, QuickTime, VLC 또는 ffmpeg로 M4A를 몇 초 만에 MP3로 변환. 참고: 대부분의 앱(Mictoo 포함)은 M4A를 직접 받아들이므로 변환할 필요가 없을 수도 있습니다.",
  alternates: { canonical: 'https://mictoo.com/ko/m4a-to-mp3', languages: LANGS },
}

export default function KoM4aToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">M4A를 MP3로 변환하는 방법</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        M4A는 iPhone 음성 메모, Apple Podcasts 다운로드, 대부분의 macOS 녹음 앱의 기본 오디오 형식입니다. MP3가 더 보편적이지만, 2026년 기준 놀랍게도 많은 도구가 M4A를 직접 받아들입니다 — 거의 모든 브라우저, 오디오 편집기, 팟캐스트 앱, 전사 서비스가 그렇습니다. 진짜 변환이 필요한 때와, 가장 빠른 무료 방법을 정리합니다.
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>아마 변환할 필요가 없습니다.</strong> M4A와 MP3는 오디오 품질이 매우 비슷합니다. MP3를 읽는 최신 앱은 거의 대부분 M4A도 읽습니다. 구체적으로:
        </p>
        <ul className="text-sm text-slate-700 list-disc pl-5 mt-2 space-y-1">
          <li><strong>전사:</strong> Mictoo는 <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.m4a</code> 를 직접 받습니다 — 파일을 드롭하고 텍스트를 받으세요. 변환 불필요.</li>
          <li><strong>오디오 편집:</strong> Audacity, GarageBand, Logic, Premiere, DaVinci Resolve 모두 M4A를 읽습니다.</li>
          <li><strong>스트리밍/재생:</strong> Spotify, Apple Music, YouTube Music, 모든 최신 브라우저와 OS가 M4A를 재생합니다.</li>
        </ul>
        <p className="text-sm text-slate-700 mt-3">
          대상 앱이 명시적으로 MP3만이라고 말할 때만 MP3가 필요합니다 — 일부 구형 카오디오, 피트니스 장비, 기본 음성 녹음기, 레거시 소프트웨어 등.
        </p>
        <a href="/ko" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline mt-3">
          ↑ Mictoo에서 .m4a를 바로 전사해 보세요
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <p className="-mb-6 text-slate-700">
          <strong>그래도 MP3가 필요한가요?</strong> 환경에 맞는 방법을 아래에서 선택. 모두 무료.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">방법 1 — 온라인 컨버터</h2>
          <p className="mb-4">
            드래그, 드롭, 다운로드 — 일반적인 음성 메모는 보통 10초 미만:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://cloudconvert.com/m4a-to-mp3" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">CloudConvert</a> — 깔끔한 UI, 대용량 지원.</li>
            <li><a href="https://convertio.co/m4a-mp3/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Convertio</a> — 빠르고 MP3 품질 선택 가능.</li>
            <li><a href="https://online-audio-converter.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Online Audio Converter</a> — 세밀한 품질 컨트롤.</li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            개인정보: 온라인 도구는 파일을 업로드합니다. 민감한 녹음은 건너뛰고 데스크톱 방식을 사용하세요.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">방법 2 — macOS (설치 불필요)</h2>

          <img
            src="/svg/macos-music-convert.svg"
            alt="macOS 음악 앱: 메뉴 막대에서 파일 클릭, 드롭다운에서 변환에 호버, 하위 메뉴에서 MP3 버전 만들기 선택."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={280}
          />

          <p className="mb-3">
            <strong>음악 앱:</strong> <code className="font-mono">.m4a</code> 를 음악으로 드래그한 뒤 선택, 다음 <strong>파일 → 변환 → MP3 버전 만들기</strong>. MP3가 원본 옆에 나타납니다.
          </p>
          <p className="mb-3">
            <strong>QuickTime Player:</strong> 파일을 연 뒤 → <strong>파일 → 다른 이름으로 내보내기 → 오디오 전용</strong>. QuickTime은 기본적으로 M4A로 내보냅니다. MP3가 필요하면 아래 VLC 또는 Audacity와 함께 사용하세요.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">방법 3 — VLC (크로스 플랫폼)</h2>
          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> Windows/macOS/Linux에서:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>VLC 열기 → <strong>미디어 → 변환 / 저장</strong>.</li>
            <li>파일 <code className="font-mono">.m4a</code> 를 추가하고 <strong>변환 / 저장</strong> 를 클릭.</li>
            <li>프로필 <code className="font-mono">Audio - MP3</code> 를 선택.</li>
            <li>대상 파일명을 <code className="font-mono">.mp3</code> 로 끝나게 정하고 <strong>시작</strong> 를 클릭.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">방법 4 — 명령줄 (ffmpeg)</h2>
          <p className="mb-4">
            <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a> 로 한 줄:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.m4a -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            음성/전사용에는 <code className="font-mono">-ab 64k -ac 1</code> 를 사용 — 음성 품질 손실 없이 파일이 2~3배 작아짐.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">전사가 필요한가요?</h2>
          <p className="mb-4">
            M4A와 MP3 모두 Mictoo에서 바로 작동합니다. 파일을 드롭하면 타임스탬프, SRT 자막, AI 요약이 포함된 텍스트를 받을 수 있습니다 — 무료, 가입 불필요.
          </p>
          <a href="/ko" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ 오디오를 무료로 텍스트로 변환
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">관련 가이드</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/ko/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC를 MP3로</a>
          <a href="/ko/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMA를 MP3로</a>
          <a href="/ko/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A를 텍스트로</a>
          <a href="/ko/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">오디오 압축</a>
        </div>
      </div>
    </section>
  )
}
