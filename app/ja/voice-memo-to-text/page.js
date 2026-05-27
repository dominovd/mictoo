import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/voice-memo-to-text',
  'fr': 'https://mictoo.com/fr/voice-memo-to-text',
  'de': 'https://mictoo.com/de/voice-memo-to-text',
  'es': 'https://mictoo.com/es/voice-memo-to-text',
  'ru': 'https://mictoo.com/ru/voice-memo-to-text',
  'it': 'https://mictoo.com/it/voice-memo-to-text',
  'pt': 'https://mictoo.com/pt/voice-memo-to-text',
  'pl': 'https://mictoo.com/pl/voice-memo-to-text',
  'ja': 'https://mictoo.com/ja/voice-memo-to-text',
  'ko': 'https://mictoo.com/ko/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: 'ボイスメモをテキストに — iPhone Voice Memosを無料で文字起こし | Mictoo',
  description:
    '無料ボイスメモ文字起こし。iPhoneボイスメモまたはAndroid録音(M4A、MP3)をドロップしてクリーンなテキストを数秒で取得。登録不要。',
  alternates: { canonical: 'https://mictoo.com/ja/voice-memo-to-text', languages: LANGS },
}

export default function JaVoiceMemoPage() {
  return (
    <LandingLayout
      defaultLanguage="ja"
      badge="iPhone · Android · 無料"
      h1={<>ボイスメモをテキストに<br /><span className="text-brand-600">無料ボイスメモ文字起こし</span></>}
      subtitle="ボイスメモをクリーンなテキストに変換。iPhone、Android、専用レコーダー、あらゆる音声ファイル。ドロップして数秒で文字起こし取得。アカウント不要、分単位課金なし。"
      howItWorks={[
        { icon: '📱', title: 'メモをPCに転送(またはスマホからアップロード)', desc: 'iPhone: ボイスメモを開く、共有をタップ、AirDropまたは自分にメール。Android: ファイルやレコーダーアプリのフォルダで録音を見つける。またはモバイルブラウザでスマホから直接アップロード。' },
        { icon: '📂', title: 'ファイルをドロップ', desc: 'iPhoneのM4A、AndroidのM4AまたはMP3、一部のレコーダーのWAV。すべて動作。' },
        { icon: '📋', title: '文字起こし取得', desc: 'ブラウザで読む、クリップボードにコピー、またはTXTでダウンロード。Notion、Apple Notes、Google Docs、ノートが住んでいる場所に貼り付け。' },
      ]}
      whyUse={{ title: 'ボイスメモにMictooを使う理由', bullets: [
        { title: 'ネイティブM4Aサポート', desc: 'iPhoneボイスメモはM4Aとして保存。M4Aを直接受け付け。変換不要。' },
        { title: '無料、分カウンターなし', desc: 'ボイスメモは「一度に1つ」フォーマット。2分のアイデアに分単位で支払うのは馬鹿げている。キャップなしの無料がユースケースに合う。' },
        { title: '短いファイルに速い', desc: '2分のボイスメモは約5秒で文字起こし。アイデア自体を入力するより速い。' },
        { title: 'プライバシー', desc: 'ボイスメモは個人的なことが多い。あなたの音声は文字起こしプロバイダに行き、処理されて破棄。保持しません。' },
        { title: 'モバイルフレンドリー', desc: 'ブラウザでスマホから直接アップロード。iOSとAndroidの両方が動作。' },
        { title: '自動検出があなたの言語を扱う', desc: '50以上の言語のいずれかでのボイスメモ。2つの言語で考えてメモが切り替わるなら便利。' },
      ]}}
      useCases={{ title: '人々がボイスメモ文字起こしを使う用途', items: [
        { title: '移動中のアイデアキャプチャ', desc: '散歩中に思いついたことをスマホに口述。今それを行動に移したい。文字起こし、タスクマネージャーまたはノートアプリに貼り付け。' },
        { title: '長いテキストの口述', desc: 'エッセイ、ブログ投稿、メールを話してドラフトする人もいます。ボイスメモを文字起こし、テキストを編集、送信。' },
        { title: '会議後のアクションアイテム', desc: '会議室から戻る途中で自分に要約を口述。文字起こし、プロジェクト文書に貼り付け。' },
        { title: 'ジャーナリストと研究者のためのフィールドノート', desc: '現場で観察と引用をキャプチャ。後で文字起こしして整理されたノート。' },
        { title: 'リマインダーリスト(買い物、荷造り、プロジェクト計画)', desc: 'ボイスメモはスマホで入力するより速い。検索可能で編集可能なテキストバージョンのために文字起こし。' },
      ]}}
      proTips={{ title: 'ボイスメモ文字起こしのコツ', tips: [
        { title: 'スマホは近くに、ただし近すぎないように', desc: '口から10〜15 cmがスイートスポット。近いとマイクが破裂音と息をキャッチ。遠いと騒がしい環境で明瞭度を失う。' },
        { title: '風は敵', desc: '風の強い通りでの10秒のボイスメモは使えないかもしれません。可能なら止まって、風に背を向けてから録音。または風に強いマイク付きヘッドフォンを使用。' },
        { title: 'キーワードの前に一時停止', desc: '名前、住所、専門用語を口述する時は、前に短く一時停止。Whisperは固有名詞には早口より孤立した単語をうまく扱います。' },
        { title: 'iPhone Voice Memosはデフォルトでロスレスm4a、ただしロッシーに切り替え可能', desc: '設定、ボイスメモ、音声品質。ロスレスは文字起こしには過剰。ロッシーは精度の違いなしで3分の1のサイズ。' },
        { title: 'アップロード前に最初と最後の無音をトリム', desc: 'ボイスメモは時々3〜5秒の死んだ空気をキャッチ。共有前にボイスメモアプリでトリム(編集をタップ)。より小さいファイル、より速い文字起こし。' },
        { title: '長い口述(声でドラフトを書く)には5〜10分のチャンクに分割', desc: '編集しやすい。1つのチャンクがうまくいかない場合に再録音しやすい。' },
        { title: 'Whisperはスマホ内蔵口述機能よりあなたのアクセントをうまく扱う', desc: 'iOSには内蔵口述がありますが、英語ファーストでアクセントに弱い。Whisperはより良い精度で50以上の言語をカバー。' },
      ]}}
      faq={[
        { q: 'MictooはiPhoneボイスメモをサポートしますか?', a: 'はい。iPhoneボイスメモはM4Aとして保存(時にはALACとしてロスレス)。M4Aは直接動作。ALACにはまずWAVまたはM4A AACに変換。' },
        { q: 'iPhoneからボイスメモをMictooに持ってくるには?', a: '3つのオプション。ボイスメモでメモを開き、共有をタップ、Macに対するAirDrop(最速)または自分にメール。またはiPhoneでSafariを使ってmictoo.comを開き、ファイルアプリから直接アップロード。' },
        { q: 'Androidボイス録音はどうですか?', a: 'Androidボイスレコーダーは通常M4AまたはMP3として保存。両方とも動作。ファイルアプリでファイルを見つけて、PCに共有またはモバイルブラウザからアップロード。' },
        { q: 'スマホから直接アップロードできますか?', a: 'はい。サイトはモバイルフレンドリー。アップロードエリアをタップ、スマホのファイルアプリまたは録音フォルダからファイルを選択。' },
        { q: 'ボイスメモはどれくらい長くできますか?', a: '無料で1ファイルあたり最大30分、登録で60分。ほとんどのボイスメモは5分未満で、どの制限内にも快適。' },
        { q: 'ボイスメモ文字起こしはどれくらい正確?', a: '静かな環境でのクリアなスピーチには: 90〜95%。もぐもぐ言うスピーチ、背景ノイズ(通り、カフェ、車)では精度が落ちる。固有名詞はしばしばクリーンアップが必要。' },
        { q: '文字起こしには句読点が含まれますか?', a: 'はい。Whisperは句読点を自動的に追加。口述スピーチ(より自然でない文境界を持つ)には常に完璧ではないが、そのまま使用可能。' },
        { q: '非英語で口述するのに動作しますか?', a: 'はい、50以上の言語。短いメモにはドロップダウンから手動で言語を選択(自動検出は信頼できるためにより多くの音声が必要)。' },
        { q: 'ボイスメモは保存されますか?', a: 'いいえ。ファイルは文字起こしプロバイダに行き、処理されて、その後破棄。' },
        { q: 'ダウンロード前に文字起こしを編集できますか?', a: 'はい。エクスポート前にブラウザで誤った単語を修正。' },
        { q: '電話通話の録音に動作しますか?', a: 'アップロードするファイルを、どう録音されたかに関係なく文字起こし。通話録音自体はほとんどの管轄で同意が必要。録音前に同意を得てください。' },
        { q: 'iOS内蔵口述機能との違いは?', a: 'iOS口述は話しながらのリアルタイム、特定の言語に限定、アクセントに弱い。Mictooは録音後に文字起こし、50以上の言語をサポート、より精密なモデル(Whisper large-v3)を使用。' },
      ]}
      relatedLinks={[
        { href: '/ja/m4a-to-text', label: 'M4Aをテキストに', desc: 'M4Aファイル専用。' },
        { href: '/ja/dictation-to-text', label: '口述をテキストに', desc: '口述されたテキストドラフトとロングフォーム音声執筆用。' },
        { href: '/ja/interview-transcription', label: 'インタビュー文字起こし', desc: 'スマホで録音したインタビュー用。' },
        { href: '/ja/transcribe-audio-to-text', label: '音声をテキストに', desc: '他の音声フォーマット用。' },
      ]}
    />
  )
}
