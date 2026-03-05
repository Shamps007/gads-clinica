import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { Loader2, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "neon"
  size?: "sm" | "md" | "lg"
  isLoading?: boolean
  icon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, icon, children, ...props }, ref) => {
    
    const variants = {
      primary: "bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600 bg-[length:200%_100%] text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 border-none",
      secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10",
      outline: "bg-transparent border border-white/20 text-white hover:bg-white/5",
      ghost: "bg-transparent text-white hover:bg-white/5",
      neon: "bg-[#39FF14] text-black hover:bg-[#32e612] shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_40px_rgba(57,255,20,0.5)] border-none font-bold tracking-wide",
    }

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-12 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    }

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39FF14] disabled:pointer-events-none disabled:opacity-50 overflow-hidden group",
          variants[variant],
          sizes[size],
          className
        )}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        animate={variant === 'primary' ? { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } : {}}
        transition={variant === 'primary' ? { 
          backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
          scale: { type: "spring", stiffness: 400, damping: 17 }
        } : { type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {!isLoading && (icon || ((variant === 'primary' || variant === 'neon') && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />))}
        </span>
      </motion.button>
    )
  }
)
Button.displayName = "Button"

export { Button }
