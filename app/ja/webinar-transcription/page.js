import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'ja': 'https://mictoo.com/ja/webinar-transcription',
  'ko': 'https://mictoo.com/ko/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: 'ウェビナー文字起こし — 録画の無料トランスクリプト | Mictoo',
  description: 'ウェビナー録画をテキストとSRT字幕に無料で文字起こし。Zoom、Webex、GoToWebinarおよび任意のMP4・MP3エクスポートで動作。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/webinar-transcription', languages: LANGS },

  openGraph: {
    title: "ウェビナー文字起こし — 録画の無料トランスクリプト | Mictoo",
    description: "ウェビナー録画をテキストとSRT字幕に無料で文字起こし。Zoom、Webex、GoToWebinarおよび任意のMP4・MP3エクスポートで動作。登録不要。",
    url: "https://mictoo.com/ja/webinar-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ウェビナー文字起こし — 録画の無料トランスクリプト | Mictoo",
    description: "ウェビナー録画をテキストとSRT字幕に無料で文字起こし。Zoom、Webex、GoToWebinarおよび任意のMP4・MP3エクスポートで動作。登録不要。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaWebinarPage() {
  return (
    <LandingLayout
      badge="ウェビナー · MP4 · 無料"
      h1={<>ウェビナー文字起こし<br /><span className="text-brand-600">無料トランスクリプトジェネレーター</span></>}
      subtitle="ウェビナー録画を検索可能なテキスト文字起こしまたはSRT字幕ファイルに変換。Zoom、Webex、GoToWebinarおよび任意のMP4/MP3エクスポートで動作します。"
      defaultLanguage="ja"
      features={[
        { icon: '🎥', title: 'すべてのプラットフォームのエクスポート', desc: 'Zoom、Webex、GoToWebinar、Demio、Livestorm — すべてMP4またはM4Aでエクスポートします。変換不要でファイルを直接アップロード。' },
        { icon: '📝', title: 'ウェビナーを再利用', desc: 'ウェビナーをブログ記事、SNS投稿、ニュースレター、参加者向けフォローアップドキュメントに変換。' },
        { icon: '📺', title: 'オンデマンド再生用SRT', desc: 'YouTube、Vimeo、自社サイトにリプレイを公開する際の字幕として.srtファイルをダウンロードして使用。' },
      ]}
      faq={[
        { q: 'ZoomまたはWebexのウェビナー録画をダウンロードするには?', a: 'Zoom: ウェブポータル → 録画 → ウェビナーをクリック → ダウンロード。Webex: マイ録画で録画を開く → ダウンロード。どちらもデフォルトでMP4でエクスポートします。' },
        { q: 'ウェビナーがライブ中に文字起こしを取得できますか?', a: 'Mictooは録画ファイルで動作し、ライブストリームでは動作しません。リアルタイム字幕にはウェビナープラットフォームのライブキャプション機能を使用し、終了後に録画をアップロードして洗練された文字起こしを取得してください。' },
        { q: '複数のスピーカーとQ&Aセッションについては?', a: 'Mictooはすべての発言を含む単一の文字起こしを生成します。スピーカーラベル(ホスト、パネリスト1、聴衆)は、ダウンロード前にブラウザエディターで手動で追加できます。' },
        { q: 'ウェビナーの最大長さは?', a: '1ファイルあたり最大25 MB。64 kbpsモノラルの60分ウェビナーは余裕で収まります。長いセッションの場合は、低いビットレートでエクスポートするか、M4A音声を抽出してください。' },
        { q: '技術用語の文字起こしは正確ですか?', a: 'クリアな音声では精度が高いです。ブランド名、頭字語、珍しい用語は時々誤記されます — エクスポート前にブラウザエディターで簡単に修正できます。' },
      ]}
      relatedLinks={[
        { href: '/ja/meeting-transcription', label: '会議の文字起こし' },
        { href: '/ja/zoom-transcription', label: 'Zoom文字起こし' },
        { href: '/ja/free-srt-generator', label: 'SRTジェネレーター' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
