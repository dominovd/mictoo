import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/ogg-to-text',
  'fr': 'https://mictoo.com/fr/ogg-to-text',
  'de': 'https://mictoo.com/de/ogg-to-text',
  'es': 'https://mictoo.com/es/ogg-to-text',
  'ru': 'https://mictoo.com/ru/ogg-to-text',
  'it': 'https://mictoo.com/it/ogg-to-text',
  'pt': 'https://mictoo.com/pt/ogg-to-text',
  'pl': 'https://mictoo.com/pl/ogg-to-text',
  'ja': 'https://mictoo.com/ja/ogg-to-text',
  'ko': 'https://mictoo.com/ko/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGGをテキストに — オンラインOGG音声無料文字起こし | Mictoo',
  description: 'OGG音声ファイルをオンラインで無料でテキストに変換。任意のOGG Vorbis録音をアップロードして、即座に正確な文字起こしを取得。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/ogg-to-text', languages: LANGS },

  openGraph: {
    title: "OGGをテキストに — オンラインOGG音声無料文字起こし | Mictoo",
    description: "OGG音声ファイルをオンラインで無料でテキストに変換。任意のOGG Vorbis録音をアップロードして、即座に正確な文字起こしを取得。登録不要。",
    url: "https://mictoo.com/ja/ogg-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OGGをテキストに — オンラインOGG音声無料文字起こし | Mictoo",
    description: "OGG音声ファイルをオンラインで無料でテキストに変換。任意のOGG Vorbis録音をアップロードして、即座に正確な文字起こしを取得。登録不要。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaOggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · 無料 · 即座"
      h1={<>OGGをテキストに<br /><span className="text-brand-600">オンラインOGG無料文字起こし</span></>}
      subtitle="任意のOGG音声ファイルをアップロードして、数秒でテキストに変換。OGG VorbisとOGG Opusに対応。アカウント不要。"
      defaultLanguage="ja"
      valueBlock={
        <article className="prose-content">
          <p>OGGは単一の音声コーデックではなく、Vorbis、Opus、場合によってはFLACを入れられるコンテナです。Telegramの音声メッセージは.ogaで保存されることが多く、中身はOpusです。Mictooは拡張子だけで判断せず、ファイルの中身を見てデコードします。</p>
          <p>Linuxの録音アプリ、WebRTC通話、オープンソース系の音声素材でも、そのままアップロードできます。MP3へ変換してから入れる必要はありません。</p>
          <p>60 MBまで無料。TelegramのOpus音声は非常に小さいため、長めのボイスメモでも上限に収まりやすい形式です。</p>
        </article>
      }
      howItWorks={[
        { icon: '🐧', title: 'OGG、OGA、Opusをアップロード', desc: 'Vorbis、Opus、FLAC入りOGGに対応します。.ogg、.oga、.opusのどれでも、実際のコーデックを検出します。' },
        { icon: '🎤', title: '音声を取り出して文字起こし', desc: 'サーバー側でOGGコンテナから音声を取り出し、Whisperに渡せる形へデコードします。' },
        { icon: '💬', title: '編集して書き出し', desc: '結果を画面で確認し、名前や専門用語を直して、TXT、SRT、VTT、DOCXで保存できます。' },
      ]}
      whyUse={{
        title: 'OGGや.ogaにMictooを使う理由',
        bullets: [
          { title: 'Telegram音声を直接扱える', desc: 'Telegram DesktopやWebから保存した音声メッセージは.ogaになることがよくあります。名前を.oggに変えたり、MP3へ変換したりせず、そのまま使えます。' },
          { title: 'VorbisとOpusの違いを気にしなくてよい', desc: '古いOGGはVorbis、最近の音声メモや通話はOpusが多いです。Mictooは中身を検出して適切に処理します。' },
          { title: '小さなファイルでも聞き取りやすい', desc: 'Opusは低ビットレートの音声に強い形式です。Telegramの短いボイスメモでも、話し声が明瞭なら十分に文字起こしできます。' },
          { title: 'Linuxとブラウザ録音に合う', desc: 'GNOMEやKDEの録音、WebRTC系の録音、オープンソースの音声素材など、OGGが自然に出てくるワークフローに向いています。' },
        ],
      }}
      useCases={{
        title: 'OGGファイルがよく出てくる場面',
        items: [
          { title: 'Telegramの長いボイスメモ', desc: '仕事の相談、家族のメッセージ、グループ内の説明をテキストで残したいときに便利です。' },
          { title: 'Linuxデスクトップ録音', desc: 'Linuxの録音アプリはOGGやOpusを選ぶことがあります。研究メモやポッドキャスト素材を直接処理できます。' },
          { title: 'ブラウザ通話のバックアップ', desc: 'WebRTCベースの通話録音はOpusを使うことが多く、後から議事録化しやすい形式です。' },
          { title: 'アーカイブ音声や発音サンプル', desc: 'Wikipediaや教育資料のOGG音声を、検索しやすいテキストに変換できます。' },
        ],
      }}
      proTips={{
        title: 'OGG文字起こしのコツ',
        tips: [
          { title: '.ogaを無理にリネームしない', desc: '.ogaも音声専用のOGG拡張子です。Mictooではそのままアップロードできます。' },
          { title: 'TelegramはDesktopかWebから保存する', desc: 'モバイルアプリでは音声ファイルとして取り出しにくい場合があります。DesktopやWebの右クリック保存が確実です。' },
          { title: '短い音声は言語を手動指定する', desc: '数秒のメッセージでは自動判定が迷うことがあります。日本語なら日本語を選ぶと安定します。' },
        ],
      }}
      faq={[
        { q: 'OGGをテキストに変換するには?', a: '上記にOGGファイルをアップロードしてください。文字起こしは数秒で自動的に生成されます。' },
        { q: 'OGGからテキストへの変換は無料ですか?', a: 'はい、完全に無料です。登録もアカウントも不要です。' },
        { q: 'OGGファイルの最大サイズは?', a: '最大25 MB。' },
        { q: '他にどの音声フォーマットに対応していますか?', a: 'MP3、MP4、WAV、M4A、FLAC、WEBMにも対応しています。' },
      ]}
      relatedLinks={[
        { href: '/ja/wav-to-text', label: 'WAVをテキストに' },
        { href: '/ja/flac-to-text', label: 'FLACをテキストに' },
        { href: '/ja', label: 'すべてのフォーマット' },
      ]}
    />
  )
}
