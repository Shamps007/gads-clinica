import { MessageCircle } from "lucide-react"

export function Response() {
  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="max-w-2xl mx-auto bg-[#39FF14]/5 border border-[#39FF14]/20 rounded-2xl p-6 flex gap-4">
        <div className="shrink-0">
          <div className="w-12 h-12 rounded-full bg-black border border-[#39FF14]/30 flex items-center justify-center">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-[#39FF14]" />
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-1">Resposta do Proprietário</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Agradecemos imensamente a confiança! Nosso compromisso é sempre entregar resultados reais e transparentes para nossos parceiros em Florianópolis e região. Vamos juntos para o próximo nível! 🚀
          </p>
        </div>
      </div>
    </div>
  )
}
