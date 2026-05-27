import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/voice-memo-to-text',
  'fr': 'https://mictoo.com/fr/voice-memo-to-text',
  'de': 'https://mictoo.com/de/voice-memo-to-text',
  'es': 'https://mictoo.com/es/voice-memo-to-text',
  'ru': 'https://mictoo.com/ru/voice-memo-to-text',
  'it': 'https://mictoo.com/it/voice-memo-to-text',
  'pt': 'https://mictoo.com/pt/voice-memo-to-text',
  'pl': 'https://mictoo.com/pl/voice-memo-to-text',
  'ja': 'https://mictoo.com/ja/voice-memo-to-text',
  'ko': 'https://mictoo.com/ko/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: '음성 메모를 텍스트로 — iPhone Voice Memos 무료 받아쓰기 | Mictoo',
  description:
    '무료 음성 메모 받아쓰기. iPhone 음성 메모 또는 Android 녹음(M4A, MP3)을 드롭하여 깨끗한 텍스트를 몇 초 만에 받으세요. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/voice-memo-to-text', languages: LANGS },
}

export default function KoVoiceMemoPage() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="iPhone · Android · 무료"
      h1={<>음성 메모를 텍스트로<br /><span className="text-brand-600">무료 음성 메모 받아쓰기</span></>}
      subtitle="음성 메모를 깨끗한 텍스트로 변환. iPhone, Android, 전용 레코더, 모든 음성 파일. 드롭하여 몇 초 만에 받아쓰기. 계정 불필요, 분당 과금 없음."
      howItWorks={[
        { icon: '📱', title: '메모를 컴퓨터로 가져오기(또는 휴대폰에서 업로드)', desc: 'iPhone: 음성 메모 열기, 공유 탭, AirDrop 또는 자신에게 이메일. Android: 파일이나 녹음기 앱 폴더에서 녹음 찾기. 또는 모바일 브라우저로 휴대폰에서 직접 업로드.' },
        { icon: '📂', title: '파일 드롭', desc: 'iPhone의 M4A, Android의 M4A 또는 MP3, 일부 레코더의 WAV. 모두 작동.' },
        { icon: '📋', title: '받아쓰기 받기', desc: '브라우저에서 읽고, 클립보드에 복사 또는 TXT로 다운로드. Notion, Apple Notes, Google Docs 또는 노트가 사는 곳에 붙여넣기.' },
      ]}
      whyUse={{ title: '음성 메모에 Mictoo를 사용하는 이유', bullets: [
        { title: '네이티브 M4A 지원', desc: 'iPhone 음성 메모는 M4A로 저장. M4A를 직접 수락. 변환 불필요.' },
        { title: '무료, 분 카운터 없음', desc: '음성 메모는 "한 번에 하나" 포맷. 2분 아이디어에 분당 지불하는 것은 어리석음. 한도 없는 무료가 사용 사례에 맞음.' },
        { title: '짧은 파일에 빠름', desc: '2분 음성 메모는 약 5초에 받아쓰여집니다. 아이디어 자체를 타이핑하는 것보다 빠름.' },
        { title: '프라이버시', desc: '음성 메모는 종종 개인적. 오디오는 받아쓰기 제공업체로 가서 처리되고 폐기. 보관하지 않습니다.' },
        { title: '모바일 친화적', desc: '브라우저로 휴대폰에서 직접 업로드. iOS와 Android 둘 다 작동.' },
        { title: '자동 감지가 언어 처리', desc: '50개 이상의 언어 중 어느 것이든 음성 메모. 두 언어로 생각하고 메모가 전환되면 유용.' },
      ]}}
      useCases={{ title: '사람들이 음성 메모 받아쓰기를 사용하는 용도', items: [
        { title: '이동 중 아이디어 캡처', desc: '산책 중 생각이 떠올라 휴대폰에 받아 적었습니다. 이제 행동에 옮기고 싶습니다. 받아쓰고 작업 관리자나 노트 앱에 붙여넣기.' },
        { title: '긴 텍스트 받아쓰기', desc: '일부 사람들은 말하면서 에세이, 블로그 게시물 또는 이메일 초안을 작성. 음성 메모를 받아쓰고, 텍스트 편집, 보내기.' },
        { title: '회의 후 액션 아이템', desc: '회의실에서 나오는 길에 자신에게 요약을 받아 적었습니다. 받아쓰고 프로젝트 문서에 붙여넣기.' },
        { title: '기자와 연구자를 위한 현장 노트', desc: '현장에서 관찰과 인용을 캡처. 정리된 노트를 위해 나중에 받아쓰기.' },
        { title: '알림 목록(쇼핑, 짐 싸기, 프로젝트 계획)', desc: '음성 메모가 휴대폰에 타이핑하는 것보다 빠름. 검색 가능하고 편집 가능한 텍스트 버전을 위해 받아쓰기.' },
      ]}}
      proTips={{ title: '음성 메모 받아쓰기 팁', tips: [
        { title: '휴대폰을 가까이, 하지만 너무 가까이는 아님', desc: '입에서 10-15 cm가 스위트 스팟. 더 가까우면 마이크가 파열음과 호흡을 캡처. 더 멀면 시끄러운 환경에서 가독성을 잃음.' },
        { title: '바람이 적', desc: '바람 부는 거리의 10초 음성 메모는 사용할 수 없을 수 있습니다. 가능하면 멈추고 바람에 등을 돌린 다음 녹음. 또는 바람에 강한 마이크가 있는 헤드폰 사용.' },
        { title: '키워드 전에 일시 중지', desc: '이름, 주소 또는 전문 용어를 받아 적을 때 잠시 멈추세요. Whisper는 고유 명사에 빠른 말보다 분리된 단어를 더 잘 처리합니다.' },
        { title: 'iPhone 음성 메모는 기본적으로 무손실 M4A이지만 손실로 전환 가능', desc: '설정, 음성 메모, 오디오 품질. 무손실은 받아쓰기에 과잉. 손실은 정확도 차이 없이 크기의 1/3.' },
        { title: '업로드 전에 시작과 끝의 무음 트리밍', desc: '음성 메모는 가끔 3-5초의 죽은 공기를 캡처. 공유 전에 음성 메모 앱에서 트리밍(편집 탭). 더 작은 파일, 더 빠른 받아쓰기.' },
        { title: '긴 받아쓰기(음성으로 초안 작성)는 5-10분 청크로 분할', desc: '편집하기 쉬움. 잘못되면 단일 청크를 재녹음하기 쉬움.' },
        { title: 'Whisper가 휴대폰의 내장 받아쓰기 기능보다 억양을 더 잘 처리', desc: 'iOS는 내장 받아쓰기가 있지만 영어 우선이고 억양에 약함. Whisper는 더 나은 정확도로 50개 이상의 언어를 커버합니다.' },
      ]}}
      faq={[
        { q: 'Mictoo가 iPhone 음성 메모를 지원합니까?', a: '네. iPhone 음성 메모는 M4A(때로는 ALAC로 무손실)로 저장. M4A는 직접 작동. ALAC는 먼저 WAV 또는 M4A AAC로 변환.' },
        { q: 'iPhone에서 Mictoo로 음성 메모를 어떻게 가져옵니까?', a: '세 가지 옵션. 음성 메모에서 메모를 열고, 공유를 탭하고, Mac으로 AirDrop(가장 빠름) 또는 자신에게 이메일. 또는 iPhone에서 Safari를 사용하여 mictoo.com을 열고 파일 앱에서 직접 업로드.' },
        { q: 'Android 음성 녹음은?', a: 'Android 음성 레코더는 보통 M4A 또는 MP3로 저장. 둘 다 작동. 파일 앱에서 파일을 찾아 PC로 공유 또는 모바일 브라우저에서 업로드.' },
        { q: '휴대폰에서 직접 업로드할 수 있습니까?', a: '네. 사이트는 모바일 친화적. 업로드 영역 탭, 휴대폰의 파일 앱이나 녹음 폴더에서 파일 선택.' },
        { q: '음성 메모는 얼마나 길 수 있습니까?', a: '무료로 파일당 최대 30분, 가입으로 60분. 대부분의 음성 메모는 5분 미만으로, 어느 한도 내에든 잘 맞음.' },
        { q: '음성 메모 받아쓰기 정확도는?', a: '조용한 환경의 명확한 음성: 90-95%. 중얼거리는 음성, 배경 소음(거리, 카페, 자동차)의 경우 정확도가 떨어집니다. 고유 명사는 종종 정리가 필요.' },
        { q: '받아쓰기에 구두점이 포함됩니까?', a: '네. Whisper는 구두점을 자동으로 추가. 받아 적힌 음성(덜 자연스러운 문장 경계가 있음)에 항상 완벽하지는 않지만 그대로 사용 가능.' },
        { q: '비영어로 받아 적는 데 작동합니까?', a: '네, 50개 이상의 언어. 짧은 메모에는 드롭다운에서 수동으로 언어 선택(자동 감지가 신뢰할 수 있으려면 더 많은 오디오 필요).' },
        { q: '내 음성 메모가 저장됩니까?', a: '아니요. 파일은 받아쓰기 제공업체로 가서 처리되고, 그 후 폐기됩니다.' },
        { q: '다운로드 전에 받아쓰기를 편집할 수 있습니까?', a: '네. 내보내기 전에 브라우저에서 잘못된 단어를 수정.' },
        { q: '전화 통화 녹음에 작동합니까?', a: '업로드한 파일을 어떻게 녹음했든 받아씁니다. 통화 녹음 자체는 대부분의 관할권에서 동의가 필요. 녹음 전에 동의를 받으세요.' },
        { q: 'iOS 내장 받아쓰기 기능과의 차이는?', a: 'iOS 받아쓰기는 말하는 동안 실시간, 특정 언어에 제한, 억양에 약함. Mictoo는 녹음 후 받아쓰기, 50개 이상의 언어 지원, 더 정밀한 모델(Whisper large-v3) 사용.' },
      ]}
      relatedLinks={[
        { href: '/ko/m4a-to-text', label: 'M4A를 텍스트로', desc: 'M4A 파일 전용.' },
        { href: '/ko/dictation-to-text', label: '받아쓰기를 텍스트로', desc: '받아 적은 텍스트 초안과 롱폼 음성 글쓰기용.' },
        { href: '/ko/interview-transcription', label: '인터뷰 받아쓰기', desc: '전화로 녹음한 인터뷰용.' },
        { href: '/ko/transcribe-audio-to-text', label: '오디오를 텍스트로', desc: '다른 오디오 포맷용.' },
      ]}
    />
  )
}
