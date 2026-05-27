import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'ja': 'https://mictoo.com/ja/zoom-transcription',
  'ko': 'https://mictoo.com/ko/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Zoom文字起こし — Zoom録画を無料で文字起こし | Mictoo',
  description:
    '無料Zoom文字起こし。Cloud Recording(MP4)またはLocal Recording(M4A)をアップロードして正確なAI文字起こしを数秒で取得。登録不要、分単位課金なし。',
  alternates: { canonical: 'https://mictoo.com/ja/zoom-transcription', languages: LANGS },
}

export default function JaZoomPage() {
  return (
    <LandingLayout
      defaultLanguage="ja"
      badge="ZOOM · MP4 · M4A · 無料"
      h1={<>Zoom文字起こし<br /><span className="text-brand-600">Zoom録画をテキストに変換</span></>}
      subtitle="Zoom録画をクリーンなテキストに変換。Cloud Recording MP4またはローカルM4A、両方動作。ファイルをドロップして数秒で文字起こし取得。"
      howItWorks={[
        { icon: '🎬', title: 'Zoom録画をエクスポート', desc: 'Cloud RecordingsはMP4(動画+音声)またはM4A(音声のみ)としてダウンロード。Local Recordingsはデバイス上にMP4とM4Aとして保存。両方のフォーマットがここで動作。' },
        { icon: '⚡', title: 'ファイルをドロップ', desc: 'ドラッグするだけ。動画なら音声を取り出してWhisper large-v3に送ります。30分の会議は通常1分未満で完了。' },
        { icon: '📋', title: '文字起こし取得', desc: '読む、コピー、またはTXTかSRTでダウンロード。エクスポート前に誤った名前や専門用語をインラインで修正。' },
      ]}
      whyUse={{ title: 'Zoom録画にMictooを使う理由', bullets: [
        { title: '無料プランを含むあらゆるZoomプランで動作', desc: 'Zoomの文字起こしは特定の有料プランに限定。私たちのはZoomプラン要件なし。録画、ダウンロード、アップロード、完了。' },
        { title: '非ネイティブ英語とコードスイッチングがより良い', desc: 'Whisper large-v3は、歴史的に英語ファーストのZoom内蔵文字起こしよりも、アクセントとバイリンガル会議をうまく扱います。' },
        { title: '音声のみM4Aは直接アップロードに十分小さい', desc: 'ほとんどの30分Zoom会議はM4Aとして15〜25 MBに着地。圧縮なしで快適に無料層に収まる。' },
        { title: '14日保持の心配なし', desc: 'Zoom Cloud Recordingsはプランによって14〜30日後に消える可能性。ファイルをダウンロードしてここで文字起こししたら、永久にあなたのもの。' },
        { title: 'プライバシー', desc: 'ファイルは文字起こしプロバイダにストリーミングされて破棄。Zoom録画をデータベースやストレージに書き込みません。' },
      ]}}
      useCases={{ title: '人々がZoom録画を文字起こしする用途', items: [
        { title: '社内会議議事録', desc: '録画を通す、テキストを取得、NotionやConfluenceに貼り付け。会議を逃した人は60分の動画ではなく5分の読書で追いつく。' },
        { title: 'クライアントと営業通話', desc: 'CRMでディールの横に文字起こしを保存。6ヶ月後の未来のあなたが感謝します。' },
        { title: '分散チームの非同期スタンドアップ', desc: '一部のチームはライブ会議ではなく非同期スタンドアップを録画。文字起こしは検索可能でスキャン可能にします。' },
        { title: '研究インタビュー', desc: '質的研究、ユーザーインタビュー、候補者スクリーニング通話。コーディングしてタグ付けするのは動画ではなくテキスト。' },
        { title: 'ウェビナーとパネル文字起こし', desc: 'アクセシビリティと発見可能性のために録画の横に文字起こしを公開。検索エンジンは動画ではなくテキストをインデックス。' },
      ]}}
      proTips={{ title: 'Zoom文字起こしのコツ', tips: [
        { title: 'MP4ではなく音声のみM4Aをダウンロード', desc: 'Zoom Cloud Recordingは両方を提供。M4Aは同一の音声品質でMP4の10分の1のサイズ。より速いアップロード、ほとんどの会議で60 MB制限のはるか下。' },
        { title: 'マルチスピーカー会議には「Record a separate audio file for each participant」を有効化', desc: 'Zoom設定、録画の下。スピーカーごとに1つのM4A。各々を別々に文字起こしすれば、ダイアライゼーション不要でクリーンなスピーカー帰属。' },
        { title: '話さない参加者をミュート', desc: 'プレゼンテーション中に開いたマイクからの背景ノイズは文字起こしにゴースト単語を生成。大きな通話では強制する価値があります。' },
        { title: 'ローカルとクラウド録画は同じ品質', desc: '両方ともデフォルトで同じ音声設定で録画。ローカルは速い(Zoomへのアップロード不要)が、ディスクスペースが必要。' },
        { title: '機密コンテンツにはローカル録画を使う', desc: 'Cloud RecordingはZoomサーバーに会議を保存。ローカル録画はあなたが行き先を選ぶまでデバイス上に留まります。機密性の高いクライアントやHR会話には、ローカル→私たちに直接が、プライバシーを保持する方法。' },
        { title: '長いZoom会議(60分超)は分割が必要', desc: '私たちのファイル制限は登録で60分。90分通話には45分のチャンク2つに分割。Audacityで簡単(File、Export、Multiple)、またはffmpegで。' },
      ]}}
      faq={[
        { q: 'MictooはZoom Cloud Recordingsで動作しますか?', a: 'はい。ZoomレコーディングライブラリからMP4またはM4Aをダウンロードし、ここにアップロード。M4A音声のみエクスポートは速くて小さい。' },
        { q: 'Zoom Phone通話録画で動作しますか?', a: 'はい。Zoom PhoneはMP3またはM4Aで録画。両方とも動作。電話品質の音声(8 kHzモノラル)は動画会議音声よりわずかに精度が低いが、結果はまだ読めます。' },
        { q: 'ローカルZoom録画はどうですか?', a: '同じ話。ZoomはデフォルトのZoomフォルダにMP4とM4Aとして保存。M4Aをここにドロップ。' },
        { q: 'スピーカーラベルは取得できますか?', a: '自動的にはありません。Zoom設定で「Record a separate audio file for each participant」を有効にした場合、各スピーカーのファイルを別々に文字起こしできます。そうでなければ、会話の流れに基づいて手動でスピーカーラベルを追加する必要があります。' },
        { q: 'Zoom録画が60 MBを超えています。どうすれば?', a: 'MP4ではなく音声のみM4Aダウンロードを使用。それでも大きすぎる場合は、チャンクに分割するか、低ビットレートで再エンコード。圧縮と分割ガイドを参照。' },
        { q: 'Zoom内蔵文字起こしと比較してどうですか?', a: '私たちは非ネイティブ英語、アクセントでより良く、言語サポートが広い(50以上)。Zoom内蔵文字起こしは、適切なZoomプランをすでに支払っている場合により便利。私たちのは無料で、Zoomティアに関係なく動作します。' },
        { q: 'Zoom録画はサーバーに保存されますか?', a: 'いいえ。ファイルは文字起こしプロバイダ(Groq、バックアップとしてOpenAI)にストリーミングされ、文字起こしされて破棄。録画をディスクに書き込みません。' },
        { q: 'Zoom会議をリアルタイムで文字起こしできますか?', a: 'いいえ。録画されたファイルでのみ動作。会議中のリアルタイムにはZoom内蔵ツールまたは専用ミーティングアシスタントが正しい選択です。' },
        { q: 'ZoomウェビナーとLarge meetingsはどうですか?', a: '同じワークフロー。録画をダウンロード、アップロード、文字起こし。非常に長いウェビナー(60分超)はまず分割。' },
        { q: '会議のチャットメッセージは文字起こしされますか?', a: 'いいえ。チャットメッセージはZoomによって別々に保存(Zoomフォルダ内のTXTとして)。音声のみを文字起こし。両方が必要なら自分で組み合わせてください。' },
        { q: 'Zoom音声文字起こしはどれくらい正確?', a: '良いマイクのクリーンな会議音声: 90〜95%。悪い音声(ノートPCマイク、騒がしい部屋、弱いWiFi)の会議は精度がやや落ちる。名前と専門用語は通常クリーンアップが必要。' },
        { q: 'Microsoft TeamsやGoogle Meet録画でも動作しますか?', a: 'はい、同じエンジン。Google MeetとMicrosoft Teams用に専用ページがあります。' },
      ]}
      relatedLinks={[
        { href: '/ja/google-meet-transcription', label: 'Google Meet文字起こし', desc: 'Google Meet録画用の同じワークフロー。' },
        { href: '/ja/teams-meeting-transcription', label: 'Teams文字起こし', desc: 'Microsoft Teams録画用。' },
        { href: '/ja/meeting-transcription', label: '会議文字起こし', desc: '他のプラットフォームからの録画用の一般ページ。' },
        { href: '/ja/interview-transcription', label: 'インタビュー文字起こし', desc: '1対1の会話と質的インタビュー用。' },
      ]}
    />
  )
}
