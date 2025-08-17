"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

// Custom SVG components
const MenuIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const XIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMobileMenuClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
            Portfolio
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            className="md:hidden bg-card/50 hover:bg-primary/10 border-border hover:border-primary/50 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border/30 animate-fade-in-up">
            <div className="flex flex-col space-y-4 pt-6">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleMobileMenuClick(item.href)}
                  className={`text-left text-foreground/80 hover:text-primary transition-all duration-300 hover:translate-x-3 py-3 px-2 rounded-lg hover:bg-card/50 font-medium animate-slide-in-left animate-delay-${index * 100}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
