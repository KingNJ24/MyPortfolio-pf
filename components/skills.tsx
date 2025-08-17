import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Databases & Backend",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "SQL", level: 78 },
      { name: "REST API", level: 88 },
      { name: "API Integration", level: 85 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 85 },
      { name: "AWS", level: 70 },
      { name: "Postman", level: 88 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Skills & Technologies</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`animate-fade-in-up`}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <Card className="p-8 bg-card border-border">
                  <h3 className="text-xl font-semibold text-card-foreground mb-6 text-center">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-card-foreground font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animate-delay-800">
              {[
                "Communication",
                "Team Collaboration",
                "Leadership",
                "Critical Thinking",
                "Problem Solving",
                "Public Speaking",
                "Agile Methodologies",
                "Technical Documentation",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium hover:bg-secondary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
