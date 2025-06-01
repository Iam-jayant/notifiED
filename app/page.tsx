"use client"

import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import HeroSlider from "@/components/hero-slider"
import CategoryFilter from "@/components/category-filter"
import EventCard from "@/components/event-card"
import BenefitsSection from "@/components/benefits-section"
import SourcePlatformsSection from "@/components/source-platforms-section"
import NewsletterSection from "@/components/newsletter-section"
import BlogSection from "@/components/blog-section"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { mockEvents } from "@/lib/mock-data"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Filter events based on selected category and show only first 3
  const filteredEvents = mockEvents
    .filter((event) => selectedCategory === "All" || event.category === selectedCategory)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSlider />

      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-primary font-medium">Featured Events</span>
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Discover Amazing Events</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of participants in events that matter to you
          </p>
        </motion.div>

        <CategoryFilter onCategoryChange={setSelectedCategory} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg group hover-lift"
          >
            <Link href="/events">
              Explore All Events
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <BenefitsSection />
      <SourcePlatformsSection />
      <NewsletterSection />
      <BlogSection />
      <Footer />
    </div>
  )
}
