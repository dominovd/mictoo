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
  title: '받아쓰기를 위한 오디오 압축 방법 — 무료 방법 | Mictoo',
  description: '받아쓰기를 위해 오디오 또는 비디오 파일을 25MB 미만으로 줄이는 세 가지 무료 방법: 오디오 추출, 비트레이트 낮추기 또는 파일 분할. 소프트웨어 설치 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/how-to-compress-audio', languages: LANGS },

  openGraph: {
    title: "받아쓰기를 위한 오디오 압축 방법 — 무료 방법 | Mictoo",
    description: "받아쓰기를 위해 오디오 또는 비디오 파일을 25MB 미만으로 줄이는 세 가지 무료 방법: 오디오 추출, 비트레이트 낮추기 또는 파일 분할. 소프트웨어 설치 불필요.",
    url: "https://mictoo.com/ko/how-to-compress-audio",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "받아쓰기를 위한 오디오 압축 방법 — 무료 방법 | Mictoo",
    description: "받아쓰기를 위해 오디오 또는 비디오 파일을 25MB 미만으로 줄이는 세 가지 무료 방법: 오디오 추출, 비트레이트 낮추기 또는 파일 분할. 소프트웨어 설치 불필요.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoHowToCompressAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">받아쓰기를 위한 오디오 압축 방법</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Mictoo는 무료로 <strong>25MB</strong>까지 파일을 받아들입니다. 파일이 더 크면 받아쓰기 품질을 잃지 않고 줄이는 세 가지 빠른 방법이 있습니다.
        파일과 기술에 맞는 것을 선택하세요.
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">방법 1 — 비디오 파일에서 오디오 추출</h2>
          <p className="mb-4">
            주로 음성을 포함하는 비디오 파일(MP4, WEBM, MOV)이 있다면 오디오 트랙은 보통 비디오보다 5-10배 작습니다. Mictoo는 오디오만 필요합니다 — 비디오는 받아쓰기에 도움이 되지 않습니다.
            대부분의 사용자에게 가장 빠른 해결책입니다.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">온라인 (설치 불필요)</h3>
          <p className="mb-2">저희 브라우저 변환기를 사용하세요 — 파일을 끌어다 놓으면 몇 초 안에 MP3 를 받습니다. 무료, 가입 불필요, 워터마크 없음:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="/mp4-to-mp3" className="text-brand-600 hover:underline">MP4를 MP3로</a> — 모든 MP4 영상에서 오디오를 추출합니다.</li>
            <li><a href="/webm-to-mp3" className="text-brand-600 hover:underline">WEBM를 MP3로</a> — YouTube 다운로드와 화면 녹화에 적합합니다.</li>
            <li><a href="/wav-to-mp3" className="text-brand-600 hover:underline">WAV를 MP3로</a> — 압축되지 않은 WAV를 다루기 쉬운 MP3 로 줄입니다.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">명령줄 (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -vn -acodec copy output.m4a`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-vn</code>은 비디오를 제거하고, <code className="font-mono">-acodec copy</code>는 오디오 품질을 변경하지 않고 유지합니다. 빠름 — 재인코딩 없음.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">방법 2 — 오디오 비트레이트 낮추기</h2>
          <p className="mb-4">
            대부분의 팟캐스트와 회의는 128-192 kbps로 녹음됩니다. 받아쓰기에는 64 kbps 모노로 충분하고도 남습니다 — 정확도는 그대로 유지되고 파일은 2-3배 작아집니다.
            긴 오디오 파일에 가장 좋은 방법입니다.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">명령줄 (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -ac 1 -b:a 64k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ac 1</code>은 모노로 변환(음성은 모노에서 잘 들립니다),
            <code className="font-mono">-b:a 64k</code>는 오디오 비트레이트를 64 kbps로 설정합니다.
          </p>
          <p className="mt-3"><strong>빠른 계산:</strong> 64 kbps는 시간당 ~28MB. 1시간 인터뷰는 약 28MB에 들어맞습니다 — 제한에 가깝습니다. 눈에 띄는 정확도 손실 없이 <code className="font-mono">-b:a 48k</code>로 낮추면 시간당 ~21MB가 됩니다.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">방법 3 — 짧은 부분으로 분할</h2>
          <p className="mb-4">
            원본 품질을 유지해야 한다면(법률, 의료, 아카이브 녹음) 파일을 20-25분 청크로 분할하고 각각을 별도로 받아쓰기하세요.
            그런 다음 텍스트 편집기에서 받아쓰기를 연결하세요.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">명령줄 (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1200 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            입력 파일을 20분 청크(<code className="font-mono">1200</code>초)로 분할하고 <code className="font-mono">part_001.mp3</code>, <code className="font-mono">part_002.mp3</code> 등으로 이름을 지정합니다. 그런 다음 각각을 Mictoo에 업로드하세요.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">준비됐나요?</h2>
          <p className="mb-4">
            파일이 25MB 미만이 되면 홈페이지로 돌아가 받아쓰기 도구에 업로드하세요.
          </p>
          <a href="/ko" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ 받아쓰기로 돌아가기
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">더 많은 받아쓰기 도구</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/ko/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3를 텍스트로</a>
          <a href="/ko/transcribe-video-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">비디오를 텍스트로</a>
          <a href="/ko/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A를 텍스트로</a>
          <a href="/ko" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">모든 포맷</a>
        </div>
      </div>
    </section>
  )
}
