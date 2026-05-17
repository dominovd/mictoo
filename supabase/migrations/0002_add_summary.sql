-- Phase B.1 follow-up: store the AI summary alongside each transcript so it
-- appears in /history with the same Both / Summary / Transcript export toggle
-- the result page has. Nullable — old rows and rows where the user never
-- generated a summary stay valid.
--
-- Shape: { summary: string, keyPoints: string[], actionItems: string[] }
-- The same JSON object returned by /api/summarize.

alter table public.transcripts
  add column if not exists summary jsonb;
