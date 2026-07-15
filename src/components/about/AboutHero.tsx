"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/data/company";
import IndustrialInteraction from "@/components/ui/IndustrialInteraction";

export default function AboutHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0px", "30px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-near-black pt-32 pb-24 border-b border-steel/10">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src="/images/metal-bolts.png"
          alt="Premium Industrial Heritage"
          fill
          priority
          className="object-cover object-center opacity-10 mix-blend-screen grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/80 to-near-black" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="mb-8 relative logo-sweep rounded-full overflow-hidden border border-steel/20 bg-white/5 p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center shrink-0 w-[116px] h-[116px] md:w-[140px] md:h-[140px]"
          >
            <Image 
              src="/images/stn-logo.png" 
              alt="S. T. Natarajan & Sons Official Logo" 
              width={100} 
              height={100} 
              className="object-contain w-full h-full"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-off-white uppercase leading-[1.1] tracking-tight mb-6">
              Built on Trust<br />
              <span className="text-steel-light">Since {companyInfo.established}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="text-steel-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Founded by Mr. S. T. Natarajan, we are a family-owned supplier of industrial fasteners and engineering hardware, serving Madurai with integrity and technical expertise for nearly five decades.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link href="/products" className="block w-full sm:w-auto">
              <IndustrialInteraction className="bg-industrial-red hover:bg-industrial-red-hover text-off-white px-8 py-4 uppercase tracking-widest font-bold text-sm w-full border border-transparent">
                Explore Products
              </IndustrialInteraction>
            </Link>
            
            <Link href="/contact" className="block w-full sm:w-auto">
              <IndustrialInteraction className="border border-steel/50 hover:border-steel hover:bg-white/5 text-off-white px-8 py-4 uppercase tracking-widest font-bold text-sm w-full">
                Visit Our Store
              </IndustrialInteraction>
            </Link>
          </motion.div>

        </div>
      </div>
      
      {/* Drafting Lines */}
      <div className="absolute left-0 bottom-0 w-full h-px bg-steel/10" />
      <div className="absolute left-8 top-0 bottom-0 w-px bg-steel/5 hidden md:block" />
      <div className="absolute right-8 top-0 bottom-0 w-px bg-steel/5 hidden md:block" />
    </section>
  );
}
