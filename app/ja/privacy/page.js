import InfoSectionsLayout from '@/components/InfoSectionsLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/privacy',
  'fr': 'https://mictoo.com/fr/privacy',
  'de': 'https://mictoo.com/de/privacy',
  'es': 'https://mictoo.com/es/privacy',
  'ru': 'https://mictoo.com/ru/privacy',
  'it': 'https://mictoo.com/it/privacy',
  'pt': 'https://mictoo.com/pt/privacy',
  'pl': 'https://mictoo.com/pl/privacy',
  'ja': 'https://mictoo.com/ja/privacy',
  'ko': 'https://mictoo.com/ko/privacy',
  'x-default': 'https://mictoo.com/privacy',
}

export const metadata = {
  title: 'プライバシーポリシー — Mictoo',
  description: 'Mictooのプライバシーポリシー。音声ファイルや文字起こしを保存することはありません。',
  alternates: { canonical: 'https://mictoo.com/ja/privacy', languages: LOCALE_ALTERNATES },

  openGraph: {
    title: "プライバシーポリシー — Mictoo",
    description: "Mictooのプライバシーポリシー。音声ファイルや文字起こしを保存することはありません。",
    url: "https://mictoo.com/ja/privacy",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "プライバシーポリシー — Mictoo",
    description: "Mictooのプライバシーポリシー。音声ファイルや文字起こしを保存することはありません。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaPrivacyPage() {
  return (
    <InfoSectionsLayout
      h1="プライバシーポリシー"
      lastUpdated="最終更新日: 2026年5月"
      sections={[
        {
          heading: '1. 収集する情報',
          body: 'Mictooはアカウントを必要とせず、個人情報を収集しません。ファイルをアップロードすると、ブラウザがVercel Blob(米国ホストのVercelファイルストレージ)に直接送信します。ファイルは短時間そこに留まり、サーバーがGroqのWhisper API(米国ホスト)に転送して文字起こしを行い、Groqが一時的に利用できない場合はOpenAIのWhisper APIに自動フォールバックします。文字起こしが完了するとファイルはVercel Blobから自動的に削除されます — 通常は1分以内です。1時間ごとのクリーンアップジョブが、何らかの理由ですぐに削除されなかった残りのアップロードを削除します。Mictooは音声、動画、文字起こしの永続的なコピーを自社サーバーに保持しません。',
        },
        {
          heading: '2. ファイル処理とAIプロバイダー',
          body: 'ファイルはHTTPS経由でGroqのWhisper APIに送信され、米国に拠点を置くインフラストラクチャ上でリアルタイムに処理されます。Groqのデータポリシーによれば、お客様の音声はモデルの学習に使用されません。Groqが利用できない稀なケースでは、リクエストは自動的にOpenAIのWhisper APIにルーティングされます。OpenAIもAPIデータをモデル学習に使用せず、不正利用監視のために最大30日間保持した後に削除します。Mictooはブラウジングセッション終了後、音声や文字起こしのコピーを保持しません。',
        },
        {
          heading: '3. 分析と広告',
          body: (
            <>
              Google AdSenseを通じて広告を表示する場合があります。Googleは関連性のある広告を表示するためにCookieを使用することがあります。{' '}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Google広告設定</a>
              でオプトアウトできます。利用状況を理解するために匿名分析(例: ページビュー数)を使用する場合があります。個人を特定できる情報は一切収集しません。
            </>
          ),
        },
        {
          heading: '4. Cookie',
          body: 'Mictoo自体はCookieを設定しません。Google AdSenseなどの第三者サービスは独自のCookieを設定する可能性があります。',
        },
        {
          heading: '5. 子どものプライバシー',
          body: 'Mictooは13歳未満の子どもを対象としていません。子どものデータを意図的に収集することはありません。',
        },
        {
          heading: '6. お問い合わせ',
          body: (
            <>
              ポリシーに関するご質問は{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>までお問い合わせください。
            </>
          ),
        },
      ]}
    />
  )
}
