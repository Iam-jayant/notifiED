"use client"

import { useState } from "react"
import { auth } from "@/lib/firebase-client"
import { signOut } from "firebase/auth"
import { useRouter } from "next/navigation"

export default function UserAvatar({ user }: { user: { name: string; email: string; avatar?: string } }) {
  const router = useRouter()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleLogout = async () => {
    try {
      await signOut(auth)
      router.push("/") // Redirect to home page after logout
    } catch (err) {
      console.error("Error logging out:", err)
    }
  }

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  return (
    <div className="relative">
      {/* Avatar */}
      <button onClick={toggleDropdown} className="focus:outline-none">
        <img
          src={user.avatar || "/default-avatar.png"}
          alt={user.name}
          className="w-10 h-10 rounded-full cursor-pointer"
        />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
          <button
            onClick={() => router.push("/profile")}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Profile
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center justify-between px-4 py-2 text-sm text-red-700 hover:bg-gray-100 w-full text-left"
          >
            <span>Logout</span>
            <svg
              className="w-4 h-4 ml-2 text-red-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
