import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-6 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col gap-4">
            <p className="text-white/60 text-xs leading-relaxed font-light">
              Nós utilizamos cookies para melhorar sua experiência e personalizar anúncios. Ao continuar, você concorda com nossa <span className="text-[#39FF14] cursor-pointer hover:underline">Política de Privacidade</span>.
            </p>
            <div className="flex items-center justify-end gap-6">
              <button 
                className="text-white/30 text-[10px] uppercase tracking-widest hover:text-white transition-colors font-bold"
              >
                Preferências
              </button>
              <button
                onClick={handleAccept}
                className="bg-[#39FF14] text-black font-black text-[10px] uppercase tracking-[0.2em] px-8 py-3 rounded-full hover:bg-[#32e612] transition-all shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)]"
              >
                Aceitar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
