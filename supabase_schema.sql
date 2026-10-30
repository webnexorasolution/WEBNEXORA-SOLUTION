-- ========================================================
-- WEBNEXORA SOLUTION — DATABASE SCHEMA & RLS SECURITY AUDIT
-- Production PostgreSQL / Supabase Schema with Strict Row-Level Security
-- ========================================================

-- 1. Create Inquiries Table
CREATE TABLE IF NOT EXISTS public.inquiries (
    id TEXT PRIMARY KEY DEFAULT ('inq-' || extract(epoch from now())::bigint),
    name TEXT NOT NULL CHECK (char_length(name) <= 120),
    company TEXT DEFAULT 'Direct Client' CHECK (char_length(company) <= 150),
    email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    phone TEXT DEFAULT '' CHECK (char_length(phone) <= 40),
    service TEXT NOT NULL DEFAULT 'Custom Website Development',
    budget TEXT DEFAULT 'Flexible',
    timeline TEXT DEFAULT 'Flexible',
    website TEXT DEFAULT '',
    message TEXT NOT NULL CHECK (char_length(message) <= 4000),
    status TEXT NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Proposal Sent', 'Converted', 'Archived')),
    source TEXT DEFAULT 'Contact Scope Planner',
    utm_source TEXT DEFAULT 'organic',
    utm_campaign TEXT DEFAULT 'direct',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 2. Performance Indexes
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON public.inquiries (status);
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON public.inquiries (email);

-- 3. Enable Row Level Security (RLS)
-- Crucial Security Hardening: Protects customer data from public scraping or tampering
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policy: Public Anonymous Visitors (anon)
-- Visitors can ONLY INSERT new inquiries from the contact form.
-- They CANNOT SELECT (read), UPDATE, or DELETE any existing client records!
CREATE POLICY "Allow anonymous lead submission" 
ON public.inquiries 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- 5. RLS Policy: Authenticated Agency Staff (authenticated)
-- Authenticated staff accounts have full read and write access to manage the pipeline.
CREATE POLICY "Allow authenticated staff full access" 
ON public.inquiries 
FOR ALL 
TO authenticated 
USING (true)
WITH CHECK (true);

-- ========================================================
-- END OF SCHEMA DEFINITION
-- ========================================================
