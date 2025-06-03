"use client"

import dynamic from "next/dynamic"

// Dynamically import components that use browser APIs
// export const TechBackground = dynamic(() => import("./tech-background"), {
//   ssr: false,
//   loading: () => <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20" />,
// })

export const SocialShare = dynamic(() => import("./social-share"), {
  ssr: false,
  loading: () => <div className="w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />,
})
