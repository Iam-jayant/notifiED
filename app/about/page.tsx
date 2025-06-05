"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navbar */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Welcome to notifiED! We are dedicated to helping individuals discover amazing events, workshops, hackathons, and competitions that shape their future. Our platform connects like-minded individuals and accelerates career growth through meaningful experiences.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Whether you're looking to join a community, build your skills, or explore new opportunities, notifiED is here to guide you every step of the way.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4"
            onClick={() => window.location.href = "/events"}
          >
            Explore Events
          </Button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}