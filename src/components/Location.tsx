import { MapPin, ExternalLink } from "lucide-react"

export function Location() {
  const mapUrl = "https://www.google.com/maps/dir//Rod.+Dr.+Ant%C3%B4nio+Luiz+Moura+Gonzaga,+3339+-+Rio+Tavares,+Florian%C3%B3polis+-+SC,+88048-301/@-27.6359556,-48.4842169,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95273ea6a32d665d:0x6295304752630560!2m2!1d-48.481642!2d-27.6359556?entry=ttu"

  return (
    <section id="location" className="py-24 bg-black relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossa Sede em Florianópolis
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <MapPin className="text-[#39FF14] w-5 h-5" />
            <p className="text-sm md:text-base">Rodovia Dr. Antônio Luiz Moura Gonzaga, 3339 - Rio Tavares, Florianópolis - SC</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="group relative w-full h-[450px] rounded-3xl overflow-hidden border-4 border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#39FF14]/20">
            {/* Map Overlay Button */}
            <div className="absolute top-6 left-6 z-20">
              <a 
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold text-sm shadow-xl hover:bg-[#39FF14] hover:scale-105 transition-all duration-300"
              >
                <span>Abrir no Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Standard Light Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.275866763645!2d-48.48421692361665!3d-27.63595562915835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273ea6a32d665d%3A0x6295304752630560!2sRod.%20Dr.%20Ant%C3%B4nio%20Luiz%20Moura%20Gonzaga%2C%203339%20-%20Rio%20Tavares%2C%20Florian%C3%B3polis%20-%20SC%2C%2088048-301!5e0!3m2!1sen!2sbr!4v1709645823000!5m2!1sen!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              title="GADS Location"
              className="relative z-10"
            />
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-[10px] text-gray-500 uppercase tracking-widest font-medium">
            <span>Atalhos do teclado</span>
            <span className="w-1 h-1 bg-gray-800 rounded-full my-auto" />
            <span>Dados cartográficos ©2024 Google</span>
            <span className="w-1 h-1 bg-gray-800 rounded-full my-auto" />
            <span>Termos de Uso</span>
          </div>
        </div>
      </div>
    </section>
  )
}
