import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://krdskprrlbrxquscizro.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyZHNrcHJybGJyeHF1c2NpenJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NjY3NjAsImV4cCI6MjAyODI0Mjc2MH0.EFKsqM6EjJOLYCJ9_JUUifsi4f0Wc8XooRK1DOQApeY"
export const supabase = createClient(supabaseUrl, supabaseKey)