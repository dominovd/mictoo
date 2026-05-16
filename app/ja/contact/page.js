import ContactLayout from '@/components/ContactLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/contact',
  'fr': 'https://mictoo.com/fr/contact',
  'de': 'https://mictoo.com/de/contact',
  'es': 'https://mictoo.com/es/contact',
  'ru': 'https://mictoo.com/ru/contact',
  'it': 'https://mictoo.com/it/contact',
  'pt': 'https://mictoo.com/pt/contact',
  'pl': 'https://mictoo.com/pl/contact',
  'ja': 'https://mictoo.com/ja/contact',
  'ko': 'https://mictoo.com/ko/contact',
  'x-default': 'https://mictoo.com/contact',
}

export const metadata = {
  title: 'お問い合わせ — Mictoo',
  description: 'フィードバック、機能リクエスト、ご質問はMictooチームまでご連絡ください。',
  alternates: { canonical: 'https://mictoo.com/ja/contact', languages: LOCALE_ALTERNATES },
}

export default function JaContactPage() {
  return (
    <ContactLayout
      strings={{
        h1: 'お問い合わせ',
        lead: 'フィードバック、機能のご要望、ファイルに関する問題はありますか?お気軽にお寄せください。',
        emailHeading: 'メール',
        emailNote: '通常、1〜2営業日以内にお返事します。',
        topicsHeading: '対応している話題',
        topics: [
          '技術的な問題(文字起こしが動作しない、対応フォーマットなど)',
          '機能リクエスト・ご提案',
          'プライバシーとデータ処理',
          'コラボレーション・提携',
          'プレス・メディア',
        ],
      }}
    />
  )
}
