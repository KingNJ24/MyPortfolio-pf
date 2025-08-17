import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    role: "Junior Front-End Developer (Ex-Intern)",
    company: "Cogentix Systems",
    period: "Jan 2025 - Jul 2025",
    achievements: [
      "Developed responsive UIs using HTML, CSS, JavaScript, and front-end frameworks",
      "Improved cross-device compatibility by 30% and contributed to 5+ live client projects",
      "Collaborated with a 6-member team to deliver features 20% faster than initial estimates",
      "Enhanced user interaction and accessibility scores by 25% through close collaboration with UI/UX designers",
    ],
  },
]

const education = [
  {
    degree: "Bachelor of Technology (Information Technology)",
    institution: "ABES Institute of Technology",
    period: "2022 - 2026",
    details: [
      "Currently pursuing IT degree with focus on full-stack development",
      "Completed multiple projects in web development and software engineering",
      "Active in coding competitions and technical workshops",
    ],
  },
  {
    degree: "Class 12th",
    institution: "St. Francis School",
    period: "2020 - 2022",
    details: ["Completed higher secondary education", "Developed interest in programming and technology"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Experience & Education</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5" />

            {/* Work Experience */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-8 text-center">Work Experience</h3>
              {experiences.map((exp, index) => (
                <div
                  key={exp.role}
                  className={`relative flex items-center mb-12 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-secondary rounded-full transform md:-translate-x-1.5 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"}`}>
                    <Card className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="text-card-foreground">{exp.role}</CardTitle>
                        <CardDescription className="text-secondary font-semibold">
                          {exp.company} • {exp.period}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground flex items-start">
                              <span className="text-secondary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-8 text-center">Education</h3>
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className={`relative flex items-center mb-12 animate-fade-in-up`}
                  style={{ animationDelay: `${(experiences.length + index) * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-secondary rounded-full transform md:-translate-x-1.5 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${(experiences.length + index) % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"}`}
                  >
                    <Card className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="text-card-foreground">{edu.degree}</CardTitle>
                        <CardDescription className="text-secondary font-semibold">
                          {edu.institution} • {edu.period}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {edu.details.map((detail, i) => (
                            <li key={i} className="text-muted-foreground flex items-start">
                              <span className="text-secondary mr-2">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
