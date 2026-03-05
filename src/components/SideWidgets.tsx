import { Instagram, Mail, MessageCircle, BarChart, MapPin } from "lucide-react"

export function SideWidgets() {
  return (
    <>
      {/* Right Contact Widget */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        <a 
          href="https://wa.me/5548984851989" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
          title="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a 
          href="https://www.instagram.com/gadsagencialocal/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-white/20 transition-all"
          title="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a 
          href="mailto:contato@gadsnegociosdigitais.com.br" 
          className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-white/20 transition-all"
          title="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Rodovia+Dr.+Antônio+Luiz+Moura+Gonzaga,+3339+-+Rio+Tavares,+Florianópolis+-+SC,+88048-301" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-white/20 transition-all"
          title="Onde Estamos"
        >
          <MapPin className="w-5 h-5" />
        </a>
      </div>

      {/* Left Cases Widget */}
      <div className="fixed left-4 bottom-8 z-50 hidden lg:block">
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] max-w-[200px]">
          <div className="flex items-center gap-2 mb-3 text-[#39FF14]">
            <BarChart className="w-4 h-4 drop-shadow-[0_0_5px_#39FF14]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Live Results</span>
          </div>
          <div className="space-y-2">
            <div className="h-16 bg-black/60 rounded-xl border border-white/10 flex items-center justify-center shadow-inner">
              <span className="text-2xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">ROI 10x</span>
            </div>
            <p className="text-[9px] text-white/40 text-center uppercase tracking-widest font-bold">
              Dermatologia Premium
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
