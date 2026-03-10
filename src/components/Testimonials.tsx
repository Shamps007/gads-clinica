import { Star, Quote } from "lucide-react"
import { motion } from "motion/react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Roberto Almeida",
      role: "Cirurgião Plástico",
      content: "A GADS transformou a captação da minha clínica. Em 2 meses, triplicamos o número de consultas particulares. O nível de qualificação dos pacientes é impressionante.",
      rating: 5,
    },
    {
      name: "Dra. Camila Fernandes",
      role: "Dermatologista",
      content: "Eu dependia muito de indicações, mas com a GADS, minha agenda lotou com pacientes de alto ticket. O suporte da equipe e a transparência nos relatórios são fantásticos.",
      rating: 5,
    },
    {
      name: "Dr. Marcos Silva",
      role: "Ortopedista",
      content: "Profissionalismo define. Otimizações constantes e resultados que aparecem no faturamento da clínica. Recomendo de olhos fechados para qualquer colega médico.",
      rating: 5,
    },
    {
      name: "Dra. Juliana Costa",
      role: "Odontologista Especialista",
      content: "Nunca vi um retorno sobre investimento tão rápido. A estratégia focada em tratamentos de alto valor mudou o patamar do meu consultório.",
      rating: 5,
    },
    {
      name: "Dr. Thiago Mendes",
      role: "Diretor de Clínica Médica",
      content: "A previsibilidade que a GADS trouxe para a nossa clínica é absurda. Sabemos exatamente quantos pacientes novos vão entrar toda semana.",
      rating: 5,
    },
  ]

  // Duplicate the array to create a seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-24 bg-[#000000] relative z-10 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            O que nossos <span className="text-[#39FF14] drop-shadow-[0_0_10px_rgba(57,255,20,0.3)]">doutores</span> dizem
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
            Histórias reais de profissionais da saúde que escalaram seus consultórios com nossa metodologia.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="w-[300px] md:w-[450px] shrink-0 bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] hover:border-[#39FF14]/40 hover:bg-white/10 transition-all duration-500 group relative"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-white/5 group-hover:text-[#39FF14]/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#39FF14] fill-[#39FF14] drop-shadow-[0_0_5px_rgba(57,255,20,0.5)]" />
                ))}
              </div>
              
              <p className="text-white/80 mb-8 text-base md:text-lg leading-relaxed font-light italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#39FF14] to-emerald-600 flex items-center justify-center text-black font-bold text-xl shadow-[0_0_15px_rgba(57,255,20,0.3)] shrink-0">
                  {testimonial.name.replace('Dr. ', '').replace('Dra. ', '').charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-[#39FF14] font-medium uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
