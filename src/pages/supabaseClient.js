
// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL; // Your Supabase URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY; // Your Supabase Anon Key

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and Anon Key must be provided");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
