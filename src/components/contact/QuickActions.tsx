"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MapPin, Mail, PackageSearch } from "lucide-react";
import IndustrialInteraction from "@/components/ui/IndustrialInteraction";

export default function QuickActions() {
  return (
    <section className="py-8 bg-charcoal border-b border-steel/20">
      <div className="container mx-auto px-4 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          
          <Link href="tel:+919443364059" className="w-full">
            <IndustrialInteraction className="w-full bg-industrial-red text-off-white hover:bg-industrial-red-hover p-4 flex flex-col items-center justify-center text-center space-y-2 border border-transparent group">
              <Phone className="w-6 h-6 mb-1 opacity-90 group-hover:scale-110 transition-transform" />
              <span className="font-heading uppercase tracking-widest text-xs font-bold">Call Now</span>
            </IndustrialInteraction>
          </Link>

          <Link href="https://maps.app.goo.gl/qruyoFsn6QoSSXwy6" target="_blank" rel="noopener noreferrer" className="w-full">
            <IndustrialInteraction className="w-full bg-near-black text-off-white hover:border-steel p-4 flex flex-col items-center justify-center text-center space-y-2 border border-steel/20 group">
              <MapPin className="w-6 h-6 mb-1 text-industrial-red opacity-90 group-hover:scale-110 transition-transform" />
              <span className="font-heading uppercase tracking-widest text-xs font-bold">Directions</span>
            </IndustrialInteraction>
          </Link>

          <a href="mailto:stnmdu@gmail.com" aria-label="Send an email to ST Natarajan & Sons" className="w-full block">
            <IndustrialInteraction className="w-full bg-white text-charcoal hover:border-industrial-red p-4 flex flex-col items-center justify-center text-center space-y-2 border border-steel/20 group">
              <Mail className="w-6 h-6 mb-1 text-industrial-red opacity-90 group-hover:scale-110 transition-transform" />
              <span className="font-heading uppercase tracking-widest text-xs font-bold">Email Us</span>
            </IndustrialInteraction>
          </a>

          <Link href="/products" className="w-full">
            <IndustrialInteraction className="w-full bg-[#f4f5f7] text-charcoal hover:bg-charcoal hover:text-off-white p-4 flex flex-col items-center justify-center text-center space-y-2 border border-transparent group transition-colors duration-300">
              <PackageSearch className="w-6 h-6 mb-1 opacity-90 group-hover:scale-110 transition-transform" />
              <span className="font-heading uppercase tracking-widest text-xs font-bold">Products</span>
            </IndustrialInteraction>
          </Link>

        </motion.div>
      </div>
    </section>
  );
}
