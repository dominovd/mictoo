import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'pl': 'https://mictoo.com/pl/aac-to-text',
  'ja': 'https://mictoo.com/ja/aac-to-text',
  'ko': 'https://mictoo.com/ko/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AACをテキストに — オンラインAAC音声無料文字起こし | Mictoo',
  description: 'AAC音声ファイルを無料でテキストに文字起こし。.aac、.m4a、その他のAACエンコードファイルをドラッグして、数秒で正確な文字起こしを取得。',
  alternates: { canonical: 'https://mictoo.com/ja/aac-to-text', languages: LANGS },

  openGraph: {
    title: "AACをテキストに — オンラインAAC音声無料文字起こし | Mictoo",
    description: "AAC音声ファイルを無料でテキストに文字起こし。.aac、.m4a、その他のAACエンコードファイルをドラッグして、数秒で正確な文字起こしを取得。",
    url: "https://mictoo.com/ja/aac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AACをテキストに — オンラインAAC音声無料文字起こし | Mictoo",
    description: "AAC音声ファイルを無料でテキストに文字起こし。.aac、.m4a、その他のAACエンコードファイルをドラッグして、数秒で正確な文字起こしを取得。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaAacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · M4A · 無料"
      h1={<>AACをテキストに<br /><span className="text-brand-600">オンラインAAC無料文字起こし</span></>}
      subtitle="AAC音声ファイルをアップロードして、数秒で正確なテキスト文字起こしを取得。.aacと.m4a(MP4コンテナ内のAAC)に対応。登録不要。"
      defaultLanguage="ja"
      valueBlock={
        <article className="prose-content">
          <p>AACはiPhone、YouTube抽出音声、配信プラットフォームでよく使われる圧縮音声コーデックです。生の.aacファイルもあれば、M4AやMP4の中に入っているAACもあります。このページは、変換前のAAC音声をそのまま文字起こししたいときのためのものです。</p>
          <p>MictooはAACのヘッダーとプロファイルを読み取り、文字起こし用にデコードします。音質を上げる目的でWAVへ再変換しても、元の情報は増えません。直接アップロードする方が速く、劣化も増えません。</p>
        </article>
      }
      howItWorks={[
        { icon: '🎧', title: 'AACファイルをアップロード', desc: '生の.aac、またはAAC音声を含む録音を選びます。' },
        { icon: '🔎', title: '形式を検出', desc: 'ADTS/ADIFなどの違いを確認し、音声として読める形へ変換します。' },
        { icon: '📄', title: 'テキストを保存', desc: '文字起こしを確認し、TXT、SRT、VTT、DOCXで書き出せます。' },
      ]}
      whyUse={{
        title: 'AAC文字起こしにMictooを使う理由',
        bullets: [
          { title: '生AACをそのまま処理', desc: '一部の編集アプリや配信システムは、M4Aではなく.aacだけを書き出します。Mictooはそのまま受け取れます。' },
          { title: 'コンテナとの違いを吸収', desc: 'AACはコーデック、M4AやMP4はコンテナです。どちらに入っていても音声を取り出して処理します。' },
          { title: '再エンコードを避けられる', desc: 'WAVやMP3に変換してから入れると時間がかかり、場合によっては劣化が増えます。' },
          { title: '動画由来の音声に強い', desc: 'YouTube、スマホ動画、配信アーカイブから抽出したAAC音声のメモ化に向いています。' },
        ],
      }}
      useCases={{
        title: 'AACを文字起こしする場面',
        items: [
          { title: 'ポッドキャストCDNの音声', desc: '配信用にAACで保存されたエピソードを原稿や引用にできます。' },
          { title: '動画から抜き出した音声', desc: 'MP4やYouTube素材から抽出したAACを、先に文章化して編集できます。' },
          { title: 'モバイルアプリの音声', desc: 'ゲーム、学習アプリ、ボイスメモ系アプリの書き出しにAACが使われることがあります。' },
          { title: '放送・収録アーカイブ', desc: '古い素材や納品データがAACだけで残っている場合でも、内容検索用のテキストを作れます。' },
        ],
      }}
      proTips={{
        title: 'AACアップロードのコツ',
        tips: [
          { title: 'ビットレートを上げ直さない', desc: '64kbpsのAACを320kbpsにしても音声情報は増えません。元ファイルを使う方が自然です。' },
          { title: '再生できない場合はM4Aに包む', desc: 'まれに生AACを受け取らないアプリがあります。Mictooには直接入れられますが、共有用にはM4Aが扱いやすいです。' },
          { title: '短いクリップは言語を指定', desc: '短い広告音声や効果音混じりの素材では、言語を手動選択すると安定します。' },
        ],
      }}
      faq={[
        { q: 'AACファイルとは?', a: 'AAC(Advanced Audio Coding)はiTunes、Apple Music、YouTube、ほとんどのポッドキャストアプリで使われる損失圧縮音声フォーマットです。ファイルは.aacまたは.m4a拡張子を持ちます。AACは同じビットレートでMP3より優れた品質を提供します。' },
        { q: '.aacと.m4aの違いは?', a: 'どちらもAACエンコードされた音声を含みます。.aacは生の音声ストリーム、.m4aはMP4コンテナでラップされています(iTunesとiPhoneボイスメモが保存する方法)。Mictooは両方を直接サポートします。' },
        { q: 'AACを無料でテキストに変換するには?', a: 'AACファイルを上記のアップロードエリアにドラッグしてください。MictooがAIで自動的に文字起こしを行い、数秒でテキストを表示します。コピーまたは.txtとしてダウンロードしてください。' },
        { q: 'AACファイルの最大サイズは?', a: '1アップロードあたり最大25 MB。128 kbpsのAACで25 MBあたり約25分の音声、64 kbpsでほぼ1時間です。長いファイルの場合はビットレートを下げるかセグメントに分割してください。' },
        { q: 'AAC文字起こしのタイムスタンプを取得できますか?', a: 'はい。文字起こし後、正確なタイムスタンプ付きの.srtファイルをダウンロードできます — 文字起こしを元の音声や動画と同期させるのに便利です。' },
      ]}
      relatedLinks={[
        { href: '/ja/m4a-to-text', label: 'M4Aをテキストに' },
        { href: '/ja/transcribe-mp3-to-text', label: 'MP3をテキストに' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
