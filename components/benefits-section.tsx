"use client"

import { Target, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Filter by your college, domain, city",
      description: "Find events that are perfectly tailored to your location and interests",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Minimal clutter. Just events. Fast.",
      description: "Clean, focused interface that gets you to the events that matter",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Why Use notifiED?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the benefits that make notifiED your go-to platform for events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group hover-lift"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
