"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"

const Download = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
)

const ArrowDown = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
)

const Github = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

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

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Nikhil_Jindal_Resume.pdf"
    link.download = "Nikhil_Jindal_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-500/3 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full blur-lg opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <Image
                src="/nikhil-profile.jpg"
                alt="Nikhil Jindal - Full-Stack Developer"
                width={200}
                height={200}
                className="relative rounded-full mx-auto border-4 border-slate-300 dark:border-slate-600 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-slate-400 dark:group-hover:border-slate-500 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
              <span className="text-slate-900 dark:text-white">Nikhil Jindal</span>
            </h1>

            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 font-semibold min-h-[2rem] sm:min-h-[2.5rem]">
                <span className="inline-block">{displayText}</span>
                <span className="animate-pulse text-slate-600 dark:text-slate-400">|</span>
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-700 dark:from-slate-400 dark:to-slate-500 mx-auto rounded-full"></div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
              Passionate full-stack developer crafting exceptional digital experiences with React, Node.js, and modern
              web technologies. Specialized in building scalable, user-centric applications that drive business growth.
            </p>

            <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="https://github.com/KingNJ24"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 shadow-md"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 dark:text-slate-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhil-jindal-a83a93259/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 shadow-md"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 dark:text-slate-300" />
              </a>
              <a
                href="mailto:nickglobal24@gmail.com"
                className="p-2 sm:p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 shadow-md"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 dark:text-slate-300" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl shadow-lg px-6 sm:px-8 py-3 text-sm sm:text-base"
                onClick={handleDownloadResume}
              >
                <Download />
                <span className="ml-2">Download Resume</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-slate-500 border-2 px-6 sm:px-8 py-3 bg-transparent text-sm sm:text-base border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <a href="#about" className="flex items-center">
                  <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
                  <span className="ml-2">Explore Work</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
