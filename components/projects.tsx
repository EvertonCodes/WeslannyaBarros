"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { Users, FileText, Award } from "lucide-react"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [pressedIndex, setPressedIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )

    const element = document.getElementById("projetos")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handlePressStart = (idx: number) => () => setPressedIndex(idx)
  const handlePressEnd = () => setPressedIndex(null)

  type ProjectStatus = "Concluído" | "Em andamento"

  interface Project {
    title: string
    type: string
    description: string
    highlights: string[]
    icon: React.ElementType
    status: ProjectStatus
  }

  const projects: Project[] = [
    {
      title: "Grupo de Estudos - Anatomia e Fisiologia",
      type: "Atividade Acadêmica",
      description:
        "Participação em grupo de estudos semanal com colegas do curso, focando em anatomia humana e fisiologia básica. Colaboração na organização de materiais e sessões de revisão.",
      highlights: ["Encontros semanais", "Alunos ativos", "Material colaborativo"],
      icon: Users,
      status: "Em andamento",
    },
    {
      title: "Projeto de Extensão: Fisioterapia e Mobilidade do Idoso",
      type: "Extensão Universitária",
      description:
        "Participação em projeto de extensão voltado à promoção da mobilidade e qualidade de vida de idosos, com atividades de fisioterapia preventiva, exercícios funcionais e orientações de saúde.",
      highlights: ["Educação em saúde", "Mobilidade", "Trabalho em equipe"],
      icon: FileText,
      status: "Em andamento",
    },
    {
      title: "Seminário: Mentalidade Ágil e Inteligência Emocional",
      type: "Apresentação Acadêmica",
      description:
        "Apresentação sobre a importância da mentalidade ágil e da inteligência emocional na formação e atuação do fisioterapeuta, abordando competências socioemocionais e adaptação a ambientes clínicos.",
      highlights: ["Engajamento", "Competências emocionais", "Mentalidade ágil"],
      icon: Award,
      status: "Concluído",
    },
  ]

  const statusColors: Record<ProjectStatus, string> = {
    Concluído: "bg-green-100 text-green-800",
    "Em andamento": "bg-blue-100 text-blue-800",
  }

  return (
    <section
      id="projetos"
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-28 h-28 bg-primary/10 rounded-full animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full animate-float" />
      </div>

      <div className="container mx-auto px-4">
        {/* Título e descrição */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Projetos e Atividades</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Meu envolvimento em atividades acadêmicas e projetos de extensão reflete meu
            compromisso com o aprendizado colaborativo e o desenvolvimento de habilidades
            de liderança desde o início do curso.
          </p>
        </div>

        {/* Cards de projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`glass-effect p-6 transition-transform duration-500
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                hover:shadow-[0_10px_20px_rgba(112,130,56,0.6)] hover:scale-105
                ${pressedIndex === index ? "shadow-[0_10px_20px_rgba(112,130,56,0.6)] scale-105" : ""}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
              onPointerDown={handlePressStart(index)}
              onPointerUp={handlePressEnd}
              onPointerCancel={handlePressEnd}
              onPointerLeave={handlePressEnd}
              onTouchStart={handlePressStart(index)}
              onTouchEnd={handlePressEnd}
              onTouchCancel={handlePressEnd}
              onFocus={() => setPressedIndex(index)}
              onBlur={handlePressEnd}
              tabIndex={0}
            >
              <CardContent className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                </div>

                <div className="flex-1">
                  <p className="text-sm text-primary font-medium mb-2">{project.type}</p>
                  <h3 className="font-semibold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2 py-1 bg-accent text-accent-foreground text-xs rounded"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}