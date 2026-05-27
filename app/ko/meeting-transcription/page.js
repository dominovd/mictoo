import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'pt': 'https://mictoo.com/pt/meeting-transcription',
  'pl': 'https://mictoo.com/pl/meeting-transcription',
  'ja': 'https://mictoo.com/ja/meeting-transcription',
  'ko': 'https://mictoo.com/ko/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: '회의 받아쓰기 — 통화와 회의용 무료 AI 받아쓰기 | Mictoo',
  description:
    '무료 AI 회의 받아쓰기. 모든 플랫폼의 회의 녹화를 업로드하여 몇 초 만에 깨끗한 텍스트. 가입 불필요, 분당 과금 없음, 50개 이상의 언어.',
  alternates: { canonical: 'https://mictoo.com/ko/meeting-transcription', languages: LANGS },
}

export default function KoMeetingPage() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="모든 플랫폼 · 무료 · 50개 이상의 언어"
      h1={<>회의 받아쓰기<br /><span className="text-brand-600">무료 AI 회의 받아쓰기</span></>}
      subtitle="모든 회의 녹화를 깨끗한 텍스트로 변환. Zoom, Meet, Teams, Webex, Discord, Skype, 음성 레코더, 무엇이든 작동. 계정 불필요, 분당 과금 없음."
      howItWorks={[
        { icon: '🎙️', title: '회의 녹화 가져오기', desc: '어떤 플랫폼을 사용했든(Zoom, Meet, Teams, Webex, Discord, GoToMeeting, 대면 음성 레코더), 녹화를 MP4, MP3, M4A, WAV, FLAC 또는 OGG로 내보내세요.' },
        { icon: '⚡', title: '파일 드롭', desc: '필요하면 오디오를 추출하여 Whisper large-v3로 보냅니다. 30분 회의는 약 1분에 완료.' },
        { icon: '📋', title: '받아쓰기 받기', desc: '읽고, 복사하거나 TXT 또는 SRT로 다운로드. 내보내기 전에 잘못된 단어나 기술 용어를 인라인으로 수정.' },
      ]}
      whyUse={{ title: '회의에 Mictoo를 사용하는 이유', bullets: [
        { title: '소스 플랫폼은 중요하지 않음', desc: 'Zoom, Meet, Teams, Webex, Discord, GoToMeeting, BlueJeans, 대면 레코더. 파일이 있으면 우리가 받아씁니다.' },
        { title: '모든 회의에 하나의 모델', desc: 'Zoom에서 녹화한 영업 통화와 Teams에서 캡처한 팀 회고에 같은 Whisper large-v3. 일관된 정확도, 일관된 출력 포맷.' },
        { title: '무료, 분 카운터 없음', desc: '대부분의 회의 도구 받아쓰기는 자체 비용이 있는 라이선스 계층에 내장. 우리 것은 진정으로 무료, 월별 한도 없음.' },
        { title: '50개 이상의 언어', desc: '국경 간 회의, 이중 언어 대화, 국제 팀. Whisper는 자동 감지나 수동 언어 선택으로 모두 처리.' },
        { title: '아무것도 저장되지 않음', desc: '파일은 받아쓰기 제공업체로 스트리밍되고 폐기. 회의 오디오를 서버에 기록하지 않습니다.' },
      ]}}
      useCases={{ title: '사람들이 받아쓰는 일반적인 회의 유형', items: [
        { title: '팀 스탠드업과 회고', desc: '비동기 팀은 다른 시간대 사람들이 따라잡을 수 있도록 스탠드업을 받아씁니다. 회고는 후속 조치를 위한 서면 기록에서 혜택을 받습니다.' },
        { title: '클라이언트와 고객 통화', desc: '영업 통화, 계정 체크인, 고객 인터뷰. CRM의 거래나 연락처 옆에 받아쓰기 저장.' },
        { title: '내부 교육과 온보딩 세션', desc: '신규 직원은 비디오를 보면서 받아쓰기를 읽습니다. 더 나은 유지, 단계를 잊어버렸을 때 나중에 검색 가능.' },
        { title: '이사회 회의, 리더십 오프사이트, 전체 회의', desc: '받아쓰기는 기업 커뮤니케이션을 더 접근 가능하게 합니다. 참석할 수 없었던 직원과 문서화에 유용.' },
        { title: '인터뷰와 질적 연구', desc: '후보자 스크리닝, 사용자 인터뷰, 저널리즘이든, 받아쓰기가 실제 작업 결과물.' },
      ]}}
      proTips={{ title: '회의 받아쓰기 팁', tips: [
        { title: '소스가 비디오일 때 오디오 추출', desc: '회의 플랫폼은 오디오와 비디오로 MP4를 내보냄. 오디오만 필요. ffmpeg -i meeting.mp4 -vn -ac 1 -b:a 64k meeting.mp3가 1 GB MP4를 25 MB 이하로. 더 빠른 업로드, 같은 받아쓰기.' },
        { title: '모두가 실제 마이크를 가지고 있는지 확인', desc: 'WiFi 통화의 내장 노트북 마이크는 시끄럽고 에코가 있는 오디오를 생성. 참가자당 20달러 유선 USB 헤드셋은 받아쓰기 정확도에서 보상받습니다.' },
        { title: '말하지 않는 참가자 음소거', desc: '프레젠테이션 중 열린 마이크는 키보드 타이핑, 방의 배경 소음, 사이드바 대화를 포착. Whisper는 가끔 이를 의미 없는 단어로 받아씁니다.' },
        { title: '비원어민 영어 화자가 있는 회의에서는 불필요하게 분할하지 마세요', desc: 'Whisper는 더 드문 구문에 대한 더 긴 컨텍스트에서 혜택을 받음. 선택이 있다면 연속된 30분 파일이 세 개의 10분 청크보다 더 잘 받아쓰여집니다.' },
        { title: '긴 회의는 자연스러운 휴식에서 더 잘 분할', desc: '90분 회의를 청크로 분할해야 한다면, 자연스러운 휴식(커피 휴식, 의제 전환)을 찾아 거기서 분할. 문장 중간을 자를 위험 감소.' },
        { title: '짧거나 비정상적인 회의에는 언어를 수동으로 선택', desc: '자동 감지는 첫 오디오 청크를 샘플링. 대기실 음악, 짧은 인사 또는 무음으로 시작하는 회의는 수동 언어 선택이 더 신뢰할 수 있습니다.' },
      ]}}
      faq={[
        { q: '어떤 회의 플랫폼을 지원합니까?', a: '모두. 플랫폼이 아닌 녹화 파일로 작동. Zoom, Microsoft Teams, Google Meet, Webex, Discord, Skype, GoToMeeting, BlueJeans, 대면 음성 레코더. 파일이 MP4, MP3, M4A, WAV, FLAC, OGG 또는 WEBM이면 받아씁니다.' },
        { q: '내 회의가 Zoom(또는 Meet, 또는 Teams)이었습니다. 이 페이지나 플랫폼별 페이지를 사용해야 하나요?', a: '같은 엔진, 같은 정확도. 플랫폼별 페이지는 더 표적화된 팁을 제공. 더 쉬운 것을 사용하세요.' },
        { q: '스피커 레이블을 받을 수 있습니까?', a: '자동으로는 안 됩니다. Whisper는 기본적으로 분리를 하지 않습니다. 구별 가능한 목소리가 있는 회의는 대화에 따라 수동으로 레이블 추가. 스피커당 별도 오디오 트랙이 있는 회의(Riverside, SquadCast, 때때로 Zoom)는 각 트랙을 별도로 받아쓰기.' },
        { q: '내 회의 녹화가 60 MB를 초과합니다. 이제 어떻게?', a: '두 가지 옵션. 비디오에서 오디오만 추출(ffmpeg 명령 하나), 또는 회의를 청크로 분할.' },
        { q: '회의 받아쓰기 정확도는?', a: '깨끗한 오디오(좋은 마이크, 배경 소음 없음): 90-95%. 회의실 마이크나 스피커폰: 80-90%. 이름과 기술 용어는 보통 정리 필요.' },
        { q: '내 회의가 서버에 저장됩니까?', a: '아니요. 파일은 받아쓰기 제공업체로 스트리밍되고 처리 후 폐기. 회의 오디오나 받아쓰기를 데이터베이스에 기록하지 않습니다.' },
        { q: 'Mictoo의 회의 받아쓰기는 GDPR 준수입니까?', a: '사이트를 떠난 후 오디오나 받아쓰기를 보관하지 않습니다. 우리는 유럽에 있고 제공업체(Groq US, OpenAI US)는 DPA가 있습니다. 특정 규정 준수 질문에 대해서는 개인정보 보호 정책을 참조.' },
        { q: '받아쓰기뿐만 아니라 회의 요약을 받을 수 있습니까?', a: '현재는 완전한 받아쓰기를 제공. 요약을 위해서는 "이 회의 받아쓰기를 핵심 결정과 액션 아이템으로 요약하세요" 같은 프롬프트로 ChatGPT나 Claude에 받아쓰기를 붙여넣기.' },
        { q: '어떤 언어가 지원됩니까?', a: '50개 이상, 자동 감지 포함. 5분 미만 회의나 비음성 인트로가 있는 파일은 더 신뢰할 수 있는 결과를 위해 언어를 수동으로 선택.' },
        { q: '회의를 실시간으로 받아쓸 수 있습니까?', a: '아니요. 녹화된 파일로 작동. 실시간에는 회의 플랫폼 자체의 라이브 받아쓰기나 전용 미팅 어시스턴트 사용.' },
        { q: '내 회의 비디오와 정렬된 SRT 파일은 어떻게 받습니까?', a: '받아쓰기 후 SRT 다운로드. 대부분의 비디오 에디터(Premiere, DaVinci, CapCut, Final Cut)는 비디오의 오디오가 받아쓴 것과 일치하는 한 자동 정렬하는 SRT를 가져옵니다.' },
        { q: '기밀 회의를 받아쓸 수 있습니까?', a: '기밀 회의(HR, 법적, M&A, 이사회)에는 우리 것을 포함한 모든 클라우드 받아쓰기 서비스에 주의. 우리 파일은 저장되지 않지만 처리를 위해 제3자 음성 제공업체를 통과. 최대 프라이버시를 위해 대신 로컬 Whisper 설치를 사용하세요.' },
      ]}
      relatedLinks={[
        { href: '/ko/zoom-transcription', label: 'Zoom 받아쓰기', desc: 'Zoom 관련 팁과 내보내기 워크플로우.' },
        { href: '/ko/google-meet-transcription', label: 'Google Meet 받아쓰기', desc: 'Google Meet 녹화용.' },
        { href: '/ko/teams-meeting-transcription', label: 'Teams 받아쓰기', desc: 'Microsoft Teams 녹화용.' },
        { href: '/ko/business-transcription', label: '비즈니스 받아쓰기', desc: '클라이언트 통화, 회의, 영업 통화용.' },
      ]}
    />
  )
}
