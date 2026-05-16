import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/notta-alternative',
  'fr': 'https://mictoo.com/fr/notta-alternative',
  'de': 'https://mictoo.com/de/notta-alternative',
  'es': 'https://mictoo.com/es/notta-alternative',
  'ru': 'https://mictoo.com/ru/notta-alternative',
  'it': 'https://mictoo.com/it/notta-alternative',
  'pt': 'https://mictoo.com/pt/notta-alternative',
  'pl': 'https://mictoo.com/pl/notta-alternative',
  'ja': 'https://mictoo.com/ja/notta-alternative',
  'x-default': 'https://mictoo.com/notta-alternative',
}

export const metadata = {
  title: 'Nottaの代替 — 月間制限なしの無料文字起こし | Mictoo',
  description: 'Nottaは無料ユーザーを月120分、各文字起こしを3分に制限します。Mictooは無料、登録不要、月の分数クォータなし — OpenAI Whisperベース。',
  alternates: { canonical: 'https://mictoo.com/ja/notta-alternative', languages: LANGS },
}

export default function JaNottaAlternativePage() {
  return (
    <ComparisonLayout
      badge="比較 · Notta · 無料"
      h1={<>Nottaの代替<br /><span className="text-brand-600">月120分制限なし</span></>}
      subtitle="Nottaは人気のオールインワン文字起こしツールですが、無料プランは月120分、1ファイル3分に制限されます。Mictooは月のクォータがなく、ファイルサイズの制限のみ — 無料、登録不要。"
      competitorName="Notta"
      rows={[
        { label: '無料プラン',           mictoo: '月間制限なし、1ファイルあたり25 MB', them: '120分/月、1ファイル3分' },
        { label: 'アカウント必須',       mictoo: 'いいえ', them: 'はい(メール登録)' },
        { label: '有料プラン',           mictoo: '無料',  them: '$9〜25 / ユーザー / 月' },
        { label: 'ファイルあたりの時間', mictoo: '〜25分(サイズ制限)', them: '3分(無料) / 5時間(有料)' },
        { label: 'ライブ文字起こし',     mictoo: 'いいえ', them: 'はい(会議のNotta Bot)' },
        { label: 'AI要約',               mictoo: 'はい、無料', them: 'はい(有料)' },
        { label: '文字起こしモデル',     mictoo: 'OpenAI Whisper', them: '独自' },
        { label: 'スピーカーラベル',     mictoo: '手動編集', them: '自動(有料)' },
        { label: '言語',                 mictoo: '50以上', them: '100以上(有料プラン)' },
      ]}
      whyMictoo={[
        { icon: '⏳', title: '1ファイル3分制限なし', desc: 'Nottaの1ファイル3分制限はポッドキャスト、講義、インタビューには短すぎます。Mictooは無料で〜25分の完全な音声ファイルを処理します。' },
        { icon: '🆓', title: '月の分数クォータなし', desc: 'Nottaは120分/月のクォータに対してすべての分をカウントします。Mictooは個別のファイルサイズのみを制限します — 1ファイルでも複数でも、分数のカウントなしでアップロード。' },
        { icon: '✨', title: '無料プランでAI要約', desc: 'NottaはAI要約を有料プランに置きます。Mictooは毎回無料で要点とアクションアイテム付きの要約を生成します。' },
      ]}
      whenToChoose={{
        mictoo: [
          '3分より長いファイルを無料で文字起こしする必要がある',
          '月120分制限に達したくない',
          '支払いなしでAI要約が欲しい',
          '自動スピーカーダイアライゼーションは不要',
        ],
        them: [
          'Notta Botがライブ会議に参加する必要がある',
          '自動スピーカーラベルが必要',
          'CRMと統合されたワークフローが欲しい',
          '無制限機能のために支払うことができる',
        ],
      }}
      faq={[
        { q: 'Mictooは本当に分数クォータなしで無料ですか?', a: 'はい。唯一の制限はファイルあたりのサイズ(25 MB、典型的なポッドキャストビットレートで約25分に相当)です。月の分数追跡なし、ファイル数の制限なし。' },
        { q: 'なぜNottaは無料ユーザーをそんなに厳しく制限するのですか?', a: 'Nottaはフリーミアムモデルを使用し、無料プランはアップグレードを促進するために意図的に制限されています。Mictooのモデルは広告ベースなので、無料プランは設計上寛大です。' },
        { q: 'Mictooは無料なのにどうやってお金を稼ぐのですか?', a: 'ディスプレイ広告(Google AdSense)で、ファイルが文字起こしされる際のローディング状態で表示されます。文字起こし自体とアップロードエリアは広告なしです。' },
        { q: 'Mictooはライブ会議の文字起こしをサポートしますか?', a: 'いいえ — Mictooは録音ファイルでのみ動作します。ライブキャプチャには、プラットフォームの組み込み字幕(Zoom、Google Meet、Teams)を使用し、その後Mictooに録音をアップロードして洗練された文字起こしを取得してください。' },
        { q: 'Mictooはどの言語をサポートしますか?', a: 'OpenAI Whisperは自動検出で50以上の言語をサポートします — 日本語、英語、中国語、韓国語、スペイン語、フランス語、ドイツ語、ロシア語、ウクライナ語、アラビア語、ヒンディー語など多数。自動検出が間違わない限り、言語を選択する必要はありません。' },
      ]}
      relatedLinks={[
        { href: '/ja/turboscribe-alternative', label: 'TurboScribeの代替' },
        { href: '/ja/otter-alternative', label: 'Otterの代替' },
        { href: '/ja/podcast-transcription', label: 'ポッドキャスト文字起こし' },
        { href: '/ja', label: 'Mictooを試す' },
      ]}
    />
  )
}
