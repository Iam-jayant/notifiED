import { supabase, type Event } from "./supabase"

export class EventsAPI {
  // Get all events with optional filtering
  static async getEvents(filters?: {
    category?: string
    search?: string
    status?: string
    limit?: number
  }) {
    let query = supabase.from("events").select("*").order("created_at", { ascending: false })

    if (filters?.category && filters.category !== "All") {
      query = query.eq("category", filters.category)
    }

    if (filters?.search) {
      query = query.or(`title.ilike.%${filters.search}%,theme.ilike.%${filters.search}%`)
    }

    if (filters?.status) {
      query = query.eq("status", filters.status)
    }

    if (filters?.limit) {
      query = query.limit(filters.limit)
    }

    const { data, error } = await query

    if (error) {
      console.error("Error fetching events:", error)
      throw error
    }

    return data as Event[]
  }

  // Get a single event by ID
  static async getEvent(id: string) {
    const { data, error } = await supabase.from("events").select("*").eq("id", id).single()

    if (error) {
      console.error("Error fetching event:", error)
      throw error
    }

    return data as Event
  }

  // Create a new event
  static async createEvent(eventData: Omit<Event, "id" | "created_at" | "updated_at">) {
    const { data, error } = await supabase.from("events").insert([eventData]).select().single()

    if (error) {
      console.error("Error creating event:", error)
      throw error
    }

    return data as Event
  }

  // Update an event
  static async updateEvent(id: string, updates: Partial<Event>) {
    const { data, error } = await supabase
      .from("events")
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error("Error updating event:", error)
      throw error
    }

    return data as Event
  }

  // Delete an event
  static async deleteEvent(id: string) {
    const { error } = await supabase.from("events").delete().eq("id", id)

    if (error) {
      console.error("Error deleting event:", error)
      throw error
    }
  }
}
