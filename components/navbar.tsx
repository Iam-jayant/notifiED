"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import UserAvatar from "@/components/user-avatar"
import MobileMenu from "@/components/mobile-menu"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would come from auth context in real app

  // Mock user data - in real app this would come from auth context
  const mockUser = isLoggedIn
    ? {
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      }
    : null

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 glass-effect border-b"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            >
              notifiED
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors hover:text-primary ${pathname === "/" ? "text-primary font-medium" : "text-muted-foreground"}`}
            >
              Home
            </Link>
            <Link
              href="/events"
              className={`transition-colors hover:text-primary ${pathname === "/events" ? "text-primary font-medium" : "text-muted-foreground"}`}
            >
              Events
            </Link>
            <Link
              href="/submit-event"
              className={`transition-colors hover:text-primary ${pathname === "/submit-event" ? "text-primary font-medium" : "text-muted-foreground"}`}
            >
              Submit Event
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            {mockUser ? (
              <UserAvatar user={mockUser} />
            ) : (
              <>
                <div className="hidden md:flex items-center gap-3">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                      onClick={() => setIsLoggedIn(true)}
                    >
                      <Link href="/signup">Join</Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild variant="ghost" onClick={() => setIsLoggedIn(true)}>
                      <Link href="/login">Sign in</Link>
                    </Button>
                  </motion.div>
                </div>
              </>
            )}
            <MobileMenu />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
