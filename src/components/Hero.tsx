import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { Loader2, CheckCircle2, Send } from "lucide-react"

export function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    try {
      const formData = new FormData()
      Object.keys(data).forEach(key => formData.append(key, data[key]))

      await fetch("https://script.google.com/macros/s/AKfycbzg1CKzrFhA-P01TEiBwe26IJsrz74dbLQtcANIczFpEd68LN5BFDzpCqd-KDt6VrAr/exec", {
        method: "POST",
        body: formData,
        mode: "no-cors"
      })

      setIsSuccess(true)
      reset()
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#000000]">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#50C878]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#39FF14]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              Sua Clínica Pode Ter <span className="text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">Previsibilidade</span> de Pacientes Todos os Dias.
            </h1>
            <p className="text-xl text-white/90 mb-10 font-light max-w-xl leading-relaxed">
              A GADS estrutura um sistema inteligente de captação e conversão de pacientes particulares.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <a href="#contact">
                <button className="bg-[#39FF14] text-black font-bold px-8 py-4 rounded-xl hover:bg-[#32e612] transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] uppercase tracking-wider text-sm">
                  Quero Atrair Mais Pacientes
                </button>
              </a>
              <a href="#services">
                <button className="border border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 uppercase tracking-wider text-sm">
                  Ver Como Funciona
                </button>
              </a>
            </div>

            <div className="flex items-center gap-8 opacity-70">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">+500k</span>
                <span className="text-[0.6rem] uppercase tracking-widest text-white/60">Investidos</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">127</span>
                <span className="text-[0.6rem] uppercase tracking-widest text-white/60">Clínicas</span>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">24/7</span>
                <span className="text-[0.6rem] uppercase tracking-widest text-white/60">Suporte</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            id="contact"
          >
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/5 to-transparent opacity-30" />
              
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-[#39FF14]/20 rounded-full flex items-center justify-center mb-6 border border-[#39FF14]/30"
                  >
                    <CheckCircle2 className="w-10 h-10 text-[#39FF14] drop-shadow-[0_0_10px_#39FF14]" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Solicitação Enviada!</h3>
                  <p className="text-white/60">Em breve um de nossos especialistas entrará em contato.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-[#39FF14] hover:underline font-medium tracking-widest uppercase text-xs"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">Análise Estratégica Gratuita</h3>
                    <p className="text-white/40 text-xs uppercase tracking-widest">Preencha para começar</p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1.5 block ml-1 font-bold">Nome</label>
                        <input
                          {...register("nome", { required: true })}
                          placeholder="Seu nome"
                          className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#39FF14]/50 transition-all shadow-inner text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1.5 block ml-1 font-bold">WhatsApp</label>
                        <input
                          {...register("telefone", { required: true })}
                          placeholder="(00) 00000-0000"
                          className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#39FF14]/50 transition-all shadow-inner text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1.5 block ml-1 font-bold">Email Profissional</label>
                      <input
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        placeholder="seu@email.com"
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#39FF14]/50 transition-all shadow-inner text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1.5 block ml-1 font-bold">Clínica</label>
                        <input
                          {...register("clinica", { required: true })}
                          placeholder="Nome da Clínica"
                          className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#39FF14]/50 transition-all shadow-inner text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1.5 block ml-1 font-bold">Especialidade</label>
                        <input
                          {...register("especialidade", { required: true })}
                          placeholder="Ex: Dermatologia"
                          className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#39FF14]/50 transition-all shadow-inner text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1.5 block ml-1 font-bold">Funcionários</label>
                        <select
                          {...register("funcionarios", { required: true })}
                          className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#39FF14]/50 transition-all appearance-none shadow-inner text-sm"
                        >
                          <option value="" className="bg-zinc-900">Selecione...</option>
                          <option value="1-10" className="bg-zinc-900">1-10</option>
                          <option value="10-15" className="bg-zinc-900">10-15</option>
                          <option value="15-20" className="bg-zinc-900">15-20</option>
                          <option value="20+" className="bg-zinc-900">20+</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1.5 block ml-1 font-bold">Faturamento</label>
                        <select
                          {...register("faturamento", { required: true })}
                          className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#39FF14]/50 transition-all appearance-none shadow-inner text-sm"
                        >
                          <option value="" className="bg-zinc-900">Selecione...</option>
                          <option value="Até R$ 50k" className="bg-zinc-900">Até R$ 50k</option>
                          <option value="R$ 50k - R$ 100k" className="bg-zinc-900">R$ 50k - R$ 100k</option>
                          <option value="R$ 100k - R$ 500k" className="bg-zinc-900">R$ 100k - R$ 500k</option>
                          <option value="+ R$ 500k" className="bg-zinc-900">+ R$ 500k</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <input
                        type="checkbox"
                        id="consent-contact"
                        {...register("consent", { required: true })}
                        className="mt-1 w-4 h-4 rounded border-white/10 text-[#39FF14] focus:ring-[#39FF14] bg-black/60 accent-[#39FF14]"
                      />
                      <label htmlFor="consent-contact" className="text-[10px] text-white/30 leading-relaxed cursor-pointer font-medium">
                        Concordo em receber comunicações da GADS. Seus dados estão protegidos pela LGPD.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#39FF14] text-black font-bold py-4 rounded-xl hover:bg-[#32e612] transition-all duration-300 flex items-center justify-center gap-2 mt-4 group shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] uppercase tracking-widest text-xs"
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <>
                          QUERO CRESCER MINHA CLÍNICA
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Decorative Rings */}
            <div className="absolute -inset-4 border border-[#39FF14]/20 rounded-[3rem] -z-10 animate-pulse" />
            <div className="absolute -inset-12 border border-[#39FF14]/10 rounded-[4rem] -z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
