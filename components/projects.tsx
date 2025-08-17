import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "CAMP (College Administration & Management Platform)",
    description:
      "A college management system streamlining event space allocation and approval workflows, reducing request processing time by 50%.",
    image: "/college-management-dashboard.png",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/KingNJ24",
    live: "#",
    year: "2024",
    achievements: [
      "Reduced request processing time by 50%",
      "Increased operational efficiency by 40%",
      "Improved administrative transparency by 35%",
    ],
  },
  {
    title: "JStore - E-Commerce Platform",
    description:
      "A full-stack e-commerce platform handling 100+ products with Sanity CMS admin panel and Stripe payment integration.",
    image: "/modern-ecommerce-interface.png",
    tech: ["React", "Next.js", "Sanity CMS", "Stripe", "Node.js"],
    github: "https://github.com/KingNJ24",
    live: "https://j-store-h.vercel.app/",
    year: "2024",
    achievements: [
      "Optimized load speed by 30%",
      "99.9% transaction success rate",
      "Reduced checkout abandonment by 25%",
    ],
  },
  {
    title: "ODOP (One District One Product)",
    description:
      "Platform enabling 50+ Kashmiri vendors to sell district-specific products with blockchain-based tracking for authenticity.",
    image: "/local-marketplace-platform.png",
    tech: ["React", "Node.js", "Blockchain", "MongoDB", "Express"],
    github: "https://github.com/KingNJ24",
    live: "#",
    year: "2023",
    achievements: [
      "Increased vendor reach by 40%",
      "100% product authenticity tracking",
      "Reduced registration time by 60%",
    ],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`bg-card border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-card-foreground text-lg">{project.title}</CardTitle>
                    <span className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded">{project.year}</span>
                  </div>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-card-foreground mb-2">Key Achievements:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-secondary mr-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
