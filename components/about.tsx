import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="aspect-square bg-card rounded-lg flex items-center justify-center">
                <img
                  src="/nikhil-profile.jpg"
                  alt="Nikhil Jindal - Full Stack Developer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <Card className="p-8 bg-card border-border">
                <p className="text-lg text-card-foreground leading-relaxed mb-6">
                  Currently pursuing Bachelor of Technology in Information Technology at ABES Institute of Technology
                  (2022-2026). Recently completed an internship as Junior Front-End Developer at Cogentix Systems, where
                  I developed responsive UIs and collaborated with a 6-member team to deliver features 20% faster than
                  initial estimates.
                </p>
                <p className="text-lg text-card-foreground leading-relaxed mb-6">
                  I specialize in full-stack development with React, Node.js, and modern web technologies. My projects
                  include college management systems, e-commerce platforms, and blockchain-based solutions that have
                  improved operational efficiency and user experience significantly.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Team Collaboration", "Leadership", "Critical Thinking"].map((trait) => (
                    <span key={trait} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {trait}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
