import { supabase, type User } from "./supabase"

export class UsersAPI {
  // Get current user profile
  static async getCurrentUser() {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return null
    }

    const { data, error } = await supabase.from("users").select("*").eq("id", user.id).single()

    if (error) {
      console.error("Error fetching user profile:", error)
      return null
    }

    return data as User
  }

  // Create or update user profile
  static async upsertUserProfile(userData: Partial<User>) {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      throw new Error("User not authenticated")
    }

    const { data, error } = await supabase
      .from("users")
      .upsert([
        {
          id: user.id,
          email: user.email!,
          ...userData,
          updated_at: new Date().toISOString(),
        },
      ])
      .select()
      .single()

    if (error) {
      console.error("Error updating user profile:", error)
      throw error
    }

    return data as User
  }

  // Get user bookmarks
  static async getUserBookmarks(userId: string) {
    const { data, error } = await supabase
      .from("bookmarks")
      .select(`
        *,
        events (*)
      `)
      .eq("user_id", userId)

    if (error) {
      console.error("Error fetching bookmarks:", error)
      throw error
    }

    return data
  }

  // Add bookmark
  static async addBookmark(eventId: string) {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      throw new Error("User not authenticated")
    }

    const { data, error } = await supabase
      .from("bookmarks")
      .insert([
        {
          user_id: user.id,
          event_id: eventId,
        },
      ])
      .select()
      .single()

    if (error) {
      console.error("Error adding bookmark:", error)
      throw error
    }

    return data
  }

  // Remove bookmark
  static async removeBookmark(eventId: string) {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      throw new Error("User not authenticated")
    }

    const { error } = await supabase.from("bookmarks").delete().eq("user_id", user.id).eq("event_id", eventId)

    if (error) {
      console.error("Error removing bookmark:", error)
      throw error
    }
  }
}