// Mictoo homepage (KO).
//
// Redesigned from a functional single-column layout into a modern SaaS
// homepage with a tool grid, live result preview, audience segmentation,
// comparison table, and a bottom CTA plate. Adapted from the provided
// mockup with the following deliberate changes:
//   - brand palette (brand-blue) instead of the mockup’s default blue
//   - existing SiteHeader / SiteFooter / logo kept (rendered by layout.js)
//   - existing UploadZone kept in full (no functionality simplified)
//   - flat nav in the header (no mega-menu) ,  SiteHeader unchanged
//   - long FAQ (10 questions) preserved for SEO / AI citation
//   - "live preview" is static JSX with brand colors, not a live component
//     (upgrade path: swap for a typing-animation later if needed)
//
// Locale coverage: EN only for now. fr/de/es/ru/it/pt/pl/ja/ko homes still
// use the previous layout; they will be ported via scripts/translate-page.mjs
// once we validate this one in prod.

import Image from 'next/image'
import UploadZone from '@/components/UploadZone'
import HeroChips from '@/components/HeroChips'
import HeroCounter from '@/components/HeroCounter'

// ── Page-level metadata & canonical ─────────────────────────────────────────
export const metadata = {
  alternates: {
    canonical: 'https://mictoo.com/ko',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'ja': 'https://mictoo.com/ja',
      'ko': 'https://mictoo.com/ko',
      'x-default': 'https://mictoo.com',
    },
  },
  title: "무료 AI 오디오 및 비디오 텍스트 전사 ,  Mictoo",
  description: "Mictoo는 무료로 오디오 및 비디오를 텍스트로 전사합니다. 가입이 필요 없습니다. 50개 이상의 언어를 지원합니다.",
}

// ── FAQ data (shared between UI and JSON-LD) ─────────────────────────────────
const FAQ = [
  {
    q: 'Mictoo는 정말 무료인가요?',
    a: '네. Mictoo는 25MB까지의 파일에 대해 완전히 무료입니다. 계정, 신용카드, 숨겨진 수수료가 없습니다. 로그인한 사용자는 파일당 60MB의 더 높은 한도와 하루 7개의 무료 전사를 받을 수 있으며, 여전히 결제가 필요하지 않습니다.',
  },
  {
    q: '전사 정확도는 얼마나 되나요?',
    a: "Mictoo는 OpenAI의 Whisper large-v3를 사용하며, 이는 가장 정확한 오픈 스피치 인식 모델 중 하나입니다. 정확도는 오디오 품질과 억양에 따라 다르지만, 일반적으로 선명한 녹음의 경우 95%를 초과합니다.",
  },
  {
    q: '어떤 언어를 지원하나요?',
    a: "Whisper는 영어, 스페인어, 프랑스어, 독일어, 포르투갈어, 러시아어, 우크라이나어, 일본어, 중국어, 아랍어 등 50개 이상의 언어를 지원합니다. 언어는 자동으로 감지되거나 업로드 양식에서 수동으로 선택할 수 있습니다.",
  },
  {
    q: '내 파일이 귀하의 서버에 저장되나요?',
    a: "아니요. 파일은 전사하기 위해 Groq의 Whisper API(미국 호스팅)로 직접 스트리밍되며, OpenAI의 Whisper API는 자동 백업으로 유지되며 Mictoo의 서버에 저장되지 않습니다. 두 제공자 모두 모델 훈련을 위해 API 오디오를 사용하지 않으며, OpenAI는 남용 모니터링을 위해 최대 30일 동안 데이터를 보관한 후 삭제합니다.",
  },
  {
    q: '최대 파일 크기는 얼마인가요?',
    a: '익명으로는 최대 25MB, 무료 로그인 후 60MB입니다. 등록된 사용자는 최대 180MB의 더 큰 파일을 자동으로 분할하여 단일 전사로 병합합니다.',
  },
  {
    q: 'Mictoo는 어떤 파일 형식을 지원하나요?',
    a: 'Mictoo는 MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, AAC, MOV 및 MPEG을 지원합니다. 오디오 및 비디오 파일 모두 수용되며, 비디오의 경우 서버 측에서 오디오 트랙을 추출합니다.',
  },
  {
    q: '전사하는 데 얼마나 걸리나요?',
    a: '대부분의 파일은 몇 초 안에 완료됩니다. 10분 오디오 파일은 일반적으로 15초에서 30초가 걸리며, 60분 팟캐스트는 약 1분 만에 완료됩니다.',
  },
  {
    q: '생성된 전사를 편집할 수 있나요?',
    a: '네. 전사는 복사하거나 다운로드하기 전에 브라우저에서 완전히 편집할 수 있습니다. 변경 사항을 로컬 세션에 저장하는 데 계정이 필요하지 않습니다.',
  },
  {
    q: '계정을 만들어야 하나요?',
    a: '아니요. 25MB까지의 파일은 계정 없이 전사할 수 있습니다. 무료 계정을 만들면 더 큰 파일(파일당 최대 60MB, 자동 분할을 통해 180MB), 기록, AI 요약, 28개 언어로 번역 및 전사와 채팅할 수 있습니다.',
  },
  {
    q: 'Mictoo는 어떤 기술로 작동하나요?',
    a: "Mictoo는 OpenAI의 Whisper large-v3 모델을 기반으로 하며, Groq에서 속도를 위해 제공되며 OpenAI가 백업으로 사용됩니다. 이는 ChatGPT의 음성 기능과 많은 전문 자막 서비스에 사용되는 동일한 음성 인식 모델입니다.",
  },
]

