import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'pl': 'https://mictoo.com/pl/sermon-transcription',
  'ja': 'https://mictoo.com/ja/sermon-transcription',
  'ko': 'https://mictoo.com/ko/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: '説教文字起こし — 無料説教トランスクリプトジェネレーター | Mictoo',
  description: '説教や教会の音声を無料でテキストに文字起こし。ブログ、学習ノート、アクセシビリティに最適。MP3、MP4、M4Aに対応。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/sermon-transcription', languages: LANGS },

  openGraph: {
    title: "説教文字起こし — 無料説教トランスクリプトジェネレーター | Mictoo",
    description: "説教や教会の音声を無料でテキストに文字起こし。ブログ、学習ノート、アクセシビリティに最適。MP3、MP4、M4Aに対応。登録不要。",
    url: "https://mictoo.com/ja/sermon-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "説教文字起こし — 無料説教トランスクリプトジェネレーター | Mictoo",
    description: "説教や教会の音声を無料でテキストに文字起こし。ブログ、学習ノート、アクセシビリティに最適。MP3、MP4、M4Aに対応。登録不要。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaSermonPage() {
  return (
    <LandingLayout
      badge="説教 · 教会 · 無料"
      h1={<>説教文字起こし<br /><span className="text-brand-600">無料トランスクリプトジェネレーター</span></>}
      subtitle="説教録音を数秒で清書済みテキストに変換。教会のブログ、学習ガイド、SNS投稿、聴覚障害者向けアクセシビリティに最適。"
      defaultLanguage="ja"
      features={[
        { icon: '📖', title: 'すべての説教を再利用', desc: '説教をブログ記事、デボーション、ニュースレター、学習ガイド、SNS向け引用に変換。追加の作業なしでリーチを倍増させましょう。' },
        { icon: '♿', title: 'アクセシビリティ', desc: '聴覚障害者、難聴者、リモート参加者がメッセージを十分に受け取れるよう文字起こしを提供します。' },
        { icon: '🌐', title: '多言語サポート', desc: '日本語、英語、スペイン語、ポルトガル語、韓国語、フランス語、ロシア語ほか45以上の言語に対応。多言語の信徒向けに最適。' },
      ]}
      faq={[
        { q: '説教録音をテキストに変換するには?', a: '教会のサウンドボード、ポッドキャストフィード、YouTubeからMP3、MP4、M4Aでエクスポート。上記からファイルをアップロードすると、Mictooが数秒で文字起こしを行います。' },
        { q: '教会のYouTubeチャンネルから説教を文字起こしできますか?', a: 'はい。自分のチャンネルの場合: YouTube Studio → コンテンツ → 動画をクリック → ダウンロード。Mictooにファイルをアップロードします。第三者のチャンネルの場合は許可が必要です。多くのミニストリーはポッドキャストフィード経由で音声ダウンロードを提供しています。' },
        { q: '聖書箇所や固有名詞はどうなりますか?', a: 'AI文字起こしは一般的な箇所と名前にはよく対応しますが、稀な聖書名や教会固有の用語を時々誤記することがあります。ダウンロード前にブラウザエディターで修正してください — 通常30秒のレビューで完了します。' },
        { q: '説教の最大長さは?', a: '最大25 MB。128 kbpsの30分の説教は余裕で収まります。長いメッセージ(45〜60分)の場合は、ビットレートを64 kbpsモノラルに下げるか、2つの部分に分割してください。' },
        { q: 'ファイルはプライベートに保たれますか?', a: 'はい。説教は処理され即座に削除されます。音声も文字起こし内容も保存しません。' },
      ]}
      relatedLinks={[
        { href: '/ja/podcast-transcription', label: 'ポッドキャスト文字起こし' },
        { href: '/ja/lecture-transcription', label: '講義文字起こし' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
