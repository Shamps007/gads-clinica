import { Star, CheckCircle } from "lucide-react"

const reviews = [
  {
    name: "Luciana",
    role: "Proprietária de Clínica",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    text: "A GADS transformou nossa captação de pacientes. O tráfego local realmente funciona!",
    date: "há 1 mês"
  },
  {
    name: "Lucas",
    role: "Empresário",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
    text: "Resultados impressionantes em pouco tempo. A equipe entende muito do mercado de Florianópolis.",
    date: "há 3 meses"
  },
  {
    name: "Demostenes",
    role: "Diretor Comercial",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    text: "Profissionalismo e transparência. Recomendo para quem quer escalar vendas.",
    date: "há 2 meses"
  }
]

export function Reviews() {
  return (
    <section className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-3 h-3 rounded-full bg-[#39FF14] animate-pulse" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Feed de Resultados Reais
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#39FF14]/30 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-xs text-gray-400">{review.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#39FF14] fill-[#39FF14]" />
                ))}
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-xs text-gray-500">{review.date}</span>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <CheckCircle className="w-3 h-3 text-blue-500" />
                  via Google Business Profile
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
