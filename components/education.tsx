"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen, Trophy, Calendar } from "lucide-react"
import { useEffect, useState } from "react"

export function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const [pressedIndex, setPressedIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )

    const element = document.getElementById("formacao")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const education = [
    {
      icon: GraduationCap,
      title: "Bacharelado em Fisioterapia",
      institution: "Uninassau",
      period: "2025 - 2029 (em andamento)",
      description:
           "Cursando Fisioterapia com foco em UTI, reabilitação e cuidado integral de pacientes críticos.",
      status: "Cursando",
      highlight: true,
    },
    {
      icon: BookOpen,
      title: "Curso de Primeiros Socorros",
      institution: "ETE Luiz Alves Lacerda",
      period: "2023",
      description: "Certificação básica em primeiros socorros, suporte à vida e aprendizado sobre saúde básica.",
      status: "Concluído",
    },
    {
      icon: Trophy,
      title: "Ensino Médio - Desenv. de Sistemas",
      institution: "ETE Luiz Alves Lacerda",
      period: "2021 - 2023",
      description:
        "Monitoria de Português e Biologia, com foco em colaboração, aprendizado contínuo e trabalho em equipe.",
      status: "Concluído - Redação 900/1000",
      highlight: false,
    },
  ]

  const handlePressStart = (idx: number) => () => setPressedIndex(idx)
  const handlePressEnd = () => setPressedIndex(null)

  return (
    <section
      id="formacao"
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-28 h-28 bg-primary/10 rounded-full animate-pulse-soft" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-accent/10 rounded-full animate-float" />
      </div>

      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Minha Jornada Acadêmica</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Cada passo da minha formação é uma descoberta. Estou construindo as bases do meu conhecimento com dedicação
            e entusiasmo para me tornar uma fisioterapeuta competente e humanizada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <Card
              key={index}
              className={`group relative border border-gray-100/50 rounded-2xl p-6 text-center bg-white/70 backdrop-blur-md shadow-sm transition-all duration-500
                hover:shadow-[0_10px_20px_rgba(112,130,56,0.6)] hover:scale-105
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
              {item.highlight && (
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium animate-pulse-soft shadow-md">
                  Atual
                </div>
              )}

              <CardContent className="p-0 flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="font-semibold text-gray-800 text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm font-medium mb-1">{item.institution}</p>
                <div className="flex items-center text-xs text-gray-400 mb-3 gap-1">
                  <Calendar className="h-3 w-3" />
                  {item.period}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.description}</p>
                <span
                  className={`inline-block px-3 py-1 text-xs rounded-full shadow-sm ${
                    item.highlight ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                  }`}
                >
                  {item.status}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}