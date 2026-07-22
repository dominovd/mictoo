// Mictoo homepage (JA).
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
    canonical: 'https://mictoo.com/ja',
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
}

// ── FAQ data (shared between UI and JSON-LD) ─────────────────────────────────
const FAQ = [
  {
    q: 'Mictooは本当に無料ですか？',
    a: 'はい。Mictooは25MBまでのファイルに対して完全に無料です。アカウントもクレジットカードも不要で、隠れた料金もありません。サインインしたユーザーは、ファイルごとに60MBの制限と、1日あたり7回の無料転写が可能ですが、支払いは必要ありません。',
  },
  {
    q: '転写の精度はどれくらいですか？',
    a: 'MictooはOpenAIのWhisper large-v3を使用しており、これは利用可能な最も正確なオープンスピーチ認識モデルの1つです。精度は音声の質やアクセントによりますが、通常、明瞭な録音では95％を超えます。',
  },
  {
    q: 'どの言語がサポートされていますか？',
    a: 'Whisperは英語、スペイン語、フランス語、ドイツ語、ポルトガル語、ロシア語、ウクライナ語、日本語、中国語、アラビア語など50以上の言語をサポートしています。言語は自動的に検出されるか、アップロードフォームで手動で選択できます。',
  },
  {
    q: '私のファイルはあなたのサーバーに保存されますか？',
    a: 'いいえ。ファイルは直接GroqのWhisper API（米国ホスティング）にストリーミングされ、OpenAIのWhisper APIは自動的なフォールバックとして保持され、Mictooのサーバーには保存されません。どちらのプロバイダーもAPIオーディオをモデルのトレーニングに使用せず、OpenAIは最大30日間の不正監視のためにデータを保持した後に削除します。',
  },
  {
    q: '最大ファイルサイズはどれくらいですか？',
    a: '匿名で最大25MB、無料サインイン後は60MBです。180MBまでの大きなファイルは自動的に分割され、登録ユーザーのために1つの転写にマージされます。',
  },
  {
    q: 'Mictooはどのファイル形式をサポートしていますか？',
    a: 'MictooはMP3、MP4、WAV、M4A、OGG、WEBM、FLAC、AAC、MOV、MPEGをサポートしています。音声と動画の両方のファイルが受け入れられます。動画の場合、サーバー側でオーディオトラックを抽出します。',
  },
  {
    q: '転写にはどれくらいの時間がかかりますか？',
    a: 'ほとんどのファイルは数秒で完了します。10分の音声ファイルは通常15〜30秒で、60分のポッドキャストは約1分で完了します。',
  },
  {
    q: '生成された転写を編集できますか？',
    a: 'はい。転写はブラウザ内で完全に編集可能で、コピーまたはダウンロードする前に変更を保存できます。ローカルセッションに変更を保存するためにアカウントは必要ありません。',
  },
  {
    q: 'アカウントを作成する必要がありますか？',
    a: 'いいえ。25MBまでのファイルについては、アカウントなしで転写できます。無料アカウントを作成すると、より大きなファイル（ファイルごとに最大60MB、180MBは自動分割）、履歴、AI要約、28言語への翻訳、転写とのチャットが利用可能になります。',
  },
  {
    q: 'Mictooはどの技術を使用していますか？',
    a: 'MictooはOpenAIのWhisper large-v3モデルを基に構築されており、速度のためにGroqが提供し、OpenAIがフォールバックとして機能します。これはChatGPTの音声機能や多くのプロフェッショナルキャプションサービスを支える同じスピーチ認識モデルです。',
  },
]

