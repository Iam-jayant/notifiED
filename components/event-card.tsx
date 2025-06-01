"use client"

import { Calendar, MapPin, Users, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import SocialShare from "@/components/social-share"
import { motion } from "framer-motion"

interface EventCardProps {
  event: {
    id: string
    title: string
    theme: string
    date: string
    location: string
    status: "Live" | "Offline" | "Online"
    type: "Open" | "Closed"
    participants?: number
    tags?: string[]
  }
  index?: number
}

export default function EventCard({ event, index = 0 }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-6 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <motion.h3
              className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
              whileHover={{ x: 5 }}
            >
              {event.title}
            </motion.h3>
            <p className="text-muted-foreground text-sm">{event.theme}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {event.tags?.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <motion.div className="flex items-center gap-3 text-sm text-muted-foreground" whileHover={{ x: 5 }}>
            <Calendar className="h-4 w-4 text-primary" />
            {event.date}
          </motion.div>
          <motion.div className="flex items-center gap-3 text-sm text-muted-foreground" whileHover={{ x: 5 }}>
            <MapPin className="h-4 w-4 text-primary" />
            {event.location}
          </motion.div>
          {event.participants && (
            <motion.div className="flex items-center gap-3 text-sm text-muted-foreground" whileHover={{ x: 5 }}>
              <Users className="h-4 w-4 text-primary" />
              {event.participants} participants
            </motion.div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                event.status === "Live"
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                  : event.status === "Online"
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              {event.status}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                event.type === "Open"
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
              }`}
            >
              {event.type}
            </span>
          </div>
          <div className="flex gap-2">
            <SocialShare title={event.title} />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white group">
                Apply Now
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
