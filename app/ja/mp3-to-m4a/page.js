import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-m4a',
  'fr': 'https://mictoo.com/fr/mp3-to-m4a',
  'de': 'https://mictoo.com/de/mp3-to-m4a',
  'es': 'https://mictoo.com/es/mp3-to-m4a',
  'ru': 'https://mictoo.com/ru/mp3-to-m4a',
  'it': 'https://mictoo.com/it/mp3-to-m4a',
  'pt': 'https://mictoo.com/pt/mp3-to-m4a',
  'pl': 'https://mictoo.com/pl/mp3-to-m4a',
  'ja': 'https://mictoo.com/ja/mp3-to-m4a',
  'ko': 'https://mictoo.com/ko/mp3-to-m4a',
  'x-default': 'https://mictoo.com/mp3-to-m4a',
}

export const metadata = {
  title: 'MP3からM4Aへ — 無料オンライン変換ツール | Mictoo',
  description:
    'MP3からM4Aへの変換が無料オンラインで使えます。MP3をAACに再エンコードし、iPhone、iTunes、Apple環境向けのM4Aコンテナに入れます。登録不要、ウォーターマークなし。',
  alternates: { canonical: 'https://mictoo.com/ja/mp3-to-m4a', languages: LANGS },

  openGraph: {
    title: "MP3からM4Aへ — 無料オンライン変換ツール | Mictoo",
    description: "MP3からM4Aへの変換が無料オンラインで使えます。MP3をAACに再エンコードし、iPhone、iTunes、Apple環境向けのM4Aコンテナに入れます。登録不要、ウォーターマークなし。",
    url: "https://mictoo.com/ja/mp3-to-m4a",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP3からM4Aへ — 無料オンライン変換ツール | Mictoo",
    description: "MP3からM4Aへの変換が無料オンラインで使えます。MP3をAACに再エンコードし、iPhone、iTunes、Apple環境向けのM4Aコンテナに入れます。登録不要、ウォーターマークなし。",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function JaMp3ToM4aPage() {
  return (
    <LandingLayout
      defaultLanguage="ja"
      badge="MP3 → M4A · 無料 · 登録不要"
      h1={<>MP3からM4Aへ<br /><span className="text-brand-600">無料オンライン変換ツール</span></>}
      subtitle="MP3をドロップしてください。M4A、つまりMP4コンテナ内のAAC音声が手に入ります。iTunes、Apple Music、すべてのiPhoneでネイティブに再生できます。ウォーターマークなし、メール不要。"
      tool={<ConverterZone from="mp3" to="m4a" />}
      howItWorks={[
        { icon: '📂', title: 'MP3をドロップ', desc: 'どんなMP3でもボックスにドラッグできます。25 MBまでは登録なし、60 MBまではサインイン後に利用できます。' },
        { icon: '⚡', title: 'ffmpegでAACに再エンコード', desc: 'M4Aコンテナ内の128 kbps AACに、faststartフラグ付きでエンコードします。ストリーミングですぐに再生できます。3〜10秒で完了します。' },
        { icon: '⬇️', title: 'M4Aをダウンロード', desc: '結果は元のファイル名に.m4aを付けたものです。ファイルは1時間以内にサーバーから削除されます。' },
      ]}
      whyUse={{ title: 'MP3からM4Aに変換する理由', bullets: [
        { title: 'Apple環境はM4Aを優先する', desc: 'iTunes、Apple Music、iCloudミュージックライブラリ、GarageBand、すべてM4Aを第一級のフォーマットとして扱います。MP3も動きますが、ネイティブに話す言語はM4Aです。' },
        { title: '同じビットレートではAACの方がMP3よりわずかに良い音', desc: '128 kbpsでは違いは小さいですが実在します。特に高域で。元のMP3がすでに非可逆なら、この再エンコードがそれをさらに悪化させることはありません。' },
        { title: 'M4Aはチャプターマーカーやリッチなメタデータに対応', desc: 'オーディオブック、ポッドキャストのプレビューファイル、Apple環境向けのコンテンツを作るなら、M4Aはチャプターをきれいに扱えます。MP3のチャプター対応はまだら模様です。' },
        { title: 'iPhoneの着信音はM4Aである必要がある', desc: 'iPhoneのカスタム着信音はM4R拡張子を使います。M4Aと同じAAC-in-MP4形式です。変換して.m4rにリネームすれば着信音として使えます。' },
        { title: 'ウォーターマークなし、課金誘導なし', desc: '音声を再エンコードしただけで、それ以外は何もしません。' },
      ]}}
      useCases={{ title: 'MP3からM4Aに変換したくなる場面', items: [
        { title: '音楽コレクションをApple Musicに取り込む', desc: 'M4Aはきれいにインポートされ、iCloudミュージックライブラリと統合されます。MP3は同期時にメタデータの問題が起きることがあります。' },
        { title: 'iPhoneの着信音を作る', desc: 'MP3 → M4Aに変換し、40秒未満にトリミングし、.m4rにリネームし、iPhone接続中にFinderにドロップしてください。' },
        { title: 'チャプターマーカー付きのオーディオブック', desc: 'M4Aはチャプターに対応しています。MP3の対応は不安定です。長時間オーディオブックで章を移動したい聞き手には、M4Aが適切なフォーマットです。' },
        { title: 'iCloud用のボイスメモ整理', desc: 'MP3のボイスメモのフォルダがあり、iCloudやApple Voice Memosに入れたい場合、M4Aの方がネイティブで同期も安定します。' },
        { title: 'GarageBandやLogicプロジェクト', desc: 'Appleの音楽ソフトウェアにリファレンス音声を取り込む際、一部のワークフローではMP3よりM4Aの方がスムーズに収まります。' },
      ]}}
      proTips={{ title: 'MP3からM4Aへの変換のコツ', tips: [
        { title: '再エンコードはわずかな品質低下を伴う', desc: '非可逆形式から非可逆形式への変換です。128 kbps MP3から128 kbps AACへの場合、損失は実在しますが、ほとんどの再生環境でほぼ誰にも聞き取れません。クリティカルな用途にはロスレスのソースを探してください。' },
        { title: '着信音用は変換前にトリミング', desc: 'iPhoneの着信音は40秒で上限です。AudacityまたはQuickTimeでMP3をまずトリミングしてから変換してください。' },
        { title: '96 kbpsのAACは、128 kbpsのMP3を超えることが多い', desc: 'Mictooの変換ツールは互換性のため128 kbpsで出力しますが、自分で完全にコントロールできるならAACをより低くしてもMP3の品質に並びます。ツールをシンプルに保つため、ピッカーは提供していません。' },
        { title: 'M4AとMP4、同じコンテナで違う慣習', desc: 'M4Aファイルには音声のみが入っています。MP4ファイルには動画、音声、または両方が入りえます。iTunesは区別をはっきりさせるため.m4a拡張子を使います。一部のプレーヤーはどちらの拡張子も受け付けます。' },
        { title: 'チャプターマーカーはMictooが追加しません', desc: '音声を再エンコードするだけです。チャプターマーカーを追加するには、オーディオブックならApple Booksを、または専用ツールのChapter and Verseを使ってください。' },
        { title: 'DRM保護のMP3は変換に失敗', desc: '2026年にはMP3のDRMは非常に珍しいですが、もし持っていたとしてもデコードできません。' },
      ]}}
      faq={[
        { q: 'MP3からM4Aへの変換は本当に無料ですか', a: 'はい。25 MBまでアカウント不要、ウォーターマークなし、時間制限なし。' },
        { q: '最大ファイルサイズはどれくらいですか', a: '登録なしで25 MB、無料アカウントで60 MBです。' },
        { q: 'M4AはMP3より音質が悪く聞こえますか', a: '理論的にはそうです。非可逆形式を再エンコードすればわずかに損失が加わります。実際には128 kbps MP3から128 kbps AACでは、コンシューマー再生で人間が違いを聞き分けることはできません。' },
        { q: 'M4AとMP4の違いは何ですか', a: 'M4AとMP4は同じコンテナフォーマットです。.m4a拡張子は「音声のみ」を示すシグナルで、iTunesに何をすべきか伝えます。一部のプレーヤーはどちらの拡張子も受け付けます。' },
        { q: 'どれくらい時間がかかりますか', a: '数秒です。25 MBのMP3は3〜10秒で変換できます。' },
        { q: 'どの品質で出力しますか', a: 'M4Aコンテナ内の128 kbps AAC、44.1 kHz、元のチャンネルレイアウトを維持します。' },
        { q: 'ファイルは保存されますか', a: 'いいえ。アップロードは変換後に削除されます。出力は1時間以内に消去されます。' },
        { q: 'このツールでiPhoneの着信音を作れますか', a: '間接的にできます。MP3をM4Aに変換し、QuickTimeで40秒未満にトリミングし、.m4aを.m4rにリネームし、iPhone接続中のFinderにドロップしてください。' },
        { q: 'iTunesは結果を受け付けますか', a: 'はい。M4AはiTunesのネイティブフォーマットです。' },
        { q: 'MP3がすでに320 kbpsです。変換すべきですか', a: '互換性のために特にM4Aが必要な場合のみです。結果は128 kbps AACになります。320 kbps MP3からは技術的に品質ダウンですが、ほとんどの再生では実質的に聞き取れません。320 kbpsの品質を保ちたい場合は、より高いビットレートを設定できる別の変換ツールが必要です。' },
        { q: 'タグは引き継がれますか', a: '基本タグ（タイトル、アーティスト、アルバム）は通常引き継がれます。カバーアートや詳細コメントはMP3 ID3とM4A iTunesメタデータの間で不安定です。変換後にiTunesやMp3tagでタグを付け直してください。' },
        { q: '一括変換はできますか', a: '無料枠ではまだできません。複数のブラウザタブを開いて並行して変換してください。' },
      ]}
      relatedLinks={[
        { href: '/ja/m4a-to-mp3', label: 'M4AからMP3へ', desc: '逆方向の変換です。' },
        { href: '/ja/wav-to-mp3', label: 'WAVからMP3へ', desc: 'WAVを携帯しやすいMP3に縮小します。' },
        { href: '/ja/m4a-to-text', label: 'M4Aからテキストへ', desc: 'M4A音声を直接文字起こしします。' },
        { href: '/ja/how-to-compress-audio', label: '音声を圧縮', desc: 'もっと小さくしたいファイルに。' },
      ]}
    />
  )
}
