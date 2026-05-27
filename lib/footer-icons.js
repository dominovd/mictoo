// Inline SVG icons for the site footer.
//
// Kept as a single component with a `name` switch because:
// (a) we ship one tiny module instead of dozens of imports,
// (b) all icons share the same stroke/size discipline, so a global tweak
//     happens in one place,
// (c) the footer renders 70+ links — one centralized component keeps the
//     React tree light.
//
// All icons are 16×16, stroke 1.5, currentColor — so they pick up the
// text color of the link and animate cleanly on hover.

const PATHS = {
  // ── microphone / mic — for transcription use cases ────────────────────────
  mic: (
    <>
      <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z" />
      <path d="M19 10v2a7 7 0 01-14 0v-2" />
      <path d="M12 19v3" />
    </>
  ),
  // ── interview (chat bubbles) ─────────────────────────────────────────────
  chat: (
    <>
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </>
  ),
  // ── headphones / podcast ─────────────────────────────────────────────────
  headphones: (
    <>
      <path d="M3 18v-6a9 9 0 0118 0v6" />
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
    </>
  ),
  // ── graduation cap (lecture) ─────────────────────────────────────────────
  cap: (
    <>
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1 4 2 6 2s6-1 6-2v-5" />
    </>
  ),
  // ── briefcase (business) ─────────────────────────────────────────────────
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
    </>
  ),
  // ── users (meeting) ──────────────────────────────────────────────────────
  users: (
    <>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </>
  ),
  // ── video camera (zoom / meet / teams) ───────────────────────────────────
  video: (
    <>
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" />
    </>
  ),
  // ── voice memo (mic in circle) ───────────────────────────────────────────
  memo: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8M9 11l3-3 3 3M9 13l3 3 3-3" />
    </>
  ),
  // ── presentation (webinar) ───────────────────────────────────────────────
  presentation: (
    <>
      <path d="M2 3h20v14H2z" />
      <path d="M12 17v4M8 21h8" />
    </>
  ),
  // ── book (sermon) ────────────────────────────────────────────────────────
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </>
  ),
  // ── pen (dictation) ──────────────────────────────────────────────────────
  pen: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4L16.5 3.5z" />
    </>
  ),
  // ── file-audio (format pages) ────────────────────────────────────────────
  fileAudio: (
    <>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M10 18v-5a1 1 0 011-1h1l2-2v9l-2-2h-1a1 1 0 01-1-1z" fill="currentColor" stroke="none" />
    </>
  ),
  // ── film (video format) ──────────────────────────────────────────────────
  film: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="2.18" />
      <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
    </>
  ),
  // ── captions / subtitles ─────────────────────────────────────────────────
  captions: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M7 15h2M11 15h6M7 11h4M13 11h4" />
    </>
  ),
  // ── clock (timestamps) ───────────────────────────────────────────────────
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  // ── play / youtube ───────────────────────────────────────────────────────
  play: (
    <>
      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
      <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" fill="currentColor" stroke="none" />
    </>
  ),
  // ── compress (downward arrows) ───────────────────────────────────────────
  compress: (
    <>
      <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7" />
    </>
  ),
  // ── scissors (split) ─────────────────────────────────────────────────────
  scissors: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
    </>
  ),
  // ── refresh / convert ────────────────────────────────────────────────────
  refresh: (
    <>
      <path d="M23 4v6h-6M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
    </>
  ),
  // ── globe (by language) ──────────────────────────────────────────────────
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </>
  ),
  // ── arrows in opposing direction (compare) ───────────────────────────────
  compare: (
    <>
      <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
    </>
  ),
}

export default function FooterIcon({ name, className = 'w-4 h-4 flex-shrink-0' }) {
  const path = PATHS[name]
  if (!path) return null
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  )
}
