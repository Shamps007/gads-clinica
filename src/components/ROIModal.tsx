import { useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, Users, DollarSign, ArrowRight, X, Zap } from "lucide-react"

export function ROIModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [investment, setInvestment] = useState(5000)
  const [ticket, setTicket] = useState(2500)

  const results = useMemo(() => {
    // Lógica: Pacientes = (Investimento / 3.5) * 0.12 * 0.20
    const patients = (investment / 3.5) * 0.12 * 0.20
    const revenue = patients * ticket
    const roi = investment > 0 ? (revenue / investment) : 0

    return {
      patients: Math.round(patients),
      revenue: revenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      roi: roi.toFixed(1)
    }
  }, [investment, ticket])

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Sticky Activation Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-[60] bg-black/60 backdrop-blur-xl border border-[#39FF14]/40 p-4 rounded-2xl shadow-[0_0_20px_rgba(57,255,20,0.2)] group flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-[#39FF14]/10 flex items-center justify-center border border-[#39FF14]/20 group-hover:bg-[#39FF14]/20 transition-colors">
          <Zap className="text-[#39FF14] w-5 h-5 drop-shadow-[0_0_8px_#39FF14]" />
        </div>
        <span className="text-white font-bold text-xs uppercase tracking-widest pr-2">Ver ROI Estimado</span>
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-[calc(100%-40px)] md:w-full max-w-4xl max-h-[85vh] md:max-h-[90vh] bg-[#0A0A0A]/90 backdrop-blur-3xl border border-[#39FF14]/30 rounded-3xl md:rounded-[2.5rem] shadow-[0_0_80px_rgba(57,255,20,0.15)] overflow-hidden flex flex-col mt-5 md:mt-0"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-md"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto w-full h-full flex-1">
                <div className="grid lg:grid-cols-2">
                  {/* Left: Inputs */}
                  <div className="p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
                    <div className="mb-8 md:mb-12 pr-12">
                      <h2 className="text-xl md:text-3xl font-bold text-white mb-2">Calculadora de ROI</h2>
                      <p className="text-[#39FF14] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">Estrutura de Crescimento GADS</p>
                      <p className="text-white/40 text-[8px] md:text-[9px] mt-2 md:mt-4 uppercase tracking-widest">Estimativas baseadas em CPC médio de R$ 3,50 (Saúde Brasil 2024)</p>
                    </div>

                    <div className="space-y-6 md:space-y-10">
                      <div className="space-y-4">
                        <div className="flex justify-between items-end">
                          <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/60">Investimento Mensal</label>
                          <span className="text-lg md:text-xl font-bold text-[#39FF14]">{investment.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        </div>
                        <input
                          type="range"
                          min="2000"
                          max="50000"
                          step="500"
                          value={investment}
                          onChange={(e) => setInvestment(Number(e.target.value))}
                          className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#39FF14]"
                        />
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-end">
                          <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/60">Ticket Médio</label>
                          <span className="text-lg md:text-xl font-bold text-[#39FF14]">{ticket.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        </div>
                        <input
                          type="range"
                          min="500"
                          max="20000"
                          step="100"
                          value={ticket}
                          onChange={(e) => setTicket(Number(e.target.value))}
                          className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#39FF14]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right: Results */}
                  <div className="p-6 md:p-12 bg-[#39FF14]/5 relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                      <TrendingUp size={150} className="text-[#39FF14]" />
                    </div>

                    <div className="space-y-6 md:space-y-8 relative z-10">
                      <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-white/40 mb-1">
                            <Users size={12} />
                            <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest">Novos Pacientes</span>
                          </div>
                          <p className="text-2xl md:text-3xl font-bold text-white">{results.patients}</p>
                          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.min((results.patients / 350) * 100, 100)}%` }}
                              className="h-full bg-[#39FF14] shadow-[0_0_10px_#39FF14]"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-white/40 mb-1">
                            <DollarSign size={12} />
                            <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest">Faturamento</span>
                          </div>
                          <p className="text-lg md:text-xl font-bold text-white">{results.revenue}</p>
                          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: '75%' }}
                              className="h-full bg-[#39FF14] shadow-[0_0_10px_#39FF14]"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 md:pt-8 border-t border-white/10">
                        <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-[#39FF14] block mb-2">ROI Final Estimado</span>
                        <p className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                          ROI <span className="text-[#39FF14]">{results.roi}x</span>
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        <div className="bg-black/40 p-2 md:p-3 rounded-xl border border-white/5">
                          <p className="text-[7px] md:text-[8px] text-white/30 uppercase tracking-widest mb-1">Novos Pacientes</p>
                          <p className="text-[#39FF14] font-bold text-xs md:text-sm">+340%</p>
                        </div>
                        <div className="bg-black/40 p-2 md:p-3 rounded-xl border border-white/5">
                          <p className="text-[7px] md:text-[8px] text-white/30 uppercase tracking-widest mb-1">Agenda Lotada</p>
                          <p className="text-white font-bold text-xs md:text-sm">98%</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 md:mt-10 relative z-10">
                      <a href="#contact" onClick={() => setIsOpen(false)}>
                        <button className="w-full bg-[#39FF14] text-black font-bold py-3 md:py-4 rounded-xl hover:bg-[#32e612] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] uppercase tracking-widest text-[9px] md:text-[10px]">
                          VALIDAR ESSA ESTRUTURA PARA MINHA CLÍNICA
                          <ArrowRight size={14} />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
