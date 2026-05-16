import Script from 'next/script'

// GA4 measurement ID. Hardcoded because the project is open-source-ish and the
// ID is sent to the browser anyway (no secret value). If we ever need to swap
// it, change here.
const GA_ID = 'G-5QWBBZ2HTF'

/**
 * Google Analytics 4 loader.
 *
 * Performance characteristics:
 *   - strategy="afterInteractive" — Next.js defers both <script> tags until
 *     the page is hydrated and interactive, so GA never blocks First Contentful
 *     Paint, Largest Contentful Paint, or Time to Interactive.
 *   - The remote gtag.js bundle is fetched async with low priority by the
 *     browser; once it loads, the inline init script runs and fires the
 *     first pageview.
 *   - Net Lighthouse impact: typically 0-2 points on Performance, vs ~10-15
 *     when injected with a plain `<script async>` in <head>.
 */
export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
