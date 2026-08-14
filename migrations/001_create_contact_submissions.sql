-- Migration: create contact_submissions table
-- Run this in the Supabase SQL Editor (or via supabase CLI)

CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  business_name TEXT,
  message TEXT NOT NULL,
  sms_opt_in BOOLEAN DEFAULT FALSE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  read BOOLEAN DEFAULT FALSE NOT NULL
);

-- Index for querying unread submissions
CREATE INDEX IF NOT EXISTS idx_contact_submissions_read ON public.contact_submissions (read, created_at DESC);

-- Enable Row-Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the public contact form)
CREATE POLICY "allow_public_insert" ON public.contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all submissions
CREATE POLICY "allow_auth_select" ON public.contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update (e.g., mark as read)
CREATE POLICY "allow_auth_update" ON public.contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Add sms_opt_in column to existing table if it doesn't already exist
ALTER TABLE public.contact_submissions ADD COLUMN IF NOT EXISTS sms_opt_in BOOLEAN DEFAULT FALSE NOT NULL;

-- Add business_name column to existing table if it doesn't already exist
ALTER TABLE public.contact_submissions ADD COLUMN IF NOT EXISTS business_name TEXT;
