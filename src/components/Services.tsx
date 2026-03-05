import { TrendingUp, Map, BarChart3 } from "lucide-react"
import { motion } from "motion/react"

export function Services() {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#39FF14]" />,
      title: "Tráfego Pago (Ads)",
      description: "Campanhas de alta conversão no Google e Meta Ads focadas em ROI."
    },
    {
      icon: <Map className="w-8 h-8 text-[#39FF14]" />,
      title: "SEO Local & Maps",
      description: "Otimização do seu Perfil de Empresa no Google para dominar a busca local."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#39FF14]" />,
      title: "Consultoria de Vendas",
      description: "Análise de funil e processos comerciais para fechar mais leads."
    }
  ]

  return (
    <section id="services" className="py-24 bg-[#000000] relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[#39FF14] font-bold text-xl md:text-2xl mb-12 uppercase tracking-widest opacity-90 drop-shadow-[0_0_8px_rgba(57,255,20,0.3)]">
          Não é marketing, é estrutura de crescimento.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 hover:border-[#39FF14]/30 transition-all duration-500 group"
            >
              <div className="mb-6 bg-black/60 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#39FF14]/50 group-hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#39FF14] transition-colors">{service.title}</h3>
              <p className="text-white/60 leading-relaxed font-light">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
