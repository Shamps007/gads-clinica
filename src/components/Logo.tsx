import React from "react"

export const Logo = ({ className = "w-12 h-12", showText = false, lightText = false }: { className?: string, showText?: boolean, lightText?: boolean }) => (
  <div className="flex items-center gap-3">
    <img 
      src="/logo-gads.png" 
      alt="GADS Logo" 
      className={`${className} object-contain block`}
    />
    {showText && (
      <div className="flex flex-col">
        <span className={`font-sans font-bold text-2xl tracking-wider leading-none ${lightText ? 'text-white' : 'text-black'}`}>
          GADS
        </span>
        <span className={`font-sans text-[0.6rem] tracking-[0.2em] uppercase leading-none mt-1 font-light ${lightText ? 'text-white/60' : 'text-black/60'}`}>
          Negócios Digitais
        </span>
      </div>
    )}
  </div>
)
