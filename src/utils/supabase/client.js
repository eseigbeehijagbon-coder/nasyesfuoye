import { createBrowserClient } from '@supabase/ssr';

let browserClient;

export function createClient() {
  if (browserClient) return browserClient;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !publishableKey) {
    throw new Error('Supabase is not configured for this deployment.');
  }

  browserClient = createBrowserClient(supabaseUrl, publishableKey, {
    cookieOptions: { secure: process.env.NODE_ENV === 'production' },
  });

  return browserClient;
}
