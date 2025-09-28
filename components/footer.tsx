"use client"

import { Linkedin, Instagram, Mail, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Botão lateral fixo no canto inferior direito */}
      <button
        onClick={scrollToTop}
        className="fixed right-4 bottom-4 w-12 h-12 bg-lime-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-lime-700 transition-colors z-50"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <footer
        className="relative pt-16 pb-8 overflow-hidden"
        style={{
          background: "linear-gradient(to top, #ffffffcc, #f9fafb)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Linha decorativa */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-lime-600/20 via-lime-400/20 to-lime-600/20"></div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          {/* Nome, profissão e redes sociais */}
          <div className="text-center md:text-left">
            <p
              className="font-bold text-lg"
              style={{ color: "oklch(0.45 0.07 110)" }}
            >
              Weslânnya Barros
            </p>
            <p className="text-sm text-gray-600 mb-4">Estudante de Fisioterapia</p>

            <div className="flex gap-4">
              <a
                href="mailto:fisioweslannyab@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400/50 text-gray-700 
                  hover:text-lime-700 hover:border-lime-600 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/fisioweslannyabarros/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400/50 text-gray-700 
                  hover:text-lime-700 hover:border-lime-600 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/wesl%C3%A2nnya-barros/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400/50 text-gray-700 
                  hover:text-lime-700 hover:border-lime-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Direitos autorais */}
          <div className="text-center md:text-right text-xs leading-relaxed text-gray-700">
            <p>
              © {new Date().getFullYear()} Weslânnya Barros. Todos os direitos reservados.
            </p>
            <p>
              Desenvolvido por{" "}
              <a
                href="https://evertonvictor-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-700 font-medium hover:underline"
              >
                Everton Victor
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}