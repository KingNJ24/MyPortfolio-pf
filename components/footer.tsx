import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary-foreground/10">
              <a href="https://github.com/KingNJ24" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary-foreground/10">
              <a href="https://www.linkedin.com/in/nikhil-jindal-a83a93259/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary-foreground/10">
              <a href="mailto:nickglobal24@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
          <p className="text-primary-foreground/80">© 2024 Nikhil Jindal. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
