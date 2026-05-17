-- Mictoo — initial schema for Phase A (auth foundation) + Phase B prep.
-- Run this in Supabase Dashboard → SQL Editor for project `mictoo`.

-- ─────────────────────────────────────────────────────────────────────────
-- profiles
-- One row per auth.users row, auto-created via trigger on signup.
-- Stores app-level user data we want to query without hitting auth.users.
-- ─────────────────────────────────────────────────────────────────────────

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
    new.raw_user_meta_data ->> 'avatar_url'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- RLS: a user can read/update only their own profile row.
alter table public.profiles enable row level security;

create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id);

-- ─────────────────────────────────────────────────────────────────────────
-- transcripts
-- Persistent history for registered users (Phase B feature).
-- For anonymous users no row is written here — transcripts stay in Redis
-- queue with 1h TTL like today. Only registered users get persistent history.
-- ─────────────────────────────────────────────────────────────────────────

create table public.transcripts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  file_name text not null,
  file_size bigint,
  file_type text,
  language text,           -- spoken language detected by Whisper
  ui_language text,        -- locale of the request (en/fr/de/...)
  text text,
  segments jsonb,
  duration_seconds numeric,
  source text default 'web', -- 'web' / future: 'api' / 'integration'
  created_at timestamptz not null default now()
);

create index transcripts_user_id_created_at_idx
  on public.transcripts (user_id, created_at desc);

alter table public.transcripts enable row level security;

create policy "transcripts_select_own"
  on public.transcripts for select
  using (auth.uid() = user_id);

create policy "transcripts_insert_own"
  on public.transcripts for insert
  with check (auth.uid() = user_id);

create policy "transcripts_delete_own"
  on public.transcripts for delete
  using (auth.uid() = user_id);

-- ─────────────────────────────────────────────────────────────────────────
-- notification_preferences
-- Per-user preferences for what we email (transcript-ready, marketing, etc).
-- Default: ON for transcript-ready, OFF for everything else.
-- ─────────────────────────────────────────────────────────────────────────

create table public.notification_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  notify_on_transcript_ready boolean not null default true,
  notify_product_updates boolean not null default false,
  updated_at timestamptz not null default now()
);

alter table public.notification_preferences enable row level security;

create policy "notification_preferences_select_own"
  on public.notification_preferences for select
  using (auth.uid() = user_id);

create policy "notification_preferences_insert_own"
  on public.notification_preferences for insert
  with check (auth.uid() = user_id);

create policy "notification_preferences_update_own"
  on public.notification_preferences for update
  using (auth.uid() = user_id);
