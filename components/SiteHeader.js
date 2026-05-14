'use client'

import { usePathname } from 'next/navigation'
import { detectLocaleFromPath, localized, t } from '@/lib/i18n'
import LanguageSwitcher from './LanguageSwitcher'

export default function SiteHeader() {
  const pathname = usePathname() || '/'
  const locale = detectLocaleFromPath(pathname)

  // Home link stays at the locale's own root: /  /fr  /de  /es  /ru
  const homeHref = localized('/', locale)

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href={homeHref} className="flex items-center gap-2 font-bold text-xl text-brand-600">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#0284c7" />
            <path d="M8 8v8M12 6v12M16 10v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          mictoo
        </a>

        <nav className="flex items-center gap-1 text-sm text-slate-600">
          <a href={localized('/', locale)} className="btn-ghost">{t(locale, 'nav.transcribe')}</a>
          <a href={`${localized('/', locale)}#how-it-works`} className="btn-ghost">{t(locale, 'nav.howItWorks')}</a>
          {/* About/Contact are EN-only for now — keep linking to canonical English pages */}
          <a href="/about" className="btn-ghost hidden sm:inline-flex">{t(locale, 'nav.about')}</a>
          <a href="/contact" className="btn-ghost hidden sm:inline-flex">{t(locale, 'nav.contact')}</a>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  )
}
