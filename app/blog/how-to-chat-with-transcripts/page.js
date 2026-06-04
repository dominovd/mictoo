import BlogLayout from '@/components/BlogLayout'

const SLUG = 'how-to-chat-with-transcripts'
const TITLE = 'How to Chat with Your Transcript (and Why It Beats Reading 60 Minutes of Text)'
const SUBTITLE =
  "We just shipped Chat with transcript on Mictoo. You can now ask any transcript a question and get back an answer cited with clickable timestamps. Here's what it actually does, the prompts that work best, and the honest limits."
const DESCRIPTION =
  'Practical guide to using Chat with your transcript on Mictoo. Sample prompts, what kinds of questions work, how the RAG pipeline works, what it can and cannot do, and how it differs from pasting your transcript into ChatGPT.'
const PUBLISHED_AT = '2026-06-04'
const READING_MINUTES = 9

export const metadata = {
  title: `${TITLE} | Mictoo Blog`,
  description: DESCRIPTION,
  alternates: { canonical: `https://mictoo.com/blog/${SLUG}` },
  openGraph: {
    type: 'article',
    title: TITLE,
    description: DESCRIPTION,
    url: `https://mictoo.com/blog/${SLUG}`,
    publishedTime: PUBLISHED_AT,
    siteName: 'Mictoo',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function Post() {
  return (
    <BlogLayout
      slug={SLUG}
      title={TITLE}
      subtitle={SUBTITLE}
      description={DESCRIPTION}
      publishedAt={PUBLISHED_AT}
      readingMinutes={READING_MINUTES}
      related={[
        {
          href: '/transcribe-audio-to-text',
          label: 'Audio to text',
          desc: 'Drop an audio file and try Chat with the result. Free, signs you in only when you click Chat.',
        },
        {
          href: '/transcribe-video-to-text',
          label: 'Video to text',
          desc: 'Same flow for video. Pull audio out automatically, transcribe, then chat.',
        },
        {
          href: '/youtube-to-text',
          label: 'YouTube to text',
          desc: 'Paste a YouTube URL, get the transcript, then ask anything about the video without watching it.',
        },
        {
          href: '/blog/can-chatgpt-transcribe-audio',
          label: 'Can ChatGPT transcribe audio?',
          desc: 'Companion post: ChatGPT cannot transcribe but it can chat about a transcript. Here we explain why a dedicated chat over your transcript is different.',
        },
      ]}
    >
      <h2>What Chat with transcript actually is</h2>
      <p>
        It is a question-answering panel that sits between the AI summary and the transcript itself on every result page. You ask a plain-language question about the transcript you just made — &quot;what did they decide about pricing?&quot;, &quot;summarize the discussion of remote work&quot;, &quot;list all the books they mentioned&quot; — and a model reads only the relevant pieces of the transcript and writes back an answer with timestamp citations.
      </p>
      <p>
        Click any <code>[12:34]</code> in the answer and the audio player jumps to that moment. So you can verify the citation, hear the tone of voice, or just play forward from there. Same Whisper-quality transcript you already have, now turned into something you can <em>ask</em>.
      </p>
      <p>
        Free. Sign-in required only to open the Chat panel — everything else on Mictoo stays anonymous as before.
      </p>

      <h2>How to use it</h2>
      <ol>
        <li><strong>Transcribe something.</strong> Drop a file or paste a YouTube URL on <a href="/transcribe-audio-to-text">/transcribe-audio-to-text</a>, <a href="/transcribe-video-to-text">/transcribe-video-to-text</a>, or <a href="/youtube-to-text">/youtube-to-text</a>. Once the transcript appears, you have everything Chat needs.</li>
        <li><strong>Sign in.</strong> The Chat panel under the AI summary shows a lock icon and a Sign in button. One Google click is enough — anonymous users see Chat exists but cannot use it.</li>
        <li><strong>Open the panel.</strong> Click the chat header to expand. You will see three suggested prompts (Summarize, Action items, Memorable quote) and an input field. Pick a suggestion or type your own.</li>
        <li><strong>Click timestamps.</strong> Any <code>[HH:MM:SS]</code> in the answer is a button. It seeks the audio player above the transcript to that moment.</li>
      </ol>
      <p>
        That is it. No model selection, no temperature slider, no parameters to tweak.
      </p>

      <h2>The prompts that actually work</h2>
      <p>
        We tested a few hundred questions across podcasts, lectures, interviews, and meeting recordings. Here is what works well and what does not. Steal the templates.
      </p>

      <h3>Summarization</h3>
      <ul>
        <li>&quot;Summarize the key points in 5 bullets.&quot;</li>
        <li>&quot;What is the TL;DR of this episode?&quot;</li>
        <li>&quot;Give me the three biggest takeaways.&quot;</li>
        <li>&quot;Summarize only the last 15 minutes.&quot; <em>(works when the model can locate the timestamps)</em></li>
      </ul>
      <p>
        Summary-style prompts work the best. The model has the whole transcript in retrieval, so it can pull together themes that appear in multiple places.
      </p>

      <h3>Fact-finding</h3>
      <ul>
        <li>&quot;Did they mention X? If yes, what did they say?&quot;</li>
        <li>&quot;What did Speaker A say about pricing?&quot; <em>(works if there are speaker hints in the text — diarization is a Pro feature, coming later)</em></li>
        <li>&quot;Find the part where they discuss the 2024 numbers.&quot;</li>
        <li>&quot;Quote the exact line about the deadline.&quot;</li>
      </ul>
      <p>
        Fact-finding is where the timestamp citations earn their keep. Click through, hear the exact words, confirm.
      </p>

      <h3>Action items</h3>
      <ul>
        <li>&quot;List every action item or decision with the timestamp where it was made.&quot;</li>
        <li>&quot;What did they commit to follow up on?&quot;</li>
        <li>&quot;Pull out anything that sounds like a deadline or a date.&quot;</li>
      </ul>
      <p>
        Best on meetings and project-style podcasts. Less useful on lectures and interviews.
      </p>

      <h3>Comparison</h3>
      <ul>
        <li>&quot;How does the host&apos;s view differ from the guest&apos;s view on remote work?&quot;</li>
        <li>&quot;Did anyone disagree with the main thesis?&quot;</li>
      </ul>
      <p>
        Good if the transcript has enough back-and-forth to spot positions. The model is honest when there is no clear disagreement — it will say so.
      </p>

      <h3>Translation requests</h3>
      <ul>
        <li>&quot;Translate the quote at 22:15 into Spanish.&quot;</li>
        <li>&quot;In one sentence in French, what is the main argument?&quot;</li>
      </ul>
      <p>
        For full-transcript translation use our <a href="/transcribe-audio-to-text">Translate button</a> instead — it preserves all timestamps in a downloadable SRT. Chat is for the in-conversation one-off translations.
      </p>

      <h2>How it works under the hood (RAG)</h2>
      <p>
        Chat is not just &quot;send the whole transcript to GPT and hope for the best.&quot; That approach burns tokens on every question, breaks on long transcripts, and gives the model no incentive to cite anything in particular. We use Retrieval-Augmented Generation instead. The flow:
      </p>
      <ol>
        <li><strong>Chunk.</strong> The transcript gets split into roughly 500-token windows with a 100-token overlap so a single relevant fact never falls cleanly between two chunks. Each chunk keeps its starting timestamp.</li>
        <li><strong>Embed.</strong> Each chunk and your question get turned into vectors by OpenAI&apos;s <code>text-embedding-3-small</code> model. Vectors are just lists of numbers that capture semantic meaning.</li>
        <li><strong>Retrieve.</strong> We cosine-rank the chunks against the question vector and take the top 5. These are the pieces of the transcript most likely to contain the answer.</li>
        <li><strong>Answer.</strong> The top 5 chunks plus the question plus a strict system prompt (&quot;answer only from this context, cite timestamps as [HH:MM:SS]&quot;) go to GPT-4o-mini. You get back a few sentences with bracketed citations.</li>
      </ol>
      <p>
        The system prompt forbids the model from inventing details or pulling in outside knowledge. If the answer is not in the retrieved chunks, it says so directly. That is the difference between &quot;ask Mictoo about this transcript&quot; and &quot;ask ChatGPT about this transcript&quot; — the model is forced to ground every answer in the actual source material.
      </p>

      <h2>What it can&apos;t do (yet)</h2>
      <p>
        Honest limits. We&apos;d rather you know upfront than be surprised.
      </p>
      <ul>
        <li><strong>Speaker diarization.</strong> Whisper does not label who said what. So &quot;what did Speaker A say&quot; only works if the speakers introduce each other. Diarization is on our roadmap as a Pro tier feature.</li>
        <li><strong>4-hour-plus podcasts.</strong> Long content still works, but the chunking and retrieval get less reliable past about 100,000 tokens. Most transcripts (under 60 min) are well inside the sweet spot.</li>
        <li><strong>Cross-transcript search.</strong> Each chat conversation is scoped to one transcript. You cannot ask &quot;in all my saved transcripts, who has mentioned Tesla?&quot; — yet. That is a planned Pro feature too.</li>
        <li><strong>Real-time fact-checking.</strong> If the speaker says something wrong, the model will faithfully report what they said. It is not Google. It does not know who is right.</li>
        <li><strong>Hallucinations on edge cases.</strong> The strict prompt minimizes this but does not eliminate it. Always verify quotes by clicking the timestamp.</li>
      </ul>

      <h2>Why sign-in (and why it is free anyway)</h2>
      <p>
        Anonymous transcribing stays anonymous. Sign-in only opens the Chat panel. Two reasons:
      </p>
      <ul>
        <li><strong>Abuse protection.</strong> A loop that spams chat questions could rack up a noticeable OpenAI bill in a hurry. Per-user rate limits (10 per hour, 20 per day) only work if there are user IDs to attach them to.</li>
        <li><strong>Honest cost control.</strong> Per question Chat costs us about $0.001 — pennies even at heavy use. But the long tail of bots and aggressive scrapers would change the math. Sign-in is the smallest friction that solves it.</li>
      </ul>
      <p>
        No upsell. No paid tier hiding behind sign-in. Mictoo is free, Chat is free, the only difference is whether you have an account.
      </p>

      <h2>Privacy</h2>
      <p>
        We send the relevant transcript chunks plus your question to OpenAI. We do not send the entire transcript to anyone — only the 5 chunks our retrieval picks as most relevant. OpenAI does not train on API calls, per their stated policy.
      </p>
      <p>
        We do not store chat conversations anywhere. Close the tab and the conversation is gone. If you want it preserved, copy the answer before you leave — paste-friendly, the citations come out as plain <code>[12:34]</code> bracketed strings.
      </p>

      <h2>FAQ</h2>
      <details>
        <summary>Is it really free?</summary>
        <p>Yes. We pay OpenAI for the calls. We use AdSense (when approved) and tip jars on the result page to fund it. No paid tier for Chat.</p>
      </details>
      <details>
        <summary>Why require sign-in if it is free?</summary>
        <p>To attach rate limits to a user identity. Without sign-in we would need IP-based limits, which are blunt and break for shared networks (offices, schools). Sign-in protects against abuse without limiting legitimate use.</p>
      </details>
      <details>
        <summary>How accurate are the answers?</summary>
        <p>The factual content is grounded in the actual transcript. The model still occasionally paraphrases something in a way that loses nuance — clicking the cited timestamp lets you check the original. Treat answers as a starting point, not a primary source.</p>
      </details>
      <details>
        <summary>Can I chat about YouTube videos?</summary>
        <p>Yes. Paste a YouTube URL on <a href="/youtube-to-text">/youtube-to-text</a> or <a href="/transcribe-video-to-text">/transcribe-video-to-text</a>, wait for the transcript, then sign in to chat. Works exactly the same as a file upload.</p>
      </details>
      <details>
        <summary>What about really long podcasts?</summary>
        <p>Up to about 4 hours works well. Past that, retrieval starts missing things — the &quot;haystack&quot; gets too large. For a 5-hour interview, consider splitting the transcript and chatting about each half separately.</p>
      </details>
      <details>
        <summary>Can I search across all my saved transcripts?</summary>
        <p>Not yet. Each chat is scoped to one transcript. Cross-transcript search is on the roadmap, likely as a Pro tier feature when we launch one.</p>
      </details>
      <details>
        <summary>Does it work in languages other than English?</summary>
        <p>Yes. The transcript can be in any language Whisper supports (50+) and the model can answer in any language you ask in. &quot;Summarize this English podcast in Spanish&quot; works fine.</p>
      </details>
      <details>
        <summary>Does it remember past conversations?</summary>
        <p>Only within the current page-load session. Refresh the page or close the tab and history is gone. We do not store conversations server-side.</p>
      </details>
      <details>
        <summary>What model is behind this?</summary>
        <p>OpenAI <code>text-embedding-3-small</code> for the retrieval embeddings, <code>gpt-4o-mini</code> for the answer generation. Same family that powers the AI summary you already get for free.</p>
      </details>
      <details>
        <summary>How is this different from pasting the transcript into ChatGPT?</summary>
        <p>Three differences. One, retrieval — we surface only the relevant chunks to the model, so even hour-long transcripts answer fast. Two, citations — the bracketed timestamps come back as clickable buttons that seek the audio player. Three, the strict prompt forbids outside-knowledge guesses, so the model is more honest about what is and is not in the transcript. ChatGPT can do all of this if you build it, but we built it for you.</p>
      </details>
    </BlogLayout>
  )
}
