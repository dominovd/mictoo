import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'it': 'https://mictoo.com/it/lecture-transcription',
  'pt': 'https://mictoo.com/pt/lecture-transcription',
  'pl': 'https://mictoo.com/pl/lecture-transcription',
  'ja': 'https://mictoo.com/ja/lecture-transcription',
  'ko': 'https://mictoo.com/ko/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: '강의 받아쓰기 — 무료 AI 생성기 | Mictoo',
  description:
    '무료 강의 받아쓰기. 강의, 코스 또는 세미나 녹화(MP3, M4A, MP4)를 업로드하여 깨끗한 텍스트를 몇 초 만에 받으세요. 학생용.',
  alternates: { canonical: 'https://mictoo.com/ko/lecture-transcription', languages: LANGS },

  openGraph: {
    title: "강의 받아쓰기 — 무료 AI 생성기 | Mictoo",
    description: "무료 강의 받아쓰기. 강의, 코스 또는 세미나 녹화(MP3, M4A, MP4)를 업로드하여 깨끗한 텍스트를 몇 초 만에 받으세요. 학생용.",
    url: "https://mictoo.com/ko/lecture-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "강의 받아쓰기 — 무료 AI 생성기 | Mictoo",
    description: "무료 강의 받아쓰기. 강의, 코스 또는 세미나 녹화(MP3, M4A, MP4)를 업로드하여 깨끗한 텍스트를 몇 초 만에 받으세요. 학생용.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoLecturePage() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="학생 · 학술 · 무료"
      h1={<>강의 받아쓰기<br /><span className="text-brand-600">무료 강의 받아쓰기 도구</span></>}
      subtitle="모든 녹화된 강의를 공부용 깨끗한 텍스트로 변환. 대학, 온라인 코스, 컨퍼런스 톡, 전문 교육. 계정 불필요, 분당 과금 없음."
      howItWorks={[
        { icon: '🎓', title: '강의 오디오 또는 비디오 드롭', desc: '음성 레코더의 MP3, 휴대폰의 M4A, Zoom 강의 또는 온라인 강의의 화면 녹화 MP4, 필드 레코더의 WAV. 모두 작동.' },
        { icon: '⚡', title: 'AI가 받아쓰기', desc: 'Whisper large-v3가 오디오를 읽습니다. 60분 강의는 약 1분에 완료.' },
        { icon: '📋', title: '받아쓰기 받기', desc: '읽고, 노트에 복사하거나 TXT 또는 SRT로 다운로드. 내보내기 전에 잘못된 전문 용어를 인라인으로 수정.' },
      ]}
      whyUse={{ title: '강의에 Mictoo를 사용하는 이유', bullets: [
        { title: '롱폼 OK', desc: '무료 가입 후 파일당 최대 60분. 90분 강의는 45분 청크 2개로 분할. 받아쓰기는 재조립 가능.' },
        { title: '전문 어휘를 대부분보다 잘 처리', desc: 'Whisper는 학술 강의를 포함한 방대한 다양성의 오디오에서 훈련되었습니다. 라틴어, 전문 용어, 수학 용어, 코드 스니펫이 종종 예상보다 깨끗하게 나옵니다.' },
        { title: '강의당 비용 없음', desc: '학생에게는 코스당 받아쓰기 비용을 지불하는 것이 낭비. 분 카운터 없는 무료는 학기의 모든 강의를 받아쓸 수 있음을 의미.' },
        { title: '프라이버시와 저작권', desc: '파일은 받아쓰기 제공업체로 스트리밍되고 폐기. 오디오를 보관하지 않습니다. 당신의 것(당신의 녹화)을 받아쓰지만 제3자 스토리지 서비스에 업로드하고 싶지 않을 때 유용.' },
        { title: '50개 이상의 언어', desc: '국제 학생과 비영어 온라인 코스가 모두 작동. 자동 감지가 대부분의 케이스를 커버.' },
      ]}}
      useCases={{ title: '학생과 학자가 강의 받아쓰기를 사용하는 용도', items: [
        { title: '검색 가능한 학습 노트', desc: '받아쓰기를 Notion, Obsidian 또는 Word 문서에 드롭. 교수가 언급한 모든 용어에 Ctrl+F. 90분 오디오를 스크럽하는 것보다 좋음.' },
        { title: '시험 준비', desc: '손글씨 노트를 검토하면서 받아쓰기를 훑어보기. 라이브 강의 중 놓친 것을 잡습니다.' },
        { title: '비원어민용 강의 번역', desc: '원본 언어로 받아쓰고 DeepL이나 ChatGPT로 번역. 제2언어로 코스를 듣는 학생에게 유용.' },
        { title: '청각 장애와 난청 학생의 접근성', desc: '받아쓰기나 SRT 파일은 다른 양식으로 같은 콘텐츠를 제공. 일부 대학에서는 녹화된 코스 콘텐츠에 이를 요구.' },
        { title: '플래시카드와 학습 자료 만들기', desc: '받아쓰기는 Anki 카드, 요약 문서 또는 AI 지원 학습 도구에 공급.' },
      ]}}
      proTips={{ title: '강의 받아쓰기 팁', tips: [
        { title: '대면 강의에서는 교수 가까이 앉기', desc: '뒷줄에서 방 소음을 통해 녹음하면 많은 갭이 있는 받아쓰기를 생성. 앞줄의 휴대폰, 화면 아래로 향하면 깨끗한 음성을 캡처.' },
        { title: '긴 강의에는 전용 음성 레코더 사용', desc: '휴대폰 녹음은 공격적인 자동 레벨링과 노이즈 감소가 있어 받아쓰기를 손상. Zoom H1n이나 유사한 입문 레코더가 80달러에 눈에 띄게 깨끗한 오디오 제공.' },
        { title: '온라인 강의에는 시스템 오디오를 직접 녹음', desc: 'Windows나 Mac의 OBS Studio는 시스템에서 직접 강의 오디오를 녹음 가능. 노트북 마이크로 녹음하는 것보다 깨끗합니다.' },
        { title: '언어를 수동으로 설정', desc: '자동 감지는 보통 맞지만 다른 언어의 교수 워밍업에 혼란될 수 있습니다. 드롭다운에서 명시적으로 강의 언어 선택.' },
        { title: '관리 공지사항이면 처음 5분 잘라내기', desc: '"숙제 했나요? 3장을 읽었나요?"는 받아쓰기에 유용하지 않습니다. 파일 크기 예산을 절약하기 위해 업로드 전에 Audacity에서 잘라내기.' },
        { title: '방정식이 있는 STEM 강의에서는 받아쓰기가 말한 수학을 캡처, 방정식이 아님', desc: '칠판의 수학 표현은 오디오에 없으므로 받아쓰기에도 없음. 시각적 부분을 위해 별도로 캡처해야 합니다(칠판 사진, 슬라이드 스크린샷).' },
        { title: '첫 검토 시 받아쓰기를 읽으면서 녹화를 다시 듣기', desc: '교수 특정 용어와 방정식 참조를 수정하는 최고의 방법. 한 번 정리되면 받아쓰기가 독립적으로 섭니다.' },
      ]}}
      faq={[
        { q: '대학 수업 과제에 충분히 정확한가요?', a: '대부분의 강의 콘텐츠에는 네. Whisper large-v3는 깨끗한 강의 오디오에서 90-95% 정확도를 생성. 전문 용어와 고유 명사는 종종 정리가 필요. 받아쓰기를 학습 노트로 사용, 인용을 위한 표준 소스로는 아님.' },
        { q: '내 강의가 영어가 아닙니다. 작동합니까?', a: '네. Whisper는 주요 언어에서 좋은 정확도, 많은 다른 언어에 기본 지원으로 50개 이상의 언어를 지원. 최상의 결과를 위해 드롭다운에서 수동으로 언어 선택.' },
        { q: '내 강의가 90분입니다. 어떻게 해야?', a: '분할. 우리 한도는 파일당 60분. 자연스러운 휴식 지점(점심 휴식이나 주제 전환)에서 45분 청크 2개로 자르세요.' },
        { q: '강의를 받아쓰는 것이 합법적입니까?', a: '대부분의 관할권에서 녹음에 합법적 액세스가 있는 한 개인 학습 사용에는 일반적으로 네. 재배포(받아쓰기를 온라인 게시, 학습 자료 판매)에는 강사나 기관의 허가가 필요. 일부 대학은 강의 녹음과 받아쓰기에 명시적 정책이 있습니다. 본인 것을 확인하세요.' },
        { q: 'Coursera, edX 또는 Khan Academy의 비디오 강의를 받아쓸 수 있습니까?', a: '비디오 파일을 다운로드할 수 있다면, 네. 일부 플랫폼은 오프라인 보기를 위한 다운로드를 허용(MP4를 받음). 여기에 업로드. 다운로드를 허용하지 않는 플랫폼에는 스크래핑 전에 약관을 확인.' },
        { q: '받아쓰기에 슬라이드 콘텐츠가 포함됩니까?', a: '아니요. 오디오만 받아쓰기. 교수가 슬라이드를 소리내어 읽으면 그 텍스트가 받아쓰기에 있습니다. 슬라이드에 교수가 읽지 않은 화면 텍스트가 있으면 받아쓰기에 없습니다. 완전한 노트를 위해 슬라이드 스크린샷과 결합.' },
        { q: '전문 용어와 전문 용어는 얼마나 정확합니까?', a: '일반 어휘보다 덜 정확. 라틴어 의학 용어, 고급 수학 기호, 틈새 약어는 수동으로 수정할 것으로 예상. 강의의 일반적 흐름은 단단할 것입니다.' },
        { q: '받아쓰기를 노트 앱으로 내보낼 수 있습니까?', a: '네. TXT로 다운로드하여 Notion, Obsidian, OneNote, Bear 또는 모든 텍스트 친화 도구에 붙여넣기. 녹화 옆에 자막이 원하면 비디오 플레이어에서 SRT가 작동.' },
        { q: '내 강의 오디오가 저장됩니까?', a: '아니요. 파일은 받아쓰기 제공업체로 가서 처리되고 폐기됩니다. 오디오를 보관하지 않습니다.' },
        { q: '강의 받아쓰기는 얼마나 걸립니까?', a: '오디오 길이의 약 1-2%. 60분 강의는 약 60초에 완료. 업로드가 보통 더 긴 대기.' },
        { q: '특정 순간으로 점프하기 위한 타임코드를 받을 수 있습니까?', a: '네. SRT로 다운로드. 각 줄에 원본 오디오와 정렬된 타임코드가 있습니다. 시험 준비 중 특정 지점으로 돌아가는 데 유용.' },
        { q: '강의 끝에 Q&A가 있다면?', a: 'Q&A는 메인 강의와 같이 받아쓰여집니다. 청중 질문은 가끔 덜 명확하게 옵니다(청중은 보통 마이크에서 더 멀리 있음), 하지만 교수의 답변은 깨끗해야 합니다. 노트에 "Q&A" 섹션을 추가.' },
      ]}
      relatedLinks={[
        { href: '/ko/transcribe-audio-to-text', label: '오디오를 텍스트로', desc: '일반 오디오 파일용.' },
        { href: '/ko/transcribe-video-to-text', label: '비디오를 텍스트로', desc: '비디오 강의(MP4, MOV)용.' },
        { href: '/ko/timestamped-transcription', label: '타임코드 받아쓰기', desc: '특정 순간으로 점프하기 위해.' },
        { href: '/ko/how-to-split-audio', label: '오디오 분할', desc: '60분 초과 강의용.' },
      ]}
    />
  )
}
