import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
  'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
  'ko': 'https://mictoo.com/ko/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Microsoft Teams 받아쓰기 — 회의 받아쓰기 | Mictoo',
  description:
    '무료 Microsoft Teams 받아쓰기. OneDrive 또는 SharePoint에서 녹화(MP4)를 업로드하여 깨끗한 AI 받아쓰기를 몇 초 만에 받으세요. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/teams-meeting-transcription', languages: LANGS },
}

export default function KoTeamsPage() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="TEAMS · ONEDRIVE · 무료"
      h1={<>Microsoft Teams 받아쓰기<br /><span className="text-brand-600">무료 Teams 회의 받아쓰기</span></>}
      subtitle="Teams 녹화를 깨끗한 텍스트로 변환. OneDrive 또는 SharePoint에서 MP4를 드롭하면 몇 초 만에 받아쓰기. 가입 불필요, 분당 과금 없음."
      howItWorks={[
        { icon: '☁️', title: 'OneDrive 또는 SharePoint에서 다운로드', desc: 'Teams 녹화는 주최자의 OneDrive(채널 외 회의) 또는 SharePoint 사이트(채널 회의)에 저장. MP4로 다운로드. 긴 회의는 먼저 오디오 추출.' },
        { icon: '⚡', title: '파일 드롭', desc: 'MP4에서 오디오를 추출하여 Whisper large-v3로 보냅니다. 30분 회의는 약 1분에 완료.' },
        { icon: '📋', title: '받아쓰기 받기', desc: '브라우저에서 읽고, 복사하거나 TXT 또는 SRT로 다운로드. 내보내기 전에 잘못된 이름이나 기술 용어를 인라인으로 수정.' },
      ]}
      whyUse={{ title: 'Teams 회의에 Mictoo를 사용하는 이유', bullets: [
        { title: '받아쓰기용 특정 Microsoft 365 라이선스 항목 없이 작동', desc: '녹화 파일이 있으면 여기서 받아쓰기 가능. Teams Premium이나 특정 Office 계획 필요 없음.' },
        { title: '더 강한 비영어와 억양 커버리지', desc: 'Microsoft Teams 받아쓰기는 영어와 주요 서유럽 언어에서 잘 작동. Whisper large-v3는 50개 이상의 언어를 다루고 억양과 이중 언어 대화에서 더 강한 처리.' },
        { title: '무료, 분 카운터 없음', desc: 'Teams 받아쓰기는 라이선스에 내장되어 있지만 기능 게이트에 의해 제한. Mictoo는 회의 한도나 월별 분 제한이 없습니다.' },
        { title: '비디오 에디터용 SRT 내보내기', desc: 'Teams 받아쓰기는 Teams 앱에 살거나 VTT로 다운로드. 우리는 둘 다 내보냅니다, TXT와 깨끗한 SRT, Premiere, DaVinci, CapCut, YouTube Studio와 드롭인 호환.' },
        { title: '기본 프라이버시', desc: '파일은 받아쓰기 제공업체로 스트리밍되고 처리되고 폐기. 회의 오디오를 보관하지 않습니다.' },
      ]}}
      useCases={{ title: '사람들이 Teams 회의를 받아쓰는 용도', items: [
        { title: '프로젝트 회의 의사록', desc: 'Confluence, Notion 또는 SharePoint 페이지에 받아쓰기 붙여넣기. 회의를 놓친 사람은 60분 비디오 시청 대신 5분에 텍스트를 읽습니다.' },
        { title: '계정 팀을 위한 클라이언트 통화 검토', desc: 'Salesforce, Dynamics, HubSpot의 거래 옆에 받아쓰기 저장. 후속 이메일을 위한 인용 검색이 몇 초.' },
        { title: '교차 기능 결정 로그', desc: 'Teams 통화의 큰 결정이 받아쓰기에 요약. 거버넌스와 감사 추적에 유용.' },
        { title: '벤더와 계약자 통화', desc: '프로젝트가 외부 당사자를 포함할 때, 받아쓰기는 동의된 내용의 명확한 기록.' },
        { title: '규정 준수와 규제 산업', desc: '일부 산업은 특정 대화의 기록이 필요. 받아쓰기는 오디오 녹음을 검색 가능하고 인덱싱 가능하게 합니다.' },
      ]}}
      proTips={{ title: 'Teams 받아쓰기 팁', tips: [
        { title: '업로드 전에 MP4에서 오디오 추출', desc: 'Teams MP4는 720p 또는 1080p 비디오로, 받아쓰기와 무관. 오디오만 가져오기: ffmpeg -i teams.mp4 -vn -ac 1 -b:a 64k teams.mp3. 1.5 GB MP4가 30 MB 이하로 축소.' },
        { title: 'OneDrive 또는 SharePoint에서 다운로드, 스트리밍 안 함', desc: 'OneDrive는 가끔 브라우저에서 MP4를 재생. 여기에 업로드하기 전에 실제로 파일을 다운로드했는지 확인. SharePoint 공유 링크는 파일 자체와 같지 않습니다.' },
        { title: '60분 초과 회의는 업로드 전에 분할', desc: '30분 또는 45분 청크로 자르세요. 받아쓰기는 재결합 가능. 긴 Teams 통화는 일반적이고 신중하게 다룰 가치가 있습니다.' },
        { title: '가능하면 회의 중 백그라운드 알림 음소거', desc: '통화 중 Outlook 데스크톱 알림과 Teams 채팅 소리는 오디오에 도착하고 가끔 받아쓰기에도. Windows의 Focus Assist나 Mac의 "방해 금지"를 사용.' },
        { title: '회의실 마이크는 정리 필요', desc: '천장 마이크가 있는 Teams Rooms는 오디오 품질이 가변적. 에코와 원거리 녹음은 정확도를 손상시킴. Adobe Podcast Enhance(무료 웹)가 이 녹음에 업로드 전 도움이 됩니다.' },
        { title: '기밀 회의는 외부에 업로드하지 마세요', desc: '우리에게도. HR, 법적 또는 이사회 대화에는 온프레미스 받아쓰기를 선호. 우리 서비스는 클라우드 AI 처리가 허용되는 비기밀 회의용.' },
      ]}}
      faq={[
        { q: 'Mictoo가 Microsoft Teams 녹화에서 작동합니까?', a: '네. OneDrive(채널 외 회의의 주최자 OneDrive) 또는 채널 SharePoint 사이트에서 MP4를 다운로드. 여기에 업로드. 오디오 추출을 먼저 하면 긴 회의가 빨라집니다.' },
        { q: 'Teams Premium이나 특정 Microsoft 365 계획이 필요합니까?', a: '회의를 녹화하게 하는 계획이 필요. 녹화가 OneDrive나 SharePoint에 있으면 라이선스에 관계없이 여기서 받아쓰기가 무료.' },
        { q: '내 녹화가 Microsoft로 돌아갑니까?', a: '아니요. 파일은 받아쓰기 제공업체(Groq, 백업으로 OpenAI)로 가서 처리 후 폐기. Microsoft, Outlook 또는 Microsoft 서비스로 아무것도 돌아가지 않습니다.' },
        { q: 'Teams 내장 받아쓰기와 비교하면?', a: 'Teams 받아쓰기는 라이선스에 포함되어 있다면 영어 회의에 괜찮. 우리 것은 무료이고, 더 많은 언어와 억양에서 작동하며, 비디오 에디터용 깨끗한 SRT를 내보냄. 회의에 맞는 것을 사용하세요.' },
        { q: '내 Teams 녹화가 60 MB를 초과합니다. 이제 어떻게?', a: 'ffmpeg나 오디오 도구로 오디오만 추출. 1.5 GB Teams MP4는 오디오로 30 MB 미만. 오디오가 여전히 60 MB 초과면 청크로 분할.' },
        { q: '스피커 레이블을 받을 수 있습니까?', a: '자동으로는 안 됩니다. 구별 가능한 목소리가 있는 회의는 대화에 따라 수동으로 레이블을 추가할 수 있습니다. 스피커당 별도 오디오 트랙으로 녹화된 회의(Teams에서 드물음)는 깨끗한 귀속을 위해 각 트랙을 별도로 업로드.' },
        { q: 'Teams 채팅 메시지에서 작동합니까?', a: '아니요. 채팅 메시지는 Teams에 남음. 오디오만 받아쓰기. 둘 다 필요하면 직접 결합.' },
        { q: 'Teams 받아쓰기 정확도는?', a: '좋은 마이크의 회의(USB 헤드셋의 노트북): 90-95%. 천장 마이크의 회의실 회의: 80-90%. 이름, 기술 용어, 약어는 보통 정리 필요.' },
        { q: 'Teams 회의를 실시간으로 받아쓸 수 있습니까?', a: '아니요. 녹화된 파일로 작동. 회의 중 실시간에는 Teams 자체 라이브 자막이나 Transcript 기능 사용.' },
        { q: '어떤 언어를 지원합니까?', a: '자동 감지로 50개 이상의 언어. 5분 미만 회의나 비음성 인트로(대기실 음악, 홀드 톤)가 있는 파일은 언어를 수동으로 선택.' },
        { q: '받아쓰기를 Word 문서나 OneDrive로 내보낼 수 있습니까?', a: '일반 텍스트(TXT)와 SRT를 내보냅니다. Word에 복사 붙여넣기, 또는 TXT를 직접 OneDrive에 업로드. Microsoft 365 통합은 아직 없습니다.' },
        { q: '유럽의 Teams 회의에 GDPR 준수입니까?', a: '사이트를 떠난 후 서버에 오디오나 받아쓰기를 보관하지 않습니다. 우리는 유럽에 있고 제공업체(Groq US, OpenAI US)는 DPA에 서명. 특정 규정 준수 질문에 대해서는 개인정보 보호 정책을 참조하거나 info@mictoo.com에 쓰세요.' },
      ]}
      relatedLinks={[
        { href: '/ko/zoom-transcription', label: 'Zoom 받아쓰기', desc: 'Zoom Cloud 또는 로컬 녹화용.' },
        { href: '/ko/google-meet-transcription', label: 'Google Meet 받아쓰기', desc: 'Google Meet 녹화용.' },
        { href: '/ko/meeting-transcription', label: '회의 받아쓰기', desc: '다른 플랫폼 녹화용.' },
        { href: '/ko/business-transcription', label: '비즈니스 받아쓰기', desc: '영업 통화, 인터뷰, 기타 비즈니스 오디오용.' },
      ]}
    />
  )
}
