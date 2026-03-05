import { motion } from "motion/react";

export const Background = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#000000] overflow-hidden pointer-events-none">
      {/* Deep black background with subtle texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      
      {/* Emerald Green Neon Accents */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#50C878]/10 rounded-full blur-[120px]"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#39FF14]/5 rounded-full blur-[100px]"
        animate={{ 
          x: [0, -40, 0],
          y: [0, -20, 0],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#50C878]/5 to-transparent rounded-full blur-[150px]"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />

      {/* Subtle floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#50C878] rounded-full"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5
          }}
          animate={{ 
            y: [null, "-100vh"],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 10
          }}
        />
      ))}
    </div>
  );
};
