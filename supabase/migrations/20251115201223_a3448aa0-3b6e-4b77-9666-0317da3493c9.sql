-- Create contacts table to store contact form submissions
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  project_type TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contact submissions (public form)
CREATE POLICY "Anyone can submit contact form"
ON public.contacts
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create policy to prevent public reading of contacts (admin-only in future)
CREATE POLICY "No public read access to contacts"
ON public.contacts
FOR SELECT
TO authenticated
USING (false);

-- Add index on created_at for efficient querying
CREATE INDEX idx_contacts_created_at ON public.contacts(created_at DESC);