"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";

interface IndustrialInteractionProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function IndustrialInteraction({
  children,
  className = "",
  onClick,
}: IndustrialInteractionProps) {
  return (
    <motion.div
      className={`group relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 cursor-pointer ${className}`}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      variants={{
        hover: { scale: 1 },
        tap: { scale: 0.98 },
      }}
      transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
    >
      {/* Metallic highlight overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 mix-blend-overlay pointer-events-none"
        variants={{
          hover: { opacity: 1, x: ["-100%", "100%"] },
        }}
        transition={{ duration: 1, ease: "linear" }}
      />
      
      <div className="relative z-10 flex items-center w-full justify-center">
        {children}
        
        {/* Engineering Micro-interaction (Hex Bolt) */}
        <motion.div
          className="ml-3 flex-shrink-0 text-current opacity-70"
          variants={{
            hover: { rotate: 90 },
          }}
          transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
        >
          <Hexagon className="w-4 h-4 fill-current" />
        </motion.div>
      </div>
    </motion.div>
  );
}
