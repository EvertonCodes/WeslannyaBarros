"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import emailjs from "emailjs-com"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isVisible, setIsVisible] = useState(false)
  const [pressedIndex, setPressedIndex] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false) // ✅ Estado de carregamento

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )

    const element = document.getElementById("contato")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handlePressStart = (idx: number) => () => setPressedIndex(idx)
  const handlePressEnd = () => setPressedIndex(null)

  // 🔥 handleSubmit com EmailJS e spinner
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true) // Inicia o carregamento

    emailjs
      .send(
        "service_p5k7dvn",
        "template_96y2qgp",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "4YPfKkPsv41P65REF"
      )
      .then(() => {
        alert("✅ Mensagem enviada com sucesso!")
        setFormData({ name: "", email: "", subject: "", message: "" })
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error)
        alert("❌ Erro ao enviar a mensagem.")
      })
      .finally(() => setIsLoading(false)) // Para o carregamento
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "fisioweslannyab@gmail.com",
      link: "mailto:fisioweslannyab@gmail.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(81) 98922-4756",
      link: "tel:+5581989224756",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Cabo de Santo Agostinho, PE",
      link: null,
    },
  ]

  return (
    <section
      id="contato"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-20 w-28 h-28 bg-primary/10 rounded-full animate-pulse-soft" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/10 rounded-full animate-float" />
      </div>

      <div className="container mx-auto px-4">
        {/* Título */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Entre em Contato</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Estou sempre aberta para discutir oportunidades de estágio, colaborações em
            pesquisa ou simplesmente trocar conhecimentos sobre fisioterapia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>

            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`glass-effect transition-transform duration-500
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
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-500 hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-500">{info.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Formulário de Contato */}
          <Card
            className={`glass-effect p-6 transition-transform duration-500
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              hover:shadow-[0_10px_20px_rgba(112,130,56,0.6)] hover:scale-105
              ${pressedIndex === 999 ? "shadow-[0_10px_20px_rgba(112,130,56,0.6)] scale-105" : ""}`}
            style={{ transitionDelay: "0.45s" }}
            onPointerDown={handlePressStart(999)}
            onPointerUp={handlePressEnd}
            onPointerCancel={handlePressEnd}
            onPointerLeave={handlePressEnd}
            onTouchStart={handlePressStart(999)}
            onTouchEnd={handlePressEnd}
            onTouchCancel={handlePressEnd}
            onFocus={() => setPressedIndex(999)}
            onBlur={handlePressEnd}
            tabIndex={0}
          >
            <CardContent>
              <h3 className="text-xl font-semibold mb-6">Envie uma Mensagem</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Assunto da mensagem"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escreva sua mensagem aqui..."
                    rows={5}
                    required
                  />
                </div>

                {/* Botão com spinner */}
                <Button
                  type="submit"
                  className="w-full flex items-center justify-center"
                  disabled={isLoading} // desativa enquanto carrega
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3 3 3h-4z"
                      ></path>
                    </svg>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" /> Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}