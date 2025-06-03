// "use client"

// import { useState, useEffect } from "react"
// import { Bookmark, BookmarkCheck } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { useAuth } from "@/lib/auth-context"
// import { UsersAPI } from "@/lib/users-api"
// import { useToast } from "@/hooks/use-toast"

// interface BookmarkButtonProps {
//   eventId: string
// }

// export default function BookmarkButton({ eventId }: BookmarkButtonProps) {
//   const { user } = useAuth()
//   const [isBookmarked, setIsBookmarked] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [checkingStatus, setCheckingStatus] = useState(true)
//   const { toast } = useToast()

//   useEffect(() => {
//     // Check if event is bookmarked
//     const checkBookmarkStatus = async () => {
//       if (!user) {
//         setCheckingStatus(false)
//         return
//       }

//       try {
//         const bookmarks = await UsersAPI.getUserBookmarks(user.id)
//         const isAlreadyBookmarked = bookmarks.some((bookmark: any) => bookmark.event_id === eventId)
//         setIsBookmarked(isAlreadyBookmarked)
//       } catch (error) {
//         console.error("Error checking bookmark status:", error)
//       } finally {
//         setCheckingStatus(false)
//       }
//     }

//     checkBookmarkStatus()
//   }, [eventId, user])

//   const toggleBookmark = async () => {
//     if (!user) {
//       toast({
//         title: "Authentication required",
//         description: "Please sign in to bookmark events",
//         variant: "destructive",
//       })
//       return
//     }

//     setLoading(true)
//     try {
//       if (isBookmarked) {
//         await UsersAPI.removeBookmark(eventId)
//         toast({
//           title: "Bookmark removed",
//           description: "Event removed from your bookmarks",
//         })
//       } else {
//         await UsersAPI.addBookmark(eventId)
//         toast({
//           title: "Bookmarked!",
//           description: "Event added to your bookmarks",
//         })
//       }
//       setIsBookmarked(!isBookmarked)
//     } catch (error) {
//       console.error("Error toggling bookmark:", error)
//       toast({
//         title: "Error",
//         description: "Failed to update bookmark",
//         variant: "destructive",
//       })
//     } finally {
//       setLoading(false)
//     }
//   }

//   if (checkingStatus) {
//     return (
//       <Button variant="outline" size="icon" disabled>
//         <Bookmark className="h-4 w-4" />
//       </Button>
//     )
//   }

//   return (
//     <Button
//       variant="outline"
//       size="icon"
//       onClick={toggleBookmark}
//       disabled={loading}
//       className={isBookmarked ? "text-primary border-primary" : ""}
//     >
//       {isBookmarked ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
//     </Button>
//   )
// }