// ── JSON-LD schemas ──────────────────────────────────────────────────────────
const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Mictoo',
  url: 'https://mictoo.com/ja',
  description:
    'OpenAI Whisperによる無料のオンライン音声および動画転写ツール。サインアップは不要です。50以上の言語をサポートしています。',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  browserRequirements: 'JavaScriptが有効な最新のブラウザが必要です。',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    '音声をテキストに転写',
    '動画をテキストに転写',
    '50以上の言語をサポート',
    'アカウント不要',
    '無料で使用可能',
    '転写のAI生成要約',
    '転写を28言語に翻訳',
    '転写とチャット',
    'MP3、MP4、WAV、M4A、OGG、WEBM、FLAC、AACをサポート',
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
export default function JaHome() {
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
            無料のAI転写 · サインアップ不要
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            無料のAI音声＆動画<br />
            <span className="text-brand-600">テキストへの転写</span>
          </h1>
          <p className="text-lg text-slate-600 mb-7 max-w-2xl mx-auto">
            正確な転写を数秒で。MP3、MP4、WAVなどをアップロード。アカウント不要です。
          </p>

          {/* Trust chips ,  shared component so LandingLayout hero matches
              this one exactly (single source of truth, updates propagate
              site-wide). */}
          <div className="mb-5">
            <HeroChips locale="ja" />
          </div>

          {/* Live counter from /api/stats (Supabase transcripts table).
              Rounded down to the nearest 500 with a + suffix, so it reads
              as a milestone rather than an exact number. Hides itself if
              the API is down or the count is below the visibility
              threshold. See components/HeroCounter.js. */}
          <HeroCounter locale="ja" />
        </div>

        {/* Upload tool sits inside the same section so the background
            wraps the Language selector too. */}
        <div id="tool" className="max-w-2xl mx-auto mt-10 scroll-mt-20">
          <UploadZone defaultLanguage="ja" locale="ja" />
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
          <h2 className="text-2xl font-bold text-slate-900 mb-8">任意のファイルをテキストに変換</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { href: '/ja/transcribe-mp3-to-text',   label: 'MP3をテキストに',        icon: Icons.music },
              { href: '/ja/transcribe-video-to-text', label: '動画をテキストに',      icon: Icons.video },
              { href: '/ja/wav-to-text',              label: 'WAVをテキストに',        icon: Icons.waveform },
              { href: '/ja/meeting-transcription',    label: '会議の転写', icon: Icons.users },
              { href: '/ja/podcast-transcription',    label: 'ポッドキャストの転写', icon: Icons.mic },
              { href: '/ja/voice-memo-to-text',       label: 'ボイスメモをテキストに', icon: Icons.editPen },
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
          <h2 className="text-2xl font-bold text-slate-900 mb-10">Mictooの仕組み</h2>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-10 items-start">
            {/* 3 steps */}
            <ol className="space-y-8">
              {[
                {
                  step: 1,
                  icon: Icons.upload,
                  title: 'ファイルをアップロード',
                  desc: '音声または動画ファイルをドラッグ＆ドロップまたは選択します。MP3、MP4、WAVなど。',
                },
                {
                  step: 2,
                  icon: Icons.sparkles,
                  title: 'AIが転写します',
                  desc: 'Whisper large-v3が高精度で音声をテキストに変換し、自動的に句読点を付けます。',
                },
                {
                  step: 3,
                  icon: Icons.editPen,
                  title: '確認してエクスポート',
                  desc: '転写を編集、要約、翻訳し、TXT、DOCX、PDF、またはSRTとしてダウンロードします。',
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
              alt="Mictooの転写作業スペース、タイムスタンプと翻訳コントロールを含む英語の転写を表示"
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
        <h2 className="text-2xl font-bold text-slate-900 mb-8">なぜMictooを選ぶのか？</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Icons.target,
              title: '高精度',
              desc: 'Whisper large-v3は、アクセントやバックグラウンドノイズがあっても正確な転写を提供します。',
            },
            {
              icon: Icons.bolt,
              title: '迅速な結果',
              desc: '数時間ではなく、数秒で転写を取得します。30分のファイルは通常約1分で完了します。',
            },
            {
              icon: Icons.lock,
              title: '設計上のプライバシー',
              desc: 'ファイルは安全に処理され、私たちのサーバーに保存されることはありません。あなたの音声でのトレーニングは行いません。',
            },
            {
              icon: Icons.globe,
              title: '50以上の言語',
              desc: '50以上の言語で転写と翻訳が可能です。自動検出または言語を選択できます。',
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
          <h2 className="text-2xl font-bold text-slate-900 mb-8">すべての声のために構築されています</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              {
                href: '/ja/lecture-transcription',
                icon: Icons.cap,
                label: '学生',
                desc: '講義や学習資料を転写します。学習に集中しましょう。',
              },
              {
                href: '/ja/podcast-transcription',
                icon: Icons.mic,
                label: 'ポッドキャスター',
                desc: 'エピソードをショーノート、ブログ、ソーシャルコンテンツに変換します。',
              },
              {
                href: '/ja/interview-transcription',
                icon: Icons.newspaper,
                label: 'ジャーナリスト',
                desc: 'インタビューを迅速に転写し、引用を簡単に確認します。',
              },
              {
                href: '/ja/meeting-transcription',
                icon: Icons.briefcase,
                label: 'チーム',
                desc: '会議を文書化し、実行可能な転写を共有します。',
              },
              {
                href: '/ja/free-srt-generator',
                icon: Icons.video,
                label: 'コンテンツクリエイター',
                desc: '音声や動画をキャプション、記事などに再利用します。',
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
        <h2 className="text-2xl font-bold text-slate-900 mb-3">サブスクリプションなしで無料転写</h2>
        <p className="text-slate-600 mb-8 max-w-2xl">
          Mictooが人々が通常考えるツールとどのように比較されるか。完全な機能比較のために任意の行をクリックしてください。
        </p>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-x-auto">
          <table className="w-full text-sm min-w-[820px] border-collapse">
            <thead>
              <tr>
                <th className="text-left px-5 py-4 w-56"></th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">無料</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">サインアップ不要</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">AI要約</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">翻訳</th>
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
                      <div className="text-[11px] text-brand-700 font-medium">誰でも無料</div>
                    </div>
                  </div>
                </td>
                {[
                  { yes: true, label: '使用無料' },
                  { yes: true, label: 'アカウント不要' },
                  { yes: true, label: '含まれている' },
                  { yes: true, label: '50以上の言語' },
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
                  name: 'Descript',    href: '/ja/descript-alternative',    tag: 'エディター優先のワークフロー',
                  cells: ['制限付きプラン',    'サインアップが必要', '有料オプション',   '制限あり'],
                },
                {
                  name: 'Fireflies',   href: '/ja/fireflies-alternative',   tag: '会議ボットレコーダー',
                  cells: ['制限付きプラン',    'サインアップが必要', 'プロプラン',      '制限あり'],
                },
                {
                  name: 'TurboScribe', href: '/ja/turboscribe-alternative', tag: 'カジュアル転写',
                  cells: ['デイリー制限',        'サインアップが必要', '含まれていない',  '制限あり'],
                },
                {
                  name: 'Otter',       href: '/ja/otter-alternative',       tag: 'ライブ会議ノート',
                  cells: ['月間制限',      'サインアップが必要', 'プロプラン',      '制限あり'],
                },
                {
                  name: 'Notta',       href: '/ja/notta-alternative',       tag: '多言語フォーカス',
                  cells: ['月間制限',      'サインアップが必要', 'プロプラン',      '広範囲'],
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
          スナップショットのみ。価格ページは変更される可能性があります。最新の数字についてはリンクされた比較を参照してください。
        </p>
      </section>

      {/* ────────────────── FAQ ────────────────── */}
      <section id="faq" className="bg-white border-y border-slate-100 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
            よくある質問
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
                ファイルを無料で転写
              </div>
              <div className="text-sm text-white/85 mt-1.5">
                音声または動画をドロップして、数秒で正確な転写を取得します。
              </div>
              {/* Trust chips ,  three reasons to trust the CTA */}
              <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-[11px] text-white/80">
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> サインアップ不要
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> クレジットカード不要
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> 50以上の言語
                </span>
              </div>
            </div>

            <a
              href="#tool"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold text-sm md:text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex-shrink-0 group"
            >
              <span>転写を開始</span>
              <span className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">{Icons.arrowRight}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}