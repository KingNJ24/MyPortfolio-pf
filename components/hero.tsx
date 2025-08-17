"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Full-Stack Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <div className="relative inline-block group">
              <Image
                src="/nikhil-profile.jpg"
                alt="Nikhil Jindal - Full-Stack Developer"
                width={200}
                height={200}
                className="rounded-full mx-auto border-4 border-primary/20 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl group-hover:border-primary/40"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up hover:text-primary transition-colors duration-300">
            Nikhil Jindal
          </h1>

          <h2 className="text-xl md:text-2xl text-secondary font-semibold mb-6 animate-fade-in-up animate-delay-100 min-h-[2rem]">
            <span className="inline-block">{displayText}</span>
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Full-stack developer with expertise in React, Node.js, and Express, delivering high-performance web
            applications. Adept at crafting responsive UIs, optimizing backend logic, and integrating APIs for seamless,
            secure, and scalable solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/50 bg-transparent"
            >
              <a href="#about">
                <ArrowDown className="mr-2 h-4 w-4 animate-bounce" />
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
