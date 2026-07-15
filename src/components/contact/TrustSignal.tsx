"use client";

import { motion } from "framer-motion";
import { ShieldCheck, History, Users, MapPin } from "lucide-react";

export default function TrustSignal() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="bg-white border-t border-b border-steel/20 py-8 mb-16"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x divide-steel/20">
          
          <div className="flex flex-col items-center justify-center text-center px-4 group">
            <History className="w-5 h-5 text-industrial-red mb-3 opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="font-heading uppercase tracking-widest text-xs font-bold text-charcoal">
              Established 1977
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-center px-4 group">
            <ShieldCheck className="w-5 h-5 text-industrial-red mb-3 opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="font-heading uppercase tracking-widest text-xs font-bold text-charcoal">
              Authorized Distributor<br/>Sundaram Fasteners
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-center px-4 group">
            <Users className="w-5 h-5 text-industrial-red mb-3 opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="font-heading uppercase tracking-widest text-xs font-bold text-charcoal">
              Family-Owned<br/>Business
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-center px-4 group">
            <MapPin className="w-5 h-5 text-industrial-red mb-3 opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="font-heading uppercase tracking-widest text-xs font-bold text-charcoal">
              Madurai<br/>Tamil Nadu
            </span>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
