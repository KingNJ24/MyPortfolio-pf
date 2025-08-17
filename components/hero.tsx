import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <Image
              src="/nikhil-profile.jpg"
              alt="Nikhil Jindal - Full-Stack Developer"
              width={200}
              height={200}
              className="rounded-full mx-auto border-4 border-primary/20 shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">Nikhil Jindal</h1>
          <h2 className="text-xl md:text-2xl text-secondary font-semibold mb-6 animate-fade-in-up animate-delay-100">
            Full-Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Full-stack developer with expertise in React, Node.js, and Express, delivering high-performance web
            applications. Adept at crafting responsive UIs, optimizing backend logic, and integrating APIs for seamless,
            secure, and scalable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#about">
                <ArrowDown className="mr-2 h-4 w-4" />
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
