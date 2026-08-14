-- Migration: create trial_signups table
-- Run this in the Supabase SQL Editor (or via supabase CLI)

CREATE TABLE IF NOT EXISTS public.trial_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company_name TEXT,
  product TEXT DEFAULT 'ai-receptionist',
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  read BOOLEAN DEFAULT FALSE NOT NULL
);

-- Index for querying unread trial signups
CREATE INDEX IF NOT EXISTS idx_trial_signups_read ON public.trial_signups (read, created_at DESC);

-- Enable Row-Level Security
ALTER TABLE public.trial_signups ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the public /ai-agent/signup form)
CREATE POLICY "allow_public_insert" ON public.trial_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all trial signups
CREATE POLICY "allow_auth_select" ON public.trial_signups
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update (e.g., mark as read)
CREATE POLICY "allow_auth_update" ON public.trial_signups
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