// ── JSON-LD schemas ──────────────────────────────────────────────────────────
const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Mictoo',
  url: 'https://mictoo.com/ko',
  description:
    'OpenAI Whisper로 구동되는 무료 온라인 오디오 및 비디오 전사 도구입니다. 가입이 필요 없습니다. 50개 이상의 언어를 지원합니다.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  browserRequirements: 'JavaScript가 활성화된 최신 브라우저가 필요합니다.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    '오디오를 텍스트로 전사',
    '비디오를 텍스트로 전사',
    '50개 이상의 언어 지원',
    '계정 필요 없음',
    '무료로 사용',
    '전사의 AI 생성 요약',
    '전사를 28개 언어로 번역',
    '전사와 채팅',
    'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, AAC 지원',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

// ── Small reusable pieces ────────────────────────────────────────────────────

// Trust chip: icon + short label, sits in the hero under the H1.
function TrustChip({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-slate-600 text-sm">
      <span className="w-5 h-5 text-brand-600 flex-shrink-0">{icon}</span>
      <span>{label}</span>
    </div>
  )
}

// SVG icon set used in Trust chips + tool grid + benefit cards + audience row.
// All outline style, 24x24 viewBox, currentColor stroke ,  inherits color from
// the parent `text-brand-*` class.
const Icons = {
  gift: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" /></svg>
  ),
  shield: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 2l9 4v6c0 5-3.9 9.5-9 10-5.1-.5-9-5-9-10V6z" /></svg>
  ),
  globe: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z" /></svg>
  ),
  sparkles: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" /></svg>
  ),
  trending: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>
  ),
  music: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M9 18V5l10-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="16" cy="16" r="3" /></svg>
  ),
  video: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="2" y="6" width="14" height="12" rx="2" /><path d="M22 8l-6 4 6 4z" /></svg>
  ),
  waveform: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M3 12h2M19 12h2M7 8v8M11 5v14M15 8v8" /></svg>
  ),
  users: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  ),
  mic: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8" /></svg>
  ),
  editPen: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4z" /></svg>
  ),
  target: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
  ),
  bolt: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg>
  ),
  lock: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
  ),
  cap: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M2 9l10-5 10 5-10 5L2 9z" /><path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4M22 9v5" /></svg>
  ),
  newspaper: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M4 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z" /><path d="M20 8h2v10a2 2 0 0 1-2 2" /><path d="M8 8h6M8 12h6M8 16h6" /></svg>
  ),
  briefcase: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /></svg>
  ),
  check: (
    <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
  ),
  upload: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3v14m-5-5l5-5 5 5" /><path d="M4 21h16" /></svg>
  ),
  arrowRight: (
    <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
}

