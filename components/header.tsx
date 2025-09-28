"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("hero")

  const menuItems = [
    { id: "sobre", label: "Sobre" },
    { id: "formacao", label: "Formação" },
    { id: "experiencia", label: "Experiência" },
    { id: "projetos", label: "Projetos" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  // Detecta a seção visível
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3
      let current = "hero"

      for (const item of [...menuItems, { id: "contato", label: "Contato" }]) {
        const section = document.getElementById(item.id)
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = item.id
            break
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-lg border-b border-border/30 shadow-sm transition-colors">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("hero")} className="cursor-pointer">
            <div className="text-lg font-semibold tracking-tight text-primary transition-colors hover:opacity-90">
              Weslânnya Barros
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => {
              let isActive = false
              if (item.id === "experiencia" && (activeSection === "experiencia" || activeSection === "skills")) {
                isActive = true
              } else if (item.id === "projetos" && activeSection === "projetos") {
                isActive = true
              } else if (activeSection === item.id) {
                isActive = true
              }

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative cursor-pointer text-sm font-medium tracking-wide transition-colors
                    after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary 
                    after:transition-all after:duration-500
                    ${isActive 
                      ? "text-primary after:w-1/2" 
                      : "text-muted-foreground hover:text-primary hover:after:w-1/2 after:w-0"}
                  `}
                >
                  {item.label}
                </button>
              )
            })}
            <Button
              onClick={() => scrollToSection("contato")}
              className={`rounded-full px-5 py-2 text-sm shadow-md cursor-pointer transition 
                ${activeSection === "contato" 
                  ? "bg-primary text-primary-foreground ring-2 ring-primary/50" 
                  : "bg-primary/80 text-primary-foreground hover:bg-primary"}
              `}
            >
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/30 pt-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => {
                let isActive = false
                if (item.id === "experiencia" && (activeSection === "experiencia" || activeSection === "skills")) {
                  isActive = true
                } else if (item.id === "projetos" && activeSection === "projetos") {
                  isActive = true
                } else if (activeSection === item.id) {
                  isActive = true
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative text-left cursor-pointer text-sm font-medium transition-colors
                      after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary 
                      after:transition-all after:duration-500
                      ${isActive 
                        ? "text-primary after:w-1/2" 
                        : "text-muted-foreground hover:text-primary hover:after:w-1/2 after:w-0"}
                    `}
                  >
                    {item.label}
                  </button>
                )
              })}
              <Button
                onClick={() => scrollToSection("contato")}
                className={`rounded-full px-5 py-2 text-sm shadow-md cursor-pointer transition
                  ${activeSection === "contato" 
                    ? "bg-primary text-primary-foreground ring-2 ring-primary/50" 
                    : "bg-primary/80 text-primary-foreground hover:bg-primary"}
                `}
              >
                Contato
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}     