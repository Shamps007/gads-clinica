import { Instagram, Mail, MessageCircle, MapPin, Facebook } from "lucide-react"
import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-24 pb-12 text-white relative overflow-hidden">
      {/* Premium Glass/Metal Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#39FF14]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Identity */}
          <div className="space-y-8">
            <Logo className="w-64 h-24" showText={false} />
            <p className="text-white/60 text-sm leading-relaxed font-medium italic">
              "Não é marketing, é estrutura de crescimento."
            </p>
            <div className="flex items-center gap-5">
              <a 
                href="https://www.instagram.com/gadsagencialocal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 shadow-sm border border-white/10 flex items-center justify-center text-[#39FF14] hover:scale-110 hover:bg-[#39FF14]/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contato@gadsnegociosdigitais.com.br" 
                className="w-10 h-10 rounded-full bg-white/5 shadow-sm border border-white/10 flex items-center justify-center text-[#39FF14] hover:scale-110 hover:bg-[#39FF14]/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61580066617531" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 shadow-sm border border-white/10 flex items-center justify-center text-[#39FF14] hover:scale-110 hover:bg-[#39FF14]/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-bold mb-8 text-base uppercase tracking-widest">Links Rápidos</h4>
            <ul className="space-y-4 text-white/60 text-sm font-semibold">
              <li>
                <a href="#hero" className="hover:text-[#39FF14] transition-colors duration-300">Início</a>
              </li>
              <li>
                <a href="#deliverables" className="hover:text-[#39FF14] transition-colors duration-300">Especialidades</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#39FF14] transition-colors duration-300">Resultados</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#39FF14] transition-colors duration-300">Localização</a>
              </li>
              <li>
                <a href="#contact" className="text-[#39FF14] font-bold hover:underline underline-offset-4 transition-all">Agendar Consulta</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-bold mb-8 text-base uppercase tracking-widest">Contato Directo</h4>
            <ul className="space-y-6 text-white/60 text-sm font-semibold">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 shadow-md border border-white/10 flex items-center justify-center text-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-black transition-all">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <a href="https://wa.me/5548984851989" className="group-hover:text-[#39FF14] transition-colors">(48) 98485-1989</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 shadow-md border border-white/10 flex items-center justify-center text-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-black transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:contato@gadsnegociosdigitais.com.br" className="group-hover:text-[#39FF14] transition-colors break-all">
                  contato@gadsnegociosdigitais.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Location */}
          <div>
            <h4 className="text-white font-bold mb-8 text-base uppercase tracking-widest">Onde Estamos</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-white/60 text-sm font-semibold leading-relaxed">
                <div className="w-10 h-10 rounded-xl bg-white/5 shadow-md border border-white/10 flex items-center justify-center shrink-0 text-[#39FF14]">
                  <MapPin className="w-5 h-5" />
                </div>
                <p>
                  Rodovia Dr. Antônio Luiz Moura Gonzaga, 3339 - Rio Tavares, Florianópolis - SC, 88048-301
                </p>
              </div>
              
              {/* Stylized Map Inset */}
              <div className="w-full h-32 rounded-2xl bg-black border border-white/10 overflow-hidden relative shadow-inner group cursor-pointer">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/floripa/400/200')] bg-cover bg-center grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-4 h-4 bg-[#39FF14] rounded-full shadow-[0_0_15px_#39FF14] animate-bounce" />
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-1 bg-white/20 rounded-full blur-[2px]" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-3 bg-black/90 backdrop-blur-md px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-tighter text-white border border-white/10">
                  Rio Tavares, Floripa
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <p className="text-white/40 text-[11px] tracking-wider uppercase font-bold">
            &copy; 2026 GADS Negócios Digitais. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[11px] text-white/40 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-[#39FF14] transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-[#39FF14] transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-[#39FF14] transition-colors">Conformidade LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
