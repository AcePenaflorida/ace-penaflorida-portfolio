"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0, 12px 12px",
          }}
        ></div>
      </div>

      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["about", "projects", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <header
          id="about"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-8 sm:space-y-10">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Ace G.
                  <br />
                  <span className="text-muted-foreground">Peñaflorida</span>
                </h1>
              </div>

              <div className="flex items-start gap-6 p-6 border border-border rounded-lg bg-card/50 backdrop-blur-sm">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-muted flex-shrink-0 ring-2 ring-border">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/formal_pic.jpg-l88Bq8bU0H03jNsN3HRHK9mpFL9iEk.jpeg"
                    alt="Ace G. Peñaflorida"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h2 className="text-lg font-semibold">Computer Science Student</h2>
                    <p className="text-muted-foreground text-sm">Aspiring Data Scientist & ML Engineer</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-muted-foreground">Available for work • Batangas, Philippines</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Machine Learning", "Data Analysis", "SQL"].map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded border">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6 max-w-lg">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Consistent Dean's Lister crafting intelligent solutions at the intersection of
                  <span className="text-foreground"> machine learning</span>,
                  <span className="text-foreground"> data analysis</span>, and
                  <span className="text-foreground"> predictive modeling</span>.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Active member of SCRIPT organization with experience in database engineering and system architecture.
                  Passionate about transforming complex data into actionable insights and building scalable solutions.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-3 border border-border rounded-lg">
                    <div className="text-xl font-semibold">4+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center p-3 border border-border rounded-lg">
                    <div className="text-xl font-semibold">2026</div>
                    <div className="text-xs text-muted-foreground">Graduate</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center space-y-8 mt-8 lg:mt-0">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                  <div className="space-y-2">
                    <div className="text-foreground">Computer Science Student</div>
                    <div className="text-muted-foreground">@ Batangas State University</div>
                    <div className="text-xs text-muted-foreground">2022 — 2026</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground font-mono">EXPERTISE</div>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Machine Learning", "Data Analysis", "SQL", "Flutter", "Pandas"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground font-mono">CONTACT</div>
                  <div className="space-y-2">
                    <Link
                      href="mailto:ace.g.penaflorida@gmail.com"
                      className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      <span>ace.g.penaflorida@gmail.com</span>
                      <svg
                        className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                    <div className="text-sm text-muted-foreground">09920510122</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="projects"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Selected Projects</h2>
              <div className="text-sm text-muted-foreground font-mono">REPOSITORIES</div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {[
                {
                  title: "Data Sweep",
                  description:
                    "Dataset Cleaning App with Flutter frontend and Flask backend for CSV data cleaning and type detection using Pandas, NumPy, and SciPy.",
                  language: "Python",
                  languageColor: "bg-blue-500",
                  stars: 24,
                  forks: 8,
                  tech: ["Flutter", "Flask", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
                  updated: "2 months ago",
                  github: "https://github.com/AcePenaflorida/Data-Sweep",
                },
                {
                  title: "Invertrix",
                  description:
                    "Visual Inverse Matrix Cipher with Flask-based Python web app featuring matrix-based message encryption/decryption with dynamic key generation.",
                  language: "Python",
                  languageColor: "bg-blue-500",
                  stars: 18,
                  forks: 5,
                  tech: ["Flask", "HTML", "CSS", "JavaScript", "NumPy"],
                  updated: "3 months ago",
                  github: "https://github.com/PaulVincent-Calvo/Invertrix",
                },
                {
                  title: "Treasury Citadel",
                  description:
                    "Banking System Management with Python, Tkinter GUI, and MySQL database for employee and customer account management with transaction tracking.",
                  language: "Python",
                  languageColor: "bg-blue-500",
                  stars: 31,
                  forks: 12,
                  tech: ["Python", "Tkinter", "MySQL", "Matplotlib"],
                  updated: "4 months ago",
                  github: "https://github.com/PaulVincent-Calvo/Treasury-Citadel",
                },
                {
                  title: "PROLOGIS",
                  description:
                    "Dynamic Product Allocation in Logistics Management using C# with 0/1 Knapsack algorithm to optimize product allocation and maximize profit.",
                  language: "C#",
                  languageColor: "bg-purple-500",
                  stars: 15,
                  forks: 6,
                  tech: ["C#", "Algorithm", "CSV Processing", "Optimization"],
                  updated: "5 months ago",
                  github: "https://github.com/AcePenaflorida/PROLOGIS",
                },
              ].map((project, index) => (
                <article
                  key={index}
                  className="group p-6 border border-border rounded-lg bg-card hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
                        </svg>
                        <h3 className="text-lg font-semibold text-primary group-hover:underline">{project.title}</h3>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className={`w-3 h-3 rounded-full ${project.languageColor}`}></div>
                        {project.language}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-full border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 01-.3 0L8.6 15.7a1 1 0 00-.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                            />
                          </svg>
                          {project.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                            />
                          </svg>
                          {project.forks}
                        </div>
                        <span className="text-xs">Updated {project.updated}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 text-xs border border-border rounded-md hover:bg-accent transition-colors"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                        View Code
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => (sectionsRef.current[2] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology and data.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:ace.g.penaflorida@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">ace.g.penaflorida@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@ace_penaflorida" },
                  { name: "LinkedIn", handle: "Ace Peñaflorida" },
                  { name: "Email", handle: "ace.g.penaflorida@gmail.com" },
                  { name: "Phone", handle: "09920510122" },
                ].map((social) => (
                  <div key={social.name} className="p-4 border border-border rounded-lg">
                    <div className="space-y-2">
                      <div className="text-foreground">{social.name}</div>
                      <div className="text-sm text-muted-foreground break-all">{social.handle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-border">
            <div className="space-y-8 sm:space-y-10">
              <h3 className="text-2xl sm:text-3xl font-light">Recent Experience</h3>

              <div className="p-6 border border-border rounded-lg bg-card/30 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">Database Engineer</h4>
                      <p className="text-muted-foreground">Center for AI and Smart Technologies</p>
                      <p className="text-sm text-muted-foreground">Batangas State University (Pablo Borbon)</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground font-mono">RECENT</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span>Designed database schema and ERD for a system module</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span>Coordinated with other module teams for integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span>Used MySQL Workbench for ERD, documentation, and data dictionary</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["MySQL Workbench", "Database Design", "ERD", "System Integration"].map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-full border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Ace G. Peñaflorida. All rights reserved.</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 011.414 0zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