// ── Page component ───────────────────────────────────────────────────────────
export default function KoHome() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ────────────────── HERO + UPLOAD ──────────────────
        Single continuous section so the subtle background gradient wraps
        from the H1 all the way down through the Language selector and
        drop zone. Before this change the Language selector was floating
        on plain white with the gray background starting only below it , 
        felt disconnected. Now everything sits inside one soft-slate
        container and the white drop-zone card stands out cleanly against
        the surrounding tone.
      */}
      <section className="bg-gradient-to-b from-brand-50/40 via-slate-100/60 to-slate-100 pt-16 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
            무료 AI 전사 · 가입 필요 없음
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            무료 AI 오디오 및 비디오<br />
            <span className="text-brand-600">텍스트로 전사하기</span>
          </h1>
          <p className="text-lg text-slate-600 mb-7 max-w-2xl mx-auto">
            몇 초 안에 정확한 전사. MP3, MP4, WAV 등을 업로드하세요. 계정이 필요 없습니다.
          </p>

          {/* Trust chips ,  shared component so LandingLayout hero matches
              this one exactly (single source of truth, updates propagate
              site-wide). */}
          <div className="mb-5">
            <HeroChips locale="ko" />
          </div>

          {/* Live counter from /api/stats (Supabase transcripts table).
              Rounded down to the nearest 500 with a + suffix, so it reads
              as a milestone rather than an exact number. Hides itself if
              the API is down or the count is below the visibility
              threshold. See components/HeroCounter.js. */}
          <HeroCounter locale="ko" />
        </div>

        {/* Upload tool sits inside the same section so the background
            wraps the Language selector too. */}
        <div id="tool" className="max-w-2xl mx-auto mt-10 scroll-mt-20">
          <UploadZone defaultLanguage="ko" locale="ko" />
        </div>
      </section>

      {/* ────────────────── TOOL GRID ──────────────────
        Wrapped in the same slate-100 tint as the hero + upload section
        above so the top of the page reads as one cohesive intro block
        (hero + upload + "here are all the tools we have"). The seam
        against the following "How Mictoo works" section (bg-white) is
        where the intro area ends and the deeper content begins.
      */}
      <section className="bg-slate-100 border-b border-slate-200 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">모든 파일을 텍스트로 변환하기</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { href: '/ko/transcribe-mp3-to-text',   label: 'MP3를 텍스트로',        icon: Icons.music },
              { href: '/ko/transcribe-video-to-text', label: '비디오를 텍스트로',      icon: Icons.video },
              { href: '/ko/wav-to-text',              label: 'WAV를 텍스트로',        icon: Icons.waveform },
              { href: '/ko/meeting-transcription',    label: '회의 전사', icon: Icons.users },
              { href: '/ko/podcast-transcription',    label: '팟캐스트 전사', icon: Icons.mic },
              { href: '/ko/voice-memo-to-text',       label: '음성 메모를 텍스트로', icon: Icons.editPen },
            ].map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                className="bg-white border border-slate-200 rounded-2xl p-4 text-center hover:border-brand-400 hover:shadow-sm transition-all group"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50 text-brand-600 mb-3 group-hover:bg-brand-100 transition-colors">
                  <span className="w-6 h-6">{icon}</span>
                </div>
                <div className="text-sm font-semibold text-slate-800 leading-tight">{label}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── HOW MICTOO WORKS ────────────────── */}
      <section id="how-it-works" className="bg-white border-y border-slate-100 py-16 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">Mictoo는 어떻게 작동하나요?</h2>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-10 items-start">
            {/* 3 steps */}
            <ol className="space-y-8">
              {[
                {
                  step: 1,
                  icon: Icons.upload,
                  title: '파일 업로드',
                  desc: '오디오 또는 비디오 파일을 드래그 앤 드롭하거나 선택하세요. MP3, MP4, WAV 등.',
                },
                {
                  step: 2,
                  icon: Icons.sparkles,
                  title: 'AI가 전사합니다',
                  desc: 'Whisper large-v3가 고정밀도와 자동 구두점을 사용하여 음성을 텍스트로 변환합니다.',
                },
                {
                  step: 3,
                  icon: Icons.editPen,
                  title: '검토 및 내보내기',
                  desc: '전사를 편집, 요약, 번역하고 TXT, DOCX, PDF 또는 SRT 형식으로 다운로드하세요.',
                },
              ].map(({ step, icon, title, desc }) => (
                <li key={step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-sm font-semibold flex items-center justify-center">
                    {step}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 text-brand-600">{icon}</span>
                      <h3 className="font-semibold text-slate-900">{title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Product result preview */}
            <Image
              src="/how-mictoo-works-interview.webp"
              alt="Mictoo 전사 작업 공간, 타임스탬프 및 번역 컨트롤이 있는 영어 전사"
              width={1127}
              height={1395}
              sizes="(max-width: 1024px) 100vw, 512px"
              className="w-full max-w-lg h-auto justify-self-center lg:-mt-[72px] rounded-2xl border border-slate-200 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* ────────────────── WHY CHOOSE MICTOO ────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">왜 Mictoo를 선택해야 하나요?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Icons.target,
              title: '높은 정확도',
              desc: 'Whisper large-v3는 억양과 배경 소음이 있어도 정확한 전사를 제공합니다.',
            },
            {
              icon: Icons.bolt,
              title: '빠른 결과',
              desc: '몇 초 안에 전사를 받으세요. 30분 파일은 보통 약 1분 만에 완료됩니다.',
            },
            {
              icon: Icons.lock,
              title: '설계상 비공개',
              desc: '파일은 안전하게 처리되며 절대 서버에 저장되지 않습니다. 오디오에 대한 훈련이 없습니다.',
            },
            {
              icon: Icons.globe,
              title: '50개 이상의 언어',
              desc: '50개 이상의 언어로 전사 및 번역합니다. 자동 감지 또는 언어를 선택하세요.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white border border-slate-200 rounded-2xl p-5">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50 text-brand-600 mb-4">
                <span className="w-6 h-6">{icon}</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── BUILT FOR EVERY VOICE ────────────────── */}
      <section className="bg-white border-y border-slate-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">모든 목소리를 위한 설계</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              {
                href: '/ko/lecture-transcription',
                icon: Icons.cap,
                label: '학생',
                desc: '강의 및 학습 자료를 전사하세요. 학습에 집중하세요.',
              },
              {
                href: '/ko/podcast-transcription',
                icon: Icons.mic,
                label: '팟캐스터',
                desc: '에피소드를 쇼 노트, 블로그 및 소셜 콘텐츠로 변환하세요.',
              },
              {
                href: '/ko/interview-transcription',
                icon: Icons.newspaper,
                label: '기자',
                desc: '인터뷰를 빠르게 전사하고 인용을 쉽게 확인하세요.',
              },
              {
                href: '/ko/meeting-transcription',
                icon: Icons.briefcase,
                label: '팀',
                desc: '회의를 문서화하고 실행 가능한 전사를 공유하세요.',
              },
              {
                href: '/ko/free-srt-generator',
                icon: Icons.video,
                label: '콘텐츠 제작자',
                desc: '오디오 및 비디오를 자막, 기사 등으로 재활용하세요.',
              },
            ].map(({ href, icon, label, desc }) => (
              <a
                key={href}
                href={href}
                className="bg-white border border-slate-200 rounded-2xl p-4 hover:border-brand-400 hover:shadow-sm transition-all group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 text-brand-600 mb-3">
                  <span className="w-5 h-5">{icon}</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1 text-sm">{label}</h3>
                <p className="text-xs text-slate-500 leading-relaxed flex items-start justify-between gap-2">
                  <span>{desc}</span>
                  <span className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-500 transition-colors flex-shrink-0 mt-0.5">{Icons.arrowRight}</span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── UNIFIED COMPARISON TABLE ──────────────────
        Single table where every named competitor gets its own row and
        the whole row is a link to that tool’s /X-alternative page.
        Structure:
          - 4 feature columns: Free / No signup / Summary / Translation
          - Row 1: mictoo (brand-highlighted) with ✓ badges per cell
          - Rows 2-6: Descript / Fireflies / TurboScribe / Otter / Notta
                      each row is clickable → their alternative page
                      Cells use compact honest labels; detailed pricing
                      claims live on the per-tool comparison pages.
        Cell copy stays deliberately conservative on specific numbers so
        the table doesn’t go out of date every time a competitor changes
        their free tier. Real numbers are on each linked page.
      */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">구독 없이 무료 전사</h2>
        <p className="text-slate-600 mb-8 max-w-2xl">
          Mictoo가 사람들이 보통 고려하는 도구와 어떻게 비교되는지. 전체 기능별 비교를 보려면 행을 클릭하세요.
        </p>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-x-auto">
          <table className="w-full text-sm min-w-[820px] border-collapse">
            <thead>
              <tr>
                <th className="text-left px-5 py-4 w-56"></th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">무료</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">가입 필요 없음</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">AI 요약</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">번역</th>
              </tr>
            </thead>
            <tbody>
              {/* Mictoo row ,  brand-highlighted, not clickable (it’s the reference) */}
              <tr className="bg-gradient-to-r from-brand-50 to-brand-50/40">
                <td className="px-5 py-5 border-t border-slate-100 align-middle">
                  <div className="inline-flex items-center gap-2.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="#0284c7" />
                      <path d="M8 8v8M12 6v12M16 10v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <div>
                      <div className="font-bold text-slate-900 leading-tight">mictoo</div>
                      <div className="text-[11px] text-brand-700 font-medium">모두에게 무료</div>
                    </div>
                  </div>
                </td>
                {[
                  { yes: true, label: '사용 무료' },
                  { yes: true, label: '계정 없음' },
                  { yes: true, label: '포함됨' },
                  { yes: true, label: '50개 이상의 언어' },
                ].map(({ label }, i) => (
                  <td key={i} className="text-center px-4 py-5 border-t border-slate-100 align-middle">
                    <div className="inline-flex flex-col items-center gap-1.5">
                      <span className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center">
                        <span className="w-3.5 h-3.5">{Icons.check}</span>
                      </span>
                      <span className="text-[11px] text-slate-600 leading-snug">{label}</span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Competitor rows ,  one per tool, whole row is a link. */}
              {[
                {
                  name: 'Descript',    href: '/ko/descript-alternative',    tag: '편집자 우선 워크플로우',
                  cells: ['제한된 계층',    '가입 필요', '유료 추가 기능',   '제한됨'],
                },
                {
                  name: 'Fireflies',   href: '/ko/fireflies-alternative',   tag: '회의 봇 녹음기',
                  cells: ['제한된 계층',    '가입 필요', '프로 계층',      '제한됨'],
                },
                {
                  name: 'TurboScribe', href: '/ko/turboscribe-alternative', tag: '비공식 전사',
                  cells: ['일일 한도',        '가입 필요', '포함되지 않음',  '제한됨'],
                },
                {
                  name: 'Otter',       href: '/ko/otter-alternative',       tag: '실시간 회의 노트',
                  cells: ['월간 한도',      '가입 필요', '프로 계층',      '제한됨'],
                },
                {
                  name: 'Notta',       href: '/ko/notta-alternative',       tag: '다국어 초점',
                  cells: ['월간 한도',      '가입 필요', '프로 계층',      '광범위함'],
                },
              ].map(({ name, href, tag, cells }) => (
                <tr key={href} className="group hover:bg-slate-50 transition-colors">
                  <td className="border-t border-slate-100 align-middle p-0">
                    <a href={href} className="flex items-center justify-between gap-3 px-5 py-4">
                      <div>
                        <div className="font-semibold text-slate-800">vs {name}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{tag}</div>
                      </div>
                      <span className="w-4 h-4 text-slate-300 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-all">
                        {Icons.arrowRight}
                      </span>
                    </a>
                  </td>
                  {cells.map((label, i) => (
                    <td key={i} className="border-t border-slate-100 align-middle p-0">
                      <a
                        href={href}
                        className="block text-center px-4 py-4 text-xs text-slate-500"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {label}
                      </a>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-400 text-center mt-4">
          스냅샷만 제공됩니다. 가격 페이지는 변경될 수 있으니, 현재 숫자는 링크된 비교를 참조하세요.
        </p>
      </section>

      {/* ────────────────── FAQ ────────────────── */}
      <section id="faq" className="bg-white border-y border-slate-100 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
            자주 묻는 질문
          </h2>
          <div className="space-y-3">
            {FAQ.map(({ q, a }, i) => (
              <details
                key={q}
                className="group border border-slate-200 rounded-xl overflow-hidden bg-white open:shadow-sm"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-3 font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                  <span>{q}</span>
                  <svg
                    className="w-4 h-4 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                  <p>{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── BOTTOM CTA PLATE ──────────────────
        Redesigned: dropped the middle waveform badge (was a third
        waveform on top of the two side accents ,  too repetitive),
        replaced with an AI-sparkles badge, added a trust-chip row
        under the tagline, and made the CTA button larger with a
        right-arrow so it reads as an action, not a static link.
        Softer side-waveform accents so the copy has more contrast.
      */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="relative bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 rounded-3xl overflow-hidden shadow-lg shadow-brand-500/20">
          {/* Subtle radial glow behind the button ,  soft focus, no
              waveform accents (removed per user request; the plate reads
              cleaner without them and the sparkles badge alone carries
              the "AI transcription" cue). */}
          <div className="absolute right-24 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none hidden md:block" />

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 py-10 px-6 md:px-10 text-center md:text-left">
            {/* AI badge ,  sparkles instead of a third waveform */}
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-white flex-shrink-0">
              <span className="w-7 h-7">{Icons.sparkles}</span>
            </div>

            <div className="min-w-0 flex-1 max-w-lg">
              <div className="font-bold text-white text-xl md:text-2xl leading-tight">
                파일을 무료로 전사하세요
              </div>
              <div className="text-sm text-white/85 mt-1.5">
                오디오 또는 비디오를 드롭하고 몇 초 안에 정확한 전사를 받으세요.
              </div>
              {/* Trust chips ,  three reasons to trust the CTA */}
              <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-[11px] text-white/80">
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> 가입 필요 없음
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> 신용카드 필요 없음
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> 50개 이상의 언어
                </span>
              </div>
            </div>

            <a
              href="#tool"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold text-sm md:text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex-shrink-0 group"
            >
              <span>전사 시작하기</span>
              <span className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">{Icons.arrowRight}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}