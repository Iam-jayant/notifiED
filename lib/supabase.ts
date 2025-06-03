import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types based on the schema
export interface User {
  id: string
  email: string
  full_name: string | null
  phone: string | null
  city: string | null
  college: string | null
  avatar_url: string | null
  created_at: string
  updated_at: string
}

export interface Event {
  id: string
  title: string
  theme: string | null
  description: string | null
  date: string
  location: string
  status: "Live" | "Offline" | "Online"
  type: "Open" | "Closed"
  participants: number
  tags: string[]
  category: string
  organizer_id: string | null
  created_at: string
  updated_at: string
}

export interface Bookmark {
  id: string
  user_id: string
  event_id: string
  created_at: string
}
