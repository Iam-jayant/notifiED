"use client"

import { motion } from "framer-motion"

export default function SourcePlatformsSection() {
  const platforms = [
    { name: "Unstop", logo: "https://unstop.com/assets/images/logo.svg" },
    { name: "Devfolio", logo: "https://devfolio.co/_next/static/media/devfolio-logo.e3d9b9e6.svg" },
    { name: "Dare2Compete", logo: "https://d2c.io/assets/images/logo.svg" },
    { name: "HackerEarth", logo: "https://www.hackerearth.com/static/images/logo.svg" },
    { name: "CodeChef", logo: "https://www.codechef.com/misc/logo.svg" },
    { name: "Codeforces", logo: "https://codeforces.org/s/0/images/codeforces-logo.png" },
  ]

  // Duplicate the array for seamless scrolling
  const duplicatedPlatforms = [...platforms, ...platforms]

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">We Track Events From</h2>
          <p className="text-sm text-muted-foreground">Aggregating the best events from top platforms</p>
        </motion.div>

        <div className="relative">
          <div className="flex animate-scroll">
            {duplicatedPlatforms.map((platform, index) => (
              <div key={`${platform.name}-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 p-4 hover:border-primary/50 transition-all duration-300 w-32 h-16 flex items-center justify-center">
                  <span className="text-sm font-medium text-foreground text-center">{platform.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
