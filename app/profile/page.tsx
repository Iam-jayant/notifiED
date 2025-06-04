"use client"

import { useState, useEffect } from "react"
import { auth } from "@/lib/firebase-client"
import { onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfilePage() {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(true)
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    college: "",
    education: "UG Program",
  })

  // Load user data from Firebase Auth and localStorage
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Try to get saved data from localStorage
        const savedData = localStorage.getItem(`profile_${user.uid}`)
        if (savedData) {
          setProfileData(JSON.parse(savedData))
        } else {
          // If no saved data, use Firebase user data
          setProfileData({
            name: user.displayName || "",
            email: user.email || "",
            college: "",
            education: "UG Program",
          })
        }
      } else {
        // If no user is signed in, redirect to login
        router.push('/login')
      }
    })

    return () => unsubscribe()
  }, [router])

  const handleSave = () => {
    // Validate required fields
    if (!profileData.name || !profileData.college || !profileData.education) {
      alert("Please fill in all required fields")
      return
    }

    try {
      // Save to localStorage with user ID as part of the key
      const user = auth.currentUser
      if (user) {
        localStorage.setItem(`profile_${user.uid}`, JSON.stringify(profileData))
        setIsEditing(false)
        router.push("/") // Redirect to home page after saving
      }
    } catch (error) {
      console.error("Error saving profile data:", error)
      alert("Failed to save profile data. Please try again.")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="w-full">
        <Navbar />
      </div>

      <div className="flex-1 container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold">My Profile</CardTitle>
                  <CardDescription>Manage your personal information</CardDescription>
                </div>
                {isEditing && (
                  <Button 
                    onClick={handleSave} 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Save Changes
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="required">Full Name</Label>
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    disabled={!isEditing}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    value={profileData.email} 
                    disabled 
                    className="bg-gray-50 dark:bg-gray-800"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education" className="required">Area of Study</Label>
                  <select
                    id="education"
                    value={profileData.education}
                    onChange={(e) => setProfileData({ ...profileData, education: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="highschool">Highschool</option>
                    <option value="preuniversity">Pre-University</option>
                    <option value="ug">UG Program</option>
                    <option value="pg">PG Program</option>
                    <option value="diploma">Diploma</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="college" className="required">College Name</Label>
                  <Input
                    id="college"
                    value={profileData.college}
                    onChange={(e) => setProfileData({ ...profileData, college: e.target.value })}
                    disabled={!isEditing}
                    placeholder="Enter your college name"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}