"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import IndustrialInteraction from "@/components/ui/IndustrialInteraction";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Limit parallax movement to roughly 30px (subtle)
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "30px"]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background Image with subtle Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Premium Industrial Hardware"
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-overlay"
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-charcoal/90" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            <p className="text-industrial-red font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-6 flex items-center">
              <span className="w-12 h-px bg-industrial-red mr-4 inline-block"></span>
              ESTABLISHED {companyInfo.established} &middot; MADURAI
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-off-white uppercase leading-[0.9] tracking-tight mb-8"
          >
            Built on Trust.<br />
            <span className="text-steel-light">Proven Through<br />Generations.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="text-steel-light text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
          >
            Professional hardware, fasteners, tools and industrial supplies from a business serving Madurai since 1977. Authority built on decades of professional service.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link href="/products" className="block sm:w-auto">
              <IndustrialInteraction className="bg-industrial-red hover:bg-industrial-red-hover text-off-white px-8 py-4 uppercase tracking-widest font-bold text-sm w-full sm:w-auto">
                Explore Products
              </IndustrialInteraction>
            </Link>
            
            <Link href="/contact" className="block sm:w-auto">
              <IndustrialInteraction className="border border-steel/50 hover:border-off-white hover:bg-off-white/5 text-off-white px-8 py-4 uppercase tracking-widest font-bold text-sm w-full sm:w-auto text-center">
                Visit Our Store
              </IndustrialInteraction>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
