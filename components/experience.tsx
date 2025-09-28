"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Clock, MapPin, Users, Lightbulb } from "lucide-react"
import { useEffect, useState } from "react"

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const [pressedIndex, setPressedIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )

    const element = document.getElementById("experiencia")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      title: "Instrutora do Grupo de Estudos - Anatomia e Fisiologia",
      location: "Uninassau",
      period: "2025 - Atual",
      description:
        "Atuando como instrutora em grupo de estudos com colegas do curso, ministrando sessões colaborativas e auxiliando na compreensão de anatomia humana e fisiologia.",
      highlights: ["Ensino colaborativo", "Orientação", "Organização de conteúdos"],
      icon: Users,
      current: true,
    },
    {
      title: "Projeto de Extensão - Fisioterapia e Mobilidade do Idoso",
      location: "Uninassau",
      period: "2025 - Atual",
      description:
        "Atualmente participando de projeto de extensão voltado à promoção da saúde do idoso, explorando como a fisioterapia pode melhorar a mobilidade, prevenir quedas e estimular a autonomia.",
      highlights: ["Fisioterapia preventiva", "Melhoria da mobilidade", "Autonomia do idoso"],
      icon: Lightbulb,
      current: true,
    },
    {
      title: "Visita Técnica - Clínica Escola de Fisioterapia UFPE",
      location: "UFPE - Clínica Escola de Fisioterapia",
      period: "2025",
      description:
        "Participação em visita técnica à Clínica Escola de Fisioterapia da UFPE, observando atendimentos e técnicas de reabilitação aplicadas a diferentes tipos de pacientes, com foco em mobilidade e fortalecimento.",
      highlights: ["Observação prática", "Fisioterapia aplicada", "Reabilitação"],
      icon: BookOpen,
      current: true,
    },
  ]

  const handlePressStart = (idx: number) => () => setPressedIndex(idx)
  const handlePressEnd = () => setPressedIndex(null)

  return (
    <section id="experiencia" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorativo leve */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-28 h-28 bg-teal-100/30 rounded-full animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-100/30 rounded-full animate-bounce-gentle" />
      </div>

      <div className="container mx-auto px-8">
        {/* Título e descrição */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Experiências Acadêmicas</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Aplicando meus conhecimentos em fisioterapia através de liderança, colaboração e projetos comunitários.
          </p>
        </div>

        {/* Cards de experiência */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              // hover para desktop + pressed state para mobile/touch
              className={`relative group border border-gray-200 rounded-xl p-6 shadow-sm transition-all duration-500 bg-white
                hover:shadow-[0_10px_20px_rgba(112,130,56,0.6)] hover:scale-105
                active:shadow-[0_10px_20px_rgba(112,130,56,0.6)] active:scale-105
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                ${pressedIndex === index ? "shadow-[0_10px_20px_rgba(112,130,56,0.6)] scale-105" : ""}`}
              style={{
                transitionDelay: `${index * 0.15}s`,
                WebkitTapHighlightColor: "transparent",
                touchAction: "manipulation",
              }}
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
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="w-14 h-14 bg-teal-90 rounded-xl flex items-center justify-center flex-shrink-0">
                    <exp.icon className="h-6 w-6 text-teal-10" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="font-semibold text-lg text-gray-800">{exp.title}</h3>
                      <div className="flex items-center text-sm text-gray-400 mt-1 md:mt-0">
                        <Clock className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center text-gray-500 font-medium mb-3 gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4">{exp.description}</p>

                    {/* Botões estilo OKLCH */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <button
                          key={idx}
                          style={{ backgroundColor: "oklch(0.45 0.07 110)", color: "#fff" }}
                          className="inline-block px-4 py-1.5 text-xs font-medium rounded-full hover:brightness-90 transition duration-200"
                        >
                          {highlight}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}