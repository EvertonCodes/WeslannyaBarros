"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen, Target, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [pressedIndex, setPressedIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )

    const element = document.getElementById("sobre")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: Heart,
      title: "Paixão pelo Cuidar",
      description:
        "Acredito no cuidado humanizado, valorizando a empatia e o acolhimento de cada paciente.",
    },
    {
      icon: BookOpen,
      title: "Aprendizado Contínuo",
      description:
        "Busco conhecimento constante para aprimorar minha prática clínica e oferecer o melhor.",
    },
    {
      icon: Users,
      title: "Trabalho em Equipe",
      description:
        "Valorizo a troca de experiências e o aprendizado colaborativo com colegas e profissionais.",
    },
    {
      icon: Target,
      title: "Foco e Dedicação",
      description:
        "Comprometida com excelência acadêmica e prática, construindo uma base sólida na fisioterapia.",
    },
  ]

  const handlePressStart = (idx: number) => () => setPressedIndex(idx)
  const handlePressEnd = () => setPressedIndex(null)

  return (
    <section
      id="sobre"
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-20 w-28 h-28 bg-primary/10 rounded-full animate-pulse-soft" />
        <div className="absolute bottom-16 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float" />
      </div>

      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary animate-bounce-gentle" />
            <h2 className="text-4xl font-bold text-gray-800">Sobre Mim</h2>
            <Sparkles className="h-6 w-6 text-primary animate-bounce-gentle" />
          </div>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Fui aprovada em{" "}
            <span className="text-primary font-semibold">
              1º lugar no Prouni
            </span>{" "}
            e agora sou estudante de Fisioterapia na Uninassau – Boa Viagem. Fascinada pelo movimento humano, acredito que cada gesto pode transformar vidas. Minha jornada está apenas começando, explorando anatomia, fisiologia e técnicas que unem ciência e cuidado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              // mantemos hover para desktop e adicionamos estado pressed para mobile
              className={`group text-center border border-gray-200/20 rounded-2xl backdrop-blur-md glass-effect p-6
                transition-transform duration-500
                hover:shadow-[0_10px_20px_rgba(112,130,56,0.6)] hover:scale-105
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              ${pressedIndex === index ? "shadow-[0_10px_20px_rgba(112,130,56,0.6)] scale-105" : ""}`}
              style={{
                transitionDelay: `${index * 0.1}s`,
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
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-800 text-lg">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}