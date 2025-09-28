"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [pressedIndex, setPressedIndex] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )

    const element = document.getElementById("skills-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const technicalSkills = [
    { name: "Anatomia Humana", level: 98 },
    { name: "Fisiologia", level: 95 },
    { name: "Avaliação Fisioterapêutica Básica", level: 90 },
    { name: "Cinesiologia e Biomecânica", level: 85 },
    { name: "Exercícios Terapêuticos I", level: 85 },
    { name: "Fundamentos de Reabilitação", level: 85 },
  ]

  const softSkills = [
    "Comunicação empática",
    "Trabalho em equipe",
    "Pensamento crítico",
    "Adaptabilidade",
    "Liderança",
    "Resolução de problemas",
    "Aprendizagem contínua",
    "Ética profissional",
    "Proatividade",
    "Flexibilidade",
  ]

  const areas = [
    {
      title: "Fisioterapia Neurológica",
      description: "Reabilitação de pacientes com lesões do sistema nervoso central e periférico.",
    },
    {
      title: "Fisioterapia em UTI",
      description: "Atuação em Unidade de Terapia Intensiva, realizando reabilitação precoce, mobilização e cuidados respiratórios de pacientes críticos.",
    },
    {
      title: "Fisioterapia Respiratória",
      description: "Cuidados com pacientes com disfunções do sistema respiratório.",
    },
    {
      title: "Fisioterapia Esportiva",
      description: "Prevenção e tratamento de lesões em atletas e praticantes de atividade física.",
    },
  ]

  const handlePressStart = (id: string) => () => setPressedIndex(id)
  const handlePressEnd = () => setPressedIndex(null)

  return (
    <section
      id="skills-section"
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-20 w-28 h-28 bg-primary/10 rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/10 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Título e descrição */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Competências e Habilidades</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ao longo da minha formação, desenvolvi competências técnicas e interpessoais essenciais para a prática fisioterapêutica de qualidade.
          </p>
        </div>

        {/* Habilidades Técnicas e Interpessoais */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <Card
            className={`glass-effect p-6 transition-all duration-500 bg-white border border-gray-200
              hover:shadow-[0_10px_20px_rgba(112,130,56,0.6)] hover:scale-105
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              ${pressedIndex === "tech" ? "shadow-[0_10px_20px_rgba(112,130,56,0.6)] scale-105" : ""}`}
            onPointerDown={handlePressStart("tech")}
            onPointerUp={handlePressEnd}
            onPointerCancel={handlePressEnd}
            onPointerLeave={handlePressEnd}
            onTouchStart={handlePressStart("tech")}
            onTouchEnd={handlePressEnd}
            onTouchCancel={handlePressEnd}
            tabIndex={0}
          >
            <CardContent>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Habilidades Técnicas</h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-primary/20" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card
            className={`glass-effect p-6 transition-all duration-500 bg-white border border-gray-200
              hover:shadow-[0_10px_20px_rgba(112,130,56,0.6)] hover:scale-105
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              ${pressedIndex === "soft" ? "shadow-[0_10px_20px_rgba(112,130,56,0.6)] scale-105" : ""}`}
            onPointerDown={handlePressStart("soft")}
            onPointerUp={handlePressEnd}
            onPointerCancel={handlePressEnd}
            onPointerLeave={handlePressEnd}
            onTouchStart={handlePressStart("soft")}
            onTouchEnd={handlePressEnd}
            onTouchCancel={handlePressEnd}
            tabIndex={0}
          >
            <CardContent>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Habilidades Interpessoais</h3>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center p-3 bg-accent/50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Áreas de Interesse */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Áreas de Interesse</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {areas.map((area, index) => (
              <Card
                key={index}
                className={`glass-effect p-6 transition-all duration-500 bg-white border border-gray-200
                  hover:shadow-[0_10px_20px_rgba(112,130,56,0.6)] hover:scale-105
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                  ${pressedIndex === `area-${index}` ? "shadow-[0_10px_20px_rgba(112,130,56,0.6)] scale-105" : ""}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onPointerDown={handlePressStart(`area-${index}`)}
                onPointerUp={handlePressEnd}
                onPointerCancel={handlePressEnd}
                onPointerLeave={handlePressEnd}
                onTouchStart={handlePressStart(`area-${index}`)}
                onTouchEnd={handlePressEnd}
                onTouchCancel={handlePressEnd}
                tabIndex={0}
              >
                <CardContent>
                  <h4 className="font-semibold mb-2 text-primary">{area.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}