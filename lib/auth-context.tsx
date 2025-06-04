"use client"

import React, { createContext, useContext, ReactNode, useState, useEffect } from "react"
import { auth } from "@/lib/firebase-client"
import { onAuthStateChanged, User } from "firebase/auth"

// Create the AuthContext
const AuthContext = createContext<User | null>(null)

// AuthProvider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Listen for Firebase auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => unsubscribe() // Cleanup the listener on unmount
  }, [])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

// Hook to use the AuthContext
export const useAuth = () => useContext(AuthContext)