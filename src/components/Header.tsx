import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Logo } from "./Logo"
import { Button } from "./ui/Button"
import { motion, AnimatePresence } from "motion/react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: "Início", href: "#hero" },
    { label: "Entrega", href: "#deliverables" },
    { label: "Resultados", href: "#services" },
    { label: "Localização", href: "#location" },
  ]

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div className="bg-black/60 backdrop-blur-3xl border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo className="w-64 h-24" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-bold text-white/60 hover:text-[#39FF14] transition-all duration-300 uppercase tracking-[0.2em] text-[0.65rem] hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
            >
              <Button variant="neon" size="sm" className="shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_35px_rgba(57,255,20,0.6)] font-bold uppercase tracking-widest text-[0.65rem] px-6">
                Contato
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-[#39FF14] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:hidden shadow-2xl pointer-events-auto"
          >
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-gray-300 hover:text-[#39FF14] transition-colors text-center py-2 border-b border-white/5 last:border-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="neon" className="w-full">
                  Contato
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
