import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/descript-alternative',
  'fr': 'https://mictoo.com/fr/descript-alternative',
  'de': 'https://mictoo.com/de/descript-alternative',
  'es': 'https://mictoo.com/es/descript-alternative',
  'ru': 'https://mictoo.com/ru/descript-alternative',
  'it': 'https://mictoo.com/it/descript-alternative',
  'pt': 'https://mictoo.com/pt/descript-alternative',
  'pl': 'https://mictoo.com/pl/descript-alternative',
  'ja': 'https://mictoo.com/ja/descript-alternative',
  'ko': 'https://mictoo.com/ko/descript-alternative',
  'x-default': 'https://mictoo.com/descript-alternative',
}

export const metadata = {
  title: 'Descriptの代替 — 登録不要の無料文字起こし | Mictoo',
  description: '文字起こしだけのDescript代替をお探しですか?MictooはOpenAI Whisperを使った登録不要の無料AI文字起こしを提供します。エディターなし、サブスクリプションなし。',
  alternates: { canonical: 'https://mictoo.com/ja/descript-alternative', languages: LANGS },
}

export default function JaDescriptAlternativePage() {
  return (
    <ComparisonLayout
      badge="比較 · Descript · 無料"
      h1={<>Descriptの代替<br /><span className="text-brand-600">エディター不要の無料文字起こし</span></>}
      subtitle="Descriptは文字起こし機能付きのフル音声・動画エディターです。文字起こし部分だけが必要な場合、MictooはOpenAI Whisperを基盤とした登録不要の無料オプションです。"
      competitorName="Descript"
      rows={[
        { label: '無料プラン',           mictoo: '月間制限なし、1ファイルあたり25 MB', them: '月1時間の文字起こし' },
        { label: 'アカウント必須',       mictoo: 'いいえ', them: 'はい(メール登録)' },
        { label: '有料プラン',           mictoo: '無料',  them: '$12〜24 / 月' },
        { label: '音声・動画エディター', mictoo: 'いいえ',  them: 'はい(フル)' },
        { label: '文字起こしモデル',     mictoo: 'OpenAI Whisper', them: '独自 + Whisperオプション' },
        { label: 'AI要約',               mictoo: 'はい、無料', them: 'はい(有料)' },
        { label: 'SRTエクスポート',      mictoo: 'はい、無料', them: 'はい(有料)' },
        { label: 'スピーカーラベル',     mictoo: '手動編集', them: '自動' },
        { label: '言語',                 mictoo: '50以上', them: '20以上' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: '無料、登録不要', desc: 'アカウント、カード、メール不要でファイルをアップロードして文字起こしを取得。Descriptは無料プランでも登録が必要です。' },
        { icon: '⚡', title: '一度きりのタスクには高速', desc: 'インストールするアプリなし、学ぶエディターなし。1ページ、1ドロップ、数秒で結果。フル制作ではなく、迅速な文字起こしのために構築されています。' },
        { icon: '🔒', title: 'プライバシー第一', desc: '音声はOpenAIのWhisper APIに直接送信され、Mictooのサーバーには保存されません。プロジェクトなし、クラウドライブラリなし、チームスペースなしの設計です。' },
      ]}
      whenToChoose={{
        mictoo: [
          '文字起こしのみが必要で、編集は不要',
          '登録不要の無料サービスが欲しい',
          '一度きりのインタビュー、ポッドキャスト、会議を文字起こし',
          'デスクトップアプリやチームスペースは不要',
        ],
        them: [
          'ポッドキャストや動画を制作し、実際のエディターが必要',
          '「テキストを編集して音声を編集する」ワークフローが欲しい',
          '毎回自動のスピーカーラベルが必要',
          '共有プロジェクトライブラリでチームで作業',
        ],
      }}
      faq={[
        { q: 'MictooはDescriptの完全な代替ですか?', a: '編集については違います。Descriptは文字起こし機能付きの音声・動画エディターです — Mictooは文字起こし部分のみ。録音からテキストや字幕だけが必要な場合、Mictooはそのワークフローを無料で置き換えます。' },
        { q: '文字起こしの品質は同じですか?', a: 'どちらのツールもOpenAI Whisperを使用できます。MictooはWhisperのみを使用するため、精度は同等です。Descriptは一部のプランで追加の独自モデルを提供します。' },
        { q: 'Mictooにはスピーカーラベルがありますか?', a: 'Mictooは無料プランで自動ラベルなしの単一文字起こしを返します。ダウンロード前にブラウザエディターで手動でスピーカー1 / スピーカー2を追加できます。Descriptは自動でラベル付けします。' },
        { q: 'Mictooで文字起こしを編集できますか?', a: 'はい — 文字起こしは編集可能なテキストフィールドに表示されます。コピーまたは.txtや.srtとしてダウンロードする前に、名前、句読点、段落を修正できます。' },
        { q: 'WordまたはDOCXへのエクスポートは?', a: 'Mictooは現在.txtと.srtをエクスポートします。文字起こしをコピーしてWordに貼り付け、迅速にDOCXを取得してください。ネイティブDOCXエクスポートはロードマップにあります。' },
      ]}
      relatedLinks={[
        { href: '/ja/turboscribe-alternative', label: 'TurboScribeの代替' },
        { href: '/ja/otter-alternative', label: 'Otterの代替' },
        { href: '/ja/notta-alternative', label: 'Nottaの代替' },
        { href: '/ja', label: 'Mictooを試す' },
      ]}
    />
  )
}
