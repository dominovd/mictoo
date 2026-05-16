import InfoSectionsLayout from '@/components/InfoSectionsLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/terms',
  'fr': 'https://mictoo.com/fr/terms',
  'de': 'https://mictoo.com/de/terms',
  'es': 'https://mictoo.com/es/terms',
  'ru': 'https://mictoo.com/ru/terms',
  'it': 'https://mictoo.com/it/terms',
  'pt': 'https://mictoo.com/pt/terms',
  'pl': 'https://mictoo.com/pl/terms',
  'ja': 'https://mictoo.com/ja/terms',
  'x-default': 'https://mictoo.com/terms',
}

export const metadata = {
  title: '利用規約 — Mictoo',
  description: 'Mictooの利用規約。',
  alternates: { canonical: 'https://mictoo.com/ja/terms', languages: LOCALE_ALTERNATES },
}

export default function JaTermsPage() {
  return (
    <InfoSectionsLayout
      h1="利用規約"
      lastUpdated="最終更新日: 2026年5月"
      sections={[
        {
          heading: '1. 同意',
          body: 'Mictooを使用することにより、本規約に同意したものとみなされます。同意できない場合は、本サービスを利用しないでください。',
        },
        {
          heading: '2. サービスの利用',
          body: 'Mictooは「現状のまま」提供される無料の文字起こしツールです。アップロードするファイルに関する責任はお客様にあり、文字起こしを行う権利を有している必要があります。違法、攻撃的、または著作権を侵害するコンテンツへの利用は禁止されています。',
        },
        {
          heading: '3. 責任の制限',
          body: '本サービスは一切の保証なく「現状のまま」提供されます。文字起こしの100%の精度を保証するものではありません。結果はお客様自身の責任でご利用ください。',
        },
        {
          heading: '4. 可用性',
          body: '事前通知なくサービスを変更、停止、または中止する場合があります。',
        },
        {
          heading: '5. 規約の変更',
          body: '本規約は随時更新される場合があります。変更はこのページに掲載された時点で有効になります。',
        },
        {
          heading: '6. お問い合わせ',
          body: (
            <>
              規約に関するご質問は{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>までお問い合わせください。
            </>
          ),
        },
      ]}
    />
  )
}
