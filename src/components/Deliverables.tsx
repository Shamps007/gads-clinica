import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function Deliverables() {
  const items = [
    "Estruturação estratégica do Google",
    "Ajustes ou criação de site de conversão",
    "Estrutura completa de tráfego pago",
    "Implantação de CRM",
    "Organização do funil de vendas",
    "Capacitação comercial da equipe"
  ]

  return (
    <section id="deliverables" className="py-20 bg-[#000000] relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#39FF14] font-mono text-sm uppercase tracking-[0.3em] mb-4 opacity-80">
              Não é marketing, é estrutura de crescimento.
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              O que está <span className="text-[#39FF14] drop-shadow-[0_0_10px_rgba(57,255,20,0.3)]">incluso</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              "Estruturação estratégica do Google",
              "Ajustes ou criação de site de conversão",
              "Estrutura completa de tráfego pago",
              "Implantação de CRM",
              "Organização do funil de vendas",
              "Capacitação comercial da equipe",
              "Definição de metas e indicadores",
              "Ajustes estratégicos semanais"
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-[#39FF14]/40 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#39FF14]/10 flex items-center justify-center border border-[#39FF14]/20 group-hover:bg-[#39FF14]/20 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#39FF14]" />
                </div>
                <span className="text-white/90 text-lg font-light">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
