"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-background via-background/95 to-primary/5 border-t border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="relative container mx-auto px-6 py-16">
        {/* Use flex container instead of grid */}
        <div className="flex flex-wrap justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4 flex-1 min-w-[250px]"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              notifiED
            </h3>
            <p className="text-muted-foreground leading-relaxed text-justify">
              Discover and join amazing events, hackathons, workshops, and competitions that shape your future. Connect
              with like-minded individuals and accelerate your career growth through meaningful experiences.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {[
            {
              title: "Platform",
              links: [
                { name: "All Events", href: "/events" },
                { name: "Hackathons", href: "/events?category=hackathon" },
                { name: "Workshops", href: "/events?category=workshop" },
                { name: "Submit Event", href: "/submit-event" },
              ],
            },
            {
              title: "Resources",
              links: [
                { name: "Blog", href: "./blog" },
                { name: "Help Center", href: "admin@notified.tech" },
                { name: "Community", href: "Not found" },
              ],
            },
          ].map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col flex-1 min-w-[200px]"
            >
              <h4 className="font-semibold text-foreground mb-6 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <motion.li key={link.name} whileHover={{ x: 5 }}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-border/50 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2025 notifiED. All rights reserved.
            </p>
            <p className="text-muted-foreground flex items-center gap-2 text-sm">
              Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by the Team notifiED
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}