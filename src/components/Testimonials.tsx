import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Ricardo Mendes",
      role: "Diretor Comercial",
      content: "A GADS revolucionou nossa captação de leads. Em 3 meses, dobramos nosso faturamento com um ROI incrível. A equipe é extremamente técnica e atenciosa.",
      rating: 5,
    },
    {
      name: "Ana Paula Souza",
      role: "Proprietária de Clínica de Estética",
      content: "Eu já tinha tentado fazer tráfego sozinha e só perdi dinheiro. Com a GADS, minha agenda lotou na primeira semana. O suporte deles é diferenciado.",
      rating: 5,
    },
    {
      name: "Felipe Costa",
      role: "CEO de E-commerce",
      content: "Profissionalismo define. Relatórios transparentes, otimizações constantes e resultados que aparecem no caixa da empresa. Recomendo de olhos fechados.",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-[#000000] relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            O que nossos <span className="text-[#39FF14] drop-shadow-[0_0_10px_rgba(57,255,20,0.3)]">parceiros</span> dizem
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
            Histórias reais de negócios que escalaram seus resultados com nossa metodologia de tráfego pago.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] hover:border-[#39FF14]/40 hover:bg-white/10 transition-all duration-500 group relative"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-white/5 group-hover:text-[#39FF14]/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#39FF14] fill-[#39FF14] drop-shadow-[0_0_5px_rgba(57,255,20,0.5)]" />
                ))}
              </div>
              
              <p className="text-white/80 mb-8 text-lg leading-relaxed font-light italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#39FF14] to-emerald-600 flex items-center justify-center text-black font-bold text-xl shadow-[0_0_15px_rgba(57,255,20,0.3)]">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-[#39FF14] font-medium uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
