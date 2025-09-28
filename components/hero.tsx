"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowDown,
  Mail,
  Linkedin,
  Instagram,
  BookOpen,
} from "lucide-react"
import { useEffect, useState } from "react"
import { TypeAnimation } from "react-type-animation"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden"
      id="hero"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Texto principal */}
          <div
            className={`space-y-6 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="space-y-3 text-center lg:text-left">
              {/* Tag superior */}
              <div className="flex justify-center lg:justify-start items-center gap-2 text-primary mb-2 text-xs sm:text-sm">
                <BookOpen className="h-4 w-4" />
                <span>2º Período • Fisioterapia</span>
              </div>

             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-center lg:text-left">
  <span className="text-foreground block">Olá, eu sou</span>
  <span className="text-primary block">Weslânnya Barros</span>
</h1>

              {/* Texto com efeito de digitação */}
           <TypeAnimation
  sequence={[
    "Estudante de Fisioterapia",
    2000,
    "Apaixonada por Reabilitação",
    2000,
    "Explorando o movimento humano",
    2000,
  ]}
  wrapper="p"
  className="text-lg sm:text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-primary/100 to-accent/100 bg-clip-text text-transparent"
  speed={50}
  repeat={Infinity}
/>


              {/* Descrição */}
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                Apaixonada pelo movimento humano e dedicada aos estudos em
                reabilitação. Explorando as bases científicas da fisioterapia
                com foco em anatomia, fisiologia e cuidado humanizado.
              </p>
            </div>

            {/* Botões principais */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("contato")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105"
              >
                <Mail className="mr-2 h-4 w-4" />
                Vamos Conversar
              </Button>
             <Button
  variant="outline"
  size="lg"
  onClick={() => scrollToSection("sobre")}
  className="border-primary/40 text-primary/80 hover:bg-primary/10 hover:text-primary transition-transform hover:scale-105"
>
  Minha Jornada
  <ArrowDown className="ml-2 h-4 w-4" />
</Button>
            </div>

            {/* Redes sociais com verde oliva elegante */}
<div className="flex gap-4 justify-center lg:justify-start mt-4">
  <a
    href="https://www.linkedin.com/in/wesl%C3%A2nnya-barros/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full border border-[#6B8E23]/50 text-[#6B8E23] 
               hover:bg-[#6B8E23]/20 hover:text-[#556B2F] transition-colors duration-300"
    title="LinkedIn"
  >
    <Linkedin className="h-5 w-5" />
  </a>

  <a
    href="https://www.instagram.com/fisioweslannyabarros/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full border border-[#6B8E23]/50 text-[#6B8E23] 
               hover:bg-[#6B8E23]/20 hover:text-[#556B2F] transition-colors duration-300"
    title="Instagram"
  >
    <Instagram className="h-5 w-5" />
  </a>

  <a
    href="mailto:fisioweslannyab@gmail.com"
    className="w-10 h-10 flex items-center justify-center rounded-full border border-[#6B8E23]/50 text-[#6B8E23] 
               hover:bg-[#6B8E23]/20 hover:text-[#556B2F] transition-colors duration-300"
    title="Email"
  >
    <Mail className="h-5 w-5" />
  </a>
</div>
          </div>

          {/* Foto + efeito + tags fixas */}
          <div
            className={`relative ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative mx-auto max-w-[280px] sm:max-w-sm md:max-w-md group">
              {/* Efeito de brilho mais suave */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-300/10 to-emerald-400/10 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[1deg] group-hover:shadow-[0_0_15px_2px_rgba(45,212,191,0.3)]">
                <img
                  src="/weslannyab.jpg"
                  alt="Weslânnya Barros - Estudante de Fisioterapia"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}