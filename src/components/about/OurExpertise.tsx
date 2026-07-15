"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const expertiseAreas = [
  { title: "Industrial Fasteners", image: "/images/metal-bolts.png" },
  { title: "Engineering Hardware", image: "/images/metal-screws.png" },
  { title: "Power Tool Accessories", image: "/images/drill-bits.png" },
  { title: "Cutting Tools", image: "/images/drill-bits.png" }, // Reusing drill bits for cutting tools visual
  { title: "Hand Tools", image: "/images/hand-tools.png" },
  { title: "Industrial Supplies", image: "/images/threaded-studs.png" },
];

export default function OurExpertise() {
  return (
    <section className="py-24 bg-charcoal text-off-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Certification Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mb-24 relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-red/10 via-industrial-red/5 to-transparent rounded-sm" />
          <div className="relative border-l-4 border-industrial-red bg-white/5 p-8 md:p-12 backdrop-blur-sm flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="flex-1 text-center md:text-left mb-6 md:mb-0 md:mr-8">
              <span className="text-industrial-red uppercase tracking-[0.3em] font-bold text-xs mb-3 block">
                Official Certification
              </span>
              <h3 className="font-heading text-2xl md:text-3xl uppercase tracking-wider mb-2">
                Authorized Distributor
              </h3>
              <p className="text-steel-light font-heading text-xl uppercase tracking-widest text-opacity-80">
                Sundaram Fasteners
              </p>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-industrial-red/30 flex items-center justify-center bg-near-black relative logo-sweep shrink-0">
              {/* Premium abstract badge representation */}
              <div className="absolute inset-2 border border-dashed border-steel/40 rounded-full animate-[spin_60s_linear_infinite]" />
              <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-industrial-red" />
            </div>
          </div>
        </motion.div>

        {/* Expertise Grid */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-tight mb-4">
            Our Expertise
          </h2>
          <div className="w-16 h-px bg-industrial-red md:mx-0 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-steel/20 border border-steel/20">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-charcoal group relative overflow-hidden flex flex-col aspect-square"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover opacity-20 mix-blend-overlay group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 ease-out animate-image-fade"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black via-charcoal/80 to-charcoal/50" />
              </div>
              
              <div className="relative z-10 flex flex-col justify-end h-full p-8">
                {/* Engineering accent */}
                <div className="w-4 h-4 border-l-2 border-t-2 border-industrial-red mb-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <h4 className="font-heading text-xl uppercase tracking-widest text-off-white group-hover:text-industrial-red transition-colors duration-300">
                  {area.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
