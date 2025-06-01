"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const categories = ["All", "Hackathon", "Cultural", "Sports", "Workshop", "Others"]

interface CategoryFilterProps {
  onCategoryChange?: (category: string) => void
}

export default function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    onCategoryChange?.(category)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap gap-3 justify-center py-8"
    >
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleCategoryClick(category)}
          className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-medium ${
            selectedCategory === category
              ? "bg-gradient-to-r from-primary to-purple-600 text-white border-transparent shadow-lg"
              : "bg-background/50 text-foreground border-border hover:border-primary/50 hover:bg-primary/5"
          }`}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  )
}
