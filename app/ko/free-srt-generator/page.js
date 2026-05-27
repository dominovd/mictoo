import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'pl': 'https://mictoo.com/pl/free-srt-generator',
  'ja': 'https://mictoo.com/ja/free-srt-generator',
  'ko': 'https://mictoo.com/ko/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'SRT 생성기 — 온라인으로 SRT 자막 파일 생성 | Mictoo',
  description:
    '무료 SRT 자막 생성기. 오디오 또는 비디오 파일을 업로드하여 타임코드가 있는 깨끗한 .srt를 몇 초 만에 받으세요. YouTube, Premiere, DaVinci, CapCut에서 작동.',
  alternates: { canonical: 'https://mictoo.com/ko/free-srt-generator', languages: LANGS },
}

export default function KoSrtPage() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="SRT · 자막 · 무료"
      h1={<>SRT 생성기<br /><span className="text-brand-600">모든 오디오나 비디오의 AI 자막</span></>}
      subtitle="모든 오디오나 비디오에서 자막 파일을 생성. 몇 초 만에 정확한 타임코드가 있는 깨끗한 .srt를 받으세요. YouTube, Premiere, DaVinci Resolve, CapCut, Final Cut용 드롭인."
      howItWorks={[
        { icon: '📂', title: '오디오 또는 비디오 드롭', desc: 'MP3, M4A, MP4, MOV, WAV, FLAC, OGG, WEBM, AAC. 비디오에서 오디오를 자동 추출.' },
        { icon: '⚡', title: 'AI가 받아쓰기와 정렬', desc: 'Whisper large-v3가 오디오를 받아쓰고 각 줄에 타임코드 생성. 10분 비디오는 보통 15초, 30분은 약 1분.' },
        { icon: '💾', title: '.srt 다운로드', desc: '"SRT로 다운로드" 클릭. 파일은 표준 포맷, 모든 주요 비디오 에디터와 YouTube Studio와 드롭인 호환.' },
      ]}
      whyUse={{ title: '이 SRT 생성기인 이유', bullets: [
        { title: 'Whisper large-v3 타임코드는 프레임 정확', desc: '타임코드는 밀리초로, 모든 일반 비디오 프레임레이트보다 정밀. 24, 25, 29.97, 30, 50, 60 fps에서 오프셋 조정 없이 올바르게 맞음.' },
        { title: '무료, 분 카운터 없음', desc: '10분이든 60분이든 받아쓰기. 같은 가격(무료). 첫 파일 후 "Pro로 업그레이드" 게이트 없음.' },
        { title: '50개 이상의 언어', desc: '모든 주요 언어의 콘텐츠 자막 생성. 국제 YouTube 채널과 번역된 자막 트랙에 유용.' },
        { title: '표준 .srt 포맷', desc: '독점 확장자 없음, 이상한 인코딩 없음. Premiere Pro, DaVinci Resolve, Final Cut, CapCut, Kapwing, Descript, YouTube Studio, VLC, MPV에서 작동.' },
        { title: '파일은 저장되지 않음', desc: '오디오는 받아쓰기 제공업체로 가고 처리 후 폐기. 비디오를 보관하지 않습니다.' },
      ]}}
      useCases={{ title: '사람들이 SRT 파일을 생성하는 용도', items: [
        { title: 'YouTube 업로드', desc: 'YouTube의 자동 자막을 깨끗한 .srt로 교체. 더 나은 구두점, 더 적은 오류, 청각 장애 시청자를 위한 더 나은 접근성. 보너스: YouTube 검색은 자동 생성보다 업로드된 자막을 더 안정적으로 인덱싱.' },
        { title: '소셜 미디어 비디오(TikTok, Reels, Shorts) 자막', desc: '여기서 .srt 생성, CapCut이나 Premiere에 가져오기, 자막을 취향에 맞게 스타일링, 비디오에 번인. 대부분의 시청자가 소리 없이 시청하므로 자막은 더 이상 선택사항이 아닙니다.' },
        { title: '접근성용 자막', desc: '컨퍼런스 톡 녹화, 내부 교육 비디오, 온라인 코스. 자막은 청각 장애와 난청 시청자, 시끄러운 환경의 모든 사람에게 사용 가능하게 합니다.' },
        { title: '번역 파이프라인', desc: '소스 언어로 .srt 생성, DeepL이나 ChatGPT에 붙여넣어 번역, 대상 언어 .srt로 저장. 결과: 인간 번역가에게 지불하지 않고 다른 언어로 더빙 품질 자막.' },
        { title: '마감일 하의 비디오 편집', desc: '어제 자막이 필요하고 인간 받아쓰기 작업자를 기다릴 수 없다면, AI 자막은 첫 번째 컷에 충분합니다. 나중에 다듬으세요.' },
      ]}}
      proTips={{ title: 'SRT 생성 팁', tips: [
        { title: '긴 비디오는 10분 청크로 .srt를 생성하고 결합', desc: '드리프트가 발생하면 중간의 잘못된 타임코드를 수정하기 쉬움. 대부분의 에디터는 여러 .srt를 가져와 결합 가능.' },
        { title: '같은 콘텐츠에서 오디오만 업로드가 비디오 업로드보다 빠름', desc: '먼저 오디오 추출: ffmpeg -i video.mp4 -vn -ac 1 -b:a 64k audio.mp3. 받은 .srt는 원본 비디오에 대해 작동, 타임코드는 타임코드이기 때문.' },
        { title: '편집이 끝난 후에만 자막 번인', desc: '컷하기 전에 비디오에 자막을 번인하면, 컷할 때 자막을 다시 만들어야 합니다. 비디오가 잠긴 끝에 번인.' },
        { title: '.srt 줄 길이를 관리 가능하게 유지', desc: 'Whisper는 가끔 긴 문장에 긴 단일 줄 자막을 생성. 대부분의 에디터는 긴 줄을 자동으로 분할 가능, 또는 더 나은 가독성을 위해 수동으로 분할 가능.' },
        { title: '다국어 비디오는 한 번에 한 언어로 .srt 생성', desc: '비디오에 영어와 스페인어 섹션이 있으면, 각 섹션의 .srt를 별도로 생성(매번 수동으로 언어 설정)하고 하나의 .srt로 병합.' },
        { title: '.srt를 비디오 에디터가 아닌 텍스트 에디터에서 편집', desc: '.srt는 타임코드가 있는 텍스트일 뿐. VS Code, Notepad++ 또는 BBEdit에서 열어 오타를 빠르게 수정. 준비되면 비디오 에디터로 다시 가져오기.' },
        { title: 'TikTok과 Reels는 자막당 짧은 한 줄로 수동 단축', desc: 'Whisper의 자연스러운 문장은 TikTok의 펀치 자막 스타일보다 깁니다. 플랫폼 스타일에 맞게 .srt 편집.' },
      ]}}
      faq={[
        { q: 'SRT 파일이란?', a: 'SRT(SubRip Subtitle)는 가장 일반적인 자막 포맷. 타임코드와 자막 텍스트가 있는 일반 텍스트. 모든 주요 비디오 플레이어와 에디터가 .srt 파일을 읽습니다.' },
        { q: '비디오에서 SRT 파일을 어떻게 생성합니까?', a: '여기에 비디오 업로드. 오디오를 추출하고, 받아쓰고, .srt를 생성. 준비되면 "SRT로 다운로드" 클릭.' },
        { q: 'YouTube 비디오에 SRT 자막을 어떻게 추가합니까?', a: 'YouTube Studio에서 비디오를 열고, 자막으로 이동하고, 언어 추가를 클릭하고, .srt 파일을 업로드. YouTube는 그 언어의 공식 자막으로 사용합니다.' },
        { q: 'SRT 파일이 Premiere Pro와 DaVinci Resolve에서 작동합니까?', a: '네. Premiere: 파일, 가져오기, .srt 선택. DaVinci: 프로젝트 빈에 .srt 드래그. 둘 다 타임라인에서 더 편집 가능한 자막 트랙으로 처리.' },
        { q: 'CapCut과 Final Cut에서 작동합니까?', a: '네. CapCut: 캡션 탭, SRT 가져오기. Final Cut: 파일, 가져오기, 캡션, .srt 선택. 둘 다 타임라인의 올바른 시간에 자막 배치.' },
        { q: 'SRT 생성기가 정말 무료입니까?', a: '네. 파일당 요금 없음, 분 카운터 없음, 25 MB 미만 파일에 이메일 불필요. 25 MB와 60 MB 사이의 파일은 무료 계정 필요.' },
        { q: '최대 파일 크기는?', a: '계정 없이 25 MB, 무료 계정으로 60 MB.' },
        { q: '오디오 파일(MP3, WAV)에서 SRT를 생성할 수 있습니까?', a: '네. 오디오 파일을 직접 드롭. 비디오 오디오인 것처럼 타임코드가 있는 .srt 생성. 나중에 이미지나 슬라이드와 오디오를 동기화할 때 자막을 추가하는 데 유용.' },
        { q: '긴 비디오에서 타임코드가 드리프트합니까?', a: 'Whisper 타임코드는 실제 오디오에 정렬되므로 드리프트는 드물음. 매우 긴 파일(60분)은 마지막 자막에 서브초 드리프트가 나타날 수 있습니다. 알아채면 영향받은 자막을 수동으로 수정.' },
        { q: '다운로드 전에 자막을 편집할 수 있습니까?', a: '네. 받아쓰기 후 결과 뷰에서 잘못된 단어를 수정한 다음 변경사항이 있는 .srt를 다운로드.' },
        { q: 'SRT 생성기는 어떤 언어를 지원합니까?', a: '자동 감지로 50개 이상의 언어. 짧은 비디오나 비영어 콘텐츠는 더 신뢰할 수 있는 결과를 위해 언어를 수동으로 선택.' },
        { q: '오디오가 저장됩니까?', a: '아니요. 파일은 받아쓰기 제공업체로 가서 처리되고 폐기. 오디오나 생성된 .srt를 보관하지 않습니다.' },
        { q: '오디오 언어와 다른 언어로 SRT를 생성할 수 있습니까?', a: '직접 안 됩니다. 소스 언어로 SRT를 생성한 다음 DeepL이나 ChatGPT로 .srt의 텍스트를 번역. 타임코드는 같게 유지, 텍스트만 변경.' },
      ]}
      relatedLinks={[
        { href: '/ko/transcribe-video-to-text', label: '비디오를 텍스트로', desc: '같은 엔진, 일반 텍스트 출력 지향.' },
        { href: '/ko/timestamped-transcription', label: '타임코드 받아쓰기', desc: '다른 포맷의 문장 또는 단어 타임코드용.' },
        { href: '/ko/youtube-to-text', label: 'YouTube를 텍스트로', desc: 'YouTube 자동 자막 교체용.' },
        { href: '/ko/transcribe-audio-to-text', label: '오디오를 텍스트로', desc: '순수 오디오 받아쓰기용.' },
      ]}
    />
  )
}
